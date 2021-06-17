/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5G22_js"],{

/***/ "./src/js/exercices/5e/5G22.js":
/*!*************************************!*\
  !*** ./src/js/exercices/5e/5G22.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ DroiteRemarquableDuTriangle)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst titre = 'Déterminer la nature d’une droite remarquable'\n\n/**\n * 5G22\n * @Auteur Jean-Claude Lhote\n * Les droites remarquables du triangle : hauteurs médiatrices....médianes et bissectrices\n */\nfunction DroiteRemarquableDuTriangle() {\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n\tthis.titre = titre;\n\tthis.consigne = 'Définir'\n\tthis.spacing = 2;\n\tthis.nb_questions = 1\n\tthis.nb_cols = 1\n\tthis.nb_cols_corr = 1\n\tthis.sup = 1\n\n\tthis.nouvelle_version = function () {\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tlet triangles = [], sommets = [[]], A = [], B = [], C = [], t = [], d = [], n = [], c = [], objets = [], A0, B0, C0, tri, G\n\t\tlet type_de_questions_disponibles, liste_type_de_questions\n\t\tif (this.sup == 1) type_de_questions_disponibles = [1, 2]\n\t\tif (this.sup == 2) type_de_questions_disponibles = [3, 4]\n\t\tif (this.sup == 3) type_de_questions_disponibles = [1, 2, 3, 4]\n\t\tliste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions)\n\t\tfor (let i = 0, a, angle, rapport, texte, texte_corr; i < this.nb_questions; i++) {// this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles\n\t\t\ttriangles[i] = new _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.Triangles();\n\t\t\tsommets[i] = triangles[i].getSommets(false);\n\n\t\t\tA0 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(3, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2))\n\t\t\tB0 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(6, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2))\n\t\t\tangle = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([50, 60, 70, 75, 80, 100, 110, 120])\n\t\t\trapport = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(7, 13) / 10\n\t\t\tC0 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.similitude)(B0, A0, angle, rapport)\n\t\t\ttri = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)(A0, B0, C0)\n\t\t\tG = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.centreGraviteTriangle)(A0, B0, C0)\n\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 30) * 12 - 180\n\t\t\tA[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(A0, G, a, sommets[i][0], 'below left')\n\t\t\tB[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(B0, G, a, sommets[i][1], 'below right')\n\t\t\tC[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(C0, G, a, sommets[i][2], 'above')\n\t\t\tt[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)(A[i], B[i], C[i])\n\t\t\tn[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.nommePolygone)(t[i], `${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}`)\n\t\t\tswitch (liste_type_de_questions[i]) {\n\t\t\t\tcase 1:\n\t\t\t\t\td[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.hauteurTriangle)(C[i], B[i], A[i], 'blue')\n\t\t\t\t\td[i].epaisseur = 1\n\t\t\t\t\tc[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageHauteurTriangle)(C[i], B[i], A[i])\n\t\t\t\t\tobjets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]\n\t\t\t\t\ttexte_corr = `La droite tracée est la hauteur issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`\n\t\t\t\t\ttexte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])\n\t\t\t\t\tbreak\n\t\t\t\tcase 2:\n\t\t\t\t\td[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mediatrice)(A[i], B[i], true, 'blue')\n\t\t\t\t\td[i].epaisseur = 1\n\t\t\t\t\tc[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageMediatrice)(A[i], B[i])\n\t\t\t\t\tobjets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]\n\t\t\t\t\ttexte_corr = `La droite tracée est la médiatrice du segment [$${sommets[i][0]}${sommets[i][1]}]$.<br>`\n\t\t\t\t\ttexte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.constructionMediatrice)(A[i], B[i], true, 'gray', '×', '||', 'blue', 1))\n\t\t\t\t\tbreak\n\t\t\t\tcase 3:\n\t\t\t\t\td[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.medianeTriangle)(C[i], B[i], A[i], 'blue')\n\t\t\t\t\td[i].epaisseur = 1\n\t\t\t\t\tc[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageMedianeTriangle)(C[i], B[i], A[i], color = 'black', mark = '//')\n\t\t\t\t\tobjets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]\n\t\t\t\t\ttexte_corr = `La droite tracée est la médiane issue de $${sommets[i][0]}$ dans le triangle ${triangles[i].getNom()}.<br>`\n\t\t\t\t\ttexte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])\n\t\t\t\t\tbreak\n\t\t\t\tcase 4:\n\t\t\t\t\td[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.bissectrice)(A[i], B[i], C[i], 'blue')\n\t\t\t\t\td[i].epaisseur = 1\n\t\t\t\t\tc[i] = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codageBissectrice)(A[i], B[i], C[i])\n\t\t\t\t\tobjets[i] = [A[i], B[i], C[i], t[i], d[i], n[i], c[i]]\n\t\t\t\t\ttexte_corr = `La droite tracée est la bissectrice de l'angle $\\\\widehat{${sommets[i][0]}${sommets[i][1]}${sommets[i][2]}}$.<br>`\n\t\t\t\t\ttexte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i], (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.constructionBissectrice)(A[i], B[i], C[i], detail = false, color = 'red', mark = '×', tailleLosange = 3, couleurBissectrice = 'blue', epaiseurBissectrice = 1))\n\t\t\t\t\tbreak\n\n\t\t\t}\n\n\t\t\ttexte = `Quelle est la nature de la droite tracée en bleu pour le triangle ${triangles[i].getNom()} ?<br>` + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({ xmin: -3, ymin: -3, xmax: 8, ymax: 8, scale: .5, pixelsParCm: 20 }, ...objets[i])\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t}\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t}\n\tthis.besoin_formulaire_numerique = ['Type de droites', 3, \"1 : Hauteurs et Médiatrices\\n2 : Médianes et Bissectrices\\n3 : Toutes les droites\"]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5G22.js?");

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