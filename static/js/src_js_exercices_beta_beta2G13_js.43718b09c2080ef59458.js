/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_beta2G13_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/exercices/beta/beta2G13.js":
/*!*******************************************!*\
  !*** ./src/js/exercices/beta/beta2G13.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ calculer_coordonnees_vecteurs)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\n\nconst titre = 'Déterminer les coordonnées d’un vecteur.'\n\n/**\n * @Auteur Stéphane Guyon\n */\nfunction calculer_coordonnees_vecteurs() {\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n    this.titre = titre;\n\n    this.nb_questions = 2;\n    this.nb_cols = 2;\n    this.nb_cols_corr = 2;\n    this.sup = 1; // \n    this.nouvelle_version = function () {\n        this.liste_questions = []; // Liste de questions\n        this.liste_corrections = []; // Liste de questions corrigées\n        let type_de_questions_disponibles = [1];\n        let type_de_questions\n\n        let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions);\n        for (let i = 0, ux, uy, xA, yA, xB, yB, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n            type_de_questions = liste_type_de_questions[i];\n            switch (type_de_questions) {\n                // Cas par cas, on définit le type de nombres que l'on souhaite\n                // Combien de chiffres ? Quelles valeurs ?\n                case 1:\n\n\n                    xA = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 5) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n                    yA = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 5) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n                    ux = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n                    uy = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]);\n                    xB = xA + ux;\n\n                    yB = yA + uy;\n\n\n                    texte = `Dans un repère orthonormé $(O,\\\\vec i,\\\\vec j)$, on donne les points suivants :`;\n                    texte += ` $A\\\\left(${xA};${yA}\\\\right)$ et $B\\\\left(${xB};${yB}\\\\right)$`;\n                    texte += `<br>Déterminer les coordonnées du vecteur $\\\\overrightarrow{AB}$ `;\n                    r = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.repere2)()//On définit le repère  \n                    A = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xA, yA)\n                    B = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xB, yB)                     \n                    t = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(A, B,'red') // Variable qui trace les points avec une croix\n                    l = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(A,B)// Variable qui trace les nom s A et B\n                    l.color='red'                    \n                    texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n                      xmin: -6,\n                      ymin: -6,\n                      xmax: 6,\n                      ymax: 6\n                    }, r, t,l);// On trace le graphique\n\n\n\n                    texte_corr = `<br>On sait d'après le cours, que si $A(x_A;y_A)$ et $B(x_B;y_B)$ sont deux points d'un repère,`;\n                    texte_corr += ` <br>alors on a : $\\\\overrightarrow{AB}\\\\begin{pmatrix}x_B-x_A  \\\\\\\\y_B-y_A\\\\end{pmatrix}$<br>`;\n                    texte_corr += ` <br>On applique ici aux données de l'énoncé :`;\n                    texte_corr += ` $\\\\overrightarrow{AB}\\\\begin{pmatrix}${xB}-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(xA)}  \\\\\\\\${yB}-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)(yA)}\\\\end{pmatrix}$<br>`;\n                    texte_corr += `Ce qui donne au final : $\\\\overrightarrow{AB}\\\\begin{pmatrix}${xB - xA}  \\\\\\\\${yB - yA}\\\\end{pmatrix}$<br>`;\n\n                    break;\n                case 2:\n\n\n\n                    break;\n\n\n            }\n            if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n                this.liste_questions.push(texte);\n                this.liste_corrections.push(texte_corr);\n                i++;\n            }\n            cpt++;\n        }\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n    };\n   \n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/beta2G13.js?");

/***/ })

}]);