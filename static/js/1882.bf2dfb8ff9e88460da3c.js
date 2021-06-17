(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1882,5381,6658,7567],{99804:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>h,default:()=>a});var s=e(67567),n=e(24477),o=e(17199),r=e(7616);const h="Construire l’image d’un point par une homothetie avec cible auto-corrective";function a(){s.default.call(this),this.titre=h,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=3,this.typeExercice="IEP",this.nouvelleVersion=function(i){let t,e,s,h;const a=new r.Z,l=(0,n.nSR)(-4,4,[0,-2,2])/2;this.listeQuestions=[],this.listeCorrections=[];let c=[0,0],u="";const m=parseInt(this.sup),p=(0,o.xmu)(0,0,"O"),b=(0,n.GVn)(m,"QO",!0);this.consigne=`Construire l'image des points $${b[0]}$`;for(let i=1;i<m-1;i++)this.consigne+=`, $${b[i]}$`;this.consigne+=` et $${b[m-1]}$ par l'homothétie de centre $O$`,this.consigne+=` et de rapport $${(0,n.euh)(l)}$.`;const x=[],d=[],C=[],f=[],g=[],$=[];let y,M,R,D;[y,M,R,D]=[0,0,0,0];for(let i=0;i<m;i++)for(C.push((0,o.xmu)((0,n.n0o)((0,n.nSR)(-60,60,0)/10),(0,n.n0o)((0,n.nSR)(-60,60,0)/10),b[i]+"'")),t=!0;(0,o.InT)(C[i],p)<3||t;)if(t=!0,(0,o.InT)(C[i],p)<3)C[i].x=(0,n.n0o)((0,n.nSR)(-60,60,0)/10),C[i].y=(0,n.n0o)((0,n.nSR)(-60,60,0)/10);else{e=!0;for(let t=0;t<i;t++)(0,o.InT)(C[i],C[t])<4.5&&(e=!1);0==e?(C[i].x=(0,n.n0o)((0,n.nSR)(-60,60,0)/10),C[i].y=(0,n.n0o)((0,n.nSR)(-60,60,0)/10)):t=!1}f.push((0,o.L6P)(p),(0,o.BD1)(p)),g.push((0,o.L6P)(p),(0,o.BD1)(p));for(let i=0;i<m;i++)$.push((4,(0,n.Gag)((0,n.nSR)(1,4))+Number((0,n.nSR)(1,4)).toString())),c=(0,o.Ihq)(C[i].x,C[i].y,4,.6,$[i]),s=(0,o.cqN)({x:c[0],y:c[1],rang:4,num:i+1,taille:.6}),s.taille=.6,s.color="orange",s.opacite=.7,x.push(s);for(let i=0;i<m;i++)d.push((0,o.xcw)(C[i],p,1/l,b[i])),f.push((0,o.L6P)(d[i]),(0,o.BD1)(d[i]),x[i]),g.push((0,o.L6P)(d[i],C[i]),(0,o.BD1)(d[i],C[i]),x[i]),h=l<0?(0,o.EXn)(d[i],C[i]):l<1?(0,o.EXn)(p,d[i]):(0,o.EXn)(p,C[i]),h.color=(0,n.LWD)(i),g.push(h),u+=`$${b[i]}'$, l'image du point $${b[i]}$ est dans la case ${$[i]} de la grille ${i+1}.<br>`;for(let i=0;i<m;i++)y=Math.min(y,C[i].x-3,d[i].x-3),M=Math.min(M,C[i].y-3,d[i].y-3),R=Math.max(R,C[i].x+3,d[i].x+3),D=Math.max(D,C[i].y+3,d[i].y+3);a.xMin=y,a.xMax=R,a.yMin=M,a.yMax=D,a.recadre(y,D),a.pointCreer(p);for(let i=0;i<m;i++)a.pointCreer(d[i]),a.homothetiePoint(d[i],p,l,"",{positionTexte:{x:2,y:-1}});this.listeQuestions.push((0,o.iR9)({xmin:y,ymin:M,xmax:R,ymax:D,pixelsParCm:20,scale:.5},f)),this.listeCorrections.push(u+(0,o.iR9)({xmin:y,ymin:M,xmax:R,ymax:D,pixelsParCm:20,scale:.5},g)+a.html(i)),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Nombre de points (1 à 5)",5,"1\n2\n3\n4\n5"]}},67567:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})}}]);