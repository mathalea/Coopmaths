/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_6e_6Algo10_js"],{

/***/ "./src/js/exercices/6e/6Algo10.js":
/*!****************************************!*\
  !*** ./src/js/exercices/6e/6Algo10.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Colorier_Deplacement)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst titre = 'Programmer des déplacements';\n/**\n * * Colorier le déplacement d'un lutin\n * * 6Algo10\n * @author Erwan Duplessy\n */\n\nfunction Colorier_Deplacement() {\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n\n  this.typeExercice = \"Scratch\";\n  this.sup = 1; // nombre de commandes = this.sup + 2\n\n  this.sup2 = false; //1 : sans boucle ; true : avec boucle\n\n  this.nbQuestions = 1;\n  this.nbQuestionsModifiable = false;\n  this.titre = titre;\n  this.consigne = \"Dans le quadrillage, effectuer le programme.\";\n  this.nbCols = 1;\n  this.nbColsCorr = 1;\n  this.nbQuestionsModifiable = false;\n  sortieHtml ? this.spacing = 2 : this.spacing = 1;\n  sortieHtml ? this.spacingCorr = 2 : this.spacingCorr = 1;\n  this.listePackages = \"scratch3\"; // pour dessiner les blocs en LaTeX/Tikz\n\n  this.nouvelleVersion = function () {\n    this.listeQuestions = []; // Liste de questions\n\n    this.listeCorrections = []; // Liste de questions corrigées\n\n    function scratchblocks_Tikz(code_svg, code_tikz) {\n      if (sortieHtml) {\n        return code_svg;\n      } else {\n        return code_tikz;\n      }\n\n      ;\n    }\n\n    ;\n    let texte = \"\"; // texte de l'énoncé\n\n    let texteCorr = \"\"; // texte du corrigé\n\n    let code_tikz = ``; // code pour dessiner les blocs en tikz\n\n    let code_svg = ``; // code pour dessiner les blocs en svg\n\n    let nbCommandes = Number(this.sup) + 2; // nombre de commandes de déplacement dans un script\n\n    let nbRepetition = 1; // Nombre de fois où la boucle est répétée. \n\n    if (this.sup2) {\n      nbRepetition = 3;\n    } // 0 : gauche, 1 : droite, 2 : haut, 3 : bas, 4 : colorier.\n\n\n    let lstCommandesTikz = [`\\\\blockmove{Aller à gauche}`, `\\\\blockmove{Aller à droite}`, `\\\\blockmove{Aller en haut}`, `\\\\blockmove{Aller en bas}`, `\\\\blockmove{Colorier la case}`];\n    let lstCommandesSVG = [`Aller à gauche`, `Aller à droite`, `Aller en haut`, `Aller en bas`, `Colorier`];\n    let lstAjoutXY = [[-1, 0], [1, 0], [0, 1], [0, -1], [0, 0]];\n    code_tikz += `\\\\medskip \\\\\\\\ \\\\begin{scratch} <br>`;\n    code_svg += `<pre class='blocks'>`;\n    let n = 0; // variable temporaire pour stocker le numéro de la commande\n\n    let lstNumCommande = []; // liste des commandes successives\n\n    let lstX = [0]; // liste des abscisses successives\n\n    let lstY = [0]; // liste des ordonnées successives\n\n    if (this.sup2) {\n      code_svg += `répéter (${nbRepetition}) fois <br>`;\n      code_tikz += `\\\\blockrepeat{répéter \\\\ovalnum{${nbRepetition}} fois} {`;\n    }\n\n    for (let i = 0; i < nbCommandes; i++) {\n      n = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 1, 2, 3]); // choix d'un déplacement\n\n      code_tikz += lstCommandesTikz[n]; // ajout d'un déplacement \n\n      code_svg += lstCommandesSVG[n] + `<br>`; // ajout d'un déplacement \n\n      code_tikz += lstCommandesTikz[4]; // ajout de l'instruction \"Colorier\"\n\n      code_svg += lstCommandesSVG[4] + `<br>`; // ajout de l'instruction \"Colorier\"\n\n      lstNumCommande.push(n); // ajout d'un déplacement \n\n      lstNumCommande.push(4); // ajout de l'instruction \"Colorier\"\n\n      lstX.push(lstX[lstX.length - 1] + lstAjoutXY[n][0]); // calcul de la nouvelle abscisse\n\n      lstY.push(lstY[lstY.length - 1] + lstAjoutXY[n][1]); // calcul de la nouvelle ordonnée\n    }\n\n    for (let j = 0; j < nbRepetition - 1; j++) {\n      for (let i = 0; i < 2 * nbCommandes; i++) {\n        lstX.push(lstX[lstX.length - 1] + lstAjoutXY[lstNumCommande[i]][0]);\n        lstY.push(lstY[lstY.length - 1] + lstAjoutXY[lstNumCommande[i]][1]);\n      }\n    }\n\n    if (this.sup2) {\n      code_svg += `fin <br>`;\n      code_tikz += `}`;\n    }\n\n    code_svg += `</pre>`;\n    code_tikz += `\\\\end{scratch}`;\n    let xLutinMin = Math.min(...lstX);\n    let xLutinMax = Math.max(...lstX);\n    let yLutinMin = Math.min(...lstY);\n    let yLutinMax = Math.max(...lstY);\n\n    if (sortieHtml) {\n      texte += `<table style=\"width: 100%\"><tr><td>`;\n    } else {\n      texte += `\\\\begin{minipage}[t]{.25\\\\textwidth}`;\n    }\n\n    texte += scratchblocks_Tikz(code_svg, code_tikz);\n\n    if (sortieHtml) {\n      texte += `</td><td>`;\n      texte += `             `;\n      texte += `</td><td style=\"vertical-align: top; text-align: center\">`;\n    } else {\n      texte += `\\\\end{minipage} `;\n      texte += `\\\\hfill \\\\begin{minipage}[t]{.74\\\\textwidth}`;\n    }\n\n    let xGrilleMin = xLutinMin - 1;\n    let xGrilleMax = xLutinMax + 2;\n    let yGrilleMin = yLutinMin - 2;\n    let yGrilleMax = yLutinMax + 1;\n    let r2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.grille)(xGrilleMin, yGrilleMin, xGrilleMax, yGrilleMax, 'black', .8, 1);\n    let lstObjet = [r2]; // liste de tous les objets Mathalea2d\n\n    let p; // carré gris représentant le lutin en position de départ\n\n    p = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(lstX[0], lstY[0]), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(lstX[0] + 1, lstY[0]), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(lstX[0] + 1, lstY[0] - 1), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(lstX[0], lstY[0] - 1));\n    p.opacite = 0.5;\n    p.couleurDeRemplissage = 'black';\n    p.opaciteDeRemplissage = 0.5;\n    p.epaisseur = 0;\n    lstObjet.push(p);\n    let txt = ``; // variable temporaire\n\n    for (let j = 0; j < xGrilleMax - xGrilleMin; j++) {\n      txt = String.fromCharCode(65 + j); // ascii 65 = A\n\n      lstObjet.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(txt, xGrilleMin + j + 0.5, yGrilleMax + 0.5, 'milieu', 'black', 1)); // affiche de A à J... en haut de la grille\n    }\n\n    for (let i = 0; i < yGrilleMax - yGrilleMin; i++) {\n      lstObjet.push((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.texteParPosition)(String(i), xGrilleMin - 0.25, yGrilleMax - i - 0.5, 'gauche', 'black', 1)); // affiche de 0 à 9... à gauche de la grille\n    }\n\n    texte += `Au départ, le lutin est situé dans la case grisée. Chaque déplacement se fait dans une case adjacente. <br><br>`;\n\n    if (!sortieHtml) {\n      texte += `\\\\begin{center}`;\n    }\n\n    texte += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n      xmin: xGrilleMin - 3,\n      xmax: xGrilleMax + 1,\n      ymin: yGrilleMin - 1,\n      ymax: yGrilleMax + 1,\n      pixelsParCm: 20,\n      scale: .5\n    }, lstObjet);\n\n    if (sortieHtml) {\n      texte += `</td></tr></table>`;\n    } else {\n      texte += `\\\\end{center}\\\\end{minipage} `;\n      texte += `\\\\hfill \\\\null`;\n    } // CORRECTION\n    // 0 : gauche, 1 : droite, 2 : haut, 3 : bas, 4 : colorier.\n\n\n    let xLutin = 0; // position initiale du carré\n\n    let yLutin = 0; // position initiale du carré\n\n    let couleur = `red`; // on fait un dessin par passage dans la boucle\n\n    if (sortieHtml) {\n      texteCorr += `<table style=\"width:100%\"><tr><td style=\"text-align:center\">`;\n    } else {\n      texteCorr += `\\\\begin{minipage}{.49\\\\textwidth}`;\n    }\n\n    for (let k = 0; k < nbRepetition; k++) {\n      for (let i = k * lstNumCommande.length; i < (k + 1) * lstNumCommande.length; i++) {\n        switch (lstNumCommande[i % lstNumCommande.length]) {\n          case 0:\n            xLutin += -1;\n            break;\n\n          case 1:\n            xLutin += 1;\n            break;\n\n          case 2:\n            yLutin += 1;\n            break;\n\n          case 3:\n            yLutin += -1;\n            break;\n\n          case 4:\n            p = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xLutin, yLutin), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xLutin + 1, yLutin), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xLutin + 1, yLutin - 1), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(xLutin, yLutin - 1));\n            p.couleurDeRemplissage = couleur;\n            p.opaciteDeRemplissage = 0.25;\n            p.epaisseur = 0;\n            lstObjet.push(p);\n        }\n      }\n\n      if (this.sup2) {\n        texteCorr += `Passage n° ${k + 1} dans la boucle : <br>`;\n      }\n\n      texteCorr += (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({\n        xmin: xGrilleMin - 3,\n        xmax: xGrilleMax + 1,\n        ymin: yGrilleMin - 1,\n        ymax: yGrilleMax + 1,\n        pixelsParCm: 20,\n        scale: 0.4\n      }, lstObjet);\n\n      if (sortieHtml) {\n        if (k % 3 == 2) {\n          texteCorr += `</td></tr><tr><td style=\"text-align:center\">`; // retour à la ligne après 3 grilles dessinées en HTML\n        } else {\n          texteCorr += `</td><td></td><td style=\"text-align:center\">`;\n        }\n      } else {\n        texteCorr += `\\\\end{minipage}`;\n\n        if (k % 2 == 1) {\n          texteCorr += `\\\\\\\\ `;\n        } // retour à la ligne après 2 grilles dessinées en LaTeX\n\n\n        texteCorr += `\\\\begin{minipage}{.49\\\\textwidth}`;\n      }\n    }\n\n    sortieHtml ? texteCorr += `</td></tr></table>` : texteCorr += `\\\\end{minipage}`;\n    this.listeQuestions.push(texte);\n    this.listeCorrections.push(texteCorr);\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.listeQuestionsToContenu)(this);\n  };\n\n  this.besoinFormulaireNumerique = [`Nombre d'instructions de déplacements`, 3, '1 : 3 instructions\\n2 : 4 instructions\\n3 : 5 instructions'];\n  this.besoin_formulaire2_case_a_cocher = [\"Avec une boucle\"];\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXhlcmNpY2VzLzZlLzZBbGdvMTAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRoYWxlYS8uL3NyYy9qcy9leGVyY2ljZXMvNmUvNkFsZ28xMC5qcz9mZmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGVyY2ljZSBmcm9tICcuLi9DbGFzc2VFeGVyY2ljZS5qcyc7XG5pbXBvcnQge2xpc3RlUXVlc3Rpb25zVG9Db250ZW51LGNob2ljZSxrYXRleFBvcHVwMn0gZnJvbSAnLi4vLi4vbW9kdWxlcy9vdXRpbHMuanMnXG5pbXBvcnQge3BvaW50LHBvbHlnb25lLGdyaWxsZSx0ZXh0ZVBhclBvc2l0aW9uLG1hdGhhbGVhMmQsfSBmcm9tICcuLi8uLi9tb2R1bGVzLzJkLmpzJ1xuXG5cbmV4cG9ydCBjb25zdCB0aXRyZSA9ICdQcm9ncmFtbWVyIGRlcyBkw6lwbGFjZW1lbnRzJ1xuXG4vKipcbiAqICogQ29sb3JpZXIgbGUgZMOpcGxhY2VtZW50IGQndW4gbHV0aW5cbiAqICogNkFsZ28xMFxuICogQGF1dGhvciBFcndhbiBEdXBsZXNzeVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2xvcmllcl9EZXBsYWNlbWVudCgpIHtcbiAgRXhlcmNpY2UuY2FsbCh0aGlzKTsgLy8gSMOpcml0YWdlIGRlIGxhIGNsYXNzZSBFeGVyY2ljZSgpXG4gIHRoaXMudHlwZUV4ZXJjaWNlID0gXCJTY3JhdGNoXCJcbiAgdGhpcy5zdXAgPSAxOyAvLyBub21icmUgZGUgY29tbWFuZGVzID0gdGhpcy5zdXAgKyAyXG4gIHRoaXMuc3VwMiA9IGZhbHNlOyAvLzEgOiBzYW5zIGJvdWNsZSA7IHRydWUgOiBhdmVjIGJvdWNsZVxuICB0aGlzLm5iUXVlc3Rpb25zID0gMTtcbiAgdGhpcy5uYlF1ZXN0aW9uc01vZGlmaWFibGUgPSBmYWxzZTtcbiAgdGhpcy50aXRyZSA9IHRpdHJlO1xuICB0aGlzLmNvbnNpZ25lID0gXCJEYW5zIGxlIHF1YWRyaWxsYWdlLCBlZmZlY3R1ZXIgbGUgcHJvZ3JhbW1lLlwiO1xuICB0aGlzLm5iQ29scyA9IDE7XG4gIHRoaXMubmJDb2xzQ29yciA9IDE7XG4gIHRoaXMubmJRdWVzdGlvbnNNb2RpZmlhYmxlID0gZmFsc2U7XG4gIHNvcnRpZUh0bWwgPyB0aGlzLnNwYWNpbmcgPSAyIDogdGhpcy5zcGFjaW5nID0gMTtcbiAgc29ydGllSHRtbCA/IHRoaXMuc3BhY2luZ0NvcnIgPSAyIDogdGhpcy5zcGFjaW5nQ29yciA9IDE7XG4gIHRoaXMubGlzdGVQYWNrYWdlcyA9IFwic2NyYXRjaDNcIjsgLy8gcG91ciBkZXNzaW5lciBsZXMgYmxvY3MgZW4gTGFUZVgvVGlrelxuXG4gIHRoaXMubm91dmVsbGVWZXJzaW9uID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubGlzdGVRdWVzdGlvbnMgPSBbXTsgLy8gTGlzdGUgZGUgcXVlc3Rpb25zXG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zID0gW107IC8vIExpc3RlIGRlIHF1ZXN0aW9ucyBjb3JyaWfDqWVzXG4gICAgZnVuY3Rpb24gc2NyYXRjaGJsb2Nrc19UaWt6KGNvZGVfc3ZnLCBjb2RlX3Rpa3opIHtcbiAgICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICAgIHJldHVybiBjb2RlX3N2ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb2RlX3Rpa3o7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBsZXQgdGV4dGUgPSBcIlwiOyAvLyB0ZXh0ZSBkZSBsJ8Opbm9uY8OpXG4gICAgbGV0IHRleHRlQ29yciA9IFwiXCI7IC8vIHRleHRlIGR1IGNvcnJpZ8OpXG4gICAgbGV0IGNvZGVfdGlreiA9IGBgOyAvLyBjb2RlIHBvdXIgZGVzc2luZXIgbGVzIGJsb2NzIGVuIHRpa3pcbiAgICBsZXQgY29kZV9zdmcgPSBgYDsgLy8gY29kZSBwb3VyIGRlc3NpbmVyIGxlcyBibG9jcyBlbiBzdmdcbiAgICBsZXQgbmJDb21tYW5kZXMgPSBOdW1iZXIodGhpcy5zdXApICsgMjsgLy8gbm9tYnJlIGRlIGNvbW1hbmRlcyBkZSBkw6lwbGFjZW1lbnQgZGFucyB1biBzY3JpcHRcbiAgICBsZXQgbmJSZXBldGl0aW9uID0gMTsgLy8gTm9tYnJlIGRlIGZvaXMgb8O5IGxhIGJvdWNsZSBlc3QgcsOpcMOpdMOpZS4gXG4gICAgaWYgKHRoaXMuc3VwMikge1xuICAgICAgbmJSZXBldGl0aW9uID0gMztcbiAgICB9XG4gICAgLy8gMCA6IGdhdWNoZSwgMSA6IGRyb2l0ZSwgMiA6IGhhdXQsIDMgOiBiYXMsIDQgOiBjb2xvcmllci5cbiAgICBsZXQgbHN0Q29tbWFuZGVzVGlreiA9IFtgXFxcXGJsb2NrbW92ZXtBbGxlciDDoCBnYXVjaGV9YCwgYFxcXFxibG9ja21vdmV7QWxsZXIgw6AgZHJvaXRlfWAsIGBcXFxcYmxvY2ttb3Zle0FsbGVyIGVuIGhhdXR9YCwgYFxcXFxibG9ja21vdmV7QWxsZXIgZW4gYmFzfWAsIGBcXFxcYmxvY2ttb3Zle0NvbG9yaWVyIGxhIGNhc2V9YF07XG4gICAgbGV0IGxzdENvbW1hbmRlc1NWRyA9IFtgQWxsZXIgw6AgZ2F1Y2hlYCwgYEFsbGVyIMOgIGRyb2l0ZWAsIGBBbGxlciBlbiBoYXV0YCwgYEFsbGVyIGVuIGJhc2AsIGBDb2xvcmllcmBdO1xuICAgIGxldCBsc3RBam91dFhZID0gW1stMSwgMF0sIFsxLCAwXSwgWzAsIDFdLCBbMCwgLTFdLCBbMCwgMF1dO1xuICAgIGNvZGVfdGlreiArPSBgXFxcXG1lZHNraXAgXFxcXFxcXFwgXFxcXGJlZ2lue3NjcmF0Y2h9IDxicj5gO1xuICAgIGNvZGVfc3ZnICs9IGA8cHJlIGNsYXNzPSdibG9ja3MnPmA7XG4gICAgbGV0IG4gPSAwOyAvLyB2YXJpYWJsZSB0ZW1wb3JhaXJlIHBvdXIgc3RvY2tlciBsZSBudW3DqXJvIGRlIGxhIGNvbW1hbmRlXG4gICAgbGV0IGxzdE51bUNvbW1hbmRlID0gW107IC8vIGxpc3RlIGRlcyBjb21tYW5kZXMgc3VjY2Vzc2l2ZXNcbiAgICBsZXQgbHN0WCA9IFswXTsgLy8gbGlzdGUgZGVzIGFic2Npc3NlcyBzdWNjZXNzaXZlc1xuICAgIGxldCBsc3RZID0gWzBdOyAvLyBsaXN0ZSBkZXMgb3Jkb25uw6llcyBzdWNjZXNzaXZlc1xuICAgIGlmICh0aGlzLnN1cDIpIHtcbiAgICAgIGNvZGVfc3ZnICs9IGByw6lww6l0ZXIgKCR7bmJSZXBldGl0aW9ufSkgZm9pcyA8YnI+YDtcbiAgICAgIGNvZGVfdGlreiArPSBgXFxcXGJsb2NrcmVwZWF0e3LDqXDDqXRlciBcXFxcb3ZhbG51bXske25iUmVwZXRpdGlvbn19IGZvaXN9IHtgO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmJDb21tYW5kZXM7IGkrKykge1xuICAgICAgbiA9IGNob2ljZShbMCwgMSwgMiwgM10pOyAvLyBjaG9peCBkJ3VuIGTDqXBsYWNlbWVudFxuICAgICAgY29kZV90aWt6ICs9IGxzdENvbW1hbmRlc1Rpa3pbbl07IC8vIGFqb3V0IGQndW4gZMOpcGxhY2VtZW50IFxuICAgICAgY29kZV9zdmcgKz0gbHN0Q29tbWFuZGVzU1ZHW25dICsgYDxicj5gOyAvLyBham91dCBkJ3VuIGTDqXBsYWNlbWVudCBcbiAgICAgIGNvZGVfdGlreiArPSBsc3RDb21tYW5kZXNUaWt6WzRdOyAvLyBham91dCBkZSBsJ2luc3RydWN0aW9uIFwiQ29sb3JpZXJcIlxuICAgICAgY29kZV9zdmcgKz0gbHN0Q29tbWFuZGVzU1ZHWzRdICsgYDxicj5gOyAvLyBham91dCBkZSBsJ2luc3RydWN0aW9uIFwiQ29sb3JpZXJcIlxuICAgICAgbHN0TnVtQ29tbWFuZGUucHVzaChuKTsgLy8gYWpvdXQgZCd1biBkw6lwbGFjZW1lbnQgXG4gICAgICBsc3ROdW1Db21tYW5kZS5wdXNoKDQpOyAvLyBham91dCBkZSBsJ2luc3RydWN0aW9uIFwiQ29sb3JpZXJcIlxuICAgICAgbHN0WC5wdXNoKGxzdFhbbHN0WC5sZW5ndGggLSAxXSArIGxzdEFqb3V0WFlbbl1bMF0pOyAvLyBjYWxjdWwgZGUgbGEgbm91dmVsbGUgYWJzY2lzc2VcbiAgICAgIGxzdFkucHVzaChsc3RZW2xzdFkubGVuZ3RoIC0gMV0gKyBsc3RBam91dFhZW25dWzFdKTsgLy8gY2FsY3VsIGRlIGxhIG5vdXZlbGxlIG9yZG9ubsOpZVxuICAgIH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG5iUmVwZXRpdGlvbiAtIDE7IGorKykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyICogbmJDb21tYW5kZXM7IGkrKykge1xuICAgICAgICBsc3RYLnB1c2gobHN0WFtsc3RYLmxlbmd0aCAtIDFdICsgbHN0QWpvdXRYWVtsc3ROdW1Db21tYW5kZVtpXV1bMF0pO1xuICAgICAgICBsc3RZLnB1c2gobHN0WVtsc3RZLmxlbmd0aCAtIDFdICsgbHN0QWpvdXRYWVtsc3ROdW1Db21tYW5kZVtpXV1bMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5zdXAyKSB7XG4gICAgICBjb2RlX3N2ZyArPSBgZmluIDxicj5gO1xuICAgICAgY29kZV90aWt6ICs9IGB9YDtcbiAgICB9XG4gICAgY29kZV9zdmcgKz0gYDwvcHJlPmA7XG4gICAgY29kZV90aWt6ICs9IGBcXFxcZW5ke3NjcmF0Y2h9YDtcblxuICAgIGxldCB4THV0aW5NaW4gPSBNYXRoLm1pbiguLi5sc3RYKTtcbiAgICBsZXQgeEx1dGluTWF4ID0gTWF0aC5tYXgoLi4ubHN0WCk7XG4gICAgbGV0IHlMdXRpbk1pbiA9IE1hdGgubWluKC4uLmxzdFkpO1xuICAgIGxldCB5THV0aW5NYXggPSBNYXRoLm1heCguLi5sc3RZKTtcblxuICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICB0ZXh0ZSArPSBgPHRhYmxlIHN0eWxlPVwid2lkdGg6IDEwMCVcIj48dHI+PHRkPmA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRlICs9IGBcXFxcYmVnaW57bWluaXBhZ2V9W3Rdey4yNVxcXFx0ZXh0d2lkdGh9YDtcbiAgICB9XG5cbiAgICB0ZXh0ZSArPSBzY3JhdGNoYmxvY2tzX1Rpa3ooY29kZV9zdmcsIGNvZGVfdGlreik7XG5cbiAgICBpZiAoc29ydGllSHRtbCkge1xuICAgICAgdGV4dGUgKz0gYDwvdGQ+PHRkPmA7XG4gICAgICB0ZXh0ZSArPSBgICAgICAgICAgICAgIGA7XG4gICAgICB0ZXh0ZSArPSBgPC90ZD48dGQgc3R5bGU9XCJ2ZXJ0aWNhbC1hbGlnbjogdG9wOyB0ZXh0LWFsaWduOiBjZW50ZXJcIj5gO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRleHRlICs9IGBcXFxcZW5ke21pbmlwYWdlfSBgO1xuICAgICAgdGV4dGUgKz0gYFxcXFxoZmlsbCBcXFxcYmVnaW57bWluaXBhZ2V9W3Rdey43NFxcXFx0ZXh0d2lkdGh9YDtcbiAgICB9XG5cbiAgICBsZXQgeEdyaWxsZU1pbiA9IHhMdXRpbk1pbiAtIDE7XG4gICAgbGV0IHhHcmlsbGVNYXggPSB4THV0aW5NYXggKyAyO1xuICAgIGxldCB5R3JpbGxlTWluID0geUx1dGluTWluIC0gMjtcbiAgICBsZXQgeUdyaWxsZU1heCA9IHlMdXRpbk1heCArIDE7XG5cbiAgICBsZXQgcjIgPSBncmlsbGUoeEdyaWxsZU1pbiwgeUdyaWxsZU1pbiwgeEdyaWxsZU1heCwgeUdyaWxsZU1heCwgJ2JsYWNrJywgLjgsIDEpO1xuICAgIGxldCBsc3RPYmpldCA9IFtyMl07IC8vIGxpc3RlIGRlIHRvdXMgbGVzIG9iamV0cyBNYXRoYWxlYTJkXG5cbiAgICBsZXQgcDsgLy8gY2FycsOpIGdyaXMgcmVwcsOpc2VudGFudCBsZSBsdXRpbiBlbiBwb3NpdGlvbiBkZSBkw6lwYXJ0XG4gICAgcCA9IHBvbHlnb25lKHBvaW50KGxzdFhbMF0sIGxzdFlbMF0pLCBwb2ludChsc3RYWzBdICsgMSwgbHN0WVswXSksIHBvaW50KGxzdFhbMF0gKyAxLCBsc3RZWzBdIC0gMSksIHBvaW50KGxzdFhbMF0sIGxzdFlbMF0gLSAxKSk7XG4gICAgcC5vcGFjaXRlID0gMC41O1xuICAgIHAuY291bGV1ckRlUmVtcGxpc3NhZ2UgPSAnYmxhY2snO1xuICAgIHAub3BhY2l0ZURlUmVtcGxpc3NhZ2UgPSAwLjU7XG4gICAgcC5lcGFpc3NldXIgPSAwO1xuICAgIGxzdE9iamV0LnB1c2gocCk7XG4gICAgbGV0IHR4dCA9IGBgOyAvLyB2YXJpYWJsZSB0ZW1wb3JhaXJlXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAoeEdyaWxsZU1heCAtIHhHcmlsbGVNaW4pOyBqKyspIHtcbiAgICAgIHR4dCA9IFN0cmluZy5mcm9tQ2hhckNvZGUoNjUgKyBqKTsgLy8gYXNjaWkgNjUgPSBBXG4gICAgICBsc3RPYmpldC5wdXNoKHRleHRlUGFyUG9zaXRpb24odHh0LCB4R3JpbGxlTWluICsgaiArIDAuNSwgeUdyaWxsZU1heCArIDAuNSwgJ21pbGlldScsICdibGFjaycsIDEpKTsgLy8gYWZmaWNoZSBkZSBBIMOgIEouLi4gZW4gaGF1dCBkZSBsYSBncmlsbGVcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoeUdyaWxsZU1heCAtIHlHcmlsbGVNaW4pOyBpKyspIHtcbiAgICAgIGxzdE9iamV0LnB1c2godGV4dGVQYXJQb3NpdGlvbihTdHJpbmcoaSksIHhHcmlsbGVNaW4gLSAwLjI1LCB5R3JpbGxlTWF4IC0gaSAtIDAuNSwgJ2dhdWNoZScsICdibGFjaycsIDEpKTsgLy8gYWZmaWNoZSBkZSAwIMOgIDkuLi4gw6AgZ2F1Y2hlIGRlIGxhIGdyaWxsZVxuICAgIH1cblxuICAgIHRleHRlICs9IGBBdSBkw6lwYXJ0LCBsZSBsdXRpbiBlc3Qgc2l0dcOpIGRhbnMgbGEgY2FzZSBncmlzw6llLiBDaGFxdWUgZMOpcGxhY2VtZW50IHNlIGZhaXQgZGFucyB1bmUgY2FzZSBhZGphY2VudGUuIDxicj48YnI+YDtcbiAgICBpZiAoIXNvcnRpZUh0bWwpIHsgdGV4dGUgKz0gYFxcXFxiZWdpbntjZW50ZXJ9YDsgfVxuICAgIHRleHRlICs9IG1hdGhhbGVhMmQoeyB4bWluOiB4R3JpbGxlTWluIC0gMywgeG1heDogeEdyaWxsZU1heCArIDEsIHltaW46IHlHcmlsbGVNaW4gLSAxLCB5bWF4OiB5R3JpbGxlTWF4ICsgMSwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogLjUgfSwgbHN0T2JqZXQpO1xuICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICB0ZXh0ZSArPSBgPC90ZD48L3RyPjwvdGFibGU+YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGV4dGUgKz0gYFxcXFxlbmR7Y2VudGVyfVxcXFxlbmR7bWluaXBhZ2V9IGA7XG4gICAgICB0ZXh0ZSArPSBgXFxcXGhmaWxsIFxcXFxudWxsYDtcbiAgICB9XG5cbiAgICAvLyBDT1JSRUNUSU9OXG4gICAgLy8gMCA6IGdhdWNoZSwgMSA6IGRyb2l0ZSwgMiA6IGhhdXQsIDMgOiBiYXMsIDQgOiBjb2xvcmllci5cbiAgICBsZXQgeEx1dGluID0gMDsgLy8gcG9zaXRpb24gaW5pdGlhbGUgZHUgY2FycsOpXG4gICAgbGV0IHlMdXRpbiA9IDA7IC8vIHBvc2l0aW9uIGluaXRpYWxlIGR1IGNhcnLDqVxuICAgIGxldCBjb3VsZXVyID0gYHJlZGA7XG5cbiAgICAvLyBvbiBmYWl0IHVuIGRlc3NpbiBwYXIgcGFzc2FnZSBkYW5zIGxhIGJvdWNsZVxuICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICB0ZXh0ZUNvcnIgKz0gYDx0YWJsZSBzdHlsZT1cIndpZHRoOjEwMCVcIj48dHI+PHRkIHN0eWxlPVwidGV4dC1hbGlnbjpjZW50ZXJcIj5gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0ZXh0ZUNvcnIgKz0gYFxcXFxiZWdpbnttaW5pcGFnZX17LjQ5XFxcXHRleHR3aWR0aH1gO1xuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IG5iUmVwZXRpdGlvbjsgaysrKSB7XG4gICAgICBmb3IgKGxldCBpID0gayAqIGxzdE51bUNvbW1hbmRlLmxlbmd0aDsgaSA8IChrICsgMSkgKiBsc3ROdW1Db21tYW5kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBzd2l0Y2ggKGxzdE51bUNvbW1hbmRlW2kgJSBsc3ROdW1Db21tYW5kZS5sZW5ndGhdKSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgeEx1dGluICs9IC0xOyBicmVhaztcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICB4THV0aW4gKz0gMTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgeUx1dGluICs9IDE7IGJyZWFrO1xuICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgIHlMdXRpbiArPSAtMTsgYnJlYWs7XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgcCA9IHBvbHlnb25lKHBvaW50KHhMdXRpbiwgeUx1dGluKSwgcG9pbnQoeEx1dGluICsgMSwgeUx1dGluKSwgcG9pbnQoeEx1dGluICsgMSwgeUx1dGluIC0gMSksIHBvaW50KHhMdXRpbiwgeUx1dGluIC0gMSkpO1xuICAgICAgICAgICAgcC5jb3VsZXVyRGVSZW1wbGlzc2FnZSA9IGNvdWxldXI7XG4gICAgICAgICAgICBwLm9wYWNpdGVEZVJlbXBsaXNzYWdlID0gMC4yNTtcbiAgICAgICAgICAgIHAuZXBhaXNzZXVyID0gMDtcbiAgICAgICAgICAgIGxzdE9iamV0LnB1c2gocCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN1cDIpIHtcbiAgICAgICAgdGV4dGVDb3JyICs9IGBQYXNzYWdlIG7CsCAke2sgKyAxfSBkYW5zIGxhIGJvdWNsZSA6IDxicj5gO1xuICAgICAgfVxuICAgICAgdGV4dGVDb3JyICs9IG1hdGhhbGVhMmQoeyB4bWluOiB4R3JpbGxlTWluIC0gMywgeG1heDogeEdyaWxsZU1heCArIDEsIHltaW46IHlHcmlsbGVNaW4gLSAxLCB5bWF4OiB5R3JpbGxlTWF4ICsgMSwgcGl4ZWxzUGFyQ206IDIwLCBzY2FsZTogMC40IH0sIGxzdE9iamV0KTtcbiAgICAgIGlmIChzb3J0aWVIdG1sKSB7XG4gICAgICAgIGlmIChrICUgMyA9PSAyKSB7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGA8L3RkPjwvdHI+PHRyPjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+YDsgLy8gcmV0b3VyIMOgIGxhIGxpZ25lIGFwcsOocyAzIGdyaWxsZXMgZGVzc2luw6llcyBlbiBIVE1MXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGV4dGVDb3JyICs9IGA8L3RkPjx0ZD48L3RkPjx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+YDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dGVDb3JyICs9IGBcXFxcZW5ke21pbmlwYWdlfWA7XG4gICAgICAgIGlmIChrICUgMiA9PSAxKSB7IHRleHRlQ29yciArPSBgXFxcXFxcXFwgYDsgfSAvLyByZXRvdXIgw6AgbGEgbGlnbmUgYXByw6hzIDIgZ3JpbGxlcyBkZXNzaW7DqWVzIGVuIExhVGVYXG4gICAgICAgIHRleHRlQ29yciArPSBgXFxcXGJlZ2lue21pbmlwYWdlfXsuNDlcXFxcdGV4dHdpZHRofWA7XG4gICAgICB9XG4gICAgfVxuICAgIHNvcnRpZUh0bWwgPyB0ZXh0ZUNvcnIgKz0gYDwvdGQ+PC90cj48L3RhYmxlPmAgOiB0ZXh0ZUNvcnIgKz0gYFxcXFxlbmR7bWluaXBhZ2V9YDtcblxuICAgIHRoaXMubGlzdGVRdWVzdGlvbnMucHVzaCh0ZXh0ZSk7XG4gICAgdGhpcy5saXN0ZUNvcnJlY3Rpb25zLnB1c2godGV4dGVDb3JyKTtcbiAgICBsaXN0ZVF1ZXN0aW9uc1RvQ29udGVudSh0aGlzKTtcbiAgfTtcbiAgdGhpcy5iZXNvaW5Gb3JtdWxhaXJlTnVtZXJpcXVlID0gW2BOb21icmUgZCdpbnN0cnVjdGlvbnMgZGUgZMOpcGxhY2VtZW50c2AsIDMsICcxIDogMyBpbnN0cnVjdGlvbnNcXG4yIDogNCBpbnN0cnVjdGlvbnNcXG4zIDogNSBpbnN0cnVjdGlvbnMnXTtcbiAgdGhpcy5iZXNvaW5fZm9ybXVsYWlyZTJfY2FzZV9hX2NvY2hlciA9IFtcIkF2ZWMgdW5lIGJvdWNsZVwiXTtcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/exercices/6e/6Algo10.js\n");

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