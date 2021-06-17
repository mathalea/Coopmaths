/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_4C10-5_js"],{

/***/ "./src/js/exercices/4e/4C10-5.js":
/*!***************************************!*\
  !*** ./src/js/exercices/4e/4C10-5.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Exercice_tableau_multiplications_relatifs)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Multiplications de deux entiers relatifs dans un tableau à double entrée'\n\n/**\n* Effectuer des multiplications de relatifs dans un tableau à double entrée\n*\n* @Auteur Rémi Angot\n* 4C10-5\n*/\nfunction Exercice_tableau_multiplications_relatifs() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.sup = false;\n  this.titre = titre;\n  this.consigne = 'Calculer'\n  this.spacing = 1;\n  this.nb_questions = 1;\n  this.nb_questions_modifiable = false;\n\n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    let liste_signes1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)([-1, 1], 4);\n    let a1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n    let a2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, a1);\n    let a3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, [a1, a2]);\n    let a4 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, [a1, a2, a3]);\n    let b1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n    let b2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, b1);\n    let b3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, [b1, b2]);\n    let b4 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, [b1, b2, b3]);\n    a1 *= liste_signes1[0]\n    a2 *= liste_signes1[1]\n    a3 *= liste_signes1[2]\n    a4 *= liste_signes1[3]\n    b1 *= liste_signes1[0]\n    b2 *= liste_signes1[1]\n    b3 *= liste_signes1[2]\n    b4 *= liste_signes1[3]\n\n    let texte = `$\\\\def\\\\arraystretch{1.5}\\\\begin{array}{|c|c|c|c|c|}\n    \\\\hline\n    \\\\times & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4)} \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b1)} &  &  & &  \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b2)} & & & & \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b3)} & & & & \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b4)} & & & & \\\\\\\\\n    \\\\hline\n    \\\\end{array}$`\n\n    let texte_corr = `$\\\\def\\\\arraystretch{1.5}\\\\begin{array}{|c|c|c|c|c|}\n    \\\\hline\n    \\\\times & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4)} \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1 * b1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2 * b1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3 * b1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4 * b1)} \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1 * b2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2 * b2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3 * b2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4 * b2)} \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1 * b3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2 * b3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3 * b3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4 * b3)} \\\\\\\\\n    \\\\hline\n    ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b4)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a1 * b4)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a2 * b4)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a3 * b4)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a4 * b4)} \\\\\\\\\n    \\\\hline\n    \\\\end{array}$`\n    this.liste_questions.push(texte);\n    this.liste_corrections.push(texte_corr);\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\n  }\n}\n\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/4e/4C10-5.js?");

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