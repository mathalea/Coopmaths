"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[51387,17007],{51387:(e,t,i)=>{i.r(t),i.d(t,{interactifReady:()=>l,interactifType:()=>p,amcReady:()=>u,amcType:()=>d,default:()=>h});var r=i(92329),n=i(17007),o=i(66170),s=i(30169),a=i(75664);const l=!0,p="mathLive",u=!0,d="AMCHybride";function h(){n.default.call(this),this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.interactif=!0,this.sup=1;const e=[[1,2,3,4],[1,2,7,7,7,7],[1,2,7,7,8,8,8,8,8],[1,2,5,5,5,6,6,6,7,7,8,8,8,9,9,9,10,10,10]];o.Do.isHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(t){let i;if("number"==typeof this.sup)i=(0,s.SRM)(e[this.sup-1],3);else{i=(0,s.SRM)(this.sup.split("-"),3);for(let e=0;e<3;e++)i[e]=parseInt(i[e])}console.log(i);const n=[],l=[];let p,u;const d=(0,r.xmu)(0,0,"O","below"),h=(0,r.jZX)(d,1),b=(0,r.yfy)(d),m=(0,r.jZX)(d,-1),c=(0,r.dRX)(d);h.isVisible=!0,m.isVisible=!0,b.isVisible=!0,c.isVisible=!0,h.epaisseur=2,m.epaisseur=2,b.epaisseur=2,c.epaisseur=2,h.color="green",m.color="green",b.color="green",c.color="green",h.opacite=.5,m.opacite=.5,b.opacite=.5,c.opacite=.5;const g=[],$=[];for(let e=0;e<10;e++)for(let t=0;t<10;t++)g.push((0,r.L6P)((0,r.xmu)(t-4,e-4))),$.push((0,r.L6P)((0,r.xmu)(t-4,e-4))),g.push((0,r.Ots)(t+10*e,t-4.2,e-4.2,"milieu","gray",.8,"middle",!1)),$.push((0,r.Ots)(t+10*e,t-4.2,e-4.2,"milieu","gray",.8,"middle",!1));this.listeQuestions=[],this.listeCorrections=[];const k=[0,0,0],D=[0,0,0],f=[1,1,1];let L,C;let y,x;const P=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];let X="",M="";const q=[[]],O=(0,s.nSR)(-3,3);y=0===O?(0,s.nSR)(-3,3,[0]):(0,s.nSR)(-3,3);for(let e=0;e<3;e++){for(10===i[e]?(f[e]=(0,s.q$q)([2,4])*(0,s.nSR)(-1,1,[0]),C=f[e]):9===i[e]&&(f[e]=(0,s.q$q)([1,2,3])*(0,s.nSR)(-1,1,[0]),L=f[e]),k[e]=(0,s.nSR)(0,99),q[e]=(0,s.aa3)(i[e],[k[e]%10,Math.floor(k[e]/10)],[4,4],[O,y],f[e]),D[e]=q[e][0]+10*q[e][1],1===i[e]&&D[e]%11==0&&(q[e][0]=-1),3===i[e]&&Math.floor(D[e]/10==4)&&(q[e][0]=-1),4===i[e]&&D[e]%10==4&&(q[e][0]=-1),5!==i[e]&&5!==i[e]||44!==k[e]||(q[e][0]=-1),10===i[e]&&44===k[e]&&(q[e][0]=-1),x=q[e][0]-Math.floor(q[e][0])==0&&q[e][1]-Math.floor(q[e][1])==0;q[e][0]<0||q[e][0]>9||q[e][1]<0||q[e][1]>9||!1===x;)10===i[e]?(f[e]=(0,s.q$q)([2,4])*(0,s.nSR)(-1,1,[0]),C=f[e]):9===i[e]&&(f[e]=(0,s.q$q)([1,2,3])*(0,s.nSR)(-1,1,[0]),L=f[e]),k[e]=(0,s.nSR)(0,99),q[e]=(0,s.aa3)(i[e],[k[e]%10,Math.floor(k[e]/10)],[4,4],[O,y],f[e]),D[e]=q[e][0]+10*q[e][1],1===i[e]&&D[e]%11==0&&(q[e][0]=-1),3===i[e]&&Math.floor(D[e]/10==4)&&(q[e][0]=-1),4===i[e]&&D[e]%10==4&&(q[e][0]=-1),5!==i[e]&&5!==i[e]||44!==k[e]||(q[e][0]=-1),10===i[e]&&44===k[e]&&(q[e][0]=-1),x=q[e][0]-Math.floor(q[e][0])==0&&q[e][1]-Math.floor(q[e][1])==0;l[e]=(0,r.xmu)(q[e][0]-4,q[e][1]-4),n[e]=(0,r.xmu)(k[e]%10-4,Math.floor(k[e]/10-4))}for(let e=0;e<3;e++)P[i[e]-1]=k[e];for(let e=0;e<3;e++){switch(i[e]){case 1:X+=(0,s.bk1)(e)+` Donner le numéro du symétrique du point ${k[e]} par rapport à la droite $(d_1)$.<br>`,M+=(0,s.bk1)(e)+` Le symétrique du point ${k[e]} par rapport à $(d_1)$ est le point ${D[e]}.<br>`,g.push(h,(0,r.L6P)(n[e]),(0,r.SgA)("(d_1)",4.5,4.2,"green",15,1,"")),$.push(h,(0,r.L6P)(n[e],l[e]),(0,r.SgA)("(d_1)",3.5,3,"green",15,1,""),(0,r.EXn)(n[e],l[e],"purple"),(0,r.KoI)("X","red",n[e],(0,r.Q2H)(n[e],l[e]),(0,r.Q2H)(n[e],l[e]),l[e]));break;case 2:X+=(0,s.bk1)(e)+` Donner le numéro du symétrique du point ${k[e]} par rapport à la droite $(d_2)$.<br>`,M+=(0,s.bk1)(e)+` Le symétrique du point ${k[e]} par rapport à $(d_2)$ est le point ${D[e]}.<br>`,g.push(m,(0,r.L6P)(n[e]),(0,r.SgA)("(d_2)",4.3,-3.7,"green",15,1,"")),$.push(m,(0,r.L6P)(n[e],l[e]),(0,r.SgA)("(d_2)",4.3,-3.7,"green",15,1,""),(0,r.EXn)(n[e],l[e],"cyan"),(0,r.KoI)("|||","red",n[e],(0,r.Q2H)(n[e],l[e]),(0,r.Q2H)(n[e],l[e]),l[e]));break;case 3:X+=(0,s.bk1)(e)+` Donner le numéro du symétrique du point ${k[e]} par rapport à la droite $(d_3)$.<br>`,M+=(0,s.bk1)(e)+` Le symétrique du point ${k[e]} par rapport à $(d_3)$ est le point ${D[e]}.<br>`,g.push(b,(0,r.L6P)(n[e]),(0,r.SgA)("(d_3)",-4.2,.5,"green",15,1,"")),$.push(b,(0,r.L6P)(n[e],l[e]),(0,r.SgA)("(d_3)",-4.2,.5,"green",15,1,""),(0,r.EXn)(n[e],l[e],"brown"),(0,r.KoI)("/","red",n[e],(0,r.Q2H)(n[e],l[e]),(0,r.Q2H)(n[e],l[e]),l[e]));break;case 4:X+=(0,s.bk1)(e)+` Donner le numéro du symétrique du point ${k[e]} par rapport à la droite $(d_4)$.<br>`,M+=(0,s.bk1)(e)+` Le symétrique du point ${k[e]} par rapport à $(d_4)$ est le point ${D[e]}.<br>`,g.push(c,(0,r.L6P)(n[e]),(0,r.SgA)("(d_4)",.2,4.5,"green",15,1,"")),$.push(c,(0,r.L6P)(n[e],l[e]),(0,r.SgA)("(d_4)",.2,4.5,"green",15,1,""),(0,r.EXn)(n[e],l[e],"yellow"),(0,r.KoI)("||","red",n[e],(0,r.Q2H)(n[e],l[e]),(0,r.Q2H)(n[e],l[e]),l[e]));break;case 5:X+=(0,s.bk1)(e)+` Donner le numéro de  l'image du point ${k[e]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 6:X+=(0,s.bk1)(e)+` Donner le numéro de  l'image du point ${k[e]} par la rotation de centre O et d'angle 90° dans le sens horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 90° dans le sens horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 7:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la symétrie de centre O.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la symétrie de centre O est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("O","red",n[e],d,d,l[e]));break;case 11:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 12:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la rotation de centre O et d'angle 60° dans le sens horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 60° dans le sens horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 13:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 14:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la rotation de centre O et d'angle 120° dans le sens horaire.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la rotation de centre O et d'angle 120° dans le sens horaire est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"blue"),(0,r.KoI)("||","red",n[e],d,d,l[e]),(0,r.DQC)(n[e],d,l[e]));break;case 8:p=(0,r.xmu)((0,s.nSR)(-1,2,[n[e].x,0]),(0,s.nSR)(-1,2,[n[e].y,0]),"M","below"),u=(0,r.xkU)(p,(0,r.tno)(O,y),"N","below"),X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par la translation qui transforme M en N.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par la translation qui transforme M en N est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],p,u),(0,r.BD1)(p,u)),$.push((0,r.L6P)(n[e],l[e],p,u),(0,r.BD1)(p,u),(0,r.tno)(n[e],l[e]).representant(n[e]),(0,r.tno)(n[e],l[e]).representant(p));break;case 9:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par l'homothétie de centre O et de rapport ${L}.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par l'homothétie de centre O et de rapport ${L} est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"orange"));break;case 10:X+=(0,s.bk1)(e)+` Donner le numéro de l'image du point ${k[e]} par l'homothétie de centre O et de rapport $${(0,s.xau)(1,C)}$.<br>`,M+=(0,s.bk1)(e)+` L'image du point ${k[e]} par l'homothétie de centre O et de rapport $${(0,s.xau)(1,C)}$ est le point ${D[e]}.<br>`,g.push((0,r.L6P)(n[e],d),(0,r.BD1)(d)),$.push((0,r.L6P)(n[e],l[e],d),(0,r.BD1)(d),(0,r.EXn)(n[e],d,"blue"),(0,r.EXn)(l[e],d,"orange"))}X+=(0,a.G5)(this,e,"largeur10"),(0,a.Iq)(this,e,D[e])}X+="<br>"+(0,r.iR9)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:.8,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},g),M+="<br>"+(0,r.iR9)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:.8,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},$),this.listeQuestions.push(X),this.listeCorrections.push(M),(0,s.FRy)(this),o.Do.isAmc&&(this.autoCorrection[0]={enonce:X,options:{multicols:!0},propositions:[{type:"AMCNum",propositions:[{texte:M,statut:"",reponse:{texte:"a)",valeur:D[0],param:{digits:2,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"b)",valeur:D[1],param:{digits:2,decimals:0,signe:!1,approx:0}}}]},{type:"AMCNum",propositions:[{texte:"",statut:"",reponse:{texte:"c)",valeur:D[2],param:{digits:2,decimals:0,signe:!1,approx:0}}}]}]})},this.besoinFormulaireTexte=["Choix des transformations","3 nombres séparés par des tirets\n 1&2 : symétries obliques\n 3&4 : symétries horizontales ou verticales\n 5&6 : rotations de 90°\n 7 : symétrie centrale\n 8 : translation\n 9 : homothétie k>1\n 10 : homothétie k<1"]}},17007:(e,t,i)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const r of t)void 0!==r&&(i+=r.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>r})}}]);
//# sourceMappingURL=51387.9702e4fd2ae4833bf856.js.map