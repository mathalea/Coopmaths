/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_beta3s21_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/exercices/beta/beta3s21.js":
/*!*******************************************!*\
  !*** ./src/js/exercices/beta/beta3s21.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Stabilisation_frequence)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Stabilisation des fréquences'\n\n/**\n * Reconnaître une fonction affine\n* @auteur Erwan Duplessy\n* 3S21\n* D'après le document \"Attendus en fin de 3eme\"\n* On donne les fréquences d’apparition de chaque face d’un dé pour 10000 lancers. \n* L’élève interprète les résultats en les comparant aux probabilités théoriques.\n*/\n\nfunction Stabilisation_frequence() {\n    \"use strict\"\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\n    this.titre = titre;\n    this.nb_questions = 4; // Ici le nombre de questions\n    this.nb_questions_modifiable=true // Active le formulaire nombre de questions\n    this.nb_cols = 1; // Le nombre de colonnes dans l'énoncé LaTeX\n    this.nb_cols_corr = 1;// Le nombre de colonne pour la correction LaTeX\n    this.pas_de_version_LaTeX=false // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX\n    this.pas_de_version_HMTL=false // mettre à true si on ne veut pas de l'exercice en ligne\n  // Voir la Classe Exercice pour une liste exhaustive des propriétés disponibles.\n  \n   this.sup = 1; // situation 1=dés\n   this.sup2 = 10000; // nbLancers\n   this.sup3 = false; // true = équiprobable, false = jeu truqué\n  \n  if (sortie_html) {\n    this.consigne = `<center><a title=\"Diacritica, CC BY-SA 3.0 &lt;https://creativecommons.org/licenses/by-sa/3.0&gt;, via Wikimedia Commons\" href=\"https://commons.wikimedia.org/wiki/File:Dice_(typical_role_playing_game_dice).jpg\"><img width=\"128\" alt=\"Dice (typical role playing game dice)\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dice_%28typical_role_playing_game_dice%29.jpg/128px-Dice_%28typical_role_playing_game_dice%29.jpg\"></a></center>`\n  }\n\n  // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice\n    this.nouvelle_version = function () {\n    // la variable numero_de_l_exercice peut être récupérée pour permettre de différentier deux copies d'un même exo\n    // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page\n  \n    this.liste_questions = [] // tableau contenant la liste des questions \n    this.liste_corrections = []\n    let type_de_questions_disponibles=[1,2,3,4] // tableau à compléter par valeurs possibles des types de questions\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions)\n  \n      for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\n        texte = `` // Nous utilisons souvent cette variable pour construire le texte de la question.\n        texte_corr = `` // Idem pour le texte de la correction.\n        let nbFaces = 2*(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,4)+2; // nombre de faces du dé : 4, 6, 8, ou 10. Avec 12, le tableau devient trop grand....\n        let nbLancers = 10000; // nombre de lancers \n        let tabcoul = [\"rouges\", \"vertes\", \"bleues\", \"noires\"];\n        let tabEff = new Array();// tableau d'effectifs temporaires - une dimension [eff]        \n        let tabEffModif = new Array();// tableau d'effectifs temporaires après modification - une dimension [eff]        \n        let S1 = 0, S2 = 0; // effectif total\n        let tabRes = new Array(); // tableau des fréquences observées - deux dimensions [val, freq]\n        let tabProba = new Array(); // tableau des proba théoriques, à comparer à tabRes\n        let tabValeur = []; // numéro de la face du dé\n        let titreligne = \"Numéro de la face\"; // ou \"couleur de la boule\"\n        let tabtitrecolonne = tabValeur; // ou tabcoul\n        let face = 0;\n        let N = 0; // largeur du tableau\n\n        switch (liste_type_de_questions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...\n          case 1:\n            // avec un dé\n            // Cas où les fréquesnces rejoignent les proba\n            texte += `On lance un dé équilibré à ${nbFaces} faces ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois. On étudie les fréquences d'apparition de chaque face. On obtient les résultats suivants : <br>`;\n            for (let i = 0; i<nbFaces ; i++) {\n              tabValeur[i]=i+1;\n              tabEff[i] = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(90,110)];\n              S1 += parseInt(tabEff[i]);\n            }             \n            for (let i =0; i<nbFaces ; i++) {\n              tabRes[i] = [i, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEff[i]/S1)];\n            } \n            texte_corr += `Le dé est équilibré, donc c'est une situation d'équiprobabilité. Chaque face du dé a une probabilité égale à ` ;\n            switch (nbFaces){\n              case 4:\n                texte_corr += ` $\\\\dfrac{1}{4} = 25\\\\%$ `;\n                break\n              case 6:\n                texte_corr += ` $\\\\dfrac{1}{6} \\\\approx  16.7\\\\%$ `;\n                break\n              case 8:\n                texte_corr += ` $\\\\dfrac{1}{8} = 12.5\\\\%$ `;\n                break\n              case 10:\n                texte_corr += ` $\\\\dfrac{1}{10} = 10\\\\%$ `;\n                break\n              case 12:\n                texte_corr += ` $\\\\dfrac{1}{12} \\\\approx 8.3\\\\%$ `;\n                break\n            }\n            texte_corr += `d'apparaitre. <br>`\n            texte_corr += `Comme le dé a été lancé ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois, les fréquences doivent se stabiliser autour de la probabilité. `;\n            texte_corr += `Les valeurs du tableau de fréquences sont toutes proches de cette probabilité. <br>`;\n            texte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Conclusion : les résultats semblent respecter le principe de stabilisation des fréquences ; le tableau est bien compatible avec un lancer aléatoire de dé. `);\n          break;\n  \n          case 2:\n          // avec un dé  \n          // Cas où les fréquences ne rejoignent pas les proba\n            texte += `On lance un dé équilibré à ${nbFaces} faces ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois. On étudie les fréquences d'apparition de chaque face. On obtient les résultats suivants : <br>`;\n            face = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nbFaces); // on choisit une face au hasard. Elle aura une fréquence déséquilibrée.\n            for (let i = 0; i<nbFaces ; i++) {\n              tabValeur[i]=i+1;\n              if (i == face) {\n                tabEff[i] = [2*(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(90,110)];\n              }\n              else {\n                tabEff[i] = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(90,110)];\n              }\n              S1 += parseInt(tabEff[i]);\n            }             \n            for (let i =0; i<nbFaces ; i++) {\n              tabRes[i] = [i, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEff[i]/S1)];\n            }  \n            texte_corr += `Le dé est équilibré, donc c'est une situation d'équiprobabilité. Chaque face du dé a une probabilité égale à ` ;\n            switch (nbFaces){\n              case 4:\n                texte_corr += ` $\\\\dfrac{1}{4} = 25\\\\%$ `;\n                break\n              case 6:\n                texte_corr += ` $\\\\dfrac{1}{6} \\\\approx  16.7\\\\%$ `;\n                break\n              case 8:\n                texte_corr += ` $\\\\dfrac{1}{8} = 12.5\\\\%$ `;\n                break\n              case 10:\n                texte_corr += ` $\\\\dfrac{1}{10} = 10\\\\%$ `;\n                break\n              case 12:\n                texte_corr += ` $\\\\dfrac{1}{12} \\\\approx 8.3\\\\%$ `;\n                break\n            }\n            texte_corr += `d'apparaitre. <br>`;\n            texte_corr += `Comme le dé a été lancé ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois, les fréquences devraient se stabiliser autour de la probabilité. `\n            texte_corr += `Cependant, une valeur du tableau de fréquences est éloignée de cette probabilité. <br>`;\n            texte_corr += `Il s'agit de la fréquence d'apparition du ${tabValeur[face]}. <br>`;\n            texte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Conclusion : les résultats ne semblent pas respecter le principe de stabilisation des fréquences ; le tableau n'est pas compatible avec un lancer aléatoire de dé.`);\n          break; \n\n          case 3:\n          // avec une urne et des boules  \n          // Cas où les fréquences rejoignent les proba\n          texte += `CAS 3 *********************** <br>`;\n            tabEff = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9)];\n            S1 = tabEff.reduce((a, b)=> a + b,0);\n            for (let i =0; i<4 ; i++) {\n              tabProba[i] = [tabcoul[i], (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEff[i]/S1)];\n            }   \n\n            texte += `Dans une urne opaque, il y a `;  \n            for (let i=0 ; i<3; i++) {\n              texte += `${tabEff[i]} boules ${tabcoul[i]}, `;\n            }\n            texte += `et ${tabEff[3]} boules ${tabcoul[3]}. <br>`;\n            texte += `On prend une boule, on note sa couleur, et on remet la boule dans l'urne. On répète ce processus ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois. `\n            texte += `On étudie les fréquences d'apparition de chaque couleur. On obtient les résultats suivants : <br>`;\n            tabEffModif = tabEff.map(x=>x*(1+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-50,50)/1000)); // on modifie très légèrement le tirage max 5%\n            S2 = tabEff.reduce((a, b)=> a + b,0);\n            for (let i =0; i<4 ; i++) {\n              tabRes[i] = [tabcoul[i], (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEffModif[i]/S2)];\n            }   \n            titreligne = \"Couleur des boules\"; // pour remplir le tableau\n            tabtitrecolonne = tabcoul; \n            texte_corr += `Chaque boule a la même probabilité d'être choisie. Par exemple, la probabilité de tirer une boule ${tabcoul[0]} est : $\\\\dfrac{${tabEff[0]}}{${S1}}$. `\n            texte_corr += `Les probabilités théoriques sont : <br>`;\n            N = tabtitrecolonne.length;\n            texte_corr += `$\\\\begin{array}{|l|` + `c|`.repeat(N) + `}\\n`;\n            texte_corr += `\\\\hline\\n`;\n            texte_corr += `\\\\text{${titreligne}}`\n            for (let i = 0; i<N ; i++) {\n              texte_corr += ` & \\\\textbf{\\\\text{${tabtitrecolonne[i]}}}`;\n            }\n            texte_corr += `\\\\\\\\\\\\hline\\n`;\n            texte_corr += `\\\\text{Fréquence d'apparition (en fraction)}`;\n            for (let i = 0; i<N ; i++) {\n              texte_corr += ` & \\\\dfrac{${tabEff[i]}}{${S1}} `; // probleme d'espace\n            }\n            texte_corr += `\\\\\\\\\\\\hline\\n`;\n            texte_corr += `\\\\text{Fréquence d'apparition (en pourcentage)}`;\n            for (let i = 0; i<N ; i++) {\n              texte_corr += ` & \\\\text{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi_virgule)(100*tabEff[i]/S1, 1)}} \\\\% `;\n            }\n            texte_corr += `\\\\\\\\\\\\hline\\n`;\n            texte_corr += `\\\\end{array}\\n$ <br>`;\n            texte_corr += `Les probabilités semblent très proches des fréquences observées. <br>`;\n            texte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Conclusion : les résultats semblent respecter le principe de stabilisation des fréquences; le tableau est bien compatible avec un tirage aléatoire dans une urne.`);\n\n          break;  \n\n          case 4:\n            // avec une urne et des boules  \n            // Cas où les fréquences rejoignent les proba\n            texte += `CAS 4 *********************** <br>`;\n              face = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, nbFaces); // on choisit une couleur au hasard. Elle aura une fréquence déséquilibrée.\n              tabEff = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,9)];\n              S1 = tabEff.reduce((a, b)=> a + b,0);\n              for (let i =0; i<4 ; i++) {\n                tabProba[i] = [tabcoul[i], (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEff[i]/S1)];\n              }    \n              texte += `Dans une urne opaque, il y a `;  \n              for (let i=0 ; i<3; i++) {\n                texte += `${tabEff[i]} boules ${tabcoul[i]}, `;\n              }\n              texte += `et ${tabEff[3]} boules ${tabcoul[3]}. <br>`;\n              texte += `On prend une boule, on note sa couleur, et on remet la boule dans l'urne. On répète ce processus ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.nombre_avec_espace)(nbLancers)} fois. `\n              texte += `On étudie les fréquences d'apparition de chaque couleur. On obtient les résultats suivants : `;\n              tabEffModif = tabEff.map(x=>x*(1+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-50,50)/1000)); // on modifie très légèrement le tirage de max 5%\n              tabEffModif[face] = 1.75*tabEff[face]; // on augmente de 75% l'effectif d'une couleur\n              S2 = tabEffModif.reduce((a, b)=> a + b,0);\n              for (let i =0; i<4 ; i++) {\n                tabRes[i] = [tabcoul[i], (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(tabEffModif[i]/S2)];\n              }   \n              // CORRECTION : \n              titreligne = \"Couleur des boules\"; // pour remplir le tableau\n              tabtitrecolonne = tabcoul; \n              texte_corr += `Chaque boule a la même probabilité d'être choisie. Par exemple, la probabilité de tirer une boule ${tabcoul[0]} est : $\\\\dfrac{${tabEff[0]}}{${S1}}$. `\n              texte_corr += `Les probabilités théoriques sont : <br>`;\n              N = tabtitrecolonne.length;\n              texte_corr += `$\\\\begin{array}{|l|` + `c|`.repeat(N) + `}\\n`;\n              texte_corr += `\\\\hline\\n`;\n              texte_corr += `\\\\text{${titreligne}}`\n              for (let i = 0; i<N ; i++) {\n                texte_corr += ` & \\\\textbf{\\\\text{${tabtitrecolonne[i]}}}`;\n              }\n              texte_corr += `\\\\\\\\\\\\hline\\n`;\n              texte_corr += `\\\\text{Fréquence d'apparition (en fraction)}`;\n              for (let i = 0; i<N ; i++) {\n                texte_corr += ` & \\\\dfrac{${tabEff[i]}}{${S1}} `; // probleme d'espace\n              }\n              texte_corr += `\\\\\\\\\\\\hline\\n`;\n              texte_corr += `\\\\text{Fréquence d'apparition (en pourcentage)}`;\n              for (let i = 0; i<N ; i++) {\n                texte_corr += ` & \\\\text{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi_virgule)(100*tabEff[i]/S1, 1)}} \\\\% `;\n              }\n              texte_corr += `\\\\\\\\\\\\hline\\n`;\n              texte_corr += `\\\\end{array}\\n$ <br>`;\n              texte_corr += `Les valeurs de fréquence et de probabilité pour les boules ${tabcoul[face]} ne correspondent pas. Il y a trop de différence. <br>`\n              texte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur_et_gras)(`Conclusion : les résultats ne semblent pas respecter le principe de stabilisation des fréquences ; le tableau n'est pas compatible avec un tirage aléatoire dans une urne.`);\n\n            break;  \n  \n        }\n        N = tabtitrecolonne.length;\n\n        sortie_html ? texte +=`<br><center>` : texte +=`\\\\begin{center}` ;\n\n        texte += `$\\\\begin{array}{|l|` + `c|`.repeat(N) + `}\\n`;\n        texte += `\\\\hline\\n`;\n        texte += `\\\\text{${titreligne}}`\n        for (let i = 0; i<N ; i++) {\n          texte += ` & \\\\textbf{\\\\text{${tabtitrecolonne[i]}}}`;\n        }\n        texte += `\\\\\\\\\\\\hline\\n`;\n        texte += `\\\\text{Fréquence d'apparition}`;\n        for (let i = 0; i<N ; i++) {\n          texte += ` & \\\\text{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi_virgule)(100*tabRes[i][1], 1)}} \\\\% `;\n        }\n        texte += `\\\\\\\\\\\\hline\\n`;\n        texte += `\\\\end{array}\\n$`;\n        sortie_html ? texte +=`</center>` : texte +=`\\\\end{center}` ;\n\n        texte += `<br>`;\n        texte += `Ces résultats vous semblent-ils respecter les principes des probabilités ? Détailler votre réponse en vous basant sur des calculs.<br>`;\n\n        if (this.liste_questions.indexOf(texte) == -1) {\n          // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n          this.liste_questions.push(texte);\n          this.liste_corrections.push(texte_corr);\n          i++;\n        }\n        cpt++;\n      }\n      (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this); // On envoie l'exercice à la fonction de mise en page\n    };\n  // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants\n  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.\n  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.\n  \n  this.besoin_formulaire_numerique = ['Type d\\'expérience', 2, `1 : Tirage de dés\\n 2 : Tirage dans une urne`]\n  this.besoin_formulaire2_texte = [\"Nombre de tirages\"];\n  this.besoin_formulaire3_case_a_cocher =['équiprobabilité',true]\n  \n  } // Fin de l'exercice.\n  \n\n//# sourceURL=webpack://mathalea/./src/js/exercices/beta/beta3s21.js?");

/***/ })

}]);