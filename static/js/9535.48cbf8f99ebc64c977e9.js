(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[9535,2006],{2006:(i,e,t)=>{"use strict";function s(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}t.r(e),t.d(e,{default:()=>s})},69535:(i,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>n,default:()=>r});var s=t(2006),o=t(91030);const n="Déterminer le coefficient directeur d'une droite.";function r(){s.default.call(this),this.titre=n,this.consigne="Déterminer, s'il existe et en l'expliquant, le coefficient directeur de la droite $\\bm{(AB)}$,",this.nbQuestions=3,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.tailleDiaporama=100,this.video="",this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const i=(0,o.SRM)(["Droite oblique","Droite oblique","Droite oblique","Droite oblique","Droite verticale"],this.nbQuestions);for(let e,t,s,n,r,l,a,c,h=0,u=0;h<this.nbQuestions&&u<50;){switch(i[h]){case"Droite oblique":t=(0,o.nSR)(-5,5),s=(0,o.nSR)(-5,5),n=(0,o.nSR)(-5,5,t),r=(0,o.nSR)(-5,5),l=r-s,a=n-t,e=`avec $A(${t};${s})$ et $B(${n};${r})$. `,c="On observe que $ x_B\\neq x_A$.",c+="<br>La droite $(AB)$ n'est donc pas verticale.",c+="<br>On peut donc calculer le coefficient directeur de la droite.",c+="<br>On sait d'après le cours : $m=\\dfrac{y_B-y_A}{x_B-x_A}$.",c+=`<br>On applique avec les données de l'énoncé : $m=\\dfrac{${r}-${(0,o.PMY)(s)}}{${n}-${(0,o.PMY)(t)}}=${(0,o.qaf)(l,a)}`,(1!==(0,o.Md9)(l,a)||1===a||a<0)&&0!==l&&(c+=`=${(0,o.xau)(l,a)}`),c+="$";break;case"Droite verticale":t=(0,o.nSR)(-5,5),s=(0,o.nSR)(-5,5),n=t,r=(0,o.nSR)(-5,5),l=r-s,a=n-t,e=`Avec $A(${t};${s})$ et $B(${n};${r})$. `,c="On observe que $ x_B = x_A$.",c+="<br>La droite $(AB)$ est donc verticale.",c+="<br>Elle n'admet donc pas de coefficient directeur."}-1===this.listeQuestions.indexOf(e)&&(this.listeQuestions.push(e),this.listeCorrections.push(c),h++),u++}(0,o.K1R)(this)}}}}]);
//# sourceMappingURL=9535.48cbf8f99ebc64c977e9.js.map