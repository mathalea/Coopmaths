(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[38125,71129],{71129:(i,e,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(e),t.d(e,{default:()=>s})},38125:(i,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>a,default:()=>u});var s=t(71129),o=t(62259),n=t(63861),l=t(55802);const a="Placer un nombre décimal avec des zooms successifs";function u(){s.default.call(this),this.nbCols=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.sup=1,this.sup2=2.573,this.sup3=!1,this.titre=a,this.nouvelleVersion=function(){this.contenu="";let i,e,t,s,a,u="",r=[],h=0,c=0,b=0,p=[],m=0;r=(0,n.GVn)(5,"QFN"),p.length=0,h=parseFloat(this.sup2),h=(0,n.vbX)(h,4),c=(0,n.YbQ)(h,1);let x=(0,n.YbQ)(h,2);b=(0,n.n0o)(c+.1);let C=(0,n.n0o)(x+.01),k=Math.floor(c),f=k+1;m=1e-4,s="->",i=(0,l.oqt)({x:0,y:6,Min:k,axePosition:"H",Max:f,thickSec:!0,thickTer:!0,Unite:30,thickDistance:1,thickSecDist:.1,thickTerDist:.01,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[h,`${r[1]}`],[c,`${r[0]}`],[b,`${r[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:3,axeStyle:s}),e=(0,l.oqt)({x:6.5,y:3,Min:c,axePosition:"H",Max:b,thickSec:!0,thickTer:!0,Unite:200,thickSecDist:.01,thickTerDist:.001,thickDistance:.1,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[h,`${r[1]}`],[c,`${r[0]}`],[b,`${r[2]}`],[x,`${r[3]}`],[C,`${r[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:s}),t=(0,l.oqt)({x:6.5,y:0,Min:x,axePosition:"H",Max:C,thickSec:!0,thickTer:!0,Unite:2e3,thickSecDist:.001,thickTerDist:1e-4,thickOffset:m,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:this.sup3,pointListe:[[h,`${r[1]}`],[x,`${r[3]}`],[C,`${r[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:s});let d=(0,l.xmu)(30*(c-k),6),D=(0,l.xmu)(6.5,3),F=(0,l.xmu)(30*(b-k),6),M=(0,l.xmu)(26.5,3),S=(0,l.EXn)(d,D),T=(0,l.EXn)(F,M);S.pointilles=!0,T.pointilles=!0;let g=(0,l.xmu)(6.5+200*(x-c),3),y=(0,l.xmu)(6.5,0),$=(0,l.xmu)(6.5+200*(C-c),3),q=(0,l.xmu)(26.5,0),Q=(0,l.EXn)(g,y),P=(0,l.EXn)($,q);Q.pointilles=!0,P.pointilles=!0,a={xmin:-1.5,xmax:35,ymin:-1.5,ymax:7.5,pixelsParCm:25,scale:.5},3==this.sup?p.push(i,e,t,S,T,Q,P):2==this.sup?p.push(i,e,S,T):p.push(i),u=(0,l.iR9)(a,p),this.contenu+=u,o.Do.isHtml?this.contenu+="<br>":this.contenu+="\\\\"},this.besoinFormulaireNumerique=["Nombre de zoom",3,"1 : sans zoom\n2 : zoom des centièmes\n3 : zoom des millièmes"],this.besoinFormulaire2Numerique=["Saisir le nombre décimal "],this.besoinFormulaire3CaseACocher=["Afficher les abscisses"]}}}]);
//# sourceMappingURL=38125.7fdba2ea3829f4941ae5.js.map