"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[66610,17007],{17007:(i,s,t)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...s){0===i&&(this.listeArguments=[]);let t="";for(const e of s)void 0!==e&&(t+=e.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(s),t.d(s,{default:()=>e})},66610:(i,s,t)=>{t.r(s),t.d(s,{titre:()=>n,default:()=>r});var e=t(17007),o=t(30169);const n="Nom de l'exercice";function r(){e.default.call(this),this.consigne="Calcule",this.nbQuestions=10,this.besoinFormulaireNumerique=["Difficulté",2,"1 : Facile\n2 : Difficile"],this.sup=1,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(i){this.listeQuestions=[],this.listeCorrections=[],this.sup=parseInt(this.sup);for(let s,t,e=0,n=0;e<this.nbQuestions&&n<50;){const i=(0,o.nSR)(1,12);let r;1===this.sup?r=1:2===this.sup&&(r=5),s=`$${i} + ${r} $`,t=`$${i} + ${r} = ${i+r}$`,this.questionJamaisPosee(e,i,b,c,d)&&(this.listeQuestions.push(s),this.listeCorrections.push(t),e++),n++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=66610.c439685d597ff03a7dca.js.map