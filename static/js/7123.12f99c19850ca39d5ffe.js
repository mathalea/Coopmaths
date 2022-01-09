/*! For license information please see 7123.12f99c19850ca39d5ffe.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7123,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},7123:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>r,interactifReady:()=>a,interactifType:()=>h,amcReady:()=>c,amcType:()=>u,default:()=>l});var s=t(41154),o=t(25482),n=t(25523);const r="Convertir une fraction ou une somme vers un décimal",a=!0,h="mathLive",c=!0,u="AMCNum";function l(){n.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.tailleDiaporama=2,this.nouvelleVersion=function(){let e,i,t,n,r,a;switch(this.formatChampTexte="largeur15 inline",this.formatInteractif="calcul",(0,o.q$q)([1,2,3,4,5])){case 1:e=(0,o.nSR)(1,9,5),i=(0,o.q$q)([1,3,5,9,11]),(0,o.q$q)([!0,!1])?(n=(0,s.Pj)(e,5),a=(0,o.n0o)(e/5),this.question=`La valeur décimale de  $${n.texFraction}$ est :`,this.correction=`$${n.texFraction}=${(0,o.euh)(a)}$`,this.reponse=a):(n=(0,s.Pj)(i,4),a=(0,o.n0o)(i/4),this.question=`La valeur décimale de  $${n.texFraction}$ est :`,this.correction=`$${n.texFraction}=${(0,o.euh)(a)}$`,this.reponse=a);break;case 2:t=(0,o.q$q)([2,4,5]),i=(0,o.nSR)(1,t-1),n=(0,s.Pj)(i,t),e=(0,o.nSR)(1,4),a=(0,o.n0o)(e+i/t),this.question=` $${e}+${n.texFraction}=$<br>\n        (résultat sous forme décimale)`,this.correction=`$${e}+${n.texFraction} = ${e} + ${(0,o.euh)(n.valeurDecimale)}= ${(0,o.euh)(a)}$`,this.reponse=a;break;case 3:i=(0,o.q$q)([100,1e3]),e=(0,o.nSR)(1,15),t=(0,o.nSR)(11,19),n=(0,s.Pj)(t,i),a=(0,o.n0o)(e+t/i),this.question=` $${e}+${n.texFraction}=$<br>\n        (résultat sous forme décimale)`,this.correction=`$${e}+${n.texFraction} = ${(0,o.euh)(a)}$`,this.reponse=a;break;case 4:e=(0,o.nSR)(1,15),i=(0,o.nSR)(11,19),t=(0,o.nSR)(1,9),n=(0,s.Pj)(i,100),r=(0,s.Pj)(t,1e3),a=(0,o.n0o)(e+i/100+t/1e3),this.question=`$${e}+${n.texFraction}+${r.texFraction}=$<br>\n        (résultat sous forme décimale)`,this.correction=`$${e}+${n.texFraction}+${r.texFraction}=${e}+${(0,o.k$K)(i/100)}+${(0,o.k$K)(t/1e3)}=${(0,o.k$K)(a)}$.`,this.reponse=a;break;case 5:e=(0,o.nSR)(1,15),i=(0,o.nSR)(1,9),t=(0,o.nSR)(1,9),n=(0,s.Pj)(i,1e3),r=(0,s.Pj)(t,100),a=(0,o.n0o)(e+i/1e3+t/100),this.question=` $${e}+${n.texFraction}+${r.texFraction}=$<br>\n        (résultat sous forme décimale)`,this.correction=`$${e}+${n.texFraction}+${r.texFraction}=${e}+${(0,o.k$K)(i/1e3)}+${(0,o.k$K)(t/100)}=${(0,o.euh)(a)}$.`,this.reponse=a}}}}}]);
//# sourceMappingURL=7123.12f99c19850ca39d5ffe.js.map