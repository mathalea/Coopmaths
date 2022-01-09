"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[65886,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},65886:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,interactifReady:()=>r,interactifType:()=>a,default:()=>h});var s=t(25523),n=t(25482);const o="Résoudre un problème de fraction",r=!0,a="mathLive";function h(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.tailleDiaporama=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=(0,n.q$q)([12,24,36,48]),i=(0,n.q$q)([15,20,25,30,35,40,45]),t=(0,n.q$q)(["quart","tiers","cinquième","sixième"]);switch(t){case"cinquième":this.reponse=(0,n.n0o)(.8*i),this.question=`J'ai mangé le ${t} d'un paquet de gâteaux qui contenait $${i}$ gâteaux. <br>\n      Combien en reste-t-il ?`,this.correction=`$\\dfrac{1}{5}\\times ${i}=${(0,n.k$K)(i/5)}$.<br>\n      Il en reste donc $${i}-${(0,n.k$K)(i/5)}=${this.reponse}$`;break;case"quart":this.reponse=(0,n.n0o)(.75*e),this.question=`J'ai mangé le ${t} d'un paquet de gâteaux qui contenait $${e}$ gâteaux. <br>\n      Combien en reste-t-il ?`,this.correction=`$\\dfrac{1}{4}\\times ${e}=${(0,n.k$K)(e/4)}$.<br>\n      Il en reste donc $${e}-${(0,n.k$K)(e/4)}=${this.reponse}$`;break;case"tiers":this.reponse=(0,n.n0o)(2*e/3),this.question=`J'ai mangé le ${t} d'un paquet de gâteaux qui contenait $${e}$ gâteaux. <br>\n      Combien en reste-t-il ?`,this.correction=`$\\dfrac{1}{3}\\times ${e}=${(0,n.k$K)(e/3)}$.<br>\n      Il en reste donc $${e}-${(0,n.k$K)(e/3)}=${this.reponse}$`;break;case"sixième":this.reponse=(0,n.n0o)(5*e/6),this.question=`J'ai mangé le ${t} d'un paquet de gâteaux qui contenait $${e}$ gâteaux. <br>\n      Combien en reste-t-il ?`,this.correction=`$\\dfrac{1}{6}\\times ${e}=${(0,n.k$K)(e/6)}$.<br>\n      Il en reste donc $${e}-${(0,n.k$K)(e/6)}=${this.reponse}$`}}}}}]);
//# sourceMappingURL=65886.6677ac1b6c8ad40163a7.js.map