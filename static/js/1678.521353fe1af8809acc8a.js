(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1678,5216],{75216:(t,e,i)=>{"use strict";function l(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>l})},84311:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var l=i(55339),s=i(44393),o=i(89459);const n={format:i(41194).WUZ};function r({operande1:t=1,operande2:e=2,type:i="addition",precision:r=0}){let u;const a=function(t){const e=Number(t).toString(),i=Number(Math.floor(t)).toString();return i.length==e.length?0:e.length-i.length-1},m=function(t){let e="";for(;"0"==t[0];)t=t.substr(1),e+=" ";for(let i=0;i<t.length;i++)e+=`${t[i]}`;return e},h=function(t,e,i=0){const o=[];let r=!1;i=Math.min(i,a((0,l.n0o)(t/e)));const u=a(e),m=a(t);t<e&&(r=!0),e=(0,l.n0o)(`${e}*10^${u}`),t=(0,l.n0o)(`${t}*10^${u+m}`);let h=a(t);h=i-h-m,t=n.format(t*10**h,{notation:"auto",lowerExp:-12,upperExp:12,precision:12});const c=function(t,e){o.push((0,s.Ots)("-",t-e.length-.5,10-2*C,"milieu","black",1.2,"middle",!0));for(let i=0;i<e.length;i++)o.push((0,s.Ots)(e[e.length-i-1],t-i-1,10-2*C,"milieu","black",1.2,"middle",!0))},d=function(t,e){o.push((0,s.EXn)(C-1,9.6-2*C,C+e.length,9.6-2*C));for(let i=0;i<e.length;i++)o.push((0,s.Ots)(e[e.length-i-1],t-i-1,9-2*C,"milieu","black",1.2,"middle",!0))},p=function(t,e){o.push((0,s.Ots)(e,x+1.5+t,10,"milieu","black",1.2,"middle",!0))},b=[],f=[],$=[],g=[],k=Number(t).toString(),O=Number(e).toString(),x=Math.log10((0,l.rkd)(t,1)),N=Math.log10((0,l.rkd)(e,1));let S=N;for(let l=0;l<x;l++)o.push((0,s.Ots)(k[l],l,11,"milieu","black",1.2,"middle",!0));for(let l=0;l<N;l++)o.push((0,s.Ots)(O[l],l+x+1.5,11,"milieu","black",1.2,"middle",!0));m+h!=0&&o.push((0,s.Ots)(",",x-m-h-1+.5,11,"milieu","black",1.2,"middle",!0)),o.push((0,s.EXn)(x,11.5,x,11.5-2*x));let C=0;for(b.push(k.substr(0,N)),parseInt(b[0])<e?(b[0]+=k.substr(N,1),e/10**h<e&&r&&p(-1,"0"),S++):r&&p(-1,"0");S<=x;){if(f.push(Number(Math.floor(parseInt(b[C])/e)).toString()),$.push(Number(parseInt(b[C])%e).toString()),g.push(""),"0"==f[C])for(let t=0;t<N;t++)g[C]+="0";else g[C]+=Number(parseInt(f[C])*e).toString();c(S,g[C]),S<x?($[C]+=k.substr(S,1),d(S+1,$[C])):d(S,$[C]),b.push($[C]),S++,p(C,f[C]),C++}i>0&&o.push((0,s.Ots)(",",x+1+C-h-m,10,"milieu","black",1.2,"middle",!0)),o.push((0,s.EXn)(x,10.5,x+N+C,10.5));return(0,s.iR9)({xmin:-1.5,ymin:10-2*x,xmax:x+N+10,ymax:11.5,pixelsParCm:20,scale:.8},o)};switch(i){case"addition":u=o.Do.isHtml?function(t,e){const i=a(t),o=a(e),n=Math.max(i,o);t=(0,l.n0o)(`${t}*10^${n}`),e=(0,l.n0o)(`${e}*10^${n}`);let r="";const u=[];let m,h,c,d=Number(t).toString(),p=Number(e).toString();const b=d.length,f=p.length,$=Math.max(b,f);let g=" ";if(b>f)for(let l=0;l<b-f;l++)p=" "+p;else if(f>b)for(let l=0;l<f-b;l++)d=" "+d;for(let l=$-1;l>0;l--)g=parseInt(d[l])+parseInt(p[l])>9?`1${g}`:` ${g}`;g=" "+g,d=` ${d}`,p=`+${p}`,h=t+e,m=Number(h).toString(),c=m.length;for(let l=0;l<$+1-c;l++)m=` ${m}`;for(let l=0;l<$+1;l++)" "!=d[l]&&u.push((0,s.Ots)(d[l],.6*l,4,"milieu","black",1.2,"middle",!0))," "!=p[l]&&u.push((0,s.Ots)(p[l],.6*l,3,"milieu","black",1.2,"middle",!0)),u.push((0,s.EXn)(0,2,.6*($+1),2))," "!=g[l]&&u.push((0,s.Ots)(g[l],.6*l,2.5,"milieu","red",.8,"middle",!0))," "!=m[l]&&u.push((0,s.Ots)(m[l],.6*l,1,"milieu","black",1.2,"middle",!0));return 0!=n&&(u.push((0,s.Ots)(",",.3+.6*($-n),4,"milieu","black",1.2,"middle",!0)),u.push((0,s.Ots)(",",.3+.6*($-n),3,"milieu","black",1.2,"middle",!0)),u.push((0,s.Ots)(",",.3+.6*($-n),1,"milieu","black",1.2,"middle",!0))),r+=(0,s.iR9)({xmin:-.5,ymin:0,xmax:$,ymax:5,pixelsParCm:20,scale:.8},u),r}(t,e):`$\\opadd[decimalsepsymbol={,}]{${t}}{${e}}$`;break;case"soustraction":u=o.Do.isHtml?function(t,e){const i=a(t),o=a(e),n=Math.max(i,o);let r,u,m="";const h=[];let c,d,p;(t=(0,l.n0o)(`${t}*10^${n}`))<(e=(0,l.n0o)(`${e}*10^${n}`))?(u=Number(t).toString(),r=Number(e).toString()):(r=Number(t).toString(),u=Number(e).toString());const b=r.length,f=u.length,$=b;let g="00";if(b>f)for(let l=0;l<b-f;l++)u=" "+u;for(let l=$-1;l>=b-f;l--)g=parseInt(r[l])<parseInt(u[l])+parseInt(g.charAt(0))?`1${g}`:`0${g}`;r=` ${r}`,u=`-${u}`,g=`0${g}`,d=t-e,c=Number(d).toString(),p=c.length;for(let l=0;l<$+1-p;l++)c=` ${c}`;for(let l=0;l<$+1;l++)"0"!=g[l]&&h.push((0,s.Ots)(g[l],.6*l+.4,4.1,"milieu","red",.8,"middle",!0))," "!=r[l]&&h.push((0,s.Ots)(r[l],.6*l,4,"milieu","black",1.2,"middle",!0))," "!=u[l]&&h.push((0,s.Ots)(u[l],.6*l,3,"milieu","black",1.2,"middle",!0)),h.push((0,s.EXn)(0,2,.6*($+1),2)),"0"!=g[l]&&h.push((0,s.Ots)(g[l],.6*l,2.6,"milieu","blue",.8,"middle",!0))," "!=c[l]&&h.push((0,s.Ots)(c[l],.6*l,1,"milieu","black",1.2,"middle",!0));return 0!=n&&(h.push((0,s.Ots)(",",.3+.6*($-n),4,"milieu","black",1.2,"middle",!0)),h.push((0,s.Ots)(",",.3+.6*($-n),3,"milieu","black",1.2,"middle",!0)),h.push((0,s.Ots)(",",.3+.6*($-n),1,"milieu","black",1.2,"middle",!0))),m+=(0,s.iR9)({xmin:-.5,ymin:0,xmax:$,ymax:5,pixelsParCm:20,scale:.8},h),m}(t,e):`$\\opsub[decimalsepsymbol={,}]{${t}}{${e}}$`;break;case"multiplication":u=o.Do.isHtml?function(t,e){let i,o,n;const r=[];let u,h,c,d=0;const p=[];let b;const f=[];let $,g,k;t<e&&(c=t,t=e,e=c),u=a(t),h=a(e),t=(0,l.n0o)(`${t}*10^${u}`),e=(0,l.n0o)(`${e}*10^${h}`),o=Number(t).toString(),n=Number(e).toString();const O=o.length,x=n.length,N=O+x+1,S=[];for(let l=0;l<n.length;l++){S.push("0"),p.push("");for(let t=0;t<l;t++)S[l]=`${S[l]}0`,p[l]=`${p[l]}°`;if("0"!=n[x-l-1]){for(let t=0;t<o.length;t++)b=parseInt(o[O-t-1]*parseInt(n[x-l-1]))+parseInt(S[l][0]),S[l]=`${Number(Math.floor(b/10)).toString()}${S[l]}`,p[l]=`${Number(b%10).toString()}${p[l]}`;p[l]=`${S[l][0]}${p[l]}`}else for(let t=0;t<o.length;t++)S[l]=`0${S[l]}`,p[l]=`°${p[l]}`}for(let l=x;l<N;l++)n=` ${n}`;for(let l=O;l<=N;l++)o=` ${o}`;for(let l=0;l<x;l++)for(let t=S[l].length;t<=N;t++)S[l]=`0${S[l]}`;g=(0,l.n0o)(`${t}*${e}`),$=Number(g).toString(),k=$.length;for(let l=0;l<x;l++)for(let t=p[l].length;t<=k;t++)p[l]=`0${p[l]}`;S.push("0");for(let l=0;l<k-1;l++){f.push(0),f[l]+=parseInt(S[x][0]);for(let t=0;t<x;t++)"0"!=p[t][k-l]&&"°"!=p[t][k-l]&&(f[l]+=parseInt(p[t][k-l]));S[x]=`${Number(Math.floor(f[l]/10)).toString()[0]}${S[x]}`}for(let l=0;l<x;l++){p[l]=m(p[l]);for(let t=p[l].length;t<=N;t++)p[l]=` ${p[l]}`}n=`×${n}`;for(let l=k;l<=N;l++)$=` ${$}`;for(let l=S[x].length;l<=N;l++)S[x]=`0${S[x]}`;for(let l=0;l<=N;l++)" "!=o[l]&&r.push((0,s.Ots)(o[l],.6*l,7,"milieu","black",1.2,"middle",!0))," "!=n[l]&&r.push((0,s.Ots)(n[l],.6*l,6,"milieu","black",1.2,"middle",!0));0!=u&&r.push((0,s.Ots)(",",.3+.6*(N-u),7,"milieu","black",1.2,"middle",!0)),0!=h&&r.push((0,s.Ots)(",",.3+.6*(N-h),6,"milieu","black",1.2,"middle",!0));for(let l=0;l<x;l++)if("0"!=n[N-l])for(let t=0;t<=N;t++)" "!=p[l][t]&"°"!=p[l][t]&&r.push((0,s.Ots)(p[l][t],.6*t,5-l+d,"milieu","black",1.2,"middle",!0)),"0"!=S[l][t]&&r.push((0,s.Ots)(S[l][t],.6*t,5.5-l+d,"milieu","blue",.7,"middle",!0));else d++;for(let l=0;l<=N;l++)"0"!=S[x][l]&&r.push((0,s.Ots)(S[x][l],.6*l,5.5-x+d,"milieu","red",.7,"middle",!0));r.push((0,s.EXn)(0,5.2-x+d,.6*(N+1),5.2-x+d)),r.push((0,s.EXn)(0,5.7,.6*(N+1),5.7));for(let l=0;l<=N;l++)" "!=$[l]&&r.push((0,s.Ots)($[l],.6*l,4.5-x+d,"milieu","black",1.2,"middle",!0));return u+h!=0&&r.push((0,s.Ots)(",",.3+.6*(N-h-u),4.5-x+d,"milieu","black",1.2,"middle",!0)),i=(0,s.iR9)({xmin:-.5,ymin:4-x,xmax:N+2,ymax:8,pixelsParCm:20,scale:.8},r),i}(t,e):`$\\opmul[decimalsepsymbol={,}]{${t}}{${e}}$`;break;case"division":u=o.Do.isHtml?h(t,e,r):`$\\opdiv[displayintermediary=all,voperation=top,period,decimalsepsymbol={,},shiftdecimalsep=none]{${t}}{${e}}$`;break;case"divisionE":u=o.Do.isHtml?h(t,e,0):`$\\opidiv{${t}}{${e}}$`}return u}}}]);
//# sourceMappingURL=1678.521353fe1af8809acc8a.js.map