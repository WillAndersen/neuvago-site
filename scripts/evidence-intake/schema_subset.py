"""Offline validator for only the JSON Schema keywords used by this contract.
Not a general JSON Schema implementation. Unsupported keywords fail closed.
No remote references, callbacks, source imports or network operations.
"""
from __future__ import annotations
import json,re

ANNOTATIONS={'$schema','title','description','$comment','default'}
KEYWORDS={'type','const','enum','properties','required','additionalProperties','items','minItems','maxItems','uniqueItems','minLength','pattern','oneOf','allOf','anyOf','$ref','$defs'}|ANNOTATIONS
class SchemaError(ValueError):pass

def equal(a,b):
    # JSON Schema boolean and number types must not share Python's True == 1.
    if isinstance(a,bool) != isinstance(b,bool):return False
    return a==b

def check_schema(s,root=None,depth=0):
    if depth>80:raise SchemaError('Schema recursion limit')
    if isinstance(s,bool):return
    if not isinstance(s,dict):raise SchemaError('Schema must be an object or boolean')
    unknown=set(s)-KEYWORDS
    if unknown:raise SchemaError('Unsupported schema keywords: '+','.join(sorted(unknown)))
    if '$ref' in s and not s['$ref'].startswith('#/$defs/'):raise SchemaError('Only local $defs references supported')
    for k in ('properties','$defs'):
        for v in s.get(k,{}).values():check_schema(v,root or s,depth+1)
    for k in ('items','additionalProperties'):
        if isinstance(s.get(k),(dict,bool)):check_schema(s[k],root or s,depth+1)
    for k in ('oneOf','allOf','anyOf'):
        for v in s.get(k,[]):check_schema(v,root or s,depth+1)

def validate(value,schema):
    check_schema(schema)
    def walk(v,s,path='$',depth=0):
        if depth>80:raise SchemaError('Instance recursion limit')
        if s is True:return []
        if s is False:return [path+': false schema']
        out=[]
        if '$ref' in s:
            name=s['$ref'][len('#/$defs/'):]
            if '/' in name or name not in schema.get('$defs',{}):raise SchemaError('Unresolved local schema reference')
            out+=walk(v,schema['$defs'][name],path,depth+1)
        def typ(t):
            return {'null':lambda:v is None,'boolean':lambda:type(v) is bool,'string':lambda:isinstance(v,str),
              'number':lambda:type(v) in (int,float),'integer':lambda:type(v) is int,'object':lambda:isinstance(v,dict),'array':lambda:isinstance(v,list)}[t]()
        if 'type' in s:
            types=s['type'] if isinstance(s['type'],list) else [s['type']]
            if not any(typ(t) for t in types):out.append(path+': wrong type');return out
        if 'const' in s and not equal(v,s['const']):out.append(path+': const mismatch')
        if 'enum' in s and not any(equal(v,x) for x in s['enum']):out.append(path+': enum mismatch')
        if isinstance(v,dict):
            for k in s.get('required',[]):
                if k not in v:out.append(path+'.'+k+': missing')
            props=s.get('properties',{})
            for k,val in v.items():
                if k in props:out+=walk(val,props[k],path+'.'+k,depth+1)
                elif 'additionalProperties' in s:out+=walk(val,s['additionalProperties'],path+'.'+k,depth+1)
        if isinstance(v,list):
            if len(v)<s.get('minItems',0) or len(v)>s.get('maxItems',float('inf')):out.append(path+': array size')
            if s.get('uniqueItems'):
                serial=[json.dumps(x,sort_keys=True,ensure_ascii=False) for x in v]
                if len(serial)!=len(set(serial)):out.append(path+': duplicate array items')
            for i,x in enumerate(v):
                if 'items' in s:out+=walk(x,s['items'],path+'['+str(i)+']',depth+1)
        if isinstance(v,str):
            if len(v)<s.get('minLength',0):out.append(path+': too short')
            if 'pattern' in s and re.search(s['pattern'],v) is None:out.append(path+': pattern mismatch')
        for kw in ('oneOf','anyOf','allOf'):
            if kw in s:
                results=[walk(v,x,path,depth+1) for x in s[kw]];ok=sum(not r for r in results)
                if (kw=='oneOf' and ok!=1) or (kw=='anyOf' and ok==0) or (kw=='allOf' and ok!=len(results)):out.append(path+': '+kw+' mismatch')
        return out
    return walk(value,schema)
