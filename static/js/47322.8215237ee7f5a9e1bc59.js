"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[47322,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},47322:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>n,interactifReady:()=>r,interactifType:()=>a,dateDePublication:()=>h,default:()=>l});var s=t(25523),o=t(25482);const n="Déterminer le coefficient de colinéarité entre deux vecteurs",r=!0,a="mathLive",h="30/10/2021";function l(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=(0,o.q$q)([-2,2,3,4,-4,-3]),i=(0,o.nSR)(1,5),t=(0,o.nSR)(1,5),s=e*i,n=e*t;this.question=`Dans un repère orthonormé $(O,\\vec i,\\vec j)$, on a :<br>\n       $\\vec{u}\\left(${i}${(0,o.sp)(1)} ; ${(0,o.sp)(1)} ${t}\\right)$ et $\\vec{v}\\left(${s}${(0,o.sp)(1)} ; ${(0,o.sp)(1)} a\\right)$<br>\n       Les vecteurs $\\vec{u}$ et $\\vec{v}$ sont colinéaires lorsque $a=$`,this.correction=`Les deux vecteurs sont colinéaires, donc il existe un réel $k$ tel que $\\vec{v}=k\\times \\vec{u}$.<br>\n       Comme $${s}=${e}\\times ${i}$, alors $y_{\\vec{v}}=${e}\\times${t}=${e*t}$, donc $a=${e*t}$.`,this.reponse=n}}}}]);
//# sourceMappingURL=47322.8215237ee7f5a9e1bc59.js.map