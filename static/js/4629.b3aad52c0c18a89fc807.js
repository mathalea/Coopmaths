/*! For license information please see 4629.b3aad52c0c18a89fc807.js.LICENSE.txt */
"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[4629,25523],{25523:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})},4629:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>n,interactifReady:()=>r,interactifType:()=>l,amcReady:()=>a,amcType:()=>u,default:()=>h});var s=t(25482),o=t(25523);const n="Calculer le prochain multiple de 3 ou de 9",r=!0,l="mathLive",a=!0,u="AMCNum";function h(){o.default.call(this),this.nbQuestions=1,this.tailleDiaporama=2,this.typeExercice="simple",this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const e=3*(0,s.nSR)(225,528)+(0,s.q$q)([0,1,2]),i=9*(0,s.nSR)(143,254)+(0,s.nSR)(0,8),t=Number(e).toString(),o=Number(i).toString();let n=0,r=0;for(let s=0;s<t.length;s++)n+=parseInt(t[s]);for(let s=0;s<o.length;s++)r+=parseInt(o[s]);(0,s.q$q)([0,1])?(this.reponse=e+3-e%3,this.question=`Quel est le plus petit entier supérieur strictement à $${e}$ qui soit divisible par $3$ ?`,this.correction=`On calcule mentalement la somme des chiffres de $${e}$, on trouve $${n}$.<br>`,this.correction+=n%3==0?`C'est un multiple de $3$ donc $${e}$ en est un et le prochain multiple de $3$ est $${e+3}$<br>`:`C'est $${e%3}$ de trop pour qu'il soit divisible par $3$, donc $${e}$ n'est pas un multiple de $3$ mais $${e-e%3}$ en est un et $${this.reponse}$ aussi.<br>`,this.correction+=`Le prochain multiple de 3 est donc : $${this.reponse}$.`):(this.reponse=i+9-i%9,this.question=`Quel est le plus petit entier supérieur strictement à $${i}$ qui soit divisible par $9$ ?`,this.correction=`On calcule mentalement la somme des chiffres de $${i}$, on trouve $${r}$.<br>`,this.correction+=r%9==0?`C'est un multiple de $9$ donc $${i}$ en est un et le prochain multiple de $9$ est $${i+9}$<br>`:`C'est $${i%9}$ de trop pour qu'il soit divisible par $9$, donc $${i}$ n'est pas un multiple de $9$ mais $${i-i%9}$ en est un et $${this.reponse}$ aussi.<br>`,this.correction+=`Le prochain multiple de 9 est donc : $${this.reponse}$.`)}}}}]);
//# sourceMappingURL=4629.b3aad52c0c18a89fc807.js.map