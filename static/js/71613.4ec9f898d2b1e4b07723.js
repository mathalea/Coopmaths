"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[71613,25523],{25523:(e,$,i)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...$){0===e&&(this.listeArguments=[]);let i="";for(const t of $)void 0!==t&&(i+=t.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r($),i.d($,{default:()=>t})},71613:(e,$,i)=>{i.r($),i.d($,{titre:()=>n,interactifReady:()=>r,interactifType:()=>h,default:()=>x});var t=i(25523),s=i(22380),a=i(25482),o=i(11945);const n="Utiliser la distributivité (simple ou double) et réduire",r=!0,h="mathLive";function x(){t.default.call(this),this.titre=n,this.interactifReady=r,this.interactifType=h,this.consigne="Développer et réduire les expressions suivantes.",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,s.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,a.SRM)(["cx+e(ax+b)","ex+(ax+b)(cx+d)","e+(ax+b)(cx+d)","e-(ax+b)(cx+d)","(ax*b)(cx+d)","e(ax+b)-(d+cx)"],this.nbQuestions);for(let $,i,t,s,n,r,h,x,b=0,c=0;b<this.nbQuestions&&c<50;){switch(s=(0,a.nSR)(-11,11,0),n=(0,a.nSR)(-11,11,0),r=(0,a.nSR)(-11,11,0),h=(0,a.nSR)(-11,11,0),x=(0,a.nSR)(-11,11,0),e[b]){case"cx+e(ax+b)":$=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${r}*x+(${x})*(${s}*x+(${n}))`)}$`,i=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${r}*x+(${x})*(${s}*x+(${n}))`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${r}*x+(${x*s})*x+(${x*n})`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${r+x*s}*x+(${x*n})`)}$`,t=(0,a.eyN)(`${r+x*s}*x+(${x*n})`);break;case"ex+(ax+b)(cx+d)":$=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${x}*x+(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${x}*x+(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${x}*x+(${s*r})*x^2+(${s*h})*x+(${n*r})*x+(${n*h})`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${s*r}*x^2+(${x+n*r+s*h})*x+(${n*h})`)}$`,t=(0,a.eyN)(`${s*r}*x^2+(${x+n*r+s*h})*x+(${n*h})`);break;case"e+(ax+b)(cx+d)":$=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${x}+(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i=`$${(0,a.Gag)(b+1)}=${(0,a.eyN)(`${x}+(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${x}+(${s*r})*x^2+(${s*h})*x+(${n*r})*x+(${n*h})`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${s*r}*x^2+(${n*r+s*h})*x+(${x+n*h})`)}$`,t=(0,a.eyN)(`${s*r}*x^2+(${n*r+s*h})*x+(${x+n*h})`);break;case"e-(ax+b)(cx+d)":$=`$${(0,a.Gag)(b+1)}=${x}-${(0,a.eyN)(`(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i=`$${(0,a.Gag)(b+1)}=${x}-${(0,a.eyN)(`(${s}*x+(${n}))*(${r}x+(${h}))`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${x}-(${(0,a.eyN)(`(${s*r})*x^2+(${s*h})*x+(${n*r})*x+(${n*h})`)})$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${x}+(${-1*s*r})*x^2+(${-1*s*h})*x+(${-1*n*r})*x+(${-1*n*h})`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${-1*s*r}*x^2+(${-1*n*r-s*h})*x+(${x-n*h})`)}$`,t=(0,a.eyN)(`${-1*s*r}*x^2+(${-1*n*r-s*h})*x+(${x-n*h})`);break;case"(ax*b)(cx+d)":s=(0,a.nSR)(-3,3,[0]),n=(0,a.nSR)(2,3),$=`$${(0,a.Gag)(b+1)}=(${(0,a.eyN)(`${s}*x`)}\\times${n})(${(0,a.eyN)(`${r}*x+(${h})`)})$`,i=`$${(0,a.Gag)(b+1)}=(${(0,a.eyN)(`${s}*x`)}\\times${n})(${(0,a.eyN)(`${r}*x+(${h})`)})$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(s*n+"*x")}\\times(${(0,a.eyN)(`${r}*x+(${h})`)})$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`${s*n*r}*x^2+(${s*n*h})*x`)}$`,t=(0,a.eyN)(`${s*n*r}*x^2+(${s*n*h})*x`);break;case"e(ax+b)-(d+cx)":x=(0,a.nSR)(-11,11,[-1,1,0]),$=`$${(0,a.Gag)(b+1)}=${x}(${(0,a.eyN)(`${s}*x+(${n})`)})-(${(0,a.eyN)(`${h}+(${r})*x`)})$`,i=$,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`(${x*s})*x+(${x*n})`)}-(${(0,a.eyN)(`${h}+(${r})*x`)})$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`(${x*s})*x+(${x*n})+(${-h})+(${-r})*x`)}$`,i+=`<br>$\\phantom{${(0,a.Gag)(b+1)}}=${(0,a.eyN)(`(${x*s-r})*x+(${x*n-h})`)}$`,t=(0,a.eyN)(`(${x*s-r})*x+(${x*n-h})`)}(0,o.Iq)(this,b,t),$+=(0,o.G5)(this,b),-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(i),b++),c++}(0,a.K1R)(this)}}}}]);
//# sourceMappingURL=71613.4ec9f898d2b1e4b07723.js.map