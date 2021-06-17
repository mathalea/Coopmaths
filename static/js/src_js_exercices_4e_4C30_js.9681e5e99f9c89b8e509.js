/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_4e_4C30_js"],{

/***/ "./src/js/exercices/4e/4C30.js":
/*!*************************************!*\
  !*** ./src/js/exercices/4e/4C30.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Puissances_de_dix)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\nconst titre = 'Puissances de 10 : Le sens des règles de calculs'\n\n/**\n * 4C30 -- Puissances de 10\n * * Travailler des résultats automatisés\n * @author Sébastien Lozano\n */\nfunction Puissances_de_dix() {\n  \"use strict\";\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n  this.sup = 1;\n  this.titre = titre;\n  sortie_html\n    ? (this.consigne = \"Écrire sous la forme $\\\\mathbf{10^n}$.\")\n    : (this.consigne = \"Écrire sous la forme $10^n$.\");\n  sortie_html ? (this.spacing = 3) : (this.spacing = 2);\n  sortie_html ? (this.spacing_corr = 3) : (this.spacing_corr = 2);\n  this.nb_questions = 5;\n  this.correction_detaillee_disponible = true;\n  this.nb_cols_corr = 1;\n  this.sup = 1;\n  this.nouvelle_version = function (numero_de_l_exercice) {\n    let type_de_questions;\n    this.bouton_aide = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.modal_pdf)(\n      numero_de_l_exercice,\n      \"assets/pdf/FichePuissances-4N21.pdf\",\n      \"Aide mémoire sur les puissances (Sébastien Lozano)\",\n      \"Aide mémoire\"\n    );\n\n    this.liste_questions = []; // Liste de questions\n    this.liste_corrections = []; // Liste de questions corrigées\n\n    let type_de_questions_disponibles = [];\n    if (this.sup == 1) {\n      type_de_questions_disponibles = [1, 2, 3]; // produit, quotient et exponentiation de puissances de 10\n    } else if (this.sup == 2) {\n      type_de_questions_disponibles = [4, 5, 6, 7, 8, 9, 10, 11]; // calculs première série\n    } else if (this.sup == 3) {\n      type_de_questions_disponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; // calculs deuxième série\n    }\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(\n      type_de_questions_disponibles,\n      this.nb_questions\n    );\n\n    // pour pouvoir adapter les couleurs en cas de besoin\n    let coul0 = \"red\";\n    let coul1 = \"blue\";\n\n    for (\n      let i = 0,\n      exp0,\n      exp1,\n      exp,\n      coul_exp0,\n      coul_exp1,\n      lettre,\n      texte,\n      texte_corr,\n      cpt = 0;\n      i < this.nb_questions && cpt < 50;\n\n    ) {\n      type_de_questions = liste_type_de_questions[i];\n\n      exp0 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9);\n      exp1 = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 9, [exp0]);\n      exp = [exp0, exp1]; // on choisit deux exposants différents c'est mieux\n      lettre = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_depuis_chiffre)(i + 1); // on utilise des lettres pour les calculs\n\n      switch (type_de_questions) {\n        case 1: // produit de puissances de même base\n          texte = `$${lettre}=10^${exp[0]}\\\\times 10^${exp[1]}$`;\n\n          texte_corr = `$${lettre}=10^${exp[0]}\\\\times 10^${exp[1]}$`;\n          if (this.correction_detaillee) {\n            texte_corr += `<br>`;\n            texte_corr += `$${lettre}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n              10,\n              exp[0],\n              coul0\n            )} \\\\times ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(10, exp[1], coul1)}$`;\n          }\n          texte_corr += `<br>`;\n          texte_corr += `Il y a donc $\\\\mathbf{\\\\color{${coul0}}{${exp[0]}}~\\\\color{black}{+}~\\\\color{${coul1}}{${exp[1]}}}$ facteurs tous égaux à $10$`;\n          texte_corr += `<br>`;\n          texte_corr += `$${lettre}=10^{${exp[0]}+${exp[1]}} = 10^{${exp[0] + exp[1]\n            }}`;\n          // attention la base est de type str alors que la fonction switch sur un type number\n          //if (simpNotPuissance(10, exp[0] + exp[1]) != ` `) {\n          if ((exp[1] + exp[0]) % 2 == 0) {\n            texte_corr += `=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpNotPuissance)(10, exp[0] + exp[1])}`;\n          }\n          texte_corr += `$`;\n          texte_corr += `<br>`;\n          break;\n        case 2: // quotient de puissances de même base\n          // Pour que la couleur de la 10 associée à l'exposant max soit toujours rouge.\n          if (Math.max(exp[0], exp[1]) == exp[0]) {\n            coul_exp0 = coul0;\n            coul_exp1 = coul1;\n          } else {\n            coul_exp0 = coul1;\n            coul_exp1 = coul0;\n          }\n\n          texte = `$${lettre}=\\\\dfrac{10^${exp[0]}}{10^${exp[1]}}$`;\n\n          texte_corr = `$${lettre}=\\\\dfrac{10^${exp[0]}}{10^${exp[1]}}$`;\n          if (this.correction_detaillee) {\n            texte_corr += `<br><br>`;\n            texte_corr += `$${lettre}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n              10,\n              exp[0],\n              coul_exp0\n            )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(10, exp[1], coul_exp1)}}$`;\n          }\n          texte_corr += `<br><br>`;\n          texte_corr += `Il y a donc $\\\\mathbf{\\\\color{${coul1}}{${Math.min(\n            exp[0],\n            exp[1]\n          )}}}$ simplifications par $10$ possibles.`;\n          if (this.correction_detaillee) {\n            texte_corr += `<br><br>`;\n          }\n          if (exp[0] - exp[1] == 0) {\n            if (this.correction_detaillee) {\n              texte_corr += `$${lettre}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                `\\\\cancel{10}`,\n                exp[0],\n                coul_exp0\n              )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(`\\\\cancel{10}`, exp[0], coul_exp1)}}$`;\n            }\n            texte_corr += `<br><br>`;\n            texte_corr += `$${lettre}=1`;\n          } else if (exp[0] - exp[1] < 0) {\n            if (this.correction_detaillee) {\n              texte_corr += `$${lettre}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                `\\\\cancel{10}`,\n                exp[0],\n                coul_exp0\n              )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                `\\\\cancel{10}`,\n                exp[0],\n                coul_exp1\n              )}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(10, exp[1] - exp[0], coul_exp1)}}$`;\n            }\n            texte_corr += `<br><br>`;\n            texte_corr += `$${lettre}=\\\\dfrac{1}{10^{${exp[1]}-${exp[0]\n              }}}=\\\\dfrac{1}{10^{${exp[1] - exp[0]}}}`;\n            //if (simpNotPuissance(10, exp[1] - exp[0]) != ` `) {\n            if ((exp[1] - exp[0]) % 2 == 0) {\n              texte_corr += `=\\\\dfrac{1}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpNotPuissance)(\n                10,\n                exp[1] - exp[0]\n              )}}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpNotPuissance)(10, exp[0] - exp[1])}`;\n            } else {\n              texte_corr += `=10^{${exp[0] - exp[1]}}`;\n            }\n          } else {\n            if (this.correction_detaillee) {\n              texte_corr += `$${lettre}=\\\\dfrac{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                `\\\\cancel{10}`,\n                exp[1],\n                coul_exp0\n              )}\\\\times${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                10,\n                exp[0] - exp[1],\n                coul_exp0\n              )}}{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(`\\\\cancel{10}`, exp[1], coul_exp1)}}$`;\n            }\n            texte_corr += `<br><br>`;\n            texte_corr += `$${lettre}=10^{${exp[0]}-${exp[1]}}=10^{${exp[0] - exp[1]\n              }}`;\n            //if (simpNotPuissance(10, exp[0] - exp[1]) != ` `) {\n            // if ((exp[0] - exp[1])%2==0) { \n            //   texte_corr += `=${simpNotPuissance(10, exp[0] - exp[1])}`;\n            // }\n          }\n          texte_corr += `$`;\n          texte_corr += `<br>`;\n          break;\n        case 3: // exponentiation\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 4), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 4)]; // on redéfinit les deux exposants pour ne pas avoir d'écritures trop longues et pour éviter 1\n          texte = `$${lettre}=(10^${exp[0]})^{${exp[1]}}$`;\n\n          texte_corr = `$${lettre}=(10^${exp[0]})^{${exp[1]}}$`;\n          if (this.correction_detaillee) {\n            texte_corr += `<br>`;\n            texte_corr += `$${lettre}=\\\\color{${coul0}}{\\\\underbrace{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n              `(10^${exp[0]})`,\n              exp[1],\n              coul0\n            )}}_{${exp[1]}\\\\thickspace\\\\text{facteurs}}}$`;\n            texte_corr += `<br>`;\n            texte_corr += `$${lettre}=\\\\color{${coul0}}{\\\\underbrace{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n              `(\\\\color{${coul1}}{\\\\underbrace{${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.eclatePuissance)(\n                10,\n                exp[0],\n                coul1\n              )}}_{${exp[0]}\\\\thickspace\\\\text{facteurs}}}\\\\color{${coul0}})`,\n              exp[1],\n              coul0\n            )}}_{${exp[1]}\\\\times\\\\color{${coul1}}{${exp[0]\n              }}\\\\thickspace\\\\color{black}{\\\\text{facteurs}}}}$`;\n          }\n          texte_corr += `<br>`;\n          texte_corr += `Il y a donc $\\\\mathbf{\\\\color{${coul0}}{${exp[1]}}~\\\\color{black}{\\\\times}~\\\\color{${coul1}}{${exp[0]}}}$ facteurs tous égaux à $10$`;\n          texte_corr += `<br>`;\n          texte_corr += `$${lettre}=10^{${exp[0]}\\\\times${exp[1]}} = 10^{${exp[0] * exp[1]\n            }}`;\n          //if (simpNotPuissance(10, exp[0] * exp[1]) != ` `) {\n          // if ((exp[1] * exp[0])%2==0) {             \n          //   texte_corr += `= ${simpNotPuissance(10, exp[0] * exp[1])}`;\n          // }\n          texte_corr += `$`;\n          texte_corr += `<br>`;\n          break;\n        case 4:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1])]; // on a besoin de 3 exposants distincts\n          texte = `$\\\\dfrac{10^${exp[0]}\\\\times 100}{10^${exp[1]} \\\\times 10^${exp[2]}}$`;\n          texte_corr = `$\\\\dfrac{10^${exp[0]}\\\\times 100}{10^${exp[1]} \\\\times 10^${exp[2]}}`;\n          texte_corr += ` = \\\\dfrac{10^${exp[0]}\\\\times 10^{2}}{10^${exp[1]} \\\\times 10^${exp[2]}}`;\n          texte_corr += ` = \\\\dfrac{10^{${exp[0]}+2}}{10^{${exp[1]}+${exp[2]}}}`;\n          texte_corr += ` = \\\\dfrac{10^{${exp[0] + 2}}}{10^{${exp[1] + exp[2]\n            }}}`;\n          texte_corr += ` = 10^{${exp[0] + 2}-${exp[1] + exp[2]}}`;\n          texte_corr += ` = 10^{${exp[0] + 2 - exp[1] - exp[2]}}`;\n          if (\n            exp[0] + 2 - exp[1] - exp[2] == 0 ||\n            exp[0] + 2 - exp[1] - exp[2] == 1\n          ) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, exp[0] + 2 - exp[1] - exp[2]);\n          }\n          texte_corr += `$`;\n          break;\n        case 5:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1])]; // on a besoin de 2 exposants distincts\n          texte = `$\\\\dfrac{10^${exp[0]}\\\\times 1000}{10^${exp[1]}}$`;\n          texte_corr = `$\\\\dfrac{10^${exp[0]}\\\\times 1000}{10^${exp[1]}}`;\n          texte_corr += ` = \\\\dfrac{10^${exp[0]}\\\\times 10^3}{10^${exp[1]}}`;\n          texte_corr += ` = \\\\dfrac{10^{${exp[0]}+3}}{10^${exp[1]}}`;\n          texte_corr += ` = \\\\dfrac{10^{${exp[0] + 3}}}{10^${exp[1]}}`;\n          texte_corr += ` = 10^{${exp[0] + 3}-${exp[1]}}`;\n          texte_corr += ` = 10^{${exp[0] + 3 - exp[1]}}`;\n          if (exp[0] + 3 - exp[1] == 0 || exp[0] + 3 - exp[1] == 1) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, exp[0] + 3 - exp[1]);\n          }\n          texte_corr += `$`;\n          break;\n        case 6:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 2)]; // on a besoin de 2 exposants distincts\n          // le second exposant ne peut valoir que 1 ou 2 la fonction testExp ne convient pas à l'affichage ici\n          if (exp[1] == 2) {\n            texte = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100^${exp[1]}}$`;\n            texte_corr = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100^${exp[1]}}`;\n            texte_corr += `=\\\\dfrac{10^{1+${exp[0]}}}{(10^2)^${exp[1]}}`;\n            texte_corr += `=\\\\dfrac{10^{1+${exp[0]}}}{10^{2 \\\\times ${exp[1]}}}`;\n            texte_corr += `=\\\\dfrac{10^{${1 + exp[0]}}}{10^{${2 * exp[1]}}}`;\n          } else {\n            texte = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100}$`;\n            texte_corr = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100}`;\n            texte_corr += `=\\\\dfrac{10^{1+${exp[0]}}}{10^2}`;\n          }\n          texte_corr += `=10^{${1 + exp[0]}-${2 * exp[1]}}`;\n          texte_corr += `=10^{${1 + exp[0] - 2 * exp[1]}}`;\n          if (1 + exp[0] - 2 * exp[1] == 0 || 1 + exp[0] - 2 * exp[1] == 1) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, 1 + exp[0] - 2 * exp[1]);\n          }\n          texte_corr += `$`;\n          break;\n        case 7:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1])]; // on a besoin de 1 exposant\n          texte = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100\\\\times 100}$`;\n          texte_corr = `$\\\\dfrac{10\\\\times 10^${exp[0]}}{100\\\\times 100}`;\n          texte_corr += `=\\\\dfrac{10^{1+${exp[0]}}}{10^2\\\\times 10^2}`;\n          texte_corr += `=\\\\dfrac{10^{${1 + exp[0]}}}{10^{2+2}}`;\n          texte_corr += `=\\\\dfrac{10^{${1 + exp[0]}}}{10^{${2 + 2}}}`;\n          texte_corr += `=10^{${1 + exp[0]}-${2 + 2}}`;\n          texte_corr += `=10^{${1 + exp[0] - 2 - 2}}`;\n          if (1 + exp[0] - 2 - 2 == 0 || 1 + exp[0] - 2 - 2 == 1) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, 1 + exp[0] - 2 - 2);\n          }\n          texte_corr += `$`;\n          break;\n        case 8:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1])]; // on a besoin de 1 exposant\n          texte = `$\\\\dfrac{100^${exp[0]}}{10}$`;\n          texte_corr = `$\\\\dfrac{100^${exp[0]}}{10}`;\n          texte_corr += `=\\\\dfrac{(10^2)^${exp[0]}}{10}`;\n          texte_corr += `=\\\\dfrac{10^{2\\\\times ${exp[0]}}}{10}`;\n          texte_corr += `=\\\\dfrac{10^{${2 * exp[0]}}}{10}`;\n          texte_corr += `=10^{${2 * exp[0]}-1}`;\n          texte_corr += `=10^{${2 * exp[0] - 1}}$`;\n          // Inutile de tester l'exposant final car il vaut au minimum 3\n          break;\n        case 9:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 3, [1])]; // on a besoin de 1 exposant\n          texte = `$\\\\dfrac{1000^${exp[0]}}{10}$`;\n          texte_corr = `$\\\\dfrac{1000^${exp[0]}}{10}`;\n          texte_corr += `=\\\\dfrac{(10^3)^${exp[0]}}{10}`;\n          texte_corr += `=\\\\dfrac{10^{3\\\\times ${exp[0]}}}{10}`;\n          texte_corr += `=\\\\dfrac{10^{${3 * exp[0]}}}{10}`;\n          texte_corr += `=10^{${3 * exp[0]}-1}`;\n          texte_corr += `=10^{${3 * exp[0] - 1}}$`;\n          // inutile de tester l'exposant final car il vaut au minimum 5\n          break;\n        case 10:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1]), (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 4, [1])]; // on a besoin de 3 exposants distincts\n          texte = `$\\\\dfrac{10^${exp[0]}\\\\times 10^${exp[1]}}{100^${exp[2]}}\\\\times 10$`;\n          texte_corr = `$\\\\dfrac{10^${exp[0]}\\\\times 10^${exp[1]}}{100^${exp[2]}}\\\\times 10`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0]}+${exp[1]}}}{(10^2)^${exp[2]}}\\\\times 10`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0] + exp[1]}}}{10^{2\\\\times ${exp[2]\n            }}}\\\\times 10`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0] + exp[1]}}}{10^{${2 * exp[2]\n            }}}\\\\times 10`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0] + exp[1]}}\\\\times 10}{10^{${2 * exp[2]\n            }}}`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0] + exp[1]}+1}}{10^{${2 * exp[2]\n            }}}`;\n          texte_corr += `=\\\\dfrac{10^{${exp[0] + exp[1] + 1}}}{10^{${2 * exp[2]\n            }}}`;\n          texte_corr += `=10^{${exp[0] + exp[1] + 1}-${2 * exp[2]}}`;\n          texte_corr += `=10^{${exp[0] + exp[1] + 1 - 2 * exp[2]}}`;\n          if (\n            exp[0] + exp[1] + 1 - 2 * exp[2] == 0 ||\n            exp[0] + exp[1] + 1 - 2 * exp[2] == 1\n          ) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, exp[0] + exp[1] + 1 - 2 * exp[2]);\n          }\n          texte_corr += `$`;\n          break;\n        case 11:\n          exp = [(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [1])]; // on a besoin de 1 exposant\n          texte = `$\\\\dfrac{1000\\\\times 10}{100^${exp[0]}}$`;\n          texte_corr = `$\\\\dfrac{1000\\\\times 10}{100^${exp[0]}}`;\n          texte_corr += `=\\\\dfrac{10^3\\\\times 10}{(10^2)^${exp[0]}}`;\n          texte_corr += `=\\\\dfrac{10^{3+1}}{10^{2\\\\times${exp[0]}}}`;\n          texte_corr += `=\\\\dfrac{10^{4}}{10^{${2 * exp[0]}}}`;\n          texte_corr += `=10^{4-${2 * exp[0]}}`;\n          texte_corr += `=10^{${3 + 1 - 2 * exp[0]}}`;\n          if (3 + 1 - 2 * exp[0] == 0 || 3 + 1 - 2 * exp[0] == 1) {\n            // on ne teste l'exposant que pour la sortie puisque l'exposant est évincé\n            texte_corr += `=` + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.simpExp)(10, 3 + 1 - 2 * exp[0]);\n          }\n          texte_corr += `$`;\n          break;\n      }\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on en créé une autre\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n  };\n  this.besoin_formulaire_numerique = [\n    \"Règle à travailler\",\n    3,\n    \"1 : Calculs de base\\n2 : Calculs plus complexes\\n3 : Mélange\",\n  ];\n}\n\n\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/4e/4C30.js?");

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