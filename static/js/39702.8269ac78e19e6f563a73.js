"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[39702,25523],{25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})},39702:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>n,interactifReady:()=>r,interactifType:()=>a,default:()=>l});var s=i(25523),o=i(25482);const n="Calculer une probabilités*",r=!0,a="mathLive";function l(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){let e,t;const i=(0,o.q$q)([!0,!1]);switch((0,o.q$q)(["a","a","b"])){case"a":e=(0,o.nSR)(2,9),t=(0,o.nSR)(5,15),this.question=`Dans une urne, il y a $${e}$ boules noires et $${t}$ boules blanches.<br>\n              On tire une boule de manière équiprobable. <br>\n              La probabilité d'obtenir une boule ${i?"noire":"blanche"}  est : <br>\n             (donner le résultat sous la forme d'une fraction irréductible)`,this.optionsChampTexte={texteApres:""},this.correction=`Dans une situation d'équiprobabilité, \n        on calcule la probabilité d'un événement par le quotient : \n        $\\dfrac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issue}}$. <br>\n        La probabilité est donc donnée par : <br>\n        $\\dfrac{\\text{Nombre de boules ${i?"noire":"blanche"}s}}{\\text{Nombre total de boules}}\n             =${i?(0,o.qaf)(e,e+t):(0,o.qaf)(t,e+t)}  ${i?(0,o.t7m)(e,e+t):(0,o.t7m)(t,e+t)}$\n        `,this.reponse=i?(0,o.xau)(e,e+t):(0,o.xau)(t,e+t);break;case"b":(0,o.q$q)([!0,!1])?(e=(0,o.nSR)(2,9),t=10-e,this.question=`Une urne contient $${e}$ boules bleues et $${t}$ boules rouges. <br>\n        On tire une boule au hasard.<br>\n        Quelle est la probabilité de tirer une boule ${i?"bleue":"rouge"} ?<br>\n        On donnera le résultat sous forme décimale.`,this.optionsChampTexte={texteApres:""},this.correction=`Dans une situation d'équiprobabilité, \n          on calcule la probabilité d'un événement par le quotient : \n          $\\dfrac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issue}}$. <br>\n          La probabilité est donc donnée par : <br>\n          $\\dfrac{\\text{Nombre de boules ${i?"bleue":"rouge"}s}}{\\text{Nombre total de boules}}\n               =${i?(0,o.qaf)(e,e+t):(0,o.qaf)(t,e+t)} =${i?(0,o.k$K)(e/10):(0,o.k$K)(t/10)}$\n          `,this.reponse=i?e/10:t/10):(e=(0,o.nSR)(10,80),t=100-e,this.question=`Une urne contient $${e}$ boules bleues et $${t}$ boules rouges. <br>\n            On tire une boule au hasard.<br>\n            Quelle est la probabilité de tirer une boule ${i?"bleue":"rouge"} ?<br>\n            On donnera le résultat sous forme décimale.`,this.optionsChampTexte={texteApres:""},this.correction=`Dans une situation d'équiprobabilité, \n          on calcule la probabilité d'un événement par le quotient : \n          $\\dfrac{\\text{Nombre d'issues favorables}}{\\text{Nombre total d'issue}}$. <br>\n          La probabilité est donc donnée par : <br>\n          $\\dfrac{\\text{Nombre de boules ${i?"bleue":"rouge"}s}}{\\text{Nombre total de boules}}\n               =${i?(0,o.qaf)(e,e+t):(0,o.qaf)(t,e+t)} =${i?(0,o.k$K)(e/100):(0,o.k$K)(t/100)}$\n          `,this.reponse=i?e/100:t/100)}}}}}]);
//# sourceMappingURL=39702.8269ac78e19e6f563a73.js.map