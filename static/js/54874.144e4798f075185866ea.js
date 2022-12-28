"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[54874,25523],{54874:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,default:()=>u});var r=t(25523),s=t(25482),n=t(71250);const o="Déterminer les coordonnées d’un vecteur à partir des coordonnées de deux points";function u(){r.default.call(this),this.titre=o,this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];for(let e,i,t,r,o,u,a,$,h,l,c,m,x,d,b,p,A,q,B,g,_,v,y,f=0,C=0;f<this.nbQuestions&&C<50;)1===this.sup&&(b=(0,s.nSR)(0,4)*(0,s.q$q)([-1,1]),p=(0,s.nSR)(0,4)*(0,s.q$q)([-1,1]),x=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),d=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),A=b+x,q=p+d,v="Dans un repère orthonormé $(O,\\vec i,\\vec j)$, on donne les points suivants :",v+=` $A\\left(${b};${p}\\right)$ et $B\\left(${A};${q}\\right)$`,v+="<br>Déterminer les coordonnées du vecteur $\\overrightarrow{AB}$ ",y="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère,",y+=" <br>alors on a  $\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A  \\\\y_B-y_A\\end{pmatrix}$<br>",y+=" <br>On applique ici aux données de l'énoncé :",y+=` $\\overrightarrow{AB}\\begin{pmatrix}${A}-${(0,s.PMY)(b)}  \\\\${q}-${(0,s.PMY)(p)}\\end{pmatrix}$<br>`,y+=`Ce qui donne au final : $\\overrightarrow{AB}\\begin{pmatrix}${A-b}  \\\\${q-p}\\end{pmatrix}$<br>`,e=(0,n.sYn)(),i=(0,n.xmu)(b,p,"A"),t=(0,n.xmu)(A,q,"B"),$=(0,n.L6P)(i,t,"red"),l=(0,n.BD1)(i,t,"red"),c=(0,n.EXn)(i,t,"red"),r=(0,n.xmu)(0,0,"O"),m=(0,n.BD1)(r),o=(0,n.xmu)(1,0),u=(0,n.xmu)(0,1),h=(0,n.EXn)(r,o),a=(0,n.EXn)(r,u),c.styleExtremites="->",h.styleExtremites="->",a.styleExtremites="->",c.epaisseur=3,h.epaisseur=3,a.epaisseur=3,B=(0,n.wq3)("i",.5,-.7,1.5,0),g=(0,n.wq3)("j",-.7,.5,1.5,0),_=(0,n.wq3)("AB",(b+A)/2+1,(p+q)/2+1,1,0),y+=(0,n.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},e,$,l,h,a,c,m,B,g,_)),3===this.sup&&(b=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),p=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),x=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),d=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),A=b+x,q=p+d,v="Dans un repère orthonormé $(O,\\vec i,\\vec j)$, on donne le point  ",v+=` $A\\left(${b};${p}\\right)$ et le vecteur $\\vec{u}\\left(${x};${d}\\right)$`,v+="<br>Déterminer les coordonnées du point $B$ tel que  $\\vec{u}=\\overrightarrow{AB}$ ",y=" <br> Soit  $B(x_B;y_B)$ les coordonnées du point que nous cherchons à déterminer.",y+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère,",y+=" <br>alors on a  $\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A  \\\\y_B-y_A\\end{pmatrix}$<br>",y+=" <br>On applique ici aux données de l'énoncé :",y+=` $\\overrightarrow{AB}\\begin{pmatrix} x_B-${(0,s.PMY)(b)}  \\\\y_B-${(0,s.PMY)(p)}\\end{pmatrix}$<br>`,b<0|p<0&&(y+=` ou encore : $\\overrightarrow{AB}\\begin{pmatrix} x_B${(0,s.tPu)(-b)}  \\\\y_B${(0,s.tPu)(-p)}\\end{pmatrix}$<br>`),y+="On sait d'après l'énoncé que : $\\vec{u}=\\overrightarrow{AB}$, ",y+=`cela équivaut à résoudre : $\\begin{cases}x_B ${(0,s.tPu)(-b)} =${x}\\\\ y_B${(0,s.tPu)(-p)}=${d}\\end{cases}$`,y+=`<br>ou encore : $\\begin{cases}x_B  =${x}${(0,s.tPu)(b)}\\\\ y_B=${d}${(0,s.tPu)(p)}\\end{cases}$`,y+=`<br>Ce qui donne au final : $\\begin{cases}x_B  =${A}\\\\ y_B=${q}\\end{cases}$`,y+=`<br>On a donc: $B(${A};${q})$.`,e=(0,n.sYn)(),i=(0,n.xmu)(b,p,"A"),t=(0,n.xmu)(A,q,"B"),$=(0,n.L6P)(i,t,"red"),l=(0,n.BD1)(i,t,"red"),c=(0,n.EXn)(i,t,"red"),r=(0,n.xmu)(0,0,"O"),m=(0,n.BD1)(r),o=(0,n.xmu)(1,0),u=(0,n.xmu)(0,1),h=(0,n.EXn)(r,o),a=(0,n.EXn)(r,u),c.styleExtremites="->",h.styleExtremites="->",a.styleExtremites="->",c.epaisseur=3,h.epaisseur=3,a.epaisseur=3,B=(0,n.wq3)("i",.5,-.7,1.5,0),g=(0,n.wq3)("j",-.7,.5,1.5,0),_=(0,n.wq3)("AB",(b+A)/2+1,(p+q)/2+1,1,0),y+=(0,n.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},e,$,l,h,a,c,m,B,g,_)),2===this.sup&&(b=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),p=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),x=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),d=(0,s.nSR)(1,4)*(0,s.q$q)([-1,1]),A=b+x,q=p+d,v="Dans un repère orthonormé $(O,\\vec i,\\vec j)$, on donne le point  ",v+=` $B\\left(${A};${q}\\right)$ et le vecteur $\\vec{u}\\left(${x};${d}\\right)$`,v+="<br>Déterminer les coordonnées du point $A$ tel que  $\\vec{u}=\\overrightarrow{AB}$ ",y=" <br> Soit  $A(x_A;y_A)$ les coordonnées du point que nous cherchons à déterminer.",y+="<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère,",y+=" <br>alors on a  $\\overrightarrow{AB}\\begin{pmatrix}x_B-x_A  \\\\y_B-y_A\\end{pmatrix}$<br>",y+=" <br>On applique ici aux données de l'énoncé :",y+=` $\\overrightarrow{AB}\\begin{pmatrix} ${A}-x_A  \\\\${q}-y_A\\end{pmatrix}$<br>`,y+="On sait d'après l'énoncé que : $\\vec{u}=\\overrightarrow{AB}$, ",y+=`cela équivaut à résoudre : $\\begin{cases}${(0,s.tPu)(A)}-x_A =${x}\\\\ ${(0,s.tPu)(q)}-y_A=${d}\\end{cases}$`,y+=`<br>ou encore : $\\begin{cases}x_A  =${A}${(0,s.tPu)(-x)}\\\\ y_A=${q}${(0,s.tPu)(-d)}\\end{cases}$`,y+=`<br>Ce qui donne au final : $\\begin{cases}x_A  =${b}\\\\ y_A=${p}\\end{cases}$`,y+=`<br>On a donc: $A(${b};${p})$.`,e=(0,n.sYn)(),i=(0,n.xmu)(b,p,"A"),t=(0,n.xmu)(A,q,"B"),$=(0,n.L6P)(i,t,"red"),l=(0,n.BD1)(i,t,"red"),c=(0,n.EXn)(i,t,"red"),r=(0,n.xmu)(0,0,"O"),m=(0,n.BD1)(r),o=(0,n.xmu)(1,0),u=(0,n.xmu)(0,1),h=(0,n.EXn)(r,o),a=(0,n.EXn)(r,u),c.styleExtremites="->",h.styleExtremites="->",a.styleExtremites="->",c.epaisseur=3,h.epaisseur=3,a.epaisseur=3,B=(0,n.wq3)("i",.5,-.7,1.5,0),g=(0,n.wq3)("j",-.7,.5,1.5,0),_=(0,n.wq3)("AB",(b+A)/2+1,(p+q)/2+1,1,0),y+=(0,n.iR9)({xmin:-9,ymin:-9,xmax:9,ymax:9},e,$,l,h,a,c,m,B,g,_)),this.questionJamaisPosee(f,b,p,A,q)&&(this.listeQuestions.push(v),this.listeCorrections.push(y),f++),C++;(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Situations différentes ",3,"1 :Avec deux points\n 2 : Avec un point origine et un vecteur\n 3 :Avec un point extrémité et un vecteur"]}},25523:(e,i,t)=>{function r(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const r of i)void 0!==r&&(t+=r.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>r})}}]);
//# sourceMappingURL=54874.144e4798f075185866ea.js.map