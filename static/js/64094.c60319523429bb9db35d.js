"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[64094,25523],{25523:(i,t,e)=>{function o(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const o of t)void 0!==o&&(e+=o.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>o})},64094:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>a,default:()=>l});var o=e(25523),s=e(25482),n=e(71250);const a="Droites graduées avec zoom";function l(){o.default.call(this),this.nbCols=1,this.sup=1,this.titre=a,this.nouvelleVersion=function(){this.contenu="";let i="";const t=(0,s.GVn)(5,"QFN");let e,o,a,l,r,u,h,c,p,x,b,m,f,k,C,M,S,d,y,g,$,T;const D=[];for(let P=0;P<8/parseInt(this.sup);P++){if(D.length=0,1===parseInt(this.sup)){e=(0,s.nSR)(5,10)-.2,o=Math.round(e+.2);const i=.1;a=o+9.2,l=(0,s.n0o)(e+.2+(0,s.nSR)(1,5)+(0,s.nSR)(2,8)/10),$="->";const r=(0,n.oqt)({x:0,y:3,Min:e,axePosition:"H",Max:a+.2,thickSec:!0,thickTer:!1,Unite:3,thickOffset:i,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!1,pointListe:[[l,`${t[1]}`],[Math.floor(l),`${t[0]}`],[Math.floor(l+1),`${t[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:$}),u=(0,n.oqt)({x:Math.floor(l)-e+1.5,y:0,Min:Math.floor(l),axePosition:"H",Max:Math.floor(l+1),thickSec:!0,thickTer:!1,Unite:20,thickOffset:i,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!1,pointListe:[[l,`${t[1]}`],[Math.floor(l),`${t[0]}`],[Math.floor(l+1),`${t[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:$});p=(0,n.xmu)(3*(Math.floor(l)-e),3),x=(0,n.xmu)(Math.floor(l)-e+1.5,0),b=(0,n.xmu)(3*(Math.floor(l)+1-e),3),m=(0,n.xmu)(Math.floor(l)-e+21.5,0),S=(0,n.EXn)(p,x),d=(0,n.EXn)(b,m),S.pointilles=!0,d.pointilles=!0,D.push(r,u,S,d),T={xmin:-1.5,xmax:35,ymin:-1,ymax:4.5,pixelsParCm:25,scale:.5}}else{e=(0,s.nSR)(1,15),a=e+1,l=(0,s.n0o)(e+(0,s.nSR)(2,8)/10+(0,s.nSR)(2,8)/100+.001*(0,s.nSR)(2,8)),r=(0,s.YbQ)(l,1),h=(0,s.YbQ)(l,2),u=(0,s.n0o)(r+.1),c=(0,s.n0o)(h+.01),e=Math.floor(r),a=e+1;const i=.001;$="->";const o=(0,n.oqt)({x:0,y:6,Min:e,axePosition:"H",Max:a,thickSec:!0,thickTer:!0,Unite:30,thickDistance:1,thickSecDist:.1,thickTerDist:.01,thickOffset:i,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,pointListe:[[l,`${t[1]}`],[r,`${t[0]}`],[u,`${t[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:3,axeStyle:$}),P=(0,n.oqt)({x:6.5,y:3,Min:r,axePosition:"H",Max:u,thickSec:!0,thickTer:!0,Unite:200,thickSecDist:.01,thickTerDist:.001,thickDistance:.1,thickOffset:i,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,pointListe:[[l,`${t[1]}`],[r,`${t[0]}`],[u,`${t[2]}`],[h,`${t[3]}`],[c,`${t[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:$}),F=(0,n.oqt)({x:6.5,y:0,Min:h,axePosition:"H",Max:c,thickSec:!0,thickTer:!1,Unite:2e3,thickSecDist:.001,thickOffset:i,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,pointListe:[[l,`${t[1]}`],[h,`${t[3]}`],[c,`${t[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:$});p=(0,n.xmu)(30*(r-e),6),x=(0,n.xmu)(6.5,3),b=(0,n.xmu)(30*(u-e),6),m=(0,n.xmu)(26.5,3),S=(0,n.EXn)(p,x),d=(0,n.EXn)(b,m),S.pointilles=!0,d.pointilles=!0,f=(0,n.xmu)(6.5+200*(h-r),3),k=(0,n.xmu)(6.5,0),C=(0,n.xmu)(6.5+200*(c-r),3),M=(0,n.xmu)(26.5,0),y=(0,n.EXn)(f,k),g=(0,n.EXn)(C,M),y.pointilles=!0,g.pointilles=!0,T={xmin:-1.5,xmax:35,ymin:-1.5,ymax:7.5,pixelsParCm:25,scale:.5},D.push(o,P,F,S,d,y,g)}i=(0,n.iR9)(T,D),this.contenu+=i,this.contenu+="<br>"}},this.besoinFormulaireNumerique=["Nombre de zoom",2,"1 : Un seul zoom\n2 : Deux niveaux de zoom"]}}}]);
//# sourceMappingURL=64094.c60319523429bb9db35d.js.map