(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7122,7567],{47122:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>o,default:()=>r});var e=t(67567),n=t(24477);const o="Écriture décimale d’une puissance";function r(){e.default.call(this),this.titre=o,this.consigne="Donner l'écriture sous la forme d'un nombre entier ou d'une fraction.",this.nb_questions=8,this.nb_cols=2,this.nb_cols_corr=2,this.sup=3,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let i,s=(0,n._97)([[2,2],[2,3],[2,4],[2,5],[2,6],[3,2],[3,3],[3,4],[4,2],[4,3],[5,2],[5,3],[6,2],[6,3],[7,2],[7,3],[8,2],[8,3],[9,2],[9,3]],this.nb_questions);1==this.sup&&(i=(0,n._97)(["+"],this.nb_questions),this.consigne="Donner l'écriture sous la forme d'un nombre entier."),2==this.sup&&(i=(0,n._97)(["-"],this.nb_questions)),3==this.sup&&(i=(0,n._97)(["+","-"],this.nb_questions));for(let t,e,o,r,h=0,c=0;h<this.nb_questions&&c<50;){switch(i[h]){case"+":o=s[h][0],r=s[h][1],t=`$${o}^{${r}}$`,e=r<2?`${o}^${r}=$${o}**n}$`:`$${o}^{${r}}=${(0,n.xT1)(o,r)}=${(0,n.FpM)(o**r)}$`;break;case"-":o=s[h][0],r=s[h][1],t=`$${o}^{${-r}}$`,e=`$${o}^{${-r}}=\\dfrac{1}{${o}^{${r}}}=\\dfrac{1}{${(0,n.xT1)(o,r)}}=\\dfrac{1}{${(0,n.FpM)(o**r)}}$`}-1==this.liste_questions.indexOf(t)&&(this.liste_questions.push(t),this.liste_corrections.push(e),h++),c++}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",3,"1 : Exposants positifs\n2 : Exposants négatifs\n3 : Exposants relatifs"]}},67567:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}t.r(s),t.d(s,{default:()=>e})}}]);