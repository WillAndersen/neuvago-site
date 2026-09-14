'use strict';
// A bounded AST projection, not JavaScript execution or browser rendering.
// No imports from site modules are resolved or executed. Only TypeScript itself is loaded.
const fs = require('fs');
const req = JSON.parse(fs.readFileSync(0, 'utf8'));
const ts = require(req.typescript_module);
if (!Array.isArray(req.files) || req.files.length > 300) throw Error('Invalid file list');
function extract(file) {
  if (typeof file.text !== 'string' || file.text.length > 3000000) throw Error('Input too large');
  const sf = ts.createSourceFile(file.path, file.text, ts.ScriptTarget.Latest, true,
    file.path.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const line = n => sf.getLineAndCharacterOfPosition(n.getStart(sf)).line + 1;
  const errors = sf.parseDiagnostics.map(d => ({line: sf.getLineAndCharacterOfPosition(d.start || 0).line+1,
    message: ts.flattenDiagnosticMessageText(d.messageText, '\n')}));
  if (errors.length) return {path:file.path, status:'OPERATIONAL_ERROR', errors, roots:[], unresolved:[]};
  const decls = new Map(), cache = new Map(), resolving = new Set(), unresolved = [];
  function unknown(n, reason) { const u={__unknown:true,line:line(n),reason}; unresolved.push(u); return u; }
  const isUnknown = x => x && typeof x==='object' && x.__unknown===true;
  const own = (o,k) => o != null && Object.hasOwn(o,k);
  let operations=0;
  function value(n, env=Object.create(null), depth=0) {
    if (!n) return undefined;
    if (++operations>250000 || depth>100) throw Error('AST evaluation resource bound');
    const ev=x=>value(x,env,depth+1);
    if (ts.isParenthesizedExpression(n)||ts.isAsExpression(n)||ts.isSatisfiesExpression(n)||ts.isTypeAssertionExpression(n)||ts.isNonNullExpression(n)) return ev(n.expression);
    if (ts.isStringLiteral(n)||ts.isNoSubstitutionTemplateLiteral(n)) return n.text;
    if (ts.isNumericLiteral(n)) return Number(n.text);
    if(n.kind===ts.SyntaxKind.TrueKeyword)return true;
    if(n.kind===ts.SyntaxKind.FalseKeyword)return false;
    if(n.kind===ts.SyntaxKind.NullKeyword)return null;
    if(ts.isIdentifier(n)) {
      if (own(env,n.text)) return env[n.text];
      if (n.text==='undefined') return undefined;
      if(cache.has(n.text))return cache.get(n.text);
      if(!decls.has(n.text)||resolving.has(n.text))return unknown(n,'Unresolved identifier '+n.text);
      resolving.add(n.text);const v=value(decls.get(n.text),Object.create(null),depth+1);resolving.delete(n.text);cache.set(n.text,v);return v;
    }
    if(ts.isArrayLiteralExpression(n)) return n.elements.map(ev);
    if(ts.isObjectLiteralExpression(n)) {
      const o=Object.create(null);
      for(const prop of n.properties){
        if(!ts.isPropertyAssignment(prop)||!prop.name||ts.isComputedPropertyName(prop.name))return unknown(prop,'Unsupported object property');
        const k=prop.name.text; if(own(o,k))return unknown(prop,'Duplicate object key');o[k]=ev(prop.initializer);
      } return o;
    }
    if(ts.isPropertyAccessExpression(n)) {const o=ev(n.expression);return !isUnknown(o)&&own(o,n.name.text)?o[n.name.text]:unknown(n,'Unresolved property '+n.name.text);}
    if(ts.isTemplateExpression(n)) {
      let s=n.head.text;for(const span of n.templateSpans){const x=ev(span.expression);if(isUnknown(x)||typeof x==='object')return unknown(n,'Unresolved template');s+=String(x)+span.literal.text;}return s;
    }
    if(ts.isPrefixUnaryExpression(n)){const v=ev(n.operand);if(isUnknown(v))return v;
      if(n.operator===ts.SyntaxKind.ExclamationToken)return !v;if(n.operator===ts.SyntaxKind.MinusToken)return -v;return unknown(n,'Unsupported unary');}
    if(ts.isConditionalExpression(n)){const c=ev(n.condition);return isUnknown(c)?unknown(n,'Unresolved conditional'):ev(c?n.whenTrue:n.whenFalse);}
    if(ts.isBinaryExpression(n)) {
      const a=ev(n.left);if(isUnknown(a))return a;
      const op=n.operatorToken.kind;
      if(op===ts.SyntaxKind.AmpersandAmpersandToken)return a?ev(n.right):a;
      if(op===ts.SyntaxKind.BarBarToken)return a?a:ev(n.right);
      const b=ev(n.right);if(isUnknown(b))return b;
      if(op===ts.SyntaxKind.PlusToken&&(typeof a==='string'||typeof a==='number')&&(typeof b==='string'||typeof b==='number'))return a+b;
      if(op===ts.SyntaxKind.EqualsEqualsEqualsToken)return a===b;
      if(op===ts.SyntaxKind.ExclamationEqualsEqualsToken)return a!==b;
      return unknown(n,'Unsupported binary expression');
    }
    if(ts.isCallExpression(n)&&ts.isPropertyAccessExpression(n.expression)&&n.expression.name.text==='map') {
      const arr=ev(n.expression.expression),f=n.arguments[0];
      if(!Array.isArray(arr)||arr.length>1000||!f||!ts.isArrowFunction(f)||ts.isBlock(f.body))return unknown(n,'Unsupported map expression');
      if(f.parameters.some(p=>!ts.isIdentifier(p.name)))return unknown(n,'Unsupported map binding');
      return arr.map((v,i)=>{const e=Object.assign(Object.create(null),env);if(f.parameters[0])e[f.parameters[0].name.text]=v;if(f.parameters[1])e[f.parameters[1].name.text]=i;return value(f.body,e,depth+1);});
    }
    if(ts.isJsxElement(n)||ts.isJsxSelfClosingElement(n)||ts.isJsxFragment(n))return element(n,env,depth+1);
    return unknown(n,'Unsupported expression '+ts.SyntaxKind[n.kind]);
  }
  function element(n,env,depth){
    if(ts.isJsxFragment(n))return {tag:'fragment',attrs:{},children:children(n.children,env,depth),line:line(n),uncertain:false};
    const opening=ts.isJsxElement(n)?n.openingElement:n; let tag=opening.tagName.getText(sf);
    if(tag==='JsonLd')return {tag:'opaque-jsonld',attrs:{},children:[],line:line(n),uncertain:true};
    const attrs=Object.create(null);let uncertain=false;
    for(const a of opening.attributes.properties){
      if(!ts.isJsxAttribute(a)){unknown(a,'Spread attributes not supported');uncertain=true;continue;}
      const name=a.name.getText(sf);if(own(attrs,name)){unknown(a,'Duplicate JSX attribute');uncertain=true;continue;}
      let v=true;
      if(a.initializer) v=ts.isStringLiteral(a.initializer)?a.initializer.text:value(a.initializer.expression,env,depth+1);
      if(isUnknown(v)){uncertain=true;attrs[name]=null;}else attrs[name]=v;
    }
    if(tag==='Link')tag='a';
    else if(!/^[a-z][a-z0-9-]*$/.test(tag)){unknown(n,'Opaque component '+tag);uncertain=true;}
    return {tag,attrs,children:ts.isJsxElement(n)?children(n.children,env,depth+1):[],line:line(n),uncertain};
  }
  function children(ns,env,depth){
    const out=[];function add(v){if(v===undefined||v===null||v===false||v===true)return;
      if(Array.isArray(v)){v.forEach(add);return;}if(isUnknown(v)){out.push({tag:'unresolved',attrs:{},children:[],line:v.line,uncertain:true,reason:v.reason});return;}out.push(v);}
    for(const n of ns){if(ts.isJsxText(n))add(n.text);else if(ts.isJsxExpression(n)){if(n.expression)add(value(n.expression,env,depth+1));}else add(value(n,env,depth+1));}return out;
  }
  for(const s of sf.statements)if(ts.isVariableStatement(s))for(const d of s.declarationList.declarations)if(ts.isIdentifier(d.name))decls.set(d.name.text,d.initializer);
  let roots=[], control_flow_issues=[];
  for(const s of sf.statements)if(ts.isFunctionDeclaration(s)&&s.modifiers?.some(m=>m.kind===ts.SyntaxKind.DefaultKeyword)&&s.body){
    // CAL-03: do not select a later JSX return while ignoring a possible earlier exit.
    // This is deliberately not a JavaScript interpreter. Metadata initializer calls
    // remain opaque and are never executed. Other function statements are unsupported.
    const stmts=Array.from(s.body.statements);
    const returns=stmts.filter(ts.isReturnStatement);
    const allowed=stmt=>ts.isReturnStatement(stmt)||ts.isEmptyStatement(stmt)||
      (ts.isVariableStatement(stmt)&&(stmt.declarationList.flags&ts.NodeFlags.Const)!==0 &&
       Array.from(stmt.declarationList.declarations).every(d=>
         ts.isIdentifier(d.name) && d.name.text==='structuredData' && d.initializer &&
         ts.isCallExpression(d.initializer) && ts.isIdentifier(d.initializer.expression) &&
         d.initializer.expression.text==='buildAuthorityPageStructuredData'));
    // Only the existing structured-data initializer is opaque-approved here.
    // Arbitrary const initializers may contain early exits/side effects and are not executed.
    const bad=stmts.filter(stmt=>!allowed(stmt));
    if(returns.length!==1 || stmts.indexOf(returns[0])!==stmts.length-1 || bad.length){
      const issues=bad.length?bad:[s];
      for(const n of issues){const issue={line:line(n),kind:ts.SyntaxKind[n.kind],reason:'Unsupported component control flow or return structure'};
        control_flow_issues.push(issue);unknown(n,issue.reason);}
      continue;
    }
    const v=value(returns[0].expression);if(v&&!isUnknown(v))roots.push(v);
  }
  // Glossary controls are data-only. Not an assertion about dynamic route rendering.
  const glossary=[];
  for(const name of ['englishGlossaryTerms','norwegianGlossaryTerms'])if(decls.has(name)){
    const a=value(decls.get(name)); if(Array.isArray(a))for(const row of a)if(row && row.slug==='vagal-tone')glossary.push(row);
  }
  return {path:file.path,status:'PARSED_STATIC_SUBSET',roots,unresolved,errors,glossary,control_flow_issues};
}
// note: the glossary data reader uses declaration nodes, not arbitrary execution
const out=[];
for(const f of req.files){try{out.push(extract(f));}catch(e){out.push({path:f.path,status:'OPERATIONAL_ERROR',errors:[{message:String(e.message)}],roots:[],unresolved:[]});}}
process.stdout.write(JSON.stringify({typescript_version:ts.version,projection:'STATIC_AST_SUBSET_NOT_RENDERED_HTML',files:out}));
