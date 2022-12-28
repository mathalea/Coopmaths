"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[80003,25523],{80003:(e,n,$)=>{$.r(n),$.d(n,{titre:()=>a,dateDePublication:()=>l,default:()=>s});var i=$(25523),t=$(25482),r=$(71250);const a="Modéliser une situation géométrique à l'aide d'une équation",l="16/12/2021";function s(){i.default.call(this),this.consigne="",this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,t.SRM)(["typeE1","typeE2","typeE3","typeE4","typeE5","typeE6","typeE7","typeE8"],this.nbQuestions);for(let n,$,i,a,l,s,u,o,x,c,m,d,b,h,g,p,y,C,f,E,k=0,A=0;k<this.nbQuestions&&A<50;){switch(C=[],e[k]){case"typeE1":n=(0,t.nSR)(1,10),a=(0,t.nSR)(1,7),$=(0,t.nSR)(4*a+2*n+1,50),i=$-2*n-2*a,s=(0,r.xmu)(0,0,"A","below"),u=(0,r.xmu)(10,0,"B","below"),o=(0,r.xmu)(10,6,"C"),x=(0,r.xmu)(0,6,"D"),C.push((0,r.EXn)(s,u),(0,r.EXn)(u,o),(0,r.EXn)(x,s),(0,r.EXn)(o,x),(0,r.BD1)(s,u,o,x)),C.push((0,r.Ots)(`x+${(0,t.k$K)(n)}`,(0,r.Q2H)(o,x).x+0,(0,r.Q2H)(o,x).y+.7,"milieu","black",1,"middle",!0),(0,r.Ots)(`${(0,t.k$K)(a)}`,(0,r.Q2H)(s,x).x-.5,(0,r.Q2H)(s,x).y,"milieu","black",1,"middle",!0)),f=` Un rectangle a pour largeur $${a}$ cm et pour longueur $x$ cm.<br>\n            En ajoutant $${n}$ cm à la longueur de ce rectangle, on obtient un nouveau rectangle dont le périmètre est $${$}$ cm.<br>\n             Quelle est la longueur $x$ du rectangle initial ?<br>\n              `,E=" On réalise une petite figure à main levée pour visualiser la situation :<br>",E+=(0,r.iR9)({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},C),E+=`<br>Le périmètre du rectangle obtenu est donnée par la formule : $2\\times (\\ell+L)$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>\n                  Comme $\\ell=${a}$ et $L=x+${n}$, le périmètre est donné en fonction de $x$ par :  $ 2(${a}+x+${n})=2(x+${n+a})=2x+${2*n+2*a}$.<br>\n       Puisque le périmètre du rectangle est $${$}$ cm, on cherche $x$ tel que :   $2x+${2*n+2*a}=${$}$.<br>\n       $\\begin{aligned}\n       2x+${2*n+2*a}&=${$}\\\\\n       2x+${2*n+2*a}${(0,t.b1)(-2*n-2*a)}&=${$}${(0,t.b1)(-2*n-2*a)}\\\\\n       2x&=${$-2*n-2*a}\\\\\n       x&=\\dfrac{${$-2*n-2*a}}{2}\\\\\n       x&=${(0,t.k$K)(i/2)}\\end{aligned}$<br>\n\n       La longueur $x$ du rectangle initial est  $${(0,t.k$K)(i/2)}$ cm.\n       `;break;case"typeE2":n=(0,t.nSR)(1,10),a=(0,t.nSR)(1,5),$=(0,t.nSR)(a*a+a*n+1,100),i=$-2*n-2*a,s=(0,r.xmu)(0,0,"A","below"),u=(0,r.xmu)(10,0,"B","below"),o=(0,r.xmu)(10,6,"C"),x=(0,r.xmu)(0,6,"D"),C.push((0,r.EXn)(s,u),(0,r.EXn)(u,o),(0,r.EXn)(x,s),(0,r.EXn)(o,x),(0,r.BD1)(s,u,o,x)),C.push((0,r.Ots)(`x+${(0,t.k$K)(n)}`,(0,r.Q2H)(o,x).x+0,(0,r.Q2H)(o,x).y+.7,"milieu","black",1,"middle",!0),(0,r.Ots)(`${(0,t.k$K)(a)}`,(0,r.Q2H)(s,x).x-.5,(0,r.Q2H)(s,x).y,"milieu","black",1,"middle",!0)),f=` Un rectangle a pour largeur $${a}$ cm et pour longueur $x$ cm.<br>\n             En ajoutant $${n}$ cm à la longueur de ce rectangle, on obtient un nouveau rectangle dont l'aire est $${$}$ cm$^2$.<br>\n              Quelle est la longueur $x$ du rectangle initial ? <br>\n              On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,E=" On réalise une petite figure à main levée pour visualiser la situation :<br>",E+=(0,r.iR9)({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},C),E+=`L'aire du rectangle obtenu est donnée par la formule : $\\ell\\times L$ avec $\\ell$ la largeur du rectangle et $L$ sa longueur. <br>\n                   Comme $\\ell=${a}$ et $L=x+${n}$, l'aire est donnée en fonction de $x$ par :  $ ${(0,t.wO4)(a)}\\times (x+${n})=${a}x+${a*n}$.<br>\n        Puisque l'aire du rectangle est $${$}$ cm, on cherche $x$ tel que :   $${(0,t.wO4)(a)}x+${a*n}=${$}$.<br>\n       $\\begin{aligned}\n        ${(0,t.wO4)(a)}x+${a*n}&=${$}\\\\\n        ${(0,t.wO4)(a)}x+${a*n}${(0,t.b1)(-a*n)}&=${$}${(0,t.b1)(-a*n)}\\\\\n                ${(0,t.wO4)(a)}x&=${$-a*n}\n        \\end{aligned}$<br>`,E+=1!==a?`${(0,t.sp)(18)}$\\begin{aligned}\n          \\dfrac{${a}x}{${(0,t.b1)(a)}}&=\\dfrac{${$-a*n}}{${(0,t.b1)(a)}}\\\\\n               x&=${(0,t.xau)($-a*n,a)}\\end{aligned}$<br>`:"",E+=` La longueur $x$ du rectangle initial est  $${(0,t.xau)($-a*n,a)}$ cm.\n        `;break;case"typeE3":n=(0,t.nSR)(1,10),$=(0,t.nSR)(n*n+1,100),s=(0,r.xmu)(0,0,"A","below"),u=(0,r.xmu)(10,0,"B","below"),o=(0,r.xmu)(0,6,"C"),C.push((0,r.EXn)(s,u),(0,r.EXn)(u,o),(0,r.EXn)(s,o),(0,r.BD1)(s,u,o),(0,r.lvA)(u,s,o)),C.push((0,r.Ots)(`${(0,t.k$K)(n)}`,(0,r.Q2H)(s,u).x+0,(0,r.Q2H)(s,u).y-.5,"milieu","black",1,"middle",!0),(0,r.Ots)("x",(0,r.Q2H)(s,o).x-.5,(0,r.Q2H)(s,o).y,"milieu","black",1,"middle",!0)),f=` Un triangle $ABC$ est rectangle en $A$. On a $AB= ${n}$ cm  et $AC= x$ cm.<br>\n         Sachant que le carré de son hypoténuse est $${$}$, déterminer la valeur exacte de $x$. `,E=" On réalise une petite figure à main levée pour visualiser la situation :<br>",E+=(0,r.iR9)({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},C),E+=`Le carré de l'hypoténuse  est égal à $${$}$. On a donc $BC^2=${$}$.<br>\n          Le triangle $ABC$ est rectangle en $A$, d'après le théorème de Pythagore :<br>\n        $\\begin{aligned}\n        AB^2+AC^2&=BC^2\\\\\n        ${n*n}+x^2&=${$}\\\\\n        ${n*n}+x^2${(0,t.b1)(-n*n)}&=${$} ${(0,t.b1)(-n*n)}\\\\\n        x^2&=${$-n*n}\\\\\n        x&=\\sqrt{${$-n*n}}${(0,t.sp)(10)}  \\text{car}${(0,t.sp)(2)} x>0\n        \\end{aligned}$`,E+=$-n*n==1||$-n*n==4||$-n*n==9||$-n*n==16||$-n*n==25||$-n*n==36||$-n*n==49||$-n*n==64||$-n*n==81||$-n*n==100?`<br>\n            ${(0,t.sp)(28)} $x=${Math.sqrt($-n*n)}$<br>\n         La valeur de $x$ cherchée est  $${Math.sqrt($-n*n)}$.\n         `:`<br>\n         La valeur de $x$ cherchée est  $\\sqrt{${$-n*n}}$.\n         `;break;case"typeE4":$=(0,t.nSR)(1,10),n=(0,t.nSR)($+1,15),m=(0,r.xmu)(0,0,"M","below"),d=(0,r.xmu)(10,0,"N","below"),b=(0,r.xmu)(0,6,"P"),C.push((0,r.EXn)(m,d),(0,r.EXn)(d,b),(0,r.EXn)(m,b),(0,r.BD1)(m,d,b),(0,r.lvA)(d,m,b)),C.push((0,r.Ots)(`${(0,t.k$K)(n)}`,(0,r.Q2H)(m,b).x-.5,(0,r.Q2H)(m,b).y,"milieu","black",1,"middle",!0),(0,r.Ots)("x",(0,r.Q2H)(m,d).x+0,(0,r.Q2H)(m,d).y-.5,"milieu","black",1,"middle",!0),(0,r.DJq)(`$x+${(0,t.k$K)($)}$`,b,d,"black",.5)),f=` Un triangle $MNP$ est rectangle en $M$. On a $MP= ${n}$ cm  et $MN= x$ cm.<br>\n             L'hypoténuse du triangle $MNP$ mesure  $${$}$ cm de plus que le côté $[MN]$.<br>\n             Déterminer la valeur de $x$ sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant. `,E=" On réalise une petite figure à main levée pour visualiser la situation :<br>",E+=(0,r.iR9)({xmin:-1,ymin:-1,xmax:12,ymax:8,pixelsParCm:20,mainlevee:!0,amplitude:.5,scale:.7},C),E+=`Le triangle $MNP$ est rectangle en $M$, d'après le théorème de Pythagore :<br>\n            $\\begin{aligned}\n            MN^2+MP^2&=PN^2\\\\\n            x^2+${n}^2&=(x+${$})^2\\\\\n            x^2+${n*n}&= x^2+2\\times x\\times ${$}+${$}^2\\\\\n            x^2+${n*n}&= x^2+${2*$}x+${$*$}\\\\\n            ${n*n}+\\cancel{x^2}&=\\cancel{x^2}+${2*$}x+${$*$} \\\\\n            ${2*$}x+${$*$}&=${n*n}\\\\\n            ${2*$}x+${$*$}${(0,t.b1)(-$*$)}&=${n*n}${(0,t.b1)(-$*$)}\\\\\n            ${2*$}x&=${n*n-$*$}\\\\\n            \\dfrac{${2*$}x}{${(0,t.b1)(2*$)}}&=\\dfrac{${n*n-$*$}}{${(0,t.b1)(2*$)}}\\\\\n            x&=${(0,t.xau)(n*n-$*$,2*$)}\\end{aligned}$<br>\n             \n       La valeur de $x$ cherchée est : $${(0,t.xau)(n*n-$*$,2*$)}$.\n       `;break;case"typeE5":n=(0,t.nSR)(1,8),$=(0,t.nSR)(n*n+1,100),f=` En augmentant le côté d'un carré de $${n}$ cm, son aire aumente de $${$}$ cm$^2$.<br>\n      Quelle est la longueur du côté de ce carré ? <br>\n      On donnera le résultat sous la forme d'une fraction irréductible ou d'un nombre entier le cas échéant.`,E=`On note $x$ la longueur du côté du carré que l'on cherche.<br>\n      La différence des aires entre les deux carrés est  $${$}$, on cherche $x$ tel que :   <br>\n      $\\begin{aligned}\n      (x+${n})^2-x^2&=${$}\\\\\n      \\cancel{x^2}+ ${2*n}x+${n}^2-\\cancel{x^2}&=${$}\\\\\n       ${2*n}x+${n*n}&=${$}\\\\\n        ${2*n}x+${n*n}${(0,t.b1)(-n*n)}&=${$}${(0,t.b1)(-n*n)}\\\\\n         ${2*n}x&=${$-n*n}\\\\\n         \\dfrac{${2*n}x}{${(0,t.b1)(2*n)}}&=\\dfrac{${$-n*n}}{${(0,t.b1)(2*n)}}\\\\\n         x&=${(0,t.xau)($-n*n,2*n)}\\end{aligned}$\n           <br>\n           La longueur du côté du carré est  $${(0,t.xau)($-n*n,2*n)}$ cm.\n `;break;case"typeE6":$=(0,t.nSR)(1,7),n=(0,t.nSR)($+2,14),a=(n-$)/2,l=2*(0,t.nSR)(1,10),i=l*(n+$)/2,s=(0,r.xmu)(0,0,"A","below"),h=(0,r.xmu)(9,0,"H","below"),u=(0,r.xmu)(15,0,"B","below"),o=(0,r.xmu)(15,8,"C"),x=(0,r.xmu)(9,8,"D"),c=(0,r.xmu)(0,-1,"E"),g=(0,r.xmu)(15,-1,"F"),C.push((0,r.EXn)(s,x),(0,r.PGN)(c,g),(0,r.EXn)(s,u),(0,r.EXn)(u,o),(0,r.EXn)(x,o),(0,r.EXn)(x,h),(0,r.lvA)(s,u,o),(0,r.lvA)(u,o,x),(0,r.BD1)(s,h,x,u,o),(0,r.lvA)(u,h,x)),C.push((0,r.DJq)(`${(0,t.euh)($)} cm`,x,o,"black",.5),(0,r.DJq)(`${(0,t.euh)(n)} cm`,c,g,"black",-.5),(0,r.Ots)("x",(0,r.Q2H)(u,o).x+.5,(0,r.Q2H)(u,o).y,"milieu","black",1,"middle",!0)),f=" $ABCD$ est un trapèze rectangle.<br> ",f+="Le schéma ci-dessous n'est pas à l'échelle.<br>"+(0,r.iR9)({xmin:-1,ymin:-2,xmax:16,ymax:10,pixelsParCm:20,scale:1},C),f+=`Sachant que l'aire de ce trapèze est $${i}$ cm$^2$ et en utilisant les données du graphique, déterminer la hauteur de ce trapèze.<br>\n                    <br>`,E=(0,r.iR9)({xmin:-1,ymin:-3,xmax:16,ymax:10,pixelsParCm:20,scale:.7},C),E+=`<br>La  hauteur du trapèze est  $x$. Il est constitué du rectangle $HBCD$ et du triangle rectangle $AHD$. <br>\n                    Son aire est donc la somme des aires de ces deux figures. <br>\n                    $\\bullet~$ L' aire du rectangle $HBCD$ est : $${$}\\times x=${(0,t.y$x)($,0)}$.<br>\n                    $\\bullet~$ L' aire de triangle rectangle $AHD$ est : $\\dfrac{(${n}-${$})\\times x}{2}=${(0,t.y$x)((n-$)/2,0)}$.\n                    <br>\n                    Puisque l'aire du trapèze est $${i}$ cm$^2$, $x$ est donc la solution de l'équation : $${(0,t.y$x)($,0)} + ${(0,t.y$x)((n-$)/2,0)}=${i}$.<br>\n                    $\\begin{aligned}\n                    ${(0,t.y$x)($,0)} + ${(0,t.y$x)((n-$)/2,0)}&=${i}\\\\\n                    ${(0,t.k$K)($+(n-$)/2)}x&=${i}\\\\\n                    \\dfrac{${(0,t.k$K)($+a)}x}{${(0,t.b1)((0,t.k$K)($+a))}}&=\\dfrac{${i}}{${(0,t.b1)((0,t.k$K)($+a))}}\\\\\n                    x&=${(0,t.xau)(i,$+a)}\n                    \\end{aligned}$<br>\n                    La hauteur du trapèze est : $${(0,t.xau)(i,$+a)}$ cm.`;break;case"typeE7":n=(0,t.nSR)(3,8),$=(0,t.nSR)(1,6),i=(0,t.nSR)(1,6),l=(0,t.nSR)(1,20),a=(l*(2*n+$)+2*n*i+i*$)/2,s=(0,r.xmu)(0,0,"A","below"),h=(0,r.xmu)(5,6,"H","below"),u=(0,r.xmu)(10,0,"B","below"),o=(0,r.xmu)(10,6,"C"),x=(0,r.xmu)(0,6,"D"),c=(0,r.xmu)(5,10,"E"),C.push((0,r.EXn)(s,u),(0,r.EXn)(u,o),(0,r.EXn)(o,x),(0,r.EXn)(s,x),(0,r.EXn)(c,o),(0,r.EXn)(c,x),(0,r.EXn)(c,h),(0,r.lvA)(c,h,o),(0,r.BD1)(s,h,x,u,o,c),(0,r.KoI)("//","blue",x,c,c,o)),C.push((0,r.Ots)(`${(0,t.k$K)(n)}`,(0,r.Q2H)(u,o).x+.4,(0,r.Q2H)(u,o).y,"milieu","black",1,"middle",!0),(0,r.Ots)(`${(0,t.k$K)($)}`,(0,r.Q2H)(c,h).x+.4,(0,r.Q2H)(c,h).y,"milieu","black",1,"middle",!0),(0,r.Ots)(`x + ${(0,t.k$K)(i)}`,(0,r.Q2H)(s,u).x+.4,(0,r.Q2H)(s,u).y-.4,"milieu","black",1,"middle",!0)),f=" La figure ci-dessous (qui n'est pas à l'échelle) est composée d'un rectangle $ABCD$ et d'un triangle isocèle $DEC$. <br>\n        L'unité est le mètre.<br> "+(0,r.iR9)({xmin:-1,ymin:-1,xmax:12,ymax:11,pixelsParCm:20,scale:1},C),f+=`Sachant que l'aire de cette figure est $${(0,t.k$K)(a)}$ m$^2$ et en utilisant les données du graphique, déterminer la  valeur exacte de $x$.<br>\n         <br>`,E=(0,r.iR9)({xmin:-1,ymin:-1,xmax:16,ymax:11,pixelsParCm:20,scale:.7},C),E+=`<br>La figure est  constituée du rectangle $ABCD$ et du triangle isocèle $DEC$.   <br>\n        Son aire est donc la somme des aires de ces deux figures. <br>\n        $\\bullet~$ L' aire du rectangle $ABCD$ est : $${n}\\times (x+${i})=${(0,t.y$x)(n,n*i)}$ ;<br>\n        $\\bullet~$ L' aire de triangle isocèle $DEC$ est : $\\dfrac{${$}\\times(x +${i})}{2}=${(0,t.xau)($,2)}(x+${i})=${(0,t.y$x)($/2,$*i/2)}$.<br>\n        L'aire de la figure étant $${(0,t.k$K)(a)}$ m$^2$, on cherche $x$ tel que : <br>\n        $\\begin{aligned}\n        (${(0,t.y$x)(n,n*i)})+(${(0,t.y$x)($/2,$*i/2)})&=${(0,t.k$K)(a)}\\\\\n        ${(0,t.y$x)(n,n*i)}+${(0,t.y$x)($/2,$*i/2)}&=${(0,t.k$K)(a)}\\\\\n        ${(0,t.y$x)(n+$/2,n*i+$*i/2)}&=${(0,t.k$K)(a)}\\\\\n        ${(0,t.y$x)(n+$/2,n*i+$*i/2)}${(0,t.b1)((0,t.k$K)(-n*i-$*i/2))}&=${a}${(0,t.b1)((0,t.k$K)(-n*i-$*i/2))}\\\\\n                ${(0,t.y$x)(n+$/2,0)}&=${(0,t.y$x)(0,a-n*i-$*i/2)}\\\\\n                \\dfrac{${(0,t.y$x)(n+$/2,0)}}{${(0,t.b1)((0,t.k$K)(n+$/2))}}&=\\dfrac{${(0,t.k$K)(a-n*i-$*i/2)}}{${(0,t.b1)((0,t.k$K)(n+$/2))}}\\\\\n                x&=${(0,t.xau)(10*(a-n*i-$*i/2),10*(n+$/2))}\n                \\end{aligned}$<br> \n                La valeur de $x$ cherchée est donc : $ ${(0,t.xau)(10*(a-n*i-$*i/2),10*(n+$/2))}$.\n                `;break;case"typeE8":n=(0,t.nSR)(10,50),s=(0,r.xmu)(0,0,"A","below"),u=(0,r.xmu)(10,0,"B","below"),o=(0,r.xmu)(10,6,"C"),x=(0,r.xmu)(4,6,"D"),c=(0,r.xmu)(2,3.46,"E"),m=(0,r.xmu)(4,0,"M","below"),p=(0,r.xmu)(10,-1,"K"),y=(0,r.xmu)(0,-1,"L"),C.push((0,r.EXn)(s,u),(0,r.EXn)(s,c),(0,r.PGN)(p,y),(0,r.EXn)(c,m),(0,r.EXn)(m,x),(0,r.EXn)(u,o),(0,r.EXn)(x,o),(0,r.lvA)(u,m,x),(0,r.lvA)(m,u,o),(0,r.lvA)(u,o,x),(0,r.lvA)(o,x,m),(0,r.BD1)(s,m,u,o,x,c),(0,r.KoI)("//","blue",s,c,c,m,s,m),(0,r.KoI)("/","blue",m,u,u,o,o,x,x,m)),C.push((0,r.Ots)("$x$",(0,r.Q2H)(s,m).x,(0,r.Q2H)(s,m).y-.3,0,"black",2,"middle",!0),(0,r.Ots)(`${(0,t.k$K)(n)}`,(0,r.Q2H)(s,u).x,(0,r.Q2H)(s,u).y-1.5,"milieu","black",1,"middle",!0)),f=`$[AB]$ est un segment de longueur $${n}$ et $M$ est un point de ce segment.<br>\n      Du même côté du segment $[AB]$, on trace le triangle équilatéral $AME$ et le carré $MBCD$.<br>\n      On pose $AM=x$.<br>\n     Déterminer la valeur de $x$ pour que le périmètre du triangle $AME$ soit égal à celui du carré $MBCD$.  `,E="<br>On réalise une figure pour visualiser la situation :<br>",E+=(0,r.iR9)({xmin:-1,ymin:-3,xmax:12,ymax:8,pixelsParCm:30,scale:2},C),E+=` Le triangle $AME$ est un triangle équilatéral de côté $x$, son périmètre est donc  $3x$.<br>\n      \n      Le carré $MBCD$ a pour côté $MB=${n}-x$. Son périmètre est donc : $4\\times (${n}-x)=${(0,t.y$x)(-4,4*n)} $.\n      <br>\n      On cherche $x$ tel que : <br>\n      $\\begin{aligned}\n      ${(0,t.y$x)(-4,4*n)}&=3x\\\\\n      ${(0,t.y$x)(-4,4*n)} ${(0,t.b1)("-3\\textit{x}")}&=3x${(0,t.b1)("-3\\textit{x}")}\\\\\n      ${(0,t.y$x)(-7,4*n)}&=0\\\\\n      ${(0,t.y$x)(-7,4*n)}${(0,t.b1)(-4*n)}&=0${(0,t.b1)(-4*n)}\\\\\n      \\dfrac{${(0,t.y$x)(-7,0)}}{${(0,t.b1)("-7")}}&=\\dfrac{${(0,t.y$x)(0,-4*n)}}{${(0,t.b1)("-7")}}\\\\\n      x&=${(0,t.xau)(-4*n,-7)}\n      \\end{aligned}$<br>\n      Les deux périmètres sont égaux lorsque  : $x=${(0,t.xau)(-4*n,-7)}$.\n      `}-1===this.listeQuestions.indexOf(f)&&(this.listeQuestions.push(f),this.listeCorrections.push(E),k++),A++}(0,t.K1R)(this)}}},25523:(e,n,$)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...n){0===e&&(this.listeArguments=[]);let $="";for(const i of n)void 0!==i&&($+=i.toString());return!(this.listeArguments.indexOf($)>-1)&&(this.listeArguments.push($),!0)}}$.r(n),$.d(n,{default:()=>i})}}]);
//# sourceMappingURL=80003.48c63b2eb0f25a2c569e.js.map