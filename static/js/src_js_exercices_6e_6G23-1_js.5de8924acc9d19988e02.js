/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6G23-1_js"],{

/***/ "./src/js/exercices/6e/6G23-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6G23-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amcReady\": () => (/* binding */ amcReady),\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Mesurer_un_angle)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst amcReady = true;\nconst titre = 'Mesurer un angle';\n/**\n * Construire un angle\n * @Auteur Jean-Claude Lhote\n * Référence 6G23\n */\n\nfunction Mesurer_un_angle() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"\";\n  this.nbQuestions = 2;\n  this.nbQuestionsModifiable = true;\n  this.nbCols = 2;\n  this.nbColsCorr = 2;\n  this.sup = 1;\n  this.video = \"TEzu9uky56M\";\n  this.qcmDisponible = true;\n  this.modeQcm = false;\n\n  this.nouvelleVersion = function () {\n    this.qcm = ['6G23-1', [], \"Estimer la mesure d'un angle.\", 1];\n    let tabrep, tabicone;\n    let espace = ``;\n\n    if (sortieHtml) {\n      espace = `&emsp;`;\n    } else {\n      espace = `\\\\qquad`;\n    }\n\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let angle,\n        anglerot,\n        Apos,\n        Bpos,\n        Cpos,\n        p,\n        texte,\n        texteCorr,\n        A,\n        B,\n        C,\n        s2,\n        s1,\n        bis,\n        signes = [];\n    let labels, secteur, xMin, xMax, yMin, yMax, objets_enonce, objets_correction, secteur0;\n\n    for (let i = 0; i < this.nbQuestions; i++) {\n      signes.push((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]));\n\n      if (this.sup == 1) {\n        angle = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 16, 9) * 10;\n      } else if (this.sup == 2) {\n        angle = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(4, 32, 18) * 5;\n      } else {\n        angle = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(20, 160, 90);\n      }\n\n      tabrep = [`$${angle}\\\\degree$`, `$${180 - angle}\\\\degree$`, `$${angle / 2}\\\\degree$`, `$${Math.round((180 + angle) / 2)}\\\\degree$`, `$180\\\\degree$`, `$90\\\\degree$`];\n      tabicone = [1, 0, 0, 0, 0, 0];\n      anglerot = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-180, 180);\n      angle = signes[i] * angle;\n      p = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(['x', 'y', 'z', 't']), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettreDepuisChiffre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 16)), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(['s', 'u', 'v', 'w'])];\n\n      if (this.modeQcm) {\n        texte = `Estime la mesure de l'angle $\\\\widehat{${p[0] + p[1] + p[2]}}$ sans instrument.<br>`;\n      } else {\n        texte = `Mesure l'angle $\\\\widehat{${p[0] + p[1] + p[2]}}$.<br>`;\n      }\n\n      A = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 0);\n      B = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(6, 0);\n      B = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(B, A, anglerot); // texte, A, orientation = \"milieu\", color = 'black', scale = 1, ancrageDeRotation = \"middle\", math_on = false\n\n      Bpos = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPoint)(p[0], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.similitude)(A, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.homothetie)(B, A, 0.95), signes[i] * 90, 0.1), 'milieu', 'black', 1, \"middle\", true);\n      s1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.demiDroite)(A, B);\n      C = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(B, A, angle);\n      bis = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(B, A, angle / 2);\n      Apos = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPoint)(p[1], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(A, bis, -0.5), 'milieu', 'black', 1, \"middle\", true);\n      Cpos = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPoint)(p[2], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.similitude)(A, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.homothetie)(C, A, 0.95), -signes[i] * 90, 0.1), 'milieu', 'black', 1, \"middle\", true);\n      s2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.demiDroite)(A, C);\n      labels = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(A, B, C);\n      secteur = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.afficheMesureAngle)(B, A, C);\n      secteur0 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.afficheMesureAngle)(B, A, C, 'black', 1.5, \" \");\n      texteCorr = ``;\n      xMin = Math.min(A.x, C.x, B.x) - 1;\n      xMax = Math.max(A.x, C.x, B.x) + 1;\n      yMin = Math.min(A.y, C.y, B.y) - 1;\n      yMax = Math.max(A.y, C.y, B.y) + 1;\n      mathalea.fenetreMathalea2d = [xMin, yMin, xMax, yMax];\n      objets_enonce = [s1, s2, labels, Apos, Bpos, Cpos, secteur0];\n      objets_correction = [s1, s2, labels, Apos, Bpos, Cpos, secteur];\n      texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n        xmin: xMin,\n        ymin: yMin,\n        xmax: xMax,\n        ymax: yMax,\n        pixelsParCm: 20,\n        scale: 0.8\n      }, objets_enonce);\n      texteCorr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n        xmin: xMin,\n        ymin: yMin,\n        xmax: xMax,\n        ymax: yMax,\n        pixelsParCm: 20,\n        scale: 0.7\n      }, objets_correction);\n      /**********************************************/\n      //Ajout pour AMC\n\n      this.qcm[1].push([`${texte}\\\\\\\\ \\n Réponses possibles : `, tabrep, tabicone]);\n      /********************************************/\n\n      if (this.modeQcm && !mathalea.sortieAMC) {\n        texte += `<br>  Réponses possibles : ${espace}  `;\n        texteCorr = '';\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle2tableaux)(tabrep, tabicone);\n\n        for (let _i = 0; _i < tabrep.length; _i++) {\n          texte += `$\\\\square\\\\;$ ${tabrep[_i]} ` + espace;\n\n          if (tabicone[_i] == 1) {\n            texteCorr += `$\\\\blacksquare\\\\;$ ${tabrep[_i]} ` + espace;\n          } else {\n            texteCorr += `$\\\\square\\\\;$ ${tabrep[_i]}` + espace;\n          }\n        }\n      }\n\n      this.listeQuestions.push(texte);\n      this.listeCorrections.push(texteCorr);\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  };\n\n  this.besoinFormulaireNumerique = ['Précision de l\\'angle', 3, '1 : Angle à 10°\\n2 : Angle à 5°\\n3 : Angle à 1°'];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZHMjMtMS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhhbGVhLy4vc3JjL2pzL2V4ZXJjaWNlcy82ZS82RzIzLTEuanM/MzNjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhlcmNpY2UgZnJvbSAnLi4vQ2xhc3NlRXhlcmNpY2UuanMnO1xuaW1wb3J0IHtsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSxyYW5kaW50LGNob2ljZSxsZXR0cmVEZXB1aXNDaGlmZnJlLHNodWZmbGUydGFibGVhdXgsdGV4Tm9tYnJlMn0gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdXRpbHMuanMnXG5pbXBvcnQge3BvaW50LGxhYmVsUG9pbnQscm90YXRpb24sbWF0aGFsZWEyZCxhZmZpY2hlTWVzdXJlQW5nbGUsaG9tb3RoZXRpZSxkZW1pRHJvaXRlLHRleHRlUGFyUG9pbnQsc2ltaWxpdHVkZSxiaXNzZWN0cmljZSxwb2ludFN1clNlZ21lbnR9IGZyb20gJy4uLy4uL21vZHVsZXMvMmQuanMnXG5cbmV4cG9ydCBjb25zdCBhbWNSZWFkeSA9IHRydWVcblxuZXhwb3J0IGNvbnN0IHRpdHJlID0gJ01lc3VyZXIgdW4gYW5nbGUnXG5cbi8qKlxuICogQ29uc3RydWlyZSB1biBhbmdsZVxuICogQEF1dGV1ciBKZWFuLUNsYXVkZSBMaG90ZVxuICogUsOpZsOpcmVuY2UgNkcyM1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXN1cmVyX3VuX2FuZ2xlKCkge1xuICBFeGVyY2ljZS5jYWxsKHRoaXMpOyAvLyBIw6lyaXRhZ2UgZGUgbGEgY2xhc3NlIEV4ZXJjaWNlKClcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLmNvbnNpZ25lID0gXCJcIjtcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDI7XG4gIHRoaXMubmJRdWVzdGlvbnNNb2RpZmlhYmxlPXRydWVcbiAgdGhpcy5uYkNvbHMgPSAyO1xuICB0aGlzLm5iQ29sc0NvcnIgPSAyO1xuICB0aGlzLnN1cD0xO1xuICB0aGlzLnZpZGVvPVwiVEV6dTl1a3k1Nk1cIlxuICB0aGlzLnFjbURpc3BvbmlibGU9dHJ1ZVxuICB0aGlzLm1vZGVRY209ZmFsc2VcblxuICB0aGlzLm5vdXZlbGxlVmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnFjbT1bJzZHMjMtMScsW10sXCJFc3RpbWVyIGxhIG1lc3VyZSBkJ3VuIGFuZ2xlLlwiLDFdXG4gICAgbGV0IHRhYnJlcCx0YWJpY29uZVxuICAgIGxldCBlc3BhY2UgPWBgO1xuICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICBlc3BhY2UgPSBgJmVtc3A7YDtcbiAgICB9IGVsc2Uge1xuICAgICAgZXNwYWNlID0gYFxcXFxxcXVhZGA7XG4gICAgfVxuICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9ucyBjb3JyaWfDqWVzXG5cbiAgICAgIGxldCBhbmdsZSxhbmdsZXJvdCxBcG9zLEJwb3MsQ3BvcyxwLHRleHRlLHRleHRlQ29ycixBLEIsQyxzMixzMSxiaXMsc2lnbmVzPVtdXG4gICAgICBsZXQgbGFiZWxzLHNlY3RldXIseE1pbix4TWF4LHlNaW4seU1heCxvYmpldHNfZW5vbmNlLG9iamV0c19jb3JyZWN0aW9uLHNlY3RldXIwXG5cbiAgICAgIGZvciAobGV0IGk9MDtpPHRoaXMubmJRdWVzdGlvbnM7aSsrKXtcbiAgICAgICAgc2lnbmVzLnB1c2goY2hvaWNlKFstMSwxXSkpXG4gICAgICBpZiAodGhpcy5zdXA9PTEpIHtcbiAgICAgICAgICBhbmdsZSA9IHJhbmRpbnQgKDIsMTYsOSkqMTBcbiAgICAgIH0gXG4gICAgICBlbHNlIGlmICh0aGlzLnN1cD09Mil7XG4gICAgICAgICAgYW5nbGUgPSByYW5kaW50KDQsMzIsMTgpKjVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGFuZ2xlID0gcmFuZGludCgyMCwxNjAsOTApXG4gICAgICB9XG4gICAgICB0YWJyZXA9W2AkJHthbmdsZX1cXFxcZGVncmVlJGAsYCQkezE4MC1hbmdsZX1cXFxcZGVncmVlJGAsYCQke2FuZ2xlLzJ9XFxcXGRlZ3JlZSRgLGAkJHtNYXRoLnJvdW5kKCgxODArYW5nbGUpLzIpfVxcXFxkZWdyZWUkYCxgJDE4MFxcXFxkZWdyZWUkYCxgJDkwXFxcXGRlZ3JlZSRgXVxuICAgICAgdGFiaWNvbmU9WzEsMCwwLDAsMCwwXVxuICAgICAgYW5nbGVyb3Q9cmFuZGludCgtMTgwLDE4MClcbiAgICAgIGFuZ2xlPXNpZ25lc1tpXSphbmdsZVxuICAgICAgcCA9IFtjaG9pY2UoWyd4JywneScsJ3onLCd0J10pLGxldHRyZURlcHVpc0NoaWZmcmUocmFuZGludCgxLDE2KSksY2hvaWNlKFsncycsJ3UnLCd2JywndyddKV07XG4gICBpZiAodGhpcy5tb2RlUWNtKSB7XG4gICAgdGV4dGUgPSBgRXN0aW1lIGxhIG1lc3VyZSBkZSBsJ2FuZ2xlICRcXFxcd2lkZWhhdHske3BbMF0gKyBwWzFdICsgcFsyXX19JCBzYW5zIGluc3RydW1lbnQuPGJyPmBcbiAgIH0gXG4gICBlbHNlIHtcbiAgICAgdGV4dGUgPSBgTWVzdXJlIGwnYW5nbGUgJFxcXFx3aWRlaGF0eyR7cFswXSArIHBbMV0gKyBwWzJdfX0kLjxicj5gXG4gICB9XG4gICAgICBBID0gcG9pbnQoMCwgMCk7XG4gICAgICBCID0gcG9pbnQoNiwgMCk7XG4gICAgICBCPXJvdGF0aW9uKEIsQSxhbmdsZXJvdClcblxuICAgICAgLy8gdGV4dGUsIEEsIG9yaWVudGF0aW9uID0gXCJtaWxpZXVcIiwgY29sb3IgPSAnYmxhY2snLCBzY2FsZSA9IDEsIGFuY3JhZ2VEZVJvdGF0aW9uID0gXCJtaWRkbGVcIiwgbWF0aF9vbiA9IGZhbHNlXG4gICAgICBCcG9zPXRleHRlUGFyUG9pbnQocFswXSxzaW1pbGl0dWRlKEEsaG9tb3RoZXRpZShCLEEsMC45NSksc2lnbmVzW2ldKjkwLDAuMSksJ21pbGlldScsJ2JsYWNrJywxLFwibWlkZGxlXCIsIHRydWUpICBcbiAgICAgIHMxID0gZGVtaURyb2l0ZSAoQSwgQik7XG4gICAgICBDID0gcm90YXRpb24oQixBLGFuZ2xlKTtcbiAgICAgIGJpcz1yb3RhdGlvbihCLEEsYW5nbGUvMilcbiAgICAgIEFwb3M9dGV4dGVQYXJQb2ludChwWzFdLHBvaW50U3VyU2VnbWVudChBLGJpcywtMC41KSwnbWlsaWV1JywnYmxhY2snLDEsXCJtaWRkbGVcIiwgdHJ1ZSlcbiAgICAgIENwb3M9dGV4dGVQYXJQb2ludChwWzJdLHNpbWlsaXR1ZGUoQSxob21vdGhldGllKEMsQSwwLjk1KSwtc2lnbmVzW2ldKjkwLDAuMSksJ21pbGlldScsJ2JsYWNrJywxLFwibWlkZGxlXCIsIHRydWUpXG4gICAgICBzMiA9IGRlbWlEcm9pdGUoQSwgQyk7XG4gICAgICBsYWJlbHM9bGFiZWxQb2ludChBLEIsQylcbiAgICAgIHNlY3RldXI9YWZmaWNoZU1lc3VyZUFuZ2xlKEIsQSxDKVxuICAgICAgc2VjdGV1cjA9YWZmaWNoZU1lc3VyZUFuZ2xlKEIsQSxDLCdibGFjaycsMS41LFwiIFwiKVxuICAgICAgdGV4dGVDb3JyPWBgXG4gICAgICB4TWluPU1hdGgubWluKEEueCxDLngsQi54KS0xXG4gICAgICB4TWF4PU1hdGgubWF4KEEueCxDLngsQi54KSsxXG4gICAgICB5TWluPU1hdGgubWluKEEueSxDLnksQi55KS0xXG4gICAgICB5TWF4PU1hdGgubWF4KEEueSxDLnksQi55KSsxXG4gICAgICAgIG1hdGhhbGVhLmZlbmV0cmVNYXRoYWxlYTJkID0gW3hNaW4sIHlNaW4sIHhNYXgsIHlNYXhdXG4gICAgICBvYmpldHNfZW5vbmNlPVtzMSxzMixsYWJlbHMsQXBvcyxCcG9zLENwb3Msc2VjdGV1cjBdXG4gICAgICBvYmpldHNfY29ycmVjdGlvbj1bczEsczIsbGFiZWxzLEFwb3MsQnBvcyxDcG9zLHNlY3RldXJdXG4gICAgICB0ZXh0ZSs9bWF0aGFsZWEyZCh7IHhtaW46IHhNaW4sIHltaW46IHlNaW4sIHhtYXg6IHhNYXgsIHltYXg6IHlNYXgsIHBpeGVsc1BhckNtOiAyMCwgc2NhbGU6IDAuOCB9LCBvYmpldHNfZW5vbmNlKVxuICAgICAgdGV4dGVDb3JyKz1tYXRoYWxlYTJkKHsgeG1pbjogeE1pbiwgeW1pbjogeU1pbiwgeG1heDogeE1heCwgeW1heDogeU1heCwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMC43IH0sIG9iamV0c19jb3JyZWN0aW9uKVxuICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAvL0Fqb3V0IHBvdXIgQU1DXG4gICAgICB0aGlzLnFjbVsxXS5wdXNoKFtgJHt0ZXh0ZX1cXFxcXFxcXCBcXG4gUsOpcG9uc2VzIHBvc3NpYmxlcyA6IGAsXG4gICAgICB0YWJyZXAsXG4gICAgICB0YWJpY29uZV0pIFxuICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgaWYgKHRoaXMubW9kZVFjbSYmIW1hdGhhbGVhLnNvcnRpZUFNQykge1xuICAgICAgICB0ZXh0ZSs9YDxicj4gIFLDqXBvbnNlcyBwb3NzaWJsZXMgOiAke2VzcGFjZX0gIGBcbiAgICAgICAgdGV4dGVDb3JyPScnXG4gICAgICAgIHNodWZmbGUydGFibGVhdXgodGFicmVwLCB0YWJpY29uZSk7XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0YWJyZXAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0ZXh0ZSArPSBgJFxcXFxzcXVhcmVcXFxcOyQgJHt0YWJyZXBbaV19IGAgKyBlc3BhY2UgO1xuICAgICAgICAgaWYgKHRhYmljb25lW2ldPT0xKSB7XG4gICAgICAgICAgIHRleHRlQ29yciArPSBgJFxcXFxibGFja3NxdWFyZVxcXFw7JCAke3RhYnJlcFtpXX0gYCArIGVzcGFjZSA7XG4gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCRcXFxcc3F1YXJlXFxcXDskICR7dGFicmVwW2ldfWAgKyBlc3BhY2UgO1xuICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMucHVzaCh0ZXh0ZSlcbiAgICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucy5wdXNoKHRleHRlQ29ycilcbiAgfVxuICAgICAgICBsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSh0aGlzKVxuICB9O1xuICB0aGlzLmJlc29pbkZvcm11bGFpcmVOdW1lcmlxdWUgPSBbJ1Byw6ljaXNpb24gZGUgbFxcJ2FuZ2xlJywzLCcxIDogQW5nbGUgw6AgMTDCsFxcbjIgOiBBbmdsZSDDoCA1wrBcXG4zIDogQW5nbGUgw6AgMcKwJ107XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6G23-1.js\n");

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