(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1104,7567],{41104:(i,s,t)=>{"use strict";t.r(s),t.d(s,{titre:()=>n,default:()=>o});var e=t(67567),$=t(24477);const n="Utiliser la double distributivité";function o(){e.default.call(this),this.titre=n,this.consigne="Développer et réduire les expressions suivantes.",this.nbCols=1,this.nbColsCorr=1,this.spacing=1,this.spacingCorr=1,this.nbQuestions=5,this.sup=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let i=[1,2];2==this.sup&&(i=[3,4]),3==this.sup&&(i=[1,2,3,4]);let s=(0,$.SRM)(i,this.nbQuestions);for(let i,t,e,n,o,h,r,a=0,l=0;a<this.nbQuestions&&l<50;){switch(r=s[a],e=(0,$.nSR)(2,9),n=(0,$.nSR)(2,9),o=(0,$.nSR)(2,9,[e]),h=(0,$.nSR)(2,9,[n]),r){case 1:n=(0,$.nSR)(2,10),h=(0,$.nSR)(2,12),i=`$(x+${n})(x+${h})$`,t=`$(x+${n})(x+${h})=x^2+${n}x+${h}x+${n*h}=x^2+${n+h}x+${n*h}$`;break;case 2:i=`$(${e}x+${n})(${o}x+${h})$`,t=`$(${e}x+${n})(${o}x+${h})=${e*o}x^2+${e*h}x+${n*o}x+${n*h}=${e*o}x^2+${e*h+n*o}x+${n*h}$`;break;case 3:i=`$(${e}x-${n})(${o}x+${h})$`,t=(0,$.h$R)(e*h-n*o,0)?`$(${e}x-${n})(${o}x+${h})=${e*o}x^2+${h*e}x-${n*o}x-${n*h}=${(0,$.eyN)(`${e*o}*x^2-${n*h}`)}$`:`$(${e}x-${n})(${o}x+${h})=${e*o}x^2+${h*e}x-${n*o}x-${n*h}=${(0,$.eyN)(`${e*o}*x^2+(${h*e-n*o})*x-${n*h}`)}$`;break;case 4:i=`$(${e}x-${n})(${o}x-${h})$`,t=`$(${e}x-${n})(${o}x-${h})=${e*o}x^2-${e*h}x-${n*o}x+${n*h}=${e*o}x^2-${e*h+n*o}x+${n*h}$`}-1==this.listeQuestions.indexOf(i)&&(this.listeQuestions.push(i),this.listeCorrections.push(t),a++),l++}(0,$.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : (x+a)(x+b) et (ax+b)(cx+d)\n 2 : (ax-b)(cx+d) et (ax-b)(cx-d)\n 3 : Tous les types"]}},67567:(i,s,t)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(s),t.d(s,{default:()=>e})}}]);