/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6G43_js"],{

/***/ "./src/js/exercices/6e/6G43.js":
/*!*************************************!*\
  !*** ./src/js/exercices/6e/6G43.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ DenombrerCubes)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var _modules_3d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/3d.js */ \"./src/js/modules/3d.js\");\n\n\n\n\nconst titre = 'Représentation de solides';\n/**\n* Compter des cubes\n* @auteur Erwan DUPLESSY\n* 6G43\n* mars 2021\n* Source : http://cache.media.education.gouv.fr/file/Geometrie_et_espace/47/1/RA16_C4_MATH_geo_espace_flash_567471.pdf\n* Compter des cubes dans un empilement de cubes\n*/\n\nfunction DenombrerCubes() {\n  \"use strict\";\n\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this);\n  this.titre = titre;\n  this.nbQuestions = 3; // Ici le nombre de questions\n\n  this.nbQuestionsModifiable = true; // Active le formulaire nombre de questions\n\n  this.nbCols = 1; // Le nombre de colonnes dans l'énoncé LaTeX\n\n  this.nbColsCorr = 1; // Le nombre de colonne pour la correction LaTeX\n\n  this.pasDeVersionLatex = false; // mettre à true si on ne veut pas de l'exercice dans le générateur LaTeX\n\n  this.pas_de_version_HMTL = false; // mettre à true si on ne veut pas de l'exercice en ligne\n\n  this.sup = 1; // A décommenter : valeur par défaut d'un premier paramètre\n\n  this.sup2 = 1; // A décommenter : valeur par défaut d'un deuxième paramètre\n  // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // tableau contenant la liste des questions \n\n    this.listeCorrections = [];\n    let type_de_questions_disponibles = []; // tableau à compléter par valeurs possibles des types de questions\n\n    switch (parseInt(this.sup)) {\n      case 1:\n        type_de_questions_disponibles = [1];\n\n      case 2:\n        type_de_questions_disponibles = [2];\n\n      case 3:\n        type_de_questions_disponibles = [1, 2];\n    }\n\n    function empilementCubes(long, larg, hmax) {\n      let tabHauteurs = new Array(larg);\n\n      for (let i = 0; i < larg; i++) {\n        tabHauteurs[i] = new Array(long);\n      } //premiere ligne\n\n\n      for (let i = 0; i < larg; i++) {\n        tabHauteurs[i][0] = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 1);\n      } // deuxième ligne et suivantes\n\n\n      for (let i = 0; i < larg; i++) {\n        for (let j = 1; j < long; j++) {\n          tabHauteurs[i][j] = Math.min(tabHauteurs[i][j - 1] + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0, 2), hmax);\n        }\n      } //Vérification Dernière Ligne : ne pas être vide.\n\n\n      for (let i = 0; i < larg; i++) {\n        tabHauteurs[i][long - 1] = Math.max(1, tabHauteurs[i][long - 1]);\n      } // Ajoute les cubes dans un tableau une dimension\n      // il faut trier les cubes : x décroissant puis y décroissant, puis z croissant\n\n\n      let lstCoordonneesCubes = [];\n\n      for (let i = larg - 1; i > -1; i = i - 1) {\n        for (let j = long - 1; j > -1; j = j - 1) {\n          for (let k = 0; k < tabHauteurs[i][j]; k++) lstCoordonneesCubes.push([i, j, k]);\n        }\n      }\n\n      return lstCoordonneesCubes;\n    }\n\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaisonListes)(type_de_questions_disponibles, this.nbQuestions);\n    let objets_enonce, objets_correction, params_enonce, params_correction;\n    let longueur = 2 + parseInt(this.sup2); // longueur de l'empilement\n\n    let largeur = longueur; // largeur de l'empilement\n\n    let hauteur = longueur; // hauteur de l'empilement\n\n    for (let q = 0, texte, texteCorr, cpt = 0; q < this.nbQuestions && cpt < 50;) {\n      objets_enonce = []; // on initialise le tableau des objets Mathalea2d de l'enoncé\n\n      objets_correction = []; // Idem pour la correction\n\n      texte = `Un empilement de cubes est représenté ci-dessous. <br>`; // Nous utilisons souvent cette variable pour construire le texte de la question.\n\n      texteCorr = ``; // Idem pour le texte de la correction.      \n\n      let L, alpha, beta, cosa, cosb, sina, sinb; // début de l'exercice\n\n      switch (listeTypeDeQuestions[q]) {\n        case 1:\n          texte += `Combien de petits cubes contient cet empilement de cubes ? <br>`;\n          L = empilementCubes(longueur, largeur, hauteur); // crée un empilement aléatoire\n          //dessin 1\n\n          alpha = 30; // choix de la projection\n\n          beta = -25; // choix de la projection\n\n          objets_enonce = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_enonce.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          cosa = Math.cos(alpha * Math.PI / 180);\n          sina = Math.sin(alpha * Math.PI / 180);\n          cosb = Math.cos(beta * Math.PI / 180);\n          sinb = Math.sin(beta * Math.PI / 180);\n          params_enonce = {\n            xmin: -sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: cosa * longueur + 0.5,\n            ymax: -sina * sinb * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_enonce, objets_enonce) + \" \"; //dessin 2\n\n          alpha = 15;\n          beta = -30;\n          objets_enonce = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_enonce.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          params_enonce = {\n            xmin: -sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: cosa * longueur + 0.5,\n            ymax: -sina * sinb * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_enonce, objets_enonce) + \" <br>\"; // correction :\n\n          texteCorr += \"On peut représenter l'empilement par tranches : <br>\";\n          alpha = 30;\n          beta = -25;\n          cosa = Math.cos(alpha * Math.PI / 180);\n          sina = Math.sin(alpha * Math.PI / 180);\n          cosb = Math.cos(beta * Math.PI / 180);\n          sinb = Math.sin(beta * Math.PI / 180);\n          params_correction = {\n            xmin: -3 * sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: 3 * cosa * longueur + 0.5,\n            ymax: -sina * sinb * 3 * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          objets_correction = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_correction.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(3 * L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          texteCorr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_correction, objets_correction) + \"<br>\";\n          texteCorr += `Il y a au total ${L.length} cubes.`;\n          break;\n\n        case 2:\n          texte += `Combien de petits cubes manque-t-il pour reconstruire un grand cube de côté ${longueur} ? <br>`;\n          L = empilementCubes(longueur, largeur, hauteur); //dessin 1\n\n          alpha = 30;\n          beta = -25;\n          objets_enonce = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_enonce.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          cosa = Math.cos(alpha * Math.PI / 180);\n          sina = Math.sin(alpha * Math.PI / 180);\n          cosb = Math.cos(beta * Math.PI / 180);\n          sinb = Math.sin(beta * Math.PI / 180);\n          params_enonce = {\n            xmin: -sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: cosa * longueur + 0.5,\n            ymax: -sina * sinb * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_enonce, objets_enonce) + \" \"; //dessin 2\n\n          alpha = 15;\n          beta = -30;\n          objets_enonce = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_enonce.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          cosa = Math.cos(alpha * Math.PI / 180);\n          sina = Math.sin(alpha * Math.PI / 180);\n          cosb = Math.cos(beta * Math.PI / 180);\n          sinb = Math.sin(beta * Math.PI / 180);\n          params_enonce = {\n            xmin: -sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: cosa * longueur + 0.5,\n            ymax: -sina * sinb * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_enonce, objets_enonce) + \"<br>\"; // correction :\n\n          texteCorr += \"On peut, par exemple, représenter l'empilement par tranches : <br>\";\n          alpha = 30;\n          beta = -25;\n          cosa = Math.cos(alpha * Math.PI / 180);\n          sina = Math.sin(alpha * Math.PI / 180);\n          cosb = Math.cos(beta * Math.PI / 180);\n          sinb = Math.sin(beta * Math.PI / 180);\n          params_correction = {\n            xmin: -3 * sina * largeur - 0.5,\n            ymin: -0.5,\n            xmax: 3 * cosa * longueur + 0.5,\n            ymax: -sina * sinb * 3 * longueur - cosa * sinb * largeur + cosb * hauteur + 0.5,\n            pixelsParCm: 20,\n            scale: 1,\n            mainlevee: false\n          };\n          objets_correction = [];\n\n          for (let i = 0; i < L.length; i++) {\n            objets_correction.push((0,_modules_3d_js__WEBPACK_IMPORTED_MODULE_3__.cube)(3 * L[i][0], L[i][1], L[i][2], alpha, beta, {}));\n          }\n\n          texteCorr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_correction, objets_correction) + \"<br>\";\n          texteCorr += `Il y a au total $${L.length}$ cubes. On en veut $${longueur}\\\\times ${largeur} \\\\times ${hauteur} = ${longueur * largeur * hauteur}$. <br>`;\n          texteCorr += `Il manque $${longueur * largeur * hauteur - L.length}$ cubes.`;\n          break;\n      }\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        q++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this); // On envoie l'exercice à la fonction de mise en page\n  }; // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants\n  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.\n  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.\n\n\n  this.besoinFormulaireNumerique = ['Type de questions', 3, `1 : compter les cubes\\n2 : compter les cubes manquants\\n3 un mélange des deux`];\n  this.besoin_formulaire2_numerique = [\"Taille de l'empilement\", 5, `3 \\n4 \\n5 \\n6 \\n7`]; // this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]\n} // Fin de l'exercice.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZHNDMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvNmUvNkc0My5qcz8yNTA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQge2xpc3RlUXVlc3Rpb25zVG9Db250ZW51LGNvbWJpbmFpc29uTGlzdGVzLCByYW5kaW50fSBmcm9tICcuLi8uLi9tb2R1bGVzL291dGlscy5qcydcbmltcG9ydCB7bWF0aGFsZWEyZH0gZnJvbSAnLi4vLi4vbW9kdWxlcy8yZC5qcydcbmltcG9ydCB7Y3ViZX0gZnJvbSBcIi4uLy4uL21vZHVsZXMvM2QuanNcIlxuXG5leHBvcnQgY29uc3QgdGl0cmUgPSAnUmVwcsOpc2VudGF0aW9uIGRlIHNvbGlkZXMnXG5cbi8qKlxuKiBDb21wdGVyIGRlcyBjdWJlc1xuKiBAYXV0ZXVyIEVyd2FuIERVUExFU1NZXG4qIDZHNDNcbiogbWFycyAyMDIxXG4qIFNvdXJjZSA6IGh0dHA6Ly9jYWNoZS5tZWRpYS5lZHVjYXRpb24uZ291di5mci9maWxlL0dlb21ldHJpZV9ldF9lc3BhY2UvNDcvMS9SQTE2X0M0X01BVEhfZ2VvX2VzcGFjZV9mbGFzaF81Njc0NzEucGRmXG4qIENvbXB0ZXIgZGVzIGN1YmVzIGRhbnMgdW4gZW1waWxlbWVudCBkZSBjdWJlc1xuKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGVub21icmVyQ3ViZXMoKSB7XG4gIFwidXNlIHN0cmljdFwiXG4gIEV4ZXJjaWNlLmNhbGwodGhpcylcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLm5iUXVlc3Rpb25zID0gMzsgLy8gSWNpIGxlIG5vbWJyZSBkZSBxdWVzdGlvbnNcbiAgdGhpcy5uYlF1ZXN0aW9uc01vZGlmaWFibGU9dHJ1ZSAvLyBBY3RpdmUgbGUgZm9ybXVsYWlyZSBub21icmUgZGUgcXVlc3Rpb25zXG4gIHRoaXMubmJDb2xzID0gMTsgLy8gTGUgbm9tYnJlIGRlIGNvbG9ubmVzIGRhbnMgbCfDqW5vbmPDqSBMYVRlWFxuICB0aGlzLm5iQ29sc0NvcnIgPSAxOy8vIExlIG5vbWJyZSBkZSBjb2xvbm5lIHBvdXIgbGEgY29ycmVjdGlvbiBMYVRlWFxuICB0aGlzLnBhc0RlVmVyc2lvbkxhdGV4PWZhbHNlIC8vIG1ldHRyZSDDoCB0cnVlIHNpIG9uIG5lIHZldXQgcGFzIGRlIGwnZXhlcmNpY2UgZGFucyBsZSBnw6luw6lyYXRldXIgTGFUZVhcbiAgdGhpcy5wYXNfZGVfdmVyc2lvbl9ITVRMPWZhbHNlIC8vIG1ldHRyZSDDoCB0cnVlIHNpIG9uIG5lIHZldXQgcGFzIGRlIGwnZXhlcmNpY2UgZW4gbGlnbmVcbiAgdGhpcy5zdXAgPSAxOyAvLyBBIGTDqWNvbW1lbnRlciA6IHZhbGV1ciBwYXIgZMOpZmF1dCBkJ3VuIHByZW1pZXIgcGFyYW3DqHRyZVxuICB0aGlzLnN1cDIgPSAxOyAvLyBBIGTDqWNvbW1lbnRlciA6IHZhbGV1ciBwYXIgZMOpZmF1dCBkJ3VuIGRldXhpw6htZSBwYXJhbcOodHJlXG4gIC8vIGMnZXN0IGljaSBxdWUgY29tbWVuY2UgbGUgY29kZSBkZSBsJ2V4ZXJjaWNlIGNldHRlIGZvbmN0aW9uIGNyw6llIHVuZSBjb3BpZSBkZSBsJ2V4ZXJjaWNlXG4gIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkgeyAgXG4gICAgdGhpcy5saXN0ZVF1ZXN0aW9ucyA9IFtdIC8vIHRhYmxlYXUgY29udGVuYW50IGxhIGxpc3RlIGRlcyBxdWVzdGlvbnMgXG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW107XG4gICAgbGV0IHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzPVtdIC8vIHRhYmxlYXUgw6AgY29tcGzDqXRlciBwYXIgdmFsZXVycyBwb3NzaWJsZXMgZGVzIHR5cGVzIGRlIHF1ZXN0aW9uc1xuICAgIHN3aXRjaCAocGFyc2VJbnQodGhpcy5zdXApKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzID1bMV1cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgdHlwZV9kZV9xdWVzdGlvbnNfZGlzcG9uaWJsZXM9WzJdXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzPVsxLDJdXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZW1waWxlbWVudEN1YmVzKGxvbmcsIGxhcmcsIGhtYXgpIHtcbiAgICAgIGxldCB0YWJIYXV0ZXVycyA9IG5ldyBBcnJheShsYXJnKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGFyZzsgaSsrKSB7XG4gICAgICAgIHRhYkhhdXRldXJzW2ldID0gbmV3IEFycmF5KGxvbmcpO1xuICAgICAgfSAgICAgICAgXG4gICAgICAvL3ByZW1pZXJlIGxpZ25lXG4gICAgICBmb3IgKGxldCBpID0gMCA7IGkgPCBsYXJnOyBpKyspIHtcbiAgICAgICAgdGFiSGF1dGV1cnNbaV1bMF0gPSByYW5kaW50KDAsMSk7ICAgXG4gICAgICB9XG4gICAgICAvLyBkZXV4acOobWUgbGlnbmUgZXQgc3VpdmFudGVzXG4gICAgICBmb3IgKGxldCBpID0gMCA7IGk8bGFyZyA7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMSA7IGo8bG9uZyA7IGorKykge1xuICAgICAgICAgIHRhYkhhdXRldXJzW2ldW2pdID0gTWF0aC5taW4odGFiSGF1dGV1cnNbaV1bai0xXSArIHJhbmRpbnQoMCwyKSwgaG1heCk7XG4gICAgICAgIH0gXG4gICAgICB9XG4gICAgICAvL1bDqXJpZmljYXRpb24gRGVybmnDqHJlIExpZ25lIDogbmUgcGFzIMOqdHJlIHZpZGUuXG4gICAgICBmb3IgKGxldCBpID0gMCA7IGk8bGFyZyA7IGkrKykge1xuICAgICAgICB0YWJIYXV0ZXVyc1tpXVtsb25nLTFdID0gTWF0aC5tYXgoMSwgdGFiSGF1dGV1cnNbaV1bbG9uZy0xXSk7XG4gICAgICB9XG4gICAgICAvLyBBam91dGUgbGVzIGN1YmVzIGRhbnMgdW4gdGFibGVhdSB1bmUgZGltZW5zaW9uXG4gICAgICAvLyBpbCBmYXV0IHRyaWVyIGxlcyBjdWJlcyA6IHggZMOpY3JvaXNzYW50IHB1aXMgeSBkw6ljcm9pc3NhbnQsIHB1aXMgeiBjcm9pc3NhbnRcbiAgICAgIGxldCBsc3RDb29yZG9ubmVlc0N1YmVzID0gW107XG4gICAgICBmb3IgKGxldCBpID0gbGFyZy0xIDsgaT4tMTsgaT1pLTEpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IGxvbmctMSA7IGo+LTE7IGo9ai0xKSB7XG4gICAgICAgICAgZm9yIChsZXQgaz0wIDsgayA8IHRhYkhhdXRldXJzW2ldW2pdOyBrKyspXG4gICAgICAgICAgbHN0Q29vcmRvbm5lZXNDdWJlcy5wdXNoKFtpLGosa10pXG4gICAgICAgIH0gICAgICAgICAgXG4gICAgICB9XG4gICAgcmV0dXJuIGxzdENvb3Jkb25uZWVzQ3ViZXM7XG4gICAgfSBcbiAgICBcbiAgICBsZXQgbGlzdGVUeXBlRGVRdWVzdGlvbnMgPSBjb21iaW5haXNvbkxpc3Rlcyh0eXBlX2RlX3F1ZXN0aW9uc19kaXNwb25pYmxlcywgdGhpcy5uYlF1ZXN0aW9ucylcbiAgICBsZXQgb2JqZXRzX2Vub25jZSxvYmpldHNfY29ycmVjdGlvbixwYXJhbXNfZW5vbmNlLHBhcmFtc19jb3JyZWN0aW9uIDtcbiAgICBsZXQgbG9uZ3VldXIgPSAyICsgcGFyc2VJbnQodGhpcy5zdXAyKTsgLy8gbG9uZ3VldXIgZGUgbCdlbXBpbGVtZW50XG4gICAgbGV0IGxhcmdldXIgPSBsb25ndWV1cjsgLy8gbGFyZ2V1ciBkZSBsJ2VtcGlsZW1lbnRcbiAgICBsZXQgaGF1dGV1ciA9IGxvbmd1ZXVyOyAvLyBoYXV0ZXVyIGRlIGwnZW1waWxlbWVudFxuXG4gICAgZm9yIChsZXQgcSA9IDAsIHRleHRlLCB0ZXh0ZUNvcnIsIGNwdCA9IDA7IHEgPCB0aGlzLm5iUXVlc3Rpb25zICYmIGNwdCA8IDUwOykge1xuICAgICAgb2JqZXRzX2Vub25jZSA9IFtdIC8vIG9uIGluaXRpYWxpc2UgbGUgdGFibGVhdSBkZXMgb2JqZXRzIE1hdGhhbGVhMmQgZGUgbCdlbm9uY8OpXG4gICAgICBvYmpldHNfY29ycmVjdGlvbiA9IFtdIC8vIElkZW0gcG91ciBsYSBjb3JyZWN0aW9uXG5cbiAgICAgIHRleHRlID0gYFVuIGVtcGlsZW1lbnQgZGUgY3ViZXMgZXN0IHJlcHLDqXNlbnTDqSBjaS1kZXNzb3VzLiA8YnI+YDsgLy8gTm91cyB1dGlsaXNvbnMgc291dmVudCBjZXR0ZSB2YXJpYWJsZSBwb3VyIGNvbnN0cnVpcmUgbGUgdGV4dGUgZGUgbGEgcXVlc3Rpb24uXG4gICAgICB0ZXh0ZUNvcnIgPSBgYDsgLy8gSWRlbSBwb3VyIGxlIHRleHRlIGRlIGxhIGNvcnJlY3Rpb24uICAgICAgXG5cbiAgICAgIGxldCBMLCBhbHBoYSwgYmV0YSwgY29zYSwgY29zYiwgc2luYSwgc2luYjtcblxuICAgICAgLy8gZMOpYnV0IGRlIGwnZXhlcmNpY2VcbiAgICAgIHN3aXRjaCAobGlzdGVUeXBlRGVRdWVzdGlvbnNbcV0pIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIHRleHRlICs9IGBDb21iaWVuIGRlIHBldGl0cyBjdWJlcyBjb250aWVudCBjZXQgZW1waWxlbWVudCBkZSBjdWJlcyA/IDxicj5gXG4gICAgICAgICAgTCA9IGVtcGlsZW1lbnRDdWJlcyhsb25ndWV1ciwgbGFyZ2V1ciwgaGF1dGV1cik7IC8vIGNyw6llIHVuIGVtcGlsZW1lbnQgYWzDqWF0b2lyZVxuICAgICAgICAgIC8vZGVzc2luIDFcbiAgICAgICAgICBhbHBoYSA9IDMwOyAvLyBjaG9peCBkZSBsYSBwcm9qZWN0aW9uXG4gICAgICAgICAgYmV0YSA9IC0yNTsgLy8gY2hvaXggZGUgbGEgcHJvamVjdGlvblxuICAgICAgICAgIG9iamV0c19lbm9uY2UgPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICBvYmpldHNfZW5vbmNlLnB1c2goY3ViZShMW2ldWzBdLCBMW2ldWzFdLCBMW2ldWzJdLCBhbHBoYSwgYmV0YSx7fSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb3NhID0gTWF0aC5jb3MoYWxwaGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIHNpbmEgPSBNYXRoLnNpbihhbHBoYSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgY29zYiA9IE1hdGguY29zKGJldGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIHNpbmIgPSBNYXRoLnNpbihiZXRhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBwYXJhbXNfZW5vbmNlID0ge1xuICAgICAgICAgICAgeG1pbjotc2luYSpsYXJnZXVyIC0gMC41LCBcbiAgICAgICAgICAgIHltaW46IC0wLjUsIFxuICAgICAgICAgICAgeG1heDogY29zYSpsb25ndWV1ciArIDAuNSwgXG4gICAgICAgICAgICB5bWF4OiAtc2luYSpzaW5iKmxvbmd1ZXVyIC0gY29zYSpzaW5iKmxhcmdldXIgKyBjb3NiKmhhdXRldXIgKyAwLjUsIFxuICAgICAgICAgICAgcGl4ZWxzUGFyQ206IDIwLCBcbiAgICAgICAgICAgIHNjYWxlOiAxLCBcbiAgICAgICAgICAgIG1haW5sZXZlZTogZmFsc2V9IDsgICAgICAgXG4gICAgICAgICAgdGV4dGUgKz0gbWF0aGFsZWEyZChwYXJhbXNfZW5vbmNlLCBvYmpldHNfZW5vbmNlKSArIFwiIFwiOyBcbiAgICAgICAgICAvL2Rlc3NpbiAyXG4gICAgICAgICAgYWxwaGEgPSAxNTtcbiAgICAgICAgICBiZXRhID0gLTMwO1xuICAgICAgICAgIG9iamV0c19lbm9uY2UgPSBbXSA7ICAgICAgICAgIFxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgIG9iamV0c19lbm9uY2UucHVzaChjdWJlKExbaV1bMF0sIExbaV1bMV0sIExbaV1bMl0sYWxwaGEsYmV0YSx7fSkpO1xuICAgICAgICAgIH0gIFxuICAgICAgICAgIHBhcmFtc19lbm9uY2UgPSB7IFxuICAgICAgICAgICAgeG1pbjotc2luYSpsYXJnZXVyLTAuNSwgXG4gICAgICAgICAgICB5bWluOiAtMC41LCBcbiAgICAgICAgICAgIHhtYXg6IGNvc2EqbG9uZ3VldXIgKyAwLjUsIFxuICAgICAgICAgICAgeW1heDogLXNpbmEqc2luYipsb25ndWV1ciAtIGNvc2Eqc2luYipsYXJnZXVyICsgY29zYipoYXV0ZXVyICsgMC41LCBcbiAgICAgICAgICAgIHBpeGVsc1BhckNtOiAyMCwgXG4gICAgICAgICAgICBzY2FsZTogMSwgXG4gICAgICAgICAgICBtYWlubGV2ZWU6IGZhbHNlfSA7ICAgICAgIFxuICAgICAgICAgIHRleHRlICs9IG1hdGhhbGVhMmQocGFyYW1zX2Vub25jZSwgb2JqZXRzX2Vub25jZSkgKyBcIiA8YnI+XCI7XG4gICAgICAgICAgLy8gY29ycmVjdGlvbiA6XG4gICAgICAgICAgdGV4dGVDb3JyICs9IFwiT24gcGV1dCByZXByw6lzZW50ZXIgbCdlbXBpbGVtZW50IHBhciB0cmFuY2hlcyA6IDxicj5cIjtcbiAgICAgICAgICBhbHBoYSA9MzA7XG4gICAgICAgICAgYmV0YSA9IC0yNTtcbiAgICAgICAgICBjb3NhID0gTWF0aC5jb3MoYWxwaGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIHNpbmEgPSBNYXRoLnNpbihhbHBoYSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgY29zYiA9IE1hdGguY29zKGJldGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIHNpbmIgPSBNYXRoLnNpbihiZXRhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBwYXJhbXNfY29ycmVjdGlvbiA9IHsgXG4gICAgICAgICAgICB4bWluOi0zKnNpbmEqbGFyZ2V1ciAtIDAuNSwgXG4gICAgICAgICAgICB5bWluOiAtMC41LCBcbiAgICAgICAgICAgIHhtYXg6IDMqY29zYSpsb25ndWV1ciArIDAuNSwgXG4gICAgICAgICAgICB5bWF4OiAtc2luYSpzaW5iKjMqbG9uZ3VldXIgLSBjb3NhKnNpbmIqbGFyZ2V1ciArIGNvc2IqaGF1dGV1ciArIDAuNSwgXG4gICAgICAgICAgICBwaXhlbHNQYXJDbTogMjAsIFxuICAgICAgICAgICAgc2NhbGU6IDEsIFxuICAgICAgICAgICAgbWFpbmxldmVlOiBmYWxzZX07XG4gICAgICAgICAgb2JqZXRzX2NvcnJlY3Rpb24gPSBbXTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgb2JqZXRzX2NvcnJlY3Rpb24ucHVzaChjdWJlKDMqTFtpXVswXSwgTFtpXVsxXSwgTFtpXVsyXSwgYWxwaGEsIGJldGEsIHt9KSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRleHRlQ29yciArPSBtYXRoYWxlYTJkKHBhcmFtc19jb3JyZWN0aW9uLCBvYmpldHNfY29ycmVjdGlvbikgKyBcIjxicj5cIjsgICBcbiAgICAgICAgICB0ZXh0ZUNvcnIgKz0gYElsIHkgYSBhdSB0b3RhbCAke0wubGVuZ3RofSBjdWJlcy5gOyAgICAgXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICB0ZXh0ZSArPSBgQ29tYmllbiBkZSBwZXRpdHMgY3ViZXMgbWFucXVlLXQtaWwgcG91ciByZWNvbnN0cnVpcmUgdW4gZ3JhbmQgY3ViZSBkZSBjw7R0w6kgJHtsb25ndWV1cn0gPyA8YnI+YDtcbiAgICAgICAgICBMID0gZW1waWxlbWVudEN1YmVzKGxvbmd1ZXVyLCBsYXJnZXVyLGhhdXRldXIpO1xuICAgICAgICAgIC8vZGVzc2luIDFcbiAgICAgICAgICBhbHBoYSA9MzA7XG4gICAgICAgICAgYmV0YSA9IC0yNTtcbiAgICAgICAgICBvYmpldHNfZW5vbmNlID0gW107XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgb2JqZXRzX2Vub25jZS5wdXNoKGN1YmUoTFtpXVswXSwgTFtpXVsxXSwgTFtpXVsyXSwgYWxwaGEsIGJldGEsIHt9KSk7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgY29zYSA9IE1hdGguY29zKGFscGhhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBzaW5hID0gTWF0aC5zaW4oYWxwaGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIGNvc2IgPSBNYXRoLmNvcyhiZXRhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBzaW5iID0gTWF0aC5zaW4oYmV0YSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgcGFyYW1zX2Vub25jZSA9IHsgXG4gICAgICAgICAgICB4bWluOi1zaW5hKmxhcmdldXIgLSAwLjUsIFxuICAgICAgICAgICAgeW1pbjogLTAuNSwgXG4gICAgICAgICAgICB4bWF4OiBjb3NhKmxvbmd1ZXVyICsgMC41LCBcbiAgICAgICAgICAgIHltYXg6IC1zaW5hKnNpbmIqbG9uZ3VldXIgLSBjb3NhKnNpbmIqbGFyZ2V1ciArIGNvc2IqaGF1dGV1ciArIDAuNSwgXG4gICAgICAgICAgICBwaXhlbHNQYXJDbTogMjAsIFxuICAgICAgICAgICAgc2NhbGU6IDEsIFxuICAgICAgICAgICAgbWFpbmxldmVlOiBmYWxzZX0gOyAgICAgICBcbiAgICAgICAgICB0ZXh0ZSArPSBtYXRoYWxlYTJkKHBhcmFtc19lbm9uY2UsIG9iamV0c19lbm9uY2UpICsgXCIgXCI7XG4gICAgICAgICAgLy9kZXNzaW4gMlxuICAgICAgICAgIGFscGhhID0xNTtcbiAgICAgICAgICBiZXRhID0gLTMwO1xuICAgICAgICAgIG9iamV0c19lbm9uY2UgPSBbXSA7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgb2JqZXRzX2Vub25jZS5wdXNoKGN1YmUoTFtpXVswXSwgTFtpXVsxXSwgTFtpXVsyXSwgYWxwaGEsIGJldGEsIHt9KSk7XG4gICAgICAgICAgfSAgXG4gICAgICAgICAgY29zYSA9IE1hdGguY29zKGFscGhhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBzaW5hID0gTWF0aC5zaW4oYWxwaGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIGNvc2IgPSBNYXRoLmNvcyhiZXRhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBzaW5iID0gTWF0aC5zaW4oYmV0YSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgcGFyYW1zX2Vub25jZSA9IHsgXG4gICAgICAgICAgICB4bWluOi1zaW5hKmxhcmdldXIgLSAwLjUsIFxuICAgICAgICAgICAgeW1pbjogLTAuNSwgXG4gICAgICAgICAgICB4bWF4OiBjb3NhKmxvbmd1ZXVyICsgMC41LCBcbiAgICAgICAgICAgIHltYXg6IC1zaW5hKnNpbmIqbG9uZ3VldXIgLSBjb3NhKnNpbmIqbGFyZ2V1ciArIGNvc2IqaGF1dGV1ciArIDAuNSwgXG4gICAgICAgICAgICBwaXhlbHNQYXJDbTogMjAsIFxuICAgICAgICAgICAgc2NhbGU6IDEsIFxuICAgICAgICAgICAgbWFpbmxldmVlOiBmYWxzZX0gOyAgICAgICBcbiAgICAgICAgICB0ZXh0ZSArPSBtYXRoYWxlYTJkKHBhcmFtc19lbm9uY2UsIG9iamV0c19lbm9uY2UpICsgXCI8YnI+XCI7XG4gICAgICAgICAgLy8gY29ycmVjdGlvbiA6XG4gICAgICAgICAgdGV4dGVDb3JyICs9IFwiT24gcGV1dCwgcGFyIGV4ZW1wbGUsIHJlcHLDqXNlbnRlciBsJ2VtcGlsZW1lbnQgcGFyIHRyYW5jaGVzIDogPGJyPlwiO1xuICAgICAgICAgIGFscGhhID0zMDtcbiAgICAgICAgICBiZXRhID0gLTI1O1xuICAgICAgICAgIGNvc2EgPSBNYXRoLmNvcyhhbHBoYSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgc2luYSA9IE1hdGguc2luKGFscGhhKk1hdGguUEkvMTgwKTtcbiAgICAgICAgICBjb3NiID0gTWF0aC5jb3MoYmV0YSpNYXRoLlBJLzE4MCk7XG4gICAgICAgICAgc2luYiA9IE1hdGguc2luKGJldGEqTWF0aC5QSS8xODApO1xuICAgICAgICAgIHBhcmFtc19jb3JyZWN0aW9uID0geyBcbiAgICAgICAgICAgIHhtaW46LTMqc2luYSpsYXJnZXVyIC0gMC41LCBcbiAgICAgICAgICAgIHltaW46IC0wLjUsIFxuICAgICAgICAgICAgeG1heDogMypjb3NhKmxvbmd1ZXVyICsgMC41LCBcbiAgICAgICAgICAgIHltYXg6IC1zaW5hKnNpbmIqMypsb25ndWV1ciAtIGNvc2Eqc2luYipsYXJnZXVyICsgY29zYipoYXV0ZXVyICsgMC41LCBcbiAgICAgICAgICAgIHBpeGVsc1BhckNtOiAyMCwgXG4gICAgICAgICAgICBzY2FsZTogMSwgXG4gICAgICAgICAgICBtYWlubGV2ZWU6IGZhbHNlfTtcbiAgICAgICAgICBvYmpldHNfY29ycmVjdGlvbiA9IFtdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBvYmpldHNfY29ycmVjdGlvbi5wdXNoKGN1YmUoMypMW2ldWzBdLCBMW2ldWzFdLCBMW2ldWzJdLCBhbHBoYSwgYmV0YSwge30pKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGV4dGVDb3JyICs9IG1hdGhhbGVhMmQocGFyYW1zX2NvcnJlY3Rpb24sIG9iamV0c19jb3JyZWN0aW9uKSsgXCI8YnI+XCI7ICAgXG4gICAgICAgICAgdGV4dGVDb3JyICs9IGBJbCB5IGEgYXUgdG90YWwgJCR7TC5sZW5ndGh9JCBjdWJlcy4gT24gZW4gdmV1dCAkJHtsb25ndWV1cn1cXFxcdGltZXMgJHtsYXJnZXVyfSBcXFxcdGltZXMgJHtoYXV0ZXVyfSA9ICR7bG9uZ3VldXIqbGFyZ2V1cipoYXV0ZXVyfSQuIDxicj5gO1xuICAgICAgICAgIHRleHRlQ29yciArPSBgSWwgbWFucXVlICQke2xvbmd1ZXVyKmxhcmdldXIqaGF1dGV1ci1MLmxlbmd0aH0kIGN1YmVzLmAgIDsgICAgIFxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubGlzdGVRdWVzdGlvbnMuaW5kZXhPZih0ZXh0ZSkgPT0gLTEpIHtcbiAgICAgICAgLy8gU2kgbGEgcXVlc3Rpb24gbidhIGphbWFpcyDDqXTDqSBwb3PDqWUsIG9uIGxhIHN0b2NrZSBkYW5zIGxhIGxpc3RlIGRlcyBxdWVzdGlvbnNcbiAgICAgICAgdGhpcy5saXN0ZVF1ZXN0aW9ucy5wdXNoKHRleHRlKTtcbiAgICAgICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zLnB1c2godGV4dGVDb3JyKTtcbiAgICAgICAgcSsrO1xuICAgICAgICB9XG4gICAgICAgIGNwdCsrO1xuICAgICAgfVxuICAgICAgbGlzdGVRdWVzdGlvbnNUb0NvbnRlbnUodGhpcyk7IC8vIE9uIGVudm9pZSBsJ2V4ZXJjaWNlIMOgIGxhIGZvbmN0aW9uIGRlIG1pc2UgZW4gcGFnZVxuICAgIH07XG4gIC8vIFNpIGxlcyB2YXJpYWJsZXMgc3VpdmFudGVzIHNvbnQgZMOpZmluaWVzLCBlbGxlcyBwcm92b3F1ZW50IGwnYWZmaWNoYWdlIGRlcyBmb3JtdWxhaXJlcyBkZXMgcGFyYW3DqHRyZXMgY29ycmVzcG9uZGFudHNcbiAgLy8gSWwgcGV1dmVudCDDqnRyZSBkZSAzIHR5cGVzIDogX251bWVyaXF1ZSwgX2Nhc2VfYV9jb2NoZXIgb3UgX3RleHRlLlxuICAvLyBJbCBzb250IGFzc29jacOpcyByZXNwZWN0aXZlbWVudCBhdXggcGFyYW3DqHRyZXMgc3VwLCBzdXAyIGV0IHN1cDMuXG4gIFxuICB0aGlzLmJlc29pbkZvcm11bGFpcmVOdW1lcmlxdWUgPSBbJ1R5cGUgZGUgcXVlc3Rpb25zJywgMywgYDEgOiBjb21wdGVyIGxlcyBjdWJlc1xcbjIgOiBjb21wdGVyIGxlcyBjdWJlcyBtYW5xdWFudHNcXG4zIHVuIG3DqWxhbmdlIGRlcyBkZXV4YF1cbiAgdGhpcy5iZXNvaW5fZm9ybXVsYWlyZTJfbnVtZXJpcXVlID0gW1wiVGFpbGxlIGRlIGwnZW1waWxlbWVudFwiLDUsYDMgXFxuNCBcXG41IFxcbjYgXFxuN2BdO1xuICAvLyB0aGlzLmJlc29pbl9mb3JtdWxhaXJlM19jYXNlX2FfY29jaGVyID1bJ2ZpZ3VyZSDDoCBtYWluIGxldsOpZScsdHJ1ZV1cbiAgXG4gIH0gLy8gRmluIGRlIGwnZXhlcmNpY2UuXG4gICJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbElBO0FBQ0E7QUFtSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6G43.js\n");

/***/ })

}]);