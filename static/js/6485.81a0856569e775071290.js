(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6485,5216],{76485:(t,i,e)=>{"use strict";e.r(i),e.d(i,{amcReady:()=>r,amcType:()=>$,interactifReady:()=>c,interactifType:()=>h,titre:()=>u,default:()=>l});var s=e(75216),o=e(55339),a=e(29760),n=e(32964);const r=!0,$=1,c=!0,h=" ",u="Sens de l’écriture fractionnaire";function l(){s.default.call(this),this.titre=u,this.amcReady=r,this.amcType=$,this.interactifReady=c,this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const t=(0,o.SRM)([1,2,3,4],this.nbQuestions);for(let i,e,s,r,$,c=0,h=0;c<this.nbQuestions&&h<50;){switch(i="",e="",t[c]){case 1:s=(0,o.nSR)(10,25),r=(0,o.nSR)(10,25,s),i=`Le quotient de $${s}$ par $${r}$ s'écrit en écriture fractionnaire : $${(0,o.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,e=`Le quotient de $${s}$ par $${r}$ s'écrit $${(0,o.qaf)(s,r)}$.`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${i}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.qaf)(s,r)}$`,statut:!0},{texte:`$${(0,o.qaf)(r,s)}$`,statut:!1},{texte:`$${(0,o.qaf)(Math.abs(s-r),r)}$`,statut:!1},{texte:`$${(0,o.qaf)(s+r,r)}$`,statut:!1},{texte:`$${(0,o.qaf)(10*s,r)}$`,statut:!1}];break;case 2:s=(0,o.nSR)(10,25),r=(0,o.nSR)(10,25,s),i=`Le nombre qui, multiplié par $${r}$, donne $${s}$ s'écrit en écriture fractionnaire : $${(0,o.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,e=`Le nombre qui, multiplié par $${r}$, donne $${s}$ s'écrit $${(0,o.qaf)(s,r)}$.`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${i}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.qaf)(s,r)}$`,statut:!0},{texte:`$${(0,o.qaf)(r,s)}$`,statut:!1},{texte:`$${(0,o.qaf)(Math.abs(s-r),r)}$`,statut:!1},{texte:`$${(0,o.qaf)(s+r,r)}$`,statut:!1},{texte:`$${(0,o.qaf)(10*s,r)}$`,statut:!1}];break;case 3:s=(0,o.nSR)(10,25),r=(0,o.nSR)(10,25,s),i=`$${s}\\div ${r}$ s'écrit en écriture fractionnaire : $${(0,o.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,e=`$${s}\\div ${r}$ s'écrit  $${(0,o.qaf)(s,r)}$.`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${i}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.qaf)(s,r)}$`,statut:!0},{texte:`$${(0,o.qaf)(r,s)}$`,statut:!1},{texte:`$${(0,o.qaf)(Math.abs(s-r),r)}$`,statut:!1},{texte:`$${(0,o.qaf)(s+r,r)}$`,statut:!1},{texte:`$${(0,o.qaf)(10*s,r)}$`,statut:!1}];break;case 4:s=2*(0,o.nSR)(1,5)+1,r=(0,o.q$q)([2,4,5,10]),s+=r,Number.isInteger(s/r)&&s++,$=(0,a.Pj)(s,r),i=`Le nombre $${(0,o.Pbm)((0,o.n0o)(s/r))}$ s'écrit en écriture fractionnaire : $${(0,o.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,e=`Le nombre $${(0,o.Pbm)((0,o.n0o)(s/r))}$ s'écrit  $${$.fractionDecimale().texFraction}$`,$.fractionDecimale().texFraction!==$.texFractionSimplifiee?e+=` ou $${$.texFractionSimplifiee}$.`:i+=".",this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${i}\n`,this.autoCorrection[c].propositions=[{texte:`$${$.fractionDecimale().texFraction}$`,statut:!0},{texte:`$${(0,o.qaf)(r,s)}$`,statut:!1},{texte:`$${(0,o.qaf)(s,10*r)}$`,statut:!1},{texte:`$${(0,o.qaf)(10*s,r)}$`,statut:!1},{texte:`$${(0,o.qaf)(Math.floor(s/r),(0,a.Pj)(100*(0,o.n0o)(s/r-Math.floor(s/r)),100).fractionDecimale().num)}$`,statut:!1}]}this.autoCorrection[c].options={ordered:!1,lastChoice:5},this.interactif&&(i+="<br>"+(0,n.l3)(this,c).texte,i=i.replace(`$${(0,o.qaf)("\\phantom{00000}","\\phantom{00000}")}$`,"")),-1===this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(e),c++),h++}(0,o.K1R)(this)}}},75216:(t,i,e)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}e.r(i),e.d(i,{default:()=>s})}}]);
//# sourceMappingURL=6485.81a0856569e775071290.js.map