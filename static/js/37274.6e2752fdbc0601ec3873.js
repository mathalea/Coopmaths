/*! For license information please see 37274.6e2752fdbc0601ec3873.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[37274,25523],{25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},37274:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>o,interactifReady:()=>r,interactifType:()=>a,amcReady:()=>h,amcType:()=>u,default:()=>l});var t=s(25482),n=s(25523);const o="Utiliser une proportionnalité*",r=!0,a="mathLive",h=!0,u="AMCNum";function l(){n.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.optionsChampTexte={texteApres:" €"},this.consigne="";const i=[["pêches",4,10,30],["Noix",5,4,13],["cerises",6,11,20],["pommes",2,20,40],["framboises",15,1,5],["fraises",7,5,10],["citrons",1.5,15,30],["bananes",1.5,15,25]];this.nouvelleVersion=function(){const e=(0,t.nSR)(0,7),s=(0,t.n0o)(i[e][1]*(1+(0,t.q$q)([-1,1])*(0,t.nSR)(1,3)*.1)),n=Math.round((0,t.nSR)(i[e][2],i[e][3]/10)),o=(0,t.nSR)(3,6,n);this.reponse=(0,t.n0o)(o*s),this.question=`$${n}$ kg de ${i[e][0]} coûtent $${(0,t.i6h)(n*s)}$ €.<br> $${n+o}$ kg de ces mêmes ${i[e][0]} coûtent $${(0,t.i6h)((n+o)*s)}$ €.<br>\n    Combien coûtent $${o}$ kg de ces ${i[e][0]} ?`,this.correction=`On reconnaît une situation de proportionnalité. <br>\n    La masse de fruits est proportionnelle au prix payé.<br>\n    On remarque que le prix demandé est celui qui correspond à la différence des deux masses données dans la question. <br>\n    Ainsi, le prix est alors donné par la différence des deux prix. <br>\n      On a  $${o}$ kg $= ${n+o}$ kg - $${n}$ kg, donc les $${o}$ kg de ${i[e][0]} côuteront $${(0,t.i6h)((n+o)*s)}$€ $ - ${(0,t.i6h)(n*s)}$€ $ =${(0,t.i6h)(this.reponse)}$€.`}}}}]);
//# sourceMappingURL=37274.6e2752fdbc0601ec3873.js.map