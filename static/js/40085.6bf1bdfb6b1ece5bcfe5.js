/*! For license information please see 40085.6bf1bdfb6b1ece5bcfe5.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[40085,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},40085:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>o,interactifReady:()=>n,interactifType:()=>a,amcReady:()=>h,amcType:()=>c,default:()=>u});var s=t(25482),r=t(25523);const o="Calculer l’aire ou un périmètre d’un carré",n=!0,a="mathLive",h=!0,c="AMCNum";function u(){r.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){let i,e;switch((0,s.q$q)(["a","b"])){case"a":i=(0,s.nSR)(1,10),this.question=`Quelle est l'aire d'un carré  dont le périmètre est $${4*i}$ cm ?`,this.reponse=i*i,this.correction=`Le côté du carré est $${4*i}\\div 4=${i}$, donc son aire est : $${i}\\times ${i}=${i**2}$ cm$^2$.`,this.optionsChampTexte={texteApres:" cm$^2$"};break;case"b":i=(0,s.nSR)(1,10),e=i*i,this.question=`Déterminer le périmètre  d'un carré d'aire $${e}$ cm$^2$. `,this.reponse=4*i,this.correction=`Le côté du carré est $\\sqrt{${e}}=${i}$. Son périmètre est donc $4\\times ${i}=${4*i}$ cm.`,this.optionsChampTexte={texteApres:" cm"}}}}}}]);
//# sourceMappingURL=40085.6bf1bdfb6b1ece5bcfe5.js.map