"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[68678,25523],{68678:(e,n,r)=>{r.r(n),r.d(n,{titre:()=>i,default:()=>l});var $=r(25523),t=r(71250),a=r(25482);const i="Déterminer la nature d’un polygone";function l(){$.default.call(this),this.titre=i,this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,n,r,$,i,l,s,o,u,d,c;const p=(0,a.SRM)([1,2,3,4,5],this.nbQuestions);for(let h,b,m,q,f,g,A,C,B,O,D,x,_,J,y,v,M,P,I,Y,R,S,V,k,Q,F,L,G,N,T,w,E,U,K,j,z=0,H=0;z<this.nbQuestions&&H<50;){switch(n=[],e=p[z],e){case 1:g=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),A=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),q=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),f=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),C=g+q,B=A+f,O=g-f,D=A+q,x=0,_=0,y=(C-g)*(C-g),v=(B-A)*(B-A),J=y+v,M=(O-g)*(O-g),P=(D-A)*(D-A),I=(O-C)*(O-C),Y=(D-B)*(D-B),R=M+P,K="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",K+=` $A\\left(${g};${A}\\right)$ ; $B\\left(${C};${B}\\right)$ et $C\\left(${O};${D}\\right)$`,K+="<br>Déterminer la nature du triangle $ABC$ ",j="A partir du repère, on a envie de prouver que$ABC$ est un triangle isocèle en $A$.",j+="<br> On calcule donc séparément les distances $AB$ et $AC$ ",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",j+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}$<br>",j+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${C}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${B}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${y}+${v}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${(0,a.euh)(y+v)}}$<br>`,b=(0,a.uV4)(J)[0],m=(0,a.uV4)(J)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}$<br>`,j+=`De même : $AC=\\sqrt{\\left(${O}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{De meme :       } AC=\\sqrt{${M}+${P}}$<br>`,j+=`$\\phantom{De meme :       } AC=\\sqrt{${(0,a.euh)(M+P)}}$<br>`,b=(0,a.uV4)(R)[0],m=(0,a.uV4)(R)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}$<br>`,j+="On observe que $AC=AB$ donc le triangle $ABC$ est isocèle.",j+="<br>On calcule $BC$ pour vérifier s'il est ou non  équilatéral.",j+=`<br>On obtient : $BC=\\sqrt{${I}+${Y}}=\\sqrt{${(0,a.euh)(I+Y)}}$<br>`,j+=I+Y===y+v?"Le triangle $ABC$ est équilatéral.":"Le triangle $ABC$ est simplement isocèle, il n'est pas équilatéral.",r=(0,t.xmu)(g,A,"A"),$=(0,t.xmu)(C,B,"B"),i=(0,t.xmu)(O,D,"C"),s=(0,t.uGk)(r,$,i),n.push(s[0],s[1]);break;case 2:g=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),A=(0,a.nSR)(0,5)*(0,a.q$q)([-1,1]),q=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),f=(0,a.nSR)(1,5)*(0,a.q$q)([-1,1]),C=g+q,B=A+f,O=g-f,D=A+q,y=(C-g)*(C-g),v=(B-A)*(B-A),J=y+v,M=(O-g)*(O-g),P=(D-A)*(D-A),I=(O-C)*(O-C),Y=(D-B)*(D-B),R=M+P,K="Dans un repère orthonormé $(O,I,J)$, on donne les points suivants :",K+=` $A\\left(${g};${A}\\right)$ ; $B\\left(${C};${B}\\right)$ et $C\\left(${O};${D}\\right)$`,K+="<br>Déterminer la nature du triangle $ABC$ ",j="A partir du repère, on a envie de prouver que$ABC$ est un triangle rectangle en $A$.",j+="<br> Pour vérifier que le triangle est rectabgle, on va utiliser la réciproque du théorème de Pythagore.",j+="<br> On calcule donc séparément les distances $AB^{2}$ ; $AC^{2}$ et $BC^{2}$ pour vérifier si $BC^{2}=AB^{2}+AC^{2}$ .",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",j+=" alors on a : $AB^{2}=\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}$<br>",j+=`On applique la relation à l'énoncé : $AB^{2}=\\left(${C}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${B}-${(0,a.PMY)(A)}\\right)^{2}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB^{2}={${y}+${v}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB^{2}={${(0,a.euh)(y+v)}}$<br>`,j+=`De même : $AC^{2}={\\left(${O}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{De meme :       } AC^{2}={${M}+${P}}$<br>`,j+=`$\\phantom{De meme :       } AC^{2}={${(0,a.euh)(M+P)}}$<br>`,j+=`Enfin : $BC^{2}={\\left(${C}-${(0,a.PMY)(C)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(B)}\\right)^{2}}$<br>`,j+=`$\\phantom{De meme :       } BC^{2}={${I}+${Y}}$<br>`,j+=`$\\phantom{De meme :       } BC^{2}={${(0,a.euh)(I+Y)}}$<br>`,j+=`On observe que $AC^{2}+AB^{2}=${(0,a.euh)(M+P+y+v)} ~~et~~ BC^{2}={${(0,a.euh)(I+Y)}}$.`,j+="<br>On en déduit que $BC^{2}=AC^{2}+AB^{2}$.",j+="<br>D'après la réciproque du théorème de Pythagore,  le triangle ABC est rectangle en A.",r=(0,t.xmu)(g,A,"A"),$=(0,t.xmu)(C,B,"B"),i=(0,t.xmu)(O,D,"C"),s=(0,t.uGk)(r,$,i),n.push(s[0],s[1]);break;case 3:g=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),A=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),q=(0,a.nSR)(1,5),f=(0,a.nSR)(1,5,q)*(0,a.q$q)([-1,1]),q*=(0,a.q$q)([-1,1]),C=g+q,B=A+f,O=C-f,D=B-q,x=O-q,_=D-f,F=(0,a.OlJ)(g+x,2)[0],L=(0,a.OlJ)(g+x,2)[1],G=(0,a.OlJ)(A+_,2)[0],N=(0,a.OlJ)(A+_,2)[1],T=(0,a.OlJ)(C+O,2)[0],w=(0,a.OlJ)(C+O,2)[1],E=(0,a.OlJ)(B+D,2)[0],U=(0,a.OlJ)(B+D,2)[1],y=(C-g)*(C-g),v=(B-A)*(B-A),J=y+v,V=(x-g)*(x-g),k=(_-A)*(_-A),Q=V+k,M=(O-g)*(O-g),P=(D-A)*(D-A),R=M+P,h=(0,t.DoQ)(-9,-9,9,9,.2,1),K="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",K+=` $A\\left(${g};${A}\\right)$ ; $B\\left(${C};${B}\\right).$`,K+=` $C\\left(${O};${D}\\right)$ ; $D\\left(${x};${_}\\right).$`,K+="<br>Démontrer que $ABDC$ est un losange.",j="<br>Pour prouver que $ABDC$ est un losange, il y a deux stratégies :<br>",j+="$~~~~~~~~$<B>1.</B> On calcule les quatre longueurs du quadrilatère et on prouve leur égalité.<br>",j+="$\\phantom{~~~~~~~~}$Un quadrilatère qui possède quatre côtés de même longueur est un losange.<br>",j+="$~~~~~~~~$<B>2. </B> On prouve que $ABDC$ est un parallélogramme, puis il sufit de prouver qu'il possède deux côtés consécutifs de même longueur.<br>",j+="$\\phantom{~~~~~~~~}$ Un parallélogramme qui possède deux côtés consécutifs de même longueur est un losange",j+="<br>Les deux démonstrations se valent. On choisit ici la <B>démonstration n°2</B>, plus variée, mais la n°1 est valable.<br>",j+="<B>Démonstration :</B><br>",j+="On veut prouver que $ABDC$ est un parallélogramme :",j+="<br>On sait que ABDC est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",j+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",j+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",j+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",j+="On applique la relation à l'énoncé : ",j+=`$\\begin{cases}x_I=\\dfrac{${g}+${(0,a.PMY)(x)}}{2} \\\\ y_I=\\dfrac{${A}+${(0,a.PMY)(_)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.euh)(g+x)}}{2}\\\\y_I=\\dfrac{${(0,a.euh)(A+_)}}{2}\\end{cases}$`,1!==L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};\\dfrac{${G}}{${N}};\\right)$`),1===L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};\\dfrac{${G}}{${N}}\\right)$`),1!==L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};${G}\\right)$`),1===L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};${G}\\right)$`),j+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",j+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",j+="On applique la relation à l'énoncé : ",j+=`$\\begin{cases}x_J=\\dfrac{${C}+${(0,a.PMY)(O)}}{2} \\\\ y_J=\\dfrac{${B}+${(0,a.PMY)(D)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.euh)(C+O)}}{2}\\\\y_J=\\dfrac{${(0,a.euh)(B+D)}}{2}\\end{cases}$`,1!==w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};\\dfrac{${E}}{${U}};\\right)$`),1===w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};\\dfrac{${E}}{${U}}\\right)$`),1!==w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};${E}\\right)$`),1===w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};${E}\\right)$`),j+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",j+="<br>$ABDC$ est donc un parallélogramme.",j+="<br>On calcule maintenant deux cotés consécutifs : $AB$ et $AC$ par exemple.",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère orthonormé,",j+=" alors on a : $AB=\\sqrt{\\left(x_B-x_A\\right)^{2}+\\left(y_B-y_A\\right)^{2}}.$<br>",j+=`On applique la relation à l'énoncé : $AB=\\sqrt{\\left(${C}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${B}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${y}+${v}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AB=\\sqrt{${(0,a.euh)(y+v)}}$<br>`,b=(0,a.uV4)(J)[0],m=(0,a.uV4)(J)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AB=${b}$<br>`,j+=`On procède de même pour $AC$: $AC=\\sqrt{\\left(${O}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AC=\\sqrt{${M}+${P}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AC=\\sqrt{${(0,a.euh)(M+P)}}$<br>`,b=(0,a.uV4)(R)[0],m=(0,a.uV4)(R)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AC=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AC=\\sqrt{${m}}$<br>`,j+="<br>On observe que $AB=AC$, $ABDC$ est donc bien un losange.",r=(0,t.xmu)(g,A,"A"),$=(0,t.xmu)(C,B,"B"),i=(0,t.xmu)(O,D,"C"),l=(0,t.xmu)(x,_,"D"),s=(0,t.uGk)(r,$,i,l),n.push(s[0],s[1]);break;case 4:g=(0,a.nSR)(0,6)*(0,a.q$q)([-1,1]),A=(0,a.nSR)(0,6)*(0,a.q$q)([-1,1]),q=(0,a.nSR)(1,3)*(0,a.q$q)([-1,1]),f=(0,a.nSR)(1,3)*(0,a.q$q)([-1,1]),h=(0,a.nSR)(2,4),C=g+q*h,B=A+f*h,O=g-f,D=A+q,x=O+q*h,_=D+f*h,F=(0,a.OlJ)(g+x,2)[0],L=(0,a.OlJ)(g+x,2)[1],G=(0,a.OlJ)(A+_,2)[0],N=(0,a.OlJ)(A+_,2)[1],T=(0,a.OlJ)(C+O,2)[0],w=(0,a.OlJ)(C+O,2)[1],E=(0,a.OlJ)(B+D,2)[0],U=(0,a.OlJ)(B+D,2)[1],y=(C-g)*(C-g),v=(B-A)*(B-A),J=y+v,M=(O-g)*(O-g),P=(D-A)*(D-A),R=M+P,V=(x-g)*(x-g),k=(_-A)*(_-A),Q=V+k,I=(C-O)*(C-O),Y=(B-D)*(B-D),S=I+Y,h=(0,t.DoQ)(-9,-9,9,9,.2,1),K="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",K+=` $A\\left(${g};${A}\\right)$ ; $B\\left(${C};${B}\\right).$`,K+=` $C\\left(${O};${D}\\right)$ ; $D\\left(${x};${_}\\right).$`,K+="<br>Démontrer que $ABDC$ est un rectangle.",j="<br>Pour prouver que $ABDC$ est un rectangle, il y a pluieurs stratégies :<br>",j+="$~~~~~~~~$<B>1.</B> On prouve avec la réciproque du théorème de Pythagore que $ABDC$ possède un angle droit,<br>",j+="$puis on prouve qu'il a ses côtés opposés de même longueur.<br>",j+="$~~~~~~~~$<B>2. </B> On prouve que $ABDC$ est un parallélogramme, puis il sufit de prouver que ses diagonales sont de même longueur.<br>",j+="$\\phantom{~~~~~~~~}$ Un parallélogramme qui a ses diagonales de même longueur est un rectangle.",j+="<br>Plusiurs démonstrations se valent. On choisit ici la <B>démonstration n°2</B>, mais d'autres idées sont valables.<br>",j+="<B>Démonstration :</B><br>",j+="On veut prouver que $ABDC$ est un parallélogramme :",j+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",j+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",j+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",j+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",j+="On applique la relation a l'enonce : ",j+=`$\\begin{cases}x_I=\\dfrac{${g}+${(0,a.PMY)(x)}}{2} \\\\ y_I=\\dfrac{${A}+${(0,a.PMY)(_)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.euh)(g+x)}}{2}\\\\y_I=\\dfrac{${(0,a.euh)(A+_)}}{2}\\end{cases}$`,1!==L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};\\dfrac{${G}}{${N}};\\right)$`),1===L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};\\dfrac{${G}}{${N}}\\right)$`),1!==L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};${G}\\right)$`),1===L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};${G}\\right)$`),j+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",j+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",j+="On applique la relation à l'énoncé : ",j+=`$\\begin{cases}x_J=\\dfrac{${C}+${(0,a.PMY)(O)}}{2} \\\\ y_J=\\dfrac{${B}+${(0,a.PMY)(D)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.euh)(C+O)}}{2}\\\\y_J=\\dfrac{${(0,a.euh)(B+D)}}{2}\\end{cases}$`,1!==w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};\\dfrac{${E}}{${U}};\\right)$`),1===w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};\\dfrac{${E}}{${U}}\\right)$`),1!==w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};${E}\\right)$`),1===w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};${E}\\right)$`),j+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",j+="<br>$ABDC$ est donc un parallélogramme.",j+="<br>On calcule maintenant les diagonales de $ABDC$ : $AD$ et $BC$ par exemple.",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère orthonormé,",j+=" alors on a : $AD=\\sqrt{\\left(x_D-x_A\\right)^{2}+\\left(y_D-y_A\\right)^{2}}.$<br>",j+=`On applique la relation à l'énoncé : $AD=\\sqrt{\\left(${x}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${_}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${V}+${k}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${(0,a.euh)(V+k)}}$<br>`,b=(0,a.uV4)(Q)[0],m=(0,a.uV4)(Q)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AD=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AD=\\sqrt{${m}}$<br>`,j+=`On procède de même pour $BC$: $BC=\\sqrt{\\left(${O}-${(0,a.PMY)(C)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(B)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${I}+${Y}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${(0,a.euh)(I+Y)}}$<br>`,b=(0,a.uV4)(S)[0],m=(0,a.uV4)(S)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } BC=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } BC=${b}$<br>`,j+="<br>On observe que $BC=AD$, $ABDC$ est donc bien un rectangle.",r=(0,t.xmu)(g,A,"A"),$=(0,t.xmu)(C,B,"B"),i=(0,t.xmu)(O,D,"C"),l=(0,t.xmu)(x,_,"D"),s=(0,t.uGk)(r,$,i,l),n.push(s[0],s[1]);break;case 5:g=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),A=(0,a.nSR)(0,9)*(0,a.q$q)([-1,1]),q=(0,a.nSR)(1,9)*(0,a.q$q)([-1,1]),f=(0,a.nSR)(1,9)*(0,a.q$q)([-1,1]),C=g+q,B=A+f,O=g-f,D=A+q,x=O+q,_=D+f,F=(0,a.OlJ)(g+x,2)[0],L=(0,a.OlJ)(g+x,2)[1],G=(0,a.OlJ)(A+_,2)[0],N=(0,a.OlJ)(A+_,2)[1],T=(0,a.OlJ)(C+O,2)[0],w=(0,a.OlJ)(C+O,2)[1],E=(0,a.OlJ)(B+D,2)[0],U=(0,a.OlJ)(B+D,2)[1],y=(C-g)*(C-g),v=(B-A)*(B-A),J=y+v,M=(O-g)*(O-g),P=(D-A)*(D-A),R=M+P,V=(x-g)*(x-g),k=(_-A)*(_-A),Q=V+k,I=(C-O)*(C-O),Y=(B-D)*(B-D),S=I+Y,h=(0,t.DoQ)(-9,-9,9,9,.2,1),K="Dans un repère orthonormé (O,I,J), on donne les 4 points suivants :<br>",K+=` $A\\left(${g};${A}\\right)$ ; $B\\left(${C};${B}\\right).$`,K+=` $C\\left(${O};${D}\\right)$ ; $D\\left(${x};${_}\\right).$`,K+="<br>Démontrer que $ABDC$ est un carré.",j="<br>Pour prouver que $ABDC$ est un carré, il y a pluieurs stratégies :<br>",j+="Dans cette correction, on propose de procéder par étapes :<br>",j+="On va prouver d'abord que $ABDC$ est un parallélogramme en utilisant les milieux des diagonales.<br>",j+="puis on prouvera qu'il est un rectangle en comparant ses diagonales.<br>",j+="<br>Enfin, en vérifiant qu'il a deux côtés consécutifs de même longueur, on aura prouvé qu'il est un carré. ",j+="<br><B>Démonstration :</B><br>",j+="<B>1. On prouve que $ABDC$ est un parallélogramme :</B>",j+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",j+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère, pour prouver qu'elles sont identiques. :",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",j+="<br> alors les coordonnées du point $I$ milieu de $[AD]$ sont ",j+="$I\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",j+="On applique la relation à l'énoncé : ",j+=`$\\begin{cases}x_I=\\dfrac{${g}+${(0,a.PMY)(x)}}{2} \\\\ y_I=\\dfrac{${A}+${(0,a.PMY)(_)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_I=\\dfrac{${(0,a.euh)(g+x)}}{2}\\\\y_I=\\dfrac{${(0,a.euh)(A+_)}}{2}\\end{cases}$`,1!==L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};\\dfrac{${G}}{${N}};\\right)$`),1===L&&1!==N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};\\dfrac{${G}}{${N}}\\right)$`),1!==L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(\\dfrac{${F}}{${L}};${G}\\right)$`),1===L&&1===N&&(j+=`  <br>Ce qui donne au final : $ I\\left(${F};${G}\\right)$`),j+="<br> Les coordonnées du point $J$ milieu de $[BC]$ sont ",j+="$J\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",j+="On applique la relation à l'énoncé : ",j+=`$\\begin{cases}x_J=\\dfrac{${C}+${(0,a.PMY)(O)}}{2} \\\\ y_J=\\dfrac{${B}+${(0,a.PMY)(D)}}{2}\\end{cases}$`,j+=`<br>On en déduit :  $\\begin{cases}x_J=\\dfrac{${(0,a.euh)(C+O)}}{2}\\\\y_J=\\dfrac{${(0,a.euh)(B+D)}}{2}\\end{cases}$`,1!==w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};\\dfrac{${E}}{${U}};\\right)$`),1===w&&1!==U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};\\dfrac{${E}}{${U}}\\right)$`),1!==w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(\\dfrac{${T}}{${w}};${E}\\right)$`),1===w&&1===U&&(j+=`  <br>Ce qui donne au final : $ J\\left(${T};${E}\\right)$`),j+="<br>On observe que $I$ et $J$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",j+="<br>$ABDC$ est donc un parallélogramme.",j+="<br><B>2. On prouve que $ABDC$ est un rectangle :</B>",j+="<br>On calcule maintenant les diagonales de $ABDC$ : $AD$ et $BC$ .",j+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère orthonormé,",j+=" alors on a : $AD=\\sqrt{\\left(x_D-x_A\\right)^{2}+\\left(y_D-y_A\\right)^{2}}.$<br>",j+=`On applique la relation à l'énoncé : $AD=\\sqrt{\\left(${x}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${_}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${V}+${k}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } AD=\\sqrt{${(0,a.euh)(V+k)}}$<br>`,b=(0,a.uV4)(Q)[0],m=(0,a.uV4)(Q)[1],1!==m?1!==b&&(j+=`$\\phantom{On applique la relation a l'enonce :   } AD=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{On applique la relation a l'enonce :   } AD=${b}$<br>`,j+=`On procède de même pour $BC$: $BC=\\sqrt{\\left(${O}-${(0,a.PMY)(C)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(B)}\\right)^{2}}$<br>`,j+=`$\\phantom{On applique la relation a l'enonce :        } BC=\\sqrt{${I}+${Y}}$<br>`,b=(0,a.uV4)(S)[0],m=(0,a.uV4)(S)[1],j+=1!==m?1!==b?`$\\phantom{On applique la relation a l'enonce :   } BC=${b}\\sqrt{${m}}$<br>`:`$\\phantom{On applique la relation a l'enonce :   } BC=\\sqrt{${m}}$<br>`:`$\\phantom{On applique la relation a l'enonce :   } BC=${b}$<br>`,j+="<br>On observe que $BC=AD$, $ABDC$ est donc bien un rectangle.",j+="<br><B>3. On prouve que $ABDC$ est un carré :</B>",j+="<br>On calcule maintenant deux côtés consécutilfs de $ABDC$ : $AB$ et $AC$ par exemple.",j+=` <br>$AB=\\sqrt{\\left(${C}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${B}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$AB =\\sqrt{${y}+${v}}$<br>`,j+=`$AB =\\sqrt{${(0,a.euh)(y+v)}}$<br>`,b=(0,a.uV4)(J)[0],m=(0,a.uV4)(J)[1],1!==m?1!==b&&(j+=`$AB=${b}\\sqrt{${m}}$<br>`):j+=`$AB=${b}$<br>`,j+=`De même : $AC=\\sqrt{\\left(${O}-${(0,a.PMY)(g)}\\right)^{2}+\\left(${D}-${(0,a.PMY)(A)}\\right)^{2}}$<br>`,j+=`$\\phantom{De meme :       } AC=\\sqrt{${M}+${P}}$<br>`,j+=`$\\phantom{De meme :       } AC=\\sqrt{${(0,a.euh)(M+P)}}$<br>`,b=(0,a.uV4)(R)[0],m=(0,a.uV4)(R)[1],1!==m?1!==b&&(j+=`$\\phantom{De meme :       } AC=${b}\\sqrt{${m}}$<br>`):j+=`$\\phantom{De meme :  } AC=${b}$<br>`,j+="On observe que $AC=AB$ donc $ABDC$ est bien un carré.",r=(0,t.xmu)(g,A,"A"),$=(0,t.xmu)(C,B,"B"),i=(0,t.xmu)(O,D,"C"),l=(0,t.xmu)(x,_,"D"),s=(0,t.uGk)(r,$,i,l),n.push(s[0],s[1])}o=Math.min(g,C,O,x,-1)-1,d=Math.min(A,B,D,_,-1)-1,u=Math.max(g,C,O,x,1)+1,c=Math.max(A,B,D,_,1)+1,n.push((0,t.sYn)({xMin:o,yMin:d,xMax:u,yMax:c})),j+="<br>"+(0,t.iR9)({xmin:o,ymin:d,xmax:u,ymax:c},n),this.questionJamaisPosee(z,g,A,C,B,e)&&(this.listeQuestions.push(K),this.listeCorrections.push(j),z++),H++}(0,a.K1R)(this)}}},25523:(e,n,r)=>{function $(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...n){0===e&&(this.listeArguments=[]);let r="";for(const $ of n)void 0!==$&&(r+=$.toString());return!(this.listeArguments.indexOf(r)>-1)&&(this.listeArguments.push(r),!0)}}r.r(n),r.d(n,{default:()=>$})}}]);
//# sourceMappingURL=68678.e7f2a7ad1873b9d66d44.js.map