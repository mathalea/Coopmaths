(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3834,7567],{43834:(t,i,s)=>{"use strict";s.r(i),s.d(i,{titre:()=>o,default:()=>r});var e=s(67567),n=s(24477);const o="Encadrer un décimal par deux entiers consécutifs";function r(){let t;e.default.call(this),this.beta=!1,this.sup=1,this.beta,this.nb_questions=3,this.titre=o,this.consigne="Encadrer chaque nombre proposé par deux nombres entiers consécutifs.",this.nb_cols=1,this.nb_cols_corr=1,sortie_html?this.spacing=3:this.spacing=2,sortie_html?this.spacing_corr=2.5:this.spacing_corr=1.5,this.nouvelle_version=function(){t=this.beta?[0,1,2]:(0,n.TVQ)([0,1,2]),this.liste_questions=[],this.liste_corrections=[];let i=(0,n.LG7)(t,this.nb_questions);for(let t,s,e=0,o=0;e<this.nb_questions&&o<50;){let r=(0,n.nSR)(1,9),c=(0,n.nSR)(1,9),h=(0,n.nSR)(1,9),a=(0,n.nSR)(1,9),l=(0,n.nSR)(1,9),_=(0,n.nSR)(1,9),u=(0,n.nSR)(1,9),b=[];switch(b.push({enonce:`\n          $\\ldots < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l+.01*_+.001*u))} < \\ldots$          \n\t\t\t\t\t`,question:"",correction:`\n\t\t\t\t\t$${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a))} < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l+.01*_+.001*u))} < ${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a+1))}$\t\t\t\t\t`}),b.push({enonce:`\n          $\\ldots < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l+.01*_))} < \\ldots$          \n\t\t\t\t\t`,question:"",correction:`\n\t\t\t\t\t$${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a))} < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l+.01*_))} < ${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a+1))}$\t\t\t\t\t`}),b.push({enonce:`\n          $\\ldots < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l))} < \\ldots$          \n\t\t\t\t\t`,question:"",correction:`\n\t\t\t\t\t$${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a))} < ${(0,n.FpM)(1e3*r+100*c+10*h+1*a+(0,n.n0o)(.1*l))} < ${(0,n.X8v)((0,n.FpM)(1e3*r+100*c+10*h+1*a+1))}$\t\t\t\t\t`}),i[e]){case 0:t=`${b[0].enonce}`,this.beta?(t+="<br>",t+=`<br> =====CORRECTION======<br>${b[0].correction}`,t+="             ",s=""):s=`${b[0].correction}`;break;case 1:t=`${b[1].enonce}`,this.beta?(t+="<br>",t+=`<br> =====CORRECTION======<br>${b[1].correction}`,s=""):s=`${b[1].correction}`;break;case 2:t=`${b[2].enonce}`,this.beta?(t+="<br>",t+=`<br> =====CORRECTION======<br>${b[2].correction}`,s=""):s=`${b[2].correction}`}-1==this.liste_questions.indexOf(t)&&(this.liste_questions.push(t),this.liste_corrections.push(s),e++),o++}(0,n.KsX)(this)}}},67567:(t,i,s)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(t){},this.liste_packages=[]}s.r(i),s.d(i,{default:()=>e})}}]);