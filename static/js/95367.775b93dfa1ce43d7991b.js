"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[95367,25523],{25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})},95367:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>r,interactifReady:()=>o,interactifType:()=>a,default:()=>u});var t=s(25523),n=s(25482);const r="Déterminer le rang d’une médiane",o=!0,a="mathLive";function u(){t.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=(0,n.nSR)(10,15),i=(0,n.nSR)(1,4),s=2*e*i+1;this.question=`Une série statistique de $${s}$ données est rangée dans l’ordre croissant.<br>\n    Le rang de la médiane est : `,this.correction=`En notant $x_1$ la plus valeur de la série, puis $x_2$ la suivante, .... et $x_{${s}}$ la plus grande valeur, on obtient :<br>\n$\\underbrace{x_1 ${(0,n.sp)(2)} ; ${(0,n.sp)(2)} x_2 ${(0,n.sp)(2)} ; ${(0,n.sp)(2)} ..... ; ${(0,n.sp)(2)}\n x_{${e*i}}}_{${e*i} \\text{ valeurs}} ${(0,n.sp)(2)} ; ${(0,n.sp)(2)} \\underbrace{x_{${e*i+1}}}_{\\text{Médiane}} \n ${(0,n.sp)(2)} ; ${(0,n.sp)(2)} \\underbrace{x_{${e*i+2}} ; ${(0,n.sp)(2)} ..... ; ${(0,n.sp)(2)}  x_{${s}}}_{${e*i} \\text{ valeurs}}$<br>\n\n    \n    \n    Puisque la série comporte un nombre impair de valeurs, la médiane se situe au rang $\\dfrac{${s}+1}{2}=${(0,n.xau)(s+1,2)}$.`,this.reponse=(s+1)/2}}}}]);
//# sourceMappingURL=95367.775b93dfa1ce43d7991b.js.map