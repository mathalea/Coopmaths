(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1655,8011,7567],{81655:(s,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>h,default:()=>l});var e=i(67567),n=i(24477),r=i(38011);const h="Générateur de compte est bon";function l(){e.default.call(this),this.titre=h,this.consigne="Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.",this.nb_questions=5,this.nb_cols=2,this.nb_cols_corr=2,this.sup=30,this.sup2=70;let s=70;this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let t,i,e,h=[],l=parseInt(this.sup);s=parseInt(this.sup2),l>s&&(l=s,this.sup=this.sup2);for(let n,o,u=0,$=0;u<this.nb_questions&&$<50;){h=(0,r.default)(l,s),t=h[0],i=h[1],e=h[3],n=`Le tirage est le suivant : $${t[0]}~;~${t[1]}~;~${t[2]}~;~${t[3]}~;~${t[4]}$ <br>La cible est : $${i}$`,o=`Pour le tirage $${t[0]}~;~${t[1]}~;~${t[2]}~;~${t[3]}~;~${t[4]}$ et pour la cible $${i}$, la solution est : $${e}=${i}$ `,o+=`ou $${h[4]}$.<br>`,o+="En effet : <br>";for(let s=0;s<4;s++)o+=`$${h[2][s]}$<br>`;-1==this.liste_questions.indexOf(n)&&(this.liste_questions.push(n),this.liste_corrections.push(o),u++),$++}(0,n.KsX)(this)},this.besoin_formulaire_numerique=["Limite inférieure",s],this.besoin_formulaire2_numerique=["Limite supérieure",100]}},38011:(s,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var e=i(24477);function n(s,t,i=1,n=4,r=8,h=3,l=5){let o,u,$,a,c,p,b,_,g,f,d,m,q,v,k,I,C,L=[],M=[1,2,2,3,3,4,4,4,4,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,11,12,13,14,15,16,17,18,19,20];o=!1;let Q=arguments.length-2;for(;0==o;){for(b=[],u=Q<1?parseInt((0,e.q$q)(M)):i,$=Q<2?parseInt((0,e.q$q)(M,[13,14,15,16,17,18,19,20,u])):n,a=Q<3?parseInt((0,e.q$q)(M,[12,13,14,15,16,17,18,19,20,u,$])):r,c=Q<4?parseInt((0,e.q$q)(M,[12,13,14,15,16,17,18,19,20,$,a])):h,p=Q<5?parseInt((0,e.q$q)(M,[12,13,14,15,16,17,18,19,20])):l,b.push(u,$,a,c,p),_=(0,e.TVQ)(b),g=["\\times","+","-","\\div"],g=(0,e.TVQ)(g),f=[`${_[0]}`,`${_[1]}`,`${_[2]}`,`${_[3]}`,`${_[4]}`],d=[`${_[0]}`,`${_[1]}`,`${_[2]}`,`${_[3]}`,`${_[4]}`];_.length>1;){if($=_.pop(),u=_.pop(),v=f.pop(),q=f.pop(),I=d.pop(),k=d.pop(),m=g.pop(),"\\times"==m)a=u*$,f.push(`${q}${m}${v}`),d.push(`${k}${m}${I}`),_.push(a);else if("\\div"==m){if(u%$!=0)break;a=u/$,"\\"==q[0]&&(q=q.substring(6,q.length),q=q.substring(0,q.length-7)),"\\"==v[0]&&(v=v.substring(6,v.length),v=v.substring(0,v.length-7)),f.push(`\\dfrac{${q}}{${v}}`),d.push(`${k}${m}${I}`),_.push(a)}else if("-"==m){if(!(u>$))break;a=u-$,f.push(`\\left(${q}${m}${v}\\right)`),d.push(`\\left(${k}${m}${I}\\right)`),_.push(a)}else"+"==m&&(a=u+$,"\\l"==v.substring(0,2)&&(v=v.substring(6,v.length),v=v.substring(0,v.length-7)),f.push(`\\left(${q}${m}${v}\\right)`),"\\l"==I.substring(0,2)&&(I=I.substring(6,I.length),I=I.substring(0,I.length-7)),d.push(`\\left(${k}${m}${I}\\right)`),_.push(a));L.push(`${u}`+m+`${$}=${a}`)}if(1==_.length&&0==g.length){if(C=_[0],C>=s&&C<=t)return o=!0,"\\"==f[0][0]&&"l"==f[0][1]&&(f[0]=f[0].substring(6,f[0].length),f[0]=f[0].substring(0,f[0].length-7)),"\\"==d[0][0]&&"l"==d[0][1]&&(d[0]=d[0].substring(6,d[0].length),d[0]=d[0].substring(0,d[0].length-7)),[b,C,L,f,d];L=[]}else L=[]}}},67567:(s,t,i)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(s){},this.liste_packages=[]}i.r(t),i.d(t,{default:()=>e})}}]);