(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[989,7567],{50989:(t,e,n)=>{"use strict";n.r(e),n.d(e,{titre:()=>r,default:()=>c});var a=n(67567),i=n(24477),s=n(17199);const r="Résoudre un problème en utilisant des fractions";function c(){let t;a.default.call(this),this.debug=!1,this.sup=1,this.nbQuestions=1,this.titre=r,this.consigne="Calculatrice autorisée.",this.nbCols=1,this.nbColsCorr=1,sortieHtml,this.spacing=1,sortieHtml,this.spacingCorr=1,this.nouvelleVersion=function(){this.debug,t=[0],this.listeQuestions=[],this.listeCorrections=[];let e=(0,i.bqK)(t,this.nbQuestions);for(let t,c,o=0,l=0;o<this.nbQuestions&&l<50;){let u,$=[[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,4,[1.8," ","black",2,1,"blue",.4]],[1,2,[1.8," ","black",2,1,"green",.4]]];do{$=(0,i.TVQ)($)}while($[0][1]==$[1][1]);let d=[["l'","Afrique"],["l'","Asie"],["l'","Amerique"],["l'","Europe"],["la"," France"]];d=(0,i.TVQ)(d);do{u=(0,i.nSR)(200,600)}while(u%2!=0||u%3!=0||u%4!=0);const g=[{fin_enonce_situation:"vols d'une compagnie aérienne selon la destination",nom_enonce:"vols",last_question:["cette compagnie a affrété","vols","le nombre de vols","Le nombre de vols"],cat1:{destination:d[0][0]+d[0][1],article:d[0][0],nom:d[0][1],frac:$[0],angle:(0,i.n0o)(360/$[0][1]),arg_graph:$[0][2]},cat2:{destination:d[1][0]+d[1][1],article:d[1][0],nom:d[1][1],frac:$[1],angle:(0,i.n0o)(360/$[1][1]),arg_graph:$[1][2]},cat3:{destination:d[2][0]+d[2][1],article:d[2][0],nom:d[2][1],frac:$[2],angle:(0,i.n0o)(360/$[2][1]),arg_graph:$[2][2]},cat4:{destination:d[3][0]+d[3][1],article:d[3][0],nom:d[3][1],frac:$[3],angle:(0,i.n0o)(360/$[3][1]),arg_graph:$[3][2]},cat5:{destination:d[4][0]+d[4][1],article:d[4][0],nom:d[4][1],frac:$[4],angle:(0,i.n0o)(360/$[4][1]),arg_graph:$[4][2]},nb_total:u,fig:""},{},{},{},{}];function n(t,e,n,a,[...i]){return 90==a?(0,s.lvA)(t,e,n):(0,s.QSb)(t,e,a,...i)}function a(t){return t<0?"below":"above"}function r(t){switch(t){case 90:return`du secteur est un angle droit, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{4}$.`;case 30:return`rouge apparaît 3 fois, l'angle vert vaut $180\\degree$ et il y a un angle droit.<br>\n\t\t\t\t\t\t\tL'angle pour un tour complet vaut $360\\degree$, donc l'angle rouge vaut $(360-180-90)\\div 3 = ${t}\\degree$.<br>\n\t\t\t\t\t\t\tL'angle rouge mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{12}$.\n\t\t\t\t\t\t\t`;case 180:return`du secteur est un angle plat, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{2}$.`}}const b={xmin:-10,ymin:-8,xmax:10,ymax:8,pixelsParCm:20,scale:.5},h=(0,s.xmu)(0,0);let f=(0,s.xmu)(b.xmin+6,0),m=(0,s.LL6)(h,f,"blue");m.epaisseur=2;let p=(0,s.Wnp)(f,h,g[0].cat1.angle),_=(0,s.EXn)(h,f),v=(0,s.EXn)(h,p),C=n(f,h,p,g[0].cat1.angle,g[0].cat1.arg_graph);const E=(0,s.Wnp)(p,h,g[0].cat2.angle);let q=(0,s.EXn)(h,E),x=n(p,h,E,g[0].cat2.angle,g[0].cat2.arg_graph);const k=(0,s.Wnp)(E,h,g[0].cat3.angle);let L=(0,s.EXn)(h,k),Q=n(E,h,k,g[0].cat3.angle,g[0].cat3.arg_graph);const W=(0,s.Wnp)(k,h,g[0].cat4.angle);let y=(0,s.EXn)(h,W),D=n(k,h,W,g[0].cat4.angle,g[0].cat4.arg_graph);const X=(0,s.Wnp)(W,h,g[0].cat5.angle);let w=(0,s.EXn)(h,X),A=n(W,h,X,g[0].cat5.angle,g[0].cat5.arg_graph);const M=(0,s.xmu)(b.xmin+4,0);let R=(0,s.Wnp)(M,h,g[0].cat1.angle/2,g[0].cat1.nom);R.positionLabel=a(R.y);let B=(0,s.Wnp)(f,h,g[0].cat1.angle/2,g[0].cat1.nom),V=(0,s.EXn)(R,B);V.styleExtremites="->",V.pointilles=!0;let F=(0,s.Wnp)(R,h,g[0].cat1.angle/2+g[0].cat2.angle/2,g[0].cat2.nom);F.positionLabel=a(F.y);let O=(0,s.Wnp)(p,h,g[0].cat2.angle/2,g[0].cat2.nom),P=(0,s.EXn)(F,O);P.styleExtremites="->",P.pointilles=!0;let T=(0,s.Wnp)(F,h,g[0].cat2.angle/2+g[0].cat3.angle/2,g[0].cat3.nom);T.positionLabel=a(T.y);let S=(0,s.Wnp)(E,h,g[0].cat3.angle/2,g[0].cat3.nom),U=(0,s.EXn)(T,S);U.styleExtremites="->",U.pointilles=!0;let H=(0,s.Wnp)(T,h,g[0].cat3.angle/2+g[0].cat4.angle/2,g[0].cat4.nom);H.positionLabel=a(H.y);let K=(0,s.Wnp)(k,h,g[0].cat4.angle/2,g[0].cat4.nom),N=(0,s.EXn)(H,K);N.styleExtremites="->",N.pointilles=!0;let I=(0,s.Wnp)(H,h,g[0].cat4.angle/2+g[0].cat5.angle/2,g[0].cat5.nom);I.positionLabel=a(I.y);let j=(0,s.Wnp)(W,h,g[0].cat5.angle/2,g[0].cat5.nom),z=(0,s.EXn)(I,j);z.styleExtremites="->",z.pointilles=!0;let G=[m,_,v,q,L,y,w,C,x,Q,D,A,(0,s.BD1)(R),(0,s.BD1)(F),(0,s.BD1)(T),(0,s.BD1)(H),(0,s.BD1)(I),V,P,U,N,z],J=(0,s.iR9)(b,G);g[0].fig=J;let Y=[],Z=0,tt=0;for(let t=0;t<1;t++)Y.push({enonce:`\n\t\t\t\t\tOn a représenté sur le diagramme circulaire ci-contre la répartition des ${g[t].fin_enonce_situation}.<br>\n\t\t\t\t\t${(0,i.rdv)("Les angles de même couleur ont la même mesure.")}<br>\n\t\t\t\t\t${(0,i.rdv)("L'angle vert est un angle plat.")}<br>\n\t\t\t\t\t${g[t].fig}<br>\n\t\t\t\t\t${(0,i.bk1)(Z++)} Quelle fraction représente les ${g[t].nom_enonce} vers ${g[t].cat1.destination} ?<br>\n\t\t\t\t\t${(0,i.bk1)(Z++)} Quelle fraction représente les ${g[t].nom_enonce} vers ${g[t].cat2.destination} ?<br>\n\t\t\t\t\t${(0,i.bk1)(Z++)} Sachant que ${g[t].last_question[0]} ${g[t].nb_total} ${g[t].last_question[1]}\n\t\t\t\t\tet que les ${g[t].nom_enonce} vers ${g[t].cat3.destination} représentent $\\dfrac{${g[t].cat3.frac[0]}}{${g[t].cat3.frac[1]}}$ de ce total,\n\t\t\t\t\tcaluler ${g[t].last_question[2]} vers ${g[t].cat3.destination}?\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t`,correction:`\n\t\t\t\t\t${(0,i.bk1)(tt++)} Pour ${g[t].cat1.destination} l'angle ${r(g[t].cat1.angle)}<br>\t\t\t\t\t\n\t\t\t\t\t${(0,i.Udc)(`La fraction qui représente les ${g[t].nom_enonce} vers ${g[t].cat1.destination} vaut donc $\\dfrac{${g[t].cat1.frac[0]}}{${g[t].cat1.frac[1]}}$`)}.<br>\n\t\t\t\t\t\n\t\t\t\t\t${(0,i.bk1)(tt++)} Pour ${g[t].cat2.destination} l'angle ${r(g[t].cat2.angle)}<br>\t\t\t\t\n\t\t\t\t\t${(0,i.Udc)(`La fraction qui représente les ${g[t].nom_enonce} vers ${g[t].cat2.destination} vaut donc $\\dfrac{${g[t].cat2.frac[0]}}{${g[t].cat2.frac[1]}}$`)}<br>\n\n\t\t\t\t\t${(0,i.bk1)(tt++)} Calculons $\\dfrac{${g[t].cat3.frac[0]}}{${g[t].cat3.frac[1]}}$ de ${g[t].nb_total} :<br> \n\t\t\t\t\t$\\dfrac{${g[t].cat3.frac[0]}}{${g[t].cat3.frac[1]}}\\times ${g[t].nb_total} = \\dfrac{${g[t].cat3.frac[0]}\\times ${g[t].nb_total}}{${g[t].cat3.frac[1]}} = \\dfrac{${g[t].cat3.frac[0]}\\times ${(0,i.n0o)(g[t].nb_total/g[t].cat3.frac[1])}\\times ${g[t].cat3.frac[1]}}{${g[t].cat3.frac[1]}} = \\dfrac{${g[t].cat3.frac[0]}\\times ${(0,i.n0o)(g[t].nb_total/g[t].cat3.frac[1])}\\times \\cancel{${g[t].cat3.frac[1]}}}{\\cancel{${g[t].cat3.frac[1]}}} = ${g[t].cat3.frac[0]}\\times ${(0,i.n0o)(g[t].nb_total/g[t].cat3.frac[1])} = ${(0,i.n0o)(g[t].nb_total/g[t].cat3.frac[1])}$<br>\n\t\t\t\t\t${(0,i.Udc)(`${g[t].last_question[3]} vers ${g[t].cat3.destination} vaut donc ${(0,i.n0o)(g[t].nb_total/g[t].cat3.frac[1])}.`)}\n\t\t\t\t\t`});switch(e[o]){case 0:t=`${Y[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${Y[0].correction}`,t+="             ",c=""):c=`${Y[0].correction}`}-1==this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(c),o++),l++}(0,i.K1R)(this)}}},67567:(t,e,n)=>{"use strict";function a(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}n.r(e),n.d(e,{default:()=>a})}}]);