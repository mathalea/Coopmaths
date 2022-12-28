"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[69818,25523],{69818:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>a,interactifReady:()=>l,interactifType:()=>h,amcReady:()=>m,amcType:()=>f,default:()=>d});var s=i(25523),n=i(22380),o=i(25482),r=i(71250),u=i(47634),c=i(11945);const a="Placer un point d’abscisse décimale",l=!0,h="custom",m=!0,f="AMCOpen";function d(){s.default.call(this),this.consigne=" Placer trois points sur un axe gradué.",this.nbQuestions=5,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.sup=1;const e=function(e,t,i){return t+3*(e-t)*i};this.nouvelleVersion=function(t){this.sup=parseInt(this.sup);const i=[],s=[];let a;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.contenu="",this.contenuCorrection="",a=this.sup>3?(0,o.SRM)([1,2,3],this.nbQuestions):(0,o.SRM)([this.sup],this.nbQuestions),this.contenu=(0,o.Iwc)(this.consigne);for(let c,l,h,m,f,d,p,b,v,g,x,C,y,E,R,$,k,L,S,q,D=0;D<this.nbQuestions;D++){const t=[],A=[];switch(s[D]=[],i[D]=[],f=(0,o.Gag)(3*D+1),d=(0,o.Gag)(3*D+2),p=(0,o.Gag)(3*D+3),a[D]){case 1:c=this.sup>4?(0,o.nSR)(-5,5):(0,o.nSR)(0,9),k=1,L=10;break;case 2:c=this.sup>4?(0,o.n0o)((0,o.nSR)(-50,50)/10):(0,o.n0o)((0,o.nSR)(0,90)/10),k=10,L=10;break;case 3:c=this.sup>4?(0,o.n0o)((0,o.nSR)(-500,500)/100):(0,o.n0o)((0,o.nSR)(0,990)/100),k=100,L=10}if(b=(0,o.nSR)(0,2),v=(0,o.nSR)(3,4),g=(0,o.nSR)(5,6),x=(0,o.nSR)(1,9),C=(0,o.nSR)(1,9),y=(0,o.nSR)(1,3),l=(0,o.vbX)(c+b/k+x/k/L,a[D]),h=(0,o.vbX)(c+v/k+C/k/L,a[D]),m=(0,o.vbX)(c+g/k+y/k/L,a[D]),E=(0,r.xmu)(e(l,c,k),0,f,"above"),R=(0,r.xmu)(e(h,c,k),0,d,"above"),$=(0,r.xmu)(e(m,c,k),0,p,"above"),this.interactif&&!n.Do.isAmc)for(let n,r,a=0;a<70;a++)r=c+a/k/L,n=(0,u.x2)(e(r,c,k),0,{size:6,width:2,color:"blue",radius:.15}),t.push(n),(0,o.h$R)(r,l)||(0,o.h$R)(r,h)||(0,o.h$R)(r,m)?i[D].push(n):s[D].push(n);const M=(0,r.oqt)({Unite:3*k,Min:c,Max:c+6.9/k,x:c,y:0,thickSecDist:1/L/k,thickSec:!0,labelsPrincipaux:!0,thickDistance:1/k});t.push(M),A.push(M),S=`Placer les points : $${f}(${(0,o.k$K)(l)}), ${d}(${(0,o.k$K)(h)}), ${p}(${(0,o.k$K)(m)})$<br>`,S+=(0,r.iR9)({xmin:c-.5,xmax:c+22,ymin:-1,ymax:1,scale:.75,pixelsParCm:40},t),this.interactif&&!n.Do.isAmc&&(S+=`<div id="resultatCheckEx${this.numeroExercice}Q${D}"></div>`),A.push((0,r.BD1)(E,R,$),(0,r.L6P)(E,R,$)),q=(0,r.iR9)({xmin:c-.5,xmax:c+22,ymin:-1,ymax:1,scale:.75,pixelsParCm:40},A),n.Do.isAmc&&(this.autoCorrection[D]={enonce:S,propositions:[{texte:q,statut:0,feedback:""}]}),this.listeQuestions.push(S),this.listeCorrections.push(q)}this.exoCustomResultat=!1,this.correctionInteractive=e=>{let t=0,n=0;for(let o,r=0;r<this.nbQuestions;r++){o=!0;for(const t of s[r])t.etat&&(o=!1),t.stopCliquable();for(const t of i[r])t.etat||(o=!1),t.stopCliquable();const e=document.querySelector(`#resultatCheckEx${this.numeroExercice}Q${r}`);for(let t=0;t<i[r].length;t++)i[r][t].stopCliquable();o&&i[r][0].etat&&i[r][1].etat&&i[r][2].etat?(e.innerHTML="😎",t++):(e.innerHTML="☹️",n++)}(0,c.g9)(this,t,n)},(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange"]}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})},47634:(e,t,i)=>{i.d(t,{x2:()=>r,Zd:()=>c,I4:()=>a});var s=i(71250),n=i(22380);function o(e,t,i){s.En$.call(this);const n=(0,s.xmu)(e,t);this.point=n,i||(i={});const o=i.out||{opacity:0},r=i.over||{opacity:.5},u=i.click||{opacity:i.opacite||1};this.etat=!1,this.svg=function(e){let t;const o=(0,s.L6P)(n);return o.color=i.color||i.couleur||"black",o.epaisseur=i.width||i.epaisseur||1,o.taille=i.size||i.taille||3,o.isVisible=!1,o.style=i.style||"x",t=`<g id="${this.id}">\n`,t+=o.svg(e)+"\n",t+=`<circle cx="${n.xSVG(e)}" cy="${n.ySVG(e)}" r="${(i.radius||i.rayon||1)*e}" fill="none" pointer-events="visible" />\n`,t+="</g>",t};const c=this,a=()=>{document.removeEventListener("exercicesAffiches",a);const e=document.getElementById(`${this.id}`),t=e=>{this.etat=e};if(e){for(const t in o)e.style[t]=o[t];function i(){for(const e in r)this.style[e]=r[e]}function s(){for(const e in o)this.style[e]=o[e]}function n(){if(c.etat){e.addEventListener("mouseover",i),e.addEventListener("mouseout",s);for(const e in o)this.style[e]=o[e];c.etat=!1,t(!1)}else{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s);for(const e in u)this.style[e]=u[e];c.etat=!0}}e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),e.addEventListener("click",n)}};document.addEventListener("exercicesAffiches",a),this.stopCliquable=()=>{const e=document.getElementById(`${this.id}`);e.replaceWith(e.cloneNode(!0))}}function r(...e){return new o(...e)}function u(e,t,i,n,o){s.En$.call(this);const r=(0,s.xmu)(e,t),u=(0,s.xmu)(i,t),c=(0,s.xmu)(i,n),a=(0,s.xmu)(e,n),l=(0,s.R_h)(r,u,c,a),h=(0,s.R_h)(r,u,c,a);o||(o={});const m=o.out||{opacity:0},f=o.over||{opacity:.2},d=o.click||{opacity:1},p=o.couleur||"#f15929",b=void 0===o.cliquable||o.cliquable;l.hachures=o.hachures||!1,l.epaisseurDesHachures=o.epaisseurDesHachures||4,h.epaisseur=o.epaisseur||1,this.etat=o.etat||!1,this.svg=function(e){let t;return l.couleurDeRemplissage=o.color||o.couleur||o.couleurDeRemplissage||"#f15929",l.epaisseur=0,l.isVisible=!1,t=`<g id="rectangle${this.id}">\n`,t+=l.svg(e)+"\n",t+="</g>",t+=h.svg(e),t},this.tikz=e=>(this.etat&&(h.couleurDeRemplissage=p),h.hachures=l.hachures,h.tikz(e));const v=this,g=()=>{document.removeEventListener("exercicesAffiches",g);const e=document.getElementById("rectangle"+this.id),t=e=>{this.etat=e};if(e)for(const i in m)e.style[i]=this.etat?d[i]:m[i];if(e&&b){function i(){for(const e in f)this.style[e]=f[e]}function s(){for(const e in m)this.style[e]=m[e]}function n(){if(v.etat){e.addEventListener("mouseover",i),e.addEventListener("mouseout",s);for(const e in m)this.style[e]=m[e];v.etat=!1,t(!1)}else{e.removeEventListener("mouseover",i),e.removeEventListener("mouseout",s);for(const e in d)this.style[e]=d[e];v.etat=!0}}e.addEventListener("mouseover",i),e.addEventListener("mouseout",s),e.addEventListener("click",n)}};document.addEventListener("exercicesAffiches",g),this.stopCliquable=()=>{const e=document.getElementById(`${this.id}`);e.replaceWith(e.cloneNode(!0))}}function c(...e){return new u(...e)}function a(e,t,i,o,r){const u=[];r||(r={});const a=r.longueur||4,l=r.ecart||1,h=r.hauteur||1,m=r.liste1||[],f=r.liste2||[];let d=r.couleur1||"#f15929",p=r.couleur2||"#1DA962";n.Do.isHtml||(d=r.couleur1||"gray",p=r.couleur2||"lightgray");const b=r.hachures1||!1,v=r.hachures2||!1,g=r.couleur||d,x=void 0===r.cliquable||r.cliquable;let C;for(let n=0;n<i;n++){C=(0,s.xmu)(e+n*(a+l),t);for(let e=0;e<o;e++)m.includes(n*o+e+1)?u.push(c(C.x+e*a/o,t,C.x+(e+1)*a/o,t+h,{cliquable:x,etat:!0,couleur:d,hachures:b})):f.includes(n*o+e+1)?u.push(c(C.x+e*a/o,t,C.x+(e+1)*a/o,t+h,{cliquable:x,etat:!0,couleur:p,hachures:v})):u.push(c(C.x+e*a/o,t,C.x+(e+1)*a/o,t+h,{cliquable:x,couleur:g,etat:!1}))}return u}}}]);
//# sourceMappingURL=69818.548858f2e54f5109f41d.js.map