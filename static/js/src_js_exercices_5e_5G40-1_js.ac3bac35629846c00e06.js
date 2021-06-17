/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5G40-1_js"],{

/***/ "./src/js/exercices/5e/5G40-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/5e/5G40-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ NomQuelconqueDeLaFonctionQuiCreeExercice)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Citer les propriétés des parallélogrammes'\n\n/**\n * Description didactique de l'exercice\n * @Auteur\n * Référence\n*/\nfunction NomQuelconqueDeLaFonctionQuiCreeExercice () {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = \"Compléter les phrases suivantes à l'aide de la définition ou des propriétés des parallélogrammes.\"\n  this.nb_questions_modifiable = false\n  this.nb_cols = 2 // Uniquement pour la sortie LaTeX\n  this.nb_cols_corr = 2 // Uniquement pour la sortie LaTeX\n  // this.sup = 1\n  this.tailleDiaporama = 100 // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte\n  this.video = '' // Id YouTube ou url\n\n  this.nouvelle_version = function () {\n    this.introduction = 'Dans cet exercice, on supposera que tous les quadrilatères sont non croisés.'\n\n    const question1 = 'Si un quadrilatère est un parallélogramme alors ses côtés…'\n    const correction1 = `Si un quadrilatère est un parallélogramme alors ses côtés ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('opposés sont parallèles et de même longueur')}.`\n\n    const question2 = 'Si un quadrilatère est un parallélogramme alors ses diagonales…'\n    const correction2 = `Si un quadrilatère est un parallélogramme alors ses diagonales ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('se coupent en leur milieu')}.`\n\n    const question3 = 'Si un quadrilatère est un parallélogramme alors ses angles…'\n    const correction3 = `Si un quadrilatère est un parallélogramme alors ses angles ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('opposés sont égaux et la somme de deux angles consécutifs est égale à 180°')}.`\n\n    const question4 = 'Si un quadrilatère est un parallélogramme alors … symétrie …'\n    const correction4 = `Si un quadrilatère est un parallélogramme alors ${\"il a un centre de symétrie qui est le point d'intersection de ses diagonales\"}.`\n\n    const question5 = \"Si un quadrilatère a ses diagonales … alors c'est un parallélogramme.\"\n    const correction5 = `Si un quadrilatère a ses diagonales ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('qui se coupent en leur milieu')} alors c'est un parallélogramme`\n\n    const question6 = \"Si un quadrilatère a … parallèles alors c'est un parallélogramme.\"\n    const correction6 = `Si un quadrilatère a ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('ses côtés opposés')} parallèles alors c'est un parallélogramme`\n\n    const question7 = \"Si un quadrilatère a … longueur alors c'est un parallélogramme.\"\n    const correction7 = `Si un quadrilatère a ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('ses côtés opposés de même')} longueur alors c'est un parallélogramme`\n\n    const question8 = \"Si un quadrilatère a deux côtés … alors c'est un parallélogramme.\"\n    const correction8 = `Si un quadrilatère a deux côtés ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('opposés parallèles et de même longueur')} alors c'est un parallélogramme`\n\n    const question9 = \"Si un quadrilatère a … angles … alors c'est un parallélogramme.\"\n    const correction9 = `Si un quadrilatère a ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)('ses angles opposés égaux')} alors c'est un parallélogramme`\n\n    if (parseInt(this.sup) === 1) {\n      this.liste_questions = [question1, question2, question3, question4]\n      this.liste_corrections = [correction1, correction2, correction3, correction4]\n    } else if (parseInt(this.sup) === 2) {\n      this.liste_questions = [question5, question6, question7, question8, question9]\n      this.liste_corrections = [correction5, correction6, correction7, correction8, correction9]\n    } else {\n      this.liste_questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9]\n      this.liste_corrections = [correction1, correction2, correction3, correction4, correction5, correction6, correction7, correction8, correction9]\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle2tableaux)(this.liste_questions, this.liste_corrections)\n    ;(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this)\n  }\n  this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, \"1 : Propriétés du parallélogramme\\n2 : Propriétés pour montrer qu'un quadrilatère est un parallélogramme\\n3 : Toutes les propriétés\"]\n}\n\n// python3 modules/exercices_to_json.py pour faire apparaitre l'exercice dans le menu\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5G40-1.js?");

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