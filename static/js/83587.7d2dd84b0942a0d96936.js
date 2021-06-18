(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[83587,71129],{83587:($,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>a,default:()=>x});var e=i(71129),s=(i(62259),i(63861));const a="Équations du second degré se ramenant au premier degré";function x(){e.default.call(this),this.titre=a,this.consigne="Résoudre les équations suivantes",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=1,this.sup=4,this.spacingCorr=3,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(){this.sup=parseInt(this.sup),this.listeQuestions=[],this.listeCorrections=[];let $=[];1===this.sup&&($=["ax2+bx","ax2+bxAvec1"]),2===this.sup&&($=["ax2-b2","ax2=b2"]),3===this.sup&&($=["bcx2+a=bx(cx+d)","bcx2+a=bx(cx+d)","(ax+b)(cx+d)=acx2"]),4===this.sup&&($=["ax2+bx","ax2+bxAvec1","bcx2+a=bx(cx+d)","ax2-b2","ax2=b2","(ax+b)(cx+d)=acx2"]);const t=(0,s.SRM)($,this.nbQuestions);for(let i,e,a,x,r,o,n=0,b=0;n<this.nbQuestions&&b<50;){switch(t[n]){case"ax2+bx":i=(0,s.nSR)(-9,9,0),e=(0,s.nSR)(-9,9,0),r=u(i,e)[0],o=u(i,e)[1];break;case"ax2+bxAvec1":1===(0,s.nSR)(1,2)?(i=(0,s.q$q)([-1,1]),e=(0,s.nSR)(-9,9,[-1,0,1])):(e=(0,s.q$q)([-1,1]),i=(0,s.nSR)(-9,9,[-1,0,1])),r=u(i,e)[0],o=u(i,e)[1];break;case"ax2-b2":i=(0,s.nSR)(1,10),e=(0,s.nSR)(1,10),r=`$ ${(0,s.wO4)(i**2)}x^2 - ${e**2} = 0 $ `,o=`$ ${(0,s.wO4)(i**2)}x^2 - ${e**2} = 0 $ `,o+="<br>",o+=`$ (${i}x+${e})(${i}x-${e}) = 0 $ `,o+="<br>",o+=`$${i}x+${e} = 0 \\quad \\text{ou} \\quad ${i}x-${e} = 0$ `,o+="<br>",o+=`$${i}x = ${-e} \\quad \\text{ou} \\quad ${i}x = ${e}$ `,o+="<br>",1!==(0,s.Md9)(i,e)?o+=`$x = ${(0,s.qaf)(-e,i)} \\quad \\text{ou} \\quad x = ${(0,s.qaf)(e,i)}$ `:o+=`$x = ${(0,s.qaf)(-e,i)}=${(0,s.xau)(-e,i)} \\quad \\text{ou} \\quad x = ${(0,s.qaf)(e,i)}=${(0,s.xau)(e,i)}$ `;break;case"ax2=b2":i=(0,s.nSR)(1,10),e=(0,s.nSR)(1,10),r=`$ ${(0,s.wO4)(i**2)}x^2 = ${e**2}$ `,o=`$ ${(0,s.wO4)(i**2)}x^2 = ${e**2}$ `,o+="<br>",o+=`$ ${(0,s.wO4)(i**2)}x^2 - ${e**2} = 0 $ `,o+="<br>",o+=`$ (${i}x+${e})(${i}x-${e}) = 0 $ `,o+="<br>",o+=`$${i}x+${e} = 0 \\quad \\text{ou} \\quad ${i}x-${e} = 0$ `,o+="<br>",o+=`$${i}x = ${-e} \\quad \\text{ou} \\quad ${i}x = ${e}$ `,o+="<br>",1!==(0,s.Md9)(i,e)?o+=`$x = ${(0,s.qaf)(-e,i)} \\quad \\text{ou} \\quad x = ${(0,s.qaf)(e,i)}$ `:o+=`$x = ${(0,s.qaf)(-e,i)}=${(0,s.xau)(-e,i)} \\quad \\text{ou} \\quad x = ${(0,s.qaf)(e,i)}=${(0,s.xau)(e,i)}$ `;break;case"bcx2+a=bx(cx+d)":i=(0,s.nSR)(1,10),e=(0,s.nSR)(1,10),a=(0,s.nSR)(1,10),x=(0,s.nSR)(1,10),1===(0,s.nSR)(1,2)?(r=`$ ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)} = ${(0,s.wO4)(e)}x(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) $`,o=`$ ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)} = ${(0,s.wO4)(e)}x(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) $`,o+="<br>",o+=`$ ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)} = ${(0,s.wO4)(e*a)}x^2 ${(0,s.Zvy)(x*e)}x $`,o+="<br>",o+=`$ ${i} = ${(0,s.wO4)(x*e)}x $`,o+="<br>",o+=`$ ${(0,s.qaf)(i,x*e)} = x $`,(i<0&&x*e<0||1!==(0,s.Md9)(i,x*e))&&(o+="<br>",o+=` $ x = ${(0,s.xau)(i,x*e)} $`)):(r=`$ ${(0,s.wO4)(e)}x(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) = ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)} $`,o=`$  ${(0,s.wO4)(e)}x(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) = ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)} $`,o+="<br>",o+=`$ ${(0,s.wO4)(e*a)}x^2 ${(0,s.Zvy)(e*x)}x = ${(0,s.wO4)(e*a)}x^2 ${(0,s.tPu)(i)}$`,o+="<br>",o+=`$ ${(0,s.wO4)(e*x)}x = ${i} $`,o+="<br>",o+=`$ x = ${(0,s.qaf)(i,e*x)}$`,(i<0&&e*x<0||1!==(0,s.Md9)(i,e*x))&&(o+="<br>",o+=` $ x = ${(0,s.xau)(i,e*x)} $`));break;case"(ax+b)2=0":i=(0,s.nSR)(1,10),e=(0,s.nSR)(1,10),r=`$ (${(0,s.wO4)(i)}x ${(0,s.tPu)(e)})^2 = 0 $`,o=`$ (${(0,s.wO4)(i)}x ${(0,s.tPu)(e)})^2 = 0 $`,o+="<br>",o+=`$ ${(0,s.wO4)(i)}x ${(0,s.tPu)(e)} = 0$`,o+="<br>",o+=`$ ${(0,s.wO4)(i)}x = ${-e} $`,o+="<br>",o+=`$ x = ${(0,s.qaf)(-e,i)}$`,(-e<0&&i<0||1!==(0,s.Md9)(i,e))&&(o+="<br>",o+=` $ x = ${(0,s.xau)(-e,i)} $`);break;case"(ax+b)(cx+d)=acx2":i=(0,s.nSR)(1,5),e=(0,s.nSR)(1,5),a=(0,s.nSR)(1,5),x=(0,s.nSR)(1,5),r=`$ (${(0,s.wO4)(i)}x ${(0,s.tPu)(e)})(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) = ${(0,s.wO4)(i*a)}x^2 $`,o=`$ (${(0,s.wO4)(i)}x ${(0,s.tPu)(e)})(${(0,s.wO4)(a)}x ${(0,s.tPu)(x)}) = ${(0,s.wO4)(i*a)}x^2 $`,o+="<br>",o+=`$ ${(0,s.wO4)(i*a)}x^2 ${(0,s.Zvy)(i*x)}x ${(0,s.Zvy)(e*a)}x ${(0,s.tPu)(e*x)} = ${(0,s.wO4)(i*a)}x^2 $`,o+="<br>",o+=`$ ${(0,s.wO4)(i*a)}x^2 ${(0,s.Zvy)(i*x+e*a)}x ${(0,s.tPu)(e*x)} = ${(0,s.wO4)(i*a)}x^2 $`,o+="<br>",o+=`$ ${(0,s.wO4)(i*x+e*a)}x ${(0,s.tPu)(e*x)} = 0 $`,o+="<br>",o+=`$ ${(0,s.wO4)(i*x+e*a)}x = ${-e*x}$ `,o+="<br>",o+=`$ x = ${(0,s.qaf)(-e*x,i*x+e*a)}$`,(-e*x<0&&i*x+e*a<0||1!==(0,s.Md9)(-e*x,i*x+e*a))&&(o+="<br>",o+=`$ x = ${(0,s.xau)(-e*x,i*x+e*a)}$`)}-1===this.listeQuestions.indexOf(r)&&(this.listeQuestions.push(r),this.listeCorrections.push(o),n++),b++}(0,s.K1R)(this)},this.besoinFormulaireNumerique=["Types d'équations",2,"1 : Factoriser avec x en facteur commun\n2 : Factoriser avec l'identité remarquable\n3 : Développer et réduire\n4 : Tous les types précédents"]}function u($,t){const i=`$ ${(0,s.wO4)($)} x^2 ${(0,s.Zvy)(t)} x=0$`;let e=`$ ${(0,s.wO4)($)} x^2 ${(0,s.Zvy)(t)} x=0$`;return e+="<br>",e+=`$x(${(0,s.wO4)($)} x ${(0,s.tPu)(t)})=0$`,e+="<br>",e+=`$ x = 0 \\text{ \\quad ou \\quad } ${(0,s.wO4)($)} x ${(0,s.tPu)(t)} = 0 $ `,e+="<br>",e+=`$ \\phantom{x = 0 \\text{ \\quad ou \\quad }} ${(0,s.wO4)($)} x = ${-t} $ `,e+="<br>",e+=`$ \\phantom{x = 0 \\text{ \\quad ou \\quad }}  x = ${(0,s.qaf)(-t,$)} `,(t>0&&$<0||1!==(0,s.Md9)($,t))&&(e+=` = ${(0,s.xau)(-t,$)} `),e+="$",[i,e]}},71129:($,t,i)=>{"use strict";function e(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function($){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>e})}}]);
//# sourceMappingURL=83587.7d2dd84b0942a0d96936.js.map