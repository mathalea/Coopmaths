(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6137,7567],{36137:(e,s,n)=>{"use strict";n.r(s),n.d(s,{titre:()=>a,default:()=>r});var t=n(67567),i=n(24477),o=n(17199);const $=n(13786),a="Trouver l’équation d’une parabole";function r(){t.default.call(this),this.titre=a,this.consigne="Trouver l'expression de la fonction f.",this.nb_questions=5,this.nb_cols=1,this.nb_cols_corr=1,this.spacing_corr=3,this.sup=4,this.correction_detaillee_disponible=!0,this.nouvelle_version=function(){let e,s;this.liste_questions=[],this.liste_corrections=[],s=this.sup<4?[parseInt(this.sup)]:[1,2,2,3,3];let n,t,a,r=[];e=(0,i._97)(s,this.nb_questions);for(let s,c,l,u,h,d,b,m,p,_,x,C,q,v=0,k=0;v<this.nb_questions&&k<50;){switch(r.push((0,i.sZE)(v+6)),s=`Quelle est l'expression de la fonction polynomiale $\\mathscr{${r[v]}}$ du second degré `,c="",e[v]){case 1:l=(0,i.nSR)(-4,4,0),u=(0,i.nSR)(-6,6,0),h=(0,i.nSR)(-10,10,0),d=(0,i.nSR)(1,5),b=(0,i.nSR)(-5,5,d),m=(0,i.nSR)(-5,5,[d,b]),p=function(e){return(0,i.n0o)(l*e**2+u*e+h)},s+=`qui passe par les points de coordonnées $(${-d};${p(-d)})$, $(0;${p(0)})$ et $(${d};${p(d)})$ ?<br>`,c=`Soit $\\mathscr{${r[v]}}(x)=ax^2+bx+c$ , l'expression de la fonction cherchée, comme $\\mathscr{${r[v]}}(0)=${p(0)}$ nous en déduisons que $c=${(0,i.X8v)(p(0),"red")}$.<br>`,c+=`Donc $\\mathscr{${r[v]}}(x)=ax^2+bx${(0,i.X8v)((0,i.CYk)(p(0)),"red")}$.<br>`,c+="En substituant dans cette expression les valeurs de l'énoncé, nous obtenons :<br>",c+=`$\\begin{cases}\n            ${p(d)}=a\\times${d}^2+b\\times${d}${(0,i.CYk)(p(0))}=${$.eval((0,i.QMq)(d**2)+"a"+(0,i.QMq)(d)+"b"+(0,i.CYk)(p(0)))} \\\\\n            ${p(-d)}=a\\times(${-d})^2+b\\times(${-d})${(0,i.CYk)(p(0))}=${$.eval((0,i.QMq)(d**2)+"a"+(0,i.QMq)(-d)+"b"+(0,i.CYk)(p(0)))}\n         \\end{cases}$<br>`,this.correction_detaillee&&(c+=`Ce qui équivaut à <br>$\\begin{cases}\n                 ${p(d)}${(0,i.CYk)(-p(0))}=${p(d)-p(0)}=${$.eval((0,i.QMq)(d**2)+"a"+(0,i.QMq)(d)+"b")} \\\\\n                 ${p(-d)}${(0,i.CYk)(-p(0))}=${p(-d)-p(0)}=${$.eval((0,i.QMq)(d**2)+"a"+(0,i.QMq)(-d)+"b")}\n               \\end{cases}$<br>`,c+=`En ajoutant et en soustrayant les équations membre à membre, on obtient :<br>\n                $\\begin{cases}\n                ${p(d)+p(-d)-2*p(0)}=${2*d**2}a \\\\\n                ${p(d)-p(-d)}=${2*d}b\n             \\end{cases}$<br>`),c+=`La résolution de ce système donne $a=${(0,i.X8v)((0,i.FpM)(l),"blue")}$ et $b=${(0,i.X8v)((0,i.FpM)(u),"green")}$.<br>`,c+=`D'où $\\mathscr{${r[v]}}(x)=${(0,i.X8v)((0,i.QMq)(l),"blue")}x^2 ${(0,i.X8v)((0,i.QMq)(u),"green")}x  ${(0,i.X8v)((0,i.CYk)(h),"red")}$<br>`;break;case 2:l=(0,i.nSR)(-3,3,0),u=2*(0,i.nSR)(-3,3,0)*l,h=(0,i.nSR)(-10,10),d=(0,i.n0o)(-u/(2*l)),b=(0,i.nSR)(-5,5,d),m=(0,i.nSR)(-5,5,[d,b]),p=function(e){return(0,i.n0o)(l*e**2+u*e+h)},s+=`dont la parabole a pour sommet le point de coordonnées $(${d};${p(d)})$ et passe par le point de coordonnées $(${b};${p(b)})$ ?<br>`,c=`D'après les coordonnées $(${d};${p(d)})$ du sommet, $\\mathscr{${r[v]}}$ a pour forme canonique : $\\mathscr{${r[v]}}(x)=a(x${(0,i.CYk)(-d)})^2${(0,i.CYk)(p(d))}$.<br>`,c+=`De plus $\\mathscr{${r[v]}}(${b})=${p(b)}$`,this.correction_detaillee?(c+=` donc $a(${b}${(0,i.CYk)(-d)})^2${(0,i.CYk)(p(d))}=${p(b)}$ `,c+=`soit $${$.eval(b**2+"a"+(0,i.CYk)(-2*d*b)+"a"+(0,i.CYk)(d**2)+"a"+(0,i.CYk)(p(d)))}=${p(b)}$.<br>`,c+=b**2-2*d*b+d**2!=1?`On en déduit que $a=\\dfrac{${p(b)}${(0,i.CYk)(-p(d))}}{${b**2-2*d*b+d**2}}=${l}$.<br>`:`On en déduit que $a=${p(b)}${(0,i.CYk)(-p(d))}=${l}$.<br>`):c+=` donc $a=${l}$.<br>`,this.correction_detaillee&&(c+=`Développons la forme canonique : $\\mathscr{${r[v]}}(x)=\n              a(x${(0,i.CYk)(-d)})^2${(0,i.CYk)(p(d))}=\n              a(x^2${(0,i.X8v)((0,i.CYk)(-2*d),"green")}x+${(0,i.X8v)((0,i.hn8)(d**2),"red")})${(0,i.X8v)((0,i.CYk)(p(d)),"red")}\n              =${(0,i.X8v)("a","blue")}x^2${(0,i.X8v)((0,i.CYk)(-2*d)+"a","green")}x${(0,i.X8v)((0,i.QMq)(d**2)+"a"+(0,i.CYk)(p(d)),"red")}$.<br>`),c+=`En remplaçant $a$ par sa valeur $${l}$ dans l'expression canonique développée $${(0,i.X8v)("a","blue")}x^2${(0,i.X8v)((0,i.CYk)(-2*d)+"a","green")}x${(0,i.X8v)((0,i.QMq)(d**2)+"a"+(0,i.CYk)(p(d)),"red")}$ on obtient :<br>`,c+=`$\\mathscr{${r[v]}}(x)=${(0,i.X8v)((0,i.L9Y)(l),"blue")}x^2${(0,i.X8v)((0,i.QMq)(u),"green")}x${(0,i.X8v)((0,i.CYk)(h),"red")}$`;break;case 3:d=(0,i.nSR)(-6,-1),b=(0,i.nSR)(1,6,-d),m=(0,i.nSR)(-5,5,[d,b]),l=(0,i.nSR)(-4,4,0),u=(0,i.n0o)(-l*(d+b)),h=l*d*b,p=function(e){return(0,i.n0o)(l*e**2+u*e+h)},s+=`qui s'annule en $x=${d}$ et en $x=${b}$ et dont la parabole passe par le point de coordonnées $(${m};${p(m)})$ ?<br>`,c+=`Comme $${d}$ et $${b}$ sont les deux solutions de l'équation $\\mathscr{${r[v]}}(x)=0$, on peut factoriser $\\mathscr{${r[v]}}(x)$ :<br>`,c+=`$\\mathscr{${r[v]}}(x)=a(x${(0,i.CYk)(-d)})(x${(0,i.CYk)(-b)})$.<br>`,c+=`Comme $\\mathscr{${r[v]}}(${m})=${p(m)}$, on en déduit que `,this.correction_detaillee?(c+=`$${p(m)}=a(${m}${(0,i.CYk)(-d)})(${m}${(0,i.CYk)(-b)})$ `,c+=`d'où $a=${p(m)}\\div ${(0,i.Zlo)((m-d)*(m-b))}=${l}$.<br>`):c+=`$a=${l}$.<br>`,c+=`On obtient ainsi $\\mathscr{${r[v]}}(x)=${(0,i.L9Y)(l)}(x${(0,i.CYk)(-d)})(x${(0,i.CYk)(-b)})$ ou en développant $\\mathscr{${r[v]}}(x)=${$.eval(`${(0,i.QMq)(l)}x^2 ${(0,i.QMq)(u)}x  ${(0,i.CYk)(h)}`)}$`}l<0?(a=Math.ceil(p(-u/(2*l))+2),n=Math.min(p(d),p(b),p(m),p(-d),p(0),p(-6),p(6))):(n=Math.floor(p(-u/(2*l))-2),a=Math.max(p(d),p(b),p(m),p(-d),p(0),p(-6),p(6))),t=a-n<10?2:2*Math.max(1,(0,i.n0o)(5*Math.round(Math.ceil((a-n)/10)/5))),_=(0,o.X4z)({xmin:-10,ymin:n-t,ymax:a+t,xmax:10,xscale:1,yscale:t,positionLabelY:-.8}),x=Math.min((0,i.n0o)(n/t),-1),C=Math.max((0,i.n0o)(a/t),1),q=e=>l*e**2+u*e+h,s+=(0,o.iR9)({xmin:-10,xmax:11,ymin:x,ymax:C+2,pixelsParCm:20,scale:.6},(0,o.hhm)(q,-10,10,"blue",1.5,_),_),-1==this.liste_questions.indexOf(s)&&(this.liste_questions.push(s),this.liste_corrections.push(c),v++),k++}(0,i.KsX)(this)},this.besoin_formulaire_numerique=["Type de questions ",4,"1 : Passant par trois points à coordonnées entières 1\n2 : Connaissant le sommet et un point de passage\n3 : Connaissant les deux racines et un point de passage\n4 : Mélange des trois type de questions"]}},67567:(e,s,n)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}n.r(s),n.d(s,{default:()=>t})}}]);