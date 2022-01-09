"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[16351,25523],{16351:(e,i,s)=>{s.r(i),s.d(i,{titre:()=>a,default:()=>u});var t=s(25523),r=s(22380),n=s(25482),o=s(71250);const a="Calculer la hauteur d’un objet vu sous un angle donné";function u(){t.default.call(this),this.titre=a,this.consigne="",this.nbCols=1,this.nbColsCorr=1,this.sup=!0,this.tailleDiaporama=3,this.video="",this.nbQuestions=1,this.spacingCorr=2,this.spacing=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=[["arbre","un",""],["immeuble","un",""],["éolienne","une","te"],["coline","une","te"]];let i,s,t,a,u,h,l,c,$,b,m,d,C,p,g,f=[];r.Do.isHtml?(t="α",a="β"):(t="\\alpha",a="\\beta");for(let r,x,S=0,v=0;S<this.nbQuestions&&v<50;)f=[],i=(0,n.nSR)(5,300),s=(0,n.n0o)((0,n.nSR)(150,190)/100),u=Math.atan(s/i),h=(0,n.nSR)(10,50),l=h*Math.PI/180-u,c=(0,n.vbX)(s+i*Math.tan(l),1),$=c<20?0:c<50?1:c<100?2:3,b=(0,o.xmu)(0,0,"A"),m=(0,o.dJt)(b,12,0,"B"),d=(0,o.dJt)(b,3,90,"O"),C=(0,o.dJt)(m,3,90,"H"),p=(0,o.dJt)(m,9,90,"S"),g=(0,o.uGk)(b,m,C,p,d),f.push(g[1],g[0],(0,o.EXn)(d,m),(0,o.EXn)(d,C),(0,o.lvA)(d,b,m),(0,o.lvA)(b,m,C),(0,o.lvA)(d,C,p)),f.push((0,o.DQC)(m,d,p,"black",3,`${t}`),(0,o.DQC)(b,m,d,"black",2,`${a}`),(0,o.DQC)(m,d,C,"black",2,`${a}`)),f.push((0,o.DJq)(`${(0,n.euh)(s)} m`,d,b,"black",-.5),(0,o.DJq)(`${(0,n.euh)(i)} m`,d,C)),r=`Un observateur regarde ${e[$][1]} ${e[$][0]} sous un angle de $${h}\\degree$.<br>`,r+=`Cet${e[$][2]} ${e[$][0]} est situé à une distance de $${(0,n.euh)(i)}$ m de l'observateur.<br>`,r+=`l'oeil de l'observateur est situé à $${(0,n.euh)(s)}$ m du sol.<br>`,this.sup&&(r+=`$O$ représente l'oeil de l'observateur, $[BS]$ représente cet${e[$][2]} ${e[$][0]}.<br>`,r+="Le schéma ci-dessous n'est pas en vraie grandeur.<br>"+(0,o.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:10,pixelsParCm:20,scale:.5},f),r+=`<br>Calculer d'abord l'angle $${a}$.<br>`,r+="En déduire la mesure de l'angle $\\widehat{HOS}$.<br>",r+="Calculer alors la longueur $HS$.<br>"),r+=`Calculer la hauteur de cet${e[$][2]} ${e[$][0]} arrondie au mètre près.<br>`,x=(0,o.iR9)({xmin:-1,ymin:-1,xmax:14,ymax:10,pixelsParCm:20,scale:.5},f),x+=`<br>Dans le triangle $OHB$ rectangle en $H$, $\\tan(${a})=\\dfrac{HB}{OH}$.<br>D'où $${a}=\\arctan(\\dfrac{${(0,n.euh)(s)}}{${(0,n.euh)(i)}})\\approx ${(0,n.S1u)(u)}\\degree$.<br>`,x+=`$\\widehat{HOS}=${t}-${a}\\approx ${(0,n.S1u)(h-u)}$.<br>`,x+=`$HS=OH\\times \\tan(\\widehat{HOS})\\approx ${i}\\times \\tan(${(0,n.S1u)(h-u)})\\approx ${(0,n.k$K)(c-s)}$ m.<br>`,x+=`$BS=BH+HS=${(0,n.euh)(s)}+${(0,n.k$K)(c-s)}=${(0,n.euh)(c)}$ m.<br>`,x+=`Cet${e[$][2]} ${e[$][0]} mesure $${(0,n.euh)(Math.round(c))}$ m de hauteur.`,-1===this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(x),S++),v++;(0,n.K1R)(this)},this.besoinFormulaireCaseACocher=["Afficher un schéma et des questions intermédiaires"]}},25523:(e,i,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let s="";for(const t of i)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(i),s.d(i,{default:()=>t})}}]);
//# sourceMappingURL=16351.ca3c50c3a72caf5dbb0d.js.map