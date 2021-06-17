/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3F12-2_js"],{

/***/ "./src/js/exercices/3e/3F12-2.js":
/*!***************************************!*\
  !*** ./src/js/exercices/3e/3F12-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Image_fonction_algebrique)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\nconst titre = 'Déterminer l’image d’un nombre par une fonction d’après sa forme algébrique'\n\n/**\n* Déterminer l'image d'un nombre par une fonction d'après sa forme algébrique\n*\n* * Niveau 1 : Fonctions affines\n* * Niveau 2 : Polynôme du second degré\n* * Niveau 3 : Quotients de fonctions affines\n* * Niveau 4 : (ax+b)(cx+d)\n* * Niveau 5 : Mélange\n* @Auteur Rémi Angot\n* 3F12-2\n*/\nfunction Image_fonction_algebrique() {\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.titre = titre;\n\tthis.consigne = \"\";\n\tthis.nb_questions = 5;\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\tthis.sup = 5; // niveau de difficulté\n\n\tthis.nouvelle_version = function (numero_de_l_exercice) {\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\n\t\tlet type_de_questions_disponibles = [];\n\t\tif (this.sup == 1) {\n\t\t\ttype_de_questions_disponibles = ['ax+b', 'ax-b', '-ax+b', '-ax-b'];\n\t\t}\n\t\tif (this.sup == 2) {\n\t\t\ttype_de_questions_disponibles = ['ax2+bx+c', 'ax2+c', 'ax2+bx', '-ax2+bx-c', '-ax2-bx-c', '-ax2-bx+c', '-ax2-bx'];\n\t\t}\n\t\tif (this.sup == 3) {\n\t\t\ttype_de_questions_disponibles = ['a/cx+d', 'ax+b/cx+d'];\n\t\t}\n\t\tif (this.sup == 4) {\n\t\t\ttype_de_questions_disponibles = ['(ax+b)(cx+d)', '(ax+b)2'];\n\t\t}\n\t\tif (this.sup == 5) {\n\t\t\ttype_de_questions_disponibles = ['ax+b', 'ax-b', '-ax+b', 'ax2+bx+c', '-ax2+bx-c', '-ax2-bx', 'a/cx+d', 'ax+b/cx+d', '(ax+b)(cx+d)', '(ax+b)2'];\n\t\t}\n\t\tlet liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n\t\tlet liste_de_signes_de_x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)([true, false], this.nb_questions);\n\t\tfor (let i = 0, texte, texte_corr, a, b, c, d, expression, nomdef, x, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\t\t\tx = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 12);\n\t\t\tif (liste_de_signes_de_x[i]) {\n\t\t\t\tx = -1 * x;\n\t\t\t}\n\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11);\n\t\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11);\n\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11);\n\t\t\tnomdef = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_minuscule_depuis_chiffre)(6 + i) // on commence par f puis on continue dans l'ordre alphabétique\n\t\t\tswitch (liste_type_de_questions[i]) {\n\t\t\t\tcase 'ax+b':\n\t\t\t\t\texpression = `${a}x+${b}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${b}=${a * x}+${b}=${a * x + b}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'ax-b':\n\t\t\t\t\texpression = `${a}x-${b}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}-${b}=${a * x}-${b}=${a * x - b}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax+b':\n\t\t\t\t\texpression = `-${a}x+${b}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${b}=${-1 * a * x}+${b}=${-1 * a * x + b}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax-b':\n\t\t\t\t\texpression = `-${a}x-${b}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}-${b}=${-1 * a * x}-${b}=${-1 * a * x - b}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'ax2+bx+c':\n\t\t\t\t\texpression = `${a}x^2+${b}x+${c}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2+${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${c}=${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}+${c}=${a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}+${c}=${a * x * x + b * x + c}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'ax2+c':\n\t\t\t\t\texpression = `${a}x^2+${c}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2+${c}=${a}\\\\times${x * x}+${c}=${a * x * x}+${c}=${a * x * x + c}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'ax2+bx':\n\t\t\t\t\texpression = `${a}x^2+${b}x`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2+${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}=${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}=${a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}=${a * x * x + b * x}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax2+bx-c':\n\t\t\t\t\texpression = `-${a}x^2+${b}x-${c}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2+${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}-${c}=-${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}-${c}=${-1 * a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b * x)}-${c}=${-1 * a * x * x + b * x - c}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax2-bx-c':\n\t\t\t\t\texpression = `-${a}x^2-${b}x-${c}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2-${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}-${c}=-${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}-${c}=${-1 * a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}-${c}=${-1 * a * x * x - b * x - c}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax2-bx+c':\n\t\t\t\t\texpression = `-${a}x^2-${b}x+${c}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2-${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${c}=-${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}+${c}=${-1 * a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}+${c}=${-1 * a * x * x - b * x + c}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '-ax2-bx':\n\t\t\t\t\texpression = `-${a}x^2-${b}x`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=-${a}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}^2-${b}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}=-${a}\\\\times${x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}=${-1 * a * x * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-1 * b * x)}=${-1 * a * x * x - b * x}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'a/cx+d':\n\t\t\t\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 11)\n\t\t\t\t\twhile (c * x + d == 0) {\n\t\t\t\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11)\n\t\t\t\t\t}\n\t\t\t\t\texpression = `\\\\dfrac{${a}}{${c}x+${d}}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=\\\\dfrac{${a}}{${c}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${d}}=\\\\dfrac{${a}}{${c * x}+${d}}=\\\\dfrac{${a}}{${c * x + d}}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_reduite)(a, c * x + d)}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase 'ax+b/cx+d':\n\t\t\t\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 11)\n\t\t\t\t\twhile (c * x + d == 0) {\n\t\t\t\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11)\n\t\t\t\t\t}\n\t\t\t\t\twhile (a * x + b == 0) {\n\t\t\t\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 11)\n\t\t\t\t\t}\n\t\t\t\t\texpression = `\\\\dfrac{${a}x+${b}}{${c}x+${d}}`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=\\\\dfrac{${a}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${b}}{${c}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}+${d}}=\\\\dfrac{${a * x}+${b}}{${c * x}+${d}}=\\\\dfrac{${a * x + b}}{${c * x + d}}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_reduite)(a * x + b, c * x + d)}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '(ax+b)(cx+d)':\n\t\t\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0, 1, -1])\n\t\t\t\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0])\n\t\t\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0, 1, -1])\n\t\t\t\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0])\n\t\t\t\t\tx = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-2, 2, [0])\n\n\t\t\t\t\texpression = `(${a}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)})(${c}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(d)})`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=\\\\left(${a}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}\\\\right)\\\\left(${c}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(d)}\\\\right)=(${a * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)})(${c * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(d)})=${a * x + b}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(c * x + d)}=${(a * x + b) * (c * x + d)}$`\n\t\t\t\t\tbreak;\n\t\t\t\tcase '(ax+b)2':\n\t\t\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0, -1, 1])\n\t\t\t\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0])\n\t\t\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0, -1, 1])\n\t\t\t\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4, 4, [0])\n\t\t\t\t\tx = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-2, 2, [0])\n\n\t\t\t\t\texpression = `(${a}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)})^2`\n\t\t\t\t\ttexte_corr = `$${nomdef}(${x})=\\\\left(${a}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(x)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}\\\\right)^2=(${a * x}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)})^2=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(a * x + b)}^2=${(a * x + b) * (a * x + b)}$`\n\t\t\t\t\tbreak;\n\t\t\t}\n\n\t\t\ttexte = `On considère la fonction $${nomdef}$ définie par $${nomdef}:x\\\\mapsto ${expression}$. Calculer $${nomdef}(${x})$.`\n\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t}\n\tthis.besoin_formulaire_numerique = ['Niveau de difficulté', 5, '1 : Fonctions affines\\n2 : Polynome du second degré\\n3 : Quotient\\n4 : Produit \\n5 : Mélange'];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/3e/3F12-2.js?");

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