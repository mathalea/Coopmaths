(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4355,7567],{54355:(e,s,i)=>{"use strict";i.r(s),i.d(s,{titre:()=>$,default:()=>u});var h=i(67567),t=i(24477);const $="Réduire une expression littérale";function u(){h.default.call(this),this.titre=$,this.consigne="Réduire les expressions suivantes",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.sup=9,this.sup2=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e=(0,t.NaF)(7),s=(0,t.SRM)(e,this.nbQuestions);for(let e,i,h=0,$=0;h<this.nbQuestions&&$<50;){let u,n,o,a;switch(this.sup2?(u=(0,t.n0o)((0,t.nSR)(2,this.sup)+(0,t.nSR)(1,9)/10),n=(0,t.q$q)([(0,t.n0o)((0,t.nSR)(2,9)+(0,t.nSR)(1,9)/10),(0,t.n0o)((0,t.nSR)(2,9)+(0,t.nSR)(1,9)/10+(0,t.nSR)(1,9)/100)]),o=(0,t.n0o)((0,t.nSR)(2,this.sup)+(0,t.nSR)(1,9)/10),a=(0,t.q$q)([(0,t.n0o)((0,t.nSR)(2,9)+(0,t.nSR)(1,9)/10),(0,t.n0o)((0,t.nSR)(2,9)+(0,t.nSR)(1,9)/10+(0,t.nSR)(1,9)/100)])):(u=(0,t.nSR)(2,this.sup),n=(0,t.nSR)(2,this.sup),o=(0,t.nSR)(2,this.sup),a=(0,t.nSR)(2,this.sup)),s[h]){case 1:e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}x+${(0,t.euh)(o)}$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}x+${(0,t.euh)(o)}=${(0,t.euh)((0,t.n0o)(u+n))}x+${(0,t.euh)(o)}$`;break;case 2:e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}+x+${(0,t.euh)(o)}$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}+x+${(0,t.euh)(o)}=${(0,t.euh)((0,t.n0o)(u+1))}x+${(0,t.euh)((0,t.n0o)(n+o))}$`;break;case 3:e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x^2+${(0,t.euh)(n)}x+${(0,t.euh)(o)}+${(0,t.euh)(a)}x^2+x$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x^2+${(0,t.euh)(n)}x+${(0,t.euh)(o)}+${(0,t.euh)(a)}x^2+x=${(0,t.euh)((0,t.n0o)(u+a))}x^2+${(0,t.euh)((0,t.n0o)(n+1))}x+${(0,t.euh)(o)}$`;break;case 4:e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}+x+${(0,t.euh)(n)}+${(0,t.euh)(o)}+${(0,t.euh)(a)}x$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}+x+${(0,t.euh)(n)}+${(0,t.euh)(o)}+${(0,t.euh)(a)}x=${(0,t.k$K)(1+a)}x+${(0,t.k$K)(u+n+o)}$`;break;case 5:e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+y+${(0,t.euh)(n)}x+${(0,t.euh)(o)}+${(0,t.euh)(a)}y$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+y+${(0,t.euh)(n)}x+${(0,t.euh)(o)}+${(0,t.euh)(a)}y=${(0,t.k$K)(u+n)}x+${(0,t.k$K)(1+a)}y+${(0,t.euh)(o)}$`;break;case 6:o>u&&([u,o]=[o,u]),o==u&&u++,e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}-${(0,t.euh)(o)}x$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x+${(0,t.euh)(n)}-${(0,t.euh)(o)}x=${(0,t.k$K)(u-o)}x+${(0,t.euh)(n)}$`;break;case 7:o>u&&([u,o]=[o,u]),o==u&&u++,e=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x-${(0,t.euh)(o)}x$`,i=`$${(0,t.Gag)(h+1)}=${(0,t.euh)(u)}x-${(0,t.euh)(o)}x=${(0,t.wO4)((0,t.k$K)(u-o))}x$`}-1==this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(i),h++),$++}(0,t.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale des coefficients",999],this.besoin_formulaire2_case_a_cocher=["Avec des nombres décimaux"]}},67567:(e,s,i)=>{"use strict";function h(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(s),i.d(s,{default:()=>h})}}]);