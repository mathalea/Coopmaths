/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5R20-4_js"],{

/***/ "./src/js/exercices/5e/5R20-4.js":
/*!***************************************!*\
  !*** ./src/js/exercices/5e/5R20-4.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Problemes_additifs_relatifs_5e)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Résoudre un problème en utilisant une somme algébrique de relatifs.'\n\n/** \n * * résoudre un problème additif avec des relatifs\n * * 5R20-4\n * @author Sébastien Lozano\n */\n\nfunction Problemes_additifs_relatifs_5e() {\n\t'use strict';\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.debug = false;\n\tthis.sup = 1;\n\tif (this.debug) {\n\t\tthis.nb_questions = 1;\n\t} else {\n\t\tthis.nb_questions = 1;\n\t};\n\n\tthis.titre = titre;\n\tthis.consigne = ``;\n\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\t//this.nb_questions_modifiable = false;\n\tsortie_html ? this.spacing = 3 : this.spacing = 2;\n\tsortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5;\n\n\tlet type_de_questions_disponibles;\n\n\tthis.nouvelle_version = function () {\n\t\tif (this.debug) {\n\t\t\ttype_de_questions_disponibles = [0];\n\t\t} else {\n\t\t\t//   type_de_questions_disponibles = shuffle([choice([1,3]),choice([2,4]),0]);\n\t\t\ttype_de_questions_disponibles = [0];\n\t\t};\n\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\n\t\t//type_de_questions_disponibles=[1];\t\t\t\n\n\t\t//let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n\t\tlet liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes_sans_changer_ordre)(type_de_questions_disponibles, this.nb_questions) // Tous les types de questions sont posées --> à remettre comme ci dessus\t\t\n\n\t\tfor (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\t\t\tlet g_p_u; //pour le gain/perte unitaire\n\t\t\tlet g_m; //pour le gain multiple\n\t\t\t// on veut des multiples de 5 pour n'avoir que des demis entiers ou des entiers\n\t\t\tdo {\n\t\t\t\tg_p_u = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10, 30);\n\t\t\t\tg_m = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10, 30);\n\t\t\t} while (g_p_u % 5 != 0 || g_m % 5 != 0 || g_m <= g_p_u)\n\n\t\t\tlet n_tot = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10, 15); // nombre totale de lancers\n\t\t\tlet n_g_u; // nb de gains untitaires\n\t\t\tlet n_p; // nb de pertes\n\t\t\tdo {\n\t\t\t\tn_g_u = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n\t\t\t\tn_p = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 10);\n\t\t\t} while (n_g_u + n_p >= n_tot)\n\n\t\t\t// on échange parfois le nombre de gain unitaire et le nombre de perte pour avoir un bilan négatif plus souvent\n\t\t\tif (n_p < n_g_u) {\n\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 1) == 0) {\n\t\t\t\t\tlet temp = n_p;\n\t\t\t\t\tn_p = n_g_u;\n\t\t\t\t\tn_g_u = temp;\n\t\t\t\t};\n\t\t\t};\n\n\t\t\tlet prenoms = [[(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)(), 'Elle', 'elle'], [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomM)(), 'Il', 'il']];\n\t\t\tlet currentPrenom = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)(prenoms);\n\n\t\t\t// une fonction pour écrire les chaine correctives\n\t\t\tfunction myGainPerteString(nb, type, valeur) {\n\t\t\t\tlet sortie = ``;\n\t\t\t\tswitch (type) {\n\t\t\t\t\tcase 'gain':\n\t\t\t\t\t\tsortie = `(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(valeur)}$€$)`;\n\t\t\t\t\t\tfor (let m = 1; m < nb; m++) {\n\t\t\t\t\t\t\tsortie += `+(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(valeur)}$€$)`;\n\t\t\t\t\t\t};\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 'perte':\n\t\t\t\t\t\tsortie = `(-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(valeur)}$€$)`;\n\t\t\t\t\t\tfor (let m = 1; m < nb; m++) {\n\t\t\t\t\t\t\tsortie += `+(-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(valeur)}$€$)`;\n\t\t\t\t\t\t};\n\t\t\t\t\t\tbreak;\n\t\t\t\t};\n\t\t\t\treturn sortie;\n\t\t\t}\n\n\t\t\t// une fonction pour dire si le bilan est positif ou négatif\n\t\t\tfunction isBilanPositif(tot) {\n\t\t\t\tif (tot >= 0) {\n\t\t\t\t\treturn true;\n\t\t\t\t} else {\n\t\t\t\t\treturn false;\n\t\t\t\t};\n\t\t\t};\n\n\t\t\tlet bilan;\n\t\t\tif (isBilanPositif((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((n_tot - n_g_u - n_p) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_m / 10)) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_g_u * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10)) - (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_p * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10)))) {\n\t\t\t\tbilan = [`Globalement, le montant des gains`, `est supérieur au montant des pertes`, `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Le bilan est donc positif.`)}`, `a gagné`, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((n_tot - n_g_u - n_p) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_m / 10)) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_g_u * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10)) - (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_p * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10)))];\n\t\t\t} else {\n\t\t\t\tbilan = [`Globalement, le montant des gains`, `est inférieur au montant des pertes`, `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Le bilan est donc négatif.`)}`, `a perdu`, (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)((-1) * ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((n_tot - n_g_u - n_p) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_m / 10)) + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_g_u * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10)) - (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(n_p * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10))))];\n\t\t\t}\n\t\t\t// pour les situations\n\t\t\tlet situations = [\n\t\t\t\t{//case 0 --> les quilles\n\t\t\t\t\tnb_tot_lancers: n_tot,\n\t\t\t\t\tnb_gains_unitaires: n_g_u,\n\t\t\t\t\tnb_pertes: n_p,\n\t\t\t\t\tnb_gains: n_tot - n_g_u - n_p,\n\t\t\t\t\tperte: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10),\n\t\t\t\t\tgain_unitaire: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_p_u / 10),\n\t\t\t\t\tgain_multiple: (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(g_m / 10),\n\t\t\t\t\tenonce_1: `lancer une balle sur des quilles.`,\n\t\t\t\t\tenonce_2: `- Si la balle touche plusieurs quilles, le joueur gagne `,\n\t\t\t\t\tenonce_3: `- Si la balle ne touche qu'une quille, le joueur gagne `,\n\t\t\t\t\tenonce_4: `- Si la balle ne touche aucune quille, le joueur perd `,\n\t\t\t\t\tenonce_5: `a lancé`,\n\t\t\t\t\tenonce_6: `la balle`,\n\t\t\t\t\tcorrection_1: `touché plusieurs quilles`,\n\t\t\t\t\tcorrection_2: `touché qu'une seule quille`,\n\t\t\t\t\tprenom: currentPrenom[0],//prenoms[choice([0,1])][0],\n\t\t\t\t\tpronomMaj: currentPrenom[1],//prenoms[choice([0,1])][1],\n\t\t\t\t\tpronomMin: currentPrenom[2],//prenoms[choice([0,1])][2],\n\t\t\t\t\tbilan: bilan,\n\t\t\t\t},\n\t\t\t];\n\n\t\t\tlet enonces = [];\n\t\t\tlet i_sous_question;\n\t\t\tlet i_sous_question_corr;\n\t\t\tfor (let k = 0; k < situations.length; k++) {\n\t\t\t\ti_sous_question = 0;\n\t\t\t\ti_sous_question_corr = 0;\n\t\t\t\tenonces.push({\n\t\t\t\t\tenonce: `\n\t\t\t\t\tUn jeu consiste à ${situations[k].enonce_1}\n\t\t\t\t\t<br>${situations[0].enonce_2} $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[0].gain_multiple)}$€.\t\t\t\t\n\t\t\t\t\t<br>${situations[0].enonce_3} $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[0].gain_unitaire)}$€.\n\t\t\t\t\t<br>${situations[0].enonce_4} $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[0].perte)}$€.\n\t\t\t\t\t<br>${situations[k].prenom} ${situations[k].enonce_5} $${situations[k].nb_tot_lancers}$ fois ${situations[k].enonce_6}.\n\t\t\t\t\t${situations[k].pronomMaj} a perdu de l'argent $${situations[k].nb_pertes}$ fois et a gagné $${situations[k].nb_gains_unitaires}$ fois $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].gain_unitaire)}$€.\n\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(i_sous_question++)} A-t-${situations[k].pronomMin} globalement gagné ou perdu de l'argent ?\n\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(i_sous_question++)} Combien a-t-${situations[k].pronomMin} globalement gagné ou perdu ?\n\t\t\t\t\t`,\n\t\t\t\t\tquestion: ``,\n\t\t\t\t\tcorrection: `\n\t\t\t\t\t${situations[k].prenom} ${situations[k].enonce_5} $${situations[k].nb_tot_lancers}$ fois ${situations[k].enonce_6},\n\t\t\t\t\tsur les $${situations[k].nb_tot_lancers}$ lancers, on sait combien de fois ${situations[k].pronomMin} a perdu de l'argent et combien de fois ${situations[k].pronomMin} a gagné $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].gain_unitaire)}$€, les autres lancers correspondent donc au nombre de fois où ${situations[k].pronomMin} a ${situations[k].correction_1} et qu'${situations[k].pronomMin} a gagné $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].gain_multiple)}$€ \n\t\t\t\t\t<br> $${situations[k].nb_tot_lancers}-${situations[k].nb_pertes}-${situations[k].nb_gains_unitaires} = ${situations[k].nb_tot_lancers - situations[k].nb_pertes - situations[k].nb_gains_unitaires}$,\n\t\t\t\t\t${situations[k].pronomMin} a donc ${situations[k].correction_1} $${situations[k].nb_gains}$ fois.\n\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`Gains lorsqu'${situations[k].pronomMin} a ${situations[k].correction_1} :`)}\n\t\t\t\t\t<br>$${myGainPerteString(situations[k].nb_gains, 'gain', situations[k].gain_multiple)} = ${situations[k].nb_gains}\\\\times (+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].gain_multiple)}$€$) = +${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains * situations[k].gain_multiple)}$€\n\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`Gains lorsqu'${situations[k].pronomMin} n'a ${situations[k].correction_2} :`)}\n\t\t\t\t\t<br>$${myGainPerteString(situations[k].nb_gains_unitaires, 'gain', situations[k].gain_unitaire)} = ${situations[k].nb_gains_unitaires}\\\\times (+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].gain_unitaire)}$€$) = +${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€\n\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`Pertes :`)}\n\t\t\t\t\t<br>$${myGainPerteString(situations[k].nb_pertes, 'perte', situations[k].perte)} = ${situations[k].nb_pertes}\\\\times (-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].perte)}$€$) = -${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_pertes * situations[k].perte)}$€\n\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(i_sous_question_corr++)} ${situations[k].bilan[0]}, $(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains * situations[k].gain_multiple)}$€$)$ et $(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€$)$, ${situations[k].bilan[1]}, $(-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_pertes * situations[k].perte)}$€$)$.\n\t\t\t\t\t<br> ${situations[k].bilan[2]}   \n\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(i_sous_question_corr++)} \n\t\t\t\t\t$(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains * situations[k].gain_multiple)}$€$)+(+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains_unitaires * situations[k].gain_unitaire)}$€$)+(-${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_pertes * situations[k].perte)}$€$) = (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_prix)(situations[k].nb_gains * situations[k].gain_multiple + situations[k].nb_gains_unitaires * situations[k].gain_unitaire - situations[k].nb_pertes * situations[k].perte)}$€$)$\n\t\t\t\t\t<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Globalement ${situations[k].prenom} ${situations[k].bilan[3]} $${situations[k].bilan[4]}$€`)} \n\n\t\t\t\t\t`\n\t\t\t\t});\n\t\t\t};\n\n\t\t\tswitch (liste_type_de_questions[i]) {\n\t\t\t\tcase 0:\n\t\t\t\t\ttexte = `${enonces[0].enonce}`;\n\t\t\t\t\tif (this.debug) {\n\t\t\t\t\t\ttexte += `<br>`;\n\t\t\t\t\t\ttexte += `<br> =====CORRECTION======<br>${enonces[0].correction}`;\n\t\t\t\t\t\ttexte += `             `\n\t\t\t\t\t\ttexte_corr = ``;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr = `${enonces[0].correction}`;\n\t\t\t\t\t};\n\t\t\t\t\tbreak;\n\t\t\t};\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\n\t}\n\t//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,\"1 : Entiers naturels\\n2 : Entiers relatifs\"];\n\t//this.besoin_formulaire2_case_a_cocher = [\"Avec des équations du second degré\"];\t\n};\n\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5R20-4.js?");

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