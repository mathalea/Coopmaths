(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7313,7567],{17313:(i,s,e)=>{"use strict";e.r(s),e.d(s,{titre:()=>o,default:()=>r});var t=e(24477),n=e(67567);const o="Notation scientifique";function r(){n.default.call(this),this.sup=1,this.sup2=1,this.titre=o,this.nb_cols=1,this.nb_cols_corr=1,this.nb_questions=5,this.QCM=["4C32",[],"Notation scientifique",4],this.nouvelle_version=function(){let i,s;this.QCM[1]=[],1==this.sup?this.consigne="Donner l'écriture scientifique des nombres suivants.":this.consigne="Donner l'écriture décimale des nombres suivants.",this.liste_questions=[],this.liste_corrections=[],s=1==this.sup2?[0,0,0,1,1]:2==this.sup2?[0,1,1,2,2]:[2,2,3,3,3];let e=(0,t._97)(s,this.nb_questions);for(let s,n,o,r,c,h,a=0,l=0;a<this.nb_questions&&l<50;){switch(e[a]){case 0:o=(0,t.nSR)(1,9),r=(0,t.nSR)(1,5);break;case 1:o=(0,t.n0o)((0,t.nSR)(11,99)/10),r=(0,t.nSR)(1,5);break;case 2:o=1==(0,t.nSR)(0,1)?(0,t.n0o)((0,t.nSR)(111,999)/100):(0,t.n0o)((100*(0,t.nSR)(1,9)+(0,t.nSR)(1,9))/100),r=(0,t.nSR)(1,7)*(0,t.q$q)([-1,1]);break;case 3:o=1==(0,t.nSR)(0,1)?(0,t.n0o)((1e3*(0,t.nSR)(1,9)+5*(0,t.nSR)(1,19))/1e3):(0,t.n0o)((0,t.nSR)(1111,9999)/1e3),r=(0,t.nSR)(3,7)*(0,t.q$q)([-1,1])}i=(0,t.n0o)(o*10**r),c=(0,t.hn8)(o*10**r),h=`${(0,t.FpM)(o)}\\times 10^{${r}}`,1==this.sup?(s=`$${c}$`,n=`$${c} = ${h}$`):(n=`$${h} = ${c}$`,s=`$${h}$`),-1==this.liste_questions.indexOf(s)&&(this.liste_questions.push(s),this.liste_corrections.push(n),1==this.sup?this.QCM[1].push([`Donner l'écriture scientifique de ${s}`,[n,i],{strict:!0,vertical:!1,digits:e[a]+3,decimals:e[a]+1,signe:!1,exposant_nb_chiffres:1,exposant_signe:!0,approx:0}]):this.QCM[1].push([`Donner l'écriture décimale de ${s}`,[n,i],{strict:!1,vertical:!1,digits:2*Math.abs(r)+2,decimals:Math.abs(r)+1,signe:!1,exposant_nb_chiffres:0,exposant_signe:!0,approx:0}]),a++),l++}(0,t.KsX)(this)},this.besoin_formulaire_numerique=["Type d'exercices",2,"1 : Traduire en notation scientifique\n2 : Traduire en notation décimale"],this.besoin_formulaire2_numerique=["Niveaux de difficulté",3,"1 : Facile\n2 : Moyen\n3 : Difficile"]}},67567:(i,s,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}e.r(s),e.d(s,{default:()=>t})}}]);