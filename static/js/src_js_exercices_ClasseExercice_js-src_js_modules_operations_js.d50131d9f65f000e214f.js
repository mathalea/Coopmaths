/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_ClasseExercice_js-src_js_modules_operations_js"],{

/***/ "./src/js/exercices/ClasseExercice.js":
/*!********************************************!*\
  !*** ./src/js/exercices/ClasseExercice.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Exercice)\n/* harmony export */ });\n/**\n *\n *  Classe parente de tous les exercices\n *\n * @Auteur Rémi Angot\n */\nfunction Exercice () {\n  // Classe parente de tous les exercices qui seront créés\n  this.titre = '';\n  this.consigne = '';\n  this.consigne_correction = '';\n  this.liste_questions = []\n  this.liste_corrections = []\n  this.introduction = '';\n  this.contenu = '';\n  this.contenu_correction = '';\n  this.nb_questions = 10\n  this.nb_cols = 2\n  this.nb_cols_corr = 2\n  this.spacing = 1\n  this.spacing_corr = 1\n  this.beamer = false\n\n  this.besoin_formulaire_numerique = false // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];\n  this.besoin_formulaire_texte = false // Sinon this.besoin_formulaire_texte = [texte,tooltip];\n  this.besoin_formulaire_case_a_cocher = false // Sinon this.besoin_formulaire_case_a_cocher = [texte];\n  this.consigne_modifiable = true\n  this.nb_questions_modifiable = true\n  this.nb_cols_modifiable = true\n  this.nb_cols_corr_modifiable = true\n  this.spacing_modifiable = true\n  this.spacing_corr_modifiable = true\n  this.correction_detaillee_disponible = false\n  this.correction_detaillee = true\n  this.video = ''\n  this.bouton_aide = false\n  this.tailleDiaporama = 50 // Taille en pixels pour le calcul chronométré\n  // this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton=\"Aide\",icone=\"info circle\")\n  // this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton=\"Aide - Vidéo\",icone=\"youtube\")\n  // this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte=\"Aide\",label_bouton=\"Aide - PDF\",icone=\"file pdf\")\n  // this.vspace = -1 //Ajoute un \\vspace{-1cm} avant l'énoncé ce qui peut être pratique pour des exercices avec des figures.\n  this.pas_de_version_LaTeX = false\n  this.QCM = false // Pour les exercices de type QCM : contient un tableau.\n  this.QCM_disponible = false // Pour ajouter une case à cocher Mode QCM qui permet de changer le statut de this.ModeQCM\n  this.ModeQCM = false // Pour choisir la version QCM ou la version classique (false = version classique)\n\n  this.MG32editable = false //pas d'interface par défaut pour les figures MG32\n  this.nouvelle_version = function (numero_de_l_exercice) {}\n  this.liste_packages = [] // string ou liste de string avec le nom des packages spécifiques à ajouter dans le préambule\n  //this.type_exercice = \"MG32\";\n  //this.taille_div_MG32 = [500, 450];\n  //this.type_exercice = \"Scratch\"\n  // this.QCM=[\"Quels sont les nombres pairs ?\",[7,12,34,25,18],[0,1,1,0,1]] =>[\"La question\",[les réponses],[bonne=1 et mauvaise=0]]\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/ClasseExercice.js?");

/***/ }),

/***/ "./src/js/modules/operations.js":
/*!**************************************!*\
  !*** ./src/js/modules/operations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Operation)\n/* harmony export */ });\n/* harmony import */ var _outils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _2d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2d.js */ \"./src/js/modules/2d.js\");\n/* harmony import */ var mathjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mathjs */ \"./node_modules/.pnpm/mathjs@9.3.2/node_modules/mathjs/lib/esm/entry/pureFunctionsAny.generated.js\");\n/* globals sortie_html */\n\n\n\nconst math = { format: mathjs__WEBPACK_IMPORTED_MODULE_2__.format }\n/**\n *\n * Pose une opération\n * @Auteur Jean-Claude Lhote\n * les types possibles sont : addition, soustraction, multiplication, division, additiond, soustractiond, multiplicationd, divisiond\n * Le paramètre précision précise pour divisiond, le nombre de chiffres après la virgule dans le quotient.\n */\n\nfunction Operation ({ operande1 = 1, operande2 = 2, type = 'addition', precision = 0 }) { // precision est pour le quotient décimal\n  let Code\n  const nombreDeChiffresApresLaVirgule = function (x) {\n    const s = Number(x).toString()\n    const pe = Number(Math.floor(x)).toString()\n    if (pe.length == s.length) return 0\n    return s.length - pe.length - 1\n  }\n\n  const cacherleszerosdevant = function (chaine) {\n    let blancs = ''\n    while (chaine[0] == '0') {\n      chaine = chaine.substr(1)\n      blancs += ' '\n    }\n    for (let i = 0; i < chaine.length; i++) {\n      blancs += `${chaine[i]}`\n    }\n    return blancs\n  }\n\n  const DivisionPosee3d = function (divid, divis, precision = 0) {\n    const objets = []; let zeroutile = false; const periode = 0\n    precision = Math.min(precision, nombreDeChiffresApresLaVirgule((0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(divid / divis)))\n    const decalage = nombreDeChiffresApresLaVirgule(divis)\n    const dec1 = nombreDeChiffresApresLaVirgule(divid)\n    if (divid < divis) { zeroutile = true }\n    divis = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${divis}*10^${decalage}`)\n    divid = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${divid}*10^${decalage + dec1}`)\n    let dec2 = nombreDeChiffresApresLaVirgule(divid)\n    dec2 = precision - dec2 - dec1\n    divid = math.format(divid * 10 ** dec2, { notation: 'auto', lowerExp: -12, upperExp: 12, precision: 12 })\n    const ecriresoustraction = function (upos, P) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)('-', upos - P.length - 0.5, 10 - i * 2, 'milieu', 'black', 1.2, 'middle', true))\n      for (let k = 0; k < P.length; k++) {\n        objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(P[P.length - k - 1], upos - k - 1, 10 - i * 2, 'milieu', 'black', 1.2, 'middle', true))\n      }\n    }\n    const ecrirereste = function (upos, R) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(i - 1, 9.6 - i * 2, i + R.length, 9.6 - i * 2))\n      for (let k = 0; k < R.length; k++) {\n        objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(R[R.length - k - 1], upos - k - 1, 9 - i * 2, 'milieu', 'black', 1.2, 'middle', true))\n      }\n    }\n    const ecrirequotient = function (x, Q) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(Q, n + 1.5 + x, 10, 'milieu', 'black', 1.2, 'middle', true))\n    }\n\n    const divd = []; const Q = []; const R = []; const P = []\n    const dividende = Number(divid).toString()\n    const diviseur = Number(divis).toString()\n    const n = Math.log10((0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.ordreDeGrandeur)(divid, 1)) // nombre de chiffres du dividende\n    const m = Math.log10((0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.ordreDeGrandeur)(divis, 1)) // nombre de chiffre du diviseur\n    let upos = m\n\n    for (let i = 0; i < n; i++) { // on écrit le dividende\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(dividende[i], i, 11, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    for (let i = 0; i < m; i++) { // on écrit le diviseur\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(diviseur[i], i + n + 1.5, 11, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    if (dec1 + dec2 != 0) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', n - dec1 - dec2 - 1 + 0.5, 11, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(n, 11.5, n, 11.5 - n * 2)) // on trace le trait vertical\n\n    let i = 0\n    divd.push(dividende.substr(0, m))\n    if (parseInt(divd[0]) < divis) {\n      divd[0] += dividende.substr(m, 1)\n      if (divis / (10 ** dec2) < divis && zeroutile) ecrirequotient(-1, '0')\n      upos++\n    } else if (zeroutile) { ecrirequotient(-1, '0') }\n    while (upos <= n) {\n      Q.push(Number(Math.floor(parseInt(divd[i]) / divis)).toString())\n      R.push(Number(parseInt(divd[i]) % divis).toString())\n      P.push('')\n      if (Q[i] == '0') {\n        for (let z = 0; z < m; z++) {\n          P[i] += '0'\n        }\n      } else {\n        P[i] += Number(parseInt(Q[i]) * divis).toString()\n      }\n      ecriresoustraction(upos, P[i])\n      if (upos < n) {\n        R[i] += dividende.substr(upos, 1)\n        ecrirereste(upos + 1, R[i])\n      } else {\n        ecrirereste(upos, R[i])\n      }\n      //  for (let r=0;r<i;r++){\n      //      if (R[i]==R[r]) periode=i-r\n      //  }\n      divd.push(R[i])\n      upos++\n\n      //  if (periode!=0) {\n      //      ecrirequotient(i,'...')\n      //      break\n      //  }\n      //  else\n      ecrirequotient(i, Q[i])\n      i++\n    }\n    if (precision > 0 && periode == 0) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', n + 1 + i - dec2 - dec1, 10, 'milieu', 'black', 1.2, 'middle', true))\n    } else if (periode != 0) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 2 * n - dec2 - dec1, 10, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(n, 10.5, n + m + i, 10.5)) // on trace le trait horizontal\n\n    const code = (0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({ xmin: -1.5, ymin: 10 - 2 * n, xmax: n + m + 10, ymax: 11.5, pixelsParCm: 20, scale: 0.8 }, objets)\n    return code\n  }\n\n  const AdditionPosee3d = function (operande1, operande2) {\n    const dec1 = nombreDeChiffresApresLaVirgule(operande1)\n    const dec2 = nombreDeChiffresApresLaVirgule(operande2)\n    const decalage = Math.max(dec1, dec2)\n    operande1 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande1}*10^${decalage}`)\n    operande2 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande2}*10^${decalage}`)\n    let code = ''; const objets = []\n    let sop1 = Number(operande1).toString()\n    let sop2 = Number(operande2).toString()\n\n    let sresultat, resultat, lresultat\n    const lop1 = sop1.length\n    const lop2 = sop2.length\n    const longueuroperandes = Math.max(lop1, lop2)\n    let retenues = ' '\n    if (lop1 > lop2) { // si op1 a plus de chiffres qu'op2 on complète op2 avec des zéros.\n      for (let j = 0; j < lop1 - lop2; j++) {\n        sop2 = ' ' + sop2\n      }\n    } else if (lop2 > lop1) { // on fait pareil pour op1 si c'est op2 le plus 'grand'\n      for (let j = 0; j < lop2 - lop1; j++) {\n        sop1 = ' ' + sop1\n      }\n    }\n    // les deux operande ont le même nomre de chiffres\n    for (let i = longueuroperandes - 1; i > 0; i--) { // on construit la chaine des retenues.\n      if (parseInt(sop1[i]) + parseInt(sop2[i]) > 9) {\n        retenues = `1${retenues}`\n      } else {\n        retenues = ` ${retenues}`\n      }\n    }\n    retenues = ' ' + retenues\n    sop1 = ` ${sop1}`\n    sop2 = `+${sop2}`\n    resultat = operande1 + operande2\n    sresultat = Number(resultat).toString()\n    lresultat = sresultat.length\n    for (let i = 0; i < longueuroperandes + 1 - lresultat; i++) {\n      sresultat = ` ${sresultat}`\n    }\n    for (let i = 0; i < longueuroperandes + 1; i++) {\n      if (sop1[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop1[i], i * 0.6, 4, 'milieu', 'black', 1.2, 'middle', true))\n      if (sop2[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop2[i], i * 0.6, 3, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(0, 2, (longueuroperandes + 1) * 0.6, 2))\n      if (retenues[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(retenues[i], i * 0.6, 2.5, 'milieu', 'red', 0.8, 'middle', true))\n      if (sresultat[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sresultat[i], i * 0.6, 1, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    if (decalage != 0) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 4, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 3, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 1, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    code += (0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({ xmin: -0.5, ymin: 0, xmax: longueuroperandes, ymax: 5, pixelsParCm: 20, scale: 0.8 }, objets)\n    return code\n  }\n\n  const SoustractionPosee3d = function (operande1, operande2) {\n    const dec1 = nombreDeChiffresApresLaVirgule(operande1)\n    const dec2 = nombreDeChiffresApresLaVirgule(operande2)\n    const decalage = Math.max(dec1, dec2)\n    operande1 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande1}*10^${decalage}`)\n    operande2 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande2}*10^${decalage}`)\n    let code = ''; let sop1; let sop2; const objets = []\n    if (operande1 < operande2) {\n      sop2 = Number(operande1).toString()\n      sop1 = Number(operande2).toString()\n    } else {\n      sop1 = Number(operande1).toString()\n      sop2 = Number(operande2).toString()\n    }\n    let sresultat, resultat, lresultat\n    const lop1 = sop1.length\n    const lop2 = sop2.length\n    const longueuroperandes = lop1\n    let retenues = '00'\n    if (lop1 > lop2) { // si op1 a plus de chiffres qu'op2 on complète op2 avec des blancs.\n      for (let j = 0; j < lop1 - lop2; j++) {\n        sop2 = ' ' + sop2\n      }\n    }\n\n    // les deux operande ont le même nomre de chiffres\n    for (let i = longueuroperandes - 1; i >= lop1 - lop2; i--) { // on construit la chaine des retenues.\n      if (parseInt(sop1[i]) < (parseInt(sop2[i]) + parseInt(retenues.charAt(0)))) {\n        retenues = `1${retenues}`\n      } else {\n        retenues = `0${retenues}`\n      }\n    }\n    sop1 = ` ${sop1}`\n    sop2 = `-${sop2}`\n    retenues = `0${retenues}`\n    resultat = operande1 - operande2\n    sresultat = Number(resultat).toString()\n    lresultat = sresultat.length\n    for (let i = 0; i < longueuroperandes + 1 - lresultat; i++) {\n      sresultat = ` ${sresultat}`\n    }\n    for (let i = 0; i < longueuroperandes + 1; i++) {\n      if (retenues[i] != '0') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(retenues[i], i * 0.6 + 0.4, 4.1, 'milieu', 'red', 0.8, 'middle', true))\n      if (sop1[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop1[i], i * 0.6, 4, 'milieu', 'black', 1.2, 'middle', true))\n      if (sop2[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop2[i], i * 0.6, 3, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(0, 2, (longueuroperandes + 1) * 0.6, 2))\n      if (retenues[i] != '0') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(retenues[i], i * 0.6, 2.6, 'milieu', 'blue', 0.8, 'middle', true))\n      if (sresultat[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sresultat[i], i * 0.6, 1, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    if (decalage != 0) {\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 4, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 3, 'milieu', 'black', 1.2, 'middle', true))\n      objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + 0.6 * (longueuroperandes - decalage), 1, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    code += (0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({ xmin: -0.5, ymin: 0, xmax: longueuroperandes, ymax: 5, pixelsParCm: 20, scale: 0.8 }, objets)\n    return code\n  }\n  const MultiplicationPosee3d = function (operande1, operande2) {\n    let code; let sop1; let sop2; const objets = []; let dec1; let dec2; let operandex; let lignesinutiles = 0\n\n    const produits = []; let strprod; const sommes = []\n    if (operande1 < operande2) {\n      operandex = operande1\n      operande1 = operande2\n      operande2 = operandex\n    }\n    dec1 = nombreDeChiffresApresLaVirgule(operande1)\n    dec2 = nombreDeChiffresApresLaVirgule(operande2)\n    operande1 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande1}*10^${dec1}`)\n    operande2 = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande2}*10^${dec2}`)\n    sop1 = Number(operande1).toString()\n    sop2 = Number(operande2).toString()\n    let sresultat, resultat, lresultat\n    const lop1 = sop1.length\n    const lop2 = sop2.length\n    const longueurtotale = lop1 + lop2 + 1\n    const retenues = []\n    for (let i = 0; i < sop2.length; i++) {\n      retenues.push('0')\n      produits.push('')\n      for (let k = 0; k < i; k++) {\n        retenues[i] = `${retenues[i]}0`\n        produits[i] = `${produits[i]}°`\n      }\n      if (sop2[lop2 - i - 1] != '0') {\n        for (let j = 0; j < sop1.length; j++) {\n          strprod = parseInt(sop1[lop1 - j - 1] * parseInt(sop2[lop2 - i - 1])) + parseInt(retenues[i][0])\n          retenues[i] = `${Number(Math.floor(strprod / 10)).toString()}${retenues[i]}`\n          produits[i] = `${Number(strprod % 10).toString()}${produits[i]}`\n        }\n        produits[i] = `${retenues[i][0]}${produits[i]}`\n      } else {\n        for (let j = 0; j < sop1.length; j++) {\n          retenues[i] = `0${retenues[i]}`\n          produits[i] = `°${produits[i]}`\n        }\n      }\n    }\n\n    for (let i = lop2; i < longueurtotale; i++) {\n      sop2 = ` ${sop2}`\n    }\n    for (let i = lop1; i <= longueurtotale; i++) {\n      sop1 = ` ${sop1}`\n    }\n    for (let i = 0; i < lop2; i++) {\n      for (let j = retenues[i].length; j <= longueurtotale; j++) {\n        retenues[i] = `0${retenues[i]}`\n      }\n    }\n    resultat = (0,_outils_js__WEBPACK_IMPORTED_MODULE_0__.calcul)(`${operande1}*${operande2}`)\n    sresultat = Number(resultat).toString()\n    lresultat = sresultat.length\n    for (let i = 0; i < lop2; i++) {\n      for (let j = produits[i].length; j <= lresultat; j++) {\n        produits[i] = `0${produits[i]}`\n      }\n    }\n    retenues.push('0')\n    for (let i = 0; i < lresultat - 1; i++) {\n      sommes.push(0)\n      sommes[i] += parseInt(retenues[lop2][0])\n      for (let j = 0; j < lop2; j++) {\n        if (produits[j][lresultat - i] != '0' && produits[j][lresultat - i] != '°') {\n          sommes[i] += parseInt(produits[j][lresultat - i])\n        }\n      }\n      retenues[lop2] = `${Number(Math.floor(sommes[i] / 10)).toString()[0]}${retenues[lop2]}`\n    }\n    for (let i = 0; i < lop2; i++) {\n      produits[i] = cacherleszerosdevant(produits[i])\n      for (let j = produits[i].length; j <= longueurtotale; j++) {\n        produits[i] = ` ${produits[i]}`\n      }\n    }\n    sop2 = `×${sop2}`\n    for (let i = lresultat; i <= longueurtotale; i++) {\n      sresultat = ` ${sresultat}`\n    }\n    for (let i = retenues[lop2].length; i <= longueurtotale; i++) {\n      retenues[lop2] = `0${retenues[lop2]}`\n    }\n    for (let i = 0; i <= longueurtotale; i++) {\n      if (sop1[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop1[i], i * 0.6, 7, 'milieu', 'black', 1.2, 'middle', true))\n      if (sop2[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sop2[i], i * 0.6, 6, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    if (dec1 != 0) { objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + (longueurtotale - dec1) * 0.6, 7, 'milieu', 'black', 1.2, 'middle', true)) }\n    if (dec2 != 0) { objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + (longueurtotale - dec2) * 0.6, 6, 'milieu', 'black', 1.2, 'middle', true)) }\n\n    for (let j = 0; j < lop2; j++) {\n      if (sop2[longueurtotale - j] != '0') {\n        for (let i = 0; i <= longueurtotale; i++) {\n          if (produits[j][i] != ' ' & produits[j][i] != '°') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(produits[j][i], i * 0.6, 5 - j + lignesinutiles, 'milieu', 'black', 1.2, 'middle', true))\n          if (retenues[j][i] != '0') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(retenues[j][i], i * 0.6, 5.5 - j + lignesinutiles, 'milieu', 'blue', 0.7, 'middle', true))\n        }\n      } else { lignesinutiles++ }\n    }\n\n    for (let i = 0; i <= longueurtotale; i++) {\n      if (retenues[lop2][i] != '0') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(retenues[lop2][i], i * 0.6, 5.5 - lop2 + lignesinutiles, 'milieu', 'red', 0.7, 'middle', true))\n    }\n    objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(0, 5.2 - lop2 + lignesinutiles, (longueurtotale + 1) * 0.6, 5.2 - lop2 + lignesinutiles))\n    objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.segment)(0, 5.7, (longueurtotale + 1) * 0.6, 5.7))\n    for (let i = 0; i <= longueurtotale; i++) {\n      if (sresultat[i] != ' ') objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(sresultat[i], i * 0.6, 4.5 - lop2 + lignesinutiles, 'milieu', 'black', 1.2, 'middle', true))\n    }\n    if (dec1 + dec2 != 0) { objets.push((0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.texteParPosition)(',', 0.3 + (longueurtotale - dec2 - dec1) * 0.6, 4.5 - lop2 + lignesinutiles, 'milieu', 'black', 1.2, 'middle', true)) }\n\n    code = (0,_2d_js__WEBPACK_IMPORTED_MODULE_1__.mathalea2d)({ xmin: -0.5, ymin: 4 - lop2, xmax: longueurtotale + 2, ymax: 8, pixelsParCm: 20, scale: 0.8 }, objets)\n\n    return code\n  }\n\n  switch (type) {\n    case 'addition':\n      if (sortie_html) { Code = AdditionPosee3d(operande1, operande2) } else { Code = `$\\\\opadd[decimalsepsymbol={,}]{${operande1}}{${operande2}}$` }\n\n      break\n    case 'soustraction':\n      if (sortie_html) { Code = SoustractionPosee3d(operande1, operande2) } else { Code = `$\\\\opsub[decimalsepsymbol={,}]{${operande1}}{${operande2}}$` }\n      break\n    case 'multiplication':\n      if (sortie_html) { Code = MultiplicationPosee3d(operande1, operande2) } else { Code = `$\\\\opmul[decimalsepsymbol={,}]{${operande1}}{${operande2}}$` }\n      break\n    case 'division':\n      if (sortie_html) { Code = DivisionPosee3d(operande1, operande2, precision) } else { Code = `$\\\\opdiv[displayintermediary=all,voperation=top,period,decimalsepsymbol={,},shiftdecimalsep=none]{${operande1}}{${operande2}}$` }\n      break\n    case 'divisionE':\n      if (sortie_html) { Code = DivisionPosee3d(operande1, operande2, 0) } else { Code = `$\\\\opidiv{${operande1}}{${operande2}}$` }\n      break\n  }\n  return Code\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/modules/operations.js?");

/***/ })

}]);