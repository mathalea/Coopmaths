(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[69282,26615,71129],{69282:($,i,e)=>{"use strict";e.r(i),e.d(i,{titre:()=>s,default:()=>r});var t=e(26615);const s="Calculer la valeur d’une expression littérale de degré 1 à 1 inconnue";function r(){t.default.call(this),this.version="5L13-5",this.titre=s,this.nbQuestions=2}},26615:($,i,e)=>{"use strict";e.r(i),e.d(i,{titre:()=>n,interactifReady:()=>o,interactifType:()=>a,default:()=>l});var t=e(71129),s=e(63861),r=e(10229);const n="Calculer la valeur d’une expression littérale",o=!0,a="mathLive";function l(){t.default.call(this),this.titre=n,this.interactifReady=o,this.interactifType=a,this.consigne="",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$="5L13-5"===this.version?(0,s.NaF)(2):(0,s.NaF)(10);const i=(0,s.SRM)($,this.nbQuestions);for(let e,t,n=0,o=0;n<this.nbQuestions&&o<50;){let $,a,l,h,u,c;switch(i[n]){case 1:$=(0,s.nSR)(2,10),u=(0,s.nSR)(2,10,$),a=(0,s.nSR)(1,10,[$,u]),e=`Calculer $${$}x+${a}$ pour $x=${u}$.`,t=`Pour $x=${u}$ : <br>`,t+=`$${$}x+${a}=${$}\\times ${u}+${a}=${$*u}+${a}=${$*u+a}$`,(0,r.Iq)(this,n,$*u+a);break;case 2:$=(0,s.nSR)(2,10),u=(0,s.nSR)(2,10,$),a=(0,s.nSR)(1,10,[$,u]),e=`Calculer $${$}(x+${a})$ pour $x=${u}$.`,t=`Pour $x=${u}$ : <br>`,t+=`$${$}(x+${a})=${$}\\times (${u}+${a})=${$}\\times ${u+a}=${$*(u+a)}$`,(0,r.Iq)(this,n,$*(u+a));break;case 3:u=(0,s.nSR)(2,10),c=(0,s.nSR)(2,10),e=`Calculer $x^2+y^2$ pour $x=${u}$ et $y=${c}$.`,t=`Pour $x=${u}$ et $y=${c}$ : <br>`,t+=`$x^2+y^2=${u}^2+${c}^2=${u**2}+${c**2}=${u**2+c**2}$`,(0,r.Iq)(this,n,u**2+c**2);break;case 4:u=(0,s.nSR)(2,10),c=(0,s.nSR)(1,u-1),e=`Calculer $x^2-y^2$ pour $x=${u}$ et $y=${c}$.`,t=`Pour $x=${u}$ et $y=${c}$ : <br>`,t+=`$x^2-y^2=${u}^2-${c}^2=${u**2}-${c**2}=${u**2-c**2}$`,(0,r.Iq)(this,n,u**2-c**2);break;case 5:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),u=(0,s.nSR)(3,6),c=(0,s.q$q)([1,2,3,5,10]),e=`Calculer $${$}x^2+${a}(x-1)+${l}y^3$ pour $x=${u}$ et $y=${c}$.`,t=`Pour $x=${u}$ et $y=${c}$ : <br>`,t+=`$${$}x^2+${a}(x-1)+${l}y^3=${$}\\times ${u}^2+${a}(${u}-1)+${l}\\times ${c}^3=${$}\\times ${u**2}+${a}\\times ${u-1}+${l}\\times ${c**3}=${$*u**2+a*(u-1)+l*c**3}$.`,(0,r.Iq)(this,n,$*u**2+a*(u-1)+l*c**3);break;case 6:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),u=(0,s.nSR)(3,6),e=`Calculer $${$}x^2+${a}x+${l}$ pour $x=${u}$.`,t=`Pour $x=${u}$ : <br>`,t+=`$${$}x^2+${a}x+${l}=${$}\\times ${u}^2+${a}\\times ${u}+${l}=${$}\\times ${u**2}+${a*u}+${l}=${$*u**2+a*u+l}$`,(0,r.Iq)(this,n,$*u**2+a*u+l);break;case 7:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,6),l=(0,s.nSR)(2,6),u=(0,s.nSR)(3,6),e=`Calculer $${$}x^2+${a}x-${l}$ pour $x=${u}$.`,t=`Pour $x=${u}$ : <br>`,t+=`$${$}x^2+${a}x-${l}=${$}\\times ${u}^2+${a}\\times ${u}-${l}=${$}\\times ${u**2}+${a*u}-${l}=${$*u**2+a*u-l}$`,(0,r.Iq)(this,n,$*u**2+a*u-l);break;case 8:$=(0,s.nSR)(2,5),a=(0,s.nSR)(2,$),l=(0,s.nSR)(2,6),u=(0,s.nSR)(3,6),e=`Calculer $${$}x^2-${a}x+${l}$ pour $x=${u}$.`,t=`Pour $x=${u}$ : <br>`,t+=`$${$}x^2-${a}x+${l}=${$}\\times ${u}^2-${a}\\times ${u}+${l}=${$}\\times ${u**2}-${a*u}+${l}=${$*u**2-a*u+l}$`,(0,r.Iq)(this,n,$*u**2-a*u+l);break;case 9:$=(0,s.nSR)(2,10),u=(0,s.nSR)(2,10),c=(0,s.nSR)(2,10,u),e=`Calculer $${$}xy+x+y$ pour $x=${u}$ et $y=${c}$.`,t=`Pour $x=${u}$ et $y=${c}$ : <br>`,t+=`$${$}xy+x+y=${$}\\times ${u}\\times ${c}+${u}+${c}=${$*u*c}+${u}+${c}=${$*u*c+u+c}$`,(0,r.Iq)(this,n,$*u*c+u+c);break;case 10:$=(0,s.nSR)(2,10),u=(0,s.nSR)(2,10),a=(0,s.nSR)(1,10),c=(0,s.nSR)(2,10,u),l=(0,s.nSR)(2,10),h=(0,s.nSR)(1,Math.min(10,l*c)),e=`Calculer $(${$}x+${a})(${l}y-${h})$ pour $x=${u}$ et $y=${c}$.`,t=`Pour $x=${u}$ et $y=${c}$ : <br>`,t+=`$(${$}x+${a})(${l}y-${h})=(${$}\\times ${u}+${a})(${l}\\times ${c}-${h})=${$*u+a}\\times ${l*c-h}=${($*u+a)*(l*c-h)}$`,(0,r.Iq)(this,n,($*u+a)*(l*c-h))}e+=(0,r.G5)(this,n),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(t),n++),o++}(0,s.K1R)(this)}}},71129:($,i,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=69282.6f1f29f28e91b7aa41d6.js.map