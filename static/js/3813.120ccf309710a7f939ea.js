(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3813,7567],{3813:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>a,default:()=>h});var t=e(67567),n=e(24477),r=e(17199),o=e(41118);const a="Représenter une fraction de l’unité";function h(){t.default.call(this),this.titre=a,this.nb_questions=5,this.consigne="Colorier en bleu un segment de longueur ...",sortie_html?this.spacing_corr=3.5:this.spacing_corr=2,sortie_html,this.spacing=2,this.sup=1,this.sup2=1,this.nb_cols=1,this.nb_cols_corr=1,this.nouvelle_version=function(){let i,s,e,t,a;this.liste_questions=[],this.liste_corrections=[];let h=[];i=this.sup<5?[parseInt(this.sup)]:[1,2,3,4],h=(0,n._97)(i,this.nb_questions);for(let i,c,u,l,_,b,p=0,m=0;p<this.nb_questions&&m<50;){switch(h[p]){case 1:i=(0,n.q$q)([4,5,6,10]),c=(0,n.nSR)(1,i-1);break;case 2:i=(0,n.q$q)([2,3,4]),c=3==i?(0,n.nSR)(3,2*i-1,i):(0,n.nSR)(3,3*i-1,i);break;case 3:i=(0,n.q$q)([4,5,6,10]),c=4==i?(0,n.nSR)(5,3*i-1,i):(0,n.nSR)(5,2*i-1,i);break;case 4:i=(0,n.q$q)([2,3,4,5,6,10]),c=2==i||4==i?(0,n.nSR)(i+1,3*i-1,i):(0,n.nSR)(i+1,2*i-1,i)}a=i%3==0?12:i%5==0?10:8,u=(0,o.Pj)(c,i),l=(0,o.Pj)(3*i-1,i),_=`$${u.texFraction}$ unité en prenant ${a} carreaux pour une unité.`,s=this.sup2<3?(0,r.flY)(0,0,26,2,"gray",.7):"",2==this.sup2?(t=.6,e=(0,r.Sl2)(0,0,26,2)):(t=.5,e=""),b=(0,r.iR9)({xmin:0,ymin:0,xmax:26,ymax:2,pixelsParCm:20,scale:t},u.representation(1,1,a,0,"segment","blue",0,1),s,e),-1==this.liste_questions.indexOf(_)&&(this.liste_questions.push(_),this.liste_corrections.push(b),p++),m++}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Type d'exercices",4,"1 : fracion inférieure à 1\n2 : demis, tiers et quarts\n3 : quarts, cinquièmes, sixièmes et dixièmes\n4 : toutes les fractions entre 1 et 3"],this.besoin_formulaire2_numerique=["Type de cahier",2,"1 :  petits carreaux\n2 : Cahier gros carreaux type Seyes"]}},67567:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}e.r(s),e.d(s,{default:()=>t})}}]);