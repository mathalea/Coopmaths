(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3936,3888,5216],{259:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>o,default:()=>s});var r=i(93888);const o="Critères de divisibilité";function s(){r.default.call(this),this.titre=o}},93888:(e,t,i)=>{"use strict";i.r(t),i.d(t,{amcReady:()=>a,amcType:()=>c,titre:()=>u,default:()=>l});var r=i(75216),o=i(89459),s=i(55339),n=i(32964);const a=!0,c=2,u="Critères de divisibilité (plusieurs possibles)";function l(){r.default.call(this),this.titre=u,this.spacing=1,this.spacingCorr=1,this.nbQuestions=5,this.nbColsCorr=1,this.nbCols=1,this.nouvelleVersion=function(){this.autoCorrection=[],this.modeQcm?this.consigne="mettre une croix dans la ou les cases qui conviennent.":this.consigne="Compléter le tableau en mettant oui ou non dans chaque case.";let e="";e=o.Do.isHtml?"&emsp;":"\\qquad",this.listeQuestions=[],this.listeCorrections=[];const t=(0,s.SRM)(["div2","div3","div39","div5","div25","div23","div239","div35","div2359","divrien"],this.nbQuestions),i=[];let r,a;const c=[],u=[7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293];a="",r="";for(let l=0;l<this.nbQuestions;l++){switch(this.autoCorrection[l]={},t[l]){case"div2":i[l]=2*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!0,feedback:"Correct !"},{texte:"par $3$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $3$."},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:"Ce nombre est pair. Il est donc divisible par 2."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div3":i[l]=3*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!1,feedback:"Ce nombre est impair. Il n'est pas divisible par $2$"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:"Ce nombre est divisible par $3$ car la somme de ses chiffres est divisible par $3$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div39":i[l]=9*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!1,feedback:"Ce nombre est impair. Il n'est pas divisible par $2$"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!0,feedback:"Correct !"},{texte:"par aucun",statut:!1,feedback:"Ce nombre est divisible par $9$ et par $3$ car la somme de ses chiffres est divisible par $9$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div5":i[l]=5*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\text{non} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!1,feedback:"Ce nombre est impair. Il n'est pas divisible par $2$"},{texte:"par $3$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $3$."},{texte:"par $5$",statut:!0,feedback:"Correct !"},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:`Ce nombre est divisible par $5$ car son chiffre des unités est $${i[l].toString().charAt(i[l].toString().length-1)}$.`}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div25":i[l]=10*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!0,feedback:"Correct !"},{texte:"par $3$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $3$."},{texte:"par $5$",statut:!0,feedback:"Correct !"},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:"Ce nombre est un multiple de $10$. Il est donc divisible par $2$ et par $5$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div23":i[l]=6*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!0,feedback:"Correct !"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:"Ce nombre est un nombre pair. Il est donc divisible par $2$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div239":i[l]=18*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!0,feedback:"Correct !"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!0,feedback:"Correct !"},{texte:"par aucun",statut:!1,feedback:"Ce nombre est un nombre pair. Il est donc divisible par $2$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div35":i[l]=15*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\text{non} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!1,feedback:"Ce nombre est impair. Il n'est pas divisible par $2$"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!1,feedback:"Correct !"},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!1,feedback:"Ce nombre est un nombre pair. Il est donc divisible par $2$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"div2359":i[l]=90*(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\color{blue} \\text{oui} & \\text{oui} & \\text{oui} & \\text{oui} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!0,feedback:"Correct !"},{texte:"par $3$",statut:!0,feedback:"Correct !"},{texte:"par $5$",statut:!0,feedback:"Correct !"},{texte:"par $9$",statut:!0,feedback:"Correct !"},{texte:"par aucun",statut:!1,feedback:"Ce nombre est un nombre pair. Il est donc divisible par $2$."}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`;break;case"divrien":i[l]=(0,s.q$q)(u),c[l]=`${(0,s.Pbm)(i[l])} & \\text{non} & \\text{non} & \\text{non} & \\text{non} \\\\`,this.autoCorrection[l].propositions=[{texte:"par $2$",statut:!1,feedback:"Ce nombre est un nombre impair. Il ,'est pas divisible par $2$"},{texte:"par $3$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $3$."},{texte:"par $5$",statut:!1,feedback:"Le chiffre des unités n'est ni $0$ ni $5$."},{texte:"par $9$",statut:!1,feedback:"La somme des chiffres n'est pas divisible par $9$."},{texte:"par aucun",statut:!0,feedback:"Correct !"}],this.autoCorrection[l].enonce=`$${(0,s.Pbm)(i[l])}$ est divisible\n`}this.autoCorrection[l].options={ordered:!0,lastChoice:4},!o.Do.isAmc&&this.modeQcm&&(r+=`$${(0,s.Pbm)(i[l])}$ est divisible ${e}  `,r+=(0,n.l3)(this,l).texte,r+="<br>")}if(o.Do.isHtml&&!this.modeQcm&&(r="$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n"),o.Do.isHtml||this.modeQcm||(r="$\\begin{array}{|l|c|c|c|c|}\n"),!o.Do.isAmc&&!this.modeQcm){r+="\\hline\n",r+="\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n",r+="\\hline\n";for(let e=0;e<this.nbQuestions;e++)r+=`${(0,s.Pbm)(i[e])} & & & & \\\\\n`,r+="\\hline\n";r+="\\end{array}\n$"}if(o.Do.isHtml&&(a="$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n"),o.Do.isHtml||o.Do.isAmc||(a="$\\begin{array}{|l|c|c|c|c|}\n"),!o.Do.isAmc){a+="\\hline\n",a+="\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n",a+="\\hline\n";for(let e=0;e<this.nbQuestions;e++)a+=c[e],a+="\\hline\n";a+="\\end{array}$\n"}this.listeQuestions.push(r),this.listeCorrections.push(a),o.Do.isAmc||(this.modeQcm?(0,s.K1R)(this):(0,s.FRy)(this))}}},75216:(e,t,i)=>{"use strict";function r(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>r})},32964:(e,t,i)=>{"use strict";i.d(t,{Sq:()=>n,l3:()=>a,te:()=>c,Iq:()=>u});var r=i(89459),o=i(55339),s=i(60913);function n(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{e.nbQuestions;for(const t in e.autoCorrection){const i=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),r=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);r.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(i.innerHTML="😎"):(i.innerHTML="☹️"),r.readOnly=!0,i.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",i="rgba(123, 239, 178, 0.5)",r=document.querySelector(`#btnQcmEx${e.numeroExercice}`);r&&r.addEventListener("click",(o=>{for(let r=0;r<e.nbQuestions;r++){let o,n=0,a=0,c=0;for(let t=0;t<e.autoCorrection[r].propositions.length;t++)e.autoCorrection[r].propositions[t].statut&&c++;const u=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${r}`);e.autoCorrection[r].propositions.forEach(((s,c)=>{const u=document.querySelector(`#labelEx${e.numeroExercice}Q${r}R${c}`),l=document.querySelector(`#checkEx${e.numeroExercice}Q${r}R${c}`);s.statut?(u.style.backgroundColor=i,l.checked&&(n++,o=c)):!0===l.checked&&(u.style.backgroundColor=t,a++,o=c)}));let l="positive";0===a&&n===c?u.innerHTML="😎":(u.innerHTML="☹️",l="error"),u.style.fontSize="large",o>-1&&(0,s.$N)({id:`feedbackEx${e.numeroExercice}Q${r}`,message:e.autoCorrection[r].propositions[o].feedback,type:l})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),r.classList.add("disabled")}))}))}(e)}function a(e,t){e.titre="cacaboudin";let i="",s="",n="";if(n=r.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,o.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,o.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let r=i+1;r<e.length;)e[i].texte===e[r].texte?(t=!0,e[i].statut?e.splice(r,1):e[r].statut?(e.splice(r,1),e[i].statut=!0):e.splice(r,1)):r++}(e.autoCorrection[t].propositions),!r.Do.isAmc){r.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let o=0;o<e.autoCorrection[t].propositions.length;o++)r.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${o}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${o}">${e.autoCorrection[t].propositions[o].texte+n}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[o].texte}`+n,e.autoCorrection[t].propositions[o].statut?s+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[o].texte}`+n:s+=`$\\square\\;$ ${e.autoCorrection[t].propositions[o].texte}`+n;r.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:s}}function c(e,t,{texte:i="",texteApres:o="",inline:s=!0,numeric:n=!0}={}){return r.Do.isHtml&&e.interactif?`<div class="ui form ${s?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${n?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}" >\n      <span>${o}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,i,{digits:r=0,decimals:o=0,signe:s=!1,exposantNbChiffres:n=0,exposantSigne:a=!1,approx:c=0}={}){void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.valeur=i,e.autoCorrection[t].reponse.param={digits:r,decimals:o,signe:s,exposantNbChiffres:n,exposantSigne:a,approx:c}}},60913:(e,t,i)=>{"use strict";i.d(t,{$N:()=>d,JF:()=>l});const r=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function o(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,i,r]=t;e.style[i]=r}}));else if("object"==typeof t)for(var i in t)r(t,i)&&(e.style[i]=t[i])}catch(o){console.error(o)}}function s(e,t){e.appendChild(window.document.createTextNode(t))}function n(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const i=document.getElementById(e);if(!i&&t)throw Error(`L’élément html ${e} n’existe pas`);return i}function a(e,t,i,n){const a=function(e,t,i){const n=window.document.createElement(e);let a;try{if(t)for(a in t)r(t,a)&&("class"===a?n.className=t.class:"className"===a?n.className=t.className:"style"===a?o(n,t.style):n.setAttribute(a,t[a]))}catch(c){console.error(c)}return i&&s(n,i),n}(t,i,n);return e.appendChild(a),a}const c=["info","warning","error","positive"];function u(e,{message:t="Une erreur est survenue",type:i="erreur",titre:r}={}){c.includes(i)||(console.error(Error(`type de message inconnu : ${i}`)),i="error");const o=a(e,"div",{className:`ui message ${"info"===i?"":i}`}),n="error"===i?"frown outline":"warning"===i?"bullhorn":"bell outline";if(a(o,"i",{className:"close icon"}).addEventListener("click",(()=>o.remove())),r){const e=a(o,"div",{className:"header"});a(e,"i",{className:`${n} icon`}),s(e,r)}return/<[a-zA-Z0-9_ "']+/.test(t)?o.innerHTML+=t:s(o,t),o}function l({code:e,exercice:t}){const i=n("containerErreur");switch(e){case"codeExerciceInconnu":u(i,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":u(i,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":u(i,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),u(i,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function d({id:e,message:t="",type:i="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));u(n(e),{message:t,type:i}).style.width="400px"}}}]);
//# sourceMappingURL=3936.6062aaa6a8a6b57467b0.js.map