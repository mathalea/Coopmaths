/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6N11-4_js"],{

/***/ "./src/js/exercices/6e/6N11-4.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6N11-4.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Ranger_ordre_croissant_decroissant)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Ranger une liste de nombres entiers dans l’ordre croissant ou décroissant'\n\n/** \n* * Ranger une liste de nombres dans l'odre croissant ou décroissant\n* * 6N11-4\n* @author Sébastien Lozano\n*/\n\nfunction Ranger_ordre_croissant_decroissant() {\n  'use strict';\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.beta = false;\n  this.sup = 1;\n  if (this.beta) {\n    this.nb_questions = 2;\n  } else {\n    this.nb_questions = 2;\n  };\n\n  this.titre = titre;\n  //this.consigne = `Classer les nombres suivants dans l'ordre indiqué.`;\t\n\n  this.nb_cols = 1;\n  this.nb_cols_corr = 1;\n  //this.nb_questions_modifiable = false;\n  sortie_html ? this.spacing = 3 : this.spacing = 2;\n  sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;\n\n  let type_de_questions_disponibles;\n\n  this.nouvelle_version = function () {\n    if (this.beta) {\n      type_de_questions_disponibles = [0, 1];\n    } else {\n      //type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);      \t\t\t\n      type_de_questions_disponibles = [0, 1];\n    };\n\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n\n    //let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes_sans_changer_ordre)(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus\t\t\n\n    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      // les chiffres\n      let c1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n      let c2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, [c1]);\n      let c3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, [c1, c2]);\n      let c4 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, [c1, c2, c3]);\n      let c5 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, [c1, c2, c3, c4]);\n\n      // pour les situations, autant de situations que de cas dans le switch !\n      let situations = [\n        {//case 0 -->\n          ordre: 'croissant',\n          symbole: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)('<')}$`,\n          n1: Number(c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString()),\n          n2: Number(c1.toString() + c3.toString() + c2.toString() + c4.toString() + c5.toString()),\n          n3: Number(c1.toString() + c2.toString() + c5.toString() + c4.toString() + c3.toString()),\n          n4: Number(c1.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n          n5: Number('1'.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n          n6: Number(c1.toString() + c2.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n        },\n        {//case 1 -->\n          ordre: 'décroissant',\n          symbole: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)('>')}$`,\n          n1: Number(c1.toString() + c2.toString() + c3.toString() + c4.toString() + c5.toString()),\n          n2: Number(c1.toString() + c3.toString() + c2.toString() + c4.toString() + c5.toString()),\n          n3: Number(c1.toString() + c2.toString() + c5.toString() + c4.toString() + c3.toString()),\n          n4: Number(c1.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n          n5: Number('1'.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n          n6: Number(c1.toString() + c2.toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString() + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 9).toString()),\n        },\n      ];\n\n      // une fonction pour gérer l'ordre\n      function myOrdre(ordre, tab) {\n        tab.sort((a, b) => a - b);\n        switch (ordre) {\n          case 'croissant':\n            return tab;\n          case 'décroissant':\n            return tab.reverse();\n        };\n      };\n\n      let enonces = [];\n      let nombres = [];\n      let nombres_ranges = [];\n      for (let k = 0; k < situations.length; k++) {\n        nombres = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)([situations[k].n1, situations[k].n2, situations[k].n3, situations[k].n4, situations[k].n5, situations[k].n6]);\n        nombres_ranges = [];\n        nombres.forEach(element => {\n          nombres_ranges.push(element);\n        });\n        myOrdre(situations[k].ordre, nombres_ranges);\n        enonces.push({\n          enonce: `Classer les nombres suivants dans l'ordre ${situations[k].ordre} :<br>\n        $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[0])}$   ;   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[1])}$   ;   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[2])}$   ;   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[3])}$   ;   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[4])}$   ;   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres[5])}$          \n        `,\n          question: ``,\n          correction: `Les nombres rangés dans l'ordre ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(situations[k].ordre)} :<br>\n        $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[0])}$   ${situations[k].symbole}   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[1])}$   ${situations[k].symbole}   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[2])}$   ${situations[k].symbole}   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[3])}$   ${situations[k].symbole}   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[4])}$   ${situations[k].symbole}   $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(nombres_ranges[5])}$\n        `\n        });\n      };\n\n      // autant de case que d'elements dans le tableau des situations\n      switch (liste_type_de_questions[i]) {\n        case 0:\n          texte = `${enonces[0].enonce}`;\n          if (this.beta) {\n            texte += `<br>`;\n            texte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;\n            texte += `             `\n            texte_corr = ``;\n          } else {\n            texte_corr = `${enonces[0].correction}`;\n          };\n          break;\n        case 1:\n          texte = `${enonces[1].enonce}`;\n          if (this.beta) {\n            texte += `<br>`;\n            texte += `<br> =====CORRECTION======<br>${enonces[1].correction}`;\n            texte_corr = ``;\n          } else {\n            texte_corr = `${enonces[1].correction}`;\n          };\n          break;\n      };\n\n      if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  }\n  //this.besoin_formulaire_numerique = ['Niveau de difficulté',2,\"1 : Entiers naturels\\n2 : Entiers relatifs\"];\n  //this.besoin_formulaire2_case_a_cocher = [\"Avec des équations du second degré\"];\t\n};\n\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6N11-4.js?");

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