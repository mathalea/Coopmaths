/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_4C30-1_js"],{

/***/ "./src/js/exercices/4e/4C30-1.js":
/*!***************************************!*\
  !*** ./src/js/exercices/4e/4C30-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Puissances_encadrement)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Encadrer avec des puissances de 10';\n/**\n * Encadrer par des puissances de 10\n * 4C30-1\n * @author Sébastien Lozano\n */\n\nfunction Puissances_encadrement() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.sup = 4;\n  this.nbQuestions = 6;\n  this.titre = titre;\n  this.consigne = `Encadrer les nombres suivants par deux puissances de 10 d'exposants consécutifs.`;\n  this.nbCols = 1;\n  this.nbColsCorr = 1; //this.nbQuestionsModifiable = false;\n\n  let type_de_questions_disponibles;\n\n  this.nouvelleVersion = function () {\n    this.sup = Number(this.sup); // attention le formulaire renvoie un string, on a besoin d'un number pour le switch !\n\n    switch (this.sup) {\n      case 1:\n        // nombre enier positif\n        type_de_questions_disponibles = [1, 2, 3, 4, 5, 6]; //this.nbQuestions = type_de_questions_disponibles.length;\n        //this.nbQuestions = 3;\n\n        break;\n\n      case 2:\n        // nombre décimal positif\n        type_de_questions_disponibles = [7, 8, 9, 10]; //this.nbQuestions = type_de_questions_disponibles.length;\n        //this.nbQuestions = 3;\n\n        break;\n\n      case 3:\n        // nombre décimal positif inférieur à 1\n        type_de_questions_disponibles = [11, 12, 13, 14]; //this.nbQuestions = type_de_questions_disponibles.length;\n        //this.nbQuestions = 3;\n\n        break;\n\n      case 4:\n        // Mélange\n        type_de_questions_disponibles = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([1, 2, 3]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([4, 5, 6]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([7, 8]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([9, 10]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([11, 12]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([13, 14])]; //this.nbQuestions = type_de_questions_disponibles.length;\n\n        break;\n    }\n\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaisonListes)(type_de_questions_disponibles, this.nbQuestions); // Tous les types de questions sont posées mais l'ordre diffère à chaque \"cycle\"\n    // let listeTypeDeQuestions = combinaisonListesSansChangerOrdre(type_de_questions_disponibles,this.nbQuestions) // Tous les types de questions sont posées --> à remettre comme ci dessus\n\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {\n      // nombre entier positif, entre 1 et 10, puis 10 et 100 puis ....100 000 et 1 000 000\n      let ent_pos = [];\n\n      for (let _i = 0; _i < 6; _i++) {\n        ent_pos.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10 ** _i + 1, 10 ** (_i + 1))))}$`,\n          puissance_inf: `$10^{${_i}}$`,\n          puissance_sup: `$10^{${_i + 1}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** _i))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** (_i + 1)))}$`\n        });\n      } // nombre décimal positif 1 et 10 000 avec 1,2,3 puis 4 décimales\n\n\n      let dec_pos = [];\n\n      for (let _i2 = 0; _i2 < 4; _i2++) {\n        dec_pos.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10000, 100000) / 10 ** (4 - _i2)))}$`,\n          puissance_inf: `$10^{${_i2}}$`,\n          puissance_sup: `$10^{${_i2 + 1}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** _i2))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** (_i2 + 1)))}$`\n        });\n      } // nombre décimal positif inférieur à 1, entre 0,1 et 1 puis entre 0,01 et 0,1 puis 0,001 et 0,0001\n\n\n      let dec_pos_inf_un = [];\n\n      for (let _i3 = 0; _i3 < 4; _i3++) {\n        dec_pos_inf_un.push({\n          val: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10 ** (4 - _i3 - 1) + 1, 10 ** (4 - _i3)) / 10000))}$`,\n          puissance_inf: `$10^{${-(_i3 + 1)}}$`,\n          puissance_sup: `$10^{${-_i3}}$`,\n          puissance_inf_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** -(_i3 + 1)))}$`,\n          puissance_sup_num: `$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texNombre)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(10 ** -_i3))}$`\n        });\n      }\n\n      switch (listeTypeDeQuestions[i]) {\n        case 1:\n          // nombre enier positif\n          texte = `${ent_pos[0].val}`;\n          texteCorr = `${ent_pos[0].puissance_inf} $\\\\leqslant$ ${ent_pos[0].val} $\\\\leqslant$ ${ent_pos[0].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[0].puissance_inf} = ${ent_pos[0].puissance_inf_num} et ${ent_pos[0].puissance_sup} = ${ent_pos[0].puissance_sup_num}`;\n          break;\n\n        case 2:\n          // nombre enier positif\n          texte = `${ent_pos[1].val}`;\n          texteCorr = `${ent_pos[1].puissance_inf} $\\\\leqslant$ ${ent_pos[1].val} $\\\\leqslant$ ${ent_pos[1].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[1].puissance_inf} = ${ent_pos[1].puissance_inf_num} et ${ent_pos[1].puissance_sup} = ${ent_pos[1].puissance_sup_num}`;\n          break;\n\n        case 3:\n          // nombre enier positif\n          texte = `${ent_pos[2].val}`;\n          texteCorr = `${ent_pos[2].puissance_inf} $\\\\leqslant$ ${ent_pos[2].val} $\\\\leqslant$ ${ent_pos[2].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[2].puissance_inf} = ${ent_pos[2].puissance_inf_num} et ${ent_pos[2].puissance_sup} = ${ent_pos[2].puissance_sup_num}`;\n          break;\n\n        case 4:\n          // nombre enier positif\n          texte = `${ent_pos[3].val}`;\n          texteCorr = `${ent_pos[3].puissance_inf} $\\\\leqslant$ ${ent_pos[3].val} $\\\\leqslant$ ${ent_pos[3].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[3].puissance_inf} = ${ent_pos[3].puissance_inf_num} et ${ent_pos[3].puissance_sup} = ${ent_pos[3].puissance_sup_num}`;\n          break;\n\n        case 5:\n          // nombre enier positif\n          texte = `${ent_pos[4].val}`;\n          texteCorr = `${ent_pos[4].puissance_inf} $\\\\leqslant$ ${ent_pos[4].val} $\\\\leqslant$ ${ent_pos[4].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[4].puissance_inf} = ${ent_pos[4].puissance_inf_num} et ${ent_pos[4].puissance_sup} = ${ent_pos[4].puissance_sup_num}`;\n          break;\n\n        case 6:\n          // nombre enier positif\n          texte = `${ent_pos[5].val}`;\n          texteCorr = `${ent_pos[5].puissance_inf} $\\\\leqslant$ ${ent_pos[5].val} $\\\\leqslant$ ${ent_pos[5].puissance_sup}`;\n          texteCorr += ` car ${ent_pos[5].puissance_inf} = ${ent_pos[5].puissance_inf_num} et ${ent_pos[5].puissance_sup} = ${ent_pos[5].puissance_sup_num}`;\n          break;\n\n        case 7:\n          // nombre décimal positif\n          texte = `${dec_pos[0].val}`;\n          texteCorr = `${dec_pos[0].puissance_inf} $\\\\leqslant$ ${dec_pos[0].val} $\\\\leqslant$ ${dec_pos[0].puissance_sup}`;\n          texteCorr += ` car ${dec_pos[0].puissance_inf} = ${dec_pos[0].puissance_inf_num} et ${dec_pos[0].puissance_sup} = ${dec_pos[0].puissance_sup_num}`;\n          break;\n\n        case 8:\n          // nombre décimal positif\n          texte = `${dec_pos[1].val}`;\n          texteCorr = `${dec_pos[1].puissance_inf} $\\\\leqslant$ ${dec_pos[1].val} $\\\\leqslant$ ${dec_pos[1].puissance_sup}`;\n          texteCorr += ` car ${dec_pos[1].puissance_inf} = ${dec_pos[1].puissance_inf_num} et ${dec_pos[1].puissance_sup} = ${dec_pos[1].puissance_sup_num}`;\n          break;\n\n        case 9:\n          // nombre décimal positif\n          texte = `${dec_pos[2].val}`;\n          texteCorr = `${dec_pos[2].puissance_inf} $\\\\leqslant$ ${dec_pos[2].val} $\\\\leqslant$ ${dec_pos[2].puissance_sup}`;\n          texteCorr += ` car ${dec_pos[2].puissance_inf} = ${dec_pos[2].puissance_inf_num} et ${dec_pos[2].puissance_sup} = ${dec_pos[2].puissance_sup_num}`;\n          break;\n\n        case 10:\n          // nombre décimal positif\n          texte = `${dec_pos[3].val}`;\n          texteCorr = `${dec_pos[3].puissance_inf} $\\\\leqslant$ ${dec_pos[3].val} $\\\\leqslant$ ${dec_pos[3].puissance_sup}`;\n          texteCorr += ` car ${dec_pos[3].puissance_inf} = ${dec_pos[3].puissance_inf_num} et ${dec_pos[3].puissance_sup} = ${dec_pos[3].puissance_sup_num}`;\n          break;\n\n        case 11:\n          // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[0].val}`;\n          texteCorr = `${dec_pos_inf_un[0].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[0].val} $\\\\leqslant$ ${dec_pos_inf_un[0].puissance_sup}`;\n          texteCorr += ` car ${dec_pos_inf_un[0].puissance_inf} = ${dec_pos_inf_un[0].puissance_inf_num} et ${dec_pos_inf_un[0].puissance_sup} = ${dec_pos_inf_un[0].puissance_sup_num}`;\n          break;\n\n        case 12:\n          // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[1].val}`;\n          texteCorr = `${dec_pos_inf_un[1].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[1].val} $\\\\leqslant$ ${dec_pos_inf_un[1].puissance_sup}`;\n          texteCorr += ` car ${dec_pos_inf_un[1].puissance_inf} = ${dec_pos_inf_un[1].puissance_inf_num} et ${dec_pos_inf_un[1].puissance_sup} = ${dec_pos_inf_un[1].puissance_sup_num}`;\n          break;\n\n        case 13:\n          // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[2].val}`;\n          texteCorr = `${dec_pos_inf_un[2].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[2].val} $\\\\leqslant$ ${dec_pos_inf_un[2].puissance_sup}`;\n          texteCorr += ` car ${dec_pos_inf_un[2].puissance_inf} = ${dec_pos_inf_un[2].puissance_inf_num} et ${dec_pos_inf_un[2].puissance_sup} = ${dec_pos_inf_un[2].puissance_sup_num}`;\n          break;\n\n        case 14:\n          // nombre décimal positif inferieur à 1\n          texte = `${dec_pos_inf_un[3].val}`;\n          texteCorr = `${dec_pos_inf_un[3].puissance_inf} $\\\\leqslant$ ${dec_pos_inf_un[3].val} $\\\\leqslant$ ${dec_pos_inf_un[3].puissance_sup}`;\n          texteCorr += ` car ${dec_pos_inf_un[3].puissance_inf} = ${dec_pos_inf_un[3].puissance_inf_num} et ${dec_pos_inf_un[3].puissance_sup} = ${dec_pos_inf_un[3].puissance_sup_num}`;\n          break;\n      }\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en créé une autre\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  };\n\n  this.besoinFormulaireNumerique = [\"Niveau de difficulté\", 4, \"1 : nombre entier positif\\n2 : nombre décimal positif\\n3 : nombre entier positif inférieur à un\\n4 : Mélange\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzRlLzRDMzAtMS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhhbGVhLy4vc3JjL2pzL2V4ZXJjaWNlcy80ZS80QzMwLTEuanM/YzAwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhlcmNpY2UgZnJvbSAnLi4vQ2xhc3NlRXhlcmNpY2UuanMnO1xuaW1wb3J0IHtsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSxyYW5kaW50LGNob2ljZSxjb21iaW5haXNvbkxpc3RlcyxjYWxjdWwsdGV4Tm9tYnJlfSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcblxuZXhwb3J0IGNvbnN0IHRpdHJlID0gJ0VuY2FkcmVyIGF2ZWMgZGVzIHB1aXNzYW5jZXMgZGUgMTAnXG5cbi8qKlxuICogRW5jYWRyZXIgcGFyIGRlcyBwdWlzc2FuY2VzIGRlIDEwXG4gKiA0QzMwLTFcbiAqIEBhdXRob3IgU8OpYmFzdGllbiBMb3phbm9cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVpc3NhbmNlc19lbmNhZHJlbWVudCgpIHtcbiAgRXhlcmNpY2UuY2FsbCh0aGlzKTsgLy8gSMOpcml0YWdlIGRlIGxhIGNsYXNzZSBFeGVyY2ljZSgpXG4gIHRoaXMuc3VwID0gNDtcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDY7XG4gIHRoaXMudGl0cmUgPSB0aXRyZTtcblxuICB0aGlzLmNvbnNpZ25lID0gYEVuY2FkcmVyIGxlcyBub21icmVzIHN1aXZhbnRzIHBhciBkZXV4IHB1aXNzYW5jZXMgZGUgMTAgZCdleHBvc2FudHMgY29uc8OpY3V0aWZzLmA7XG5cbiAgdGhpcy5uYkNvbHMgPSAxO1xuICB0aGlzLm5iQ29sc0NvcnIgPSAxO1xuICAvL3RoaXMubmJRdWVzdGlvbnNNb2RpZmlhYmxlID0gZmFsc2U7XG5cbiAgbGV0IHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzO1xuXG4gIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc3VwID0gTnVtYmVyKHRoaXMuc3VwKTsgLy8gYXR0ZW50aW9uIGxlIGZvcm11bGFpcmUgcmVudm9pZSB1biBzdHJpbmcsIG9uIGEgYmVzb2luIGQndW4gbnVtYmVyIHBvdXIgbGUgc3dpdGNoICFcblxuICAgIHN3aXRjaCAodGhpcy5zdXApIHtcbiAgICAgIGNhc2UgMTogLy8gbm9tYnJlIGVuaWVyIHBvc2l0aWZcbiAgICAgICAgdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMgPSBbMSwgMiwgMywgNCwgNSwgNl07XG4gICAgICAgIC8vdGhpcy5uYlF1ZXN0aW9ucyA9IHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzLmxlbmd0aDtcbiAgICAgICAgLy90aGlzLm5iUXVlc3Rpb25zID0gMztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI6IC8vIG5vbWJyZSBkw6ljaW1hbCBwb3NpdGlmXG4gICAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzID0gWzcsIDgsIDksIDEwXTtcbiAgICAgICAgLy90aGlzLm5iUXVlc3Rpb25zID0gdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMubGVuZ3RoO1xuICAgICAgICAvL3RoaXMubmJRdWVzdGlvbnMgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzogLy8gbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWYgaW5mw6lyaWV1ciDDoCAxXG4gICAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzID0gWzExLCAxMiwgMTMsIDE0XTtcbiAgICAgICAgLy90aGlzLm5iUXVlc3Rpb25zID0gdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMubGVuZ3RoO1xuICAgICAgICAvL3RoaXMubmJRdWVzdGlvbnMgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDogLy8gTcOpbGFuZ2VcbiAgICAgICAgdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMgPSBbXG4gICAgICAgICAgY2hvaWNlKFsxLCAyLCAzXSksXG4gICAgICAgICAgY2hvaWNlKFs0LCA1LCA2XSksXG4gICAgICAgICAgY2hvaWNlKFs3LCA4XSksXG4gICAgICAgICAgY2hvaWNlKFs5LCAxMF0pLFxuICAgICAgICAgIGNob2ljZShbMTEsIDEyXSksXG4gICAgICAgICAgY2hvaWNlKFsxMywgMTRdKSxcbiAgICAgICAgXTtcbiAgICAgICAgLy90aGlzLm5iUXVlc3Rpb25zID0gdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMubGVuZ3RoO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBsZXQgbGlzdGVUeXBlRGVRdWVzdGlvbnMgPSBjb21iaW5haXNvbkxpc3RlcyhcbiAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzLFxuICAgICAgdGhpcy5uYlF1ZXN0aW9uc1xuICAgICk7IC8vIFRvdXMgbGVzIHR5cGVzIGRlIHF1ZXN0aW9ucyBzb250IHBvc8OpZXMgbWFpcyBsJ29yZHJlIGRpZmbDqHJlIMOgIGNoYXF1ZSBcImN5Y2xlXCJcbiAgICAvLyBsZXQgbGlzdGVUeXBlRGVRdWVzdGlvbnMgPSBjb21iaW5haXNvbkxpc3Rlc1NhbnNDaGFuZ2VyT3JkcmUodHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXMsdGhpcy5uYlF1ZXN0aW9ucykgLy8gVG91cyBsZXMgdHlwZXMgZGUgcXVlc3Rpb25zIHNvbnQgcG9zw6llcyAtLT4gw6AgcmVtZXR0cmUgY29tbWUgY2kgZGVzc3VzXG5cbiAgICB0aGlzLmxpc3RlUXVlc3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9uc1xuICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucyA9IFtdOyAvLyBMaXN0ZSBkZSBxdWVzdGlvbnMgY29ycmlnw6llc1xuXG4gICAgZm9yIChcbiAgICAgIGxldCBpID0gMCwgdGV4dGUsIHRleHRlQ29yciwgY3B0ID0gMDtcbiAgICAgIGkgPCB0aGlzLm5iUXVlc3Rpb25zICYmIGNwdCA8IDUwO1xuXG4gICAgKSB7XG4gICAgICAvLyBub21icmUgZW50aWVyIHBvc2l0aWYsIGVudHJlIDEgZXQgMTAsIHB1aXMgMTAgZXQgMTAwIHB1aXMgLi4uLjEwMCAwMDAgZXQgMSAwMDAgMDAwXG4gICAgICBsZXQgZW50X3BvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgZW50X3Bvcy5wdXNoKHtcbiAgICAgICAgICB2YWw6IGAkJHt0ZXhOb21icmUoY2FsY3VsKHJhbmRpbnQoMTAgKiogaSArIDEsIDEwICoqIChpICsgMSkpKSl9JGAsXG4gICAgICAgICAgcHVpc3NhbmNlX2luZjogYCQxMF57JHtpfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2Vfc3VwOiBgJDEwXnske2kgKyAxfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2VfaW5mX251bTogYCQke3RleE5vbWJyZShjYWxjdWwoMTAgKiogaSkpfSRgLFxuICAgICAgICAgIHB1aXNzYW5jZV9zdXBfbnVtOiBgJCR7dGV4Tm9tYnJlKGNhbGN1bCgxMCAqKiAoaSArIDEpKSl9JGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAvLyBub21icmUgZMOpY2ltYWwgcG9zaXRpZiAxIGV0IDEwIDAwMCBhdmVjIDEsMiwzIHB1aXMgNCBkw6ljaW1hbGVzXG4gICAgICBsZXQgZGVjX3BvcyA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgZGVjX3Bvcy5wdXNoKHtcbiAgICAgICAgICB2YWw6IGAkJHt0ZXhOb21icmUoY2FsY3VsKHJhbmRpbnQoMTAwMDAsIDEwMDAwMCkgLyAxMCAqKiAoNCAtIGkpKSl9JGAsXG4gICAgICAgICAgcHVpc3NhbmNlX2luZjogYCQxMF57JHtpfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2Vfc3VwOiBgJDEwXnske2kgKyAxfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2VfaW5mX251bTogYCQke3RleE5vbWJyZShjYWxjdWwoMTAgKiogaSkpfSRgLFxuICAgICAgICAgIHB1aXNzYW5jZV9zdXBfbnVtOiBgJCR7dGV4Tm9tYnJlKGNhbGN1bCgxMCAqKiAoaSArIDEpKSl9JGAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWYgaW5mw6lyaWV1ciDDoCAxLCBlbnRyZSAwLDEgZXQgMSBwdWlzIGVudHJlIDAsMDEgZXQgMCwxIHB1aXMgMCwwMDEgZXQgMCwwMDAxXG4gICAgICBsZXQgZGVjX3Bvc19pbmZfdW4gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIGRlY19wb3NfaW5mX3VuLnB1c2goe1xuICAgICAgICAgIHZhbDogYCQke3RleE5vbWJyZShjYWxjdWwocmFuZGludCgxMCAqKiAoNCAtIGkgLSAxKSArIDEsIDEwICoqICg0IC0gaSkpIC8gMTAwMDApKX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2VfaW5mOiBgJDEwXnskey0oaSArIDEpfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2Vfc3VwOiBgJDEwXnskey1pfX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2VfaW5mX251bTogYCQke3RleE5vbWJyZShjYWxjdWwoMTAgKiogLShpICsgMSkpKX0kYCxcbiAgICAgICAgICBwdWlzc2FuY2Vfc3VwX251bTogYCQke3RleE5vbWJyZShjYWxjdWwoMTAgKiogLWkpKX0kYCxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAobGlzdGVUeXBlRGVRdWVzdGlvbnNbaV0pIHtcbiAgICAgICAgY2FzZSAxOiAvLyBub21icmUgZW5pZXIgcG9zaXRpZlxuICAgICAgICAgIHRleHRlID0gYCR7ZW50X3Bvc1swXS52YWx9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHtlbnRfcG9zWzBdLnB1aXNzYW5jZV9pbmZ9ICRcXFxcbGVxc2xhbnQkICR7ZW50X3Bvc1swXS52YWx9ICRcXFxcbGVxc2xhbnQkICR7ZW50X3Bvc1swXS5wdWlzc2FuY2Vfc3VwfWA7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGAgY2FyICR7ZW50X3Bvc1swXS5wdWlzc2FuY2VfaW5mfSA9ICR7ZW50X3Bvc1swXS5wdWlzc2FuY2VfaW5mX251bX0gZXQgJHtlbnRfcG9zWzBdLnB1aXNzYW5jZV9zdXB9ID0gJHtlbnRfcG9zWzBdLnB1aXNzYW5jZV9zdXBfbnVtfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogLy8gbm9tYnJlIGVuaWVyIHBvc2l0aWZcbiAgICAgICAgICB0ZXh0ZSA9IGAke2VudF9wb3NbMV0udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZW50X3Bvc1sxXS5wdWlzc2FuY2VfaW5mfSAkXFxcXGxlcXNsYW50JCAke2VudF9wb3NbMV0udmFsfSAkXFxcXGxlcXNsYW50JCAke2VudF9wb3NbMV0ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2VudF9wb3NbMV0ucHVpc3NhbmNlX2luZn0gPSAke2VudF9wb3NbMV0ucHVpc3NhbmNlX2luZl9udW19IGV0ICR7ZW50X3Bvc1sxXS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZW50X3Bvc1sxXS5wdWlzc2FuY2Vfc3VwX251bX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6IC8vIG5vbWJyZSBlbmllciBwb3NpdGlmXG4gICAgICAgICAgdGV4dGUgPSBgJHtlbnRfcG9zWzJdLnZhbH1gO1xuICAgICAgICAgIHRleHRlQ29yciA9IGAke2VudF9wb3NbMl0ucHVpc3NhbmNlX2luZn0gJFxcXFxsZXFzbGFudCQgJHtlbnRfcG9zWzJdLnZhbH0gJFxcXFxsZXFzbGFudCQgJHtlbnRfcG9zWzJdLnB1aXNzYW5jZV9zdXB9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCBjYXIgJHtlbnRfcG9zWzJdLnB1aXNzYW5jZV9pbmZ9ID0gJHtlbnRfcG9zWzJdLnB1aXNzYW5jZV9pbmZfbnVtfSBldCAke2VudF9wb3NbMl0ucHVpc3NhbmNlX3N1cH0gPSAke2VudF9wb3NbMl0ucHVpc3NhbmNlX3N1cF9udW19YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA0OiAvLyBub21icmUgZW5pZXIgcG9zaXRpZlxuICAgICAgICAgIHRleHRlID0gYCR7ZW50X3Bvc1szXS52YWx9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHtlbnRfcG9zWzNdLnB1aXNzYW5jZV9pbmZ9ICRcXFxcbGVxc2xhbnQkICR7ZW50X3Bvc1szXS52YWx9ICRcXFxcbGVxc2xhbnQkICR7ZW50X3Bvc1szXS5wdWlzc2FuY2Vfc3VwfWA7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGAgY2FyICR7ZW50X3Bvc1szXS5wdWlzc2FuY2VfaW5mfSA9ICR7ZW50X3Bvc1szXS5wdWlzc2FuY2VfaW5mX251bX0gZXQgJHtlbnRfcG9zWzNdLnB1aXNzYW5jZV9zdXB9ID0gJHtlbnRfcG9zWzNdLnB1aXNzYW5jZV9zdXBfbnVtfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgNTogLy8gbm9tYnJlIGVuaWVyIHBvc2l0aWZcbiAgICAgICAgICB0ZXh0ZSA9IGAke2VudF9wb3NbNF0udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZW50X3Bvc1s0XS5wdWlzc2FuY2VfaW5mfSAkXFxcXGxlcXNsYW50JCAke2VudF9wb3NbNF0udmFsfSAkXFxcXGxlcXNsYW50JCAke2VudF9wb3NbNF0ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2VudF9wb3NbNF0ucHVpc3NhbmNlX2luZn0gPSAke2VudF9wb3NbNF0ucHVpc3NhbmNlX2luZl9udW19IGV0ICR7ZW50X3Bvc1s0XS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZW50X3Bvc1s0XS5wdWlzc2FuY2Vfc3VwX251bX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6IC8vIG5vbWJyZSBlbmllciBwb3NpdGlmXG4gICAgICAgICAgdGV4dGUgPSBgJHtlbnRfcG9zWzVdLnZhbH1gO1xuICAgICAgICAgIHRleHRlQ29yciA9IGAke2VudF9wb3NbNV0ucHVpc3NhbmNlX2luZn0gJFxcXFxsZXFzbGFudCQgJHtlbnRfcG9zWzVdLnZhbH0gJFxcXFxsZXFzbGFudCQgJHtlbnRfcG9zWzVdLnB1aXNzYW5jZV9zdXB9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCBjYXIgJHtlbnRfcG9zWzVdLnB1aXNzYW5jZV9pbmZ9ID0gJHtlbnRfcG9zWzVdLnB1aXNzYW5jZV9pbmZfbnVtfSBldCAke2VudF9wb3NbNV0ucHVpc3NhbmNlX3N1cH0gPSAke2VudF9wb3NbNV0ucHVpc3NhbmNlX3N1cF9udW19YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSA3OiAvLyBub21icmUgZMOpY2ltYWwgcG9zaXRpZlxuICAgICAgICAgIHRleHRlID0gYCR7ZGVjX3Bvc1swXS52YWx9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHtkZWNfcG9zWzBdLnB1aXNzYW5jZV9pbmZ9ICRcXFxcbGVxc2xhbnQkICR7ZGVjX3Bvc1swXS52YWx9ICRcXFxcbGVxc2xhbnQkICR7ZGVjX3Bvc1swXS5wdWlzc2FuY2Vfc3VwfWA7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGAgY2FyICR7ZGVjX3Bvc1swXS5wdWlzc2FuY2VfaW5mfSA9ICR7ZGVjX3Bvc1swXS5wdWlzc2FuY2VfaW5mX251bX0gZXQgJHtkZWNfcG9zWzBdLnB1aXNzYW5jZV9zdXB9ID0gJHtkZWNfcG9zWzBdLnB1aXNzYW5jZV9zdXBfbnVtfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgODogLy8gbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWZcbiAgICAgICAgICB0ZXh0ZSA9IGAke2RlY19wb3NbMV0udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZGVjX3Bvc1sxXS5wdWlzc2FuY2VfaW5mfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NbMV0udmFsfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NbMV0ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2RlY19wb3NbMV0ucHVpc3NhbmNlX2luZn0gPSAke2RlY19wb3NbMV0ucHVpc3NhbmNlX2luZl9udW19IGV0ICR7ZGVjX3Bvc1sxXS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZGVjX3Bvc1sxXS5wdWlzc2FuY2Vfc3VwX251bX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDk6IC8vIG5vbWJyZSBkw6ljaW1hbCBwb3NpdGlmXG4gICAgICAgICAgdGV4dGUgPSBgJHtkZWNfcG9zWzJdLnZhbH1gO1xuICAgICAgICAgIHRleHRlQ29yciA9IGAke2RlY19wb3NbMl0ucHVpc3NhbmNlX2luZn0gJFxcXFxsZXFzbGFudCQgJHtkZWNfcG9zWzJdLnZhbH0gJFxcXFxsZXFzbGFudCQgJHtkZWNfcG9zWzJdLnB1aXNzYW5jZV9zdXB9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCBjYXIgJHtkZWNfcG9zWzJdLnB1aXNzYW5jZV9pbmZ9ID0gJHtkZWNfcG9zWzJdLnB1aXNzYW5jZV9pbmZfbnVtfSBldCAke2RlY19wb3NbMl0ucHVpc3NhbmNlX3N1cH0gPSAke2RlY19wb3NbMl0ucHVpc3NhbmNlX3N1cF9udW19YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMDogLy8gbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWZcbiAgICAgICAgICB0ZXh0ZSA9IGAke2RlY19wb3NbM10udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZGVjX3Bvc1szXS5wdWlzc2FuY2VfaW5mfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NbM10udmFsfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NbM10ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2RlY19wb3NbM10ucHVpc3NhbmNlX2luZn0gPSAke2RlY19wb3NbM10ucHVpc3NhbmNlX2luZl9udW19IGV0ICR7ZGVjX3Bvc1szXS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZGVjX3Bvc1szXS5wdWlzc2FuY2Vfc3VwX251bX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDExOiAvLyBub21icmUgZMOpY2ltYWwgcG9zaXRpZiBpbmZlcmlldXIgw6AgMVxuICAgICAgICAgIHRleHRlID0gYCR7ZGVjX3Bvc19pbmZfdW5bMF0udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZGVjX3Bvc19pbmZfdW5bMF0ucHVpc3NhbmNlX2luZn0gJFxcXFxsZXFzbGFudCQgJHtkZWNfcG9zX2luZl91blswXS52YWx9ICRcXFxcbGVxc2xhbnQkICR7ZGVjX3Bvc19pbmZfdW5bMF0ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2RlY19wb3NfaW5mX3VuWzBdLnB1aXNzYW5jZV9pbmZ9ID0gJHtkZWNfcG9zX2luZl91blswXS5wdWlzc2FuY2VfaW5mX251bX0gZXQgJHtkZWNfcG9zX2luZl91blswXS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZGVjX3Bvc19pbmZfdW5bMF0ucHVpc3NhbmNlX3N1cF9udW19YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAxMjogLy8gbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWYgaW5mZXJpZXVyIMOgIDFcbiAgICAgICAgICB0ZXh0ZSA9IGAke2RlY19wb3NfaW5mX3VuWzFdLnZhbH1gO1xuICAgICAgICAgIHRleHRlQ29yciA9IGAke2RlY19wb3NfaW5mX3VuWzFdLnB1aXNzYW5jZV9pbmZ9ICRcXFxcbGVxc2xhbnQkICR7ZGVjX3Bvc19pbmZfdW5bMV0udmFsfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NfaW5mX3VuWzFdLnB1aXNzYW5jZV9zdXB9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYCBjYXIgJHtkZWNfcG9zX2luZl91blsxXS5wdWlzc2FuY2VfaW5mfSA9ICR7ZGVjX3Bvc19pbmZfdW5bMV0ucHVpc3NhbmNlX2luZl9udW19IGV0ICR7ZGVjX3Bvc19pbmZfdW5bMV0ucHVpc3NhbmNlX3N1cH0gPSAke2RlY19wb3NfaW5mX3VuWzFdLnB1aXNzYW5jZV9zdXBfbnVtfWA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMTM6IC8vIG5vbWJyZSBkw6ljaW1hbCBwb3NpdGlmIGluZmVyaWV1ciDDoCAxXG4gICAgICAgICAgdGV4dGUgPSBgJHtkZWNfcG9zX2luZl91blsyXS52YWx9YDtcbiAgICAgICAgICB0ZXh0ZUNvcnIgPSBgJHtkZWNfcG9zX2luZl91blsyXS5wdWlzc2FuY2VfaW5mfSAkXFxcXGxlcXNsYW50JCAke2RlY19wb3NfaW5mX3VuWzJdLnZhbH0gJFxcXFxsZXFzbGFudCQgJHtkZWNfcG9zX2luZl91blsyXS5wdWlzc2FuY2Vfc3VwfWA7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGAgY2FyICR7ZGVjX3Bvc19pbmZfdW5bMl0ucHVpc3NhbmNlX2luZn0gPSAke2RlY19wb3NfaW5mX3VuWzJdLnB1aXNzYW5jZV9pbmZfbnVtfSBldCAke2RlY19wb3NfaW5mX3VuWzJdLnB1aXNzYW5jZV9zdXB9ID0gJHtkZWNfcG9zX2luZl91blsyXS5wdWlzc2FuY2Vfc3VwX251bX1gO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE0OiAvLyBub21icmUgZMOpY2ltYWwgcG9zaXRpZiBpbmZlcmlldXIgw6AgMVxuICAgICAgICAgIHRleHRlID0gYCR7ZGVjX3Bvc19pbmZfdW5bM10udmFsfWA7XG4gICAgICAgICAgdGV4dGVDb3JyID0gYCR7ZGVjX3Bvc19pbmZfdW5bM10ucHVpc3NhbmNlX2luZn0gJFxcXFxsZXFzbGFudCQgJHtkZWNfcG9zX2luZl91blszXS52YWx9ICRcXFxcbGVxc2xhbnQkICR7ZGVjX3Bvc19pbmZfdW5bM10ucHVpc3NhbmNlX3N1cH1gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgIGNhciAke2RlY19wb3NfaW5mX3VuWzNdLnB1aXNzYW5jZV9pbmZ9ID0gJHtkZWNfcG9zX2luZl91blszXS5wdWlzc2FuY2VfaW5mX251bX0gZXQgJHtkZWNfcG9zX2luZl91blszXS5wdWlzc2FuY2Vfc3VwfSA9ICR7ZGVjX3Bvc19pbmZfdW5bM10ucHVpc3NhbmNlX3N1cF9udW19YDtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmxpc3RlUXVlc3Rpb25zLmluZGV4T2YodGV4dGUpID09IC0xKSB7XG4gICAgICAgIC8vIFNpIGxhIHF1ZXN0aW9uIG4nYSBqYW1haXMgw6l0w6kgcG9zw6llLCBvbiBlbiBjcsOpw6kgdW5lIGF1dHJlXG4gICAgICAgIHRoaXMubGlzdGVRdWVzdGlvbnMucHVzaCh0ZXh0ZSk7XG4gICAgICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucy5wdXNoKHRleHRlQ29ycik7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICAgIGNwdCsrO1xuICAgIH1cbiAgICBsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSh0aGlzKTtcbiAgfTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlTnVtZXJpcXVlID0gW1xuICAgIFwiTml2ZWF1IGRlIGRpZmZpY3VsdMOpXCIsXG4gICAgNCxcbiAgICBcIjEgOiBub21icmUgZW50aWVyIHBvc2l0aWZcXG4yIDogbm9tYnJlIGTDqWNpbWFsIHBvc2l0aWZcXG4zIDogbm9tYnJlIGVudGllciBwb3NpdGlmIGluZsOpcmlldXIgw6AgdW5cXG40IDogTcOpbGFuZ2VcIixcbiAgXTtcbn1cblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBMUJBO0FBQ0E7QUE0QkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0RUE7QUFDQTtBQXVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/4e/4C30-1.js\n");

/***/ }),

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice() {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigneCorrection = '';\n  this.listeQuestions = [];\n  this.listeCorrections = [];\n  this.introduction = '';\n  this.contenu = '';\n  this.contenuCorrection = '';\n  this.nbQuestions = 10;\n  this.nbCols = 2;\n  this.nbColsCorr = 2;\n  this.spacing = 1;\n  this.spacingCorr = 1;\n  this.beamer = false;\n  this.besoinFormulaireNumerique = false; // Sinon this.besoinFormulaireNumerique = [texte,max,tooltip facultatif];\n\n  this.besoinFormulaireTexte = false; // Sinon this.besoinFormulaireTexte = [texte,tooltip];\n\n  this.besoinFormulaireCaseACocher = false; // Sinon this.besoinFormulaireCaseACocher = [texte];\n\n  this.consigneModifiable = true;\n  this.nbQuestionsModifiable = true;\n  this.nbColsModifiable = true;\n  this.nbColsCorrModifiable = true;\n  this.spacingModifiable = true;\n  this.spacingCorrModifiable = true;\n  this.correctionDetailleeDisponible = false;\n  this.correctionDetaillee = true;\n  this.video = '';\n  this.boutonAide = false;\n  this.tailleDiaporama = 50; // Taille en pixels pour le calcul chronométré\n  // this.boutonAide = modalTexteCourt(numeroExercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalTexteLong(numeroExercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalYoutube(numeroExercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.boutonAide = modalPdf(numeroExercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n\n  this.pasDeVersionLatex = false;\n  this.qcm = false; // Pour les exercices de type QCM : contient un tableau.\n\n  this.qcmDisponible = false; // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.modeQcm\n\n  this.modeQcm = false; // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.mg32Editable = false; // pas d'interface par défaut pour les figures MG32\n\n  this.nouvelleVersion = function (numeroExercice) {};\n\n  this.listePackages = []; // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  // this.typeExercice = \"MG32\";\n  // this.dimensionsDivMg32 = [500, 450];\n  // this.typeExercice = \"Scratch\"\n  // this.qcm=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGFsZWEvLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzP2RiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogIENsYXNzZSBwYXJlbnRlIGRlIHRvdXMgbGVzIGV4ZXJjaWNlc1xuICpcbiAqIEBBdXRldXIgUsOpbWkgQW5nb3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpY2UgKCkge1xuICAvLyBDbGFzc2UgcGFyZW50ZSBkZSB0b3VzIGxlcyBleGVyY2ljZXMgcXVpIHNlcm9udCBjcsOpw6lzXG4gIHRoaXMudGl0cmUgPSAnJ1xuICB0aGlzLmNvbnNpZ25lID0gJydcbiAgdGhpcy5jb25zaWduZUNvcnJlY3Rpb24gPSAnJ1xuICB0aGlzLmxpc3RlUXVlc3Rpb25zID0gW11cbiAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW11cbiAgdGhpcy5pbnRyb2R1Y3Rpb24gPSAnJ1xuICB0aGlzLmNvbnRlbnUgPSAnJ1xuICB0aGlzLmNvbnRlbnVDb3JyZWN0aW9uID0gJydcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDEwXG4gIHRoaXMubmJDb2xzID0gMlxuICB0aGlzLm5iQ29sc0NvcnIgPSAyXG4gIHRoaXMuc3BhY2luZyA9IDFcbiAgdGhpcy5zcGFjaW5nQ29yciA9IDFcbiAgdGhpcy5iZWFtZXIgPSBmYWxzZVxuXG4gIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IGZhbHNlIC8vIFNpbm9uIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IFt0ZXh0ZSxtYXgsdG9vbHRpcCBmYWN1bHRhdGlmXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlVGV4dGUgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVUZXh0ZSA9IFt0ZXh0ZSx0b29sdGlwXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlQ2FzZUFDb2NoZXIgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVDYXNlQUNvY2hlciA9IFt0ZXh0ZV07XG4gIHRoaXMuY29uc2lnbmVNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iUXVlc3Rpb25zTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5uYkNvbHNNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iQ29sc0NvcnJNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdDb3JyTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5jb3JyZWN0aW9uRGV0YWlsbGVlRGlzcG9uaWJsZSA9IGZhbHNlXG4gIHRoaXMuY29ycmVjdGlvbkRldGFpbGxlZSA9IHRydWVcbiAgdGhpcy52aWRlbyA9ICcnXG4gIHRoaXMuYm91dG9uQWlkZSA9IGZhbHNlXG4gIHRoaXMudGFpbGxlRGlhcG9yYW1hID0gNTAgLy8gVGFpbGxlIGVuIHBpeGVscyBwb3VyIGxlIGNhbGN1bCBjaHJvbm9tw6l0csOpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsVGV4dGVDb3VydChudW1lcm9FeGVyY2ljZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFRleHRlTG9uZyhudW1lcm9FeGVyY2ljZSx0aXRyZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFlvdXR1YmUobnVtZXJvRXhlcmNpY2UsaWRfeW91dHViZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlIC0gVmlkw6lvXCIsaWNvbmU9XCJ5b3V0dWJlXCIpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsUGRmKG51bWVyb0V4ZXJjaWNlLHVybF9wZGYsdGV4dGU9XCJBaWRlXCIsbGFiZWxfYm91dG9uPVwiQWlkZSAtIFBERlwiLGljb25lPVwiZmlsZSBwZGZcIilcbiAgLy8gdGhpcy52c3BhY2UgPSAtMSAvL0Fqb3V0ZSB1biBcXHZzcGFjZXstMWNtfSBhdmFudCBsJ8Opbm9uY8OpIGNlIHF1aSBwZXV0IMOqdHJlIHByYXRpcXVlIHBvdXIgZGVzIGV4ZXJjaWNlcyBhdmVjIGRlcyBmaWd1cmVzLlxuICB0aGlzLnBhc0RlVmVyc2lvbkxhdGV4ID0gZmFsc2VcbiAgdGhpcy5xY20gPSBmYWxzZSAvLyBQb3VyIGxlcyBleGVyY2ljZXMgZGUgdHlwZSBRQ00gOiBjb250aWVudCB1biB0YWJsZWF1LlxuICB0aGlzLnFjbURpc3BvbmlibGUgPSBmYWxzZSAvLyBQb3VyIGFqb3V0ZXIgdW5lIGNhc2Ugw6AgY29jaGVyIE1vZGUgUUNNIHF1aSBwZXJtZXQgZGUgY2hhbmdlciBsZSBzdGF0dXQgZGUgdGhpcy5tb2RlUWNtXG4gIHRoaXMubW9kZVFjbSA9IGZhbHNlIC8vIFBvdXIgY2hvaXNpciBsYSB2ZXJzaW9uIFFDTSBvdSBsYSB2ZXJzaW9uIGNsYXNzaXF1ZSAoZmFsc2UgPSB2ZXJzaW9uIGNsYXNzaXF1ZSlcblxuICB0aGlzLm1nMzJFZGl0YWJsZSA9IGZhbHNlIC8vIHBhcyBkJ2ludGVyZmFjZSBwYXIgZMOpZmF1dCBwb3VyIGxlcyBmaWd1cmVzIE1HMzJcbiAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAobnVtZXJvRXhlcmNpY2UpIHt9XG4gIHRoaXMubGlzdGVQYWNrYWdlcyA9IFtdIC8vIHN0cmluZyBvdSBsaXN0ZSBkZSBzdHJpbmcgYXZlYyBsZSBub20gZGVzIHBhY2thZ2VzIHNww6ljaWZpcXVlcyDDoCBham91dGVyIGRhbnMgbGUgcHLDqWFtYnVsZVxuICAvLyB0aGlzLnR5cGVFeGVyY2ljZSA9IFwiTUczMlwiO1xuICAvLyB0aGlzLmRpbWVuc2lvbnNEaXZNZzMyID0gWzUwMCwgNDUwXTtcbiAgLy8gdGhpcy50eXBlRXhlcmNpY2UgPSBcIlNjcmF0Y2hcIlxuICAvLyB0aGlzLnFjbT1bXCJRdWVscyBzb250IGxlcyBub21icmVzIHBhaXJzID9cIixbNywxMiwzNCwyNSwxOF0sWzAsMSwxLDAsMV1dID0+W1wiTGEgcXVlc3Rpb25cIixbbGVzIHLDqXBvbnNlc10sW2Jvbm5lPTEgZXQgbWF1dmFpc2U9MF1dXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/ClasseExercice.js\n");

/***/ })

}]);