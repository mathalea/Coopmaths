(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4886,2006],{74886:(i,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>r,default:()=>$});var s=t(2006),n=(t(89846),t(91030));const r="Résoudre des équations carrées.";function $(){s.default.call(this),this.titre=r,this.consigne="Résoudre dans $\\mathbb R$ les équations suivantes :",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=3,this.sup=1,this.spacingCorr=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[];1==this.sup&&(i=[1]),2==this.sup&&(i=[2]),3==this.sup&&(i=[3,4,5,6,7]),4==this.sup&&(i=[1,2,3,4,5,6,7]);let e=(0,n.SRM)(i,this.nbQuestions);for(let t,s,r,$,a,u=0,o=0;u<this.nbQuestions&&o<50;){switch(a=e[u],r=(0,n.nSR)(1,9),$=(0,n.nSR)(2,19,[4,8,9,12,16]),a){case 1:t=`$x^{2}-${r*r}=0$`,s=`$x^{2}-${r*r}=0$<br>`,s+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=${r}$<br>`,s+="On obtient alors :<br>",s+=`$\\phantom{\\iff}x^{2}-${r*r}=0$<br>`,s+=`$\\phantom{\\iff}x^{2}-${r}^{2}=0$`,s+=`$\\iff (x-${r})(x+${r})=0$<br>`,s+=`${(0,n.pRK)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,s+=`$\\iff x-${r}=0\\quad$ ou bien $\\quad x+${r}=0$<br>`,s+=`$\\iff x=${r}\\quad$ ou bien $\\quad x=-${r}$<br>`,s+=`$\\iff S=\\{-${r};${r})$<br>`;break;case 2:t=`$x^{2}-${$}=0$`,s=`$x^{2}-${$}=0$<br>`,s+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=\\sqrt{${$}}$<br>`,s+="On obtient alors :<br>",s+=`$\\phantom{\\iff}x^{2}-${$}=0$<br>`,s+=`$\\phantom{\\iff}x^{2}-(\\sqrt{${$}})^{2}=0$<br>`,s+=`$\\iff (x-\\sqrt{${$}})(x+\\sqrt{${$}})=0$<br>`,s+=`${(0,n.pRK)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,s+=`$\\iff x-\\sqrt{${$}}=0\\quad$ ou bien $\\quad x+\\sqrt{${$}}=0$<br>`,s+=`$\\iff x=\\sqrt{${$}}\\quad$ ou bien $\\quad x=-\\sqrt{${$}}$<br>`,s+=`$\\iff S=\\{-\\sqrt{${$}}\\quad ;\\sqrt{${$}})$<br>`;break;case 3:case 4:t=`$x^{2}+${r*r}=0$`,s=`$x^{2}+${r*r}=0$<br>`,s+=`On ne reconnaît pas d'identité remarquable. <br>\n                        $a^2+b^2$ ne peut pas se factoriser.<br>\n                        $x^{2}$ étant un nombre positif, il est impossible en lui ajoutant ${r*r}\n                        d'obtenir 0.<br>`,s+="$ S=\\emptyset$<br>";break;case 5:t=`$x^{2}=${r*r}$`,s=`$x^{2}=${r*r}$<br>`,s+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",s+=`$\\phantom{\\iff}x^{2}=${r*r}$<br>`,s+=`$\\iff x^{2}-${r*r}=0$<br>`,s+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=${r}$<br>`,s+="On obtient alors :<br>",s+=`$\\iff x^{2}-${r*r}=0$<br>`,s+=`$\\iff x^{2}-${r}^{2}=0$<br>`,s+=`$\\iff (x-${r})(x+${r})=0$<br>`,s+=`${(0,n.pRK)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,s+=`$\\iff x-${r}=0\\quad$ ou bien $\\quad x+${r}=0$<br>`,s+=`$\\iff x=${r}\\quad$ ou bien $\\quad x=-${r}$<br>`,s+=`$\\iff S=\\{-${r};${r})$<br>`;break;case 6:t=`$x^{2}=-${r*r}$`,s=`$x^{2}=-${r*r}$<br>`,s+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",s+=`$x^{2}+${r*r}=0$<br>`,s+=`On ne reconnaît pas d'identité remarquable. <br>\n                        $a^2+b^2$ ne peut pas se factoriser.<br>\n                        $x^{2}$ étant un nombre positif, il est impossible en lui ajoutant ${r*r}\n                        d'obtenir 0.<br>`,s+="$ S=\\emptyset$<br>";break;case 7:t=`$x^{2}=${$}$`,s=`$\\phantom{iff} x^{2}=${$}$<br>`,s+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",s+=`$\\phantom{iff} x^{2}=${$}$<br>`,s+=`$\\iff x^{2}-${$}=0$<br>`,s+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=\\sqrt{${$}}$<br>`,s+="On obtient alors :<br>",s+=`$\\phantom{\\iff}x^{2}-${$}=0$<br>`,s+=`$\\phantom{\\iff}x^{2}-(\\sqrt{${$}})^{2}=0$<br>`,s+=`$\\iff (x-\\sqrt{${$}})(x+\\sqrt{${$}})=0$<br>`,s+=`${(0,n.pRK)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,s+=`$\\iff x-\\sqrt{${$}}=0\\quad$ ou bien $\\quad x+\\sqrt{${$}}=0$<br>`,s+=`$\\iff x=\\sqrt{${$}}\\quad$ ou bien $\\quad x=-\\sqrt{${$}}$<br>`,s+=`$\\iff S=\\{-\\sqrt{${$}}\\quad ;\\sqrt{${$}})$<br>`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(s),u++),o++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 :équations x²-a²=0\n 2 : équations x²-b=0\n 3 :équations x²+a²=0;x²=+/-a²\n 4 : méli-mélo"]}},2006:(i,e,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=4886.ba227f64ecf525b334a8.js.map