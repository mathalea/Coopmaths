"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[70372],{70372:(s,t,e)=>{e.r(t),e.d(t,{default:()=>$});var n=e(25482);function $(s,t,e=1,$=4,h=8,p=3,u=5){let g,l,r,i,a,b,f,o,q,c,k,d,I,m,v,w,C,Q=[];const T=[1,2,2,3,3,4,4,4,4,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,11,12,13,14,15,16,17,18,19,20];g=!1;const V=arguments.length-2;for(;!1===g;){for(f=[],l=V<1?parseInt((0,n.q$q)(T)):e,r=V<2?parseInt((0,n.q$q)(T,[13,14,15,16,17,18,19,20,l])):$,i=V<3?parseInt((0,n.q$q)(T,[12,13,14,15,16,17,18,19,20,l,r])):h,a=V<4?parseInt((0,n.q$q)(T,[12,13,14,15,16,17,18,19,20,r,i])):p,b=V<5?parseInt((0,n.q$q)(T,[12,13,14,15,16,17,18,19,20])):u,f.push(l,r,i,a,b),o=(0,n.TVQ)(f),q=["\\times","+","-","\\div"],q=(0,n.TVQ)(q),c=[`${o[0]}`,`${o[1]}`,`${o[2]}`,`${o[3]}`,`${o[4]}`],k=[`${o[0]}`,`${o[1]}`,`${o[2]}`,`${o[3]}`,`${o[4]}`];o.length>1;){if(r=o.pop(),l=o.pop(),m=c.pop(),I=c.pop(),w=k.pop(),v=k.pop(),d=q.pop(),"\\times"===d)i=l*r,c.push(`${I}${d}${m}`),k.push(`${v}${d}${w}`),o.push(i);else if("\\div"===d){if(l%r!=0)break;i=l/r,"\\"===I[0]&&(I=I.substring(6,I.length),I=I.substring(0,I.length-7)),"\\"===m[0]&&(m=m.substring(6,m.length),m=m.substring(0,m.length-7)),c.push(`\\dfrac{${I}}{${m}}`),k.push(`${v}${d}${w}`),o.push(i)}else if("-"===d){if(!(l>r))break;i=l-r,c.push(`\\left(${I}${d}${m}\\right)`),k.push(`\\left(${v}${d}${w}\\right)`),o.push(i)}else"+"===d&&(i=l+r,"\\l"===m.substring(0,2)&&(m=m.substring(6,m.length),m=m.substring(0,m.length-7)),c.push(`\\left(${I}${d}${m}\\right)`),"\\l"===w.substring(0,2)&&(w=w.substring(6,w.length),w=w.substring(0,w.length-7)),k.push(`\\left(${v}${d}${w}\\right)`),o.push(i));Q.push(`${l}`+d+`${r}=${i}`)}if(1===o.length&&0===q.length){if(C=o[0],C>=s&&C<=t)return g=!0,"\\"===c[0][0]&&"l"===c[0][1]&&(c[0]=c[0].substring(6,c[0].length),c[0]=c[0].substring(0,c[0].length-7)),"\\"===k[0][0]&&"l"===k[0][1]&&(k[0]=k[0].substring(6,k[0].length),k[0]=k[0].substring(0,k[0].length-7)),[f,C,Q,c,k];Q=[]}else Q=[]}}}}]);
//# sourceMappingURL=70372.62926ef0c3012fbcf22d.js.map