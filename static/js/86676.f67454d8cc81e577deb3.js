"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[86676,35213,25523],{86676:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>o,interactifReady:()=>s.interactifReady,interactifType:()=>s.interactifType,amcReady:()=>s.amcReady,amcType:()=>s.amcType,default:()=>a});var s=t(35213);const o="Comparer deux fractions (dénominateurs multiples)";function a(){s.default.call(this),this.titre=o,this.sup=11,this.sup2=!0}},35213:(e,i,t)=>{t.r(i),t.d(i,{interactifReady:()=>r,interactifType:()=>u,amcReady:()=>h,amcType:()=>l,titre:()=>c,default:()=>$});var s=t(25523),o=t(22380),a=t(25482),n=t(11945);const r=!0,u="qcm",h=!0,l="qcmMono",c="Comparer deux fractions (dénominateurs multiples)";function $(e=11){s.default.call(this),this.sup=e,this.consigne="Comparer les fractions suivantes.",this.spacing=2,this.spacingCorr=2,this.nbQuestions=5,this.nbColsCorr=1,this.sup2=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const e=(0,a.SRM)([-1,1],this.nbQuestions),i=(0,a.SDC)();for(let t,s,r,u,h,l,c,$,d,m,b=0;b<this.nbQuestions;b++){this.autoCorrection[b]={},h=!0===this.sup2?e[b]:1,t=(0,a.q$q)(i),s=t[0]*h,r=t[1],u=(0,a.nSR)(2,this.sup);let f=(0,a.q$q)([-4,-3,-2,-1,1,2,3,4],[-u*s,u*s]);u*s+f<=0&&(f*=-1),f>0?(d="<",m=">"):(d=">",m="<"),(0,a.XzT)(i,t);const p=(0,a.nSR)(1,2);this.interactif||o.Do.isAmc?(this.autoCorrection[b]={enonce:"comparer les fractions suivantes : "+(p<2?`$${(0,a.xVe)(s,r)} \\quad$ et $\\quad ${(0,a.xVe)(u*s+f,u*r)}$`:`$${(0,a.xVe)(u*s+f,u*r)} \\quad$ et $\\quad ${(0,a.xVe)(s,r)}$`),propositions:[{texte:p<2?`$${(0,a.xVe)(s,r)} < ${(0,a.xVe)(u*s+f,u*r)}$`:`$${(0,a.xVe)(u*s+f,u*r)} < ${(0,a.xVe)(s,r)}$`,statut:p<2?f>0:f<0},{texte:p<2?`$${(0,a.xVe)(s,r)} > ${(0,a.xVe)(u*s+f,u*r)}$`:`$${(0,a.xVe)(u*s+f,u*r)} >${(0,a.xVe)(s,r)}$`,statut:p<2?f<0:f>0}],options:{ordered:!1}},c=(0,n.l3)(this,b).texte):(c=1===p?`$${(0,a.xVe)(s,r)} \\quad$ et $\\quad ${(0,a.xVe)(u*s+f,u*r)}$`:`$${(0,a.xVe)(u*s+f,u*r)} \\quad$ et $\\quad ${(0,a.xVe)(s,r)}$`,o.Do.isHtml||(c=c.replace("\\quad$ et $\\quad","\\ldots\\ldots\\ldots")),l=s*r<0?"-":"",$=`$${(0,a.xVe)(s,r)}= ${l} ${(0,a.qaf)(Math.abs(s)+(0,a.b1)("\\times  "+u),Math.abs(r)+(0,a.b1)("\\times  "+u))}=${(0,a.xVe)(s*u,r*u)}\\quad$`,$+=1===p?`  et   $\\quad${(0,a.xVe)(s*u,r*u)} ${d} ${(0,a.xVe)(s*u+f,r*u)} \\quad$ donc $\\quad ${(0,a.xVe)(s,r)} ${d} ${(0,a.xVe)(s*u+f,r*u)}$ `:`  et   $\\quad${(0,a.xVe)(s*u+f,r*u)} ${m} ${(0,a.xVe)(s*u,r*u)} \\quad$ donc $\\quad ${(0,a.xVe)(s*u+f,r*u)} ${m} ${(0,a.xVe)(s,r)} $ `),this.listeQuestions.push(c),this.listeCorrections.push($)}(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale du coefficient multiplicateur",99999],this.besoinFormulaire2CaseACocher=["Inclure des nombres négatifs"]}},25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=86676.f67454d8cc81e577deb3.js.map