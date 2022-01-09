"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[41059,90321,62566,78938,25523],{65602:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>a,default:()=>l});var s=t(25523),o=t(25482),n=t(71250),r=t(33378),h=t(22380);const a="Construire l’image d’un point par une homothetie avec cible auto-corrective";function l(){s.default.call(this),this.titre=a,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=3,this.typeExercice="IEP",this.nouvelleVersion=function(i){let e,t,s,a;const l=new r.Z,u=(0,o.nSR)(-4,4,[0,-2,2])/2;this.listeQuestions=[],this.listeCorrections=[];let c=[0,0],m="";const b=parseInt(this.sup),p=(0,n.xmu)(0,0,"O"),x=(0,o.GVn)(b,"QO",!0);this.consigne=`Construire l'image des points $${x[0]}$`;for(let o=1;o<b-1;o++)this.consigne+=`, $${x[o]}$`;this.consigne+=` et $${x[b-1]}$ par l'homothétie de centre $O$`,this.consigne+=` et de rapport $${(0,o.euh)(u)}$.`;const C=[],f=[],d=[],g=[],$=[],y=[];let M,F,D,R;[M,F,D,R]=[0,0,0,0];for(let r=0;r<b;r++)for(d.push((0,n.xmu)((0,o.n0o)((0,o.nSR)(-60,60,0)/10),(0,o.n0o)((0,o.nSR)(-60,60,0)/10),x[r]+"'")),e=!0;(0,n.InT)(d[r],p)<3||e;)if(e=!0,(0,n.InT)(d[r],p)<3)d[r].x=(0,o.n0o)((0,o.nSR)(-60,60,0)/10),d[r].y=(0,o.n0o)((0,o.nSR)(-60,60,0)/10);else{t=!0;for(let i=0;i<r;i++)(0,n.InT)(d[r],d[i])<4.5&&(t=!1);!1===t?(d[r].x=(0,o.n0o)((0,o.nSR)(-60,60,0)/10),d[r].y=(0,o.n0o)((0,o.nSR)(-60,60,0)/10)):e=!1}g.push((0,n.L6P)(p),(0,n.BD1)(p)),$.push((0,n.L6P)(p),(0,n.BD1)(p));for(let r=0;r<b;r++)y.push((S=4,(0,o.Gag)((0,o.nSR)(1,S))+Number((0,o.nSR)(1,S)).toString())),c=(0,n.Ihq)(d[r].x,d[r].y,4,.6,y[r]),s=(0,n.cqN)({x:c[0],y:c[1],rang:4,num:r+1,taille:.6}),s.taille=.6,s.color="orange",s.opacite=.7,C.push(s);var S;for(let r=0;r<b;r++)f.push((0,n.xcw)(d[r],p,1/u,x[r])),g.push((0,n.L6P)(f[r]),(0,n.BD1)(f[r]),C[r]),$.push((0,n.L6P)(f[r],d[r]),(0,n.BD1)(f[r],d[r]),C[r]),a=u<0?(0,n.EXn)(f[r],d[r]):u<1?(0,n.EXn)(p,f[r]):(0,n.EXn)(p,d[r]),a.color=(0,o.LWD)(r),$.push(a),m+=`$${x[r]}'$, l'image du point $${x[r]}$ est dans la case ${y[r]} de la grille ${r+1}.<br>`;for(let o=0;o<b;o++)M=Math.min(M,d[o].x-3,f[o].x-3),F=Math.min(F,d[o].y-3,f[o].y-3),D=Math.max(D,d[o].x+3,f[o].x+3),R=Math.max(R,d[o].y+3,f[o].y+3);h.Do.fenetreMathalea2d=[M,F,D,R],l.xMin=M,l.xMax=D,l.yMin=F,l.yMax=R,l.recadre(M,R),l.pointCreer(p);for(let o=0;o<b;o++)l.pointCreer(f[o]),l.homothetiePoint(f[o],p,u,"",{positionTexte:{x:2,y:-1}});this.listeQuestions.push((0,n.iR9)({xmin:M,ymin:F,xmax:D,ymax:R,pixelsParCm:20,scale:.5},g)),this.listeCorrections.push(m+(0,n.iR9)({xmin:M,ymin:F,xmax:D,ymax:R,pixelsParCm:20,scale:.5},$)+l.html(i)),(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Nombre de points (1 à 5)",5]}},25523:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=41059.c5925628415a44eeedc8.js.map