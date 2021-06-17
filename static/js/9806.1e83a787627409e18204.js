(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9806,7567],{19806:(t,e,s)=>{"use strict";s.r(e),s.d(e,{titre:()=>o,default:()=>$});var i=s(24477),n=s(67567);const o="Convertir des durées";function $(){n.default.call(this),this.sup=5,this.titre=o,this.consigne="Compléter les égalités suivantes",this.nb_cols=1,this.nb_cols_corr=1,this.spacing=2,this.nb_questions=5,this.nouvelle_version=function(t){this.liste_questions=[],this.liste_corrections=[];let e=(0,i._97)([1,2,3,4],this.nb_questions),s=(0,i._97)([0,1,2],this.nb_questions),n=[];this.sup<5&&(n=(0,i._97)([this.sup],this.nb_questions)),5==this.sup&&(n=(0,i._97)([1,2,3,4],this.nb_questions));for(let t,o,$,h,r,x,u=0,_=0;u<this.nb_questions&&_<50;){if(1==n[u]){let s=e[u];1==s&&(t=(0,i.nSR)(2,11),r=`$${t}~\\text{h en minutes}$`,x=`$${t}~\\text{h} = ${t}\\times60~~\\text{min} = ${(0,i.FpM)(60*t)}~\\text{min}$`),2==s&&(t=(0,i.q$q)([1,2,10,20]),r=`$${t}~\\text{h en secondes}$`,x=`$${t}~\\text{h} = ${t}\\times3~600~\\text{s} = ${(0,i.FpM)(3600*t)}~\\text{s}$`),3==s&&(o=(0,i.nSR)(2,59),r=`$${o}~\\text{min en secondes}$`,x=`$${o}~\\text{min} = ${o}\\times60~\\text{s} = ${(0,i.FpM)(60*o)}~\\text{s}$`),4==s&&(t=(0,i.nSR)(1,2),o=(0,i.nSR)(2,59),r=`$${t}~\\text{h}~${o}~\\text{min en secondes}$`,x=`$${t}~\\text{h}~${o}~\\text{min} = ${t}\\times3~600~\\text{s} + ${o}\\times60~\\text{s} = ${(0,i.FpM)(3600*t)}+${(0,i.FpM)(60*o)}~\\text{s} = ${(0,i.FpM)(3600*t+60*o)}~\\text{s}$`)}2==n[u]&&(h=(0,i.nSR)(1,6),t=(0,i.nSR)(1,23),r=`$${(0,i.FpM)(t+24*h)}~\\text{h en jours et heures}$`,x=`$${(0,i.FpM)(t+24*h)}~\\text{h} = ${h}\\times24~\\text{h} + ${t}~\\text{h} = ${h}~\\text{j}~${t}~\\text{h}$`),3==n[u]&&(t=s[u],o=(0,i.nSR)(1,59),$=(0,i.nSR)(1,59),t>0?(r=`$${(0,i.FpM)(3600*t+60*o+$)}~\\text{s au format HMS}$`,x=`$${(0,i.FpM)(3600*t+60*o+$)}~\\text{s} = ${(0,i.FpM)(3600*t)}~\\text{s}+${60*o+$}~\\text{s} =${t}~\\text{h}+${o}\\times60~\\text{s}+${$}~\\text{s}=${t}~\\text{h}~${o}~\\text{min}~${$}~\\text{s}$`):(r=`$${(0,i.FpM)(60*o+$)}~\\text{s au format HMS}$`,x=`$${(0,i.FpM)(60*o+$)}~\\text{s} = ${o}\\times60~\\text{s}+${$}~\\text{s}=${o}~\\text{min}~${$}~\\text{s}$`)),4==n[u]&&($=(0,i.nSR)(1,9),h=(0,i.nSR)(1,6),t=(0,i.nSR)(1,23),r=`$${(0,i.FpM)(t+24*h+168*$)}~\\text{h en semaines jours et heures}$`,x=$>1?`$${(0,i.FpM)(t+24*h+168*$)}~\\text{h} = ${h+7*$}\\times24~\\text{h} + ${t}~\\text{h} = ${h+7*$}~\\text{j}~${t}~\\text{h} = ${$}\\times7~\\text{j} + ${h}~\\text{j}~${t}~\\text{h} = ${$}~\\text{semaines}~${h}~\\text{j}~${t}~\\text{h}$`:`$${(0,i.FpM)(t+24*h+168*$)}~\\text{h} = ${h+7*$}\\times24~\\text{h} + ${t}~\\text{h} = ${h+7*$}~\\text{j}~${t}~\\text{h} = ${$}\\times7~\\text{j} + ${h}~\\text{j}~${t}~\\text{h} = ${$}~\\text{semaine}~${h}~\\text{j}~${t}~\\text{h}$`),-1==this.liste_questions.indexOf(r)&&(this.liste_questions.push(r),this.liste_corrections.push(x),u++),_++}(0,i.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",5,"1 : Conversions en s ou min\n2 : Conversions en jours-heures \n3 : Conversions en HMS\n4 : Conversions en semaines-jours-heures \n5 : Tous types de conversions"]}},67567:(t,e,s)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(t){},this.liste_packages=[]}s.r(e),s.d(e,{default:()=>i})}}]);