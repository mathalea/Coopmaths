/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_Profs_P003_js"],{

/***/ "./src/js/exercices/Profs/P003.js":
/*!****************************************!*\
  !*** ./src/js/exercices/Profs/P003.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ feuille_d_axes_gradues)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/macroSvgJs.js */ \"./src/js/modules/macroSvgJs.js\");\n\n\n\nconst titre = 'Tracer des droites graduées'\n\n/**\n * Pour imprimer des repères vierges pour les élèves.\n * @Auteur Jean-Claude Lhote\n * référence : P003\n * publié le ?/2/2020\n */\nfunction feuille_d_axes_gradues () {\n  'use strict'\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = ''\n  this.nb_questions = 1\n  this.nb_questions_modifiable = true\n  this.nb_cols = 1\n  this.nb_cols_corr = 1\n  this.spacing = 3\n  this.sup = 10\n  this.consigne_modifiable = false\n  this.nb_questions_modifiable = false\n  this.nb_cols_modifiable = false\n  this.nb_cols_corr_modifiable = false\n  this.spacing_modifiable = false\n  this.spacing_corr_modifiable = false\n  this.liste_packages = ['tkz-euclide']\n\n  this.nouvelle_version = function (numero_de_l_exercice) {\n    let pas\n    this.liste_questions = []\n    this.liste_corrections = []\n    this.contenu = '' // Liste de questions\n    this.contenu_correction = '' // Liste de questions corrigées\n    pas = parseInt(this.sup)\n    for (let i = 0, id_unique, texte; i < 14; i++) {\n      if (sortie_html) {\n        id_unique = `${i}_${Date.now()}`\n        this.contenu += `<div id=\"div_svg${numero_de_l_exercice}${id_unique}\" style=\"width: 90%; height: 200px;  \"></div>`\n        ;(0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.SVG_reperage_sur_un_axe)(\n          `div_svg${numero_de_l_exercice}${id_unique}`,\n          '',\n          6,\n          1,\n          pas,\n          [],\n          [],\n          false\n        )\n      } else {\n        // sortie Latex\n        texte = (0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.Latex_reperage_sur_un_axe)(2, 0, 1, pas, [], [], false)\n      }\n      this.liste_questions.push(texte)\n    }\n    if (!sortie_html) { (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this) }\n  }\n  this.besoin_formulaire_numerique = ['Nombres de parts', 10, '']\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/Profs/P003.js?");

/***/ })

}]);