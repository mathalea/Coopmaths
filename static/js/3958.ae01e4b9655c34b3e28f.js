(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3958,5216],{73958:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>c,interactifReady:()=>a,amcReady:()=>u,amcType:()=>l,default:()=>p});var o=i(75216),r=i(89459),s=i(55339),n=i(32964);const c="Additions et soustractions de nombres relatifs",a=!0,u=!0,l=4;function p(e=20){o.default.call(this),this.sup=e,this.sup2=!1,this.titre=c,this.consigne="Calculer",this.spacing=2,this.spacingCorr=1,this.nbCols=1,this.nbColsCorr=1,this.nbQuestions=5,this.interactif=!0,this.interactifReady=a,this.amcType=l,this.amcReady=u,this.nouvelleVersion=function(){let e,t;this.listeQuestions=[],this.listeCorrections=[];for(let i,o,c,a,u,l,p,$=0,h=0;$<this.nbQuestions&&h<50;){e=[],t=[],i=-1,o=(0,s.q$q)([-1,1]),c=-1===i&-1===o?1:(0,s.q$q)([-1,1]),i=(0,s.nSR)(1,this.sup)*i,o=(0,s.nSR)(1,this.sup)*o,c=(0,s.nSR)(1,this.sup)*c,a=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]),u=(0,s.nSR)(1,this.sup)*(0,s.q$q)([-1,1]);const m=(0,s.q$q)([-1,1]),d=(0,s.q$q)([-1,1]),f=(0,s.q$q)([-1,1]);let x;x=1===m&1===d?-1:-1===m&-1===d?1:(0,s.q$q)([-1,1]),this.sup2?(l=`$ ${(0,s.Gag)($+1)} = ${i}${(0,s.tPu)(o)}${(0,s.tPu)(c)}${(0,s.tPu)(a)}${(0,s.tPu)(u)} = \\dotfill $`,this.interactif&&!r.Do.isAmc&&(l=(0,n.te)(this,$,{texte:`$ ${(0,s.Gag)($+1)} = ${i}${(0,s.tPu)(o)}${(0,s.tPu)(c)}${(0,s.tPu)(a)}${(0,s.tPu)(u)} =$`})),r.Do.isHtml||r.Do.isAmc||(l+=`<br>$ ${(0,s.Gag)($+1)} = \\dotfill $`),e=(0,s.Q3c)([i,o,c,a,u]),p=`$ ${(0,s.Gag)($+1)}\\textbf{=}~${(0,s.TCf)(i)}${(0,s.Zux)(o)}${(0,s.Zux)(c)}${(0,s.Zux)(a)}${(0,s.Zux)(u)}\\\\\\phantom{A }\\textbf{=}~`,0!==(0,s.knq)([i,o,c,a,u])[0]&&0!==(0,s.knq)([i,o,c,a,u])[1]?(p+=`${(0,s.TCf)(e[0])}${(0,s.Zux)(e[1])}${(0,s.Zux)(e[2])}${(0,s.Zux)(e[3])}${(0,s.Zux)(e[4])}\\\\\\phantom{A }\\textbf{=}~`,p+=`${(0,s.TCf)((0,s.knq)([i,o,c,a,u])[0])}${(0,s.Zux)((0,s.knq)([i,o,c,a,u])[1])}\\\\\\phantom{A }\\textbf{=}~`,p+=`${(0,s.TCf)(i+o+c+a+u)} $`):0!==(0,s.knq)([i,o,c,a,u])[0]?p+=`${(0,s.TCf)((0,s.knq)([i,o,c,a,u])[0])}$`:p+=`${(0,s.Zux)((0,s.knq)([i,o,c,a,u])[1])}$`):(l=`$ ${(0,s.Gag)($+1)} =  ${(0,s.aIp)(i)}${(0,s.mKt)(m)}${(0,s.aIp)(o)}${(0,s.mKt)(d)}${(0,s.aIp)(c)}${(0,s.mKt)(x)}${(0,s.aIp)(a)}${(0,s.mKt)(f)}${(0,s.aIp)(u)} = \\dotfill $`,this.interactif&&!r.Do.isAmc&&(l=(0,n.te)(this,$,{texte:`$ ${(0,s.Gag)($+1)} =  ${(0,s.aIp)(i)}${(0,s.mKt)(m)}${(0,s.aIp)(o)}${(0,s.mKt)(d)}${(0,s.aIp)(c)}${(0,s.mKt)(x)}${(0,s.aIp)(a)}${(0,s.mKt)(f)}${(0,s.aIp)(u)} = $`})),r.Do.isHtml||r.Do.isAmc||(l+=`<br>$ ${(0,s.Gag)($+1)} = \\dotfill $`),p=`$ ${(0,s.Gag)($+1)} =  ${i}${(0,s.mKt)(m)}${(0,s.aIp)(o)}${(0,s.mKt)(d)}${(0,s.aIp)(c)}${(0,s.mKt)(x)}${(0,s.aIp)(a)}${(0,s.mKt)(f)}${(0,s.aIp)(u)}$`,p+=`<br>$ \\phantom{A}= ${(0,s.kch)(i)}+${(0,s.kch)(m*o)}+${(0,s.kch)(d*c)}+${(0,s.kch)(x*a)}+${(0,s.kch)(f*u)} $`,e=(0,s.Q3c)([i,m*o,d*c,x*a,f*u]),e[0]>0&e[4]<0&&(p+=`<br>$ \\phantom{A}= ${(0,s.kch)(e[0])}+${(0,s.kch)(e[1])}+${(0,s.kch)(e[2])}+${(0,s.kch)(e[3])}+${(0,s.kch)(e[4])} $`),t=(0,s.knq)([e[0],e[1],e[2],e[3],e[4]]),0!==t[0]&&0!==t[1]?(p+=`<br>$ \\phantom{A}= ${(0,s.kch)(t[0])}+${(0,s.kch)(t[1])} $`,p+=`<br>$ \\phantom{A}= ${(0,s.Zux)(i+m*o+d*c+x*a+f*u)} $<br>`):0!==t[0]?p+=`<br>$ \\phantom{A}=${(0,s.Zux)(t[0])}$`:p+=`<br>$ \\phantom{A}=${(0,s.Zux)(t[1])}$<br>`),-1===this.listeQuestions.indexOf(l)&&(this.listeQuestions.push(l),this.listeCorrections.push(p),(0,n.Iq)(this,$,i+m*o+d*c+x*a+f*u,{signe:!0}),r.Do.isAmc&&(this.autoCorrection[$]={enonce:l,propositions:[{texte:p,statut:3,feedback:""}],reponse:{texte:"résultat",valeur:i+m*o+d*c+x*a+f*u,param:{digits:0,decimals:0,signe:!0,exposantNbChiffres:0,exposantSigne:!1,approx:0}}}),$++),h++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",99999],this.besoinFormulaire2CaseACocher=["Avec des écritures simplifiées"]}},75216:(e,t,i)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>o})},32964:(e,t,i)=>{"use strict";i.d(t,{Sq:()=>n,l3:()=>c,te:()=>a,Iq:()=>u});var o=i(89459),r=i(55339),s=i(60913);function n(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{e.nbQuestions;for(const t in e.autoCorrection){const i=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),o=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);o.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(i.innerHTML="😎"):(i.innerHTML="☹️"),o.readOnly=!0,i.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",i="rgba(123, 239, 178, 0.5)",o=document.querySelector(`#btnQcmEx${e.numeroExercice}`);o&&o.addEventListener("click",(r=>{for(let o=0;o<e.nbQuestions;o++){let r,n=0,c=0,a=0;for(let t=0;t<e.autoCorrection[o].propositions.length;t++)e.autoCorrection[o].propositions[t].statut&&a++;const u=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${o}`);e.autoCorrection[o].propositions.forEach(((s,a)=>{const u=document.querySelector(`#labelEx${e.numeroExercice}Q${o}R${a}`),l=document.querySelector(`#checkEx${e.numeroExercice}Q${o}R${a}`);s.statut?(u.style.backgroundColor=i,l.checked&&(n++,r=a)):!0===l.checked&&(u.style.backgroundColor=t,c++,r=a)}));let l="positive";0===c&&n===a?u.innerHTML="😎":(u.innerHTML="☹️",l="error"),u.style.fontSize="large",r>-1&&(0,s.$N)({id:`feedbackEx${e.numeroExercice}Q${o}`,message:e.autoCorrection[o].propositions[r].feedback,type:l})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),o.classList.add("disabled")}))}))}(e)}function c(e,t){e.titre="cacaboudin";let i="",s="",n="";if(n=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let o=i+1;o<e.length;)e[i].texte===e[o].texte?(t=!0,e[i].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[i].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let r=0;r<e.autoCorrection[t].propositions.length;r++)o.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${r}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${r}">${e.autoCorrection[t].propositions[r].texte+n}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n,e.autoCorrection[t].propositions[r].statut?s+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n:s+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+n;o.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:s}}function a(e,t,{texte:i="",texteApres:r="",inline:s=!0,numeric:n=!0}={}){return o.Do.isHtml&&e.interactif?`<div class="ui form ${s?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${n?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}" >\n      <span>${r}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,i,{digits:o=0,decimals:r=0,signe:s=!1,exposantNbChiffres:n=0,exposantSigne:c=!1,approx:a=0}={}){void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.valeur=i,e.autoCorrection[t].reponse.param={digits:o,decimals:r,signe:s,exposantNbChiffres:n,exposantSigne:c,approx:a}}},60913:(e,t,i)=>{"use strict";i.d(t,{$N:()=>p,JF:()=>l});const o=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function r(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,i,o]=t;e.style[i]=o}}));else if("object"==typeof t)for(var i in t)o(t,i)&&(e.style[i]=t[i])}catch(r){console.error(r)}}function s(e,t){e.appendChild(window.document.createTextNode(t))}function n(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const i=document.getElementById(e);if(!i&&t)throw Error(`L’élément html ${e} n’existe pas`);return i}function c(e,t,i,n){const c=function(e,t,i){const n=window.document.createElement(e);let c;try{if(t)for(c in t)o(t,c)&&("class"===c?n.className=t.class:"className"===c?n.className=t.className:"style"===c?r(n,t.style):n.setAttribute(c,t[c]))}catch(a){console.error(a)}return i&&s(n,i),n}(t,i,n);return e.appendChild(c),c}const a=["info","warning","error","positive"];function u(e,{message:t="Une erreur est survenue",type:i="erreur",titre:o}={}){a.includes(i)||(console.error(Error(`type de message inconnu : ${i}`)),i="error");const r=c(e,"div",{className:`ui message ${"info"===i?"":i}`}),n="error"===i?"frown outline":"warning"===i?"bullhorn":"bell outline";if(c(r,"i",{className:"close icon"}).addEventListener("click",(()=>r.remove())),o){const e=c(r,"div",{className:"header"});c(e,"i",{className:`${n} icon`}),s(e,o)}return/<[a-zA-Z0-9_ "']+/.test(t)?r.innerHTML+=t:s(r,t),r}function l({code:e,exercice:t}){const i=n("containerErreur");switch(e){case"codeExerciceInconnu":u(i,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":u(i,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":u(i,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),u(i,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function p({id:e,message:t="",type:i="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));u(n(e),{message:t,type:i}).style.width="400px"}}}]);
//# sourceMappingURL=3958.ae01e4b9655c34b3e28f.js.map