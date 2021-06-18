(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[89751,71129],{89751:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>o,default:()=>l});var s=i(71129),a=i(62259),n=i(63861),r=i(55802);const o="Calculer la hauteur d’une falaise";function l(){s.default.call(this),this.titre=o,this.consigne="",this.nbCols=1,this.nbColsCorr=1,this.sup=!0,this.tailleDiaporama=100,this.video="",this.nbQuestions=1,this.spacingCorr=2,this.spacing=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,t,i,s,o,l,$,h,u,c,m,d=[];a.Do.isHtml?(t="α",i="β"):(t="\\alpha",i="\\beta");for(let a,b,p=0,f=0;p<this.nbQuestions&&f<50;)d=[],o=(0,n.nSR)(25,45),s=Math.tan(o*Math.PI/180)*Math.tan((o+1)*Math.PI/180)/(Math.tan((o+1)*Math.PI/180)-Math.tan(o*Math.PI/180)),e=(0,n.nSR)(5,10),l=s*e,$=(0,r.xmu)(0,0,"A"),h=(0,r.dJt)($,5,0,"B"),u=(0,r.dJt)($,12,0,"H"),c=(0,r.dJt)(u,7,90,"S"),m=(0,r.uGk)($,h,u,c),d.push(m[1],m[0],(0,r.EXn)(c,h),(0,r.lvA)($,u,c)),d.push((0,r.DQC)(u,$,c,"black",2,`${t}`),(0,r.DQC)(u,h,c,"black",2,`${i}`)),d.push((0,r.DJq)(`${(0,n.euh)(e)} m`,$,h,"black",-.5),(0,r.Ots)("h",(0,r.Q2H)(u,c).x+.5,(0,r.Q2H)(u,c).y,0,"black",2,"middle",!0)),a="Un observateur sur un bateau s'approche d'une falaise dont il veut mesurer la hauteur.<br>",a+=`Il jette l'ancre puis constate qu'il voit la falaise sous un angle de $${o}\\degree$.<br>`,a+=`Il se rapproche ensuite de la falaise jusqu'à la voir sous un angle de $${o+5}\\degree$.<br>`,a+=`Il constate qu'entre ses deux mesures, il s'est rapproché de la falaise de $${e}$ m.<br>`,this.sup&&(a+="Le schéma ci-dessous n'est pas en vraie grandeur.<br>"+(0,r.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},d),a+=`<br>Exprimer $h$ en fonction de $BH$ et $${t}$ puis en fonction de $AH$ et $${i}$.<br>`,a+=`En déduire $BH$ en fonction de $AB$, $${t}$ et $${i}$.<br>`,a+=`Exprimer $HS$ en fonction de $AB$, $${t}$ et $${i}$.<br>`),a+="Quelle est la hauteur de la falaise ?<br>",a+="A quelle distance du pied de la falaise se trouve l'observateur lors du deuxième relevé ?<br>",a+="Arrondir les résultats au mètre près. (On supposera le point d'observation au niveau de l'eau)",b=(0,r.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},d),b+=`<br>Dans le triangle $BHS$ rectangle en $H$, $\\tan(${i})=\\dfrac{h}{BH}$.<br>D'où $h=BH\\times \\tan(${i})$.<br>`,b+=`<br>Dans le triangle $AHS$ rectangle en $H$, $\\tan(${t})=\\dfrac{h}{AH}$.<br>D'où $h=AH\\times \\tan(${t})$.<br>`,b+=`Or $AH=AB+BH$ donc $h=(AB+BH)\\times \\tan(${t})$.<br>`,b+=`On en déduit que $BH\\times \\tan(${i})=(AB+BH)\\times \\tan(${t})$ soit $BH\\times \\tan(${i})=AB\\times \\tan(${t})+BH\\times \\tan(${t})$.<br>`,b+=`D'où $AB\\times \\tan(${t})=BH\\times \\tan(${i})-BH\\times \\tan(${t})=BH\\times (\\tan(${i})-\\tan(${t}))$.<br>`,b+=`Et $BH=\\dfrac{AB\\times \\tan(${t})}{\\tan(${i})-\\tan(${t})}$.<br>`,b+=`Ainsi $h=BH\\times \\tan(${i})=\\dfrac{AB\\times \\tan(${t})\\times \\tan(${i})}{\\tan(${i})-\\tan(${t})}$.<br>`,b+="Application numérique : <br>",b+=`$h=\\dfrac{${e}\\times \\tan(${o})\\times \\tan(${o+5})}{\\tan(${o+5})-\\tan(${o})}\\approx ${Math.round(l)}$ m.<br>`,b+=`$BH=\\dfrac{${e}\\times \\tan(${o})}{\\tan(${o+5})-\\tan(${o})}\\approx ${(0,n.k$K)(Math.round(l/Math.tan((o+5)*Math.PI/180)))}$ m.<br>`,b+=`La hauteur de la falaise est de $${Math.round(l)}$ m et l'observateur se trouve à $${(0,n.k$K)(Math.round(l/Math.tan((o+5)*Math.PI/180)))}$ m de celle-ci lors du deuxième relevé.<br>`,-1===this.listeQuestions.indexOf(a)&&(this.listeQuestions.push(a),this.listeCorrections.push(b),p++),f++;(0,n.K1R)(this)},this.besoinFormulaireCaseACocher=["Afficher un schéma et des questions intermédiaires"]}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=89751.901522b2366a3cf58b46.js.map