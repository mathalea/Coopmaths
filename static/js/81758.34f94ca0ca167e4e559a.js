(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[81758,71129],{81758:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>h,amcReady:()=>a,amcType:()=>l,interactifReady:()=>u,interactifType:()=>c,default:()=>m});var s=e(71129),o=e(63861),n=e(10229),r=e(62259);const h="Addition de deux entiers",a=!0,l=4,u=!0,c="numerique";function m(i=20){s.default.call(this),this.titre=h,this.amcReady=a,this.interactifReady=u,this.interactifType=c,this.amcType=l,this.consigne="Calculer",this.sup=i,this.spacing=2,this.tailleDiaporama=100,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];for(let i,t,e,s,h=0,a=0;h<this.nbQuestions&&a<50;)this.autoCorrection[h]={},i=(0,o.nSR)(2,this.sup),t=(0,o.nSR)(2,this.sup),e=`$ ${(0,o.euh)(i)} + ${(0,o.euh)(t)} = \\dotfill $`,s=`$ ${(0,o.euh)(i)} + ${(0,o.euh)(t)} = ${(0,o.euh)(i+t)} $`,(0,n.Iq)(this,h,i+t),r.Do.isHtml&&this.interactif&&(e=e.replace("\\dotfill",""),e+=(0,n.te)(this,h)),r.Do.isAmc&&(this.autoCorrection[h].enonce=e,this.autoCorrection[h].propositions=[{texte:s,statut:""}],this.autoCorrection[h].reponse={valeur:i+t,param:{digits:Math.max(2,(0,o.WW7)(i+t)),decimals:0,exposantNbChiffres:0,signe:!1}}),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(s),h++),a++;(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",99999]}},71129:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=81758.34f94ca0ca167e4e559a.js.map