(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9398,7567],{39398:(e,i,t)=>{"use strict";t.r(i),t.d(i,{amcReady:()=>o,titre:()=>_,default:()=>l});var s=t(67567),n=t(24477);const o=!0,_="Additionner ou soustraire deux fractions";function l(){s.default.call(this),this.sup=2,this.sup2=!1,this.titre=_,this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée.",this.spacing=2,this.spacing_corr=2,this.nb_questions=5,this.nb_cols_corr=1,this.nouvelle_version=function(){let e;this.QCM=["4C21",[],"Additionner ou soustraire deux fractions",6,{}],this.liste_questions=[],this.liste_corrections=[],1==this.sup&&(e=["b_multiple_de_d","d_multiple_de_b","b_multiple_de_d","d_multiple_de_b","entier"]),2==this.sup&&(e=["ppcm","ppcm","premiers_entre_eux",(0,n.q$q)(["b_multiple_de_d","d_multiple_de_b"]),"entier"]);let i=(0,n._97)(e,this.nb_questions),t=(0,n._97)(["-","-","+","+"],this.nb_questions);for(let e,s,o,_,l,r,u,a,h,c,d,m,p=0;p<this.nb_questions;p++){let $=t[p];switch(m=i[p],m){case"ppcm":let e=[[6,9],[4,6],[8,12],[9,12],[10,15],[10,25],[6,21],[12,30],[6,8],[50,75]],i=(0,n.q$q)(e);(0,n.q$q)([!0,!1])?(s=i[0],_=i[1]):(s=i[1],_=i[0]),r=(0,n.U8t)(s,_)/s,u=(0,n.U8t)(s,_)/_;break;case"premiers_entre_eux":for(s=(0,n.nSR)(2,9),_=(0,n.nSR)(2,9);1!=(0,n.Md9)(s,_);)s=(0,n.nSR)(2,9),_=(0,n.nSR)(2,9);r=(0,n.U8t)(s,_)/s,u=(0,n.U8t)(s,_)/_;break;case"d_multiple_de_b":s=(0,n.nSR)(2,9),l=(0,n.nSR)(2,11),_=s*l;break;case"b_multiple_de_d":_=(0,n.nSR)(2,9),l=(0,n.nSR)(2,11),s=_*l}if(e=(0,n.nSR)(1,9,[s]),o=(0,n.nSR)(1,9,[_]),this.sup2&&(e*=(0,n.q$q)([-1,1]),o*=(0,n.q$q)([-1,1])),!this.sup2&&"-"==$&&e/s<o/_&&([e,s,o,_]=[o,_,e,s],r=(0,n.U8t)(s,_)/s,u=(0,n.U8t)(s,_)/_,"d_multiple_de_b"==m?(m="b_multiple_de_d",l=s/_):"b_multiple_de_d"==m&&(m="d_multiple_de_b",l=_/s)),c=`$${(0,n.KxJ)(e,s)}${$}${(0,n.KxJ)(o,_)}=$`,d=`$${(0,n.KxJ)(e,s)}${$}${(0,n.KxJ)(o,_)}`,"ppcm"!=m&&"premiers_entre_eux"!=m||(d+=`=${(0,n.KxJ)(e+(0,n.X8v)("\\times "+r),s+(0,n.X8v)("\\times "+r))}${$}${(0,n.KxJ)(o+(0,n.X8v)("\\times "+u),_+(0,n.X8v)("\\times "+u))}`,a=(0,n.n0o)(e*r+$+(0,n.GCJ)(o*u)),h=s*r,d+=`=${(0,n.KxJ)(e*r+$+(0,n.Zlo)(o*u),h)}`),"d_multiple_de_b"==m&&(d+=`=${(0,n.KxJ)(e+(0,n.X8v)("\\times "+l),s+(0,n.X8v)("\\times "+l))}${$}${(0,n.KxJ)(o,_)}`,a=(0,n.n0o)(e*l+$+(0,n.GCJ)(o)),h=s*l,d+=`=${(0,n.KxJ)(e*l+$+(0,n.Zlo)(o),h)}`),"b_multiple_de_d"==m&&(d+=`=${(0,n.KxJ)(e,s)}${$}${(0,n.KxJ)(o+(0,n.X8v)("\\times "+l),_+(0,n.X8v)("\\times "+l))}`,a=(0,n.n0o)(e+$+(0,n.GCJ)(o*l)),h=s,d+=`=${(0,n.KxJ)(e+$+(0,n.Zlo)(o*l),h)}`),"entier"==m){e=(0,n.nSR)(1,9),s=(0,n.nSR)(2,9,[e]);let i=(0,n.nSR)(1,9);this.sup2&&(e*=(0,n.q$q)([-1,1]),i*=(0,n.q$q)([-1,1])),(0,n.q$q)([!0,!1])?(!this.sup2&&"-"==$&&i<e/s&&(i=(0,n.nSR)(5,9)),c=`$${i}${$}${(0,n.KxJ)(e,s)}=$`,d=c,d+=`$${(0,n.KxJ)(i+(0,n.X8v)("\\times "+s),(0,n.X8v)(s))}${$}${(0,n.KxJ)(e,s)}`,d+=`=${(0,n.KxJ)(i*s+$+(0,n.Zlo)(e),s)}`):(!this.sup2&&"-"==$&&i>e/s&&(i=(0,n.nSR)(1,4),e=i*s+(0,n.nSR)(1,9)),c=`$${(0,n.KxJ)(e,s)}${$}${(0,n.Zlo)(i)}=$`,d=c,d+=`$${(0,n.KxJ)(e,s)}${$}${(0,n.KxJ)(i+(0,n.X8v)("\\times "+s),(0,n.X8v)(s))}`,d+=`=${(0,n.KxJ)(e+"+"+(0,n.Zlo)(i*s),s)}`),a=(0,n.n0o)(i*s+$+(0,n.Zlo)(e)),h=s}d+=`=${(0,n.KxJ)(a,h)}`,d+=(0,n.A99)(a,h)+"$";let b={num:(0,n.tJd)(a,h)[0],den:(0,n.tJd)(a,h)[1]};this.liste_questions.push(c),this.liste_corrections.push(d),this.QCM[1].push([`Calculer $${c.substring(1,c.length-2)}$ et donner le résultat sous forme irreductible`,[[d,b.num,3],[d,b.den,3]],[{texte:"numérateur",digits:b.num.toString().length,decimals:0,signe:!1,exposant_nb_chiffres:0,exposant_signe:!1,approx:0},{texte:"dénominateur",digits:b.den.toString().length,decimals:0,signe:!1,exposant_nb_chiffres:0,exposant_signe:!1,approx:0}]])}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",2,"1 : Un dénominateur multiple de l'autre\n2 : Cas général"],this.besoin_formulaire2_case_a_cocher=["Avec des nombres relatifs"]}},67567:(e,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}t.r(i),t.d(i,{default:()=>s})}}]);