(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6281,7567],{16281:(e,n,i)=>{"use strict";i.r(n),i.d(n,{titre:()=>s,default:()=>a});var $=i(67567),r=i(24477),t=i(17199);const s="Déterminer les coordonnées milieu d’un segment dans un repère";function a(){$.default.call(this),this.titre=s,this.nb_questions=2,this.nb_cols=2,this.nb_cols_corr=2,this.sup=1,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let e,n=[1,2,3,4];1==this.sup&&(n=[1]),2==this.sup&&(n=[2]),3==this.sup&&(n=[3,4]);let i=(0,r._97)(n,this.nb_questions);for(let n,$,s,a,o,l,d,u,c,f,_,h,b,q,m,p,x,g,I,y,J,B,A,C,D,R,O,S,M,v=0,F=0;v<this.nb_questions&&F<50;){switch(e=i[v],e){case 1:l=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),d=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),u=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),c=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),u==l&&d==c&&(u+=(0,r.nSR)(1,5)*(0,r.q$q)([-1,1])),q=(u-l)*(u-l),m=(c-d)*(c-d),p=(0,r.tJd)(l+u,2)[0],x=(0,r.tJd)(l+u,2)[1],g=(0,r.tJd)(d+c,2)[0],I=(0,r.tJd)(d+c,2)[1],a=(0,t.flY)(-9,-9,9,9),C=(0,t.xmu)(l,d,"A"),D=(0,t.xmu)(u,c,"B"),n=(0,t.DoQ)(-9,-9,9,9),o=(0,t.EXn)(C,D,"blue"),R=(0,t.L6P)(C,D),O=(0,t.BD1)(C,D),S="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",S+=` $A\\left(${l};${d}\\right)$ et $B\\left(${u};${c}\\right)$`,S+="<br>Déterminer les coordonnées du point $I$ milieu du segment $[AB]$ ",M=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},n,a,R,o,O),M+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",M+="<br> alors les coordonnées du point $I$ milieu de $[AB]$ sont ",M+="$I\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}x_I=\\dfrac{${l}+${(0,r.Zlo)(u)}}{2} \\\\ y_I=\\dfrac{${d}+${(0,r.Zlo)(c)}}{2}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,r.FpM)(l+u)}}{2}\\\\y_I=\\dfrac{${(0,r.FpM)(d+c)}}{2}\\end{cases}$`,1!=x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};\\dfrac{${g}}{${I}};\\right)$`),1==x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};\\dfrac{${g}}{${I}}\\right)$`),1!=x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};${g}\\right)$`),1==x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};${g}\\right)$`);break;case 2:l=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),d=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),xI=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),yI=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),xI==l&&yI==d&&(xI+=(0,r.nSR)(1,5)*(0,r.q$q)([-1,1])),q=(u-l)*(u-l),m=(c-d)*(c-d),p=(0,r.tJd)(l+u,2)[0],x=(0,r.tJd)(l+u,2)[1],g=(0,r.tJd)(d+c,2)[0],I=(0,r.tJd)(d+c,2)[1],a=(0,t.flY)(-9,-9,9,9),C=(0,t.xmu)(l,d,"A","red"),D=(0,t.xmu)(u,c,"B","red"),n=(0,t.DoQ)(-9,-9,9,9),o=(0,t.EXn)(C,D,"blue"),R=(0,t.L6P)(C,D),O=(0,t.BD1)(C,D),S="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",S+=` $A\\left(${l};${d}\\right)$ et $I\\left(${xI};${yI}\\right)$`,S+="<br>Déterminer les coordonnées du point $B$ tel que I soit le milieu du segment $[AB]$ ",M=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},R,O,a,n,o),M+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",M+=" <br>alors les coordonnées du point $I$ milieu de $[AB]$ sont ",M+="$I\\left(\\dfrac{x_A+x_B}{2};\\dfrac{y_A+y_B}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}${xI}=\\dfrac{${l}+x_B}{2} \\\\ ${yI}=\\dfrac{${d}+y_B}{2}\\end{cases}$`,M+=`$\\iff \\begin{cases}x_B=2\\times ${xI} -${(0,r.Zlo)(l)} \\\\ y_B=2\\times ${yI}-${(0,r.Zlo)(d)}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_B={${(0,r.FpM)(2*xI-l)}}\\\\y_B=${(0,r.FpM)(2*yI-d)}\\end{cases}$`,M+=`<br>Au final : $B\\left( ${(0,r.FpM)(2*xI-l)};${(0,r.FpM)(2*yI-d)}\\right)$`;break;case 3:l=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),d=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(1,9)*(0,r.q$q)([-1,1]),s=(0,r.nSR)(1,9)*(0,r.q$q)([-1,1]),u=l+$,c=d+s,f=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),_=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),f==l&&d==_&&(f+=(0,r.nSR)(1,5)*(0,r.q$q)([-1,1])),h=f+$,b=_+s,p=(0,r.tJd)(l+h,2)[0],x=(0,r.tJd)(l+h,2)[1],g=(0,r.tJd)(d+b,2)[0],I=(0,r.tJd)(d+b,2)[1],y=(0,r.tJd)(u+f,2)[0],J=(0,r.tJd)(u+f,2)[1],B=(0,r.tJd)(c+_,2)[0],A=(0,r.tJd)(c+_,2)[1],a=(0,t.flY)(-9,-9,9,9),C=(0,t.xmu)(l,d,"A","red"),D=(0,t.xmu)(u,c,"B","red"),n=(0,t.DoQ)(xmin=-9,ymin=-9,xmax=9,ymax=9,thick=.2,step=1),o=(0,t.EXn)(C,D,"blue"),R=(0,t.L6P)(C,D),O=(0,t.BD1)(C,D),S="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",S+=` $A\\left(${l};${d}\\right)$ ; $B\\left(${u};${c}\\right).$`,S+=` $C\\left(${f};${_}\\right)$ ; $D\\left(${h};${b}\\right).$`,S+="<br>Déterminer si le quadrilatère $ABDC$ est un parallélogramme.",M=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},R,O,a,n,o),M+="<br>On sait que ABDC est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.$",M+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère :",M+="On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",M+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",M+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}x_I=\\dfrac{${l}+${(0,r.Zlo)(h)}}{2} \\\\ y_I=\\dfrac{${d}+${(0,r.Zlo)(b)}}{2}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,r.FpM)(l+h)}}{2}\\\\y_I=\\dfrac{${(0,r.FpM)(d+b)}}{2}\\end{cases}$`,1!=x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};\\dfrac{${g}}{${I}};\\right)$`),1==x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};\\dfrac{${g}}{${I}}\\right)$`),1!=x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};${g}\\right)$`),1==x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};${g}\\right)$`),M+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",M+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}x_J=\\dfrac{${u}+${(0,r.Zlo)(f)}}{2} \\\\ y_J=\\dfrac{${c}+${(0,r.Zlo)(_)}}{2}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,r.FpM)(u+f)}}{2}\\\\y_J=\\dfrac{${(0,r.FpM)(c+_)}}{2}\\end{cases}$`,1!=J&&1!=A&&(M+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${y}}{${J}};\\dfrac{${B}}{${A}};\\right)$`),1==J&&1!=A&&(M+=`  <br>Ce qui donne au final : $ J\\left(${y};\\dfrac{${B}}{${A}}\\right)$`),1!=J&&1==A&&(M+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${y}}{${J}};${B}\\right)$`),1==J&&1==A&&(M+=`  <br>Ce qui donne au final : $ J\\left(${y};${B}\\right)$`),M+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",M+="<br>$ABDC$ est donc un parallélogramme.";break;case 4:l=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),d=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),$=(0,r.nSR)(1,9)*(0,r.q$q)([-1,1]),s=(0,r.nSR)(1,9)*(0,r.q$q)([-1,1]),u=l+$,c=d+s,f=(0,r.nSR)(0,5)*(0,r.q$q)([-1,1]),_=(0,r.nSR)(0,9)*(0,r.q$q)([-1,1]),f==l&&d==_&&(f+=(0,r.nSR)(1,5)*(0,r.q$q)([-1,1])),h=f+$+(0,r.nSR)(1,2)*(0,r.q$q)([-1,1]),b=_+s+(0,r.nSR)(0,1)*(0,r.q$q)([-1,1]),p=(0,r.tJd)(l+h,2)[0],x=(0,r.tJd)(l+h,2)[1],g=(0,r.tJd)(d+b,2)[0],I=(0,r.tJd)(d+b,2)[1],y=(0,r.tJd)(u+f,2)[0],J=(0,r.tJd)(u+f,2)[1],B=(0,r.tJd)(c+_,2)[0],A=(0,r.tJd)(c+_,2)[1],a=(0,t.flY)(-9,-9,9,9),C=(0,t.xmu)(l,d,"A","red"),D=(0,t.xmu)(u,c,"B","red"),n=(0,t.DoQ)(-9,-9,9,9),o=(0,t.EXn)(C,D,"blue"),R=(0,t.L6P)(C,D),O=(0,t.BD1)(C,D),S="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",S+=` $A\\left(${l};${d}\\right)$ ; $B\\left(${u};${c}\\right).$`,S+=` $C\\left(${f};${_}\\right)$ ; $D\\left(${h};${b}\\right).$`,S+="<br>Déterminer si le quadrilatère $ABDC$ est un parallélogramme.",M=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},R,O,a,n,o),M+="<br>On sait que ABDC est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.$",M+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère :",M+="On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",M+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",M+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}x_I=\\dfrac{${l}+${(0,r.Zlo)(h)}}{2} \\\\ y_I=\\dfrac{${d}+${(0,r.Zlo)(b)}}{2}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,r.FpM)(l+h)}}{2}\\\\y_I=\\dfrac{${(0,r.FpM)(d+b)}}{2}\\end{cases}$`,1!=x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};\\dfrac{${g}}{${I}};\\right)$`),1==x&&1!=I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};\\dfrac{${g}}{${I}}\\right)$`),1!=x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${p}}{${x}};${g}\\right)$`),1==x&&1==I&&(M+=`  <br>Ce qui donne au final : $ I\\left(${p};${g}\\right)$`),M+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",M+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",M+="On applique la relation à l'énoncé : ",M+=`$\\begin{cases}x_J=\\dfrac{${u}+${(0,r.Zlo)(f)}}{2} \\\\ y_J=\\dfrac{${c}+${(0,r.Zlo)(_)}}{2}\\end{cases}$`,M+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,r.FpM)(u+f)}}{2}\\\\y_J=\\dfrac{${(0,r.FpM)(c+_)}}{2}\\end{cases}$`,1!=J&&1!=A&&(M+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${y}}{${J}};\\dfrac{${B}}{${A}};\\right)$`),1==J&&1!=A&&(M+=`  <br>Ce qui donne au final : $ J\\left(${y};\\dfrac{${B}}{${A}}\\right)$`),1!=J&&1==A&&(M+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${y}}{${J}};${B}\\right)$`),1==J&&1==A&&(M+=`  <br>Ce qui donne au final : $ J\\left(${y};${B}\\right)$`),M+="<br>On observe que $I$ et $J$ n'ont pas les mêmes coordonnées, donc les deux diagonales du quadrilatère ne se coupent pas en leur milieu.",M+="<br>$ABDC$ n'est donc pas un parallélogramme."}-1==this.liste_questions.indexOf(S)&&(this.liste_questions.push(S),this.liste_corrections.push(M),v++),F++}(0,r.KsX)(this)},this.besoin_formulaire_numerique=["Niveau de difficulté",3,"1 : Application directe de la formule 2 : Application indirecte de la formule 3: Caractériser un parallélogramme."]}},67567:(e,n,i)=>{"use strict";function $(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}i.r(n),i.d(n,{default:()=>$})}}]);