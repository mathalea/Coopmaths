/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_4C30-1_js"],{

/***/ "./src/js/exercices/4e/4C30-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/4e/4C30-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Puissances_encadrement)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Encadrer avec des puissances de 10'\n\n/**\n * Encadrer par des puissances de 10\n * 4C30-1\n * @author Sébastien Lozano\n */\nfunction Puissances_encadrement() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.sup = 4;\n  this.nb_questions = 6;\n  this.titre = titre;\n\n  this.consigne = `Encadrer les nombres suivants par deux puissances de 10 d'exposants consécutifs.`;\n\n  this.nb_cols = 1;\n  this.nb_cols_corr = 1;\n  //this.nb_questions_modifiable = false;\n\n  let type_de_questions_disponibles;\n\n  this.nouvelle_version = function () {\n    this.sup = Number(this.sup); // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !\n\n    switch (this.sup) {\n      case 1: // nombre enier positif\n        type_de_questions_disponibles = [1, 2, 3, 4, 5, 6];\n        //this.nb_questions = type_de_questions_disponibles.length;\n        //this.nb_questions = 3;\n        break;\n      case 2: // nombre décimal positif\n        type_de_questions_disponibles = [7, 8, 9, 10];\n        //this.nb_questions = type_de_questions_disponibles.length;\n        //this.nb_questions = 3;\n        break;\n      case 3: // nombre décimal positif inférieur à 1\n        type_de_questions_disponibles = [11, 12, 13, 14];\n        //this.nb_questions = type_de_questions_disponibles.length;\n        //this.nb_questions = 3;\n        break;\n      case 4: // Mélange\n        type_de_questions_disponibles = [\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, 2, 3]),\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([4, 5, 6]),\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([7, 8]),\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([9, 10]),\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([11, 12]),\n          (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([13, 14]),\n        ];\n        //this.nb_questions = type_de_questions_disponibles.length;\n        break;\n    }\n\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(\n      type_de_questions_disponibles,\n      this.nb_questions\n    ); // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n    // let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus\n\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n\n    for (\n      let i = 0, texte, texte_corr, cpt = 0;\n      i < this.nb_questions && cpt < 50;\n\n    ) {\n      // nombre entier positif, entre 1 et 10, puis 10 et 100 puis ....100 000 et 1 000 000\n      let ent_pos = [];\n      for (let i = 0; i < 6; i++) {\n        ent_pos.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10 ** i + 1, 10 ** (i + 1))))}$`,\n          puissance_inf: `$10^{${i}}$`,\n          puissance_sup: `$10^{${i + 1}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** i))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** (i + 1)))}$`,\n        });\n      }\n\n      // nombre décimal positif 1 et 10 000 avec 1,2,3 puis 4 décimales\n      let dec_pos = [];\n      for (let i = 0; i < 4; i++) {\n        dec_pos.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10000, 100000) / 10 ** (4 - i)))}$`,\n          puissance_inf: `$10^{${i}}$`,\n          puissance_sup: `$10^{${i + 1}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** i))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** (i + 1)))}$`,\n        });\n      }\n      // nombre décimal positif inférieur à 1, entre 0,1 et 1 puis entre 0,01 et 0,1 puis 0,001 et 0,0001\n      let dec_pos_inf_un = [];\n      for (let i = 0; i < 4; i++) {\n        dec_pos_inf_un.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10 ** (4 - i - 1) + 1, 10 ** (4 - i)) / 10000))}$`,\n          puissance_inf: `$10^{${-(i + 1)}}$`,\n          puissance_sup: `$10^{${-i}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** -(i + 1)))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** -i))}$`,\n        });\n      }\n\n      switch (liste_type_de_questions[i]) {\n        case 1: // nombre enier positif\n          texte = `${ent_pos[0].val}`;\n          texte_corr = `${ent_pos[0].puissance_inf} $\\\\leqslant$ ${ent_pos[0].val} $\\\\leqslant$ ${ent_pos[0].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[0].puissance_inf} = ${ent_pos[0].puissance_inf_num} et ${ent_pos[0].puissance_sup} = ${ent_pos[0].puissance_sup_num}`;\n          break;\n        case 2: // nombre enier positif\n          texte = `${ent_pos[1].val}`;\n          texte_corr = `${ent_pos[1].puissance_inf} $\\\\leqslant$ ${ent_pos[1].val} $\\\\leqslant$ ${ent_pos[1].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[1].puissance_inf} = ${ent_pos[1].puissance_inf_num} et ${ent_pos[1].puissance_sup} = ${ent_pos[1].puissance_sup_num}`;\n          break;\n        case 3: // nombre enier positif\n          texte = `${ent_pos[2].val}`;\n          texte_corr = `${ent_pos[2].puissance_inf} $\\\\leqslant$ ${ent_pos[2].val} $\\\\leqslant$ ${ent_pos[2].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[2].puissance_inf} = ${ent_pos[2].puissance_inf_num} et ${ent_pos[2].puissance_sup} = ${ent_pos[2].puissance_sup_num}`;\n          break;\n        case 4: // nombre enier positif\n          texte = `${ent_pos[3].val}`;\n          texte_corr = `${ent_pos[3].puissance_inf} $\\\\leqslant$ ${ent_pos[3].val} $\\\\leqslant$ ${ent_pos[3].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[3].puissance_inf} = ${ent_pos[3].puissance_inf_num} et ${ent_pos[3].puissance_sup} = ${ent_pos[3].puissance_sup_num}`;\n          break;\n        case 5: // nombre enier positif\n          texte = `${ent_pos[4].val}`;\n          texte_corr = `${ent_pos[4].puissance_inf} $\\\\leqslant$ ${ent_pos[4].val} $\\\\leqslant$ ${ent_pos[4].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[4].puissance_inf} = ${ent_pos[4].puissance_inf_num} et ${ent_pos[4].puissance_sup} = ${ent_pos[4].puissance_sup_num}`;\n          break;\n        case 6: // nombre enier positif\n          texte = `${ent_pos[5].val}`;\n          texte_corr = `${ent_pos[5].puissance_inf} $\\\\leqslant$ ${ent_pos[5].val} $\\\\leqslant$ ${ent_pos[5].puissance_sup}`;\n          texte_corr += ` car ${ent_pos[5].puissance_inf} = ${ent_pos[5].puissance_inf_num} et ${ent_pos[5].puissance_sup} = ${ent_pos[5].puissance_sup_num}`;\n          break;\n        case 7: // nombre décimal positif\n          texte = `${dec_pos[0].val}`;\n          texte_corr = `${dec_pos[0].puissance_inf} $\\\\leqslant$ ${dec_pos[0].val} $\\\\leqslant$ ${dec_pos[0].puissance_sup}`;\n          texte_corr += ` car ${dec_pos[0].puissance_inf} = ${dec_pos[0].puissance_inf_num} et ${dec_pos[0].puissance_sup} = ${dec_pos[0].puissance_sup_num}`;\n          break;\n        case 8: // nombre décimal positif\n          texte = `${dec_pos[1].val}`;\n          texte_corr = `${dec_pos[1].puissance_inf} $\\\\leqslant$ ${dec_pos[1].val} $\\\\leqslant$ ${dec_pos[1].puissance_sup}`;\n          texte_corr += ` car ${dec_pos[1].puissance_inf} = ${dec_pos[1].puissance_inf_num} et ${dec_pos[1].puissance_sup} = ${dec_pos[1].puissance_sup_num}`;\n          break;\n        case 9: // nombre décimal positif\n          texte = `${dec_pos[2].val}`;\n          texte_corr = `${dec_pos[2].puissance_inf} $\\\\leqslant$ ${dec_pos[2].val} $\\\\leqslant$ ${dec_pos[2].puissance_sup}`;\n          texte_corr += ` car ${dec_pos[2].puissance_inf} = ${dec_pos[2].puissance_inf_num} et ${dec_pos[2].puissance_sup} = ${dec_pos[2].puissance_sup_num}`;\n          break;\n        case 10: // nombre décimal positif\n          texte = `${dec_pos[3].val}`;\n          texte_corr = `${dec_pos[3].puissance_inf} $\\\\leqslant$ ${dec_pos[3].val} $\\\\leqslant$ ${dec_pos[3].puissance_sup}`;\n          texte_corr += ` car ${dec_pos[3].puissance_inf} = ${dec_pos[3].puissance_inf_num} et ${dec_pos[3].puissance_sup} = ${dec_pos[3].puissance_sup_num}`;\n          break;\n        case 11: // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[0].val}`;\n          texte_corr = `${dec_pos_inf_un[0].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[0].val} $\\\\leqslant$ ${dec_pos_inf_un[0].puissance_sup}`;\n          texte_corr += ` car ${dec_pos_inf_un[0].puissance_inf} = ${dec_pos_inf_un[0].puissance_inf_num} et ${dec_pos_inf_un[0].puissance_sup} = ${dec_pos_inf_un[0].puissance_sup_num}`;\n          break;\n        case 12: // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[1].val}`;\n          texte_corr = `${dec_pos_inf_un[1].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[1].val} $\\\\leqslant$ ${dec_pos_inf_un[1].puissance_sup}`;\n          texte_corr += ` car ${dec_pos_inf_un[1].puissance_inf} = ${dec_pos_inf_un[1].puissance_inf_num} et ${dec_pos_inf_un[1].puissance_sup} = ${dec_pos_inf_un[1].puissance_sup_num}`;\n          break;\n        case 13: // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[2].val}`;\n          texte_corr = `${dec_pos_inf_un[2].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[2].val} $\\\\leqslant$ ${dec_pos_inf_un[2].puissance_sup}`;\n          texte_corr += ` car ${dec_pos_inf_un[2].puissance_inf} = ${dec_pos_inf_un[2].puissance_inf_num} et ${dec_pos_inf_un[2].puissance_sup} = ${dec_pos_inf_un[2].puissance_sup_num}`;\n          break;\n        case 14: // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[3].val}`;\n          texte_corr = `${dec_pos_inf_un[3].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[3].val} $\\\\leqslant$ ${dec_pos_inf_un[3].puissance_sup}`;\n          texte_corr += ` car ${dec_pos_inf_un[3].puissance_inf} = ${dec_pos_inf_un[3].puissance_inf_num} et ${dec_pos_inf_un[3].puissance_sup} = ${dec_pos_inf_un[3].puissance_sup_num}`;\n          break;\n      }\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en créé une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = [\n    \"Niveau de difficulté\",\n    4,\n    \"1 : nombre entier positif\\n2 : nombre décimal positif\\n3 : nombre entier positif inférieur à un\\n4 : Mélange\",\n  ];\n}\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/4e/4C30-1.js?");

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