(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[1831,6969],{51831:(s,i,e)=>{"use strict";e.r(i),e.d(i,{titre:()=>o,default:()=>a});var t=e(66969),n=e(55339),r=e(5266);const o="Traduire des phrases en calculs et réciproquement";function a(){t.default.call(this),this.titre=o,this.consigne="",this.nbQuestions=5,this.nbCols=2,this.nbColsCorr=2,this.sup=4,this.sup2=!1,this.nouvelleVersion=function(){let s,i,e,t,o,a;a=this.sup<4?[parseInt(this.sup)]:[1,2,3];let l=(0,n.SRM)(a,this.nbQuestions);this.listeQuestions=[],this.listeCorrections=[],s=this.sup2?10**(0,n.nSR)(1,2):1;for(let u,h,c=0,b=0;c<this.nbQuestions&&b<50;){switch(o=(0,r.default)(1,s),i=o[0],e=o[1],t=o[2],u="",h="",l[c]){case 1:u+=(0,n.bk1)(c)+"Traduire la phrase par un calcul (il n’est pas demandé d’effectuer ce calcul) : ",i="l"+i.substring(1),u+=`${i}.`,h+=(0,n.bk1)(c)+`${i} s'écrit ${e}.`;break;case 2:e.indexOf("ou")>0&&(e=e.substring(0,e.indexOf("ou"))),u+=(0,n.bk1)(c)+"Traduire le calcul par une phrase en français : ",u+=`${e}`,i="l"+i.substring(1),h+=(0,n.bk1)(c)+`${e} est ${i}.`;break;case 3:u+=(0,n.bk1)(c)+"Traduire la phrase par un calcul et effectuer ce calcul : ",i="l"+i.substring(1),u+=`${i}.`,i="L"+i.substring(1),h+=(0,n.bk1)(c)+`${i} s'écrit ${e}.<br>`,h+=`${t}.`}-1==this.listeQuestions.indexOf(u)&&(this.listeQuestions.push(u),this.listeCorrections.push(h),c++),b++}(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Type de questions",4,"1 : Phrase -> Calcul\n 2 : Calcul -> Phrase\n 3 : Phrase -> Calcul + résultat\n 4 : Mélange"],this.besoinFormulaire2CaseACocher=["Décimaux",!1]}},66969:(s,i,e)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(s){},this.listePackages=[]}e.r(i),e.d(i,{default:()=>t})}}]);
//# sourceMappingURL=1831.cfd9acece14c7d6c1865.js.map