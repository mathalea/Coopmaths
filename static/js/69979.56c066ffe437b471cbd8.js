/*! For license information please see 69979.56c066ffe437b471cbd8.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[69979,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},69979:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>a,interactifReady:()=>h,interactifType:()=>u,amcReady:()=>l,amcType:()=>c,default:()=>m});var s=t(22380),o=t(11945),n=t(25482),r=t(25523);const a="Comparer des aires (V/F)",h=!0,u="qcm",l=!0,c="qcmMono";function m(){r.default.call(this),this.nbQuestions=1,this.tailleDiaporama=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=(0,n.nSR)(2,9),e=(0,n.nSR)(2,9,i),t=(0,n.nSR)(1,3);let r,a;(0,n.q$q)([!0,!1])?(a=`Est-il vrai qu'un carré de côté $${i}$ cm et un rectangle de largeur $${Math.min(i,e)}$ cm et de longueur $${Math.max(i,e)}$ cm ont une aire qui diffère de $${Math.max(i*i,i*e)-Math.min(i*i,i*e)}$ cm${(0,n.omM)(2)} ?`,r="V"):(r="F",a=`Est-il vrai qu'un carré de côté $${i}$ cm et un rectangle de largeur $${Math.min(i,e)}$ cm et de longueur $${Math.max(i,e)}$ cm ont une aire qui diffère de $${Math.max(i*i,i*e)-Math.min(i*i,i*e)+t}$ cm${(0,n.omM)(2)} ?`),this.autoCorrection[0]={enonce:a,propositions:[{texte:"Vrai",statut:"V"===r},{texte:"Faux",statut:"F"===r}]},s.Do.isAmc||(a+=(0,o.l3)(this,0).texte);let h="V"===r?"Vrai":"Faux";h+=`<br> $\\bullet$  le carré a une aire de $${i}\\times ${i}=${i*i}$ cm${(0,n.omM)(2)}.<br>\n    $\\bullet$  Le rectangle a une aire de $${i}\\times ${e}=${i*e}$ cm${(0,n.omM)(2)}.`,h+=`<br>Ce qui fait ${"V"===r?"bien ":""} une différence de $${Math.max(i*i,i*e)} - ${Math.min(i*i,i*e)}=${Math.max(i*i,i*e)-Math.min(i*i,i*e)}$ cm${(0,n.omM)(2)} ${"F"===r?" et non pas de "+(0,n.k$K)(Math.max(i*i,i*e)-Math.min(i*i,i*e)+t)+" cm"+(0,n.omM)(2)+".":"."}`,this.listeQuestions.push(a),this.listeCorrections.push(h),(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=69979.56c066ffe437b471cbd8.js.map