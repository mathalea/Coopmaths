/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_4C10-0_js"],{

/***/ "./src/js/exercices/4e/4C10-0.js":
/*!***************************************!*\
  !*** ./src/js/exercices/4e/4C10-0.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Signe_produit_quotient_relatifs)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* eslint-disable camelcase */\n\n\n\nconst titre = 'Signe d’un produit ou d’un quotient de nombres relatifs'\n\n/**\n * Signe d'un produit ou d'on quotient de relatifs\n * Plusieurs niveaux 2, 3 ou 4 factieurs, un quotient de 2 nombres, 1  nombre sur un produit de deux nombres, un prooduit de 2 nombres sur un nombre, un quotient de produit de 2 nombres\n * 4C10-0 exercice parent de 4C10-1 et 4C10-2\n * 4C10-0 contient tous les cas\n * Dans ces exercices je me servais de this.beta pour faire passer l'exo de beta.html à mathalea.html\n * this.beta pouvait prendre la valeur 'beta' ou '', tous les autres this.beta sont devenus des this.debug\n\n * @author Sébastien Lozano\n */\nfunction Signe_produit_quotient_relatifs () {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this) // Héritage de la classe Exercice()\n  this.titre = titre\n  this.consigne = 'Donner le signe des expressions numériques.'\n  this.nb_cols = 1\n  this.nb_cols_corr = 1\n  this.nb_questions_modifiable = false\n  this.sup = 1\n\n  let type_de_questions_disponibles\n\n  this.nouvelle_version = function () {\n    this.sup = Number(this.sup) // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !\n    if (this.exo === this.beta + '4C10-1') {\n      // signe d'un produit\n      switch (this.sup) {\n        case 1: // 2 facteurs\n          type_de_questions_disponibles = [1, 1, 1]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 2: // 3 facteurs\n          type_de_questions_disponibles = [2, 2, 2]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 3: // 4 facteurs\n          type_de_questions_disponibles = [3, 3, 3]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 4: // Mélange\n          type_de_questions_disponibles = [1, 2, 3]\n          this.nb_questions = type_de_questions_disponibles.length\n          break\n      }\n    } else if (this.exo === this.beta + '4C10-2') {\n      // signe d'un quotient\n      switch (this.sup) {\n        case 1: // quotient de 2 nombres\n          type_de_questions_disponibles = [4, 4, 4]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 2: // quotient d'1 nombre sur un produit de 2 nombres\n          type_de_questions_disponibles = [5, 5, 5]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 3: // quotient d'1 produit de 2 nombres sur 1 nombre\n          type_de_questions_disponibles = [6, 6, 6]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 4: // quotient de 2 produits de 2 nombres\n          type_de_questions_disponibles = [7, 7, 7]\n          // this.nb_questions = type_de_questions_disponibles.length;\n          this.nb_questions = 3\n          break\n        case 5: // Mélange\n          type_de_questions_disponibles = [4, 5, 6, 7]\n          this.nb_questions = type_de_questions_disponibles.length\n          break\n      }\n    } else {\n      // signe d'un produit et/ou d'un quotient\n      type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7]\n      this.nb_questions = type_de_questions_disponibles.length\n    }\n\n    // let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n    const liste_type_de_questions = type_de_questions_disponibles // Tous les types de questions sont posées --> à remettre comme ci dessus\n\n    this.liste_questions = [] // Liste de questions\n    this.liste_corrections = [] // Liste de questions corrigées\n\n    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      // on ne choisit que des nombres compris entre 1 et 20\n      const nb_max = 20\n      // Le tableau des relatifs necessaires, il m'en faut max 4 !\n      const num = new _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.Relatif(\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-1, 1, [0]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nb_max),\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-1, 1, [0]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nb_max),\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-1, 1, [0]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nb_max),\n        (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-1, 1, [0]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nb_max)\n      )\n\n      switch (liste_type_de_questions[i]) {\n        case 1: // 2 facteurs\n          texte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]} et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}.`\n          texte_corr += `<br> ${num.setRegleSigneProduit(\n            num.relatifs[0],\n            num.relatifs[1]\n          )}`\n          texte_corr += `<br>Donc $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(num.relatifs[0], num.relatifs[1])\n          )}.`\n          break\n        case 2: // 3 facteurs\n          texte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[2])} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]}, $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}`\n          texte_corr += ` et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} $ est ${num.getSigneString()[2]}.`\n          texte_corr += `<br> ${num.setRegleSigneProduit(\n            num.relatifs[0],\n            num.relatifs[1],\n            num.relatifs[2]\n          )}`\n          texte_corr += `<br>Donc $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(\n              num.relatifs[0],\n              num.relatifs[1],\n              num.relatifs[2]\n            )\n          )}.`\n          break\n        case 3: // 4 facteurs\n          texte = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[3])} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]}, $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}, `\n          texte_corr += `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[2])} $ est ${num.getSigneString()[2]} et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[3])} $ est ${num.getSigneString()[3]}.`\n          texte_corr += `<br> ${num.setRegleSigneProduit(\n            num.relatifs[0],\n            num.relatifs[1],\n            num.relatifs[2],\n            num.relatifs[3]\n          )}`\n          texte_corr += `<br>Donc $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[3]\n          )} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(\n              num.relatifs[0],\n              num.relatifs[1],\n              num.relatifs[2],\n              num.relatifs[3]\n            )\n          )}.`\n          break\n        case 4: // quotient de 2 nombres\n          texte = `$ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])}} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]} et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}.`\n          texte_corr += `<br> ${num.setRegleSigneQuotient(\n            num.relatifs[0],\n            num.relatifs[1]\n          )}`\n          texte_corr += `<br>Donc $ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )}} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(num.relatifs[0], num.relatifs[1])\n          )}.`\n          break\n        case 5: // quotient d'1 nombre sur un produit de 2 nombres\n          texte = `$ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[2])}} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]}, $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}`\n          texte_corr += ` et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} $ est ${num.getSigneString()[2]}.`\n          texte_corr += `<br> ${num.setRegleSigneQuotient(\n            num.relatifs[0],\n            num.relatifs[1],\n            num.relatifs[2]\n          )}`\n          texte_corr += `<br>Donc $ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )}} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(\n              num.relatifs[0],\n              num.relatifs[1],\n              num.relatifs[2]\n            )\n          )}.`\n          break\n        case 6: // quotient d'1 produit de 2 nombres sur 1 nombre\n          texte = `$ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[2])}} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]}, $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}`\n          texte_corr += ` et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} $ est ${num.getSigneString()[2]}.`\n          texte_corr += `<br> ${num.setRegleSigneQuotient(\n            num.relatifs[0],\n            num.relatifs[1],\n            num.relatifs[2]\n          )}`\n          texte_corr += `<br>Donc $ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )}} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(\n              num.relatifs[0],\n              num.relatifs[1],\n              num.relatifs[2]\n            )\n          )}.`\n          break\n        case 7: // quotient de 2 produits de 2 nombres\n          texte = `$ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[3])}} $`\n          texte_corr = `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[0])} $ est ${num.getSigneString()[0]}, $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[1])} $ est ${num.getSigneString()[1]}, `\n          texte_corr += `$ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[2])} $ est ${num.getSigneString()[2]} et $ ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(num.relatifs[3])} $ est ${num.getSigneString()[3]}.`\n          texte_corr += `<br> ${num.setRegleSigneQuotient(\n            num.relatifs[0],\n            num.relatifs[1],\n            num.relatifs[2],\n            num.relatifs[3]\n          )}`\n          texte_corr += `<br>Donc $ \\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[0]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[1]\n          )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[2]\n          )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_nombre_relatif)(\n            num.relatifs[3]\n          )}} $ est ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(\n            num.getSigneProduitString(\n              num.relatifs[0],\n              num.relatifs[1],\n              num.relatifs[2],\n              num.relatifs[3]\n            )\n          )}.`\n          break\n      }\n      if (this.liste_questions.indexOf(texte) === -1) {\n        // Si la question n'a jamais été posée, on en créé une autre\n        this.liste_questions.push(texte)\n        this.liste_corrections.push(texte_corr)\n        i++\n      }\n      cpt++\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this)\n  }\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/4e/4C10-0.js?");

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