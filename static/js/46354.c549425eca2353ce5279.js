"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[46354,25523],{46354:(i,e,o)=>{o.r(e),o.d(e,{titre:()=>r,default:()=>a});var t=o(25523),s=o(25482),n=o(71250);const r="Problème trigonométrique - Triangle rectangle inscrit dans un triangle rectangle";function a(){t.default.call(this),this.titre=r,this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.spacingCorr=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[],e={},o="",t="";const r=(0,s.nSR)(5,9),a=(0,s.nSR)(r+1,r+4),l=(0,s.nSR)(3,r-1),m=(0,n.xmu)(0,0,"A","below left"),h=(0,n.xmu)(l,0,"C","below"),u=(0,n.xmu)(r,0,"D","below right"),c=(0,n.dRX)(u),$=(0,n.z7e)(m,a),b=(0,n.u$D)(c,$,"E");b.positionLabel="right";const d=(0,n.R_h)(m,u,b),p=(0,n.VTK)(m,b),f=(0,n.epX)(h,p,"B","above left"),g=(0,n.lvA)(m,f,h),C=(0,n.lvA)(m,u,b),x=(0,n.BD1)(m,f,h,u,b),v=(0,s.wnJ)(5);m.nom=v[0],f.nom=v[1],h.nom=v[2],u.nom=v[3],b.nom=v[4];(0,s.q$q)([!0,!1])&&(f.x*=-1,h.x*=-1,u.x*=-1,b.x*=-1,m.positionLabel="below",f.positionLabel="above",h.positionLabel="below",u.positionLabel="below",b.positionLabel="above");i=[d,(0,n.EXn)(f,h),g,C,x],e={xmin:-10,ymin:-1,xmax:10,ymax:b.y+1.5,pixelsParCm:20,scale:1,mainlevee:!1},o+=(0,n.iR9)(e,i),o+=`<br><br> $${m.nom+b.nom} = ${a}~\\text{cm}$, $${m.nom+u.nom} = ${r}~\\text{cm}$ et $${m.nom+h.nom} = ${l}~\\text{cm}$.`,o+=`<br> Calculer la longueur $${m.nom+f.nom}$ et donner une valeur approchée au millimètre près.`,t+=`Dans le triangle $${m.nom+u.nom+b.nom}$ rectangle en $${u.nom}$ : `,t+=`<br>$\\cos(\\widehat{${u.nom+m.nom+b.nom}})=\\dfrac{${m.nom+u.nom}}{${m.nom+b.nom}}\\quad$ soit $\\quad\\cos(\\widehat{${u.nom+m.nom+b.nom}})=\\dfrac{${r}}{${a}}$,`,t+=`<br> d'où $\\widehat{${u.nom+m.nom+b.nom}}=\\text{arccos}\\left(\\dfrac{${r}}{${a}}\\right)\\approx${(0,s.euh)((0,s.vbX)((0,n.EUu)(u,m,b),1))}\\degree$.`,t+=`<br><br>Dans le triangle $${m.nom+f.nom+h.nom}$ rectangle en $${f.nom}$ : `,t+=`<br>$\\cos(\\widehat{${f.nom+m.nom+h.nom}})=\\dfrac{${m.nom+f.nom}}{${m.nom+h.nom}}\\quad$ soit $\\quad\\cos(${(0,s.euh)((0,s.vbX)((0,n.EUu)(u,m,b),1))}\\degree)\\approx\\dfrac{${m.nom+f.nom}}{${l}}$,`,t+=`<br> d'où $${m.nom+f.nom} \\approx ${l} \\times \\cos(${(0,s.euh)((0,s.vbX)((0,n.EUu)(u,m,b),1))}\\degree)\\approx${(0,s.euh)((0,s.vbX)((0,n.InT)(m,f),1))}~\\text{cm}$.`,t+=`<br><br>On pouvait aussi écrire : $${m.nom+f.nom} = ${l} \\times \\cos\\left(\\text{arccos}\\left(\\dfrac{${r}}{${a}}\\right)\\right)=${l}\\times\\dfrac{${r}}{${a}}=${(0,s.xau)(l*r,a)}$.`,this.listeQuestions.push(o),this.listeCorrections.push(t),(0,s.K1R)(this)}}},25523:(i,e,o)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let o="";for(const t of e)void 0!==t&&(o+=t.toString());return!(this.listeArguments.indexOf(o)>-1)&&(this.listeArguments.push(o),!0)}}o.r(e),o.d(e,{default:()=>t})}}]);
//# sourceMappingURL=46354.c549425eca2353ce5279.js.map