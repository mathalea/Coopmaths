"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[6746,25523],{25523:(e,n,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,...n){0===e&&(this.listeArguments=[]);let t="";for(const s of n)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(n),t.d(n,{default:()=>s})},6746:(e,n,t)=>{t.r(n),t.d(n,{titre:()=>r,interactifReady:()=>o,interactifType:()=>$,default:()=>a});var s=t(25523),i=t(25482);const r="Calculer une distance avec les coordonnées",o=!0,$="mathLive";function a(){s.default.call(this),this.typeExercice="simple",this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){let e,n,t,s;const r=(0,i.wnJ)(2,"PQ");switch((0,i.q$q)(["a","a","b"])){case"a":e=(0,i.nSR)(1,6),n=(0,i.nSR)(1,6,e),t=(0,i.nSR)(1,6),s=(0,i.nSR)(1,6,n),(t-e)**2+(s-n)**2===1||(t-e)**2+(s-n)**2===4||(t-e)**2+(s-n)**2===9||(t-e)**2+(s-n)**2===16||(t-e)**2+(s-n)**2===25||(t-e)**2+(s-n)**2===36?(this.question=`Dans un repère du plan d'orignine $O$, on donne $${r[0]}(${e};${n})$ et $${r[1]}(${t};${s})$.<br>\n        Déterminer la longueur du segment $[${r[0]}${r[1]}]$.<br>\n        (donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant)`,this.optionsChampTexte={texteApres:""},this.correction=`$${r[0]}${r[1]}=\\sqrt{(x_${r[1]}-x_${r[0]})^2+(y_${r[1]}-y_${r[0]})^2}=\n          \\sqrt{(${t}-${(0,i.PMY)(e)})^2+(${s}-${(0,i.PMY)(n)})^2}=\n          \\sqrt{${(t-e)**2}+${(s-n)**2}}=\\sqrt{${(t-e)**2+(s-n)**2}}=\n          ${Math.sqrt((t-e)**2+(s-n)**2)}$<br>`,this.correction+=(0,i.pRK)(` Mentalement : <br>\n          On calcule  $(${t}-${e})^2$ et $(${s}-${n})^2$, ce qui donne $${(t-e)**2}$ et $${(s-n)**2}$. <br>\n          Puis on calcule la somme de ces nombres soit $${(t-e)**2}+${(s-n)**2}=${(t-e)**2+(s-n)**2}$.<br>\n           Enfin, on en prend la racine carrée.<br>\n            Comme $${(t-e)**2+(s-n)**2}$ est un carré parfait, on simplie la racine carrée.\n           `),this.reponse=Math.sqrt((t-e)**2+(s-n)**2)):(this.question=`Dans un repère du plan d'orignine $O$, on donne $${r[0]}(${e};${n})$ et $${r[1]}(${t};${s})$.<br>\n        Déterminer la longueur du segment $[${r[0]}${r[1]}]$.<br>\n        (donner le résultat sous la forme $\\sqrt{a}$ ou d'un nombre entier le cas échéant)`,this.optionsChampTexte={texteApres:""},this.correction=`$${r[0]}${r[1]}=\n          \\sqrt{(x_${r[1]}-x_${r[0]})^2+(y_${r[1]}-y_${r[0]})^2}=\n          \\sqrt{(${t}-${(0,i.PMY)(e)})^2+(${s}-${(0,i.PMY)(n)})^2}=\n          \\sqrt{${(t-e)**2}+${(s-n)**2}}=\\sqrt{${(t-e)**2+(s-n)**2}}$<br>`,this.correction+=(0,i.pRK)(` Mentalement : <br>\n          On calcule  $(${t}-${e})^2$ et $(${s}-${n})^2$, ce qui donne $${(t-e)**2}$ et $${(s-n)**2}$. <br>\n          Puis on calcule la somme de ces nombres soit $${(t-e)**2}+${(s-n)**2}=${(t-e)**2+(s-n)**2}$.<br>\n           Enfin, on en prend la racine carrée.<br>\n            Comme $${(t-e)**2+(s-n)**2}$ n'est pas un carré parfait, on ne simplifie pas (la réponse doit être sous la forme $\\sqrt{a}$ ou d'un entier).\n           `),this.reponse=[`\\sqrt{${(t-e)**2+(s-n)**2}}`,`${Math.sqrt((t-e)**2+(s-n)**2)}`]);break;case"b":e=(0,i.nSR)(-5,5,0),n=(0,i.nSR)(-5,5,0),e**2+n**2===25?(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e};${n})$.<br>\n        Déterminer la longueur du segment $[O${r[0]}]$.<br>\n        (donner le résultat sous la forme $\\sqrt{a}$ ou d'un entier le cas échéant)`,this.optionsChampTexte={texteApres:""},this.correction=`$O${r[0]}=\\sqrt{x_${r[0]}^2+y_${r[0]}^2}=\n          \\sqrt{${(0,i.PMY)(e)}^2+${(0,i.PMY)(n)}^2}\n          =\\sqrt{${e**2}+${n**2}}\n          =\\sqrt{${e**2+n**2}}=${Math.sqrt(e**2+n**2)}$`,this.correction+=(0,i.pRK)(` Mentalement : <br>\n        On calcule  $${(0,i.PMY)(e)}^2$ et $${(0,i.PMY)(n)}^2$, ce qui donne $${e**2}$ et $${n**2}$. <br>\n        Puis on calcule la somme de ces nombres soit $${e**2}+${n**2}=${e**2+n**2}$.<br>\n         Enfin, on en prend la racine carrée.<br>\n          Comme $25$ est pas un carré parfait, on  simplifie.\n         `),this.reponse=Math.sqrt(e**2+n**2)):(this.question=`Dans un repère du plan d'origine $O$, on donne $${r[0]}(${e};${n})$.<br>\n        Déterminer la longueur du segment $[O${r[0]}]$.<br>\n        (donner le résultat sous la forme $\\sqrt{a}$)`,this.optionsChampTexte={texteApres:""},this.correction=`$O${r[0]}=\\sqrt{x_${r[0]}^2+y_${r[0]}^2}\n          =\\sqrt{${(0,i.PMY)(e)}^2+${(0,i.PMY)(n)}^2}\n          =\\sqrt{${e**2}+${n**2}}=\\sqrt{${e**2+n**2}}$<br>`,this.correction+=(0,i.pRK)(` Mentalement : <br>\n        On calcule  $${(0,i.PMY)(e)}^2$ et $${(0,i.PMY)(n)}^2$, ce qui donne $${e**2}$ et $${n**2}$. <br>\n        Puis on calcule la somme de ces nombres soit $${e**2}+${n**2}=${e**2+n**2}$.<br>\n         Enfin, on en prend la racine carrée.<br>\n          Comme $${e**2+n**2}$ n'est pas un carré parfait, on ne simplifie pas (la réponse doit être sous la forme $\\sqrt{a}$ ou d'un entier).\n         `),this.reponse=`\\sqrt{${e**2+n**2}}`)}}}}}]);
//# sourceMappingURL=6746.45c5d106b38c58d95ea1.js.map