/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_2e_2N11-1_js"],{

/***/ "./src/js/exercices/2e/2N11-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/2e/2N11-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Simplifier_une_somme_de_racines_carrees)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\nconst titre = 'Simplifier une somme de racines carrées'\n\n/**\n * 2N11-1\n * @Auteur Stéphane Guyon\n */\nfunction Simplifier_une_somme_de_racines_carrees() {\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n    this.titre = titre;\n    this.consigne = \" Simplifier une somme de racines carrées\";\n    this.nb_questions = 4;\n    this.nb_cols = 2;\n    this.nb_cols_corr = 2;\n    this.sup = 1; //\n    this.nouvelle_version = function () {\n        this.liste_questions = []; // Liste de questions\n        this.liste_corrections = []; // Liste de questions corrigées\n\n        for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\n            let e1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n            let e2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n            let e3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n            let a1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11);\n            let a2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11, [a1]);\n            let a3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11, [a1, a2]);\n            let b1 = a1 * a1;\n            let b2 = a2 * a2;\n            let b3 = a3 * a3;\n            let c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11, [4, 8, 9]);\n            let d1 = c * b1;\n            let d2 = c * b2;\n            let d3 = c * b3;\n            let f1 = e1 * a1;\n            let f2 = e2 * a2;\n            let f3 = e3 * a3;\n            let f = f1 + f2 + f3;\n\n            texte = `Écrire $A=${e1}\\\\sqrt{${d1}} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e2)}\\\\sqrt{${d2}} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e3)}\\\\sqrt{${d3}}$ sous la forme $a\\\\sqrt{${c}}$ où $a$ est un entier:`;\n            texte_corr = `On cherche le plus grand carré parfait diviseur de ${d1}, ${d2} et ${d3}. <br>\n                On trouve $${d1}=${b1} \\\\times ${c}~~$, $~~${d2}=${b2} \\\\times ${c}~~$\tet $${d3}=${b3} \\\\times ${c}$<br>\n                On a donc  : $\\\\sqrt{${d1}}=\\\\sqrt{${a1}^{2} \\\\times ${c} }=${a1}\\\\times \\\\sqrt{${c}}$,\n                $~~\\\\sqrt{${d2}}=\\\\sqrt{${a2}^{2} \\\\times ${c} }=${a2}\\\\times \\\\sqrt{${c}}~$ et\n                $~\\\\sqrt{${d3}}=\\\\sqrt{${a3}^{2} \\\\times ${c} }=${a3}\\\\times \\\\sqrt{${c}}$<br>\n                On en déduit que : $A=${e1}\\\\times${a1}\\\\times \\\\sqrt{${c}} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e2)}\\\\times ${a2}\\\\times \\\\sqrt{${c}}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e3)}\\\\times ${a3}\\\\times \\\\sqrt{${c}}$<br>\n                $A=${f1}\\\\times \\\\sqrt{${c}} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f2)}\\\\times \\\\sqrt{${c}}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f3)}\\\\times \\\\sqrt{${c}}$\t\t<br>\n                $A=\t(${f1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f2)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f3)})\\\\times \\\\sqrt{${c}} = ${f}\\\\sqrt{${c}}$`;\n\n            if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n                this.liste_questions.push(texte);\n                this.liste_corrections.push(texte_corr);\n                i++;\n            }\n            cpt++;\n        }\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n    };\n    this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, \"1 : En donnat la racine carrée unité\\n2 : Sans indication\"];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/2e/2N11-1.js?");

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