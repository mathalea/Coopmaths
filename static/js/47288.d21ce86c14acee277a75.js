(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[47288,71129],{47288:($,i,t)=>{"use strict";t.r(i),t.d(i,{titre:()=>n,interactifReady:()=>r,interactifType:()=>o,default:()=>h});var s=t(71129),e=t(63861),a=t(10229);const n="Déterminer l’image d’un nombre par une fonction d’après sa forme algébrique",r=!0,o="mathLive";function h(){s.default.call(this),this.titre=n,this.interactifReady=r,this.interactifType=o,this.consigne="",this.nbQuestions=5,this.nbCols=1,this.nbColsCorr=1,this.sup=5,this.nouvelleVersion=function($){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];let i=[];1===this.sup&&(i=["ax+b","ax-b","-ax+b","-ax-b"]),2===this.sup&&(i=["ax2+bx+c","ax2+c","ax2+bx","-ax2+bx-c","-ax2-bx-c","-ax2-bx+c","-ax2-bx"]),3===this.sup&&(i=["a/cx+d","ax+b/cx+d"]),4===this.sup&&(i=["(ax+b)(cx+d)","(ax+b)2"]),5===this.sup&&(i=["ax+b","ax-b","-ax+b","ax2+bx+c","-ax2+bx-c","-ax2-bx","a/cx+d","ax+b/cx+d","(ax+b)(cx+d)","(ax+b)2"]);const t=(0,e.SRM)(i,this.nbQuestions),s=(0,e.SRM)([!0,!1],this.nbQuestions);for(let n,r,o,h,c,u,x,b,l,m=0,P=0;m<this.nbQuestions&&P<50;){switch(l=(0,e.nSR)(1,12),s[m]&&(l*=-1),o=(0,e.nSR)(2,11),h=(0,e.nSR)(2,11),c=(0,e.nSR)(2,11),b=(0,e.ff2)(6+m),t[m]){case"ax+b":x=`${o}x+${h}`,r=`$${b}(${l})=${o}\\times ${(0,e.PMY)(l)}+${h}=${o*l}+${h}=${o*l+h}$`,(0,a.Iq)(this,m,o*l+h);break;case"ax-b":x=`${o}x-${h}`,r=`$${b}(${l})=${o}\\times ${(0,e.PMY)(l)}-${h}=${o*l}-${h}=${o*l-h}$`,(0,a.Iq)(this,m,o*l-h);break;case"-ax+b":x=`-${o}x+${h}`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}+${h}=${-1*o*l}+${h}=${-1*o*l+h}$`,(0,a.Iq)(this,m,-1*o*l+h);break;case"-ax-b":x=`-${o}x-${h}`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}-${h}=${-1*o*l}-${h}=${-1*o*l-h}$`,(0,a.Iq)(this,m,-1*o*l-h);break;case"ax2+bx+c":x=`${o}x^2+${h}x+${c}`,r=`$${b}(${l})=${o}\\times ${(0,e.PMY)(l)}^2+${h}\\times ${(0,e.PMY)(l)}+${c}=${o}\\times${l*l}${(0,e.tPu)(h*l)}+${c}=${o*l*l}${(0,e.tPu)(h*l)}+${c}=${o*l*l+h*l+c}$`,(0,a.Iq)(this,m,o*l*l+h*l+c);break;case"ax2+c":x=`${o}x^2+${c}`,r=`$${b}(${l})=${o}\\times ${(0,e.PMY)(l)}^2+${c}=${o}\\times${l*l}+${c}=${o*l*l}+${c}=${o*l*l+c}$`,(0,a.Iq)(this,m,o*l*l+c);break;case"ax2+bx":x=`${o}x^2+${h}x`,r=`$${b}(${l})=${o}\\times ${(0,e.PMY)(l)}^2+${h}\\times ${(0,e.PMY)(l)}=${o}\\times${l*l}${(0,e.tPu)(h*l)}=${o*l*l}${(0,e.tPu)(h*l)}=${o*l*l+h*l}$`,(0,a.Iq)(this,m,o*l*l+h*l);break;case"-ax2+bx-c":x=`-${o}x^2+${h}x-${c}`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}^2+${h}\\times ${(0,e.PMY)(l)}-${c}=-${o}\\times${l*l}${(0,e.tPu)(h*l)}-${c}=${-1*o*l*l}${(0,e.tPu)(h*l)}-${c}=${-1*o*l*l+h*l-c}$`,(0,a.Iq)(this,m,-1*o*l*l+h*l-c);break;case"-ax2-bx-c":x=`-${o}x^2-${h}x-${c}`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}^2-${h}\\times ${(0,e.PMY)(l)}-${c}=-${o}\\times${l*l}${(0,e.tPu)(-1*h*l)}-${c}=${-1*o*l*l}${(0,e.tPu)(-1*h*l)}-${c}=${-1*o*l*l-h*l-c}$`,(0,a.Iq)(this,m,-1*o*l*l-h*l-c);break;case"-ax2-bx+c":x=`-${o}x^2-${h}x+${c}`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}^2-${h}\\times ${(0,e.PMY)(l)}+${c}=-${o}\\times${l*l}${(0,e.tPu)(-1*h*l)}+${c}=${-1*o*l*l}${(0,e.tPu)(-1*h*l)}+${c}=${-1*o*l*l-h*l+c}$`,(0,a.Iq)(this,m,-1*o*l*l-h*l+c);break;case"-ax2-bx":x=`-${o}x^2-${h}x`,r=`$${b}(${l})=-${o}\\times ${(0,e.PMY)(l)}^2-${h}\\times ${(0,e.PMY)(l)}=-${o}\\times${l*l}${(0,e.tPu)(-1*h*l)}=${-1*o*l*l}${(0,e.tPu)(-1*h*l)}=${-1*o*l*l-h*l}$`,(0,a.Iq)(this,m,-1*o*l*l-h*l);break;case"a/cx+d":for(u=(0,e.nSR)(1,11);c*l+u===0;)c=(0,e.nSR)(2,11);x=`\\dfrac{${o}}{${c}x+${u}}`,r=`$${b}(${l})=\\dfrac{${o}}{${c}\\times${(0,e.PMY)(l)}+${u}}=\\dfrac{${o}}{${c*l}+${u}}=\\dfrac{${o}}{${c*l+u}}=${(0,e.xau)(o,c*l+u)}$`,(0,a.Iq)(this,m,(0,e.xau)(o,c*l+u));break;case"ax+b/cx+d":for(u=(0,e.nSR)(1,11);c*l+u===0;)c=(0,e.nSR)(2,11);for(;o*l+h===0;)o=(0,e.nSR)(2,11);x=`\\dfrac{${o}x+${h}}{${c}x+${u}}`,r=`$${b}(${l})=\\dfrac{${o}\\times${(0,e.PMY)(l)}+${h}}{${c}\\times${(0,e.PMY)(l)}+${u}}=\\dfrac{${o*l}+${h}}{${c*l}+${u}}=\\dfrac{${o*l+h}}{${c*l+u}}=${(0,e.xau)(o*l+h,c*l+u)}$`,(0,a.Iq)(this,m,(0,e.xau)(o*l+h,c*l+u));break;case"(ax+b)(cx+d)":o=(0,e.nSR)(-4,4,[0,1,-1]),h=(0,e.nSR)(-4,4,[0]),c=(0,e.nSR)(-4,4,[0,1,-1]),u=(0,e.nSR)(-4,4,[0]),l=(0,e.nSR)(-2,2,[0]),x=`(${o}x${(0,e.tPu)(h)})(${c}x${(0,e.tPu)(u)})`,r=`$${b}(${l})=\\left(${o}\\times${(0,e.PMY)(l)}${(0,e.tPu)(h)}\\right)\\left(${c}\\times${(0,e.PMY)(l)}${(0,e.tPu)(u)}\\right)=(${o*l}${(0,e.tPu)(h)})(${c*l}${(0,e.tPu)(u)})=${o*l+h}\\times${(0,e.PMY)(c*l+u)}=${(o*l+h)*(c*l+u)}$`,(0,a.Iq)(this,m,(o*l+h)*(c*l+u));break;case"(ax+b)2":o=(0,e.nSR)(-4,4,[0,-1,1]),h=(0,e.nSR)(-4,4,[0]),c=(0,e.nSR)(-4,4,[0,-1,1]),u=(0,e.nSR)(-4,4,[0]),l=(0,e.nSR)(-2,2,[0]),x=`(${o}x${(0,e.tPu)(h)})^2`,r=`$${b}(${l})=\\left(${o}\\times${(0,e.PMY)(l)}${(0,e.tPu)(h)}\\right)^2=(${o*l}${(0,e.tPu)(h)})^2=${(0,e.PMY)(o*l+h)}^2=${(o*l+h)*(o*l+h)}$`,(0,a.Iq)(this,m,(o*l+h)*(o*l+h))}n=`On considère la fonction $${b}$ définie par $${b}:x\\mapsto ${x}$. Calculer $${b}(${l})$.`,n+=(0,a.G5)(this,m),-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(r),m++),P++}(0,e.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",5,"1 : Fonctions affines\n2 : Polynome du second degré\n3 : Quotient\n4 : Produit \n5 : Mélange"]}},71129:($,i,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}t.r(i),t.d(i,{default:()=>s})}}]);
//# sourceMappingURL=47288.d21ce86c14acee277a75.js.map