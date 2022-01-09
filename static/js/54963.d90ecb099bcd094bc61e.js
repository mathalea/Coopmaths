/*! For license information please see 54963.d90ecb099bcd094bc61e.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[54963,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},54963:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>o,interactifReady:()=>r,interactifType:()=>a,amcReady:()=>h,amcType:()=>u,default:()=>l});var s=t(25482),n=t(25523);const o="Résoudre une équation du type ax+b=0",r=!0,a="mathLive",h=!0,u="AMCNum";function l(){n.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.tailleDiaporama=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const i=(0,s.nSR)(-5,5,[0,-1,1]);this.reponse=(0,s.nSR)(-9,9,[-1,0,1]);const e=-i*this.reponse;this.question=`Donner la solution de l'équation :<br> $${i}x${(0,s.tPu)(e)}=0$`,this.correction=`On procède par étapes successives :<br>\n    On commence par isoler $${i}x$ dans le membre de gauche en ajoutant \n    $${(0,s.tPu)(-e)}$ dans chacun des membres, puis on divise \n    par $${i}$ pour obtenir la solution : <br>\n     $\\begin{aligned}\n     ${i}x${(0,s.tPu)(e)}&=0\\\\\n    ${i}x&=${(0,s.tPu)(-e)}\\\\\n    x&=${(0,s.qaf)(-e,i)}\\\\\n    x&=${this.reponse}\n    \\end{aligned}$\n   `}}}}]);
//# sourceMappingURL=54963.d90ecb099bcd094bc61e.js.map