(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3945,5154,5216],{23945:(s,i,$)=>{"use strict";$.r(i),$.d(i,{titre:()=>e,default:()=>n});var t=$(25154);const e="Résoudre une équation produit nul (niveau 2)";function n(){t.default.call(this),this.titre=e,this.sup=2}},25154:(s,i,$)=>{"use strict";$.r(i),$.d(i,{titre:()=>o,default:()=>u});var t=$(75216),e=$(89459),n=$(55339);const o="Résoudre une équation produit nul";function u(){t.default.call(this),this.titre=o,this.consigne="Résoudre les équations suivantes",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.sup=1,e.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1.5,this.spacing=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let s=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]],i=[];switch(parseInt(this.sup)){case 1:i=(0,n.SRM)([1,2],this.nbQuestions);break;case 2:i=(0,n.SRM)([3,4],this.nbQuestions);break;case 3:i=(0,n.SRM)([5,6],this.nbQuestions);break;case 4:i=(0,n.SRM)([1,2,3,4,5,6],this.nbQuestions)}for(let $,t,e,o,u,r,a,l,h,c,x,b,d=0,f=0;d<this.nbQuestions&&f<50;){switch(u=(0,n.q$q)(s),a=u[0],h=u[1],r=(0,n.q$q)(s),l=r[0],c=r[1],i[d]){case 1:t=(0,n.nSR)(1,20),o=(0,n.nSR)(1,20,[t]),x=`$(x+${t})(x+${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(x+${t})(x+${o})=0$`,b+=`<br> Soit $x+${t}=0$ ou $x+${o}=0$`,b+=`<br> Donc $x=${0-t}$ ou $x=${0-o}$`;break;case 2:t=(0,n.nSR)(1,20),o=(0,n.nSR)(1,20,[t]),x=`$(x-${t})(x+${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(x-${t})(x+${o})=0$`,b+=`<br> Soit $x-${t}=0$ ou  $x+${o}=0$`,b+=`<br> Donc $x=${t}$ ou $x=${0-o}$`;break;case 3:$=(0,n.nSR)(2,6),t=Math.round((0,n.nSR)(1,5)*$),e=(0,n.nSR)(2,6,[$]),o=Math.round((0,n.nSR)(1,5)*e),x=`$(${$}x+${t})(${e}x+${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(${$}x+${t})(${e}x+${o})=0$`,b+=`<br> Soit $${$}x+${t}=0$ ou $${e}x+${o}=0$`,b+=`<br> Donc $${$}x=${0-t}$ ou $${e}x=${0-o}$`,b+=`<br> Donc $x=-${(0,n.qaf)(t,$)}$ ou $x=-${(0,n.qaf)(o,e)}$`,b+=`<br> Donc $x=${0-t/$}$ ou $x=${0-o/e}$`;break;case 4:$=(0,n.nSR)(2,6),t=Math.round((0,n.nSR)(1,5)*$),e=(0,n.nSR)(2,6,[$]),o=Math.round((0,n.nSR)(1,5)*e),x=`$(${$}x+${t})(${e}x-${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(${$}x+${t})(${e}x-${o})=0$`,b+=`<br> Soit $${$}x+${t}=0$ ou $${e}x-${o}=0$`,b+=`<br> Donc $${$}x=${0-t}$ ou $${e}x=${o}$`,b+=`<br> Donc $x=-${(0,n.qaf)(t,$)}$ ou $x=${(0,n.qaf)(o,e)}$`,b+=`<br> Donc $x=${0-t/$}$ ou $x=${o/e}$`;break;case 5:$=(0,n.nSR)(2,9),t=(0,n.nSR)(1,20,[$]),e=(0,n.nSR)(2,9,[$]),o=(0,n.nSR)(1,20,[t,e]),x=`$(${$}x+${t})(${e}x+${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(${$}x+${t})(${e}x+${o})=0$`,b+=`<br> Soit $${$}x+${t}=0$ ou $${e}x+${o}=0$`,b+=`<br> Donc $${$}x=${0-t}$ ou $${e}x=${0-o}$`,b+=`<br> Donc $x=-${(0,n.qaf)(t,$)}$`,(0,n.qaf)(t,$)!=(0,n.xau)(t,$)&&(b+=`$=-${(0,n.xau)(t,$)}$`),b+=` ou $x=-${(0,n.qaf)(o,e)}$`,(0,n.qaf)(o,e)!=(0,n.xau)(o,e)&&(b+=`$=-${(0,n.xau)(o,e)}$`);break;case 6:$=(0,n.nSR)(2,9),t=(0,n.nSR)(1,20,[$]),e=(0,n.nSR)(2,9,[$]),o=(0,n.nSR)(1,20,[t,e]),x=`$(${$}x+${t})(${e}x-${o})=0$`,b="Un produit est nul si l'un au moins de ses facteurs est nul.",b+=`<br>$(${$}x+${t})(${e}x-${o})=0$`,b+=`<br> Soit $${$}x+${t}=0$ ou $${e}x-${o}=0$`,b+=`<br> Donc $${$}x=${0-t}$ ou $${e}x=${o}$`,b+=`<br> Donc $x=-${(0,n.qaf)(t,$)}$`,(0,n.qaf)(t,$)!=(0,n.xau)(t,$)&&(b+=`$=-${(0,n.xau)(t,$)}$`),b+=` ou $x=${(0,n.qaf)(o,e)}$`,(0,n.qaf)(o,e)!=(0,n.xau)(o,e)&&(b+=`$=${(0,n.xau)(o,e)}$`)}-1===this.listeQuestions.indexOf(x)&&(this.listeQuestions.push(x),this.listeCorrections.push(b),d++),f++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Coefficient de x = 1\n 2 : Coefficient de x>1 et solutions entières\n 3 : Solutions rationnelles\n 4 : Mélange des 3 autres niveaux"]}},75216:(s,i,$)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(s){},this.listePackages=[]}$.r(i),$.d(i,{default:()=>t})}}]);
//# sourceMappingURL=3945.10b84ca9e7ed710cd4b0.js.map