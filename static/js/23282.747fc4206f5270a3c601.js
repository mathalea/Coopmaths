/*! For license information please see 23282.747fc4206f5270a3c601.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[23282,25523],{25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})},23282:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>a,interactifReady:()=>h,interactifType:()=>u,amcReady:()=>l,amcType:()=>c,default:()=>m});var s=e(22380),o=e(11945),n=e(25482),r=e(25523);const a="Trouver la bonne unité",h=!0,u="qcm",l=!0,c="qcmMono";function m(){r.default.call(this),this.nbQuestions=1;const i=[["chaise",75,115,"cm"],["grue",120,250,"dm"],["tour",50,180,"m"],["girafe",40,50,"dm"],["coline",75,150,"m"]];this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const t=["cm","dm","m"],e=(0,n.nSR)(0,4),r=(0,n.nSR)(i[e][1],i[e][2]);(0,n.XzT)(t,i[e][3]);let a=`Choisir parmi les propositions suivantes la hauteur d'une ${i[e][0]}.<br>`;this.autoCorrection[0]={enonce:a,propositions:[{texte:`$${r}$${i[e][3]}`,statut:!0},{texte:`$${r}$${t[0]}`,statut:!1},{texte:`$${r}$${t[1]}`,statut:!1}]},s.Do.isAmc||(a+=(0,o.l3)(this,0).texte);const h=`La hauteur d'une ${i[e][0]} est ${r} ${i[e][3]}`;this.listeQuestions.push(a),this.listeCorrections.push(h),(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=23282.747fc4206f5270a3c601.js.map