"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[87728,17007],{87728:(i,s,e)=>{e.r(s),e.d(s,{titre:()=>r,interactifReady:()=>a,interactifType:()=>h,default:()=>l});var t=e(17007),o=e(30169),n=e(75664);const r="Réduire une expression de la forme $ax+bx$ ",a=!0,h="mathLive";function l(){t.default.call(this),this.titre=r,this.interactifReady=a,this.interactifType=h,this.consigne="Réduire les expressions suivantes, si cela est possible.",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=(0,o.SRM)(["ax+bx","ax+bx","ax+bx","ax+bx","ax+x"],this.nbQuestions);for(let s,e,t,r,a,h=0,l=0;h<this.nbQuestions&&l<50;){switch(r=(0,o.nSR)(-11,11,0),a=(0,o.nSR)(-11,11,[0,r]),i[h]){case"ax+bx":s=`$${(0,o.Gag)(h+1)}=${(0,o.eyN)(`${r}*x+(${a}*x)`)}$`,e=`$${(0,o.Gag)(h+1)}=${(0,o.eyN)(`${r}*x+(${a}*x)`)}=(${r}${(0,o.tPu)(a)})\\times x=${(0,o.eyN)(`${r+a}x`)}$`,t=(0,o.eyN)(`${r+a}x`);break;case"ax+x":s=`$${(0,o.Gag)(h+1)}=${(0,o.eyN)(`${r}*x+x`)}$`,e=`$${(0,o.Gag)(h+1)}=${(0,o.eyN)(`${r}*x+x`)}=(${r}+1)\\times x=${(0,o.eyN)(`${r+1}x`)}$`,t=(0,o.eyN)(`${r+1}x`)}(0,n.Iq)(this,h,[t,`${(0,o.Gag)(h+1)}=${t}`]),s+=(0,n.G5)(this,h),-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(e),h++),l++}(0,o.K1R)(this)}}},17007:(i,s,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...s){0===i&&(this.listeArguments=[]);let e="";for(const t of s)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(s),e.d(s,{default:()=>t})}}]);
//# sourceMappingURL=87728.bbaaf78e45a7ead53f26.js.map