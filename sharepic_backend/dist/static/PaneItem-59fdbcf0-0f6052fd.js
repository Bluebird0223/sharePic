import{H as b,ak as D,M as x,bX as T,r as o,cP as _,p as e,cQ as M,cR as k,ac as R,cS as F,cT as L,cU as j,cV as E,A as p,am as U}from"./desk-eb7b3548-5911e3eb.js";const W=(t,n)=>({title:p("em",{children:["No schema found for type ",e("code",{children:n})]}),subtitle:p("em",{children:["Document: ",e("code",{children:t})]}),media:()=>e(U,{})});function A(t){const{layout:n,value:a}=t;return e(k,{...W(a._id,a._type),layout:n})}function P(t,n,a){return t===!1?!1:t||n&&n.icon||a||!1}function N(t){const{icon:n,id:a,layout:i="default",pressed:v,schemaType:c,selected:r,title:u,value:s}=t,y=b(),l=D(),{ChildLink:d}=x(),m=T(a),f=Boolean(c&&c.name&&y.get(c.name)),[I,h]=o.useState(!1),S=o.useMemo(()=>s&&_(s)?!c||!f?e(A,{value:s}):e(M,{documentPreviewStore:l,icon:P(n,c,j),layout:i,schemaType:c,value:s,presence:m}):e(k,{status:e(R,{muted:!0,children:e(F,{})}),icon:P(n,c,E),layout:i,title:u}),[l,f,n,i,c,u,s,m]),g=o.useMemo(()=>function(w){return e(d,{...w,childId:a})},[d,a]),C=o.useCallback(()=>h(!0),[]);return o.useEffect(()=>h(!1),[r]),e(L,{__unstable_focusRing:!0,as:g,"data-as":"a","data-ui":"PaneItem",padding:2,radius:2,onClick:C,pressed:v,selected:r||I,tone:"inherit",children:S})}export{N as P};
