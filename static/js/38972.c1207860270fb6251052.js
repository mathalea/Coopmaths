"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[38972,17007],{17007:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},17227:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,default:()=>r});var s=t(17007),o=t(30169);const n="Nom de l'exercice";function r(){s.default.call(this),this.consigne="Consigne",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(i){this.listeQuestions=[],this.listeCorrections=[];const e=(0,o.SRM)(["type1","type2","type3"],this.nbQuestions);for(let t,s,o=0,n=0;o<this.nbQuestions&&n<50;){switch(e[o]){case"type1":t=`Question ${o+1} de type 1`,s=`Correction ${o+1} de type 1`;break;case"type2":t=`Question ${o+1} de type 2`,s=`Correction ${o+1} de type 2`;break;case"type3":t=`Question ${o+1} de type 3`,s=`Correction ${o+1} de type 3`}this.questionJamaisPosee(o,a,b,c,d)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),o++),n++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=38972.c1207860270fb6251052.js.map