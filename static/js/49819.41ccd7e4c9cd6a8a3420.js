"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[49819],{49819:(e,t,s)=>{s.r(t),s.d(t,{titre:()=>c,default:()=>p});var i=s(71250),o=s(22380),l=s(25482),a=s(13898),n=s(93661),r=s(25523);const c="Exercice de repérage dans un pavé droit";function p(){r.default.call(this),this.titre=c,this.consigne="Placer les points sur le pavé ci-dessous dans le repère $\\bm{(A;I;J;K)}$ : ",this.nbQuestions=3,this.nbQuestionsModifiable=!1,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.introduction="";const e=12,t=12,s=12;3===parseInt(this.sup)?(o.Do.anglePerspective=60,o.Do.coeffPerspective=.4):2===parseInt(this.sup)?(o.Do.anglePerspective=45,o.Do.coeffPerspective=.3):1===parseInt(this.sup)&&(o.Do.anglePerspective=30,o.Do.coeffPerspective=.4);const r=(0,n.Ut)(0,0,0,!0,"A","below left"),c=(0,n.Ut)(t,0,0,!0,"B","below right"),p=(0,n.Ut)(t,s,0,!0,"C","above right"),h=(0,n.Ut)(0,s,0,!0,"D","above left"),u=(0,n.Ut)(0,0,e,!0,"E","above left"),b=(0,n.Ut)(t,0,e,!0,"F","above right"),d=(0,n.Ut)(t,s,e,!0,"G","above right"),f=(0,n.Ut)(0,s,e,!0,"H","above left"),U=[];let g=(0,l.nSR)(2,4),v=(0,l.nSR)(2,3),$=(0,l.nSR)(2,4);for(;g>=3&&v>=3;)g=(0,l.nSR)(2,5),v=(0,l.nSR)(2,3,g),$=(0,l.nSR)(2,5,[g,v]);const m=t/g,x=s/v,D=e/$,k=(0,n.Ut)(m,0,0,!0,"I","below right"),O=(0,n.Ut)(0,x,0,!1,"J","left"),P=(0,n.Ut)(0,0,D,!0,"K","left");U.push((0,i.BD1)(r,c,p,h,u,b,d,f,k,O,P));for(let i=0;i<=v;i++)for(let e,s,o,l=0;l<=$;l++)e=(0,n.Ut)(0,i*x,l*D),s=(0,n.Ut)(t,i*x,l*D),o=0===i||l===$?(0,n.O7)(e,s,"black",!0):(0,n.O7)(e,s,"black",!1),U.push(o.c2d);for(let i=0;i<=g;i++)for(let e,t,o,l=0;l<=$;l++)e=(0,n.Ut)(i*m,0,l*D),t=(0,n.Ut)(i*m,s,l*D),o=i===g||l===$?(0,n.O7)(e,t,"black",!0):(0,n.O7)(e,t,"black",!1),U.push(o.c2d);for(let i,o,l,a=0;a<=g;a++)i=(0,n.Ut)(a*m,0,0),o=(0,n.Ut)(a*m,0,e),l=(0,n.O7)(i,o,"black",!0),U.push(l.c2d),i=(0,n.Ut)(a*m,s,0),o=(0,n.Ut)(a*m,s,e),l=a<g?(0,n.O7)(i,o,"black",!1):(0,n.O7)(i,o,"black",!0),U.push(l.c2d);for(let i,o,l,a=1;a<v;a++)i=(0,n.Ut)(0,a*x,0),o=(0,n.Ut)(0,a*x,e),l=(0,n.O7)(i,o,"black",!1),U.push(l.c2d),i=(0,n.Ut)(t,a*x,0),o=(0,n.Ut)(t,a*x,e),l=(0,n.O7)(i,o,"black",!0),U.push(l.c2d);for(let R,y,S,C,w,Q,G,I,A,B,K,M,E=0,F=0;E<this.nbQuestions&&F<50;){for(G=0,I=0,A=0;0===G&&0===I&&0===A;)G=(0,l.nSR)(0,g),I=(0,l.nSR)(0,v),A=(0,l.nSR)(0,$);S=[G,I,A],R=`Placer le point $${(0,l.Gag)(E+12)}$ de coordonnées $(${S[0]};${S[1]};${S[2]})$.`,K=(0,n.Ut)(S[0]*m,S[1]*x,S[2]*D,(0,l.Gag)(E+12),`${(0,l.Gag)(E+12)}`,"below right"),C=(0,n.O7)(r,(0,n.Ut)(K.x,0,0),"blue",!0),w=(0,n.O7)((0,n.Ut)(K.x,0,0),(0,n.Ut)(K.x,K.y,0),"orange",!0),Q=(0,n.O7)((0,n.Ut)(K.x,K.y,0),K,"red",!0),C.c2d.epaisseur=3,w.c2d.epaisseur=3,Q.c2d.epaisseur=3,B=(0,i.L6P)(K),B.epaisseur=2,B.color="red",B.taille=6,M=[C.c2d,w.c2d,Q.c2d,B,(0,i.BD1)(K)].concat(U),y=(0,i.iR9)({xmin:-1,xmax:13+s*Math.cos((0,a.uR)(o.Do.anglePerspective)),ymin:-1,ymax:e+s*o.Do.coeffPerspective*(0,a.O$)(o.Do.anglePerspective),style:"display: block; margin-top:20px;"},M),y+=`<br>$${(0,l.Gag)(E+12)}$ de coordonnées $(${(0,l.b1)(S[0],"blue")};${(0,l.b1)(S[1],"orange")};${(0,l.b1)(S[2],"red")})$.`,-1===this.listeQuestions.indexOf(R)&&(this.listeQuestions.push(R),this.listeCorrections.push(y),E++),F++}this.introduction=(0,i.iR9)({xmin:-1,xmax:13+s*Math.cos((0,a.uR)(o.Do.anglePerspective)),ymin:-1,ymax:e+s*o.Do.coeffPerspective*(0,a.O$)(o.Do.anglePerspective),style:"display: block; margin-top:20px;"},U),(0,l.K1R)(this)},this.besoinFormulaireNumerique=["Angle de la perspective",3,"1 : 30°\n2 : 45°\n3 : 60°"]}}}]);
//# sourceMappingURL=49819.41ccd7e4c9cd6a8a3420.js.map