/*! For license information please see 25532.62a700f5d3aa93421258.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[25532,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},25532:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>a,interactifType:()=>h,amcReady:()=>c,amcType:()=>l,default:()=>u});var s=t(41154),n=t(25482),o=t(25523);const r="Calculer la différence de fractions à dénominateurs compatibles",a=!0,h="mathLive",c=!0,l="AMCNum";function u(){o.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.tailleDiaporama=2,this.formatChampTexte="largeur15 inline",this.formatInteractif="fractionEgale",this.nouvelleVersion=function(){const i=(0,n.q$q)((0,s.SD)()),e=(0,n.q$q)([2,3]),t=(0,s.Pj)(1,i.d*e);this.question=`$${i.texFraction} - ${t.texFraction}=$`,this.correction=`Pour soustraire des fractions, on les met au même dénominateur.<br>\n    <br>\n    Pour écrire $${i.texFraction}$ avec le même dénominateur que $${t.texFraction}$, \n    on multiplie son numérateur et son dénominateur par $${e}$.<br><br>\n    Ainsi,\n    $${i.texFraction} - ${t.texFraction}=\n   \\dfrac{${i.n}\\times ${e}}{${i.d}\\times ${e}}- ${t.texFraction}\n    =${i.fractionEgale(e).texFraction} - ${t.texFraction}=\\dfrac{${i.n*e}-${t.n}}{${t.d}}=\\dfrac{${i.n*e-t.n}}{${t.d}}${(0,n.t7m)(i.n*e-t.n,t.d)}$`,this.reponse=i.differenceFraction(t).simplifie()}}}}]);
//# sourceMappingURL=25532.62a700f5d3aa93421258.js.map