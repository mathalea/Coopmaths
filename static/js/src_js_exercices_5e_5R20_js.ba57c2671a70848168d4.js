/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5R20_js"],{

/***/ "./src/js/exercices/5e/5R20.js":
/*!*************************************!*\
  !*** ./src/js/exercices/5e/5R20.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"amcReady\": () => (/* binding */ amcReady),\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Exercice_additions_relatifs)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst amcReady = true\n\nconst titre = 'Addition de deux entiers relatifs'\n\n/**\n* Additionner deux relatifs inférieurs à la valeur maximale en paramètre qui est par défaut à 20.\n*\n* Paramètre supplémentaire ; utilisation des écritures simplifiées\n* @Auteur Rémi Angot\n* 5R20\n*/\nfunction Exercice_additions_relatifs(max = 20) {\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.sup = max;\n\tthis.sup2 = false; // écriture simplifiée\n\tthis.titre = titre;\n\tthis.consigne = 'Calculer';\n\tthis.spacing = 2;\n\tthis.QCM_disponible=true\n\tthis.ModeQCM=false\n\n\tthis.nouvelle_version = function () {\n\t\tthis.QCM=['5R20',[],\"tables et multiples de 10,100 et 1000\",1]\n\t\tlet espace =``;\n\t\tif (sortie_html) {\n\t\t  espace = `&emsp;`;\n\t\t} else {\n\t\t  espace = `\\\\qquad`;\n\t\t}\n\t\tlet tabrep,tabicone\n\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tfor (let i = 0, a, b, k, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles\n\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup);\n\t\t\tb = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, this.sup);\n\t\t\tk = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([[-1, -1], [-1, 1], [1, -1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs\n\t\t\ta = a * k[0];\n\t\t\tb = b * k[1];\n\t\t\tif (this.sup2) {\n\t\t\t\ttexte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} = \\\\dotfill $`;\n\t\t\t\ttexte_corr = `$ ${a}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} = ${a + b} $`;\n\t\t\t} else {\n\t\t\t\ttexte = '$ ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(a) + ' + ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(b) + ' = \\\\dotfill $';\n\t\t\t\ttexte_corr = '$ ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(a) + ' + ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(b) + ' = ' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatifc)(a + b) + ' $';\n\t\t\t}\n\t\t\ttabrep=[`$${a+b}$`,`$${a-b}$`,`$${-a+b}$`,`$${-a-b}$`]\n\t\t\ttabicone=[1,0,0,0]\n\t\t\tif (this.ModeQCM&&!mathalea.sortieAMC) {\n\t\t\t\ttexte_corr=''\n\t\t\t\ttexte+=`<br>  Réponses possibles : ${espace}  `\n\t\t\t\t;(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle2tableaux)(tabrep, tabicone);\n\t\t\t\tfor (let i=0; i<tabrep.length; i++) {\n\t\t\t\t  texte += `$\\\\square\\\\;$ ${tabrep[i]}` + espace ;\n\t\t\t\t if (tabicone[i]==1) {\n\t\t\t\t   texte_corr += `$\\\\blacksquare\\\\;$ ${tabrep[i]}` + espace ;\n\t\t\t\t } else {\n\t\t\t\t   texte_corr += `$\\\\square\\\\;$ ${tabrep[i]}` + espace ;\n\t\t\t\t }\n\t\t\t   }\n\t\t\t  }\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\tthis.QCM[1].push([`${texte}\\n`,\n\t\t\t\ttabrep,\n\t\t\t\ttabicone])\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t};\n\tthis.besoin_formulaire_numerique = ['Valeur maximale', 99999];\n\tthis.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5R20.js?");

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