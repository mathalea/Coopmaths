(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[8322,7567],{58322:(n,t,o)=>{"use strict";o.r(t),o.d(t,{titre:()=>h,default:()=>r});var s=o(67567),i=o(24477),e=o(17199);const h="Calculer une longueur avec le théorème de Pythagore";function r(){s.default.call(this),this.titre=h,this.nb_questions=3,this.nb_cols=3,this.nb_cols_corr=1,this.type_exercice="Calculer",this.video="M9sceJ8gzNc",this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let n=[],t=[];1==this.sup?this.consigne="Dans chaque cas, donner l'égalité de Pythagore.":2==this.sup?this.consigne="Dans chaque cas, compléter l'égalité en utilisant le théorème de Pythagore.":this.consigne="Dans chaque cas, calculer la longueur manquante.",2!=this.sup&&"Calculer"!=this.type_exercice||(n=(0,i._97)(["AB","BC","AC"],this.nb_questions));for(let o,s,h=0,r=0;h<this.nb_questions&&r<50;){o="",s="";let m=(0,e.xmu)(0,0),a=(0,e.xmu)((0,i.n0o)((0,i.nSR)(22,50)/10),0),c=(0,e.$7o)(a,m,90,(0,i.n0o)((0,i.nSR)(22,50)/10)/(0,e.InT)(m,a)),$=(0,e.R_h)(m,a,c);$.isVisible=!1;let l=(0,e.Wnp)($,m,(0,i.nSR)(0,360)),u=l.listePoints[0],_=l.listePoints[1],p=l.listePoints[2],b=(0,e.lvA)(_,u,p),d=Math.min(u.x,_.x,p.x)-1,M=Math.min(u.y,_.y,p.y)-1,q=Math.max(u.x,_.x,p.x)+1,x=Math.max(u.y,_.y,p.y)+1,g=(0,i.wnJ)(3,t);t.push(g);let C=(0,e.NVL)(l,g),f=(0,e.Y2F)(_,u),y=(0,e.Y2F)(u,p),F=(0,e.Y2F)(p,_),A=(0,e.InT)(u,_,1),v=(0,e.InT)(u,p,1),B=(0,e.InT)(_,p,1),P=[b,l,C];"Calculer"==this.type_exercice&&"AB"==n[h]&&P.push(y,F),"Calculer"==this.type_exercice&&"BC"==n[h]&&P.push(y,f),"Calculer"==this.type_exercice&&"AC"==n[h]&&P.push(f,F),sortie_html||(o="~\\\\"),o+=(0,e.iR9)({xmin:d,xmax:q,ymin:M,ymax:x,scale:.6},P),2==this.sup&&("AB"==n[h]&&(o+=`<br>$${u.nom+_.nom}^2=\\ldots$`),"BC"==n[h]&&(o+=`<br>$${_.nom+p.nom}^2=\\ldots$`),"AC"==n[h]&&(o+=`<br>$${u.nom+p.nom}^2=\\ldots$`)),sortie_html||h==this.nb_questions-1||(o+="\\columnbreak"),s=`Le triangle $${g}$ est rectangle en $${u.nom}$ donc d'après le théorème de Pythagore, on a : `,s+=`$${_.nom+p.nom}^2=${u.nom+_.nom}^2+${u.nom+p.nom}^2$`,2==this.sup&&("AB"==n[h]&&(s+=` d'où $${u.nom+_.nom}^2=${_.nom+p.nom}^2-${u.nom+p.nom}^2$.`),"BC"==n[h]&&(s+="."),"AC"==n[h]&&(s+=` d'où $${u.nom+p.nom}^2=${_.nom+p.nom}^2-${u.nom+_.nom}^2$.`)),"Calculer"==this.type_exercice&&("AB"==n[h]&&(s+=` donc $${u.nom+_.nom}^2=${_.nom+p.nom}^2-${u.nom+p.nom}^2$`,s+=`<br> $${u.nom+_.nom}^2=${(0,i.FpM)(B)}^2-${(0,i.FpM)(v)}^2=${(0,i.hn8)(B**2-v**2)}$`,s+=`<br> $${u.nom+_.nom}=\\sqrt{${(0,i.hn8)(B**2-v**2)}}$`,(0,i.n0o)(Math.sqrt(B**2-v**2),1)==(0,i.n0o)(Math.sqrt(B**2-v**2),5)?s+=`<br> $${u.nom+_.nom}=${(0,i.FpM)((0,i.n0o)(Math.sqrt(B**2-v**2),1))}$ cm.`:s+=`<br> $${u.nom+_.nom}\\approx${(0,i.FpM)((0,i.n0o)(Math.sqrt(B**2-v**2),1))}$ cm.`),"BC"==n[h]&&(s+=`<br> $${_.nom+p.nom}^2=${(0,i.FpM)(A)}^2+${(0,i.FpM)(v)}^2=${(0,i.hn8)(A**2+v**2)}$`,s+=`<br> $${_.nom+p.nom}=\\sqrt{${(0,i.hn8)(A**2+v**2)}}$`,(0,i.n0o)(Math.sqrt(A**2+v**2),1)==(0,i.n0o)(Math.sqrt(A**2+v**2),5)?s+=`<br> $${_.nom+p.nom}=${(0,i.FpM)((0,i.n0o)(Math.sqrt(A**2+v**2),1))}$ cm.`:s+=`<br> $${_.nom+p.nom}\\approx${(0,i.FpM)((0,i.n0o)(Math.sqrt(A**2+v**2),1))}$ cm.`),"AC"==n[h]&&(s+=` donc $${u.nom+p.nom}^2=${_.nom+p.nom}^2-${u.nom+_.nom}^2$`,s+=`<br> $${u.nom+p.nom}^2=${(0,i.FpM)(B)}^2-${(0,i.FpM)(A)}^2=${(0,i.hn8)(B**2-A**2)}$`,s+=`<br> $${u.nom+p.nom}=\\sqrt{${(0,i.hn8)(B**2-A**2)}}$`,(0,i.n0o)(Math.sqrt(B**2-A**2),1)==(0,i.n0o)(Math.sqrt(B**2-A**2),5)?s+=`<br> $${u.nom+p.nom}=${(0,i.FpM)((0,i.n0o)(Math.sqrt(B**2-A**2),1))}$ cm.`:s+=`<br> $${u.nom+p.nom}\\approx${(0,i.FpM)((0,i.n0o)(Math.sqrt(B**2-A**2),1))}$ cm.`)),-1==this.liste_questions.indexOf(o)&&(this.liste_questions.push(o),this.liste_corrections.push(s),h++),r++}(0,i.KsX)(this)}}},67567:(n,t,o)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(n){},this.liste_packages=[]}o.r(t),o.d(t,{default:()=>s})}}]);