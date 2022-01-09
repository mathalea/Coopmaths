"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6564,25523],{6564:(e,i,n)=>{n.r(i),n.d(i,{titre:()=>a,default:()=>$});var s=n(25523),r=n(25482),t=n(71250);const a="Démontrer qu'un quadrilatère est ou non un parallélogramme";function $(){s.default.call(this),this.titre=a,this.sup=parseInt(this.sup),this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];let e;const i=(0,r.SRM)([1,2],this.nbQuestions);for(let n,s,a,$,o,u,l,d,c,h,f,b,m,q,p,g,C,x,_,M,O,D,A,N,R,S,y,J,P,B,E,X,F,Q,Y,v,I,k,W,L,T=0,w=0;T<this.nbQuestions&&w<50;){switch(e=i[T],e){case 1:for(b=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),m=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),g=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),C=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);(0,r.WnP)(g-b)<4;)b=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),g=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);for(;(0,r.WnP)(C-m)<4;)m=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),C=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);a=(0,r.nSR)(3,5)*(0,r.q$q)([-1,1]),s=(0,r.nSR)(3,5)*(0,r.q$q)([-1,1]),(0,r.WnP)(C-m)/(g-b)===(0,r.WnP)(a/s)&&(a+=2),p=m+a,q=b+s,x=g+s,_=C+a,M=(0,r.OlJ)(b+x,2)[0],O=(0,r.OlJ)(b+x,2)[1],D=(0,r.OlJ)(m+_,2)[0],A=(0,r.OlJ)(m+_,2)[1],N=(0,r.OlJ)(q+g,2)[0],R=(0,r.OlJ)(q+g,2)[1],S=(0,r.OlJ)(p+C,2)[0],y=(0,r.OlJ)(p+C,2)[1],$=(0,t.flY)(-9,-9,9,9),J=(0,t.xmu)(b,m,"A","red"),P=(0,t.xmu)(q,p,"B","red"),B=(0,t.xmu)(g,C,"C","red"),E=(0,t.xmu)(x,_,"D","red"),v=(0,t.xmu)(1,0,"I"),I=(0,t.xmu)(0,1,"J"),k=(0,t.xmu)(0,0,"O"),Q=(0,t.xmu)((b+x)/2,(m+_)/2,"M"),n=(0,t.DoQ)(-9,-9,9,9),u=(0,t.EXn)(J,P,"blue"),l=(0,t.EXn)(E,P,"blue"),d=(0,t.EXn)(B,E,"blue"),c=(0,t.EXn)(J,B,"blue"),h=(0,t.EXn)(J,E,"red"),f=(0,t.EXn)(P,B,"red"),u.epaisseur=2,l.epaisseur=2,d.epaisseur=2,c.epaisseur=2,h.epaisseur=2,f.epaisseur=2,(0,t.KoI)("X","red",h,f),X=(0,t.L6P)(J,P,B,E,Q,v,I,k),F=(0,t.BD1)(J,P,B,E,Q,v,I,k),W="Dans un repère orthonormé $(O,I,J)$, on donne les 4 points suivants :<br>",W+=` $A\\left(${b};${m}\\right)$ ; $B\\left(${q};${p}\\right).$`,W+=` $C\\left(${g};${C}\\right)$ ; $D\\left(${x};${_}\\right).$`,W+="<br>Déterminer si le quadrilatère $ABDC$ est un parallélogramme.",L=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},X,F,$,n,u,l,d,c,h,f),L+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",L+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère.",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère ,",L+="<br> alors les coordonnées du point $M$ milieu de $[AD]$ sont ",L+="$M\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_M=\\dfrac{${b}+${(0,r.PMY)(x)}}{2} \\\\ y_M=\\dfrac{${m}+${(0,r.PMY)(_)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_M=\\dfrac{${(0,r.euh)(b+x)}}{2}\\\\y_M=\\dfrac{${(0,r.euh)(m+_)}}{2}\\end{cases}$`,1!==O&&1!==A&&(L+=`  <br>Ce qui donne au final : $ M\\left(\\dfrac{${M}}{${O}};\\dfrac{${D}}{${A}};\\right)$`),1===O&&1!==A&&(L+=`  <br>Ce qui donne au final : $ M\\left(${M};\\dfrac{${D}}{${A}}\\right)$`),1!==O&&1===A&&(L+=`  <br>Ce qui donne au final : $ M\\left(\\dfrac{${M}}{${O}};${D}\\right)$`),1===O&&1===A&&(L+=`  <br>Ce qui donne au final : $ M\\left(${M};${D}\\right)$`),L+="<br> Les coordonnées du point $N$ milieu de $[BC]$ sont ",L+="$N\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_N=\\dfrac{${q}+${(0,r.PMY)(g)}}{2} \\\\ y_N=\\dfrac{${p}+${(0,r.PMY)(C)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_N=\\dfrac{${(0,r.euh)(q+g)}}{2}\\\\y_N=\\dfrac{${(0,r.euh)(p+C)}}{2}\\end{cases}$`,1!==R&&1!==y&&(L+=`  <br>Ce qui donne au final : $ N\\left(\\dfrac{${N}}{${R}};\\dfrac{${S}}{${y}};\\right)$`),1===R&&1!==y&&(L+=`  <br>Ce qui donne au final : $ N\\left(${N};\\dfrac{${S}}{${y}}\\right)$`),1!==R&&1===y&&(L+=`  <br>Ce qui donne au final : $ N\\left(\\dfrac{${N}}{${R}};${S}\\right)$`),1===R&&1===y&&(L+=`  <br>Ce qui donne au final : $ N\\left(${N};${S}\\right)$`),L+="<br>On observe que $M$ et $N$ ont les mêmes coordonnées, donc les deux diagonales du quadrilatère se coupent en leur milieu.",L+="<br>$ABDC$ est donc un parallélogramme.";break;case 2:for(b=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),m=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),g=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),C=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);(0,r.WnP)(g-b)<3;)b=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),g=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);for(;(0,r.WnP)(C-m)<3;)m=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]),C=(0,r.nSR)(0,4)*(0,r.q$q)([-1,1]);s=(0,r.nSR)(2,4)*(0,r.q$q)([-1,1]),a=(0,r.nSR)(2,4)*(0,r.q$q)([-1,1]),q=b+s,p=m+a,o=(0,r.q$q)([-1,1]),-1===o&&(x=g+s+(0,r.nSR)(1,2)*(0,r.q$q)([-1,1]),_=C+a),1===o&&(x=g+s,_=C+a+(0,r.nSR)(1,2)*(0,r.q$q)([-1,1])),M=(0,r.OlJ)(b+x,2)[0],O=(0,r.OlJ)(b+x,2)[1],D=(0,r.OlJ)(m+_,2)[0],A=(0,r.OlJ)(m+_,2)[1],N=(0,r.OlJ)(q+g,2)[0],R=(0,r.OlJ)(q+g,2)[1],S=(0,r.OlJ)(p+C,2)[0],y=(0,r.OlJ)(p+C,2)[1],$=(0,t.flY)(-9,-9,9,9),J=(0,t.xmu)(b,m,"A","blue"),P=(0,t.xmu)(q,p,"B","blue"),B=(0,t.xmu)(g,C,"C","blue"),E=(0,t.xmu)(x,_,"D","blue"),v=(0,t.xmu)(1,0,"I"),I=(0,t.xmu)(0,1,"J"),k=(0,t.xmu)(0,0,"O"),Q=(0,t.xmu)((b+x)/2,(m+_)/2,"M","red"),Y=(0,t.xmu)((q+g)/2,(p+C)/2,"N","red"),n=(0,t.DoQ)(-9,-9,9,9),u=(0,t.EXn)(J,P,"blue"),l=(0,t.EXn)(E,P,"blue"),d=(0,t.EXn)(B,E,"blue"),c=(0,t.EXn)(J,B,"blue"),h=(0,t.EXn)(J,E,"red"),f=(0,t.EXn)(P,B,"red"),u.epaisseur=2,l.epaisseur=2,d.epaisseur=2,c.epaisseur=2,h.epaisseur=2,f.epaisseur=2,X=(0,t.L6P)(J,P,B,E,v,I,Q,Y,k),F=(0,t.BD1)(J,P,B,E,v,I,Q,Y,k),W="Dans un repère orthonormé $(O,I,J)$, on donne les 4 points suivants :<br>",W+=` $A\\left(${b};${m}\\right)$ ; $B\\left(${q};${p}\\right).$`,W+=` $C\\left(${g};${C}\\right)$ ; $D\\left(${x};${_}\\right).$`,W+="<br>Déterminer si le quadrilatère $ABDC$ est un parallélogramme.",L=(0,t.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},X,F,$,n,u,l,d,c,h,f),L+="<br>On sait que $ABDC$ est un parallélogramme si et seulement si ses diagonales se coupent en leur milieu.",L+="<br>On cherche donc les coordonnées du milieu de chacune des deux diagonales du quadrilatère.",L+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $D(x_D;y_D)$ sont deux points d'un repère,",L+="<br> alors les coordonnées du point $M$ milieu de $[AD]$ sont ",L+="$M\\left(\\dfrac{x_A+x_D}{2};\\dfrac{y_A+y_D}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_M=\\dfrac{${b}+${(0,r.PMY)(x)}}{2} \\\\ y_M=\\dfrac{${m}+${(0,r.PMY)(_)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_M=\\dfrac{${(0,r.euh)(b+x)}}{2}\\\\y_M=\\dfrac{${(0,r.euh)(m+_)}}{2}\\end{cases}$`,1!==O&&1!==A&&(L+=`  <br>Ce qui donne au final : $ M\\left(\\dfrac{${M}}{${O}};\\dfrac{${D}}{${A}}\\right)$`),1===O&&1!==A&&(L+=`  <br>Ce qui donne au final : $ M\\left(${M};\\dfrac{${D}}{${A}}\\right)$`),1!==O&&1===A&&(L+=`  <br>Ce qui donne au final : $ M\\left(\\dfrac{${M}}{${O}};${D}\\right)$`),1===O&&1===A&&(L+=`  <br>Ce qui donne au final : $ M\\left(${M};${D}\\right)$`),L+="<br> Les coordonnées du point $N$ milieu de $[BC]$ sont ",L+="$N\\left(\\dfrac{x_B+x_C}{2};\\dfrac{y_B+y_C}{2}\\right)$ <br>",L+="On applique la relation à l'énoncé : ",L+=`$\\begin{cases}x_N=\\dfrac{${q}+${(0,r.PMY)(g)}}{2} \\\\ y_N=\\dfrac{${p}+${(0,r.PMY)(C)}}{2}\\end{cases}$`,L+=`<br>On en déduit :  $\\begin{cases}x_N=\\dfrac{${(0,r.euh)(q+g)}}{2}\\\\y_N=\\dfrac{${(0,r.euh)(p+C)}}{2}\\end{cases}$`,1!==R&&1!==y&&(L+=`  <br>Ce qui donne au final : $ N\\left(\\dfrac{${N}}{${R}};\\dfrac{${S}}{${y}}\\right)$`),1===R&&1!==y&&(L+=`  <br>Ce qui donne au final : $ N\\left(${N};\\dfrac{${S}}{${y}}\\right)$`),1!==R&&1===y&&(L+=`  <br>Ce qui donne au final : $ N\\left(\\dfrac{${N}}{${R}};${S}\\right)$`),1===R&&1===y&&(L+=`  <br>Ce qui donne au final : $ N\\left(${N};${S}\\right)$`),L+="<br>On observe que $M$ et $N$ n'ont pas les mêmes coordonnées, donc les deux diagonales du quadrilatère ne se coupent pas en leur milieu.",L+="<br>$ABDC$ n'est donc pas un parallélogramme."}this.questionJamaisPosee(T,b,m,q,p,e)&&(this.listeQuestions.push(W),this.listeCorrections.push(L),T++),w++}(0,r.K1R)(this)}}},25523:(e,i,n)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let n="";for(const s of i)void 0!==s&&(n+=s.toString());return!(this.listeArguments.indexOf(n)>-1)&&(this.listeArguments.push(n),!0)}}n.r(i),n.d(i,{default:()=>s})}}]);
//# sourceMappingURL=6564.55098c318cc57ff66d29.js.map