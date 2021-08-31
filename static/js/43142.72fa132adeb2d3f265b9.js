"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[43142,17007],{43142:(t,o,e)=>{e.r(o),e.d(o,{titre:()=>r,default:()=>s});var i=e(17007),$=e(30169);const r="Factoriser avec les identités remarquables (niveau II)";function s(){i.default.call(this),this.titre=r,this.consigne="Factoriser les expressions suivantes.",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=3,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let t=[];1===this.sup&&(t=[1]),2===this.sup&&(t=[2]),3===this.sup&&(t=[3]),4===this.sup&&(t=[1,2,3]);const o=(0,$.SRM)(t,this.nbQuestions);for(let e,i,r,s,l,n,u,a,c=0,b=0;c<this.nbQuestions&&b<50;){switch(a=o[c],u=(0,$.q$q)([-1,1]),r=(0,$.nSR)(2,9),r*=u,s=(0,$.nSR)(1,9),u=(0,$.q$q)([-1,1]),s*=u,l=(0,$.nSR)(1,9),n=(0,$.nSR)(1,9),u=(0,$.q$q)([-1,1]),n*=u,r===l&&s===n&&(r+=1,s-=2),a){case 1:e=`$(${r}x${(0,$.tPu)(s)})^2-${l*l}$`,i=`$(${r}x${(0,$.tPu)(s)})^2-${l*l}=(${r}x${(0,$.tPu)(s)})^2-${l}^2$<br>\n                    On reconnaît l'identité remarquable $a^2-b^2=(\\color{red}a\\color{black}-\\color{blue}b)(\\color{red}a\\color{black}+\\color{blue}b)$, avec $a=\\color{red}${r}x${(0,$.tPu)(s)}$ et $b=\\color{blue}${l}$<br>\n                    $(${r}x${(0,$.tPu)(s)})^2-${l*l}=\\left(\\color{red} (${r}x${(0,$.tPu)(s)})\\color{black}-\\color{blue} ${l}\\right) \\left(\\color{red}(${r}x${(0,$.tPu)(s)})\\color{black}+\\color{blue}${l}\\right)$<br>\n                    d'où, après réduction : $(${r}x${(0,$.tPu)(s)})^2-${l*l}=(${(0,$.y$x)(r,s-l)}) (${(0,$.y$x)(r,s+l)})$`;break;case 2:e=`$${l*l}-(${r}x${(0,$.tPu)(s)})^2$`,i=`$${l*l}-(${r}x${(0,$.tPu)(s)})^2=${l}^2-(${r}x${(0,$.tPu)(s)})^2$<br>\n                    On reconnaît l'identité remarquable $a^2-b^2=(\\color{red}a\\color{black}-\\color{blue}b)(\\color{red}a\\color{black}+\\color{blue}b)$, avec $a=\\color{blue}${l}$ et $b=\\color{red}${r}x${(0,$.tPu)(s)}$. <br>\n                    $${l*l}-(${r}x${(0,$.tPu)(s)})^2=\\left(\\color{blue}${l}\\color{black}-(\\color{red}${r}x${(0,$.tPu)(s)}\\color{black})\\right) \\left(\\color{blue}${l}\\color{black}+(\\color{red}${r}x${(0,$.tPu)(s)}\\color{black})\\right)$<br>\n                    $\\phantom{${l*l}-(${r}x${(0,$.tPu)(s)})^2}=(${l}${(0,$.tPu)(-r)}x${(0,$.tPu)(-s)}) (${l}${(0,$.tPu)(r)}x${(0,$.tPu)(s)})$<br>\n                    d'où, après réduction : $${l*l}-(${r}x${(0,$.tPu)(s)})^2=(${(0,$.y$x)(-r,l-s)}) (${(0,$.y$x)(r,s+l)})$`;break;case 3:e=`$(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2$`,i=`On reconnaît l'identité remarquable $a^2-b^2$ :<br>\n                    $(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2=a^2-b^2$<br> \n                    avec $a=\\color{red}${r}x${(0,$.tPu)(s)}$ et $b=\\color{blue}${l}x${(0,$.tPu)(n)}$ . <br>\n                    On applique $a^2-b^2=(\\color{red}a\\color{black}-\\color{blue}b\\color{black})(\\color{red}a\\color{black}+\\color{blue}b\\color{black})$, <br>\n                    $(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2=\n                    (\\color{red}${r}x${(0,$.tPu)(s)}\\color{black})-\n                    (\\color{blue}${l}x${(0,$.tPu)(n)}\\color{black})\n                    (\\color{red}${r}x${(0,$.tPu)(s)}\\color{black})+\n                    (\\color{blue}${l}x${(0,$.tPu)(n)}\\color{black})$<br>\n                    $\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                    (${r}x${(0,$.tPu)(s)}${(0,$.tPu)(-l)}x${(0,$.tPu)(-n)})\n                    (${r}x${(0,$.tPu)(s)}${(0,$.tPu)(l)}x${(0,$.tPu)(n)})$<br>`,r!==l&&s!==n&&r!==-l&&s!==-n?i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                        (${(0,$.y$x)(r-l,s-n)})(${(0,$.y$x)(r+l,s+n)})$  `:(r!==l&&r!==-l&&s===n&&r!==l+1&&(i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                                ${r-l}x(${(0,$.y$x)(r+l,s+n)})$    `),r!==l&&r!==-l&&s===n&&r===l+1&&(i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                                x(${(0,$.y$x)(r+l,s+n)})$    `),r!==l&&r!==-l&&s===-n&&(i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                                    ${r+l}x(${(0,$.y$x)(r-l,s-n)})$  `),r===l&&s!==n&&s!==-n&&(i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                                    ${s-n}(${(0,$.y$x)(r+l,s+n)})$  `),r===-l&&s!==n&&s!==-n&&(i+=`$\\phantom{(${r}x${(0,$.tPu)(s)})^2-(${l}x${(0,$.tPu)(n)})^2}=\n                                    ${s+n}(${(0,$.y$x)(r-l,s-n)})$  `))}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(i),c++),b++}(0,$.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 :forme (ax+b)²-c²\n 2 : forme c²-(ax+b)²\n 3 : (ax+b)²-(cx+d)²\n 4 : Mélange des cas précédents"]}},17007:(t,o,e)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...o){0===t&&(this.listeArguments=[]);let e="";for(const i of o)void 0!==i&&(e+=i.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(o),e.d(o,{default:()=>i})}}]);
//# sourceMappingURL=43142.72fa132adeb2d3f265b9.js.map