/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3A13_js"],{

/***/ "./src/js/exercices/3e/3A13.js":
/*!*************************************!*\
  !*** ./src/js/exercices/3e/3A13.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ PPCM_Engrenages)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/macroSvgJs.js */ \"./src/js/modules/macroSvgJs.js\");\n\n\n\nconst titre = 'Engrenages'\n\n/**\n * 3A13 - PPCM_Engrenages\n * les deux on besoin de la def partielle serie : stlX\n * pb dans la sortie LaTeX, revoir comment user de la fonction katex_Popup2() pour affichage d'une note hors texte!\n * @author Sébastien Lozano\n */\nfunction PPCM_Engrenages() {\n\t'use strict';\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\tthis.sup = 1;\n\tthis.titre = titre;\n\t// pas de différence entre la version html et la version latex pour la consigne\n\t//this.consigne =`Déterminer au bout de combien de tours les deux roues seront toutes les deux revenues à leur position initiale.`;\n\tthis.consigne = ``;\n\t//this.consigne += `<br>`;\n\tsortie_html ? this.spacing = 2 : this.spacing = 2;\n\tsortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;\n\tthis.nb_questions = 4;\n\t//this.correction_detaillee_disponible = true;\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\tthis.sup = 1;\n\tthis.liste_packages = 'bclogo';\n\n\tvar num_ex = '3A13'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel\n\n\tif (sortie_html) {\n\t\tvar pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale\n\t} else { // sortie LaTeX\n\t};\n\tthis.nouvelle_version = function (numero_de_l_exercice) {\n\t\tlet type_de_questions;\n\t\tif (sortie_html) { // les boutons d'aide uniquement pour la version html\n\t\t\t//this.bouton_aide = '';\n\t\t\tthis.bouton_aide = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.modal_pdf)(numero_de_l_exercice, \"assets/pdf/FicheArithmetique-3A13.pdf\", \"Aide mémoire sur les fonctions (Sébastien Lozano)\", \"Aide mémoire\");\n\t\t\t//this.bouton_aide += modal_video('conteMathsNombresPremiers','/videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');\n\t\t} else { // sortie LaTeX\n\t\t};\n\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tthis.contenu = ''; // Liste de questions\n\t\tthis.contenu_correction = ''; // Liste de questions corrigées\n\n\t\tlet type_de_questions_disponibles = [1, 2, 3, 4];\n\t\t//let type_de_questions_disponibles = [1];\n\t\tlet liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes_sans_changer_ordre)(type_de_questions_disponibles, this.nb_questions);\n\t\tlet txt_intro = `Boîte de vitesse, transmission de vélo, de moto, perceuse electrique, tout ça fonctionne avec des engrenages! Mais au fait, comment ça marche, les engrenages?`;\n\t\tif (sortie_html) {\n\t\t\ttxt_intro += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.warn_message)(`Attention, les roues ci-dessous ne comportent pas le nombre de dents de l'énoncé!`, `nombres`, `Coup de pouce`);\n\t\t\ttxt_intro += `<div id=\"${num_ex}\" style=\"width: ${pourcentage}\"; height: 50px; display : table \"></div>`;\n\t\t\t//this.introduction += warn_message(`Attention, les roues ci-dessous ne comportent pas le nombre de dents de l'énoncé!`, `nombres`, `Coup de pouce`);\n\t\t\t//this.introduction += `<div id=\"${num_ex}\" style=\"width: ${pourcentage}\"; height: 50px; display : table \"></div>`;\n\t\t\t(0,_modules_macroSvgJs_js__WEBPACK_IMPORTED_MODULE_2__.SVG_engrenages)(num_ex, 200, 200);\n\t\t};\n\n\t\tthis.introduction = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lampe_message)({\n\t\t\ttitre: `Arithmétique des engrenages`,\n\t\t\ttexte: txt_intro,\n\t\t\tcouleur: `nombres`\n\t\t});\n\n\t\tfor (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n\t\t\ttype_de_questions = liste_type_de_questions[i];\n\n\t\t\tif (sortie_html) {\n\t\t\t\tlet id_unique = `${num_ex}_${i}_${Date.now()}`;\n\t\t\t\t//var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;\n\t\t\t}\n\n\t\t\tvar nb_dents_r1;\n\t\t\tvar nb_dents_r2;\n\t\t\tlet txt_popup = `Étant donnés deux nombres entiers a et b, lorsque le plus petit multiple commun à $a$ et $b$ vaut $a \\\\times b$ ( $ppcm(a,b)=a\\\\times b$ ), on dit que `;\n\t\t\t//txt_popup += texte_gras('les nombres a et b sont premiers entre eux');\n\t\t\tif (sortie_html) {\n\t\t\t\ttxt_popup += '<b>les nombres a et b sont premiers entre eux</b>';\n\t\t\t} else {\n\t\t\t\ttxt_popup += '$\\\\textbf{les nombres a et b sont premiers entre eux}$';\n\t\t\t};\n\n\t\t\tswitch (type_de_questions) {\n\t\t\t\tcase 1: // avec de petits nombres on calcule les mutliples\n\t\t\t\t\tnb_dents_r1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 30);\n\t\t\t\t\tnb_dents_r2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 30, nb_dents_r1);\n\t\t\t\t\ttexte = `La roue n$\\\\degree$1 possède $${nb_dents_r1}$ dents et la roue n$\\\\degree$2 a $${nb_dents_r2}$ dents.`;\n\t\t\t\t\ttexte += `<br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0) + ` Écrire la liste des multiples de $${nb_dents_r1}$ et de $${nb_dents_r2}$.`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) == (nb_dents_r1 * nb_dents_r2)) {\n\t\t\t\t\t\ttexte += `<br>Pourquoi peut-on en déduire que ${nb_dents_r1} et ${nb_dents_r2} sont des `;\n\t\t\t\t\t\t// let txt_popup = `Étant donnés deux nombres entiers a et b, lorsque $ppcm(a,b)=a\\\\times b$, on dit que `;\n\t\t\t\t\t\t// //txt_popup += texte_gras('les nombres a et b sont premiers entre eux');\n\t\t\t\t\t\t// if (sortie_html) {\n\t\t\t\t\t\t// \ttxt_popup += '<b>les nombres a et b sont premiers entre eux</b>';\n\t\t\t\t\t\t// } else {\n\t\t\t\t\t\t// \ttxt_popup += '$\\\\textbf{les nombres a et b sont premiers entre eux}$';\n\t\t\t\t\t\t// };\n\t\t\t\t\t\t//${texte_gras('les nombres a et b sont premiers entre eux')}.`;\n\t\t\t\t\t\ttexte += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.katex_Popup2)(\n\t\t\t\t\t\t\tnumero_de_l_exercice + 1,\n\t\t\t\t\t\t\t1,\n\t\t\t\t\t\t\t\"nombres premiers entre eux ?\",\n\t\t\t\t\t\t\t`Définition : Nombres premiers entre eux`,\n\t\t\t\t\t\t\ttxt_popup\n\t\t\t\t\t\t);\n\t\t\t\t\t};\n\t\t\t\t\ttexte += `<br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1) + ` En déduire le nombre de tours de chaque roue avant le retour à leur position initiale.`;\n\t\t\t\t\ttexte_corr = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0) + ` Liste des premiers multiples de $${nb_dents_r1}$ : <br>`;\n\t\t\t\t\t// on va faire en sorte de toujours avoir un nombre de multiples multiple de 5\n\t\t\t\t\tlet nb_marge = 5 - ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1) % 5;\n\t\t\t\t\tlet k_max = ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 + nb_marge);\n\t\t\t\t\tfor (let k = 1; k < k_max + 1; k++) {\n\t\t\t\t\t\ttexte_corr += `$${k}\\\\times${nb_dents_r1} = `;\n\t\t\t\t\t\tif (k == ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1)) {\n\t\t\t\t\t\t\ttexte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(k * nb_dents_r1));\n\t\t\t\t\t\t\ttexte_corr += `$ ; `;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\ttexte_corr += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(k * nb_dents_r1)}$ ; `;\n\t\t\t\t\t\t};\n\t\t\t\t\t\tif (k % 5 == 0) {\n\t\t\t\t\t\t\ttexte_corr += `<br>`;\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `$\\\\ldots$ `;\n\t\t\t\t\ttexte_corr += `<br>`;\n\t\t\t\t\ttexte_corr += ` Liste des premiers multiples de ${nb_dents_r2} : <br>`;\n\t\t\t\t\t// on va faire en sorte de toujours avoir un nombre de multiples multiple de 5\n\t\t\t\t\tnb_marge = 5 - ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2) % 5;\n\t\t\t\t\tk_max = ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2 + nb_marge);\n\t\t\t\t\tfor (let k = 1; k < k_max + 1; k++) {\n\t\t\t\t\t\ttexte_corr += `$${k}\\\\times${nb_dents_r2} = `;\n\t\t\t\t\t\tif (k == ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2)) {\n\t\t\t\t\t\t\ttexte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(k * nb_dents_r2));\n\t\t\t\t\t\t\ttexte_corr += `$ ; `;\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\ttexte_corr += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(k * nb_dents_r2)}$ ; `;\n\t\t\t\t\t\t};\n\t\t\t\t\t\tif (k % 5 == 0) {\n\t\t\t\t\t\t\ttexte_corr += `<br>`;\n\t\t\t\t\t\t}\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `$\\\\ldots$ `;\n\t\t\t\t\ttexte_corr += `<br>`;\n\t\t\t\t\ttexte_corr += `Le plus petit multiple commun à $${nb_dents_r1}$ et $${nb_dents_r2}$ vaut donc $ppcm(${nb_dents_r1},${nb_dents_r2}) = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2)}$.`;\n\t\t\t\t\ttexte_corr += `<br>`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) == (nb_dents_r1 * nb_dents_r2)) {\n\t\t\t\t\t\ttexte_corr += `Le $ppcm(` + nb_dents_r1 + `;` + nb_dents_r2 + `)=` + nb_dents_r1 + `\\\\times` + nb_dents_r2 + `$ donc $${nb_dents_r1}$ et $${nb_dents_r2}$ sont des `;\n\t\t\t\t\t\ttexte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.katex_Popup2)(\n\t\t\t\t\t\t\tnumero_de_l_exercice + 2,\n\t\t\t\t\t\t\t1,\n\t\t\t\t\t\t\t\"nombres premiers entre eux.\",\n\t\t\t\t\t\t\t`Définition : Nombres premiers entre eux`,\n\t\t\t\t\t\t\ttxt_popup //`Étant donnés deux nombres entiers a et b, lorsque $ppcm(a,b)=a\\\\times b$, on dit que ${texte_gras('les nombres a et b sont premiers entre eux')}.`\n\t\t\t\t\t\t);\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `<br><br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1) + ` Chaque roue doit tourner de $ppcm(${nb_dents_r1},${nb_dents_r2})=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}$ dents.`;\n\t\t\t\t\ttexte_corr += `<br> Cela correspond à $(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2)}\\\\text{ dents})\\\\div (${nb_dents_r1}\\\\text{ dents/tour}) = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1}$`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `pour la roue n$\\\\degree$1.`;\n\t\t\t\t\ttexte_corr += `<br>Cela correspond à $(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2)}\\\\text{ dents})\\\\div (${nb_dents_r2}\\\\text{ dents/tour}) = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2}$`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `pour la roue n$\\\\degree$2.`;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 2: // avec de plus grands nombre, c'est mieux de décomposer en facteurs premiers\n\t\t\t\t\tnb_dents_r1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(31, 80);\n\t\t\t\t\tnb_dents_r2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(31, 80, nb_dents_r1);\n\t\t\t\t\ttexte = `La roue n$\\\\degree$1 possède $${nb_dents_r1}$ dents et la roue n$\\\\degree$2 a $${nb_dents_r2}$ dents.`;\n\t\t\t\t\ttexte += `<br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0) + ` Décomposer $${nb_dents_r1}$ et $${nb_dents_r2}$ en produit de facteurs premiers.`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) == (nb_dents_r1 * nb_dents_r2)) {\n\t\t\t\t\t\ttexte += `<br>Pourquoi peut-on en déduire que ${nb_dents_r1} et ${nb_dents_r2} sont des `;\n\t\t\t\t\t\ttexte += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.katex_Popup2)(\n\t\t\t\t\t\t\tnumero_de_l_exercice + 3,\n\t\t\t\t\t\t\t1,\n\t\t\t\t\t\t\t\"nombres premiers entre eux\",\n\t\t\t\t\t\t\t`Définition : Nombres premiers entre eux`,\n\t\t\t\t\t\t\ttxt_popup //`Étant donnés deux nombres entiers a et b, lorsque $ppcm(a,b)=a\\\\times b$, on dit que ${texte_gras('les nombres a et b sont premiers entre eux')}.`\n\t\t\t\t\t\t);\n\t\t\t\t\t};\n\t\t\t\t\ttexte += `<br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1) + ` En déduire le nombre de tours de chaque roue avant le retour à leur position initiale.`;\n\t\t\t\t\ttexte_corr = `Pour un nombre de dents plus élevé, il est plus commode d'utiliser les décompositions en produit de facteurs premiers.`;\n\t\t\t\t\ttexte_corr += `<br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0) + ` Décomposition de $${nb_dents_r1}$ en produit de facteurs premiers :  $${nb_dents_r1} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.decomposition_facteurs_premiers)(nb_dents_r1)}$.`;\n\t\t\t\t\ttexte_corr += `<br> Décomposition de $${nb_dents_r2}$ en produit de facteurs premiers :  $${nb_dents_r2} = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.decomposition_facteurs_premiers)(nb_dents_r2)}$.`;\n\t\t\t\t\ttexte_corr += `<br> D'où $ppcm(${nb_dents_r1},${nb_dents_r2})= ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.decomposition_facteurs_premiers)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}$.<br>`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) == (nb_dents_r1 * nb_dents_r2)) {\n\t\t\t\t\t\ttexte_corr += `Le $ppcm(` + nb_dents_r1 + `;` + nb_dents_r2 + `)=` + nb_dents_r1 + `\\\\times` + nb_dents_r2 + `$ donc $${nb_dents_r1}$ et $${nb_dents_r2}$ sont des `;\n\t\t\t\t\t\ttexte_corr += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.katex_Popup2)(\n\t\t\t\t\t\t\tnumero_de_l_exercice + 4,\n\t\t\t\t\t\t\t1,\n\t\t\t\t\t\t\t\"nombres premiers entre eux.\",\n\t\t\t\t\t\t\t`Définition : Nombres premiers entre eux`,\n\t\t\t\t\t\t\ttxt_popup //`Étant donnés deux nombres entiers a et b, lorsque $ppcm(a,b)=a\\\\times b$, on dit que ${texte_gras('les nombres a et b sont premiers entre eux')}.`\n\t\t\t\t\t\t);\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `<br><br>` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1) + ` Chaque roue doit tourner de $ppcm(${nb_dents_r1},${nb_dents_r2})=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}$ dents.`;\n\t\t\t\t\ttexte_corr += `<br> Cela correspond à $(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}\\\\text{ dents})\\\\div (${nb_dents_r1}\\\\text{ dents/tour}) = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1}$`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `pour la roue n$\\\\degree$1.`;\n\t\t\t\t\ttexte_corr += `<br> Cela correspond à $(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}\\\\text{ dents})\\\\div (${nb_dents_r2}\\\\text{ dents/tour}) = ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2}$`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `pour la roue n$\\\\degree$2.`;\n\t\t\t\t\tbreak;\n\t\t\t\tcase 3: // déterminer le nombre de dents d'une roue connaissant l'autre et le nombre de tours necessaires à la re-synchro\n\t\t\t\t\tnb_dents_r1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 80);\n\t\t\t\t\tnb_dents_r2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 80, nb_dents_r1);\n\t\t\t\t\ttexte = `La roue n$\\\\degree$2 a maintenant $${nb_dents_r2}$ dents.`;\n\t\t\t\t\ttexte += ` Déterminer le nombre de dents de la roue n$\\\\degree$1 qui ferait $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1}$ `;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 == 1) {\n\t\t\t\t\t\ttexte += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte += ` pendant que la roue n$\\\\degree$2 en fait $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2}$.`;\n\t\t\t\t\ttexte_corr = `Puisque la roue n$\\\\degree$2, qui a $${nb_dents_r2}$ dents, fait $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2}$ `;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r2 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `, cela représente $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}$ dents.`;\n\t\t\t\t\ttexte_corr += `<br>La roue n$\\\\degree$1 doit donc aussi tourner de $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}$ dents, ceci en $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1}$ `;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `.`;\n\t\t\t\t\ttexte_corr += `<br> on obtient donc $(${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2))}\\\\text{ dents})\\\\div (${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1}\\\\text{`;\n\t\t\t\t\tif ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(nb_dents_r1, nb_dents_r2) / nb_dents_r1 == 1) {\n\t\t\t\t\t\ttexte_corr += ` tour `;\n\t\t\t\t\t} else {\n\t\t\t\t\t\ttexte_corr += ` tours `;\n\t\t\t\t\t};\n\t\t\t\t\ttexte_corr += `}) = ${nb_dents_r1} \\\\text{ dents/tour}.$`;\n\t\t\t\t\ttexte_corr += `<br>La roue n$\\\\degree$1 a donc : $${nb_dents_r1}$ dents.`;\n\t\t\t\t\tbreak;\n\t\t\t};\n\n\t\t\tif (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre\n\t\t\t\tthis.liste_questions.push(texte);\n\t\t\t\tthis.liste_corrections.push(texte_corr);\n\t\t\t\ti++;\n\t\t\t}\n\t\t\tcpt++;\n\t\t}\n\n\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t};\n\t//this.besoin_formulaire_numerique = ['Règle à travailler',5,\"1 : Produit de deux puissances de même base\\n2 : Quotient de deux puissances de même base\\n3 : Puissance de puissance\\n4 : Produit de puissances de même exposant\\n5 : Mélange\"]; \n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/3e/3A13.js?");

/***/ })

}]);