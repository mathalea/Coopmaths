(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7713,7567],{79766:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>h,default:()=>r});var e=t(67567),n=t(24477),o=t(17199);const h="Construire le symétrique d’un point avec cible auto-corrective";function r(){e.default.call(this),this.titre=h,this.consigne="",this.nb_questions=1,this.nb_questions_modifiable=!1,this.nb_cols=1,this.nb_cols_corr=1,this.sup=3,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let i,s,t,e=[0,0],h="",r=parseInt(this.sup),a=(0,n.nSR)(-10,10),l=(0,n.nSR)(-10,10,a),c=(0,o.VTK)(a,l,0,"(d)"),u=(0,o.xkU)((0,o.xmu)(0,0),(0,o.xcw)(c.directeur,(0,o.xmu)(0,0),-.5)),_=(0,o.xkU)((0,o.xmu)(0,0),(0,o.xcw)(c.directeur,(0,o.xmu)(0,0),.5)),m=["/","//","///","x","o","S","V"],p=(0,n.Bgu)(r,"Q",!0);this.consigne=`Construire le symétrique des points $${p[0]}$`;for(let i=1;i<r-1;i++)this.consigne+=`, $${p[i]}$`;this.consigne+=` et $${p[r-1]}$ par rapport à $(d)$.`;let d,b,x,f,$=[],g=[],q=[],y=[],R=[],S=[];[d,b,x,f]=[0,0,0,0];for(let t=0;t<r;t++)for(q.push((0,o.xmu)((0,n.n0o)((0,n.nSR)(-80,80,0)/10),(0,n.n0o)((0,n.nSR)(-80,80,0)/10),p[t]+"'")),i=!0;(0,o.hh1)(q[t],c)<3||i;)if(i=!0,(0,o.hh1)(q[t],c)<3)q[t].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),q[t].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10);else{s=!0;for(let i=0;i<t;i++)(0,o.InT)(q[t],q[i])<4.5&&(s=!1);0==s?(q[t].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),q[t].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10)):i=!1}y.push(c),R.push(c,(0,o.L6P)(u,_));for(let i=0;i<r;i++)S.push((4,(0,n.NTq)((0,n.nSR)(1,4))+Number((0,n.nSR)(1,4)).toString())),e=(0,o.Ihq)(q[i].x,q[i].y,4,.6,S[i]),t=(0,o.cqN)({x:e[0],y:e[1],rang:4,num:i+1,taille:.6}),t.taille=.6,t.color="orange",t.opacite=.7,$.push(t);for(let i=0;i<r;i++)g.push((0,o.Vj7)(q[i],c,p[i])),y.push((0,o.L6P)(g[i]),(0,o.BD1)(g[i]),$[i]),R.push((0,o.L6P)(g[i],q[i]),(0,o.BD1)(g[i],q[i]),$[i]),R.push((0,o.EXn)(g[i],q[i],(0,n.LWD)(i)),(0,o.hwj)(g[i],q[i],(0,n.LWD)(i+5),m[i])),R.push((0,o.ItP)(u,q[i],20),(0,o.ItP)(_,q[i],20)),h+=`$${p[i]}'$, le symétrique du point $${p[i]}$ est dans la case ${S[i]} de la grille ${i+1}.<br>`;for(let i=0;i<r;i++)d=Math.min(d,q[i].x-3,g[i].x-3),b=Math.min(b,q[i].y-3,g[i].y-3),x=Math.max(x,q[i].x+3,g[i].x+3),f=Math.max(f,q[i].y+3,g[i].y+3);mathalea.fenetreMathalea2d=[d,b,x,f],this.liste_questions.push((0,o.iR9)({xmin:d,ymin:b,xmax:x,ymax:f,pixelsParCm:20,scale:.7},y)),this.liste_corrections.push(h+(0,o.iR9)({xmin:d,ymin:b,xmax:x,ymax:f,pixelsParCm:20,scale:.7},R)),(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Nombre de points (1 à 5)",5,"1\n2\n3\n4\n5"]}},67567:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}t.r(s),t.d(s,{default:()=>e})}}]);