(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9289,7567],{89289:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>n,default:()=>a});var s=i(67567),r=i(24477);const n="Calculer des étendues";function a(){s.default.call(this),this.titre=n,this.consigne="",this.nb_questions=1,this.spacing=1,this.spacing_corr=1,this.nb_cols_corr=1,this.nb_cols=1,this.sup=1,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];for(let e,t,i,s,n,a,o,h,l=0,c=0;l<this.nb_questions&&c<50;){if(1==this.sup){e=(0,r.nSR)(8,12),t=(0,r.AzO)(e,(0,r.nSR)(0,7),(0,r.nSR)(13,20)),i=20,s=0;for(let r=0;r<e;r++)i=Math.min(t[r],i),s=Math.max(t[r],s);o=`${(0,r.rV2)()} a obtenu ces notes ce trimestre-ci en mathématiques :<br>`,o+=`$${t[0]}$`;for(let i=1;i<e-1;i++)o+=`; $${t[i]}$ `;o+=`et $${t[e-1]}$.<br>`,o+="Calculer l'étendue de cette série de notes.",h=`La note la plus basse est : $${i}$.<br>La note la plus haute est $${s}$<br>`,h+=`Donc l'étendue de cette série est : $${(0,r.FpM)(s)}-${(0,r.FpM)(i)}=${(0,r.FpM)(s-i)}$`}else{let e=(0,r.nSR)(1,12),t=(0,r.nSR)(1980,2019),l=[3,5,9,13,19,24,26,25,23,18,10,5];a=(0,r.tPY)(e),n=(0,r._ej)(l[e-1],e,t),s=0,i=20,o=`En ${(0,r.Pl$)(e)} ${t}, à ${(0,r.q$q)(["Moscou","Berlin","Paris","Bruxelles","Rome","Belgrade"])}, on a relevé les températures suivantes<br>`,o+="$\\def\\arraystretch{1.5}\\begin{array}{|c",o+="|c";for(let e=0;e<Math.round(n.length/2);e++)o+="|c";o+="}\\hline  \\text{Jour}";for(let e=0;e<Math.round(n.length/2);e++)o+="&"+(0,r.FpM)(e+1);o+="\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}";for(let e=0;e<Math.round(n.length/2);e++)o+="&"+n[e],i=Math.min(n[e],i),s=Math.max(n[e],s);o+="\\\\\\hline\\end{array}$<br><br>",o+="$\\def\\arraystretch{1.5}\\begin{array}{|c",o+="|c";for(let e=Math.round(n.length/2);e<n.length;e++)o+="|c";o+="}\\hline  \\text{Jour}";for(let e=Math.round(n.length/2);e<n.length;e++)o+="&"+(0,r.FpM)(e+1);o+="\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}";for(let e=Math.round(n.length/2);e<n.length;e++)o+="&"+n[e],i=Math.min(n[e],i),s=Math.max(n[e],s);o+="\\\\\\hline\\end{array}$<br><br>",o+="Calculer l'amplitude thermique de ce mois (l'étendue de la série).",h=`En ${(0,r.Pl$)(e)} ${t}, la température minimale est $${i}^\\circ\\text{C}$.<br>La température maximale est $${s}^\\circ\\text{C}$.<br> L'amplitude thermique est :<br>`,h+=`$${(0,r.FpM)(s)}-${(0,r.Zlo)(i)}$`,i<0&&(h+=`$\\thickspace~=${(0,r.FpM)(s)}+${(0,r.FpM)(-i)}$`),h+=`$\\thickspace=${(0,r.FpM)(s-i)}^\\circ\\text{C}$`}-1==this.liste_questions.indexOf(o)&&(this.liste_questions.push(o),this.liste_corrections.push(h),l++),c++}(0,r.KsX)(this)},this.besoin_formulaire_numerique=["Type de séries",2,"1 : Série de notes\n 2 : Série de températures"]}},67567:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}i.r(t),i.d(t,{default:()=>s})}}]);