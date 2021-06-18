(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[40097,71129],{71129:(i,e,s)=>{"use strict";function t(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulair2eNumerique=!1,this.besoinFormulair2eTexte=!1,this.besoinFormulair2eCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.interactif=!1,this.interactifObligatoire=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.mg32Editable=!1,this.nouvelleVersion=function(i){},this.listePackages=[]}s.r(e),s.d(e,{default:()=>t})},40097:(i,e,s)=>{"use strict";s.r(e),s.d(e,{titre:()=>r,default:()=>o});var t=s(71129),n=(s(62259),s(63861));const a={simplify:s(56864).og},r="Calculs de dérivés";function o(){t.default.call(this),this.titre=r,this.consigne="Pour chacune des fonctions suivantes, dire sur quel ensemble elle est dérivable, puis déterminer l'expression de sa fonction dérivée.",this.nbQuestions=6,this.nbCols=2,this.nbColsCorr=2,this.sup=1,this.typeExercice="XCas";let i=a.simplify.rules.slice();i.splice(i.findIndex((i=>"n1*n2 + n2"==i.l)),1),i.splice(i.findIndex((i=>"n1*n3 + n2*n3"==i.l)),1),this.nouvelleVersion=function(){let i;this.listeQuestions=[],this.listeCorrections=[],this.liste_valeurs=[],1==this.sup&&(i=["ax+b","a","ax2+bx+c","xn","xn+xm","1/x","xn+1/x","1/xn","xn+1/xm","racine(x)"]),2==this.sup&&(i=["ax+b","axn","a/x","a/xn","racine(ax)"]),3==this.sup&&(i=["ax+b","axn","a/x","a/xn","racine(ax)"]);let e=(0,n.SRM)(i,this.nbQuestions);for(let s,t,a,r,o,h,l,b,c,x=0,u=0;x<this.nbQuestions&&u<50;){switch(e[x]){case"a":a=(0,n.nSR)(-10,10,0),b=`${a}`,c="\\mathbb{R}";break;case"ax+b":a=(0,n.nSR)(-10,10,0),r=(0,n.nSR)(-10,10,0),b=`${a}x+${r}`,c="\\mathbb{R}";break;case"ax2+bx+c":a=(0,n.nSR)(-10,10,0),r=(0,n.nSR)(-10,10,0),o=(0,n.nSR)(-10,10,0),b=`${a}*x^2+${r}x+${o}`,c="\\mathbb{R}";break;case"xn":h=(0,n.nSR)(2,10),b=`x^${h}`,c="\\mathbb{R}";break;case"xn+1/x":h=(0,n.nSR)(2,10),b=`x^${h}+1/x`,c="\\mathbb{R}^{\\text{*}}";break;case"xn+1/xm":h=(0,n.nSR)(2,10),l=(0,n.nSR)(2,10,l),b=`x^${h}+1/x^${l}`,c="\\mathbb{R}^{\\text{*}}";break;case"xn+xm":h=(0,n.nSR)(2,10),l=(0,n.nSR)(2,10,l),b=`x^${h}+x^${l}`,c="\\mathbb{R}";break;case"axn":a=(0,n.nSR)(-10,10,[0,1,-1]),h=(0,n.nSR)(2,10),b=`${a}x^${h}`,c="\\mathbb{R}";break;case"1/x":b="1/x",c="\\mathbb{R}^{\\text{*}}";break;case"a/x":a=(0,n.nSR)(-10,10,[0,1]),b=`${a}/x`,c="\\mathbb{R}^{\\text{*}}";break;case"1/xn":h=(0,n.nSR)(2,10),b=`1/x^${h}`,c="\\mathbb{R}^{\\text{*}}";break;case"a/xn":a=(0,n.nSR)(-10,10,[1,0]),h=(0,n.nSR)(2,10),b=`${a}/x^${h}`,c="\\mathbb{R}^{\\text{*}}";break;case"racine(x)":b="sqrt(x)",c="[0,+\\infin[";break;case"racine(ax)":a=(0,n.nSR)(2,10,[4,9]),b=`sqrt(${a}x)`,c="[0,+\\infin["}s=`$${(0,n.ff2)(x+6)}:x\\longmapsto ${(0,n.N7Q)(b)}$`,t=`$${(0,n.ff2)(x+6)}$ est dérivable sur $${c}$ et $ ${(0,n.ff2)(x+6)}':x\\longmapsto ${(0,n.N7Q)(`simplifier(deriver(${b}))`)}$`,-1==this.liste_valeurs.indexOf(b)&&(this.liste_valeurs.push(b),this.listeQuestions.push(s),this.listeCorrections.push(t),x++),u++}(0,n.K1R)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Fonctions de base \n2 : ku"]}}}]);
//# sourceMappingURL=40097.02b464d3fa37c2a7e66d.js.map