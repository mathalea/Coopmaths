(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8716,7567],{28716:(i,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>r,default:()=>o});var s=t(67567),n=t(24477);const r="Coefficient multiplicateur d’une variation en pourcentage";function o(){s.default.call(this),this.titre=r,this.consigne="Compléter.",this.nb_questions=4,this.nb_cols=1,this.nb_cols_corr=1,this.sup=1,this.nouvelle_version=function(i){this.liste_questions=[],this.liste_corrections=[],this.bouton_aide=(0,n.ljt)(i,"https://coopmaths.fr/aide/3P10/"),this.sup=parseInt(this.sup);let e=[];1===this.sup&&(e=["coef+","coef-"]),2===this.sup&&(e=["taux+","taux-"]),3===this.sup&&(e=["coef+","coef-","taux+","taux-"]);const t=(0,n._97)(e,this.nb_questions);for(let i,e,s,r,o=0,a=0;o<this.nb_questions&&a<50;){switch(s=(0,n.q$q)([10*(0,n.nSR)(1,9),(0,n.nSR)(1,9)]),t[o]){case"coef+":i=`Augmenter de $${s}~\\%$ revient à multiplier par...`,r=(0,n.ucD)((0,n.n0o)(1+s/100)),e=`Augmenter de $${s}~\\%$ revient à multiplier par ${r} car $100~\\% + ${s}~\\% = ${100+s}~\\%$.`;break;case"coef-":i=`Diminuer de $${s}~\\%$ revient à multiplier par...`,r=(0,n.ucD)((0,n.n0o)(1-s/100)),e=`Diminuer de $${s}~\\%$ revient à multiplier par ${r} car $100~\\% - ${s}~\\% = ${100-s}~\\%$.`;break;case"taux+":r=(0,n.hn8)(1+s/100),i=`Multiplier par ${r} revient à...`,e=`Multiplier par ${r} revient à augmenter de $${s}~\\%$ car $${r} = ${100+s}~\\% = 100~\\% + ${s}~\\%$.`;break;case"taux-":r=(0,n.hn8)(1-s/100),i=`Multiplier par ${r} revient à...`,e=`Multiplier par ${r} revient à diminuer de $${s}~\\%$ car $${r} = ${100-s}~\\% = 100~\\% - ${s}~\\%$.`}-1===this.liste_questions.indexOf(i)&&(this.liste_questions.push(i),this.liste_corrections.push(e),o++),a++}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",3,"1 : Déterminer le coefficient\n2 : Exprimer une variation en pourcentage\n3 : Mélange des 2 types de questions"]}},67567:(i,e,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}t.r(e),t.d(e,{default:()=>s})}}]);