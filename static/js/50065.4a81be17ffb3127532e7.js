/*! For license information please see 50065.4a81be17ffb3127532e7.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[50065,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},50065:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,interactifReady:()=>r,interactifType:()=>a,amcReady:()=>h,amcType:()=>l,default:()=>u});var s=t(25482),o=t(25523);const n="Calculer avec triple et moitié",r=!0,a="mathLive",h=!0,l="AMCNum";function u(){o.default.call(this),this.nbQuestions=1,this.tailleDiaporama=2,this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const i=(0,s.nSR)(3,20);this.question=`Le triple d'un nombre vaut $${3*i}$, combien vaut sa moitié ?`,this.correction=`Le nombre est $${i}$, sa moitié est ${(0,s.k$K)(i/2)}.`,this.correction+=(0,s.pRK)(`\n    <br> Mentalement : <br>\n    Si le triple du nombre est $${3*i}$, ce nombre est : $${3*i}\\div 3=${i}$.<br>\n    Puisqu'on cherche sa moitié, on le divise par $2$, soit  $${i}\\div 2=${(0,s.k$K)(i/2)}$.<br>\n     `),this.reponse=(0,s.n0o)(i/2)}}}}]);
//# sourceMappingURL=50065.4a81be17ffb3127532e7.js.map