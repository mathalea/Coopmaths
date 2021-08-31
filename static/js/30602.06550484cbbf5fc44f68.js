"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[30602,17007],{30602:(i,e,t)=>{t.r(e),t.d(e,{titre:()=>r,interactifReady:()=>a,interactifType:()=>h,default:()=>l});var s=t(17007),n=t(30169),o=t(75664);const r="Augmenter ou diminuer d’un pourcentage",a=!0,h="mathLive";function l(){s.default.call(this),this.consigne="",this.nbQuestions=2,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=100,this.video="",this.interactif=!0,this.interactifType="mathLive",this.nouvelleVersion=function(){const i=parseInt(this.sup)-1;this.listeQuestions=[],this.listeCorrections=[],this.introduction=(0,n.IJQ)({titre:"Calculatrice autorisée.",texte:'Ecrire les réponses dans les cases sans arrondir, ne pas préciser "€" ni "euros" ...',couleur:"nombres"});const e=(0,n.SRM)(["augmentation","réduction"],this.nbQuestions);let t,s,r,a,h,l,u,c,b,m;function d(i){0===i&&(r=10*(0,n.nSR)(1,6),a=10*(0,n.nSR)(1,3)),1===i&&(r=(0,n.nSR)(21,39,[30]),a=(0,n.nSR)(2,9)),2===i&&(r=(0,n.n0o)((100*(0,n.nSR)(40,60)+10*(0,n.nSR)(1,9))/100),a=(0,n.n0o)((10*(0,n.nSR)(1,9)+(0,n.nSR)(1,9))/10))}for(let $,f,p=0,C=0;p<this.nbQuestions&&C<50;){switch(b=(0,n.nHh)(),m=(0,n.sTI)(),t=(0,n.nSR)(100,200),s=(0,n.nSR)(501,899,[600,700,800]),e[p]){case"réduction":d(i),h=(0,n.n0o)(r*t/100),u=(0,n.n0o)(t-h),$=`<br> Un billet d'avion coûte ${t}€. ${b} bénéficie d'une réduction de ${r} %.<br>`,$+="a) Le montant de la réduction est :",$+=(0,o.G5)(this,p),(0,o.Iq)(this,p,[h,10*h],{formatInteractif:"calcul"}),$+=`b) Finalement, ${b} paiera son billet :`,$+=(0,o.G5)(this,p+this.nbQuestions+1),f=`<br>a) Le montant de la réduction est :     $${t}\\times ${r} \\div 100 = ~ $`,f+=(0,n.PH8)(`$${(0,n.i6h)(h)}€.$<br>`),f+=`b) Finalement, ${b} paiera son billet : $${t} - ${(0,n.i6h)(h)} = ~ $`,f+=(0,n.PH8)(`$${(0,n.i6h)(u)}€.$`),(0,o.Iq)(this,p+this.nbQuestions+1,u);break;case"augmentation":d(i),(0,n.n0o)(l=a*s/100),(0,n.n0o)(c=s+l),$=`<br> Le loyer de l'appartement de ${m} coûte ${s}€. Au 1er janvier, il augmente de ${a} %.<br>`,$+="a) Le montant de l'augmentation est :",$+=(0,o.G5)(this,p),$+=`b) Finalement, ${m} paiera son loyer :`,(0,o.Iq)(this,p,l),$+=(0,o.G5)(this,p+this.nbQuestions+1),(0,o.Iq)(this,p+this.nbQuestions+1,c),f=`<br>a) Le montant de l'augmentation est :     $${s}\\times ${a} \\div 100 = ~ $`,f+=(0,n.PH8)(`$${(0,n.i6h)(l)}€.$<br>`),f+=`b) Finalement, ${m} paiera son loyer : $${s} + ${(0,n.i6h)(l)} = ~ $`,f+=(0,n.PH8)(`$${(0,n.i6h)(c)}€.$`)}-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(f),p++),C++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",3,"1 : Valeurs entières et 10%, 20% ..\n2 : Valeurs entières et 4%, 23% ..\n3 : Une décimale comme 34,5%"]}},17007:(i,e,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let t="";for(const s of e)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(e),t.d(e,{default:()=>s})}}]);
//# sourceMappingURL=30602.06550484cbbf5fc44f68.js.map