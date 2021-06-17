/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6C35_js"],{

/***/ "./src/js/exercices/6e/6C35.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6C35.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ ModelisationProblemes)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* eslint-disable camelcase */\n\n\n\n\n\nconst titre = 'Modéliser des problèmes'\n\n/**\n * Associer huit problèmes à huit types de modélisation différents\n * @Auteur Mireille Gain, 23 avril 2021\n * Référence 6C35\n*/\nfunction ModelisationProblemes () {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\n  this.titre = titre\n  this.consigne = 'Associer chaque problème avec sa modélisation'\n  this.nb_questions = 8\n  this.nb_questions_modifiable = false\n  this.sup = 2\n  this.nb_cols = 1\n  this.nb_cols_corr = 1\n  this.tailleDiaporama = 50\n  this.video = ''\n  this.correction_detaillee_disponible = true\n  this.correction_detaillee = true\n\n  this.nouvelle_version = function () {\n    this.liste_questions = []\n    this.liste_corrections = []\n\n    const type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7, 8]\n    const liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions)\n\n    const b1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(15, 50)\n    let c1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 9)\n    const c3 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 9)\n    const d3 = c3 * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(7, 13)\n    let b5 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(15, 50)\n    let c5 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5, 9)\n    let a7 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(9, 13)\n    let b7 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(15, 50)\n    const o = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, 2])\n    if (this.sup === 2) {\n      c1 = c3; b5 = b1; c5 = c1; b7 = d3; a7 = b1\n    }\n    let A1, A2, A3, A4, A5, A6, A7, A8, B1, B2, B3, B4, B5, B6, B7, B8, C1, C2, C3, C4, C5, C6, C7, C8, D1, D2, D3, D4, D5, D6, D7, D8, n1, n2, n3, n4, n5, n6, n7, n8,\n      p1, traitHorizontal1, traitVertical1, tb1, th1, th12,\n      p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n      p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n      p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n      p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n      p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n      p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n      p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n\n    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      texte = ''\n      texte_corr = ''\n\n      switch (liste_type_de_questions[i]) {\n        case 1:\n          if (o === 1) {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} avait ${b1} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.jour)()}. `\n            texte += `<br>Le lendemain, elle en a trouvé ${c1} autres.`\n            texte += '<br>Combien cela lui en fait-il ?'\n          } else {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomM)()} a ${c1} ans de moins que sa soeur ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()}.`\n            texte += `<br>Sachant qu'il a ${b1} ans, quel âge a sa soeur ?`\n          }\n\n          A1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 0)\n          B1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, 0)\n          C1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, 4)\n          D1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 4)\n          p1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A1, B1, C1, D1], 'red')\n          p1.epaisseur = 3\n          traitHorizontal1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, 2))\n          traitVertical1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(6, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(6, 4))\n          tb1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 6, 1)\n          th1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b1, 3, 3)\n          th12 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c1, 9, 3)\n          n1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('A.', -1, 4)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma A.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -1, xmax: 61, ymax: 5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n\n        case 2:\n          if (o === 1) {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomM)()} achète ${b1} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()}.`\n            texte += `<br>Il en distribue ${c1} à ses amis qui ont oublié les leurs.`\n            texte += '<br>Combien lui en reste-t-il ?'\n          } else {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomM)()} possède déjà ${c1} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()}.`\n            texte += `<br>Il a besoin d'en avoir ${b1} en fin de semaine.`\n            texte += '<br>Combien doit-il encore en récupérer ?'\n          }\n\n          A2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, 0)\n          B2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, 0)\n          C2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, 4)\n          D2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, 4)\n          p2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A2, B2, C2, D2], 'red')\n          p2.epaisseur = 3\n          traitHorizontal2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, 2))\n          traitVertical2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(22, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(22, 4))\n          tb2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b1, 22, 1)\n          th2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c1, 19, 3)\n          th22 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 25, 3)\n          n2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('B.', 15, 4)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma B.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 15, ymin: -1, xmax: 61, ymax: 5, pixelsParCm: 15, scale: 0.25 },\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 3:\n          if (o === 1) {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} a ${b5} ans.`\n            texte += `<br>Sachant qu'elle a ${c5} ans de plus que son frère, quel âge a celui-ci ?`\n          } else {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} a acheté ${b5} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} pour les donner à ses amis.`\n            texte += `<br>Il lui en reste encore ${c5} à donner.`\n            texte += '<br>Combien en a-t-elle déjà distribué ?'\n          }\n\n          A3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, 0)\n          B3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, 0)\n          C3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, 4)\n          D3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, 4)\n          p3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A3, B3, C3, D3], 'red')\n          p3.epaisseur = 3\n          traitHorizontal3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, 2))\n          traitVertical3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(38, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(38, 4))\n          tb3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b5, 38, 1)\n          th3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 35, 3)\n          th32 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c5, 41, 3)\n          n3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('C.', 31, 4)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma C.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 31, ymin: -1, xmax: 61, ymax: 5, pixelsParCm: 15, scale: 0.25 },\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 4:\n          if (o === 1) {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} a acheté ${b5} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} à ${c5} € pièce.`\n            texte += '<br>Combien a-t-elle payé ?'\n          } else {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} récupère ${b5} paquets de ${c5} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} chacun.`\n            texte += '<br>Combien en a-t-elle en tout ?'\n          }\n          A4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, 0)\n          B4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, 0)\n          C4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, 4)\n          D4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, 4)\n          p4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A4, B4, C4, D4], 'red')\n          p4.epaisseur = 3\n          traitHorizontal4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, 2))\n          traitHorizontal42 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, 4.5), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, 4.5))\n          traitHorizontal42.styleExtremites = '<->'\n          traitVertical4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(50, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(50, 4))\n          traitVertical42 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(52, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(52, 4))\n          traitVertical43 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(58, 2), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(58, 4))\n          tb4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 54, 1)\n          th4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b5, 49, 3)\n          th42 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b5, 51, 3)\n          th43 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('. . .', 55, 3)\n          th44 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b5, 59, 3)\n          th45 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c5, 54, 5)\n          n4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('D.', 47, 4)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma D.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 47, ymin: -1, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 5:\n          if (o === 1) {\n            texte += `J'ai ${d3} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()} dans mon sac et je souhaite les partager avec mes ${c3 - 1} amis.`\n            texte += '<br>Quelle sera la part de chacun ?'\n          } else {\n            texte += `${c3} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()} identiques coûtent ${d3} €.`\n            texte += '<br>Quel est le prix d\\'une d\\'entre elles ?'\n          }\n\n          A5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, -6)\n          B5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, -6)\n          C5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, -2)\n          D5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, -2)\n          p5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A5, B5, C5, D5], 'blue')\n          p5.epaisseur = 3\n          traitHorizontal5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, -4))\n          traitHorizontal52 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(0, -1.3), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(12, -1.3))\n          traitHorizontal52.styleExtremites = '<->'\n          traitVertical5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(2, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(2, -2))\n          traitVertical52 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(4, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(4, -2))\n          traitVertical53 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(10, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(10, -2))\n          tb5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(d3, 6, -5)\n          th5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 1, -3)\n          th52 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 3, -3)\n          th53 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('. . .', 7, -3)\n          th54 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 11, -3)\n          th55 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c3, 6, -0.8)\n          n5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('E.', -1, -2)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma E.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: -0.5, pixelsParCm: 15, scale: 0.25 },\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 6:\n          if (o === 1) {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} récupère ${b7} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objet)()} dans une salle, puis ${a7} dans une autre.`\n            texte += '<br>Combien en a-t-elle en tout ?'\n          } else {\n            texte += `Un lot de ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} coûte ${b7} € et un lot de ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()} coûte ${a7} €.`\n            texte += '<br>Combien coûte l\\'ensemble ?'\n          }\n\n          A6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, -6)\n          B6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, -6)\n          C6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, -2)\n          D6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, -2)\n          p6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A6, B6, C6, D6], 'blue')\n          p6.epaisseur = 3\n          traitHorizontal6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(16, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(28, -4))\n          traitVertical6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(22, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(22, -2))\n          tb6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 22, -5)\n          th6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b7, 19, -3)\n          th62 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(a7, 25, -3)\n          n6 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('F.', 15, -2)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma F.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 15, ymin: -7, xmax: 61, ymax: -0.5, pixelsParCm: 15, scale: 0.25 },\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 7:\n          if (o === 1) {\n            texte += `J'ai ${d3} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} dans mon sac et je dois les regrouper par ${c3}.`\n            texte += '<br>Combien puis-je faire de tas ?'\n          } else {\n            texte += `J'ai payé ${d3} € pour des ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetM)()} coûtant ${c3} € chacun.`\n            texte += '<br>Combien en ai-je acheté ?'\n          }\n\n          A7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, -6)\n          B7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, -6)\n          C7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, -2)\n          D7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, -2)\n          p7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A7, B7, C7, D7], 'blue')\n          p7.epaisseur = 3\n          traitHorizontal7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, -4))\n          traitHorizontal72 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(32, -1.3), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(44, -1.3))\n          traitHorizontal72.styleExtremites = '<->'\n          traitVertical7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(34, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(34, -2))\n          traitVertical72 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(36, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(36, -2))\n          traitVertical73 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(42, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(42, -2))\n          tb7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(d3, 38, -5)\n          th7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c3, 33, -3)\n          th72 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c3, 35, -3)\n          th73 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('. . .', 39, -3)\n          th74 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(c3, 43, -3)\n          th75 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 38, -0.8)\n          n7 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('G.', 31, -2)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma G.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 31, ymin: -7, xmax: 61, ymax: -0.5, pixelsParCm: 15, scale: 0.25 },\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n        case 8:\n          if (o === 1) {\n            texte += `Dans un sac, il y a ${a7} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()} et dans l'autre, il y en a ${b7}.`\n            texte += '<br>Combien y en a-t-il de plus dans ce sac ?'\n          } else {\n            texte += `${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomF)()} a trouvé ${b7} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.objetF)()} et ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.prenomM)()} en a trouvé ${a7}`\n            texte += '<br>Combien en a-t-il de moins qu\\'elle ?'\n          }\n          A8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, -6)\n          B8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, -6)\n          C8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, -2)\n          D8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, -2)\n          p8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)([A8, B8, C8, D8], 'blue')\n          p8.epaisseur = 3\n          traitHorizontal8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(48, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(60, -4))\n          traitVertical8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(54, -4), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(54, -2))\n          tb8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(b7, 54, -5)\n          th8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(a7, 51, -3)\n          th82 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('?', 57, -3)\n          n8 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)('H.', 47, -2)\n\n          texte_corr += 'Cet énoncé est associé avec le schéma H.'\n          if (this.correction_detaillee) {\n            texte_corr += '<br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: 47, ymin: -7, xmax: 61, ymax: -0.5, pixelsParCm: 15, scale: 0.25 },\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n            texte_corr += \"<br> (L'énoncé était :<br> \" + texte + ')'\n          }\n          if (i === 7) {\n            texte += '<br><br> Les schémas à associer à chacun des énoncés sont : <br>' + (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n              { xmin: -1.5, ymin: -7, xmax: 61, ymax: 6.5, pixelsParCm: 15, scale: 0.25 },\n              p1, traitHorizontal1, traitVertical1, tb1, th1, th12, n1, n2, n3, n4, n5, n6, n7, n8,\n              p2, traitHorizontal2, traitVertical2, tb2, th2, th22,\n              p3, traitHorizontal3, traitVertical3, tb3, th3, th32,\n              p4, traitHorizontal4, traitVertical4, tb4, th4, th42, traitHorizontal42, traitVertical42, traitVertical43, th43, th44, th45,\n              p5, traitHorizontal5, traitVertical5, tb5, th5, th52, traitHorizontal52, traitVertical52, traitVertical53, th53, th54, th55,\n              p6, traitHorizontal6, traitVertical6, tb6, th6, th62,\n              p7, traitHorizontal7, traitVertical7, tb7, th7, th72, traitHorizontal72, traitVertical72, traitVertical73, th73, th74, th75,\n              p8, traitHorizontal8, traitVertical8, tb8, th8, th82\n            )\n          }\n          break\n      }\n      if (this.liste_questions.indexOf(texte) === -1) {\n        // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n        this.liste_questions.push(texte)\n        this.liste_corrections.push(texte_corr)\n        i++\n      }\n      cpt++\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this) // On envoie l'exercice à la fonction de mise en page\n  }\n  this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, '1 : Valeurs différentes suivant les exercices\\n2: Valeurs identiques dans tous les exercices'\n  ]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/6C35.js?");

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