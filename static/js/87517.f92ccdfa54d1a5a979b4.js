"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[87517,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},87517:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>$,interactifReady:()=>o,interactifType:()=>n,dateDePublication:()=>a,default:()=>h});var s=t(25523),r=t(25482);const $="Factoriser une expression",o=!0,n="mathLive",a="21/10/2021";function h(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur20 inline",this.nouvelleVersion=function(){const e=(0,r.q$q)([2,3,5]),i=(0,r.q$q)([[2,3],[3,4],[2,5],[3,5],[4,5],[5,6],[2,7],[3,7],[4,7],[5,7],[6,7],[3,8],[5,8],[7,8],[2,9],[4,9],[5,9],[7,9],[8,9],[3,10],[7,10],[9,10]]),t=i[0],s=i[1],$=(0,r.nSR)(1,9),o=(0,r.nSR)(2,9);switch((0,r.q$q)([1,2,3,4,5])){case 1:this.question=` Factoriser au maximum  $${t*e}x+${s*e}x^2$`,this.correction=`$${e}x$ est un facteur commun aux deux termes : $${t*e}x$ et $${s*e}x^2$.<br>\n         En effet :<br>\n         $${t*e}x+${s*e}x^2=\\underbrace{${e}x\\times ${t}}_{${t*e}x} +\\underbrace{${e}x\\times ${s}x}_{${s*e}x^2}=${e}x(${t}+${s}x).$`,this.reponse=[`${e}x(${t}+${s}x)`,`${e}x(${s}x+${t})`];break;case 2:this.question=` Factoriser  $${e}a+${e}\\times${t}b$`,this.correction=`$${e}$ est un facteur commun aux deux termes : $${e}a$ et $${e}\\times ${t}$.<br>\n        Ainsi :<br>\n        $${e}a+${e}\\times${t}b=${e}(a+${t}b)$`,this.reponse=[`${e}(a+${t}*b)`,`${e}(${t}*b+a)`];break;case 3:this.question=` Factoriser  $x\\times ${t}x+x\\times ${s}$`,this.correction=`$x$ est un facteur commun aux deux termes : $x\\times ${t}x$ et $x\\times ${s}$.<br>\n        Ainsi :<br>$x\\times ${t}x+x\\times ${s}=x(${t}x+${s})$`,this.reponse=[`x(${t}x+${s})`,`x(${s}x+${t})`];break;case 4:this.question=` Factoriser  $x^2-${$*$}$`,this.correction=`On utilise l'égalité remarquable $a^2-b^2=(a+b)(a-b)$ avec $a=x$ et $b=${$}$.<br>\n        $x^2-${$*$}=x^2-${$}^2=(x-${$})(x+${$})$`,this.reponse=[`(x-${$})(x+${$})`,`(x+${$})(x-${$})`,`(x-${$})(${$}+x)`,`(${$}+x)(x-${$})`];break;case 5:this.question=` Factoriser  $${o*o}x^2-${$*$}$`,this.correction=`On utilise l'égalité remarquable $a^2-b^2=(a+b)(a-b)$ avec $a=${o}x$ et $b=${$}$.<br>\n        $${o*o}x^2-${$*$}=(${o}x)^2-${$}^2=(${o}x-${$})(${o}x+${$})$`,this.reponse=[`(${o}x-${$})(${o}x+${$})`,`(${o}x+${$})(${o}x-${$})`]}}}}}]);
//# sourceMappingURL=87517.f92ccdfa54d1a5a979b4.js.map