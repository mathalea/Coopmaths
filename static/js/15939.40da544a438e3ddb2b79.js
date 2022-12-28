"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[15939,25523],{15939:(e,$,t)=>{t.r($),t.d($,{titre:()=>s,default:()=>u});var i=t(25523),n=t(25482),r=t(71250);const s="Résoudre une inéquation du second degré";function u(){i.default.call(this),this.titre=s,this.consigne="Résoudre dans $\\mathbb{R}$ les inéquations suivantes.",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2,this.spacingCorr=3,this.sup=1,this.nouvelleVersion=function(){let e;this.listeQuestions=[],this.listeCorrections=[],1===this.sup&&(e=(0,n.SRM)(["supérieur ou égal","supérieur ou égal","strictement supérieur","strictement supérieur","strictement supérieur","inférieur ou égal","inférieur ou égal","strictement inférieur","strictement inférieur","pasDeSolution1","pasDeSolution2","pasDeSolution3","pasDeSolution4"],this.nbQuestions));for(let $,t,i,s,u,o,a,l,d,b,c=0,x=0;c<this.nbQuestions&&x<50;)"strictement supérieur"===e[c]&&(o=(0,n.nSR)(-5,2,[0]),a=(0,n.nSR)(o+1,5,[0,-o]),d=(0,n.nSR)(-4,4,[0]),i=d,s=-d*o-d*a,u=d*o*a,$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}>0$`,t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,t+="<br>On cherche à résoudre $P(x)>0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta>0$ donc le polynôme admet deux racines : $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$",t+=`<br>$x_1 =\\dfrac{${-s}-\\sqrt{${s*s-4*i*u}}}{${2*i}}=${o}$`,t+=`<br>$x_2 =\\dfrac{${-s}+\\sqrt{${s*s-4*i*u}}}{${2*i}}=${a}$`,t+="<br>On sait qu'un polynôme du second degré est du signe de $a$ à l'extérieur de ses racines.",t+=`<br>Comme $a=${i}`,i>0?(t+=">0$",b=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):(t+="<0$",b=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),t+="<br>On en déduit le signe du polynôme dans un tableau de signes :",t+=(0,r.iR9)({xmin:-.5,ymin:-4.1,xmax:30,ymax:.1,scale:.5},(0,r.c4y)({tabInit:[[["$x$",2,30],[`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,2,50]],["$-\\infty$",30,`${o}`,20,`${a}`,20,"$+\\infty$",30]],tabLines:[b],colorBackground:"",espcl:3.5,deltacl:.8,lgt:8,hauteurLignes:[12,15]})),t+=i>0?`<br>On en déduit que $S=]-\\infty;${o}[\\cup]${a};+\\infty[$`:`<br> On en déduit que $S=]${o};${a}[$`),"supérieur ou égal"===e[c]&&(o=(0,n.nSR)(-5,2,[0]),a=(0,n.nSR)(o+1,5,[0,-o]),d=(0,n.nSR)(-4,4,[0]),i=d,s=-d*o-d*a,u=d*o*a,$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}\\geq 0$`,t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,t+="<br>On cherche à résoudre $P(x)\\geq 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta>0$ donc  le polynôme admet deux racines : $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$",t+=`<br>$x_1 =\\dfrac{${-s}-\\sqrt{${s*s-4*i*u}}}{${2*i}}=${o}$`,t+=`<br>$x_2 =\\dfrac{${-s}+\\sqrt{${s*s-4*i*u}}}{${2*i}}=${a}$`,t+="<br>On sait qu'un polynôme du second degré est du signe de $a$ à l'extérieur de ses racines.",t+=`<br>Comme $a=${i}`,i>0?(t+=">0$.",b=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):(t+=`<0$, on peut dire que $P(x)\\geq 0$ sur $S=]-\\infty;${o}]\\cup[${a};+\\infty[$`,b=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),t+="<br>On peut résumer le signe du polynôme dans un tableau de signes :",t+=(0,r.iR9)({xmin:-.5,ymin:-3.1,xmax:30,ymax:.1,scale:.5},(0,r.c4y)({tabInit:[[["$x$",2,30],[`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,2,50]],["$-\\infty$",30,`${o}`,20,`${a}`,20,"$+\\infty$",30]],tabLines:[b],colorBackground:"",espcl:3.5,deltacl:.8,lgt:8,hauteurLignes:[10,10]})),t+=i>0?`<br>On en déduit que $S=]-\\infty;${o}]\\cup[${a};+\\infty[$`:`<br> On en déduit que $S=[${o};${a}]$`),"inférieur ou égal"===e[c]&&(o=(0,n.nSR)(-5,2,[0]),a=(0,n.nSR)(o+1,5,[0,-o]),d=(0,n.nSR)(-4,4,[0]),i=d,s=-d*o-d*a,u=d*o*a,$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}\\leq 0$`,t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,t+="<br>On cherche à résoudre $P(x)\\leq 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta>0$ donc  le polynôme admet deux racines : $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$",t+=`<br>$x_1 =\\dfrac{${-s}-\\sqrt{${s*s-4*i*u}}}{${2*i}}=${o}$`,t+=`<br>$x_2 =\\dfrac{${-s}+\\sqrt{${s*s-4*i*u}}}{${2*i}}=${a}$`,t+="<br>On sait qu'un polynôme du second degré est du signe de $a$ à l'extérieur de ses racines.",t+=`<br>Comme $a=${i}`,i>0?(t+=">0 :$",b=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):(t+="<0 :$",b=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),t+="<br>On peut résumer le signe du polynôme dans un tableau de signes :",t+=(0,r.iR9)({xmin:-.5,ymin:-4.1,xmax:30,ymax:.1,scale:.5},(0,r.c4y)({tabInit:[[["$x$",2,30],[`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,2,50]],["$-\\infty$",30,`${o}`,20,`${a}`,20,"$+\\infty$",30]],tabLines:[b],colorBackground:"",espcl:3.5,deltacl:.8,lgt:8,hauteurLignes:[15,15]})),t+=i<0?`<br>On en déduit que $S=]-\\infty;${o}]\\cup[${a};+\\infty[$`:`<br> On en déduit que $S=[${o};${a}]$`),"strictement inférieur"===e[c]&&(o=(0,n.nSR)(-5,2,[0]),a=(0,n.nSR)(o+1,5,[0,-o]),d=(0,n.nSR)(-4,4,[0]),i=d,s=-d*o-d*a,u=d*o*a,$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}< 0$`,t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,t+="<br>On cherche à résoudre $P(x)< 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta>0$ donc le polynôme admet deux racines : $x_1 = \\dfrac{-b-\\sqrt{\\Delta}}{2a}$ et $x_2 = \\dfrac{-b+\\sqrt{\\Delta}}{2a}$",t+=`<br>$x_1 =\\dfrac{${-s}-\\sqrt{${s*s-4*i*u}}}{${2*i}}=${o}$`,t+=`<br>$x_2 =\\dfrac{${-s}+\\sqrt{${s*s-4*i*u}}}{${2*i}}=${a}$`,t+="<br>On sait qu'un polynôme du second degré est du signe de $a$ à l'extérieur de ses racines.",t+=`<br>Comme $a=${i}`,i>0?(t+=">0 :$",b=["Line",30,"",0,"+",20,"z",20,"-",20,"z",20,"+",20]):(t+="<0 :$",b=["Line",30,"",0,"-",20,"z",20,"+",20,"z",20,"-",20]),t+="<br>On peut résumer le signe du polynôme dans un tableau de signes :",t+=(0,r.iR9)({xmin:-.5,ymin:-4.1,xmax:30,ymax:.1,scale:.5},(0,r.c4y)({tabInit:[[["$x$",2,30],[`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,2,50]],["$-\\infty$",30,`${o}`,20,`${a}`,20,"$+\\infty$",30]],tabLines:[b],colorBackground:"",espcl:3.5,deltacl:.8,lgt:8,hauteurLignes:[15,15]})),t+=i<0?`<br>On en déduit que $S=]-\\infty;${o}[\\cup]${a};+\\infty[$`:`<br> On en déduit que $S=]${o};${a}[$`),"pasDeSolution1"===e[c]&&(d=(0,n.nSR)(1,5),o=(0,n.nSR)(-3,3,[0]),l=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?(i=d,s=-2*d*o,u=d*o*o+l):(i=-d,s=2*d*o,u=-d*o*o-l),$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}< 0$`,0===s&&($=`$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}< 0$`),t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,0===s&&(t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}$`),t+="<br>On cherche à résoudre $P(x)< 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta<0$ donc le polynôme $P$ n'admet pas de racine.",t+=`<br> Il est toujours du signe de $a=${i}`,i>0?(t+=">0$, donc $P(x)>0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\emptyset$."):(t+="<0$, donc $P(x)<0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\mathbb{R}$.")),"pasDeSolution2"===e[c]&&(d=(0,n.nSR)(1,5),o=(0,n.nSR)(-3,3,[0]),l=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?(i=d,s=-2*d*o,u=d*o*o+l):(i=-d,s=2*d*o,u=-d*o*o-l),$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}\\leq 0$`,0===s&&($=`$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}\\leq0$`),t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,0===s&&(t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}$`),t+="<br>On cherche à résoudre $P(x)\\leq 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta<0$ donc le polynôme $P$ n'admet pas de racine.",t+=`<br> Il est toujours du signe de $a=${i}`,i>0?(t+=">0$, donc $P(x)>0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\emptyset$."):(t+="<0$, donc $P(x)<0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\mathbb{R}$.")),"pasDeSolution3"===e[c]&&(d=(0,n.nSR)(1,5),o=(0,n.nSR)(-3,3,[0]),l=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?(i=d,s=-2*d*o,u=d*o*o+l):(i=-d,s=2*d*o,u=-d*o*o-l),$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}\\geq 0$`,0===s&&($=`$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}\\geq0$`),t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,0===s&&(t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}$`),t+="<br>On cherche à résoudre $P(x)\\geq 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta<0$ donc le polynôme $P$ n'admet pas de racine.",t+=`<br> Il est toujours du signe de $a=${i}`,i<0?(t+="<0$, donc $P(x)<0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\emptyset$."):(t+=">0$, donc $P(x)>0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\mathbb{R}$.")),"pasDeSolution4"===e[c]&&(d=(0,n.nSR)(1,5),o=(0,n.nSR)(-3,3,[0]),l=(0,n.nSR)(1,5),"+"===(0,n.q$q)(["+","-"])?(i=d,s=-2*d*o,u=d*o*o+l):(i=-d,s=2*d*o,u=-d*o*o-l),$=`$${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}> 0$`,0===s&&($=`$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}> 0$`),t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=${(0,n.wO4)(i)}x^2${(0,n.Zvy)(s)}x${(0,n.tPu)(u)}$`,0===s&&(t=`Soit $P$ le polynôme défini pour tout $x$ de $\\mathbb R$ par $P(x)=$${(0,n.wO4)(i)}x^2${(0,n.tPu)(u)}$`),t+="<br>On cherche à résoudre $P(x)> 0$.",t+="<br>Pour cela, on cherche ses racines éventuelles.",t+=`<br>$\\Delta = ${(0,n.PMY)(s)}^2-4\\times${(0,n.PMY)(i)}\\times${(0,n.PMY)(u)}=${s*s-4*i*u}$`,t+="<br>$\\Delta<0$ donc le polynôme $P$ n'admet pas de racine.",t+=`<br> Il est toujours du signe de $a=${i}`,i>0?(t+=">0$, donc $P(x)>0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\mathbb{R}$."):(t+="<0$, donc $P(x)<0$ pour tout $x$ de $\\mathbb{R}$.",t+="<br> On en déduit $S=\\emptyset$.")),this.questionJamaisPosee(c,i,s,u)&&(this.listeQuestions.push($),this.listeCorrections.push(t),c++),x++;(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Solutions entières\n2 : Solutions réelles et calcul du discriminant non obligatoire"]}},25523:(e,$,t)=>{function i(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...$){0===e&&(this.listeArguments=[]);let t="";for(const i of $)void 0!==i&&(t+=i.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r($),t.d($,{default:()=>i})}}]);
//# sourceMappingURL=15939.40da544a438e3ddb2b79.js.map