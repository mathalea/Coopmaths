(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5020,2006],{75020:(e,i,s)=>{"use strict";s.r(i),s.d(i,{titre:()=>r,default:()=>o});var t=s(2006),n=(s(89846),s(91030)),a=s(34802);const r="Lire un diagramme en barre";function o(){t.default.call(this),this.titre=r,this.consigne="Répondre aux questions à l'aide du graphique.",this.nbQuestions=3,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=["girafes","zèbres","gnous","buffles","gazelles","crocodiles","rhinocéros","léopards","guépards","hyènes","lycaons","servals","phacochères"],i=4;switch(parseInt(this.sup)){case 1:i=4;break;case 2:i=5;break;case 3:i=6;break;default:i=4}let s,t,r,o,l,u=[],h=[],c=[10,20,30,40,50,60,70,80,90,100],b=0;switch(parseInt(this.sup2)){case 1:for(let e=0;e<i;e++)b=(0,n.nSR)(2,100,c),h.push(b),c=c.concat([b-1,b,b+1]);break;case 2:for(let e=0;e<i;e++)b=(0,n.nSR)(2,100,c),h.push(10*b),c=c.concat([b-1,b,b+1])}for(let a=0;a<i;a++)s=(0,n.q$q)(e,u),u.push(s);let d=Math.min(...h),m=Math.max(...h);t="Dans le parc naturel de "+(0,n.q$q)(["Dramve","Fatenmin","Batderfa","Vihi","Genser","Barbetdou","Dramrendu","Secai","Cipeudram","Cigel","Lisino","Fohenlan","Farnfoss","Kinecardine","Zeffari","Barmwich","Swadlincote","Swordbreak","Loshull","Ruyron","Fluasall","Blueross","Vlane"])+", il y a beaucoup d’animaux. Voici un diagramme en bâtons qui donne le nombre d’individus pour chaque espèce.<br>",t+=(0,n.bk1)(0)+" Quels sont les animaux les plus nombreux ?<br>",t+=(0,n.bk1)(1)+" Quels sont les animaux les moins nombreux ?<br>";let p=(0,n.nSR)(0,i-1);switch(parseInt(this.sup2)){case 1:t+=(0,n.bk1)(2)+" Donner un encadrement à la dizaine du nombre de "+u[p]+" ?<br>";break;case 2:t+=(0,n.bk1)(2)+" Donner un encadrement à la centaine du nombre de "+u[p]+" ?<br>"}t+="<br>";let f=1;switch(parseInt(this.sup2)){case 1:f=1;break;case 2:f=10}let x=(0,a.sYn)({grilleX:!1,grilleY:"pointilles",xThickListe:[],xLabelListe:[],yUnite:.1/f,yThickDistance:10*f,yMax:110*f,xMin:0,xMax:10,yMin:0,axeXStyle:"",yLegende:"Nombre d'individus"}),C=[];for(let k=0;k<i;k++)C.push((0,a.rdJ)((x.xMax-x.xMin)/(i+1)*(k+1),h[k],(0,n.MKP)(u[k]),{unite:.1/f}));t+=(0,a.iR9)({xmin:-5,xmax:11,ymin:-4,ymax:11,pixelsParCm:30,scale:.5},x,C),r=(0,n.bk1)(0)+" Les animaux les plus nombreux sont les "+u[h.indexOf(m)]+".<br>",r+=(0,n.bk1)(1)+" Les animaux les moins nombreux sont les "+u[h.indexOf(d)]+".<br>";let g=h[u.indexOf(u[p])];o=10*f*Math.floor(g/(10*f)),l=o+10*f,r+=(0,n.bk1)(2)+" Il y a entre "+o+" et "+l+" "+u[p]+".<br>",this.listeQuestions.push(t),this.listeCorrections.push(r),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Nombre d'espèces différentes",3," choix 1 : 4 espèces\n choix 2 : 5 espèces\n choix 3 : 6 espèces"],this.besoinFormulaire2Numerique=["Valeurs numériques",2," choix 1 : entre 1 et 100\n choix 2 : entre 100 et 1 000"]}},2006:(e,i,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=5020.9b7df38b4e9f22f63393.js.map