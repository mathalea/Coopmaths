"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[75140,17007],{75140:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>r});var t=s(17007),o=(s(66170),s(30169));const n="Deviner un nombre relatif";function r(){t.default.call(this),this.titre=n,this.consigne="Qui suis-je ?",this.spacing=2,this.nbQuestions=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i,e,s,t,n,r,h,u=(0,o.SRM)([1,2,3],this.nbQuestions),a=["négatif","nul","positif"];for(let l,c,b=0,m=0;b<this.nbQuestions;){switch(e=(0,o.q$q)([-1,1]),u[b]){case 1:t=(0,o.nSR)(1,9),n=(0,o.nSR)(t+1,t+9),i=n-t,s=0,l=`Je suis un nombre ${a[e+1]} dont la distance à zéro est comprise entre ${t} et ${t+1}.<br>`,l+=`On m'écrit avec deux chiffres dont la somme est ${n}.<br>Qui suis-je ?`;break;case 2:t=(0,o.nSR)(1,9),n=(0,o.nSR)(t+1,t+9),i=n-t,s=0,l="Je suis un nombre dont l'opposé est compris entre ",l+=e<0?`$${t}$ et $${t+1}$.<br>`:`$${-t-1}$ et $${-t}$.<br>`,l+=`La somme de mes deux chiffres est $${n}$.<br>Qui suis-je ?`;break;case 3:r=(0,o.q$q)([6,10,15]),h=(0,o.AeM)(r),h.push(1),h=(0,o.TVQ)(h),t=h[0],i=h[1],s=h[2],l=`Je suis un nombre ${a[e+1]} dont la distance à zéro est comprise entre ${t} et ${t+1}.<br>`,l+=`Le produit de mes trois chiffres vaut ${r}.<br>`,l+=i<s?"Mon chiffre des centièmes est supérieur à mon chiffre des dixièmes.":"Mon chiffre des centièmes est inférieur à mon chiffre des dixièmes.",l+=" Qui suis-je ?"}c=`Je suis $${(0,o.k$K)(e*(t+i/10+s/100))}$.`,-1===this.listeQuestions.indexOf(l)&&(this.listeQuestions.push(l),this.listeCorrections.push(c),b++),m++}(0,o.K1R)(this)}}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=75140.d77e7da395d29161059b.js.map