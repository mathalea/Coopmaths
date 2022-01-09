"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[27481,25523],{27481:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>u,default:()=>r});var s=t(25523),n=t(25482);const u="Déterminer les termes d’une suite définie par récurrence";function r(){s.default.call(this),this.titre=u,this.consigne="Une suite étant donnée, calculer le terme demandé.",this.nbQuestions=4,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.SRM)([1,2,3,4],this.nbQuestions);for(let i,t,s,u,r,o,$=0,a=0;$<this.nbQuestions&&a<50;){switch(e[$]){case 1:u=(0,n.nSR)(1,10)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(0,10)*(0,n.q$q)([-1,1]),o=(0,n.nSR)(2,10),i=`Soit $(u_n)$ une suite définie par $u_0=${s}$ et pour tout entier $n\\in\\mathbb{N}$ par $u_{n+1} = u_n ${(0,n.tPu)(u)}$.`,i+=`<br>Calculer $u_{${o}}$.`,t=`On calcule successivent les termes jusqu'à obtenir $u_{${o}}$ :`;for(let e=0;e<o;e++)t+=`<br> $u_{${e+1}} = ${(0,n.b1)("u_{"+e+"}",(0,n.LWD)(e,!0))} ${(0,n.tPu)(u)} = \n              ${(0,n.b1)(s,(0,n.LWD)(e,!0))} + ${u} = ${(0,n.b1)(s+u,(0,n.LWD)(e+1,!0))}$`,s+=u;break;case 2:u=(0,n.nSR)(2,5)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(1,9)*(0,n.q$q)([-1,1]),o=(0,n.nSR)(2,6),i=`Soit $(u_n)$ une suite définie par $u_0=${s}$ et pour tout entier $n\\in\\mathbb{N}$ par $u_{n+1} = u_n \\times ${(0,n.PMY)(u)}$.`,i+=`<br>Calculer $u_{${o}}$.`,t=`On calcule successivent les termes jusqu'à obtenir $u_${o}$ :`;for(let e=0;e<o;e++)t+=`<br> $u_{${e+1}} = ${(0,n.b1)("u_{"+e+"}",(0,n.LWD)(e,!0))} \\times ${(0,n.PMY)(u)} = \n              ${(0,n.b1)(s,(0,n.LWD)(e,!0))} \\times ${(0,n.PMY)(u)} = ${(0,n.b1)(s*u,(0,n.LWD)(e+1,!0))}$`,s*=u;break;case 3:u=(0,n.nSR)(2,5)*(0,n.q$q)([-1,1]),r=(0,n.nSR)(1,5)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(1,5)*(0,n.q$q)([-1,1]),o=(0,n.nSR)(2,6),i=`Soit $(u_n)$ une suite définie par $u_0=${s}$ et pour tout entier $n\\in\\mathbb{N}$ par $u_{n+1} = ${u} u_n ${(0,n.tPu)(r)}$.`,i+=`<br>Calculer $u_{${o}}$.`,t=`On calcule successivent les termes jusqu'à obtenir $u_${o}$ :`;for(let e=0;e<o;e++)t+=`<br> $u_{${e+1}} = ${u}\\times ${(0,n.b1)("u_{"+e+"}",(0,n.LWD)(e,!0))} ${(0,n.tPu)(r)}=`,t+=`${u} \\times ${(0,n.PMY)((0,n.b1)(s,(0,n.LWD)(e,!0)))} ${(0,n.tPu)(r)} = \n            ${(0,n.b1)(u*s+r,(0,n.LWD)(e+1,!0))}$`,s=s*u+r;break;case 4:u=(0,n.nSR)(1,5)*(0,n.q$q)([-1,1]),r=(0,n.q$q)([-1,1]),s=(0,n.nSR)(1,5)*(0,n.q$q)([-1,1]),o=(0,n.nSR)(2,3),i=`Soit $(u_n)$ une suite définie par $u_0=${s}$ et pour tout entier $n\\in\\mathbb{N}$ par $u_{n+1} = ${u} ${(0,n.mKt)(r)} u_n^2$.`,i+=`<br>Calculer $u_{${o}}$.`,t=`On calcule successivent les termes jusqu'à obtenir $u_${o}$ :`;for(let e=0;e<o;e++)t+=`<br> $u_{${e+1}} = ${u} ${(0,n.mKt)(r)} (${(0,n.b1)("u_{"+e+"}",(0,n.LWD)(e,!0))})^2=`,t+=`${u} ${(0,n.mKt)(r)} ${(0,n.PMY)((0,n.b1)(s,(0,n.LWD)(e,!0)))}^2 = \n              ${(0,n.b1)((0,n.euh)(u+r*s*s),(0,n.LWD)(e+1,!0))}$`,s=u+r*s*s}this.questionJamaisPosee($,u,s,o)&&(this.listeQuestions.push(i),this.listeCorrections.push(t),$++),a++}(0,n.K1R)(this)}}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=27481.0b099d76f9526f2028b8.js.map