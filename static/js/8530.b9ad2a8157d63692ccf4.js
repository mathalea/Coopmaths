(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8530,7567],{8530:(e,i,s)=>{"use strict";s.r(i),s.d(i,{titre:()=>r,default:()=>o});var t=s(67567),n=s(24477),a=s(17199);const r="Labyrinthe de numération décimale";function o(){t.default.call(this),this.titre=r,this.consigne="",this.niveau="6e",this.nb_questions=1,this.nb_questions_modifiable=!1,this.nb_cols=1,this.nb_cols_corr=1,this.pas_de_version_LaTeX=!1,this.pas_de_version_HMTL=!1,this.sup=3,this.nouvelle_version=function(){let e,i,s,t;this.liste_corrections=[],this.liste_questions=[];let r=(0,a.DRD)();r.niveau=parseInt(this.sup),r.chemin=r.choisitChemin(r.niveau),r.murs2d=r.construitMurs(r.chemin),r.chemin2d=r.traceChemin(r.chemin);let o,c,l,h,m,u,b,_,d,p,f,k,$,v,R=r.chemin,S=["unités","dixièmes","centièmes","millièmes","dizaines","centaines","unités de mille","dix-millièmes","dizaines de mille"],g=[],q=0;l=(this.niveau="CM")?5:this.sup?8:6,h=(0,n.nSR)(0,l),o=(0,n.nSR)(0,9),i=`${(0,n.MZ9)(`Trouve la sortie en ne passant que par les cases contenant un nombre dont le chiffre des ${S[h]} est un `,"black")}$${(0,n.X8v)(o,"black")}$.<br>`,s=`${(0,n.MZ9)(`Voici le chemin en marron et la sortie était la numéro $${2-R[R.length-1][1]+1}$.`,"black")}<br>`;for(let e=0;e<=30;e++){if(m=l>7?"dizaines de mille"!=S[h]?(0,n.nSR)(0,9,o):o:0,u="unités de mille"!=S[h]?l>5?(0,n.nSR)(0,9,o):o:0,b="centaines"!=S[h]?(0,n.nSR)(0,9,o):o,_="dizaines"!=S[h]?(0,n.nSR)(0,9,o):o,d="unités"!=S[h]?(0,n.nSR)(0,9,o):o,p="dixièmes"!=S[h]?(0,n.nSR)(0,9,o):o,f="centièmes"!=S[h]?(0,n.nSR)(0,9,o):o,k="millièmes"!=S[h]?(0,n.nSR)(0,9,o):o,$=l>6?"dix-millièmes"!=S[h]?(0,n.nSR)(0,9,o):o:0,e>12){switch(c=(0,n.nSR)(0,l,h),c){case 8:l>7?m=o:(m=0,0!=h?d=o:p=o);break;case 6:u=o;break;case 5:b=o;break;case 4:_=o;break;case 0:d=o;break;case 1:p=o;break;case 2:f=o;break;case 3:k=o;break;case 7:l>6?$=o:($=0,1!=h?p=o:f=o)}switch(c=(0,n.nSR)(0,9,o),h){case 8:m=c;break;case 6:u=c;break;case 5:b=c;break;case 4:_=c;break;case 0:d=c;break;case 1:p=c;break;case 2:f=c;break;case 3:k=c;break;case 7:$=c}}v=(0,n.kyd)(`${m}*10000+${u}*1000+${b}*100+${_}*10+${d}+${p}*0.1+${f}*0.01+${k}*0.001+${$}*0.0001`,8),g.push(v)}for(let e=1;e<7;e++)r.nombres.push([0,0,0]);for(let e=1;e<7;e++)for(let i=0;i<3;i++){t=!1;for(let s=0;s<R.length;s++)R[s][0]==e&&R[s][1]==i&&(t=!0);t?(r.nombres[e-1][i]=g[q],q++):r.nombres[e-1][i]=g[q+13]}r.nombres2d=r.placeNombres(r.nombres,.7),e={xmin:-4,ymin:0,xmax:22,ymax:11,pixelsParCm:20,scale:.7},i+=(0,a.iR9)(e,r.murs2d,r.nombres2d),s+=(0,a.iR9)(e,r.murs2d,r.nombres2d,r.chemin2d),this.liste_questions.push(i),this.liste_corrections.push(s),(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de rapidité",6,"1 : Escargot\n 2 : Tortue\n 3 : Lièvre\n 4 : Antilope\n 5 : Guépard\n 6 : Au hasard"]}},67567:(e,i,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}s.r(i),s.d(i,{default:()=>t})}}]);