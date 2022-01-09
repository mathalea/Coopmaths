"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[92654,25523],{25523:($,e,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function($){},this.questionJamaisPosee=function($,...e){0===$&&(this.listeArguments=[]);let t="";for(const i of e)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>i})},92654:($,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>s,interactifType:()=>o,default:()=>c});var i=t(25523),n=t(25482);const r="Calculer une image avec le second degré",s=!0,o="mathLive";function c(){i.default.call(this),this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nbQuestions=1,this.nouvelleVersion=function(){let $,e,t,i,r,s;switch((0,n.q$q)(["a","b","c","d"])){case"a":$=(0,n.nSR)(1,4),e=(0,n.nSR)(1,2),t=(0,n.nSR)(1,2),i=(0,n.nSR)(2,5),s=`${(0,n.wO4)(e)}x^2+${(0,n.wO4)(t)}x+${i}`,this.question=`On considère la fonction $f$ définie par $f(x)= ${s}$. <br>\n    Calculer $f(${$})$.`,1===e&1!==t&&(this.correction=`$f(${$})=\n          ${$}^2+${t}\\times ${(0,n.PMY)($)}+${i}=\n          ${$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${e*$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${e*$*$+t*$+i}$<br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n          On commence par calculer le carré de $${$}$, soit $${$}^2=${(0,n.k$K)($**2)}$. <br>\n   On calcule $${t}\\times ${$}$ que l'on ajoute à $${(0,n.k$K)(e*$**2)}$, soit $${e*$**2}+${t*$}=${e*$**2+t*$}$.<br>\n  Pour finir, on ajoute   $${i}$, ce qui donne $${(0,n.k$K)(e*$**2+t*$)}+${i}$, soit $${(0,n.k$K)(e*$**2+t*$+i)}$.<br>\n    `)),1!==e&1!==t&&(this.correction=`$f(${$})=\n          ${e}\\times${$}^2+${t}\\times ${$}+${i}=\n          ${e}\\times ${$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${e*$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${e*$*$+t*$+i}$<br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n              On commence par calculer le carré de $${$}$, soit $${$}^2=${(0,n.k$K)($**2)}$. <br>\n     On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${e}\\times ${(0,n.k$K)($**2)}=${(0,n.k$K)(e*$**2)}$.<br>\n      On calcule $${t}\\times ${$}$ que l'on ajoute à $${(0,n.k$K)(e*$**2)}$, soit $${e*$**2}+${t*$}=${e*$**2+t*$}$.<br>\n      Pour finir, on ajoute   $${i}$, ce qui donne $${(0,n.k$K)(e*$**2+t*$)}+${i}$, soit $${(0,n.k$K)(e*$**2+t*$+i)}$.<br>\n        `)),1===e&1===t&&(this.correction=`$f(${$})=\n          ${$}^2+ ${$}+${i}=\n          ${$*$}+${$}+${i}=\n          ${$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${$*$+t*$+i}$<br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n          On commence par calculer le carré de $${$}$, soit $${$}^2=${(0,n.k$K)($**2)}$. <br>\n   On ajoute  $${$}$ soit $${e*$**2}+${$}=${$**2+t*$}$.<br>\n  Pour finir, on ajoute   $${i}$, ce qui donne $${(0,n.k$K)(e*$**2+t*$)}+${i}$, soit $${(0,n.k$K)(e*$**2+t*$+i)}$.<br>\n    `)),1!==e&1===t&&(this.correction=`$f(${$})=\n          ${e}\\times${$}^2+${t}\\times ${(0,n.PMY)($)}+${i}=\n          ${e}\\times ${$*$}${(0,n.tPu)(t*$)}=\n          ${e*$*$}${(0,n.tPu)(t*$)}+${i}=\n          ${e*$*$+t*$+i}$<br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n          On commence par calculer le carré de $${$}$, soit $${$}^2=${(0,n.k$K)($**2)}$. <br>\n On multiplie ensuite cette valeur par le coefficient devant $x^2$, soit $${e}\\times ${(0,n.k$K)($**2)}=${(0,n.k$K)(e*$**2)}$.<br>\n On ajoute  $${$}$ soit $${e*$**2}+${$}=${e*$**2+t*$}$.<br>\n  Pour finir, on ajoute   $${i}$, ce qui donne $${(0,n.k$K)(e*$**2+t*$)}+${i}$, soit $${(0,n.k$K)(e*$**2+t*$+i)}$.<br>\n    `)),this.reponse=(0,n.n0o)(e*$*$+t*$+i);break;case"b":e=(0,n.nSR)(1,3),t=(0,n.nSR)(-2,2,[0]),i=(0,n.nSR)(1,3),r=(0,n.nSR)(-3,3,[0,t]),$=(0,n.nSR)(-3,3,[0]),s=`(${(0,n.wO4)(e)}x${(0,n.tPu)(t)})(${(0,n.wO4)(i)}x${(0,n.tPu)(r)})`,this.question=`On considère la fonction $f$ définie par $f(x)= ${s}$. <br>\n          Calculer $f(${$})$.`,1===e&1===i&&(this.correction=`$f(${$})=\\left(${(0,n.PMY)($)}${(0,n.tPu)(t)}\\right)\\left(${(0,n.PMY)($)}${(0,n.tPu)(r)}\\right)=(${e*$}${(0,n.tPu)(t)})(${i*$}${(0,n.tPu)(r)})=\n          ${e*$+t}\\times${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$<br>`,this.reponse=(0,n.n0o)((e*$+t)*(i*$+r)),this.correction+=(0,n.pRK)(` Mentalement : <br>\n          On commence par "calculer" la première parenthèse :  $${(0,n.PMY)($)}${(0,n.tPu)(t)}=${e*$+t}$.<br>\n           Puis la deuxième : $${(0,n.PMY)($)}${(0,n.tPu)(r)}=${i*$+r}$.<br>\n        On fait le produit des nombres obtenus : $${e*$+t}\\times ${i*$+r}=${(e*$+t)*(i*$+r)}$.\n    `)),1!==e&1!==i&&(this.correction=`$f(${$})=\\left(${(0,n.wO4)(e)}\\times${(0,n.PMY)($)}${(0,n.tPu)(t)}\\right)\\left(${i}\\times${(0,n.PMY)($)}${(0,n.tPu)(r)}\\right)=(${e*$}${(0,n.tPu)(t)})(${i*$}${(0,n.tPu)(r)})=\n        ${e*$+t}\\times${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$<br>`,this.reponse=(0,n.n0o)((e*$+t)*(i*$+r)),this.correction+=(0,n.pRK)(` Mentalement : <br>\n        On commence par "calculer" la première parenthèse :  $${(0,n.wO4)(e)}\\times${(0,n.PMY)($)}${(0,n.tPu)(t)}=${e*$+t}$.\n        <br>Puis la deuxième : $${i}\\times${(0,n.PMY)($)}${(0,n.tPu)(r)}=${i*$+r}$.<br>\n        On fait le produit des nombres obtenus : $${e*$+t}\\times ${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$.\n    `)),1===e&1!==i&&(this.correction=`$f(${$})=\\left(${(0,n.PMY)($)}${(0,n.tPu)(t)}\\right)\\left(${i}\\times${(0,n.PMY)($)}${(0,n.tPu)(r)}\\right)=(${e*$}${(0,n.tPu)(t)})(${i*$}${(0,n.tPu)(r)})=\n        ${e*$+t}\\times${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$<br>`,this.reponse=(0,n.n0o)((e*$+t)*(i*$+r)),this.correction+=(0,n.pRK)(` Mentalement : <br>\n        On commence par "calculer" la première parenthèse :  $${(0,n.PMY)($)}${(0,n.tPu)(t)}=${e*$+t}$.\n        <br>Puis la deuxième : $${i}\\times${(0,n.PMY)($)}${(0,n.tPu)(r)}=${i*$+r}$.<br>\n        On fait le produit des nombres obtenus : $${e*$+t}\\times ${i*$+r}=${(e*$+t)*(i*$+r)}$.\n    `)),1!==e&1===i&&(this.correction=`$f(${$})=\\left(${e}\\times${(0,n.PMY)($)}${(0,n.tPu)(t)}\\right)\\left(${(0,n.PMY)($)}${(0,n.tPu)(r)}\\right)=(${e*$}${(0,n.tPu)(t)})(${i*$}${(0,n.tPu)(r)})=\n        ${e*$+t}\\times${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$<br>`,this.reponse=(0,n.n0o)((e*$+t)*(i*$+r)),this.correction+=(0,n.pRK)(` Mentalement : <br>\n        On commence par "calculer" la première parenthèse :  $${e}\\times${(0,n.PMY)($)}${(0,n.tPu)(t)}=${e*$+t}$.\n        <br>Puis la deuxième : $${(0,n.PMY)($)}${(0,n.tPu)(r)}=${i*$+r}$.<br>\n        On fait le produit des nombres obtenus : $${e*$+t}\\times ${(0,n.PMY)(i*$+r)}=${(e*$+t)*(i*$+r)}$.\n    `));break;case"c":e=(0,n.nSR)(-3,3,0),t=(0,n.nSR)(1,3),$=(0,n.nSR)(-3,3,[0]),s=`${e}-${(0,n.wO4)(t)}x^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${s}$. <br>\n          Calculer $f(${$})$.`,this.correction=`$f(${$})=${e}- ${(0,n.PMY)($)}^2=${e-t*$*$}$.<br>`,this.reponse=(0,n.n0o)(e-t*$*$),1===t?this.correction+=(0,n.pRK)(` Mentalement : <br>\n          On commence par "calculer" le carré de $${$}$ :  $${(0,n.PMY)($)}^2=${$*$}$.<br>\n          On calcule alors $${e}-${$*$}=${e-$*$}$.<br>\n    `):(this.correction=`$f(${$})=${e}- ${t}\\times ${(0,n.PMY)($)}^2=${e-t*$*$}$.<br>`,this.correction+=(0,n.pRK)(` Mentalement : <br>\n    On commence par "calculer" le carré de $${$}$ :  $${(0,n.PMY)($)}^2=${$*$}$.<br>\n    Puis on multiplie le résultat par $${t}$ : $${t}\\times ${$**2}=${t*$*$}$.<br>\n    On calcule alors : $${e}-${t*$*$}=${e-t*$*$}$.`));break;case"d":e=(0,n.nSR)(-4,4,[0,-1,1]),t=(0,n.nSR)(-4,4,[0]),i=(0,n.nSR)(-4,4,[0,-1,1]),r=(0,n.nSR)(-4,4,[0]),$=(0,n.nSR)(-2,2,[0]),s=`(${e}x${(0,n.tPu)(t)})^2`,this.question=`On considère la fonction $f$ définie par $f(x)= ${s}$. <br>\n        Calculer $f(${$})$.`,this.correction=`$f(${$})=\n        \\left(${e}\\times${(0,n.PMY)($)}${(0,n.tPu)(t)}\\right)^2=\n        (${e*$}${(0,n.tPu)(t)})^2=${(0,n.PMY)(e*$+t)}^2\n        =${(e*$+t)*(e*$+t)}$. <br>`,this.reponse=(0,n.n0o)(e*$+t)*(e*$+t),this.correction+=(0,n.pRK)(' Mentalement : <br>\n          On commence par "calculer" l\'intérieur de la parenthèse, puis on élève le résultat au carré. \n    ')}}}}}]);
//# sourceMappingURL=92654.a5e071f72c3d5633da3f.js.map