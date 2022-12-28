"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[19834,25523],{25523:(e,s,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...s){0===e&&(this.listeArguments=[]);let i="";for(const t of s)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(s),i.d(s,{default:()=>t})},19834:(e,s,i)=>{i.r(s),i.d(s,{titre:()=>h,default:()=>$});var t=i(25523),a=i(71250),n=i(22380),o=i(25482),r=i(77074),l=i(56018);const u=(e,s=3)=>(Math.abs(e)*10**s%1>0?"\\approx":"=")+(0,o.euh)((0,o.n0o)(e,3)),h="Etude d’une parabole";function $(){t.default.call(this),this.titre=h,this.consigne="Etude d’une parabole",this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,n.Do.isHtml?this.spacingCorr=3:this.spacingCorr=1,this.sup=1,this.correctionDetailleeDisponible=!0,this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],e=this.sup<4?[parseInt(this.sup)]:[1];const s=[],i=(0,o.SRM)(e,this.nbQuestions);for(let t,n,h,$,c,b,d,m,p,x,f,C,g,M=0,S=0;M<this.nbQuestions&&S<50;){if(s.push((0,o.ff2)(M+6)),t="Faire l'étude et la représentation graphique de la parabole $P$ d'équation :",1===i[M])h=(0,o.nSR)(-4,4,0),$=(0,o.nSR)(-4,4),c=(0,o.nSR)(-5,5),f=$*$-4*h*c,d=(0,o.xau)(-$,2*h),m=(0,o.xau)(-f,4*h),b=`${h}*x^2${(0,o.tPu)($)}*x${(0,o.tPu)(c)}`,x=`${(0,r.og)(b).toString().replaceAll("*","\\times ")}`,b=b.replaceAll("*","\\times "),t=`$P : y = ${x}$`,n=`Le coefficient $a=${h}$ devant le terme en $x^2$ est ${["négatif","positif"][1*(h>0)]}, la parabole $P$ a donc ses branches dirigées vers le ${["bas","haut"][1*(h>0)]}`,n+=`<br>Regardons si la parabole $P$ coupe l'axe des abscisses, pour cela cherchons les $x$ tels que : $${x}=0$`,f>0?(C=(-$-Math.sqrt(f))/2/h,g=(-$+Math.sqrt(f))/2/h,0===c?(n+=`<br>On peut factoriser l'expression en : $x(${h}\\times x${(0,o.tPu)($)})=0$`,n+="<br>On en déduit que la parabole $P$ coupe l'axe des abscisses en ",n+=`$x_1=0$ et $x_2=${(0,o.xau)(-$,h)}$`):(n+=`<br>C'est une équation du second degré : $${b}=0$ avec $a=${h}$, $b=${$}$ et $c=${c}$`,n+=`<br>Calculons le discriminant : $\\Delta=b^2-4ac=${f} > 0$`,n+="<br>On en déduit que la parabole $P$ coupe l'axe des abscisses en ",n+=`$x=\\dfrac{${(0,o.tPu)(-$)}-${(0,o.BSg)(f)}}{2\\times ${(0,o.PMY)(h)}}${u(C)}$`,n+=` et $x=\\dfrac{${(0,o.tPu)(-$)}+${(0,o.BSg)(f)}}{2\\times ${(0,o.PMY)(h)}}${u(g)}$`)):0===f?n+=`<br>Il n'y a qu'une solution donnée par $x=${(0,o.xau)(-$,2*h)}$`:(n+=`<br>C'est une équation du second degré : $${b}=0$ avec $a=${h}$, $b=${$}$ et $c=${c}$`,n+=`<br>Calculons le discriminant : $\\Delta=b^2-4ac=${f} < 0$`,n+="<br>Il n'y a pas de solution et donc la parabole $P$ ne coupe pas l'axe des abscisses"),n+="<br>$\\underline{\\text{Coordonnées } S(x_S,y_S) \\text{ du sommet de la parabole } P}$ :",n+=`<br>L'abscisse du sommet $S$ est donné par la formule $x_S=\\dfrac{-b}{2a}=${d}$`,n+="<br>Et son ordonnée peut être calculé en utilisant la formule $y_S=\\dfrac{-\\Delta}{4a}$ (ou en remplaçant $x$ par $x_S$ dans l'équation de la parabole)",n+=`<br>$y_S=\\dfrac{-\\Delta}{4a}=\\dfrac{${-f}}{${(0,o.PMY)(4*h)}}=${m}$`,n+=`<br>Le sommet $S$ a donc pour coordonnées $\\left(${d}, ${m}\\right)$`;n+="<br>$\\underline{\\text{Recherche de points supplémentaires}}$ :";let e="<br>$\\begin{array}{c|c|c|c|c|c|c|c}";const P=[],q=e=>h*e**2+$*e+c;if(f<=0){n+="<br>Les coordonnées du sommet $S$ et le sens des branches de la parabole ne sont pas suffisants pour faire un tracé correct.",n+="<br>Cherchons les images d'abscisses à gauche et à droite du sommet :";for(let e=-3;e<4;e++)p=(0,l.GWj)(-$/2/h)+e,P.push([0===e?`x_S${u(-$/2/h)}`:p,0===e?`y_S${u(-f/4/h)}`:q(p)])}else{const e=Math.min(C,g);g=Math.max(C,g),C=e,P.push([`x_1${u(C)}`,"0"]),P.push([`x_S${u(-$/2/h)}`,`y_S${u(-f/4/h)}`]),P.push([`x_2${u(g)}`,"0"]);for(let s=1;s<3;s++)p=Math.floor(C-s),P.unshift([p,q(p)]),p=Math.floor(g+s),P.push([p,q(p)])}P.unshift(["x","y"]),e+=P.map((e=>e[0])).join("&")+"\\\\ \\hline ",e+=P.map((e=>e[1])).join("&")+"\\end{array}$",n+=e,n+="<br>On obtient finalement le graphique suivant :<br>";const y=Math.min(-1,P[1][0]),_=Math.max(1,P.slice(-1)[0][0]),D=0|Math.min(-1,-1+(h>0?-f/4/h:Math.min(q(y+1),q(_-1)))),F=0|Math.max(1,1+(h<0?-f/4/h:Math.max(q(y+1),q(_-1)))),A=(0,a.X4z)({xmin:y,xmax:_,ymin:D,ymax:F}),Q=(0,a.hhm)(q,y,_);n+=(0,a.iR9)({xmin:y,xmax:_,ymin:D,ymax:F,pixelsParCm:30,scale:.8},A,Q),-1===this.listeQuestions.indexOf(t)&&(this.listeQuestions.push(t),this.listeCorrections.push(n),M++),S++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=19834.3d24ff2b892faa0ede1a.js.map