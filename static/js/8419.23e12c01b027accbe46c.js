(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8419,1761,7567],{1761:(s,i,e)=>{"use strict";e.r(i),e.d(i,{amcReady:()=>l,titre:()=>a,default:()=>r});var t=e(67567),$=e(24477),o=e(13786),n=e.n(o);const l=!0,a="Additionner ou soustraire deux fractions (dénominateurs multiples)";function r(s=11){t.default.call(this),this.sup=s,this.sup2=!1,this.titre=a,this.consigne="Calculer et donner le résultat sous la forme d'une fraction simplifiée",this.spacing=2,this.spacing_corr=2,this.nb_questions=5,this.nb_cols_corr=1,this.sup2=3,this.QCM_disponible=!0,this.ModeQCM=!1,this.nouvelle_version=function(){let s,i;this.QCM=["5N20",[],"Additionner ou soustraire deux fractions (dénominateurs multiples)",1],6==this.level&&(this.QCM[0]="6C23"),this.liste_questions=[],this.liste_corrections=[],1==this.sup2&&(s=(0,$._97)(["+"],this.nb_questions)),2==this.sup2&&(s=(0,$._97)(["-"],this.nb_questions)),3==this.sup2&&(s=(0,$._97)(["+","-"],this.nb_questions));let e=[1,0,0,0],t="";t=sortie_html?"&emsp;":"\\qquad";for(let o,l,a,r,h,u,c,x=0;x<this.nb_questions;x++){for(c="",o=(0,$.nSR)(1,9),l=(0,$.nSR)(2,9,o);l==o;)l=(0,$.nSR)(2,9);if(h=this.sup>1?(0,$.nSR)(2,this.sup):1,r=l*h,a="-"==s[x]?(0,$.q$q)([(0,$.nSR)(1,l*h),(0,$.nSR)(l*h,9*h)]):(0,$.nSR)(1,19,r),"+"==s[x]){i=[`$${(0,$.Im8)(o*r+a*l,l*r)}$`,`$${(0,$.KxJ)(o+a,l+r)}$`,`$${(0,$.KxJ)(o+a,l*r)}$`,`$${(0,$.KxJ)(o*a,l*r)}$`],e=[1,0,0,0];const s=(0,$.nSR)(1,2);if(1==s?(u=`$${(0,$.KxJ)(o,l)}+${(0,$.KxJ)(a,r)}=$`,this.QCM[1].push([`$${(0,$.KxJ)(o,l)}+${(0,$.KxJ)(a,r)}=$\\\\ \n Réponses possibles`,i,e])):(u=`$${(0,$.KxJ)(a,r)}+${(0,$.KxJ)(o,l)}=$`,this.QCM[1].push([`$${(0,$.KxJ)(a,r)}+${(0,$.KxJ)(o,l)}=$\\\\ \n Réponses possibles`,i,e])),this.ModeQCM&&!mathalea.sortieAMC){u+=`<br><br>Réponses possibles : ${t}  `,(0,$.Xsq)(i,e);for(let s=0;s<4;s++)u+=`$\\square\\;$ ${i[s]}`+t,1==e[s]?c+=`$\\blacksquare\\;$ ${i[s]}`+t:c+=`$\\square\\;$ ${i[s]}`+t}else{1==s?(c=`$${(0,$.KxJ)(o,l)}+${(0,$.KxJ)(a,r)}=`,6!=this.level&&(c+=`${(0,$.KxJ)(o+(0,$.X8v)("\\times "+h),l+(0,$.X8v)("\\times "+h))}+${(0,$.KxJ)(a,r)}=${(0,$.KxJ)(o*h,l*h)}+${(0,$.KxJ)(a,r)}=`),c+=`${(0,$.KxJ)(o*h+"+"+a,r)}=${(0,$.KxJ)(o*h+a,r)}$`):(c=`$${(0,$.KxJ)(a,r)}+${(0,$.KxJ)(o,l)}=`,6!=this.level&&(c+=`${(0,$.KxJ)(a,r)}+${(0,$.KxJ)(o+(0,$.X8v)("\\times "+h),l+(0,$.X8v)("\\times "+h))}=${(0,$.KxJ)(a,r)}+${(0,$.KxJ)(o*h,l*h)}=`),c+=`${(0,$.KxJ)(a+"+"+o*h,r)}=${(0,$.KxJ)(o*h+a,r)}$`);const i=(0,$.Md9)(o*h+a,r);1!=i&&(c+=`$=${(0,$.KxJ)(n().eval((o*h+a)/i)+(0,$.X8v)("\\times "+i),n().eval(r/i)+(0,$.X8v)("\\times "+i))}=${(0,$.KxJ)(n().eval((o*h+a)/i),n().eval(r/i))}$`)}}else{if(i=[`$${(0,$.Im8)(Math.abs(o*r-a*l),Math.abs(l*r))}$`,`$${(0,$.KxJ)(Math.abs(o-a),Math.abs(l-r))}$`,`$${(0,$.KxJ)(Math.abs(o-a),l*r)}$`,`$${(0,$.KxJ)(o*a,l*r)}$`],e=[1,0,0,0],o/l>a/r?(u=`$${(0,$.KxJ)(o,l)}-${(0,$.KxJ)(a,r)}=$`,this.QCM[1].push([`$${(0,$.KxJ)(o,l)}-${(0,$.KxJ)(a,r)}=$\\\\ \n Réponses possibles`,i,e])):(u=u=`$${(0,$.KxJ)(a,r)}-${(0,$.KxJ)(o,l)}=$`,this.QCM[1].push([`$${(0,$.KxJ)(a,r)}-${(0,$.KxJ)(o,l)}=$\\\\ \n Réponses possibles`,i,e])),o/l>a/r)if(this.ModeQCM&&!mathalea.sortieAMC){u+=`<br><br>Réponses possibles : ${t}  `,(0,$.Xsq)(i,e);for(let s=0;s<4;s++)u+=`$\\square\\;$ ${i[s]}`+t,1==e[s]?c+=`$\\blacksquare\\;$ ${i[s]}`+t:c+=`$\\square\\;$ ${i[s]}`+t}else c=`$${(0,$.KxJ)(o,l)}-${(0,$.KxJ)(a,r)}=`,6!=this.level&&(c+=`${(0,$.KxJ)(o+(0,$.X8v)("\\times "+h),l+(0,$.X8v)("\\times "+h))}-${(0,$.KxJ)(a,r)}=${(0,$.KxJ)(o*h,l*h)}-${(0,$.KxJ)(a,r)}=`),c+=`${(0,$.KxJ)(o*h+"-"+a,r)}=${(0,$.KxJ)(o*h-a,r)}$`;else if(this.ModeQCM&&!mathalea.sortieAMC){u+=`<br>\tRéponses possibles : ${t}  `,(0,$.Xsq)(i,e);for(let s=0;s<4;s++)u+=`$\\square\\;$ ${i[s]}`+t,1==e[s]?c+=`$\\blacksquare\\;$ ${i[s]}`+t:c+=`$\\square\\;$ ${i[s]}`+t}else c=`$${(0,$.KxJ)(a,r)}-${(0,$.KxJ)(o,l)}=`,6!=this.level&&(c+=`${(0,$.KxJ)(a,r)}-${(0,$.KxJ)(o+(0,$.X8v)("\\times "+h),l+(0,$.X8v)("\\times "+h))}=${(0,$.KxJ)(a,r)}-${(0,$.KxJ)(o*h,l*h)}=${(0,$.KxJ)(a+"-"+o*h,r)}=`),c+=`${(0,$.KxJ)(a-o*h,r)}$`;const s=(0,$.Md9)(o*h-a,r);this.ModeQCM||((0,$.WnP)(o*h-a)%r==0?c+=`$=${n().eval((0,$.WnP)(o*h-a)/r)}$`:1!=s&&(c+=`$=${(0,$.KxJ)(n().eval((0,$.WnP)(o*h-a)/s)+(0,$.X8v)("\\times "+s),n().eval(r/s)+(0,$.X8v)("\\times "+s))}=${(0,$.KxJ)(n().eval((0,$.WnP)(o*h-a)/s),n().eval(r/s))}$`))}u=u.replaceAll("$$"," "),c=c.replaceAll("$$"," "),this.liste_questions.push(u),this.liste_corrections.push(c)}(0,$.KsX)(this)},this.besoin_formulaire_numerique=["Valeur maximale du coefficient multiplicateur",99999],this.besoin_formulaire2_numerique=["Types de calculs ",3,"1 : Additions\n2 : Soustractions\n3 : Additions et soustractions"]}},78419:(s,i,e)=>{"use strict";e.r(i),e.d(i,{amcReady:()=>$,titre:()=>o,default:()=>n});var t=e(1761);const $=!0,o="Additionner ou soustraire des fractions de même dénominateur";function n(){t.default.call(this),this.sup=1,this.sup2=3,this.level=6,this.titre=o,this.besoin_formulaire_numerique2=!1}},67567:(s,i,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(s){},this.liste_packages=[]}e.r(i),e.d(i,{default:()=>t})}}]);