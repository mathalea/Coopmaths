/*! For license information please see 64265.5a70f619a5f9ada5cf9b.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[64265,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},64265:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>h,interactifType:()=>a,amcReady:()=>u,amcType:()=>l,default:()=>c});var s=t(11945),o=t(25482),n=t(25523);const r="Convertir en heures/minutes",h=!0,a="mathLive",u=!0,l="AMCNum";function c(){n.default.call(this),this.nbQuestions=1,this.tailleDiaporama=2,this.nouvelleVersion=function(){const i=(0,o.nSR)(1,3),e=(0,o.q$q)([.25,.5,.75]),t=(0,o.n0o)(60*e);this.interactif?(this.listeQuestions[0]=`Convertir en heures/minutes : <br>$${(0,o.k$K)(i+e)}$ h $=$`+(0,s.G5)(this,0,"largeur10 inline",{texteApres:(0,o.sp)(5)+"h"})+(0,s.G5)(this,1,"largeur10 inline",{texteApres:(0,o.sp)(5)+"min"}),this.listeCorrections[0]=`$${(0,o.k$K)(i+e)}$h$ = ${i}$ h $ + ${(0,o.k$K)(e)} \\times 60  = ${i}$ h $${t}$ min`,(0,s.Iq)(this,0,i),(0,s.Iq)(this,1,t)):(this.listeQuestions[0]=`Convertir en heures/minutes : <br>$${(0,o.k$K)(i+e)}$ h $=$ ..... h..... min`,this.listeCorrections[0]=`$${(0,o.k$K)(i+e)}$h$ = ${i}$ h $ + ${(0,o.k$K)(e)} \\times 60  = ${i}$ h $${t}$ min`),(0,o.FRy)(this)}}}}]);
//# sourceMappingURL=64265.5a70f619a5f9ada5cf9b.js.map