"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[75817,25523],{75817:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>n,default:()=>u});var o=t(25523),s=t(22380),a=t(25482),l=t(71250);const n="Lire une abscisse décimale grâce à des zooms successifs";function u(){o.default.call(this),this.niveau="sixième",this.sup=3,this.consigne="",s.Do.isHtml?(this.spacing=2,this.spacingCorr=3):(this.spacing=1,this.spacingCorr=1),this.vspace=-1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nouvelleVersion=function(){let i,e,t,o,s,n;this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];let u,r,c="",h="";const p=(0,a.GVn)(5,"QFN");let x=0,b=0,k=0;const f=[];let $,C=0;const m=[];let M,S,y,T,d,D,P,O,H,L,q,E,g,R,F,Q,U;if(1===parseInt(this.sup))"CM"===this.niveau?(M=0,C=0,y=0,r=9,S=9):(M=(0,a.nSR)(5,10)-.2,y=Math.round(M+.2),r=(0,a.n0o)(y+9),C=.1,S=y+9.2),x=(0,a.n0o)(M+.2+(0,a.nSR)(1,5)+(0,a.nSR)(2,8)/10),u=0===M?"|->":"->",i=(0,l.oqt)({x:0,y:3,Min:M,axePosition:"H",Max:S+.2,thickSec:!0,thickTer:!1,Unite:3,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!1,labelListe:[[y,`${(0,a.euh)(y)}`],[r,`${(0,a.euh)(r)}`]],pointListe:[[x,`${p[1]}`],[Math.floor(x),`${p[0]}`],[Math.floor(x+1),`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),e=(0,l.oqt)({x:Math.floor(x)-M+1.5,y:0,Min:Math.floor(x),axePosition:"H",Max:Math.floor(x+1),thickSec:!0,thickTer:!1,Unite:20,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!1,pointListe:[[x,`${p[1]}`],[Math.floor(x),`${p[0]}`],[Math.floor(x+1),`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),s=(0,l.oqt)({x:0,y:3,Min:M,axePosition:"H",Max:S+.2,thickSec:!0,thickTer:!1,Unite:3,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!0,labelListe:[[y,`${(0,a.euh)(y)}`],[r,`${(0,a.euh)(r)}`]],pointListe:[[x,`${p[1]}`],[Math.floor(x),`${p[0]}`],[Math.floor(x+1),`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),n=(0,l.oqt)({x:Math.floor(x)-M+1.5,y:0,Min:Math.floor(x),axePosition:"H",Max:Math.floor(x+1),thickSec:!0,thickTer:!1,Unite:20,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:4,labelsPrincipaux:!1,labelsSecondaires:!0,labelListe:[[Math.floor(x),`${(0,a.euh)(Math.floor(x))}`],[x,`${(0,a.euh)(x)}`],[Math.ceil(x),`${(0,a.euh)(Math.ceil(x))}`]],pointListe:[[x,`${p[1]}`],[Math.floor(x),`${p[0]}`],[Math.floor(x+1),`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),T=(0,l.xmu)(3*(Math.floor(x)-M),3),d=(0,l.xmu)(Math.floor(x)-M+1.5,0),D=(0,l.xmu)(3*(Math.floor(x)+1-M),3),P=(0,l.xmu)(Math.floor(x)-M+21.5,0),O=(0,l.EXn)(T,d),H=(0,l.EXn)(D,P),O.pointilles=!0,H.pointilles=!0,f.push(i,e,O,H),m.push(s,n,O,H),$={xmin:-1.5,xmax:35,ymin:-1,ymax:4.5,pixelsParCm:25,scale:.5},h=`L'abscisse de ${p[1]} est : $${(0,a.euh)(x)}=${(0,a.euh)(Math.floor(x))} + ${(0,a.qaf)((0,a.n0o)(10*(x-Math.floor(x))),10)}=${(0,a.qaf)((0,a.n0o)(10*x),10)}$.<br>`;else if(2===parseInt(this.sup)){"CM"===this.niveau?(M=0,C=0):(M=(0,a.nSR)(1,15)-.02,C=.01),S=M+1.05,x=(0,a.n0o)(M+.02+(0,a.nSR)(2,8)/10+(0,a.nSR)(2,8)/100),b=(0,a.n0o)(Math.floor(10*x)/10),k=(0,a.n0o)(b+.1),u=0===M?"|->":"->",i=(0,l.oqt)({x:0,y:3,Min:M,axePosition:"H",Max:S,thickSec:!0,thickTer:!0,Unite:30,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:8,thickDistance:1,thickSecDist:.1,thickTerDist:.01,labelsPrincipaux:!1,labelListe:[[Math.floor(x),`${Math.floor(x)}`],[Math.ceil(x),`${Math.ceil(x)}`]],pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),e=(0,l.oqt)({x:b-M+6,y:0,Min:b,axePosition:"H",Max:b+.1,thickSec:!0,thickTer:!1,Unite:200,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,thickDistance:.1,thickSecDist:.01,thickTerDist:.001,labelsPrincipaux:!1,pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[b+.1,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),s=(0,l.oqt)({x:0,y:3,Min:M,axePosition:"H",Max:S,thickSec:!0,thickTer:!0,Unite:30,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:8,thickDistance:1,thickSecDist:.1,thickTerDist:.01,labelsSecondaires:!0,labelListe:[[Math.floor(x),`${Math.floor(x)}`],[Math.ceil(x),`${Math.ceil(x)}`]],pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),n=(0,l.oqt)({x:b-M+6,y:0,Min:b,axePosition:"H",Max:b+.1,thickSec:!0,thickTer:!1,Unite:200,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,thickDistance:.1,thickSecDist:.01,thickTerDist:.001,labelsPrincipaux:!1,labelsSecondaires:!0,labelListe:[[b,`${(0,a.euh)(b)}`],[x,`${(0,a.euh)(x)}`],[k,`${(0,a.euh)(k)}`]],pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[b+.1,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),T=(0,l.xmu)(30*(Math.floor(10*x)/10-M),3),d=(0,l.xmu)(b-M+6,0),D=(0,l.xmu)(30*(Math.floor(10*x)/10+.1-M),3),P=(0,l.xmu)(k-M+26,0),O=(0,l.EXn)(T,d),H=(0,l.EXn)(D,P),O.pointilles=!0,H.pointilles=!0,$={xmin:-1.5,xmax:35,ymin:-1.5,ymax:4.5,pixelsParCm:25,scale:.5},f.push(i,e,O,H),m.push(s,n,O,H);const t=Math.floor(x),o=(0,a.n0o)(x-t);h=`L'abscisse de ${p[1]} est : $${(0,a.euh)(x)}=${(0,a.euh)(t)} + ${(0,a.qaf)((0,a.n0o)(100*o),100)}=${(0,a.qaf)((0,a.n0o)(100*x),100)}$.<br>`}else if(3===parseInt(this.sup)){"CM"===this.niveau?(M=0,S=1,C=0,x=(0,a.n0o)(M+(0,a.nSR)(2,8)/10+(0,a.nSR)(2,8)/100+.001*(0,a.nSR)(2,8)),b=(0,a.YbQ)(x,1),L=(0,a.YbQ)(x,2),k=(0,a.n0o)(b+.1),q=(0,a.n0o)(L+.01)):(M=(0,a.nSR)(1,15),S=M+1,x=(0,a.n0o)(M+(0,a.nSR)(2,8)/10+(0,a.nSR)(2,8)/100+.001*(0,a.nSR)(2,8)),b=(0,a.YbQ)(x,1),L=(0,a.YbQ)(x,2),k=(0,a.n0o)(b+.1),q=(0,a.n0o)(L+.01),M=Math.floor(b),S=M+1,C=.001),u=0===M?"|->":"->",i=(0,l.oqt)({x:0,y:6,Min:M,axePosition:"H",Max:S,thickSec:!0,thickTer:!0,Unite:30,thickDistance:1,thickSecDist:.1,thickTerDist:.01,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!0,labelListe:[[M,`${(0,a.euh)(M)}`],[S,`${(0,a.euh)(S)}`]],pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:3,axeStyle:u}),e=(0,l.oqt)({x:6.5,y:3,Min:b,axePosition:"H",Max:k,thickSec:!0,thickTer:!0,Unite:200,thickSecDist:.01,thickTerDist:.001,thickDistance:.1,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`],[L,`${p[3]}`],[q,`${p[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),t=(0,l.oqt)({x:6.5,y:0,Min:L,axePosition:"H",Max:q,thickSec:!0,thickTer:!1,Unite:2e3,thickSecDist:.001,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,pointListe:[[x,`${p[1]}`],[L,`${p[3]}`],[q,`${p[4]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),s=(0,l.oqt)({x:0,y:6,Min:M,axePosition:"H",Max:S,thickSec:!0,thickTer:!0,Unite:30,thickDistance:1,thickSecDist:.1,thickTerDist:.01,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!0,labelsSecondaires:!0,labelListe:[[M,`${(0,a.euh)(M)}`],[S,`${(0,a.euh)(S)}`]],pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:3,axeStyle:u}),n=(0,l.oqt)({x:6.5,y:3,Min:b,axePosition:"H",Max:k,thickSec:!0,thickTer:!0,Unite:200,thickSecDist:.01,thickTerDist:.001,thickDistance:.1,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,labelsSecondaires:!0,pointListe:[[x,`${p[1]}`],[b,`${p[0]}`],[k,`${p[2]}`],[L,`${p[3]}`],[q,`${p[4]}`]],labelListe:[[b,`${(0,a.euh)(b)}`],[k,`${(0,a.euh)(k)}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),o=(0,l.oqt)({x:6.5,y:0,Min:L,axePosition:"H",Max:q,thickSec:!0,thickTer:!1,Unite:2e3,thickSecDist:.001,thickOffset:C,thickCouleur:"black",axeCouleur:"black",axeHauteur:6,labelsPrincipaux:!1,labelsSecondaires:!0,pointListe:[[x,`${p[1]}`],[L,`${p[3]}`],[q,`${p[4]}`]],labelListe:[[L,`${(0,a.euh)(L)}`],[q,`${(0,a.euh)(q)}`]],pointTaille:6,pointOpacite:.8,pointCouleur:"blue",pointStyle:"|",pointEpaisseur:2,axeStyle:u}),T=(0,l.xmu)(30*(b-M),6),d=(0,l.xmu)(6.5,3),D=(0,l.xmu)(30*(k-M),6),P=(0,l.xmu)(26.5,3),O=(0,l.EXn)(T,d),H=(0,l.EXn)(D,P),O.pointilles=!0,H.pointilles=!0,E=(0,l.xmu)(6.5+200*(L-b),3),g=(0,l.xmu)(6.5,0),R=(0,l.xmu)(6.5+200*(q-b),3),F=(0,l.xmu)(26.5,0),Q=(0,l.EXn)(E,g),U=(0,l.EXn)(R,F),Q.pointilles=!0,U.pointilles=!0,$={xmin:-1.5,xmax:35,ymin:-1.5,ymax:7.5,pixelsParCm:25,scale:.5},f.push(i,e,t,O,H,Q,U),m.push(s,n,o,O,H,Q,U);const r=Math.floor(x),c=(0,a.n0o)(x-r);h=`L'abscisse de ${p[1]} est : $${(0,a.euh)(x)}=${(0,a.euh)(r)} + ${(0,a.qaf)((0,a.n0o)(1e3*c),1e3)}=${(0,a.qaf)((0,a.n0o)(1e3*x),1e3)}$.<br>`}c=`Donner l'abscisse de ${p[1]} sous trois formes : en écriture décimale, comme somme d’un nombre entier et d’une fraction décimale et avec une fraction décimale.<br>`,c+=(0,l.iR9)($,f),h+=(0,l.iR9)($,m),this.listeQuestions.push(c),this.listeCorrections.push(h),(0,a.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Au dixième\n2 : Au centième\n3 : Au millième"]}},25523:(i,e,t)=>{function o(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const o of e)void 0!==o&&(t+=o.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>o})}}]);
//# sourceMappingURL=75817.5ece8b7a99ab794f45d0.js.map