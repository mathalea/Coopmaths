(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5977,5216],{45977:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>s,amcReady:()=>c,interactifReady:()=>a,amcType:()=>u,default:()=>l});var r=i(75216),o=i(32964),n=i(55339);const s="Somme de deux nombres mariés et un entier",c=!1,a=!0,u=4;function l(){r.default.call(this),this.titre=s,this.amcReady=c,this.amcType=u,this.interactifReady=a,this.consigne="Calculer",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=100,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.SRM)([1,2],this.nbQuestions);for(let t,i,r,s,c,a,u,l=0,d=0;l<this.nbQuestions&&d<50;){switch(a=(0,n.nSR)(1,9),u=10-a,r=10*(0,n.nSR)(1,4)+a,s=10*(0,n.nSR)(1,4)+u,c=(0,n.nSR)(1,100-r-s),e[l]){case 1:t=`$${r}+${s}+${c}=$`,i=`$${r}+${s}+${c}=${r+s+c}$`;break;case 2:t=`$${r}+${c}+${s}=$`,i=`$${r}+${c}+${s}=${r+s+c}$`}(0,o.Iq)(this,l,r+s+c),this.interactif&&(t+=(0,o.te)(this,l)),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(i),l++),d++}(0,n.K1R)(this)}}},75216:(e,t,i)=>{"use strict";function r(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>r})},32964:(e,t,i)=>{"use strict";i.d(t,{l3:()=>c,te:()=>a,Iq:()=>u,Sq:()=>l});var r=i(89459),o=i(55339),n=i(7851);function s(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{for(let t=0;t<e.nbQuestions;t++){let i,r=0,o=0,s=0;for(let n=0;n<e.autoCorrection[t].propositions.length;n++)e.autoCorrection[t].propositions[n].statut&&s++;const c=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`);e.autoCorrection[t].propositions.forEach(((n,s)=>{const c=document.querySelector(`#labelEx${e.numeroExercice}Q${t}R${s}`),a=document.querySelector(`#checkEx${e.numeroExercice}Q${t}R${s}`);n.statut?(c.style.backgroundColor="rgba(123, 239, 178, 0.5)",a.checked&&(r++,i=s)):!0===a.checked&&(c.style.backgroundColor="rgba(217, 30, 24, 0.5)",o++,i=s)}));let a="positive";0===o&&r===s?c.innerHTML="😎":(c.innerHTML="☹️",a="error"),c.style.fontSize="large",i>-1&&(0,n.$)({id:`feedbackEx${e.numeroExercice}Q${t}`,texte:e.autoCorrection[t].propositions[i].feedback,type:a})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),t.classList.add("disabled")}))}))}function c(e,t){e.titre="cacaboudin";let i="",n="",s="";if(s=r.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,o.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,o.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let r=i+1;r<e.length;)e[i].texte===e[r].texte?(t=!0,e[i].statut?e.splice(r,1):e[r].statut?(e.splice(r,1),e[i].statut=!0):e.splice(r,1)):r++}(e.autoCorrection[t].propositions),!r.Do.isAmc){r.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let o=0;o<e.autoCorrection[t].propositions.length;o++)r.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${o}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${o}">${e.autoCorrection[t].propositions[o].texte+s}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[o].texte}`+s,e.autoCorrection[t].propositions[o].statut?n+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[o].texte}`+s:n+=`$\\square\\;$ ${e.autoCorrection[t].propositions[o].texte}`+s;r.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:n}}function a(e,t,{texte:i="",texteApres:o="",inline:n=!0,numeric:s=!0}={}){return r.Do.isHtml?`<div class="ui form ${n?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${s?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}" >\n      <span>${o}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,i){void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.valeur=i}function l(e){4===e.amcType&&function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(t=>{e.nbQuestions;for(const i in e.autoCorrection){const t=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${i}`);document.getElementById(`champTexteEx${e.numeroExercice}Q${i}`).value.replaceAll(" ","")===e.autoCorrection[i].reponse.valeur.toString().replaceAll(" ","")?t.innerHTML="😎":t.innerHTML="☹️",t.style.fontSize="large"}}))}))}(e),1===e.amcType&&s(e),2===e.amcType&&s(e)}},7851:(e,t,i)=>{"use strict";function r(e){return"erreur"===e.niveau?`<div id="affichageErreur" class="ui error message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="frown outline icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:"warning"===e.niveau?`<div id="affichageErreur" class="ui warning message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="bullhorn icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:"info"===e.niveau?`<div id="affichageErreur" class="ui message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="bell outline icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:void 0}function o(e){let t="";"codeExerciceInconnu"===e.code?t=r({titre:"le code de l'exercice n'est pas valide",message:`L'identifiant ${e.exercice} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,niveau:"erreur"}):"mg32load"===e.code?t=r({titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n        Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",niveau:"warning"}):"scratchLoad"===e.code&&(t=r({titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n        Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",niveau:"warning"})),document.getElementById("containerErreur").innerHTML=t,document.getElementById("fermerMessageErreur").addEventListener("click",(function(){document.getElementById("affichageErreur").remove()}))}function n({id:e,texte:t="",type:i="error"}={}){if(e&&t){const r=`<div id="messageFeedback${e}" class="ui ${i||"error"} message" style="width:400px"><i id="fermerFeedback${e}" class="close icon"></i>\n        ${t}\n  </div>`;document.getElementById(e).innerHTML=r,document.getElementById(`fermerFeedback${e}`).addEventListener("click",(function(){document.getElementById(`messageFeedback${e}`).remove()}))}}i.d(t,{J:()=>o,$:()=>n})}}]);
//# sourceMappingURL=5977.bc26138176d51f05f480.js.map