/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6N11-2_js"],{

/***/ "./src/js/exercices/6e/6N11-2.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6N11-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Placer_un_point_abscisse_entiere)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/macroSvgJs.js */ \"./src/js/modules/macroSvgJs.js\");\n\n\n\n\nconst titre = 'Placer un point d’abscisse entière (grands nombres)'\n\n/**\n * Placer un point d'abscisse entière\n * @Auteur Jean-Claude Lhote et Rémi Angot\n * référence 6N11-2\n */\nfunction Placer_un_point_abscisse_entiere () {\n  'use strict'\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = ' Placer trois points sur un axe gradué.'\n  this.nb_questions = 5\n  this.nb_questions_modifiable = true\n  this.nb_cols = 1\n  this.nb_cols_corr = 1\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.sup = 1\n  this.type_exercice = 'SVGJS'\n  this.liste_packages = 'tkz-euclide'\n\n  this.nouvelle_version = function (numero_de_l_exercice) {\n    // numero_de_l_exercice est 0 pour l'exercice 1\n    let type_de_questions\n    this.liste_questions = []\n    this.liste_corrections = []\n    this.contenu = '' // Liste de questions\n    this.contenu_correction = '' // Liste de questions corrigées\n    if (this.sup == 4) { type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)([1, 2, 3], this.nb_questions) } else {\n      type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(\n        [parseInt(this.sup)],\n        this.nb_questions\n      )\n    }\n\n    this.contenu = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.html_consigne)(this.consigne)\n    for (let i = 0,\n      abs0,\n      abs1,\n      abs2,\n      abs3,\n      l1,\n      l2,\n      l3,\n      x1,\n      x2,\n      x3,\n      x11,\n      x22,\n      x33,\n      pas1,\n      pas2,\n      id_unique,\n      texte,\n      texte_corr; i < this.nb_questions; i++) {\n      l1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i * 3 + 1)\n      l2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i * 3 + 2)\n      l3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i * 3 + 3)\n\n      switch (type_de_questions[i]) {\n        case 1: // Placer des entiers sur un axe (milliers)\n          abs0 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9) * 1000\n          pas1 = 0.001\n          pas2 = 10\n          break\n\n        case 2: // Placer des entiers sur un axe (dizaines de mille)\n          abs0 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 15) * 10000\n          pas1 = 0.0001\n          pas2 = 10\n          break\n\n        case 3: // Placer des entiers sur un axe (centaines de mille)\n          abs0 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(35, 85) * 100000\n          pas1 = 0.00001\n          pas2 = 10\n          break\n      }\n      x1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 2)\n      x2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(3, 4)\n      x3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 6)\n      x11 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9)\n      x22 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9)\n      x33 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 3)\n      abs1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(\n        abs0 + x1 / pas1 + x11 / pas1 / pas2,\n        type_de_questions[i]\n      ) // le type de questions est égal au nombre de décimales.\n      abs2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(\n        abs0 + x2 / pas1 + x22 / pas1 / pas2,\n        type_de_questions[i]\n      )\n      abs3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(\n        abs0 + x3 / pas1 + x33 / pas1 / pas2,\n        type_de_questions[i]\n      )\n      if (sortie_html) {\n        texte_corr = ''\n        this.contenu += `<h3> Placer les points : ${l1}(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(\n          abs1\n        )}), ${l2}(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(abs2)}), ${l3}(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(abs3)})</h3>`\n        id_unique = `${i}_${Date.now()}`\n        this.contenu += `<div id=\"div_svg${numero_de_l_exercice}${id_unique}\" style=\"width: 90%; height: 200px;  \"></div>`\n        ;(0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.SVG_reperage_sur_un_axe)(\n          `div_svg${numero_de_l_exercice}${id_unique}`,\n          abs0,\n          6,\n          pas1,\n          pas2,\n          [],\n          [\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0, 0), 0, 0],\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0 + 1 / pas1, 0), 1, 0]\n          ],\n          false\n        )\n        this.contenu_correction += `<div id=\"div_svg_corr${numero_de_l_exercice}${id_unique}\" style=\"width: 90%; height: 200px;  \"></div>`\n        ;(0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.SVG_reperage_sur_un_axe)(\n          `div_svg_corr${numero_de_l_exercice}${id_unique}`,\n          abs0,\n          6,\n          pas1,\n          pas2,\n          [\n            [l1, x1, x11, true],\n            [l2, x2, x22, true],\n            [l3, x3, x33, true]\n          ],\n          [\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0, 0), 0, 0],\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0 + 1 / pas1, 0), 1, 0]\n          ],\n          false\n        )\n      } else {\n        // sortie Latex\n        texte = `{\\\\small Placer les points : $${l1}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(\n          abs1\n        )}), $${l2}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(abs2)}), $${l3}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(\n          abs3\n        )})}<br>`\n        texte += (0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.Latex_reperage_sur_un_axe)(\n          2,\n          abs0,\n          pas1,\n          pas2,\n          [],\n          [\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0, 0), 0, 0],\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0 + 1 / pas1, 0), 1, 0]\n          ],\n          false\n        )\n        texte_corr = `{\\\\small Les points $${l1}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(\n          abs1\n        )}), $${l2}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(abs2)}), $${l3}$(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.string_nombre)(\n          abs3\n        )}) sont placés ci dessous}<br>`\n        texte_corr += (0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.Latex_reperage_sur_un_axe)(\n          2,\n          abs0,\n          pas1,\n          pas2,\n          [\n            [l1, x1, x11, true],\n            [l2, x2, x22, true],\n            [l3, x3, x33, true]\n          ],\n          [\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0, 0), 0, 0],\n            [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(abs0 + 1 / pas1, 0), 1, 0]\n          ],\n          false\n        )\n        this.liste_questions.push(texte)\n        this.liste_corrections.push(texte_corr)\n      }\n    }\n    if (!sortie_html) { (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this) }\n  }\n  this.besoin_formulaire_numerique = [\n    'Niveau de difficulté',\n    4,\n    '1 : Ordre de grandeur : milliers\\n2 : Ordre de grandeur : dizaines de mille\\n3 : centaines de mille\\n4 : Mélange'\n  ]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6N11-2.js?");

/***/ })

}]);