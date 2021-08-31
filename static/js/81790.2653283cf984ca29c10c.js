"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[81790,17007],{81790:(e,o,t)=>{t.r(o),t.d(o,{titre:()=>r,default:()=>h});var n=t(17007),i=t(66170),s=t(30169),a=t(92329),m=t(6293);const r="Calculer toutes les mesures d’angle d’une figure complexe";function h(){n.default.call(this),this.titre=r,this.consigne="Calculer la mesure de tous les angles de cette figure.",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.spacingCorr=3,this.correctionDetailleeDisponible=!0,i.Do.isHtml?this.correctionDetaillee=!0:this.correctionDetaillee=!1,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,s.q$q)(["BA-AD-BAC","BA-AD-ACB"]);let o,t;const n=(0,a.xmu)(0,0,"","below"),i=(0,a.xmu)((0,s.nSR)(4,7),0,"","below"),r=(0,a.xmu)(0,(0,s.nSR)(3,7,(0,a.InT)(i,n)),"","above"),h=(0,a.R_h)(i,n,r),$=(0,a.R_h)(i,n,r);$.color="blue",$.epaisseur=3;const u=(0,a.lvA)(i,n,r),c=(0,a.$7o)(r,i,-90,(0,s.n0o)((0,s.nSR)(7,12,10)/10),"","right"),l=(0,a.R_h)(r,i,c),d=(0,a.R_h)(r,i,c);d.color="blue",d.epaisseur=3;const b=(0,a.lvA)(r,i,c),x=(0,s.wnJ)(4);i.nom=x[0],n.nom=x[1],r.nom=x[2],c.nom=x[3];const p=(0,a.BD1)(i,n,r,c),f=(0,a.InT)(n,i),g=(0,a.InT)(i,c,1),C=Math.ceil((0,a.EUu)(n,i,r));let D=(0,s.n0o)(f/Math.cos((0,m.uR)(C)),1),q=Math.round((0,m.x_)(Math.atan(g/D))),y=(0,a.DQC)(n,i,r,"black",1,C+"°");const A=(0,a.Y2F)(i,n),M=(0,a.Y2F)(c,i),w=(0,a.Y2F)(i,r),R=(0,a.QSb)(i,r,c,1.2);R.epaisseur=2;const F=Math.ceil((0,a.EUu)(i,r,n)),k=[h,l,u,b,p];switch(e){case"BA-AD-BAC":if(this.sup&&k.push(y,A,M),o=(0,a.iR9)({xmin:-1,ymin:-1,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},k),this.sup||(o+=`<br>On a $${n.nom+i.nom} = ${(0,s.euh)(f)}$ cm, $${i.nom+c.nom} = ${(0,s.euh)(g)}$ cm et $\\widehat{${n.nom+i.nom+r.nom}}=${C}°$.`),t="",this.correctionDetaillee){const e=(0,a.DJq)("hypoténuse",r,i),o=(0,a.DJq)("adjacent",i,n,"black",1);t+=(0,a.iR9)({xmin:-1,ymin:-2,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},$,l,u,b,y,A,p,e,o),t+="<br>"}if(t+=`$${r.nom+n.nom+i.nom}$ est rectangle en $${n.nom}$ donc $\\cos\\left(\\widehat{${n.nom+i.nom+r.nom}}\\right)=\\dfrac{${n.nom+i.nom}}{${i.nom+r.nom}}\\quad$ `,t+=`soit $\\quad\\cos(${C}°)=\\dfrac{${(0,s.euh)(f)}}{${i.nom+r.nom}}\\quad$ et $\\quad ${i.nom+r.nom}=\\dfrac{${(0,s.euh)(f)}}{\\cos(${C}°)}\\approx${(0,s.euh)(D)}$ cm.`,this.correctionDetaillee){const e=(0,a.DJq)("adjacent",r,i),o=(0,a.DJq)("opposé",i,c,"black");t+="<br><br>"+(0,a.iR9)({xmin:-1,ymin:-1,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},h,d,u,b,M,w,R,p,e,o)}t+=`<br><br>$${r.nom+i.nom+c.nom}$ est rectangle en $${i.nom}$ donc $\\tan\\left(\\widehat{${i.nom+r.nom+c.nom}}\\right)=\\dfrac{${i.nom+c.nom}}{${i.nom+r.nom}}\\quad$ `,t+=`soit $\\quad\\tan\\left(\\widehat{${i.nom+r.nom+c.nom}}\\right)\\approx\\dfrac{${(0,s.euh)(g)}}{${(0,s.euh)(D)}}\\quad$ et $\\quad\\widehat{${i.nom+r.nom+c.nom}}=\\text{arctan}\\left(\\dfrac{${(0,s.euh)(g)}}{${(0,s.euh)(D)}}\\right)\\approx${q}$°.`,t+=`<br><br>La somme des angles d'un triangle est égale à 180° donc $\\widehat{${n.nom+r.nom+i.nom}}=180°-90°-${C}°=${90-C}°$.`,t+=`<br>De même, $\\widehat{${r.nom+c.nom+i.nom}}\\approx 180°-90°-${q}°\\approx${90-q}°$.`;break;case"BA-AD-ACB":if(D=(0,s.n0o)(f/Math.sin((0,m.uR)(F)),1),q=Math.round((0,m.x_)(Math.atan(g/D))),y=(0,a.DQC)(i,r,n,"black",1,F+"°"),this.sup&&k.push(y,A,M),o=(0,a.iR9)({xmin:-1,ymin:-1,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},k),this.sup||(o+=`<br>On a $${n.nom+i.nom} = ${(0,s.euh)(f)}$ cm, $${i.nom+c.nom} = ${(0,s.euh)(g)}$ cm et $\\widehat{${i.nom+r.nom+n.nom}}=${F}°$.`),t="",this.correctionDetaillee){const e=(0,a.DJq)("hypoténuse",r,i),o=(0,a.DJq)("opposé",i,n,"black",1);t+=(0,a.iR9)({xmin:-1,ymin:-2,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},$,l,u,b,y,A,p,e,o),t+="<br>"}if(t+=`$${r.nom+n.nom+i.nom}$ est rectangle en $${n.nom}$ donc $\\sin\\left(\\widehat{${i.nom+r.nom+n.nom}}\\right)=\\dfrac{${n.nom+i.nom}}{${i.nom+r.nom}}\\quad$ `,t+=`soit $\\quad\\sin(${F}°)=\\dfrac{${(0,s.euh)(f)}}{${i.nom+r.nom}}\\quad$ et $\\quad ${i.nom+r.nom}=\\dfrac{${(0,s.euh)(f)}}{\\sin(${F}°)}\\approx${(0,s.euh)(D)}$ cm.`,this.correctionDetaillee){const e=(0,a.DJq)("adjacent",r,i),o=(0,a.DJq)("opposé",i,c,"black");t+="<br><br>"+(0,a.iR9)({xmin:-1,ymin:-1,xmax:c.x+1,ymax:Math.max(r.y,c.y)+1},h,d,u,b,M,w,R,p,e,o)}t+=`<br><br>$${r.nom+i.nom+c.nom}$ est rectangle en $${i.nom}$ donc $\\tan\\left(\\widehat{${i.nom+r.nom+c.nom}}\\right)=\\dfrac{${i.nom+c.nom}}{${i.nom+r.nom}}\\quad$ `,t+=`soit $\\quad\\tan\\left(\\widehat{${i.nom+r.nom+c.nom}}\\right)\\approx\\dfrac{${(0,s.euh)(g)}}{${(0,s.euh)(D)}}\\quad$ et $\\quad\\widehat{${i.nom+r.nom+c.nom}}=\\text{arctan}\\left(\\dfrac{${(0,s.euh)(g)}}{${(0,s.euh)(D)}}\\right)\\approx${q}$°.`,t+=`<br><br>La somme des angles d'un triangle est égale à 180° donc $\\widehat{${n.nom+r.nom+i.nom}}=180°-90°-${C}°=${90-C}°$.`,t+=`<br>De même, $\\widehat{${r.nom+c.nom+i.nom}}\\approx 180°-90°-${q}°\\approx${90-q}°$.`}this.listeQuestions.push(o),this.listeCorrections.push(t),(0,s.K1R)(this)},this.besoinFormulaireCaseACocher=["Figure codée"]}},17007:(e,o,t)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...o){0===e&&(this.listeArguments=[]);let t="";for(const n of o)void 0!==n&&(t+=n.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(o),t.d(o,{default:()=>n})}}]);
//# sourceMappingURL=81790.2653283cf984ca29c10c.js.map