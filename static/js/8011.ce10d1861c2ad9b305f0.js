(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8011],{38011:(s,t,e)=>{"use strict";e.r(t),e.d(t,{default:()=>n});var $=e(24477);function n(s,t,e=1,n=4,h=8,p=3,l=5){let u,g,r,i,a,b,f,o,q,k,c,d,I,m,v,w,C,Q=[],T=[1,2,2,3,3,4,4,4,4,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,11,12,13,14,15,16,17,18,19,20];u=!1;let V=arguments.length-2;for(;0==u;){for(f=[],g=V<1?parseInt((0,$.q$q)(T)):e,r=V<2?parseInt((0,$.q$q)(T,[13,14,15,16,17,18,19,20,g])):n,i=V<3?parseInt((0,$.q$q)(T,[12,13,14,15,16,17,18,19,20,g,r])):h,a=V<4?parseInt((0,$.q$q)(T,[12,13,14,15,16,17,18,19,20,r,i])):p,b=V<5?parseInt((0,$.q$q)(T,[12,13,14,15,16,17,18,19,20])):l,f.push(g,r,i,a,b),o=(0,$.TVQ)(f),q=["\\times","+","-","\\div"],q=(0,$.TVQ)(q),k=[`${o[0]}`,`${o[1]}`,`${o[2]}`,`${o[3]}`,`${o[4]}`],c=[`${o[0]}`,`${o[1]}`,`${o[2]}`,`${o[3]}`,`${o[4]}`];o.length>1;){if(r=o.pop(),g=o.pop(),m=k.pop(),I=k.pop(),w=c.pop(),v=c.pop(),d=q.pop(),"\\times"==d)i=g*r,k.push(`${I}${d}${m}`),c.push(`${v}${d}${w}`),o.push(i);else if("\\div"==d){if(g%r!=0)break;i=g/r,"\\"==I[0]&&(I=I.substring(6,I.length),I=I.substring(0,I.length-7)),"\\"==m[0]&&(m=m.substring(6,m.length),m=m.substring(0,m.length-7)),k.push(`\\dfrac{${I}}{${m}}`),c.push(`${v}${d}${w}`),o.push(i)}else if("-"==d){if(!(g>r))break;i=g-r,k.push(`\\left(${I}${d}${m}\\right)`),c.push(`\\left(${v}${d}${w}\\right)`),o.push(i)}else"+"==d&&(i=g+r,"\\l"==m.substring(0,2)&&(m=m.substring(6,m.length),m=m.substring(0,m.length-7)),k.push(`\\left(${I}${d}${m}\\right)`),"\\l"==w.substring(0,2)&&(w=w.substring(6,w.length),w=w.substring(0,w.length-7)),c.push(`\\left(${v}${d}${w}\\right)`),o.push(i));Q.push(`${g}`+d+`${r}=${i}`)}if(1==o.length&&0==q.length){if(C=o[0],C>=s&&C<=t)return u=!0,"\\"==k[0][0]&&"l"==k[0][1]&&(k[0]=k[0].substring(6,k[0].length),k[0]=k[0].substring(0,k[0].length-7)),"\\"==c[0][0]&&"l"==c[0][1]&&(c[0]=c[0].substring(6,c[0].length),c[0]=c[0].substring(0,c[0].length-7)),[f,C,Q,k,c];Q=[]}else Q=[]}}}}]);