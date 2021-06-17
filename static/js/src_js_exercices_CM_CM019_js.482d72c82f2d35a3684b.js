/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_CM_CM019_js"],{

/***/ "./src/js/exercices/CM/CM019.js":
/*!**************************************!*\
  !*** ./src/js/exercices/CM/CM019.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Le_compte_est_bonV3)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _Trouver_solution_mathador_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_Trouver_solution_mathador.js */ \"./src/js/exercices/CM/_Trouver_solution_mathador.js\");\n\n\n\nconst titre = 'Générateur de compte est bon'\n\n/**\n * Générateur de tirages pour un compte est bon avec en correction la solution mathador (4 opérations différentes).\n * @Auteur Jean-Claude Lhote\n * référence CM019\n */\n\nfunction Le_compte_est_bonV3() {\n  \"use strict\";\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne =\n    \"Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.\";\n  this.nb_questions = 5;\n  this.nb_cols = 2;\n  this.nb_cols_corr = 2;\n  this.sup = 30;\n  this.sup2 = 70;\n  let max_solution = 70;\n\n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n    let solution_mathador = [];\n    let tirage, solution, expression;\n    let min_solution = parseInt(this.sup);\n    max_solution = parseInt(this.sup2);\n    if (min_solution > max_solution) {\n      min_solution = max_solution;\n      this.sup = this.sup2;\n    }\n    for (\n      let i = 0, texte, texte_corr, cpt = 0;\n      i < this.nb_questions && cpt < 50;\n\n    ) {\n      solution_mathador = (0,_Trouver_solution_mathador_js__WEBPACK_IMPORTED_MODULE_2__.default)(min_solution, max_solution);\n      tirage = solution_mathador[0];\n      solution = solution_mathador[1];\n      expression = solution_mathador[3];\n\n      texte = `Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`;\n      texte_corr = `Pour le tirage $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ et pour la cible $${solution}$, la solution est : $${expression}=${solution}$ `;\n      texte_corr += `ou $${solution_mathador[4]}$.<br>`;\n      texte_corr += `En effet : <br>`;\n      for (let i = 0; i < 4; i++) {\n        texte_corr += `$${solution_mathador[2][i]}$<br>`;\n      }\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = [\"Limite inférieure\", max_solution];\n  this.besoin_formulaire2_numerique = [\"Limite supérieure\", 100];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/CM/CM019.js?");

/***/ }),

/***/ "./src/js/exercices/CM/_Trouver_solution_mathador.js":
/*!***********************************************************!*\
  !*** ./src/js/exercices/CM/_Trouver_solution_mathador.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Trouver_solution_mathador)\n/* harmony export */ });\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n/**\n * @Auteur Jean-Claude Lhote\n * @param {number} min Valeur minimum pour la solution\n * @param {number} max Valeur maximum pour la solution\n * Cette fonction produit aléatoirement un tirage de 5 nombres, une solution, un tableau contenant les calculs successifs, une chaine contenant l'expression mathador correspondante\n * @returns {array} [tirage=[a,b,c,d,e],solution (compris entre min et max),operations_successives=[string1,string2,string3,string4,string5],expression]\n * les string1 à 5 ainsi que l'expresion sont ) mettre en mode maths.\n * sert dans les exercices CM019,\n */\nfunction Trouver_solution_mathador(\n  min,\n  max,\n  A = 1,\n  B = 4,\n  C = 8,\n  D = 3,\n  E = 5\n) {\n  let eureka,\n    a,\n    b,\n    c,\n    d,\n    e,\n    tirage,\n    nombres_restants,\n    operations_restantes,\n    expression_en_cours_f,\n    expression_en_cours_d,\n    op,\n    part1_f,\n    part2_f,\n    part1_d,\n    part2_d,\n    operations_successives = [],\n    solution;\n  let liste_choix = [\n    1,\n    2,\n    2,\n    3,\n    3,\n    4,\n    4,\n    4,\n    4,\n    5,\n    6,\n    6,\n    6,\n    6,\n    7,\n    7,\n    8,\n    8,\n    8,\n    8,\n    9,\n    9,\n    9,\n    9,\n    10,\n    11,\n    12,\n    13,\n    14,\n    15,\n    16,\n    17,\n    18,\n    19,\n    20,\n  ];\n  eureka = false;\n  let nb_determines = arguments.length - 2;\n  while (eureka == false) {\n    tirage = [];\n\n    if (nb_determines < 1)\n      a = parseInt((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.choice)(liste_choix));\n    else\n      a = A;\n    if (nb_determines < 2)\n      b = parseInt((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.choice)(liste_choix, [13, 14, 15, 16, 17, 18, 19, 20, a]));\n    else\n      b = B;\n    if (nb_determines < 3)\n      c = parseInt(\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.choice)(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, a, b])\n      );\n    else\n      c = C;\n    if (nb_determines < 4)\n      d = parseInt(\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.choice)(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20, b, c])\n      );\n    else\n      d = D;\n    if (nb_determines < 5)\n      e = parseInt((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.choice)(liste_choix, [12, 13, 14, 15, 16, 17, 18, 19, 20]));\n    else\n      e = E;\n    tirage.push(a, b, c, d, e);\n    nombres_restants = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(tirage);\n    operations_restantes = [\"\\\\times\", \"+\", \"-\", \"\\\\div\"];\n    operations_restantes = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_0__.shuffle)(operations_restantes);\n    expression_en_cours_f = [\n      `${nombres_restants[0]}`,\n      `${nombres_restants[1]}`,\n      `${nombres_restants[2]}`,\n      `${nombres_restants[3]}`,\n      `${nombres_restants[4]}`,\n    ];\n    expression_en_cours_d = [\n      `${nombres_restants[0]}`,\n      `${nombres_restants[1]}`,\n      `${nombres_restants[2]}`,\n      `${nombres_restants[3]}`,\n      `${nombres_restants[4]}`,\n    ];\n\n    while (nombres_restants.length > 1) {\n      b = nombres_restants.pop();\n      a = nombres_restants.pop();\n      part2_f = expression_en_cours_f.pop();\n      part1_f = expression_en_cours_f.pop();\n      part2_d = expression_en_cours_d.pop();\n      part1_d = expression_en_cours_d.pop();\n\n      op = operations_restantes.pop();\n      if (op == \"\\\\times\") {\n        c = a * b;\n        expression_en_cours_f.push(`${part1_f}${op}${part2_f}`);\n        expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);\n        nombres_restants.push(c);\n      } else if (op == \"\\\\div\") {\n        if (a % b == 0) {\n          c = a / b;\n          if (part1_f[0] == \"\\\\\") {\n            part1_f = part1_f.substring(6, part1_f.length);\n            part1_f = part1_f.substring(0, part1_f.length - 7);\n          }\n          if (part2_f[0] == \"\\\\\") {\n            part2_f = part2_f.substring(6, part2_f.length);\n            part2_f = part2_f.substring(0, part2_f.length - 7);\n          }\n          expression_en_cours_f.push(`\\\\dfrac{${part1_f}}{${part2_f}}`);\n          expression_en_cours_d.push(`${part1_d}${op}${part2_d}`);\n          nombres_restants.push(c);\n        } else\n          break;\n      } else if (op == \"-\") {\n        if (a > b) {\n          c = a - b;\n          expression_en_cours_f.push(\n            `\\\\left(${part1_f}${op}${part2_f}\\\\right)`\n          );\n          expression_en_cours_d.push(\n            `\\\\left(${part1_d}${op}${part2_d}\\\\right)`\n          );\n          nombres_restants.push(c);\n        } else\n          break;\n      } else if (op == \"+\") {\n        c = a + b;\n        if (part2_f.substring(0, 2) == \"\\\\l\") {\n          part2_f = part2_f.substring(6, part2_f.length);\n          part2_f = part2_f.substring(0, part2_f.length - 7);\n        }\n        expression_en_cours_f.push(`\\\\left(${part1_f}${op}${part2_f}\\\\right)`);\n        if (part2_d.substring(0, 2) == \"\\\\l\") {\n          part2_d = part2_d.substring(6, part2_d.length);\n          part2_d = part2_d.substring(0, part2_d.length - 7);\n        }\n        expression_en_cours_d.push(`\\\\left(${part1_d}${op}${part2_d}\\\\right)`);\n        nombres_restants.push(c);\n      }\n      operations_successives.push(`${a}` + op + `${b}=${c}`);\n    }\n\n    if (nombres_restants.length == 1 && operations_restantes.length == 0) {\n      solution = nombres_restants[0];\n      if (solution >= min && solution <= max) {\n        eureka = true;\n        if (expression_en_cours_f[0][0] == \"\\\\\" &&\n          expression_en_cours_f[0][1] == `l`) {\n          expression_en_cours_f[0] = expression_en_cours_f[0].substring(\n            6,\n            expression_en_cours_f[0].length\n          );\n          expression_en_cours_f[0] = expression_en_cours_f[0].substring(\n            0,\n            expression_en_cours_f[0].length - 7\n          );\n        }\n        if (expression_en_cours_d[0][0] == \"\\\\\" &&\n          expression_en_cours_d[0][1] == `l`) {\n          expression_en_cours_d[0] = expression_en_cours_d[0].substring(\n            6,\n            expression_en_cours_d[0].length\n          );\n          expression_en_cours_d[0] = expression_en_cours_d[0].substring(\n            0,\n            expression_en_cours_d[0].length - 7\n          );\n        }\n        return [\n          tirage,\n          solution,\n          operations_successives,\n          expression_en_cours_f,\n          expression_en_cours_d,\n        ];\n      } else\n        operations_successives = [];\n    } else\n      operations_successives = [];\n  }\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/CM/_Trouver_solution_mathador.js?");

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