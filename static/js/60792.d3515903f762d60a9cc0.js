"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[60792,25523],{60792:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>o,default:()=>l});var s=i(25523),a=i(22380),n=i(25482),r=i(71250);const o="Calculer la hauteur d’une falaise";function l(){s.default.call(this),this.titre=o,this.consigne="",this.nbCols=1,this.nbColsCorr=1,this.sup=!0,this.tailleDiaporama=3,this.video="",this.nbQuestions=1,this.spacingCorr=2,this.spacing=2,this.nouvelleVersion=function(){let e,t,i,s,o,l,u,h,$,c;this.listeQuestions=[],this.listeCorrections=[];let m,b=[];a.Do.isHtml?(t="α",i="β"):(t="\\alpha",i="\\beta");for(let a,d,p=0,f=0;p<this.nbQuestions&&f<50;)b=[],o=(0,n.nSR)(25,45),s=Math.tan(o*Math.PI/180)*Math.tan((o+1)*Math.PI/180)/(Math.tan((o+1)*Math.PI/180)-Math.tan(o*Math.PI/180)),e=(0,n.nSR)(5,10),l=s*e,u=(0,r.xmu)(0,0,"A"),h=(0,r.dJt)(u,5,0,"B"),$=(0,r.dJt)(u,12,0,"H"),c=(0,r.dJt)($,7,90,"S"),m=(0,r.uGk)(u,h,$,c),b.push(m[1],m[0],(0,r.EXn)(c,h),(0,r.lvA)(u,$,c)),b.push((0,r.DQC)($,u,c,"black",2,`${t}`),(0,r.DQC)($,h,c,"black",2,`${i}`)),b.push((0,r.DJq)(`${(0,n.euh)(e)} m`,u,h,"black",-.5),(0,r.Ots)("h",(0,r.Q2H)($,c).x+.5,(0,r.Q2H)($,c).y,0,"black",2,"middle",!0)),a="Un observateur sur un bateau s'approche d'une falaise dont il veut mesurer la hauteur.<br>",a+=`Il jette l'ancre puis constate qu'il voit la falaise sous un angle de $${o}\\degree$.<br>`,a+=`Il se rapproche ensuite de la falaise jusqu'à la voir sous un angle de $${o+5}\\degree$.<br>`,a+=`Il constate qu'entre ses deux mesures, il s'est rapproché de la falaise de $${e}$ m.<br>`,this.sup&&(a+="Le schéma ci-dessous n'est pas en vraie grandeur.<br>"+(0,r.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},b),a+=`<br>Exprimer $h$ en fonction de $BH$ et $${t}$ puis en fonction de $AH$ et $${i}$.<br>`,a+=`En déduire $BH$ en fonction de $AB$, $${t}$ et $${i}$.<br>`,a+=`Exprimer $HS$ en fonction de $AB$, $${t}$ et $${i}$.<br>`),a+="Quelle est la hauteur de la falaise ?<br>",a+="À quelle distance du pied de la falaise se trouve l'observateur lors du deuxième relevé ?<br>",a+="Arrondir les résultats au mètre près. (On supposera le point d'observation au niveau de l'eau)",d=(0,r.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:8,pixelsParCm:20,scale:.5},b),d+=`<br>Dans le triangle $BHS$ rectangle en $H$, $\\tan(${i})=\\dfrac{h}{BH}$.<br>D'où $h=BH\\times \\tan(${i})$.<br>`,d+=`<br>Dans le triangle $AHS$ rectangle en $H$, $\\tan(${t})=\\dfrac{h}{AH}$.<br>D'où $h=AH\\times \\tan(${t})$.<br>`,d+=`Or $AH=AB+BH$ donc $h=(AB+BH)\\times \\tan(${t})$.<br>`,d+=`On en déduit que $BH\\times \\tan(${i})=(AB+BH)\\times \\tan(${t})$ soit $BH\\times \\tan(${i})=AB\\times \\tan(${t})+BH\\times \\tan(${t})$.<br>`,d+=`D'où $AB\\times \\tan(${t})=BH\\times \\tan(${i})-BH\\times \\tan(${t})=BH\\times (\\tan(${i})-\\tan(${t}))$.<br>`,d+=`Et $BH=\\dfrac{AB\\times \\tan(${t})}{\\tan(${i})-\\tan(${t})}$.<br>`,d+=`Ainsi $h=BH\\times \\tan(${i})=\\dfrac{AB\\times \\tan(${t})\\times \\tan(${i})}{\\tan(${i})-\\tan(${t})}$.<br>`,d+="Application numérique : <br>",d+=`$h=\\dfrac{${e}\\times \\tan(${o})\\times \\tan(${o+5})}{\\tan(${o+5})-\\tan(${o})}\\approx ${Math.round(l)}$ m.<br>`,d+=`$BH=\\dfrac{${e}\\times \\tan(${o})}{\\tan(${o+5})-\\tan(${o})}\\approx ${(0,n.k$K)(Math.round(l/Math.tan((o+5)*Math.PI/180)))}$ m.<br>`,d+=`La hauteur de la falaise est de $${Math.round(l)}$ m et l'observateur se trouve à $${(0,n.k$K)(Math.round(l/Math.tan((o+5)*Math.PI/180)))}$ m de celle-ci lors du deuxième relevé.<br>`,-1===this.listeQuestions.indexOf(a)&&(this.listeQuestions.push(a),this.listeCorrections.push(d),p++),f++;(0,n.K1R)(this)},this.besoinFormulaireCaseACocher=["Afficher un schéma et des questions intermédiaires"]}},25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=60792.d3515903f762d60a9cc0.js.map