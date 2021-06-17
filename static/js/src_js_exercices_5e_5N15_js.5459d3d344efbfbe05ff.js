/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmathalea"] = self["webpackChunkmathalea"] || []).push([["src_js_exercices_5e_5N15_js"],{

/***/ "./src/js/exercices/5e/5N15.js":
/*!*************************************!*\
  !*** ./src/js/exercices/5e/5N15.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"titre\": () => (/* binding */ titre),\n/* harmony export */   \"default\": () => (/* binding */ Probleme_de_ratio)\n/* harmony export */ });\n/* harmony import */ var _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClasseExercice.js */ \"./src/js/exercices/ClasseExercice.js\");\n/* harmony import */ var _modules_outils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/outils.js */ \"./src/js/modules/outils.js\");\n\n\n\nconst titre = 'Problèmes de ratio'\n\nfunction Probleme_de_ratio() {\n  \"use strict\"\n  _ClasseExercice_js__WEBPACK_IMPORTED_MODULE_0__.default.call(this)\n  this.titre = titre;\n  this.nb_questions = 4; // Ici le nombre de questions\n  this.nb_questions_modifiable = true // Active le formulaire nombre de questions\n  this.nb_cols = 1; // Le nombre de colonnes dans l'énoncé LaTeX\n  this.nb_cols_corr = 1;// Le nombre de colonne pour la correction LaTeX\n  this.pas_de_version_LaTeX = false\n  this.pas_de_version_HMTL = false\n  this.sup = 3\n  this.spacing=2\n  this.spacing_corr=3\n\n\n  // c'est ici que commence le code de l'exercice cette fonction crée une copie de l'exercice\n  this.nouvelle_version = function () {\n    // la variable numero_de_l_exercice peut être récupérée pour permettre de différentier deux copies d'un même exo\n    // Par exemple, pour être certain de ne pas avoir les mêmes noms de points en appelant 2 fois cet exo dans la même page\n\n    this.liste_questions = [] // tableau contenant la liste des questions \n    this.liste_corrections = []\n    let prenoms = [],\n    objets = ['billes', 'livres', 'perles', 'gâteaux', 'bonbons'],\n    sirops=['de fraise','de citron','de cerise','de menthe','d\\'orange'],\n    jusdefruit=['d\\'annanas','de banane','de pamplemousse','d\\'abricot','de raisin'],\n    produits=['produit d\\'entretien','décapant biologique','colorant','shampoing automobile','fertilisant liquide'],\n    article,p1,p2,quidam,index,index2,\n    ratiosables=[[10,6,5],[7,4,4],[13,7,10]],\n    ratiovinaigrette=[[2,3],[3,5],[4,7]],\n    ratioecran=[[16,9],[4,3],[21,9],[16,10]],\n    resolutions=[[800,600],[1024,768],[1280,720],[1280,1024],[1366,768],[1600,900],[1680,1050],[1920,1080]]\n    let type_de_questions_disponibles = ['partage','mélange','dilution','recette','ecran']\n    let liste_type_de_questions = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.combinaison_listes)(type_de_questions_disponibles, this.nb_questions)\n    for (let i = 0, texte, texte_corr, x, y, z, total, a, b, c, n = 2, k, cpt = 0; i < this.nb_questions && cpt < 50;) {\n      index=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0,10)\n      index2=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(0,10)\n      texte = `` // Nous utilisons souvent cette variable pour construire le texte de la question.\n      texte_corr = `` // Idem pour le texte de la correction.\n      switch (parseInt(this.sup)) {\n        case 1:\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5)\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5, x)\n          z = 0\n          n = 2\n          break\n        case 2:\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5)\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5, x)\n          z = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [x, y])\n          n = 3\n          break\n        case 3:\n          x = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5)\n          y = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 5, x)\n          if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([true, false])) {\n            z = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1, 7, [x, y])\n            n = 3\n          }\n          else {\n            n = 2\n            z = 0\n          }\n          break\n      }\n      k = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2, 6)\n      total = (x + y + z) * k\n      switch (liste_type_de_questions[i]) { // Chaque question peut être d'un type différent, ici 4 cas sont prévus...\n        case 'partage':\n          prenoms = (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.personnes)(n)\n          for (let j = 0; j < n - 1; j++) {\n            if (j > 0) {\n              texte += ', '\n            }\n            texte += `${prenoms[j].prenom}`\n          }\n          texte += ` et ${prenoms[n - 1].prenom} se partagent $${total}$ ${objets[index%5]} dans le ratio $~${x}~:~${y}$`\n          if (n == 3) {\n            texte += `$~:~${z}$`\n          }\n          texte += `.<br>Combien de ${objets[index%5]} chaque enfant reçoit-il ?`\n          if (n == 2) {\n            texte_corr += `Si les enfants se partageaient $${x}+${y}=${x + y}$ ${objets[index%5]} alors ${prenoms[0].prenom} en aurait $${x}$ et ${prenoms[1].prenom} en aurait $${y}$.`\n            texte_corr += `<br>Mais il y a $${total}$ ${objets[index%5]}, soit $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x + y + z}$ ${objets[index%5]}.<br>`\n             texte_corr += `Donc ${prenoms[0].prenom} en aura $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}=${k * x}$ et ${prenoms[1].prenom} en aura $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}=${k * y}$.<br>`\n            texte_corr += `Conclusion : ${prenoms[0].prenom} aura $${k * x}$ ${objets[index%5]} et ${prenoms[1].prenom} en aura $${k * y}$.`\n\n          }\n          else {\n            texte_corr += `Si les enfants se partageaient $${x}+${y}+${z}=${x + y + z}$ ${objets[index%5]} alors ${prenoms[0].prenom} en aurait $${x}$, ${prenoms[1].prenom} en aurait $${y}$ et ${prenoms[2].prenom} en aurait $${z}$.`\n            texte_corr += `<br>Mais il y a $${total}$ ${objets[index%5]}, soit $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x + y + z}$ ${objets[index%5]}.<br>`\n            texte_corr += `Donc ${prenoms[0].prenom} en aura $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}=${k * x}$, ${prenoms[1].prenom} en aura $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}=${k * y}$ et  ${prenoms[2].prenom} en aura $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${z}=${k * z}$.<br>`\n            texte_corr += `Conclusion : ${prenoms[0].prenom} aura $${k * x}$ ${objets[index%5]}, ${prenoms[1].prenom} en aura $${k * y}$ et  ${prenoms[2].prenom} en aura $${k * z}$.`\n          }\n          break\n        case 'mélange':\n            x=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3)\n            y=x+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5,7)\n            if (n==3) {\n              z=y+(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3)\n            }\n            else {\n              z=0\n            }\n            total=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(x+y+z,20)\n            k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(total/(x+y+z))\n            quidam=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.personne)({})\n            article=quidam.pronom\n\n            if (n==2) { // On mélange du sirop et de l'eau\n                texte+=`${quidam.prenom} prépare un sirop à l'eau pour ses amis. ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} mélange du sirop ${sirops[index%5]} et de l'eau dans le ratio $~${x}~:~${y}$.<br>`\n           if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([true,false])){\n                texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} désire préparer $${total}\\\\text{ cL} $ de boisson. Quelle quantité de sirop et d\\'eau doit-${article} mélanger ?`\n                texte_corr+=`Si ${quidam.prenom} mélange selon le ratio donné $${x}\\\\text{ cL} $ de sirop ${sirops[index%5]} et $${y}\\\\text{ cL} $ d\\'eau ${article} obtiendra $${x+y}\\\\text{ cL} $ de mélange.<br>`\n                texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} veut obtenir $${total}\\\\text{ cL} $ $=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x+y}\\\\text{ cL} $.<br>`\n                texte_corr+=`Donc pour cela, ${article} doit mélanger $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}\\\\text{ cL} $$=${k*x}\\\\text{ cL} $ de sirop ${sirops[index%5]} et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}\\\\text{ cL} $$=${k*y}\\\\text{ cL} $ d\\'eau`\n              }\n             else {\n              texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} verse $${k*x}\\\\text{ cL} $ de sirop ${sirops[index%5]}. Quelle quantité d\\'eau doit-${article} ajouter et quelle quantité de boisson obtiendra-t-${article} ?`\n              texte_corr+=`Pour cette boisson le sirop ${sirops[index%5]} et l\\'eau sont dans un ratio de $${x}~:~${y}$<br>ce qui signifie que : `\n              texte_corr+=`$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume de sirop en cL}\",x+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume d\\'eau en cL}\",y+\"\\\\text{ cL}\")}$.<br>`\n              texte_corr+=`Avec la valeur numérique : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(k*x+\"\\\\text{ cL}\",x+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume d\\'eau en cL}\",y+\"\\\\text{ cL}\")}$.<br>`\n              texte_corr+=`${quidam.prenom} doit ajouter un volume d\\'eau de : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(y+'\\\\times'+k*x,x)}=${y*k}\\\\text{ cL} $.`\n     }\n            }\n            else { // On mélange du sirop, du jus de fruit et de la limonade.\n              texte+=`${quidam.prenom} prépare un coktail à base de sirop  ${sirops[index%5]}, de jus ${jusdefruit[index2%5]} et d\\'eau gazeuse pour ses amis. ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} mélange les trois ingédients dans le ratio $~${x}~:~${y}~:~${z}$.<br>`\n              if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([true,false])){\n              texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} désire préparer $${total}\\\\text{ cL} $ de boisson. Quelle quantité de sirop, de jus et d\\'eau gazeuse doit-${article} mélanger ?`\n              texte_corr+=`Si ${quidam.prenom} mélange selon le ratio donné $${x}\\\\text{ cL} $ de sirop ${sirops[index%5]}, $${y}\\\\text{ cL} $ de jus ${jusdefruit[index2%5]} et $${z}\\\\text{ cL} $ d\\'eau gazeuse ${article} obtiendra $${x+y+z}\\\\text{ cL} $ de coktail.<br>`\n              texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} veut obtenir $${total}\\\\text{ cL} $ $=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x+y+z}\\\\text{ cL} $ de coktail.<br>`\n              texte_corr+=`Donc pour cela, ${article} doit mélanger $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}\\\\text{ cL} $$=${k*x}\\\\text{ cL} $ de sirop ${sirops[index%5]}, $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}\\\\text{ cL} $$=${k*y}\\\\text{ cL} $ de jus ${jusdefruit[index2%5]} et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${z}\\\\text{ cL} $$=${k*z}\\\\text{ cL} $ d\\'eau gazeuse.`\n         \n            }\n              else {\n                texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} verse $${k*x}\\\\text{ cL} $ de sirop ${sirops[index%5]}. Quelle quantité de jus ${jusdefruit[index2%5]} et d\\'eau gazeuse doit-${article} ajouter et quelle quantité de coktail obtiendra-t-${article} ?`\n                texte_corr+=`Pour ce coktail le sirop ${sirops[index%5]}, le jus ${jusdefruit[index2%5]} et l\\'eau gazeuse sont dans un ratio de $${x}~:~${y}~:~${z}$<br>`\n                texte_corr+=`ce qui signifie que $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume de sirop en cL}\",x+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume de jus de fruit en cL}\",y+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume d\\'eau gazeuse en cL}\",z+\"\\\\text{ cL}\")}$<br>`\n                texte_corr+=`Avec la valeur numérique : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(k*x+\"\\\\text{ cL}\",x+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume de jus de fruit en cL}\",y+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{Volume d\\'eau gazeuse en cL}\",z+\"\\\\text{ cL}\")}$.<br>`\n                texte_corr+=`${quidam.prenom} en déduit que le volume de jus ${jusdefruit[index2%5]} est : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(k*x+'\\\\times'+y,x)}\\\\text{ cL}=${y*k}\\\\text{ cL}$.<br>`\n                texte_corr+=`Et le volume d\\'eau gazeuse est : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(k*x+'\\\\times'+z,x)}\\\\text{ cL}=${z*k}\\\\text{ cL}$.<br>`\n              }\n\n            }\n          break\n\n        case 'dilution':\n          x=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(1,3)\n          y=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2*x,4*x)\n          a=x+y\n          p1=Math.round(x*100/a)\n          if (n==3) { //Deux ratios de dilution : x:y x:z\n            z=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(5*x,10*x)\n            b=x+z\n            p2=p1\n            p1=Math.round(x*100/b)\n          }\n          k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(10,20)*10\n          texte+=`Un ${produits[index%5]} est vendu sous forme concentrée avec l\\'indication suivante sur le bidon :<br>`\n          if (n==2){\n            texte+=`Diluer avec de l\\'eau à $${p1}\\\\%$ ($~${x}~:~${y}~$).<br>`\n            if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([true,false])){\n              texte+=`Montrer que le ratio correspond bien à la présence de $${p1}\\\\%$ de produit concentré dans le mélange final.`\n              texte_corr+=`Une dilution selon le ratio $~${x}~:~${y}~$ signifie qu'on dilue $${x}$ unités de volume de ${produits[index%5]} dans $${y}$ unités de volume d\\'eau.<br>`\n              texte_corr+=`Ce qui fait donc un total de $${x+y}$ unités de volume de produit dilué.<br>`\n              texte_corr+=`La proportion de ${produits[index%5]} est donc : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(x+\"\\\\text{ unités de volume}\",x+y+\"\\\\text{ unités de volume}\")}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(x/(x+y)),3)}$ soit environ $${Math.round(100*x/(x+y))}\\\\%$`\n            }\n            else {\n              total=k*(x+y)\n              texte+=`Si on veut préparer $${total}\\\\text{ cL} $ de produit dilué, quel volume d\\`eau et de ${produits[index%5]} faut-il mélanger ?`\n              texte_corr+=`Selon le ratio donné, pour $${x}$ unités de volume de ${produits[index%5]} il faut $${y}$ unités de volume d\\'eau soit au total un volume de $${x+y}$ unités de volume.<br>`\n              texte_corr+=`Or $${total}\\\\text{ cL} $ $=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x+y}$ donc il faut $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}=${k*x}\\\\text{ cL} $ de ${produits[index%5]} et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}=${k*y}\\\\text{ cL} $ d\\'eau.<br>`\n            }\n          }\n          else {\n            texte+=`Diluer avec de l\\'eau de $${p1}\\\\%$ à $${p2}\\\\%$ ( de $~${x}~:~${y}~$ à $~${x}~:~${z}~$).<br>`\n            if ((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([true,false])){\n              texte+=`Montrer que les ratios proposés correspondent bien aux pourcentages de produit concentré dans le mélange final.`\n              texte_corr+=`Une dilution selon le ratio $~${x}~:~${y}~$ signifie qu'on dilue $${x}$ unités de volume de ${produits[index%5]} dans $${y}$ unités de volume d\\'eau.<br>`\n              texte_corr+=`Ce qui fait donc un total de $${x}+${y}=${x+y}$ unités de volume de produit dilué.<br>`\n              texte_corr+=`La proportion de ${produits[index%5]} est donc : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(x+\"\\\\text{ unités de volume}\",x+y+\"\\\\text{ unités de volume}\")}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(x/(x+y)),4)}$ soit environ $${Math.round(100*x/(x+y))}\\\\%$<br>`\n              texte_corr+=`De la même façon, selon le ratio $~${x}~:~${z}$, on obtient la proportion suivante :<br>`\n              texte_corr+=`$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(x+\"\\\\text{ unités de volume}\",`(${x}+${z})\\\\text{ unités de volume}`)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(x,x+z)}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.arrondi)(x/(x+z)),4)}$ soit environ $${Math.round(100*x/(x+z))}\\\\%$.<br>`\n              texte_corr+=`Conclusion : les pourcentages et les ratios annoncés correspondent bien.`\n            }\n            else {\n                total=k*(x+y)\n                texte +=` ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} Si on veut préparer $${total}\\\\text{ cL} $ de produit dilué selon le ratio $~${x}~:~${y}$, quel volume d\\`eau et de ${produits[index%5]} faut-il mélanger ?<br>`\n                texte+=` ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} Avec $${k*x}\\\\text{ cL} $ de ${produits[index%5]}, quel volume d\\'eau faut-il ajouter pour obtenir un produit dilué selon le ratio $~${x}~:~${z}$ ?`\n                texte_corr+=` ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} Selon le ratio donné, pour $${x}$ unités de volume de ${produits[index%5]} il faut $${y}$ unités de volume d\\'eau soit au total un volume de $${x+y}$ unités de volume.<br>`\n                texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.sp)(4)}Or $${total}\\\\text{ cL} $ $=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x+y}$ donc il faut $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}=${k*x}\\\\text{ cL} $ de ${produits[index%5]} et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}=${k*y}\\\\text{ cL} $ d\\'eau.<br>`\n                texte_corr+=` ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} Le ratio $~${x}~:~${z}~$ pour le ${produits[index%5]} signifie que :<br>`\n                texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.sp)(4)}$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(k*x+\"\\\\text{ cL}\",x+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{volume d'eau en cL}\",z+\"\\\\text{ cL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}$.<br>`\n                texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.sp)(4)}Donc il faut ajouter $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${z}\\\\text{ cL}=${k*z}\\\\text{ cL} $ d'eau pour obtenir une dilution selon le ratio $~${x}~:~${z}$`\n              }\n            }\n\n          break\n\n        case 'recette':\n            quidam=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.personne)({})\n        if (n==3) {\n           article=quidam.pronom\n          x=ratiosables[index%3][0]\n          y=ratiosables[index%3][1]\n          z=ratiosables[index%3][2]\n          k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.choice)([10,15,20,25])\n          total=(x+y+z)*k\n          texte+=`${quidam.prenom} veut faire des sablés bretons. Pour cela ${article} doit réaliser un mélange de farine, de sucre et de beurre selon le ratio $~${x}~:~${y}~:~${z}$.<br>`\n          texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} dispose de $${k*z}\\\\text{ g}$ de beurre. Quelle masse de farine et de sucre doit-${article} utiliser si ${article} utilise tout le beurre disponible ?<br>`\n          texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} Quelle sera alors la masse totale du \"sable\" produit ?`\n          texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} La farine, le sucre et le beurre respecte le ratio $~${x}~:~${y}~:~${z}$, ce qui signifie :<br>`\n          texte_corr+=`$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{masse de farine en gramme}\",x+\"\\\\text{ g}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{masse de sucre en gramme}\",y+\"\\\\text{ g}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(`${k*z}\\\\text{ g}`,`${z}\\\\text{ g}`)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}$.<br>`\n          texte_corr+=`On en déduit que ${quidam.prenom} devra utiliser $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${x}\\\\text{ g}=${k*x}\\\\text{ g}$ de farine et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k)}\\\\times ${y}\\\\text{ g}=${k*y}\\\\text{ g}$ de sucre.<br>`\n          texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} La masse de \"sable\" sera donc : $${k*x}\\\\text{ g} + ${k*y}\\\\text{ g} +${k*z}\\\\text{ g} =${total}\\\\text{ g}$.`\n        }\n          else {\n           article=quidam.pronom\n            x=ratiovinaigrette[index%3][0]\n            y=ratiovinaigrette[index%3][1]\n            k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.randint)(2,6)\n            total=(x+y)*k\n            texte+=`${quidam.prenom} veut réaliser une vinaigrette. Pour cela ${article} mélange du vinaigre et de l'huile d'olive selon le ratio $~${x}~:~${y}$.<br>`\n            texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premiere_lettre_en_majuscule)(article)} utilise $${y*k}$ cuillères à soupe d'huile d'une contenance de $15 \\\\text{ mL}$ chacune.<br>`\n            texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} Quel volume de vinaigre doit-${article} utiliser ?<br>`\n            texte+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} Quel volume de vinaigrette ${quidam.prenom} réalisera-t-${article} ?`\n            texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(0)} Comme le ratio de vinaigre et d'huile est $${x}~:~${y}$, alors on a :<br>`\n            texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.sp)(6)}$${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(\"\\\\text{volume de vinagre en mL}\",x+\"\\\\text{ mL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(`${y*k}\\\\times 15 \\\\text{ mL}`,y+\"\\\\text{ mL}\")}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k*15)}$.<br>`\n            texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.sp)(6)}Le volume de vinaigre doit-être : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k*15)}\\\\times ${x}\\\\text{ mL}=${k*15*x}\\\\text{ mL}$.<br>`\n            texte_corr+=`${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.num_alpha)(1)} Donc le volume de vinaigrette est : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k*15)}\\\\text{ mL}\\\\times \\\\left( ${x}+${y} \\\\right)=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.mise_en_evidence)(k*15)}\\\\text{ mL}\\\\times ${x+y}=${k*15*(x+y)}\\\\text{ mL}$.`\n          }\n          break\n\n        case 'ecran':\n          x=ratioecran[index%4][0]\n          y=ratioecran[index%4][1]\n          a=resolutions[index2%8][0]\n          b=resolutions[index2%8][1]\n          texte+=`Un écran au format $${x}~:~${y}$ est-il adapté à une résolution de $${a}\\\\times ${b}$ ?<br>`\n          if (a/x==b/y){\n            texte_corr+=`La résolution d'image $${a}\\\\times ${b}$ respecte effectivement le format $${x}~:~${y}$.<br>`\n            texte_corr+=`En effet, $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a/x))}$`\n          }\n          else {\n            texte_corr+=`La résolution d'image $${a}\\\\times ${b}$ ne respecte pas le format $${x}~:~${y}$.<br>`\n            if (Number.isInteger(a/x)){\n            texte_corr+=`En effet, $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a/x))}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(b/y))}$.<br>`\n \n              k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a/x)\n              texte+=`Sinon, proposer une résolution qui conviendrait en gardant la largeur d'image.`\n              texte_corr+=`On doit avoir : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)('h',y)}$<br>`\n              texte_corr+=`Donc $h=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(y+'\\\\times'+a,x)}=${k*y}$. La résolution $${a}\\\\times ${k*y}$ respecte le format $${x}~:~${y}$.`\n            }\n            else if (Number.isInteger(b/y)){\n              texte_corr+=`En effet, $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a/x))}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(b/y))}$.<br>`\n              k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(b/y)\n              texte+=`Sinon, proposer une résolution qui conviendrait en gardant la hauteur d'image.`\n              texte_corr+=`On doit avoir : $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)('L',x)}$<br>`\n              texte_corr+=`Donc $L=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(x+'\\\\times'+b,y)}=${k*x}$. La résolution $${k*x}\\\\times ${b}$ respecte le format $${x}~:~${y}$.`\n            }\n            else {\n              texte_corr+=`En effet, $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(a/x))}$ et $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}\\\\approx ${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_nombre2)((0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(b/y))}$.<br>`\n              texte+=`Sinon proposer une résolution adaptée à ce ratio.`\n              k=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.ppcm)(x,y)\n              c=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.premierMultipleSuperieur)(k,1024)\n              a=(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(c*x/y)\n              b=c\n              texte_corr+=`Le nombre $${c}$ est un multiple de $${x}$ et de $${y}$.<br>`\n              texte_corr+=`Je choisis comme résolution $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(c+\"\\\\times \"+x,y)}\\\\times ${c}$ soit $${a}\\\\times ${b}$.<br>`\n              texte_corr+=`En effet $${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(a,x)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.tex_fraction)(b,y)}=${(0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.calcul)(b/y)}$ donc la résolution $${a}\\\\times ${b}$ respecte le format $${x}~:~${y}$.`\n            }\n         }\n\n          break\n      }\n\n      if (this.liste_questions.indexOf(texte) == -1) {\n        // Si la question n'a jamais été posée, on la stocke dans la liste des questions\n        this.liste_questions.push(texte);\n        this.liste_corrections.push(texte_corr);\n        i++;\n      }\n      cpt++;\n    }\n    (0,_modules_outils_js__WEBPACK_IMPORTED_MODULE_1__.liste_de_question_to_contenu)(this); // On envoie l'exercice à la fonction de mise en page\n  };\n  // Si les variables suivantes sont définies, elles provoquent l'affichage des formulaires des paramètres correspondants\n  // Il peuvent être de 3 types : _numerique, _case_a_cocher ou _texte.\n  // Il sont associés respectivement aux paramètres sup, sup2 et sup3.\n\n  this.besoin_formulaire_numerique = ['Type de ratios', 3, `1 : x:y\\n 2 : x:y:z\\n 3 : Mélange`]\n  //  this.besoin_formulaire2_numerique = [\"Type de cahier\",3,`1 : Cahier à petits careaux\\n 2 : Cahier à gros carreaux (Seyes)\\n 3 : Feuille blanche`];\n  // this.besoin_formulaire3_case_a_cocher =['figure à main levée',true]\n\n} // Fin de l'exercice.\n\n\n//# sourceURL=webpack://mathalea/./src/js/exercices/5e/5N15.js?");

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