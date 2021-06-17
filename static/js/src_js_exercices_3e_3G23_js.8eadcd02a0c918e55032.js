/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_3e_3G23_js"],{

/***/ "./src/js/exercices/3e/3G23.js":
/*!*************************************!*\
  !*** ./src/js/exercices/3e/3G23.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ TrianglesSemblables)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst titre = 'Reconnaître des triangles semblables dans différentes configurations'\n\n/**\n * 3G23 reconnaitre des triangles égaux\n * @author Jean-Claude Lhote et Sébastien Lozano\n */\nfunction TrianglesSemblables() {\n\t'use strict';\n\t_ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this);\n\tthis.debug = false;\n\tthis.titre = titre;\n\tthis.nb_questions = 1;\n\tthis.nb_questions_modifiable = false;\n\tthis.nb_cols = 1;\n\tthis.nb_cols_corr = 1;\n\tthis.nouvelle_version = function () {\n\t\tthis.liste_questions = []; // Liste de questions\n\t\tthis.liste_corrections = []; // Liste de questions corrigées\n\t\tlet texte = '';\n\t\tlet texte_corr = '';\n\t\tlet type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 1);\n\t\tswitch (type_de_questions) {\n\t\t\tcase 1:\n\t\t\t\tlet trouve = false, aireABC, A, B, C, M, p, q, r, s, X, G, Gq, nom1, grid;\n\t\t\t\t// on génère le triangle ABC avec une contrainte sur son aire\n\t\t\t\twhile (!trouve) {\n\t\t\t\t\tA = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 3]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 3]), 'A'); // le point A !\n\t\t\t\t\tB = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([6, 9]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([6, 9]), 'B'); // le point B !\n\t\t\t\t\tC = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(B, A, 90, 'C'); // le point C à partir de B par rotation autour de A!\n\t\t\t\t\tC.x += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 3, 6]); // on décale l'abscise de C de 0, 3 ou 6 !\n\t\t\t\t\tC.y += (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([-3, 0, 3]); // on décale l'abscise de C de -3, 0 ou 3 !\n\t\t\t\t\tp = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.polygone)(A, B, C); // on trace le polygone ABC\n\t\t\t\t\taireABC = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.aireTriangle)(p); // Je savais bien que cette formule servirait un jour !\n\t\t\t\t\tif (aireABC < 11 && aireABC > 5)\n\t\t\t\t\t\ttrouve = true;\n\t\t\t\t};\n\t\t\t\tG = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.barycentre)(p); // le barycentre de ABC\n\t\t\t\tlet angleChoisi1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 90, 270]);\n\t\t\t\tp = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(p, G, angleChoisi1); // on tourne ABC de façon aléatoire autour de son barycentre\n\t\t\t\tp.couleurDeRemplissage = 'gray'; //remplissage de ABC\n\t\t\t\tp.opaciteDeRemplissage = 0.2; //0.5;//remplissage de ABC\n\t\t\t\tnom1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.nommePolygone)(p, 'ABC', 0.4); // on  nomme ABC en plaçant A,B et C à 0,4\n\t\t\t\tgrid = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.grille)(-3, -3, 27, 18, 'gray', 0.4, 1); // on trace une grille\n\t\t\t\tM = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(9, 12); // un point M fixe pour tourner autour\t\t\t\t\n\t\t\t\tq = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(p, M, 90); // on fait tourner ABC autour de M de 90°\n\n\t\t\t\t// on a besoin de récupérer le polygone non tracé\n\t\t\t\tGq = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.barycentre)(q); // on construit son barycentre\n\n\t\t\t\t//let angleChoisi2 = 270; \n\t\t\t\tlet angleChoisi2 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([0, 90, 180, 270]);\n\t\t\t\tr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(q, Gq, angleChoisi2); // on fait tourner q encore autour de son barycentre\n\t\t\t\tX = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.milieu)(r.listePoints[0], r.listePoints[1]); // on place le milieu des deux premiers points de la figure obtenue qui sont les images des points A et B initiaux\t\n\t\t\t\ts = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(r, X, 180); // on fait topurner r autour du milieu des deux extremites du plus grand côté\n\t\t\t\tr.couleurDeRemplissage = 'red'; // solution 1 en rouge\n\t\t\t\tr.opaciteDeRemplissage = 0.2; //0.5; // \n\t\t\t\ts.couleurDeRemplissage = 'blue'; //solution 2 en bleu\n\t\t\t\ts.opaciteDeRemplissage = 0.2; //0.5; //\n\n\n\t\t\t\t// mes ajouts par rapport à la figure de JC\t\t\t\t\n\t\t\t\t// on fixe une place pour D et E\n\t\t\t\tlet D = r.listePoints[0];\n\t\t\t\tD.nom = 'D';\n\t\t\t\tlet E = r.listePoints[1];\n\t\t\t\tE.nom = 'E';\n\t\t\t\t// on crée un tableau avec les noms proposé pour les points\t\t\t\t\n\t\t\t\tlet tabPointsNames = ['F', 'G', 'H', 'I'];\n\t\t\t\t// on mélange le tableau \n\t\t\t\ttabPointsNames = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.shuffle)(tabPointsNames);\n\t\t\t\t//on place les deux solutions\n\t\t\t\tlet I = r.listePoints[2];\n\t\t\t\t//I.nom='I';\n\t\t\t\tI.nom = tabPointsNames[0];\n\t\t\t\tlet I1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(I, X, 180);\n\t\t\t\t//I1.nom='I1';\n\t\t\t\tI1.nom = tabPointsNames[1];\n\t\t\t\t// on place les mauvaises solutions\n\t\t\t\tlet F = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(I1.x + 1, I1.y + 1);\n\t\t\t\t//F.nom='F';\n\t\t\t\tF.nom = tabPointsNames[2];\n\t\t\t\tlet L = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.point)(I.x - 1, I.y - 3);\n\t\t\t\t//L.nom='L';\n\t\t\t\tL.nom = tabPointsNames[3];\n\t\t\t\t//on trace le segment [DE] en pointillés pour que la figure soit plus lisible\n\t\t\t\tlet sgmt_DE = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(D, E, 'blue');\n\t\t\t\tsgmt_DE.pointilles = true;\n\t\t\t\tsgmt_DE.epaisseur = 1.5;\n\n\t\t\t\t// on prépare la fenetre mathalea2d\n\t\t\t\tlet fenetreMathalea2D = { xmin: -3, ymin: -3, xmax: 27, ymax: 18, pixelsParCm: 20, scale: 0.5 };\n\n\t\t\t\t// on prépare les corrections\n\t\t\t\tlet centre_rot = {\n\t\t\t\t\tsol1: (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(p.listePoints[1], E), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(D, p.listePoints[0])),\n\t\t\t\t\tsol2: (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(E, p.listePoints[0]), (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(p.listePoints[1], D))\n\t\t\t\t};\n\t\t\t\tlet vect_trans = {\n\t\t\t\t\tsol1: (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur)(p.listePoints[1], E),\n\t\t\t\t\tsol2: (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.vecteur)(p.listePoints[1], D)\n\t\t\t\t};\n\t\t\t\tlet transformationAnimee = {\n\t\t\t\t\tsol1: ``,\n\t\t\t\t\t//nature_sol1:``,\n\t\t\t\t\tsol2: ``,\n\t\t\t\t};\n\t\t\t\t// pour construire les droites et les centres passant par les centres de rotations\n\t\t\t\tlet d, d1, d2, d3, d4, d5, J1, J2;\n\t\t\t\tswitch (angleChoisi2) {\n\t\t\t\t\tcase 0:\n\t\t\t\t\t\ttransformationAnimee.sol1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, M, 90, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol1=`rotation`;\n\t\t\t\t\t\t// la 1ere compo\n\t\t\t\t\t\td = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(M, Gq);\n\t\t\t\t\t\td1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d, M, -45);\n\t\t\t\t\t\td2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d, Gq, 0);\n\t\t\t\t\t\tJ1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)(d1, d2); // centre de la composée, ici l'angle vaut 90\n\n\t\t\t\t\t\t//2eme compo\n\t\t\t\t\t\td3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(J1, X);\n\t\t\t\t\t\td4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d3, J1, -45);\n\t\t\t\t\t\td5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d3, X, 90);\n\t\t\t\t\t\tJ2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)(d4, d5); // centre après la seconde composition angle 270 à 2pi près\t\t\t\t\t\t\n\t\t\t\t\t\ttransformationAnimee.sol2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, J2, -90, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol2=`rotation`;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 90:\n\t\t\t\t\t\ttransformationAnimee.sol1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, centre_rot.sol1, 180, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol1=`rotation`;\n\t\t\t\t\t\ttransformationAnimee.sol2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.translationAnimee)(p, vect_trans.sol2, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol2=`translation`;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 180:\n\t\t\t\t\t\t// la 1ere compo\n\t\t\t\t\t\td = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(M, Gq);\n\t\t\t\t\t\td1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d, M, -45);\n\t\t\t\t\t\td2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d, Gq, 90);\n\t\t\t\t\t\tJ1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)(d1, d2); // centre de la composée, ici l'angle vaut 270 à 2pi près\n\n\t\t\t\t\t\t//2eme compo\n\t\t\t\t\t\td3 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.droite)(J1, X);\n\t\t\t\t\t\td4 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d3, J1, -135);\n\t\t\t\t\t\td5 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotation)(d3, X, 90);\n\t\t\t\t\t\tJ2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointIntersectionDD)(d4, d5); // centre après la seconde composition angle 450 à 2pi près\t\t\t\t\t\t\n\t\t\t\t\t\ttransformationAnimee.sol1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, J1, -90, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol1=`rotation`;\n\t\t\t\t\t\ttransformationAnimee.sol2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, J2, 90, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol2=`rotation`;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\tcase 270:\n\t\t\t\t\t\ttransformationAnimee.sol1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.translationAnimee)(p, vect_trans.sol1, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol1=`translation`;\t\t\t\t\t\t\n\t\t\t\t\t\ttransformationAnimee.sol2 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.rotationAnimee)(p, centre_rot.sol2, 180, 'begin=\"0s\" dur=\"4s\" repeatCount=\"indefinite\"');\n\t\t\t\t\t\t//transformationAnimee.nature_sol2=`rotation`;\n\t\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t\t// DE = AB\n\t\t\t\tlet seg_DE_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(D, E, 'blue');\n\t\t\t\tseg_DE_corr.epaisseur = 2;\n\t\t\t\tlet seg_AB_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(p.listePoints[0], p.listePoints[1], 'blue');\n\t\t\t\tseg_AB_corr.epaisseur = 2;\n\t\t\t\t//DI = AC ou EI1 = AC\n\t\t\t\tlet seg_DI_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(D, I, 'red');\n\t\t\t\tlet seg_EI1_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(E, I1, 'red');\n\t\t\t\tseg_DI_corr.epaisseur = 2;\n\t\t\t\tseg_EI1_corr.epaisseur = 2;\n\t\t\t\tlet seg_AC_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(p.listePoints[0], p.listePoints[2], 'red');\n\t\t\t\tseg_AC_corr.epaisseur = 2;\n\t\t\t\t//EI = BC ou DI1 = BC\n\t\t\t\tlet seg_EI_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(E, I, 'green');\n\t\t\t\tlet seg_DI1_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(D, I1, 'green');\n\t\t\t\tseg_EI_corr.epaisseur = 2;\n\t\t\t\tseg_DI1_corr.epaisseur = 2;\n\t\t\t\tlet seg_BC_corr = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.segment)(p.listePoints[1], p.listePoints[2], 'green');\n\t\t\t\tseg_BC_corr.epaisseur = 2;\n\t\t\t\t// angle ABC = DEI ou ABC = EDI1\n\t\t\t\tlet ang_ABC = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(p.listePoints[0], p.listePoints[1], p.listePoints[2]);\n\t\t\t\tlet ang_DEI = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(D, E, I);\n\t\t\t\tlet ang_EDI1 = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(E, D, I1);\n\t\t\t\t// angle BCA = EID ou  BCA = DI1E\n\t\t\t\tlet ang_BCA = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(p.listePoints[1], p.listePoints[2], p.listePoints[0]);\n\t\t\t\tlet ang_EID = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(E, I, D);\n\t\t\t\tlet ang_EI1D = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(E, I1, D);\n\t\t\t\t// angle CAB = IDE ou CAB = I1ED\n\t\t\t\tlet ang_CAB = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(p.listePoints[2], p.listePoints[0], p.listePoints[1]);\n\t\t\t\tlet ang_IDE = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(I, D, E);\n\t\t\t\tlet ang_I1ED = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.angleOriente)(I1, E, D);\n\n\t\t\t\tlet codages_correction = {\n\t\t\t\t\tsol1: [\n\t\t\t\t\t\t// les segments\t\t\t\t\t\t\n\t\t\t\t\t\tseg_AB_corr,\n\t\t\t\t\t\tseg_DE_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('×', 'blue', p.listePoints[0], p.listePoints[1], D, E),\n\t\t\t\t\t\tseg_AC_corr,\n\t\t\t\t\t\tseg_DI_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('||', 'red', p.listePoints[0], p.listePoints[2], D, I),\n\t\t\t\t\t\tseg_BC_corr,\n\t\t\t\t\t\tseg_EI_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('O', 'green', p.listePoints[1], p.listePoints[2], I, E),\n\t\t\t\t\t\t//les angles\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[1], p.listePoints[0], 0.8), p.listePoints[1], ang_ABC, true, 'red'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(E, D, 0.8), E, ang_DEI, true, 'red'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[2], p.listePoints[1], 0.8), p.listePoints[2], ang_BCA, true, 'blue'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(I, E, 0.8), I, ang_EID, true, 'blue'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[0], p.listePoints[2], 0.8), p.listePoints[0], ang_CAB, true, 'green'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(D, I, 0.8), D, ang_IDE, true, 'green')\n\t\t\t\t\t],\n\t\t\t\t\tsol2: [\n\t\t\t\t\t\t//les segments\n\t\t\t\t\t\tseg_AB_corr,\n\t\t\t\t\t\tseg_DE_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('×', 'blue', p.listePoints[0], p.listePoints[1], D, E),\n\t\t\t\t\t\tseg_BC_corr,\n\t\t\t\t\t\tseg_DI1_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('O', 'green', p.listePoints[1], p.listePoints[2], D, I1),\n\t\t\t\t\t\tseg_AC_corr,\n\t\t\t\t\t\tseg_EI1_corr,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.codeSegments)('||', 'red', p.listePoints[0], p.listePoints[2], E, I1),\n\t\t\t\t\t\t// les angles\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[1], p.listePoints[0], 0.8), p.listePoints[1], ang_ABC, true, 'red'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(D, E, 0.8), D, ang_EDI1, true, 'red'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[2], p.listePoints[1], 0.8), p.listePoints[2], ang_BCA, true, 'blue'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(I1, E, 0.8), I1, ang_EI1D, true, 'blue'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(p.listePoints[0], p.listePoints[2], 0.8), p.listePoints[0], ang_CAB, true, 'green'),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.arc)((0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.pointSurSegment)(E, I1, 0.8), E, ang_I1ED, true, 'green')\n\t\t\t\t\t]\n\t\t\t\t};\n\n\t\t\t\t// on crée un objet pour stocker les figures et les corrections\n\t\t\t\tlet figures = {\n\t\t\t\t\tenonce: `\n\t\t\t\t\t\tOù placer le point M pour que les triangles ABC et DEM soient égaux ? \n\t\t\t\t\t\t<br>En F ? En G? En H ? En I ?\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t${(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n\t\t\t\t\t\tfenetreMathalea2D,\n\t\t\t\t\t\tp,\n\t\t\t\t\t\tnom1,\n\t\t\t\t\t\tgrid,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\tsgmt_DE\n\t\t\t\t\t)}`,\n\t\t\t\t\tcorr_solution1: `\n\t\t\t\t\t\tLes triangles $ABC$ et $DE${I.nom}$ ont les mêmes longueurs et les mêmes angles.\n\t\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Donc le point ${I.nom} est un point qui convient`)}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t${(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n\t\t\t\t\t\tfenetreMathalea2D,\n\t\t\t\t\t\tp,\n\t\t\t\t\t\tnom1,\n\t\t\t\t\t\tgrid,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\tsgmt_DE,\n\t\t\t\t\t\tr,\n\t\t\t\t\t\t//s,\n\t\t\t\t\t\tcodages_correction.sol1\n\t\t\t\t\t)}`,\n\t\t\t\t\tcorr_solution2: `\n\t\t\t\t\t\tLes triangles $ABC$ et $DE${I1.nom}$ ont les mêmes longueurs et les mêmes angles.\t\t\n\t\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Donc le point ${I1.nom} est un point qui convient`)}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t${(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n\t\t\t\t\t\tfenetreMathalea2D,\n\t\t\t\t\t\tp,\n\t\t\t\t\t\tnom1,\n\t\t\t\t\t\tgrid,\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(D, E, I, I1, F, L),\n\t\t\t\t\t\tsgmt_DE,\n\t\t\t\t\t\t//r,\n\t\t\t\t\t\ts,\n\t\t\t\t\t\tcodages_correction.sol2\n\t\t\t\t\t)}`,\n\t\t\t\t\tcorr_animmee_sol1: `\n\t\t\t\t\t\tLes triangles $ABC$ et $DE${I.nom}$ ont les mêmes longueurs et les mêmes angles.\t\t\t\t\t\t\n\t\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Donc le point ${I.nom} est un point qui convient`)}\n\t\t\t\t\t\t<br>\t\t\t\t\t\t\n\t\t\t\t\t\t${(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n\t\t\t\t\t\tfenetreMathalea2D,\n\t\t\t\t\t\tp,\n\t\t\t\t\t\tnom1,\n\t\t\t\t\t\tgrid,\n\t\t\t\t\t\t//tracePoint(D,E,I,I1,F,L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(I1, F, L),\n\t\t\t\t\t\t//labelPoint(D,E,I,I1,F,L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(I1, F, L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.nommePolygone)(r, 'DE' + I.nom, 0.4),\n\t\t\t\t\t\t//sgmt_DE,\n\t\t\t\t\t\tr,\n\t\t\t\t\t\ttransformationAnimee.sol1,\n\t\t\t\t\t\tcodages_correction.sol1\n\t\t\t\t\t)}`,\n\t\t\t\t\tcorr_animmee_sol2: `\n\t\t\t\t\t\tLes triangles $ABC$ et $DE${I1.nom}$ ont les mêmes longueurs et les mêmes angles.\n\t\t\t\t\t\t<br> ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_en_couleur)(`Donc le point ${I1.nom} est un point qui convient`)}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\tUne solution est donc le point ${I1.nom}\n\t\t\t\t\t\t<br>\n\t\t\t\t\t\t${(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)(\n\t\t\t\t\t\tfenetreMathalea2D,\n\t\t\t\t\t\tp,\n\t\t\t\t\t\tnom1,\n\t\t\t\t\t\tgrid,\n\t\t\t\t\t\t//tracePoint(D,E,I,I1,F,L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.tracePoint)(I, F, L),\n\t\t\t\t\t\t//labelPoint(D,E,I,I1,F,L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.labelPoint)(I, F, L),\n\t\t\t\t\t\t(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.nommePolygone)(s, 'DE' + I1.nom, 0.4),\n\t\t\t\t\t\t//sgmt_DE,\n\t\t\t\t\t\t//r,\n\t\t\t\t\t\ts,\n\t\t\t\t\t\ttransformationAnimee.sol2,\n\t\t\t\t\t\tcodages_correction.sol2\n\t\t\t\t\t)}`\n\t\t\t\t};\n\t\t\t\t//texte=mathalea2d({xmin:-3,ymin:-3,xmax:27,ymax:18,pixelsParCm:20,scale:0.5},p,nom1,grid,r,s)\n\t\t\t\ttexte = `${figures.enonce}`;\n\t\t\t\tif (this.debug) {\n\t\t\t\t\ttexte += `<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`===== Première solution ======`)}<br>${figures.corr_animmee_sol1}`;\n\t\t\t\t\ttexte += `<br><br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`===== Seconde solution ======`)}<br>${figures.corr_animmee_sol2}`;\n\t\t\t\t} else {\n\t\t\t\t\ttexte_corr += `<br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`===== Première solution ======`)}<br>${figures.corr_animmee_sol1}`;\n\t\t\t\t\ttexte_corr += `<br><br>${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.texte_gras)(`===== Seconde solution ======`)}<br>${figures.corr_animmee_sol2}`;\n\t\t\t\t}\n\t\t\t\tthis.liste_questions[0] = texte;\n\t\t\t\tthis.liste_corrections[0] = texte_corr;\n\t\t\t\t(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n\t\t\t\tbreak;\n\n\t\t}\n\t};\n}\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/3e/3G23.js?");

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