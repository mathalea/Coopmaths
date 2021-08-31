"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[49308,74131,17007],{49308:($,i,e)=>{e.r(i),e.d(i,{titre:()=>s,default:()=>n});var t=e(74131);const s="Calculer la valeur d’une expression littérale de degré 1 à 1 inconnue";function n(){t.default.call(this),this.version="5L13-5",this.titre=s,this.nbQuestions=2}},74131:($,i,e)=>{e.r(i),e.d(i,{titre:()=>r,interactifReady:()=>o,interactifType:()=>a,default:()=>l});var t=e(17007),s=e(30169),n=e(75664);const r="Calculer la valeur d’une expression littérale",o=!0,a="mathLive";function l(){t.default.call(this),this.titre=r,this.interactifReady=o,this.interactifType=a,this.consigne="",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$="5L13-5"===this.version?(0,s.NaF)(2):(0,s.NaF)(10);const i=(0,s.SRM)($,this.nbQuestions);for(let e,t,r=0,o=0;r<this.nbQuestions&&o<50;){let $,a,l,u,h,c;switch(i[r]){case 1:$=(0,s.nSR)(2,10),h=(0,s.nSR)(2,10,$),a=(0,s.nSR)(1,10,[$,h]),e=`Calculer $${$}x+${a}$ pour $x=${h}$.`,t=`Pour $x=${h}$ : <br>`,t+=`$${$}x+${a}=${$}\\times ${h}+${a}=${$*h}+${a}=${$*h+a}$`,(0,n.Iq)(this,r,$*h+a);break;case 2:$=(0,s.nSR)(2,10),h=(0,s.nSR)(2,10,$),a=(0,s.nSR)(1,10,[$,h]),e=`Calculer $${$}(x+${a})$ pour $x=${h}$.`,t=`Pour $x=${h}$ : <br>`,t+=`$${$}(x+${a})=${$}\\times (${h}+${a})=${$}\\times ${h+a}=${$*(h+a)}$`,(0,n.Iq)(this,r,$*(h+a));break;case 3:h=(0,s.nSR)(2,10),c=(0,s.nSR)(2,10),e=`Calculer $x^2+y^2$ pour $x=${h}$ et $y=${c}$.`,t=`Pour $x=${h}$ et $y=${c}$ : <br>`,t+=`$x^2+y^2=${h}^2+${c}^2=${h**2}+${c**2}=${h**2+c**2}$`,(0,n.Iq)(this,r,h**2+c**2);break;case 4:h=(0,s.nSR)(2,10),c=(0,s.nSR)(1,h-1),e=`Calculer $x^2-y^2$ pour $x=${h}$ et $y=${c}$.`,t=`Pour $x=${h}$ et $y=${c}$ : <br>`,t+=`$x^2-y^2=${h}^2-${c}^2=${h**2}-${c**2}=${h**2-c**2}$`,(0,n.Iq)(this,r,h**2-c**2);break;case 5:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),h=(0,s.nSR)(3,6),c=(0,s.q$q)([1,2,3,5,10]),e=`Calculer $${$}x^2+${a}(x-1)+${l}y^3$ pour $x=${h}$ et $y=${c}$.`,t=`Pour $x=${h}$ et $y=${c}$ : <br>`,t+=`$${$}x^2+${a}(x-1)+${l}y^3=${$}\\times ${h}^2+${a}(${h}-1)+${l}\\times ${c}^3=${$}\\times ${h**2}+${a}\\times ${h-1}+${l}\\times ${c**3}=${$*h**2+a*(h-1)+l*c**3}$.`,(0,n.Iq)(this,r,$*h**2+a*(h-1)+l*c**3);break;case 6:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),h=(0,s.nSR)(3,6),e=`Calculer $${$}x^2+${a}x+${l}$ pour $x=${h}$.`,t=`Pour $x=${h}$ : <br>`,t+=`$${$}x^2+${a}x+${l}=${$}\\times ${h}^2+${a}\\times ${h}+${l}=${$}\\times ${h**2}+${a*h}+${l}=${$*h**2+a*h+l}$`,(0,n.Iq)(this,r,$*h**2+a*h+l);break;case 7:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),h=(0,s.nSR)(3,6),e=`Calculer $${$}x^2+${a}x-${l}$ pour $x=${h}$.`,t=`Pour $x=${h}$ : <br>`,t+=`$${$}x^2+${a}x-${l}=${$}\\times ${h}^2+${a}\\times ${h}-${l}=${$}\\times ${h**2}+${a*h}-${l}=${$*h**2+a*h-l}$`,(0,n.Iq)(this,r,$*h**2+a*h-l);break;case 8:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,$),l=(0,s.nSR)(2,6),h=(0,s.nSR)(3,6),e=`Calculer $${$}x^2-${a}x+${l}$ pour $x=${h}$.`,t=`Pour $x=${h}$ : <br>`,t+=`$${$}x^2-${a}x+${l}=${$}\\times ${h}^2-${a}\\times ${h}+${l}=${$}\\times ${h**2}-${a*h}+${l}=${$*h**2-a*h+l}$`,(0,n.Iq)(this,r,$*h**2-a*h+l);break;case 9:$=(0,s.nSR)(2,10),h=(0,s.nSR)(2,10),c=(0,s.nSR)(2,10,h),e=`Calculer $${$}xy+x+y$ pour $x=${h}$ et $y=${c}$.`,t=`Pour $x=${h}$ et $y=${c}$ : <br>`,t+=`$${$}xy+x+y=${$}\\times ${h}\\times ${c}+${h}+${c}=${$*h*c}+${h}+${c}=${$*h*c+h+c}$`,(0,n.Iq)(this,r,$*h*c+h+c);break;case 10:$=(0,s.nSR)(2,10),h=(0,s.nSR)(2,10),a=(0,s.nSR)(1,10),c=(0,s.nSR)(2,10,h),l=(0,s.nSR)(2,10),u=(0,s.nSR)(1,Math.min(10,l*c)),e=`Calculer $(${$}x+${a})(${l}y-${u})$ pour $x=${h}$ et $y=${c}$.`,t=`Pour $x=${h}$ et $y=${c}$ : <br>`,t+=`$(${$}x+${a})(${l}y-${u})=(${$}\\times ${h}+${a})(${l}\\times ${c}-${u})=${$*h+a}\\times ${l*c-u}=${($*h+a)*(l*c-u)}$`,(0,n.Iq)(this,r,($*h+a)*(l*c-u))}e+=(0,n.G5)(this,r),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),r++),o++}(0,s.K1R)(this)}}},17007:($,i,e)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function($){},this.questionJamaisPosee=function($,...i){0===$&&(this.listeArguments=[]);let e="";for(const t of i)void 0!==t&&(e+=t.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=49308.bcf83e7ee42688c0d265.js.map