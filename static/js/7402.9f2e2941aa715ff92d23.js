(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7402,6969],{87402:($,e,i)=>{"use strict";i.r(e),i.d(e,{titre:()=>n,default:()=>r});var s=i(66969),t=i(55339);const n="Calculer la valeur d’une expression littérale";function r(){s.default.call(this),this.titre=n,this.consigne="",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.nouvelleVersion=function(){let $;this.listeQuestions=[],this.listeCorrections=[],$="5L13-5"==this.version?(0,t.NaF)(2):(0,t.NaF)(10);let e=(0,t.SRM)($,this.nbQuestions);for(let i,s,n=0,r=0;n<this.nbQuestions&&r<50;){let $,o,a,l,u,h;switch(e[n]){case 1:$=(0,t.nSR)(2,10),u=(0,t.nSR)(2,10,$),o=(0,t.nSR)(1,10,[$,u]),i=`Calculer $${$}x+${o}$ pour $x=${u}$.`,s=`Pour $x=${u}$ : <br>`,s+=`$${$}x+${o}=${$}\\times ${u}+${o}=${$*u}+${o}=${$*u+o}$`;break;case 2:$=(0,t.nSR)(2,10),u=(0,t.nSR)(2,10,$),o=(0,t.nSR)(1,10,[$,u]),i=`Calculer $${$}(x+${o})$ pour $x=${u}$.`,s=`Pour $x=${u}$ : <br>`,s+=`$${$}(x+${o})=${$}\\times (${u}+${o})=${$}\\times ${u+o}=${$*(u+o)}$`;break;case 3:u=(0,t.nSR)(2,10),h=(0,t.nSR)(2,10),i=`Calculer $x^2+y^2$ pour $x=${u}$ et $y=${h}$.`,s=`Pour $x=${u}$ et $y=${h}$ : <br>`,s+=`$x^2+y^2=${u}^2+${h}^2=${u**2}+${h**2}=${u**2+h**2}$`;break;case 4:u=(0,t.nSR)(2,10),h=(0,t.nSR)(1,u-1),i=`Calculer $x^2-y^2$ pour $x=${u}$ et $y=${h}$.`,s=`Pour $x=${u}$ et $y=${h}$ : <br>`,s+=`$x^2-y^2=${u}^2-${h}^2=${u**2}-${h**2}=${u**2-h**2}$`;break;case 5:$=(0,t.nSR)(2,5),o=(0,t.nSR)(2,6),a=(0,t.nSR)(2,6),u=(0,t.nSR)(3,6),h=(0,t.q$q)([1,2,3,5,10]),i=`Calculer $${$}x^2+${o}(x-1)+${a}y^3$ pour $x=${u}$ et $y=${h}$.`,s=`Pour $x=${u}$ et $y=${h}$ : <br>`,s+=`$${$}x^2+${o}(x-1)+${a}y^3=${$}\\times ${u}^2+${o}(${u}-1)+${a}\\times ${h}^3=${$}\\times ${u**2}+${o}\\times ${u-1}+${a}\\times ${h**3}=${$*u**2+o*(u-1)+a*h**3}$.`;break;case 6:$=(0,t.nSR)(2,5),o=(0,t.nSR)(2,6),a=(0,t.nSR)(2,6),u=(0,t.nSR)(3,6),i=`Calculer $${$}x^2+${o}x+${a}$ pour $x=${u}$.`,s=`Pour $x=${u}$ : <br>`,s+=`$${$}x^2+${o}x+${a}=${$}\\times ${u}^2+${o}\\times ${u}+${a}=${$}\\times ${u**2}+${o*u}+${a}=${$*u**2+o*u+a}$`;break;case 7:$=(0,t.nSR)(2,5),o=(0,t.nSR)(2,6),a=(0,t.nSR)(2,6),u=(0,t.nSR)(3,6),i=`Calculer $${$}x^2+${o}x-${a}$ pour $x=${u}$.`,s=`Pour $x=${u}$ : <br>`,s+=`$${$}x^2+${o}x-${a}=${$}\\times ${u}^2+${o}\\times ${u}-${a}=${$}\\times ${u**2}+${o*u}-${a}=${$*u**2+o*u-a}$`;break;case 8:$=(0,t.nSR)(2,5),o=(0,t.nSR)(2,$),a=(0,t.nSR)(2,6),u=(0,t.nSR)(3,6),i=`Calculer $${$}x^2-${o}x+${a}$ pour $x=${u}$.`,s=`Pour $x=${u}$ : <br>`,s+=`$${$}x^2-${o}x+${a}=${$}\\times ${u}^2-${o}\\times ${u}+${a}=${$}\\times ${u**2}-${o*u}+${a}=${$*u**2-o*u+a}$`;break;case 9:$=(0,t.nSR)(2,10),u=(0,t.nSR)(2,10),h=(0,t.nSR)(2,10,u),i=`Calculer $${$}xy+x+y$ pour $x=${u}$ et $y=${h}$.`,s=`Pour $x=${u}$ et $y=${h}$ : <br>`,s+=`$${$}xy+x+y=${$}\\times ${u}\\times ${h}+${u}+${h}=${$*u*h}+${u}+${h}=${$*u*h+u+h}$`;break;case 10:$=(0,t.nSR)(2,10),u=(0,t.nSR)(2,10),o=(0,t.nSR)(1,10),h=(0,t.nSR)(2,10,u),a=(0,t.nSR)(2,10),l=(0,t.nSR)(1,Math.min(10,a*h)),i=`Calculer $(${$}x+${o})(${a}y-${l})$ pour $x=${u}$ et $y=${h}$.`,s=`Pour $x=${u}$ et $y=${h}$ : <br>`,s+=`$(${$}x+${o})(${a}y-${l})=(${$}\\times ${u}+${o})(${a}\\times ${h}-${l})=${$*u+o}\\times ${a*h-l}=${($*u+o)*(a*h-l)}$`}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(s),n++),r++}(0,t.K1R)(this)}}},66969:($,e,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=7402.9f2e2941aa715ff92d23.js.map