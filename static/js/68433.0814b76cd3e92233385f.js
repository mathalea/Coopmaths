"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[68433,25523],{68433:(t,s,i)=>{i.r(s),i.d(s,{titre:()=>$,default:()=>n});var e=i(25523),r=i(25482);const $="Connaître les propriétés calculatoires des racines carrées";function n(){e.default.call(this),this.titre=$,this.consigne="Effectuer, si possible, les calculs suivants :",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let t;const s=(0,r.SRM)([1,2,3,4,5,6,7],this.nbQuestions);for(let i,e,$,n,o,h,a,l=0,q=0;l<this.nbQuestions&&q<50;){switch(t=s[l],t){case 1:i=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),e=(0,r.nSR)(2,11,[4,8,9]),$=i*i*e,n=i*i,h=`$\\left(${i} \\sqrt{${e}}\\right)^{2}$`,a=`$\\left(${i} \\sqrt{${e}}\\right)^{2}=${(0,r.PMY)(i)}^{2}\\times \\left(\\sqrt{${e}}\\right)^{2}$\n                        $\\phantom{\\left(${i} \\sqrt{${e}}\\right)^{2}}$<br>\n                        $\\phantom{\\left(${i} \\sqrt{${e}}\\right)^{2}}=${n}\\times ${e}$<br>\n                        $\\phantom{\\left(${i} \\sqrt{${e}}\\right)^{2}}=${$}$`;break;case 2:i=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),n=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),e=(0,r.nSR)(2,11,[4,8,9]),o=$*n,h=`$ ${$} \\sqrt{${e}}\\times ${(0,r.PMY)(n)} \\sqrt{${e}}$`,a=`$ ${$} \\sqrt{${e}}\\times ${(0,r.PMY)(n)} \\sqrt{${e}}=${$}\\times ${(0,r.PMY)(n)} \\sqrt{${e}} \\times \\sqrt{${e}}$<br>\n                        $\\phantom{${$} \\sqrt{${e}}\\times ${(0,r.PMY)(n)} \\sqrt{${e}}}=${o}\\times ${e}$<br>\n                        $\\phantom{${$} \\sqrt{${e}}\\times ${(0,r.PMY)(n)} \\sqrt{${e}}}=${o*e}$`;break;case 3:i=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),n=(0,r.nSR)(2,9)*(0,r.q$q)([-1,1]),e=(0,r.nSR)(2,11,[4,8,9]),o=$*n,h=`$ ${i} \\sqrt{${e}}\\left( ${$}  ${(0,r.tPu)(n)}\\sqrt{${e}}\\right)$`,a=`$${i} \\sqrt{${e}}\\left( ${$}  ${(0,r.tPu)(n)}\\sqrt{${e}}\\right)=\n                        ${i} \\sqrt{${e}}\\times ${(0,r.PMY)($)}${(0,r.tPu)(i)} \\sqrt{${e}}\\times ${(0,r.PMY)(n)}\\sqrt{${e}}$<br>\n                        $\\phantom{${i} \\sqrt{${e}}\\left( ${$}  ${(0,r.tPu)(n)}\\sqrt{${e}}\\right)}=${i*$}\\sqrt{${e}}${(0,r.tPu)(i)}\\times ${(0,r.PMY)(n)}\\times ${e}$<br>\n                        $\\phantom{${i} \\sqrt{${e}}\\left( ${$}  ${(0,r.tPu)(n)}\\sqrt{${e}}\\right)}=${i*$}\\sqrt{${e}}${(0,r.tPu)(i*n*e)}$`;break;case 4:i=(0,r.nSR)(2,9),n=(0,r.nSR)(2,9),e=(0,r.nSR)(2,11,[4,8,9]),$=(0,r.nSR)(2,19,[4,8,9,12,16,18,e]),o=$*n,h=`$  \\sqrt{${e}}+\\sqrt{${$}}$`,a=`$  \\sqrt{${e}}+\\sqrt{${$}}$ n'est pas simplifiable`;break;case 5:e=(0,r.nSR)(2,11),$=(0,r.nSR)(2,11,[e]),o=$*n,h=`$  \\sqrt{${e*e}}+\\sqrt{${$*$}}$`,a=`$  \\sqrt{${e*e}}+\\sqrt{${$*$}}=${e}+${$}=${e+$}$ `;break;case 6:e=(0,r.nSR)(2,11),$=(0,r.nSR)(2,7,[e]),n=e*e*$,h=`$ \\sqrt{\\dfrac{${n}}{${$}}}$`,a=`$ \\sqrt{\\dfrac{${n}}{${$}}}= \\sqrt{\\dfrac{${e}^{2}\\times${$}}{${$}}}$<br>\n                        $\\phantom{\\sqrt{\\dfrac{${n}}{${$}}}}=\\sqrt{${e}^{2}}$<br>\n                        $\\phantom{\\sqrt{\\dfrac{${n}}{${$}}}}=${e}$ `;break;case 7:e=(0,r.nSR)(2,11,[4,9]),$=(0,r.nSR)(2,7,[e]),n=e*$,h=`$ \\sqrt{${n}}\\times \\sqrt{${$}}$`,a=`$ \\sqrt{${n}}\\times \\sqrt{${$}}=\\sqrt{${n}\\times${$}}$<br>\n                        $\\phantom{\\sqrt{${n}}\\times \\sqrt{${$}}}=\\sqrt{${e}\\times${$}\\times${$}}$<br>\n                        $\\phantom{\\sqrt{${n}}\\times \\sqrt{${$}}}=${$}\\sqrt{${e}}$ `}-1===this.listeQuestions.indexOf(h)&&(this.listeQuestions.push(h),this.listeCorrections.push(a),l++),q++}(0,r.K1R)(this)}}},25523:(t,s,i)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...s){0===t&&(this.listeArguments=[]);let i="";for(const e of s)void 0!==e&&(i+=e.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>e})}}]);
//# sourceMappingURL=68433.0814b76cd3e92233385f.js.map