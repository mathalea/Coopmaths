(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4273,5216],{84273:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>r,amcReady:()=>c,amcType:()=>a,interactifReady:()=>u,default:()=>l});var o=i(75216),s=i(55339),n=i(32964);const r="Calcul avec les puissances de dix",c=!0,a=1,u=!0;function l(){o.default.call(this),this.sup=1,this.sup2=1,this.titre=r,this.amcReady=c,this.amcType=a,this.interactifReady=u,this.nbCols=1,this.nbColsCorr=1,this.nbQuestions=5,this.qcmDisponible=!0,this.nouvelleVersion=function(){let e;this.sup=parseInt(this.sup),this.sup2=parseInt(this.sup2),this.qcm=["4C32-1",[],"Calcul avec les puissances de dix",1],1===this.sup?this.consigne="Donner l'écriture scientifique des nombres suivants.":this.consigne="Compléter l'égalité des nombres suivants.",this.listeQuestions=[],this.listeCorrections=[],e=1===this.sup2?[0,0,0,1,1]:2===this.sup2?[0,1,1,2,2]:[2,2,3,3,3];const t=(0,s.SRM)(e,this.nbQuestions);for(let i,o,r,c,a,u,l,d,h,m=0,$=0;m<this.nbQuestions&&$<50;){switch(t[m]){case 0:a=(0,s.nSR)(-1,1,0),u=(0,s.nSR)(1,9),l=(0,s.nSR)(1,5);break;case 1:a=(0,s.nSR)(-2,2,0),u=(0,s.n0o)((0,s.nSR)(11,99)/10),l=(0,s.nSR)(1,5);break;case 2:a=(0,s.nSR)(-3,3,0),u=1===(0,s.nSR)(0,1)?(0,s.n0o)((0,s.nSR)(111,999)/100):(0,s.n0o)((100*(0,s.nSR)(1,9)+(0,s.nSR)(1,9))/100),l=(0,s.nSR)(1,7)*(0,s.q$q)([-1,1]);break;case 3:a=(0,s.nSR)(-4,4,0),u=1===(0,s.nSR)(0,1)?(0,s.n0o)((1e3*(0,s.nSR)(1,9)+5*(0,s.nSR)(1,19))/1e3):(0,s.n0o)((0,s.nSR)(1111,9999)/1e3),l=(0,s.nSR)(3,7)*(0,s.q$q)([-1,1])}r=(0,s.n0o)(u*10**a),c=l-a,d=`${(0,s.k$K)(r)} \\times 10^{${c}}`,h=`${(0,s.euh)(u)} \\times 10^{${l}}`,1===this.sup?(i=`$${d}$`,o=`$${(0,s.b1)(`${(0,s.k$K)(r)}`,"blue")}\\times ${(0,s.b1)(`10^{${c}}`)} = ${(0,s.b1)(`${(0,s.euh)(u)}\\times 10^{${a}}`,"blue")}\\times  ${(0,s.b1)(`10^{${c}}`)} = ${h}$`,this.autoCorrection[m]={},this.autoCorrection[m].enonce=`${i}\n`,this.autoCorrection[m].propositions=[{texte:`$${h}$`,statut:!0},{texte:`$${(0,s.euh)(u)} \\times 10^{${l-1}}$`,statut:!1},{texte:`$${(0,s.euh)(u)} \\times 10^{${l+1}}$`,statut:!1},{texte:`$${(0,s.euh)(u)} \\times 10^{${-l}}$`,statut:!1}]):(o=`$${(0,s.b1)((0,s.euh)(r),"blue")}\\times  ${(0,s.b1)(`10^{${c}}`)}=${(0,s.b1)((0,s.euh)(u)+`\\times 10^{${a}}`,"blue")}\\times  ${(0,s.b1)(`10^{${c}}`)} =${h}$`,i=`$${(0,s.euh)(r)}\\times 10^{${(0,s.b1)("....")}}=${h}$`,this.autoCorrection[m]={},this.autoCorrection[m].enonce=`${i}\n`,this.autoCorrection[m].propositions=[{texte:`$${c}$`,statut:!0},{texte:`$${c-1}$`,statut:!1},{texte:`$${c+1}$`,statut:!1},{texte:`$${-c}$`,statut:!1}],this.autoCorrection[m].options={ordered:!1,lastChoice:5},this.interactif&&(i+=(0,n.l3)(this,m).texte)),this.interactif&&(i+=(0,n.l3)(this,m).texte),-1===this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(o),m++),$++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Type d'exercices",2,"1 : Traduire en notation scientifique\n2 : Exercice à trou"],this.besoinFormulaire2Numerique=["Niveaux de difficulté",3,"1 : Facile\n2 : Moyen\n3 : Difficile"]}},75216:(e,t,i)=>{"use strict";function o(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>o})},32964:(e,t,i)=>{"use strict";i.d(t,{l3:()=>c,te:()=>a,Iq:()=>u,Sq:()=>l});var o=i(89459),s=i(55339),n=i(7851);function r(e){document.addEventListener("exercicesAffiches",(()=>{$(".ui.checkbox").checkbox();const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(i=>{for(let t=0;t<e.nbQuestions;t++){let i,o=0,s=0,r=0;for(let n=0;n<e.autoCorrection[t].propositions.length;n++)e.autoCorrection[t].propositions[n].statut&&r++;const c=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${t}`);e.autoCorrection[t].propositions.forEach(((n,r)=>{const c=document.querySelector(`#labelEx${e.numeroExercice}Q${t}R${r}`),a=document.querySelector(`#checkEx${e.numeroExercice}Q${t}R${r}`);n.statut?(c.style.backgroundColor="rgba(123, 239, 178, 0.5)",a.checked&&(o++,i=r)):!0===a.checked&&(c.style.backgroundColor="rgba(217, 30, 24, 0.5)",s++,i=r)}));let a="positive";0===s&&o===r?c.innerHTML="😎":(c.innerHTML="☹️",a="error"),c.style.fontSize="large",i>-1&&(0,n.$)({id:`feedbackEx${e.numeroExercice}Q${t}`,texte:e.autoCorrection[t].propositions[i].feedback,type:a})}document.querySelectorAll(`.ui.checkbox.ex${e.numeroExercice}`).forEach((function(e){e.classList.add("read-only")})),t.classList.add("disabled")}))}))}function c(e,t){e.titre="cacaboudin";let i="",n="",r="";if(r=o.Do.isHtml?"&emsp;":"\\qquad",void 0!==e.autoCorrection[t].options?e.autoCorrection[t].options.ordered||(e.autoCorrection[t].propositions=(0,s.o$l)(e.autoCorrection[t].propositions,e.autoCorrection[t].options.lastChoice)):e.autoCorrection[t].propositions=(0,s.o$l)(e.autoCorrection[t].propositions),function(e){let t=!1;for(let i=0;i<e.length-1;i++)for(let o=i+1;o<e.length;)e[i].texte===e[o].texte?(t=!0,e[i].statut?e.splice(o,1):e[o].statut?(e.splice(o,1),e[i].statut=!0):e.splice(o,1)):o++}(e.autoCorrection[t].propositions),!o.Do.isAmc){o.Do.isHtml?i+=`<br>  <form id="formEx${e.numeroExercice}Q${t}">`:i+="<br>";for(let s=0;s<e.autoCorrection[t].propositions.length;s++)o.Do.isHtml?i+=`<div class="ui checkbox ex${e.numeroExercice} monQcm">\n            <input type="checkbox" tabindex="0" class="hidden" id="checkEx${e.numeroExercice}Q${t}R${s}">\n            <label id="labelEx${e.numeroExercice}Q${t}R${s}">${e.autoCorrection[t].propositions[s].texte+r}</label>\n          </div>`:i+=`$\\square\\;$ ${e.autoCorrection[t].propositions[s].texte}`+r,e.autoCorrection[t].propositions[s].statut?n+=`$\\blacksquare\\;$ ${e.autoCorrection[t].propositions[s].texte}`+r:n+=`$\\square\\;$ ${e.autoCorrection[t].propositions[s].texte}`+r;o.Do.isHtml&&(i+=`<span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>`,i+=`\n<div id="feedbackEx${e.numeroExercice}Q${t}"></span></form>`)}return{texte:i,texteCorr:n}}function a(e,t,{texte:i="",texteApres:s="",inline:n=!0,numeric:r=!0}={}){return o.Do.isHtml?`<div class="ui form ${n?"inline":""}" >\n    <div class="inline  field" >\n    <label>${i}</label>\n      <input type="text" ${r?'type="number" min="0" inputmode="numeric" pattern="[0-9]*"':""}  id="champTexteEx${e.numeroExercice}Q${t}" >\n      <span>${s}</span>\n      <span id="resultatCheckEx${e.numeroExercice}Q${t}"></span>\n    </div>\n    </div>`:""}function u(e,t,i,{digits:o=0,decimals:s=0,signe:n=!1,exposant_nb_chiffres:r=0,exposant_signe:c=!1,approx:a=0}={}){void 0===e.autoCorrection[t]&&(e.autoCorrection[t]={}),void 0===e.autoCorrection[t].reponse&&(e.autoCorrection[t].reponse={}),e.autoCorrection[t].reponse.valeur=i,e.autoCorrection[t].reponse.valeur={digits:o,decimals:s,signe:n,exposant_nb_chiffres:r,exposant_signe:c,approx:a}}function l(e){4===e.amcType&&function(e){document.addEventListener("exercicesAffiches",(()=>{const t=document.querySelector(`#btnQcmEx${e.numeroExercice}`);t&&t.addEventListener("click",(t=>{e.nbQuestions;for(const i in e.autoCorrection){const t=document.querySelector(`#resultatCheckEx${e.numeroExercice}Q${i}`);document.getElementById(`champTexteEx${e.numeroExercice}Q${i}`).value.replaceAll(" ","")===e.autoCorrection[i].reponse.valeur.toString().replaceAll(" ","")?t.innerHTML="😎":t.innerHTML="☹️",t.style.fontSize="large"}}))}))}(e),1===e.amcType&&r(e),2===e.amcType&&r(e)}},7851:(e,t,i)=>{"use strict";function o(e){return"erreur"===e.niveau?`<div id="affichageErreur" class="ui error message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="frown outline icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:"warning"===e.niveau?`<div id="affichageErreur" class="ui warning message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="bullhorn icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:"info"===e.niveau?`<div id="affichageErreur" class="ui message"><i id="fermerMessageErreur" class="close icon"></i>\n    <div class="header">\n      <i class="bell outline icon"></i> ${e.titre}\n    </div>\n      ${e.message}\n  </div>`:void 0}function s(e){let t="";"codeExerciceInconnu"===e.code?t=o({titre:"le code de l'exercice n'est pas valide",message:`L'identifiant ${e.exercice} ne correspond à aucun exercice MathALEA. <br> Ceci est peut-être dû à un lien incomplet ou obsolète. `,niveau:"erreur"}):"mg32load"===e.code?t=o({titre:"Erreur de chargement du module mg32",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n        Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",niveau:"warning"}):"scratchLoad"===e.code&&(t=o({titre:"Erreur de chargement du module scratch",message:"Une erreur est survenue lors du chargement d'un module pour l'affichage de l'exercice. <br>\n        Essayez de rafraichir la page. <br> Si l'erreur persiste merci de contacter : <a href=\"mailto:contact@coopmaths.fr\">contact@coopmaths.fr</a>",niveau:"warning"})),document.getElementById("containerErreur").innerHTML=t,document.getElementById("fermerMessageErreur").addEventListener("click",(function(){document.getElementById("affichageErreur").remove()}))}function n({id:e,texte:t="",type:i="error"}={}){if(e&&t){const o=`<div id="messageFeedback${e}" class="ui ${i||"error"} message" style="width:400px"><i id="fermerFeedback${e}" class="close icon"></i>\n        ${t}\n  </div>`;document.getElementById(e).innerHTML=o,document.getElementById(`fermerFeedback${e}`).addEventListener("click",(function(){document.getElementById(`messageFeedback${e}`).remove()}))}}i.d(t,{J:()=>s,$:()=>n})}}]);
//# sourceMappingURL=4273.77c064a3ea48101a021e.js.map