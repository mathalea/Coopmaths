/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6N22-2_js"],{

/***/ "./src/js/exercices/6e/6N22-2.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6N22-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Ajouter_des_fractions_d_unite)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/Fractions.js */ \"./src/js/modules/Fractions.js\");\n\n\n\n\nconst titre = 'Mettre bout à bout des segments'\n\n/**\n * Représenter une somme de fracions de même dénominateur sur un segment gradué de façon adaptée.\n * @Auteur Jean-Claude Lhote\n * 6N14-2\n */\nfunction Ajouter_des_fractions_d_unite() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"\";\n  this.nb_questions = 4;\n  this.nb_cols = 2;\n  this.nb_cols_corr = 2;\n  this.sup = 3;\n\n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    let ppc, sc, objets;\n    ppc = 20;\n    if (sortie_html) {\n      sc = 0.5;\n    } else {\n      sc = 0.3;\n    }\n\n    let params, den, num = [0, 0, 0, 0], f = [];\n\n    let liste = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)([5, 6, 7, 8], this.nb_questions);\n\n    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      objets = [];\n      den = liste[i];\n      num[0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, den - 1);\n      num[1] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, den - 1, num[0]);\n      num[2] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, den - 1, num[1]);\n      num[3] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, den - 1, [num[2], num[0]]);\n      for (let j = 0; j < 4; j++)\n        f[j] = (0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(num[j], den);\n\n\n      texte = `On place bout à bout 4 segments de longueurs respectives$ ${f[0].texFraction}$, $${f[1].texFraction}$, $${f[2].texFraction}$ et $${f[3].texFraction}$.<br>`;\n      texte += `Quelle est la longueur du segment obtenu ?`;\n      texte_corr = `Voici sur ces dessins, coloriés en rouge, les différents segments :<br>`;\n      for (let j = 0; j < 4; j++)\n        objets.push(f[j].representation(0, 5 - j * 1.25, 5, 0, 'segment', 'red', 0, 1, 1));\n      params = {\n        xmin: -0.4,\n        ymin: -1.5,\n        xmax: 6,\n        ymax: 6,\n        pixelsParCm: ppc,\n        scale: 0.5,\n      };\n      texte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params, ...objets);\n      texte_corr += `<br>Ce qui donne en les mettant bout à bout :<br>`;\n      params = {\n        xmin: -0.4,\n        ymin: -1.5,\n        xmax: 20,\n        ymax: 1,\n        pixelsParCm: ppc,\n        scale: sc,\n      };\n      texte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params, (0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(num[0] + num[1] + num[2] + num[3], den).representation(0, 0, 5, 0, 'segment', 'red', 0, 1, 0.6));\n      texte_corr += `<br>La longueur du segment ainsi obtenu est : $${(0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(num[0] + num[1] + num[2] + num[3], den).texFraction}$`;\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = [\n    \"Type de cahier\",\n    3,\n    `1 : Cahier à petits careaux\\n 2 : Cahier à gros carreaux (Seyes)\\n 3 : Feuille blanche`,\n  ];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6N22-2.js?");

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