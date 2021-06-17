/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6N31_js"],{

/***/ "./src/js/exercices/6e/6N31.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6N31.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Comparer_decimaux)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Comparer des nombres décimaux';\n/**\n * Comparer deux nombres décimaux\n *\n * Les types de comparaisons sont :\n * * ab ? ba\n * * aa,bb ? aa,cc\n * * a,b  a,cc avec b>c\n * * 0,ab 0,ba\n * * 0,a0b 0,b0a\n * * a,b a,b0\n * * 0,0ab 0,0a0b\n * * a,bb  a,ccc avec b>c\n * * a+1,bb  a,cccc avec cccc>bb\n *\n * aa, bb, cc correspondent à des nombres à 2 chiffres (ces 2 chiffres pouvant être distincts)\n * @Auteur Rémi Angot\n * 6N31\n */\n\nfunction Comparer_decimaux() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"Compléter avec le signe < , > ou =.\";\n  this.nbQuestions = 8;\n  this.nbCols = 2;\n  this.nbColsCorr = 2;\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let type_de_questions_disponibles = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, 4, 5]), 2, 2, 3, 6, 7, 8, 9]; // une seule question du type inversion de chiffres (1,4,5)\n\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaisonListes)(type_de_questions_disponibles, this.nbQuestions); // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n\n    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {\n      let x,\n          y,\n          a,\n          b,\n          c,\n          zero_inutile = false;\n\n      switch (listeTypeDeQuestions[i]) {\n        case 1:\n          // ab ba\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, a);\n          x = a * 10 + b;\n          y = b * 10 + a;\n          break;\n\n        case 2:\n          // aa,bb aa,cc\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 99);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + b / 100);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + c / 100);\n          break;\n\n        case 3:\n          // a,b  a,cc avec b>c\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 99);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 8);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, b * 10);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + b / 10);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + c / 100);\n          break;\n\n        case 4:\n          // 0,ab 0,ba\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, a);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a * 10 + b) / 100);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((b * 10 + a) / 100);\n          break;\n\n        case 5:\n          // 0,a0b 0,b0a\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, a);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a * 100 + b) / 1000);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((b * 100 + a) / 1000);\n          break;\n\n        case 6:\n          // a,b a,b0\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 999);\n\n          while (a % 10 == 0) {\n            // pas de nombre divisible par 10\n            a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 999);\n          }\n\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a / 10);\n          y = x;\n          zero_inutile = true;\n          break;\n\n        case 7:\n          // 0,0ab 0,0a0b\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a / 100 + b / 1000);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a / 100 + b / 10000);\n          break;\n\n        case 8:\n          // a,bb  a,ccc avec b>c\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(100, b * 10);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + b / 100);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + c / 1000);\n\n          if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2) == 1) {\n            [x, y] = [y, x];\n          }\n\n          break;\n\n        case 9:\n          // a+1,bb  a,cccc avec cccc>bb\n          a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 98);\n          b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n          c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(b * 100, 10000);\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + 1 + b / 100);\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a + c / 10000);\n\n          if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2) == 1) {\n            [x, y] = [y, x];\n          }\n\n          break;\n      }\n\n      texte = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)}\\\\ldots\\\\ldots${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n\n      if (parseFloat(x) > parseFloat(y)) {\n        texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} > ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n      } else if (parseFloat(x) < parseFloat(y)) {\n        texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} < ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n      } else {\n        texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n      }\n\n      if (zero_inutile) {\n        if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2) == 1) {\n          texte = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(x)}\\\\ldots\\\\ldots${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n\n          if (parseFloat(x) > parseFloat(y)) {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(x)} > ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n          } else if (parseFloat(x) < parseFloat(y)) {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(x)} < ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n          } else {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(x)} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(y)}`;\n          }\n        } else {\n          texte = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)}\\\\ldots\\\\ldots${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(y)}`;\n\n          if (parseFloat(x) > parseFloat(y)) {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} > ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(y)}`;\n          } else if (parseFloat(x) < parseFloat(y)) {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} < ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(y)}`;\n          } else {\n            texteCorr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(x)} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(y)}`;\n          }\n        }\n      }\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZOMzEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvNmUvNk4zMS5qcz82YjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQge2xpc3RlUXVlc3Rpb25zVG9Db250ZW51LHJhbmRpbnQsY2hvaWNlLGNvbWJpbmFpc29uTGlzdGVzLGNhbGN1bCx0ZXhOb21icmUsdGV4X3ByaXh9IGZyb20gJy4uLy4uL21vZHVsZXMvb3V0aWxzLmpzJ1xuZXhwb3J0IGNvbnN0IHRpdHJlID0gJ0NvbXBhcmVyIGRlcyBub21icmVzIGTDqWNpbWF1eCdcblxuLyoqXG4gKiBDb21wYXJlciBkZXV4IG5vbWJyZXMgZMOpY2ltYXV4XG4gKlxuICogTGVzIHR5cGVzIGRlIGNvbXBhcmFpc29ucyBzb250IDpcbiAqICogYWIgPyBiYVxuICogKiBhYSxiYiA/IGFhLGNjXG4gKiAqIGEsYiAgYSxjYyBhdmVjIGI+Y1xuICogKiAwLGFiIDAsYmFcbiAqICogMCxhMGIgMCxiMGFcbiAqICogYSxiIGEsYjBcbiAqICogMCwwYWIgMCwwYTBiXG4gKiAqIGEsYmIgIGEsY2NjIGF2ZWMgYj5jXG4gKiAqIGErMSxiYiAgYSxjY2NjIGF2ZWMgY2NjYz5iYlxuICpcbiAqIGFhLCBiYiwgY2MgY29ycmVzcG9uZGVudCDDoCBkZXMgbm9tYnJlcyDDoCAyIGNoaWZmcmVzIChjZXMgMiBjaGlmZnJlcyBwb3V2YW50IMOqdHJlIGRpc3RpbmN0cylcbiAqIEBBdXRldXIgUsOpbWkgQW5nb3RcbiAqIDZOMzFcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGFyZXJfZGVjaW1hdXgoKSB7XG4gIEV4ZXJjaWNlLmNhbGwodGhpcyk7IC8vIEjDqXJpdGFnZSBkZSBsYSBjbGFzc2UgRXhlcmNpY2UoKVxuICB0aGlzLnRpdHJlID0gdGl0cmU7XG4gIHRoaXMuY29uc2lnbmUgPSBcIkNvbXBsw6l0ZXIgYXZlYyBsZSBzaWduZSA8ICwgPiBvdSA9LlwiO1xuICB0aGlzLm5iUXVlc3Rpb25zID0gODtcbiAgdGhpcy5uYkNvbHMgPSAyO1xuICB0aGlzLm5iQ29sc0NvcnIgPSAyO1xuXG4gIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9ucyBjb3JyaWfDqWVzXG5cbiAgICBsZXQgdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMgPSBbXG4gICAgICBjaG9pY2UoWzEsIDQsIDVdKSxcbiAgICAgIDIsXG4gICAgICAyLFxuICAgICAgMyxcbiAgICAgIDYsXG4gICAgICA3LFxuICAgICAgOCxcbiAgICAgIDksXG4gICAgXTsgLy8gdW5lIHNldWxlIHF1ZXN0aW9uIGR1IHR5cGUgaW52ZXJzaW9uIGRlIGNoaWZmcmVzICgxLDQsNSlcbiAgICBsZXQgbGlzdGVUeXBlRGVRdWVzdGlvbnMgPSBjb21iaW5haXNvbkxpc3RlcyhcbiAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzLFxuICAgICAgdGhpcy5uYlF1ZXN0aW9uc1xuICAgICk7IC8vIFRvdXMgbGVzIHR5cGVzIGRlIHF1ZXN0aW9ucyBzb250IHBvc8OpZXMgbWFpcyBsJ29yZHJlIGRpZmbDqHJlIMOgIGNoYXF1ZSBcImN5Y2xlXCJcblxuICAgIGZvciAoXG4gICAgICBsZXQgaSA9IDAsIHRleHRlLCB0ZXh0ZUNvcnIsIGNwdCA9IDA7XG4gICAgICBpIDwgdGhpcy5uYlF1ZXN0aW9ucyAmJiBjcHQgPCA1MDtcblxuICAgICkge1xuICAgICAgbGV0IHgsXG4gICAgICAgIHksXG4gICAgICAgIGEsXG4gICAgICAgIGIsXG4gICAgICAgIGMsXG4gICAgICAgIHplcm9faW51dGlsZSA9IGZhbHNlO1xuXG4gICAgICBzd2l0Y2ggKGxpc3RlVHlwZURlUXVlc3Rpb25zW2ldKSB7XG4gICAgICAgIGNhc2UgMTogLy8gYWIgYmFcbiAgICAgICAgICBhID0gcmFuZGludCgxLCA5KTtcbiAgICAgICAgICBiID0gcmFuZGludCgxLCA5LCBhKTtcbiAgICAgICAgICB4ID0gYSAqIDEwICsgYjtcbiAgICAgICAgICB5ID0gYiAqIDEwICsgYTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAyOiAvLyBhYSxiYiBhYSxjY1xuICAgICAgICAgIGEgPSByYW5kaW50KDEsIDk5KTtcbiAgICAgICAgICBiID0gcmFuZGludCgxMSwgOTkpO1xuICAgICAgICAgIGMgPSByYW5kaW50KDExLCA5OSk7XG4gICAgICAgICAgeCA9IGNhbGN1bChhICsgYiAvIDEwMCk7XG4gICAgICAgICAgeSA9IGNhbGN1bChhICsgYyAvIDEwMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogLy8gYSxiICBhLGNjIGF2ZWMgYj5jXG4gICAgICAgICAgYSA9IHJhbmRpbnQoMSwgOTkpO1xuICAgICAgICAgIGIgPSByYW5kaW50KDEsIDgpO1xuICAgICAgICAgIGMgPSByYW5kaW50KDEsIGIgKiAxMCk7XG4gICAgICAgICAgeCA9IGNhbGN1bChhICsgYiAvIDEwKTtcbiAgICAgICAgICB5ID0gY2FsY3VsKGEgKyBjIC8gMTAwKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiAvLyAwLGFiIDAsYmFcbiAgICAgICAgICBhID0gcmFuZGludCgxLCA5KTtcbiAgICAgICAgICBiID0gcmFuZGludCgxLCA5LCBhKTtcbiAgICAgICAgICB4ID0gY2FsY3VsKChhICogMTAgKyBiKSAvIDEwMCk7XG4gICAgICAgICAgeSA9IGNhbGN1bCgoYiAqIDEwICsgYSkgLyAxMDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDU6IC8vIDAsYTBiIDAsYjBhXG4gICAgICAgICAgYSA9IHJhbmRpbnQoMSwgOSk7XG4gICAgICAgICAgYiA9IHJhbmRpbnQoMSwgOSwgYSk7XG4gICAgICAgICAgeCA9IGNhbGN1bCgoYSAqIDEwMCArIGIpIC8gMTAwMCk7XG4gICAgICAgICAgeSA9IGNhbGN1bCgoYiAqIDEwMCArIGEpIC8gMTAwMCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNjogLy8gYSxiIGEsYjBcbiAgICAgICAgICBhID0gcmFuZGludCgxMSwgOTk5KTtcbiAgICAgICAgICB3aGlsZSAoYSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIC8vIHBhcyBkZSBub21icmUgZGl2aXNpYmxlIHBhciAxMFxuICAgICAgICAgICAgYSA9IHJhbmRpbnQoMTEsIDk5OSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHggPSBjYWxjdWwoYSAvIDEwKTtcbiAgICAgICAgICB5ID0geDtcbiAgICAgICAgICB6ZXJvX2ludXRpbGUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDc6IC8vIDAsMGFiIDAsMGEwYlxuICAgICAgICAgIGEgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIGIgPSByYW5kaW50KDEsIDkpO1xuICAgICAgICAgIHggPSBjYWxjdWwoYSAvIDEwMCArIGIgLyAxMDAwKTtcbiAgICAgICAgICB5ID0gY2FsY3VsKGEgLyAxMDAgKyBiIC8gMTAwMDApO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDg6IC8vIGEsYmIgIGEsY2NjIGF2ZWMgYj5jXG4gICAgICAgICAgYSA9IHJhbmRpbnQoMTEsIDk5KTtcbiAgICAgICAgICBiID0gcmFuZGludCgxMSwgOTkpO1xuICAgICAgICAgIGMgPSByYW5kaW50KDEwMCwgYiAqIDEwKTtcbiAgICAgICAgICB4ID0gY2FsY3VsKGEgKyBiIC8gMTAwKTtcbiAgICAgICAgICB5ID0gY2FsY3VsKGEgKyBjIC8gMTAwMCk7XG4gICAgICAgICAgaWYgKHJhbmRpbnQoMSwgMikgPT0gMSkge1xuICAgICAgICAgICAgW3gsIHldID0gW3ksIHhdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA5OiAvLyBhKzEsYmIgIGEsY2NjYyBhdmVjIGNjY2M+YmJcbiAgICAgICAgICBhID0gcmFuZGludCgxMSwgOTgpO1xuICAgICAgICAgIGIgPSByYW5kaW50KDExLCA5OSk7XG4gICAgICAgICAgYyA9IHJhbmRpbnQoYiAqIDEwMCwgMTAwMDApO1xuICAgICAgICAgIHggPSBjYWxjdWwoYSArIDEgKyBiIC8gMTAwKTtcbiAgICAgICAgICB5ID0gY2FsY3VsKGEgKyBjIC8gMTAwMDApO1xuICAgICAgICAgIGlmIChyYW5kaW50KDEsIDIpID09IDEpIHtcbiAgICAgICAgICAgIFt4LCB5XSA9IFt5LCB4XTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHRleHRlID0gYCR7dGV4Tm9tYnJlKHgpfVxcXFxsZG90c1xcXFxsZG90cyR7dGV4Tm9tYnJlKHkpfWA7XG4gICAgICBpZiAocGFyc2VGbG9hdCh4KSA+IHBhcnNlRmxvYXQoeSkpIHtcbiAgICAgICAgdGV4dGVDb3JyID0gYCR7dGV4Tm9tYnJlKHgpfSA+ICR7dGV4Tm9tYnJlKHkpfWA7XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoeCkgPCBwYXJzZUZsb2F0KHkpKSB7XG4gICAgICAgIHRleHRlQ29yciA9IGAke3RleE5vbWJyZSh4KX0gPCAke3RleE5vbWJyZSh5KX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dGVDb3JyID0gYCR7dGV4Tm9tYnJlKHgpfSA9ICR7dGV4Tm9tYnJlKHkpfWA7XG4gICAgICB9XG5cbiAgICAgIGlmICh6ZXJvX2ludXRpbGUpIHtcbiAgICAgICAgaWYgKHJhbmRpbnQoMSwgMikgPT0gMSkge1xuICAgICAgICAgIHRleHRlID0gYCR7dGV4X3ByaXgoeCl9XFxcXGxkb3RzXFxcXGxkb3RzJHt0ZXhOb21icmUoeSl9YDtcbiAgICAgICAgICBpZiAocGFyc2VGbG9hdCh4KSA+IHBhcnNlRmxvYXQoeSkpIHtcbiAgICAgICAgICAgIHRleHRlQ29yciA9IGAke3RleF9wcml4KHgpfSA+ICR7dGV4Tm9tYnJlKHkpfWA7XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHgpIDwgcGFyc2VGbG9hdCh5KSkge1xuICAgICAgICAgICAgdGV4dGVDb3JyID0gYCR7dGV4X3ByaXgoeCl9IDwgJHt0ZXhOb21icmUoeSl9YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dGVDb3JyID0gYCR7dGV4X3ByaXgoeCl9ID0gJHt0ZXhOb21icmUoeSl9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dGUgPSBgJHt0ZXhOb21icmUoeCl9XFxcXGxkb3RzXFxcXGxkb3RzJHt0ZXhfcHJpeCh5KX1gO1xuICAgICAgICAgIGlmIChwYXJzZUZsb2F0KHgpID4gcGFyc2VGbG9hdCh5KSkge1xuICAgICAgICAgICAgdGV4dGVDb3JyID0gYCR7dGV4Tm9tYnJlKHgpfSA+ICR7dGV4X3ByaXgoeSl9YDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcnNlRmxvYXQoeCkgPCBwYXJzZUZsb2F0KHkpKSB7XG4gICAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHt0ZXhOb21icmUoeCl9IDwgJHt0ZXhfcHJpeCh5KX1gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHt0ZXhOb21icmUoeCl9ID0gJHt0ZXhfcHJpeCh5KX1gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5saXN0ZVF1ZXN0aW9ucy5pbmRleE9mKHRleHRlKSA9PSAtMSkge1xuICAgICAgICAvLyBTaSBsYSBxdWVzdGlvbiBuJ2EgamFtYWlzIMOpdMOpIHBvc8OpZSwgb24gZW4gY3LDqWUgdW5lIGF1dHJlXG4gICAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMucHVzaCh0ZXh0ZSk7XG4gICAgICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucy5wdXNoKHRleHRlQ29ycik7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGNwdCsrO1xuICAgIH1cbiAgICBsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSh0aGlzKTtcbiAgfTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFJQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQXBFQTtBQUNBO0FBc0VBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6N31.js\n");

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