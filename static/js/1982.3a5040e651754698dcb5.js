(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1982,7567],{67567:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})},21982:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>o});var s=i(67567),l=(i(24477),i(87631));const n="Opérations posées";function o(){s.default.call(this),this.titre=n,this.consigne="",this.spacing=2,sortieHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.sup=1,this.sup2="1234.5-789.2",this.sup3=0,this.listePackages="xlop",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[1234.5,789.2],t=String(this.sup2).split("-");e[0]=parseFloat(t[0]),e[1]=parseFloat(t[1]);let i=e[0],s=e[1];switch(parseInt(this.sup)){case 1:this.contenu=(0,l.Z)({operande1:i,operande2:s,type:"addition"});break;case 2:this.contenu=(0,l.Z)({operande1:i,operande2:s,type:"soustraction"});break;case 3:this.contenu=(0,l.Z)({operande1:i,operande2:s,type:"multiplication"});break;case 4:this.contenu=(0,l.Z)({operande1:i,operande2:s,type:"divisionE",precision:0});break;case 5:this.contenu=(0,l.Z)({operande1:i,operande2:s,type:"division",precision:parseInt(this.sup3)})}},this.besoinFormulaireNumerique=["Opération",5,"1 : Addition\n2 : Soustraction\n3 : Multiplication\n4 : Division euclidienne\n5 : Division décimale"],this.besoin_formulaire2_texte=["Deux nombres séparés par un tiret(séparateur décimal = le point)"],this.besoin_formulaire3_numerique=["Nombre de chiffres après la virgule pour le quotient"]}},87631:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var s=i(24477),l=i(17199);const n={format:i(41194).WUZ};function o({operande1:e=1,operande2:t=2,type:i="addition",precision:o=0}){let r;const a=function(e){const t=Number(e).toString(),i=Number(Math.floor(e)).toString();return i.length==t.length?0:t.length-i.length-1},u=function(e){let t="";for(;"0"==e[0];)e=e.substr(1),t+=" ";for(let i=0;i<e.length;i++)t+=`${e[i]}`;return t},h=function(e,t,i=0){const o=[];let r=!1;i=Math.min(i,a((0,s.n0o)(e/t)));const u=a(t),h=a(e);e<t&&(r=!0),t=(0,s.n0o)(`${t}*10^${u}`),e=(0,s.n0o)(`${e}*10^${u+h}`);let m=a(e);m=i-m-h,e=n.format(e*10**m,{notation:"auto",lowerExp:-12,upperExp:12,precision:12});const p=function(e,t){o.push((0,l.Ots)("-",e-t.length-.5,10-2*C,"milieu","black",1.2,"middle",!0));for(let i=0;i<t.length;i++)o.push((0,l.Ots)(t[t.length-i-1],e-i-1,10-2*C,"milieu","black",1.2,"middle",!0))},c=function(e,t){o.push((0,l.EXn)(C-1,9.6-2*C,C+t.length,9.6-2*C));for(let i=0;i<t.length;i++)o.push((0,l.Ots)(t[t.length-i-1],e-i-1,9-2*C,"milieu","black",1.2,"middle",!0))},d=function(e,t){o.push((0,l.Ots)(t,x+1.5+e,10,"milieu","black",1.2,"middle",!0))},b=[],f=[],$=[],g=[],k=Number(e).toString(),O=Number(t).toString(),x=Math.log10((0,s.rkd)(e,1)),N=Math.log10((0,s.rkd)(t,1));let S=N;for(let e=0;e<x;e++)o.push((0,l.Ots)(k[e],e,11,"milieu","black",1.2,"middle",!0));for(let e=0;e<N;e++)o.push((0,l.Ots)(O[e],e+x+1.5,11,"milieu","black",1.2,"middle",!0));h+m!=0&&o.push((0,l.Ots)(",",x-h-m-1+.5,11,"milieu","black",1.2,"middle",!0)),o.push((0,l.EXn)(x,11.5,x,11.5-2*x));let C=0;for(b.push(k.substr(0,N)),parseInt(b[0])<t?(b[0]+=k.substr(N,1),t/10**m<t&&r&&d(-1,"0"),S++):r&&d(-1,"0");S<=x;){if(f.push(Number(Math.floor(parseInt(b[C])/t)).toString()),$.push(Number(parseInt(b[C])%t).toString()),g.push(""),"0"==f[C])for(let e=0;e<N;e++)g[C]+="0";else g[C]+=Number(parseInt(f[C])*t).toString();p(S,g[C]),S<x?($[C]+=k.substr(S,1),c(S+1,$[C])):c(S,$[C]),b.push($[C]),S++,d(C,f[C]),C++}return i>0&&o.push((0,l.Ots)(",",x+1+C-m-h,10,"milieu","black",1.2,"middle",!0)),o.push((0,l.EXn)(x,10.5,x+N+C,10.5)),(0,l.iR9)({xmin:-1.5,ymin:10-2*x,xmax:x+N+10,ymax:11.5,pixelsParCm:20,scale:.8},o)};switch(i){case"addition":r=sortieHtml?function(e,t){const i=a(e),n=a(t),o=Math.max(i,n);e=(0,s.n0o)(`${e}*10^${o}`),t=(0,s.n0o)(`${t}*10^${o}`);let r="";const u=[];let h,m,p,c=Number(e).toString(),d=Number(t).toString();const b=c.length,f=d.length,$=Math.max(b,f);let g=" ";if(b>f)for(let e=0;e<b-f;e++)d=" "+d;else if(f>b)for(let e=0;e<f-b;e++)c=" "+c;for(let e=$-1;e>0;e--)g=parseInt(c[e])+parseInt(d[e])>9?`1${g}`:` ${g}`;g=" "+g,c=` ${c}`,d=`+${d}`,m=e+t,h=Number(m).toString(),p=h.length;for(let e=0;e<$+1-p;e++)h=` ${h}`;for(let e=0;e<$+1;e++)" "!=c[e]&&u.push((0,l.Ots)(c[e],.6*e,4,"milieu","black",1.2,"middle",!0))," "!=d[e]&&u.push((0,l.Ots)(d[e],.6*e,3,"milieu","black",1.2,"middle",!0)),u.push((0,l.EXn)(0,2,.6*($+1),2))," "!=g[e]&&u.push((0,l.Ots)(g[e],.6*e,2.5,"milieu","red",.8,"middle",!0))," "!=h[e]&&u.push((0,l.Ots)(h[e],.6*e,1,"milieu","black",1.2,"middle",!0));return 0!=o&&(u.push((0,l.Ots)(",",.3+.6*($-o),4,"milieu","black",1.2,"middle",!0)),u.push((0,l.Ots)(",",.3+.6*($-o),3,"milieu","black",1.2,"middle",!0)),u.push((0,l.Ots)(",",.3+.6*($-o),1,"milieu","black",1.2,"middle",!0))),r+=(0,l.iR9)({xmin:-.5,ymin:0,xmax:$,ymax:5,pixelsParCm:20,scale:.8},u),r}(e,t):`$\\opadd[decimalsepsymbol={,}]{${e}}{${t}}$`;break;case"soustraction":r=sortieHtml?function(e,t){const i=a(e),n=a(t),o=Math.max(i,n);let r,u,h="";const m=[];let p,c,d;(e=(0,s.n0o)(`${e}*10^${o}`))<(t=(0,s.n0o)(`${t}*10^${o}`))?(u=Number(e).toString(),r=Number(t).toString()):(r=Number(e).toString(),u=Number(t).toString());const b=r.length,f=u.length,$=b;let g="00";if(b>f)for(let e=0;e<b-f;e++)u=" "+u;for(let e=$-1;e>=b-f;e--)g=parseInt(r[e])<parseInt(u[e])+parseInt(g.charAt(0))?`1${g}`:`0${g}`;r=` ${r}`,u=`-${u}`,g=`0${g}`,c=e-t,p=Number(c).toString(),d=p.length;for(let e=0;e<$+1-d;e++)p=` ${p}`;for(let e=0;e<$+1;e++)"0"!=g[e]&&m.push((0,l.Ots)(g[e],.6*e+.4,4.1,"milieu","red",.8,"middle",!0))," "!=r[e]&&m.push((0,l.Ots)(r[e],.6*e,4,"milieu","black",1.2,"middle",!0))," "!=u[e]&&m.push((0,l.Ots)(u[e],.6*e,3,"milieu","black",1.2,"middle",!0)),m.push((0,l.EXn)(0,2,.6*($+1),2)),"0"!=g[e]&&m.push((0,l.Ots)(g[e],.6*e,2.6,"milieu","blue",.8,"middle",!0))," "!=p[e]&&m.push((0,l.Ots)(p[e],.6*e,1,"milieu","black",1.2,"middle",!0));return 0!=o&&(m.push((0,l.Ots)(",",.3+.6*($-o),4,"milieu","black",1.2,"middle",!0)),m.push((0,l.Ots)(",",.3+.6*($-o),3,"milieu","black",1.2,"middle",!0)),m.push((0,l.Ots)(",",.3+.6*($-o),1,"milieu","black",1.2,"middle",!0))),h+=(0,l.iR9)({xmin:-.5,ymin:0,xmax:$,ymax:5,pixelsParCm:20,scale:.8},m),h}(e,t):`$\\opsub[decimalsepsymbol={,}]{${e}}{${t}}$`;break;case"multiplication":r=sortieHtml?function(e,t){let i,n,o;const r=[];let h,m,p,c=0;const d=[];let b;const f=[];let $,g,k;e<t&&(p=e,e=t,t=p),h=a(e),m=a(t),e=(0,s.n0o)(`${e}*10^${h}`),t=(0,s.n0o)(`${t}*10^${m}`),n=Number(e).toString(),o=Number(t).toString();const O=n.length,x=o.length,N=O+x+1,S=[];for(let e=0;e<o.length;e++){S.push("0"),d.push("");for(let t=0;t<e;t++)S[e]=`${S[e]}0`,d[e]=`${d[e]}°`;if("0"!=o[x-e-1]){for(let t=0;t<n.length;t++)b=parseInt(n[O-t-1]*parseInt(o[x-e-1]))+parseInt(S[e][0]),S[e]=`${Number(Math.floor(b/10)).toString()}${S[e]}`,d[e]=`${Number(b%10).toString()}${d[e]}`;d[e]=`${S[e][0]}${d[e]}`}else for(let t=0;t<n.length;t++)S[e]=`0${S[e]}`,d[e]=`°${d[e]}`}for(let e=x;e<N;e++)o=` ${o}`;for(let e=O;e<=N;e++)n=` ${n}`;for(let e=0;e<x;e++)for(let t=S[e].length;t<=N;t++)S[e]=`0${S[e]}`;g=(0,s.n0o)(`${e}*${t}`),$=Number(g).toString(),k=$.length;for(let e=0;e<x;e++)for(let t=d[e].length;t<=k;t++)d[e]=`0${d[e]}`;S.push("0");for(let e=0;e<k-1;e++){f.push(0),f[e]+=parseInt(S[x][0]);for(let t=0;t<x;t++)"0"!=d[t][k-e]&&"°"!=d[t][k-e]&&(f[e]+=parseInt(d[t][k-e]));S[x]=`${Number(Math.floor(f[e]/10)).toString()[0]}${S[x]}`}for(let e=0;e<x;e++){d[e]=u(d[e]);for(let t=d[e].length;t<=N;t++)d[e]=` ${d[e]}`}o=`×${o}`;for(let e=k;e<=N;e++)$=` ${$}`;for(let e=S[x].length;e<=N;e++)S[x]=`0${S[x]}`;for(let e=0;e<=N;e++)" "!=n[e]&&r.push((0,l.Ots)(n[e],.6*e,7,"milieu","black",1.2,"middle",!0))," "!=o[e]&&r.push((0,l.Ots)(o[e],.6*e,6,"milieu","black",1.2,"middle",!0));0!=h&&r.push((0,l.Ots)(",",.3+.6*(N-h),7,"milieu","black",1.2,"middle",!0)),0!=m&&r.push((0,l.Ots)(",",.3+.6*(N-m),6,"milieu","black",1.2,"middle",!0));for(let e=0;e<x;e++)if("0"!=o[N-e])for(let t=0;t<=N;t++)" "!=d[e][t]&"°"!=d[e][t]&&r.push((0,l.Ots)(d[e][t],.6*t,5-e+c,"milieu","black",1.2,"middle",!0)),"0"!=S[e][t]&&r.push((0,l.Ots)(S[e][t],.6*t,5.5-e+c,"milieu","blue",.7,"middle",!0));else c++;for(let e=0;e<=N;e++)"0"!=S[x][e]&&r.push((0,l.Ots)(S[x][e],.6*e,5.5-x+c,"milieu","red",.7,"middle",!0));r.push((0,l.EXn)(0,5.2-x+c,.6*(N+1),5.2-x+c)),r.push((0,l.EXn)(0,5.7,.6*(N+1),5.7));for(let e=0;e<=N;e++)" "!=$[e]&&r.push((0,l.Ots)($[e],.6*e,4.5-x+c,"milieu","black",1.2,"middle",!0));return h+m!=0&&r.push((0,l.Ots)(",",.3+.6*(N-m-h),4.5-x+c,"milieu","black",1.2,"middle",!0)),i=(0,l.iR9)({xmin:-.5,ymin:4-x,xmax:N+2,ymax:8,pixelsParCm:20,scale:.8},r),i}(e,t):`$\\opmul[decimalsepsymbol={,}]{${e}}{${t}}$`;break;case"division":r=sortieHtml?h(e,t,o):`$\\opdiv[displayintermediary=all,voperation=top,period,decimalsepsymbol={,},shiftdecimalsep=none]{${e}}{${t}}$`;break;case"divisionE":r=sortieHtml?h(e,t,0):`$\\opidiv{${e}}{${t}}$`}return r}}}]);