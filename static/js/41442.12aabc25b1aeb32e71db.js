"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[41442,25523],{41442:(t,e,i)=>{i.r(e),i.d(e,{amcReady:()=>r,amcType:()=>a,interactifReady:()=>u,interactifType:()=>h,titre:()=>l,default:()=>$});var s=i(25523),o=i(25482),n=i(11945);const r=!0,a="qcmMono",u=!0,h="qcm",l="Multiplier par 0,1 ; 0,01 ; 0,001 (compléter avec le nombre qui convient)";function $(){s.default.call(this),this.nbQuestions=4,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.pasDeVersionLatex=!1,this.pas_de_version_HMTL=!1,this.consigne="Compléter les pointillés.",this.sup=!1,this.sup2=4,this.nouvelleVersion=function(){let t;this.sup2=parseInt(this.sup2),this.listeQuestions=[],this.listeCorrections=[],this.autoCorrection=[],t=4===parseInt(this.sup2)?[1,2,3]:[parseInt(this.sup2)];const e=(0,o.SRM)(t,this.nbQuestions),i=["millièmes","centièmes","dixièmes"];for(let s,r,a,u,h,l,$,c=0,b=0;c<this.nbQuestions&&b<50;){switch(s="",r="",a=-(0,o.nSR)(1,3),$=this.sup?0:-(0,o.nSR)(1,3),h=(0,o.n0o)((0,o.nSR)(10,1e3)+(0,o.nSR)(10,999)*(0,o.q$q)([0,1e3])),u=(0,o.n0o)(h*10**$),l=(0,o.n0o)(u*10**a),e[c]){case 1:s=`$${(0,o.Pbm)(u)} \\times ${(0,o.Pbm)((0,o.n0o)(10**a))}${(0,o.sp)(2)}=${(0,o.sp)(2)}\\ldots\\ldots\\ldots\\ldots$`,r=`Quand on multiplie par $${(0,o.Pbm)((0,o.n0o)(10**a))}=${(0,o.qaf)(1,(0,o.n0o)(10**-a))}$, chaque chiffre prend une valeur $${(0,o.Pbm)((0,o.n0o)(10**-a))}$ fois plus petite.<br>`,r+=`Le chiffre des unités se positionne donc dans les ${i[3+a]} :<br>`,r+=`$${(0,o.Pbm)(u)} \\times ${(0,o.Pbm)((0,o.n0o)(10**a))}${(0,o.sp)(2)}=${(0,o.sp)(2)}${(0,o.b1)((0,o.Pbm)(l),"blue")}$`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${s}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.Pbm)(l)}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(u*10**-a))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(u*10**(a-1)))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(u*10**(1-a)))}$`,statut:!1}],this.autoCorrection[c].options={ordered:!1,lastChoice:5};break;case 2:s=`$${(0,o.Pbm)(u)} \\times \\ldots\\ldots\\ldots${(0,o.sp)(2)}=${(0,o.sp)(2)}${(0,o.Pbm)(l)}$`,r=`Quand on multiplie par $${(0,o.Pbm)(10**a)}=${(0,o.qaf)(1,10**-a)}$, chaque chiffre prend une valeur $${(0,o.Pbm)(10**-a)}$ fois plus petite.<br>`,r+=`Le chiffre des unités se positionne donc dans les ${i[3+a]} :<br>`,r+=`$${(0,o.Pbm)(u)} \\times ${(0,o.b1)((0,o.Pbm)(10**a),"blue")}${(0,o.sp)(2)}=${(0,o.sp)(2)}${(0,o.Pbm)(l)}$`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${s}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.Pbm)((0,o.n0o)(10**a))}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(10**(a-1)))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(10**(a-1)))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(10**-a))}$`,statut:!1}],this.autoCorrection[c].options={ordered:!1,lastChoice:5};break;case 3:s=`$\\ldots\\ldots\\ldots\\ldots \\times ${(0,o.Pbm)(10**a)}${(0,o.sp)(2)}=${(0,o.sp)(2)}${(0,o.Pbm)(l)}$`,r=`Quand on multiplie par $${(0,o.Pbm)(10**a)}=${(0,o.qaf)(1,10**-a)}$, chaque chiffre prend une valeur $${(0,o.Pbm)(10**-a)}$ fois plus petite.<br>`,r+=`Le chiffre des unités se positionne donc dans les ${i[3+a]} :<br>`,r+=`$${(0,o.b1)((0,o.Pbm)(u),"blue")} \\times ${(0,o.Pbm)(10**a)}${(0,o.sp)(2)}=${(0,o.sp)(2)}${(0,o.Pbm)(l)}$`,this.autoCorrection[c]={},this.autoCorrection[c].enonce=`${s}\n`,this.autoCorrection[c].propositions=[{texte:`$${(0,o.Pbm)(u)}$`,statut:!0},{texte:`$${(0,o.Pbm)((0,o.n0o)(u/10))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(10*u))}$`,statut:!1},{texte:`$${(0,o.Pbm)((0,o.n0o)(u*10**(1-a)))}$`,statut:!1}],this.autoCorrection[c].options={ordered:!1,lastChoice:5}}this.interactif&&(s+="<br>"+(0,n.l3)(this,c).texte),-1===this.listeQuestions.indexOf(s)&&(this.listeQuestions.push(s),this.listeCorrections.push(r),c++),b++}(0,o.K1R)(this)},this.besoinFormulaireCaseACocher=["Nombres entiers",!0],this.besoinFormulaire2Numerique=["Type de questions",4," 1 : Résultat à calculer\n 2 : Nombre à retrouver\n 3 : Fraction décimale à retrouver\n 4 : Mélange"]}},25523:(t,e,i)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=1,this.nbQuestions=10,this.pointsParQuestions=1,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.correctionIsCachee=!1,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.besoinFormulaire4Numerique=!1,this.besoinFormulaire4Texte=!1,this.besoinFormulaire4CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(t){},this.questionJamaisPosee=function(t,...e){0===t&&(this.listeArguments=[]);let i="";for(const s of e)void 0!==s&&(i+=s.toString());return!(this.listeArguments.indexOf(i)>-1)&&(this.listeArguments.push(i),!0)}}i.r(e),i.d(e,{default:()=>s})}}]);
//# sourceMappingURL=41442.12aabc25b1aeb32e71db.js.map