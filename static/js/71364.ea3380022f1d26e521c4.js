"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[71364,17007],{71364:(e,i,t)=>{t.r(i),t.d(i,{titre:()=>n,default:()=>a});var s=t(17007),r=t(66170),o=t(30169);const n="Primalité ou pas";function a(){s.default.call(this),this.titre=n,this.consigne="Justifier que les nombres suivants sont premiers ou pas.",r.Do.isHtml?this.spacing=3:this.spacing=2,r.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nbQuestions=7,this.nbCols=2,this.nbColsCorr=1,this.sup=1,this.listePackages="bclogo",this.nouvelleVersion=function(e){let i;r.Do.isHtml&&(this.boutonAide=(0,o.apm)(e,"assets/pdf/FicheArithmetique-5A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire"),this.boutonAide+=(0,o.MJ0)("conteMathsNombresPremiers","/videos/LesNombresPremiers.mp4","Petit conte mathématique - Les Nombres Premiers","Intro Vidéo")),this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="";let t=[1,2,3,4,5,6,7];t=(0,o.TVQ)(t);let s=(0,o.bqK)(t,this.nbQuestions),n="Cette liste des nombres premiers inférieurs à 30 pourra être utile : <br>"+(0,o.hmQ)(100)[0];for(let r=1;r<(0,o.hmQ)(30).length;r++)n+=", "+(0,o.hmQ)(30)[r];n+=".",this.introduction=(0,o.KUN)(n,"nombres","Coup de pouce");for(let r,u,l=0,h=0;l<this.nbQuestions&&h<50;){var a;switch(i=s[l],i){case 1:a=2*(0,o.nSR)(51,4999),r=(0,o.x9Z)(a),u=`Comme ${(0,o.x9Z)(a)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même, `,u+=(0,o.PH8)((0,o.x9Z)(a)+" n'est donc pas premier.");break;case 2:let e=0;for(a=3*(0,o.nSR)(34,3333);a%2==0||a%5==0;)a=3*(0,o.nSR)(34,3333);r=(0,o.x9Z)(a),u="Comme "+a.toString().charAt(0),e=Number(a.toString().charAt(0));for(let r=1;r<a.toString().length;r++)u+=" + "+a.toString().charAt(r),e+=Number(a.toString().charAt(r));u+=` = ${e} est un multiple de 3 donc ${(0,o.x9Z)(a)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même, `,u+=(0,o.PH8)((0,o.x9Z)(a)+" n'est donc pas premier.");break;case 3:a=5*(0,o.nSR)(20,1999),r=(0,o.x9Z)(a),u=`Comme le dernier chiffre de ${(0,o.x9Z)(a)} est un ${a.toString().charAt(a.toString().length-1)} alors ${(0,o.x9Z)(a)} est divisible par 5, `,u+="il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même, ",u+=(0,o.PH8)((0,o.x9Z)(a)+" n'est donc pas premier.");break;case 4:let i=0;for(a=9*(0,o.nSR)(12,1111);a%2==0||a%5==0;)a=9*(0,o.nSR)(34,3333);r=(0,o.x9Z)(a),u="Comme "+a.toString().charAt(0),i=Number(a.toString().charAt(0));for(let r=1;r<a.toString().length;r++)u+=" + "+a.toString().charAt(r),i+=Number(a.toString().charAt(r));u+=` = ${i} est un multiple de 9 donc ${(0,o.x9Z)(a)} aussi, il admet donc au moins trois diviseurs qui sont 1, 9 et lui-même, `,u+=(0,o.PH8)((0,o.x9Z)(a)+" n'est donc pas premier.");break;case 5:a=10*(0,o.nSR)(10,999),r=(0,o.x9Z)(a),u=`Comme le nombre ${(0,o.x9Z)(a)} se termine par un ${a.toString().charAt(a.toString().length-1)} alors ${(0,o.x9Z)(a)} est un multiple de 10, `,u+="il admet donc au moins trois diviseurs qui sont 1, 10 et lui-même, ",u+=(0,o.PH8)((0,o.x9Z)(a)+" n'est donc pas premier.");break;case 6:let t=(0,o.nSR)(0,(0,o.hmQ)(30).length-1),s=(0,o.nSR)(0,(0,o.hmQ)(30).length-1),n=(0,o.hmQ)(100)[t],l=(0,o.hmQ)(100)[s];r=a=n+"$\\times $"+l,u=`${a} est le produit de ${n} et de ${l}, il admet donc au moins `,u+=n==l?`trois divisieurs qui sont 1, ${n} et lui-même ${a}=${(0,o.x9Z)(n*l)} `:`quatre diviseurs qui sont 1, ${n}, ${l} et lui-même ${a}=${(0,o.x9Z)(n*l)}, `,u+=(0,o.PH8)(`${a} = `+(0,o.x9Z)(n*l)+" n'est donc pas premier.");break;case 7:let h=(0,o.nSR)(0,(0,o.hmQ)(29).length-1);r=(a=(0,o.hmQ)(29)[h])+"";let m=(0,o.hmQ)(a);u=`En effectuant la division euclidienne de ${a} par tous les nombres premiers inférieurs à $\\sqrt{${a}}$, c'est à dire par les nombres `,u+=m[0];for(let r=1;r<m.length;r++)u+=", "+m[r];u+=", le reste n'est jamais nul.",u+="<br>"+(0,o.PH8)((0,o.x9Z)(a)+" est donc un nombre premier.")}-1===this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(u),l++),h++}(0,o.K1R)(this)}}},17007:(e,i,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...i){0===e&&(this.listeArguments=[]);let t="";for(const s of i)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=71364.ea3380022f1d26e521c4.js.map