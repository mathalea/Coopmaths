/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_Profs_P008_js"],{

/***/ "./src/js/exercices/Profs/P008.js":
/*!****************************************!*\
  !*** ./src/js/exercices/Profs/P008.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Operations_posees)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_operations_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/operations.js */ \"./src/js/modules/operations.js\");\n\n\n\nconst titre = 'Opérations posées';\n/**\n * Poser et effectuer les divisions euclidiennes suivantes puis donner l'égalité fondamentale correspondante.\n *\n * Niveau de difficulté 1 :\n * * division par 2, 3 , 4 ou 5\n * * division par 6 à 9\n * * un 0 dans le quotient\n *\n * Niveau de difficulté 2 :\n * * division par 11, 12, 15, 25\n * * division par 13,14,21,22,23 ou 24 et un 0 dans le quotient\n * * division par un multiple de 10 et un 0 dans le quotient\n * @Auteur Rémi Angot\n * Référence 6C11\n */\n\nfunction Operations_posees() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"\";\n  this.spacing = 2;\n  sortieHtml ? this.spacingCorr = 2 : this.spacingCorr = 1; //Important sinon opidiv n'est pas joli\n\n  this.nbQuestions = 1;\n  this.nbQuestionsModifiable = false;\n  this.sup = 1;\n  this.sup2 = \"1234.5-789.2\";\n  this.sup3 = 0;\n  this.listePackages = \"xlop\";\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let nombres = [1234.5, 789.2];\n    let operandes = String(this.sup2).split(\"-\");\n    nombres[0] = parseFloat(operandes[0]);\n    nombres[1] = parseFloat(operandes[1]);\n    let a = nombres[0];\n    let b = nombres[1];\n\n    switch (parseInt(this.sup)) {\n      case 1:\n        // addition\n        this.contenu = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n          operande1: a,\n          operande2: b,\n          type: 'addition'\n        });\n        break;\n\n      case 2:\n        // soustraction\n        this.contenu = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n          operande1: a,\n          operande2: b,\n          type: 'soustraction'\n        });\n        break;\n\n      case 3:\n        // multiplication\n        this.contenu = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n          operande1: a,\n          operande2: b,\n          type: 'multiplication'\n        });\n        break;\n\n      case 4:\n        // division euclidienne\n        this.contenu = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n          operande1: a,\n          operande2: b,\n          type: 'divisionE',\n          precision: 0\n        });\n        break;\n\n      case 5:\n        // division\n        this.contenu = (0,_modules_operations_js__WEBPACK_IMPORTED_MODULE_2__.default)({\n          operande1: a,\n          operande2: b,\n          type: 'division',\n          precision: parseInt(this.sup3)\n        });\n        break;\n    }\n  };\n\n  this.besoinFormulaireNumerique = [\"Opération\", 5, \"1 : Addition\\n2 : Soustraction\\n3 : Multiplication\\n4 : Division euclidienne\\n5 : Division décimale\"];\n  this.besoin_formulaire2_texte = [\"Deux nombres séparés par un tiret(séparateur décimal = le point)\"];\n  this.besoin_formulaire3_numerique = [\"Nombre de chiffres après la virgule pour le quotient\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL1Byb2ZzL1AwMDguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvUHJvZnMvUDAwOC5qcz83NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQgeyBsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSwgcmFuZGludCwgY2hvaWNlLCBjb21iaW5haXNvbkxpc3RlcywgdGV4Tm9tYnJlIH0gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdXRpbHMuanMnXG5pbXBvcnQgT3BlcmF0aW9uIGZyb20gJy4uLy4uL21vZHVsZXMvb3BlcmF0aW9ucy5qcyc7XG5leHBvcnQgY29uc3QgdGl0cmUgPSAnT3DDqXJhdGlvbnMgcG9zw6llcydcblxuLyoqXG4gKiBQb3NlciBldCBlZmZlY3R1ZXIgbGVzIGRpdmlzaW9ucyBldWNsaWRpZW5uZXMgc3VpdmFudGVzIHB1aXMgZG9ubmVyIGwnw6lnYWxpdMOpIGZvbmRhbWVudGFsZSBjb3JyZXNwb25kYW50ZS5cbiAqXG4gKiBOaXZlYXUgZGUgZGlmZmljdWx0w6kgMSA6XG4gKiAqIGRpdmlzaW9uIHBhciAyLCAzICwgNCBvdSA1XG4gKiAqIGRpdmlzaW9uIHBhciA2IMOgIDlcbiAqICogdW4gMCBkYW5zIGxlIHF1b3RpZW50XG4gKlxuICogTml2ZWF1IGRlIGRpZmZpY3VsdMOpIDIgOlxuICogKiBkaXZpc2lvbiBwYXIgMTEsIDEyLCAxNSwgMjVcbiAqICogZGl2aXNpb24gcGFyIDEzLDE0LDIxLDIyLDIzIG91IDI0IGV0IHVuIDAgZGFucyBsZSBxdW90aWVudFxuICogKiBkaXZpc2lvbiBwYXIgdW4gbXVsdGlwbGUgZGUgMTAgZXQgdW4gMCBkYW5zIGxlIHF1b3RpZW50XG4gKiBAQXV0ZXVyIFLDqW1pIEFuZ290XG4gKiBSw6lmw6lyZW5jZSA2QzExXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZXJhdGlvbnNfcG9zZWVzKCkge1xuICAgIEV4ZXJjaWNlLmNhbGwodGhpcyk7IC8vIEjDqXJpdGFnZSBkZSBsYSBjbGFzc2UgRXhlcmNpY2UoKVxuICAgIHRoaXMudGl0cmUgPSB0aXRyZTtcbiAgICB0aGlzLmNvbnNpZ25lID0gXCJcIjtcbiAgICB0aGlzLnNwYWNpbmcgPSAyO1xuICAgIHNvcnRpZUh0bWwgPyAodGhpcy5zcGFjaW5nQ29yciA9IDIpIDogKHRoaXMuc3BhY2luZ0NvcnIgPSAxKTsgLy9JbXBvcnRhbnQgc2lub24gb3BpZGl2IG4nZXN0IHBhcyBqb2xpXG4gICAgdGhpcy5uYlF1ZXN0aW9ucyA9IDE7XG4gICAgdGhpcy5uYlF1ZXN0aW9uc01vZGlmaWFibGUgPSBmYWxzZVxuICAgIHRoaXMuc3VwID0gMTtcbiAgICB0aGlzLnN1cDIgPSBcIjEyMzQuNS03ODkuMlwiXG4gICAgdGhpcy5zdXAzID0gMDtcbiAgICB0aGlzLmxpc3RlUGFja2FnZXMgPSBcInhsb3BcIjtcblxuICAgIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmxpc3RlUXVlc3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9uc1xuICAgICAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zIGNvcnJpZ8OpZXNcbiAgICAgICAgbGV0IG5vbWJyZXM9WzEyMzQuNSw3ODkuMl1cbiAgICAgICAgbGV0IG9wZXJhbmRlcyA9IFN0cmluZyh0aGlzLnN1cDIpLnNwbGl0KFwiLVwiKVxuICAgICAgICBub21icmVzWzBdPXBhcnNlRmxvYXQob3BlcmFuZGVzWzBdKTtcbiAgICAgICAgbm9tYnJlc1sxXT1wYXJzZUZsb2F0KG9wZXJhbmRlc1sxXSlcblxuICAgICAgICBsZXQgYSA9IG5vbWJyZXNbMF1cbiAgICAgICAgbGV0IGIgPSBub21icmVzWzFdXG4gICAgICAgIHN3aXRjaCAocGFyc2VJbnQodGhpcy5zdXApKSB7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIGFkZGl0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW51ID0gT3BlcmF0aW9uKHsgb3BlcmFuZGUxOiBhLCBvcGVyYW5kZTI6IGIsIHR5cGU6ICdhZGRpdGlvbicgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjogLy8gc291c3RyYWN0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW51ID0gT3BlcmF0aW9uKHsgb3BlcmFuZGUxOiBhLCBvcGVyYW5kZTI6IGIsIHR5cGU6ICdzb3VzdHJhY3Rpb24nIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6IC8vIG11bHRpcGxpY2F0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW51ID0gT3BlcmF0aW9uKHsgb3BlcmFuZGUxOiBhLCBvcGVyYW5kZTI6IGIsIHR5cGU6ICdtdWx0aXBsaWNhdGlvbicgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNDogLy8gZGl2aXNpb24gZXVjbGlkaWVubmVcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnUgPSBPcGVyYXRpb24oeyBvcGVyYW5kZTE6IGEsIG9wZXJhbmRlMjogYiwgdHlwZTogJ2RpdmlzaW9uRScsIHByZWNpc2lvbjogMCB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OiAvLyBkaXZpc2lvblxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudSA9IE9wZXJhdGlvbih7IG9wZXJhbmRlMTogYSwgb3BlcmFuZGUyOiBiLCB0eXBlOiAnZGl2aXNpb24nLCBwcmVjaXNpb246IHBhcnNlSW50KHRoaXMuc3VwMykgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlTnVtZXJpcXVlID0gW1wiT3DDqXJhdGlvblwiLCA1LCBcIjEgOiBBZGRpdGlvblxcbjIgOiBTb3VzdHJhY3Rpb25cXG4zIDogTXVsdGlwbGljYXRpb25cXG40IDogRGl2aXNpb24gZXVjbGlkaWVubmVcXG41IDogRGl2aXNpb24gZMOpY2ltYWxlXCJdO1xuICAgIHRoaXMuYmVzb2luX2Zvcm11bGFpcmUyX3RleHRlID0gW1wiRGV1eCBub21icmVzIHPDqXBhcsOpcyBwYXIgdW4gdGlyZXQoc8OpcGFyYXRldXIgZMOpY2ltYWwgPSBsZSBwb2ludClcIl1cbiAgICB0aGlzLmJlc29pbl9mb3JtdWxhaXJlM19udW1lcmlxdWUgPSBbXCJOb21icmUgZGUgY2hpZmZyZXMgYXByw6hzIGxhIHZpcmd1bGUgcG91ciBsZSBxdW90aWVudFwiXVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFmQTtBQWlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/Profs/P008.js\n");

/***/ })

}]);