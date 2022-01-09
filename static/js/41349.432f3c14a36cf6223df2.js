"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[41349,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},41349:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>o,interactifType:()=>a,dateDePublication:()=>u,default:()=>l});var s=t(25523),n=t(25482);const r="Passer du coefficient multiplicateur au taux d’évolution",o=!0,a="mathLive",u="09/12/2021";function l(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){let i,e;switch((0,n.q$q)(["a","b","b"])){case"a":i=(0,n.q$q)([10*(0,n.nSR)(1,9),(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),e=(0,n.n0o)(1+i/100),this.question=`Le taux d'évolution associé à un coefficient multiplicateur de $${(0,n.k$K)(e)}$ est `,this.interactif||(this.question+=".... "),this.optionsChampTexte={texteApres:" %"},this.correction=`Multiplier par $${(0,n.k$K)(e)}$ revient à multiplier par $1+\\dfrac{${(0,n.k$K)(i)}}{100}$. <br>\n        Cela revient donc à augmenter de $${i} \\%$. <br>\n        Ainsi, le taux d'évolution associé au coefficient multiplicateur $${(0,n.k$K)(e)}$ est $+${(0,n.k$K)(100*(e-1))}\\%$.<br><br>\n        Autre formulation :<br>\n        Multiplier une valeur par $${(0,n.k$K)(e)}$ revient à en prendre  $${(0,n.k$K)(100*e)} \\%$.<br>\n        Cela signifie  qu'on l'augmente de $${(0,n.k$K)(100*e-100)} \\%$ car $100  \\% +${(0,n.k$K)(100*e-100)} \\%=${(0,n.k$K)(100*e)} \\%$.<br>\n        Le taux d'évolution est donc $+${i} \\%$. `,this.reponse=i;break;case"b":i=(0,n.q$q)([10*(0,n.nSR)(1,9),(0,n.nSR)(1,9),10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9)]),e=(0,n.n0o)(1-i/100),this.question=`Le taux d'évolution associé à un coefficient multiplicateur de $${(0,n.k$K)(e)}$ est `,this.interactif||(this.question+=".... "),this.optionsChampTexte={texteApres:" %"},this.correction=`Multiplier par $${(0,n.k$K)(e)}$ revient à multiplier par $1-\\dfrac{${(0,n.k$K)(i)}}{100}$. <br>\n        Cela revient donc à diminuer de  $${i} \\%$. <br>\n        Ainsi, le taux d'évolution associé au coefficient multiplicateur $${(0,n.k$K)(e)}$ est $${(0,n.k$K)(100*(e-1))}\\%$<br><br>\n        Autre formulation :<br>\n        Multiplier une valeur par $${(0,n.k$K)(e)}$ revient à en prendre  $${(0,n.k$K)(100*e)} \\%$.<br>\n        Cela signifie  qu'on la diminue de $${(0,n.k$K)(100-100*e)} \\%$ car $100  \\%-${(0,n.k$K)(100-100*e)} \\% =${(0,n.k$K)(100*e)} \\%$.<br>\n        Le taux d'évolution est donc $-${i} \\%$.`,this.reponse=-i}}}}}]);
//# sourceMappingURL=41349.432f3c14a36cf6223df2.js.map