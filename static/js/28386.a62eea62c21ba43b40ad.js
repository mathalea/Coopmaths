"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[28386,68724,17007],{68724:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>r,default:()=>h});var t=s(17007),n=s(66170),o=s(30169);const r="Écrire un nombre en chiffres ou en lettres";function h(){t.default.call(this),this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.sup2=3,this.nouvelleVersion=function(){let i;2===parseInt(this.sup)?this.consigne="Écrire le nombre en chiffres":this.consigne="Écrire le nombre en lettres",this.listeQuestions=[],this.listeCorrections=[],i=1===parseInt(this.sup2)?[1,1,1,2,2]:2===parseInt(this.sup2)?[1,2,2,2,3]:3===parseInt(this.sup2)?[2,2,3,3,4]:[2,3,3,4,4];const e=(0,o.SRM)(i,this.nbQuestions);for(let s,t,r,h,u,l,a,c=0,f=0;c<this.nbQuestions&&f<50;){for(l=0,a=[];0===l;){a.splice(0);for(let i=0;i<e[c];i++)r=(0,o.nSR)(1,9),h=(0,o.nSR)(1,9),u=(0,o.nSR)(1,9),a.push((0,o.q$q)([0,100,20,80,r,100*r,100*r+10*h+u,100*r+80+h,10*r,100*r+10*h+1]));for(let i=0;i<e[c];i++)l+=a[i]*10**(3*i);0===a[e[c]-1]&&(l=0)}1===parseInt(this.sup)?(s=n.Do.isDiaporama?`$${(0,o.euh)(l)}$`:`$${(0,o.euh)(l)}$ : \\dotfill`,t=n.Do.isDiaporama?`${(0,o.CpW)(l)}.`:`$${(0,o.euh)(l)}$ : ${(0,o.CpW)(l)}.`):(s=n.Do.isDiaporama?`${(0,o.CpW)(l)}`:`${(0,o.CpW)(l)} : \\dotfill`,t=n.Do.isDiaporama?`$${(0,o.euh)(l)}$.`:`${(0,o.CpW)(l)} : $${(0,o.euh)(l)}$.`),-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(t),c++),f++}(0,o.K1R)(this)},this.besoinFormulaireNumerique=["Type d'exercice",2,"1 : Écrire en lettres un nombre donné en chiffres\n2 : Écrire en chiffres un nombre donné en lettres"],this.besoinFormulaire2Numerique=["Niveau",4,"1 : Élémentaire\n2 : Facile\n3 : Moyen\n4 : Difficile"]}},17007:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},28386:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>n,default:()=>o});var t=s(68724);const n="Écrire un nombre en chiffres ou en lettres";function o(){t.default.call(this),this.sup2=0,this.sup=1}}}]);
//# sourceMappingURL=28386.a62eea62c21ba43b40ad.js.map