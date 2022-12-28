/*! For license information please see 75473.9eea734aa870a5350abc.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[75473,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},75473:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>n,interactifReady:()=>r,interactifType:()=>u,amcReady:()=>a,amcType:()=>l,default:()=>h});var s=t(25482),o=t(25523);const n="Résoudre un problème de robinets",r=!0,u="mathLive",a=!0,l="AMCNum";function h(){o.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur25 inline",this.nbQuestions=1,this.nouvelleVersion=function(){const e=(0,s.q$q)([2,3,4,5,6,10]),i=(0,s.n0o)(60/e),t=(0,s.nSR)(2,i-1)%10;this.reponse=(0,s.n0o)(t*e),this.question=`Le débit d'eau d'un robinet est de $${i}$ L/min. Combien de secondes faut-il pour remplir un seau de $${t}$ L ?`,this.correction=`Il faut $${e*t}$ s pour remplir le seau de $${t}$ L.`,this.correction+=(0,s.pRK)(`<br> Mentalement : <br>\n    On commence par déterminer le temps en seconde (puisque dans la question,\n       il est demandé un temps en seconde) qu'il faut pour remplir $1$ L.<br>\n    Comme le débit est de  $${i}$ L \n    pour une minute soit $60$ secondes, on divise $60$ par $${i}$ pour obtenir \n    ce temps :  $\\dfrac{60}{${i}}=${e}$ s.<br>\n    Puisqu'il faut $${e}$ s pour remplir un litre, il en faut $${t}$ fois plus pour remplir un seau de \n    $${t}$ L, soit $${e}\\times ${t}=${e*t}$ s.`)}}}}]);
//# sourceMappingURL=75473.9eea734aa870a5350abc.js.map