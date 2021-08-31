"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[74839,17007],{74839:(t,e,n)=>{n.r(e),n.d(e,{titre:()=>o,default:()=>c});var a=n(17007),i=n(66170),s=n(30169),r=n(92329);const o="Résoudre un problème en utilisant des fractions";function c(){let t;a.default.call(this),this.debug=!1,this.sup=1,this.nbQuestions=1,this.titre=o,this.consigne="Calculatrice autorisée.",this.nbCols=1,this.nbColsCorr=1,i.Do.isHtml,this.spacing=1,i.Do.isHtml,this.spacingCorr=1,this.nouvelleVersion=function(){t=(this.debug,[0]),this.listeQuestions=[],this.listeCorrections=[];let e=(0,s.bqK)(t,this.nbQuestions);for(let t,n,a=0,i=0;a<this.nbQuestions&&i<50;){let o,c=[[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,12,[1.8," ","black",2,1,"red",.4]],[1,4,[1.8," ","black",2,1,"blue",.4]],[1,2,[1.8," ","black",2,1,"green",.4]]];do{c=(0,s.TVQ)(c)}while(c[0][1]==c[1][1]);let l=[["l'","Afrique"],["l'","Asie"],["l'","Amerique"],["l'","Europe"],["la"," France"]];l=(0,s.TVQ)(l);do{o=(0,s.nSR)(200,600)}while(o%2!=0||o%3!=0||o%4!=0);const u=[{fin_enonce_situation:"vols d'une compagnie aérienne selon la destination",nom_enonce:"vols",last_question:["cette compagnie a affrété","vols","le nombre de vols","Le nombre de vols"],cat1:{destination:l[0][0]+l[0][1],article:l[0][0],nom:l[0][1],frac:c[0],angle:(0,s.n0o)(360/c[0][1]),arg_graph:c[0][2]},cat2:{destination:l[1][0]+l[1][1],article:l[1][0],nom:l[1][1],frac:c[1],angle:(0,s.n0o)(360/c[1][1]),arg_graph:c[1][2]},cat3:{destination:l[2][0]+l[2][1],article:l[2][0],nom:l[2][1],frac:c[2],angle:(0,s.n0o)(360/c[2][1]),arg_graph:c[2][2]},cat4:{destination:l[3][0]+l[3][1],article:l[3][0],nom:l[3][1],frac:c[3],angle:(0,s.n0o)(360/c[3][1]),arg_graph:c[3][2]},cat5:{destination:l[4][0]+l[4][1],article:l[4][0],nom:l[4][1],frac:c[4],angle:(0,s.n0o)(360/c[4][1]),arg_graph:c[4][2]},nb_total:o,fig:""},{},{},{},{}];function $(t,e,n,a,[...i]){return 90==a?(0,r.lvA)(t,e,n):(0,r.QSb)(t,e,a,...i)}function g(t){return t<0?"below":"above"}function d(t){switch(t){case 90:return`du secteur est un angle droit, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{4}$.`;case 30:return`rouge apparaît 3 fois, l'angle vert vaut $180\\degree$ et il y a un angle droit.<br>\n\t\t\t\t\t\t\tL'angle pour un tour complet vaut $360\\degree$, donc l'angle rouge vaut $(360-180-90)\\div 3 = ${t}\\degree$.<br>\n\t\t\t\t\t\t\tL'angle rouge mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{12}$.\n\t\t\t\t\t\t\t`;case 180:return`du secteur est un angle plat, il mesure $${t}\\degree$ sur les $360\\degree$ d'un tour complet, donc il représente $\\dfrac{${t}}{360}$ du disque soit $\\dfrac{1}{2}$.`}}const h={xmin:-10,ymin:-8,xmax:10,ymax:8,pixelsParCm:20,scale:.5},b=(0,r.xmu)(0,0);let m=(0,r.xmu)(h.xmin+6,0),f=(0,r.LL6)(b,m,"blue");f.epaisseur=2;let p=(0,r.Wnp)(m,b,u[0].cat1.angle),_=(0,r.EXn)(b,m),C=(0,r.EXn)(b,p),v=$(m,b,p,u[0].cat1.angle,u[0].cat1.arg_graph);const x=(0,r.Wnp)(p,b,u[0].cat2.angle);let q=(0,r.EXn)(b,x),E=$(p,b,x,u[0].cat2.angle,u[0].cat2.arg_graph);const k=(0,r.Wnp)(x,b,u[0].cat3.angle);let L=(0,r.EXn)(b,k),Q=$(x,b,k,u[0].cat3.angle,u[0].cat3.arg_graph);const W=(0,r.Wnp)(k,b,u[0].cat4.angle);let y=(0,r.EXn)(b,W),D=$(k,b,W,u[0].cat4.angle,u[0].cat4.arg_graph);const X=(0,r.Wnp)(W,b,u[0].cat5.angle);let A=(0,r.EXn)(b,X),F=$(W,b,X,u[0].cat5.angle,u[0].cat5.arg_graph);const R=(0,r.xmu)(h.xmin+4,0);let w=(0,r.Wnp)(R,b,u[0].cat1.angle/2,u[0].cat1.nom);w.positionLabel=g(w.y);let M=(0,r.Wnp)(m,b,u[0].cat1.angle/2,u[0].cat1.nom),O=(0,r.EXn)(w,M);O.styleExtremites="->",O.pointilles=!0;let T=(0,r.Wnp)(w,b,u[0].cat1.angle/2+u[0].cat2.angle/2,u[0].cat2.nom);T.positionLabel=g(T.y);let B=(0,r.Wnp)(p,b,u[0].cat2.angle/2,u[0].cat2.nom),K=(0,r.EXn)(T,B);K.styleExtremites="->",K.pointilles=!0;let P=(0,r.Wnp)(T,b,u[0].cat2.angle/2+u[0].cat3.angle/2,u[0].cat3.nom);P.positionLabel=g(P.y);let S=(0,r.Wnp)(x,b,u[0].cat3.angle/2,u[0].cat3.nom),V=(0,r.EXn)(P,S);V.styleExtremites="->",V.pointilles=!0;let H=(0,r.Wnp)(P,b,u[0].cat3.angle/2+u[0].cat4.angle/2,u[0].cat4.nom);H.positionLabel=g(H.y);let N=(0,r.Wnp)(k,b,u[0].cat4.angle/2,u[0].cat4.nom),z=(0,r.EXn)(H,N);z.styleExtremites="->",z.pointilles=!0;let I=(0,r.Wnp)(H,b,u[0].cat4.angle/2+u[0].cat5.angle/2,u[0].cat5.nom);I.positionLabel=g(I.y);let J=(0,r.Wnp)(W,b,u[0].cat5.angle/2,u[0].cat5.nom),j=(0,r.EXn)(I,J);j.styleExtremites="->",j.pointilles=!0;let G=[f,_,C,q,L,y,A,v,E,Q,D,F,(0,r.BD1)(w),(0,r.BD1)(T),(0,r.BD1)(P),(0,r.BD1)(H),(0,r.BD1)(I),O,K,V,z,j],U=(0,r.iR9)(h,G);u[0].fig=U;let Y=[],Z=0,tt=0;for(let t=0;t<1;t++)Y.push({enonce:`\n\t\t\t\t\tOn a représenté sur le diagramme circulaire ci-contre la répartition des ${u[t].fin_enonce_situation}.<br>\n\t\t\t\t\t${(0,s.HzX)("Les angles de même couleur ont la même mesure.")}<br>\n\t\t\t\t\t${(0,s.HzX)("L'angle vert est un angle plat.")}<br>\n\t\t\t\t\t${u[t].fig}<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Quelle fraction représente les ${u[t].nom_enonce} vers ${u[t].cat1.destination} ?<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Quelle fraction représente les ${u[t].nom_enonce} vers ${u[t].cat2.destination} ?<br>\n\t\t\t\t\t${(0,s.bk1)(Z++)} Sachant que ${u[t].last_question[0]} ${u[t].nb_total} ${u[t].last_question[1]}\n\t\t\t\t\tet que les ${u[t].nom_enonce} vers ${u[t].cat3.destination} représentent $\\dfrac{${u[t].cat3.frac[0]}}{${u[t].cat3.frac[1]}}$ de ce total,\n\t\t\t\t\tcaluler ${u[t].last_question[2]} vers ${u[t].cat3.destination}?\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t`,correction:`\n\t\t\t\t\t${(0,s.bk1)(tt++)} Pour ${u[t].cat1.destination} l'angle ${d(u[t].cat1.angle)}<br>\t\t\t\t\t\n\t\t\t\t\t${(0,s.pRK)(`La fraction qui représente les ${u[t].nom_enonce} vers ${u[t].cat1.destination} vaut donc $\\dfrac{${u[t].cat1.frac[0]}}{${u[t].cat1.frac[1]}}$`)}.<br>\n\t\t\t\t\t\n\t\t\t\t\t${(0,s.bk1)(tt++)} Pour ${u[t].cat2.destination} l'angle ${d(u[t].cat2.angle)}<br>\t\t\t\t\n\t\t\t\t\t${(0,s.pRK)(`La fraction qui représente les ${u[t].nom_enonce} vers ${u[t].cat2.destination} vaut donc $\\dfrac{${u[t].cat2.frac[0]}}{${u[t].cat2.frac[1]}}$`)}<br>\n\n\t\t\t\t\t${(0,s.bk1)(tt++)} Calculons $\\dfrac{${u[t].cat3.frac[0]}}{${u[t].cat3.frac[1]}}$ de ${u[t].nb_total} :<br> \n\t\t\t\t\t$\\dfrac{${u[t].cat3.frac[0]}}{${u[t].cat3.frac[1]}}\\times ${u[t].nb_total} = \\dfrac{${u[t].cat3.frac[0]}\\times ${u[t].nb_total}}{${u[t].cat3.frac[1]}} = \\dfrac{${u[t].cat3.frac[0]}\\times ${(0,s.n0o)(u[t].nb_total/u[t].cat3.frac[1])}\\times ${u[t].cat3.frac[1]}}{${u[t].cat3.frac[1]}} = \\dfrac{${u[t].cat3.frac[0]}\\times ${(0,s.n0o)(u[t].nb_total/u[t].cat3.frac[1])}\\times \\cancel{${u[t].cat3.frac[1]}}}{\\cancel{${u[t].cat3.frac[1]}}} = ${u[t].cat3.frac[0]}\\times ${(0,s.n0o)(u[t].nb_total/u[t].cat3.frac[1])} = ${(0,s.n0o)(u[t].nb_total/u[t].cat3.frac[1])}$<br>\n\t\t\t\t\t${(0,s.pRK)(`${u[t].last_question[3]} vers ${u[t].cat3.destination} vaut donc ${(0,s.n0o)(u[t].nb_total/u[t].cat3.frac[1])}.`)}\n\t\t\t\t\t`});switch(e[a]){case 0:t=`${Y[0].enonce}`,this.debug?(t+="<br>",t+=`<br> =====CORRECTION======<br>${Y[0].correction}`,t+="             ",n=""):n=`${Y[0].correction}`}-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(n),a++),i++}(0,s.K1R)(this)}}},17007:(t,e,n)=>{function a(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let n="";for(const a of e)void 0!==a&&(n+=a.toString());return!(this.listeArguments.indexOf(n)>-1)&&(this.listeArguments.push(n),!0)}}n.r(e),n.d(e,{default:()=>a})}}]);
//# sourceMappingURL=74839.bfc7d1a2b640119572e7.js.map