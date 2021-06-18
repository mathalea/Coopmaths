(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9193,71129],{9193:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>r});var s=i(71129),c=(i(62259),i(63861));function r(e=1){s.default.call(this),this.sup=e,this.titre="Calculs de périmètres et d'aires",this.consigne="Pour chacune des figures, calculer son périmètre puis son aire (valeur exacte et si nécessaire valeur approchée au dixième près).",this.spacing=1,this.nbQuestions=4,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,t,i,s,r=[[3,4,5],[6,8,10],[15,8,17],[24,10,26],[5,12,13],[12,16,20],[21,20,29],[9,40,41]],n=["carre","rectangle","triangle_rectangle","cercle"];this.sup2?(t=(0,c.n0o)((0,c.nSR)(1,9)/10),i=(0,c.n0o)((0,c.nSR)(1,9)/10),s=(0,c.n0o)((0,c.nSR)(1,9)/10*(0,c.nSR)(0,1))):(t=0,i=0,s=0),1==this.sup?((0,c.XzT)(n,"cercle"),this.nbCols=1):2==this.sup&&(n=["cercle"]);let $=(0,c.SRM)(n,this.nbQuestions);for(let a,o,h=0,l=0;h<this.nbQuestions&&l<50;){switch(e=$[h],e){case"carre":let e=(0,c.n0o)((0,c.nSR)(2,11)+t),s=(0,c.wnJ)(4);a=(0,c.q$q)([!0,!1])?`Un carré $${s}$ de $${(0,c.euh)(e)}$ cm de côté .`:`Un carré $${s}$ tel que $${s[0]+s[1]} = ${(0,c.euh)(e)}$ cm.`,o=`$\\mathcal{P}_{${s}}=4\\times${(0,c.euh)(e)}~\\text{cm}=${(0,c.k$K)(4*e)}~\\text{cm}$<br>`,o+=`$\\mathcal{A}_{${s}}=${(0,c.euh)(e)}~\\text{cm}\\times${(0,c.euh)(e)}~\\text{cm}=${(0,c.k$K)(e*e)}~\\text{cm}^2$`;break;case"rectangle":let n=(0,c.n0o)((0,c.nSR)(3,11)+i),$=(0,c.nSR)(2,n-1),h=(0,c.wnJ)(4);a=(0,c.q$q)([!0,!1])?`Un rectangle $${h}$ de $${(0,c.euh)(n)}$ cm de longueur et de $${$}$ cm de largeur.`:`Un rectangle $${h}$ tel que $${h[0]+h[1]+" = "+(0,c.euh)(n)}$ cm et $${h[1]+h[2]+" = "+$}$ cm.`,o=`$\\mathcal{P}_{${h}}=(${(0,c.euh)(n)}~\\text{cm}+${$}~\\text{cm})\\times2=${(0,c.k$K)(2*(n+$))}~\\text{cm}$<br>`,o+=`$\\mathcal{A}_{${h}}=${(0,c.euh)(n)}~\\text{cm}\\times${$}~\\text{cm}=${(0,c.k$K)(n*$)}~\\text{cm}^2$`;break;case"triangle_rectangle":let l=(0,c.q$q)(r);(0,c.XzT)(r,l);let u=(0,c.n0o)(l[0]*(1+t)),m=(0,c.n0o)(l[1]*(1+t)),b=(0,c.n0o)(l[2]*(1+t)),d=(0,c.wnJ)(3);a=(0,c.q$q)([!0,!1])?`Un triangle $${d}$ rectangle en $${d[1]}$ tel que $${d[0]+d[1]+" = "+(0,c.euh)(u)}$ cm, $${d[1]+d[2]+" = "+(0,c.euh)(m)}$ cm et $${d[0]+d[2]+" = "+(0,c.euh)(b)}$ cm.`:`Un triangle rectangle $${d}$ a pour côtés : $${(0,c.euh)(u)}$ cm, $${(0,c.euh)(b)}$ cm et $${(0,c.euh)(m)}$ cm.`,o=`$\\mathcal{P}_{${d}}=${(0,c.euh)(u)}~\\text{cm}+${(0,c.euh)(m)}\n          ~\\text{cm}+${(0,c.euh)(b)}~\\text{cm}=${(0,c.euh)(u+m+b)}~\\text{cm}$<br>`,o+=`$\\mathcal{A}_{${d}}=${(0,c.euh)(u)}~\\text{cm}\\times${(0,c.euh)(m)}~\\text{cm}\\div2=${(0,c.k$K)(u*m/2)}~\\text{cm}^2$`;break;case"cercle":let x=(0,c.nSR)(3,11);(0,c.q$q)([!0,!1])?(a=`Un cercle de $${2*x}$ cm de diamètre.`,o=`Le diamètre est de $${2*x}$ cm donc le rayon est de $${x}$ cm.<br>`):(a=`Un cercle de $${x}$ cm de rayon.`,o=""),o+=`$\\mathcal{P}=2\\times${x}\\times\\pi~\\text{cm}=${2*x}\\pi~\\text{cm}\\approx${(0,c.S1u)(2*x*Math.PI,1)}~\\text{cm}$<br>`,o+=`$\\mathcal{A}=${x}\\times${x}\\times\\pi~\\text{cm}^2=${x*x}\\pi~\\text{cm}^2\\approx${(0,c.S1u)(x*x*Math.PI,1)}~\\text{cm}^2$`}-1===this.listeQuestions.indexOf(a)&&(this.listeQuestions.push(a),this.listeCorrections.push(o),h++),l++}(0,c.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Carré, rectangle et triangle rectangle\n2: Cercles\n3: Mélangé"],this.besoinFormulaire2CaseACocher=["Avec des décimaux",!1]}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=9193.6c22a57e70992772a43e.js.map