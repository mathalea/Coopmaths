/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6C10_js"],{

/***/ "./src/js/exercices/6e/6C10.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6C10.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amcReady\": () => (/* binding */ amcReady),\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Additions_soustractions_multiplications_posees)\n/* harmony export */ });\n/* harmony import */ var _modules_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/operations */ \"./src/js/modules/operations.js\");\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\nconst amcReady = true\n\nconst titre = 'Additions, soustractions et multiplications posées de nombres entiers'\n\n/**\n * Additions, soustractions et multiplications posées de nombres entiers\n *\n * * abcd +efg\n * * abc0-efg\n * * 1abc-def\n * * abc*d0e tables de 2 à 5\n * * abc*de tables de 5 à 9\n * @Auteur Rémi Angot\n * Support des opérations posées en html par Jean-Claude Lhote.\n * Référence 6C10\n */\nfunction Additions_soustractions_multiplications_posees() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"Poser et effectuer les calculs suivants.\";\n  this.spacing = 2;\n  sortie_html ? (this.spacing_corr = 2) : (this.spacing_corr = 1); //Important sinon les opérations posées ne sont pas jolies\n  this.nb_questions = 5;\n  // this.pas_de_version_HMTL=true;\n  this.liste_packages = \"xlop\";\n  this.tailleDiaporama = 100;\n\n\n  this.nouvelle_version = function () {\n        /*********************************************************/\n// On ajoute cette ligne pour AMC\nthis.QCM=['6C10',[],'Additions et soustractions de nombres entier',4,{}]\n \t\t\t/********************************************************************/\n      /** Type 4 : questionmultx avec AMCnumericChoices */\n\t\t\t// Dans ce cas, le tableau des booléens comprend les renseignements nécessaires pour paramétrer \\AMCnumericCoices\n\t\t\t// {int digits,int decimals,bool signe,int exposant_nb_chiffres,bool exposant_signe,int approx}\n\t\t\t// La correction est dans tabQCM[1][0] et la réponse numlérique est dans tabQCM[1][1]\n\t\t\t/********************************************************************/\n\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    let type_de_questions,reponse\n    let type_de_questions_disponibles = [1, 2, 3, 4, 5];\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.combinaison_listes_sans_changer_ordre)(\n      type_de_questions_disponibles,\n      this.nb_questions\n    );\n    if (this.nb_questions == 3) {\n      liste_type_de_questions = [1, 2, 5];\n    }\n    if (this.nb_questions == 4) {\n      liste_type_de_questions = [1, 2, 4, 5];\n    }\n\n    for (let i = 0, texte, texte_corr, cpt = 0, a, b, c, d, e, f, g, x, y; i < this.nb_questions && cpt < 50;) {\n      type_de_questions = liste_type_de_questions[i];\n      switch (type_de_questions) {\n        case 1: // abcd +efg\n          a =\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9) * 10000 +\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 1000 +\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 100 +\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(7, 9) * 10 +\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 100 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(7, 9) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_nombre)(a)}+${b}$`;\n          reponse=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(a+b)\n          texte_corr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({operande1:a,operande2:b,type:'addition'})\n          break;\n        case 2: // abc0-efg\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(b, 9);\n          f = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(c, 9);\n          g = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 9);\n          x = a * 1000 + b * 100 + c * 10;\n          y = e * 100 + f * 10 + g;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_nombre)(x)}-${y}$`;\n          reponse=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x-y)\n          texte_corr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({operande1:x,operande2:y,type:'soustraction'})\n          break;\n        case 3: // 1abc-def\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(a, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          f = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(c, 9);\n          x = 1000 + a * 100 + b * 10 + c;\n          y = d * 100 + e * 10 + f;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_nombre)(x)}-${y}$`;\n          reponse=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x-y)\n\n          texte_corr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({operande1:x,operande2:y,type:'soustraction'})\n          break;\n        case 4: // abc*d0e tables de 2 à 5\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          x = 100 * a + 10 * b + c;\n          y = d * 100 + e;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_nombre)(x)}\\\\times${y}$`;\n          reponse=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x*y)\n\n          texte_corr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({operande1:x,operande2:y,type:'multiplication'})\n          break;\n        case 5: // abc*de tables de 5 à 9\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          x = 100 * a + 10 * b + c;\n          y = 10 * d + e;\n          texte = `$${x}\\\\times${y}$`;\n          reponse=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x*y)\n          texte_corr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({operande1:x,operande2:y,type:'multiplication'})\n          break;\n      }\n\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte);\n        if (!sortie_html && i == 0) {\n          texte_corr = `\\\\setlength\\\\itemsep{2em}` + texte_corr;\n        } // espacement entre les questions\n        this.liste_corrections.push(texte_corr);\n            /********************* AMCnumericChoices ********************************/\n    this.QCM[1].push([texte, [texte_corr,reponse], {digits:0,decimals:0,signe:false,exposant_nb_chiffres:0,exposant_signe:false,approx:0}])\n    // [question,[réponse,réponse numérique],{paramètres réponse numérique}] (voir doc AMC \\AMCnumericChoices)\n    /****************************************************/\n\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.liste_de_question_to_contenu)(this);\n  };\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6C10.js?");

/***/ })

}]);