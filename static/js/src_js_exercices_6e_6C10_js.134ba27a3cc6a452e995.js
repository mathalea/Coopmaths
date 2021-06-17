/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amcReady\": () => (/* binding */ amcReady),\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Additions_soustractions_multiplications_posees)\n/* harmony export */ });\n/* harmony import */ var _modules_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/operations */ \"./src/js/modules/operations.js\");\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst amcReady = true;\nconst titre = 'Additions, soustractions et multiplications posées de nombres entiers';\n/**\n * Additions, soustractions et multiplications posées de nombres entiers\n *\n * * abcd +efg\n * * abc0-efg\n * * 1abc-def\n * * abc*d0e tables de 2 à 5\n * * abc*de tables de 5 à 9\n * @Auteur Rémi Angot\n * Support des opérations posées en html par Jean-Claude Lhote.\n * Référence 6C10\n */\n\nfunction Additions_soustractions_multiplications_posees() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"Poser et effectuer les calculs suivants.\";\n  this.spacing = 2;\n  sortieHtml ? this.spacingCorr = 2 : this.spacingCorr = 1; //Important sinon les opérations posées ne sont pas jolies\n\n  this.nbQuestions = 5; // this.pas_de_version_HMTL=true;\n\n  this.listePackages = \"xlop\";\n  this.tailleDiaporama = 100;\n\n  this.nouvelleVersion = function () {\n    /*********************************************************/\n    // On ajoute cette ligne pour AMC\n    this.qcm = ['6C10', [], 'Additions et soustractions de nombres entier', 4, {}];\n    /********************************************************************/\n\n    /** Type 4 : questionmultx avec AMCnumericChoices */\n    // Dans ce cas, le tableau des booléens comprend les renseignements nécessaires pour paramétrer \\AMCnumericCoices\n    // {int digits,int decimals,bool signe,int exposant_nb_chiffres,bool exposant_signe,int approx}\n    // La correction est dans tabQCM[1][0] et la réponse numlérique est dans tabQCM[1][1]\n\n    /********************************************************************/\n\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let type_de_questions, reponse;\n    let type_de_questions_disponibles = [1, 2, 3, 4, 5];\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.combinaisonListesSansChangerOrdre)(type_de_questions_disponibles, this.nbQuestions);\n\n    if (this.nbQuestions == 3) {\n      listeTypeDeQuestions = [1, 2, 5];\n    }\n\n    if (this.nbQuestions == 4) {\n      listeTypeDeQuestions = [1, 2, 4, 5];\n    }\n\n    for (let i = 0, texte, texteCorr, cpt = 0, a, b, c, d, e, f, g, x, y; i < this.nbQuestions && cpt < 50;) {\n      type_de_questions = listeTypeDeQuestions[i];\n\n      switch (type_de_questions) {\n        case 1:\n          // abcd +efg\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9) * 10000 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 1000 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 100 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(7, 9) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9) * 100 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(7, 9) * 10 + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.texNombre)(a)}+${b}$`;\n          reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(a + b);\n          texteCorr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({\n            operande1: a,\n            operande2: b,\n            type: 'addition'\n          });\n          break;\n\n        case 2:\n          // abc0-efg\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(b, 9);\n          f = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(c, 9);\n          g = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 9);\n          x = a * 1000 + b * 100 + c * 10;\n          y = e * 100 + f * 10 + g;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.texNombre)(x)}-${y}$`;\n          reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x - y);\n          texteCorr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({\n            operande1: x,\n            operande2: y,\n            type: 'soustraction'\n          });\n          break;\n\n        case 3:\n          // 1abc-def\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(a, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(1, 9);\n          f = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(c, 9);\n          x = 1000 + a * 100 + b * 10 + c;\n          y = d * 100 + e * 10 + f;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.texNombre)(x)}-${y}$`;\n          reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x - y);\n          texteCorr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({\n            operande1: x,\n            operande2: y,\n            type: 'soustraction'\n          });\n          break;\n\n        case 4:\n          // abc*d0e tables de 2 à 5\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(2, 5);\n          x = 100 * a + 10 * b + c;\n          y = d * 100 + e;\n          texte = `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.texNombre)(x)}\\\\times${y}$`;\n          reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x * y);\n          texteCorr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({\n            operande1: x,\n            operande2: y,\n            type: 'multiplication'\n          });\n          break;\n\n        case 5:\n          // abc*de tables de 5 à 9\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(5, 9);\n          x = 100 * a + 10 * b + c;\n          y = 10 * d + e;\n          texte = `$${x}\\\\times${y}$`;\n          reponse = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.calcul)(x * y);\n          texteCorr = (0,_modules_operations__WEBPACK_IMPORTED_MODULE_0__.default)({\n            operande1: x,\n            operande2: y,\n            type: 'multiplication'\n          });\n          break;\n      }\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.listeQuestions.push(texte);\n\n        if (!sortieHtml && i == 0) {\n          texteCorr = `\\\\setlength\\\\itemsep{2em}` + texteCorr;\n        } // espacement entre les questions\n\n\n        this.listeCorrections.push(texteCorr);\n        /********************* AMCnumericChoices ********************************/\n\n        this.qcm[1].push([texte, [texteCorr, reponse], {\n          digits: 0,\n          decimals: 0,\n          signe: false,\n          exposant_nb_chiffres: 0,\n          exposant_signe: false,\n          approx: 0\n        }]); // [question,[réponse,réponse numérique],{paramètres réponse numérique}] (voir doc AMC \\AMCnumericChoices)\n\n        /****************************************************/\n\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.listeQuestionsToContenu)(this);\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZDMTAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvNmUvNkMxMC5qcz8wYWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPcGVyYXRpb24gZnJvbSAnLi4vLi4vbW9kdWxlcy9vcGVyYXRpb25zJ1xuaW1wb3J0IEV4ZXJjaWNlIGZyb20gJy4uL0NsYXNzZUV4ZXJjaWNlLmpzJ1xuaW1wb3J0IHtsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSxyYW5kaW50LGNvbWJpbmFpc29uTGlzdGVzU2Fuc0NoYW5nZXJPcmRyZSx0ZXhOb21icmUsY2FsY3VsfSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IGFtY1JlYWR5ID0gdHJ1ZVxuXG5leHBvcnQgY29uc3QgdGl0cmUgPSAnQWRkaXRpb25zLCBzb3VzdHJhY3Rpb25zIGV0IG11bHRpcGxpY2F0aW9ucyBwb3PDqWVzIGRlIG5vbWJyZXMgZW50aWVycydcblxuLyoqXG4gKiBBZGRpdGlvbnMsIHNvdXN0cmFjdGlvbnMgZXQgbXVsdGlwbGljYXRpb25zIHBvc8OpZXMgZGUgbm9tYnJlcyBlbnRpZXJzXG4gKlxuICogKiBhYmNkICtlZmdcbiAqICogYWJjMC1lZmdcbiAqICogMWFiYy1kZWZcbiAqICogYWJjKmQwZSB0YWJsZXMgZGUgMiDDoCA1XG4gKiAqIGFiYypkZSB0YWJsZXMgZGUgNSDDoCA5XG4gKiBAQXV0ZXVyIFLDqW1pIEFuZ290XG4gKiBTdXBwb3J0IGRlcyBvcMOpcmF0aW9ucyBwb3PDqWVzIGVuIGh0bWwgcGFyIEplYW4tQ2xhdWRlIExob3RlLlxuICogUsOpZsOpcmVuY2UgNkMxMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRpdGlvbnNfc291c3RyYWN0aW9uc19tdWx0aXBsaWNhdGlvbnNfcG9zZWVzKCkge1xuICBFeGVyY2ljZS5jYWxsKHRoaXMpOyAvLyBIw6lyaXRhZ2UgZGUgbGEgY2xhc3NlIEV4ZXJjaWNlKClcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLmNvbnNpZ25lID0gXCJQb3NlciBldCBlZmZlY3R1ZXIgbGVzIGNhbGN1bHMgc3VpdmFudHMuXCI7XG4gIHRoaXMuc3BhY2luZyA9IDI7XG4gIHNvcnRpZUh0bWwgPyAodGhpcy5zcGFjaW5nQ29yciA9IDIpIDogKHRoaXMuc3BhY2luZ0NvcnIgPSAxKTsgLy9JbXBvcnRhbnQgc2lub24gbGVzIG9ww6lyYXRpb25zIHBvc8OpZXMgbmUgc29udCBwYXMgam9saWVzXG4gIHRoaXMubmJRdWVzdGlvbnMgPSA1O1xuICAvLyB0aGlzLnBhc19kZV92ZXJzaW9uX0hNVEw9dHJ1ZTtcbiAgdGhpcy5saXN0ZVBhY2thZ2VzID0gXCJ4bG9wXCI7XG4gIHRoaXMudGFpbGxlRGlhcG9yYW1hID0gMTAwO1xuXG5cbiAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vLyBPbiBham91dGUgY2V0dGUgbGlnbmUgcG91ciBBTUNcbnRoaXMucWNtPVsnNkMxMCcsW10sJ0FkZGl0aW9ucyBldCBzb3VzdHJhY3Rpb25zIGRlIG5vbWJyZXMgZW50aWVyJyw0LHt9XVxuIFx0XHRcdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgIC8qKiBUeXBlIDQgOiBxdWVzdGlvbm11bHR4IGF2ZWMgQU1DbnVtZXJpY0Nob2ljZXMgKi9cblx0XHRcdC8vIERhbnMgY2UgY2FzLCBsZSB0YWJsZWF1IGRlcyBib29sw6llbnMgY29tcHJlbmQgbGVzIHJlbnNlaWduZW1lbnRzIG7DqWNlc3NhaXJlcyBwb3VyIHBhcmFtw6l0cmVyIFxcQU1DbnVtZXJpY0NvaWNlc1xuXHRcdFx0Ly8ge2ludCBkaWdpdHMsaW50IGRlY2ltYWxzLGJvb2wgc2lnbmUsaW50IGV4cG9zYW50X25iX2NoaWZmcmVzLGJvb2wgZXhwb3NhbnRfc2lnbmUsaW50IGFwcHJveH1cblx0XHRcdC8vIExhIGNvcnJlY3Rpb24gZXN0IGRhbnMgdGFiUUNNWzFdWzBdIGV0IGxhIHLDqXBvbnNlIG51bWzDqXJpcXVlIGVzdCBkYW5zIHRhYlFDTVsxXVsxXVxuXHRcdFx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgdGhpcy5saXN0ZVF1ZXN0aW9ucyA9IFtdOyAvLyBMaXN0ZSBkZSBxdWVzdGlvbnNcbiAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zIGNvcnJpZ8OpZXNcbiAgICBsZXQgdHlwZV9kZV9xdWVzdGlvbnMscmVwb25zZVxuICAgIGxldCB0eXBlX2RlX3F1ZXN0aW9uc19kaXNwb25pYmxlcyA9IFsxLCAyLCAzLCA0LCA1XTtcbiAgICBsZXQgbGlzdGVUeXBlRGVRdWVzdGlvbnMgPSBjb21iaW5haXNvbkxpc3Rlc1NhbnNDaGFuZ2VyT3JkcmUoXG4gICAgICB0eXBlX2RlX3F1ZXN0aW9uc19kaXNwb25pYmxlcyxcbiAgICAgIHRoaXMubmJRdWVzdGlvbnNcbiAgICApO1xuICAgIGlmICh0aGlzLm5iUXVlc3Rpb25zID09IDMpIHtcbiAgICAgIGxpc3RlVHlwZURlUXVlc3Rpb25zID0gWzEsIDIsIDVdO1xuICAgIH1cbiAgICBpZiAodGhpcy5uYlF1ZXN0aW9ucyA9PSA0KSB7XG4gICAgICBsaXN0ZVR5cGVEZVF1ZXN0aW9ucyA9IFsxLCAyLCA0LCA1XTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMCwgdGV4dGUsIHRleHRlQ29yciwgY3B0ID0gMCwgYSwgYiwgYywgZCwgZSwgZiwgZywgeCwgeTsgaSA8IHRoaXMubmJRdWVzdGlvbnMgJiYgY3B0IDwgNTA7KSB7XG4gICAgICB0eXBlX2RlX3F1ZXN0aW9ucyA9IGxpc3RlVHlwZURlUXVlc3Rpb25zW2ldO1xuICAgICAgc3dpdGNoICh0eXBlX2RlX3F1ZXN0aW9ucykge1xuICAgICAgICBjYXNlIDE6IC8vIGFiY2QgK2VmZ1xuICAgICAgICAgIGEgPVxuICAgICAgICAgICAgcmFuZGludCgxLCA5KSAqIDEwMDAwICtcbiAgICAgICAgICAgIHJhbmRpbnQoNSwgOSkgKiAxMDAwICtcbiAgICAgICAgICAgIHJhbmRpbnQoNSwgOSkgKiAxMDAgK1xuICAgICAgICAgICAgcmFuZGludCg3LCA5KSAqIDEwICtcbiAgICAgICAgICAgIHJhbmRpbnQoMSwgOSk7XG4gICAgICAgICAgYiA9IHJhbmRpbnQoNSwgOSkgKiAxMDAgKyByYW5kaW50KDcsIDkpICogMTAgKyByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIHRleHRlID0gYCQke3RleE5vbWJyZShhKX0rJHtifSRgO1xuICAgICAgICAgIHJlcG9uc2U9Y2FsY3VsKGErYilcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBPcGVyYXRpb24oe29wZXJhbmRlMTphLG9wZXJhbmRlMjpiLHR5cGU6J2FkZGl0aW9uJ30pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8gYWJjMC1lZmdcbiAgICAgICAgICBhID0gcmFuZGludCgxLCA5KTtcbiAgICAgICAgICBiID0gcmFuZGludCgxLCA5KTtcbiAgICAgICAgICBjID0gcmFuZGludCgxLCA5KTtcbiAgICAgICAgICBlID0gcmFuZGludChiLCA5KTtcbiAgICAgICAgICBmID0gcmFuZGludChjLCA5KTtcbiAgICAgICAgICBnID0gcmFuZGludCgyLCA5KTtcbiAgICAgICAgICB4ID0gYSAqIDEwMDAgKyBiICogMTAwICsgYyAqIDEwO1xuICAgICAgICAgIHkgPSBlICogMTAwICsgZiAqIDEwICsgZztcbiAgICAgICAgICB0ZXh0ZSA9IGAkJHt0ZXhOb21icmUoeCl9LSR7eX0kYDtcbiAgICAgICAgICByZXBvbnNlPWNhbGN1bCh4LXkpXG4gICAgICAgICAgdGV4dGVDb3JyID0gT3BlcmF0aW9uKHtvcGVyYW5kZTE6eCxvcGVyYW5kZTI6eSx0eXBlOidzb3VzdHJhY3Rpb24nfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzOiAvLyAxYWJjLWRlZlxuICAgICAgICAgIGEgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIGIgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIGMgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIGQgPSByYW5kaW50KGEsIDkpO1xuICAgICAgICAgIGUgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIGYgPSByYW5kaW50KGMsIDkpO1xuICAgICAgICAgIHggPSAxMDAwICsgYSAqIDEwMCArIGIgKiAxMCArIGM7XG4gICAgICAgICAgeSA9IGQgKiAxMDAgKyBlICogMTAgKyBmO1xuICAgICAgICAgIHRleHRlID0gYCQke3RleE5vbWJyZSh4KX0tJHt5fSRgO1xuICAgICAgICAgIHJlcG9uc2U9Y2FsY3VsKHgteSlcblxuICAgICAgICAgIHRleHRlQ29yciA9IE9wZXJhdGlvbih7b3BlcmFuZGUxOngsb3BlcmFuZGUyOnksdHlwZTonc291c3RyYWN0aW9uJ30pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNDogLy8gYWJjKmQwZSB0YWJsZXMgZGUgMiDDoCA1XG4gICAgICAgICAgYSA9IHJhbmRpbnQoMiwgNSk7XG4gICAgICAgICAgYiA9IHJhbmRpbnQoMiwgNSk7XG4gICAgICAgICAgYyA9IHJhbmRpbnQoMiwgNSk7XG4gICAgICAgICAgZCA9IHJhbmRpbnQoMiwgNSk7XG4gICAgICAgICAgZSA9IHJhbmRpbnQoMiwgNSk7XG4gICAgICAgICAgeCA9IDEwMCAqIGEgKyAxMCAqIGIgKyBjO1xuICAgICAgICAgIHkgPSBkICogMTAwICsgZTtcbiAgICAgICAgICB0ZXh0ZSA9IGAkJHt0ZXhOb21icmUoeCl9XFxcXHRpbWVzJHt5fSRgO1xuICAgICAgICAgIHJlcG9uc2U9Y2FsY3VsKHgqeSlcblxuICAgICAgICAgIHRleHRlQ29yciA9IE9wZXJhdGlvbih7b3BlcmFuZGUxOngsb3BlcmFuZGUyOnksdHlwZTonbXVsdGlwbGljYXRpb24nfSlcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA1OiAvLyBhYmMqZGUgdGFibGVzIGRlIDUgw6AgOVxuICAgICAgICAgIGEgPSByYW5kaW50KDUsIDkpO1xuICAgICAgICAgIGIgPSByYW5kaW50KDUsIDkpO1xuICAgICAgICAgIGMgPSByYW5kaW50KDUsIDkpO1xuICAgICAgICAgIGQgPSByYW5kaW50KDUsIDkpO1xuICAgICAgICAgIGUgPSByYW5kaW50KDUsIDkpO1xuICAgICAgICAgIHggPSAxMDAgKiBhICsgMTAgKiBiICsgYztcbiAgICAgICAgICB5ID0gMTAgKiBkICsgZTtcbiAgICAgICAgICB0ZXh0ZSA9IGAkJHt4fVxcXFx0aW1lcyR7eX0kYDtcbiAgICAgICAgICByZXBvbnNlPWNhbGN1bCh4KnkpXG4gICAgICAgICAgdGV4dGVDb3JyID0gT3BlcmF0aW9uKHtvcGVyYW5kZTE6eCxvcGVyYW5kZTI6eSx0eXBlOidtdWx0aXBsaWNhdGlvbid9KVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5saXN0ZVF1ZXN0aW9ucy5pbmRleE9mKHRleHRlKSA9PSAtMSkge1xuICAgICAgICAvLyBTaSBsYSBxdWVzdGlvbiBuJ2EgamFtYWlzIMOpdMOpIHBvc8OpZSwgb24gZW4gY3LDqWUgdW5lIGF1dHJlXG4gICAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMucHVzaCh0ZXh0ZSk7XG4gICAgICAgIGlmICghc29ydGllSHRtbCAmJiBpID09IDApIHtcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBgXFxcXHNldGxlbmd0aFxcXFxpdGVtc2VwezJlbX1gICsgdGV4dGVDb3JyO1xuICAgICAgICB9IC8vIGVzcGFjZW1lbnQgZW50cmUgbGVzIHF1ZXN0aW9uc1xuICAgICAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMucHVzaCh0ZXh0ZUNvcnIpO1xuICAgICAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKiBBTUNudW1lcmljQ2hvaWNlcyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICB0aGlzLnFjbVsxXS5wdXNoKFt0ZXh0ZSwgW3RleHRlQ29ycixyZXBvbnNlXSwge2RpZ2l0czowLGRlY2ltYWxzOjAsc2lnbmU6ZmFsc2UsZXhwb3NhbnRfbmJfY2hpZmZyZXM6MCxleHBvc2FudF9zaWduZTpmYWxzZSxhcHByb3g6MH1dKVxuICAgIC8vIFtxdWVzdGlvbixbcsOpcG9uc2UscsOpcG9uc2UgbnVtw6lyaXF1ZV0se3BhcmFtw6h0cmVzIHLDqXBvbnNlIG51bcOpcmlxdWV9XSAodm9pciBkb2MgQU1DIFxcQU1DbnVtZXJpY0Nob2ljZXMpXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY3B0Kys7XG4gICAgfVxuICAgIGxpc3RlUXVlc3Rpb25zVG9Db250ZW51KHRoaXMpO1xuICB9O1xufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFoRUE7QUFDQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6C10.js\n");

/***/ })

}]);