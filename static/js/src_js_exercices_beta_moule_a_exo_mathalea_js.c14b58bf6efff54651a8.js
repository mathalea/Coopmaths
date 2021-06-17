/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_moule_a_exo_mathalea_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/exercices/beta/moule_a_exo_mathalea.js":
/*!*******************************************************!*\
  !*** ./src/js/exercices/beta/moule_a_exo_mathalea.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Exercice_zero_mathalea)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Exo zéro Mathalea'\n\nfunction Exercice_zero_mathalea() {\n    \"use strict\"\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\n    this.titre = titre;\n    this.nb_questions = 4; // Ici le nombre de questions\n    this.nb_questions_modifiable=true // Active le formulaire nombre de questions\n    this.nb_cols = 1; // Le nombre de colonnes dans l'énoncé LaTeX\n    this.nb_cols_corr = 1;// Le nombre de colonne pour la correction LaTeX\n    this.pas_de_version_LaTeX=false // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX\n    this.pas_de_version_HMTL=false // mettre à true si on ne veut pas de l'exercice en ligne\n  // Voir la Classe Exercice pour une liste exhaustive des propriétés disponibles.\n  \n  //  this.sup = false; // A décommenter : valeur par défaut d'un premier paramètre\n  //  this.sup2 = false; // A décommenter : valeur par défaut d'un deuxième paramètre\n  //  this.sup3 = false; // A décommenter : valeur par défaut d'un troisième paramètre\n  \n  // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice\n    this.nouvelle_version = function () {\n    // la variable numero_de_l_exercice peut être récupérée pour permettre de différentier deux copies d'un même exo\n    // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page\n  \n    this.liste_questions = [] // tableau contenant la liste des questions \n    this.liste_corrections = []\n    let type_de_questions_disponibles=[1] // tableau à compléter par valeurs possibles des types de questions\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions)\n  \n      for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\n        texte = `` // Nous utilisons souvent cette variable pour construire le texte de la question.\n        texte_corr = `` // Idem pour le texte de la correction.\n\n        switch (liste_type_de_questions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...\n          case 1:\n               \n          break;\n  \n          case 2:\n            // Idem Cas1 mais avec d'autres texte, texte_corr...\n          break\n  \n          case 3:\n            \n          break\n            \n          case 4:\n          \n          break  \n            \n        }\n\n        if (this.liste_questions.indexOf(texte) == -1) {\n          // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n          this.liste_questions.push(texte);\n          this.liste_corrections.push(texte_corr);\n          i++;\n        }\n        cpt++;\n      }\n      (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this); // On envoie l'exercice à la fonction de mise en page\n    };\n  // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants\n  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.\n  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.\n  \n  //\tthis.besoin_formulaire_numerique = ['Type de questions', 3, `1 : Perpendiculaires\\n 2 : Parallèles\\n 3 : Mélange`]\n  //  this.besoin_formulaire2_numerique = [\"Type de cahier\",3,`1 : Cahier à petits careaux\\n 2 : Cahier à gros carreaux (Seyes)\\n 3 : Feuille blanche`];\n  // this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]\n  \n  } // Fin de l'exercice.\n  \n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/moule_a_exo_mathalea.js?");

/***/ })

}]);