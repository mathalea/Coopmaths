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
		argument.contenu = html_consigne(argument.consigne) + html_ligne(argument.liste_questions)
		argument.contenu_correction = html_consigne(argument.consigne_correction) + html_ligne(argument.liste_corrections)	
	} else {
		argument.contenu = tex_consigne(argument.consigne) + tex_multicols(tex_enumerate_sans_numero(argument.liste_questions,argument.spacing,true),argument.nb_cols)
		argument.contenu_correction = tex_consigne(argument.consigne_correction) + tex_multicols(tex_enumerate_sans_numero(argument.liste_corrections,argument.spacing_corr),argument.nb_cols_corr)	
	}
	
}

function mg32_to_contenu(argument) {
	if (sortie_html) {
		argument.contenu = html_consigne(argument.consigne);
		argument.contenu_correction = html_consigne(argument.consigne_correction) + html_enumerate(argument.liste_corrections);
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

function randint(min,max){
	//Source : https://gist.github.com/pc035860/6546661
	var range = max - min;
	var rand = Math.floor(Math.random() * (range + 1));
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
	liste = shuffle(liste);
	while (liste.length<taille_minimale){
		liste = liste.concat(shuffle(liste))
	}
	return liste
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
	while (a!=b){
		if (a>b){
			a-=b
		} else {
			b-=a
		}
		return a;
	}
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



function html_enumerate(liste){
	let result ='<ol>'
	for(let i in liste){
		result += '<li>' + liste[i].replace(/\\dotfill/g,'...').replace(/\\\\/g,'<br>') + '</li>'   // .replace(/~/g,' ') pour enlever les ~ mais je voulais les garder dans les formules LaTeX donc abandonné
	}
	result += '</ol>'
	return result
}

function html_ligne(liste){
	let result = '';
	for(let i in liste){
		result += liste[i].replace(/\\dotfill/g,'...').replace(/\\\\/g,'<br>') + '</br>'   // .replace(/~/g,' ') pour enlever les ~ mais je voulais les garder dans les formules LaTeX donc abandonné
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
		return Intl.NumberFormat("fr-FR",{maximumFractionDigits:20}).format(nb).toString().replace(/\s+/g,'~'); // \nombre n'est pas pris en charge par katex
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

function tex_prix(nb){
	//Remplace le . par la ,
	nombre = Number (nb);
	let result = nombre.toFixed(2).toString().replace('.',',');
	return result;
	
}


function nombre_de_chiffres_dans_la_partie_decimale(nb){
	if (String(nb).indexOf('.')>0){
  	return String(nb).split(".")[1].length
  } else{
  return 0
  }
}


function tex_fraction(a,b){ // Ecrire une fraction
	return '\\dfrac{'+a+'}{'+b+'}'
}

function tex_fraction_box(a,b,taille='2em'){ // Ecrire une fraction dans une boite pour faciliter l'alignement
	return '\\makebox['+taille+'][l]{$\\dfrac{'+a+'}{'+b+'}$}'
}

function tex_texte(texte) { // Pour écrire du texte en mode mathématiques
	return '~\\text{'+texte+'}'
}
