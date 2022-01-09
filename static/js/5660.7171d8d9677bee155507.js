"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5660,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},5660:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>r,interactifReady:()=>a,interactifType:()=>o,dateDePublication:()=>n,default:()=>l});var s=t(25523),$=t(25482);const r="Développer avec les égalités remarquables",a=!0,o="mathLive",n="25/10/2021";function l(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=(0,$.q$q)(["x","y"]),i=(0,$.nSR)(1,9),t=(0,$.nSR)(2,5);switch((0,$.q$q)([1,2,3,4,5,6])){case 1:this.question=` Développer $(${e}+${i})^2$`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=${e}$ et $b=${i}$.<br>\n      $(${e}+${i})^2=${e}^2+2 \\times ${i} \\times ${e}+${i}^2=${e}^2+${2*i}${e}+${i*i}$`,this.reponse=[`${e}^2+${2*i}${e}+${i*i}`];break;case 2:this.question=` Développer $(${e}-${i})^2$`,this.correction=`On utilise l'égalité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $a=${e}$ et $b=${i}$.<br>\n      $(${e}+${i})^2=${e}^2-2 \\times ${i} \\times ${e}+${i}^2=${e}^2-${2*i}${e}+${i*i}$`,this.reponse=[`${e}^2-${2*i}${e}+${i*i}`];break;case 3:this.question=`Développer $(x-${i})(x+${i})$`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=x$ et $b=${i}$.<br>\n      $(x-${i})(x+${i})=x^2-${i}^2=x^2-${i*i}$.`,this.reponse=["x^2-"+i*i];break;case 4:this.question=`Développer $(${t}x+${i})^2$`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $a=${t}x$ et $b=${i}$.<br>\n      $(${t}x+${i})^2=(${t}x)^2+2 \\times ${t}x \\times ${i} + ${i}^2=${t*t}x^2+${2*t*i}x+${i*i}$`,this.reponse=[`${t*t}x^2+${2*t*i}x+${i*i}`];break;case 5:this.question=`Développer $(${t}x-${i})^2$`,this.correction=`On utilise l'égalité remarquable $(a+b)^2=a^2-2ab+b^2$ avec $a=${t}x$ et $b=${i}$.<br>\n      $(${t}x-${i})^2=(${t}x)^2-2 \\times ${t}x \\times ${i} + ${i}^2=${t*t}x^2-${2*t*i}x+${i*i}$`,this.reponse=[`${t*t}x^2-${2*t*i}x+${i*i}`];break;case 6:this.question=`Développer $(${t}x-${i})(${t}x+${i})$`,this.correction=`On utilise l'égalité remarquable $(a+b)(a-b)=a^2-b^2$ avec $a=${t}x$ et $b=${i}$.<br>\n      $(${t}x-${i})(${t}x+${i})=(${t}x)^2-${i}^2=${t*t}x^2-${i*i}$`,this.reponse=[`${t*t}x^2-${i*i}`]}}}}}]);
//# sourceMappingURL=5660.7171d8d9677bee155507.js.map