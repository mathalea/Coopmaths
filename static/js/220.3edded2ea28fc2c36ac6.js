(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[220,7567],{80220:(e,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>r,default:()=>$});var s=t(67567),n=t(24477);const r="Résoudre des équations carrées.";function $(){s.default.call(this),this.titre=r,this.consigne="Résoudre dans $\\mathbb R$ les équations suivantes :",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=3,this.sup=1,this.spacingCorr=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[];1==this.sup&&(e=[1]),2==this.sup&&(e=[2]),3==this.sup&&(e=[3,4,5,6,7]),4==this.sup&&(e=[1,2,3,4,5,6,7]);let i=(0,n.SRM)(e,this.nbQuestions);for(let e,t,s,r,$,a=0,u=0;a<this.nbQuestions&&u<50;){switch($=i[a],s=(0,n.nSR)(1,9),r=(0,n.nSR)(2,19,[4,8,9,12,16]),$){case 1:e=`$x^{2}-${s*s}=0$`,t=`$x^{2}-${s*s}=0$<br>`,t+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=${s}$<br>`,t+="On obtient alors :<br>",t+=`$\\phantom{\\iff}x^{2}-${s*s}=0$<br>`,t+=`$\\phantom{\\iff}x^{2}-${s}^{2}=0$`,t+=`$\\iff (x-${s})(x+${s})=0$<br>`,t+=`${(0,n.Udc)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,t+=`$\\iff x-${s}=0\\quad$ ou bien $\\quad x+${s}=0$<br>`,t+=`$\\iff x=${s}\\quad$ ou bien $\\quad x=-${s}$<br>`,t+=`$\\iff S=\\{-${s};${s})$<br>`;break;case 2:e=`$x^{2}-${r}=0$`,t=`$x^{2}-${r}=0$<br>`,t+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=\\sqrt{${r}}$<br>`,t+="On obtient alors :<br>",t+=`$\\phantom{\\iff}x^{2}-${r}=0$<br>`,t+=`$\\phantom{\\iff}x^{2}-(\\sqrt{${r}})^{2}=0$<br>`,t+=`$\\iff (x-\\sqrt{${r}})(x+\\sqrt{${r}})=0$<br>`,t+=`${(0,n.Udc)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,t+=`$\\iff x-\\sqrt{${r}}=0\\quad$ ou bien $\\quad x+\\sqrt{${r}}=0$<br>`,t+=`$\\iff x=\\sqrt{${r}}\\quad$ ou bien $\\quad x=-\\sqrt{${r}}$<br>`,t+=`$\\iff S=\\{-\\sqrt{${r}}\\quad ;\\sqrt{${r}})$<br>`;break;case 3:case 4:e=`$x^{2}+${s*s}=0$`,t=`$x^{2}+${s*s}=0$<br>`,t+=`On ne reconnaît pas d'identité remarquable. <br>\n                        $a^2+b^2$ ne peut pas se factoriser.<br>\n                        $x^{2}$ étant un nombre positif, il est impossible en lui ajoutant ${s*s}\n                        d'obtenir 0.<br>`,t+="$ S=\\emptyset$<br>";break;case 5:e=`$x^{2}=${s*s}$`,t=`$x^{2}=${s*s}$<br>`,t+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",t+=`$\\phantom{\\iff}x^{2}=${s*s}$<br>`,t+=`$\\iff x^{2}-${s*s}=0$<br>`,t+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=${s}$<br>`,t+="On obtient alors :<br>",t+=`$\\iff x^{2}-${s*s}=0$<br>`,t+=`$\\iff x^{2}-${s}^{2}=0$<br>`,t+=`$\\iff (x-${s})(x+${s})=0$<br>`,t+=`${(0,n.Udc)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,t+=`$\\iff x-${s}=0\\quad$ ou bien $\\quad x+${s}=0$<br>`,t+=`$\\iff x=${s}\\quad$ ou bien $\\quad x=-${s}$<br>`,t+=`$\\iff S=\\{-${s};${s})$<br>`;break;case 6:e=`$x^{2}=-${s*s}$`,t=`$x^{2}=-${s*s}$<br>`,t+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",t+=`$x^{2}+${s*s}=0$<br>`,t+=`On ne reconnaît pas d'identité remarquable. <br>\n                        $a^2+b^2$ ne peut pas se factoriser.<br>\n                        $x^{2}$ étant un nombre positif, il est impossible en lui ajoutant ${s*s}\n                        d'obtenir 0.<br>`,t+="$ S=\\emptyset$<br>";break;case 7:e=`$x^{2}=${r}$`,t=`$\\phantom{iff} x^{2}=${r}$<br>`,t+="Pour résoudre ce genre d'équations, il faut essayer de se ramener à une équation produit-nul, <br>\n                        donc déjà obtenir une équation nulle. <br>",t+=`$\\phantom{iff} x^{2}=${r}$<br>`,t+=`$\\iff x^{2}-${r}=0$<br>`,t+=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                        avec  $\\quad a=x \\quad$ et $\\quad b=\\sqrt{${r}}$<br>`,t+="On obtient alors :<br>",t+=`$\\phantom{\\iff}x^{2}-${r}=0$<br>`,t+=`$\\phantom{\\iff}x^{2}-(\\sqrt{${r}})^{2}=0$<br>`,t+=`$\\iff (x-\\sqrt{${r}})(x+\\sqrt{${r}})=0$<br>`,t+=`${(0,n.Udc)("Un produit est nul si et seulement si au moins un de ses facteurs est nul.")}<br>`,t+=`$\\iff x-\\sqrt{${r}}=0\\quad$ ou bien $\\quad x+\\sqrt{${r}}=0$<br>`,t+=`$\\iff x=\\sqrt{${r}}\\quad$ ou bien $\\quad x=-\\sqrt{${r}}$<br>`,t+=`$\\iff S=\\{-\\sqrt{${r}}\\quad ;\\sqrt{${r}})$<br>`}-1==this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),a++),u++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 :équations x²-a²=0\n 2 : équations x²-b=0\n 3 :équations x²+a²=0;x²=+/-a²\n 4 : méli-mélo"]}},67567:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);