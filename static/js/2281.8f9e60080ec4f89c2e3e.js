(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[2281,7567],{72281:(s,n,e)=>{"use strict";e.r(n),e.d(n,{titre:()=>u,default:()=>$});var i=e(67567),a=e(24477);const u="Encadrer avec des puissances de 10";function $(){let s;i.default.call(this),this.sup=4,this.nb_questions=6,this.titre=u,this.consigne="Encadrer les nombres suivants par deux puissances de 10 d'exposants consécutifs.",this.nb_cols=1,this.nb_cols_corr=1,this.nouvelle_version=function(){switch(this.sup=Number(this.sup),this.sup){case 1:s=[1,2,3,4,5,6];break;case 2:s=[7,8,9,10];break;case 3:s=[11,12,13,14];break;case 4:s=[(0,a.q$q)([1,2,3]),(0,a.q$q)([4,5,6]),(0,a.q$q)([7,8]),(0,a.q$q)([9,10]),(0,a.q$q)([11,12]),(0,a.q$q)([13,14])]}let n=(0,a._97)(s,this.nb_questions);this.liste_questions=[],this.liste_corrections=[];for(let s,e,i=0,u=0;i<this.nb_questions&&u<50;){let $=[];for(let s=0;s<6;s++)$.push({val:`$${(0,a.FpM)((0,a.n0o)((0,a.nSR)(10**s+1,10**(s+1))))}$`,puissance_inf:`$10^{${s}}$`,puissance_sup:`$10^{${s+1}}$`,puissance_inf_num:`$${(0,a.FpM)((0,a.n0o)(10**s))}$`,puissance_sup_num:`$${(0,a.FpM)((0,a.n0o)(10**(s+1)))}$`});let c=[];for(let s=0;s<4;s++)c.push({val:`$${(0,a.FpM)((0,a.n0o)((0,a.nSR)(1e4,1e5)/10**(4-s)))}$`,puissance_inf:`$10^{${s}}$`,puissance_sup:`$10^{${s+1}}$`,puissance_inf_num:`$${(0,a.FpM)((0,a.n0o)(10**s))}$`,puissance_sup_num:`$${(0,a.FpM)((0,a.n0o)(10**(s+1)))}$`});let _=[];for(let s=0;s<4;s++)_.push({val:`$${(0,a.FpM)((0,a.n0o)((0,a.nSR)(10**(4-s-1)+1,10**(4-s))/1e4))}$`,puissance_inf:`$10^{${-(s+1)}}$`,puissance_sup:`$10^{${-s}}$`,puissance_inf_num:`$${(0,a.FpM)((0,a.n0o)(10**-(s+1)))}$`,puissance_sup_num:`$${(0,a.FpM)((0,a.n0o)(10**-s))}$`});switch(n[i]){case 1:s=`${$[0].val}`,e=`${$[0].puissance_inf} $\\leqslant$ ${$[0].val} $\\leqslant$ ${$[0].puissance_sup}`,e+=` car ${$[0].puissance_inf} = ${$[0].puissance_inf_num} et ${$[0].puissance_sup} = ${$[0].puissance_sup_num}`;break;case 2:s=`${$[1].val}`,e=`${$[1].puissance_inf} $\\leqslant$ ${$[1].val} $\\leqslant$ ${$[1].puissance_sup}`,e+=` car ${$[1].puissance_inf} = ${$[1].puissance_inf_num} et ${$[1].puissance_sup} = ${$[1].puissance_sup_num}`;break;case 3:s=`${$[2].val}`,e=`${$[2].puissance_inf} $\\leqslant$ ${$[2].val} $\\leqslant$ ${$[2].puissance_sup}`,e+=` car ${$[2].puissance_inf} = ${$[2].puissance_inf_num} et ${$[2].puissance_sup} = ${$[2].puissance_sup_num}`;break;case 4:s=`${$[3].val}`,e=`${$[3].puissance_inf} $\\leqslant$ ${$[3].val} $\\leqslant$ ${$[3].puissance_sup}`,e+=` car ${$[3].puissance_inf} = ${$[3].puissance_inf_num} et ${$[3].puissance_sup} = ${$[3].puissance_sup_num}`;break;case 5:s=`${$[4].val}`,e=`${$[4].puissance_inf} $\\leqslant$ ${$[4].val} $\\leqslant$ ${$[4].puissance_sup}`,e+=` car ${$[4].puissance_inf} = ${$[4].puissance_inf_num} et ${$[4].puissance_sup} = ${$[4].puissance_sup_num}`;break;case 6:s=`${$[5].val}`,e=`${$[5].puissance_inf} $\\leqslant$ ${$[5].val} $\\leqslant$ ${$[5].puissance_sup}`,e+=` car ${$[5].puissance_inf} = ${$[5].puissance_inf_num} et ${$[5].puissance_sup} = ${$[5].puissance_sup_num}`;break;case 7:s=`${c[0].val}`,e=`${c[0].puissance_inf} $\\leqslant$ ${c[0].val} $\\leqslant$ ${c[0].puissance_sup}`,e+=` car ${c[0].puissance_inf} = ${c[0].puissance_inf_num} et ${c[0].puissance_sup} = ${c[0].puissance_sup_num}`;break;case 8:s=`${c[1].val}`,e=`${c[1].puissance_inf} $\\leqslant$ ${c[1].val} $\\leqslant$ ${c[1].puissance_sup}`,e+=` car ${c[1].puissance_inf} = ${c[1].puissance_inf_num} et ${c[1].puissance_sup} = ${c[1].puissance_sup_num}`;break;case 9:s=`${c[2].val}`,e=`${c[2].puissance_inf} $\\leqslant$ ${c[2].val} $\\leqslant$ ${c[2].puissance_sup}`,e+=` car ${c[2].puissance_inf} = ${c[2].puissance_inf_num} et ${c[2].puissance_sup} = ${c[2].puissance_sup_num}`;break;case 10:s=`${c[3].val}`,e=`${c[3].puissance_inf} $\\leqslant$ ${c[3].val} $\\leqslant$ ${c[3].puissance_sup}`,e+=` car ${c[3].puissance_inf} = ${c[3].puissance_inf_num} et ${c[3].puissance_sup} = ${c[3].puissance_sup_num}`;break;case 11:s=`${_[0].val}`,e=`${_[0].puissance_inf} $\\leqslant$ ${_[0].val} $\\leqslant$ ${_[0].puissance_sup}`,e+=` car ${_[0].puissance_inf} = ${_[0].puissance_inf_num} et ${_[0].puissance_sup} = ${_[0].puissance_sup_num}`;break;case 12:s=`${_[1].val}`,e=`${_[1].puissance_inf} $\\leqslant$ ${_[1].val} $\\leqslant$ ${_[1].puissance_sup}`,e+=` car ${_[1].puissance_inf} = ${_[1].puissance_inf_num} et ${_[1].puissance_sup} = ${_[1].puissance_sup_num}`;break;case 13:s=`${_[2].val}`,e=`${_[2].puissance_inf} $\\leqslant$ ${_[2].val} $\\leqslant$ ${_[2].puissance_sup}`,e+=` car ${_[2].puissance_inf} = ${_[2].puissance_inf_num} et ${_[2].puissance_sup} = ${_[2].puissance_sup_num}`;break;case 14:s=`${_[3].val}`,e=`${_[3].puissance_inf} $\\leqslant$ ${_[3].val} $\\leqslant$ ${_[3].puissance_sup}`,e+=` car ${_[3].puissance_inf} = ${_[3].puissance_inf_num} et ${_[3].puissance_sup} = ${_[3].puissance_sup_num}`}-1==this.liste_questions.indexOf(s)&&(this.liste_questions.push(s),this.liste_corrections.push(e),i++),u++}(0,a.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",4,"1 : nombre entier positif\n2 : nombre décimal positif\n3 : nombre entier positif inférieur à un\n4 : Mélange"]}},67567:(s,n,e)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(s){},this.liste_packages=[]}e.r(n),e.d(n,{default:()=>i})}}]);