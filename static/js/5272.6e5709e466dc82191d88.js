(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5272,6969],{66969:(e,$,i)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r($),i.d($,{default:()=>n})},75272:(e,$,i)=>{"use strict";i.r($),i.d($,{titre:()=>s,default:()=>o});var n=i(66969),t=i(55339);const s="Reconnaître une fonction affine.";function o(){n.default.call(this),this.titre=s,this.video="",this.consigne="Déterminer,en expliquant, si les fonctions suivantes sont, ou non, des fonctions affines. :",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=5,this.spacingCorr=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=[];e=[1,2,3,4,5,6,7,8];let $=(0,t.SRM)(e,this.nbQuestions);for(let i,n,s,o,r,a,f,b,l,u=0,c=0;u<this.nbQuestions&&c<50;){switch(l=$[u],b=(0,t.q$q)([-1,1]),s=(0,t.nSR)(2,9),s*=b,o=(0,t.nSR)(1,9),r=(0,t.q$q)([2,3,5,7,10,11,13,15,17]),o*=b,a=(0,t.q$q)([2,3,5,7,10,11,13,15,17]),f=(0,t.nSR)(2,9),l){case 1:i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${(0,t.y$x)(s,o)}$`,n=` $f(x)=${(0,t.y$x)(s,o)}$<br>`,n+="On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",n+=`Ici, on a : $a=${s}$ et $b=${o}$<br>`,n+="$f$ est donc bien une fonction affine.<br>";break;case 2:(s=1)&&(i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${o}+x$<br>`,n=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${o}+x$<br>`,n+=` On peut écrire $f$ sous cette forme : $f(x)=x ${(0,t.tPu)(o)}$<br>`),(s=-1)?(i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${o}-x$<br>`,n=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${o}-x$<br>`,n+=` On peut écrire $f$ sous cette forme : $f(x)=-x ${(0,t.tPu)(o)}$<br>`):(i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${(0,t.tPu)(o)} ${(0,t.tPu)(s)}  x$<br>`,n=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${(0,t.tPu)(o)} ${(0,t.tPu)(s)}  x$<br>`,n+=` On peut écrire $f$ sous cette forme : $f(x)=-x ${(0,t.y$x)(s,o)}$<br>`),n+="On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",n+=`Ici, on a : $a=${s}$ et $b=${o}$<br>`,n+="$f$ est donc bien une fonction affine.";break;case 3:i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${s}x^{2}${(0,t.tPu)(o)} x${(0,t.tPu)(r)} $`,n=` $f(x)=${s}x^{2}${(0,t.Zvy)(o)} x${(0,t.tPu)(r)} $<br>`,n+="On observe que la fonction $f$ est du second degré, puisqu'il y a un terme en $x^{2}$<br>",n+="Elle s'écrit sous la forme $f(x)= a x^{2}+ bx+c$ et non pas sous la forme $ax+b$.<br>",n+="$f$ n'est donc pas une fonction affine.<br>";break;case 4:i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=\\sqrt{${r}}x + \\sqrt{${a}}$`,n=` $f(x)=\\sqrt{${r}}x + \\sqrt{${a}}$<br>`,n+="On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",n+=`Ici, on a : $a=\\sqrt{${r}}$ et $b=\\sqrt{${a}}$<br>`,n+="$f$ est donc bien une fonction affine.<br>";break;case 5:i=` Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${s}x^{2}${(0,t.tPu)(r)} $`,n=` $f(x)=${s}x^{2}${(0,t.tPu)(r)} $<br>`,n+="On observe que la fonction $f$ est du second degré, puisqu'il y a un terme en $x^{2}$<br>",n+="Elle s'écrit sous la forme $f(x)= a x^{2}+b$ avec $a$ et $b$ des nombres réels, et non pas sous la forme $ax+b$.<br>",n+="$f$ n'est donc pas une fonction affine.<br>";break;case 6:i=`Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=\\dfrac{1}{${s}x${(0,t.tPu)(o)} }$`,n=` $f(x)=\\dfrac{1}{${s}x${(0,t.tPu)(o)} }$<br>`,n+="On observe que la fonction $f$ est une fonction rationnelle, puisqu'il y une fraction avec des termes en $x$ au dénominateur.<br>",n+="Elle ne s'écrit  pas sous la forme $ax+b$.<br>",n+="$f$ n'est donc pas une fonction affine.<br>";break;case 7:i=`Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${(0,t.xVe)(1,s)}x+${(0,t.xVe)(1,f)} $`,n=`$f(x)=${(0,t.xVe)(1,s)}x+${(0,t.xVe)(1,f)}$<br>`,n+="On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",n+=`Ici, on a : $a=\\dfrac{1}{${s}}$ et $b=\\dfrac{1}{${f}}$<br>`,n+="$f$ est donc bien une fonction affine.<br>";break;case 8:i=`Soit $f$ la fonction définie sur un intervalle $I$ de $\\mathbb R$, par $f(x)=${r}\\times (${(0,t.y$x)(s,o)}) $`,n=`$f(x)=${r}\\times (${(0,t.y$x)(s,o)}) $<br>`,n+="On peut développer l'expression de $f$ et on obtient alors :<br>",n+=`$f(x)=${(0,t.y$x)(s*r,o*r)} $<br>`,n+="On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>",n+=`Ici, on a : $a=${(0,t.tPu)(s*r)}$ et $b=${(0,t.tPu)(o*r)}$<br>`,n+="$f$ est donc bien une fonction affine.<br>"}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(n),u++),c++}(0,t.K1R)(this)}}}}]);
//# sourceMappingURL=5272.6e5709e466dc82191d88.js.map