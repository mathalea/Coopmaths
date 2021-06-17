/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6N41-1_js"],{

/***/ "./src/js/exercices/6e/6N41-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6N41-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Exercice_labyrinthe_fractions_egales)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/Fractions.js */ \"./src/js/modules/Fractions.js\");\n\n\n\n\n\nconst titre = 'Labyrinthe de fractions égales'\n\n/**\n * @Auteur Jean-Claude Lhote\n * Publié le 11/12/2020\n * Ref : 6N41-1\n * Parcourir un labyrinthe de fractions en passant par des fractions égales.\n */\nfunction Exercice_labyrinthe_fractions_egales() {\n  \"use strict\"\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\n  this.titre = titre;\n  this.consigne=\"\"\n  this.niveau = '6e'\n  this.nb_questions = 1;\n  this.nb_questions_modifiable = false\n  this.nb_cols = 1;\n  this.nb_cols_corr = 1;\n  this.pas_de_version_LaTeX = false\n  this.pas_de_version_HMTL = false\n  this.sup2 = 3\n  this.sup = 10\n  if (this.niveau = 'CM') {\n    this.sup = 10;\n    this.sup2 = 3;\n  }\n  else {\n    this.sup = 13;\n    this.sup2 = 4;\n  }\n  this.nouvelle_version = function () {\n    this.liste_corrections=[]\n    this.liste_questions=[]\n    let mesfractions=[]\n    let params, texte, texte_corr, trouve\n    let laby = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labyrinthe)()\n    laby.niveau = parseInt(this.sup2) // Le niveau (de 1 à 6=mélange) définit le nombre d'étapes\n    laby.chemin = laby.choisitChemin(laby.niveau) // On choisi un chemin\n    laby.murs2d = laby.construitMurs(laby.chemin) // On construit le labyrinthe\n    laby.chemin2d = laby.traceChemin(laby.chemin) // On trace le chemin solution\n    let monchemin = laby.chemin\n    let table = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,7)+1\n    let num=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,2*table-1)\n    while ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.pgcd)(num,table)!=1) {\n      num=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,2*table-1)\n    }\n    let maximum = parseInt(this.sup)\n //   this.consigne=`Trouve la sortie en ne passant que par les cases contenant un multiple de $${table}$.`\n    texte = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Trouve la sortie en ne passant que par les cases contenant des fractions égales à `,'black')}$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_reduite)(num,table)}$.<br>`\n    texte_corr = `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Voici le chemin en marron et la sortie était la numéro $${2 - monchemin[monchemin.length - 1][1] + 1}$.`, 'black')}<br>`\n    // Zone de construction du tableau de nombres : Si ils sont sur monchemin et seulement si, ils doivent vérifier la consigne\n    let listeMultiples = [], index = 0\n \n    for (let i = 2; i <= maximum; i++){\n      listeMultiples.push(table * i)\n    }\n    listeMultiples = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(listeMultiples, 12)\n    for (let i=0;i<12;i++){\n      mesfractions.push((0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(num*listeMultiples[i]/table),listeMultiples[i]))\n    }\n    for (let i=0;i<12;i++) {\n      switch ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3)){\n        case  1:  mesfractions.push((0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(listeMultiples[i],num*listeMultiples[i]/table))\n        break\n        case 2:   mesfractions.push((0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(num*listeMultiples[i]/table),listeMultiples[i]-table))\n        break\n        case 3:   mesfractions.push((0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(num*listeMultiples[i]/table),listeMultiples[i]-table))\n        break\n      }\n    }\n    for (let a=1;a<7;a++) {\n      laby.nombres.push([(0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(1,1),(0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(1,1),(0,_modules_Fractions_js__WEBPACK_IMPORTED_MODULE_3__.fraction)(1,1)])\n    }\n \n    for (let a = 1; a < 7; a++) {\n      for (let b = 0; b < 3; b++) {\n        trouve = false\n        for (let k = 0; k < monchemin.length; k++) {\n          if (monchemin[k][0] == a && monchemin[k][1] == b) trouve = true\n        }\n        if (!trouve) {\n          laby.nombres[a - 1][b] = mesfractions[index+12]\n        }\n        else {\n          laby.nombres[a - 1][b] = mesfractions[index]\n          index++\n        }\n      }\n    } // Le tableau de nombre étant fait, on place les objets nombres.\n    laby.nombres2d = laby.placeNombres(laby.nombres,1.5)\n    params = { xmin: -4, ymin: 0, xmax: 22, ymax: 11, pixelsParCm: 20, scale: 0.7 }\n    texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params, laby.murs2d, laby.nombres2d)\n    texte_corr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params, laby.murs2d, laby.nombres2d, laby.chemin2d)\n    this.liste_questions.push(texte);\n    this.liste_corrections.push(texte_corr);\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this)\n  }\n // this.besoin_formulaire_numerique = [\"Table \"]\n  this.besoin_formulaire_numerique = [\"Facteur maximum \"];\n  this.besoin_formulaire2_numerique = ['Niveau de rapidité', 6, '1 : Guépard\\n 2 : Antilope\\n 3 : Lièvre\\n 4 : Tortue\\n 5 : Escargot\\n 6 : Au hasard']\n} // Fin de l'exercice.\n\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6N41-1.js?");

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