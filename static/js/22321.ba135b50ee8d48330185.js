"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[22321,25523],{22321:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>r});var t=s(25523),o=s(25482);const n="Multiplier un entier par 10, 100, 1 000...";function r(){t.default.call(this),this.consigne="Calculer :",this.nbQuestions=8,this.nbCols=2,this.nbColsCorr=2,this.sup=2,this.nouvelleVersion=function(i){this.boutonAide=(0,o.Qt6)(i,"https://mathix.org/glisse-nombre/index.html","Glisse-nombre"),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const e=[1,2,3,4,(0,o.q$q)([5,6]),7,8,9],s=(0,o.SRM)(e,this.nbQuestions);let t=[];t=2===parseInt(this.sup)?(0,o.SRM)([10,100,1e3,1e4,1e5],this.nbQuestions):(0,o.SRM)([10,100,1e3],this.nbQuestions);for(let n,r,h,a,u=0,l=0;u<this.nbQuestions&&l<50;){switch(s[u]){case 1:h=(0,o.nSR)(1,9);break;case 2:h=10*(0,o.nSR)(2,9);break;case 3:h=100*(0,o.nSR)(2,9);break;case 4:h=1e3*(0,o.nSR)(2,9);break;case 5:h=100*(0,o.nSR)(1,9)+(0,o.nSR)(1,9);break;case 6:h=1e3*(0,o.nSR)(1,9)+(0,o.nSR)(1,9);break;case 7:h=100*(0,o.nSR)(1,9)+10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9);break;case 8:h=1e4*(0,o.nSR)(1,9)+100*(0,o.nSR)(1,9);break;case 9:h=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9)}a=t[u],(0,o.q$q)([!0,!1])?(n=`$${(0,o.euh)(h)}\\times${(0,o.euh)(a)}$`,r=`$${(0,o.euh)(h)}\\times${(0,o.euh)(a)}=${(0,o.euh)(h*a)}$`):(n=`$${(0,o.euh)(a)}\\times${(0,o.euh)(h)}$`,r=`$${(0,o.euh)(a)}\\times${(0,o.euh)(h)}=${(0,o.euh)(h*a)}$`),-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(r),u++),l++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Multiplication par 10, 100 ou 1 000\n2 : Multiplication par 10, 100, 1 000, 10 000 ou 100 000"]}},25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=22321.ba135b50ee8d48330185.js.map