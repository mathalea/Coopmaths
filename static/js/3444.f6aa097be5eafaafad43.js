(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3444,7567],{63444:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>s});var t=n(17199),i=n(67567),o=n(24477);function s(){i.default.call(this),this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(e){let r,n,i=[],s=[],a=(0,t.xmu)(0,0,"O","below"),l=(0,t.jZX)(a,1),p=(0,t.yfy)(a),u=(0,t.jZX)(a,-1),d=(0,t.dRX)(a);l.isVisible=!0,u.isVisible=!0,p.isVisible=!0,d.isVisible=!0,l.epaisseur=2,u.epaisseur=2,p.epaisseur=2,d.epaisseur=2,l.color="green",u.color="green",p.color="green",d.color="green",l.opacite=.5,u.opacite=.5,p.opacite=.5,d.opacite=.5;let b=[],h=[];for(let e=0;e<10;e++)for(let r=0;r<10;r++)b.push((0,t.L6P)((0,t.xmu)(r-4,e-4))),h.push((0,t.L6P)((0,t.xmu)(r-4,e-4))),b.push((0,t.Ots)(r+10*e,r-4.2,e-4.2,"milieu","gray",.8,"middle",!1)),h.push((0,t.Ots)(r+10*e,r-4.2,e-4.2,"milieu","gray",.8,"middle",!1));this.listeQuestions=[],this.listeCorrections=[];let m,c,$,g,k,D=[0,0,0],L=[0,0,0],f=[1,1,1],P=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],C="",y="",X=[[]],E=parseInt(this.sup)-1,x=(0,o.SRM)([[1,2,3,4],[1,2,3,4,7],[1,2,3,4,7,8],[1,2,3,4,5,6,7,8,9,10]][E],3);$=(0,o.nSR)(-3,3),g=0==$?(0,o.nSR)(-3,3,[0]):(0,o.nSR)(-3,3);for(let e=0;e<3;e++){for(10==x[e]?(f[e]=(0,o.q$q)([2,4])*(0,o.nSR)(-1,1,[0]),c=f[e]):9==x[e]&&(f[e]=(0,o.q$q)([1,2,3])*(0,o.nSR)(-1,1,[0]),m=f[e]),D[e]=(0,o.nSR)(0,99),X[e]=(0,o.aa3)(x[e],[D[e]%10,Math.floor(D[e]/10)],[4,4],[$,g],f[e]),L[e]=X[e][0]+10*X[e][1],1==x[e]&&L[e]%11==0&&(X[e][0]=-1),3==x[e]&&Math.floor(L[e]/10==4)&&(X[e][0]=-1),4==x[e]&&L[e]%10==4&&(X[e][0]=-1),5!=x[e]&&5!=x[e]||44!=D[e]||(X[e][0]=-1),10==x[e]&&44==D[e]&&(X[e][0]=-1),k=X[e][0]-Math.floor(X[e][0])==0&&X[e][1]-Math.floor(X[e][1])==0;X[e][0]<0||X[e][0]>9||X[e][1]<0||X[e][1]>9||0==k;)10==x[e]?(f[e]=(0,o.q$q)([2,4])*(0,o.nSR)(-1,1,[0]),c=f[e]):9==x[e]&&(f[e]=(0,o.q$q)([1,2,3])*(0,o.nSR)(-1,1,[0]),m=f[e]),D[e]=(0,o.nSR)(0,99),X[e]=(0,o.aa3)(x[e],[D[e]%10,Math.floor(D[e]/10)],[4,4],[$,g],f[e]),L[e]=X[e][0]+10*X[e][1],1==x[e]&&L[e]%11==0&&(X[e][0]=-1),3==x[e]&&Math.floor(L[e]/10==4)&&(X[e][0]=-1),4==x[e]&&L[e]%10==4&&(X[e][0]=-1),5!=x[e]&&5!=x[e]||44!=D[e]||(X[e][0]=-1),10==x[e]&&44==D[e]&&(X[e][0]=-1),k=X[e][0]-Math.floor(X[e][0])==0&&X[e][1]-Math.floor(X[e][1])==0;s[e]=(0,t.xmu)(X[e][0]-4,X[e][1]-4),i[e]=(0,t.xmu)(D[e]%10-4,Math.floor(D[e]/10-4))}for(let e=0;e<3;e++)P[x[e]-1]=D[e];for(let e=0;e<3;e++)switch(x[e]){case 1:C+=(0,o.bk1)(e)+` Donner le numéro du symétrique du point ${D[e]} par rapport à la droite $(d_1)$.<br>`,y+=(0,o.bk1)(e)+` Le symétrique du point ${D[e]} par rapport à $(d_1)$ est le point ${L[e]}.<br>`,b.push(l,(0,t.L6P)(i[e]),(0,t.SgA)("(d_1)",4.5,4.2,"green",15,1,"")),h.push(l,(0,t.L6P)(i[e],s[e]),(0,t.SgA)("(d_1)",3.5,3,"green",15,1,""),(0,t.EXn)(i[e],s[e],"purple"),(0,t.KoI)("X","red",i[e],(0,t.Q2H)(i[e],s[e]),(0,t.Q2H)(i[e],s[e]),s[e]));break;case 2:C+=(0,o.bk1)(e)+` Donner le numéro du symétrique du point ${D[e]} par rapport à la droite $(d_2)$.<br>`,y+=(0,o.bk1)(e)+` Le symétrique du point ${D[e]} par rapport à $(d_2)$ est le point ${L[e]}.<br>`,b.push(u,(0,t.L6P)(i[e]),(0,t.SgA)("(d_2)",4.3,-3.7,"green",15,1,"")),h.push(u,(0,t.L6P)(i[e],s[e]),(0,t.SgA)("(d_2)",4.3,-3.7,"green",15,1,""),(0,t.EXn)(i[e],s[e],"cyan"),(0,t.KoI)("|||","red",i[e],(0,t.Q2H)(i[e],s[e]),(0,t.Q2H)(i[e],s[e]),s[e]));break;case 3:C+=(0,o.bk1)(e)+` Donner le numéro du symétrique du point ${D[e]} par rapport à la droite $(d_3)$.<br>`,y+=(0,o.bk1)(e)+` Le symétrique du point ${D[e]} par rapport à $(d_3)$ est le point ${L[e]}.<br>`,b.push(p,(0,t.L6P)(i[e]),(0,t.SgA)("(d_3)",-4.2,.5,"green",15,1,"")),h.push(p,(0,t.L6P)(i[e],s[e]),(0,t.SgA)("(d_3)",-4.2,.5,"green",15,1,""),(0,t.EXn)(i[e],s[e],"brown"),(0,t.KoI)("/","red",i[e],(0,t.Q2H)(i[e],s[e]),(0,t.Q2H)(i[e],s[e]),s[e]));break;case 4:C+=(0,o.bk1)(e)+` Donner le numéro du symétrique du point ${D[e]} par rapport à la droite $(d_4)$.<br>`,y+=(0,o.bk1)(e)+` Le symétrique du point ${D[e]} par rapport à $(d_4)$ est le point ${L[e]}.<br>`,b.push(d,(0,t.L6P)(i[e]),(0,t.SgA)("(d_4)",.2,4.5,"green",15,1,"")),h.push(d,(0,t.L6P)(i[e],s[e]),(0,t.SgA)("(d_4)",.2,4.5,"green",15,1,""),(0,t.EXn)(i[e],s[e],"yellow"),(0,t.KoI)("||","red",i[e],(0,t.Q2H)(i[e],s[e]),(0,t.Q2H)(i[e],s[e]),s[e]));break;case 5:C+=(0,o.bk1)(e)+` Donner le numéro de  l'image du point ${D[e]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 6:C+=(0,o.bk1)(e)+` Donner le numéro de  l'image du point ${D[e]} par la rotation de centre O et d'angle 90° dans le sens horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 90° dans le sens horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 7:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la symétrie de centre O.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la symétrie de centre O est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("O","red",i[e],a,a,s[e]));break;case 11:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 12:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la rotation de centre O et d'angle 60° dans le sens horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 60° dans le sens horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 13:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 14:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la rotation de centre O et d'angle 120° dans le sens horaire.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la rotation de centre O et d'angle 120° dans le sens horaire est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"blue"),(0,t.KoI)("||","red",i[e],a,a,s[e]),(0,t.DQC)(i[e],a,s[e]));break;case 8:r=(0,t.xmu)((0,o.nSR)(-1,2,[i[e].x,0]),(0,o.nSR)(-1,2,[i[e].y,0]),"M","below"),n=(0,t.xkU)(r,(0,t.tno)($,g),"N","below"),C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par la translation qui transforme M en N.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par la translation qui transforme M en N est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],r,n),(0,t.BD1)(r,n)),h.push((0,t.L6P)(i[e],s[e],r,n),(0,t.BD1)(r,n),(0,t.tno)(i[e],s[e]).representant(i[e]),(0,t.tno)(i[e],s[e]).representant(r));break;case 9:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par l'homothétie de centre O et de rapport ${m}.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par l'homothétie de centre O et de rapport ${m} est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"orange"));break;case 10:C+=(0,o.bk1)(e)+` Donner le numéro de l'image du point ${D[e]} par l'homothétie de centre O et de rapport $${(0,o.xau)(1,c)}$.<br>`,y+=(0,o.bk1)(e)+` L'image du point ${D[e]} par l'homothétie de centre O et de rapport $${(0,o.xau)(1,c)}$ est le point ${L[e]}.<br>`,b.push((0,t.L6P)(i[e],a),(0,t.BD1)(a)),h.push((0,t.L6P)(i[e],s[e],a),(0,t.BD1)(a),(0,t.EXn)(i[e],a,"blue"),(0,t.EXn)(s[e],a,"orange"))}C+="<br>"+(0,t.iR9)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:.8,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},b),y+="<br>"+(0,t.iR9)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:.8,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},h),this.listeQuestions.push(C),this.listeCorrections.push(y),(0,o.FRy)(this)}}},67567:(e,r,n)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}n.r(r),n.d(r,{default:()=>t})}}]);