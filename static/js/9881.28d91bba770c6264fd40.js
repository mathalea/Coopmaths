(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9881,6969],{29881:(e,i,a)=>{"use strict";a.r(i),a.d(i,{default:()=>l});var s=a(44393),r=a(66969),n=a(55339);function l(){r.default.call(this),this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,sortieHtml?this.spacingCorr=2.5:this.spacingCorr=1.5,this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[];const i=[],a=[],r=[[5,5,4,0,4,4,0,4,30,0],[5,5,6,0,8,8,0,6,60,-9],[5,5,8,0,4,4,2,8,50,0],[5,5,4,0,6,4,0,6,50,5],[4,6,8,0,7,4,-1,4,50,10],[5,5,8,0,4,4,0,8,50,0],[5,5,4,0,3,2*Math.sin(Math.PI/3),2,4*Math.sin(Math.PI/3),20,0],[4,4,3,1,4,4,1,3,20,0]],l=[];let t,o,u,m,p,c,d,g,R,b,f,h,$,x,k,D,y,S,P,C,L,q,H,v,Q,B,E,M,U,N,T,_="",W="";const z=[],F=[],A=[],I=[];let G,V=[];switch(parseInt(this.sup)){case 1:G=0;break;case 2:G=(0,n.nSR)(0,7),console.log(G);break;case 3:G=(0,n.nSR)(0,7);break;case 4:G=0}V=r[G];const X=V[0],w=V[1];let K=V[2],Z=V[3],j=V[4],J=V[5],O=V[6],Y=V[7];const ee=V[8],ie=V[9],ae=(0,s.xmu)(0,0);0!=G&&6!=G&&7!=G?(U=(0,s.$7o)((0,s.xmu)(K,Z),ae,ie,22/ee),N=(0,s.$7o)((0,s.xmu)(j,J),ae,ie,22/ee),T=(0,s.$7o)((0,s.xmu)(O,Y),ae,ie,22/ee),K=U.x,Z=U.y,j=N.x,J=N.y,O=T.x,Y=T.y):(U=(0,s.xmu)(K,Z),N=(0,s.xmu)(j,J),T=(0,s.xmu)(O,Y)),t=(0,s.R_h)(ae,U,N,T);const se=K+j-O,re=Z+J-Y,ne=(0,s.Q2H)(U,N),le=(0,s.Q2H)(T,N),te=j+O-K,oe=J+Y-Z;let ue,me,pe,ce,de,ge,Re,be,fe,he,$e,xe,ke,De,ye,Se=[0,0,0],Pe=!1,Ce=0,Le=0,qe=0,He=0,ve=0,Qe=0,Be=0,Ee=0,Me=0,Ue=0,Ne=0,Te=0,_e=0,We=0,ze=0,Fe=0,Ae=0,Ie=0;const Ge=(0,n.q$q)(["S","T","L","W","R","G","E","F","G","K"]),Ve=(0,n.q$q)(["S","T","L","W","R","G","E","F","G","K"],[Ge]),Xe=(0,n.q$q)(["S","T","L","W","R","G","E","F","G","K"],[Ge,Ve]),we=Math.min(-1,w*te),Ke=Math.max(X*se+1,X*se+w*te+1),Ze=Math.min(-1,X*re),je=Math.max(X*re+w*oe+1,w*oe+1);for(let n=0;n<w;n++)for(let e=0;e<X;e++)ue=e*se+n*te,me=e*re+n*oe,pe=2*e+4*n*X,z.push([ue,me,pe]),l[pe]=(0,s.xkU)((0,s.R_h)(ae,U,N,T),(0,s.tno)(ue,me)),F.push([ue+K,me+Z,pe+1]),l[pe+1]=(0,s.xkU)((0,s.Wnp)((0,s.R_h)(ae,U,N,T),ne,180),(0,s.tno)(ue,me)),I.push([ue+O,me+Y,pe+2*X]),l[pe+2*X]=(0,s.xkU)((0,s.Wnp)((0,s.R_h)(ae,U,N,T),le,180),(0,s.tno)(ue,me)),A.push([ue+j,me+J,pe+2*X+1]),l[pe+2*X+1]=(0,s.xkU)((0,s.xkU)((0,s.R_h)(ae,U,N,T),(0,s.tno)(ae,N)),(0,s.tno)(ue,me));for(let n=0;n<l.length;n++)i.push(l[n],(0,s.QNZ)(n,(0,s.NEH)(l[n],"","center"),"milieu","black",1,"middle",!1)),a.push(l[n],(0,s.QNZ)(n,(0,s.NEH)(l[n],"","center"),"milieu","black",1,"middle",!1));switch(mathalea.fenetreMathalea2d=[we,Ze,Ke,je],parseInt(this.sup)){case 1:ce=(0,n.nSR)(0,X*w-1),de=z[ce][2];let r=(0,n.nSR)(0,X*w-1,[ce]);for(Ce=I[r][0],Le=I[r][1],Se=(0,n.aa3)(2,[z[ce][0],z[ce][1]],[Ce,Le]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],A[e][0],.001)&&(0,n.h$R)(Se[1],A[e][1],.001)){Pe=!0,ke=z[e][2],Ne=z[ce][0],Te=z[ce][1],p=(0,s.nP0)((0,s.xmu)(Ne,Te),(0,s.xmu)(Se[0],Se[1]),"(d_1)"),p.color="green",p.epaisseur=2,p.isVisible=!0,l[de].couleurDeRemplissage="green",l[de].opaciteDeRemplissage=.6;break}0==Pe&&(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],r=(0,n.nSR)(0,X*w-1,[ce]),Ce=I[r][0],Le=I[r][1],Se=(0,n.aa3)(2,[z[ce][0],z[ce][1]],[Ce,Le]))}_=(0,n.bk1)(0)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${de} dans la symétrie par rapport à $(d_1)$ ?<br>`,"green"),W=(0,n.bk1)(0)+(0,n.PH8)(` La figure symétrique de la figure ${de} dans la symétrie par rapport à $(d_1)$ porte le numéro ${ke}.<br>`,"green"),Re=(0,n.nSR)(0,X*w-1),be=I[Re][2];let t=(0,n.nSR)(0,X*w-1,[Re]);for(qe=z[t][0],He=z[t][1],Se=(0,n.aa3)(1,[I[Re][0],I[Re][1]],[qe,He]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],F[e][0],.001)&&(0,n.h$R)(Se[1],F[e][1],.001)){Pe=!0,De=F[e][2],Me=I[Re][0],Ue=I[Re][1]-4,i.push((0,s.L6P)((0,s.xmu)(Me,Ue),(0,s.xmu)(Se[0],Se[1]))),c=(0,s.nP0)((0,s.xmu)(Me,Ue+4),(0,s.xmu)(Se[0],Se[1]),"(d_2)"),c.color="red",c.epaisseur=2,c.isVisible=!0,l[be].couleurDeRemplissage="red",l[be].opaciteDeRemplissage=.6;break}0==Pe&&(Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],t=(0,n.nSR)(0,X*w-1,[Re]),qe=z[t][0],He=z[t][1],Se=(0,n.aa3)(1,[I[Re][0],I[Re][1]],[qe,He]))}_+=(0,n.bk1)(1)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${be} dans la symétrie par rapport à $(d_2)$ ?<br>`,"red"),W+=(0,n.bk1)(1)+(0,n.PH8)(` La figure symétrique de la figure ${be} dans la symétrie par rapport à $(d_2)$ porte le numéro ${De}.<br>`,"red"),he=(0,n.nSR)(0,X*w-1),$e=A[he][2];const U=5*(0,n.nSR)(0,4,Math.floor(he/5));for(ve=A[U][0],Qe=A[U][1],Se=(0,n.aa3)(3,[A[he][0],A[he][1]],[ve,Qe]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],A[e][0],.001)&&(0,n.h$R)(Se[1],A[e][1],.001)){Pe=!0,ye=F[e][2],Be=A[he][0],Ee=A[he][1],d=(0,s.nP0)((0,s.xmu)(Be,Ee),(0,s.xmu)(Se[0],Se[1]),"(d_3)"),d.color="blue",d.epaisseur=2,d.isVisible=!0,l[$e].couleurDeRemplissage="blue",l[$e].opaciteDeRemplissage=.6;break}if(0==Pe){he=(0,n.nSR)(0,X*w-1),$e=A[he][2];const e=5*(0,n.nSR)(0,4,Math.floor(he/5));ve=A[e][0],Qe=A[e][1],Se=(0,n.aa3)(3,[A[he][0],A[he][1]],[ve,Qe])}}_+=(0,n.bk1)(2)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${$e} dans la symétrie par rapport à $(d_3)$ ?<br>`,"blue"),W+=(0,n.bk1)(2)+(0,n.PH8)(` La figure symétrique de la figure ${$e} dans la symétrie par rapport à $(d_3)$ porte le numéro ${ye}.<br>`,"blue"),i.push(p,c,d),a.push(p,c,d,(0,s.lhN)(l[de],p,`id="anim${e}A" dur ="2s" repeatcount="1"`),(0,s.lhN)(l[be],c,`id="anim${e}B" dur="2s" repeatcount="1"`),(0,s.lhN)(l[$e],d,`id="anim${e}C" dur="2s" repeatcount="1"`)),_+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},i),o=(0,s.xkU)(l[ke],(0,s.tno)(0,0)),o.couleurDeRemplissage="green",o.opaciteDeRemplissage=.3,u=(0,s.xkU)(l[De],(0,s.tno)(0,0)),u.couleurDeRemplissage="red",u.opaciteDeRemplissage=.3,m=(0,s.xkU)(l[ye],(0,s.tno)(0,0)),m.couleurDeRemplissage="blue",m.opaciteDeRemplissage=.3,a.push(o,u,m),W+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},a);break;case 2:for(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],ge=(0,n.nSR)(0,X*w-1,ce),Ce=(K+j)/2+F[ge][0]-K,Le=(Z+J)/2+F[ge][1]-Z,Se=(0,n.aa3)(7,[A[ce][0],A[ce][1]],[Ce,Le]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],F[e][0],.001)&&(0,n.h$R)(Se[1],F[e][1],.001)){Pe=!0,ke=F[e][2],Ne=z[ce][0],Te=z[ce][1],g=(0,s.xmu)(Ce,Le,Ge,"left"),l[de].couleurDeRemplissage="green",l[de].opaciteDeRemplissage=.6;break}!1===Pe&&(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],ge=(0,n.nSR)(0,X*w-1,ce),Ce=(K+j)/2+F[ge][0]-K,Le=(Z+J)/2+F[ge][1]-Z,Se=(0,n.aa3)(7,[A[ce][0],A[ce][1]],[Ce,Le]))}for(_+=(0,n.bk1)(0)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${de} dans la symétrie par rapport à ${Ge} ?<br>`,"green"),W=(0,n.bk1)(0)+(0,n.PH8)(` La figure symétrique de la figure ${de} dans la symétrie par rapport à ${Ge} porte le numéro ${ke}.<br>`,"green"),Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],fe=(0,n.nSR)(0,X*w-1,[Re]),qe=(O+j)/2+I[fe][0]-O,He=(Y+J)/2+I[fe][1]-Y,Se=(0,n.aa3)(7,[I[Re][0],I[Re][1]],[qe,He]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],A[e][0],.001)&&(0,n.h$R)(Se[1],A[e][1],.001)){Pe=!0,De=z[e][2],Me=z[Re][0],Ue=z[Re][1],R=(0,s.xmu)(qe,He,Ve,"left"),l[be].couleurDeRemplissage="red",l[be].opaciteDeRemplissage=.6;break}0==Pe&&(Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],fe=(0,n.nSR)(0,X*w-1,[Re]),qe=(O+j)/2+I[fe][0]-O,He=(Y+J)/2+I[fe][1]-Y,Se=(0,n.aa3)(7,[I[Re][0],I[Re][1]],[qe,He]))}for(_+=(0,n.bk1)(1)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${be} dans la symétrie par rapport à ${Ve} ?<br>`,"red"),W+=(0,n.bk1)(1)+(0,n.PH8)(` La figure symétrique de la figure ${be} dans la symétrie par rapport à ${Ve} porte le numéro ${De}.<br>`,"red"),he=(0,n.nSR)(0,X*w-1),$e=A[he][2],xe=(0,n.nSR)(0,X*w-1,[he]),ve=O/2+A[xe][0],Qe=Y/2+A[xe][1],Se=(0,n.aa3)(7,[A[he][0]+j,A[he][1]+J],[ve,Qe]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],I[e][0],.001)&&(0,n.h$R)(Se[1],I[e][1],.001)){Pe=!0,ye=I[e][2],Be=z[he][0],Ee=z[he][1],b=(0,s.xmu)(ve,Qe,Xe,"left"),l[$e].couleurDeRemplissage="blue",l[$e].opaciteDeRemplissage=.6;break}0==Pe&&(he=(0,n.nSR)(0,X*w-1),$e=A[he][2],xe=(0,n.nSR)(0,X*w-1,[he]),ve=O/2+A[xe][0],Qe=Y/2+A[xe][1],Se=(0,n.aa3)(7,[A[he][0]+j,A[he][1]+J],[ve,Qe]))}_+=(0,n.bk1)(2)+(0,n.PH8)(` Quel est le numéro de la figure symétrique de la figure ${$e} dans la symétrie par rapport à ${Xe} ?<br>`,"blue"),W+=(0,n.bk1)(2)+(0,n.PH8)(` La figure symétrique de la figure ${$e} dans la symétrie par rapport à ${Xe} porte le numéro ${ye}.<br>`,"blue"),i.push((0,s.L6P)(g),(0,s.L6P)(R),(0,s.L6P)(b),(0,s.BD1)(g),(0,s.BD1)(R),(0,s.BD1)(b)),a.push((0,s.L6P)(g),(0,s.L6P)(R),(0,s.L6P)(b),(0,s.BD1)(g),(0,s.BD1)(R),(0,s.BD1)(b),(0,s.L5i)(l[de],g,180,`id="anim${e}A" dur ="2s" repeatcount="1"`),(0,s.L5i)(l[be],R,180,`id="anim${e}B" dur="2s" repeatcount="1"`),(0,s.L5i)(l[$e],b,180,`id="anim${e}C" dur="2s" repeatcount="1"`)),_+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},i),o=(0,s.xkU)(l[ke],(0,s.tno)(0,0)),o.couleurDeRemplissage="green",o.opaciteDeRemplissage=.3,u=(0,s.xkU)(l[De],(0,s.tno)(0,0)),u.couleurDeRemplissage="red",u.opaciteDeRemplissage=.3,m=(0,s.xkU)(l[ye],(0,s.tno)(0,0)),m.couleurDeRemplissage="blue",m.opaciteDeRemplissage=.3,f=(0,s.Nb1)((0,s.xmu)(z[ce][0],z[ce][1]),g,180),x=(0,s.EXn)((0,s.xmu)(z[ce][0],z[ce][1]),g),k=(0,s.Wnp)(x,g,180),x.pointilles=2,k.pointilles=2,f.pointilles=2,h=(0,s.Nb1)((0,s.xmu)(I[Re][0],I[Re][1]),R,180),D=(0,s.EXn)((0,s.xmu)(I[Re][0],I[Re][1]),R),y=(0,s.Wnp)(D,R,180),D.pointilles=2,y.pointilles=2,h.pointilles=2,$=(0,s.Nb1)((0,s.xmu)(A[he][0],A[he][1]),b,180),S=(0,s.EXn)((0,s.xmu)(A[he][0],A[he][1]),b),P=(0,s.Wnp)(S,b,180),S.pointilles=2,P.pointilles=2,$.pointilles=2,a.push(o,u,m,f,h,$,x,k,D,y,S,P),W+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},a);break;case 3:let N,T,G,V,ee,ie;for(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],N=(0,n.nSR)(0,X*w-1),T=(0,n.nSR)(0,X*w-1,[N]),_e=F[T][0]-F[N][0],We=F[T][1]-F[N][1],Se=(0,n.aa3)(8,[z[ce][0],z[ce][1]],[0,0],[_e,We]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],z[e][0],.001)&&(0,n.h$R)(Se[1],z[e][1],.001)){Pe=!0,ke=z[e][2],Ne=z[ce][0],Te=z[ce][1],B=(0,s.xmu)(F[N][0],F[N][1]),H=(0,s.tno)(B,(0,s.xmu)(F[T][0],F[T][1])),C=H.representant(B),C.color="green",C.epaisseur=2,C.pointilles=2,l[de].couleurDeRemplissage="green",l[de].opaciteDeRemplissage=.6;break}0==Pe&&(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],N=(0,n.nSR)(0,X*w-1),T=(0,n.nSR)(0,X*w-1,[N]),_e=F[T][0]-F[N][0],We=F[T][1]-F[N][1],Se=(0,n.aa3)(8,[z[ce][0],z[ce][1]],[0,0],[_e,We]))}for(_+=(0,n.bk1)(0)+(0,n.PH8)(` Dans la translation qui transforme la figure ${F[N][2]} en la figure ${F[T][2]} quelle est le numéro de l'image de la figure ${de} ?<br>`,"green"),W=(0,n.bk1)(0)+(0,n.PH8)(` La figure image de la figure ${de}  dans la translation qui transforme la figure ${F[N][2]} en la figure ${F[T][2]} porte le numéro ${ke}.<br>`,"green"),Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],V=(0,n.nSR)(0,X*w-1),ee=(0,n.nSR)(0,X*w-1,[V]),ze=z[ee][0]-A[V][0],Fe=z[ee][1]-A[V][1],Se=(0,n.aa3)(8,[I[Re][0],I[Re][1]],[0,0],[ze,Fe]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],F[e][0],.001)&&(0,n.h$R)(Se[1],F[e][1],.001)){Pe=!0,De=F[e][2],Me=I[Re][0],Ue=I[Re][1],E=(0,s.xmu)(A[V][0],A[V][1]),v=(0,s.tno)(E,(0,s.xmu)(z[ee][0],z[ee][1])),L=v.representant(E),L.color="red",L.epaisseur=2,L.pointilles=2,l[be].couleurDeRemplissage="red",l[be].opaciteDeRemplissage=.6;break}0==Pe&&(Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],V=(0,n.nSR)(0,X*w-1),ee=(0,n.nSR)(0,X*w-1,[V]),ze=z[ee][0]-A[V][0],Fe=z[ee][1]-A[V][1],Se=(0,n.aa3)(8,[I[Re][0],I[Re][1]],[0,0],[ze,Fe]))}for(_+=(0,n.bk1)(1)+(0,n.PH8)(` Dans la translation qui transforme la figure ${A[V][2]} en la figure ${z[ee][2]} quelle est le numéro de l'image de la figure ${be} ?<br>`,"red"),W+=(0,n.bk1)(1)+(0,n.PH8)(` La figure image de la figure ${be}  dans la translation qui transforme la figure ${A[V][2]} en la figure ${z[ee][2]} porte le numéro ${De}.<br>`,"red"),he=(0,n.nSR)(0,X*w-1),$e=A[he][2],ie=(0,n.nSR)(0,X*w-1),G=(0,n.nSR)(0,X*w-1,[ie]),Ae=z[G][0]-A[ie][0],Ie=z[G][1]-A[ie][1],Se=(0,n.aa3)(8,[A[he][0],A[he][1]],[0,0],[Ae,Ie]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],z[e][0],.001)&&(0,n.h$R)(Se[1],z[e][1],.001)){Pe=!0,ye=z[e][2],Be=A[he][0],Ee=A[he][1],M=(0,s.xmu)(A[ie][0],A[ie][1]),Q=(0,s.tno)(M,(0,s.xmu)(z[G][0],z[G][1])),q=Q.representant(M),q.color="blue",q.epaisseur=2,q.pointilles=2,l[$e].couleurDeRemplissage="blue",l[$e].opaciteDeRemplissage=.6;break}0==Pe&&(he=(0,n.nSR)(0,X*w-1),$e=A[he][2],ie=(0,n.nSR)(0,X*w-1),G=(0,n.nSR)(0,X*w-1,[ie]),Ae=z[G][0]-A[ie][0],Ie=z[G][1]-A[ie][1],Se=(0,n.aa3)(8,[A[he][0],A[he][1]],[0,0],[Ae,Ie]))}_+=(0,n.bk1)(2)+(0,n.PH8)(` Dans la translation qui transforme la figure ${A[ie][2]} en la figure ${z[G][2]} quelle est le numéro de l'image de la figure ${$e} ?<br>`,"blue"),W+=(0,n.bk1)(2)+(0,n.PH8)(` La figure image de la figure ${$e}  dans la translation qui transforme la figure ${A[ie][2]} en la figure ${z[G][2]} porte le numéro ${ye}.<br>`,"blue"),i.push(C,L,q),a.push(C,L,q,(0,s.nl3)(l[de],H,`id="anim${e}A" dur="2s" repeatcount="1"`),(0,s.nl3)(l[be],v,`id="anim${e}B" dur="2s" repeatcount="1"`),(0,s.nl3)(l[$e],Q,`id="anim${e}C" dur="2s" repeatcount="1"`)),_+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},i),o=(0,s.xkU)(l[ke],(0,s.tno)(0,0)),o.couleurDeRemplissage="green",o.opaciteDeRemplissage=.3,u=(0,s.xkU)(l[De],(0,s.tno)(0,0)),u.couleurDeRemplissage="red",u.opaciteDeRemplissage=.3,m=(0,s.xkU)(l[ye],(0,s.tno)(0,0)),m.couleurDeRemplissage="blue",m.opaciteDeRemplissage=.3,x=H.representant((0,s.xmu)(Ne,Te)),x.color="green",x.epaisseur=2,D=v.representant((0,s.xmu)(Me,Ue)),D.color="red",D.epaisseur=2,S=Q.representant((0,s.xmu)(Be,Ee)),S.color="blue",S.epaisseur=2,a.push(o,u,m,x,D,S),W+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},a);break;case 4:for(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],ge=(0,n.nSR)(0,X*w-1,[ce]),Ce=z[ge][0],Le=z[ge][1],Se=(0,n.aa3)(6,[F[ce][0],F[ce][1]],[Ce,Le]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],I[e][0],.001)&&(0,n.h$R)(Se[1],I[e][1],.001)){Pe=!0,ke=I[e][2],Ne=z[ce][0],Te=z[ce][1],g=(0,s.xmu)(Ce,Le,Ge,"left"),l[de].couleurDeRemplissage="green",l[de].opaciteDeRemplissage=.6;break}0==Pe&&(ce=(0,n.nSR)(0,X*w-1),de=z[ce][2],ge=(0,n.nSR)(0,X*w-1,[ce]),Ce=z[ge][0],Le=z[ge][1],Se=(0,n.aa3)(6,[F[ce][0],F[ce][1]],[Ce,Le]))}for(_+=(0,n.bk1)(0)+(0,n.PH8)(` Quel est le numéro de la figure image de la figure ${de} dans la rotation de centre ${Ge} et d'angle 90° dans le sens des aiguilles d'une montre ?<br>`,"green"),W=(0,n.bk1)(0)+(0,n.PH8)(` La figure image de la figure ${de} dans la rotation de centre ${Ge} et d'angle 90° dans le sens des aiguilles d'une montre porte le numéro ${ke}.<br>`,"green"),Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],fe=(0,n.nSR)(0,X*w-1,[Re]),qe=F[fe][0],He=F[fe][1],Se=(0,n.aa3)(5,[I[Re][0],I[Re][1]],[qe,He]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],4+A[e][0],.001)&&(0,n.h$R)(Se[1],A[e][1],.001)){Pe=!0,De=A[e][2],Me=z[Re][0],Ue=z[Re][1],R=(0,s.xmu)(qe,He,Ve,"left"),l[be].couleurDeRemplissage="red",l[be].opaciteDeRemplissage=.6;break}0==Pe&&(Re=(0,n.nSR)(0,X*w-1),be=I[Re][2],fe=(0,n.nSR)(0,X*w-1,[Re]),qe=F[fe][0],He=F[fe][1],Se=(0,n.aa3)(5,[I[Re][0],I[Re][1]],[qe,He]))}for(_+=(0,n.bk1)(1)+(0,n.PH8)(` Quel est le numéro de la figure image de la figure ${be} dans la rotation de centre ${Ve} et d'angle 90° dans le sens inverse des aiguilles d'une montre ?<br>`,"red"),W+=(0,n.bk1)(1)+(0,n.PH8)(` La figure image de la figure ${be} dans la rotation de centre ${Ve} et d'angle 90° dans le sens inverse des aiguilles d'une montre porte le numéro ${De}.<br>`,"red"),he=(0,n.nSR)(0,X*w-1),$e=A[he][2],xe=(0,n.nSR)(0,X*w-1,[he]),ve=F[xe][0],Qe=F[xe][1],Se=(0,n.aa3)(6,[A[he][0],A[he][1]],[ve,Qe]),Pe=!1;0==Pe;){for(let e=0;e<X*w;e++)if((0,n.h$R)(Se[0],I[e][0],.001)&&(0,n.h$R)(Se[1],4+I[e][1],.001)){Pe=!0,ye=I[e][2],Be=z[he][0],Ee=z[he][1],b=(0,s.xmu)(ve,Qe,Xe,"left"),l[$e].couleurDeRemplissage="blue",l[$e].opaciteDeRemplissage=.6;break}0==Pe&&(he=(0,n.nSR)(0,X*w-1),$e=A[he][2],xe=(0,n.nSR)(0,X*w-1,[he]),ve=F[xe][0],Qe=F[xe][1],Se=(0,n.aa3)(6,[A[he][0],A[he][1]],[ve,Qe]))}_+=(0,n.bk1)(2)+(0,n.PH8)(` Quel est le numéro de la figure image de la figure ${$e} dans la rotation de centre ${Xe} et d'angle 90° dans le sens des aiguilles d'une montre ?<br>`,"blue"),W+=(0,n.bk1)(2)+(0,n.PH8)(` La figure image de la figure ${$e} dans la rotation de centre ${Xe} et d'angle 90° dans le sens des aiguilles d'une montre porte le numéro ${ye}.<br>`,"blue"),i.push((0,s.L6P)(g),(0,s.L6P)(R),(0,s.L6P)(b),(0,s.BD1)(g),(0,s.BD1)(R),(0,s.BD1)(b)),a.push((0,s.L6P)(g),(0,s.L6P)(R),(0,s.L6P)(b),(0,s.BD1)(g),(0,s.BD1)(R),(0,s.BD1)(b),(0,s.L5i)(l[de],g,-90,`id="anim${e}A" dur ="2s" repeatcount="1"`),(0,s.L5i)(l[be],R,90,`id="anim${e}B" dur="2s" repeatcount="1"`),(0,s.L5i)(l[$e],b,-90,`id="anim${e}C" dur="2s" repeatcount="1"`)),_+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},i),o=(0,s.xkU)(l[ke],(0,s.tno)(0,0)),o.couleurDeRemplissage="green",o.opaciteDeRemplissage=.3,u=(0,s.xkU)(l[De],(0,s.tno)(0,0)),u.couleurDeRemplissage="red",u.opaciteDeRemplissage=.3,m=(0,s.xkU)(l[ye],(0,s.tno)(0,0)),m.couleurDeRemplissage="blue",m.opaciteDeRemplissage=.3,f=(0,s.Nb1)((0,s.xmu)(z[ce][0],z[ce][1]),g,-90),x=(0,s.EXn)((0,s.xmu)(z[ce][0],z[ce][1]),g),k=(0,s.Wnp)(x,g,-90),x.pointilles=2,k.pointilles=2,f.pointilles=2,f.epaisseur=2,f.color="green",h=(0,s.Nb1)((0,s.xmu)(I[Re][0],I[Re][1]),R,90),D=(0,s.EXn)((0,s.xmu)(I[Re][0],I[Re][1]),R),y=(0,s.Wnp)(D,R,90),D.pointilles=2,y.pointilles=2,h.pointilles=2,h.epaisseur=2,h.color="red",$=(0,s.Nb1)((0,s.xmu)(A[he][0],A[he][1]),b,-90),S=(0,s.EXn)((0,s.xmu)(A[he][0],A[he][1]),b),P=(0,s.Wnp)(S,b,-90),S.pointilles=2,P.pointilles=2,$.pointilles=2,$.epaisseur=2,$.color="blue",a.push(o,u,m,f,h,$,x,k,D,y,S,P),W+=(0,s.iR9)({xmin:we,xmax:Ke,ymin:Ze,ymax:je,pixelsParCm:15,scale:.3,optionsTikz:["every node/.style={scale=0.6}"],mainlevee:!1},a)}W+="<br>",W+=`<button class="btn ui labeled icon button"  style="margin:10px" onclick="document.getElementById('anim${e}A').beginElement()"><i class="redo circle icon"></i>Relancer l'animation verte</button>`,W+=`<button class="btn ui labeled icon button"  style="margin:10px" onclick="document.getElementById('anim${e}B').beginElement()"><i class="redo circle icon"></i>Relancer l'animation rouge</button>`,W+=`<button class="btn ui labeled icon button"  style="margin:10px" onclick="document.getElementById('anim${e}C').beginElement()"><i class="redo circle icon"></i>Relancer l'animation bleue</button>`,this.listeQuestions.push(_),this.listeCorrections.push(W),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Transformations",4,"1 : Symétries axiales\n 2 : Symétries centrales\n 3 : Translations\n 4 : Rotations\n 5 : Homothéties\n"]}},66969:(e,i,a)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}a.r(i),a.d(i,{default:()=>s})}}]);
//# sourceMappingURL=9881.28d91bba770c6264fd40.js.map