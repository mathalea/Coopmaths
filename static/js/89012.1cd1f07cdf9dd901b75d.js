"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[89012,84801,25523],{84801:(i,t,s)=>{s.r(t),s.d(t,{interactifReady:()=>a,interactifType:()=>h,amcReady:()=>u,amcType:()=>l,default:()=>c});var e=s(25523),o=s(22380),r=s(25482),n=s(11945);const a=!0,h="mathLive",u=!0,l="AMCNum";function c(i="2-3-4-5-6-7-8-9"){e.default.call(this),this.sup=i,this.sup2=1,this.titre="Tables de multiplications",this.consigne="Calculer : ",this.spacing=2,this.nouvelleVersion=function(){this.sup2=parseInt(this.sup2),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],this.sup||(this.sup="2-3-4-5-6-7-8-9");let i=[];"number"==typeof this.sup?i[0]=this.sup:i=this.sup.split("-");const t=(0,r.RZ9)(i,[2,3,4,5,6,7,8,9,10],this.nbQuestions);let s="a_trous";for(let e,a,h,u,l=0;l<this.nbQuestions;l++)e=t[l][0],a=t[l][1],s=1===parseInt(this.sup2)?"classique":2===parseInt(this.sup2)?"a_trous":(0,r.q$q)(["classique","a_trous"]),"classique"===s?((0,r.q$q)([!0,!1])?(h=`$ ${(0,r.euh)(e)} \\times ${(0,r.euh)(a)} = `,h+=this.interactif&&o.Do.isHtml?"$"+(0,n.te)(this,l,{numeric:!0}):"\\dotfill$",u=`$ ${(0,r.euh)(e)} \\times ${(0,r.euh)(a)} = ${(0,r.euh)(e*a)}$`):(h=`$ ${(0,r.euh)(a)} \\times ${(0,r.euh)(e)} = `,h+=this.interactif&&o.Do.isHtml?"$"+(0,n.te)(this,l,{numeric:!0}):"\\dotfill$",u=`$ ${(0,r.euh)(a)} \\times ${(0,r.euh)(e)} = ${(0,r.euh)(e*a)}$`),(0,n.Iq)(this,l,e*a)):(i.length>2?1===(0,r.nSR)(1,2)?(h="$ "+e+" \\times ",h+=this.interactif&&o.Do.isHtml?"$"+(0,n.te)(this,l,{numeric:!0,texteApres:`$ = ${e*a} $`}):`   \\ldots\\ldots = ${e*a}$`,(0,n.Iq)(this,l,a)):(h=this.interactif&&o.Do.isHtml?(0,n.te)(this,l,{numeric:!0,texteApres:`$\\times ${a} = ${e*a}$`}):`$ \\ldots\\ldots \\times ${a} = ${e*a}$`,(0,n.Iq)(this,l,e)):(h=`$${e} \\times `,h+=this.interactif&&o.Do.isHtml?"$"+(0,n.te)(this,l,{numeric:!0,texteApres:" = "+e*a})+"$":`\\ldots\\ldots = ${e*a}$`,(0,n.Iq)(this,l,a)),u=`$${e} \\times ${a} = ${e*a}$`),o.Do.isDiaporama&&(h=h.replace("= \\dotfill","")),o.Do.isAmc&&(this.autoCorrection[l].reponse.param={digits:2,decimals:0,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:0}),this.listeQuestions.push(h),this.listeCorrections.push(u);(0,r.K1R)(this)},this.besoinFormulaireTexte=["Choix des tables","Nombres séparés par des tirets"],this.besoinFormulaire2Numerique=["Type de questions",3,"1 : Classique\n2 : À trous\n3 : Mélange"]}},25523:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})},89012:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>o,interactifReady:()=>e.interactifReady,interactifType:()=>e.interactifType,amcReady:()=>e.amcReady,amcType:()=>e.amcType,default:()=>r});var e=s(84801);const o="Tables de multiplications";function r(){e.default.call(this),this.sup2=1}}}]);
//# sourceMappingURL=89012.1cd1f07cdf9dd901b75d.js.map