/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3G20-1_js"],{

/***/ "./src/js/exercices/3e/3G20-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/3e/3G20-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Problemes_Thales)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst titre = 'Problèmes avec le théorème de Thalès'\n\n/**\n* Banque de problèmes utilisant le théorème de Thalès et différentes propriétés de géométrie\n* @Auteur Rémi Angot\n* 3G20-1\n*/\nfunction Problemes_Thales() {\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.titre = titre;\n\tthis.nb_questions = 1;\n\tthis.nb_questions_modifiable = false;\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\n\n\tthis.nouvelle_version = function () {\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tlet texte = '';\n\t\tlet texte_corr = '';\n\t\tlet type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2);\n\t\tlet A, B, C, D,E, M, N, x, k, y, p, codage1, codage2, codage3, codage4, sMN, sBD, sCote, texte1, texte2, texte3, texte4, labels, BC, BD, MN;\n\n\n\t\tswitch (type_de_questions) {\n\t\t\tcase 1:\n\t\t\t\tx = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(6, 10);\n\t\t\t\tk = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(12, 19) / 10);\n\t\t\t\ty = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(30, 50) / 10);\n\t\t\t\t[A, B, C, D, E] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.creerNomDePolygone)(5);\n\t\t\t\ttexte = `On sait que $${A}${E}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(x)}$ cm ; $${A}${D}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(k * x)}$ cm et $${E}${B}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(y)}$ cm.<br>`;\n\t\t\t\ttexte += `Calculer la valeur exacte de $${D}${C}$.`;\n\t\t\t\tif (sortie_html) {\n\t\t\t\t\t// Pour le svg toutes les longueurs sont multipliées par 20\n\t\t\t\t\tlet fig1 = `<div><svg width=\"450\" height=\"300\" viewBox=\"-40 -40 450 300\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t  <polygon points=\"0,0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * y * 20)}  \" fill=\"none\" stroke=\"black\" />\n\t\t\t\t\t  <line x1=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y1=\"0\" x2=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y2=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(y * 20)}\" stroke=\"black\" /> //[BE]\n\t\t\t\t\t  <polyline points=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20 - 10)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20 - 10)},10 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)},10\" fill=\"none\" stroke=\"black\" />  //Angle droit en E\n\t\t\t\t\t  <polyline points=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 - 10)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 - 10)},10 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},10\" fill=\"none\" stroke=\"black\" />  //Angle droit en D\n\t\t\t\t\t  <text x=\"-10\" y=\"-10\" text-anchor=\"middle\" alignment-baseline=\"central\">${A}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y=\"-10\" text-anchor=\"middle\" alignment-baseline=\"central\">${E}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(y * 20 + 10)}\" text-anchor=\"middle\" alignment-baseline=\"central\">${B}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 + 10)}\" y=\"-10\" text-anchor=\"middle\" alignment-baseline=\"central\">${D}</text>\n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 + 10)}\" y=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * y * 20 + 10)}\" text-anchor=\"middle\" alignment-baseline=\"central\">${C}</text>\n\t\t\t\t\t</svg></div>`;\n\n\t\t\t\t\tlet fig2 = `<div><svg width=\"450\" height=\"300\" viewBox=\"-40 -260 450 300\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t\t  <polygon points=\"0,0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-k * y * 20)}  \" fill=\"none\" stroke=\"black\" />\n\t\t\t\t\t  <line x1=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y1=\"0\" x2=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y2=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-y * 20)}\" stroke=\"black\" /> //[BE]\n\t\t\t\t\t  <polyline points=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20 - 10)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20 - 10)},-10 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)},-10\" fill=\"none\" stroke=\"black\" />  //Angle droit en E\n\t\t\t\t\t  <polyline points=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 - 10)},0 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 - 10)},-10 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20)},-10\" fill=\"none\" stroke=\"black\" />  //Angle droit en D\n\t\t\t\t\t  <text x=\"-10\" y=\"-10\" text-anchor=\"middle\" alignment-baseline=\"central\">${A}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y=\"10\" text-anchor=\"middle\" alignment-baseline=\"central\">${E}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(x * 20)}\" y=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-y * 20 - 10)}\" text-anchor=\"middle\" alignment-baseline=\"central\">${B}</text> \n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 + 10)}\" y=\"10\" text-anchor=\"middle\" alignment-baseline=\"central\">${D}</text>\n\t\t\t\t\t  <text x=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x * 20 + 10)}\" y=\"${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-k * y * 20 - 10)}\" text-anchor=\"middle\" alignment-baseline=\"central\">${C}</text>\n\t\t\t\t\t</svg></div>`;\n\n\t\t\t\t\ttexte += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([fig1, fig2]);\n\n\n\n\t\t\t\t} else {\n\t\t\t\t\tlet fig1 = `\\\\begin{tikzpicture}[scale=.6]\n\\\\draw (0,0)--(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},0)--(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},${-k * y})--cycle;\n\\\\draw (${x},0)--(${x},${-y});\n\\\\draw (${x},0) rectangle ++(-.5,-.5);\n\\\\draw (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},0) rectangle ++(-.5,-.5);\n\\\\node [above left] at (0,0) {${A}};\n\\\\node [above] at (${x},0) {${E}};\n\\\\node [above right] at (${k * x},0) {${D}};\n\\\\node [below right] at (${k * x},${-k * y}) {${C}};\n\\\\node [below] at (${x},${-y}) {${B}};\n\\\\end{tikzpicture}`;\n\n\t\t\t\t\tlet fig2 = `\\\\begin{tikzpicture}[scale=.6]\n\\\\draw (0,0)--(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},0)--(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},${k * y})--cycle;\n\\\\draw (${x},0)--(${x},${y});\n\\\\draw (${x},0) rectangle ++(.5,.5);\n\\\\draw (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k * x)},0) rectangle ++(.5,.5);\n\\\\node [below left] at (0,0) {${A}};\n\\\\node [below] at (${x},0) {${E}};\n\\\\node [below right] at (${k * x},0) {${D}};\n\\\\node [above right] at (${k * x},${k * y}) {${C}};\n\\\\node [above] at (${x},${y}) {${B}};\n\\\\end{tikzpicture}`;\n\n\t\t\t\t\ttexte += '<br>' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([fig1, fig2]);\n\n\t\t\t\t}\n\n\t\t\t\ttexte_corr = `Les droites $(${E}${B})$ et $(${D}${C})$ sont perpendiculaires à la même droite $(${A}${D})$, elles sont donc parallèles entre elles.`;\n\t\t\t\ttexte_corr += `<br>De plus les points $${A}$, $${E}$, $${D}$  et $${A}$, $${B}$, $${C}$ sont alignés dans cet ordre donc d'après le théorème de Thalès on a :`;\n\t\t\t\ttexte_corr += `<br><br>$\\\\dfrac{${A}${E}}{${A}${D}}=\\\\dfrac{${E}${B}}{${D}${C}}=\\\\dfrac{${A}${B}}{${A}${C}}$`;\n\t\t\t\ttexte_corr += `<br><br>$\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(x)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(k * x)}}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(y)}}{${D}${C}}$`;\n\t\t\t\ttexte_corr += `<br><br>$${D}${C}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(k * x)}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(y)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(x)}}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(k * y)}$`;\n\t\t\t\tbreak;\n\n\n\t\t\tcase 2:\n\t\t\t\tlet [nomA, nomB, nomC, nomD] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.creerNomDePolygone)(4, ['M', 'N']);\n\t\t\t\tBC = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 6);\n\t\t\t\tBD = 2 * BC;\n\t\t\t\tMN = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(BD * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0.2, 0.3, 0.4]));\n\t\t\t\tA = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 4, nomA, 'above');\n\t\t\t\tB = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(7, 4, nomB, 'above');\n\t\t\t\tC = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(7, 0, nomC, 'below');\n\t\t\t\tD = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 0, nomD, 'below');\n\t\t\t\tp = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)(A, B, C, D);\n\t\t\t\tcodage1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(D, A, B);\n\t\t\t\tcodage2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(A, B, C);\n\t\t\t\tcodage3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(B, C, D);\n\t\t\t\tcodage4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageAngleDroit)(C, D, A);\n\t\t\t\tM = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(A, B, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.longueur)(A, B) / 3, 'M', 'above');\n\t\t\t\tN = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(A, D, (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.longueur)(A, D) / 3, 'N', 'left');\n\t\t\t\tsMN = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(M, N);\n\t\t\t\tsBD = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(B, D);\n\t\t\t\tsCote = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(N.x - 1.3, N.y), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(D.x - 1.3, D.y));\n\t\t\t\tsCote.styleExtremites = '<->';\n\t\t\t\ttexte1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPoint)('?', (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.milieu)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(N.x - 1.5, N.y), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(D.x - 1.5, D.y)), 'gauche');\n\t\t\t\ttexte2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteSurSegment)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(BD) + ' cm', B, D);\n\t\t\t\ttexte3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteSurSegment)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(MN) + ' cm', M, N);\n\t\t\t\ttexte4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteSurSegment)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(BC) + ' cm', B, C);\n\n\t\t\t\tlabels = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(M, N, A, B, C, D);\n\n\t\t\t\ttexte = `Sur la figure ci-dessous $${nomA + nomB + nomC + nomD}$ est un rectangle et $(MN)$ est parallèle à la diagonale $(${nomB + nomD})$.`;\n\t\t\t\ttexte += `<br>Calculer la longueur $${nomD + 'N'}$ au millimètre près.<br><br>`;\n\t\t\t\ttexte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n\t\t\t\t\txmin: -2,\n\t\t\t\t\txmax: 9,\n\t\t\t\t\tymin: -1.5,\n\t\t\t\t\tymax: 5,\n\t\t\t\t\tscale: .8\n\t\t\t\t}, p, codage1, codage2, codage3, codage4, sMN, sBD, sCote, texte1, texte2, texte3, texte4, labels);\n\n\t\t\t\ttexte_corr = `Dans le triangle $${nomA + nomB + nomD}$, $M$ est un point de $[${nomA + nomB}]$, $N$ est un point de $[${nomA + nomD}]$ et $(MN)$ est parallèle à $(${nomB + nomD})$ donc d'après le théorème de Thalès on a : `;\n\t\t\t\ttexte_corr += `<br><br> $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(nomA + 'M', nomA + nomB)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(nomA + 'N', nomA + nomD)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)('MN', nomB + nomD)}$`;\n\t\t\t\ttexte_corr += `<br><br> $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(nomA + 'M', nomA + nomB)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(nomA + 'N', BC)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(MN), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(BD))}$`;\n\t\t\t\ttexte_corr += `<br><br> $${nomA}N = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(BC + '\\\\times' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(MN), BD)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(BC * MN / BD), 1))}$ cm`;\n\t\t\t\ttexte_corr += `<br><br> Les points $${nomA}$, $N$ et $${nomD}$ sont alignés dans cet ordre donc $N${nomD}=${nomA + nomD}-${nomA}N= ${BC}-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(BC * MN / BD), 1))}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(BC - BC * MN / BD), 1))}$ cm.`;\n\t\t\t\tbreak;\n\t\t}\n\n\t\tthis.liste_questions[0] = texte;\n\t\tthis.liste_corrections[0] = texte_corr;\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t\t// this.besoin_formulaire_numerique = ['Type de questions',2,\"1 : Donner l'égalité\\n2 : Compléter une égalité avec une addition ou une soustraction\"];\n\t\t// this.besoin_formulaire2_case_a_cocher = ['Sans figures']\n\t};\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/3e/3G20-1.js?");

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