"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[78228,25523],{25523:(e,t,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const s of t)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>s})},78228:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>$,interactifReady:()=>r,interactifType:()=>o,dateDePublication:()=>l,default:()=>f});var s=i(25523),n=i(25482),a=i(11945);const $="Reconnaître une fonction affine",r=!0,o="mathLive",l="25/10/2021";function f(){s.default.call(this),this.formatChampTexte="largeur15 inline",this.formatInteractif="calcul",this.nbQuestions=1,this.nouvelleVersion=function(){let e,t,i;switch(this.listeCorrections=[],this.listeQuestions=[],(0,n.q$q)([1,2,3])){case 1:e=(0,n.nSR)(1,5),t=(0,n.nSR)(-9,9),1===e?0===t?(this.listeQuestions.push(`Soit $f(x)=x$.<br>\n          La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>    Les valeurs de $a$ et de $b$ sont  :<br> $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n            ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),this.listeCorrections.push(`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$ (attention, $x=1x$) et la valeur de $b$ est la constante. <br>\n            $f(x)=\\underbrace{${e}}_{a}x$`)):(this.listeQuestions.push(`Soit $f(x)=${t}+x$.<br>\n        La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>   Les valeurs de $a$ et de $b$ sont  :<br> $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n          ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),this.listeCorrections.push(`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$ (attention, $x=1x$) et la valeur de $b$ est la constante. <br>\n          $f(x)=${t}+${e}x=\\underbrace{${e}}_{a}x+\\underbrace{${(0,n.PMY)(t)}}_{b}$`)):0===t?(this.listeQuestions.push(`Soit $f(x)=x$.<br>\n                La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>       Les valeurs de $a$ et de $b$ sont  :<br>       $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n                  ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),this.listeCorrections.push(`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$ (attention, $x=1x$) et la valeur de $b$ est la constante. <br>\n                  $f(x)=\\underbrace{${e}}_{a}x$`)):(this.listeQuestions.push(`Soit $f(x)=${t}+${e}x$.<br>\n            La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>  Les valeurs de $a$ et de $b$ sont  :<br>\n       $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n         ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),this.listeCorrections.push(`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$ (attention, $x=1x$) et la valeur de $b$ est la constante. <br>\n        $f(x)=${t}+${e}x=\\underbrace{${e}}_{a}x+\\underbrace{${(0,n.PMY)(t)}}_{b}$`)),(0,a.Iq)(this,0,e),(0,a.Iq)(this,1,t);break;case 2:for(e=(0,n.nSR)(-9,9,0),t=(0,n.nSR)(2,10),i=(0,n.nSR)(-9,9,0);1!==(0,n.Md9)(e,t);)e=(0,n.nSR)(-5,5,0);-1===e?this.listeQuestions.push(`Soit $f(x)=\\dfrac{-x}{${t}}${(0,n.tPu)(i)}$.<br>\n        La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>   Les valeurs de $a$ et de $b$ sont  :<br>  $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n          ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `):this.listeQuestions.push(`Soit $f(x)=\\dfrac{${(0,n.wO4)(e)}x}{${t}}${(0,n.tPu)(i)}$.<br>\n            La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>Les valeurs de $a$ et de $b$ sont  :<br>   $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n         ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),(0,a.Iq)(this,0,[`${(0,n.qaf)(e,t)}`,`${(0,n.qaf)(-e,-t)}`,(0,n.n0o)(e/t),(0,n.n0o)(-e/-t)]),(0,a.Iq)(this,1,i),this.listeCorrections.push(`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$ (attention, $\\dfrac{ax}{b}=\\dfrac{a}{b}x$) et la valeur de $b$ est la constante.<br>\n        $f(x)=\\dfrac{${(0,n.wO4)(e)}x}{${t}}=\\underbrace{\\dfrac{${e}}{${t}}}_{a}x+\\underbrace{${(0,n.PMY)(i)}}_{b}$`);break;case 3:for(e=(0,n.nSR)(-9,9,0),t=(0,n.nSR)(2,10),i=(0,n.nSR)(-9,9,0);1!==(0,n.Md9)(e,t)|1!==(0,n.Md9)(i,t);)e=(0,n.nSR)(-9,9,0),i=(0,n.nSR)(-9,9,0),t=(0,n.nSR)(2,10);-1===e?this.listeQuestions.push(`Soit $f(x)=\\dfrac{-x${(0,n.tPu)(i)}}{${t}}$.<br>\n        La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>   Les valeurs de $a$ et de $b$ sont  :<br>  $a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n          ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `):this.listeQuestions.push(`Soit $f(x)=\\dfrac{${(0,n.wO4)(e)}x${(0,n.tPu)(i)}}{${t}}$.<br>\n            La fonction $f$ est une fonction affine de la forme $f(x)=ax+b$.<br>      Les valeurs de $a$ et de $b$ sont  :<br>$a=$ ${this.interactif?(0,a.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(3)} ${(0,n.sp)(3)} et${(0,n.sp)(3)} $b=$\n         ${this.interactif?(0,a.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(2)} `),(0,a.Iq)(this,0,[`${(0,n.qaf)(e,t)}`,`${(0,n.qaf)(-e,-t)}`,(0,n.n0o)(e/t),(0,n.n0o)(-e/-t)]),(0,a.Iq)(this,1,[`${(0,n.qaf)(i,t)}`,`${(0,n.qaf)(-i,-t)}`,(0,n.n0o)(i/t),(0,n.n0o)(-i/-t)]),this.listeCorrections=[`On identifie les valeurs de $a$ et de $b$ : la valeur de $a$ est le coefficient devant $x$  et la valeur de $b$ est la constante.<br>\n        $f(x)=\\dfrac{${(0,n.wO4)(e)}x${(0,n.tPu)(i)}}{${t}}=\\underbrace{\\dfrac{${e}}{${t}}}_{a}x+\\underbrace{\\dfrac{${i}}{${t}}}_{b}$`]}(0,n.FRy)(this)}}}}]);
//# sourceMappingURL=78228.0dfb87a60ba27dc7b136.js.map