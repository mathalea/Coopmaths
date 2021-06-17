/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_betabonhomme_js"],{

/***/ "./src/js/exercices/beta/betabonhomme.js":
/*!***********************************************!*\
  !*** ./src/js/exercices/beta/betabonhomme.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ bonhomme_de_neige)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/3d.js */ \"./src/js/modules/3d.js\");\n\n\n\nconst titre = 'bonhomme de neige';\nfunction bonhomme_de_neige() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"\";\n  this.spacing = 2;\n  this.nbQuestions = 1;\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let objets = [];\n    let normal = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0, 0, 1);\n    let normal2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0, -0.2, 0);\n    let normal3 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0, -0.15, 0.05);\n    let normal4 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0, -0.15, -0.05);\n    let normal6 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0, -1, 0);\n    let R1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(5, 0, 0);\n    let R2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(3, 0, 0);\n    let R3 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(1.5, 0, 0);\n    let C1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 5);\n    let C2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 12);\n    let C3 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 16);\n    let S1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.sphere3d)(C1, 5, 3, 7);\n    let S2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.sphere3d)(C2, 3, 3, 7);\n    let S3 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.sphere3d)(C3, 1, 3, 7);\n    let rayon1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0.3, 0, 0);\n    let rayon2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur3d)(0.2, 0, 0);\n    let cyl1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cylindre3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -2.5, 14.5), (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.translation3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -2.5, 14.5), normal3), normal3, rayon1, rayon1);\n    let cyl2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cylindre3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -3, 13), (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.translation3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -3, 13), normal2), normal2, rayon1, rayon1);\n    let cyl3 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cylindre3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -2.5, 11), (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.translation3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -2.5, 11), normal4), normal4, rayon1, rayon1);\n    let cercle1 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cercle3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(-0.5, -1.5, 16.5), normal6, rayon2, true);\n    let cercle2 = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cercle3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0.5, -1.5, 16.5), normal6, rayon2, true);\n    cercle1.couleurDeRemplissage = 'black';\n    cercle2.couleurDeRemplissage = 'black';\n    let cone = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.cone3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -1.5, 16), (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.translation3d)((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -1.5, 16), normal6), normal6, rayon1);\n    objets.push(S1, S2, S3, cyl1, cyl2, cyl3, cone, cercle1, cercle2);\n    this.contenu = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n      xmin: -6,\n      ymin: -1,\n      xmax: 6,\n      ymax: 20,\n      pixelsParCm: 20,\n      scale: 0.7\n    }, objets);\n  };\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL2JldGEvYmV0YWJvbmhvbW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGFsZWEvLi9zcmMvanMvZXhlcmNpY2VzL2JldGEvYmV0YWJvbmhvbW1lLmpzP2U2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV4ZXJjaWNlIGZyb20gJy4uL0NsYXNzZUV4ZXJjaWNlLmpzJztcbmltcG9ydCB7IG1hdGhhbGVhMmQgfSBmcm9tICcuLi8uLi9tb2R1bGVzLzJkLmpzJ1xuaW1wb3J0IHtwb2ludDNkLGN5bGluZHJlM2Qsc3BoZXJlM2QsdmVjdGV1cjNkLHRyYW5zbGF0aW9uM2QsY29uZTNkLGNlcmNsZTNkfSBmcm9tICcuLi8uLi9tb2R1bGVzLzNkLmpzJ1xuXG5leHBvcnQgY29uc3QgdGl0cmUgPSAnYm9uaG9tbWUgZGUgbmVpZ2UnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvbmhvbW1lX2RlX25laWdlKCkge1xuICAgIEV4ZXJjaWNlLmNhbGwodGhpcyk7IC8vIEjDqXJpdGFnZSBkZSBsYSBjbGFzc2UgRXhlcmNpY2UoKVxuICAgIHRoaXMudGl0cmUgPSB0aXRyZTtcbiAgICB0aGlzLmNvbnNpZ25lID0gXCJcIjtcbiAgICB0aGlzLnNwYWNpbmcgPSAyO1xuICAgIHRoaXMubmJRdWVzdGlvbnMgPSAxO1xuXG4gICAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucyA9IFtdOyAvLyBMaXN0ZSBkZSBxdWVzdGlvbnMgY29ycmlnw6llc1xuICAgICAgICBsZXQgb2JqZXRzPVtdXG4gICAgICAgIGxldCBub3JtYWw9dmVjdGV1cjNkKDAsMCwxKVxuICAgICAgICBsZXQgbm9ybWFsMj12ZWN0ZXVyM2QoMCwtMC4yLDApXG4gICAgICAgIGxldCBub3JtYWwzPXZlY3RldXIzZCgwLC0wLjE1LDAuMDUpXG4gICAgICAgIGxldCBub3JtYWw0PXZlY3RldXIzZCgwLC0wLjE1LC0wLjA1KVxuICAgICAgICBsZXQgbm9ybWFsNj12ZWN0ZXVyM2QoMCwtMSwwKVxuICAgICAgICBsZXQgUjE9dmVjdGV1cjNkKDUsMCwwKVxuICAgICAgICBsZXQgUjI9dmVjdGV1cjNkKDMsMCwwKVxuICAgICAgICBsZXQgUjM9dmVjdGV1cjNkKDEuNSwwLDApXG4gICAgICAgIGxldCBDMT1wb2ludDNkKDAsMCw1KVxuICAgICAgICBsZXQgQzI9cG9pbnQzZCgwLDAsMTIpXG4gICAgICAgIGxldCBDMz1wb2ludDNkKDAsMCwxNilcbiAgICAgICAgbGV0IFMxPXNwaGVyZTNkKEMxLDUsMyw3KVxuICAgICAgICBsZXQgUzI9c3BoZXJlM2QoQzIsMywzLDcpXG4gICAgICAgIGxldCBTMz1zcGhlcmUzZChDMywxLDMsNylcbiAgICAgICAgbGV0IHJheW9uMT12ZWN0ZXVyM2QoMC4zLDAsMClcbiAgICAgICAgbGV0IHJheW9uMj12ZWN0ZXVyM2QoMC4yLDAsMClcbiAgICAgICAgbGV0IGN5bDE9Y3lsaW5kcmUzZChwb2ludDNkKDAsLTIuNSwxNC41KSx0cmFuc2xhdGlvbjNkKHBvaW50M2QoMCwtMi41LDE0LjUpLG5vcm1hbDMpLG5vcm1hbDMscmF5b24xLHJheW9uMSkgICAgICAgICBcbiAgICAgICAgbGV0IGN5bDI9Y3lsaW5kcmUzZChwb2ludDNkKDAsLTMsMTMpLHRyYW5zbGF0aW9uM2QocG9pbnQzZCgwLC0zLDEzKSxub3JtYWwyKSxub3JtYWwyLHJheW9uMSxyYXlvbjEpICAgICAgIFxuICAgICAgICBsZXQgY3lsMz1jeWxpbmRyZTNkKHBvaW50M2QoMCwtMi41LDExKSx0cmFuc2xhdGlvbjNkKHBvaW50M2QoMCwtMi41LDExKSxub3JtYWw0KSxub3JtYWw0LHJheW9uMSxyYXlvbjEpICAgICAgIFxuICAgICAgICBsZXQgY2VyY2xlMT1jZXJjbGUzZChwb2ludDNkKC0wLjUsLTEuNSwxNi41KSxub3JtYWw2LHJheW9uMix0cnVlKVxuICAgICAgICBsZXQgY2VyY2xlMj1jZXJjbGUzZChwb2ludDNkKDAuNSwtMS41LDE2LjUpLG5vcm1hbDYscmF5b24yLHRydWUpXG4gICAgICAgIGNlcmNsZTEuY291bGV1ckRlUmVtcGxpc3NhZ2U9J2JsYWNrJ1xuICAgICAgICBjZXJjbGUyLmNvdWxldXJEZVJlbXBsaXNzYWdlPSdibGFjaydcbiAgICAgICAgXG4gICAgICAgIGxldCBjb25lPWNvbmUzZChwb2ludDNkKDAsLTEuNSwxNiksdHJhbnNsYXRpb24zZChwb2ludDNkKDAsLTEuNSwxNiksbm9ybWFsNiksbm9ybWFsNixyYXlvbjEpXG4gICAgICAgIG9iamV0cy5wdXNoKFMxLFMyLFMzLGN5bDEsY3lsMixjeWwzLGNvbmUsY2VyY2xlMSxjZXJjbGUyKVxuICAgICAgICB0aGlzLmNvbnRlbnUgPSBtYXRoYWxlYTJkKHsgeG1pbjogLTYsIHltaW46IC0xLCB4bWF4OiA2LCB5bWF4OiAyMCwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMC43IH0sIG9iamV0cylcblxuICAgIH1cbn07XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/beta/betabonhomme.js\n");

/***/ })

}]);