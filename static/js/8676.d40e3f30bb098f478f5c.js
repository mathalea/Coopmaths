(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8676,7567],{78676:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>r,default:()=>h});var e=t(67567),n=t(24477),o=t(17199);const r="Construire le symétrique d’un point avec cible auto-corrective";function h(){e.default.call(this),this.titre=r,this.consigne="",this.nb_questions=1,this.nb_questions_modifiable=!1,this.nb_cols=1,this.nb_cols_corr=1,this.sup=3,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let i=[0,0],s="",t=parseInt(this.sup),e=(0,o.xmu)(0,0,"O"),r=["/","//","///","x","o","S","V"],h=(0,n.Bgu)(t,"QO",!0);this.consigne=`Construire le symétrique des points $${h[0]}$`;for(let i=1;i<t-1;i++)this.consigne+=`, $${h[i]}$`;this.consigne+=` et $${h[t-1]}$ par rapport à $O$.`;let l,a,c,u,_,m,p=[],b=[],d=[],f=[],x=[],$=[];[l,a,c,u]=[0,0,0,0];for(let i=0;i<t;i++)for(d.push((0,o.xmu)((0,n.n0o)((0,n.nSR)(-80,80,0)/10),(0,n.n0o)((0,n.nSR)(-80,80,0)/10),h[i]+"'")),_=!0;(0,o.InT)(d[i],e)<3||_;)if(_=!0,(0,o.InT)(d[i],e)<3)d[i].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),d[i].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10);else{m=!0;for(let s=0;s<i;s++)(0,o.InT)(d[i],d[s])<4.5&&(m=!1);0==m?(d[i].x=(0,n.n0o)((0,n.nSR)(-80,80,0)/10),d[i].y=(0,n.n0o)((0,n.nSR)(-80,80,0)/10)):_=!1}f.push((0,o.L6P)(e),(0,o.BD1)(e)),x.push((0,o.L6P)(e),(0,o.BD1)(e));for(let s=0;s<t;s++){$.push((4,(0,n.NTq)((0,n.nSR)(1,4))+Number((0,n.nSR)(1,4)).toString())),i=(0,o.Ihq)(d[s].x,d[s].y,4,.6,$[s]);let t=(0,o.cqN)({x:i[0],y:i[1],rang:4,num:s+1,taille:.6});t.taille=.6,t.color="orange",t.opacite=.7,p.push(t)}for(let i=0;i<t;i++)b.push((0,o.Wnp)(d[i],e,180,h[i])),f.push((0,o.L6P)(b[i]),(0,o.BD1)(b[i]),p[i]),x.push((0,o.L6P)(b[i],d[i]),(0,o.BD1)(b[i],d[i]),p[i]),x.push((0,o.EXn)(b[i],d[i],(0,n.LWD)(i)),(0,o.HUl)(b[i],d[i],(0,n.LWD)(i+5),r[i])),x.push((0,o.ItP)(e,d[i],20)),s+=`$${h[i]}'$, le symétrique du point $${h[i]}$ est dans la case ${$[i]} de la grille ${i+1}.<br>`;for(let i=0;i<t;i++)l=Math.min(l,d[i].x-3,b[i].x-3),a=Math.min(a,d[i].y-3,b[i].y-3),c=Math.max(c,d[i].x+3,b[i].x+3),u=Math.max(u,d[i].y+3,b[i].y+3);this.liste_questions.push((0,o.iR9)({xmin:l,ymin:a,xmax:c,ymax:u,pixelsParCm:20,scale:.7},f)),this.liste_corrections.push(s+(0,o.iR9)({xmin:l,ymin:a,xmax:c,ymax:u,pixelsParCm:20,scale:.7},x)),(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Nombre de points (1 à 5)",5,"1\n2\n3\n4\n5"]}},67567:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}t.r(s),t.d(s,{default:()=>e})}}]);