// Fonctions diverses pour la création des exercices

function liste_de_question_to_contenu(argument) {
	if (sortie_html) {
		argument.contenu = html_consigne(argument.consigne) + html_enumerate(argument.liste_questions)
		argument.contenu_correction = html_consigne(argument.consigne_correction) + html_enumerate(argument.liste_corrections)	
	} else {
		argument.contenu = tex_consigne(argument.consigne) + tex_multicols(tex_enumerate(argument.liste_questions,argument.spacing),argument.nb_cols)
		argument.contenu_correction = tex_consigne(argument.consigne_correction) + tex_multicols(tex_enumerate(argument.liste_corrections,argument.spacing_corr),argument.nb_cols_corr)	
	}
	
}

function liste_de_question_to_contenu_sans_numero(argument) {
	if (sortie_html) {
		argument.contenu = html_consigne(argument.consigne) + html_ligne(argument.liste_questions,argument.spacing)
		argument.contenu_correction = html_consigne(argument.consigne_correction) + html_ligne(argument.liste_corrections,argument.spacing_corr)	
	} else {
		argument.contenu = tex_consigne(argument.consigne) + tex_multicols(tex_paragraphe(argument.liste_questions,argument.spacing),argument.nb_cols)
		// argument.contenu_correction = tex_consigne(argument.consigne_correction) + tex_multicols(tex_enumerate_sans_numero(argument.liste_corrections,argument.spacing_corr),argument.nb_cols_corr)	
		argument.contenu_correction = tex_consigne(argument.consigne_correction) + tex_multicols(tex_paragraphe(argument.liste_corrections,argument.spacing_corr),argument.nb_cols_corr)	
	}
	
}

function mg32_to_contenu(argument) {
	if (sortie_html) {
		argument.contenu = html_consigne(argument.consigne) + html_ligne(argument.liste_questions,argument.spacing);
		argument.contenu_correction = html_consigne(argument.consigne_correction) + html_ligne(argument.liste_corrections,argument.spacing_corr);
	} 
	
}

	
function creer_couples(E1, E2, nombre_de_couples_min = 10){
	//Créer tous les couples possibles avec un élément de E1 et un élément de E2
	//L'ordre est pris en compte, donc on pourra avoir (3,4) et (4,3)
	//Si le nombre de couples possibles est inférieur à nombre_de_couples_min alors
	//on concatène 2 fois la même liste mais avec des ordres différents
	let result = [], temp = [];
	for (let i in E1){
		for (let j in E2){
			result.push([E1[i],E2[j]])
		}
	}
	
	temp = shuffle(result).slice(0); // créer un clone du tableau result mélangé
	result = temp.slice(0);
	while(result.length < nombre_de_couples_min){
		result = result.concat(shuffle(temp))
	}
	return result
}

// Fonctions mathématiques

function randint(min,max,liste_a_eviter=[]){
	//Source : https://gist.github.com/pc035860/6546661
	let range = max - min;
	let rand = Math.floor(Math.random() * (range + 1));
	if (Number.isInteger(liste_a_eviter)){
		liste_a_eviter=[liste_a_eviter]
	}
	if (liste_a_eviter.length>0) {
		while (liste_a_eviter.indexOf(min+rand)!=-1){
			rand = Math.floor(Math.random() * (range + 1));
		}
	}
	return min + rand;
}


function enleve_element(array,item){
	// Enlève toutes les occurences d'un élément d'un tableau donné
	for(var i = array.length - 1; i >= 0; i--){
    	if(array[i] == item) {
       		array.splice(i, 1);
    	}
	}
}

function choice(liste) {
	// Renvoit un élément au hasard de la liste
  var index = Math.floor(Math.random() * liste.length);
  return liste[index];
}

function range(max,liste_a_eviter=[]){
	// Créer un tableau avec toutes les valeurs de 0 à max sauf celle de la liste à éviter
	let nb_max = parseInt(max,10);
	let liste = [...Array(nb_max+1).keys()];
	for (let i=0;i<liste_a_eviter.length;i++){
		enleve_element(liste,liste_a_eviter[i])
	}
	return liste
}

function range1(max,liste_a_eviter=[]){
	// Créer un tableau avec toutes les valeurs de 1 à max sauf celle de la liste à éviter
	let nb_max = parseInt(max,10);
	let liste = [];
	for (let i = 1; i <= nb_max; i++) {
		liste.push(i)
	}
	for (let i=0;i<liste_a_eviter.length;i++){
		enleve_element(liste,liste_a_eviter[i])
	}
	return liste
}

function compare_fractions(a,b){ 
	// Fonction de comparaison à utiliser avec tableau.sort(compare_fractions)
	// Le tableau doit être du type [[num,den],[num2,den2]]
	if ((a[0]/a[1])>(b[0]/b[1])) 
		return 1 ;
	if ((a[0]/a[1])<(b[0]/b[1])) 
		return -1 ;
	// Sinon il y a égalité
	return 0
}

// Cette première version de shuffle() modifiait le tableau donné en argument
// function shuffle(array) {
// 	//Mélange les items d'un tableau, modifie le tableau passé en argument
// 	//Source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// }

function shuffle(array) {
	//Mélange les items d'un tableau, sans modifier le tableau passé en argument
	//Source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  var array_bis = array.slice()
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
		
    // And swap it with the current element.
    temporaryValue = array_bis[currentIndex];
    array_bis[currentIndex] = array_bis[randomIndex];
    array_bis[randomIndex] = temporaryValue;
  }

  return array_bis;
}

function tridictionnaire(dict) {
// Trie un dictionnaire suivant ses clés
// Source : https://stackoverflow.com/questions/10946880/sort-a-dictionary-or-whatever-key-value-data-structure-in-js-on-word-number-ke

    var sorted = [];
    for(var key in dict) {
        sorted[sorted.length] = key;
    }
    sorted.sort();

    var tempDict = {};
    for(var i = 0; i < sorted.length; i++) {
        tempDict[sorted[i]] = dict[sorted[i]];
    }

    return tempDict;
}

function combinaison_listes(liste,taille_minimale){
	// Concatène liste à elle même en changeant l'ordre à chaque cycle
	// Exemple combinaison_listes([A,B,C],7) -> [B,C,A,C,B,A,A,B,C]
	l = shuffle(liste);
	while (l.length<taille_minimale){
		l = l.concat(shuffle(liste))
	}
	return l
}



function ecriture_nombre_relatif(a) { //(+3) ou (-3)
	let result = '';
	if (a>0) {
		result = '(+'+a+')'
	}else if (a<0) {
		result = '('+a+')'
	}else{ // ne pas mettre de parenthèses pour 0
		result = '0'
	}
	return result;
}

function ecriture_algebrique(a) { // +3 ou -3
	let result = '';
	if (a>0) {
		result = '+'+a;
	}else {
		result = a;
	}
	return result;
};

function ecriture_parenthese_si_negatif(a) { // 3 ou (-3)
	let result = '';
	if (a>0) {
		result = a;
	}else {
		result = `(${a})`;
	}
	return result;
};

function signe(a) { // + ou -
	let result = '';
	if (a>0) {
		result = '+';
	}else {
		result = '-';
	}
	return result;
};


function arrondi(nombre, precision=2){
    let tmp = Math.pow(10, precision);
    return Math.round( nombre*tmp )/tmp;
}

function abs(a){
	return Math.abs(a);
}

function arrondi_virgule(nombre, precision=2){ //renvoit un arrondi sous la forme d'un string avec une virgule comme séparateur décimal
    let tmp = Math.pow(10, precision);
    return String(Math.round( nombre*tmp )/tmp).replace('.',',');
}

function pgcd(a,b){
	return parseInt(Algebrite.run(`gcd(${a},${b})`));
}

function fraction_simplifiee(n,d){  // renvoie le numérateur et le dénominateur de la fraction passée en argument sous la forme (numérateur,dénominateur)réduite au maximum dans un tableau [numérateur,dénominateur]
	let p=pgcd(n,d);
	return [n/p,d/p];
}

function calcul(expression){ // pour s'assurer qu'il n'y a pas d'erreur dans les calculs avec des décimaux
	return parseFloat(Algebrite.eval(expression))
}

function tex_nombrec(expression){ //pour s'assurer qu'il n'y a pas d'erreur dans les calculs avec des décimaux et renvoyer la virgule comme séparateur décimal
	return tex_nombre(parseFloat(Algebrite.eval(expression)))
}


function somme_des_termes_par_signe(liste){
	let somme_des_positifs = 0, somme_des_negatifs = 0;
	for (var i = 0; i < liste.length; i++) {
		if (liste[i]>0){
			somme_des_positifs += liste[i]
		} else {
			somme_des_negatifs += liste[i]
		}
	}
	return [somme_des_positifs,somme_des_negatifs]
}

function polygone(nbsommets){ // Créer un string de nbsommets caractères dans l'ordre alphabétique et en majuscule
	let premiersommet = randint(65,90-nbsommets);
  let polygone="";
  for (let i=0;i<nbsommets;i++){
  	polygone += String.fromCharCode(premiersommet+i)
  }
  return polygone
}

function lettre_depuis_chiffre(i){ // 1->A ; 2->B...
	let lettre = 64+i;
  return String.fromCharCode(lettre)
}

function lettre_minuscule_depuis_chiffre(i){ // 1->a ; 2->b...
  return lettre_depuis_chiffre(i).toLowerCase()
}

function minToHoraire(minutes){	// 0h24 est accepté
	var nbHour = parseInt(minutes / 60);
	if (nbHour>23){
		nbHour = nbHour-24
	}
	var nbminuteRestante = (minutes % 60);
	if (nbminuteRestante>9){
		return(nbHour + " h " + nbminuteRestante);
	} else {
		return(nbHour + " h 0" + nbminuteRestante);
	}
}

function minToHour(minutes){	 // on écrira 24 minutes plutôt que 0h24
	var nbHour = parseInt(minutes / 60);
	if (nbHour>23){
		nbHour = nbHour-24
	}
	var nbminuteRestante = (minutes % 60);
	if (nbHour==0) {
		return(nbminuteRestante+' min')
	} else {
		if (nbminuteRestante>9){
			return(nbHour + " h " + nbminuteRestante);
		} else {
			return(nbHour + " h 0" + nbminuteRestante);
		}
	}
}


function prenomF(){
	return choice(['Manon','Julie','Aude','Corinne','Léa','Carine','Elsa','Lisa','Marina','Magalie','Nawel'])
}
function prenomM(){
	return choice(['Rémi','Benjamin','Guillaume','Christophe','Cyril','Kamel','Yazid','Mehdi','Karim','Bernard','Joachim'])
}
function prenom(){
	return choice([prenomF(),prenomM()])
}







// Fonctions LaTeX

function tex_enumerate(liste,itemsep=1,spacing=false){
	let result =''
	if (itemsep==1){
		result = '\\begin{enumerate}\n';
	}else{
		if (spacing){
			result = '\\begin{enumerate}\n\\begin{spacing}{'+itemsep+'}\n'
		} else {
			result = '\\begin{enumerate}[itemsep='+itemsep+'em]\n'	
		}
		
	}
	 
	for(let i in liste){
		result += '\t\\item ' + liste[i] +'\n'
	}
	if (spacing){
		result += '\\end{spacing}'
	} 
	result += '\\end{enumerate}'
	return result
}

function tex_enumerate_sans_numero(liste,itemsep=1,spacing=false){
	let result =''
	if (itemsep==1){
		result = '\\begin{enumerate}[label={}]\n';
	}else{
		if (spacing){
			result = '\\begin{enumerate}[label={}]\n\\begin{spacing}{'+itemsep+'}\n'
		} else {
			result = '\\begin{enumerate}[itemsep='+itemsep+'em]\n'	
		}
		
	}
	 
	for(let i in liste){
		result += '\t\\item ' + liste[i] +'\n'
	}
	if (spacing){
		result += '\\end{spacing}'
	} 
	result += '\\end{enumerate}'
	return result
}

function tex_paragraphe(liste,spacing=false){
	let result =''
	if (spacing>1){
			result = `\\begin{spacing}{${spacing}}\n`
	}
	 
	for(let i in liste){
		result += `\t${liste[i]}\\\\\n`
	}
	if (spacing>1){
		result += '\\end{spacing}'
	} 
	return result
}



function html_enumerate(liste){
	let result ='<ol>'
	for(let i in liste){
		result += '<li>' + liste[i].replace(/\\dotfill/g,'..............................').replace(/\\\\/g,'<br>').replace(/\\not=/g,'≠').replace(/\\ldots/g,'....').replace(/~/g,' ') + '</li>'   // .replace(/~/g,' ') pour enlever les ~ mais je voulais les garder dans les formules LaTeX donc abandonné
	}
	result += '</ol>'
	return result
}

function html_ligne(liste,spacing){
	let result = '';
	if (spacing>1) {
		result = `<div style="line-height: ${spacing};">\n`
	}
	for(let i in liste){
		result += '\t' + liste[i].replace(/\\dotfill/g,'...').replace(/\\\\/g,'<br>') + '</br>'   // .replace(/~/g,' ') pour enlever les ~ mais je voulais les garder dans les formules LaTeX donc abandonné
	}

	if (spacing>1) {
		result += `</div>\n`
	}

	return result
}



function tex_multicols(texte,nb_cols=2){
	let result;
	if (nb_cols > 1){
		result = '\\begin{multicols}{' + nb_cols +'}\n' +
		texte + '\n\\end{multicols}';
	}else{
		result = texte;
	}
	return result
}

function html_consigne(consigne){
	return '<h4>' + consigne + '</h4>\n\n'
}

function tex_consigne(consigne){
	return '\\exo{' + consigne + '}\n\n'
}

function tex_nombre(nb){
	//Ecrit \nombre{nb} pour tous les nombres supérieurs à 1 000 (pour la gestion des espaces)
	if (sortie_html) {
		return Intl.NumberFormat("fr-FR",{maximumFractionDigits:20}).format(nb).toString().replace(/\s+/g,'\\thickspace '); // \nombre n'est pas pris en charge par katex
	} else {
		let result;
		if (nb>999 || nombre_de_chiffres_dans_la_partie_decimale(nb)>3) { 
			result = '\\nombre{'+nb.toString().replace('.',',')+'}';
		}else{
			result = nb.toString().replace('.',',');
		}
	return result;
	}
}

function mise_en_evidence(texte){
	if (sortie_html) {
		return '\\mathbf{\\color{#1DA962}{'+texte+'}}'	
	}
	else {
		return '\\mathbf{\\color{red}{'+texte+'}}'
	}
	
}

function tex_prix(nb){
	//Remplace le . par la ,
	nombre = Number (nb);
	let result ;
	if (nombre==nombre.toFixed(0)){
		result = nombre
	} else {
		result = nombre.toFixed(2).toString().replace('.',',');
	}
	return result;
	
}



function nombre_de_chiffres_dans_la_partie_decimale(nb){
	if (String(nb).indexOf('.')>0){
  	return String(nb).split(".")[1].length
  } else{
  return 0
  }
}

function tex_prix_euros(nb){
	//Remplace le . par la ,
	nombre = Number (nb);
	let result = nombre.toFixed(2).toString().replace('.',',')
	result+=`~\\text{\\euro{}/kg}`;
	return result;
	
}


function tex_fraction(a,b){ // Ecrire une fraction
	if (b!=1) {
		return '\\dfrac{'+a+'}{'+b+'}'
	}
	else
	{
		return a
	}

}

function tex_fraction_box(a,b,taille='2em'){ // Ecrire une fraction dans une boite pour faciliter l'alignement
	return '\\makebox['+taille+'][l]{$\\dfrac{'+a+'}{'+b+'}$}'
}

function tex_texte(texte) { // Pour écrire du texte en mode mathématiques
	return '~\\text{'+texte+'}'
}

function itemize(tableau_de_texte){
	let texte = ''
	if (sortie_html) {
			texte = '<div>'
		for (var i = 0; i < tableau_de_texte.length; i++) {
			texte += '<div> − ' + tableau_de_texte[i] + '</div>'
		}
			texte += '</div>'
	} else {
		texte = '\t\\begin{itemize}\n'
		for (var i = 0; i < tableau_de_texte.length; i++) {
			texte += '\t\t\\item ' + tableau_de_texte[i]+'\n'
		}
		texte += '\t\\end{itemize}'
	}
	return texte
}




// function ajoute_une_figure_MG32(numero_de_l_exercice) {
// 	let svgOptions = {
// 		idSvg: `MG32svg${numero_de_l_exercice}`, width: `${exercice[numero_de_l_exercice].taille_div_MG32[0]}`, height: `${exercice[numero_de_l_exercice].taille_div_MG32[1]}`
// 	}

// 	let mtgOptions = {
// 		fig: exercice[numero_de_l_exercice].MG32codeBase64,
// 		isEditable: false
// 	}

// 	mtgLoad(`MG32div${numero_de_l_exercice}`, svgOptions, mtgOptions, function (error, mtgAppPlayer) {
// 		if (error) return console.error(error)
// 		if (!window.mtg32App) window.mtg32App = mtgAppPlayer
// 		})
// }


function MG32_modifie_figure(numero_figure) {
	let code_pour_modifier_la_figure = exercice[numero_figure].MG32code_pour_modifier_la_figure
	let modification = new Function('numero_figure',code_pour_modifier_la_figure)
	modification(numero_figure);
}

function MG32_modifie_toutes_les_figures() {
	for (let i = 0; i < liste_des_exercices.length; i++) {
			if (exercice[i].type_exercice=='MG32'){
				MG32_modifie_figure(i)
			}
	}
}

function MG32_ajouter_figure(numero_de_l_exercice) {
	MG32_tableau_de_figures.push(
  // pour chaque figure on précise ici ses options
	  {
	  	idContainer: `MG32div${numero_de_l_exercice}`,
	  	svgOptions: {
	  		width: `${exercice[numero_de_l_exercice].taille_div_MG32[0]}`, 
	  		height: `${exercice[numero_de_l_exercice].taille_div_MG32[1]}`, 
	  		idSvg: `MG32svg${numero_de_l_exercice}`
	  	},
	  	mtgOptions: {
	  		fig: exercice[numero_de_l_exercice].MG32codeBase64,
	  		isEditable: false
	  	}
	  }
	)	
}


// pour chaque figure on récupère une promesse de chargement, 
// on lance tout en parallèle, 
// et quand toutes seront résolues on continue

function MG32_tracer_toutes_les_figures() {
	if (window.mtg32App) {
		for (var i = 0; i < mtg32App.docs.length; i++) {
			mtg32App.removeDoc(mtg32App.docs[i].idDoc)
		}	
	}
	Promise.all(MG32_tableau_de_figures.map(({idContainer, svgOptions, mtgOptions}) => mtgLoad(idContainer, svgOptions, mtgOptions)))
	  .then(results => {
	    // results est le tableau des valeurs des promesses résolues, avec la même instance du player pour chacune, la 1re valeur nous suffit donc
	    // if (!window.mtg32App) window.mtg32App = results[0]
	    window.mtg32App = results[0]
	    // on peut l'utiliser…
		MG32_modifie_toutes_les_figures()

	  })
	  .catch(error => console.error(error))
}

	
