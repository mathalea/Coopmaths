"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[80620,17007],{80620:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>a,interactifReady:()=>u,interactifType:()=>h,amcReady:()=>l,amcType:()=>c,default:()=>$});var e=s(17007),o=s(66170),n=s(30169),r=s(75664);const a="Additions et de soustractions",u=!0,h="numerique",l=!0,c="AMCNum";function $(){e.default.call(this),this.sup=20,this.sup2=6,this.consigne="Calculer",this.spacing=2,this.tailleDiaporama=100,this.interactif=!0,this.nouvelleVersion=function(){this.autoCorrection=[],this.sup=parseInt(this.sup),this.sup2=parseInt(this.sup2),this.listeQuestions=[],this.listeCorrections=[];let i=[];1===this.sup2&&(i=(0,n.SRM)(["addition"],this.nbQuestions)),2===this.sup2&&(i=(0,n.SRM)(["addition_a_trou"],this.nbQuestions)),3===this.sup2&&(i=(0,n.SRM)(["soustraction"],this.nbQuestions)),4===this.sup2&&(i=(0,n.SRM)(["soustraction_a_trou"],this.nbQuestions)),5===this.sup2&&(i=(0,n.SRM)(["addition","soustraction"],this.nbQuestions)),6===this.sup2&&(i=(0,n.SRM)(["addition","addition_a_trou","soustraction","soustraction_a_trou"],this.nbQuestions));for(let t,s,e,a,u=0;u<this.nbQuestions;u++){switch(t=(0,n.nSR)(2,this.sup),s=(0,n.nSR)(2,this.sup),this.autoCorrection[u]={},i[u]){case"addition":e=`$${t} + ${s} = \\dotfill$`,this.interactif&&o.Do.isHtml&&(e=(0,r.te)(this,u,{texte:`$${t} + ${s} = $`})),a=`$${t} + ${s} = ${t+s}$`,(0,r.Iq)(this,u,t+s);break;case"addition_a_trou":e=`$${t} + \\ldots\\ldots = ${t+s}$`,this.interactif&&o.Do.isHtml&&(e=(0,r.te)(this,u,{texte:`$${t}~+ $`,texteApres:`$= ${t+s}$`})),a=`$${t} + ${(0,n.b1)(s)} = ${t+s}$`,(0,r.Iq)(this,u,s);break;case"soustraction":t===s&&(t=(0,n.nSR)(2,this.sup,s)),t<s&&(s=[t,t=s][0]),e=`$${t} - ${s} = \\dotfill$`,this.interactif&&o.Do.isHtml&&(e=(0,r.te)(this,u,{texte:`$${t} - ${s} = $`})),a=`$${t} - ${s} = ${t-s}$`,(0,r.Iq)(this,u,t-s);break;case"soustraction_a_trou":t===s&&(t=(0,n.nSR)(2,this.sup,s)),t<s&&(s=[t,t=s][0]),e=`$${t} - \\ldots\\ldots = ${t-s}$`,this.interactif&&o.Do.isHtml&&(e=(0,r.te)(this,u,{texte:`$${t}~- $`,texteApres:`$= ${t-s}$`})),a=`$${t} - ${(0,n.b1)(s)} = ${t-s}$`,(0,r.Iq)(this,u,s)}o.Do.isDiaporama&&(e=e.replace("= \\dotfill","")),this.autoCorrection[u].reponse.param={digits:(0,n.WW7)(this.autoCorrection[u].reponse.valeur),decimals:0,signe:!1,exposantNbChiffres:0,exposantSigne:!1,approx:0},this.autoCorrection[u].enonce=e,this.listeQuestions.push(e),this.listeCorrections.push(a)}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Valeur maximale",9999],this.besoinFormulaire2Numerique=["Style de questions",6,"1 : Additions\n2: Additions à trous\n3: Soustractions\n4 : Soustractions à trous\n5 : Additions et soustractions \n6 : Additions et soustractions avec ou sans trous"]}},17007:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=80620.9fa1b38a8120e140300e.js.map