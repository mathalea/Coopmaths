"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[76969,17007],{76969:(i,t,s)=>{s.r(t),s.d(t,{titre:()=>n,default:()=>o});var e=s(17007),$=s(30169);const n="Utiliser la simple distributivité";function o(i=1){e.default.call(this),this.sup=i,this.titre=n,this.consigne="Développer.",this.spacing=1,this.nbQuestions=5,this.nbColsCorr=1,this.sup2=!0,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[],this.sup=parseInt(this.sup);let i=["x","y","z","t","a","b","c"];this.sup2&&(i=["x"]);let t,s=["simple","simple","simple2","x_en_facteur","developper_et_reduire"];this.sup<4&&(s=["simple"]);const e=(0,$.SRM)(s,this.nbQuestions);for(let n,o,u=0,r=0;u<this.nbQuestions&&r<50;){t=e[u];let s=(0,$.nSR)(2,11);this.sup>2&&(s*=(0,$.q$q)([-1,1]));const a=(0,$.nSR)(1,9);let l=(0,$.nSR)(1,9)*(0,$.q$q)([-1,1]);1===this.sup&&(l=(0,$.nSR)(1,9));const h=(0,$.q$q)(i),c=(0,$.nSR)(2,9);switch(t){case"simple":n=1===a?`$${(0,$.Gag)(u+1)}=${s}(${h}${(0,$.tPu)(l)})$`:`$${(0,$.Gag)(u+1)}=${s}(${a}${h}${(0,$.tPu)(l)})$`,o=1===a?`$${(0,$.Gag)(u+1)}=${s}(${h}${(0,$.tPu)(l)})=${s}\n            \\times ${h}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}=${s*a}${h}${(0,$.tPu)(s*l)}$`:`$${(0,$.Gag)(u+1)}=${s}(${a}${h}${(0,$.tPu)(l)})=${s}\n            \\times ${a}${h}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}=${s*a}${h}${(0,$.tPu)(s*l)}$`;break;case"simple2":n=1===a?`$${(0,$.Gag)(u+1)}=(${h}${(0,$.tPu)(l)})\\times${(0,$.PMY)(s)}$`:`$${(0,$.Gag)(u+1)}=(${a}${h}${(0,$.tPu)(l)})\\times${(0,$.PMY)(s)}$`,o=1===a?`$${(0,$.Gag)(u+1)}=(${h}${(0,$.tPu)(l)})\\times${(0,$.PMY)(s)}=${s}\n            \\times ${h}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}=${s*a}${h}${(0,$.tPu)(s*l)}$`:`$${(0,$.Gag)(u+1)}=(${a}${h}${(0,$.tPu)(l)})\\times${(0,$.PMY)(s)}=${s}\n            \\times ${a}${h}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}=${s*a}${h}${(0,$.tPu)(s*l)}$`;break;case"x_en_facteur":n=1===a?`$${(0,$.Gag)(u+1)}=${s}${h}(${h}${(0,$.tPu)(l)})$`:`$${(0,$.Gag)(u+1)}=${s}${h}(${a}${h}${(0,$.tPu)(l)})$`,o=1===a?`$${(0,$.Gag)(u+1)}=${s}${h}(${h}${(0,$.tPu)(l)})=${s}${h}\\times ${h} ${(0,$.mKt)(s*l)}${s}${h}\\times ${(0,$.WnP)(l)}=${s*a}${h}^2${(0,$.tPu)(s*l)}${h}$`:s>0?`$${(0,$.Gag)(u+1)}=${s}${h}(${a}${h}${(0,$.tPu)(l)})=${s}${h}\\times ${a}${h} + ${s}${h}\\times ${(0,$.PMY)(l)}=${s*a}${h}^2${(0,$.tPu)(s*l)}${h}$`:`$${(0,$.Gag)(u+1)}=${s}${h}(${a}${h}${(0,$.tPu)(l)})=${s}${h}\\times ${a}${h} + (${s}${h})\\times ${(0,$.PMY)(l)}=${s*a}${h}^2${(0,$.tPu)(s*l)}${h}$`;break;case"developper_et_reduire":n=1===a?`$${(0,$.Gag)(u+1)}=${s}(${h}${(0,$.tPu)(l)})+${c}$`:`$${(0,$.Gag)(u+1)}=${s}(${a}${h}${(0,$.tPu)(l)})+${c}$`,o=1===a?`$${(0,$.Gag)(u+1)}=${s}(${h}${(0,$.tPu)(l)})+${c}=${s}\\times ${h}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}+${c}\n            =${s*a}${h}${(0,$.tPu)(s*l)}+${c}=${s*a}${h}${(0,$.tPu)(s*l+c)}$`:`$${(0,$.Gag)(u+1)}=${s}(${a}${h}${(0,$.tPu)(l)})+${c}=${s}\\times${(0,$.VD2)(a+h)}+${(0,$.PMY)(s)}\\times${(0,$.PMY)(l)}+${c}\n            =${s*a}${h}${(0,$.tPu)(s*l)}+${c}=${s*a}${h}${(0,$.tPu)(s*l+c)}$`}-1===this.listeQuestions.indexOf(n)&&(this.listeQuestions.push(n),this.listeCorrections.push(o),u++),r++}(0,$.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",4,"1 : Multiplication par un entier positif, tous les termes sont positifs\n2 : Multiplication par un entier positif\n3 : Multiplication par un entier relatif\n4: Multiplication par un facteur relatif et expressions sous des formes différentes "],this.besoinFormulaire2CaseACocher=["$x$ est la seule lettre utilisée"]}},17007:(i,t,s)=>{function e(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let s="";for(const e of t)void 0!==e&&(s+=e.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(t),s.d(t,{default:()=>e})}}]);
//# sourceMappingURL=76969.5bca35a6948127496c75.js.map