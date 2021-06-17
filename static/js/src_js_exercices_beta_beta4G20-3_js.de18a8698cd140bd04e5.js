/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_beta_beta4G20-3_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice() {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigneCorrection = '';\n  this.listeQuestions = [];\n  this.listeCorrections = [];\n  this.introduction = '';\n  this.contenu = '';\n  this.contenuCorrection = '';\n  this.nbQuestions = 10;\n  this.nbCols = 2;\n  this.nbColsCorr = 2;\n  this.spacing = 1;\n  this.spacingCorr = 1;\n  this.beamer = false;\n  this.besoinFormulaireNumerique = false; // Sinon this.besoinFormulaireNumerique = [texte,max,tooltip facultatif];\n\n  this.besoinFormulaireTexte = false; // Sinon this.besoinFormulaireTexte = [texte,tooltip];\n\n  this.besoinFormulaireCaseACocher = false; // Sinon this.besoinFormulaireCaseACocher = [texte];\n\n  this.consigneModifiable = true;\n  this.nbQuestionsModifiable = true;\n  this.nbColsModifiable = true;\n  this.nbColsCorrModifiable = true;\n  this.spacingModifiable = true;\n  this.spacingCorrModifiable = true;\n  this.correctionDetailleeDisponible = false;\n  this.correctionDetaillee = true;\n  this.video = '';\n  this.boutonAide = false;\n  this.tailleDiaporama = 50; // Taille en pixels pour le calcul chronométré\n  // this.boutonAide = modalTexteCourt(numeroExercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalTexteLong(numeroExercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.boutonAide = modalYoutube(numeroExercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.boutonAide = modalPdf(numeroExercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n\n  this.pasDeVersionLatex = false;\n  this.qcm = false; // Pour les exercices de type QCM : contient un tableau.\n\n  this.qcmDisponible = false; // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.modeQcm\n\n  this.modeQcm = false; // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.mg32Editable = false; // pas d'interface par défaut pour les figures MG32\n\n  this.nouvelleVersion = function (numeroExercice) {};\n\n  this.listePackages = []; // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  // this.typeExercice = \"MG32\";\n  // this.dimensionsDivMg32 = [500, 450];\n  // this.typeExercice = \"Scratch\"\n  // this.qcm=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWF0aGFsZWEvLi9zcmMvanMvZXhlcmNpY2VzL0NsYXNzZUV4ZXJjaWNlLmpzP2RiNDAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKlxuICogIENsYXNzZSBwYXJlbnRlIGRlIHRvdXMgbGVzIGV4ZXJjaWNlc1xuICpcbiAqIEBBdXRldXIgUsOpbWkgQW5nb3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpY2UgKCkge1xuICAvLyBDbGFzc2UgcGFyZW50ZSBkZSB0b3VzIGxlcyBleGVyY2ljZXMgcXVpIHNlcm9udCBjcsOpw6lzXG4gIHRoaXMudGl0cmUgPSAnJ1xuICB0aGlzLmNvbnNpZ25lID0gJydcbiAgdGhpcy5jb25zaWduZUNvcnJlY3Rpb24gPSAnJ1xuICB0aGlzLmxpc3RlUXVlc3Rpb25zID0gW11cbiAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW11cbiAgdGhpcy5pbnRyb2R1Y3Rpb24gPSAnJ1xuICB0aGlzLmNvbnRlbnUgPSAnJ1xuICB0aGlzLmNvbnRlbnVDb3JyZWN0aW9uID0gJydcbiAgdGhpcy5uYlF1ZXN0aW9ucyA9IDEwXG4gIHRoaXMubmJDb2xzID0gMlxuICB0aGlzLm5iQ29sc0NvcnIgPSAyXG4gIHRoaXMuc3BhY2luZyA9IDFcbiAgdGhpcy5zcGFjaW5nQ29yciA9IDFcbiAgdGhpcy5iZWFtZXIgPSBmYWxzZVxuXG4gIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IGZhbHNlIC8vIFNpbm9uIHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IFt0ZXh0ZSxtYXgsdG9vbHRpcCBmYWN1bHRhdGlmXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlVGV4dGUgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVUZXh0ZSA9IFt0ZXh0ZSx0b29sdGlwXTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlQ2FzZUFDb2NoZXIgPSBmYWxzZSAvLyBTaW5vbiB0aGlzLmJlc29pbkZvcm11bGFpcmVDYXNlQUNvY2hlciA9IFt0ZXh0ZV07XG4gIHRoaXMuY29uc2lnbmVNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iUXVlc3Rpb25zTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5uYkNvbHNNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLm5iQ29sc0NvcnJNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdNb2RpZmlhYmxlID0gdHJ1ZVxuICB0aGlzLnNwYWNpbmdDb3JyTW9kaWZpYWJsZSA9IHRydWVcbiAgdGhpcy5jb3JyZWN0aW9uRGV0YWlsbGVlRGlzcG9uaWJsZSA9IGZhbHNlXG4gIHRoaXMuY29ycmVjdGlvbkRldGFpbGxlZSA9IHRydWVcbiAgdGhpcy52aWRlbyA9ICcnXG4gIHRoaXMuYm91dG9uQWlkZSA9IGZhbHNlXG4gIHRoaXMudGFpbGxlRGlhcG9yYW1hID0gNTAgLy8gVGFpbGxlIGVuIHBpeGVscyBwb3VyIGxlIGNhbGN1bCBjaHJvbm9tw6l0csOpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsVGV4dGVDb3VydChudW1lcm9FeGVyY2ljZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFRleHRlTG9uZyhudW1lcm9FeGVyY2ljZSx0aXRyZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlXCIsaWNvbmU9XCJpbmZvIGNpcmNsZVwiKVxuICAvLyB0aGlzLmJvdXRvbkFpZGUgPSBtb2RhbFlvdXR1YmUobnVtZXJvRXhlcmNpY2UsaWRfeW91dHViZSx0ZXh0ZSxsYWJlbF9ib3V0b249XCJBaWRlIC0gVmlkw6lvXCIsaWNvbmU9XCJ5b3V0dWJlXCIpXG4gIC8vIHRoaXMuYm91dG9uQWlkZSA9IG1vZGFsUGRmKG51bWVyb0V4ZXJjaWNlLHVybF9wZGYsdGV4dGU9XCJBaWRlXCIsbGFiZWxfYm91dG9uPVwiQWlkZSAtIFBERlwiLGljb25lPVwiZmlsZSBwZGZcIilcbiAgLy8gdGhpcy52c3BhY2UgPSAtMSAvL0Fqb3V0ZSB1biBcXHZzcGFjZXstMWNtfSBhdmFudCBsJ8Opbm9uY8OpIGNlIHF1aSBwZXV0IMOqdHJlIHByYXRpcXVlIHBvdXIgZGVzIGV4ZXJjaWNlcyBhdmVjIGRlcyBmaWd1cmVzLlxuICB0aGlzLnBhc0RlVmVyc2lvbkxhdGV4ID0gZmFsc2VcbiAgdGhpcy5xY20gPSBmYWxzZSAvLyBQb3VyIGxlcyBleGVyY2ljZXMgZGUgdHlwZSBRQ00gOiBjb250aWVudCB1biB0YWJsZWF1LlxuICB0aGlzLnFjbURpc3BvbmlibGUgPSBmYWxzZSAvLyBQb3VyIGFqb3V0ZXIgdW5lIGNhc2Ugw6AgY29jaGVyIE1vZGUgUUNNIHF1aSBwZXJtZXQgZGUgY2hhbmdlciBsZSBzdGF0dXQgZGUgdGhpcy5tb2RlUWNtXG4gIHRoaXMubW9kZVFjbSA9IGZhbHNlIC8vIFBvdXIgY2hvaXNpciBsYSB2ZXJzaW9uIFFDTSBvdSBsYSB2ZXJzaW9uIGNsYXNzaXF1ZSAoZmFsc2UgPSB2ZXJzaW9uIGNsYXNzaXF1ZSlcblxuICB0aGlzLm1nMzJFZGl0YWJsZSA9IGZhbHNlIC8vIHBhcyBkJ2ludGVyZmFjZSBwYXIgZMOpZmF1dCBwb3VyIGxlcyBmaWd1cmVzIE1HMzJcbiAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAobnVtZXJvRXhlcmNpY2UpIHt9XG4gIHRoaXMubGlzdGVQYWNrYWdlcyA9IFtdIC8vIHN0cmluZyBvdSBsaXN0ZSBkZSBzdHJpbmcgYXZlYyBsZSBub20gZGVzIHBhY2thZ2VzIHNww6ljaWZpcXVlcyDDoCBham91dGVyIGRhbnMgbGUgcHLDqWFtYnVsZVxuICAvLyB0aGlzLnR5cGVFeGVyY2ljZSA9IFwiTUczMlwiO1xuICAvLyB0aGlzLmRpbWVuc2lvbnNEaXZNZzMyID0gWzUwMCwgNDUwXTtcbiAgLy8gdGhpcy50eXBlRXhlcmNpY2UgPSBcIlNjcmF0Y2hcIlxuICAvLyB0aGlzLnFjbT1bXCJRdWVscyBzb250IGxlcyBub21icmVzIHBhaXJzID9cIixbNywxMiwzNCwyNSwxOF0sWzAsMSwxLDAsMV1dID0+W1wiTGEgcXVlc3Rpb25cIixbbGVzIHLDqXBvbnNlc10sW2Jvbm5lPTEgZXQgbWF1dmFpc2U9MF1dXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/ClasseExercice.js\n");

/***/ }),

/***/ "./src/js/exercices/beta/beta4G20-3.js":
/*!*********************************************!*\
  !*** ./src/js/exercices/beta/beta4G20-3.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Calculer_valeur_manquante_visuel_pythagore)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst titre = 'Calculer une valeur manquante avec l’égalité de Pythagore';\nfunction Calculer_valeur_manquante_visuel_pythagore() {\n  \"use strict\";\n\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this);\n  this.titre = titre;\n  this.consigne = \"Dans chaque cas, calculer la valeur manquante indiquée par un point d'interrogation.\";\n  this.nbQuestions = 4; // Ici le nombre de questions\n\n  this.nbQuestionsModifiable = true; // Active le formulaire nombre de questions\n\n  this.nbCols = 1; // Le nombre de colonnes dans l'énoncé LaTeX\n\n  this.nbColsCorr = 1; // Le nombre de colonne pour la correction LaTeX\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // tableau contenant la liste des questions \n\n    this.listeCorrections = [];\n    let type_de_questions_disponibles = [1, 2, 3, 4]; // tableau à compléter par valeurs possibles des types de questions\n\n    let listeTypeDeQuestions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaisonListes)(type_de_questions_disponibles, this.nbQuestions);\n    let objets_enonce, objets_enonceml, objets_correction, params_enonce, params_correction;\n    mathalea.fenetreMathalea2d = [-11.7, -6.4, 18.3, 13.6];\n    let A = point(4, 0, 'A');\n    let B = point(0, 3, 'B');\n    let C = point(0, 0, 'C');\n    let p1 = polygone(A, B, C);\n    p1.isVisible = false;\n    let p2 = rotation(p1, C, randint(0, 359));\n    let a = p2.listePoints[0];\n    let b = p2.listePoints[1];\n    let c = p2.listePoints[2];\n    let codage = codageAngleDroit(a, c, b);\n    let car1 = carre(b, a);\n    car1.couleurDeRemplissage = 'red';\n    let bar1 = barycentre(car1);\n    bar1.positionLabel = 'center';\n    let car2 = carre(c, b);\n    car2.couleurDeRemplissage = 'blue';\n    let bar2 = barycentre(car2);\n    bar2.positionLabel = 'center';\n    let car3 = carre(a, c);\n    car3.couleurDeRemplissage = 'green';\n    let bar3 = barycentre(car3);\n    bar3.positionLabel = 'center';\n    let q1 = latexParPoint('? \\\\text{ cm}^2', bar1);\n    let l1 = afficheLongueurSegment(b, c);\n    let l2 = afficheLongueurSegment(c, a);\n    let q2 = latexParPoint('9 \\\\text{ cm}^2', bar2);\n    let q3 = latexParPoint('16 \\\\text{ cm}^2', bar3);\n\n    for (let i = 0, texte, texteCorr, cpt = 0; i < this.nbQuestions && cpt < 50;) {\n      objets_enonce = []; // on initialise le tableau des objets Mathalea2d de l'enoncé\n\n      objets_enonceml = []; // Idem pour l'enoncé à main levée si besoin\n\n      objets_correction = []; // Idem pour la correction\n\n      texte = ``; // Nous utilisons souvent cette variable pour construire le texte de la question.\n\n      texteCorr = ``; // Idem pour le texte de la correction.\n\n      switch (listeTypeDeQuestions[i]) {\n        // Chaque question peut être d'un type différent, ici 4 cas sont prévus...\n        case 1:\n          //ici sont créés les texte, tex_corr, objets mathalea2d divers entrant dans le contenu de l'exercice\n          break;\n\n        case 2:\n          // Idem Cas1 mais avec d'autres texte, texteCorr...\n          break;\n\n        case 3:\n          break;\n\n        case 4:\n          break;\n      } //  objets_enonce.push () // On rempli les tableaux d'objets Mathalea2d\n      //  objets_enonceml.push()\n      //  objets_correction.push()\n      //paramètres de la fenêtre Mathalea2d pour l'énoncé main levée\n      //    params_enonceml = { xmin: Math.min(objets_enonceml.x), ymin: Math.min(objets_enonceml.y), xmax: Math.max(objets_enonceml.x), ymax: Math.max(objets_enonceml.y), pixelsParCm: 20, scale: 1, mainlevee: true, amplitude: 1 }\n      //paramètres de la fenêtre Mathalea2d pour l'énoncé normal\n\n\n      params_enonce = {\n        xmin: -10,\n        ymin: -10,\n        xmax: 10,\n        ymax: 10,\n        pixelsParCm: 20,\n        scale: 1,\n        mainlevee: false\n      }; //paramètres de la fenêtre Mathalea2d pour la correction\n\n      params_correction = {\n        xmin: -10,\n        ymin: -10,\n        xmax: 10,\n        ymax: 10,\n        pixelsParCm: 20,\n        scale: 1\n      }; // On ajoute au texte de l'énoncé, la figure à main levée et la figure de l'enoncé.\n\n      texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_enonce, objets_enonce); // On ajoute au texte de la correction, la figure de la correction\n\n      texteCorr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(params_correction, objets_correction);\n\n      if (this.listeQuestions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n        this.listeQuestions.push(texte);\n        this.listeCorrections.push(texteCorr);\n        i++;\n      }\n\n      cpt++;\n    }\n\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this); // On envoie l'exercice à la fonction de mise en page\n  }; // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants\n  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.\n  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.\n  //\tthis.besoinFormulaireNumerique = ['Type de questions', 3, `1 : Perpendiculaires\\n 2 : Parallèles\\n 3 : Mélange`]\n  //  this.besoin_formulaire2_numerique = [\"Type de cahier\",3,`1 : Cahier à petits careaux\\n 2 : Cahier à gros carreaux (Seyes)\\n 3 : Feuille blanche`];\n  // this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]\n\n} // Fin de l'exercice.//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzL2JldGEvYmV0YTRHMjAtMy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL21hdGhhbGVhLy4vc3JjL2pzL2V4ZXJjaWNlcy9iZXRhL2JldGE0RzIwLTMuanM/MTdkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhlcmNpY2UgZnJvbSAnLi4vQ2xhc3NlRXhlcmNpY2UuanMnO1xuaW1wb3J0IHtsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSxjb21iaW5haXNvbkxpc3Rlc30gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdXRpbHMuanMnXG5pbXBvcnQge21hdGhhbGVhMmR9IGZyb20gJy4uLy4uL21vZHVsZXMvMmQuanMnXG5cbmV4cG9ydCBjb25zdCB0aXRyZSA9ICdDYWxjdWxlciB1bmUgdmFsZXVyIG1hbnF1YW50ZSBhdmVjIGzigJnDqWdhbGl0w6kgZGUgUHl0aGFnb3JlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYWxjdWxlcl92YWxldXJfbWFucXVhbnRlX3Zpc3VlbF9weXRoYWdvcmUoKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCJcbiAgICBFeGVyY2ljZS5jYWxsKHRoaXMpXG4gICAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICAgIHRoaXMuY29uc2lnbmUgPSBcIkRhbnMgY2hhcXVlIGNhcywgY2FsY3VsZXIgbGEgdmFsZXVyIG1hbnF1YW50ZSBpbmRpcXXDqWUgcGFyIHVuIHBvaW50IGQnaW50ZXJyb2dhdGlvbi5cIjtcbiAgICB0aGlzLm5iUXVlc3Rpb25zID0gNDsgLy8gSWNpIGxlIG5vbWJyZSBkZSBxdWVzdGlvbnNcbiAgICB0aGlzLm5iUXVlc3Rpb25zTW9kaWZpYWJsZT10cnVlIC8vIEFjdGl2ZSBsZSBmb3JtdWxhaXJlIG5vbWJyZSBkZSBxdWVzdGlvbnNcbiAgICB0aGlzLm5iQ29scyA9IDE7IC8vIExlIG5vbWJyZSBkZSBjb2xvbm5lcyBkYW5zIGwnw6lub25jw6kgTGFUZVhcbiAgICB0aGlzLm5iQ29sc0NvcnIgPSAxOy8vIExlIG5vbWJyZSBkZSBjb2xvbm5lIHBvdXIgbGEgY29ycmVjdGlvbiBMYVRlWFxuICBcbiAgXG4gICAgdGhpcy5ub3V2ZWxsZVZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5saXN0ZVF1ZXN0aW9ucyA9IFtdOyAvLyB0YWJsZWF1IGNvbnRlbmFudCBsYSBsaXN0ZSBkZXMgcXVlc3Rpb25zIFxuICAgIHRoaXMubGlzdGVDb3JyZWN0aW9ucyA9IFtdO1xuICAgIGxldCB0eXBlX2RlX3F1ZXN0aW9uc19kaXNwb25pYmxlcz1bMSwyLDMsNF07IC8vIHRhYmxlYXUgw6AgY29tcGzDqXRlciBwYXIgdmFsZXVycyBwb3NzaWJsZXMgZGVzIHR5cGVzIGRlIHF1ZXN0aW9uc1xuICAgIGxldCBsaXN0ZVR5cGVEZVF1ZXN0aW9ucyA9IGNvbWJpbmFpc29uTGlzdGVzKHR5cGVfZGVfcXVlc3Rpb25zX2Rpc3BvbmlibGVzLCB0aGlzLm5iUXVlc3Rpb25zKTtcbiAgXG4gICAgbGV0IG9iamV0c19lbm9uY2Usb2JqZXRzX2Vub25jZW1sLG9iamV0c19jb3JyZWN0aW9uLHBhcmFtc19lbm9uY2UscGFyYW1zX2NvcnJlY3Rpb25cbiAgICAgIG1hdGhhbGVhLmZlbmV0cmVNYXRoYWxlYTJkID0gWy0xMS43LC02LjQsMTguMywxMy42XVxubGV0IEE9cG9pbnQoNCwwLCdBJylcbmxldCBCPXBvaW50KDAsMywnQicpXG5sZXQgQz1wb2ludCgwLDAsJ0MnKVxubGV0IHAxPXBvbHlnb25lKEEsQixDKVxucDEuaXNWaXNpYmxlPWZhbHNlXG5sZXQgcDI9cm90YXRpb24ocDEsQyxyYW5kaW50KDAsMzU5KSlcbmxldCBhPXAyLmxpc3RlUG9pbnRzWzBdXG5sZXQgYj1wMi5saXN0ZVBvaW50c1sxXVxubGV0IGM9cDIubGlzdGVQb2ludHNbMl1cbmxldCBjb2RhZ2U9Y29kYWdlQW5nbGVEcm9pdChhLGMsYilcbmxldCBjYXIxPWNhcnJlKGIsYSlcbmNhcjEuY291bGV1ckRlUmVtcGxpc3NhZ2U9J3JlZCdcbmxldCBiYXIxPWJhcnljZW50cmUoY2FyMSlcbmJhcjEucG9zaXRpb25MYWJlbD0nY2VudGVyJ1xubGV0IGNhcjI9Y2FycmUoYyxiKVxuY2FyMi5jb3VsZXVyRGVSZW1wbGlzc2FnZT0nYmx1ZSdcbmxldCBiYXIyPWJhcnljZW50cmUoY2FyMilcbmJhcjIucG9zaXRpb25MYWJlbD0nY2VudGVyJ1xubGV0IGNhcjM9Y2FycmUoYSxjKVxuY2FyMy5jb3VsZXVyRGVSZW1wbGlzc2FnZT0nZ3JlZW4nXG5sZXQgYmFyMz1iYXJ5Y2VudHJlKGNhcjMpXG5iYXIzLnBvc2l0aW9uTGFiZWw9J2NlbnRlcidcbmxldCBxMT1sYXRleFBhclBvaW50KCc/IFxcXFx0ZXh0eyBjbX1eMicsYmFyMSlcbmxldCBsMT1hZmZpY2hlTG9uZ3VldXJTZWdtZW50KGIsYylcbmxldCBsMj1hZmZpY2hlTG9uZ3VldXJTZWdtZW50KGMsYSlcbmxldCBxMj1sYXRleFBhclBvaW50KCc5IFxcXFx0ZXh0eyBjbX1eMicsYmFyMilcbmxldCBxMz1sYXRleFBhclBvaW50KCcxNiBcXFxcdGV4dHsgY219XjInLGJhcjMpXG4gIFxuICAgICAgZm9yIChsZXQgaSA9IDAsIHRleHRlLCB0ZXh0ZUNvcnIsIGNwdCA9IDA7IGkgPCB0aGlzLm5iUXVlc3Rpb25zICYmIGNwdCA8IDUwOykge1xuICAgICAgICBvYmpldHNfZW5vbmNlID0gW10gLy8gb24gaW5pdGlhbGlzZSBsZSB0YWJsZWF1IGRlcyBvYmpldHMgTWF0aGFsZWEyZCBkZSBsJ2Vub25jw6lcbiAgICAgICAgb2JqZXRzX2Vub25jZW1sID0gW10gLy8gSWRlbSBwb3VyIGwnZW5vbmPDqSDDoCBtYWluIGxldsOpZSBzaSBiZXNvaW5cbiAgICAgICAgb2JqZXRzX2NvcnJlY3Rpb24gPSBbXSAvLyBJZGVtIHBvdXIgbGEgY29ycmVjdGlvblxuICBcbiAgICAgICAgdGV4dGUgPSBgYCAvLyBOb3VzIHV0aWxpc29ucyBzb3V2ZW50IGNldHRlIHZhcmlhYmxlIHBvdXIgY29uc3RydWlyZSBsZSB0ZXh0ZSBkZSBsYSBxdWVzdGlvbi5cbiAgICAgICAgdGV4dGVDb3JyID0gYGAgLy8gSWRlbSBwb3VyIGxlIHRleHRlIGRlIGxhIGNvcnJlY3Rpb24uXG5cbiAgICAgICAgc3dpdGNoIChsaXN0ZVR5cGVEZVF1ZXN0aW9uc1tpXSkgeyAvLyBDaGFxdWUgcXVlc3Rpb24gcGV1dCDDqnRyZSBkJ3VuIHR5cGUgZGlmZsOpcmVudCwgaWNpIDQgY2FzIHNvbnQgcHLDqXZ1cy4uLlxuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9pY2kgc29udCBjcsOpw6lzIGxlcyB0ZXh0ZSwgdGV4X2NvcnIsIG9iamV0cyBtYXRoYWxlYTJkIGRpdmVycyBlbnRyYW50IGRhbnMgbGUgY29udGVudSBkZSBsJ2V4ZXJjaWNlXG4gICAgICAgICAgYnJlYWs7XG4gIFxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIC8vIElkZW0gQ2FzMSBtYWlzIGF2ZWMgZCdhdXRyZXMgdGV4dGUsIHRleHRlQ29yci4uLlxuICAgICAgICAgIGJyZWFrXG4gIFxuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBcbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgXG4gICAgICAgICAgYnJlYWsgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgLy8gIG9iamV0c19lbm9uY2UucHVzaCAoKSAvLyBPbiByZW1wbGkgbGVzIHRhYmxlYXV4IGQnb2JqZXRzIE1hdGhhbGVhMmRcbiAgLy8gIG9iamV0c19lbm9uY2VtbC5wdXNoKClcbiAgLy8gIG9iamV0c19jb3JyZWN0aW9uLnB1c2goKVxuICBcbiAgLy9wYXJhbcOodHJlcyBkZSBsYSBmZW7DqnRyZSBNYXRoYWxlYTJkIHBvdXIgbCfDqW5vbmPDqSBtYWluIGxldsOpZVxuICAgIC8vICAgIHBhcmFtc19lbm9uY2VtbCA9IHsgeG1pbjogTWF0aC5taW4ob2JqZXRzX2Vub25jZW1sLngpLCB5bWluOiBNYXRoLm1pbihvYmpldHNfZW5vbmNlbWwueSksIHhtYXg6IE1hdGgubWF4KG9iamV0c19lbm9uY2VtbC54KSwgeW1heDogTWF0aC5tYXgob2JqZXRzX2Vub25jZW1sLnkpLCBwaXhlbHNQYXJDbTogMjAsIHNjYWxlOiAxLCBtYWlubGV2ZWU6IHRydWUsIGFtcGxpdHVkZTogMSB9XG4gIC8vcGFyYW3DqHRyZXMgZGUgbGEgZmVuw6p0cmUgTWF0aGFsZWEyZCBwb3VyIGwnw6lub25jw6kgbm9ybWFsXG4gICAgICAgIHBhcmFtc19lbm9uY2UgPSB7IHhtaW46LTEwLCB5bWluOiAtMTAsIHhtYXg6IDEwLCB5bWF4OiAxMCwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMSwgbWFpbmxldmVlOiBmYWxzZX1cbiAgLy9wYXJhbcOodHJlcyBkZSBsYSBmZW7DqnRyZSBNYXRoYWxlYTJkIHBvdXIgbGEgY29ycmVjdGlvblxuICAgICAgICBwYXJhbXNfY29ycmVjdGlvbiA9IHsgeG1pbjogLTEwLCB5bWluOiAtMTAsIHhtYXg6IDEwLCB5bWF4OiAxMCwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMSB9XG4gIC8vIE9uIGFqb3V0ZSBhdSB0ZXh0ZSBkZSBsJ8Opbm9uY8OpLCBsYSBmaWd1cmUgw6AgbWFpbiBsZXbDqWUgZXQgbGEgZmlndXJlIGRlIGwnZW5vbmPDqS5cbiAgICAgICAgdGV4dGUgKz0gbWF0aGFsZWEyZChwYXJhbXNfZW5vbmNlLCBvYmpldHNfZW5vbmNlKVxuICAvLyBPbiBham91dGUgYXUgdGV4dGUgZGUgbGEgY29ycmVjdGlvbiwgbGEgZmlndXJlIGRlIGxhIGNvcnJlY3Rpb25cbiAgICAgICAgdGV4dGVDb3JyICs9IG1hdGhhbGVhMmQocGFyYW1zX2NvcnJlY3Rpb24sIG9iamV0c19jb3JyZWN0aW9uKVxuICAgICAgICBpZiAodGhpcy5saXN0ZVF1ZXN0aW9ucy5pbmRleE9mKHRleHRlKSA9PSAtMSkge1xuICAgICAgICAgIC8vIFNpIGxhIHF1ZXN0aW9uIG4nYSBqYW1haXMgw6l0w6kgcG9zw6llLCBvbiBsYSBzdG9ja2UgZGFucyBsYSBsaXN0ZSBkZXMgcXVlc3Rpb25zXG4gICAgICAgICAgdGhpcy5saXN0ZVF1ZXN0aW9ucy5wdXNoKHRleHRlKTtcbiAgICAgICAgICB0aGlzLmxpc3RlQ29ycmVjdGlvbnMucHVzaCh0ZXh0ZUNvcnIpO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBjcHQrKztcbiAgICAgIH1cbiAgICAgIGxpc3RlUXVlc3Rpb25zVG9Db250ZW51KHRoaXMpOyAvLyBPbiBlbnZvaWUgbCdleGVyY2ljZSDDoCBsYSBmb25jdGlvbiBkZSBtaXNlIGVuIHBhZ2VcbiAgICB9O1xuICAvLyBTaSBsZXMgdmFyaWFibGVzIHN1aXZhbnRlcyBzb250IGTDqWZpbmllcywgZWxsZXMgcHJvdm9xdWVudCBsJ2FmZmljaGFnZSBkZXMgZm9ybXVsYWlyZXMgZGVzIHBhcmFtw6h0cmVzIGNvcnJlc3BvbmRhbnRzXG4gIC8vIElsIHBldXZlbnQgw6p0cmUgZGUgMyB0eXBlcyA6IF9udW1lcmlxdWUsIF9jYXNlX2FfY29jaGVyIG91IF90ZXh0ZS5cbiAgLy8gSWwgc29udCBhc3NvY2nDqXMgcmVzcGVjdGl2ZW1lbnQgYXV4IHBhcmFtw6h0cmVzIHN1cCwgc3VwMiBldCBzdXAzLlxuICBcbiAgLy9cdHRoaXMuYmVzb2luRm9ybXVsYWlyZU51bWVyaXF1ZSA9IFsnVHlwZSBkZSBxdWVzdGlvbnMnLCAzLCBgMSA6IFBlcnBlbmRpY3VsYWlyZXNcXG4gMiA6IFBhcmFsbMOobGVzXFxuIDMgOiBNw6lsYW5nZWBdXG4gIC8vICB0aGlzLmJlc29pbl9mb3JtdWxhaXJlMl9udW1lcmlxdWUgPSBbXCJUeXBlIGRlIGNhaGllclwiLDMsYDEgOiBDYWhpZXIgw6AgcGV0aXRzIGNhcmVhdXhcXG4gMiA6IENhaGllciDDoCBncm9zIGNhcnJlYXV4IChTZXllcylcXG4gMyA6IEZldWlsbGUgYmxhbmNoZWBdO1xuICAvLyB0aGlzLmJlc29pbl9mb3JtdWxhaXJlM19jYXNlX2FfY29jaGVyID1bJ2ZpZ3VyZSDDoCBtYWluIGxldsOpZScsdHJ1ZV1cbiAgXG4gIH0gLy8gRmluIGRlIGwnZXhlcmNpY2UuXG4gIFxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFoQkE7QUFvQkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/exercices/beta/beta4G20-3.js\n");

/***/ })

}]);