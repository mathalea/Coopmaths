/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3L13-2_js"],{

/***/ "./src/js/exercices/3e/3L13-2.js":
/*!***************************************!*\
  !*** ./src/js/exercices/3e/3L13-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Eq_resolvantes_Thales)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Equations résolvantes pour le théorème de Thalès'\n\n/**\n * * Equations résolvantes pour le théorème de Thalès\n * * 3L13-2\n * * modification le 11/01/2021\n * @author Sébastien Lozano\n */\nfunction Eq_resolvantes_Thales() {\n\t'use strict';\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.titre = titre;\n\tthis.debug = false;\n\tif (this.debug) {\n\t\tthis.nb_questions = 4;\n\t} else {\n\t\tthis.nb_questions = 2;\n\t};\n\tthis.sup = 1;\n\tthis.consigne = `Résoudre les équations suivantes.`;\n\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\tsortie_html ? this.spacing = 3 : this.spacing = 2;\n\tsortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;\n\n\tthis.liste_packages = `bclogo`;\n\n\tlet type_de_questions_disponibles;\n\n\tthis.nouvelle_version = function () {\n\t\t// une fonction pour dire que c'est trivial dans ce cas\n\t\tfunction trivial(bool, a, b, c, inc) {\n\t\t\tlet sortie;\n\t\t\tlet texte = ``;\n\t\t\tif (bool) {\n\t\t\t\tif (b == c) {\n\t\t\t\t\ttexte = `Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${inc}=${a}$ !`;\n\t\t\t\t\tsortie = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.warn_message)(texte, `nombres`, `Keep Cool Guy !`);\n\t\t\t\t};\n\t\t\t\tif (c == a) {\n\t\t\t\t\ttexte = `Dans ce cas le recours au produit en croix est superflu.<br> Par identification, on a directement $${inc}=${b}$ !`;\n\t\t\t\t\tsortie = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.warn_message)(texte, `nombres`, `Keep Cool Guy !`);\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tsortie = ``;\n\t\t\t};\n\t\t\treturn sortie;\n\t\t};\n\n\t\tif (this.debug) {\n\t\t\ttype_de_questions_disponibles = [0, 1, 2, 3];\n\t\t} else {\n\t\t\ttype_de_questions_disponibles = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)([(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2, 3])]);\n\t\t};\n\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\n\n\t\t//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n\t\tlet liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes_sans_changer_ordre)(type_de_questions_disponibles, this.nb_questions); // Tous les types de questions sont posées --> à remettre comme ci dessus\t\t\n\n\t\tfor (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\n\t\t\t// on a besoin d'un coeff pour le type de nombres\n\t\t\tlet coeff;\n\t\t\tlet nb_alea = [1, 1, 1];\n\t\t\tlet c_temp_case_3;\n\t\t\twhile (c_temp_case_3 % 2 != 0 || c_temp_case_3 % 5 != 0) {\n\t\t\t\tc_temp_case_3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99);\n\t\t\t};\n\n\t\t\tthis.sup = Number(this.sup); // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !\n\t\t\tswitch (this.sup) {\n\t\t\t\tcase 1: //entiers          \n\t\t\t\t\tcoeff = [1, 1, 1];\n\t\t\t\t\tnb_alea[0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n\t\t\t\t\tnb_alea[1] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, nb_alea[0]);\n\t\t\t\t\tnb_alea[2] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2, 4, 5, 8], [nb_alea[0], nb_alea[1]]);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 2: //relatifs            \n\t\t\t\t\tcoeff = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1])];\n\t\t\t\t\tnb_alea[0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n\t\t\t\t\tnb_alea[1] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, nb_alea[0]);\n\t\t\t\t\tnb_alea[2] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2, 4, 5, 8], [nb_alea[0], nb_alea[1]]);\n\t\t\t\t\tbreak;\n\t\t\t\tcase 3: //décimaux            \n\t\t\t\t\tcoeff = [0.1, 0.1, 0.1];\n\t\t\t\t\tnb_alea[0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n\t\t\t\t\tnb_alea[1] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, nb_alea[0]);\n\t\t\t\t\tnb_alea[2] = c_temp_case_3;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 4: //mélange\n\t\t\t\t\tnb_alea[0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n\t\t\t\t\tnb_alea[1] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9, nb_alea[0]);\n\t\t\t\t\tnb_alea[2] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2, 4, 5, 8], [nb_alea[0], nb_alea[1]]);\n\t\t\t\t\tlet masterChoix = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([\n\t\t\t\t\t\t{ c: [1, 1, 1], na: [nb_alea[0], nb_alea[1], nb_alea[2]] },\n\t\t\t\t\t\t{ c: [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, -1])], na: [nb_alea[0], nb_alea[1], nb_alea[2]] },\n\t\t\t\t\t\t{ c: [0.1, 0.1, 0.1], na: [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(11, 99), c_temp_case_3] }\n\t\t\t\t\t]);\n\t\t\t\t\tcoeff = masterChoix.c;\n\t\t\t\t\tnb_alea = masterChoix.na;\n\t\t\t};\n\n\t\t\tlet inc;\n\t\t\tif (this.exo == '4L15-1') {\n\t\t\t\tinc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);\n\n\t\t\t} else if (this.exo == '4P10-2') {\n\t\t\t\tinc = ['?'];\n\t\t\t} else {\n\t\t\t\tinc = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(['x', 'y', 'GO', 'AB', 'z', 'GA', 'BU', 'ZO', 'ME']);\n\t\t\t};\n\n\t\t\tlet params = {\n\t\t\t\ta: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(nb_alea[0] * coeff[0]),\n\t\t\t\tb: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(nb_alea[1] * coeff[1]),\n\t\t\t\tc: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(nb_alea[2] * coeff[2]),\n\t\t\t\tinc: inc\n\t\t\t};\n\n\t\t\t// pour les situations, autant de situations que de cas dans le switch !\n\t\t\tlet situations = [\n\t\t\t\t{\n\t\t\t\t\teq: `\\\\dfrac{${params.inc}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.b)}}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.a)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.c)}}`,\n\t\t\t\t\ttab: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tab_C_L)([params.inc, params.a], [params.b], [params.c]),\n\t\t\t\t\ta: params.a,\n\t\t\t\t\tb: params.b,\n\t\t\t\t\tc: params.c,\n\t\t\t\t\tinc: params.inc,\n\t\t\t\t\ttrivial: (params.b == params.c) || (params.c == params.a)\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\teq: `\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.a)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.c)}}=\\\\dfrac{${params.inc}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.b)}}`,\n\t\t\t\t\ttab: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tab_C_L)([params.a, params.inc], [params.c], [params.b]),\n\t\t\t\t\ta: params.a,\n\t\t\t\t\tb: params.b,\n\t\t\t\t\tc: params.c,\n\t\t\t\t\tinc: params.inc,\n\t\t\t\t\ttrivial: (params.b == params.c) || (params.c == params.a)\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\teq: `\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.b)}}{${params.inc}}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.c)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.a)}}`,\n\t\t\t\t\ttab: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tab_C_L)([params.b, params.c], [params.inc], [params.a]),\n\t\t\t\t\ta: params.a,\n\t\t\t\t\tb: params.b,\n\t\t\t\t\tc: params.c,\n\t\t\t\t\tinc: params.inc,\n\t\t\t\t\ttrivial: (params.b == params.c) || (params.c == params.a)\n\t\t\t\t},\n\t\t\t\t{\n\t\t\t\t\teq: `\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.c)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.a)}}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(params.b)}}{${params.inc}}`,\n\t\t\t\t\ttab: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tab_C_L)([params.c, params.b], [params.a], [params.inc]),\n\t\t\t\t\ta: params.a,\n\t\t\t\t\tb: params.b,\n\t\t\t\t\tc: params.c,\n\t\t\t\t\tinc: params.inc,\n\t\t\t\t\ttrivial: (params.b == params.c) || (params.c == params.a)\n\t\t\t\t},\n\t\t\t];\n\n\t\t\tlet enoncePlus;\n\t\t\tlet corrPlusPremiereLigne;\n\n\t\t\tlet enonces = [];\n\t\t\tfor (let k = 0; k < situations.length; k++) {\n\t\t\t\tif (this.exo == '4P10-2') {\n\t\t\t\t\tenoncePlus = `${situations[k].tab}`;\n\t\t\t\t\tcorrPlusPremiereLigne = `${situations[k].tab} <br> Le tableau ci-dessus est un tableau de proportionnalité, pour déterminer la quatrième proportionnelle il suffit par exemple de résoudre l'équation suivante : <br>`;\n\t\t\t\t} else {\n\t\t\t\t\tenoncePlus = `$${situations[k].eq}$`;\n\t\t\t\t\tcorrPlusPremiereLigne = ``;\n\t\t\t\t};\n\t\t\t\tenonces.push({\n\t\t\t\t\tenonce: enoncePlus,\n\t\t\t\t\tquestion: ``,\n\t\t\t\t\tcorrection: `${corrPlusPremiereLigne}\n\t\t\t\t\t\t$${situations[k].eq}$<br>\n\t\t\t\t\t\t${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Les produits en croix sont égaux.`)}<br>\n\t\t\t\t\t\t$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c)}\\\\times ${situations[k].inc} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].a)}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].b)}$<br>\n\t\t\t\t\t\t${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`On divise les deux membres par ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c)}`)}.<br>\n\t\t\t\t\t\t$\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c)}\\\\times ${situations[k].inc}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c)}}= \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].a)}\\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].b)}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c)}}$<br>\n\t\t\t\t\t\t${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`On simplifie et on calcule.`)}<br>\n\t\t\t\t\t\t$${situations[k].inc}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(Number(situations[k].b) * Number(situations[k].a) / Number(situations[k].c)))}$\n\t\t\t\t\t\t${trivial(situations[k].trivial, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].a), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].b), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(situations[k].c), situations[k].inc)}\n\t\t\t\t\t`\n\t\t\t\t});\n\t\t\t};\n\n\t\t\t// autant de case que d'elements dans le tableau des situations\n\t\t\tswitch (liste_type_de_questions[i]) {\n\t\t\t\tcase 0:\n\t\t\t\t\ttexte = `${enonces[0].enonce}`;\n\t\t\t\t\tif (this.debug) {\n\t\t\t\t\t\ttexte += `<br>`;\n\t\t\t\t\t\ttexte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;\n\t\t\t\t\t\ttexte += `             `;\n\t\t\t\t\t\ttexte_corr = ``;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr = `${enonces[0].correction}`;\n\t\t\t\t\t};\n\t\t\t\t\tbreak;\n\t\t\t\tcase 1:\n\t\t\t\t\ttexte = `${enonces[1].enonce}`;\n\t\t\t\t\tif (this.debug) {\n\t\t\t\t\t\ttexte += `<br>`;\n\t\t\t\t\t\ttexte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;\n\t\t\t\t\t\ttexte_corr = ``;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr = `${enonces[1].correction}`;\n\t\t\t\t\t};\n\t\t\t\t\tbreak;\n\t\t\t\tcase 2:\n\t\t\t\t\ttexte = `${enonces[2].enonce}`;\n\t\t\t\t\tif (this.debug) {\n\t\t\t\t\t\ttexte += `<br>`;\n\t\t\t\t\t\ttexte += `<br> =====CORRECTION======<br>${enonces[2].correction}`;\n\t\t\t\t\t\ttexte_corr = ``;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr = `${enonces[2].correction}`;\n\t\t\t\t\t};\n\t\t\t\t\tbreak;\n\t\t\t\tcase 3:\n\t\t\t\t\ttexte = `${enonces[3].enonce}`;\n\t\t\t\t\tif (this.debug) {\n\t\t\t\t\t\ttexte += `<br>`;\n\t\t\t\t\t\ttexte += `<br> =====CORRECTION======<br>${enonces[3].correction}`;\n\t\t\t\t\t\ttexte_corr = ``;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr = `${enonces[3].correction}`;\n\t\t\t\t\t};\n\t\t\t\t\tbreak;\n\t\t\t};\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\n\t};\n\tthis.besoin_formulaire_numerique = ['Type de nombres', 4, \"1 : Entiers naturels\\n2 : Entiers relatifs\\n3 : Décimaux\\n4 : Mélange\"];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/3e/3L13-2.js?");

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