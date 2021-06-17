/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_beta2F20_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/exercices/beta/beta2F20.js":
/*!*******************************************!*\
  !*** ./src/js/exercices/beta/beta2F20.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Factoriser_Identites_remarquables2)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Reconnaître une fonction affine.'\n\n/**\n * Reconnaître une fonction affine\n* @auteur Stéphane Guyon\n* 2F20\n*/\nfunction Factoriser_Identites_remarquables2() {\n    'use strict';\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n    this.titre = titre;\n    this.video = \"\";\n    this.consigne = \"Déterminer,en expliquant, si les fonctions suivantes sont, ou non, des fonctions affines. :\";\n    this.nb_cols = 1;\n    this.nb_cols_corr = 1;\n    this.spacing = 1;\n    this.spacing_corr = 1;\n    this.nb_questions = 5;\n    this.spacing_corr = 3\n\n    this.nouvelle_version = function () {\n        this.liste_questions = []; // Liste de questions\n        this.liste_corrections = []; // Liste de questions corrigées\n        let type_de_questions_disponibles = [];\n       \n        type_de_questions_disponibles = [1,2,3,4,5,6,7,8]; \n        \n        \n        let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions);\n        for (let i = 0, texte, texte_corr, cpt = 0, a, b, c, d, e, f,  k, fraction = [], ns, ds, type_de_questions; i < this.nb_questions && cpt < 50;) \n        {\n            type_de_questions = liste_type_de_questions[i];\n            k = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-1, 1]); \n\t\t\ta = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n            a = a * k;\n            b = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n            c = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2,3,5,7,10,11,13,15,17]); \n            b = b * k;\n            d = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([2,3,5,7,10,11,13,15,17]); \n            e = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 9);\n           \n            \n            \n           \n                      switch (type_de_questions) {\n                case 1:\n                        texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a,b)}$`; //f(x)=ax + b\n                        texte_corr = ` $f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a,b)}$<br>`\n                        texte_corr += `On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>`\n                        texte_corr +=`Ici, on a : $a=${a}$ et $b=${b}$<br>`\n                        texte_corr +=`$f$ est donc bien une fonction affine.<br>`                                 \n                 break;\n                 case 2:\n                        if (a=1) {\n                            texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${b}+x$<br>`; //f(x)=b+x\n                            texte_corr = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${b}+x$<br>`; \n                            texte_corr += ` On peut écrire $f$ sous cette forme : $f(x)=x ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}$<br>`;} \n                        if (a=-1) {\n                            texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${b}-x$<br>`; //f(x)=b-x}\n                            texte_corr = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${b}-x$<br>`; \n                            texte_corr += ` On peut écrire $f$ sous cette forme : $f(x)=-x ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)}$<br>`;} \n                        else{\n                            texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a)}  x$<br>`; //f(x)=b-x}\n                            texte_corr = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a)}  x$<br>`; //f(x)=b-x}\n                            texte_corr += ` On peut écrire $f$ sous cette forme : $f(x)=-x ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a,b)}$<br>`;} \n                        texte_corr += `On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>`\n                        texte_corr +=`Ici, on a : $a=${a}$ et $b=${b}$<br>`\n                        texte_corr +=`$f$ est donc bien une fonction affine.`                                 \n                 break;    \n                 case 3:\n                        texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${a}x^{2}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)} $`; //f(x)=ax²+bx+c\n                        texte_corr = ` $f(x)=${a}x^{2}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(b)} x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)} $<br>`\n                        texte_corr += `On observe que la fonction $f$ est du second degré, puisqu'il y a un terme en $x^{2}$<br>`\n                        texte_corr += `Elle s'écrit sous la forme $f(x)= a x^{2}+ bx+c$ et non pas sous la forme $ax+b$.<br>`\n                        texte_corr +=`$f$ n'est donc pas une fonction affine.<br>`                                 \n                 break;\n                 case 4:\n                        texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=\\\\sqrt{${c}}x + \\\\sqrt{${d}}$`; //f(x)=\\sqrt a x + \\sqrt b\n                        texte_corr = ` $f(x)=\\\\sqrt{${c}}x + \\\\sqrt{${d}}$<br>`\n                        texte_corr += `On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>`\n                        texte_corr +=`Ici, on a : $a=\\\\sqrt{${c}}$ et $b=\\\\sqrt{${d}}$<br>`\n                        texte_corr +=`$f$ est donc bien une fonction affine.<br>`                                 \n                 break;    \n                 case 5:\n                        texte = ` Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${a}x^{2}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)} $`; //f(x)=ax²+c\n                        texte_corr = ` $f(x)=${a}x^{2}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)} $<br>`\n                        texte_corr += `On observe que la fonction $f$ est du second degré, puisqu'il y a un terme en $x^{2}$<br>`\n                        texte_corr += `Elle s'écrit sous la forme $f(x)= a x^{2}+b$ avec $a$ et $b$ des nombres réels, et non pas sous la forme $ax+b$.<br>`\n                        texte_corr +=`$f$ n'est donc pas une fonction affine.<br>`  \n                break;   \n                case 6:\n                        texte = `Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=\\\\dfrac{1}{${a}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} }$`; //f(x)=1/(ax+b)\n                        texte_corr = ` $f(x)=\\\\dfrac{1}{${a}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b)} }$<br>`\n                        texte_corr += `On observe que la fonction $f$ est une fonction rationnelle, puisqu'il y une fraction avec des termes en $x$ au dénominateur.<br>`\n                        texte_corr += `Elle ne s'écrit  pas sous la forme $ax+b$.<br>`\n                        texte_corr +=`$f$ n'est donc pas une fonction affine.<br>`      \n                break;    \n                case 7:\n                        texte = `Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_signe)(1,a)}x+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_signe)(1,e)} $`; //f(x)=1/ax+1/b\n                        texte_corr = `$f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_signe)(1,a)}x+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction_signe)(1,e)}$<br>`\n                        texte_corr += `On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>`\n                        texte_corr +=`Ici, on a : $a=\\\\dfrac{1}{${a}}$ et $b=\\\\dfrac{1}{${e}}$<br>`\n                        texte_corr +=`$f$ est donc bien une fonction affine.<br>` \n                break;\n                case 8:\n                        texte = `Soit $f$ la fonction définie sur un intervalle $I$ de $\\\\mathbb R$, par $f(x)=${c}\\\\times (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a,b)}) $`; //f(x)=k(ax+b)\n                        texte_corr = `$f(x)=${c}\\\\times (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a,b)}) $<br>`\n                        texte_corr += `On peut développer l'expression de $f$ et on obtient alors :<br>`\n                        texte_corr += `$f(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.reduire_ax_plus_b)(a*c,b*c)} $<br>`\n                        texte_corr += `On observe que la fonction $f$ s'écrit bien sous la forme $f(x)= a x+ b$ avec $a$ et $b$ des nombres réels.<br>`\n                        texte_corr +=`Ici, on a : $a=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(a*c)}$ et $b=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(b*c)}$<br>`\n                        texte_corr +=`$f$ est donc bien une fonction affine.<br>` \n                break;   \n            }\n            if (this.liste_questions.indexOf(texte) == -1) {\n                // Si la question n'a jamais été posée, on en créé une autre\n                this.liste_questions.push(texte);\n                this.liste_corrections.push(texte_corr);\n                i++;\n            }\n            cpt++;\n        }\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n    };\n    \n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/beta2F20.js?");

/***/ })

}]);