(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2736,6969],{42736:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>a,default:()=>r});var t=e(66969),n=e(55339),o=e(44393);const a="Construire l’image d’un point par une rotation avec cible auto-corrective";function r(){t.default.call(this),this.titre=a,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=3,this.nouvelleVersion=function(){let i,s,e,t=10*(0,n.nSR)(-8,8,0);this.listeQuestions=[],this.listeCorrections=[];let a=[0,0],r="",l=parseInt(this.sup),h=(0,o.xmu)(0,0,"O"),u=(0,n.GVn)(l,"QO",!0);this.consigne=`Construire l'image des points $${u[0]}$`;for(let n=1;n<l-1;n++)this.consigne+=`, $${u[n]}$`;this.consigne+=` et $${u[l-1]}$ par la rotation de centre $O$`,this.consigne+=` et d'angle $${Math.abs(t)}\\degree$`,this.consigne+=t<0?" dans le sens des aiguilles d'une montre.":" dans le sens contraire des aiguilles d'une montre.";let c,m,p,b,d=[],g=[],f=[],x=[],C=[],$=[];[c,m,p,b]=[0,0,0,0];for(let D=0;D<l;D++)for(f.push((0,o.xmu)((0,n.n0o)((0,n.nSR)(-80,80,0)/10),(0,n.n0o)((0,n.nSR)(-80,80,0)/10),u[D]+"'")),i=!0;(0,o.InT)(f[D],h)<3||i;)if(i=!0,(0,o.InT)(f[D],h)<3)f[D].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),f[D].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10);else{s=!0;for(let i=0;i<D;i++)(0,o.InT)(f[D],f[i])<4.5&&(s=!1);0==s?(f[D].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),f[D].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10)):i=!1}x.push((0,o.L6P)(h),(0,o.BD1)(h)),C.push((0,o.L6P)(h),(0,o.BD1)(h));for(let D=0;D<l;D++)$.push((y=4,(0,n.Gag)((0,n.nSR)(1,y))+Number((0,n.nSR)(1,y)).toString())),a=(0,o.Ihq)(f[D].x,f[D].y,4,.6,$[D]),e=(0,o.cqN)({x:a[0],y:a[1],rang:4,num:D+1,taille:.6}),e.taille=.6,e.color="orange",e.opacite=.7,d.push(e);var y;for(let D=0;D<l;D++)g.push((0,o.Wnp)(f[D],h,-t,u[D])),x.push((0,o.L6P)(g[D]),(0,o.BD1)(g[D]),d[D]),C.push((0,o.L6P)(g[D],f[D]),(0,o.BD1)(g[D],f[D]),d[D]),C.push((0,o.vZI)(g[D],f[D],t,!0,(0,n.LWD)(D),"gray",.2)),r+=`$${u[D]}'$, l'image du point $${u[D]}$ est dans la case ${$[D]} de la grille ${D+1}.<br>`;for(let n=0;n<l;n++)c=Math.min(c,f[n].x-3,g[n].x-3),m=Math.min(m,f[n].y-3,g[n].y-3),p=Math.max(p,f[n].x+3,g[n].x+3),b=Math.max(b,f[n].y+3,g[n].y+3);this.listeQuestions.push((0,o.iR9)({xmin:c,ymin:m,xmax:p,ymax:b,pixelsParCm:20,scale:1},x)),this.listeCorrections.push(r+(0,o.iR9)({xmin:c,ymin:m,xmax:p,ymax:b,pixelsParCm:20,scale:.7},C)),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Nombre de points (1 à 5)",5,"1\n2\n3\n4\n5"]}},66969:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(s),e.d(s,{default:()=>t})}}]);
//# sourceMappingURL=2736.8c5007ce1eb1da001cf4.js.map