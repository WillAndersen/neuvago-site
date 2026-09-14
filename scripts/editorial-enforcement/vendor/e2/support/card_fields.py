"""CAL-04/05 declared source-card display grammar; not NLP or DOM rendering.
header p -> h3 title -> byline p -> one or more scope p -> identifier div/link.
We do not search the whole card for expected author text, or borrow other cards.
"""
from __future__ import annotations
import re,html

def display(t):
 s=' '.join(html.unescape(str(t)).split())
 return re.sub(r'\s+([.,;:])',r'\1',s)

def locate(card):
 children=[n for n in card.get('children',[]) if not isinstance(n,str) or n.strip()]
 if any(not isinstance(n,dict) for n in children):return {'error':'Unlabelled card text outside supported display blocks'}
 headings=[i for i,n in enumerate(children) if n.get('tag')=='h3']
 if len(headings)!=1:return {'error':'Bibliographic heading is not uniquely delimited'}
 h=headings[0]
 if h!=1 or children[0].get('tag')!='p':return {'error':'Unknown or ambiguous header/date block layout'}
 if len(children)<=h+1 or children[h+1].get('tag')!='p':return {'error':'Unknown or ambiguous author/publication block layout'}
 tail=children[h+2:];scope=[]
 for n in tail:
  if n.get('tag')!='p':break
  scope.append(n)
 remainder=tail[len(scope):]
 # No hidden second heading or scope wrapper may silently become the accepted scope.
 if any(n.get('tag') not in {'div','a'} for n in remainder):return {'error':'Scope boundary uses an unsupported block structure'}
 if any(n.get('tag')=='div' and any(x.get('tag') in {'p','h3','article'} for x in descendants(n)) for n in remainder):return {'error':'Nested/ambiguous bibliography or scope block'}
 return {'header':children[0],'title':children[h],'byline':children[h+1],'scope':scope}

def descendants(n):
 for c in n.get('children',[]):
  if isinstance(c,dict):yield c;yield from descendants(c)

def fields(card,ref,text,hidden,uncertain,display_contract):
 m=ref['inherited_metadata'];loc=locate(card)
 if 'error' in loc:return loc
 hd=display(text(loc['header']));by=display(text(loc['byline']))
 kind=m.get('design',m.get('kind'));date=m.get('date_label',m.get('year'))
 pattern=re.fullmatch(r'\d+\.\s*(.*?)\s*·\s*(.*)',hd)
 headerknown=bool(pattern) and not hidden(loc['header']) and not uncertain(loc['header'])
 expected_byline=display(display_contract['byline'])
 # A byline with known direct structure but different words is a contradiction,
 # not a successful substring match. The combined literal is kept in detail.
 byok=by==expected_byline and not hidden(loc['byline']) and not uncertain(loc['byline'])
 rows=[('title',display(text(loc['title']))==display(m['title']),display(text(loc['title'])),display(m['title'])),
       ('authors',byok,by,expected_byline),('publication',byok,by,expected_byline),
       ('date',headerknown and display(pattern[2])==display(date),pattern[2] if pattern else hd,display(date)),
       ('source_type',headerknown and display(pattern[1])==display(kind),pattern[1] if pattern else hd,display(kind))]
 scope=loc['scope']
 # Empty text, hidden segments and scripts cannot supply a scope boundary.
 scope_node={'tag':'scope-group','attrs':{},'children':scope,'line':scope[0].get('line') if scope else card.get('line'),'uncertain':False}
 return {'rows':rows,'scope_node':scope_node,'hidden_scope_segment':any(hidden(n) or any(hidden(c) for c in descendants(n)) for n in scope),
         'field_locations':{k:loc[k].get('line') for k in ('header','title','byline')}}
