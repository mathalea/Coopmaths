"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[11304,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},11304:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,dateDePublication:()=>r,dateDeModifImportante:()=>h,default:()=>a});var s=t(25523),o=t(25482);const n="Nom de l'exercice",r="25/10/2021",h="24/10/2021";function a(){s.default.call(this),this.consigne="Consigne",this.nbQuestions=10,this.besoinFormulaireNumerique=["Difficulté",2,"1 : Facile\n2 : Difficile"],this.sup=1,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup=parseInt(this.sup);const i=(0,o.SRM)(["type1","type2","type3"],this.nbQuestions);for(let e,t,s,o=0,n=0;o<this.nbQuestions&&n<50;){switch(1===this.sup?s="facile":2===this.sup&&(s="difficile"),i[o]){case"type1":e=`Question ${s} ${o+1} de type 1`,t=`Correction ${o+1} de type 1`;break;case"type2":e=`Question ${s} ${o+1} de type 2`,t=`Correction ${o+1} de type 2`;break;case"type3":e=`Question ${s} ${o+1} de type 3`,t=`Correction ${o+1} de type 3`}this.questionJamaisPosee(o,e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),o++),n++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=11304.77f6124666eb73a5f410.js.map