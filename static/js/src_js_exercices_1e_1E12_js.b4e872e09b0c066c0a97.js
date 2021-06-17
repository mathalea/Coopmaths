/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_1e_1E12_js"],{

/***/ "./src/js/exercices/1e/1E12.js":
/*!*************************************!*\
  !*** ./src/js/exercices/1e/1E12.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Trouver_equation_parabole)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n/* harmony import */ var _modules_2d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/2d.js */ \"./src/js/modules/2d.js\");\n\n\n\nconst Algebrite = __webpack_require__(/*! algebrite */ \"./node_modules/.pnpm/algebrite@1.4.0/node_modules/algebrite/dist/algebrite.js\")\n\n\n\nconst titre = 'Trouver l’équation d’une parabole'\n\n/**\n * @Auteur Jean-Claude Lhote\n * Trois type de questions proposées :\n * 1) passant par trois dont deux d'abscisses opposées et le troisième d'abscisse 0 (pour simplifier la résolution du système)\n * 2) Passant par un point et dont on connait le sommet\n * 3) connaissant les deux racines et un autre point de passage à coordonnées entières\n * référence 1E12\n */\n function Trouver_equation_parabole() {\n    _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this); // Héritage de la classe Exercice()\n    this.titre = titre;\n    this.consigne = \"Trouver l'expression de la fonction f.\";\n    this.nb_questions = 5;\n    this.nb_cols = 1;\n    this.nb_cols_corr = 1;\n    this.spacing_corr = 3;\n    this.sup = 4;\n    this.correction_detaillee_disponible=true\n  \n    this.nouvelle_version = function () {\n      var pixelsParCm=20\n      this.liste_questions = []; // Liste de questions\n      this.liste_corrections = []; // Liste de questions corrigées\n      let liste_type_de_questions,type_de_questions_disponibles;\n      if (this.sup<4) type_de_questions_disponibles=[parseInt(this.sup)]\n      else type_de_questions_disponibles=[1,2,2,3,3]\n      let f_name=[],Ymin,Yscale,Ymax\n      liste_type_de_questions=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles,this.nb_questions)\n      for (let i = 0, texte, texte_corr, a, b, c, x1, x2,x3,f,r,svgYmin,svgYmax,F, cpt = 0;i < this.nb_questions && cpt < 50;) {\n        f_name.push((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.lettre_minuscule_depuis_chiffre)(i+6))\n        texte = `Quelle est l'expression de la fonction polynomiale $\\\\mathscr{${f_name[i]}}$ du second degré `\n        texte_corr=``\n        switch (liste_type_de_questions[i]) {\n            case 1 : // passe par 3 points à coordonnées entières dont -x1, 0 et x1.\n            a=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4,4,0)\n            b=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-6,6,0)\n            c=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10,10,0)\n            x1=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,5)\n            x2=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-5,5,x1)\n            x3=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-5,5,[x1,x2])\n             f = function(x) {\n              return (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a*x**2+b*x+c)\n            }\n            texte+=`qui passe par les points de coordonnées $(${-x1};${f(-x1)})$, $(0;${f(0)})$ et $(${x1};${f(x1)})$ ?<br>`\n            texte_corr=`Soit $\\\\mathscr{${f_name[i]}}(x)=ax^2+bx+c$ , l'expression de la fonction cherchée, comme $\\\\mathscr{${f_name[i]}}(0)=${f(0)}$ nous en déduisons que $c=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(f(0),'red')}$.<br>`\n            texte_corr+=`Donc $\\\\mathscr{${f_name[i]}}(x)=ax^2+bx${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(0)),'red')}$.<br>`\n            texte_corr+=`En substituant dans cette expression les valeurs de l'énoncé, nous obtenons :<br>`\n            texte_corr+=`$\\\\begin{cases}\n            ${f(x1)}=a\\\\times${x1}^2+b\\\\times${x1}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(0))}=${Algebrite.eval((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1)+'b'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(0)))} \\\\\\\\\n            ${f(-x1)}=a\\\\times(${-x1})^2+b\\\\times(${-x1})${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(0))}=${Algebrite.eval((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(-x1)+'b'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(0)))}\n         \\\\end{cases}$<br>`\n            if (this.correction_detaillee) {\n              texte_corr+=`Ce qui équivaut à <br>$\\\\begin{cases}\n                 ${f(x1)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-f(0))}=${f(x1)-f(0)}=${Algebrite.eval((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a' + (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1)+'b')} \\\\\\\\\n                 ${f(-x1)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-f(0))}=${f(-x1)-f(0)}=${Algebrite.eval((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(-x1)+'b')}\n               \\\\end{cases}$<br>`\n               texte_corr+=`En ajoutant et en soustrayant les équations membre à membre, on obtient :<br>\n                $\\\\begin{cases}\n                ${f(x1)+f(-x1)-2*f(0)}=${2*x1**2}a \\\\\\\\\n                ${f(x1)-f(-x1)}=${2*x1}b\n             \\\\end{cases}$<br>`\n            }\n         texte_corr+=`La résolution de ce système donne $a=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(a),'blue')}$ et $b=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre)(b),'green')}$.<br>`\n         texte_corr+=`D'où $\\\\mathscr{${f_name[i]}}(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(a),'blue')}x^2 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(b),'green')}x  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c),'red')}$<br>`\n   \n            break;\n          case 2 : // Passant par le sommet (x1,y1) et par le point (x2,y2)\n          a=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-3,3,0)\n          b=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-3,3,0)*2*a\n          c=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-10,10)\n          x1=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-b/(2*a))\n          x2=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-5,5,x1)\n          x3=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-5,5,[x1,x2])\n  \n         f = function(x) {\n          return (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a*x**2+b*x+c)\n        }\n            texte+=`dont la parabole a pour sommet le point de coordonnées $(${x1};${f(x1)})$ et passe par le point de coordonnées $(${x2};${f(x2)})$ ?<br>`;\n            texte_corr=`D'après les coordonnées $(${x1};${f(x1)})$ du sommet, $\\\\mathscr{${f_name[i]}}$ a pour forme canonique : $\\\\mathscr{${f_name[i]}}(x)=a(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1))}$.<br>`\n            texte_corr+=`De plus $\\\\mathscr{${f_name[i]}}(${x2})=${f(x2)}$`\n            if (this.correction_detaillee) {\n              texte_corr+=` donc $a(${x2}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1))}=${f(x2)}$ `\n              texte_corr+=`soit $${Algebrite.eval(x2**2+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-2*x1*x2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1)))}=${f(x2)}$.<br>`\n            if (x2**2-2*x1*x2+x1**2!=1)\n              texte_corr+=`On en déduit que $a=\\\\dfrac{${f(x2)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-f(x1))}}{${(x2**2-2*x1*x2+x1**2)}}=${a}$.<br>`\n            else\n              texte_corr+=`On en déduit que $a=${f(x2)}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-f(x1))}=${a}$.<br>`\n            }\n            else texte_corr+=` donc $a=${a}$.<br>`\n            if (this.correction_detaillee) {\n              texte_corr+=`Développons la forme canonique : $\\\\mathscr{${f_name[i]}}(x)=\n              a(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1))}=\n              a(x^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-2*x1),'green')}x+${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombrec)(x1**2),'red')})${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1)),'red')}\n              =${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)('a','blue')}x^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-2*x1)+'a','green')}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1)),'red')}$.<br>`\n            }\n            texte_corr+=`En remplaçant $a$ par sa valeur $${a}$ dans l'expression canonique développée $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)('a','blue')}x^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-2*x1)+'a','green')}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(x1**2)+'a'+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(f(x1)),'red')}$ on obtient :<br>`\n            texte_corr+=`$\\\\mathscr{${f_name[i]}}(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.rien_si_1)(a),'blue')}x^2${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(b),'green')}x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c),'red')}$`\n             break;\n          case 3: // on a deux racines x1 et x2 et un troisième point (x3;f(x3))\n          x1=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-6,-1)\n          x2=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,6,-x1)\n          x3=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-5,5,[x1,x2])\n          a=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(-4,4,0)\n          b=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(-a*(x1+x2))\n          c=a*x1*x2\n          f = function(x) {\n            return (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a*x**2+b*x+c)\n          }\n               texte+=`qui s'annule en $x=${x1}$ et en $x=${x2}$ et dont la parabole passe par le point de coordonnées $(${x3};${f(x3)})$ ?<br>`\n            texte_corr+=`Comme $${x1}$ et $${x2}$ sont les deux solutions de l'équation $\\\\mathscr{${f_name[i]}}(x)=0$, on peut factoriser $\\\\mathscr{${f_name[i]}}(x)$ :<br>`\n            texte_corr+=`$\\\\mathscr{${f_name[i]}}(x)=a(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x2)})$.<br>`\n            texte_corr+=`Comme $\\\\mathscr{${f_name[i]}}(${x3})=${f(x3)}$, on en déduit que `\n            if (this.correction_detaillee) {\n              texte_corr+=`$${f(x3)}=a(${x3}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})(${x3}${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x2)})$ `\n              texte_corr+=`d'où $a=${f(x3)}\\\\div ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_parenthese_si_negatif)((x3-x1)*(x3-x2))}=${a}$.<br>`\n            }\n            else texte_corr+=`$a=${a}$.<br>`\n            texte_corr+=`On obtient ainsi $\\\\mathscr{${f_name[i]}}(x)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.rien_si_1)(a)}(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x1)})(x${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(-x2)})$ ou en développant $\\\\mathscr{${f_name[i]}}(x)=${Algebrite.eval(`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(a)}x^2 ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique_sauf1)(b)}x  ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ecriture_algebrique)(c)}`)}$`\n            break;\n  \n        }\n        if (a<0) {\n          Ymax=Math.ceil(f(-b/(2*a))+2)\n          Ymin=Math.min(f(x1),f(x2),f(x3),f(-x1),f(0),f(-6),f(6))\n        }\n        else {\n          Ymin=Math.floor(f(-b/(2*a))-2)\n          Ymax=Math.max(f(x1),f(x2),f(x3),f(-x1),f(0),f(-6),f(6))\n        }\n  \n        if (Ymax-Ymin<10) Yscale=2\n        else Yscale =Math.max(1,(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(Math.round(Math.ceil((Ymax-Ymin)/10)/5)*5))*2\n        r = (0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.repere)({\n          xmin: -10,\n          ymin: Ymin-Yscale,\n          ymax: Ymax+Yscale,\n          xmax: 10,\n          xscale: 1,\n          yscale:Yscale,\n          positionLabelY:-0.8\n        })\n  \n        svgYmin=Math.min((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(Ymin/Yscale),-1)\n        svgYmax=Math.max((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(Ymax/Yscale),1)\n        F = x => a*x**2+b*x+c;\n        texte+=(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.mathalea2d)({xmin:-10, xmax:11,ymin:svgYmin,ymax:svgYmax+2,pixelsParCm:pixelsParCm,scale:.6},(0,_modules_2d_js__WEBPACK_IMPORTED_MODULE_2__.courbe)(F,-10,10,'blue',1.5,r),r)\n        if (this.liste_questions.indexOf(texte) == -1) {\n          this.liste_questions.push(texte);\n          this.liste_corrections.push(texte_corr);\n          i++;\n        }\n        cpt++;\n      }\n      (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this);\n    };\n   this.besoin_formulaire_numerique = ['Type de questions ',4,\"1 : Passant par trois points à coordonnées entières 1\\n2 : Connaissant le sommet et un point de passage\\n3 : Connaissant les deux racines et un point de passage\\n4 : Mélange des trois type de questions\"];\n  }\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/1e/1E12.js?");

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