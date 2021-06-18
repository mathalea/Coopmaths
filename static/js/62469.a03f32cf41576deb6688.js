(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[62469,71129],{62469:(i,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>o,default:()=>r});var s=t(71129),n=(t(62259),t(63861));const o="Déterminer le plus petit ensemble de nombres dans lequel le nombre proposé appartient";function r(){s.default.call(this),this.titre=o,this.consigne="Déterminer le plus petit ensemble de nombres dans lequel le nombre proposé appartient. :",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i,e=(0,n.SRM)([1,2,3,4,5,6,7,8,9],this.nbQuestions);for(let t,s,o,r,a,$,h=0,l=0;h<this.nbQuestions&&l<50;){switch(i=e[h],i){case 1:t=(0,n.nSR)(0,150),a=`$${t} \\in \\dots$`,$=`$${t}$ est un entier naturel, on a donc $${t}\\in \\mathbb{N}$\n                    `;break;case 2:t=-1*(0,n.nSR)(0,150),a=`$${t} \\in \\dots$`,$=`$${t}$ est un entier relatif, on a donc $${t}\\in \\mathbb{Z}$\n                    `;break;case 3:r=(0,n.nSR)(0,9),s=(0,n.nSR)(0,9)*(0,n.q$q)([-1,1]),o=(0,n.nSR)(0,9),t=s+o/10+r/100,t*=(0,n.q$q)([-1,1]),a=`$${(0,n.k$K)(s+o/10+r/100)}\\in \\dots$`,$=`$${(0,n.k$K)(s+o/10+r/100)}$ est un nombre décimal, on a donc $${(0,n.k$K)(s+o/10+r/100)}\\in \\mathbb{D}$\n                    `;break;case 4:t=(0,n.nSR)(2,16),s=(0,n.nSR)(0,9),o=(0,n.nSR)(0,9),a=`$\\sqrt{${(0,n.k$K)(t*t)}}\\in \\dots$`,$=`$\\sqrt{${t*t}}=${t}$  est un entier naturel, on a donc $\\sqrt{${(0,n.k$K)(t*t)}}\\in \\mathbb{N}$\n                    `;break;case 5:t=(0,n.nSR)(2,16),s=(0,n.nSR)(2,6),o=(0,n.nSR)(0,9),a=`$\\dfrac{${(0,n.k$K)(s*t)}}{${t}}\\in \\dots$`,$=`$\\dfrac{${(0,n.k$K)(s*t)}}{${t}}=\\dfrac{${s}\\times ${t}}{${t}}=${s}$  est un entier naturel, on a donc $\\dfrac{${(0,n.k$K)(s*t)}}{${t}}\\in \\mathbb{N}$\n                    `;break;case 6:t=(0,n.q$q)([3,5,7,11,13,17,19,23,29,31,37,39,41,43,47,53,57,61,67,71,73,79,83,87,89]),s=(0,n.q$q)([3,5,7,11,13,17,19,23,29,31,37,39,41,43,47,53,57,61,67,71,73,79,83,87,89],[t]),a=`$\\dfrac{${t}}{${s}}\\in \\dots$`,$=`$\\dfrac{${t}}{${s}}$ n'est pas un nombre décimal. On a donc $\\dfrac{${t}}{${s}}\\in \\mathbb{Q}$\n                    `;break;case 7:for(s=(0,n.q$q)([4,5,8,10]),t=(0,n.nSR)(4,100);t%s==0;)t=(0,n.nSR)(4,100);a=`$\\dfrac{${t}}{${s}}\\in \\dots$`,$=`$\\dfrac{${t}}{${s}}=${(0,n.euh)(t/s)}$  est un nombre décimal. On a donc $\\dfrac{${t}}{${s}}\\in \\mathbb{D}$\n                    `;break;case 8:t=(0,n.nSR)(2,100,[4,9,16,25,36,49,64,81]),a=`$\\sqrt{${t}} \\in \\dots$`,$=`$\\sqrt{${t}}$  est un nombre irrationnel. On a donc $\\sqrt{${t}}\\in \\mathbb{R}$\n                    `;break;case 9:t=(0,n.nSR)(2,9),a=`$${t}\\pi \\in \\dots$`,$=`$${t}\\pi$   est un nombre irrationnel. On a donc $${t}\\pi \\in \\mathbb{R}$\n                    `}-1===this.listeQuestions.indexOf(a)&&(this.listeQuestions.push(a),this.listeCorrections.push($),h++),l++}(0,n.K1R)(this)}}},71129:(i,e,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=62469.a03f32cf41576deb6688.js.map