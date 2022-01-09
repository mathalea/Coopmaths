"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[12528,25523],{25523:(i,e,s)=>{function t(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...e){0===i&&(this.listeArguments=[]);let s="";for(const t of e)void 0!==t&&(s+=t.toString());return!(this.listeArguments.indexOf(s)>-1)&&(this.listeArguments.push(s),!0)}}s.r(e),s.d(e,{default:()=>t})},12528:(i,e,s)=>{s.r(e),s.d(e,{titre:()=>r,interactifReady:()=>a,interactifType:()=>l,default:()=>u});var t=s(25523),n=s(25482),o=s(11945);const r="Calculer les coordonnées du point d’intersection entre l’axe des ordonnées/droite",a=!0,l="mathLive";function u(){t.default.call(this),this.nbQuestions=1,this.formatChampTexte="largeur15 inline",this.nouvelleVersion=function(){const i=(0,n.nSR)(-10,10,0),e=(0,n.nSR)(1,10),s=(0,n.nSR)(-5,5,0)*e;s>0?(this.listeQuestions=[` Les coordonnées du point d'intersection entre la droite d'équation $${(0,n.wO4)(i)}x+${(0,n.wO4)(e)}y+${s}=0$ et l'axe des ordonnées sont  : \n      ${(0,n.$2y)(`$\\Bigg($ ${this.interactif?(0,o.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(5)} ;\n      ${this.interactif?(0,o.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(5)} $\\Bigg)$`)}`],this.listeCorrections=[`Puisque le point d'intersection se situe sur l'axe des ordonnées, son abscisse est nulle ($x=0$).\n      <br>\n    Son ordonnée est donc la solution de l'équation :  $${(0,n.wO4)(e)}y+${s}=0$, c'est-à-dire $y=${(0,n.xau)(-s,e)}$.\n    <br>Les coordonnées de ce   point sont donc : $(${(0,n.xau)(-s,e)};0)$.`]):(this.listeQuestions=[` Les coordonnées du point d'intersection entre la droite d'équation $${(0,n.wO4)(i)}x+${(0,n.wO4)(e)}y${s}=0$ et l'axe des ordonnées sont  : ${(0,n.$2y)(`$\\Bigg($ ${this.interactif?(0,o.G5)(this,0,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(5)} ;\n      ${this.interactif?(0,o.G5)(this,1,"largeur10 inline")+(0,n.sp)(2):(0,n.sp)(5)} $\\Bigg)$`)}`],this.listeCorrections=[`Puisque le point d'intersection se situe sur l'axe des ordonnées, son abscisse est nulle ($x=0$).\n      <br>\n    Son ordonnée est donc la solution de l'équation : $${(0,n.wO4)(e)}y${s}=0$, c'est-à-dire $y=${(0,n.xau)(-s,e)}$.\n    <br>Les coordonnées de ce   point sont donc : $(0;${(0,n.xau)(-s,e)})$.`]),(0,o.Iq)(this,0,0),(0,o.Iq)(this,1,-s/e),(0,n.FRy)(this)}}}}]);
//# sourceMappingURL=12528.3dacfe44329552cc0845.js.map