"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[97485,25523],{25523:(i,t,e)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(i){},this.questionJamaisPosee=function(i,...t){0===i&&(this.listeArguments=[]);let e="";for(const s of t)void 0!==s&&(e+=s.toString());return!(this.listeArguments.indexOf(e)>-1)&&(this.listeArguments.push(e),!0)}}e.r(t),e.d(t,{default:()=>s})},97485:(i,t,e)=>{e.r(t),e.d(t,{titre:()=>r,interactifReady:()=>$,interactifType:()=>l,dateDePublication:()=>u,default:()=>c});var s=e(25523),n=e(25482),a=e(71250),o=e(11945);const r="Dresser le tableau de signes d’une fonction affine",$=!0,l="qcm",u="15/12/2021";function c(){s.default.call(this),this.nbQuestions=1,this.tailleDiaporama=1,this.spacing=2,this.nouvelleVersion=function(){let i,t,e,s,r;this.listeQuestions=[],this.listeCorrections=[],0===e&&0===s&&(e=1),this.interactif?(e=(0,n.nSR)(1,6)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(1,6)*(0,n.q$q)([-1,1]),i=`Quel est le tableau de signes de la fonction $f$ définie sur  $\\mathbb R$ par $f(x)=${(0,n.y$x)(e,s)}$ ? `,this.autoCorrection[0]=e>0?{enonce:i,options:{vertical:!0},propositions:[{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(-s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"-",20,"z",20,"+"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!0},{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"-",20,"z",20,"+"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!1},{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(-s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"+",20,"z",20,"-"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!1}]}:{enonce:i,options:{vertical:!0},propositions:[{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(-s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"+",20,"z",20,"-"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!0},{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"+",20,"z",20,"-"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!1},{texte:(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(-s,e)}$`,20,"$+\\infty$",30]],tabLines:[["Line",30,"",0,"-",20,"z",20,"+"]],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),statut:!1}]},i+=(0,o.l3)(this,0).texte):(e=(0,n.nSR)(1,6)*(0,n.q$q)([-1,1]),s=(0,n.nSR)(0,6)*(0,n.q$q)([-1,1]),i=`Dresser le tableau de signes de la fonction $f$ définie sur  $\\mathbb R$ par $f(x)=${(0,n.y$x)(e,s)}$ `),t=`$f$ est une fonction affine. Elle s’annule en $x_0=${(0,n.xau)(-s,e)}$. `,e>0?(t+=`<br>Comme $${e}>0~$, $~f(x)$ est positif pour $~x>${(0,n.xau)(-s,e)} ~$ et négatif pour $~x<${(0,n.xau)(-s,e)} $<br>`,r=["Line",30,"",0,"-",20,"z",20,"+"]):(t+=`<br>Comme $${e}<0$,  $f(x)~$ est négatif pour $~x>${(0,n.xau)(-s,e)} ~$ et positif pour $~x<${(0,n.xau)(-s,e)} $<br>`,r=["Line",30,"",0,"+",20,"z",20,"-"]),t+=(0,a.iR9)({xmin:-.5,ymin:-6.1,xmax:30,ymax:.1},(0,a.c4y)({tabInit:[[["$x$",2,30],["$f(x)$",2,50]],["$-\\infty$",30,`$${(0,n.xau)(-s,e)}$`,20,"$+\\infty$",30]],tabLines:[r],colorBackground:"",espcl:3.5,deltacl:.8,lgt:5,hauteurLignes:[15,15]})),this.listeQuestions.push(i),this.listeCorrections.push(t),(0,n.K1R)(this)}}}}]);
//# sourceMappingURL=97485.a5eacb5f402553fa1bb7.js.map