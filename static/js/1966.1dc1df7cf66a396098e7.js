(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1966,5216],{51966:(e,i,t)=>{"use strict";t.r(i),t.d(i,{amcReady:()=>o,amcType:()=>r,titre:()=>c,default:()=>$});var n=t(75216),s=t(89459),a=t(44393),l=t(55339);const o=!1,r=5,c="Calculer un angle dans un triangle rectangle en utilisant la trigonométrie";function $(){n.default.call(this),this.titre=c,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=!1,this.correctionDetailleeDisponible=!0,this.correctionDetaillee=!1,s.Do.isHtml?(this.spacing=0,this.spacingCorr=0):(this.spacing=2,this.spacingCorr=2),this.nouvelleVersion=function(){let e,i;this.listeQuestions=[],this.listeCorrections=[],4!=this.level?this.qcm=["3G31",[],"Calculs d'angle avec la trigonométrie",5]:this.qcm=["4G41",[],"Calculs d'angle avec la trigonométrie",5],e=this.sup?"<br>":"",i=this.correctionDetaillee?"<br>":"";let t,n,o,r,c,$=(0,l.wnJ)(3),h="",b="",m=[],d=[];switch(t=4==this.level?(0,l.q$q)(["Acos"]):(0,l.q$q)(["Acos","Asin","Atan"]),c=(0,l.nSR)(35,55),!s.Do.isHtml&&this.sup&&(h+="\\begin{minipage}{.6\\linewidth}\n"),t){case"Acos":o=(0,l.vbX)((0,l.nSR)(100,150)/10,1),n=(0,l.vbX)((0,l.nSR)(40,10*(o-2))/10,1),c=Math.round(180*Math.acos(n/o)/Math.PI),r=(0,l.vbX)((0,l.n0o)(o*Math.sin(Math.acos(n/o))),1),h+=`Dans le triangle $${$}$ rectangle en $${$[0]}$,${e} $${$[1]+$[2]}=${(0,l.Pbm)(o)}$ cm et $${$[0]+$[1]}=${(0,l.Pbm)(n)}$ cm.<br>`,h+=`Calculer $\\widehat{${$}}$ à $1 \\degree$ près.`;break;case"Asin":o=(0,l.nSR)(100,150)/10,r=(0,l.nSR)(40,10*(o-2))/10,c=Math.round(180*Math.asin(r/o)/Math.PI),n=(0,l.n0o)(o*Math.cos(Math.asin(r/o))),h+=`Dans le triangle $${$}$ rectangle en $${$[0]}$,${e} $${$[1]+$[2]}=${(0,l.Pbm)(o)}$ cm et $${$[0]+$[2]}=${(0,l.Pbm)(r)}$ cm.<br>`,h+=`Calculer $\\widehat{${$}}$ à $1 \\degree$ près.`;break;case"Atan":n=(0,l.nSR)(40,100)/10,r=(0,l.nSR)(40,100)/10,c=Math.round(180*Math.atan(r/n)/Math.PI),o=(0,l.n0o)(n/Math.cos(Math.atan(r/n))),h+=`Dans le triangle $${$}$ rectangle en $${$[0]}$,${e} $${$[0]+$[1]}=${(0,l.Pbm)(n)}$ cm et  $${$[0]+$[2]}=${(0,l.Pbm)(r)}$ cm.<br>`,h+=`Calculer $\\widehat{${$}}$ à $1 \\degree$ près.`}!s.Do.isHtml&&this.sup&&(h+="\n\\end{minipage}\n");let u=(0,l.nSR)(80,120,100)/100,p=(0,a.xmu)(0,0),g=(0,a.xmu)(n*u,0),x=(0,a.xmu)(n,0),P=(0,a.xmu)(0,r/u),f=(0,a.xmu)(0,r),w=(0,a.R_h)(p,g,P),C=(0,a.R_h)(p,x,f),M=(0,l.nSR)(0,360),k=(0,a.Wnp)(w,p,M),D=(0,a.Wnp)(C,p,M),q=k.listePoints[0],A=k.listePoints[1],v=k.listePoints[2],j=D.listePoints[1],y=D.listePoints[2],H=(0,a.lvA)(A,q,v),Q=(0,a.lvA)(j,q,y);q.nom=$[0],A.nom=$[1],v.nom=$[2];let I,L,R=(0,a.NVL)(k,$),T=(0,a.NVL)(D,$),S=(0,a.EXn)(y,j);S.epaisseur=2,S.color="blue",I=(0,a.QSb)(q,A,v,2),L=(0,a.QSb)(q,j,y,2);let N,F=(0,a.Q2H)(q,A),V=(0,a.Q2H)(q,v),E=(0,a.Q2H)(A,v),X=(0,a.NEH)(k),G=(0,a.Q2H)(q,j),W=(0,a.Q2H)(q,y),_=(0,a.Q2H)(j,y),J=(0,a.NEH)(D),K=(0,a.xcw)(E,X,1+1.5/(0,a.InT)(X,E)),O=(0,a.xcw)(F,E,1+1.5/(0,a.InT)(E,F)),z=(0,a.xcw)(V,E,1+1.5/(0,a.InT)(E,V));O.positionLabel="center",z.positionLabel="center",K.positionLabel="center";let B,U,Y,Z,ee,ie,te,ne=(0,a.xcw)(_,J,1+1.5/(0,a.InT)(J,_)),se=(0,a.xcw)(G,_,1+1.5/(0,a.InT)(_,G)),ae=(0,a.xcw)(W,_,1+1.5/(0,a.InT)(_,W));switch(se.positionLabel="center",ae.positionLabel="center",ne.positionLabel="center",t){case"Acos":Z=(0,a.d8j)(`${(0,l.Pbm)(o)} \\text{ cm}`,K,"black",120,12,""),Y=(0,a.d8j)(`${(0,l.Pbm)(n)} \\text{ cm}`,O,"black",120,12,""),N=(0,a.xcw)(X,A,2.7/(0,a.InT)(A,X)),N.positionLabel="center",U=(0,a.d8j)("?",N,"black",50,12,""),te=(0,a.d8j)(`${(0,l.Pbm)(o)} \\text{ cm}`,ne,"black",120,12,""),ie=(0,a.d8j)(`${(0,l.Pbm)(n)} \\text{ cm}`,se,"black",120,12,""),B=(0,a.xcw)(J,j,2.7/(0,a.InT)(j,J)),B.positionLabel="center",ee=(0,a.d8j)("?",B,"black",50,12,"");break;case"Asin":Z=(0,a.d8j)(`${(0,l.Pbm)(o)} \\text{ cm}`,K,"black",120,12,""),Y=(0,a.d8j)(`${(0,l.Pbm)(r)} \\text{ cm}`,z,"black",120,12,""),N=(0,a.xcw)(X,A,2.7/(0,a.InT)(A,X)),N.positionLabel="center",U=(0,a.d8j)("?",N,"black",100,12,""),te=(0,a.d8j)(`${(0,l.Pbm)(o)} \\text{ cm}`,ne,"black",120,12,""),ie=(0,a.d8j)(`${(0,l.Pbm)(r)} \\text{ cm}`,ae,"black",120,12,""),B=(0,a.xcw)(J,j,2.7/(0,a.InT)(j,J)),B.positionLabel="center",ee=(0,a.d8j)("?",B,"black",100,12,"");break;case"Atan":U=(0,a.d8j)(`${(0,l.Pbm)(n)} \\text{ cm}`,O,"black",120,12,""),Y=(0,a.d8j)(`${(0,l.Pbm)(r)} \\text{ cm}`,z,"black",120,12,""),N=(0,a.xcw)(X,A,2.7/(0,a.InT)(A,X)),N.positionLabel="center",Z=(0,a.d8j)("?",N,"black",100,12,""),ee=(0,a.d8j)(`${(0,l.Pbm)(n)} \\text{ cm}`,se,"black",120,12,""),ie=(0,a.d8j)(`${(0,l.Pbm)(r)} \\text{ cm}`,ae,"black",120,12,""),B=(0,a.xcw)(J,j,2.7/(0,a.InT)(j,J)),B.positionLabel="",te=(0,a.d8j)("?",B,"black",100,12,"")}m.push(k,H,R,U,Y,Z,I),d.push(D,Q,T,ee,ie,te,S,L);let le={xmin:Math.min(q.x,A.x,v.x)-4,ymin:Math.min(q.y,A.y,v.y)-4,xmax:Math.max(q.x,A.x,v.x)+3,ymax:Math.max(q.y,A.y,v.y)+2,pixelsParCm:17,scale:.37,mainlevee:!0,amplitude:.4},oe={xmin:Math.min(q.x,A.x,v.x)-4,ymin:Math.min(q.y,A.y,v.y)-4,xmax:Math.max(q.x,A.x,v.x)+3,ymax:Math.max(q.y,A.y,v.y)+2,pixelsParCm:20,scale:.5,mainlevee:!1};switch(!s.Do.isHtml&&this.sup&&(h+="\\begin{minipage}{.4\\linewidth}\n"),this.sup&&(h+=(0,a.iR9)(le,m)+"<br>"),this.correctionDetaillee&&(s.Do.isHtml||(b+="\\begin{minipage}{.5\\linewidth}\n"),b+=(0,a.iR9)(oe,d)+"<br>",s.Do.isHtml||(b+="\n\\end{minipage}\n")),!s.Do.isHtml&&this.sup&&(h+="\n\\end{minipage}\n"),this.correctionDetaillee&&!s.Do.isHtml&&(b+="\\begin{minipage}{.5\\linewidth}\n"),t){case"Acos":b+=`Dans le triangle $${$}$ rectangle en $${$[0]}$, ${i}le cosinus de l'angle $\\widehat{${$}}$ est défini par :<br>`,b+=`$\\cos\\left(\\widehat{${$}}\\right)=\\dfrac{${$[0]+$[1]}}{${$[1]+$[2]}}$.<br>`,b+="Avec les données numériques :<br>",b+=`$\\cos\\left(\\widehat{${$}}\\right)=${(0,l.qaf)((0,l.Pbm)(n),(0,l.Pbm)(o))}$<br>`,b+=`$\\widehat{${$}}=\\arccos(${(0,l.qaf)((0,l.Pbm)(n),(0,l.Pbm)(o))})\\approx ${c}\\degree$<br>`;break;case"Asin":b+=`Dans le triangle $${$}$ rectangle en $${$[0]}$ ${i},le sinus de l'angle $\\widehat{${$}}$ est défini par :<br>`,b+=`$\\sin \\left(\\widehat{${$}}\\right)=${(0,l.qaf)($[0]+$[2],$[1]+$[2])}$<br>`,b+="Avec les données numériques :<br>",b+=`$\\sin\\left(\\widehat{${$}}\\right)=${(0,l.qaf)((0,l.Pbm)(r),(0,l.Pbm)(o))}$<br>`,b+=`$\\widehat{${$}}=\\arcsin(${(0,l.qaf)((0,l.Pbm)(r),(0,l.Pbm)(o))})\\approx ${c}\\degree$<br>`;break;case"Atan":b+=`Dans le triangle $${$}$ rectangle en $${$[0]}$, ${i}la tangente de l'angle $\\widehat{${$}}$ est défini par :<br>`,b+=`$\\tan \\left(\\widehat{${$}}\\right)=${(0,l.qaf)($[0]+$[2],$[0]+$[1])}$<br>`,b+="Avec les données numériques :<br>",b+=`$\\tan\\left(\\widehat{${$}}\\right)=${(0,l.qaf)((0,l.Pbm)(r),(0,l.Pbm)(n))}$<br>`,b+=`$\\widehat{${$}}=\\arctan\\left(${(0,l.qaf)((0,l.Pbm)(r),(0,l.Pbm)(n))}\\right) \\approx ${c} \\degree $ <br>`,console.log(b)}this.correctionDetaillee&&!s.Do.isHtml&&(b+="\n\\end{minipage}\n"),this.qcm[1][0]=[h,[b,c,4],{digits:2,decimals:0,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:1}],this.listeQuestions.push(h),this.listeCorrections.push(b),(0,l.K1R)(this)},this.besoinFormulaireCaseACocher=["Figure à main levée",!1]}},75216:(e,i,t)=>{"use strict";function n(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>n})}}]);
//# sourceMappingURL=1966.1dc1df7cf66a396098e7.js.map