(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5922,5216],{44997:(t,e,n)=>{"use strict";n.r(e),n.d(e,{titre:()=>c,default:()=>o});var a=n(75216),i=n(89459),s=n(55339),r=n(44393);const c="Résoudre un problème en utilisant des fractions";function o(){let t;a.default.call(this),this.debug=!1,this.sup=1,this.nbQuestions=1,this.titre=c,this.consigne="Calculatrice autorisée.",this.nbCols=1,this.nbColsCorr=1,i.Do.isHtml,this.spacing=1,i.Do.isHtml,this.spacingCorr=1,this.nouvelleVersion=function(){t=(this.debug,[0]),this.listeQuestions=[],this.listeCorrections=[];let e=(0,s.bqK)(t,this.nbQuestions);for(let t,c,o=0,l=0;o<this.nbQuestions&&l<50;){let u,$=[[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,4,[1.8," ","black",2,1,"blue",.4]],[1,2,[1.8," ","black",2,1,"green",.4]]];do{$=(0,s.TVQ)($)}while($[0][1]==$[1][1]);let g=[["l'","Afrique"],["l'","Asie"],["l'","Amerique"],["l'","Europe"],["la"," France"]];g=(0,s.TVQ)(g);do{u=(0,s.nSR)(200,600)}while(u%2!=0||u%3!=0||u%4!=0);const d=[{fin_enonce_situation:"vols d'une compagnie aérienne selon la destination",nom_enonce:"vols",last_question:["cette compagnie a affrété","vols","le nombre de vols","Le nombre de vols"],cat1:{destination:g[0][0]+g[0][1],article:g[0][0],nom:g[0][1],frac:$[0],angle:(0,s.n0o)(360/$[0][1]),arg_graph:$[0][2]},cat2:{destination:g[1][0]+g[1][1],article:g[1][0],nom:g[1][1],frac:$[1],angle:(0,s.n0o)(360/$[1][1]),arg_graph:$[1][2]},cat3:{destination:g[2][0]+g[2][1],article:g[2][0],nom:g[2][1],frac:$[2],angle:(0,s.n0o)(360/$[2][1]),arg_graph:$[2][2]},cat4:{destination:g[3][0]+g[3][1],article:g[3][0],nom:g[3][1],frac:$[3],angle:(0,s.n0o)(360/$[3][1]),arg_graph:$[3][2]},cat5:{destination:g[4][0]+g[4][1],article:g[4][0],nom:g[4][1],frac:$[4],angle:(0,s.n0o)(360/$[4][1]),arg_graph:$[4][2]},nb_total:u,fig:""},{},{},{},{}];function n(t,e,n,a,[...i]){return 90==a?(0,r.lvA)(t,e,n):(0,r.QSb)(t,e,a,...i)}function a(t){return t<0?"below":"above"}function i(t){switch(t){case 90:return`du secteur est un angle droit, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{4}$.`;case 30:return`rouge apparaît 3 fois, l'angle vert vaut $180\\degree$ et il y a un angle droit.<br>\n\t\t\t\t\t\t\tL'angle pour un tour complet vaut $360\\degree$, donc l'angle rouge vaut $(360-180-90)\\div 3 = ${t}\\degree$.<br>\n\t\t\t\t\t\t\tL'angle rouge mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{12}$.\n\t\t\t\t\t\t\t`;case 180:return`du secteur est un angle plat, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{2}$.`}}const b={xmin:-10,ymin:-8,xmax:10,ymax:8,pixelsParCm:20,scale:.5},h=(0,r.xmu)(0,0);let f=(0,r.xmu)(b.xmin+6,0),p=(0,r.LL6)(h,f,"blue");p.epaisseur=2;let m=(0,r.Wnp)(f,h,d[0].cat1.angle),_=(0,r.EXn)(h,f),v=(0,r.EXn)(h,m),C=n(f,h,m,d[0].cat1.angle,d[0].cat1.arg_graph);const E=(0,r.Wnp)(m,h,d[0].cat2.angle);let q=(0,r.EXn)(h,E),x=n(m,h,E,d[0].cat2.angle,d[0].cat2.arg_graph);const k=(0,r.Wnp)(E,h,d[0].cat3.angle);let Q=(0,r.EXn)(h,k),L=n(E,h,k,d[0].cat3.angle,d[0].cat3.arg_graph);const W=(0,r.Wnp)(k,h,d[0].cat4.angle);let D=(0,r.EXn)(h,W),y=n(k,h,W,d[0].cat4.angle,d[0].cat4.arg_graph);const X=(0,r.Wnp)(W,h,d[0].cat5.angle);let R=(0,r.EXn)(h,X),w=n(W,h,X,d[0].cat5.angle,d[0].cat5.arg_graph);const A=(0,r.xmu)(b.xmin+4,0);let M=(0,r.Wnp)(A,h,d[0].cat1.angle/2,d[0].cat1.nom);M.positionLabel=a(M.y);let B=(0,r.Wnp)(f,h,d[0].cat1.angle/2,d[0].cat1.nom),K=(0,r.EXn)(M,B);K.styleExtremites="->",K.pointilles=!0;let O=(0,r.Wnp)(M,h,d[0].cat1.angle/2+d[0].cat2.angle/2,d[0].cat2.nom);O.positionLabel=a(O.y);let V=(0,r.Wnp)(m,h,d[0].cat2.angle/2,d[0].cat2.nom),F=(0,r.EXn)(O,V);F.styleExtremites="->",F.pointilles=!0;let H=(0,r.Wnp)(O,h,d[0].cat2.angle/2+d[0].cat3.angle/2,d[0].cat3.nom);H.positionLabel=a(H.y);let P=(0,r.Wnp)(E,h,d[0].cat3.angle/2,d[0].cat3.nom),S=(0,r.EXn)(H,P);S.styleExtremites="->",S.pointilles=!0;let T=(0,r.Wnp)(H,h,d[0].cat3.angle/2+d[0].cat4.angle/2,d[0].cat4.nom);T.positionLabel=a(T.y);let z=(0,r.Wnp)(k,h,d[0].cat4.angle/2,d[0].cat4.nom),N=(0,r.EXn)(T,z);N.styleExtremites="->",N.pointilles=!0;let I=(0,r.Wnp)(T,h,d[0].cat4.angle/2+d[0].cat5.angle/2,d[0].cat5.nom);I.positionLabel=a(I.y);let j=(0,r.Wnp)(W,h,d[0].cat5.angle/2,d[0].cat5.nom),G=(0,r.EXn)(I,j);G.styleExtremites="->",G.pointilles=!0;let J=[p,_,v,q,Q,D,R,C,x,L,y,w,(0,r.BD1)(M),(0,r.BD1)(O),(0,r.BD1)(H),(0,r.BD1)(T),(0,r.BD1)(I),K,F,S,N,G],U=(0,r.iR9)(b,J);d[0].fig=U;let Y=[],Z=0,tt=0;for(let t=0;t<1;t++)Y.push({enonce:`\n\t\t\t\t\tOn a représenté sur le diagramme circulaire ci-contre la répartition des ${d[t].fin_enonce_situation}.<br>\n\t\t\t\t\t${(0,s.HzX)("Les angles de même couleur ont la même mesure.")}<br>\n\t\t\t\t\t${(0,s.HzX)("L'angle vert est un angle plat.")}<br>\n\t\t\t\t\t${d[t].fig}<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Quelle fraction représente les ${d[t].nom_enonce} vers ${d[t].cat1.destination} ?<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Quelle fraction représente les ${d[t].nom_enonce} vers ${d[t].cat2.destination} ?<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Sachant que ${d[t].last_question[0]} ${d[t].nb_total} ${d[t].last_question[1]}\n\t\t\t\t\tet que les ${d[t].nom_enonce} vers ${d[t].cat3.destination} représentent $\\dfrac{${d[t].cat3.frac[0]}}{${d[t].cat3.frac[1]}}$ de ce total,\n\t\t\t\t\tcaluler ${d[t].last_question[2]} vers ${d[t].cat3.destination}?\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t`,correction:`\n\t\t\t\t\t${(0,s.bk1)(tt++)} Pour ${d[t].cat1.destination} l'angle ${i(d[t].cat1.angle)}<br>\t\t\t\t\t\n\t\t\t\t\t${(0,s.pRK)(`La fraction qui représente les ${d[t].nom_enonce} vers ${d[t].cat1.destination} vaut donc $\\dfrac{${d[t].cat1.frac[0]}}{${d[t].cat1.frac[1]}}$`)}.<br>\n\t\t\t\t\t\n\t\t\t\t\t${(0,s.bk1)(tt++)} Pour ${d[t].cat2.destination} l'angle ${i(d[t].cat2.angle)}<br>\t\t\t\t\n\t\t\t\t\t${(0,s.pRK)(`La fraction qui représente les ${d[t].nom_enonce} vers ${d[t].cat2.destination} vaut donc $\\dfrac{${d[t].cat2.frac[0]}}{${d[t].cat2.frac[1]}}$`)}<br>\n\n\t\t\t\t\t${(0,s.bk1)(tt++)} Calculons $\\dfrac{${d[t].cat3.frac[0]}}{${d[t].cat3.frac[1]}}$ de ${d[t].nb_total} :<br> \n\t\t\t\t\t$\\dfrac{${d[t].cat3.frac[0]}}{${d[t].cat3.frac[1]}}\\times ${d[t].nb_total} = \\dfrac{${d[t].cat3.frac[0]}\\times ${d[t].nb_total}}{${d[t].cat3.frac[1]}} = \\dfrac{${d[t].cat3.frac[0]}\\times ${(0,s.n0o)(d[t].nb_total/d[t].cat3.frac[1])}\\times ${d[t].cat3.frac[1]}}{${d[t].cat3.frac[1]}} = \\dfrac{${d[t].cat3.frac[0]}\\times ${(0,s.n0o)(d[t].nb_total/d[t].cat3.frac[1])}\\times \\cancel{${d[t].cat3.frac[1]}}}{\\cancel{${d[t].cat3.frac[1]}}} = ${d[t].cat3.frac[0]}\\times ${(0,s.n0o)(d[t].nb_total/d[t].cat3.frac[1])} = ${(0,s.n0o)(d[t].nb_total/d[t].cat3.frac[1])}$<br>\n\t\t\t\t\t${(0,s.pRK)(`${d[t].last_question[3]} vers ${d[t].cat3.destination} vaut donc ${(0,s.n0o)(d[t].nb_total/d[t].cat3.frac[1])}.`)}\n\t\t\t\t\t`});switch(e[o]){case 0:t=`${Y[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${Y[0].correction}`,t+="             ",c=""):c=`${Y[0].correction}`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(c),o++),l++}(0,s.K1R)(this)}}},75216:(t,e,n)=>{"use strict";function a(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}n.r(e),n.d(e,{default:()=>a})}}]);
//# sourceMappingURL=5922.769498938cdc4c01e96c.js.map