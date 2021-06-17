/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6C30_js"],{

/***/ "./src/js/exercices/6e/6C30.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6C30.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amcReady\": () => (/* binding */ amcReady),\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Multiplier_decimaux)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/operations.js */ \"./src/js/modules/operations.js\");\n/* eslint-disable camelcase */\n\n\n\nconst amcReady = true\n\nconst titre = 'Multiplications posées de nombres décimaux'\n\n/**\n * Multiplication de deux nombres décimaux\n *\n * * xxx * xx,x chiffres inférieurs à 5\n * * xx,x * x,x\n * * x,xx * x0x\n * * 0,xx * x,x\n * @Auteur Rémi Angot\n * Référence 6C30\n */\nfunction Multiplier_decimaux () {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = 'Poser et effectuer les calculs suivants.'\n  this.spacing = 2\n  this.spacing_corr = 1 // Important sinon le calcul posé ne fonctionne pas avec opmul et spacing\n  this.nb_questions = 4\n  this.liste_packages = 'xlop'\n\n  this.nouvelle_version = function () {\n    this.QCM = ['6C30', [], 'Multiplications posées de nombres décimaux', 4]\n    this.liste_questions = [] // Liste de questions\n    this.liste_corrections = [] // Liste de questions corrigées\n\n    const type_de_questions_disponibles = [1, 2, 3, 4]\n    const liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(\n      type_de_questions_disponibles,\n      this.nb_questions\n    ) // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n    let type_de_questions, reponse\n    for (let i = 0, texte, texte_corr, cpt = 0, a, b; i < this.nb_questions && cpt < 50;) {\n      type_de_questions = liste_type_de_questions[i]\n      switch (type_de_questions) {\n        case 1: // xxx * xx,x chiffres inférieurs à 5\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5) * 100 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5)\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 5) / 10)\n          break\n        case 2: // xx,x * x,x\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 10)\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(6, 9) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(6, 9) / 10)\n          break\n        case 3: // x,xx * x0x\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 100)\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) * 100 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9))\n          break\n        case 4: // 0,xx * x,x\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 100)\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9) / 10)\n          break\n      }\n\n      texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)}$`\n      reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a * b)\n      texte_corr = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({ operande1: a, operande2: b, type: 'multiplication' })\n\n      if (this.liste_questions.indexOf(texte) === -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte)\n        this.liste_corrections.push(texte_corr)\n        // Pour AMC\n        this.QCM[1].push([texte, [texte_corr, reponse], { digits: 0, decimals: 0, signe: false, exposant_nb_chiffres: 0, exposant_signe: false, approx: 0 }])\n        i++\n      }\n      cpt++\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this)\n  }\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6C30.js?");

/***/ })

}]);