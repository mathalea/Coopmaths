/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e__Transformations_js"],{

/***/ "./src/js/exercices/6e/_Transformations.js":
/*!*************************************************!*\
  !*** ./src/js/exercices/6e/_Transformations.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Transformations)\n/* harmony export */ });\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\n\n/**\n * Transformations : trouvers un point numéroté par une des transformations du plan. Fonction générale utilisée sur tous les niveaux\n * @Auteur Jean-Claude Lhote\n * Pas de version LaTeX\n */\nfunction Transformations() {\n  \"use strict\";\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_1__.default.call(this); // Héritage de la classe Exercice()\n\n  // this.titre = \"Trouver l'image d'un point par une transformation du plan\";\n  this.consigne = \"\";\n  this.nb_questions = 1;\n  this.nb_questions_modifiable = false;\n  this.nb_cols = 1;\n  this.nb_cols_corr = 1;\n  // this.sup = 1; // 1 pour les 6ème, 2 pour les 5èmes, 3 pour les 4èmes, et 4 pour les 3èmes.\n  sortie_html ? (this.spacing_corr = 2.5) : (this.spacing_corr = 1.5);\n  this.nouvelle_version = function (numero_de_l_exercice) {\n      let M=[],N=[],pointM,pointN\n      let O=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)(0,0,'O','below')\n    let d1=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.droiteParPointEtPente)(O,1) \n    let d3=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.droiteHorizontaleParPoint)(O)\n    let d2=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.droiteParPointEtPente)(O,-1)\n    let d4=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.droiteVerticaleParPoint)(O)\n    d1.isVisible=true\n    d2.isVisible=true\n    d3.isVisible=true\n    d4.isVisible=true\n    d1.epaisseur=2\n    d2.epaisseur=2\n    d3.epaisseur=2\n    d4.epaisseur=2\n    d1.color='green'\n    d2.color='green'\n    d3.color='green'\n    d4.color='green'\n    d1.opacite=0.5\n    d2.opacite=0.5\n    d3.opacite=0.5\n    d4.opacite=0.5\n      let objets_enonce = []\n      let objets_correction = []\n      for (let i=0;i<10;i++){\n        for (let j=0;j<10;j++){\n          objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)(j-4,i-4)))\n          objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)(j-4,i-4)))\n          objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.texteParPosition)(j+10*i,j-4.2,i-4.2,'milieu','gray',0.8,\"middle\",false))\n          objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.texteParPosition)(j+10*i,j-4.2,i-4.2,'milieu','gray',0.8,\"middle\",false))\n        }\n      }\n    this.liste_questions = [];\n    this.liste_corrections = []; // Liste de questions corrigées\n    let antecedents = [0, 0, 0],\n      images = [0, 0, 0],\n      k = [1, 1, 1],\n      k1,\n      k2,\n      xO = 4,\n      yO = 4,\n      xu,\n      yu,\n      punto_reseau; // k : rapports d'homothéties, (xO,yO) point de rencontre des droites et centre, les composantes du vecteur de translation : (xu,yu)\n\n    let n = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];\n    let texte = ``,\n      texte_corr = ``;\n    let punto = [[]];\n    let transformation = parseInt(this.sup) - 1;\n    let liste_type_de_questions = [\n      [1, 2, 3, 4],\n      [1, 2, 3, 4, 7],\n      [1, 2, 3, 4, 7, 8],\n      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\n    ];\n    let choix_transformation = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.combinaison_listes)(\n      liste_type_de_questions[transformation],\n      3\n    );\n    xu = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-3, 3);\n    if (xu == 0)\n      yu = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-3, 3, [0]);\n\n    // pas de vecteur nul de translation.\n    else\n      yu = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-3, 3);\n    for (let j = 0; j < 3; j++) {\n      if (choix_transformation[j] == 10) {\n        k[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choice)([2, 4]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1, 1, [0]); // rapport d'homothétie < 1 ( 0.5 ou 0.25 )\n        k2 = k[j];\n      } else if (choix_transformation[j] == 9) {\n        k[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choice)([1, 2, 3]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1, 1, [0]); // rapport d'homothétie >=1 (1,2 ou 3)\n        k1 = k[j];\n      }\n      antecedents[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(0, 99);\n      punto[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.image_point_par_transformation)(\n        choix_transformation[j],\n        [antecedents[j] % 10, Math.floor(antecedents[j] / 10)],\n        [xO, yO],\n        [xu, yu],\n        k[j]\n      );\n      images[j] = punto[j][0] + punto[j][1] * 10;\n      // Limitation des points invariants\n      if (choix_transformation[j] == 1 && images[j] % 11 == 0)\n        punto[j][0] = -1; // Point impossible sur (d1) pour sa symétrie\n      if (choix_transformation[j] == 3 && Math.floor(images[j] / 10 == 4))\n        punto[j][0] = -1; // Point impossible sur (d3) pour sa symétrie\n      if (choix_transformation[j] == 4 && images[j] % 10 == 4)\n        punto[j][0] = -1; // Point impossible sur  (d4) pour sa symétrie\n      if ((choix_transformation[j] == 5 || choix_transformation[j] == 5) &&\n        antecedents[j] == 44)\n        punto[j][0] = -1; // point O impossible pour rotation\n      if (choix_transformation[j] == 10 && antecedents[j] == 44)\n        punto[j][0] = -1; // point O impossible par homothétie de rapport 1/k2\n\n      // pour éviter les points en dehors des clous dans homothétie de rapport 1/k2\n      if (punto[j][0] - Math.floor(punto[j][0]) == 0 &&\n        punto[j][1] - Math.floor(punto[j][1]) == 0)\n        punto_reseau = true;\n      else\n        punto_reseau = false;\n      // On vérifie que l'image est bien un point du réseau sinon, on change.\n      while (punto[j][0] < 0 ||\n        punto[j][0] > 9 ||\n        punto[j][1] < 0 ||\n        punto[j][1] > 9 ||\n        punto_reseau == false) {\n        if (choix_transformation[j] == 10) {\n          k[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choice)([2, 4]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1, 1, [0]); // rapport d'homothétie < 1 ( 0.5 ou 0.25 )\n          k2 = k[j];\n        } else if (choix_transformation[j] == 9) {\n          k[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.choice)([1, 2, 3]) * (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1, 1, [0]); // rapport d'homothétie >=1 (1,2 ou 3)\n          k1 = k[j];\n        }\n        antecedents[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(0, 99);\n        punto[j] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.image_point_par_transformation)(\n          choix_transformation[j],\n          [antecedents[j] % 10, Math.floor(antecedents[j] / 10)],\n          [xO, yO],\n          [xu, yu],\n          k[j]\n        );\n        images[j] = punto[j][0] + punto[j][1] * 10;\n        // Limitation des points invariants\n        if (choix_transformation[j] == 1 && images[j] % 11 == 0)\n          punto[j][0] = -1; // Point impossible sur (d1) pour sa symétrie\n        if (choix_transformation[j] == 3 && Math.floor(images[j] / 10 == 4))\n          punto[j][0] = -1; // Point impossible sur (d3) pour sa symétrie\n        if (choix_transformation[j] == 4 && images[j] % 10 == 4)\n          punto[j][0] = -1; // Point impossible sur  (d4) pour sa symétrie\n        if ((choix_transformation[j] == 5 || choix_transformation[j] == 5) &&\n          antecedents[j] == 44)\n          punto[j][0] = -1; // point O impossible pour rotation\n        if (choix_transformation[j] == 10 && antecedents[j] == 44)\n          punto[j][0] = -1; // point O impossible par homothétie de rapport 1/k2\n\n\n        // pour éviter les points en dehors des clous dans homothétie de rapport 1/k2\n        if (punto[j][0] - Math.floor(punto[j][0]) == 0 &&\n          punto[j][1] - Math.floor(punto[j][1]) == 0)\n          punto_reseau = true;\n        else\n          punto_reseau = false;\n      }\n      N[j]=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)(punto[j][0]-4,punto[j][1]-4)\n      M[j]=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)(antecedents[j] % 10-4,Math.floor(antecedents[j] / 10-4))\n    }\n    // n[i] est un tableau contenant -1 pour la transformation d'indice i si elle n'est pas utilisée, et contenant le numéro du point concerné si la transformation i est utilisée pour ce point.\n    // Je l'utilise pour faire apparaître la correction liée au point et à la transformation.\n    for (let j = 0; j < 3; j++) {\n      n[choix_transformation[j] - 1] = antecedents[j];\n    }\n    for (let i = 0; i < 3; i++) {\n      switch (choix_transformation[i]) {\n        case 1:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_1)$.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_1)$ est le point ${images[i]}.<br>`;\n            objets_enonce.push(d1,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_1)',4.5,4.2,'green',15,1,\"\"))\n            objets_correction.push(d1,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_1)',3.5,3,'green',15,1,\"\"),\n            (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],N[i],'purple'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('X','red',M[i],(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),N[i]))\n          break;\n\n        case 2:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_2)$.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_2)$ est le point ${images[i]}.<br>`;\n            objets_enonce.push(d2,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_2)',4.3,-3.7,'green',15,1,\"\"))\n            objets_correction.push(d2,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_2)',4.3,-3.7,'green',15,1,\"\"),\n            (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],N[i],'cyan'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('|||','red',M[i],(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),N[i]))\n          break;\n\n        case 3:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_3)$.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_3)$ est le point ${images[i]}.<br>`;\n            objets_enonce.push(d3,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_3)',-4.2,0.5,'green',15,1,\"\"))\n            objets_correction.push(d3,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_3)',-4.2,0.5,'green',15,1,\"\"),\n            (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],N[i],'brown'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('/','red',M[i],(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),N[i]))\n          break;\n\n        case 4:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro du symétrique du point ${antecedents[i]} par rapport à la droite $(d_4)$.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Le symétrique du point ${antecedents[i]} par rapport à $(d_4)$ est le point ${images[i]}.<br>`;\n            objets_enonce.push(d4,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_4)',0.2,4.5,'green',15,1,\"\"))\n            objets_correction.push(d4,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.latexParCoordonnees)('(d_4)',0.2,4.5,'green',15,1,\"\"),\n            (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],N[i],'yellow'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.milieu)(M[i],N[i]),N[i]))\n          break;\n\n        case 5:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de  l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens anti-horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n           break;\n\n        case 6:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de  l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 90° dans le sens horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n           break;\n\n        case 7:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la symétrie de centre O.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la symétrie de centre O est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('O','red',M[i],O,O,N[i]))\n        break;\n\n        case 11:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens anti-horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n          break;\n\n        case 12:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 60° dans le sens horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n          break;\n\n        case 13:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens anti-horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n          break;\n\n        case 14:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens horaire.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la rotation de centre O et d'angle 120° dans le sens horaire est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.codeSegments)('||','red',M[i],O,O,N[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.afficheMesureAngle)(M[i],O,N[i]))\n           break;\n\n        case 8:\n          pointM=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.point)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1,2,[M[i].x,0]),(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.randint)(-1,2,[M[i].y,0]),'M','below')\n          pointN=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.translation)(pointM,(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.vecteur)(xu,yu),'N','below')\n           texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par la translation qui transforme M en N.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par la translation qui transforme M en N est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],pointM,pointN),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(pointM,pointN))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],pointM,pointN),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(pointM,pointN),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.vecteur)(M[i],N[i]).representant(M[i]),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.vecteur)(M[i],N[i]).representant(pointM))\n       break;\n\n        case 9:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport ${k1}.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport ${k1} est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'orange'))\n         break;\n\n        case 10:\n          texte +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` Donner le numéro de l'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_fraction_reduite)(\n              1,\n              k2\n            )}$.<br>`;\n          texte_corr +=\n            (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.num_alpha)(i) +\n            ` L'image du point ${antecedents[i]} par l'homothétie de centre O et de rapport $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.tex_fraction_reduite)(\n              1,\n              k2\n            )}$ est le point ${images[i]}.<br>`;\n            objets_enonce.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O))\n            objets_correction.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.tracePoint)(M[i],N[i],O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.labelPoint)(O),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(M[i],O,'blue'),(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.segment)(N[i],O,'orange'))\n         break;\n      }\n    }\n    texte+='<br>'+(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.mathalea2d)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:0.8,optionsTikz:['every node/.style={scale=0.6}'],mainlevee:false},objets_enonce)\n    texte_corr+='<br>'+(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_0__.mathalea2d)({xmin:-4.5,ymin:-4.5,xmax:5.3,ymax:5.3,pixelsParCm:40,scale:0.8,optionsTikz:['every node/.style={scale=0.6}'],mainlevee:false},objets_correction)\n      this.liste_questions.push(texte);\n      this.liste_corrections.push(texte_corr);\n      (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_2__.liste_de_question_to_contenu_sans_numero)(this);\n   \n  };\n  // this.besoin_formulaire_numerique = ['Transformations',5, '1 : Symétries axiales\\n 2 : Symétries centrales\\n 3 : Rotations\\n 4 : Translations\\n 5 : Homothéties\\n'];\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/6e/_Transformations.js?");

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