/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3G32-2_js"],{

/***/ "./src/js/exercices/3e/3G32-2.js":
/*!***************************************!*\
  !*** ./src/js/exercices/3e/3G32-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Calculs_trigonometriques2)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_3d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/3d.js */ \"./src/js/modules/3d.js\");\n\n\n\n\nconst titre = 'Calculer la hauteur d’un objet vu sous un angle donné';\n/**\n * propose de mesurer la hauteur d'un objet en utilisant l'angle sous lequel on voit l'objet et la distance à l'objet. \n * @Auteur Jean-Claude Lhote\n * Référence 3G32-2\n*/\n\nfunction Calculs_trigonometriques2() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.titre = titre;\n  this.consigne = \"\";\n  this.nbCols = 1; // Uniquement pour la sortie LaTeX\n\n  this.nbColsCorr = 1; // Uniquement pour la sortie LaTeX\n\n  this.sup = true; // Niveau de difficulté à ne définir que si on peut le modifier avec un formulaire en paramètre\n\n  this.tailleDiaporama = 100; // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte\n\n  this.video = \"\"; // Id YouTube ou url\n\n  this.nbQuestions = 1;\n  this.spacingCorr = 2;\n  this.spacing = 2;\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    let objet = [['arbre', 'un', ''], ['immeuble', 'un', ''], ['éolienne', 'une', 'te'], ['coline', 'une', 'te']];\n    let distance,\n        hauteur,\n        alfa,\n        baita,\n        beta,\n        alpha,\n        teta,\n        taille,\n        index,\n        A,\n        B,\n        O,\n        H,\n        S,\n        C,\n        M,\n        R,\n        R2,\n        Axe,\n        normalV,\n        normalH,\n        P,\n        HP,\n        Sph,\n        OP,\n        PoleNord,\n        PoleSud,\n        objets = [],\n        p;\n\n    if (sortieHtml) {\n      alfa = 'α';\n      baita = 'β';\n    } else {\n      alfa = '\\\\alpha';\n      baita = '\\\\beta';\n    }\n\n    for (let i = 0, texte, texteCorr, j, cpt = 0; i < this.nbQuestions && cpt < 50;) {\n      // Boucle principale où i+1 correspond au numéro de la question\n      objets = [];\n      distance = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 300);\n      hauteur = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(150, 190) / 100);\n      beta = Math.atan(hauteur / distance);\n      alpha = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10, 50);\n      teta = alpha * Math.PI / 180 - beta;\n      taille = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(hauteur + distance * Math.tan(teta), 1);\n      if (taille < 20) index = 0;else if (taille < 50) index = 1;else if (taille < 100) index = 2;else index = 3;\n      A = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 0, 'A');\n      B = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointAdistance)(A, 12, 0, 'B');\n      O = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointAdistance)(A, 3, 90, 'O');\n      H = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointAdistance)(B, 3, 90, 'H');\n      S = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointAdistance)(B, 9, 90, 'S');\n      p = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygoneAvecNom)(A, B, H, S, O);\n      objets.push(p[1], p[0], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(O, B), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(O, H), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(O, A, B), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(A, B, H), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(O, H, S));\n      objets.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.afficheMesureAngle)(B, O, S, 'black', 3, `${alfa}`), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.afficheMesureAngle)(A, B, O, 'black', 2, `${baita}`), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.afficheMesureAngle)(B, O, H, 'black', 2, `${baita}`));\n      objets.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteSurSegment)(`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(hauteur)} m`, O, A, 'black', -0.5), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteSurSegment)(`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(distance)} m`, O, H));\n      texte = `Un observateur regarde ${objet[index][1]} ${objet[index][0]} sous un angle de $${alpha}\\\\degree$.<br>`;\n      texte += `Cet${objet[index][2]} ${objet[index][0]} est situé à une distance de $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(distance)}$ m de l'observateur.<br>`;\n      texte += `l'oeil de l'observateur est situé à $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(hauteur)}$ m du sol.<br>`;\n\n      if (this.sup) {\n        texte += `$O$ représente l'oeil de l'observateur, $[BS]$ représente cet${objet[index][2]} ${objet[index][0]}.<br>`;\n        texte += `Le schéma ci-dessous n'est pas en vraie grandeur.<br>` + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n          xmin: -1,\n          ymin: -1,\n          xmax: 14,\n          ymax: 10,\n          pixelsParCm: 20,\n          scale: 0.5\n        }, objets);\n        texte += `<br>Calculer d'abord l'angle $${baita}$.<br>`;\n        texte += `En déduire la mesure de l'angle $\\\\widehat{HOS}$.<br>`;\n        texte += `Calculer alors la longueur $HS$.<br>`;\n      }\n\n      texte += `Calculer la hauteur de cet${objet[index][2]} ${objet[index][0]} arrondie au mètre près.<br>`;\n      texteCorr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n        xmin: -1,\n        ymin: -1,\n        xmax: 14,\n        ymax: 10,\n        pixelsParCm: 20,\n        scale: 0.5\n      }, objets);\n      texteCorr += `<br>Dans le triangle $OHB$ rectangle en $H$, $\\\\tan(${baita})=\\\\dfrac{HB}{OH}$.<br>D'où $${baita}=\\\\arctan(\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(hauteur)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(distance)}})\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondiVirgule)(beta)}\\\\degree$.<br>`;\n      texteCorr += `$\\\\widehat{HOS}=${alfa}-${baita}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondiVirgule)(alpha - beta)}$.<br>`;\n      texteCorr += `$HS=OH\\\\times \\\\tan(\\\\widehat{HOS})\\\\approx ${distance}\\\\times \\\\tan(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondiVirgule)(alpha - beta)})\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombrec)(taille - hauteur)}$ m.<br>`;\n      texteCorr += `$BS=BH+HS=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(hauteur)}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombrec)(taille - hauteur)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(taille)}$ m.<br>`;\n      texteCorr += `Cet${objet[index][2]} ${objet[index][0]} mesure $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)(Math.round(taille))}$ m de hauteur.`;\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  };\n\n  this.besoinFormulaireCaseACocher = ['Afficher un schéma et des questions intermédiaires'];\n} // python3 list-to-js.py pour faire apparaitre l'exercice dans le menu//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzNlLzNHMzItMi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhhbGVhLy4vc3JjL2pzL2V4ZXJjaWNlcy8zZS8zRzMyLTIuanM/MmZjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhlcmNpY2UgZnJvbSAnLi4vQ2xhc3NlRXhlcmNpY2UuanMnO1xuaW1wb3J0IHsgbGlzdGVRdWVzdGlvbnNUb0NvbnRlbnUsIGNvbWJpbmFpc29uTGlzdGVzLCByYW5kaW50LCBudW1BbHBoYSxhcnJvbmRpLCBjYWxjdWwsIHRleE5vbWJyZSwgdGV4Tm9tYnJlYywgYXJyb25kaVZpcmd1bGUgfSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcbmltcG9ydCB7IHRleHRlU3VyU2VnbWVudCwgdHJhY2VQb2ludCxsYWJlbFBvaW50LHByb2plY3Rpb25PcnRobywgcG9pbnRBZGlzdGFuY2UsZHJvaXRlLCBwb2x5Z29uZUF2ZWNOb20sIGFmZmljaGVNZXN1cmVBbmdsZSwgY29kYWdlQW5nbGVEcm9pdCwgcG9pbnQsIHNlZ21lbnQsIHRleHRlUGFyUG9zaXRpb24sIG1pbGlldSwgbWF0aGFsZWEyZCB9IGZyb20gJy4uLy4uL21vZHVsZXMvMmQuanMnO1xuaW1wb3J0IHtwb2ludDNkLHZlY3RldXIzZCxzcGhlcmUzZCxhcmV0ZTNkLHJvdGF0aW9uVjNkLGRlbWljZXJjbGUzZCxob21vdGhldGllM2R9IGZyb20gJy4uLy4uL21vZHVsZXMvM2QuanMnXG5leHBvcnQgY29uc3QgdGl0cmUgPSAnQ2FsY3VsZXIgbGEgaGF1dGV1ciBk4oCZdW4gb2JqZXQgdnUgc291cyB1biBhbmdsZSBkb25uw6knXG5cbi8qKlxuICogcHJvcG9zZSBkZSBtZXN1cmVyIGxhIGhhdXRldXIgZCd1biBvYmpldCBlbiB1dGlsaXNhbnQgbCdhbmdsZSBzb3VzIGxlcXVlbCBvbiB2b2l0IGwnb2JqZXQgZXQgbGEgZGlzdGFuY2Ugw6AgbCdvYmpldC4gXG4gKiBAQXV0ZXVyIEplYW4tQ2xhdWRlIExob3RlXG4gKiBSw6lmw6lyZW5jZSAzRzMyLTJcbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxzX3RyaWdvbm9tZXRyaXF1ZXMyKCkge1xuICBFeGVyY2ljZS5jYWxsKHRoaXMpOyAvLyBIw6lyaXRhZ2UgZGUgbGEgY2xhc3NlIEV4ZXJjaWNlKClcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLmNvbnNpZ25lID0gXCJcIjtcbiAgdGhpcy5uYkNvbHMgPSAxOyAvLyBVbmlxdWVtZW50IHBvdXIgbGEgc29ydGllIExhVGVYXG4gIHRoaXMubmJDb2xzQ29yciA9IDE7IC8vIFVuaXF1ZW1lbnQgcG91ciBsYSBzb3J0aWUgTGFUZVhcbiAgdGhpcy5zdXAgPSB0cnVlOyAvLyBOaXZlYXUgZGUgZGlmZmljdWx0w6kgw6AgbmUgZMOpZmluaXIgcXVlIHNpIG9uIHBldXQgbGUgbW9kaWZpZXIgYXZlYyB1biBmb3JtdWxhaXJlIGVuIHBhcmFtw6h0cmVcbiAgdGhpcy50YWlsbGVEaWFwb3JhbWEgPSAxMDA7IC8vIFBvdXIgbGVzIGV4ZXJjaWNlcyBjaHJvbm9tw6l0csOpcy4gNTAgcGFyIGTDqWZhdXQgcG91ciBsZXMgZXhlcmNpY2VzIGF2ZWMgZHUgdGV4dGVcbiAgdGhpcy52aWRlbyA9IFwiXCIgLy8gSWQgWW91VHViZSBvdSB1cmxcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDFcbiAgdGhpcy5zcGFjaW5nQ29ycj0yXG4gIHRoaXMuc3BhY2luZz0yXG5cbiAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZVF1ZXN0aW9ucyA9IFtdOyAvLyBMaXN0ZSBkZSBxdWVzdGlvbnNcbiAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zIGNvcnJpZ8OpZXNcbiAgICBsZXQgb2JqZXQgPSBbWydhcmJyZScsICd1bicsICcnXSwgWydpbW1ldWJsZScsICd1bicsICcnXSwgWyfDqW9saWVubmUnLCAndW5lJywgJ3RlJ10sIFsnY29saW5lJywgJ3VuZScsICd0ZSddXVxuICAgIGxldCBkaXN0YW5jZSwgaGF1dGV1cixhbGZhLGJhaXRhLCBiZXRhLCBhbHBoYSwgdGV0YSwgdGFpbGxlLCBpbmRleCwgQSwgQiwgTywgSCwgUywgQyxNLFIsUjIsQXhlLG5vcm1hbFYsbm9ybWFsSCxQLEhQLFNwaCxPUCxQb2xlTm9yZCxQb2xlU3VkLCBvYmpldHMgPSBbXSwgcFxuICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICBhbGZhPSfOsSdcbiAgICAgIGJhaXRhPSfOsidcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhbGZhPSdcXFxcYWxwaGEnXG4gICAgICBiYWl0YT0nXFxcXGJldGEnXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDAsIHRleHRlLCB0ZXh0ZUNvcnIsaiwgY3B0ID0gMDsgaSA8IHRoaXMubmJRdWVzdGlvbnMgJiYgY3B0IDwgNTA7KSB7XG4gICAgICAvLyBCb3VjbGUgcHJpbmNpcGFsZSBvw7kgaSsxIGNvcnJlc3BvbmQgYXUgbnVtw6lybyBkZSBsYSBxdWVzdGlvblxuXG4gICAgICAgIG9iamV0cz1bXVxuICAgICAgICAgIGRpc3RhbmNlID0gcmFuZGludCg1LCAzMDApXG4gICAgICAgICAgaGF1dGV1ciA9IGNhbGN1bChyYW5kaW50KDE1MCwgMTkwKSAvIDEwMClcbiAgICAgICAgICBiZXRhID0gTWF0aC5hdGFuKGhhdXRldXIgLyBkaXN0YW5jZSlcbiAgICAgICAgICBhbHBoYSA9IHJhbmRpbnQoMTAsIDUwKVxuICAgICAgICAgIHRldGEgPSBhbHBoYSAqIE1hdGguUEkgLyAxODAgLSBiZXRhXG4gICAgICAgICAgdGFpbGxlID0gYXJyb25kaShoYXV0ZXVyICsgZGlzdGFuY2UgKiBNYXRoLnRhbih0ZXRhKSwgMSlcbiAgICAgICAgICBpZiAodGFpbGxlIDwgMjApIGluZGV4ID0gMFxuICAgICAgICAgIGVsc2UgaWYgKHRhaWxsZSA8IDUwKSBpbmRleCA9IDFcbiAgICAgICAgICBlbHNlIGlmICh0YWlsbGUgPCAxMDApIGluZGV4ID0gMlxuICAgICAgICAgIGVsc2UgaW5kZXggPSAzXG4gICAgICAgICAgQSA9IHBvaW50KDAsIDAsICdBJylcbiAgICAgICAgICBCID0gcG9pbnRBZGlzdGFuY2UoQSwgMTIsIDAsICdCJylcbiAgICAgICAgICBPID0gcG9pbnRBZGlzdGFuY2UoQSwgMywgOTAsICdPJylcbiAgICAgICAgICBIID0gcG9pbnRBZGlzdGFuY2UoQiwgMywgOTAsICdIJylcbiAgICAgICAgICBTID0gcG9pbnRBZGlzdGFuY2UoQiwgOSwgOTAsICdTJylcbiAgICAgICAgICBwID0gcG9seWdvbmVBdmVjTm9tKEEsIEIsIEgsIFMsIE8pXG4gICAgICAgICAgb2JqZXRzLnB1c2gocFsxXSwgcFswXSwgc2VnbWVudChPLCBCKSwgc2VnbWVudChPLCBIKSwgY29kYWdlQW5nbGVEcm9pdChPLCBBLCBCKSwgY29kYWdlQW5nbGVEcm9pdChBLCBCLCBIKSwgY29kYWdlQW5nbGVEcm9pdChPLCBILCBTKSlcbiAgICAgICAgICBvYmpldHMucHVzaChhZmZpY2hlTWVzdXJlQW5nbGUoQiwgTywgUywgJ2JsYWNrJywgMywgYCR7YWxmYX1gKSwgYWZmaWNoZU1lc3VyZUFuZ2xlKEEsIEIsIE8sICdibGFjaycsIDIsIGAke2JhaXRhfWApLCBhZmZpY2hlTWVzdXJlQW5nbGUoQiwgTywgSCwgJ2JsYWNrJywgMiwgYCR7YmFpdGF9YCkpXG4gICAgICAgICAgb2JqZXRzLnB1c2godGV4dGVTdXJTZWdtZW50KGAke3RleE5vbWJyZShoYXV0ZXVyKX0gbWAsIE8sIEEsICdibGFjaycsIC0wLjUpLCB0ZXh0ZVN1clNlZ21lbnQoYCR7dGV4Tm9tYnJlKGRpc3RhbmNlKX0gbWAsIE8sIEgpKVxuICAgICAgICAgIHRleHRlID0gYFVuIG9ic2VydmF0ZXVyIHJlZ2FyZGUgJHtvYmpldFtpbmRleF1bMV19ICR7b2JqZXRbaW5kZXhdWzBdfSBzb3VzIHVuIGFuZ2xlIGRlICQke2FscGhhfVxcXFxkZWdyZWUkLjxicj5gO1xuICAgICAgICAgIHRleHRlICs9IGBDZXQke29iamV0W2luZGV4XVsyXX0gJHtvYmpldFtpbmRleF1bMF19IGVzdCBzaXR1w6kgw6AgdW5lIGRpc3RhbmNlIGRlICQke3RleE5vbWJyZShkaXN0YW5jZSl9JCBtIGRlIGwnb2JzZXJ2YXRldXIuPGJyPmBcbiAgICAgICAgICB0ZXh0ZSArPSBgbCdvZWlsIGRlIGwnb2JzZXJ2YXRldXIgZXN0IHNpdHXDqSDDoCAkJHt0ZXhOb21icmUoaGF1dGV1cil9JCBtIGR1IHNvbC48YnI+YFxuICAgICAgICAgIGlmICh0aGlzLnN1cCkge1xuXG4gICAgICAgICAgICB0ZXh0ZSArPSBgJE8kIHJlcHLDqXNlbnRlIGwnb2VpbCBkZSBsJ29ic2VydmF0ZXVyLCAkW0JTXSQgcmVwcsOpc2VudGUgY2V0JHtvYmpldFtpbmRleF1bMl19ICR7b2JqZXRbaW5kZXhdWzBdfS48YnI+YFxuXG4gICAgICAgICAgICB0ZXh0ZSArPSBgTGUgc2Now6ltYSBjaS1kZXNzb3VzIG4nZXN0IHBhcyBlbiB2cmFpZSBncmFuZGV1ci48YnI+YCArIG1hdGhhbGVhMmQoeyB4bWluOiAtMSwgeW1pbjogLTEsIHhtYXg6IDE0LCB5bWF4OiAxMCwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMC41IH0sIG9iamV0cyk7XG4gICAgICAgICAgICB0ZXh0ZSArPSBgPGJyPkNhbGN1bGVyIGQnYWJvcmQgbCdhbmdsZSAkJHtiYWl0YX0kLjxicj5gXG4gICAgICAgICAgICB0ZXh0ZSArPSBgRW4gZMOpZHVpcmUgbGEgbWVzdXJlIGRlIGwnYW5nbGUgJFxcXFx3aWRlaGF0e0hPU30kLjxicj5gXG4gICAgICAgICAgICB0ZXh0ZSArPSBgQ2FsY3VsZXIgYWxvcnMgbGEgbG9uZ3VldXIgJEhTJC48YnI+YFxuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0ZSArPSBgQ2FsY3VsZXIgbGEgaGF1dGV1ciBkZSBjZXQke29iamV0W2luZGV4XVsyXX0gJHtvYmpldFtpbmRleF1bMF19IGFycm9uZGllIGF1IG3DqHRyZSBwcsOocy48YnI+YFxuXG4gICAgICAgICAgdGV4dGVDb3JyID0gbWF0aGFsZWEyZCh7IHhtaW46IC0xLCB5bWluOiAtMSwgeG1heDogMTQsIHltYXg6IDEwLCBwaXhlbHNQYXJDbTogMjAsIHNjYWxlOiAwLjUgfSwgb2JqZXRzKVxuICAgICAgICAgIHRleHRlQ29yciArPSBgPGJyPkRhbnMgbGUgdHJpYW5nbGUgJE9IQiQgcmVjdGFuZ2xlIGVuICRIJCwgJFxcXFx0YW4oJHtiYWl0YX0pPVxcXFxkZnJhY3tIQn17T0h9JC48YnI+RCdvw7kgJCR7YmFpdGF9PVxcXFxhcmN0YW4oXFxcXGRmcmFjeyR7dGV4Tm9tYnJlKGhhdXRldXIpfX17JHt0ZXhOb21icmUoZGlzdGFuY2UpfX0pXFxcXGFwcHJveCAke2Fycm9uZGlWaXJndWxlKGJldGEpfVxcXFxkZWdyZWUkLjxicj5gXG4gICAgICAgICAgdGV4dGVDb3JyICs9IGAkXFxcXHdpZGVoYXR7SE9TfT0ke2FsZmF9LSR7YmFpdGF9XFxcXGFwcHJveCAke2Fycm9uZGlWaXJndWxlKGFscGhhIC0gYmV0YSl9JC48YnI+YFxuICAgICAgICAgIHRleHRlQ29yciArPSBgJEhTPU9IXFxcXHRpbWVzIFxcXFx0YW4oXFxcXHdpZGVoYXR7SE9TfSlcXFxcYXBwcm94ICR7ZGlzdGFuY2V9XFxcXHRpbWVzIFxcXFx0YW4oJHthcnJvbmRpVmlyZ3VsZShhbHBoYSAtIGJldGEpfSlcXFxcYXBwcm94ICR7dGV4Tm9tYnJlYyh0YWlsbGUgLSBoYXV0ZXVyKX0kIG0uPGJyPmBcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCRCUz1CSCtIUz0ke3RleE5vbWJyZShoYXV0ZXVyKX0rJHt0ZXhOb21icmVjKHRhaWxsZSAtIGhhdXRldXIpfT0ke3RleE5vbWJyZSh0YWlsbGUpfSQgbS48YnI+YFxuICAgICAgICAgIHRleHRlQ29yciArPSBgQ2V0JHtvYmpldFtpbmRleF1bMl19ICR7b2JqZXRbaW5kZXhdWzBdfSBtZXN1cmUgJCR7dGV4Tm9tYnJlKE1hdGgucm91bmQodGFpbGxlKSl9JCBtIGRlIGhhdXRldXIuYDtcblxuICAgICAgaWYgKHRoaXMubGlzdGVRdWVzdGlvbnMuaW5kZXhPZih0ZXh0ZSkgPT0gLTEpIHtcbiAgICAgICAgLy8gU2kgbGEgcXVlc3Rpb24gbidhIGphbWFpcyDDqXTDqSBwb3PDqWUsIG9uIGVuIGNyw6llIHVuZSBhdXRyZVxuICAgICAgICB0aGlzLmxpc3RlUXVlc3Rpb25zLnB1c2godGV4dGUpO1xuICAgICAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMucHVzaCh0ZXh0ZUNvcnIpO1xuICAgICAgICBpKys7XG4gICAgICB9XG4gICAgICBjcHQrKztcbiAgICB9XG4gICAgbGlzdGVRdWVzdGlvbnNUb0NvbnRlbnUodGhpcyk7XG4gIH07XG4gIHRoaXMuYmVzb2luRm9ybXVsYWlyZUNhc2VBQ29jaGVyID0gWydBZmZpY2hlciB1biBzY2jDqW1hIGV0IGRlcyBxdWVzdGlvbnMgaW50ZXJtw6lkaWFpcmVzJ107XG59XG5cbi8vIHB5dGhvbjMgbGlzdC10by1qcy5weSBwb3VyIGZhaXJlIGFwcGFyYWl0cmUgbCdleGVyY2ljZSBkYW5zIGxlIG1lbnVcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/exercices/3e/3G32-2.js\n");

/***/ })

}]);