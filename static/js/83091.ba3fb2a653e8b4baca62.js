/*! For license information please see 83091.ba3fb2a653e8b4baca62.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[83091,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},83091:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,interactifReady:()=>a,interactifType:()=>h,amcReady:()=>c,amcType:()=>l,default:()=>u});var s=t(41154),o=t(25482),r=t(25523);const n="Calculer la fraction d’entier",a=!0,h="mathLive",c=!0,l="AMCNum";function u(){r.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.tailleDiaporama=2,this.formatChampTexte="largeur25 inline",this.nouvelleVersion=function(){const i=(0,o.q$q)((0,s.SD)()),e=(0,o.q$q)([2,3,4,5,6]),t=i.d*e;this.reponse=(0,o.n0o)(i.n*e),this.question=`$${i.texFraction}\\times ${t}$`,1===i.n?(this.correction=`$${i.texFraction}\\times ${t}=${i.n*e}$<br><br>`,this.correction+=`${(0,o.pRK)("Mentalement :")}<br>`,this.correction+=`${(0,o.pRK)("Pour multiplier $"+t+"$ par $"+i.texFraction+"$, on divise $"+t+"$ par $"+i.d+"$ : on obtient $\\dfrac{"+t+"}{"+i.d+"}="+t/i.d+"$.")}<br>`,this.correction+=`${(0,o.pRK)("Ainsi $"+i.texFraction+"\\times "+t+" = \\dfrac{"+t+"}{"+i.d+"}="+i.n*e+"$.<br>")}`):(this.correction=`$${i.texFraction}\\times ${t}=${i.n*e}$<br><br>`,this.correction+=`${(0,o.pRK)("Mentalement :")}<br>`,this.correction+=`${(0,o.pRK)("Pour multiplier $"+t+"$ par $"+i.texFraction+"$, on commence par diviser  $"+t+"$ par $"+i.d+'$ (car la division "tombe juste") : on obtient $\\dfrac{'+t+"}{"+i.d+"}="+t/i.d+"$.")}<br>`,this.correction+=`${(0,o.pRK)("Puis, on multiplie ce résultat par $"+i.n+"$, ce qui donne : $"+i.n+"\\times "+t/i.d+"="+i.n*e+"$.<br>")}`)}}}}]);
//# sourceMappingURL=83091.ba3fb2a653e8b4baca62.js.map