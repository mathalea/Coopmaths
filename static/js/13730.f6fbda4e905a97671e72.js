/*! For license information please see 13730.f6fbda4e905a97671e72.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[13730,17007],{17007:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})},13730:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>n,interactifReady:()=>r,interactifType:()=>h,amcReady:()=>a,amcType:()=>u,default:()=>l});var s=e(30169),o=e(17007);const n="Équation ax+b=c",r=!0,h="mathLive",a=!0,u="AMCNum";function l(){o.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.interactif=!0,this.nouvelleVersion=function(){const i=(0,s.nSR)(-5,5,[0,-1,1]);this.reponse=(0,s.nSR)(-9,9,[-1,0,1]);const t=(0,s.nSR)(-9,9,[0]),e=t-i*this.reponse;this.question=`Résoudre $${i}x${(0,s.tPu)(e)}=${t}$`,this.correction=`$x=\\dfrac{${t}-${e}}{${i}}=${this.reponse}$`}}}}]);
//# sourceMappingURL=13730.f6fbda4e905a97671e72.js.map