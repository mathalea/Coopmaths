"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[91778,25523],{91778:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>r});var t=s(25523),o=s(25482);const n="Deviner un nombre relatif";function r(){t.default.call(this),this.titre=n,this.consigne="Qui suis-je ?",this.spacing=2,this.nbQuestions=3,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[];const i=(0,o.SRM)([1,2,3],this.nbQuestions);let e,s,t,n,r,h,u;const a=["négatif","nul","positif"];for(let c,l,b=0,m=0;b<this.nbQuestions&m<50;){switch(s=(0,o.q$q)([-1,1]),i[b]){case 1:n=(0,o.nSR)(1,9),r=(0,o.nSR)(n+1,n+9),e=r-n,t=0,c=`Je suis un nombre ${a[s+1]} dont la distance à zéro est comprise entre ${n} et ${n+1}.<br>`,c+=`On m'écrit avec deux chiffres dont la somme est ${r}.<br>Qui suis-je ?`;break;case 2:n=(0,o.nSR)(1,9),r=(0,o.nSR)(n+1,n+9),e=r-n,t=0,c="Je suis un nombre dont l'opposé est compris entre ",c+=s<0?`$${n}$ et $${n+1}$.<br>`:`$${-n-1}$ et $${-n}$.<br>`,c+=`La somme de mes deux chiffres est $${r}$.<br>Qui suis-je ?`;break;case 3:h=(0,o.q$q)([6,10,15]),u=(0,o.AeM)(h),u.push(1),u=(0,o.TVQ)(u),n=u[0],e=u[1],t=u[2],c=`Je suis un nombre ${a[s+1]} dont la distance à zéro est comprise entre ${n} et ${n+1}.<br>`,c+=`Le produit de mes trois chiffres vaut ${h}.<br>`,c+=e<t?"Mon chiffre des centièmes est supérieur à mon chiffre des dixièmes.":"Mon chiffre des centièmes est inférieur à mon chiffre des dixièmes.",c+=" Qui suis-je ?"}l=`Je suis $${(0,o.k$K)(s*(n+e/10+t/100))}$.`,-1===this.listeQuestions.indexOf(c)&&(this.listeQuestions.push(c),this.listeCorrections.push(l),b++),m++}(0,o.K1R)(this)}}},25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})}}]);
//# sourceMappingURL=91778.700c09b134411d05074c.js.map