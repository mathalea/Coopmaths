(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1679,5216],{21679:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>c,interactifReady:()=>a,amcReady:()=>u,amcType:()=>l,default:()=>p});var o=i(75216),r=i(89459),s=i(55339),n=i(32964);const c="Additions de 5 nombres relatifs",a=!0,u=!0,l=4;function p(e=20){o.default.call(this),this.sup=e,this.sup2=!1,this.titre=c,this.consigne="Calculer",this.spacing=2,this.nbCols=1,this.nbColsCorr=1,this.interactif=!0,this.interactifReady=a,this.amcType=l,this.amcReady=u,this.nouvelleVersion=function(){r.Do.isHtml||(this.interactif=!1),this.sup=parseInt(this.sup),this.sup2=parseInt(this.sup2),this.interactif&&(this.spacing=3),this.listeQuestions=[],this.listeCorrections=[];for(let e,t,i,o,c,a,u,l,p,h,m,d,$,f=0,b=0;f<this.nbQuestions&&b<50;){if(e=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),t=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),i=1===e&1===t?-1:-1===e&-1===t?1:(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),o=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),c=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),a=1,u=1,l=1,p=1,$=e+t+i+o+c,this.sup2)m=`$ ${(0,s.Gag)(f+1)} = ${e}${(0,s.tPu)(t)}${(0,s.tPu)(i)}${(0,s.tPu)(o)}${(0,s.tPu)(c)} = \\dotfill $`,this.interactif&&!r.Do.isAmc&&(m=(0,n.te)(this,f,{texte:`$ ${(0,s.Gag)(f+1)} = ${e}${(0,s.tPu)(t)}${(0,s.tPu)(i)}${(0,s.tPu)(o)}${(0,s.tPu)(c)} = $`})),r.Do.isHtml||r.Do.isAmc||(m+=`<br>$ ${(0,s.Gag)(f+1)} = \\dotfill $`),d=`$ ${(0,s.Gag)(f+1)} =  ${e}${(0,s.tPu)(t)}${(0,s.tPu)(i)}${(0,s.tPu)(o)}${(0,s.tPu)(c)} = ${(0,s.knq)([e,t,i,o,c])[0]}${(0,s.tPu)((0,s.knq)([e,t,i,o,c])[1])} = ${e+t+i+o+c} $`;else{m=`$ ${(0,s.Gag)(f+1)} =  ${(0,s.aIp)(e)}${(0,s.mKt)(a)}${(0,s.aIp)(t)}${(0,s.mKt)(u)}${(0,s.aIp)(i)}${(0,s.mKt)(l)}${(0,s.aIp)(o)}${(0,s.mKt)(p)}${(0,s.aIp)(c)} = \\dotfill $`,this.interactif&&!r.Do.isAmc&&(m=(0,n.te)(this,f,{texte:`$ ${(0,s.Gag)(f+1)} =  ${(0,s.aIp)(e)}${(0,s.mKt)(a)}${(0,s.aIp)(t)}${(0,s.mKt)(u)}${(0,s.aIp)(i)}${(0,s.mKt)(l)}${(0,s.aIp)(o)}${(0,s.mKt)(p)}${(0,s.aIp)(c)} = $`})),r.Do.isHtml||r.Do.isAmc||(m+=`<br>$ ${(0,s.Gag)(f+1)} = \\dotfill $`),d=`$ ${(0,s.Gag)(f+1)} =  ${(0,s.aIp)(e)}${(0,s.mKt)(a)}${(0,s.aIp)(t)}${(0,s.mKt)(u)}${(0,s.aIp)(i)}${(0,s.mKt)(l)}${(0,s.aIp)(o)}${(0,s.mKt)(p)}${(0,s.aIp)(c)} $`,h=(0,s.Q3c)([e,a*t,u*i,l*o,p*c]),h[0]>0&h[4]<0&&(d+=`<br>$ \\phantom{A}= ${(0,s.kch)(h[0])}+${(0,s.kch)(h[1])}+${(0,s.kch)(h[2])}+${(0,s.kch)(h[3])}+${(0,s.kch)(h[4])} $`);const $=(0,s.knq)([h[0],h[1],h[2],h[3],h[4]]);0!==$[0]&&0!==$[1]?(d+=`<br>$ \\phantom{A}= ${(0,s.kch)($[0])}+${(0,s.kch)($[1])} $`,d+=`<br>$ \\phantom{A}= ${(0,s.Zux)(e+a*t+u*i+l*o+p*c)}$<br>`):0!==$[0]?d+=`<br>$ \\phantom{A}=${(0,s.Zux)($[0])}$`:d+=`<br>$ \\phantom{A}=${(0,s.Zux)($[1])}$<br>`}-1===this.listeQuestions.indexOf(m)&&((0,n.Iq)(this,f,$,{signe:!0}),this.listeQuestions.push(m),this.listeCorrections.push(d),f++),b++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",99999],this.besoinFormulaire2CaseACocher=["Avec des écritures simplifiées"]}},75216:(e,t,i)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>o})},32964:(e,t,i)=>{"use strict";i.d(t,{Sq:()=>n,l3:()=>c,te:()=>a,Iq:()=>u});var o=i(89459),r=i(55339),s=i(60913);function n(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{e.nbQuestions;for(const t in e.autoCorrection){const i=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),o=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);o.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(i.innerHTML="😎"):(i.innerHTML="☹️"),o.readOnly=!0,i.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",i="rgba(123, 239, 178, 0.5)",o=document.querySelector(`#btnQcmEx${e.numeroExercice}`);o&&o.addEventListener("click",(r=>{for(let o=0;o<e.nbQuestions;o++){let r,n=0,c=0,a=0;for(let t=0;t<e.autoCorrection[o].propositions.length;t++)e.autoCorrection[o].propositions[t].statut&&a++;const u=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${o}`);e.autoCorrection[o].propositions.forEach(((s,a)=>{const u=document.querySelector(`#labelEx${e.numeroExercice}Q${o}R${a}`),l=document.querySelector(`#checkEx${e.numeroExercice}Q${o}R${a}`);s.statut?(u.style.backgroundColor=i,l.checked&&(n++,r=a)):!0===l.checked&&(u.style.backgroundColor=t,c++,r=a)}));let l="positive";0===c&&n===a?u.innerHTML="😎":(u.innerHTML="☹️",l="error"),u.style.fontSize="large",r>-1&&e.autoCorrection[o].propositions[r].feedback&&(0,s.$N)({id:`feedbackEx${e.numeroExercice}Q${o}`,message:e.autoCorrection[o].propositions[r].feedback,type:l})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),o.classList.add("disabled")}))}))}(e)}function c(e,t){e.titre="cacaboudin";let i="",s="",n="";if(n=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let o=i+1;o<e.length;)e[i].texte===e[o].texte?(t=!0,e[i].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[i].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let r=0;r<e.autoCorrection[t].propositions.length;r++)o.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${r}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${r}">${e.autoCorrection[t].propositions[r].texte+n}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n,e.autoCorrection[t].propositions[r].statut?s+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n:s+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n;o.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:s}}function a(e,t,{texte:i="",texteApres:r="",inline:s=!0,numeric:n=!0,indice:c}={}){return o.Do.isHtml&&e.interactif?`<div class="ui form ${s?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${n?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}${c||""}" >\n      <span>${r}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,i,{digits:o=0,decimals:r=0,signe:s=!1,exposantNbChiffres:n=0,exposantSigne:c=!1,approx:a=0}={}){let u=[];u=Array.isArray(i)?i:[i],void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.param={digits:o,decimals:r,signe:s,exposantNbChiffres:n,exposantSigne:c,approx:a};for(const l of u)e.autoCorrection[t].reponse.valeur=l}},60913:(e,t,i)=>{"use strict";i.d(t,{$N:()=>p,JF:()=>l});const o=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function r(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,i,o]=t;e.style[i]=o}}));else if("object"==typeof t)for(const i in t)o(t,i)&&(e.style[i]=t[i])}catch(i){console.error(i)}}function s(e,t){e.appendChild(window.document.createTextNode(t))}function n(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const i=document.getElementById(e);if(!i&&t)throw Error(`L’élément html ${e} n’existe pas`);return i}function c(e,t,i,n){const c=function(e,t,i){const n=window.document.createElement(e);let c;try{if(t)for(c in t)o(t,c)&&("class"===c?n.className=t.class:"className"===c?n.className=t.className:"style"===c?r(n,t.style):n.setAttribute(c,t[c]))}catch(a){console.error(a)}return i&&s(n,i),n}(t,i,n);return e.appendChild(c),c}const a=["info","warning","error","positive"];function u(e,{message:t,type:i="error",titre:o}={}){if(a.includes(i)||(console.error(Error(`type de message inconnu : ${i}`)),i="error"),!t)throw Error("Message obligatoire pour tout retour utilisateur");const r=c(e,"div",{className:`ui message ${"info"===i?"":i}`}),n="error"===i?"frown outline":"warning"===i?"bullhorn":"bell outline";if(c(r,"i",{className:"close icon"}).addEventListener("click",(()=>r.remove())),o){const e=c(r,"div",{className:"header"});c(e,"i",{className:`${n} icon`}),s(e,o)}return/<[a-zA-Z0-9_ "']+/.test(t)?r.innerHTML+=t:s(r,t),r}function l({code:e,exercice:t}){const i=n("containerErreur");switch(e){case"codeExerciceInconnu":u(i,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":u(i,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":u(i,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),u(i,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function p({id:e,message:t="",type:i="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));u(n(e),{message:t,type:i}).style.width="400px"}}}]);
//# sourceMappingURL=1679.e17a0bdd29d23b2d8a9c.js.map