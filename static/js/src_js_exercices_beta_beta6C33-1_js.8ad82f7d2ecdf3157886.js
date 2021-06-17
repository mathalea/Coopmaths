/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_beta6C33-1_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/exercices/beta/beta6C33-1.js":
/*!*********************************************!*\
  !*** ./src/js/exercices/beta/beta6C33-1.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Priorites)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Parenthèses manquantes'\n\n/**\n * Priorités opératoires, placer les parenthèses.\n * @Auteur Cédric Grolleau\n * Référence 6C33-1\n */\nfunction Priorites() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"Si besoin, ajoute des parenthèses pour rendre l'égalité correcte. <br\\> S'il y a plusieurs fois la même égalité trouve des solutions différentes.\";\n  this.nb_questions = 2;\n  this.nb_cols = 1;\n  this.nb_cols_corr = 1;\n  this.spacing = 3;\n  this.spacing_corr = 3;\n  \n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    var liste_questions_disponibles = [], liste_type_de_questions, texte, texte_corr, a, b, c, d, i, e,\n\t\tm, n, f, l, g, k, p, prevchoice, choice, cpt = 0; //\n\ttexte = \"\";\n\ttexte_corr = \"\";\n    for (i = 0 ; i < this.nb_questions && cpt < 50; ) {\n\t\te = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3);\n\t\tm = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3);\n\t\tn = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,6);\n\t\tf = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,4);\n\t\tl = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,4);\n\t\tg = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,3);\n\t\tk = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(f*e);\n\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(m*e);\n\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n*c);\n\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(k*c);\n\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(c*e*l);\n\t\tprevchoice = [];\n\t\ttexte = \"\";\n\t\ttexte_corr =\"\";\n\t\tfor (p =0; p<3 ; p++) {\n\t\t\tchoice = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0,6,prevchoice);\n\t\t\tprevchoice.push(choice);\n\t\t\tswitch (choice) {\n\t\t\t\tcase 0:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+b/c+(d/e+f)*g)} $ <br\\> `;\n\t\t\t\ttexte_corr += `$${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+b/c+(d/e+f)*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 1:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b)/c+d/e+f*g)}  $<br\\>`;\n\t\t\t\ttexte_corr += `$ (${a} + ${b}) \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b)/c+d/e+f*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 2:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b/c+d/e+f)*g)} $<br\\>`;\n\t\t\t\ttexte_corr += `$ ( ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} ) \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b/c+d/e+f)*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 3:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b/c+d)/e+f*g)} $<br\\>`;\n\t\t\t\ttexte_corr += `$ (${a} + ${b} \\\\div ${c} + ${d}) \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((a+b/c+d)/e+f*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 4:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(((a+b)/c+d/e+f)*g)} $<br\\>`;\n\t\t\t\ttexte_corr += `$ ((${a} + ${b}) \\\\div ${c} + ${d} \\\\div ${e} + ${f}) \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(((a+b)/c+d/e+f)*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 5:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+(b/c+d)/e+f*g)} $<br\\>`;\n\t\t\t\ttexte_corr += `$ ${a} + ( ${b} \\\\div ${c} + ${d} ) \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+(b/c+d)/e+f*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t\tcase 6:\n\t\t\t\ttexte += `$ ${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+b/c+d/e+f*g)} $ <br\\> `;\n\t\t\t\ttexte_corr += `$${a} + ${b} \\\\div ${c} + ${d} \\\\div ${e} + ${f} \\\\times ${g} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a+b/c+d/e+f*g)} $<br\\>`;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t\t\t\n\t\t}\n\t\tif (this.liste_questions.indexOf(texte) == -1) {\n\t\t\t// Si la question n'a jamais été posée, on en crée une autre\n\t\t\tthis.liste_questions.push(texte);\n\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\ti++;\n\t\t}\n\t\tcpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n}\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/beta6C33-1.js?");

/***/ })

}]);