(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[7301,5216],{57301:(t,i,$)=>{"use strict";$.r(i),$.d(i,{titre:()=>n,default:()=>o});var e=$(75216),s=($(89459),$(55339));const n="Utiliser la simple distributivité";function o(t=1){e.default.call(this),this.sup=t,this.titre=n,this.consigne="Développer.",this.spacing=1,this.nbQuestions=5,this.nbColsCorr=1,this.sup2=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let t=["x","y","z","t","a","b","c"];this.sup2&&(t=["x"]);let i,$=["simple","simple","simple2","x_en_facteur","developper_et_reduire"];this.sup<4&&($=["simple"]);let e=(0,s.SRM)($,this.nbQuestions);for(let n,o,u=0,a=0;u<this.nbQuestions&&a<50;){i=e[u];let $=(0,s.nSR)(2,11);this.sup>2&&($*=(0,s.q$q)([-1,1]));let r=(0,s.nSR)(1,9),l=(0,s.nSR)(1,9)*(0,s.q$q)([-1,1]);1==this.sup&&(l=(0,s.nSR)(1,9));let h=(0,s.q$q)(t);switch(i){case"simple":n=1==r?`$${(0,s.Gag)(u+1)}=${$}(${h}${(0,s.tPu)(l)})$`:`$${(0,s.Gag)(u+1)}=${$}(${r}${h}${(0,s.tPu)(l)})$`,o=1==r?`$${(0,s.Gag)(u+1)}=${$}(${h}${(0,s.tPu)(l)})=${$}\n\t\t\t\t\t\t\\times ${h}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}=${$*r}${h}${(0,s.tPu)($*l)}$`:`$${(0,s.Gag)(u+1)}=${$}(${r}${h}${(0,s.tPu)(l)})=${$}\n\t\t\t\t\t\t\\times ${r}${h}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}=${$*r}${h}${(0,s.tPu)($*l)}$`;break;case"simple2":n=1==r?`$${(0,s.Gag)(u+1)}=(${h}${(0,s.tPu)(l)})\\times${(0,s.PMY)($)}$`:`$${(0,s.Gag)(u+1)}=(${r}${h}${(0,s.tPu)(l)})\\times${(0,s.PMY)($)}$`,o=1==r?`$${(0,s.Gag)(u+1)}=(${h}${(0,s.tPu)(l)})\\times${(0,s.PMY)($)}=${$}\n\t\t\t\t\t\t\\times ${h}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}=${$*r}${h}${(0,s.tPu)($*l)}$`:`$${(0,s.Gag)(u+1)}=(${r}${h}${(0,s.tPu)(l)})\\times${(0,s.PMY)($)}=${$}\n\t\t\t\t\t\t\\times ${r}${h}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}=${$*r}${h}${(0,s.tPu)($*l)}$`;break;case"x_en_facteur":n=1==r?`$${(0,s.Gag)(u+1)}=${$}${h}(${h}${(0,s.tPu)(l)})$`:`$${(0,s.Gag)(u+1)}=${$}${h}(${r}${h}${(0,s.tPu)(l)})$`,o=1==r?`$${(0,s.Gag)(u+1)}=${$}${h}(${h}${(0,s.tPu)(l)})=${$}${h}\\times ${h} ${(0,s.mKt)($*l)}${$}${h}\\times ${(0,s.WnP)(l)}=${$*r}${h}^2${(0,s.tPu)($*l)}${h}$`:$>0?`$${(0,s.Gag)(u+1)}=${$}${h}(${r}${h}${(0,s.tPu)(l)})=${$}${h}\\times ${r}${h} + ${$}${h}\\times ${(0,s.PMY)(l)}=${$*r}${h}^2${(0,s.tPu)($*l)}${h}$`:`$${(0,s.Gag)(u+1)}=${$}${h}(${r}${h}${(0,s.tPu)(l)})=${$}${h}\\times ${r}${h} + (${$}${h})\\times ${(0,s.PMY)(l)}=${$*r}${h}^2${(0,s.tPu)($*l)}${h}$`;break;case"developper_et_reduire":let t=(0,s.nSR)(2,9);n=1==r?`$${(0,s.Gag)(u+1)}=${$}(${h}${(0,s.tPu)(l)})+${t}$`:`$${(0,s.Gag)(u+1)}=${$}(${r}${h}${(0,s.tPu)(l)})+${t}$`,o=1==r?`$${(0,s.Gag)(u+1)}=${$}(${h}${(0,s.tPu)(l)})+${t}=${$}\\times ${h}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}+${t}\n\t\t\t\t\t\t=${$*r}${h}${(0,s.tPu)($*l)}+${t}=${$*r}${h}${(0,s.tPu)($*l+t)}$`:`$${(0,s.Gag)(u+1)}=${$}(${r}${h}${(0,s.tPu)(l)})+${t}=${$}\\times${(0,s.VD2)(r+h)}+${(0,s.PMY)($)}\\times${(0,s.PMY)(l)}+${t}\n\t\t\t\t\t\t=${$*r}${h}${(0,s.tPu)($*l)}+${t}=${$*r}${h}${(0,s.tPu)($*l+t)}$`}-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(o),u++),a++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Multiplication par un entier positif, tous les termes sont positifs\n2 : Multiplication par un entier positif\n3 : Multiplication par un entier relatif\n4: Multiplication par un facteur relatif et expressions sous des formes différentes "],this.besoinFormulaire2CaseACocher=["$x$ est la seule lettre utilisée"]}},75216:(t,i,$)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(t){},this.listePackages=[]}$.r(i),$.d(i,{default:()=>e})}}]);
//# sourceMappingURL=7301.867fd87ffb4a57ee2d26.js.map