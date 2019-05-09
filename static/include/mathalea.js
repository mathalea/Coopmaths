/*
Maths.ALEA()
Rémi Angot --- CC-By-SA

Modules nécessaires : 
	mathsalea_exercices.js pour la définition des exercices
	mathsalea_outils.js pour les différentes fonctions de construction des exercices ou de formatage
	*/



// Gestion des paramètres
var div = document.getElementById('div_code_LaTeX'); // Récupère le div dans lequel le code va être affiché
var div_overleaf = document.getElementById('overleaf'); // Récupère le div dans lequel le code va être affiché
var div_parametres_generaux = document.getElementById('parametres_generaux'); // Récupère le div dans lequel seront inscrit les paramètres
var form_consigne = [], form_nb_questions = [], form_nb_cols = [], form_nb_cols_corr = [], form_spacing = [] , form_spacing_corr = [], form_sup = [], form_sup2 = []; // Création de tableaux qui recevront les éléments HTML de chaque formulaires

var URL_de_depart_complexe = false; // Si l'utilisateur a entré une URL avec des paramètres, on ne la modifie pas

function parametres_exercice(nb_exercices){
/* Pour l'exercice i, on rajoute un formulaire avec 5 inputs : 
nombre de questions, nombre de colonnes,nombre de colonnes dans le corrigé,
espacement et espacement dans le corrigé.
Les réponses modifient les caractéristiques de l'exercice puis le code LaTeX est mis à jour
*/

	div_parametres_generaux.innerHTML = ''; // Vide le div parametres_generaux
	if (nb_exercices > 0){
		div_parametres_generaux.innerHTML += '<div class="ui hidden divider"></div>'
		// div_parametres_generaux.innerHTML += '<h3 class="ui block header">Paramètres des exercices</h3>';
	}
	for (let i = 0; i < nb_exercices; i++) {
		if(sortie_html) {
			div_parametres_generaux.innerHTML += '<h4 class="ui dividing header">Exercice n°'+ (i+1) +' : '+ exercice[i].titre +'</h4>'
			if (exercice[i].nb_questions_modifiable){
			 	div_parametres_generaux.innerHTML +='<div><label for="form_nb_questions'+i+'">Nombre de questions : </label> <input id="form_nb_questions'+i+'" type="number"  min="1" max="99"></div>'
			}
		} else {
			div_parametres_generaux.innerHTML += '<h4 class="ui dividing header">Exercice n°'+ (i+1) +' : '+ exercice[i].titre +'</h4>'

			if (exercice[i].consigne_modifiable){
				div_parametres_generaux.innerHTML +='<div><label for="form_consigne'+i+'">Consigne : </label> <input id="form_consigne'+i+'" type="texte" size="20"></div>'

			}
			if (exercice[i].nb_questions_modifiable){
				div_parametres_generaux.innerHTML += '<div><label for="form_nb_questions'+i+'">Nombre de questions : </label> <input id="form_nb_questions'+i+'" type="number"  min="1" max="99"></div>'
			}
			if (exercice[i].nb_cols_modifiable){
				div_parametres_generaux.innerHTML += '<div><label for="form_nb_cols'+i+'">Nombre de colonnes : </label><input id="form_nb_cols'+i+'" type="number" min="1" max="99"></div>'
			}
			if (exercice[i].nb_cols_corr_modifiable){
				div_parametres_generaux.innerHTML += '<div><label for="form_nb_cols_corr'+i+'">Nombre de colonnes dans la correction : </label><input id="form_nb_cols_corr'+i+'" type="number" min="1" max="99"></div>'
			}
			if (exercice[i].spacing_modifiable){
				div_parametres_generaux.innerHTML +='<div><label for="form_nb_cols_corr'+i+'">Espacement : </label><input id="form_spacing'+i+'" type="number" min="1" max="99"></div>'
			}
			if (exercice[i].spacing_corr_modifiable){
				div_parametres_generaux.innerHTML += '<div><label for="form_nb_cols_corr'+i+'">Espacement dans la correction : </label><input id="form_spacing_corr'+i+'" type="number" min="1" max="99"></div>'
			}
			
		}
		
			// Si un formulaire supplémentaire est défini dans l'exercice alors on l'ajoute
			if (exercice[i].besoin_formulaire_numerique||exercice[i].besoin_formulaire_texte){ // Ajout du titre pour les réglages supplémentaires
				div_parametres_generaux.innerHTML += "<h4 class='ui dividing header'></h4>";
			}

			if (exercice[i].besoin_formulaire_numerique){ // Création d'un formulaire numérique
				if (exercice[i].besoin_formulaire_numerique[2]){ // Si un tooltip est défini
					div_parametres_generaux.innerHTML += '<div data-tooltip="'+exercice[i].besoin_formulaire_numerique[2]+'"" data-inverted="" data-position="top left"><label for="form_sup'+i+'">'+exercice[i].besoin_formulaire_numerique[0]+' : </label><input id="form_sup'+i+'" type="number"  min="1" max="'+exercice[i].besoin_formulaire_numerique[1]+'"></div>';
				}
				else{
					div_parametres_generaux.innerHTML += '<div><label for="form_sup'+i+'">'+exercice[i].besoin_formulaire_numerique[0]+' : </label><input id="form_sup'+i+'" type="number"  min="1" max="'+exercice[i].besoin_formulaire_numerique[1]+'"></div>';
				}
			}

			if (exercice[i].besoin_formulaire_texte){ // Création d'un formulaire texte
				div_parametres_generaux.innerHTML += "<div style='display: inline'><label for='form_sup"+i+"'>"+exercice[i].besoin_formulaire_texte[0]+" : </label>\
			<div style='display: inline' data-tooltip='"+exercice[i].besoin_formulaire_texte[1]+"' data-inverted=''><input id='form_sup"+i+"' type='text' size='20' ></div></div>";
			}

			if (exercice[i].besoin_formulaire_long_texte){ // Création d'un long formulaire de texte
				div_parametres_generaux.innerHTML += "<label for='form_sup"+i+"'>"+exercice[i].besoin_formulaire_long_texte[0]+" : </label>\
			<div style='display: inline' data-tooltip='"+exercice[i].besoin_formulaire_long_texte[1]+"' data-inverted=''><textarea id='form_sup"+i+"'></textarea></div>";
				div_parametres_generaux.innerHTML +=`<div class="ui form">
  <div class="field">
    <label>Text</label>
    <textarea></textarea>
  </div>
</div>`
			}

			if (exercice[i].besoin_formulaire2_case_a_cocher){ // Création d'un formulaire texte
				div_parametres_generaux.innerHTML += "<div style='display: inline'><label for='form_sup2"+i+"'>"+exercice[i].besoin_formulaire2_case_a_cocher[0]+" : </label>\
			<input id='form_sup2"+i+"' type='checkbox'  ></div>";
			}

			if (exercice[i].besoin_formulaire2_numerique){ // Création d'un formulaire numérique
				if (exercice[i].besoin_formulaire2_numerique[2]){ // Si un tooltip est défini
					div_parametres_generaux.innerHTML += '<div data-tooltip="'+exercice[i].besoin_formulaire2_numerique[2]+'"" data-inverted="" data-position="top left"><label for="form_sup2'+i+'">'+exercice[i].besoin_formulaire2_numerique[0]+' : </label><input id="form_sup2'+i+'" type="number"  min="1" max="'+exercice[i].besoin_formulaire2_numerique[1]+'"></div>';
				}
				else{
					div_parametres_generaux.innerHTML += '<div><label for="form_sup2'+i+'">'+exercice[i].besoin_formulaire2_numerique[0]+' : </label><input id="form_sup2'+i+'" type="number"  min="1" max="'+exercice[i].besoin_formulaire2_numerique[1]+'"></div>';
				}
			}

			if (exercice[i].besoin_formulaire2_texte){ // Création d'un formulaire texte
				div_parametres_generaux.innerHTML += "<p></p><div style='display: inline'><label for='form_sup2"+i+"'>"+exercice[i].besoin_formulaire2_texte[0]+" : </label>\
			<div style='display: inline' data-tooltip='"+exercice[i].besoin_formulaire2_texte[1]+"' data-inverted=''><input id='form_sup2"+i+"' type='text' size='20' ></div></div>";
			}

	}


	for (let i = 0; i < nb_exercices; i++) {

		if(!sortie_html) { // Les paramètres à ne gérer que pour la version LaTeX
			// Gestion de la consigne
			if (exercice[i].consigne_modifiable){
				form_consigne[i] = document.getElementById('form_consigne'+i);
				form_consigne[i].value = exercice[i].consigne; // Rempli le formulaire avec la consigne
				form_consigne[i].addEventListener('change', function(e) { // Dès que le texte change, on met à jour
					exercice[i].consigne = e.target.value;
					mise_a_jour_du_code();
				});
			}
				
			// Gestion du nombre de colones
			if (exercice[i].nb_cols_modifiable){
				form_nb_cols[i] = document.getElementById('form_nb_cols'+i);
				form_nb_cols[i].value = exercice[i].nb_cols; // Rempli le formulaire avec le nombre de colonnes
				form_nb_cols[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
					exercice[i].nb_cols = e.target.value;
					mise_a_jour_du_code();
				});
			}
				
			// Gestion du nombre de colones dans la correction
			if (exercice[i].nb_cols_corr_modifiable){
				form_nb_cols_corr[i] = document.getElementById('form_nb_cols_corr'+i);
				form_nb_cols_corr[i].value = exercice[i].nb_cols_corr; // Rempli le formulaire avec le nombre de colonnes de la correction
				form_nb_cols_corr[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
					exercice[i].nb_cols_corr = e.target.value;
					mise_a_jour_du_code();
				});
			}
				
			// Gestion de l'espacement
			if (exercice[i].spacing_modifiable){
				form_spacing[i] = document.getElementById('form_spacing'+i);
				form_spacing[i].value = exercice[i].spacing; // Rempli le formulaire avec le nombre de colonnes de la correction
				form_spacing[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
					exercice[i].spacing = e.target.value;
					mise_a_jour_du_code();
				});
			}
				
			// Gestion de l'espacement dans la correction
			if (exercice[i].spacing_corr_modifiable){
				form_spacing_corr[i] = document.getElementById('form_spacing_corr'+i);
				form_spacing_corr[i].value = exercice[i].spacing_corr; // Rempli le formulaire avec le nombre de colonnes de la correction
				form_spacing_corr[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
					exercice[i].spacing_corr = e.target.value;
					mise_a_jour_du_code();
				});
			}
		}
		

		// Gestion du nombre de questions
		if (exercice[i].nb_questions_modifiable){
			form_nb_questions[i] = document.getElementById('form_nb_questions'+i);
			form_nb_questions[i].value = exercice[i].nb_questions; // Rempli le formulaire avec le nombre de questions
			form_nb_questions[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
				exercice[i].nb_questions = e.target.value;
				mise_a_jour_du_code();
			});
		}
		
		// Gestion des paramètres supplémentaires s'ils existent

		if (exercice[i].besoin_formulaire_texte){
			form_sup[i] = document.getElementById('form_sup'+i);
			form_sup[i].addEventListener('keydown', function(e) { // Appui sur la touche entrée
				if (e.keyCode == 13){
        		exercice[i].sup = e.target.value;// Récupère  la saisie de l'utilisateur
        		mise_a_jour_du_code();
        	};
        });

			form_sup[i].addEventListener('blur', function(e) { // Perte du focus
				exercice[i].sup = e.target.value;
				mise_a_jour_du_code();
			});
		}

		if (exercice[i].besoin_formulaire_long_texte){
			form_sup[i] = document.getElementById('form_sup'+i);
			form_sup[i].addEventListener('keydown', function(e) { // Appui sur la touche entrée
				if (e.keyCode == 13){
        		exercice[i].sup = e.target.value;// Récupère  la saisie de l'utilisateur
        		mise_a_jour_du_code();
        	};
        });

			form_sup[i].addEventListener('blur', function(e) { // Perte du focus
				exercice[i].sup = e.target.value;
				mise_a_jour_du_code();
			});
		}

		if (exercice[i].besoin_formulaire_numerique){
			form_sup[i] = document.getElementById('form_sup'+i);
			form_sup[i].value = exercice[i].sup; // Rempli le formulaire avec le paramètre supplémentaire
			form_sup[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
				exercice[i].sup = e.target.value;
				mise_a_jour_du_code();
			});
		}

		if (exercice[i].besoin_formulaire2_case_a_cocher){
			form_sup2[i] = document.getElementById('form_sup2'+i);
			form_sup2[i].checked = exercice[i].sup2; // Rempli le formulaire avec le paramètre supplémentaire
			form_sup2[i].addEventListener('change', function(e) { // 
				exercice[i].sup2 = e.target.checked;
				mise_a_jour_du_code();
			});

		}

		if (exercice[i].besoin_formulaire2_numerique){
			form_sup2[i] = document.getElementById('form_sup2'+i);
			form_sup2[i].value = exercice[i].sup2; // Rempli le formulaire avec le paramètre supplémentaire
			form_sup2[i].addEventListener('change', function(e) { // Dès que le nombre change, on met à jour
				exercice[i].sup2 = e.target.value;
				mise_a_jour_du_code();
			});
		}

		if (exercice[i].besoin_formulaire2_texte){
			form_sup2[i] = document.getElementById('form_sup2'+i);
			form_sup2[i].addEventListener('keydown', function(e) { // Appui sur la touche entrée
				if (e.keyCode == 13){
        		exercice[i].sup2 = e.target.value;// Récupère  la saisie de l'utilisateur
        		mise_a_jour_du_code();
        	};
        });

			form_sup2[i].addEventListener('blur', function(e) { // Perte du focus
				exercice[i].sup2 = e.target.value;
				mise_a_jour_du_code();
			});
		}

		
	}
}


// Choix des exercices


var exercice = []; // Liste des "objets" exercices
var liste_des_exercices = [];
mise_a_jour_de_la_liste_d_exercice();


// Mise à jour du formulaire de la liste des exercices
form_choix_des_exercices = document.getElementById('choix_des_exercices');


form_choix_des_exercices.addEventListener('change', function(e) { // Changement du texte
	if (e.target.value=='') {
		liste_des_exercices = [];
	} else {
		liste_des_exercices = [];
		liste_des_exercices = e.target.value.replace(/\s/g, "").replace(";", ",").split(",");// Récupère  la saisie de l'utilisateur
		//en supprimant les espaces et en remplaçant les points-virgules par des virgules.	
	}
	mise_a_jour_de_la_liste_d_exercice();
	//document.getElementById('liste_des_exercices').style.display='none';
});



function mise_a_jour_de_la_liste_d_exercice() {
	for (let i=0; i<liste_des_exercices.length; i++){
		if (!exercice[i]){
			try {
				exercice[i] = new liste_des_exercices_disponibles[liste_des_exercices[i]];					
			} catch(e) {
				exercice[i] = new Exercice
				console.log("Un exercice demandé n'existe pas.") //+e)
			}

		}
	}
	parametres_exercice(liste_des_exercices.length);
	mise_a_jour_du_code();  
}


// Gestion de l'affichage

var code_LaTeX = '', contenu_fichier = '';


function mise_a_jour_du_code(){
	// ajout du numéro de l'exercice dans l'URL
	//if (!URL_de_depart_complexe){
		if (liste_des_exercices.length>0) {
			let fin_de_l_URL = ""
			if (sortie_html) {
				fin_de_l_URL+="exercice.html"	
			}
		if (exercice[0].sup2){
				fin_de_l_URL +=`?ex=${liste_des_exercices[0]},nb_questions=${exercice[0].nb_questions},sup=${exercice[0].sup},sup2=${exercice[0].sup2}`	
			} else{
			if (exercice[0].sup){
					fin_de_l_URL +=`?ex=${liste_des_exercices[0]},nb_questions=${exercice[0].nb_questions},sup=${exercice[0].sup}`	
				} else{
					fin_de_l_URL +=`?ex=${liste_des_exercices[0]},nb_questions=${exercice[0].nb_questions}`
				}
			}
		for (var i = 1; i < liste_des_exercices.length; i++) {
			if (exercice[i].sup2){
				fin_de_l_URL +=`&ex=${liste_des_exercices[i]},nb_questions=${exercice[i].nb_questions},sup=${exercice[i].sup},sup2=${exercice[i].sup2}`	
			} else{
			if (exercice[i].sup){
					fin_de_l_URL +=`&ex=${liste_des_exercices[i]},nb_questions=${exercice[i].nb_questions},sup=${exercice[i].sup}`	
				} else{
					fin_de_l_URL +=`&ex=${liste_des_exercices[i]},nb_questions=${exercice[i].nb_questions}`
				}
			}
		}
		window.history.pushState("","",fin_de_l_URL);
			
		}
	//}
		

	codeMG32=``;
	if (sortie_html){ // code pour la sortie HTML
		let code1 ='', code2='', code_LaTeX = '';
		if (liste_des_exercices.length > 0) {
			for (let i = 0; i < liste_des_exercices.length; i++) {
				exercice[i].nouvelle_version(i+1);
				code1 += '<h3 class="ui dividing header">Exercice '+(i+1)+'</h3>';
				code1 +=  exercice[i].contenu;
				if (exercice[i].type_exercice=='MG32'){
					code1 += `<div><svg id ="mtg32svg${i+1}" width=${exercice[i].taille_div_MG32[0]} height=${exercice[i].taille_div_MG32[1]} xmlns="http://www.w3.org/2000/svg"></svg></div>`	
				}
				code2 += '<h3 class="ui dividing header">Exercice '+(i+1)+'</h3>';
				code2 +=  exercice[i].contenu_correction;
			}
			code1 = '<ol>' + code1 + '</ol>';
			code2 = '<ol>' + code2 + '</ol>'; 
			$( "#message_liste_exercice_vide" ).hide();
			$('#cache').dimmer('hide');
		} else {
			$( "#message_liste_exercice_vide" ).show(); // Message au dessus de la liste des exercices
			$('#cache').dimmer('show'); // Cache au dessus du code LaTeX
		}
		
		$('#exercices').html(code1);
		$('#corrections').html(code2);
		renderMathInElement(document.body,{delimiters: [
			{left: "$", right: "$", display: false},
			{left: "$$", right: "$$", display: true}
			]})


		// Exécute le code MG32
		let codeMG32complet = `
		var mtg32App = new mtg32.mtg32App();
		    function mtg32start() {
		    mtg32loadFigures();
		    mtg32App.calculateAndDisplayAll();
		      }
		      function mtg32loadFigures() {
		`+ codeMG32 + `}
			MathJax.Hub.Queue(function() {mtg32start()});`
		var F=new Function (codeMG32complet);
		return(F());

	} else { // code pour la sortie LaTeX
		let code1 ='', code2='';
		code_LaTeX = '';
		if (liste_des_exercices.length > 0) {
			for (let i = 0; i < liste_des_exercices.length; i++) {
				exercice[i].nouvelle_version();
				code1 += exercice[i].contenu;
				code1 += '\n\n'
				code2 += exercice[i].contenu_correction;
				code2 += '\n\n'
			}
			code_LaTeX =  code1 +
			'\n\n%%%%%%%%%%%%%%%%%%%%%%\n%%%   CORRECTION   %%%\n%%%%%%%%%%%%%%%%%%%%%%\n\n\\newpage\n\\begin{correction}\n\n' + 
			code2 + '\\end{correction}'; 
			$( "#message_liste_exercice_vide" ).hide();
			$('#cache').show();
			div.innerHTML = '<pre><code class="language-latex">' + code_LaTeX + '</code></pre>';
			code_LaTeX = `\\documentclass[12pt]{article}
\\usepackage[left=1.5cm,right=1.5cm,top=2cm,bottom=2cm]{geometry}
\\usepackage[utf8]{inputenc}		        
\\usepackage[T1]{fontenc}		
\\usepackage[francais]{babel}
\\usepackage{multicol} 					
\\usepackage{calc} 						
\\usepackage{enumerate}
\\usepackage{enumitem}
\\usepackage{graphicx}				
\\usepackage{tabularx}
\\usepackage[autolanguage]{numprint}
\\usepackage{pgf,tikz}
\\usepackage{amsmath,amsfonts,amssymb,mathrsfs} 
\\usepackage{cancel}
\\usepackage{eurosym}
\\DeclareUnicodeCharacter{20AC}{\\euro{}}
\\usepackage{fancyhdr,lastpage}          	
 \\pagestyle{fancy}                      	
\\usepackage{fancybox}					
\\usepackage{xlop}						
\\usepackage{setspace}	

\\setlength{\\parindent}{0mm}		
\\renewcommand{\\arraystretch}{1.5}	
\\newcounter{exo}          				
\\setcounter{exo}{0}   				
\\newcommand{\\exo}[1]{				
  	\\stepcounter{exo}        		
  	\\subsection*{Exercice \\no{\\theexo} \\textmd{\\normalsize #1}}
  	}
  	

\\renewcommand{\\labelenumi}{\\textbf{\\theenumi{}.}}	
\\renewcommand{\\labelenumii}{\\textbf{\\theenumii{}.}}	
\\newcommand{\\version}[1]{\\fancyhead[R]{Version #1}}
\\setlength{\\fboxsep}{3mm}
\\newenvironment{correction}{\\newpage\\fancyhead[C]{\\textbf{Correction}}\\setcounter{exo}{0}}{}
\\fancyhead[C]{\\textbf{Entrainement}}
\\fancyfoot{}






\\begin{document}`+ code_LaTeX + `\\end{document}`
			div_overleaf.innerHTML = `<form method="POST" action="https://www.overleaf.com/docs" target="_blank" class="ng-pristine ng-valid"><div class="form-group text-center"><input type="hidden" name="encoded_snip" value="${encodeURIComponent(code_LaTeX)}" autocomplete="off"><button class="btn-success btn btn-smclass ui labeled icon button"" type="submit" ><i class="cogs icon"></i>Compilier sur Overleaf.com</button></div></form>`
		Prism.highlightAllUnder(div); // Met à jour le code surligné
	} else {
		code_LaTeX = ''
			$( "#message_liste_exercice_vide" ).show(); // Message au dessus de la liste des exercices
			$('#cache').hide(); // Cache au dessus du code LaTeX
			div.innerHTML = '';
		}
		
	}
}


if (!sortie_html){

	// Gestion du téléchargement

	$( "#btn_telechargement").click(function() {
		let code_exercices = '', code_correction = '';
			// Gestion du nombre de versions
			if ($("#nombre_de_versions").val()>1) {
				code_LaTeX = '';
				for (let v = 0; v <$("#nombre_de_versions").val(); v++) {
					code_exercices += '\\version{' + (v+1) + '}\n\n'
					code_correction += '\n\n\\newpage\n\\version{' + (v+1) + '}\n\\begin{correction}';
					for (let i = 0; i < liste_des_exercices.length; i++) {
						exercice[i].nouvelle_version();
						code_exercices += exercice[i].contenu;
						code_exercices += '\n\n';
						code_correction += exercice[i].contenu_correction;
						code_correction += '\n\n';
					}
					if (v < $("#nombre_de_versions").val() -1) {
						if ($('#style_classique:checked').val()){
							code_exercices += '\n\\newpage\n\\setcounter{exo}{0}\n';
						} else{
							code_exercices += '\n\\newpage\n\\setcounter{section}{0}\n';
						}
					}
					code_correction += '\n\\end{correction}'
				}
				code_LaTeX = code_exercices + code_correction;
			}
			
			// Gestion du style pour l'entête du fichier

			if ($('#style_classique:checked').val()){
				contenu_fichier = '\\documentclass[a4paper,11pt,fleqn]{article}\n\
				\\input{preambule}\n\\pagestyle{fancy}\n\\renewcommand{\\headrulewidth}{1pt}\n\\fancyhead[C]{' + $("#entete_du_fichier").val() + '}\n\\fancyhead[L]{}\
				\\fancyhead[R]{}\n\\renewcommand{\\footrulewidth}{1pt}\n\\fancyfoot[C]{}\n\\fancyfoot[L]{}\n\\fancyfoot[R]{}\n\n\
				\\begin{document}\n\n' + code_LaTeX + '\n\n\\end{document}'
			} else
			{
				contenu_fichier = '\\documentclass[a4paper,11pt,fleqn]{article}\n\\input{preambule_coop}\n'
				contenu_fichier +='\\theme{' + $('input[name=theme]:checked').val() + '}{' + $("#entete_du_fichier").val() + '}'
				contenu_fichier += '{' + $("#items").val() + '}{' + $("#domaine").val() + '}\n\\begin{document}\n\n' + code_LaTeX
				contenu_fichier += '\n\n\\end{document}'
			}

			if ($("#nom_du_fichier").val()) {
				download(contenu_fichier, $("#nom_du_fichier").val()+'.tex', "text/plain");	
			}else
			{
				download(contenu_fichier, 'mathalea.tex', "text/plain");
			}
			
		});

		// Gestion des paramètres du fichier LaTeX

		$('#options_style_CoopMaths').hide(); 	// par défaut le style est classique donc on 
												// cache les options du style Coop
												$(function(){
													$("input:radio[name='style']").change(function(){
														if ($('#style_classique:checked').val()){
															$('#options_style_CoopMaths').hide();
															$('a.lien_preambule').attr('href','fichiers/preambule.tex')
														} else{
															$('#options_style_CoopMaths').show()
															$('a.lien_preambule').attr('href','fichiers/preambule_coop.zip')
														}
													});
												});
	}




function getUrlVars() { // Récupère les variables de l'URL
    let url = new URL(window.location.href);
    let tableau_des_strings_exercices_et_parametres = url.searchParams.getAll("ex"); // récupère un string pour chaque paramètre ex de l'URL
    let tableau_objets_exercices = new Array
    for (var ex_i = 0; ex_i < tableau_des_strings_exercices_et_parametres.length; ex_i++) {
    	let CleValeur = tableau_des_strings_exercices_et_parametres[ex_i].split(",");
	    let ObjetParametres = {}
	    ObjetParametres["id"] = CleValeur[0] // Récupère le premier élément qui est forcément l'id
	    CleValeur.shift() // Retire ce premier élément
	    if (CleValeur.length>0){
	    	for (let i in CleValeur){
		    	CleValeur[i]=CleValeur[i].split("=")
		    	// change le type de ce qui ne doit pas être un string
		    	if (CleValeur[i][1]=="true" || CleValeur[i][1]=="false") {//"true"=>true
		    		ObjetParametres[CleValeur[i][0]]=(CleValeur[i][1]=="true")
		    	} else if (!isNaN(CleValeur[i][1])){ //"17"=>17
		    		ObjetParametres[CleValeur[i][0]]=parseInt(CleValeur[i][1])
		    	} else {
		    		ObjetParametres[CleValeur[i][0]]=CleValeur[i][1]	
		    	}
		    }
	    }
		tableau_objets_exercices.push(ObjetParametres)
    }
	return tableau_objets_exercices;

}


window.onload = function()  {
//$( document ).ready(function() {	

	// Gestion du menu déroulant

	$('.ui.dropdown') .dropdown();  
	
	
	// Gestion de la mise à jour de l'affichage du code

	var btn_mise_a_jour_code = document.getElementById('btn_mise_a_jour_code');
	btn_mise_a_jour_code.addEventListener('click', mise_a_jour_du_code);

	// Gestion des effets visuels
	$('.ui.accordion').accordion(); // active les acordéons (paramètres du fichier .tex)
	$('.ui.radio.checkbox').checkbox(); // active les boutons radio (pour le style)

	// Récupère les paramètres passés dans l'URL
	//var interrogation_dans_URL = location.href.indexOf("?");
	let tableau_objets_exercices = getUrlVars();
    if (tableau_objets_exercices.length > 0) {
    	URL_de_depart_complexe = true;
    	for (var i = 0; i < tableau_objets_exercices.length; i++) {
    		liste_des_exercices.push(tableau_objets_exercices[i]["id"])
    	}
    	mise_a_jour_de_la_liste_d_exercice();

    	for (var i = 0; i < tableau_objets_exercices.length; i++) { // récupère les éventuels paramètres dans l'URL
    		if (tableau_objets_exercices[i]["nb_questions"]){
    			exercice[i].nb_questions = tableau_objets_exercices[i]["nb_questions"]
    			form_nb_questions[i].value = exercice[i].nb_questions;
    		}
    		if (tableau_objets_exercices[i]["sup"]){
    			exercice[i].sup = tableau_objets_exercices[i]["sup"]
    		}
    		if (tableau_objets_exercices[i]["sup2"]){
    			exercice[i].sup2 = tableau_objets_exercices[i]["sup2"]
    		}
    	}
    	mise_a_jour_du_code();
    } else {
    	mise_a_jour_du_code();
    }


    if (sortie_html) {
	// Gestion du bouton de zoom
	let zoom = 1;
   	$( "#btn_zoom_plus").click(function() {
    	zoom+=.5;
      	$("#affichage_exercices").css("transform", `scale(${zoom})`);
      	$("#affichage_exercices").css("transform-origin", "0 0px");
      	//window.location.hash = 'section';
   	});
   	$( "#btn_zoom_moins").click(function() {
    	if (zoom>1) {
    		zoom-=.5;
    	}
      	$("#affichage_exercices").css("transform", `scale(${zoom})`);
      	$("#affichage_exercices").css("transform-origin", "0 0px");
   	});

}
        

};







