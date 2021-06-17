/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_betarotation3d_js"],{

/***/ "./src/js/exercices/beta/betarotation3d.js":
/*!*************************************************!*\
  !*** ./src/js/exercices/beta/betarotation3d.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ beta_rotation3d)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/3d.js */ \"./src/js/modules/3d.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\nconst titre = 'Rotation 3d de polygones';\nfunction beta_rotation3d() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"\";\n  this.spacing = 2;\n  this.nbQuestions = 1;\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let objets = [];\n    let O = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 0);\n    let C = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, -2, 0);\n    let A = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 5, 0);\n    let B = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 7);\n    let P = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.polygone3d)([C, A, B], 'black');\n    let Axex = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O, (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(1, 0, 0));\n    let Axey = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O, (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 1, 0));\n    let Axez = (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O, (0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0, 0, 1));\n    let p = [];\n    Axex.p2d.isVisible = true;\n    Axey.p2d.isVisible = true;\n    Axez.p2d.isVisible = true;\n\n    for (let a = 0; a <= 360; a += 10) {\n      p.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.rotation3d)(P, Axey, a, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_3__.texcolors)(a)));\n    }\n\n    console.log(p[1].p2d);\n\n    for (let k = 0; k < p.length; k++) {\n      for (let j = 0; j < p[k].p2d.length; j++) {\n        objets.push(p[k].p2d[j]);\n      }\n    }\n\n    objets.push(Axex.p2d, Axey.p2d, Axez.p2d);\n    this.contenu = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n      xmin: -10,\n      ymin: -10,\n      xmax: 10,\n      ymax: 10,\n      pixelsParCm: 20,\n      scale: 0.7\n    }, objets);\n  };\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL2JldGEvYmV0YXJvdGF0aW9uM2QuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvYmV0YS9iZXRhcm90YXRpb24zZC5qcz83NGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQgeyBtYXRoYWxlYTJkLHBvaW50LHJvdGF0aW9uLGxhdGV4UGFyUG9pbnQgfSBmcm9tICcuLi8uLi9tb2R1bGVzLzJkLmpzJ1xuaW1wb3J0IHtwb2ludDNkLHBvbHlnb25lM2Qscm90YXRpb24zZCxkcm9pdGUzZH0gZnJvbSAnLi4vLi4vbW9kdWxlcy8zZC5qcydcbmltcG9ydCB7dGV4Y29sb3JzfSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IHRpdHJlID0gJ1JvdGF0aW9uIDNkIGRlIHBvbHlnb25lcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYmV0YV9yb3RhdGlvbjNkKCkge1xuICAgIEV4ZXJjaWNlLmNhbGwodGhpcyk7IC8vIEjDqXJpdGFnZSBkZSBsYSBjbGFzc2UgRXhlcmNpY2UoKVxuICAgIHRoaXMudGl0cmUgPSB0aXRyZTtcbiAgICB0aGlzLmNvbnNpZ25lID0gXCJcIjtcbiAgICB0aGlzLnNwYWNpbmcgPSAyO1xuICAgIHRoaXMubmJRdWVzdGlvbnMgPSAxO1xuXG4gICAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucyA9IFtdOyAvLyBMaXN0ZSBkZSBxdWVzdGlvbnMgY29ycmlnw6llc1xuICAgICAgICBsZXQgb2JqZXRzPVtdXG4gICAgICAgIGxldCBPPXBvaW50M2QoMCwwLDApXG4gICAgICAgIGxldCBDPXBvaW50M2QoMCwtMiwwKVxuICAgICAgICBsZXQgQT1wb2ludDNkKDAsNSwwKVxuICAgICAgICBsZXQgQj1wb2ludDNkKDAsMCw3KVxuICAgICAgICBsZXQgUD1wb2x5Z29uZTNkKFtDLEEsQl0sJ2JsYWNrJylcbiAgICAgICAgbGV0IEF4ZXg9ZHJvaXRlM2QoTyxwb2ludDNkKDEsMCwwKSlcbiAgICAgICAgbGV0IEF4ZXk9ZHJvaXRlM2QoTyxwb2ludDNkKDAsMSwwKSlcbiAgICAgICAgbGV0IEF4ZXo9ZHJvaXRlM2QoTyxwb2ludDNkKDAsMCwxKSlcbiAgICAgICAgbGV0IHA9W11cbiAgICAgICAgQXhleC5wMmQuaXNWaXNpYmxlPXRydWVcbiAgICAgICAgQXhleS5wMmQuaXNWaXNpYmxlPXRydWVcbiAgICAgICAgQXhlei5wMmQuaXNWaXNpYmxlPXRydWVcbiAgICAgICAgZm9yIChsZXQgYT0wO2E8PTM2MDthKz0xMCkge1xuICAgICAgICBwLnB1c2gocm90YXRpb24zZChQLEF4ZXksYSx0ZXhjb2xvcnMoYSkpKVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHBbMV0ucDJkKVxuICAgICAgICBmb3IgKGxldCBrPTA7azxwLmxlbmd0aDtrKyspe1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wO2o8cFtrXS5wMmQubGVuZ3RoO2orKyl7XG4gICAgICAgICAgICAgICAgb2JqZXRzLnB1c2gocFtrXS5wMmRbal0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb2JqZXRzLnB1c2goQXhleC5wMmQsQXhleS5wMmQsQXhlei5wMmQpXG4gICAgICAgIHRoaXMuY29udGVudSA9IG1hdGhhbGVhMmQoeyB4bWluOiAtMTAsIHltaW46IC0xMCwgeG1heDogMTAsIHltYXg6IDEwLCBwaXhlbHNQYXJDbTogMjAsIHNjYWxlOiAwLjcgfSwgb2JqZXRzKVxuICAgICBcbiAgICB9XG59O1xuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/beta/betarotation3d.js\n");

/***/ })

}]);