/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ beta_rotation3d)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_3d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/3d.js */ \"./src/js/modules/3d.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\n\nconst titre = 'Rotation 3d de polygones'\n\nfunction beta_rotation3d() {\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n    this.titre = titre;\n    this.consigne = \"\";\n    this.spacing = 2;\n    this.nb_questions = 1;\n\n    this.nouvelle_version = function () {\n        this.liste_questions = []; // Liste de questions\n        this.liste_corrections = []; // Liste de questions corrigées\n        let objets=[]\n        let O=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,0,0)\n        let C=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,-2,0)\n        let A=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,5,0)\n        let B=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,0,7)\n        let P=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.polygone3d)([C,A,B],'black')\n        console.log(P.p2d)\n        let Axex=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O,(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(1,0,0))\n        let Axey=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O,(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,1,0))\n        let Axez=(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.droite3d)(O,(0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.point3d)(0,0,1))\n        let p=[]\n        Axex.p2d.isVisible=true\n        Axey.p2d.isVisible=true\n        Axez.p2d.isVisible=true\n        for (let a=0;a<=360;a+=10) {\n        p.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_2__.rotation3d)(P,Axey,a,(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_3__.texcolors)(a)))\n        }\n        console.log(p[1].p2d)\n        for (let k=0;k<p.length;k++){\n            for (let j=0;j<p[k].p2d.length;j++){\n                objets.push(p[k].p2d[j])\n            }\n        }\n        objets.push(Axex.p2d,Axey.p2d,Axez.p2d)\n        this.contenu = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({ xmin: -10, ymin: -10, xmax: 10, ymax: 10, pixelsParCm: 20, scale: 0.7 }, objets)\n     \n    }\n};\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/betarotation3d.js?");

/***/ })

}]);