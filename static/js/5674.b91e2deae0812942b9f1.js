(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5674,7567],{65674:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>r,default:()=>o});var s=i(67567),a=i(24477),n=i(17199);const r="Calculer la hauteur d’une falaise";function o(){s.default.call(this),this.titre=r,this.consigne="",this.nbCols=1,this.nbColsCorr=1,this.sup=!0,this.tailleDiaporama=100,this.video="",this.nbQuestions=1,this.spacingCorr=2,this.spacing=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,t,i,s,r,o,$,l,h,u,c,d=[];sortieHtml?(t="α",i="β"):(t="\\alpha",i="\\beta");for(let m,b,p=0,f=0;p<this.nbQuestions&&f<50;)d=[],r=(0,a.nSR)(25,45),s=Math.tan(r*Math.PI/180)*Math.tan((r+1)*Math.PI/180)/(Math.tan((r+1)*Math.PI/180)-Math.tan(r*Math.PI/180)),e=(0,a.nSR)(5,10),o=s*e,$=(0,n.xmu)(0,0,"A"),l=(0,n.dJt)($,5,0,"B"),h=(0,n.dJt)($,12,0,"H"),u=(0,n.dJt)(h,7,90,"S"),c=(0,n.uGk)($,l,h,u),d.push(c[1],c[0],(0,n.EXn)(u,l),(0,n.lvA)($,h,u)),d.push((0,n.DQC)(h,$,u,"black",2,`${t}`),(0,n.DQC)(h,l,u,"black",2,`${i}`)),d.push((0,n.DJq)(`${(0,a.euh)(e)} m`,$,l,"black",-.5),(0,n.Ots)("h",(0,n.Q2H)(h,u).x+.5,(0,n.Q2H)(h,u).y,0,"black",2,"middle",!0)),m="Un observateur sur un bateau s'approche d'une falaise dont il veut mesurer la hauteur.<br>",m+=`Il jette l'ancre puis constate qu'il voit la falaise sous un angle de $${r}\\degree$.<br>`,m+=`Il se rapproche ensuite de la falaise jusqu'à la voir sous un angle de $${r+5}\\degree$.<br>`,m+=`Il constate qu'entre ses deux mesures, il s'est rapproché de la falaise de $${e}$ m.<br>`,this.sup&&(m+="Le schéma ci-dessous n'est pas en vraie grandeur.<br>"+(0,n.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},d),m+=`<br>Exprimer $h$ en fonction de $BH$ et $${t}$ puis en fonction de $AH$ et $${i}$.<br>`,m+=`En déduire $BH$ en fonction de $AB$, $${t}$ et $${i}$.<br>`,m+=`Exprimer $HS$ en fonction de $AB$, $${t}$ et $${i}$.<br>`),m+="Quelle est la hauteur de la falaise ?<br>",m+="A quelle distance du pied de la falaise se trouve l'observateur lors du deuxième relevé ?<br>",m+="Arrondir les résultats au mètre près. (On supposera le point d'observation au niveau de l'eau)",b=(0,n.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},d),b+=`<br>Dans le triangle $BHS$ rectangle en $H$, $\\tan(${i})=\\dfrac{h}{BH}$.<br>D'où $h=BH\\times \\tan(${i})$.<br>`,b+=`<br>Dans le triangle $AHS$ rectangle en $H$, $\\tan(${t})=\\dfrac{h}{AH}$.<br>D'où $h=AH\\times \\tan(${t})$.<br>`,b+=`Or $AH=AB+BH$ donc $h=(AB+BH)\\times \\tan(${t})$.<br>`,b+=`On en déduit que $BH\\times \\tan(${i})=(AB+BH)\\times \\tan(${t})$ soit $BH\\times \\tan(${i})=AB\\times \\tan(${t})+BH\\times \\tan(${t})$.<br>`,b+=`D'où $AB\\times \\tan(${t})=BH\\times \\tan(${i})-BH\\times \\tan(${t})=BH\\times (\\tan(${i})-\\tan(${t}))$.<br>`,b+=`Et $BH=\\dfrac{AB\\times \\tan(${t})}{\\tan(${i})-\\tan(${t})}$.<br>`,b+=`Ainsi $h=BH\\times \\tan(${i})=\\dfrac{AB\\times \\tan(${t})\\times \\tan(${i})}{\\tan(${i})-\\tan(${t})}$.<br>`,b+="Application numérique : <br>",b+=`$h=\\dfrac{${e}\\times \\tan(${r})\\times \\tan(${r+5})}{\\tan(${r+5})-\\tan(${r})}\\approx ${Math.round(o)}$ m.<br>`,b+=`$BH=\\dfrac{${e}\\times \\tan(${r})}{\\tan(${r+5})-\\tan(${r})}\\approx ${(0,a.k$K)(Math.round(o/Math.tan((r+5)*Math.PI/180)))}$ m.<br>`,b+=`La hauteur de la falaise est de $${Math.round(o)}$ m et l'observateur se trouve à $${(0,a.k$K)(Math.round(o/Math.tan((r+5)*Math.PI/180)))}$ m de celle-ci lors du deuxième relevé.<br>`,-1==this.listeQuestions.indexOf(m)&&(this.listeQuestions.push(m),this.listeCorrections.push(b),p++),f++;(0,a.K1R)(this)},this.besoinFormulaireCaseACocher=["Afficher un schéma et des questions intermédiaires"]}},67567:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);