"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[64054,25523],{25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})},64054:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>l,interactifReady:()=>a,interactifType:()=>h,dateDePublication:()=>m,dateDeModifImportante:()=>d,default:()=>f});var s=i(25523),o=i(25482),n=i(71250),r=i(47634),u=i(11945),c=i(22380);const l="Fractions interactives",a=!0,h="custom",m="25/10/2021",d="24/10/2021";function f(){s.default.call(this),this.consigne="",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.tailleDiaporama=3,this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const t=c.Do.isHtml?1:.6,i=[],s=[],l=c.Do.isHtml?-2:-.1,a=(0,n.R_h)((0,n.xmu)(0,0),(0,n.xmu)(5,0),(0,n.xmu)(5,t),(0,n.xmu)(0,t));this.introduction=`Pour chaque question, l'unité est représentée par ce rectangle : ${(0,n.iR9)({xmin:-.1,ymin:-.1,ymax:t+.1,style:"display: inline; vertical-align: -5px"},a)}`;for(let u,h,m=0,d=0;m<this.nbQuestions&&d<50;){const e=(0,o.nSR)(1,4),a=(0,o.nSR)(2,4);s[m]=e,i[m]=(0,r.I4)(0,0,3,a,{longueur:5,ecart:.5,hauteur:t,liste1:[1,3,6],liste2:[2,4],hachures2:!0,couleur2:"blue",cliquable:!1}),u=`Colorie $${(0,o.qaf)(e,a)}$. ${(0,n.iR9)({xmin:-.5,xmax:18,ymin:l,ymax:t+.2},(0,r.Zd)(0,0,4,1,{etat:!0}))}`,u+="<br>"+(0,n.iR9)({xmin:-.5,xmax:18,ymin:l,ymax:t+.2},i[m]),h="Rien",this.interactif&&c.Do.isHtml&&(u+=`<div id="resultatCheckEx${this.numeroExercice}Q${m}"></div>`),this.questionJamaisPosee(m,e,a)&&(this.listeQuestions.push(u),this.listeCorrections.push(h),m++),d++}this.interactif||document.addEventListener("exercicesAffiches",(()=>{for(let e=0;e<this.nbQuestions;e++)for(const t of i[e])t.stopCliquable()})),this.correctionInteractive=e=>{let t=0,o=0;for(let n=0;n<this.nbQuestions;n++){let e=0;for(const t of i[n])t.etat&&e++,t.stopCliquable();const r=document.querySelector(`#resultatCheckEx${this.numeroExercice}Q${n}`);e===s[n]?(r.innerHTML="😎",t++):(r.innerHTML="☹️",o++)}(0,u.g9)(this,t,o)},(0,o.K1R)(this)}}},47634:(e,t,i)=>{i.d(t,{x2:()=>r,Zd:()=>c,I4:()=>l});var s=i(71250),o=i(22380);function n(e,t,i){s.En$.call(this);const o=(0,s.xmu)(e,t);this.point=o,i||(i={});const n=i.out||{opacity:0},r=i.over||{opacity:.5},u=i.click||{opacity:i.opacite||1};this.etat=!1,this.svg=function(e){let t;const n=(0,s.L6P)(o);return n.color=i.color||i.couleur||"black",n.epaisseur=i.width||i.epaisseur||1,n.taille=i.size||i.taille||3,n.isVisible=!1,n.style=i.style||"x",t=`<g id="${this.id}">\n`,t+=n.svg(e)+"\n",t+=`<circle cx="${o.xSVG(e)}" cy="${o.ySVG(e)}" r="${(i.radius||i.rayon||1)*e}" fill="none" pointer-events="visible" />\n`,t+="</g>",t};const c=this,l=()=>{document.removeEventListener("exercicesAffiches",l);const e=document.getElementById(`${this.id}`),t=e=>{this.etat=e};if(e){for(const t in n)e.style[t]=n[t];function i(){for(const e in r)this.style[e]=r[e]}function s(){for(const e in n)this.style[e]=n[e]}function o(){if(c.etat){e.addEventListener("mouseover",i),e.addEventListener("mouseout",s);for(const e in n)this.style[e]=n[e];c.etat=!1,t(!1)}else{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s);for(const e in u)this.style[e]=u[e];c.etat=!0}}e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),e.addEventListener("click",o)}};document.addEventListener("exercicesAffiches",l),this.stopCliquable=()=>{const e=document.getElementById(`${this.id}`);e.replaceWith(e.cloneNode(!0))}}function r(...e){return new n(...e)}function u(e,t,i,o,n){s.En$.call(this);const r=(0,s.xmu)(e,t),u=(0,s.xmu)(i,t),c=(0,s.xmu)(i,o),l=(0,s.xmu)(e,o),a=(0,s.R_h)(r,u,c,l),h=(0,s.R_h)(r,u,c,l);n||(n={});const m=n.out||{opacity:0},d=n.over||{opacity:.2},f=n.click||{opacity:1},b=n.couleur||"#f15929",v=void 0===n.cliquable||n.cliquable;a.hachures=n.hachures||!1,a.epaisseurDesHachures=n.epaisseurDesHachures||4,h.epaisseur=n.epaisseur||1,this.etat=n.etat||!1,this.svg=function(e){let t;return a.couleurDeRemplissage=n.color||n.couleur||n.couleurDeRemplissage||"#f15929",a.epaisseur=0,a.isVisible=!1,t=`<g id="rectangle${this.id}">\n`,t+=a.svg(e)+"\n",t+="</g>",t+=h.svg(e),t},this.tikz=e=>(this.etat&&(h.couleurDeRemplissage=b),h.hachures=a.hachures,h.tikz(e));const p=this,x=()=>{document.removeEventListener("exercicesAffiches",x);const e=document.getElementById("rectangle"+this.id),t=e=>{this.etat=e};if(e)for(const i in m)e.style[i]=this.etat?f[i]:m[i];if(e&&v){function i(){for(const e in d)this.style[e]=d[e]}function s(){for(const e in m)this.style[e]=m[e]}function o(){if(p.etat){e.addEventListener("mouseover",i),e.addEventListener("mouseout",s);for(const e in m)this.style[e]=m[e];p.etat=!1,t(!1)}else{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s);for(const e in f)this.style[e]=f[e];p.etat=!0}}e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),e.addEventListener("click",o)}};document.addEventListener("exercicesAffiches",x),this.stopCliquable=()=>{const e=document.getElementById(`${this.id}`);e.replaceWith(e.cloneNode(!0))}}function c(...e){return new u(...e)}function l(e,t,i,n,r){const u=[];r||(r={});const l=r.longueur||4,a=r.ecart||1,h=r.hauteur||1,m=r.liste1||[],d=r.liste2||[];let f=r.couleur1||"#f15929",b=r.couleur2||"#1DA962";o.Do.isHtml||(f=r.couleur1||"gray",b=r.couleur2||"lightgray");const v=r.hachures1||!1,p=r.hachures2||!1,x=r.couleur||f,g=void 0===r.cliquable||r.cliquable;let y;for(let o=0;o<i;o++){y=(0,s.xmu)(e+o*(l+a),t);for(let e=0;e<n;e++)m.includes(o*n+e+1)?u.push(c(y.x+e*l/n,t,y.x+(e+1)*l/n,t+h,{cliquable:g,etat:!0,couleur:f,hachures:v})):d.includes(o*n+e+1)?u.push(c(y.x+e*l/n,t,y.x+(e+1)*l/n,t+h,{cliquable:g,etat:!0,couleur:b,hachures:p})):u.push(c(y.x+e*l/n,t,y.x+(e+1)*l/n,t+h,{cliquable:g,couleur:x,etat:!1}))}return u}}}]);
//# sourceMappingURL=64054.55671ea62027137b48aa.js.map