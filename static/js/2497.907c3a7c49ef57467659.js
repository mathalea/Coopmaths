(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2497,975,9678,6969],{37576:(i,t,e)=>{"use strict";e.r(t),e.d(t,{titre:()=>h,default:()=>a});var s=e(66969),n=e(55339),o=e(44393),r=e(859);const h="Construire l’image d’un point par une homothetie avec cible auto-corrective";function a(){s.default.call(this),this.titre=h,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=3,this.typeExercice="IEP",this.nouvelleVersion=function(i){let t,e,s,h;const a=new r.Z,l=(0,n.nSR)(-4,4,[0,-2,2])/2;this.listeQuestions=[],this.listeCorrections=[];let u=[0,0],c="";const m=parseInt(this.sup),p=(0,o.xmu)(0,0,"O"),b=(0,n.GVn)(m,"QO",!0);this.consigne=`Construire l'image des points $${b[0]}$`;for(let n=1;n<m-1;n++)this.consigne+=`, $${b[n]}$`;this.consigne+=` et $${b[m-1]}$ par l'homothétie de centre $O$`,this.consigne+=` et de rapport $${(0,n.euh)(l)}$.`;const x=[],d=[],C=[],f=[],g=[],$=[];let y,M,D,R;[y,M,D,R]=[0,0,0,0];for(let r=0;r<m;r++)for(C.push((0,o.xmu)((0,n.n0o)((0,n.nSR)(-60,60,0)/10),(0,n.n0o)((0,n.nSR)(-60,60,0)/10),b[r]+"'")),t=!0;(0,o.InT)(C[r],p)<3||t;)if(t=!0,(0,o.InT)(C[r],p)<3)C[r].x=(0,n.n0o)((0,n.nSR)(-60,60,0)/10),C[r].y=(0,n.n0o)((0,n.nSR)(-60,60,0)/10);else{e=!0;for(let i=0;i<r;i++)(0,o.InT)(C[r],C[i])<4.5&&(e=!1);0==e?(C[r].x=(0,n.n0o)((0,n.nSR)(-60,60,0)/10),C[r].y=(0,n.n0o)((0,n.nSR)(-60,60,0)/10)):t=!1}f.push((0,o.L6P)(p),(0,o.BD1)(p)),g.push((0,o.L6P)(p),(0,o.BD1)(p));for(let r=0;r<m;r++)$.push((S=4,(0,n.Gag)((0,n.nSR)(1,S))+Number((0,n.nSR)(1,S)).toString())),u=(0,o.Ihq)(C[r].x,C[r].y,4,.6,$[r]),s=(0,o.cqN)({x:u[0],y:u[1],rang:4,num:r+1,taille:.6}),s.taille=.6,s.color="orange",s.opacite=.7,x.push(s);var S;for(let r=0;r<m;r++)d.push((0,o.xcw)(C[r],p,1/l,b[r])),f.push((0,o.L6P)(d[r]),(0,o.BD1)(d[r]),x[r]),g.push((0,o.L6P)(d[r],C[r]),(0,o.BD1)(d[r],C[r]),x[r]),h=l<0?(0,o.EXn)(d[r],C[r]):l<1?(0,o.EXn)(p,d[r]):(0,o.EXn)(p,C[r]),h.color=(0,n.LWD)(r),g.push(h),c+=`$${b[r]}'$, l'image du point $${b[r]}$ est dans la case ${$[r]} de la grille ${r+1}.<br>`;for(let n=0;n<m;n++)y=Math.min(y,C[n].x-3,d[n].x-3),M=Math.min(M,C[n].y-3,d[n].y-3),D=Math.max(D,C[n].x+3,d[n].x+3),R=Math.max(R,C[n].y+3,d[n].y+3);a.xMin=y,a.xMax=D,a.yMin=M,a.yMax=R,a.recadre(y,R),a.pointCreer(p);for(let n=0;n<m;n++)a.pointCreer(d[n]),a.homothetiePoint(d[n],p,l,"",{positionTexte:{x:2,y:-1}});this.listeQuestions.push((0,o.iR9)({xmin:y,ymin:M,xmax:D,ymax:R,pixelsParCm:20,scale:.5},f)),this.listeCorrections.push(c+(0,o.iR9)({xmin:y,ymin:M,xmax:D,ymax:R,pixelsParCm:20,scale:.5},g)+a.html(i)),(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Nombre de points (1 à 5)",5,"1\n2\n3\n4\n5"]}},66969:(i,t,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}e.r(t),e.d(t,{default:()=>s})}}]);
//# sourceMappingURL=2497.907c3a7c49ef57467659.js.map