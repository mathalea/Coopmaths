/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5G24-1_js"],{

/***/ "./src/js/exercices/5e/5G24-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/5e/5G24-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ TrianglesEgaux)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Triangles égaux et côtés homologues'\n\n/**\n * Deux triangles égaux sont codés, il faut reconnaitre les côtés homologues\n * @Auteur Rémi Angot\n * Référence 5G24-1\n*/\nfunction TrianglesEgaux () {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = 'Compléter les phrases suivantes.'\n  this.nb_questions = 3\n  this.nb_cols = 1 // Uniquement pour la sortie LaTeX\n  this.nb_cols_corr = 1 // Uniquement pour la sortie LaTeX\n  this.sup = 1 // Niveau de difficulté à ne définir que si on peut le modifier avec un formulaire en paramètre\n  this.tailleDiaporama = 50 // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte\n  this.video = '' // Id YouTube ou url\n  this.spacing = 2\n\n  this.nouvelle_version = function () {\n    this.liste_questions = [] // Liste de questions\n    this.liste_corrections = [] // Liste de questions corrigées\n\n    let typeQuestionsDisponibles = ['rotation', 'similitude', 'rotation2', 'similitude2', 'rotation3', 'similitude3']\n    if (this.nb_questions === 3) {\n      typeQuestionsDisponibles = ['similitude', 'rotation2', 'similitude3']\n    } else if (this.nb_questions === 4) {\n      typeQuestionsDisponibles = ['rotation', 'rotation2', 'similitude2', 'rotation3', 'similitude3']\n    }\n    const listeTypeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.combinaison_listes)(typeQuestionsDisponibles, this.nb_questions) // Tous les types de questions sont posés mais l'ordre diffère à chaque \"cycle\"\n\n    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      // Boucle principale où i+1 correspond au numéro de la question\n      let l1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(40, 70)\n      let l2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(40, 80, l1)\n      let l3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(40, l1 + l2 - 10, [l1, l2])\n      l1 /= 10\n      l2 /= 10\n      l3 /= 10\n      const A = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.point)(0, 0)\n      const B = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.pointAdistance)(A, l1)\n      const p1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.triangle2points2longueurs)(A, B, l2, l3)\n      const C = p1.listePoints[2]\n      const O = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.barycentre)(p1)\n      const v = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.vecteur)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.longueur)(A, B) + 2, 0)\n      const O2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.translation)(O, v)\n      // const p2 = similitude(p1, O2, randint(160, 200), 1)\n      let p2, D, E, F, code1, code2, code3, code4, code5, code6, codeA1, codeA2, codeA3, codeA4, codeA5, codeA6, nom1, nom2, nommeP1, nommeP2, Anom, Bnom, Cnom, Dnom, Enom, Fnom\n      switch (listeTypeQuestions[i]) { // Suivant le type de question, le contenu sera différent\n        case 'rotation':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.rotation)(p1, A, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.angle)(C, A, B) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(10, 100))\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom1 = nom1 + ' ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(2, nom1)\n          nom1 = nom1.replaceAll(',', '')\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.polygone)(A, B, C, D, E, F), nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom1[0]\n          Enom = nom1[4]\n          Fnom = nom1[5]\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, code3, code4, code5, code6, codeA1, codeA2, codeA3, codeA4, codeA5, codeA6, nommeP1)\n          texteCorr = `Correction ${i + 1} de type 1`\n          break\n        case 'similitude':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.similitude)(p1, O2, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(160, 200), 1)\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3, nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom2[0]\n          Enom = nom2[1]\n          Fnom = nom2[2]\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p1, nom1)\n          nommeP2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p2, nom2)\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, code3, code4, code5, code6, codeA1, codeA2, codeA3, codeA4, codeA5, codeA6, nommeP1, nommeP2)\n          break\n        case 'rotation2':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.rotation)(p1, A, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.angle)(C, A, B) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(10, 100))\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom1 = nom1 + ' ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(2, nom1)\n          nom1 = nom1.replaceAll(',', '')\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.polygone)(A, B, C, D, E, F), nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom1[0]\n          Enom = nom1[4]\n          Fnom = nom1[5]\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, code3, code4, codeA1, codeA2, nommeP1)\n          texteCorr = `Correction ${i + 1} de type 1`\n          break\n        case 'similitude2':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.similitude)(p1, O2, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(160, 200), 1)\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3, nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom2[0]\n          Enom = nom2[1]\n          Fnom = nom2[2]\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p1, nom1)\n          nommeP2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p2, nom2)\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, code3, code4, codeA1, codeA2, nommeP1, nommeP2)\n          break\n        case 'rotation3':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.rotation)(p1, A, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.angle)(C, A, B) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(10, 100))\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom1 = nom1 + ' ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(2, nom1)\n          nom1 = nom1.replaceAll(',', '')\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.polygone)(A, B, C, D, E, F), nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom1[0]\n          Enom = nom1[4]\n          Fnom = nom1[5]\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, codeA1, codeA2, codeA5, codeA6, nommeP1)\n          texteCorr = `Correction ${i + 1} de type 1`\n          break\n        case 'similitude3':\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.similitude)(p1, O2, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(160, 200), 1)\n          D = p2.listePoints[0]\n          E = p2.listePoints[1]\n          F = p2.listePoints[2]\n          code1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(A, B, '|')\n          code2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(D, E, '|')\n          code3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(B, C, '||')\n          code4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(E, F, '||')\n          code5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(C, A, '|||')\n          code6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeSegment)(F, D, '|||')\n          codeA1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(A, B, C)\n          codeA2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(D, E, F)\n          codeA3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(B, C, A, 0.8, 'X')\n          codeA4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(E, F, D, 0.8, 'X')\n          codeA5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(C, A, B, 0.8, '||')\n          codeA6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.codeAngle)(F, D, E, 0.8, '||')\n          nom1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3)\n          nom2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choisit_lettres_differentes)(3, nom1)\n          Anom = nom1[0]\n          Bnom = nom1[1]\n          Cnom = nom1[2]\n          Dnom = nom2[0]\n          Enom = nom2[1]\n          Fnom = nom2[2]\n          nommeP1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p1, nom1)\n          nommeP2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.nommePolygone)(p2, nom2)\n          texte = `Ci-dessous les triangles $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Anom + Bnom + Cnom)}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.shuffleLettres)(Dnom + Enom + Fnom)}$ sont égaux.<br>`\n          texte += `$[${Anom + Bnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Bnom + Cnom}]$ et ............ sont homologues.<br>`\n          texte += `$[${Cnom + Anom}]$ et ............ sont homologues.<br>`\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({\n            xmin: Math.min(A.x, B.x, C.x, D.x, E.x, F.x) - 3,\n            ymin: Math.min(A.y, B.y, C.y, D.y, E.y, F.y) - 3,\n            xmax: Math.max(A.x, B.x, C.x, D.x, E.x, F.x) + 3,\n            ymax: Math.max(A.y, B.y, C.y, D.y, E.y, F.y) + 3,\n            scale: 0.5\n          },\n          p1, p2, code1, code2, codeA1, codeA2, codeA5, codeA6, nommeP1, nommeP2)\n          break\n      }\n      texteCorr = `$[${Anom + Bnom}]$ et $[${Dnom + Enom}]$ sont homologues.<br>`\n      texteCorr += `$[${Bnom + Cnom}]$ et $[${Enom + Fnom}]$ sont homologues.<br>`\n      texteCorr += `$[${Cnom + Anom}]$ et $[${Fnom + Dnom}]$ sont homologues.<br>`\n      if (this.liste_questions.indexOf(texte) === -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte)\n        this.liste_corrections.push(texteCorr)\n        i++\n      }\n      cpt++\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.liste_de_question_to_contenu)(this)\n  }\n  // this.besoin_formulaire_numerique = ['Niveau de difficulté', 2,'1 : Facile\\n2 : Difficile'];\n}\n\n// python3 modules/exercices_to_json.py pour faire apparaitre l'exercice dans le menu\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5G24-1.js?");

/***/ }),

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ })

}]);