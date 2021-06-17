/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5R20-3_js"],{

/***/ "./src/js/exercices/5e/5R20-3.js":
/*!***************************************!*\
  !*** ./src/js/exercices/5e/5R20-3.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Exercice_additions_de_5_relatifs)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\nconst titre = 'Additions de 5 nombres relatifs'\n\n/**\n* Effectuer la somme de 5 nombres relatifs.\n*\n* Pour la correction, on commence par effectuer la somme des termes de même signe\n*\n* * On peut paramétrer les distances à zéro qui sont par défaut inférieures à 20\n* * On peut utiliser des écritures simplifiées (ce qui n'est pas le cas par défaut)\n* @Auteur Rémi Angot\n* 5R20-3\n*/\nfunction Exercice_additions_de_5_relatifs(max = 20) {\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.sup = max;\n\tthis.sup2 = false; // écriture simplifiée\n\tthis.titre = titre;\n\tthis.consigne = 'Calculer';\n\tthis.spacing = 2;\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\n\tthis.nouvelle_version = function () {\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tfor (let i = 0, a, b, c, d, e, s1, s2, s3, s4, relatifs, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles\n\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n\t\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n\t\t\tif (a == 1 & b == 1) { // On s'assure que les 3 premières termes n'ont pas le même signe\n\t\t\t\tc = -1;\n\t\t\t} else if (a == -1 & b == -1) {\n\t\t\t\tc = 1;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n\t\t\t}\n\t\t\td = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n\t\t\te = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n\t\t\ts1 = 1; // Que des additions\n\t\t\ts2 = 1;\n\t\t\ts3 = 1;\n\t\t\ts4 = 1;\n\t\t\tif (this.sup2) {\n\t\t\t\ttexte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} = ${a}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(d)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e)} = \\\\dotfill $`;\n\t\t\t\tif (!sortie_html) {\n\t\t\t\t\ttexte += `<br>$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} = \\\\dotfill $`;\n\t\t\t\t}\n\t\t\t\ttexte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} =  ${a}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(d)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(e)} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.somme_des_termes_par_signe)([a, b, c, d, e])[0]}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.somme_des_termes_par_signe)([a, b, c, d, e])[1])} = ${a + b + c + d + e} $`;\n\t\t\t} else {\n\t\t\t\ttexte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} =  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(a)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s1)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(b)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s2)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(c)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s3)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(d)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s4)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(e)} = \\\\dotfill $`;\n\t\t\t\tif (!sortie_html) {\n\t\t\t\t\ttexte += `<br>$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} = \\\\dotfill $`;\n\t\t\t\t}\n\t\t\t\ttexte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1)} =  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(a)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s1)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(b)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s2)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(c)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s3)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(d)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.signe)(s4)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(e)} $`;\n\t\t\t\trelatifs = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.trie_positifs_negatifs)([a, s1 * b, s2 * c, s3 * d, s4 * e]);\n\n\t\t\t\tif (relatifs[0] > 0 & relatifs[4] < 0) {\n\t\t\t\t\ttexte_corr += `<br>$ \\\\phantom{A}= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(relatifs[0])}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(relatifs[1])}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(relatifs[2])}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(relatifs[3])}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(relatifs[4])} $`;\n\t\t\t\t}\n\t\t\t\tlet sommes_signees = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.somme_des_termes_par_signe)([relatifs[0], relatifs[1], relatifs[2], relatifs[3], relatifs[4]]);\n\t\t\t\tif (sommes_signees[0] != 0 && sommes_signees[1] != 0) {\n\t\t\t\t\ttexte_corr += `<br>$ \\\\phantom{A}= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(sommes_signees[0])}+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(sommes_signees[1])} $`;\n\t\t\t\t\ttexte_corr += `<br>$ \\\\phantom{A}= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebriquec)(a + s1 * b + s2 * c + s3 * d + s4 * e)}$<br>`;\n\t\t\t\t}\n\n\t\t\t\telse if (sommes_signees[0] != 0)\n\t\t\t\t\ttexte_corr += `<br>$ \\\\phantom{A}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebriquec)(sommes_signees[0])}$`;\n\t\t\t\telse\n\t\t\t\t\ttexte_corr += `<br>$ \\\\phantom{A}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebriquec)(sommes_signees[1])}$<br>`;\n\t\t\t}\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu_sans_numero)(this);\n\t};\n\tthis.besoin_formulaire_numerique = ['Valeur maximale', 99999];\n\tthis.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5R20-3.js?");

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