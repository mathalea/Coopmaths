(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5203,5216],{45203:(e,t,i)=>{"use strict";i.r(t),i.d(t,{amcReady:()=>s,amcType:()=>c,interactifReady:()=>a,titre:()=>l,default:()=>u});var o=i(75216),r=i(55339),n=i(32964);const s=!0,c=1,a=!0,l="Multiplication par 0,1 ; 0,01 ; 0,001 (Placer la virgule)";function u(){o.default.call(this),this.titre=l,this.amcReady=s,this.amcType=c,this.interactifReady=a,this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.consigne="Les égalités suivantes sont fausses. Placer la virgule correctement dans le résultat pour que l'égalité soit juste.",this.qcmDisponible=!0,this.modeQcm=!1,this.sup=!1,this.nouvelleVersion=function(){this.interactif&&(this.consigne="Déterminer le résultat de ces multiplications."),this.listeQuestions=[],this.listeCorrections=[];const e=["millièmes","centièmes","dixièmes"];this.tableauSolutionsDuQcm=[];for(let t,i,o,s,c,a,l,u=0,d=0;u<this.nbQuestions&&d<50;)t="",i="",o=-(0,r.nSR)(1,3),l=this.sup?0:-(0,r.nSR)(1,3),c=(0,r.n0o)((0,r.nSR)(10,1e3)+(0,r.nSR)(10,999)*(0,r.q$q)([0,1e3])),s=(0,r.n0o)(c*10**l),a=(0,r.n0o)(s*10**o),t=`$${(0,r.Pbm)(s)} \\times ${(0,r.Pbm)((0,r.n0o)(10**o))}$`,this.interactif||(t+=`$~~ = ~~\\phantom{......}${(0,r.Pbm)(c)}$<br>`),i=`Quand on multiplie par $${(0,r.Pbm)((0,r.n0o)(10**o))}=${(0,r.qaf)(1,(0,r.n0o)(10**-o))}$ chaque chiffre prend une valeur $${(0,r.k$K)(10**-o)}$ fois plus petite.<br>`,i+=`Le chiffre des unités se positionne donc dans les ${e[3+o]} :<br>`,i+=`$${(0,r.Pbm)(s)} \\times ${(0,r.Pbm)((0,r.n0o)(10**o))} = ${(0,r.Pbm)(a)}$`,this.autoCorrection[u]={},this.autoCorrection[u].enonce=`${t}\n`,this.autoCorrection[u].propositions=[{texte:`$${(0,r.Pbm)(a)}$`,statut:!0},{texte:`$${(0,r.Pbm)((0,r.n0o)(a/10))}$`,statut:!1},{texte:`$${(0,r.Pbm)((0,r.n0o)(10*a))}$`,statut:!1},{texte:`$${(0,r.Pbm)((0,r.n0o)(a/100))}$`,statut:!1}],this.autoCorrection[u].options={ordered:!1,lastChoice:4},this.interactif&&(t+="<br>"+(0,n.l3)(this,u).texte),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(i),u++),d++;(0,r.K1R)(this)},this.besoinFormulaireCaseACocher=["Nombres entiers",!0]}},75216:(e,t,i)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>o})},32964:(e,t,i)=>{"use strict";i.d(t,{Sq:()=>s,l3:()=>c,te:()=>a,Iq:()=>l});var o=i(89459),r=i(55339),n=i(60913);function s(e){4!==e.amcType&&5!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{e.nbQuestions;for(const t in e.autoCorrection){const i=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`),o=document.getElementById(`champTexteEx${e.numeroExercice}Q${t}`);o.value.replaceAll(" ","")===e.autoCorrection[t].reponse.valeur.toString().replaceAll(" ","").replaceAll(".",",")?(i.innerHTML="😎"):(i.innerHTML="☹️"),o.readOnly=!0,i.style.fontSize="large"}t.classList.add("disabled")}))}))}(e),1!==e.amcType&&2!==e.amcType||function(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t="rgba(217, 30, 24, 0.5)",i="rgba(123, 239, 178, 0.5)",o=document.querySelector(`#btnQcmEx${e.numeroExercice}`);o&&o.addEventListener("click",(r=>{for(let o=0;o<e.nbQuestions;o++){let r,s=0,c=0,a=0;for(let t=0;t<e.autoCorrection[o].propositions.length;t++)e.autoCorrection[o].propositions[t].statut&&a++;const l=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${o}`);e.autoCorrection[o].propositions.forEach(((n,a)=>{const l=document.querySelector(`#labelEx${e.numeroExercice}Q${o}R${a}`),u=document.querySelector(`#checkEx${e.numeroExercice}Q${o}R${a}`);n.statut?(l.style.backgroundColor=i,u.checked&&(s++,r=a)):!0===u.checked&&(l.style.backgroundColor=t,c++,r=a)}));let u="positive";0===c&&s===a?l.innerHTML="😎":(l.innerHTML="☹️",u="error"),l.style.fontSize="large",r>-1&&(0,n.$N)({id:`feedbackEx${e.numeroExercice}Q${o}`,message:e.autoCorrection[o].propositions[r].feedback,type:u})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),o.classList.add("disabled")}))}))}(e)}function c(e,t){e.titre="cacaboudin";let i="",n="",s="";if(s=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,r.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let o=i+1;o<e.length;)e[i].texte===e[o].texte?(t=!0,e[i].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[i].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let r=0;r<e.autoCorrection[t].propositions.length;r++)o.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${r}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${r}">${e.autoCorrection[t].propositions[r].texte+s}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+s,e.autoCorrection[t].propositions[r].statut?n+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[r].texte}`+s:n+=`$\\square\\;$ ${e.autoCorrection[t].propositions[r].texte}`+s;o.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:n}}function a(e,t,{texte:i="",texteApres:r="",inline:n=!0,numeric:s=!0}={}){return o.Do.isHtml&&e.interactif?`<div class="ui form ${n?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${s?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}" >\n      <span>${r}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function l(e,t,i,{digits:o=0,decimals:r=0,signe:n=!1,exposantNbChiffres:s=0,exposantSigne:c=!1,approx:a=0}={}){void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.valeur=i,e.autoCorrection[t].reponse.param={digits:o,decimals:r,signe:n,exposantNbChiffres:s,exposantSigne:c,approx:a}}},60913:(e,t,i)=>{"use strict";i.d(t,{$N:()=>d,JF:()=>u});const o=(e,t)=>"object"==typeof e&&Object.prototype.hasOwnProperty.call(e,t);function r(e,t){try{if(e&&e.style)if("string"==typeof t)(t=t.split(";")).forEach((function(t){if(t=/([\w]+):(.+)/.exec(t)){const[,i,o]=t;e.style[i]=o}}));else if("object"==typeof t)for(var i in t)o(t,i)&&(e.style[i]=t[i])}catch(r){console.error(r)}}function n(e,t){e.appendChild(window.document.createTextNode(t))}function s(e,t=!0){if("string"!=typeof e)throw TypeError("argument invalide");const i=document.getElementById(e);if(!i&&t)throw Error(`L’élément html ${e} n’existe pas`);return i}function c(e,t,i,s){const c=function(e,t,i){const s=window.document.createElement(e);let c;try{if(t)for(c in t)o(t,c)&&("class"===c?s.className=t.class:"className"===c?s.className=t.className:"style"===c?r(s,t.style):s.setAttribute(c,t[c]))}catch(a){console.error(a)}return i&&n(s,i),s}(t,i,s);return e.appendChild(c),c}const a=["info","warning","error","positive"];function l(e,{message:t="Une erreur est survenue",type:i="erreur",titre:o}={}){a.includes(i)||(console.error(Error(`type de message inconnu : ${i}`)),i="error");const r=c(e,"div",{className:`ui message ${"info"===i?"":i}`}),s="error"===i?"frown outline":"warning"===i?"bullhorn":"bell outline";if(c(r,"i",{className:"close icon"}).addEventListener("click",(()=>r.remove())),o){const e=c(r,"div",{className:"header"});c(e,"i",{className:`${s} icon`}),n(e,o)}return/<[a-zA-Z0-9_ "']+/.test(t)?r.innerHTML+=t:n(r,t),r}function u({code:e,exercice:t}){const i=s("containerErreur");switch(e){case"codeExerciceInconnu":l(i,{titre:"le code de l’exercice n’est pas valide",message:`L'identifiant ${t} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,type:"error"});break;case"mg32load":l(i,{titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;case"scratchLoad":l(i,{titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n          Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",type:"warning"});break;default:console.error(Error(`code ${e} non géré par messageUtilisateur`)),l(i,{titre:"Erreur interne",message:'Une erreur est survenue.<br>\n          Essayez de rafraichir la page. <br> Si l\'erreur persiste merci de contacter : <a href="mailto:contact@coopmaths.fr">contact@coopmaths.fr</a>',type:"warning"})}}function d({id:e,message:t="",type:i="error"}={}){if(!e||!t)return console.error(TypeError("arguments manquants"));l(s(e),{message:t,type:i}).style.width="400px"}}}]);
//# sourceMappingURL=5203.232139c6cd16267c8e07.js.map