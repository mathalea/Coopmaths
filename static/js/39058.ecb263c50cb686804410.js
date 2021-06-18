(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[39058,71129],{39058:(e,n,i)=>{"use strict";i.r(n),i.d(n,{titre:()=>$,default:()=>s});var t=i(71129),r=(i(62259),i(63861));const $="Déterminer la parité d’une expression";function s(){t.default.call(this),this.titre=$,this.consigne="Soit $n$ un entier naturel.",this.nbQuestions=4,this.nbCols=2,this.nbColsCorr=2,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];let e,n=(0,r.SRM)([1,2,3],this.nbQuestions);for(let i,t,$,s,o=0,a=0;o<this.nbQuestions&&a<50;){switch(e=n[o],e){case 1:i=(0,r.nSR)(2,6),t=(0,r.nSR)(2,11,[4,8,9]),$=`Que peut-on dire de la parité de ${i}$n$ ?`,i%2==0&&2!=i&&(s=`${i}$n=2\\times ${(0,r.euh)(i/2)}n$<br>\n                        Comme $${(0,r.euh)(i/2)}n$ est un entier naturel, ${i}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),2==i&&(s=`${i}$n=2\\times n$<br>\n                        Comme $n$ est un entier naturel, ${i}$n$ s'écrit comme le double d'un entier naturel, il est donc pair`),3==i&&(s=`${i}$n=2n+n$<br>\n                            Comme $n$ est un entier naturel, $2 n$ est un nombre pair.<br>\n                            Si $n$ est pair, $2n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>\n                            Si $n$ est impair, $2n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>\n                            Au final, ${i}$n$ a donc la même parité que $n$.`),i%2!=0&&3!=i&&(s=`${i}$n=2\\times ${(0,r.euh)((i-1)/2)}n+n$<br>\n                            Comme $${(0,r.euh)((i-1)/2)}n$ est un entier naturel, $2\\times ${(0,r.euh)((i-1)/2)}n$ est un nombre pair.<br>\n                            Si $n$ est pair, $2\\times${(0,r.euh)((i-1)/2)}n+n$ est la somme de deux nombres pairs, il sera donc pair. <br>\n                            Si $n$ est impair, $2\\times${(0,r.euh)((i-1)/2)}n+n$ est la somme d'un nombre pair et d'un impair, il sera donc impair. <br>\n                            Au final, ${i}$n$ a donc la même parité que $n$.`);break;case 2:i=(0,r.nSR)(2,6),t=(0,r.nSR)(2,11),$=`Que peut-on dire de la parité de $${i}n+${t}$ ?`,i%2==0&&t%2==0&&2!=i&&(s=`$${i}n+${t}=2\\times ${(0,r.euh)(i/2)}n+${t}$<br>\n                        Comme $${(0,r.euh)(i/2)}n$ est un entier naturel, $2\\times ${(0,r.euh)(i/2)}n$ est donc un nombre pair<br>\n                        ${t} est aussi un nombre pair.\n                        $${i}n+${t}$ est donc la somme de deux nombres pairs, il est donc pair`),i%2==0&&t%2!=0&&2!=i&&(s=`$${i}n+${t}=2\\times ${(0,r.euh)(i/2)}n+${t}$<br>\n                        Comme $${(0,r.euh)(i/2)}n$ est un entier naturel, $2\\times ${(0,r.euh)(i/2)}n$ est donc un nombre pair<br>\n                        ${t} est un nombre impair.\n                        $${i}n+${t}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),2==i&&t%2==0&&(s=`Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>\n                        ${t} est aussi un nombre pair.\n                        $${i}n+${t}$ est donc la somme de deux nombres pairs, il est donc pair`),2==i&&t%2!=0&&(s=`\n                        Comme $n$ est un entier naturel, $2n$ est un nombre pair<br>\n                        ${t} est un nombre impair.<br>\n                        $2n+${t}$ est donc la somme d'un nombre pair et d'un nombre impair. Il est donc impair`),3==i&&t%2==0&&(s=`$${i}n+${t}=2n+n+${t}$<br>\n                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>\n                        ${t} est un nombre pair. <br>\n                        $2n + ${t}$ est donc un nombre pair. <br>\n                        $${i}n+${t}=2n+${t}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),3==i&&t%2!=0&&(s=`$${i}n+${t}=2n+n+${t}$<br>\n                        Comme $n$ est un entier naturel, $2n$ est un nombre pair.<br>\n                        ${t} est un nombre impair. <br>\n                        $2n + ${t}$ est donc un nombre impair. <br>\n                        $${i}n+${t}=2n+${t}+n$ est donc la somme d'un nombre impair et de $n$, il a donc la parité contraire de $n$.`),i%2!=0&&t%2==0&&3!=i&&(s=`${i}$n=2\\times ${(0,r.euh)((i-1)/2)}n+n+${t}$<br>\n                        Comme $${(0,r.euh)((i-1)/2)}n$ est un entier naturel, $2 ${(0,r.euh)((i-1)/2)}n$ est donc un nombre pair<br>\n                        ${t} est aussi un nombre pair.<br>\n                        $${(0,r.euh)((i-1)/2)}n +${t}$ est donc un nombre pair.<br>\n                        $${i}n+${t}=2\\times${(0,r.euh)((i-1)/2)}n+${t}+n$ est donc la somme d'un nombre pair et de $n$, il a donc la même parité que $n$.`),i%2!=0&&t%2!=0&&3!=i&&(s=`$${i}n+${t}=2\\times ${(0,r.euh)((i-1)/2)}n+n+${t}$<br>\n                        Comme $${(0,r.euh)((i-1)/2)}n$ est un entier naturel, $2 \\times ${(0,r.euh)((i-1)/2)}n$ est donc un nombre pair<br>\n                        ${t} est un nombre impair.<br>\n                        $2\\times${(0,r.euh)((i-1)/2)}n +${t}$ est une somme d'un nombre pair et d'un nombre impair, c'est donc un nombre impair.<br>\n                        $${i}n+${t}=2\\times${(0,r.euh)((i-1)/2)}n+${t}+n$ est donc la somme d'un nombre impair et de $n$,  il a donc la parité contraire de $n$.`);break;case 3:i=(0,r.nSR)(2,6),t=(0,r.nSR)(2,11),$=`Que peut-on dire de la parité de $${i}n^{2}$ ?`,2==i&&(s="\n                        Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>\n                        "),i%2==0&&2!=i&&(s=`$${i}n^{2}=2\\times ${(0,r.euh)(i/2)}n^{2}$<br>\n                        Comme $${(0,r.euh)(i/2)}n^{2}$ est un entier naturel, $2\\times ${(0,r.euh)(i/2)}n^{2}$ est donc un nombre pair<br>\n                        `),i%2==2&&(s="Comme $n^{2}$ est un entier naturel, $2n^{2}$ est un nombre pair<br>\n                        "),i%2!=0&&3!=i&&(s=`$${i}n^{2}=2\\times ${(0,r.euh)((i-1)/2)}n^{2}+n^{2}$<br>\n                        Comme $${(0,r.euh)((i-1)/2)}n^{2}$ est un entier naturel, $2\\times ${(0,r.euh)((i-1)/2)}n^{2}$ est donc un nombre pair<br>\n                        $${i}n^{2}$ est donc la somme d'un nombre pair et de $n^{2}$. Il a donc la même parité que $n^{2}$<br>\n                        Or, on sait d'après le cours (démonstration fondamentale) que $n^{2}$ et $n$ ont la même parité.<br>\n                        Donc $${i}n^{2}$ a la même parité que $n$`)}-1===this.listeQuestions.indexOf($)&&(this.listeQuestions.push($),this.listeCorrections.push(s),o++),a++}(0,r.K1R)(this)}}},71129:(e,n,i)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(n),i.d(n,{default:()=>t})}}]);
//# sourceMappingURL=39058.ecb263c50cb686804410.js.map