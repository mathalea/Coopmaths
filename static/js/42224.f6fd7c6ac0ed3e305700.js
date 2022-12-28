"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[42224,25523],{42224:(e,t,i)=>{i.r(t),i.d(t,{titre:()=>a,dateDePublication:()=>o,dateDeModifImportante:()=>$,default:()=>s});var n=i(25523),r=i(25482);i(71250);const a="Nombre dérivé de fonctions de références",o="16/12/21",$="24/10/2021";function s(){n.default.call(this),this.consigne="",this.nbQuestions=1,this.nbCols=2,this.nbColsCorr=2,this.tailleDiaporama=3,this.video="",this.nouvelleVersion=function(e){this.listeQuestions=[],this.listeCorrections=[];let t=[1,2,3,4];this.sup=(0,r.QmD)(1,5,this.sup,5),t=5!==this.sup?[this.sup]:[1,2,3,4];const i=(0,r.SRM)(t,this.nbQuestions);for(let n,a,o,$,s,u=0,h=0;u<this.nbQuestions&&h<50;){switch(i[u]){case 1:n=(0,r.nSR)(-5,5,[0]),o=(0,r.nSR)(-5,5,[0]),a=(0,r.nSR)(-5,5,[0]),$=`Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=${(0,r.y$x)(o,a)} $.<br>`,$+=`Déterminer la valeur de  $f'(${n})$, en utilisant la définition de cours.`,s=`Pour déterminer $f'(${n})$, `,s+=`on commence par calculer le taux de variation de $f$, <br> entre $${n}$ et $${n}+h$ , `,s+="noté $\\tau(h)$, où $h$ est un réel non-nul.<br>",s+=`$\\begin{aligned}\\tau(h) &= \\dfrac{f(${n}+h)-f(${n})}{h}&\\text{Définition du taux de variation}\\\\`,s+=`&= \\dfrac{${o}(${n}+h)${(0,r.tPu)(a)}-${(0,r.PMY)(o)}\\times ${(0,r.PMY)(n)}${(0,r.tPu)(-a)}}{h}&\\text{Application à la fonction } f(x)=${(0,r.y$x)(o,a)}  \\\\`,s+=`&= \\dfrac{${(0,r.PMY)(n*o)}${(0,r.Zvy)(o)} h ${(0,r.tPu)(a)}-${(0,r.PMY)(n*o)} ${(0,r.Zvy)(-a)}}{h}&\\text{Développement au numérateur}  \\\\`,s+=`&= \\dfrac{${o} h } {h}&\\text{Réduction au numérateur}  \\\\`,s+=`&= ${o} &\\text{Simplification par } h  \\\\`,s+="\\end{aligned}$",s+="<br>Le taux de variations de $f$ est une constante qui ne dépend pas de $h$.",s+="<br>Ce résultat était prévisible puisque la représentation graphique d'une fonction affine est une droite.",s+=`<br>La pente entre deux points de la droite est donc toujours égale au coefficient directeur de la fonction affine, ici ${o}.`,s+="<br>On en déduit facilement la limite du taux de variations quand $h$ tend vers $0$.",s+=`<br>$\\lim\\limits_{h \\rightarrow 0} ${o}=${o} $`,s+=`<br>On peut en conclure que $f$ est dérivable en $${n}$ et`,s+=` donc $f'(${n})=${o} $`;break;case 2:n=(0,r.nSR)(-5,5,[0]),$="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}$ par $f(x)=x^2$.<br>",$+=`Déterminer la valeur de  $f'(${n})$, en utilisant la définition de cours.`,s=`Pour déterminer $f'(${n})$, `,s+=`on commence par calculer le taux de variation de $f$, <br> entre $${n}$ et $${n}+h$ , `,s+="noté $\\tau(h)$, où $h$ est un réel non-nul.<br>",s+=`$\\begin{aligned}\\tau(h) &= \\dfrac{f(${n}+h)-f(${n})}{h}&\\text{Définition du taux de variation}\\\\`,s+=`&= \\dfrac{(${n}+h)^2-(${n})^2}{h}&\\text{Application à la fonction carré.}\\\\`,s+=`&= \\dfrac{${(0,r.PMY)(n)}^2+2\\times${(0,r.PMY)(n)}\\times h+h^2-${(0,r.PMY)(n)}^2}{h}&\\text{Développement de l'identité remarquable.}\\\\`,s+=`&= \\dfrac{${n*n}${(0,r.tPu)(2*n)} h+h^2-${n*n}}{h}&\\text{Simplification au numérateur.}\\\\`,s+=`&= \\dfrac{${2*n} h+h^2}{h}&\\text{Réduction au numérateur.}\\\\`,s+=`&= \\dfrac{h(${2*n}+h)}{h}&\\text{Factorisation  par } h \\text{ au numérateur.}\\\\`,s+=`&=${2*n} +h&\\text{Simplification par} h\\\\`,s+="\\end{aligned}$",s+="<br>On cherche maintenant la limite du taux de variations quand $h$ tend vers $0$.",s+=`<br>$\\lim\\limits_{h \\rightarrow 0} ${2*n} +h=${2*n} $`,s+=`<br>Comme la limite existe, on peut en déduire que $f$ est dérivable en $${n}$ <br>et`,s+=` on peut conclure que $f'(${n})=${2*n} $`;break;case 3:n=(0,r.nSR)(-5,5,[0]),$="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}^{*}$ par $f(x)=\\dfrac{1}{x}$.<br>",$+=`Déterminer la valeur de  $f'(${n})$, en utilisant la définition de cours.`,s=`Pour déterminer $f'(${n})$, `,s+=`on commence par calculer le taux de variation de $f$, <br> entre $${n}$ et $${n}+h$ , `,s+="noté $\\tau(h)$, où $h$ est un réel non-nul.<br>",s+=`$\\begin{aligned}\\tau(h) &= \\dfrac{f(${n}+h)-f(${n})}{h}&\\text{Définition du taux de variation}\\\\`,s+=`&= \\dfrac{\\dfrac{1}{${n}+h}-\\dfrac{1}{${n}}}{h}&\\text{Application à la fonction inverse.}\\\\`,s+=`&= \\dfrac{\\dfrac{${n}}{(${n}+h)\\times ${(0,r.PMY)(n)}}-\\dfrac{${n}+h}{${n}\\times (${n}+h)}}{h}&\\text{Mise au même dénominateur.}\\\\`,s+=`&= \\dfrac{\\dfrac{${n}${(0,r.Zvy)(-n)}-h}{(${n}+h)\\times ${(0,r.PMY)(n)}}}{h}&\\text{Réduction au numérateur.}\\\\`,s+=`&= \\dfrac{-h}{(${n}+h)\\times ${(0,r.PMY)(n)}}\\times \\dfrac{1}{h}&\\text{Diviser par } h, \\text{c'est multiplier par }\\dfrac{1}{h}.\\\\`,s+=`&= \\dfrac{-1}{(${n}+h)\\times ${(0,r.PMY)(n)}}&\\text{Simplification par }h \\\\`,s+="\\end{aligned}$",s+="<br>On cherche maintenant la limite du taux de variations quand $h$ tend vers $0$.",s+=`<br>$\\lim\\limits_{h \\rightarrow 0} \\dfrac{-1}{(${n}+h)\\times ${(0,r.PMY)(n)}}= \\dfrac{-1}{${n*n}} $`,s+=1!==n&&-1!==n?`<br>On peut donc conclure que $f'(${n})=\\dfrac{-1}{${n*n}} $`:`<br>On peut donc conclure que $f'(${n})=-1 $`;break;case 4:n=(0,r.nSR)(1,8),$="Soit $f$ la fonction définie pour tout $x$ de $\\mathbb{R}_{+}$ par $f(x)=\\sqrt{x}$.<br>",$+=`Déterminer la valeur de  $f'(${n})$, en utilisant la définition de cours.`,s=`Pour déterminer $f'(${n})$, `,s+=`on commence par calculer le taux de variation de $f$, <br> entre $${n}$ et $${n}+h$ , `,s+="noté $\\tau(h)$, où $h$ est un réel non-nul.<br>",s+=`$\\begin{aligned}\\tau(h) &= \\dfrac{f(${n}+h)-f(${n})}{h}&\\text{Définition du taux de variation}\\\\`,s+=`&= \\dfrac{\\sqrt{${n}+h}-\\sqrt{${n}}}{h}&\\text{Application à la fonction racine carrée.}\\\\`,s+=`&=\\dfrac{(\\sqrt{${n}+h}-\\sqrt{${n}})(\\sqrt{${n}+h}+\\sqrt{${n}})}{h(\\sqrt{${n}+h}+\\sqrt{${n}})}&\\text{Multiplication par la "quantité conjuguée".}\\\\`,s+=`&=\\dfrac{${n}+h${(0,r.tPu)(-n)}}{h(\\sqrt{${n}+h}+\\sqrt{${n}})}&\\text{Identité remarquable : } (a-b)(a+b)=a^2-b^2\\\\`,s+=`&=\\dfrac{h}{h(\\sqrt{${n}+h}+\\sqrt{${n}})}&\\text{Réduction au numérateur }.\\\\`,s+=`&=\\dfrac{1}{\\sqrt{${n}+h}+\\sqrt{${n}}}&\\text{Simplification de la fraction par } h.\\\\`,s+="\\end{aligned}$",s+="<br>On cherche maintenant la limite du taux de variations quand $h$ tend vers $0$.",s+=`<br>$\\lim\\limits_{h \\rightarrow 0} \\dfrac{1}{\\sqrt{${n}+h}+\\sqrt{${n}}}=\\dfrac{1}{2 \\sqrt{${n}}}$`,1!==n&&4!==n&&(s+=`<br>On peut donc conclure que $f'(${n})=\\dfrac{1}{2 \\sqrt{${n}}}$`),1===n&&(s+=`<br>On peut donc conclure que $f'(${n})=\\dfrac{1}{2} $`),4===n&&(s+=`<br>On peut donc conclure que $f'(${n})=\\dfrac{1}{4} $`)}this.questionJamaisPosee(u,$)&&(this.listeQuestions.push($),this.listeCorrections.push(s),u++),h++}(0,r.K1R)(this)},this.besoinFormulaireNumerique=["Type de fonctions ",5,"1 : Fonction affine 2 : Fonction carré 3: Fonction inverse 4: Fonction racine carrée 5: Méli-mélo"]}},25523:(e,t,i)=>{function n(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...t){0===e&&(this.listeArguments=[]);let i="";for(const n of t)void 0!==n&&(i+=n.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(t),i.d(t,{default:()=>n})}}]);
//# sourceMappingURL=42224.f6fd7c6ac0ed3e305700.js.map