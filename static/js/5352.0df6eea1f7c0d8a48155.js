(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5352,5216],{35352:(e,t,r)=>{"use strict";r.r(t),r.d(t,{amcReady:()=>a,amcType:()=>c,interactifReady:()=>u,titre:()=>l,default:()=>$});var o=r(32964),i=r(55339),s=r(75216),n=r(89459);const a=!0,c=1,u=!0,l="Traduire un programme de calcul par une expression littérale";function $(){s.default.call(this),this.titre=l,this.amcReady=a,this.amcType=c,this.interactifReady=u,this.consigne="",this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.spacingCorr=1,this.spacing=1,this.interactif=!1,this.interactifReady=u,this.amcType=c,this.amcReady=a,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,i.SRM)([1,2,3,4,5,6],this.nbQuestions);for(let t,r,s=0,a=0;s<this.nbQuestions&&a<50;){const c=(0,i.nSR)(4,11),u=(0,i.nSR)(2,11),l=(0,i.nSR)(2,11),$=(0,i.nSR)(2,5);switch(e[s]){case 1:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Ajoute ${c}`,`Multiplie par ${u}`,`Ajoute ${l}`]),t+="Si on note $x$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$x\\xrightarrow{+${c}} x+${c}\\xrightarrow{\\times  ${u}}(x+${c})\\times  ${u}=${u}x+${c*u}\\xrightarrow{+${l}}${u}x+${c*u+l}$`,r+="<br>",r+=`Le résultat du programme est donc $${u}x+${c*u+l}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${u}x+${c*u+l}$`,statut:!0},{texte:`$${u}x+${c+l}$`,statut:!1},{texte:`$${u}x+${c*l}$`,statut:!1},{texte:`$${u*c}x+${l}$`,statut:!1}];break;case 2:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Multiplie par ${c}`,`Ajoute ${u}`,`Multiplie par ${l}`]),t+="Si on note $y$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$y\\xrightarrow{\\times  ${c}} ${c}y\\xrightarrow{+${u}}${c}y+${u} \\xrightarrow{\\times  ${l}}(${c}y+${u})\\times ${l}=${c*l}y+${u*l}$`,r+="<br>",r+=`Le résultat du programme est donc $${c*l}y+${u*l}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${c*l}y+${u*l}$`,statut:!0},{texte:`$${c}y+${u*l}$`,statut:!1},{texte:`$${u*c}y+${l}$`,statut:!1},{texte:`$${u}y+${c*l}$`,statut:!1}];break;case 3:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Multiplie par ${c}`,`Ajoute ${u}`,"Enlève le double du nombre de départ"]),t+="Si on note $a$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$a\\xrightarrow{\\times  ${c}} ${c}a\\xrightarrow{+${u}}${c}a+${u} \\xrightarrow{-2a}${c}a+${u}-2a=${c-2}a+${u}$`,r+="<br>",r+=`Le résultat du programme est donc $${c-2}a+${u}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${c-2}a+${u}$`,statut:!0},{texte:`$${c+u-2}a$`,statut:!1},{texte:`$${c}a+${u-2}$`,statut:!1},{texte:`$${c+u}-2a$`,statut:!1}];break;case 4:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Multiplie par ${c}`,`Ajoute ${u}`,"Ajoute le triple du nombre de départ"]),t+="Si on note $t$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$t\\xrightarrow{\\times  ${c}} ${c}t\\xrightarrow{+${u}}${c}t+${u} \\xrightarrow{+3t}${c}t+${u}+3t=${c+3}t+${u}$`,r+="<br>",r+=`Le résultat du programme est donc $${c+3}t+${u}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${c+3}t+${u}$`,statut:!0},{texte:`$${c+u+3}t$`,statut:!1},{texte:`$${c+u}t+3t$`,statut:!1},{texte:`$${c+u}t-3t$`,statut:!1}];break;case 5:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Multiplie par ${c}`,`Ajoute ${u}`,`Multiplie par ${l}`,`Enlève ${$}`]),t+="Si on note $x$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$x\\xrightarrow{\\times  ${c}} ${c}x\\xrightarrow{+${u}}${c}x+${u} \\xrightarrow{\\times  ${l}}(${c}x+${u})\\times  ${l}=${c*l}x+${u*l}\\xrightarrow{-${$}}${c*l}x+${u*l-$}$`,r+="<br>",r+=`Le résultat du programme est donc $${c*l}x+${u*l-$}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${c*l}x+${u*l-$}$`,statut:!0},{texte:`$${c}x+${(0,i.PMY)(u*l-$)}$`,statut:!1},{texte:`$${c+u}x+${(0,i.PMY)(l-$)}$`,statut:!1},{texte:`$${c+u*l}x-${$}$`,statut:!1}];break;case 6:t="Voici un programme de calcul : \n",t+=(0,i.NpW)([`Multiplie par ${c}`,`Ajoute ${u}`,`Multiplie par ${l}`,"Ajoute le nombre de départ"]),t+="Si on note $y$ le nombre de départ, quel est le résultat du programme de calcul ?",r=`$y\\xrightarrow{\\times  ${c}} ${c}y\\xrightarrow{+${u}}${c}y+${u} \\xrightarrow{\\times  ${l}}(${c}y+${u})\\times  ${l}=${c*l}y+${u*l}\\rightarrow ${c*l}y+${u*l}+y=${c*l+1}y+${u*l}$`,r+="<br>",r+=`Le résultat du programme est donc $${c*l+1}y+${u*l}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${t}\n`,this.autoCorrection[s].propositions=[{texte:`$${c*l+1}y+${u*l}$`,statut:!0},{texte:`$${c+1}y+${u*l}$`,statut:!1},{texte:`$${c}y+${l}$`,statut:!1},{texte:`$${c+u+l+1}y$`,statut:!1}]}this.interactif&&(t+=(0,o.l3)(this,s).texte),-1===this.listeQuestions.indexOf(t)&&(n.Do.isDiaporama&&(t=t.replace(", quel est le résultat du programme de calcul ?",",<br> quel est le résultat de ce programme ?")),n.Do.isHtml||0!==s||(t="\\setlength\\itemsep{1em}"+t),this.listeQuestions.push(t),this.listeCorrections.push(r),s++),a++}(0,i.K1R)(this)}}},75216:(e,t,r)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}r.r(t),r.d(t,{default:()=>o})},32964:(e,t,r)=>{"use strict";r.d(t,{Sq:()=>n,l3:()=>a,te:()=>c,Iq:()=>u});var o=r(89459),i=r(55339),s=r(60913);function n(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(r=>{e.nbQuestions;for(const t in e.autoCorrection){const r=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),o=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);o.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(r.innerHTML="😎"):(r.innerHTML="☹️"),o.readOnly=!0,r.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",r="rgba(123, 239, 178, 0.5)",o=document.querySelector(`#btnQcmEx${e.numeroExercice}`);o&&o.addEventListener("click",(i=>{for(let o=0;o<e.nbQuestions;o++){let i,n=0,a=0,c=0;for(let t=0;t<e.autoCorrection[o].propositions.length;t++)e.autoCorrection[o].propositions[t].statut&&c++;const u=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${o}`);e.autoCorrection[o].propositions.forEach(((s,c)=>{const u=document.querySelector(`#labelEx${e.numeroExercice}Q${o}R${c}`),l=document.querySelector(`#checkEx${e.numeroExercice}Q${o}R${c}`);s.statut?(u.style.backgroundColor=r,l.checked&&(n++,i=c)):!0===l.checked&&(u.style.backgroundColor=t,a++,i=c)}));let l="positive";0===a&&n===c?u.innerHTML="😎":(u.innerHTML="☹️",l="error"),u.style.fontSize="large",i>-1&&e.autoCorrection[o].propositions[i].feedback&&(0,s.$N)({id:`feedbackEx${e.numeroExercice}Q${o}`,message:e.autoCorrection[o].propositions[i].feedback,type:l})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),o.classList.add("disabled")}))}))}(e)}function a(e,t){e.titre="cacaboudin";let r="",s="",n="";if(n=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,i.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,i.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let r=0;r<e.length-1;r++)for(let o=r+1;o<e.length;)e[r].texte===e[o].texte?(t=!0,e[r].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[r].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?r+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:r+="<br>";for(let i=0;i<e.autoCorrection[t].propositions.length;i++)o.Do.isHtml?r+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${i}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${i}">${e.autoCorrection[t].propositions[i].texte+n}</label>\n          </div>`:r+=`$\\square\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n,e.autoCorrection[t].propositions[i].statut?s+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n:s+=`$\\square\\;$ ${e.autoCorrection[t].propositions[i].texte}`+n;o.Do.isHtml&&(r+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,r+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:r,texteCorr:s}}function c(e,t,{texte:r="",texteApres:i="",inline:s=!0,numeric:n=!0,indice:a}={}){return o.Do.isHtml&&e.interactif?`<div class="ui form ${s?"inline":""}" >\n    <div class="inline  field" >\n    <label>${r}</label>\n      <input type="text" ${n?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}${a||""}" >\n      <span>${i}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,r,{digits:o=0,decimals:i=0,signe:s=!1,exposantNbChiffres:n=0,exposantSigne:a=!1,approx:c=0}={}){let u=[];u=Array.isArray(r)?r:[r],void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.param={digits:o,decimals:i,signe:s,exposantNbChiffres:n,exposantSigne:a,approx:c};for(const l of u)e.autoCorrection[t].reponse.valeur=l}},60913:(e,t,r)=>{"use strict";r.d(t,{$N:()=>$,JF:()=>l});const o=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function i(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,r,o]=t;e.style[r]=o}}));else if("object"==typeof t)for(const r in t)o(t,r)&&(e.style[r]=t[r])}catch(r){console.error(r)}}function s(e,t){e.appendChild(window.document.createTextNode(t))}function n(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const r=document.getElementById(e);if(!r&&t)throw Error(`L’élément html ${e} n’existe pas`);return r}function a(e,t,r,n){const a=function(e,t,r){const n=window.document.createElement(e);let a;try{if(t)for(a in t)o(t,a)&&("class"===a?n.className=t.class:"className"===a?n.className=t.className:"style"===a?i(n,t.style):n.setAttribute(a,t[a]))}catch(c){console.error(c)}return r&&s(n,r),n}(t,r,n);return e.appendChild(a),a}const c=["info","warning","error","positive"];function u(e,{message:t,type:r="error",titre:o}={}){if(c.includes(r)||(console.error(Error(`type de message inconnu : ${r}`)),r="error"),!t)throw Error("Message obligatoire pour tout retour utilisateur");const i=a(e,"div",{className:`ui message ${"info"===r?"":r}`}),n="error"===r?"frown outline":"warning"===r?"bullhorn":"bell outline";if(a(i,"i",{className:"close icon"}).addEventListener("click",(()=>i.remove())),o){const e=a(i,"div",{className:"header"});a(e,"i",{className:`${n} icon`}),s(e,o)}return/<[a-zA-Z0-9_ "']+/.test(t)?i.innerHTML+=t:s(i,t),i}function l({code:e,exercice:t}){const r=n("containerErreur");switch(e){case"codeExerciceInconnu":u(r,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":u(r,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":u(r,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),u(r,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function $({id:e,message:t="",type:r="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));u(n(e),{message:t,type:r}).style.width="400px"}}}]);
//# sourceMappingURL=5352.0df6eea1f7c0d8a48155.js.map