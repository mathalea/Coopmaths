"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[29597,97546,17007],{97546:(i,t,s)=>{s.r(t),s.d(t,{interactifReady:()=>a,interactifType:()=>h,amcReady:()=>u,amcType:()=>l,default:()=>c});var e=s(17007),o=s(66170),n=s(30169),r=s(75664);const a=!0,h="numerique",u=!0,l="AMCNum";function c(i="2-3-4-5-6-7-8-9"){e.default.call(this),this.sup=i,this.sup2=1,this.titre="Tables de multiplications",this.consigne="Calculer",this.spacing=2,this.interactif=!0,this.nouvelleVersion=function(){this.sup2=parseInt(this.sup2),this.listeQuestions=[],this.listeCorrections=[],this.sup||(this.sup="2-3-4-5-6-7-8-9");let i=[];"number"==typeof this.sup?i[0]=this.sup:i=this.sup.split("-");const t=(0,n.RZ9)(i,[2,3,4,5,6,7,8,9,10],this.nbQuestions);let s="a_trous";for(let e,a,h,u,l=0;l<this.nbQuestions;l++)e=t[l][0],a=t[l][1],s=1===parseInt(this.sup2)?"classique":2===parseInt(this.sup2)?"a_trous":(0,n.q$q)(["classique","a_trous"]),"classique"===s?((0,n.q$q)([!0,!1])?(h=`$ ${(0,n.euh)(e)} \\times ${(0,n.euh)(a)} = `,h+=this.interactif&&o.Do.isHtml?"$"+(0,r.te)(this,l,{numeric:!0}):"\\dotfill$",u=`$ ${(0,n.euh)(e)} \\times ${(0,n.euh)(a)} = ${(0,n.euh)(e*a)}$`):(h=`$ ${(0,n.euh)(a)} \\times ${(0,n.euh)(e)} = `,h+=this.interactif&&o.Do.isHtml?"$"+(0,r.te)(this,l,{numeric:!0}):"\\dotfill$",u=`$ ${(0,n.euh)(a)} \\times ${(0,n.euh)(e)} = ${(0,n.euh)(e*a)}$`),(0,r.Iq)(this,l,e*a)):(i.length>2?1===(0,n.nSR)(1,2)?(h="$ "+e+" \\times ",h+=this.interactif&&o.Do.isHtml?"$"+(0,r.te)(this,l,{numeric:!0,texteApres:`$ = ${e*a} $`}):`   \\ldots\\ldots = ${e*a}$`,(0,r.Iq)(this,l,a)):(h=this.interactif&&o.Do.isHtml?(0,r.te)(this,l,{numeric:!0,texteApres:`$\\times ${a} = ${e*a}$`}):`$ \\ldots\\ldots \\times ${a} = ${e*a}$`,(0,r.Iq)(this,l,e)):(h=`$${e} \\times `,h+=this.interactif&&o.Do.isHtml?"$"+(0,r.te)(this,l,{numeric:!0,texteApres:" = "+e*a})+"$":`\\ldots\\ldots = ${e*a}$`,(0,r.Iq)(this,l,a)),u=`$${e} \\times ${a} = ${e*a}$`),o.Do.isDiaporama&&(h=h.replace("= \\dotfill","")),this.autoCorrection[l].reponse.param={digits:2,decimals:0,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:0},this.listeQuestions.push(h),this.listeCorrections.push(u);(0,n.K1R)(this)},this.besoinFormulaireTexte=["Choix des tables","Nombres séparés par des tirets"],this.besoinFormulaire2Numerique=["Style de questions",3,"1 : Classique\n2: À trous\n3: Mélangé"]}},29597:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>o,interactifReady:()=>e.interactifReady,interactifType:()=>e.interactifType,amcReady:()=>e.amcReady,amcType:()=>e.amcType,default:()=>n});var e=s(97546);const o="Tables de multiplication";function n(i="2-3-4-5-6-7-8-9"){e.default.call(this,i),this.tailleDiaporama=100}},17007:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=29597.dbcbe3609176e9dd541b.js.map