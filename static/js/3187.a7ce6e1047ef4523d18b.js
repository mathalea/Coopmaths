(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3187,7567],{63187:(e,n,r)=>{"use strict";r.r(n),r.d(n,{titre:()=>l,default:()=>i});var $=r(67567),t=r(17199),a=r(24477);const l="Déterminer la nature d’un polygone.";function i(){$.default.call(this),this.titre=l,this.nb_questions=2,this.nb_cols=2,this.nb_cols_corr=2,this.nouvelle_version=function(){this.liste_questions=[],this.liste_corrections=[];let e,n=(0,a._97)([1,2,3,4,5],this.nb_questions);for(let r,$,l,i,o,s,u,d,c,p,b,q,h,f,m,g,A,_,B,C,D,O,x,J,v,y,M,I,Z,F,R,S,k,P,L,Q=0,w=0;Q<this.nb_questions&&w<50;){switch(e=n[Q],e){case 1:s=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),u=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),i=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),o=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),d=s+i,c=u+o,p=s-o,b=u+i,m=(d-s)*(d-s),g=(c-u)*(c-u),f=m+g,A=(p-s)*(p-s),_=(b-u)*(b-u),B=(p-d)*(p-d),C=(b-c)*(b-c),D=A+_,P="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",P+=` $A\\left(${s};${u}\\right)$ ; $B\\left(${d};${c}\\right)$ et $C\\left(${p};${b}\\right)$`,P+="<br>Déterminer la nature du triangle $ABC$ ",L="A partir du repère, on a envie de prouver que$ABC$ est un triangle isocèle en $A$.",L+="<br> On calcule donc séparément les distances $AB$ et $AC$ ",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",L+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",L+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${d}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${c}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${m}+${g}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${(0,a.FpM)(m+g)}}$<br>`,$=(0,a.M8i)(f)[0],l=(0,a.M8i)(f)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}$<br>`,L+=`De même : $AC=\\sqrt{\\left(${p}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{De meme :       } AC=\\sqrt{${A}+${_}}$<br>`,L+=`$\\phantom{De meme :       } AC=\\sqrt{${(0,a.FpM)(A+_)}}$<br>`,$=(0,a.M8i)(D)[0],l=(0,a.M8i)(D)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}$<br>`,L+="On observe que $AC=AB$ donc le triangle $ABC$ est isocèle.",L+="<br>On calcule $BC$ pour vérifier s'il est ou non  équilatéral.",L+=`<br>On obtient : $BC=\\sqrt{${B}+${C}}=\\sqrt{${(0,a.FpM)(B+C)}}$<br>`,L+=B+C==m+g?"Le triangle $ABC$ est équilatéral.":"Le triangle $ABC$ est simplement isocèle, il n'est pas équilatéral.";break;case 2:s=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),u=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),i=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),o=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),d=s+i,c=u+o,p=s-o,b=u+i,m=(d-s)*(d-s),g=(c-u)*(c-u),f=m+g,A=(p-s)*(p-s),_=(b-u)*(b-u),B=(p-d)*(p-d),C=(b-c)*(b-c),D=A+_,P="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",P+=` $A\\left(${s};${u}\\right)$ ; $B\\left(${d};${c}\\right)$ et $C\\left(${p};${b}\\right)$`,P+="<br>Déterminer la nature du triangle $ABC$ ",L="A partir du repère, on a envie de prouver que$ABC$ est un triangle rectangle en $A$.",L+="<br> Pour vérifier que le triangle est rectabgle, on va utiliser la réciproque du théorème de Pythagore.",L+="<br> On calcule donc séparément les distances $AB^{2}$ ; $AC^{2}$ et $BC^{2}$ pour vérifier si $BC^{2}=AB^{2}+AC^{2}$ .",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",L+=" alors on a : $AB^{2}=\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}$<br>",L+=`On applique la relation à l'énoncé : $AB^{2}=\\left(${d}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${c}-${(0,a.Zlo)(u)}\\right)^{2}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB^{2}={${m}+${g}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB^{2}={${(0,a.FpM)(m+g)}}$<br>`,L+=`De même : $AC^{2}={\\left(${p}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{De meme :       } AC^{2}={${A}+${_}}$<br>`,L+=`$\\phantom{De meme :       } AC^{2}={${(0,a.FpM)(A+_)}}$<br>`,L+=`Enfin : $BC^{2}={\\left(${d}-${(0,a.Zlo)(d)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(c)}\\right)^{2}}$<br>`,L+=`$\\phantom{De meme :       } BC^{2}={${B}+${C}}$<br>`,L+=`$\\phantom{De meme :       } BC^{2}={${(0,a.FpM)(B+C)}}$<br>`,L+=`On observe que $AC^{2}+AB^{2}=${(0,a.FpM)(A+_+m+g)} ~~et~~ BC^{2}={${(0,a.FpM)(B+C)}}$.`,L+="<br>On en déduit que $BC^{2}=AC^{2}+AB^{2}$.",L+="<br>D'après la réciproque du théorème de Pythagore,  le triangle ABC est rectangle en A.";break;case 3:s=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),u=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),i=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),o=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),d=s+i,c=u+o,p=s-i,b=u-o,q=p+i,h=b+o,y=(0,a.tJd)(s+q,2)[0],M=(0,a.tJd)(s+q,2)[1],I=(0,a.tJd)(u+h,2)[0],Z=(0,a.tJd)(u+h,2)[1],F=(0,a.tJd)(d+p,2)[0],R=(0,a.tJd)(d+p,2)[1],S=(0,a.tJd)(c+b,2)[0],k=(0,a.tJd)(c+b,2)[1],m=(d-s)*(d-s),g=(c-u)*(c-u),f=m+g,x=(q-s)*(q-s),J=(h-u)*(h-u),v=x+J,A=(p-s)*(p-s),_=(b-u)*(b-u),D=A+_,r=(0,t.DoQ)(-9,-9,9,9,.2,1),P="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",P+=` $A\\left(${s};${u}\\right)$ ; $B\\left(${d};${c}\\right).$`,P+=` $C\\left(${p};${b}\\right)$ ; $D\\left(${q};${h}\\right).$`,P+="<br>Démontrer que $ABDC$ est un losange.",L="<br>Pour prouver que $ABDC$ est un losange, il y a deux stratégies :<br>",L+="$~~~~~~~~$<B>1.</B> On calcule les quatre longueurs du quadrilatère et on prouve leur égalité.<br>",L+="$\\phantom{~~~~~~~~}$Un quadrilatère qui possède quatre côtés de même longueur est un losange.<br>",L+="$~~~~~~~~$<B>2. </B> On prouve que $ABDC$ est un parallélogramme, puis il sufit de prouver qu'il possède deux côtés consécutifs de même longueur.<br>",L+="$\\phantom{~~~~~~~~}$ Un parallélogramme qui possède deux côtés consécutifs de même longueur est un losange",L+="<br>Les deux démonstrations se valent. On choisit ici la <B>démonstration n°2</B>, plus variée, mais la n°1 est valable.<br>",L+="<B>Démonstration :</B><br>",L+="On veut prouver que $ABDC$ est un parallélogramme :",L+="<br>On sait que ABDC est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",L+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",L+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",L+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_I=\\dfrac{${s}+${(0,a.Zlo)(q)}}{2} \\\\ y_I=\\dfrac{${u}+${(0,a.Zlo)(h)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.FpM)(s+q)}}{2}\\\\y_I=\\dfrac{${(0,a.FpM)(u+h)}}{2}\\end{cases}$`,1!=M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};\\dfrac{${I}}{${Z}};\\right)$`),1==M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};\\dfrac{${I}}{${Z}}\\right)$`),1!=M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};${I}\\right)$`),1==M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};${I}\\right)$`),L+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",L+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_J=\\dfrac{${d}+${(0,a.Zlo)(p)}}{2} \\\\ y_J=\\dfrac{${c}+${(0,a.Zlo)(b)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.FpM)(d+p)}}{2}\\\\y_J=\\dfrac{${(0,a.FpM)(c+b)}}{2}\\end{cases}$`,1!=R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};\\dfrac{${S}}{${k}};\\right)$`),1==R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};\\dfrac{${S}}{${k}}\\right)$`),1!=R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};${S}\\right)$`),1==R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};${S}\\right)$`),L+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",L+="<br>$ABDC$ est donc un parallélogramme.",L+="<br>On calcule maintenant deux cotés consécutifs : $AB$ et $AC$ par exemple.",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",L+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",L+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${d}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${c}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${m}+${g}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${(0,a.FpM)(m+g)}}$<br>`,$=(0,a.M8i)(f)[0],l=(0,a.M8i)(f)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AB=${$}$<br>`,L+=`On procède de même pour $AC$: $AC=\\sqrt{\\left(${p}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AC=\\sqrt{${A}+${_}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AC=\\sqrt{${(0,a.FpM)(A+_)}}$<br>`,$=(0,a.M8i)(D)[0],l=(0,a.M8i)(D)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AC=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AC=\\sqrt{${l}}$<br>`,L+="<br>On observe que $AB=AC$, $ABDC$ est donc bien un losange.";break;case 4:s=(0,a.nSR)(0,6)*(0,a.q$q)([-1,1]),u=(0,a.nSR)(0,6)*(0,a.q$q)([-1,1]),i=(0,a.nSR)(1,3)*(0,a.q$q)([-1,1]),o=(0,a.nSR)(1,3)*(0,a.q$q)([-1,1]),r=(0,a.nSR)(2,4),d=s+i*r,c=u+o*r,p=s-o,b=u+i,q=p+i*r,h=b+o*r,y=(0,a.tJd)(s+q,2)[0],M=(0,a.tJd)(s+q,2)[1],I=(0,a.tJd)(u+h,2)[0],Z=(0,a.tJd)(u+h,2)[1],F=(0,a.tJd)(d+p,2)[0],R=(0,a.tJd)(d+p,2)[1],S=(0,a.tJd)(c+b,2)[0],k=(0,a.tJd)(c+b,2)[1],m=(d-s)*(d-s),g=(c-u)*(c-u),f=m+g,A=(p-s)*(p-s),_=(b-u)*(b-u),D=A+_,x=(q-s)*(q-s),J=(h-u)*(h-u),v=x+J,B=(d-p)*(d-p),C=(c-b)*(c-b),O=B+C,r=(0,t.DoQ)(-9,-9,9,9,.2,1),P="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",P+=` $A\\left(${s};${u}\\right)$ ; $B\\left(${d};${c}\\right).$`,P+=` $C\\left(${p};${b}\\right)$ ; $D\\left(${q};${h}\\right).$`,P+="<br>Démontrer que $ABDC$ est un rectangle.",L="<br>Pour prouver que $ABDC$ est un rectangle, il y a pluieurs stratégies :<br>",L+="$~~~~~~~~$<B>1.</B> On prouve avec la réciproque du théorème de Pythagore que $ABDC$ possède un angle droit,<br>",L+="$puis on prouve qu'il a ses côtés opposés de même longueur.<br>",L+="$~~~~~~~~$<B>2. </B> On prouve que $ABDC$ est un parallélogramme, puis il sufit de prouver que ses diagonales sont de même longueur.<br>",L+="$\\phantom{~~~~~~~~}$ Un parallélogramme qui a ses diagonales de même longueur est un rectangle.",L+="<br>Plusiurs démonstrations se valent. On choisit ici la <B>démonstration n°2</B>, mais d'autres idées sont valables.<br>",L+="<B>Démonstration :</B><br>",L+="On veut prouver que $ABDC$ est un parallélogramme :",L+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",L+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",L+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",L+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",L+="On applique la relation a l'enonce : ",L+=`$\\begin{cases}x_I=\\dfrac{${s}+${(0,a.Zlo)(q)}}{2} \\\\ y_I=\\dfrac{${u}+${(0,a.Zlo)(h)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.FpM)(s+q)}}{2}\\\\y_I=\\dfrac{${(0,a.FpM)(u+h)}}{2}\\end{cases}$`,1!=M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};\\dfrac{${I}}{${Z}};\\right)$`),1==M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};\\dfrac{${I}}{${Z}}\\right)$`),1!=M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};${I}\\right)$`),1==M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};${I}\\right)$`),L+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",L+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_J=\\dfrac{${d}+${(0,a.Zlo)(p)}}{2} \\\\ y_J=\\dfrac{${c}+${(0,a.Zlo)(b)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.FpM)(d+p)}}{2}\\\\y_J=\\dfrac{${(0,a.FpM)(c+b)}}{2}\\end{cases}$`,1!=R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};\\dfrac{${S}}{${k}};\\right)$`),1==R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};\\dfrac{${S}}{${k}}\\right)$`),1!=R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};${S}\\right)$`),1==R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};${S}\\right)$`),L+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",L+="<br>$ABDC$ est donc un parallélogramme.",L+="<br>On calcule maintenant les diagonales de $ABDC$ : $AD$ et $BC$ par exemple.",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère orthonormé,",L+=" alors on a : $AD=\\sqrt{\\left(x_D-x_A\\right)^{2}+\\left(y_D-y_A\\right)^{2}}.$<br>",L+=`On applique la relation à l'énoncé : $AD=\\sqrt{\\left(${q}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${h}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${x}+${J}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${(0,a.FpM)(x+J)}}$<br>`,$=(0,a.M8i)(v)[0],l=(0,a.M8i)(v)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AD=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AD=\\sqrt{${l}}$<br>`,L+=`On procède de même pour $BC$: $BC=\\sqrt{\\left(${p}-${(0,a.Zlo)(d)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(c)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${B}+${C}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${(0,a.FpM)(B+C)}}$<br>`,$=(0,a.M8i)(O)[0],l=(0,a.M8i)(O)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } BC=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } BC=${$}$<br>`,L+="<br>On observe que $BC=AD$, $ABDC$ est donc bien un rectangle.";break;case 5:s=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),u=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),i=(0,a.nSR)(1,9)*(0,a.q$q)([-1,1]),o=(0,a.nSR)(1,9)*(0,a.q$q)([-1,1]),d=s+i,c=u+o,p=s-o,b=u+i,q=p+i,h=b+o,y=(0,a.tJd)(s+q,2)[0],M=(0,a.tJd)(s+q,2)[1],I=(0,a.tJd)(u+h,2)[0],Z=(0,a.tJd)(u+h,2)[1],F=(0,a.tJd)(d+p,2)[0],R=(0,a.tJd)(d+p,2)[1],S=(0,a.tJd)(c+b,2)[0],k=(0,a.tJd)(c+b,2)[1],m=(d-s)*(d-s),g=(c-u)*(c-u),f=m+g,A=(p-s)*(p-s),_=(b-u)*(b-u),D=A+_,x=(q-s)*(q-s),J=(h-u)*(h-u),v=x+J,B=(d-p)*(d-p),C=(c-b)*(c-b),O=B+C,r=(0,t.DoQ)(-9,-9,9,9,.2,1),P="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",P+=` $A\\left(${s};${u}\\right)$ ; $B\\left(${d};${c}\\right).$`,P+=` $C\\left(${p};${b}\\right)$ ; $D\\left(${q};${h}\\right).$`,P+="<br>Démontrer que $ABDC$ est un carré.",L="<br>Pour prouver que $ABDC$ est un carré, il y a pluieurs stratégies :<br>",L+="Dans cette correction, on propose de procéder par étapes :<br>",L+="On va prouver d'abord que $ABDC$ est un parallélogramme en utilisant les milieux des diagonales.<br>",L+="puis on prouvera qu'il est un rectangle en comparant ses diagonales.<br>",L+="<br>Enfin, en vérifiant qu'il a deux côtés consécutifs de même longueur, on aura prouvé qu'il est un carré. ",L+="<br><B>Démonstration :</B><br>",L+="<B>1. On prouve que $ABDC$ est un parallélogramme :</B>",L+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",L+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",L+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",L+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_I=\\dfrac{${s}+${(0,a.Zlo)(q)}}{2} \\\\ y_I=\\dfrac{${u}+${(0,a.Zlo)(h)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.FpM)(s+q)}}{2}\\\\y_I=\\dfrac{${(0,a.FpM)(u+h)}}{2}\\end{cases}$`,1!=M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};\\dfrac{${I}}{${Z}};\\right)$`),1==M&&1!=Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};\\dfrac{${I}}{${Z}}\\right)$`),1!=M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${y}}{${M}};${I}\\right)$`),1==M&&1==Z&&(L+=`  <br>Ce qui donne au final : $ I\\left(${y};${I}\\right)$`),L+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",L+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_J=\\dfrac{${d}+${(0,a.Zlo)(p)}}{2} \\\\ y_J=\\dfrac{${c}+${(0,a.Zlo)(b)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.FpM)(d+p)}}{2}\\\\y_J=\\dfrac{${(0,a.FpM)(c+b)}}{2}\\end{cases}$`,1!=R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};\\dfrac{${S}}{${k}};\\right)$`),1==R&&1!=k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};\\dfrac{${S}}{${k}}\\right)$`),1!=R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${F}}{${R}};${S}\\right)$`),1==R&&1==k&&(L+=`  <br>Ce qui donne au final : $ J\\left(${F};${S}\\right)$`),L+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",L+="<br>$ABDC$ est donc un parallélogramme.",L+="<br><B>2. On prouve que $ABDC$ est un rectangle :</B>",L+="<br>On calcule maintenant les diagonales de $ABDC$ : $AD$ et $BC$ .",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère orthonormé,",L+=" alors on a : $AD=\\sqrt{\\left(x_D-x_A\\right)^{2}+\\left(y_D-y_A\\right)^{2}}.$<br>",L+=`On applique la relation à l'énoncé : $AD=\\sqrt{\\left(${q}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${h}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${x}+${J}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${(0,a.FpM)(x+J)}}$<br>`,$=(0,a.M8i)(v)[0],l=(0,a.M8i)(v)[1],1!=l?1!=$&&(L+=`$\\phantom{On applique la relation a l'enonce :   } AD=${$}\\sqrt{${l}}$<br>`):L+=`$\\phantom{On applique la relation a l'enonce :   } AD=${$}$<br>`,L+=`On procède de même pour $BC$: $BC=\\sqrt{\\left(${p}-${(0,a.Zlo)(d)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(c)}\\right)^{2}}$<br>`,L+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${B}+${C}}$<br>`,$=(0,a.M8i)(O)[0],l=(0,a.M8i)(O)[1],L+=1!=l?1!=$?`$\\phantom{On applique la relation a l'enonce :   } BC=${$}\\sqrt{${l}}$<br>`:`$\\phantom{On applique la relation a l'enonce :   } BC=\\sqrt{${l}}$<br>`:`$\\phantom{On applique la relation a l'enonce :   } BC=${$}$<br>`,L+="<br>On observe que $BC=AD$, $ABDC$ est donc bien un rectangle.",L+="<br><B>3. On prouve que $ABDC$ est un carré :</B>",L+="<br>On calcule maintenant deux côtés consécutilfs de $ABDC$ : $AB$ et $AC$ par exemple.",L+=` <br>$AB=\\sqrt{\\left(${d}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${c}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$AB =\\sqrt{${m}+${g}}$<br>`,L+=`$AB =\\sqrt{${(0,a.FpM)(m+g)}}$<br>`,$=(0,a.M8i)(f)[0],l=(0,a.M8i)(f)[1],1!=l?1!=$&&(L+=`$AB=${$}\\sqrt{${l}}$<br>`):L+=`$AB=${$}$<br>`,L+=`De même : $AC=\\sqrt{\\left(${p}-${(0,a.Zlo)(s)}\\right)^{2}+\\left(${b}-${(0,a.Zlo)(u)}\\right)^{2}}$<br>`,L+=`$\\phantom{De meme :       } AC=\\sqrt{${A}+${_}}$<br>`,L+=`$\\phantom{De meme :       } AC=\\sqrt{${(0,a.FpM)(A+_)}}$<br>`,$=(0,a.M8i)(D)[0],l=(0,a.M8i)(D)[1],1!=l?(console.log($),1!=$&&(L+=`$\\phantom{De meme :       } AC=${$}\\sqrt{${l}}$<br>`)):L+=`$\\phantom{De meme :  } AC=${$}$<br>`,L+="On observe que $AC=AB$ donc $ABDC$ est bien un carré."}-1==this.liste_questions.indexOf(P)&&(this.liste_questions.push(P),this.liste_corrections.push(L),Q++),w++}(0,a.KsX)(this)}}},67567:(e,n,r)=>{"use strict";function $(){this.titre="",this.consigne="",this.consigne_correction="",this.liste_questions=[],this.liste_corrections=[],this.introduction="",this.contenu="",this.contenu_correction="",this.nb_questions=10,this.nb_cols=2,this.nb_cols_corr=2,this.spacing=1,this.spacing_corr=1,this.beamer=!1,this.besoin_formulaire_numerique=!1,this.besoin_formulaire_texte=!1,this.besoin_formulaire_case_a_cocher=!1,this.consigne_modifiable=!0,this.nb_questions_modifiable=!0,this.nb_cols_modifiable=!0,this.nb_cols_corr_modifiable=!0,this.spacing_modifiable=!0,this.spacing_corr_modifiable=!0,this.correction_detaillee_disponible=!1,this.correction_detaillee=!0,this.video="",this.bouton_aide=!1,this.tailleDiaporama=50,this.pas_de_version_LaTeX=!1,this.QCM=!1,this.QCM_disponible=!1,this.ModeQCM=!1,this.MG32editable=!1,this.nouvelle_version=function(e){},this.liste_packages=[]}r.r(n),r.d(n,{default:()=>$})}}]);