"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[83485,20437,25523],{20437:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>a,amcReady:()=>h,amcType:()=>u,interactifReady:()=>l,interactifType:()=>c,default:()=>m});var s=e(25523),o=e(25482),r=e(11945),n=e(22380);const a="Effectuer addition de deux entiers",h=!0,u="AMCNum",l=!0,c="numerique";function m(i=20){s.default.call(this),this.titre=a,this.consigne="Calculer :",this.sup=i,this.spacing=2,this.tailleDiaporama=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];for(let i,t,e,s,a=0,h=0;a<this.nbQuestions&&h<50;)this.autoCorrection[a]={},i=(0,o.nSR)(2,parseInt(this.sup)),t=(0,o.nSR)(2,parseInt(this.sup)),e=`$ ${(0,o.euh)(i)} + ${(0,o.euh)(t)} = \\dotfill $`,s=`$ ${(0,o.euh)(i)} + ${(0,o.euh)(t)} = ${(0,o.euh)(i+t)} $`,(0,r.Iq)(this,a,i+t),n.Do.isHtml&&this.interactif&&(e=e.replace("\\dotfill",""),e+=(0,r.te)(this,a)),n.Do.isAmc&&(this.autoCorrection[a].enonce=e,this.autoCorrection[a].propositions=[{texte:s,statut:""}],this.autoCorrection[a].reponse.param={digits:Math.max(2,(0,o.WW7)(i+t)),decimals:0,exposantNbChiffres:0,signe:!1}),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(s),a++),h++;(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",99999]}},25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})},83485:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>o,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>r});var s=e(20437);const o="Tables d’addition";function r(){s.default.call(this,10)}}}]);
//# sourceMappingURL=83485.84f0e00da4289ba1f7e7.js.map