"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[36977,17007],{36977:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>r,interactifReady:()=>h,interactifType:()=>a,default:()=>l});var e=s(17007),o=s(30169),n=s(75664);const r="Développer (a-b)(a+b)",h=!0,a="mathLive";function l(){e.default.call(this),this.titre=r,this.interactifReady=h,this.interactifType=a,this.consigne="Développer les expressions suivantes.",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=5,this.sup=2,this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];const i=[[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]];for(let t,s,e,r,h,a,l,u=0,c=0,f=[];u<this.nbQuestions&&c<50;)1===this.sup?(a=(0,o.nSR)(1,9),e=`$(x-${a})(x+${a})$`,r=`$(x-${a})(x+${a})=x^2-${a}^2=x^2-${a*a}$`,h="x^2-"+a*a):2===this.sup?(a=(0,o.nSR)(1,9),l=(0,o.nSR)(2,9),e=`$(${l}x-${a})(${l}x+${a})$`,r=`$(${l}x-${a})(${l}x+${a})=(${l}x)^2-${a}^2=${l*l}x^2-${a*a}$`,h=`${l*l}x^2-${a*a}`):(a=(0,o.nSR)(1,9),f=(0,o.q$q)(i),t=f[0],s=f[1],e=`$\\left(${(0,o.qaf)(t,s)}x-${a}\\right)\\left(${(0,o.qaf)(t,s)}x+${a}\\right)$`,r=`$\\left(${(0,o.qaf)(t,s)}x-${a}\\right)\\left(${(0,o.qaf)(t,s)}x+${a}\\right)=\\left(${(0,o.qaf)(t,s)}x\\right)^2-${a}^2=${(0,o.qaf)(t*t,s*s)}x^2-${a*a}$`,h=`${(0,o.qaf)(t*t,s*s)}x^2-${a*a}`),e+=(0,n.G5)(this,u),(0,n.Iq)(this,u,h),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(r),u++),c++;(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x rationnel"]}},17007:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=36977.3fc134d5aae9806f07a7.js.map