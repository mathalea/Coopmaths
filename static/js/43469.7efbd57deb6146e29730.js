"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[43469,25523],{43469:(t,e,i)=>{i.r(e),i.d(e,{amcReady:()=>r,amcType:()=>a,interactifReady:()=>u,interactifType:()=>h,titre:()=>$,default:()=>c});var s=i(25523),o=i(25482),n=i(11945);const r=!0,a="qcmMono",u=!0,h="qcm",$="Effectuer des opérations avec les nombres décimaux";function c(){s.default.call(this),this.titre=$,this.interactifObligatoire=!0,this.consigne="Trouver la réponse exacte du calcul parmi les réponses proposées.",this.nbQuestions=4,this.video="",this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const t=(0,o.SRM)(["add","mul","add_deci","mul_deci"],this.nbQuestions);for(let e,i,s=0,r=0;s<this.nbQuestions&&r<50;){e="",i="";let a=0,u=0;switch(t[s]){case"add":a=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),u=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),e+=`Calcul : $${a} + ${u}$.`,i+=`$${a} + ${u}=${(0,o.Pbm)((0,o.n0o)(a+u))}$`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${e}\n`,this.autoCorrection[s].propositions=[{texte:`$${(0,o.Pbm)((0,o.n0o)(a+u))}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(a*u))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)((a+u)/10))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(10*(a+u)))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(a+u+1))}$`,statut:!1}],this.autoCorrection[s].options={ordered:!1,lastChoice:5};break;case"mul":a=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),u=10*(0,o.nSR)(1,9)+(0,o.nSR)(1,9),e+=`Calcul : $${a} \\times ${u}$.`,i+=`$${a} \\times ${u}=${(0,o.Pbm)((0,o.n0o)(a*u))}$`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${e}\n`,this.autoCorrection[s].propositions=[{texte:`$${(0,o.Pbm)(a*u)}$`,statut:!0},{texte:`$${(0,o.Pbm)(10*a*u)}$`,statut:!1},{texte:`$${(0,o.Pbm)(a*u/10)}$`,statut:!1},{texte:`$${(0,o.Pbm)(a+u)}$`,statut:!1},{texte:`$${(0,o.Pbm)(a*u+1)}$`,statut:!1}],this.autoCorrection[s].options={ordered:!1,lastChoice:5};break;case"add_deci":a=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(0,9,[3,4,5,6,7])+10*(0,o.nSR)(0,9)+(0,o.nSR)(0,9),u=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(0,9,[3,4,5,6,7])+10*(0,o.nSR)(0,9)+(0,o.nSR)(0,9),e+=`Calcul : $${(0,o.Pbm)(a/100)} + ${(0,o.Pbm)(u/100)}$.`,i+=` $${(0,o.Pbm)(a/100)} + ${(0,o.Pbm)(u/100)}=${(0,o.Pbm)((0,o.n0o)(a/100+u/100))}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${e}\n`,this.autoCorrection[s].propositions=[{texte:`$${(0,o.Pbm)((0,o.n0o)((a+u)/100))}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(a*u/100))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)((a+u)/1e3))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(10*(a+u)/100))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)((a+u+1)/100))}$`,statut:!1}],this.autoCorrection[s].options={ordered:!1,lastChoice:5};break;case"mul_deci":a=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(1,9,[3,4,5,6,7])+10*(0,o.nSR)(1,9)+(0,o.nSR)(0,9,[2,5]),u=1e3*(0,o.nSR)(1,9)+100*(0,o.nSR)(1,9,[3,4,5,6,7])+10*(0,o.nSR)(1,9)+(0,o.nSR)(0,9),e+=`Calcul : $${(0,o.Pbm)(a/100)} \\times ${(0,o.Pbm)(u/100)}$.`,i+=`$${(0,o.Pbm)(a/100)} \\times ${(0,o.Pbm)(u/100)}=${(0,o.Pbm)((0,o.n0o)(a*u/1e4))}$.`,this.autoCorrection[s]={},this.autoCorrection[s].enonce=`${e}\n`,this.autoCorrection[s].propositions=[{texte:`$${(0,o.Pbm)((0,o.n0o)(a*u/1e4))}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(10*a*u/1e4))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(a*u/1e5))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)((a+u)/100))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)((a*u+1)/1e4))}$`,statut:!1}],this.autoCorrection[s].options={ordered:!1,lastChoice:5}}this.interactif&&(e+="<br>"+(0,n.l3)(this,s).texte),-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(i),s++),r++}(0,o.K1R)(this)}}},25523:(t,e,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let i="";for(const s of e)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=43469.7efbd57deb6146e29730.js.map