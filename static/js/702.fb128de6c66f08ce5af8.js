(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[702,7567],{50702:(i,n,e)=>{"use strict";e.r(n),e.d(n,{titre:()=>o,default:()=>a});var s=e(67567),t=e(24477);const o="Intercaler un nombre décimal entre deux nombres décimaux";function a(){s.default.call(this),this.titre=o,this.consigne="Compléter avec un nombre décimal",this.nb_questions=6,this.nb_cols=2,this.nb_cols_corr=2,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let i=(0,t._97)(["a,b1","a,b2","a,9","a,bc","a,b9","a,99","a,b0c","a,1","a,01","a"],this.nb_questions);for(let n,e,s,o,a,c,r,h,l,_=0,b=0;_<this.nb_questions&&b<50;){switch(i[_]){case"a,b1":r=(0,t.nSR)(1,6),c=(0,t.nSR)(1,39),s=(0,t.n0o)(c+r/10),o=(0,t.n0o)(c+(0,t.nSR)(r+2,9)/10),a=(0,t.n0o)(s+.1);break;case"a,b2":r=(0,t.nSR)(1,8),c=(0,t.nSR)(1,39),s=(0,t.n0o)(c+r/10),o=(0,t.n0o)(c+(r+1)/10),a=(0,t.n0o)(s+.05);break;case"a,9":s=(0,t.n0o)((0,t.nSR)(1,39)+.9),o=(0,t.n0o)(s+.1),a=(0,t.n0o)(s+.05);break;case"a,bc":c=(0,t.nSR)(1,39),r=(0,t.nSR)(1,9),h=(0,t.nSR)(1,8),l=h+1,s=(0,t.n0o)(c+r/10+h/100),o=(0,t.n0o)(c+r/10+l/100),a=(0,t.n0o)(s+.005);break;case"a,b9":c=(0,t.nSR)(1,39),r=(0,t.nSR)(1,9),h=9,s=(0,t.n0o)(c+r/10+h/100),o=(0,t.n0o)(c+(r+1)/10),a=(0,t.n0o)(s+.005);break;case"a,99":c=(0,t.nSR)(1,39),s=(0,t.n0o)(c+.99),o=c+1,a=(0,t.n0o)(s+.005);break;case"a,b0c":c=(0,t.nSR)(1,39),r=(0,t.nSR)(1,6),h=(0,t.nSR)(1,8),l=h+1,s=(0,t.n0o)(c+r/10+h/1e3),o=(0,t.n0o)(c+(0,t.nSR)(r+1,9)/10),a=(0,t.n0o)(o-s)>.1?(0,t.n0o)(c+(r+1)/10):(0,t.n0o)(c+r/10+.01);break;case"a,1":c=(0,t.nSR)(1,39),r=1,s=(0,t.n0o)(c),o=(0,t.n0o)(c+r/10),a=(0,t.n0o)(c+.05);break;case"a,01":c=(0,t.nSR)(1,39),h=1,s=(0,t.n0o)(c),o=(0,t.n0o)(c+h/100),a=(0,t.n0o)(c+.005);break;case"a":s=(0,t.nSR)(1,39),o=s+1,a=(0,t.n0o)(s+.1)}n=`$${(0,t.FpM)(s)}<\\ldots\\ldots<${(0,t.FpM)(o)}$`,e=`$${(0,t.FpM)(s)}<${(0,t.FpM)(a)}<${(0,t.FpM)(o)}$`,-1==this.liste_questions.indexOf(n)&&(this.liste_questions.push(n),this.liste_corrections.push(e),_++),b++}(0,t.KsX)(this),sortie_html&&(this.contenu_correction=(0,t.VYn)({titre:"Remarque",texte:"Il y a une infinité de solutions. La correction ne montre qu'une possibilité.",couleur:"black"})+this.contenu_correction)}}},67567:(i,n,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(i){},this.liste_packages=[]}e.r(n),e.d(n,{default:()=>s})}}]);