(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[89529,71129],{89529:(e,t,i)=>{"use strict";i.r(t),i.d(t,{titre:()=>a,default:()=>o});var s=i(71129),r=(i(62259),i(63861));const a="Probabilités simples";function o(){s.default.call(this),this.titre="Probabilités simples",this.consigne="",this.nbQuestionsModifiable=!1,this.nbCols=2,this.nbColsCorr=1,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const e=(0,r.nSR)(20,60),t=(0,r.nSR)(10,100-e-10),i=(0,r.q$q)(["hand-ball","football","rugby","basket","volley-ball","water-polo","baseball"]);this.consigne=`Lors d'un match de ${i}, l'équipe qui reçoit un adversaire a une probabilité de ${(0,r.k$K)(e/100)} de gagner son match`,this.consigne+=` et ${(0,r.k$K)(t/100)} de faire un match nul.`;let s="Ne pas perdre un match, c'est, soit le gagner, soit faire un match nul, la probabilité est donc : <br> <br>";s+='$\\text{P("Ne pas perdre le match")} = \\text{P("Gagner le match") + } \\text{P("Match nul")}$ <br>',s+=`$\\phantom{\\text{P("Ne pas perdre le match")}} = ${(0,r.k$K)(e/100)} + ${(0,r.k$K)(t/100)}$ <br> `,s+=`$\\phantom{\\text{P("Ne pas perdre le match")}}= ${(0,r.k$K)((e+t)/100)}$  <br>`;let a='L\'évènement "Perdre le match" est l\'évènement contraire de "Ne pas perdre le match", on peut donc affirmer que : <br> <br>';a+='$ \\text{P("Perdre le match") + } \\text{P("Ne pas perdre le match")} = 1$ <br>',a+='$ \\phantom{\\text{P("Ne pas perdre le match") + }} \\text{P("Perdre le match")} = 1 - \\text{P("Ne pas perdre le match")}$ <br>',a+=`$ \\phantom{\\text{P("Ne pas perdre le match") + }} \\text{P("Perdre le match")} = 1 - ${(0,r.k$K)((e+t)/100)}$  <br>`,a+=`$ \\phantom{\\text{P("Ne pas perdre le match") + }} \\text{P("Perdre le match")} = ${(0,r.k$K)(1-(e+t)/100)}$ <br>`,this.listeQuestions.push("Quelle est la probabilité, pour cette équipe, de ne pas perdre le match ?","Quelle est la probabilité, pour cette équipe, de perdre le match ?"),this.listeCorrections.push(s,a),(0,r.K1R)(this)}}},71129:(e,t,i)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(e){},this.listePackages=[]}i.r(t),i.d(t,{default:()=>s})}}]);
//# sourceMappingURL=89529.04e02d27abda9aaa8caa.js.map