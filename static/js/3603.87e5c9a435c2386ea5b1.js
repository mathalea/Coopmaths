(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[3603,5216],{13603:(i,t,s)=>{"use strict";s.r(t),s.d(t,{titre:()=>a,amcReady:()=>l,interactifReady:()=>r,amcType:()=>u,default:()=>c});var e=s(75216),o=s(89459),h=s(55339),n=s(32964);const a="Tables de multiplications et de divisions",l=!0,r=!0,u=4;function c(i="2-3-4-5-6-7-8-9"){e.default.call(this),this.sup=i,this.sup2=1,this.titre=a,this.amcReady=l,this.amcType=u,this.interactifReady=r,this.consigne="Calculer",this.spacing=2,this.tailleDiaporama=100,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.sup||(this.sup="2-3-4-5-6-7-8-9");let i=[];"number"==typeof this.sup?i[0]=this.sup:i=this.sup.split("-");const t=(0,h.RZ9)(i,[2,3,4,5,6,7,8,9,10],this.nbQuestions),s=(0,h.SRM)(["classique","a_trous"],this.nbQuestions),e=(0,h.SRM)(["x","div"],this.nbQuestions);let a;for(let l,r,u,c,$=0;$<this.nbQuestions;$++)l=t[$][0],r=t[$][1],a=1===this.sup2?"classique":2===this.sup2?"a_trous":s[$],"x"===e[$]?"classique"===a?(u="$ "+l+" \\times "+r+" = \\dotfill $",(0,n.Iq)(this,$,l*r),this.interactif&&(u=`$${l} \\times ${r} = $`+(0,n.te)(this,$)),c="$ "+l+" \\times "+r+" = "+l*r+" $"):(i.length>2?(1===(0,h.nSR)(1,2)?(u="$ "+l+" \\times \\ldots\\ldots = "+l*r+" $",this.interactif&&(u=`$ ${l} \\times $`+(0,n.te)(this,$)+`$ = ${l*r} $`)):(u="$ \\ldots\\ldots \\times "+r+" = "+l*r+" $",this.interactif&&(u=(0,n.te)(this,$)+`$ \\times ${r}  = ${l*r} $`)),(0,n.Iq)(this,$,l)):(u="$ "+l+" \\times \\ldots\\ldots = "+l*r+" $",this.interactif&&(u=(0,n.te)(this,$)+`$ \\times ${r}  = ${l*r} $`),(0,n.Iq)(this,$,r)),c="$ "+l+" \\times "+r+" = "+l*r+" $"):("classique"===a?(u="$ "+l*r+" \\div "+r+" = \\dotfill $",(0,n.Iq)(this,$,l),this.interactif&&(u=`$${l*r} \\div ${r} = $`+(0,n.te)(this,$))):(0,h.q$q)([!0,!1])?(u=`$ ${l*r} \\div \\ldots\\ldots = ${l}$`,(0,n.Iq)(this,$,r),this.interactif&&(u=`$${l*r} \\div $`+(0,n.te)(this,$)+`$ = ${l}$`)):(u=`$ \\ldots\\ldots \\div ${r}  = ${l}$`,(0,n.Iq)(this,$,l*r),this.interactif&&(u=(0,n.te)(this,$)+`$\\div ${r} = ${l}$`)),c=`$ ${l*r} \\div ${r} = ${l}$`),o.Do.isDiaporama&&(u=u.replace("= \\dotfill","")),this.listeQuestions.push(u),this.listeCorrections.push(c);(0,h.K1R)(this)},this.besoinFormulaireTexte=["Choix des tables","Nombres séparés par des tirets"],this.besoinFormulaire2Numerique=["Style de questions",3,"1 : Classique\n2: À trous\n3: Mélangé"]}},75216:(i,t,s)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=3603.87e5c9a435c2386ea5b1.js.map