"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[21358,25523],{25523:(e,t,s)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let s="";for(const n of t)void 0!==n&&(s+=n.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>n})},21358:(e,t,s)=>{s.r(t),s.d(t,{titre:()=>E,dateDePublication:()=>V,default:()=>le});var n=s(25523),r=s(71250),i=s(22380),o=s(25482),l=s(56018);let a,u,c,$,h,d,f,b,p,m,g,x,S,C,j,v,q,R,M,w,D,P,k,y,z,F,O,A,L,Q,N=e=>e;const E="Calculs de probabilités",V="12/12/2021";function I(e,t,s="",{epaisseur:n=.6,couleurDeRemplissage:i="blue",color:o="black",opaciteDeRemplissage:l=.3,angle:a=66,unite:u=1,hachures:c=!1}={}){r.En$.call(this),this.bordure=[(0,r.xmu)(e-n/2,0),(0,r.xmu)(e-n/2,t*u),(0,r.xmu)(e+n/2,t*u),(0,r.xmu)(e+n/2,0)],this.bordures=[e-n/2,0,e+n/2,t*u];const $=(0,r.R_h)(...this.bordure);$.couleurDeRemplissage=i,$.opaciteDeRemplissage=l,$.color=o,c&&($.hachures=c);const h=(0,r.Ots)(s,e,-.2,a,"black",1,"gauche");this.tikz=function(){return $.tikz()+"\n"+h.tikz()},this.svg=function(e){return $.svg(e)+"\n"+h.svg(e)}}function U(...e){return new I(...e)}function T(e){return Intl.NumberFormat("fr-FR",{maximumFractionDigits:20}).format(e).toString().replace(/\s+/g,"\\thickspace ").replace(",","{,}")}function _(e){const t=1===e.s?"":"-";return 1!==e.d?String.raw(a||(a=N`${0}\dfrac{${0}}{${0}}`),t,T(e.n),T(e.d)):String.raw(u||(u=N`${0}${0}`),t,T(e.n))}function X(e=-30,t=-30,s=30,n=30,i=.2,o=1,a=1,u=2,c="black",$=a,h=""){r.En$.call(this);const d=[];d.push((0,r.QNZ)(h,(0,r.xmu)(e-i-.1,n),"gauche",c));const f=(0,r.EXn)(-1,t,-1,n);f.styleExtremites="->",f.epaisseur=u,d.push(f),f.color=c;for(let b=t;b<n;b=(0,l.Pj$)(b).add(a)){const t=(0,r.EXn)(e-i,b,e,b);t.epaisseur=u,t.color=c,d.push(t)}for(let b=t;b<n;b=(0,l.Pj$)(b).add(a.div($))){const t=(0,r.EXn)(e-i/2,b,e,b);t.epaisseur=u,t.color=c,d.push(t)}this.svg=function(e){let t="";for(const s of d)t+="\n\t"+s.svg(e);return t},this.tikz=function(){let e="";for(const t of d)e+="\n\t"+t.tikz();return e},this.commentaire=`Axes(xmin = ${e}, ymin = ${t}, xmax = ${s}, ymax = ${n}, thick = ${i})`}function Z(...e){return new X(...e)}function J(e=1,t=20,s=1,n="black",i=-.6,o=1){r.En$.call(this);const a=[];for(let u=(0,l.mDi)((0,l.Pj$)(e,o));u.mul(o)<=t;u=u.add(s))a.push((0,r.QNZ)(u.mul(o),(0,r.xmu)(i,u),"gauche",n));this.svg=function(e){let t="";for(const s of a)t+="\n\t"+s.svg(e);return t},this.tikz=function(){let e="";for(const t of a)e+="\n\t"+t.tikz();return e},this.commentaire=`labelX(ymin=${e},ymax=${t},step=${s},color=${n},pos=${i})`}function G(...e){return new J(...e)}function H(e,t,{reperageTraitPointille:s=!1,couleurDeRemplissage:n="blue",titreAxeVertical:i="",titre:o="",hauteurDiagramme:a=5,coeff:u=2,axeVertical:c=!1,etiquetteValeur:$=!0,labelAxeVert:h=!1}={}){const d=[];for(let b=0;b<e.length;b++){const o=b*u,$=e[b]*a/(0,l.Fp7)(e);if(d.push(U(o,$,t[b],{couleurDeRemplissage:n})),s){const e=(0,r.EXn)(-1,$,o,$);e.pointilles=!0,e.epaisseur=.2,d.push(e)}d.push((0,r.QNZ)((f=e[b],Intl.NumberFormat("fr-FR",{maximumFractionDigits:20}).format(f).toString().replace(/\s+/g,"\\thickspace ")),(0,r.xmu)(o,$+.3)));const p=[1,2,5,10,20],m=[1,2,5,5,5];let g=1,x=1,S=1;for(;(0,l.Fp7)(e)/x>5&&g<5;)g+=1,x=p[g-1],S=m[g-1];for(5===g&&(g=2);(0,l.Fp7)(e)/x>5;)g+=1,x=10*g,S=5;h&&d.push(G(0,(0,l.Fp7)(e),(0,l.Pj$)(a,(0,l.Fp7)(e)).mul(x),"black",-1.3,(0,l.Fp7)(e)/a)),c&&d.push(Z(-1,0,o,a+1,.2,o,(0,l.Pj$)(a,(0,l.Fp7)(e)).mul(x),.2,"black",S,i))}var f;return""!==o&&d.push((0,r.QNZ)(o,(0,r.xmu)((e.length-1)*u/2,a+1))),(0,r.iR9)(Object.assign({},function(e,{rxmin:t,rymin:s,rxmax:n,rymax:r,rzoom:i=1}={}){t=void 0!==t?t:-1,s=void 0!==s?s:-1,n=void 0!==n?n:1,r=void 0!==r?r:1;let o=0,l=0,a=0,u=0;for(const c of e)if(o=Math.min(o,c.x+t||0),a=Math.max(a,c.x+n||0),l=Math.min(l,c.y+s||0),u=Math.max(u,c.y+r||0),void 0!==c.bordure)if("function"==typeof c.bordure[Symbol.iterator])for(const e of c.bordure)o=Math.min(o,e.x+t||0),a=Math.max(a,e.x+n||0),l=Math.min(l,e.y+s||0),u=Math.max(u,e.y+r||0);else o=Math.min(o,c.bordure.x+t||0),a=Math.max(a,c.bordure.x+n||0),l=Math.min(l,c.bordure.y+s||0),u=Math.max(u,c.bordure.y+r||0);return{xmin:o*i,xmax:a*i,ymin:l*i,ymax:u*i}}(d,{rxmin:-3,rymin:-2,rymax:1.5}),{style:"inline",scale:1}),...d)}function K(e,t){const s=[];for(let r=0;r<e.length;r++)t[r]>1?s.push(...(0,o.SRM)([e[r]],t[r])):s.push(e[r]);const n=[];for(let r=0;r<s.length;r++)n.push(s[r][0].toUpperCase());return{issues:s,issuesAbregees:n}}function W(e,t,s){const n=K(e,t).issues,r=[],i=[];for(let l=0;l<s;l++){const t=n[(0,o.nSR)(0,n.length-1)],s=e.indexOf(t);-1!==i.indexOf(s)?r[i.indexOf(s)]+=1:(i.push(s),r.push(1))}const a=[];for(let o=0;o<i.length;o++)a.push((0,l.Pj$)(r[o],s));return{effectifs:r,frequences:a,realisees:i}}function Y(e=21,t=45,s,n=0,r=!1){let i=[];const o=(0,l.thl)(e,t);let a=0;switch(n){case 0:i.push(String.raw(c||(c=N`\dfrac{${0}\times${0}}{${0}\times${0}}`),e/o,o,t/o,o)),o>1&&(i.push(String.raw($||($=N`\dfrac{${0}}{${0}}`),e/o,t/o)),a+=1),void 0===s?(i=i.join("="),i="$"+i+"$"):""===s&&a>0?r?(i=i.join("\\\\&="),i=String.raw(h||(h=N`
          <br>
          $\begin{aligned}
          \dfrac{${0}}{${0}}&=${0}
          \end{aligned}$
          <br>
          `),e,t,i)):i=String.raw(d||(d=N`$\dfrac{${0}}{${0}}=${0}$`),e,t,i.join("=")):a>0?r?(i=i.join("\\\\&="),i=String.raw(f||(f=N`
          <br>
          $\begin{aligned}
          ${0}&=${0}
          \end{aligned}$
          <br>
          `),s,i)):i=String.raw(b||(b=N`$${0}=${0}$`),s,i.join("=")):i="<br>";break;case 1:i=a>0?void 0===s?String.raw(p||(p=N`$\dfrac{${0}}{${0}}$`),e/o,t/o):""===s?String.raw(m||(m=N`
          <br>
          $\dfrac{${0}}{${0}} = \dfrac{${0}}{${0}}$
          <br>
          `),e,o,e/o,t/o):String.raw(g||(g=N`
          <br>
          $${0} = \dfrac{${0}}{${0}}$
          <br>
          `),s,e/o,t/o):"<br>"}return i}function B(e=0){const t=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,(0,o.nSR)(2,3));let s=t.length+(0,o.nSR)(1,15);const n=(0,o.CMu)(t.length,s,1);if(1!==(0,l.thl)(...n)){for(let e=0;e<t.length;e++)n[e]=n[e]/(0,l.thl)(...n);s=(0,l.Smz)(n)}const r=s*(0,o.nSR)(1,9),i=W(t,n,r),a=[];for(let o=0;o<i.realisees.length;o++)a.push(t[i.realisees[o]]);const u=H(i.effectifs,a,{axeVertical:!0,titreAxeVertical:"Effectifs"}),c=(0,o.q$q)(i.realisees),$=i.realisees.indexOf(c),h=t[c],d=["$\\textit{* On donnera la valeur exacte et simplifiée.}$","$\\textit{* On donnera une valeur décimale arrondie au millième (si nécessaire).}$","$\\textit{* On donnera un pourcentage arrondi à l'unité (si nécessaire).}$"][e];let f,b="";switch(e){case 0:f={calculs:`${Y(i.effectifs[$],r,"",0,!0)}`,reponse:`$${_(i.frequences[$])}$`};break;case 1:{let e=(0,l.Pj$)((0,l.NMM)(i.frequences[$].valueOf(),3));b=e-(0,l.Pj$)(i.effectifs[$],r)==0?"":"environ",e=T(e);const t="environ"===b?"\\approx":"=";f={calculs:String.raw(x||(x=N`<br>$\dfrac{${0}}{${0}}${0}${0}$<br>`),i.effectifs[$],r,t,e),reponse:`$${e}$`};break}case 2:{let e=(0,l.Pj$)((0,l.NMM)(i.frequences[$].valueOf(),2));b=e-(0,l.Pj$)(i.effectifs[$],r)==0?"":"environ",e={decimal:T(e),pourcentage:T(e.mul(100))};const t="environ"===b?"\\approx":"=";f={calculs:String.raw(S||(S=N`<br>$\dfrac{${0}}{${0}}${0}${0}$<br>`),i.effectifs[$],r,t,e.decimal),reponse:`$${e.pourcentage}~\\%$`};break}}return{texte:String.raw(C||(C=N`Une urne contient des billes de différentes couleurs.
          <br>        
          L'expérience consiste à tirer une bille au hasard,
          à noter sa couleur, puis à la remettre dans l'urne.
          <br>
          On obtient le diagramme des effectifs ci-dessous
          `))+String.raw(j||(j=N`<br>
          ${0}
          <br>
          Calculer la fréquence d'apparition de la couleur ${0}$\textit{*}$.
          <br>
          ${0}
          `),u,h,d),texteCorr:String.raw(v||(v=N`
          La fréquence d'apparition d'une couleur est le quotient
          du nombre d'apparitions de cette couleur par le nombre total d'essais.
          <br>
          $${0}=${0}$
          <br>
          Donc il y a eu $${0}$ essais.
          <br>
          La bille de couleur ${0} est apparue
          $${0}$ fois sur $${0}$ tirages.
          ${0}
          Donc la fréquence d'apparition de la couleur ${0} est ${0} ${0}.
          `),i.effectifs.join("+"),r,r,h,i.effectifs[$],r,f.calculs,h,b,f.reponse)}}function ee(){const e=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,(0,o.nSR)(2,3));let t=e.length+(0,o.nSR)(1,15);const s=(0,o.CMu)(e.length,t,1);if(1!==(0,l.thl)(...s)){for(let t=0;t<e.length;t++)s[t]=s[t]/(0,l.thl)(...s);t=(0,l.Smz)(s)}const n=(0,o.nSR)(1,e.length)-1,r=e[n],i=s[n],a=[];for(const o of e)a.push(o+"s");const u={calculs:`${Y(i,(0,l.Smz)(s),"",0,!0)}`,reponse:`$${_((0,l.Pj$)(i,(0,l.Smz)(s)))}$`};return{texte:`Une urne contient des billes de couleurs différentes : des \n          ${a.slice(0,a.length-1).join(", des ")}\n          et des ${a[a.length-1]}\n          dans le ratio $${s.join("{:}")}$.\n          <br>\n          L'expérience consiste à tirer une bille au hasard et\n          à noter sa couleur.\n          <br>\n          Calculer la probabilité d'obtenir une bille de couleur ${r}.`,texteCorr:String.raw(q||(q=N`
          Comme $${0}=${0}$, la proportion de billes ${0}s est $\dfrac{${0}}{${0}}$.
          ${0}
          Donc la probabilité d'obtenir une bille de couleur ${0} est ${0}.
          `),s.join("+"),(0,l.Smz)(s),r,i,(0,l.Smz)(s),u.calculs,r,u.reponse)}}function te(){const e=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,3);let t=[],s=[],n=[],r=0;for(;(0,l.e47)(r)||0===r||s.length<3;){if(s=[],n=[],r=e.length+(0,o.nSR)(1,45),t=(0,o.CMu)(e.length,r,1),1!==(0,l.thl)(...t)){for(let s=0;s<e.length;s++)t[s]=t[s]/(0,l.thl)(...t);r=(0,l.Smz)(t)}for(let e=0;e<t.length;e++)(0,l.Pj$)(t[e],(0,l.Smz)(t)).d!==(0,l.Smz)(t)?n.push(String.raw(R||(R=N`$${0} = \dfrac{${0}}{${0}}$`),_((0,l.Pj$)(t[e],(0,l.Smz)(t))),t[e],(0,l.Smz)(t))):n.push(String.raw(M||(M=N`$${0}$`),_((0,l.Pj$)(t[e],(0,l.Smz)(t))))),-1===s.indexOf((0,l.Pj$)(t[e],(0,l.Smz)(t)).d)&&s.push((0,l.Pj$)(t[e],(0,l.Smz)(t)).d)}const i=[];for(const o of e)i.push(o+"s");const a=[];for(let o=0;o<e.length;o++)a.push(`$${_((0,l.Pj$)(t[o],(0,l.Smz)(t)))}$`);return{texte:`Une urne contient des billes de couleurs différentes : des\n          ${i.slice(0,i.length-1).join(", des ")}\n          et des ${i[i.length-1]}.\n          <br>\n          L'expérience consiste à tirer une bille au hasard et\n          à noter sa couleur.\n          <br>\n          Les probabilités respectives de chaque couleur sont ${a.slice(0,a.length-1).join(", ")}\n          et ${a[a.length-1]}.\n          <br>\n          Dans quel ratio les couleurs sont-elles ?`,texteCorr:String.raw(w||(w=N`
          Écrivons toutes les probabilités avec le même dénominateur.
          <br>
          ${0}
          <br>
          Donc les couleurs ${0}
          et ${0}
          sont dans le ratio $${0}$.
          `),n.join(" ; "),i.slice(0,i.length-1).join(", "),i[i.length-1],t.join("{:}"))}}function se(){const e=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,(0,o.nSR)(2,3));let t=e.length+(0,o.nSR)(0,3);const s=(0,o.CMu)(e.length,t,1);if(1!==(0,l.thl)(...s)){for(let t=0;t<e.length;t++)s[t]=s[t]/(0,l.thl)(...s);t=(0,l.Smz)(s)}const n=K(e,s),r=[(0,o.nSR)(1,e.length)-1,(0,o.nSR)(1,e.length)-1],i=[e[r[0]],e[r[1]]],a=i[0]===i[1]?`Obtenir deux billes de couleurs ${i[1]}s`:`Obtenir une bille de couleur ${i[0]}\n          et une bille de couleur ${i[1]}`,u=[s[r[0]],s[r[1]]],c=[];for(const o of e)c.push(o+"s");const $=[];for(let o=0;o<e.length;o++)$.push(`$${_((0,l.Pj$)(s[o],(0,l.Smz)(s)))}$`);const h=`Une urne contient des billes de couleurs différentes : des \n          ${c.slice(0,c.length-1).join(", des ")}\n          et des ${c[c.length-1]}\n          dans le ratio $${s.join("{:}")}$.\n          <br>\n          L'expérience consiste à tirer une bille au hasard,\n          à noter sa couleur, à la replacer dans l'urne,\n          puis à recommencer une seconde fois.\n          <br>\n          Quelle est la probabilité de l'événement "${a}" ?\n          `;let d=[`\\hline &${n.issuesAbregees.join("&")}\\\\`];for(let o=0;o<n.issues.length;o++){d.push(`\\hline ${n.issuesAbregees[o]}`);for(let e=0;e<n.issues.length;e++)d.push(`&(${n.issuesAbregees[o]}{;}${n.issuesAbregees[e]})`);d.push("\\\\")}d=d.join("");const f=i[0]===i[1]?1:2,b=u[0]*u[1]*f==1?"issue qui réalise":"issues qui réalisent",p={calculs:`${Y(u[0]*u[1]*f,n.issues.length**2,"",0,!0)}`,reponse:`$${_((0,l.Pj$)(u[0]*u[1]*f,n.issues.length**2))}$`};return{texte:h,texteCorr:String.raw(D||(D=N`
          Listons dans un tableau à double entrée toutes les issues
          de cette expérience.
          <br>
          $
          \begin{array}{${0}|}
          ${0}
          \hline
          \end{array}
          $
          <br>
          Il y a $${0}$ issues au total
          et toutes ont la même probabilité d'être obtenue.
          <br>
          Il y a $${0}$ ${0} l'événement "${0}".
          ${0}
          Donc la probabilité de cet événement est ${0}.
          `),K(["|c"],[n.issues.length+1]).issues.join(""),d,n.issues.length**2,u[0]*u[1]*f,b,a,p.calculs,p.reponse)}}function ne(){const e=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,(0,o.nSR)(2,3)),t=(0,o.SRM)(["Pile","Face"]).slice(0,2);let s=e.length+(0,o.nSR)(0,3);const n=t.length,r=(0,o.CMu)(e.length,s,1),i=(0,o.CMu)(t.length,n,1);if(1!==(0,l.thl)(...r)){for(let t=0;t<e.length;t++)r[t]=r[t]/(0,l.thl)(...r);s=(0,l.Smz)(r)}const a=K(e,r),u=K(t,i),c=[(0,o.nSR)(1,e.length)-1,(0,o.nSR)(1,t.length)-1],$=[e[c[0]],t[c[1]]],h=`Obtenir une bille de couleur ${$[0]} avec l'urne et obtenir ${$[1]} avec la pièce`,d=[r[c[0]],1],f=[];for(const o of e)f.push(o+"s");const b=`Une urne contient des billes de couleurs différentes : des\n          ${f.slice(0,f.length-1).join(", des ")}\n          et des ${f[f.length-1]}\n          dans le ratio $${r.join("{:}")}$.\n          <br>\n          L'expérience consiste à tirer une bille au hasard,\n          à noter sa couleur, à lancer une pièce de monnaie équilibrée\n          puis à noter la face du dessus.\n          <br>\n          Quelle est la probabilité de l'événement "${h}" ?\n          `;let p=[`\\hline &${a.issuesAbregees.join("&")}\\\\`];for(let o=0;o<u.issues.length;o++){p.push(`\\hline ${u.issuesAbregees[o]}`);for(let e=0;e<a.issues.length;e++)p.push(`&(${u.issuesAbregees[o]}{;}${a.issuesAbregees[e]})`);p.push("\\\\")}p=p.join("");const m=d[0]*d[1]==1?"issue qui réalise":"issues qui réalisent",g={calculs:`${Y(d[0]*d[1],a.issues.length*u.issues.length,"",0,!0)}`,reponse:`$${_((0,l.Pj$)(d[0]*d[1],a.issues.length*u.issues.length))}$`};return{texte:b,texteCorr:String.raw(P||(P=N`
          Listons dans un tableau à double entrée toutes les issues
          de cette expérience.
          <br>
          $
          \begin{array}{${0}|}
          ${0}
          \hline
          \end{array}
          $
          <br>
          Il y a $${0}$ issues au total
          et toutes ont la même probabilité d'être obtenue.
          <br>
          Il y a $${0}$ ${0} l'événement "${0}".
          ${0}
          Donc la probabilité de cet événement est ${0}.
          `),K(["|c"],[a.issues.length+1]).issues.join(""),p,a.issues.length*u.issues.length,d[0]*d[1],m,h,g.calculs,g.reponse)}}function re(){const e=(0,o.SRM)(["jaune","verte","bleue","rouge","noire"]).slice(0,4);let t=e.length+(0,o.nSR)(100,350);const s=(0,o.CMu)(e.length,t,(0,l.NMM)(t/10));if(1!==(0,l.thl)(...s)){for(let t=0;t<e.length;t++)s[t]=s[t]/(0,l.thl)(...s);t=(0,l.Smz)(s)}const n=t*(0,o.nSR)(300,500),r=W(e,s,n),i=[];for(let o=0;o<r.realisees.length;o++)i.push(e[r.realisees[o]]);const a=H(r.effectifs,i,{axeVertical:!0,titreAxeVertical:"Effectifs"}),u=(0,o.q$q)(r.realisees),c=r.realisees.indexOf(u),$=e[u],h={calculs:`${Y(r.effectifs[c],n,"",0,!0)}`,reponse:`${_(r.frequences[c])}`};return{texte:String.raw(k||(k=N`Une urne contient ${0} billes de couleurs différentes.
          <br>
          L'expérience consiste à tirer une bille au hasard,
          à noter sa couleur, puis à la remettre dans l'urne.
          <br>
          On obtient le diagramme des effectifs ci-dessous
          après $${0}$ tirages où on a pu constater
          une stabilisation des fréquences de chaque issue.
          <br>
          ${0}
          <br>
          Calculer le nombre de billes de couleur ${0} qu'il y a dans l'urne.
          `),t,T(n),a,$),texteCorr:String.raw(y||(y=N`
          La fréquence d'apparition d'une couleur est le quotient
          du nombre d'apparitions de cette couleur par le nombre total d'essais.
          <br>
          La bille de couleur ${0} est apparue
          $${0}$ fois sur $${0}$ tirages.
          ${0}
          Donc la fréquence d'apparition de la couleur ${0} est $${0}$.
          <br>
          Pour un nombre suffisamment grand d'essais, la fréquence d'une issue se stabilise autour de sa probabilité.
          <br>
          La proportion de billes de couleur ${0} est donc proche de cette fréquence.
          <br>
          $${0} \times ${0} \approx ${0}$.
          <br>
          Il y a donc $${0}$ billes ${0}s dans l'urne.
          `),$,T(r.effectifs[c]),T(n),h.calculs,$,h.reponse,$,h.reponse,t,s[u],s[u],$)}}function ie(){let e=3+(0,o.nSR)(1,15),t=(0,l.pIu)((0,o.CMu)(3,e,1));t=(0,l.csF)(t,(0,l.thl)(...t._data)),e=(0,l.Smz)(t);const s=(0,o.nSR)(2,16),n=(0,l.JpY)(t,s);let r=[];for(const l of n._data){const e=String.raw(z||(z=N`\bullet\quad${0}=${0}`),l,(0,o.Wt$)(l));-1===r.indexOf(e)&&r.push(e)}let i="";r.length>1&&(r="$"+r.join("\\quad")+"$",i=`Décomposons chaque partie du ratio en produits de facteurs premiers pour déterminer le PGCD.\n    <br>\n    ${r}\n    <br>\n    Le PGCD des trois parties du ratio est ${s}.\n    <br>\n    `);return{texte:String.raw(F||(F=N`Simplifier le ratio $${0}$
          `),n._data.join("{:}")),texteCorr:String.raw(O||(O=N`${0}
          On peut donc le simplifier par ${0}.
          <br>
          $${0} = ${0}$
          `),i,s,n._data.join("{:}"),t._data.join("{:}"))}}function oe(){const e=[],t=[];e.push((0,l.Pj$)((0,o.q$q)(["1/2","1/4","3/4","1/10","1/5","2/5","3/5","4/5","3/10","7/10","9/10"])));const s=(0,o.nSR)(2,19);t.push(String.raw(A||(A=N`\dfrac{${0}}{${0}}`),e[0].n*s,e[0].d*s)),e.push((0,l.Pj$)((0,o.nSR)(1,9),10)),t.push(T(e[1].valueOf())),e.push((0,l.Pj$)((0,o.nSR)(0,9),10).add((0,l.Pj$)((0,o.nSR)(0,9),100).add((0,l.Pj$)((0,o.nSR)(1,9),1e3)))),t.push(T(e[2].valueOf()));const n=`Sans calculatrice, convertir en pourcentages les nombres de la liste suivante.\n  <br>\n  ${String.raw(L||(L=N`$ {\color{red}a.}~${0}$
  $\quad {\color{red}b.}~${0}$
  $\quad {\color{red}c.}~${0}$
  `),t[0],t[1],t[2])}\n  `,r={calculs:`${Y(e[0].n*s,e[0].d*s,"",0,!1)}$=${T(e[0])}=${T(e[0].mul(100))}\\%$`,reponse:`$${_(e[0])}$`};return{texte:n,texteCorr:String.raw(Q||(Q=N`
  $ {\color{red}a.}~$ ${0}
  <br>
  $ {\color{red}b.}~${0}=${0}0=${0}\% \quad {\color{red}c.}~${0}=${0}\%$
  `),r.calculs,t[1],t[1],T(e[1].mul(100)),t[2],T(e[2].mul(100)))}}function le(){n.default.call(this),this.consigne="",this.nbQuestions=10,this.nbCols=0,this.nbColsCorr=0,this.tailleDiaporama=1,this.video="",this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!0,i.Do.isHtml?this.spacing=2.5:this.spacing=0,i.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=0,this.sup=0,this.besoinFormulaireNumerique=["Type de question",9,["0 : Mélange des types de questions","1 : Calculer une fréquence à partir du diagramme des effectifs (valeur exacte).","2 : Calculer une fréquence à partir du diagramme des effectifs (valeur approchée).","3 : Calculer une fréquence à partir du diagramme des effectifs (pourcentage).","4 : Calcul d'une probabilité à partir d'un ratio.","5 : Calcul d'un probabilité à partir de pobabilités.","6 : Expérience à deux épreuves (avec remise) : Calcul d'une probabilité à partir de ratios.","7 : Expérience à deux épreuves différentes : Calcul d'une probabilité à partir de ratios.","8 : Diagramme des effectifs : Utilisation de la stabilistation des fréquences.","9 : Simplifier un ratio.","10 : Convertir un nombre en pourcentages."].join("\n")],this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];for(let t,s=0,n=0;s<this.nbQuestions&&n<50;){const e=0===this.sup?(0,o.nSR)(1,10):this.sup;switch(e){case 1:t=B(0);break;case 2:t=B(1);break;case 3:t=B(2);break;case 4:t=ee();break;case 5:t=te();break;case 6:t=se();break;case 7:t=ne();break;case 8:t=re();break;case 9:t=ie();break;case 10:t=oe()}this.questionJamaisPosee(s,e)&&(this.listeQuestions.push(t.texte),this.listeCorrections.push(t.texteCorr),s++),n++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=21358.77f198d9e60d9d9aac80.js.map