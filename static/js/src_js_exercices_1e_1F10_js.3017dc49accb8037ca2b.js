/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_1e_1F10_js"],{

/***/ "./src/js/exercices/1e/1F10.js":
/*!*************************************!*\
  !*** ./src/js/exercices/1e/1F10.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ CalculsDeDerives)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/.pnpm/mathjs@9.3.2/node_modules/mathjs/lib/esm/entry/impureFunctionsAny.generated.js\");\n\n\n\nconst math = { simplify: mathjs__WEBPACK_IMPORTED_MODULE_2__.simplify, parse: mathjs__WEBPACK_IMPORTED_MODULE_2__.parse, derivative: mathjs__WEBPACK_IMPORTED_MODULE_2__.derivative}\nconst titre = 'Calculs de dérivés'\n\n/**\n * Calculs de dérivés\n * @Auteur Rémi Angot\n * Référence 1F10\n*/\nfunction CalculsDeDerives() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"Pour chacune des fonctions suivantes, dire sur quel ensemble elle est dérivable, puis déterminer l'expression de sa fonction dérivée.\";\n  this.nb_questions = 6;\n  this.nb_cols = 2; // Nombre de colonnes pour la sortie LaTeX\n  this.nb_cols_corr = 2; // Nombre de colonnes dans la correction pour la sortie LaTeX\n  this.sup = 1;\n  // On modifie les règles de simplifications par défaut de math.js pour éviter 10x+10 = 10(x+1) et -4x=(-4x)\n  let reglesDeSimplifications = math.simplify.rules.slice();\n  reglesDeSimplifications.splice(reglesDeSimplifications.findIndex(rule => rule.l == \"n1*n2 + n2\"), 1);\n  reglesDeSimplifications.splice(reglesDeSimplifications.findIndex(rule => rule.l == \"n1*n3 + n2*n3\"), 1);\n  //    reglesDeSimplifications.push({l:\"-(n1*v^2)\",r:\"-n1*v^2\"})     \n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    this.liste_valeurs = []; // Les questions sont différentes du fait du nom de la fonction, donc on stocke les valeurs\n\n    let liste_type_de_questions_disponibles;\n    if (this.sup == 1) {\n      liste_type_de_questions_disponibles = ['ax+b', 'a', 'ax2+bx+c', 'xn', 'xn+xm', '1/x', 'xn+1/x', '1/xn', 'xn+1/xm', 'racine(x)'];\n    }\n    if (this.sup == 2) {\n      liste_type_de_questions_disponibles = ['ax+b', 'axn', 'a/x', 'a/xn', 'racine(ax)'];\n    }\n    if (this.sup == 3) {\n      liste_type_de_questions_disponibles = ['ax+b', 'axn', 'a/x', 'a/xn', 'racine(ax)'];\n    }\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(liste_type_de_questions_disponibles, this.nb_questions);\n\n\n    for (let i = 0, texte, texte_corr, a, b, c, n, m, expression, ensembleDerivation, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      switch (liste_type_de_questions[i]) {\n        case 'a':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          expression = `${a}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case 'ax+b':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          expression = `${a}x  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case 'ax2+bx+c':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, 0);\n          expression = `${a} x^2  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(b)} x  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case 'xn':\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          expression = `x^${n}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case 'xn+1/x':\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          expression = `x^${n}+1/x`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case 'xn+1/xm':\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          m = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10, m);\n          expression = `x^${n}+1/x^${m}`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case 'xn+xm':\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          m = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10, m);\n          expression = `x^${n}+x^${m}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case 'axn':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, [0, 1, -1]);\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          expression = `${a}x^${n}`;\n          ensembleDerivation = `\\\\mathbb{R}`;\n          break;\n        case '1/x':\n          expression = `1/x`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case 'a/x':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, [0, 1]);\n          expression = `${a}/x`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case '1/xn':\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          expression = `${1}/x^${n}`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case 'a/xn':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10, 10, [1, 0]);\n          n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n          expression = `${a}/x^${n}`;\n          ensembleDerivation = `\\\\mathbb{R}^{\\\\text{*}}`;\n          break;\n        case 'racine(x)':\n          expression = `sqrt(x)`;\n          ensembleDerivation = `[0,+\\\\infin[`;\n          break;\n        case 'racine(ax)':\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10, [4, 9]);\n          expression = `sqrt(${a}x)`;\n          ensembleDerivation = `[0,+\\\\infin[`;\n          break;\n\n      }\n\n      texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_minuscule_depuis_chiffre)(i + 6)}:x\\\\longmapsto ${math.parse(expression).toTex({ 'implicit': 'hide' }).replaceAll('\\\\cdot', '')}$`;\n      texte_corr = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_minuscule_depuis_chiffre)(i + 6)}$ est dérivable sur $${ensembleDerivation}$ et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_minuscule_depuis_chiffre)(i + 6)}':x\\\\longmapsto ${math.simplify(math.derivative(expression, 'x'), reglesDeSimplifications).toTex({ 'implicit': 'hide' }).replaceAll('\\\\cdot', '')}$`;\n\n      texte = texte.replaceAll('frac', 'dfrac');\n      texte_corr = texte_corr.replaceAll('frac', 'dfrac');\n\n\n      if (this.liste_valeurs.indexOf(expression) == -1) {\n        this.liste_valeurs.push(expression);\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, '1 : Fonctions de base \\n2 : ku']; //\\n3 : u/v, uv'];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/1e/1F10.js?");

/***/ }),

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ })

}]);