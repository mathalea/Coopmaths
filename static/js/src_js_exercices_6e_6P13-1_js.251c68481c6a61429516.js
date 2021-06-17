/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6P13-1_js"],{

/***/ "./src/js/exercices/6e/6P13-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/6e/6P13-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ NomQuelconqueDeLaFonctionQuiCreeExercice)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Facture'\n\n/**\n * Recherche de la vitesse, du temps ou de la distance en utilisant un tableau de proportionnalité et le produit en croix\n * @Auteur Rémi Angot\n * Référence 6P13-1\n*/\nfunction NomQuelconqueDeLaFonctionQuiCreeExercice() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.titre = titre;\n  this.consigne = \"Compléter le tableau suivant : \";\n  this.nb_questions = 1;\n  this.nb_questions_modifiable = false;\n  this.nb_cols = 1; // Uniquement pour la sortie LaTeX\n  this.nb_cols_corr = 1; // Uniquement pour la sortie LaTeX\n  this.sup = 2; // Niveau de difficulté à ne définir que si on peut le modifier avec un formulaire en paramètre\n  this.tailleDiaporama = 20; // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte\n  this.video = \"\" // Id YouTube ou url\n\n  this.nouvelle_version = function () {\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n\n    for (let i = 0, article1, q1, p1, article2, q2, p2, article3, q3, p3, r, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      let liste_articles = [[\"Feuilletés au fromage\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(50, 80) / 10)],\n      [\"Feuilletés à la viande\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(50, 80) / 10)],\n      [\"Pizzas\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(80, 140) / 10)],\n      [\"Glaces à la vanille\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(20, 60) / 10)],\n      [\"Glaces au chocolat\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(20, 60) / 10)],\n      [\"Filets de saumon\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(150, 200) / 10)],\n      [\"Aiguillettes de poulet\", (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(400, 700) / 10)],\n      ]\n      article1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(liste_articles)\n      article2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(liste_articles, [article1])\n      article3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(liste_articles, [article1, article2])\n      p1 = article1[1]\n      p2 = article2[1]\n      p3 = article1[1]\n      q1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8)\n      q2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8, [q1])\n      q3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 8, [q1, q2])\n      r = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(3,9)\n\n\n      if (this.sup == 1) {\n        if (sortie_html) {\n          texte = `$\\\\def\\\\arraystretch{2.5}\\\\begin{array}{|c|c|c|c|}\\n`;\n        } else {\n          texte = `$\\\\begin{array}{|c|c|c|c|}\\n`;\n        }\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Designations} & \\\\text{Quantités} & \\\\text{Prix unitaires H.T.} & \\\\text{Montants H.T.} \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article1[0]}} & ${q1} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p1)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article2[0]}} & ${q2} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p2)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article3[0]}} & ${q3} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p3)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Prix total (H.T.)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{TVA (20~\\\\%)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Prix total (T.T.C.)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n `\n        texte += `\\\\hline\\n`\n        texte += `\\\\end{array}$`\n\n        if (sortie_html) {\n          texte_corr = `$\\\\def\\\\arraystretch{2.5}\\\\begin{array}{|c|c|c|c|}\\n`;\n        } else {\n          texte_corr = `$\\\\begin{array}{|c|c|c|c|}\\n`;\n        }\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Designations} & \\\\text{Quantités} & \\\\text{Prix unitaires H.T.} & \\\\text{Montants H.T.} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article1[0]}} & ${q1} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p1 * q1))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article2[0]}} & ${q2} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p2 * q2))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article3[0]}} & ${q3} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p3 * q3))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Prix total (H.T.)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p1 * q1 + p2 * q2 + p3 * q3))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{TVA (20~\\\\%)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * 0.2))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Prix total (T.T.C.)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * 1.2))} \\\\\\\\ \\n `\n        texte_corr += `\\\\hline\\n`\n\n        texte_corr += `\\\\end{array}$`\n      }\n\n      if (this.sup == 2) {\n        if (sortie_html) {\n          texte = `$\\\\def\\\\arraystretch{2.5}\\\\begin{array}{|c|c|c|c|}\\n`;\n        } else {\n          texte = `$\\\\begin{array}{|c|c|c|c|}\\n`;\n        }\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Designations} & \\\\text{Quantités} & \\\\text{Prix unitaires H.T.} & \\\\text{Montants H.T.} \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article1[0]}} & ${q1} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p1)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article2[0]}} & ${q2} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p2)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{${article3[0]}} & ${q3} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p3)} & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Prix total brut (H.T.)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Réduction (${r}~\\\\%)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Prix total net (H.T.)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{TVA (20~\\\\%)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n`\n        texte += `\\\\hline\\n`\n        texte += `\\\\text{Prix total (T.T.C.)} & & & \\\\ldots\\\\ldots \\\\\\\\ \\n `\n        texte += `\\\\hline\\n`\n        texte += `\\\\end{array}$`\n\n        if (sortie_html) {\n          texte_corr = `$\\\\def\\\\arraystretch{2.5}\\\\begin{array}{|c|c|c|c|}\\n`;\n        } else {\n          texte_corr = `$\\\\begin{array}{|c|c|c|c|}\\n`;\n        }\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Designations} & \\\\text{Quantités} & \\\\text{Prix unitaires H.T.} & \\\\text{Montants H.T.} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article1[0]}} & ${q1} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p1)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p1 * q1))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article2[0]}} & ${q2} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p2)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p2 * q2))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{${article3[0]}} & ${q3} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(p3)} & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p3 * q3))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Prix total brut (H.T.)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(p1 * q1 + p2 * q2 + p3 * q3))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Réduction (${r}~\\\\%)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * r / 100))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Prix total net (H.T.)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * (1 - r / 100)))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{TVA (20~\\\\%)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * (1 - r / 100) * 0.2))} \\\\\\\\ \\n`\n        texte_corr += `\\\\hline\\n`\n        texte_corr += `\\\\text{Prix total (T.T.C.)} & & & ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((p1 * q1 + p2 * q2 + p3 * q3) * (1 - r / 100) * 1.2))} \\\\\\\\ \\n `\n        texte_corr += `\\\\hline\\n`\n\n        texte_corr += `\\\\end{array}$`\n      }\n\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en crée une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2,'1 : Sans réduction\\n2 : Avec réduction'];\n}\n\n// python3 modules/exercices_to_json.py pour faire apparaitre l'exercice dans le menu\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6P13-1.js?");

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