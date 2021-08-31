"use strict";(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[78978,17007],{17007:(e,_,t)=>{function s(){this.titre="",this.boutonAide=!1,this.consigne="",this.consigneCorrection="",this.introduction="",this.listeQuestions=[],this.listeCorrections=[],this.contenu="",this.contenuCorrection="",this.autoCorrection=[],this.tableauSolutionsDuQcm=[],this.spacing=1,this.spacingCorr=1,this.pasDeVersionLatex=!1,this.listePackages=[],this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbCols=1,this.nbColsCorr=1,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.beamer=!1,this.tailleDiaporama=50,this.nbQuestions=10,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.interactif=!1,this.interactifObligatoire=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.besoinFormulaire2Numerique=!1,this.besoinFormulaire2Texte=!1,this.besoinFormulaire2CaseACocher=!1,this.besoinFormulaire3Numerique=!1,this.besoinFormulaire3Texte=!1,this.besoinFormulaire3CaseACocher=!1,this.mg32Editable=!1,this.listeArguments=[],this.nouvelleVersion=function(e){},this.questionJamaisPosee=function(e,..._){0===e&&(this.listeArguments=[]);let t="";for(const s of _)void 0!==s&&(t+=s.toString());return!(this.listeArguments.indexOf(t)>-1)&&(this.listeArguments.push(t),!0)}}t.r(_),t.d(_,{default:()=>s})},78978:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{titre:()=>titre,default:()=>equationDuSecondDegreAvecUnParametre});var _modules_outils_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(30169),_Exercice_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(17007),_modules_context_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(66170);const titre="Equation du second degré avec paramètre";function equationDuSecondDegreAvecUnParametre(){_Exercice_js__WEBPACK_IMPORTED_MODULE_2__.default.call(this),this.consigne="Discutez, suivant la valeur du paramètre $m$, le $\\underline{\\text{nombre de solutions}}$ de l'équation du second degré",this.nbQuestions=2,this.nbCols=1,this.nbColsCorr=1,this.sup=1,this.tailleDiaporama=100,this.video="",this.typeExercice="XCas",_modules_context_js__WEBPACK_IMPORTED_MODULE_1__.Do.isHtml?this.spacingCorr=2:this.spacingCorr=1,this.nouvelleVersion=function(){this.listeQuestions=[],this.listeCorrections=[];const typesDeQuestionsDisponibles=["type1"],listeTypeDeQuestions=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.SRM)(typesDeQuestionsDisponibles,this.nbQuestions);for(let i=0,texte,etape,texteCorr,a,a2,b2,c2,f,cpt=0;i<this.nbQuestions&&cpt<50;)a=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.nSR)(-5,5,0),etape=[`a:=${a}`,"b:=randint(-2,2)*m+randint(-3,3)","c:=randint(-2,2)*m+randint(-3,3)","P:= a*x^2+b*x+c","D:=b^2-4*a*c","a2:=coeff(D,m,2)","b2:=coeff(D,m,1)","c2:=coeff(D,m,0)","d2:=simplify(b2^2-4*a2*c2)"].forEach((e=>`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)(e)}`)),texte=`$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("expand(P)")}=0$`,texteCorr="Ecrivons l'équation sous la forme $ax^2+bx+c=0$ :",texteCorr+=`<br>$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("P")}=0$`,texteCorr+=`<br>On a donc $a=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("a")}$, $b=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("b")}$ et $c=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("c")}$`,texteCorr+=`<br>Le discriminant vaut $\\Delta=b^2-4\\times a\\times c = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("D")}$`,texteCorr+=`<br>Ou encore, sous forme développée : $\\Delta = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("simplify(D)")}$`,a2=+`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("a2")}`,b2=+`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("b2")}`,0==a2?(etape=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1:=simplify(-c2/b2)")}`,b2>0?(texteCorr+=`<br>Cherchons la valeur de $m$ qui annule cette expression du premier degré : $m=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$`,texteCorr+=`<br>$\\Delta$ est une droite croissante de coefficient directeur $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("b2")}$.`,texteCorr+="<br>$\\underline{\\text{Conclusion}}$ :",texteCorr+=`<br>- Si $m < ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation n'a pas de solution réelle;`,texteCorr+=`<br>- Si $m = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation a une unique solution réelle;`,texteCorr+=`<br>- Si $m > ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation a 2 solutions réelles;`):b2<0?(texteCorr+=`<br>Cherchons la valeur de $m$ qui annule cette expression du premier degré : $m=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$`,texteCorr+=`<br>$\\Delta$ est une droite décroissante de coefficient directeur $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("b2")}$.`,texteCorr+="<br>$\\underline{\\text{Conclusion}}$ :",texteCorr+=`<br>- Si $m < ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation a 2 solutions réelles;`,texteCorr+=`<br>- Si $m = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation a une unique solution réelle;`,texteCorr+=`<br>- Si $m > ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$, l'équation n'a pas de solution réelle;`):(c2=+`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("c2")}`,texteCorr+=0==c2?"<br>Quelque soit $m$ réel, on a $\\Delta$ qui est nul. L'équation du départ admet donc toujours une unique solution.":c2>0?"<br>Quelque soit $m$ réel, on a $\\Delta$ qui est strictement positif. L'équation du départ admet donc toujours 2 solutions.":"<br>Quelque soit $m$ réel, on a $\\Delta$ qui est strictement négatif. L'équation du départ admet jamais de solution réelle.")):(texteCorr+="<br>Cherchons les valeurs de $m$ qui annulent cette expression du second degré :",texteCorr+=`<br>Le discriminant $\\Delta^\\prime$ vaut : $\\Delta^\\prime =${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("d2")}$`,a=+`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("d2")}`,f=eval(`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("ifactors(d2)")}`).some(((e,_)=>e>1&&_%2==1)),f&&a>0&&(texteCorr+=` (Remarquons que $\\sqrt{\\Delta^\\prime} =${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("simplify(sqrt(d2))")}$)`),a<0?(texteCorr+="<br>Celui-ci étant strictement négatif, l'équation n'a pas de solution et $\\Delta$ ne change pas de signe.",a2>0?(texteCorr+="<br>Comme le coefficient devant $m^2$ est positif, $\\Delta > 0$.",texteCorr+="<br>$\\underline{\\text{Conclusion}}$ : L'équation du départ admet toujours 2 solutions."):(texteCorr+="<br>Comme le coefficient devant $m^2$ est négatif, $\\Delta < 0$.",texteCorr+="<br>$\\underline{\\text{Conclusion}}$ : L'équation du départ n'a pas de solution réelle.")):0==a?(etape=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1:=simplify(-b2/(2*a2))")}`,texteCorr+=`<br>Celui-ci étant nul, l'équation $\\Delta = 0$ a une unique solution $m=\\dfrac{-b}{2a}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$.`,a2>0?(texteCorr+=`<br>De plus le coefficient $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("a2")}$ devant $m^2$ étant positif, $\\Delta > 0$ si $m\\neq${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$.`,texteCorr+=`<br>$\\underline{\\text{Conclusion}}$ : Si $m=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$ l'équation admet une unique solution, sinon l'équation admet 2 solutions.`):(texteCorr+=`<br>De plus le coefficient $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("a2")}$ devant $m^2$ étant négatif, $\\Delta < 0$ si $m\\neq${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$.`,texteCorr+=`<br>$\\underline{\\text{Conclusion}}$ : Si $m=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}$ l'équation admet une unique solution, sinon l'équation n'admet pas de solution.`)):(etape=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1:=min((-b2-sqrt(d2))/(2*a2),(-b2+sqrt(d2))/(2*a2))")}`,etape=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m2:=max((-b2-sqrt(d2))/(2*a2),(-b2+sqrt(d2))/(2*a2))")}`,texteCorr+="<br>Celui-ci étant strictement positif, l'équation $\\Delta = 0$ a 2 solutions :",texteCorr+=`<br>$m_1=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m1")}\\simeq${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("approx(m1,4)")}$ et $m_2=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("m2")}\\simeq${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.N7Q)("approx(m2,4)")}$`,a2>0?(texteCorr+="<br>De plus le coefficient devant $m^2$ est positif, $\\Delta$ est donc une parabole avec ses branches dirigées vers le haut.",texteCorr+="<br>$\\underline{\\text{Conclusion}}$ :<br> - Si $m=m_1$ ou $m_2$, l'équation admet une unique solution,",texteCorr+="<br>- Si $m\\in ]m_1,m_2[$, l'équation n'a pas de solution réelle,",texteCorr+="<br>- Si $m\\in ]-\\infty,m_1[\\cup]m_2,+\\infty[$, l'équation admet 2 solutions réelles"):(texteCorr+="<br>De plus le coefficient devant $m^2$ est négatif, $\\Delta$ est donc une parabole avec ses branches dirigées vers le bas.",texteCorr+="<br>$\\underline{\\text{Conclusion}}$ :<br> - Si $m=m_1$ ou $m_2$, l'équation admet une unique solution,",texteCorr+="<br>- Si $m\\in ]m_1,m_2[$, l'équation admet 2 solutions réelles,",texteCorr+="<br>- Si $m\\in ]-\\infty,m_1[\\cup]m_2,+\\infty[$, l'équation admet n'a pas de solution réelle"))),-1===this.listeQuestions.indexOf(texte)&&(this.listeQuestions.push(texte),this.listeCorrections.push(texteCorr),i++),cpt++;(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.K1R)(this)}}}}]);
//# sourceMappingURL=78978.0e29c923d7cbc67926c6.js.map