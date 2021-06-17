/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_beta4G20-4_js"],{

/***/ "./src/js/exercices/4e/beta4G20-4.js":
/*!*******************************************!*\
  !*** ./src/js/exercices/4e/beta4G20-4.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Calculer_une_expression_litterale_pythagore)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Calculer la racine carrée de (x² +/- y²)'\n\n/**\n * Description didactique de l'exercice : Calculer_une_expression_litterale_type_pythagore\n * @Auteur Mireille Gain\n * Référence : 4G20-4\n*/\nfunction Calculer_une_expression_litterale_pythagore() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"Dans chaque cas, calculer a² + b² et a² - b²; puis donner la racine carrée de chaque résultat en valeur arrondie au centième.\";\n  this.nb_questions = 2;\n  this.nb_cols = 3;\n  this.nb_cols_corr = 2;\n  this.tailleDiaporama = 50;\n  this.video = \"\" ;\n\n  this.nouvelle_version = function () {\n\n    this.liste_questions = []; \n    this.liste_corrections = []; \n    let a, b, n,s,d,racs,racd,miracs, miracd;\n    let type_de_questions_disponibles = ['type1','type2'];\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles,this.nb_questions);\n\n    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n    \n      switch (liste_type_de_questions[i]) {        \n          \n        case 'type1': \n        a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(3,12);\n        n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5,9);\n        b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n*0.1);\n      break\n\n      case 'type2': \n        a = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(3,12);\n        n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,5);\n        b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(1+n*0.1);\n      break\n      }\n\ns = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a*a+b*b);\nd = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a*a-b*b);\nracs = Math.sqrt(s);\nracd = Math.sqrt(d);\nmiracs = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racs-(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racs,2),3);\nmiracd = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racd-(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racd,2),3);\n\n  texte = `$\\\\phantom{12}a = ${a} \\\\phantom{12}et \\\\phantom{12}b = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)}$`;\n\n  texte_corr = `$\\\\begin{aligned}a^2 + b^2&\n   = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)} + ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)} \n   \\\\\\\\&= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a)} + ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(b*b)} \n   \\\\\\\\&= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)((a*a + b*b))}\\\\end{aligned}$`;\n  texte_corr += `<br>$\\\\phantom{123456}\\\\sqrt{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a+b*b)}}$`;\n\n  if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.carreParfait)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(100*s))) {texte_corr += `$\\\\phantom{1}=\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(racs)}$  (qui est la valeur exacte de $\\\\sqrt{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a+b*b)}}$)`;\n}else{\n  if (1000*miracs < 5) {\n    texte_corr += `$\\\\phantom{1}≈\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racs, 2))}$`;\n  } else {\n    texte_corr += `$\\\\phantom{1}≈\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racs+0.01,2))}$`;\n  }}\n\n  texte_corr += `<br><br>$\\\\begin{aligned}a^2 - b^2& \n  = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)} - ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b)} \n  \\\\\\\\&= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a)} - ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(b*b)} \n  \\\\\\\\&= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a - b*b)}\\\\end{aligned}$`;\n  texte_corr += `<br>$\\\\phantom{123456}\\\\sqrt{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a-b*b)}}$`;  \n\n  if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.carreParfait)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(100*d))) {texte_corr += `$\\\\phantom{1}=\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(racd)}$  (qui est la valeur exacte de $\\\\sqrt{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(a*a-b*b)}}$)`;\n}else{\n  if (1000*miracd < 5) {\n    texte_corr += `$\\\\phantom{1}≈\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)(racd, 2))}$`;\n  } else {\n    texte_corr += `$\\\\phantom{1}≈\\\\phantom{1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.troncature)((racd+0.01), 2))}$`;\n  }}\n  \n\n  if (this.liste_questions.indexOf(texte) == -1) {\n    // Si la question n'a jamais été posée, on en crée une autre\n    this.liste_questions.push(texte);\n    this.liste_corrections.push(texte_corr);\n    i++;\n  }\n  cpt++;\n}\n(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n};\n\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/4e/beta4G20-4.js?");

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