(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2805,2006],{2006:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})},52805:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>a,default:()=>u});var s=e(2006),o=e(89846),n=e(91030),l=e(34802);const a="Placer un nombre décimal avec des zooms successifs";function u(){s.default.call(this),this.nbCols=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.sup=1,this.sup2=2.573,this.sup3=!1,this.titre=a,this.nouvelleVersion=function(){this.contenu="";let i,t,e,s,a,u="",h=[],c=0,r=0,p=0,b=[],m=0;h=(0,n.GVn)(5,"QFN"),b.length=0,c=parseFloat(this.sup2),c=(0,n.vbX)(c,4),r=(0,n.YbQ)(c,1);let x=(0,n.YbQ)(c,2);p=(0,n.n0o)(r+.1);let k=(0,n.n0o)(x+.01),C=Math.floor(r),f=C+1;m=1e-4,s="->",i=(0,l.oqt)({x:0,y:6,Min:C,axePosition:"H",Max:f,thickSec:!0,thickTer:!0,Unite:30,thickDistance:1,thickSecDist:.1,thickTerDist:.01,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[c,`${h[1]}`],[r,`${h[0]}`],[p,`${h[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:3,axeStyle:s}),t=(0,l.oqt)({x:6.5,y:3,Min:r,axePosition:"H",Max:p,thickSec:!0,thickTer:!0,Unite:200,thickSecDist:.01,thickTerDist:.001,thickDistance:.1,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[c,`${h[1]}`],[r,`${h[0]}`],[p,`${h[2]}`],[x,`${h[3]}`],[k,`${h[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:s}),e=(0,l.oqt)({x:6.5,y:0,Min:x,axePosition:"H",Max:k,thickSec:!0,thickTer:!0,Unite:2e3,thickSecDist:.001,thickTerDist:1e-4,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[c,`${h[1]}`],[x,`${h[3]}`],[k,`${h[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:s});let d=(0,l.xmu)(30*(r-C),6),D=(0,l.xmu)(6.5,3),M=(0,l.xmu)(30*(p-C),6),S=(0,l.xmu)(26.5,3),g=(0,l.EXn)(d,D),y=(0,l.EXn)(M,S);g.pointilles=!0,y.pointilles=!0;let $=(0,l.xmu)(6.5+200*(x-r),3),Q=(0,l.xmu)(6.5,0),T=(0,l.xmu)(6.5+200*(k-r),3),P=(0,l.xmu)(26.5,0),q=(0,l.EXn)($,Q),E=(0,l.EXn)(T,P);q.pointilles=!0,E.pointilles=!0,a={xmin:-1.5,xmax:35,ymin:-1.5,ymax:7.5,pixelsParCm:25,scale:.5},3==this.sup?b.push(i,t,e,g,y,q,E):2==this.sup?b.push(i,t,g,y):b.push(i),u=(0,l.iR9)(a,b),this.contenu+=u,o.Do.isHtml?this.contenu+="<br>":this.contenu+="\\\\"},this.besoinFormulaireNumerique=["Nombre de zoom",3,"1 : sans zoom\n2 : zoom des centièmes\n3 : zoom des millièmes"],this.besoinFormulaire2Numerique=["Saisir le nombre décimal "],this.besoinFormulaire3CaseACocher=["Afficher les abscisses"]}}}]);
//# sourceMappingURL=2805.9e4f8502a5469ecca47b.js.map