"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4433,25523],{4433:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>h,interactifReady:()=>r,amcReady:()=>u,amcType:()=>$,interactifType:()=>l,default:()=>c});var e=s(25523),o=s(22380),a=s(25482),n=s(11945);const h="Additions de 5 nombres relatifs",r=!0,u=!0,$="AMCNum",l="mathLive";function c(i=20){e.default.call(this),this.sup=i,this.sup2=!1,this.titre=h,this.consigne="Calculer :",this.spacing=2,this.nbCols=1,this.nbColsCorr=1,this.interactifReady=r,this.interactifType=l,this.amcType=$,this.amcReady=u,this.nouvelleVersion=function(){o.Do.isHtml||(this.interactif=!1),this.sup=parseInt(this.sup),this.interactif&&(this.spacing=3),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];for(let i,t,s,e,h,r,u,$,l,c,m,p,b,f=0,C=0;f<this.nbQuestions&&C<50;){if(i=(0,a.nSR)(1,this.sup)*(0,a.q$q)([-1,1]),t=(0,a.nSR)(1,this.sup)*(0,a.q$q)([-1,1]),s=1===i&1===t?-1:-1===i&-1===t?1:(0,a.nSR)(1,this.sup)*(0,a.q$q)([-1,1]),e=(0,a.nSR)(1,this.sup)*(0,a.q$q)([-1,1]),h=(0,a.nSR)(1,this.sup)*(0,a.q$q)([-1,1]),r=1,u=1,$=1,l=1,b=i+t+s+e+h,this.sup2)m=`$ ${(0,a.Gag)(f+1)} = ${i}${(0,a.tPu)(t)}${(0,a.tPu)(s)}${(0,a.tPu)(e)}${(0,a.tPu)(h)} = \\dotfill $`,this.interactif&&!o.Do.isAmc&&(m=`$ ${(0,a.Gag)(f+1)} = ${i}${(0,a.tPu)(t)}${(0,a.tPu)(s)}${(0,a.tPu)(e)}${(0,a.tPu)(h)} = $`,m+=(0,n.G5)(this,f)),o.Do.isHtml||o.Do.isAmc||(m+=`<br>$ ${(0,a.Gag)(f+1)} = \\dotfill $`),p=`$ ${(0,a.Gag)(f+1)} =  ${i}${(0,a.tPu)(t)}${(0,a.tPu)(s)}${(0,a.tPu)(e)}${(0,a.tPu)(h)} = ${(0,a.knq)([i,t,s,e,h])[0]}${(0,a.tPu)((0,a.knq)([i,t,s,e,h])[1])} = ${i+t+s+e+h} $`;else{m=`$ ${(0,a.Gag)(f+1)} =  ${(0,a.aIp)(i)}${(0,a.mKt)(r)}${(0,a.aIp)(t)}${(0,a.mKt)(u)}${(0,a.aIp)(s)}${(0,a.mKt)($)}${(0,a.aIp)(e)}${(0,a.mKt)(l)}${(0,a.aIp)(h)} = \\dotfill $`,this.interactif&&!o.Do.isAmc&&(m=`$ ${(0,a.Gag)(f+1)} =  ${(0,a.aIp)(i)}${(0,a.mKt)(r)}${(0,a.aIp)(t)}${(0,a.mKt)(u)}${(0,a.aIp)(s)}${(0,a.mKt)($)}${(0,a.aIp)(e)}${(0,a.mKt)(l)}${(0,a.aIp)(h)} = $`,m+=(0,n.G5)(this,f)),o.Do.isHtml||o.Do.isAmc||(m+=`<br>$ ${(0,a.Gag)(f+1)} = \\dotfill $`),p=`$ ${(0,a.Gag)(f+1)} =  ${(0,a.aIp)(i)}${(0,a.mKt)(r)}${(0,a.aIp)(t)}${(0,a.mKt)(u)}${(0,a.aIp)(s)}${(0,a.mKt)($)}${(0,a.aIp)(e)}${(0,a.mKt)(l)}${(0,a.aIp)(h)} $`,c=(0,a.Q3c)([i,r*t,u*s,$*e,l*h]),c[0]>0&c[4]<0&&(p+=`<br>$ \\phantom{A}= ${(0,a.kch)(c[0])}+${(0,a.kch)(c[1])}+${(0,a.kch)(c[2])}+${(0,a.kch)(c[3])}+${(0,a.kch)(c[4])} $`);const b=(0,a.knq)([c[0],c[1],c[2],c[3],c[4]]);0!==b[0]&&0!==b[1]?(p+=`<br>$ \\phantom{A}= ${(0,a.kch)(b[0])}+${(0,a.kch)(b[1])} $`,p+=`<br>$ \\phantom{A}= ${(0,a.Zux)(i+r*t+u*s+$*e+l*h)}$<br>`):0!==b[0]?p+=`<br>$ \\phantom{A}=${(0,a.Zux)(b[0])}$`:p+=`<br>$ \\phantom{A}=${(0,a.Zux)(b[1])}$<br>`}-1===this.listeQuestions.indexOf(m)&&((0,n.Iq)(this,f,b,{signe:!0,digits:Math.max(2,(0,a.WW7)(b)),decimals:0}),this.listeQuestions.push(m),this.listeCorrections.push(p),f++),C++}(0,a.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",99999],this.besoinFormulaire2CaseACocher=["Avec des écritures simplifiées"]}},25523:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=4433.50e1894de4d9d774b1db.js.map