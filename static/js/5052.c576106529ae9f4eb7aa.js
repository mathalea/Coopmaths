"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5052,25523],{25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})},5052:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>o,default:()=>h});var s=t(25523),n=t(25482);const o="Calculer la racine carrée de (x² +/- y²)";function h(){s.default.call(this),this.titre=o,this.consigne="Dans chaque cas, calculer a² + b² et a² - b²; puis donner la racine carrée de chaque résultat en valeur arrondie au centième.",this.nbQuestions=2,this.nbCols=3,this.nbColsCorr=2,this.tailleDiaporama=50,this.video="",this.nouvelleVersion=function(){let i,e,t,s,o,h,a,r,u;this.listeQuestions=[],this.listeCorrections=[];const l=(0,n.SRM)(["type1","type2"],this.nbQuestions);for(let $,c,b=0,m=0;b<this.nbQuestions&&m<50;){switch(l[b]){case"type1":i=(0,n.nSR)(3,12),t=(0,n.nSR)(5,9),e=(0,n.n0o)(.1*t);break;case"type2":i=(0,n.nSR)(3,12),t=(0,n.nSR)(1,5),e=(0,n.n0o)(1+.1*t)}s=(0,n.n0o)(i*i+e*e),o=(0,n.n0o)(i*i-e*e),h=Math.sqrt(s),a=Math.sqrt(o),r=(0,n.YbQ)(h-(0,n.YbQ)(h,2),3),u=(0,n.YbQ)(a-(0,n.YbQ)(a,2),3),$=`$\\phantom{12}a = ${i} \\phantom{12}et \\phantom{12}b = ${(0,n.euh)(e)}$`,c=`$\\begin{aligned}a^2 + b^2&\n   = ${(0,n.euh)(i)} \\times ${(0,n.euh)(i)} + ${(0,n.euh)(e)} \\times ${(0,n.euh)(e)} \n   \\\\&= ${(0,n.k$K)(i*i)} + ${(0,n.k$K)(e*e)} \n   \\\\&= ${(0,n.k$K)(i*i+e*e)}\\end{aligned}$`,c+=`<br>$\\phantom{123456}\\sqrt{${(0,n.k$K)(i*i+e*e)}}$`,(0,n.qnD)((0,n.n0o)(100*s))?c+=`$\\phantom{1}=\\phantom{1}${(0,n.euh)(h)}$  (qui est la valeur exacte de $\\sqrt{${(0,n.k$K)(i*i+e*e)}}$)`:c+=1e3*r<5?`$\\phantom{1}≈\\phantom{1}${(0,n.i6h)((0,n.YbQ)(h,2))}$`:`$\\phantom{1}≈\\phantom{1}${(0,n.i6h)((0,n.YbQ)(h+.01,2))}$`,c+=`<br><br>$\\begin{aligned}a^2 - b^2& \n  = ${(0,n.euh)(i)} \\times ${(0,n.euh)(i)} - ${(0,n.euh)(e)} \\times ${(0,n.euh)(e)} \n  \\\\&= ${(0,n.k$K)(i*i)} - ${(0,n.k$K)(e*e)} \n  \\\\&= ${(0,n.k$K)(i*i-e*e)}\\end{aligned}$`,c+=`<br>$\\phantom{123456}\\sqrt{${(0,n.k$K)(i*i-e*e)}}$`,(0,n.qnD)((0,n.n0o)(100*o))?c+=`$\\phantom{1}=\\phantom{1}${(0,n.euh)(a)}$  (qui est la valeur exacte de $\\sqrt{${(0,n.k$K)(i*i-e*e)}}$)`:c+=1e3*u<5?`$\\phantom{1}≈\\phantom{1}${(0,n.i6h)((0,n.YbQ)(a,2))}$`:`$\\phantom{1}≈\\phantom{1}${(0,n.i6h)((0,n.YbQ)(a+.01,2))}$`,-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(c),b++),m++}(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=5052.c576106529ae9f4eb7aa.js.map