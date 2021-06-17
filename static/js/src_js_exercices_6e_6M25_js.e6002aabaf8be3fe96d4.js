/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6M25_js"],{

/***/ "./src/js/exercices/6e/6M25.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6M25.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Connaitre_formules_de_perimetre_et_aires)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Connaitre le cours sur le périmètre et l’aire';\n/**\n * Citer des formules de périmètre, des formules d'aire ou la définition de π\n * @Auteur Rémi Angot\n * Référence 6M25\n */\n\nfunction Connaitre_formules_de_perimetre_et_aires() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"Calculer\";\n  this.nbQuestions = 4;\n  this.nbCols = 1;\n  this.nbColsCorr = 1;\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaisonListes)([\"pi\", \"prectangle\", \"pcarre\", \"acarre\", \"arectangle\", \"pcercle\", \"acercle\", \"atrianglerectangle\", \"atriangle\"], this.nbQuestions);\n\n    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {\n      switch (listeTypeDeQuestions[i]) {\n        case \"pi\":\n          texte = \"Rappeler la définition du nombre $\\\\pi$.\";\n          texteCorr = \"$\\\\pi$ est la longueur d'un cercle de diamètre 1.\";\n          break;\n\n        case \"prectangle\":\n          texte = \"Donner une formule du périmètre du rectangle.\";\n          texteCorr = \"$\\\\mathcal{P}_{\\\\text{rectangle}}=(L+l)\\\\times2=L\\\\times2+l\\\\times2=L+l+L=l$<br><br>\";\n          texteCorr += \"Avec $L$ la longueur et $l$ la largeur du rectangle.\";\n          break;\n\n        case \"pcarre\":\n          texte = \"Donner une formule du périmètre du carré.\";\n          texteCorr = \"$\\\\mathcal{P}_{\\\\text{carré}}=c\\\\times4=c+c+c+c$<br><br>\";\n          texteCorr += \"Avec $c$ la longueur du côté du carré.\";\n          break;\n\n        case \"arectangle\":\n          texte = \"Donner une formule de l'aire du rectangle.\";\n          texteCorr = \"$\\\\mathcal{A}_{\\\\text{rectangle}}=L\\\\times l$<br><br>\";\n          texteCorr += \"Avec $L$ la longueur et $l$ la largeur du rectangle.\";\n          break;\n\n        case \"acarre\":\n          texte = \"Donner une formule de l'aire du carré.\";\n          texteCorr = \"$\\\\mathcal{A}_{\\\\text{carré}}=c\\\\times c=c^2$<br><br>\";\n          texteCorr += \"Avec $c$ la longueur du côté du carré.\";\n          break;\n\n        case \"atrianglerectangle\":\n          texte = \"Donner une formule de l'aire du triangle rectangle.\";\n          texteCorr = \"$\\\\mathcal{A}_{\\\\text{triangle rectangle}}=a\\\\times b \\\\div2=\\\\dfrac{a\\\\times b}{2}$<br><br>\";\n          texteCorr += \"Avec $a$ et $b$ les longueurs des côtés de l'angle droit.\";\n          break;\n\n        case \"atriangle\":\n          texte = \"Donner une formule de l'aire d'un triangle quelconque.\";\n          texteCorr = \"$\\\\mathcal{A}_{\\\\text{triangle rectangle}}=b\\\\times h \\\\div2=\\\\dfrac{b\\\\times h}{2}$<br><br>\";\n          texteCorr += \"Avec $b$ la longueur d'un côté et $h$ la longueur de la hauteur relative à ce côté.\";\n          break;\n\n        case \"pcercle\":\n          texte = \"Donner une formule de la longueur d'un cercle (aussi appelée circonférence).\";\n          texteCorr = \"$\\\\mathcal{P}_{\\\\text{cercle}}=D\\\\times \\\\pi = 2\\\\times R \\\\times \\\\pi = 2\\\\pi{}R$<br><br>\";\n          texteCorr += \"Avec $D$ le diamètre et $R$ le rayon de ce cercle.\";\n          break;\n\n        case \"acercle\":\n          texte = \"Donner une formule de l'aire d'un disque.\";\n          texteCorr = \"$\\\\mathcal{A}_{\\\\text{disque}}=R\\\\times R\\\\times\\\\pi=\\\\pi R^2$<br><br>\";\n          texteCorr += \"Avec $R$ le rayon de ce disque.\";\n          break;\n      }\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  }; //this.besoinFormulaireNumerique = ['Niveau de difficulté',3];\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZNMjUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvNmUvNk0yNS5qcz8yMmQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQge2xpc3RlUXVlc3Rpb25zVG9Db250ZW51LGNvbWJpbmFpc29uTGlzdGVzfSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcbmV4cG9ydCBjb25zdCB0aXRyZSA9ICdDb25uYWl0cmUgbGUgY291cnMgc3VyIGxlIHDDqXJpbcOodHJlIGV0IGzigJlhaXJlJ1xuXG4vKipcbiAqIENpdGVyIGRlcyBmb3JtdWxlcyBkZSBww6lyaW3DqHRyZSwgZGVzIGZvcm11bGVzIGQnYWlyZSBvdSBsYSBkw6lmaW5pdGlvbiBkZSDPgFxuICogQEF1dGV1ciBSw6ltaSBBbmdvdFxuICogUsOpZsOpcmVuY2UgNk0yNVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25uYWl0cmVfZm9ybXVsZXNfZGVfcGVyaW1ldHJlX2V0X2FpcmVzKCkge1xuICBFeGVyY2ljZS5jYWxsKHRoaXMpOyAvLyBIw6lyaXRhZ2UgZGUgbGEgY2xhc3NlIEV4ZXJjaWNlKClcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLmNvbnNpZ25lID0gXCJDYWxjdWxlclwiO1xuICB0aGlzLm5iUXVlc3Rpb25zID0gNDtcbiAgdGhpcy5uYkNvbHMgPSAxO1xuICB0aGlzLm5iQ29sc0NvcnIgPSAxO1xuXG4gIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9ucyBjb3JyaWfDqWVzXG4gICAgbGV0IGxpc3RlVHlwZURlUXVlc3Rpb25zID0gY29tYmluYWlzb25MaXN0ZXMoXG4gICAgICBbXG4gICAgICAgIFwicGlcIixcbiAgICAgICAgXCJwcmVjdGFuZ2xlXCIsXG4gICAgICAgIFwicGNhcnJlXCIsXG4gICAgICAgIFwiYWNhcnJlXCIsXG4gICAgICAgIFwiYXJlY3RhbmdsZVwiLFxuICAgICAgICBcInBjZXJjbGVcIixcbiAgICAgICAgXCJhY2VyY2xlXCIsXG4gICAgICAgIFwiYXRyaWFuZ2xlcmVjdGFuZ2xlXCIsXG4gICAgICAgIFwiYXRyaWFuZ2xlXCIsXG4gICAgICBdLFxuICAgICAgdGhpcy5uYlF1ZXN0aW9uc1xuICAgICk7XG4gICAgZm9yIChcbiAgICAgIGxldCBpID0gMCwgdGV4dGUsIHRleHRlQ29yciwgY3B0ID0gMDtcbiAgICAgIGkgPCB0aGlzLm5iUXVlc3Rpb25zICYmIGNwdCA8IDUwO1xuXG4gICAgKSB7XG4gICAgICBzd2l0Y2ggKGxpc3RlVHlwZURlUXVlc3Rpb25zW2ldKSB7XG4gICAgICAgIGNhc2UgXCJwaVwiOlxuICAgICAgICAgIHRleHRlID0gXCJSYXBwZWxlciBsYSBkw6lmaW5pdGlvbiBkdSBub21icmUgJFxcXFxwaSQuXCI7XG4gICAgICAgICAgdGV4dGVDb3JyID0gXCIkXFxcXHBpJCBlc3QgbGEgbG9uZ3VldXIgZCd1biBjZXJjbGUgZGUgZGlhbcOodHJlIDEuXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJwcmVjdGFuZ2xlXCI6XG4gICAgICAgICAgdGV4dGUgPSBcIkRvbm5lciB1bmUgZm9ybXVsZSBkdSBww6lyaW3DqHRyZSBkdSByZWN0YW5nbGUuXCI7XG4gICAgICAgICAgdGV4dGVDb3JyID1cbiAgICAgICAgICAgIFwiJFxcXFxtYXRoY2Fse1B9X3tcXFxcdGV4dHtyZWN0YW5nbGV9fT0oTCtsKVxcXFx0aW1lczI9TFxcXFx0aW1lczIrbFxcXFx0aW1lczI9TCtsK0w9bCQ8YnI+PGJyPlwiO1xuICAgICAgICAgIHRleHRlQ29yciArPSBcIkF2ZWMgJEwkIGxhIGxvbmd1ZXVyIGV0ICRsJCBsYSBsYXJnZXVyIGR1IHJlY3RhbmdsZS5cIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInBjYXJyZVwiOlxuICAgICAgICAgIHRleHRlID0gXCJEb25uZXIgdW5lIGZvcm11bGUgZHUgcMOpcmltw6h0cmUgZHUgY2FycsOpLlwiO1xuICAgICAgICAgIHRleHRlQ29yciA9XG4gICAgICAgICAgICBcIiRcXFxcbWF0aGNhbHtQfV97XFxcXHRleHR7Y2FycsOpfX09Y1xcXFx0aW1lczQ9YytjK2MrYyQ8YnI+PGJyPlwiO1xuICAgICAgICAgIHRleHRlQ29yciArPSBcIkF2ZWMgJGMkIGxhIGxvbmd1ZXVyIGR1IGPDtHTDqSBkdSBjYXJyw6kuXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhcmVjdGFuZ2xlXCI6XG4gICAgICAgICAgdGV4dGUgPSBcIkRvbm5lciB1bmUgZm9ybXVsZSBkZSBsJ2FpcmUgZHUgcmVjdGFuZ2xlLlwiO1xuICAgICAgICAgIHRleHRlQ29yciA9IFwiJFxcXFxtYXRoY2Fse0F9X3tcXFxcdGV4dHtyZWN0YW5nbGV9fT1MXFxcXHRpbWVzIGwkPGJyPjxicj5cIjtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gXCJBdmVjICRMJCBsYSBsb25ndWV1ciBldCAkbCQgbGEgbGFyZ2V1ciBkdSByZWN0YW5nbGUuXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhY2FycmVcIjpcbiAgICAgICAgICB0ZXh0ZSA9IFwiRG9ubmVyIHVuZSBmb3JtdWxlIGRlIGwnYWlyZSBkdSBjYXJyw6kuXCI7XG4gICAgICAgICAgdGV4dGVDb3JyID0gXCIkXFxcXG1hdGhjYWx7QX1fe1xcXFx0ZXh0e2NhcnLDqX19PWNcXFxcdGltZXMgYz1jXjIkPGJyPjxicj5cIjtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gXCJBdmVjICRjJCBsYSBsb25ndWV1ciBkdSBjw7R0w6kgZHUgY2FycsOpLlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYXRyaWFuZ2xlcmVjdGFuZ2xlXCI6XG4gICAgICAgICAgdGV4dGUgPSBcIkRvbm5lciB1bmUgZm9ybXVsZSBkZSBsJ2FpcmUgZHUgdHJpYW5nbGUgcmVjdGFuZ2xlLlwiO1xuICAgICAgICAgIHRleHRlQ29yciA9XG4gICAgICAgICAgICBcIiRcXFxcbWF0aGNhbHtBfV97XFxcXHRleHR7dHJpYW5nbGUgcmVjdGFuZ2xlfX09YVxcXFx0aW1lcyBiIFxcXFxkaXYyPVxcXFxkZnJhY3thXFxcXHRpbWVzIGJ9ezJ9JDxicj48YnI+XCI7XG4gICAgICAgICAgdGV4dGVDb3JyICs9XG4gICAgICAgICAgICBcIkF2ZWMgJGEkIGV0ICRiJCBsZXMgbG9uZ3VldXJzIGRlcyBjw7R0w6lzIGRlIGwnYW5nbGUgZHJvaXQuXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJhdHJpYW5nbGVcIjpcbiAgICAgICAgICB0ZXh0ZSA9IFwiRG9ubmVyIHVuZSBmb3JtdWxlIGRlIGwnYWlyZSBkJ3VuIHRyaWFuZ2xlIHF1ZWxjb25xdWUuXCI7XG4gICAgICAgICAgdGV4dGVDb3JyID1cbiAgICAgICAgICAgIFwiJFxcXFxtYXRoY2Fse0F9X3tcXFxcdGV4dHt0cmlhbmdsZSByZWN0YW5nbGV9fT1iXFxcXHRpbWVzIGggXFxcXGRpdjI9XFxcXGRmcmFje2JcXFxcdGltZXMgaH17Mn0kPGJyPjxicj5cIjtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz1cbiAgICAgICAgICAgIFwiQXZlYyAkYiQgbGEgbG9uZ3VldXIgZCd1biBjw7R0w6kgZXQgJGgkIGxhIGxvbmd1ZXVyIGRlIGxhIGhhdXRldXIgcmVsYXRpdmUgw6AgY2UgY8O0dMOpLlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicGNlcmNsZVwiOlxuICAgICAgICAgIHRleHRlID1cbiAgICAgICAgICAgIFwiRG9ubmVyIHVuZSBmb3JtdWxlIGRlIGxhIGxvbmd1ZXVyIGQndW4gY2VyY2xlIChhdXNzaSBhcHBlbMOpZSBjaXJjb25mw6lyZW5jZSkuXCI7XG4gICAgICAgICAgdGV4dGVDb3JyID1cbiAgICAgICAgICAgIFwiJFxcXFxtYXRoY2Fse1B9X3tcXFxcdGV4dHtjZXJjbGV9fT1EXFxcXHRpbWVzIFxcXFxwaSA9IDJcXFxcdGltZXMgUiBcXFxcdGltZXMgXFxcXHBpID0gMlxcXFxwaXt9UiQ8YnI+PGJyPlwiO1xuICAgICAgICAgIHRleHRlQ29yciArPSBcIkF2ZWMgJEQkIGxlIGRpYW3DqHRyZSBldCAkUiQgbGUgcmF5b24gZGUgY2UgY2VyY2xlLlwiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiYWNlcmNsZVwiOlxuICAgICAgICAgIHRleHRlID0gXCJEb25uZXIgdW5lIGZvcm11bGUgZGUgbCdhaXJlIGQndW4gZGlzcXVlLlwiO1xuICAgICAgICAgIHRleHRlQ29yciA9XG4gICAgICAgICAgICBcIiRcXFxcbWF0aGNhbHtBfV97XFxcXHRleHR7ZGlzcXVlfX09UlxcXFx0aW1lcyBSXFxcXHRpbWVzXFxcXHBpPVxcXFxwaSBSXjIkPGJyPjxicj5cIjtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gXCJBdmVjICRSJCBsZSByYXlvbiBkZSBjZSBkaXNxdWUuXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmxpc3RlUXVlc3Rpb25zLmluZGV4T2YodGV4dGUpID09IC0xKSB7XG4gICAgICAgIC8vIFNpIGxhIHF1ZXN0aW9uIG4nYSBqYW1haXMgw6l0w6kgcG9zw6llLCBvbiBlbiBjcsOpZSB1bmUgYXV0cmVcbiAgICAgICAgdGhpcy5saXN0ZVF1ZXN0aW9ucy5wdXNoKHRleHRlKTtcbiAgICAgICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zLnB1c2godGV4dGVDb3JyKTtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgICAgY3B0Kys7XG4gICAgfVxuICAgIGxpc3RlUXVlc3Rpb25zVG9Db250ZW51KHRoaXMpO1xuICB9O1xuICAvL3RoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IFsnTml2ZWF1IGRlIGRpZmZpY3VsdMOpJywzXTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFhQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFyREE7QUFDQTtBQXVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6M25.js\n");

/***/ }),

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice() {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigneCorrection = '';\n  this.listeQuestions = [];\n  this.listeCorrections = [];\n  this.introduction = '';\n  this.contenu = '';\n  this.contenuCorrection = '';\n  this.nbQuestions = 10;\n  this.nbCols = 2;\n  this.nbColsCorr = 2;\n  this.spacing = 1;\n  this.spacingCorr = 1;\n  this.beamer = false;\n  this.besoinFormulaireNumerique = false; // Sinon this.besoinFormulaireNumerique = [texte,max,tooltip facultatif];\n\n  this.besoinFormulaireTexte = false; // Sinon this.besoinFormulaireTexte = [texte,tooltip];\n\n  this.besoinFormulaireCaseACocher = false; // Sinon this.besoinFormulaireCaseACocher = [texte];\n\n  this.consigneModifiable = true;\n  this.nbQuestionsModifiable = true;\n  this.nbColsModifiable = true;\n  this.nbColsCorrModifiable = true;\n  this.spacingModifiable = true;\n  this.spacingCorrModifiable = true;\n  this.correctionDetailleeDisponible = false;\n  this.correctionDetaillee = true;\n  this.video = '';\n  this.boutonAide = false;\n  this.tailleDiaporama = 50; // Taille en pixels pour le calcul chronométré\n  // this.boutonAide = modalTexteCourt(numeroExercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalTexteLong(numeroExercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalYoutube(numeroExercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.boutonAide = modalPdf(numeroExercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n\n  this.pasDeVersionLatex = false;\n  this.qcm = false; // Pour les exercices de type QCM : contient un tableau.\n\n  this.qcmDisponible = false; // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.modeQcm\n\n  this.modeQcm = false; // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.mg32Editable = false; // pas d'interface par défaut pour les figures MG32\n\n  this.nouvelleVersion = function (numeroExercice) {};\n\n  this.listePackages = []; // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  // this.typeExercice = \"MG32\";\n  // this.dimensionsDivMg32 = [500, 450];\n  // this.typeExercice = \"Scratch\"\n  // this.qcm=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGFsZWEvLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzP2RiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogIENsYXNzZSBwYXJlbnRlIGRlIHRvdXMgbGVzIGV4ZXJjaWNlc1xuICpcbiAqIEBBdXRldXIgUsOpbWkgQW5nb3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpY2UgKCkge1xuICAvLyBDbGFzc2UgcGFyZW50ZSBkZSB0b3VzIGxlcyBleGVyY2ljZXMgcXVpIHNlcm9udCBjcsOpw6lzXG4gIHRoaXMudGl0cmUgPSAnJ1xuICB0aGlzLmNvbnNpZ25lID0gJydcbiAgdGhpcy5jb25zaWduZUNvcnJlY3Rpb24gPSAnJ1xuICB0aGlzLmxpc3RlUXVlc3Rpb25zID0gW11cbiAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW11cbiAgdGhpcy5pbnRyb2R1Y3Rpb24gPSAnJ1xuICB0aGlzLmNvbnRlbnUgPSAnJ1xuICB0aGlzLmNvbnRlbnVDb3JyZWN0aW9uID0gJydcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDEwXG4gIHRoaXMubmJDb2xzID0gMlxuICB0aGlzLm5iQ29sc0NvcnIgPSAyXG4gIHRoaXMuc3BhY2luZyA9IDFcbiAgdGhpcy5zcGFjaW5nQ29yciA9IDFcbiAgdGhpcy5iZWFtZXIgPSBmYWxzZVxuXG4gIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IGZhbHNlIC8vIFNpbm9uIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IFt0ZXh0ZSxtYXgsdG9vbHRpcCBmYWN1bHRhdGlmXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlVGV4dGUgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVUZXh0ZSA9IFt0ZXh0ZSx0b29sdGlwXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlQ2FzZUFDb2NoZXIgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVDYXNlQUNvY2hlciA9IFt0ZXh0ZV07XG4gIHRoaXMuY29uc2lnbmVNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iUXVlc3Rpb25zTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5uYkNvbHNNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iQ29sc0NvcnJNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdDb3JyTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5jb3JyZWN0aW9uRGV0YWlsbGVlRGlzcG9uaWJsZSA9IGZhbHNlXG4gIHRoaXMuY29ycmVjdGlvbkRldGFpbGxlZSA9IHRydWVcbiAgdGhpcy52aWRlbyA9ICcnXG4gIHRoaXMuYm91dG9uQWlkZSA9IGZhbHNlXG4gIHRoaXMudGFpbGxlRGlhcG9yYW1hID0gNTAgLy8gVGFpbGxlIGVuIHBpeGVscyBwb3VyIGxlIGNhbGN1bCBjaHJvbm9tw6l0csOpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsVGV4dGVDb3VydChudW1lcm9FeGVyY2ljZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFRleHRlTG9uZyhudW1lcm9FeGVyY2ljZSx0aXRyZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFlvdXR1YmUobnVtZXJvRXhlcmNpY2UsaWRfeW91dHViZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlIC0gVmlkw6lvXCIsaWNvbmU9XCJ5b3V0dWJlXCIpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsUGRmKG51bWVyb0V4ZXJjaWNlLHVybF9wZGYsdGV4dGU9XCJBaWRlXCIsbGFiZWxfYm91dG9uPVwiQWlkZSAtIFBERlwiLGljb25lPVwiZmlsZSBwZGZcIilcbiAgLy8gdGhpcy52c3BhY2UgPSAtMSAvL0Fqb3V0ZSB1biBcXHZzcGFjZXstMWNtfSBhdmFudCBsJ8Opbm9uY8OpIGNlIHF1aSBwZXV0IMOqdHJlIHByYXRpcXVlIHBvdXIgZGVzIGV4ZXJjaWNlcyBhdmVjIGRlcyBmaWd1cmVzLlxuICB0aGlzLnBhc0RlVmVyc2lvbkxhdGV4ID0gZmFsc2VcbiAgdGhpcy5xY20gPSBmYWxzZSAvLyBQb3VyIGxlcyBleGVyY2ljZXMgZGUgdHlwZSBRQ00gOiBjb250aWVudCB1biB0YWJsZWF1LlxuICB0aGlzLnFjbURpc3BvbmlibGUgPSBmYWxzZSAvLyBQb3VyIGFqb3V0ZXIgdW5lIGNhc2Ugw6AgY29jaGVyIE1vZGUgUUNNIHF1aSBwZXJtZXQgZGUgY2hhbmdlciBsZSBzdGF0dXQgZGUgdGhpcy5tb2RlUWNtXG4gIHRoaXMubW9kZVFjbSA9IGZhbHNlIC8vIFBvdXIgY2hvaXNpciBsYSB2ZXJzaW9uIFFDTSBvdSBsYSB2ZXJzaW9uIGNsYXNzaXF1ZSAoZmFsc2UgPSB2ZXJzaW9uIGNsYXNzaXF1ZSlcblxuICB0aGlzLm1nMzJFZGl0YWJsZSA9IGZhbHNlIC8vIHBhcyBkJ2ludGVyZmFjZSBwYXIgZMOpZmF1dCBwb3VyIGxlcyBmaWd1cmVzIE1HMzJcbiAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAobnVtZXJvRXhlcmNpY2UpIHt9XG4gIHRoaXMubGlzdGVQYWNrYWdlcyA9IFtdIC8vIHN0cmluZyBvdSBsaXN0ZSBkZSBzdHJpbmcgYXZlYyBsZSBub20gZGVzIHBhY2thZ2VzIHNww6ljaWZpcXVlcyDDoCBham91dGVyIGRhbnMgbGUgcHLDqWFtYnVsZVxuICAvLyB0aGlzLnR5cGVFeGVyY2ljZSA9IFwiTUczMlwiO1xuICAvLyB0aGlzLmRpbWVuc2lvbnNEaXZNZzMyID0gWzUwMCwgNDUwXTtcbiAgLy8gdGhpcy50eXBlRXhlcmNpY2UgPSBcIlNjcmF0Y2hcIlxuICAvLyB0aGlzLnFjbT1bXCJRdWVscyBzb250IGxlcyBub21icmVzIHBhaXJzID9cIixbNywxMiwzNCwyNSwxOF0sWzAsMSwxLDAsMV1dID0+W1wiTGEgcXVlc3Rpb25cIixbbGVzIHLDqXBvbnNlc10sW2Jvbm5lPTEgZXQgbWF1dmFpc2U9MF1dXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/ClasseExercice.js\n");

/***/ })

}]);