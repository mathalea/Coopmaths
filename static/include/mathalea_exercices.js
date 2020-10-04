var liste_des_exercices_disponibles = {
		'CM001' :Tables_de_multiplications,
		'CM002' :Tables_de_divisions,
		'CM003' :Tables_de_multiplications_et_divisions,
		'CM004' : Quatre_operations,
		'CM005' : Ajouter9,
		'CM006' : Soustraire9,
		'CM007' : Ajouter11,
		'CM008' : Soustraire11,
		'CM009' : Moitie,
		'CM010' : Tiers,
		'CM011' : Quart,
		'CM012' : Complement_a_100,
		'CM013' : Complement_a_une_dizaine,
		'CM014' : Double_moitie_tiers_triple,
		'CM015' : Somme_de_deux_nombres_maries,
		'CM016' : Diviser_par_10_100_1000,
		'CM017' : Diviser_decimal_par_10_100_1000,
		'CM018' : Somme_de_deux_nombres_maries_et_un_entier,
		'CM019' : Le_compte_est_bonV2,
		'6C10' : Additions_soustractions_multiplications_posees,
		'6C11' : Divisions_euclidiennes,
		'6C10-1' :Tables_de_multiplications,
		'6C10-2' :Exercice_tables_de_multiplications_et_multiples_de_10,
		'6C10-3' :Exercice_tables_de_multiplications_et_decimaux,
		'6C10-4': Exercice_tables_d_additions,
		'6C20' : Additionner_soustraires_decimaux,
		'6C21' : Divisions_euclidiennes_niv2,
		'6C30' : Multiplier_decimaux,
		'6C30-1': Multiplier_decimaux_par_10_100_1000,
		'6C31' : Division_decimale,
		'6C32': Probleme_course,
		'6C33' : Priorites,
		'6D10' : Conversions_de_durees,
		'6D101' : Heures_decimales,
		'6D11' : Somme_de_durees,
		'6D12' : Calculs_de_durees_ou_d_horaires,
		'6M11-1' : Perimetre_ou_aire_de_carres_rectangles_triangles,
		'6M11-2' : Perimetre_ou_aire_de_figures_composees,
		'6M10' : Reglages_6M10,
		'6M12' : Reglages_6M12,
		'6M20' : Aire_de_triangles,
		'6M22' : Reglages_6M22,
		'6M22-1' : Perimetre_aire_disques,
		'6M22-2' : Perimetre_aire_et_portions_de_disques,
		'6M13' : Reglages_6M23,
		'6M25' : Connaitre_formules_de_perimetre_et_aires,
		'6M30' : Calcul_de_volumes_6e,
		'6M31' : Exercice_conversions_volumes,
		'6M31-2' : Unites_de_volumes_et_de_capacite,
		'6N10-1': Exercice_numeration_entier,
		'6N10-2': Decomposition_nombre_decimal,
		'6N11' : Lire_abscisse_entiere,
		'6N11-2' : Placer_un_point_abscisse_entiere,
		'6N12' : Exercice_6N12,
		'6N13' : Exercice_6N13,
		'6N20' : Exercice_fractions_decomposer,
		'6N20-2':Exercice_fractions_differentes_ecritures,
		'6N21' : Lire_abscisse_fractionnaire,
		'6N23' : Exercice_ecriture_decimale_a_partir_de_fraction_decimale,
		'6N23-1' : Exercice_differentes_ecritures_nombres_decimaux,
		'6N24' : Exercice_6N24,
		'6N24-1' : Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000,
		'6N30' : Lire_abscisse_decimale,
		'6N30-2' : Placer_points_sur_axe,
		'6N31' : Comparer_decimaux,
		'6N33' : Fraction_d_un_nombre,
		'6N33-1' : Pourcentage_d_un_nombre,
		'6N34' : Reglages_6N34,
		'6N41' : Egalites_entre_fractions,
		'6N43' : Criteres_de_divisibilite,
		'6N43-2' : Tableau_criteres_de_divisibilite,
		'6P10' : Proportionnalite_pas_proportionnalite,
		'6P11' : Proportionnalite_par_linearite,
		'5N12':Exercice_fractions_simplifier,
		'5N12-2': Egalites_entre_fractions,
		'5N18': Exercice_decomposer_en_facteurs_premiers,
		'5N110' : Variation_en_pourcentages,
		'5N21': Exercice_comparer_deux_fractions,
		'5N21-1': Exercice_comparer_quatre_fractions,
		'5N22': Exercice_additionner_des_fractions_5e,
		'5N22-1': Exercice_additionner_ou_soustraire_des_fractions_5e,
		'5A-10' : Liste_des_diviseurs_5e,
		'5A-11' : Premier_ou_pas_5e,
		'5L10' : Ecrire_une_expression_litterale,
		'5L101' : Traduire_un_programme_de_calcul,
		'5L11' : Calculer_la_valeur_d_une_expression_litterale,
		'5L11-1' : Exercice_substituer,
		'5L111' : Tester_une_egalite,
		'5L12' : Reduire_une_expression_litterale,
		'5M10' : Exercice_angles_triangles,
		'5M10-1' : Aire_du_parallelogramme,
		'5M30' : Calcul_de_volumes_5e,
		'5R10' : Lire_abscisse_relative,
		'5R10-2' : Placer_points_sur_axe_relatifs,
		'5R12-1' : reperage_point_du_quart_de_plan,
		'5R12-2' : reperage_point_du_plan,
		'5R20': Exercice_additions_relatifs,
		'5R20-2': Exercice_additions_relatifs_a_trou,
		'5R20-3': Exercice_additions_de_5_relatifs, //on pourrait le corriger avec regroupement des termes de même signe
		'5R21': Exercice_soustractions_relatifs,
		'5R31': Exercice_additions_et_soustraction_de_relatifsV2,
		'5R31-2': Exercice_simplification_somme_algebrique,
		'5S10': Calculer_des_frequences,
		'5S10-2': Calculer_des_moyennes,
		'5S10-3': Calculer_des_etendues,
		'5S20' : fonctions_probabilite1,
		'4L10' : Exercice_developper,
		'4L20' : Exercice_equation1,
		'4M30' : Calcul_de_volumes_4e,		
		'4N10': Exercice_additionner_des_fractions,
		'4N11': Exercice_additionner_ou_soustraire_des_fractions,
		'4N12': Exercice_trouver_l_inverse,
		'4N13': Exercice_multiplier_fractions,
		'4N14': Exercice_diviser_fractions,
		'4N15': Exercice_additionner_fraction_produit,
		'4N21': Puissances_d_un_relatif_1,
		'4N21-1': Puissances_d_un_relatif_2,
		'4N21-2': Puissances_de_dix,
		'4P10' : problemes_grandeurs_composees,
		'4R10': Exercice_multiplications_relatifs,
		'4G10' : Exercice_Pythagore,
		'4G11' : Reciproque_Pythagore,
		'4G12' : Problemes_Pythagore,
		'4G30' : Exercice_Trigo_longueurs_4e,
		'4G31' : Exercice_Trigo_angles_4e,
		'4G20' : Thales_4eme,
		'4G21' : Reciproque_Thales_4eme,
		'3A10' : DivisionEuclidienne_multiplesDiviseurs_Criteres,
		'3A11' : Premier_ou_pas,
		'3A11-1' : Premier_ou_pas_critere_par7_par11,
		'3A11-2' : Decomposition_facteurs_premiers,
		'3A11-3' : Lister_Diviseurs_Par_Decomposition_facteurs_premiers,
		'3A12' : Fractions_irreductibles,
		//'3A13' : PGCD_PPCM_Engrenages,
		'3M30' : Calcul_de_volumes_3e,
		'3N10': Exercice_developper,
		'3N11' : Double_distributivite,
		'3N12' : Developper_Identites_remarquables3,
		'3N13' : Factoriser_Identites_remarquables3,
		'3N14' : Resoudre_une_equation_produit_nul,
		'3N14-2' : Resoudre_une_equation_produit_nul_niv2,
		'3G10' : Exercice_Thales,
		'3G11' : Reciproque_Thales,
		'3G30' : Exercice_Trigo_longueurs,
		'3G31' : Exercice_Trigo_angles,
		'3F1-act' : fonction_notion_vocabulaire,
		'3F10' : fonctions_lineaires,
		'3F11' : fonctions_affines,
		'3F12' : fonctions_calculs_d_images,
		'3F12-2' : Image_fonction_algebrique,
		'3F12-3' : Tableau_de_valeurs,
		'3F12-4' : Image_antecedent_graphique,
		'3S20' : fonctions_probabilite2,
		//'3SVGtest' : svglibs,
		//'3Tests' : tester_des_fonctions,
		'2N10' : Developper_Identites_remarquables2,
		'2N11' : Factoriser_Identites_remarquables2,
		'P001' : Code_LaTeX_personnalise,
		// 'P002': LaTeX_static,
		'P003' : feuille_d_axes_gradues,
		'cours': Questions_de_cours,
		'LaTeX' : Code_LaTeX_personnalise,
		// 'Perso' : HTML_personnalise,
		// 'TsvgjsKatex' : tests_SVGJS_KATEX,
		
	};

//Pour modifier les exercices lorsqu'ils sont en mode diaporama
var est_diaporama = false

if (window.location.href.indexOf('cm.html')>0) {
	est_diaporama = true
}

//Efface de la liste des exercices disponibles tout ceux qui n'ont pas de version HTML
if (sortie_html){
	var codeMG32 = '';
}

for (var i in liste_des_exercices_disponibles) {
	let exercice = new liste_des_exercices_disponibles[i];
	if (sortie_html && exercice.pas_de_version_HMTL) {
		delete liste_des_exercices_disponibles[i]
	}
	if (!sortie_html && exercice.pas_de_version_LaTeX) {
		delete liste_des_exercices_disponibles[i]
	}
}

/**
* Classe parente de tous les exercices
*
* @Auteur Rémi Angot
*/
function Exercice() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = '';
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.introduction = '';
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 2;
    this.spacing_corr = 1;
    this.beamer = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_texte = false; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];

   	this.consigne_modifiable = true;
   	this.nb_questions_modifiable = true;
   	this.nb_cols_modifiable = true;
   	this.nb_cols_corr_modifiable = true;
   	this.spacing_modifiable = true;
   	this.spacing_corr_modifiable = true;
   	this.correction_detaillee_disponible = false;
   	this.correction_detaillee = true;
   	this.bouton_aide = false;
   	// this.bouton_aide = modal_texte_court(numero_de_l_exercice,texte,label_bouton="Aide",icone="info circle")
   	// this.bouton_aide = modal_texte_long(numero_de_l_exercice,titre,texte,label_bouton="Aide",icone="info circle")
   	// this.bouton_aide = modal_youtube(numero_de_l_exercice,id_youtube,texte,label_bouton="Aide - Vidéo",icone="youtube")
   	// this.bouton_aide = modal_pdf(numero_de_l_exercice,url_pdf,texte="Aide",label_bouton="Aide - PDF",icone="file pdf")
   	this.pas_de_version_LaTeX = false ;
   	this.nouvelle_version = function(numero_de_l_exercice){}

}

function feuille_d_axes_gradues() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Tracer des droites graduées";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 3;
	this.sup=10;
	this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;


	this.nouvelle_version = function(numero_de_l_exercice){
		let pas;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		pas=parseInt(this.sup);
		for (let i=0, id_unique, texte;i<16;i++) {
			if (sortie_html) {
				id_unique = `${i}_${Date.now()}`;
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`,'', 6, 1, pas, [], [],false)
				}
			else { //sortie Latex 
				texte=Latex_reperage_sur_un_axe(2, ' ', 1, pas, [], [],false);
				this.liste_questions.push(texte)
			}
		}
		if (!sortie_html) liste_de_question_to_contenu_sans_numero_et_sans_consigne(this);	
		}
	this.besoin_formulaire_numerique = [`Nombres de parts`,10,""];
}

/**
* Lire l'abscisse entière d'un point
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Lire_abscisse_entiere(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Lire l'abscisse entière d'un point (grands nombres)";
	this.consigne = "Lire l'abscisse de chacun des points suivants.";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=4;

	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)
			switch (type_de_questions[i]) {
				case 1: // Placer des entiers sur un axe (milliers)
					abs0 = randint(1, 9)*1000;
					pas1 = 0.001;
					pas2 = 10;
					break;

				case 2: // Placer des entiers sur un axe (dizaines de mille)
					abs0 = randint(5, 15) * 10000;
					pas1 = 0.0001;
					pas2 = 10;
					break;

				case 3: // Placer des entiers sur un axe (centaines de mille)
					abs0 = randint(35, 85) * 100000;
					pas1 = 0.00001;
					pas2 = 10;
					break;
			}
			x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
			x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3)
			if (sortie_html) {
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
			}
			else { //sortie Latex 
				texte=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}
		
		}
		if (!sortie_html) liste_de_question_to_contenu(this); 
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Milliers\n2 : Dizaines de mille\n3 : Centaines de mille\n4 : Mélange"];
}
/**
* Placer un point d'abscisse entière
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Placer_un_point_abscisse_entiere(){
		'use strict';
		Exercice.call(this); // Héritage de la classe Exercice()
		this.titre = "Placer un point d'abscisse entière (grands nombres)";
		this.consigne = " Placer trois points sur un axe gradué.";
		this.nb_questions = 5;
		this.nb_questions_modifiable = true;
		this.nb_cols = 1;
		this.nb_cols_corr = 1;
		this.spacing = 1;
		this.spacing_corr = 1;
		this.sup=1;
		this.type_exercice = 'SVGJS';
	
	
		this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
			let type_de_questions;
			this.liste_questions=[];
			this.liste_corrections=[];
			this.contenu = ''; // Liste de questions
			this.contenu_correction = ''; // Liste de questions corrigées
			if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
			else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
			
	
			this.contenu = html_consigne(this.consigne)
			for (let i = 0,abs0,abs1,abs2,abs3,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
				l1=lettre_depuis_chiffre(i*3+1)
				l2=lettre_depuis_chiffre(i*3+2)
				l3=lettre_depuis_chiffre(i*3+3)
	
				switch (type_de_questions[i]) {
					case 1: // Placer des entiers sur un axe (milliers)
					abs0 = randint(1, 9)*1000;
					pas1 = 0.001;
					pas2 = 10;
					break;

				case 2: // Placer des entiers sur un axe (dizaines de mille)
					abs0 = randint(5, 15) * 10000;
					pas1 = 0.0001;
					pas2 = 10;
					break;

				case 3: // Placer des entiers sur un axe (centaines de mille)
					abs0 = randint(35, 85) * 100000;
					pas1 = 0.00001;
					pas2 = 10;
					break;
				}
				x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
				x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3);
				abs1 = arrondi(abs0 + x1/pas1 + x11 / pas1/pas2, type_de_questions[i]);  // le type de questions est égal au nombre de décimales.
				abs2 = arrondi(abs0 + x2/pas1 + x22 / pas1/pas2, type_de_questions[i]);
				abs3 = arrondi(abs0 + x3/pas1 + x33 / pas1/pas2, type_de_questions[i]);
	
				texte=`Placer les points : ${l1}(${string_nombre(abs1)}), ${l2}(${string_nombre(abs2)}), ${l3}(${string_nombre(abs3)})<br>`
				if (sortie_html) {
					texte_corr=''
					id_unique = `${i}_${Date.now()}`
					this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 110px;  "></div>`
					this.contenu +=`<h3>Placer les points : ${l1}(${string_nombre(abs1)}), ${l2}(${string_nombre(abs2)}), ${l3}(${string_nombre(abs3)})</h3>`
					SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
					this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
					SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
				}
				else { //sortie Latex 
					texte+=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
					texte_corr=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
					texte_corr+=`<br>Les points ${l1}(${string_nombre(abs1)}), ${l2}(${string_nombre(abs2)}), ${l3}(${string_nombre(abs3)}) sont placés ci dessus<br>`;
					this.liste_questions.push(texte)
					this.liste_corrections.push(texte_corr);
				}
	
			}
			if (!sortie_html) liste_de_question_to_contenu(this); 
	
		}
		this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Ordre de grandeur : milliers\n2 : Ordre de grandeur : dizaines de mille\n3 : centaines de mille\n4 : Mélange"];
	}
	
/**
* Questions statiques issues d'un fichier Markdown 
*
* Les thèmes sont des titres de niveaux 2
*
* suivies d'une liste qui alterne question et réponse 
* @Auteur Rémi Angot
*/
function Questions_de_cours(){
	"use strict";
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Questions de cours";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.consigne_modifiable = false;
	this.sup = ''; // thème des questions
	this.sup2 = 'questions_de_cours.txt'; //url des questions
	this.pas_de_version_LaTeX = true ;
	

	this.nouvelle_version = function(numero_de_l_exercice){
		let liste_questions = []; // Liste de questions
		let liste_corrections = []; // Liste de questions corrigées
		let dictionnaire_de_questions = {} ;
		let dictionnaire_de_questions_pret = false;
		let contenu_HTML = '';
		let contenu_correction_HTML = '';
		$.get(this.sup2, function( txt ) {
		// Récupère le fichier txt et transforme en un dictionnaire {'id_theme':[[questions],[réponses]]}
			let tableau_par_theme = txt.match(/##((?=[^#]).|\n)*/g).map(v=>v.trim())
			// Recherche les chaines de caractères commençant par ## et ne comportant pas d'autres #
			for (let i = 0; i < tableau_par_theme.length; i++) {
				let tableau_titre =  tableau_par_theme[i].match(/##.*/g);
				let questions_et_reponses = tableau_par_theme[i].match(/\*((?=[^*#]).|\n)*/g).map(v=>v.trim())
			 	// Recherche les chaines de caractères commençant par * et ne comportant pas d'autres * ou de #
			 	let titre = tableau_titre[0].replace('## ','');
				// Récupère le titre du thème sans ##
			 	let tableau_questions = [];
			 	let tableau_reponses = [];
				for (let i = 0; i < questions_et_reponses.length; i++) {
					if (i%2==0) { //rang pair => questions
						tableau_questions[i/2] = questions_et_reponses[i].replace('* ','')
						// Supprime les * devant chaque questions
					} else { //rang impair => réponses
						tableau_reponses[(i-1)/2] = questions_et_reponses[i].replace('* ','')
					}
			 	dictionnaire_de_questions[titre]=[tableau_questions,tableau_reponses];
				}
			}

			// Je n'utilise pas this.nb_questions ou this.sup car this n'est pas clairement défini dans cette fonction
			if (exercice[numero_de_l_exercice].sup == ''){
				exercice[numero_de_l_exercice].sup = choice(Object.keys(dictionnaire_de_questions)) // Si on n'a pas spécifié un thème, on en prend un au hasard.
			}

			let nb_questions = exercice[numero_de_l_exercice].nb_question;
			if (dictionnaire_de_questions[exercice[numero_de_l_exercice].sup]) {
				// Si le thème existe dans le dictionnaire alors on adapte le nombre de questions
				nb_questions = Math.min (exercice[numero_de_l_exercice].nb_questions,dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0].length)
			}
			for (let i = 0; i < nb_questions; i++) {
				liste_questions.push(dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][0][i]);
				liste_corrections.push(dictionnaire_de_questions[exercice[numero_de_l_exercice].sup][1][i]); 
			}
			shuffle2tableaux(liste_questions,liste_corrections)
			// Mélange les questions et les réponses (sans perdre les associations)
		 	dictionnaire_de_questions_pret = true;
	
		});

		let id_unique = `${numero_de_l_exercice}_${Date.now()}`	
		if (sortie_html) {
			this.contenu = `<div id=div_exo${id_unique}></div>`
			this.contenu_correction = `<div id=div_corr_exo${id_unique}></div>`
		}

		if (!window.divExist) {window.divExist = []} // Si divExist n'existe pas on le créé
		// divExist est un tableau dans lequel on stocke les listenner sur la création des div
		window.divExist[id_unique] = setInterval(function() {
			if ($(`#div_exo${id_unique}`).length && dictionnaire_de_questions_pret ) {
				// Attends que le div existe et que le dictionnaire de questions soit prêt
				contenu_HTML = html_enumerate(liste_questions,this.spacing);
				contenu_correction_HTML = html_enumerate(liste_corrections,this.spacing);
				$(`#div_exo${id_unique}`).html(contenu_HTML);//Vide le div pour éviter les SVG en doublon
				$(`#div_corr_exo${id_unique}`).html(contenu_correction_HTML);//Vide le div pour éviter les SVG en doublon
				renderMathInElement(document.body, {
		            delimiters: [
					{left: "\\[", right: "\\]", display: true},
					{left: "$", right: "$", display: false}
					],
					"throwOnError":true,"errorColor":"#CC0000","strict":"warn","trust":false
		        });
				clearInterval(divExist[numero_de_l_exercice]);//Arrête le timer
	    	}
		}, 100); // Vérifie toutes les 100ms



	}
	this.besoin_formulaire_texte = ["Thème des questions","De la forme 6M1"];
	this.besoin_formulaire2_texte = ["Liste des questions","URL du fichier texte contenant les questions et réponses."];
}

/**
* Lire l'abscisse décimale d'un point
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Lire_abscisse_decimale(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Lire l'abscisse décimale d'un point";
	this.consigne = "Lire l'abscisse de chacun des points suivants.";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)
			switch (type_de_questions[i]) {
				case 1: // Placer des décimaux sur un axe (1 décimale)
					abs0 = randint(0, 9);
					pas1 = 1;
					pas2 = 10;
					break;

				case 2: // Placer des décimaux sur un axe (2 décimales)
					abs0 = randint(0, 90) / 10;
					pas1 = 10;
					pas2 = 10;
					break;

				case 3: // Placer des décimaux sur un axe (3 décimales)
					abs0 = randint(0, 990) / 100;
					pas1 = 100;
					pas2 = 10;
					break;
			}
			x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
			x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3)
			if (sortie_html) {
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
			}
			else { //sortie Latex 
				texte=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}
		
		}
		if (!sortie_html) liste_de_question_to_contenu(this); 
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange"];
}
/**
* Lire l'abscisse fractionnaire d'un point
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Lire_abscisse_fractionnaire(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Lire l'abscisse fractionnaire d'un point";
	this.consigne = "Lire l'abscisse de chacun des points suivants.";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)
			switch (type_de_questions[i]) {
				case 1: // Placer des demis aux quarts sur un axe 
					abs0 = 0;
					pas1 = 1;
					pas2 = choice([2,3,4]);
					break;

				case 2: // Placer des cinquièmes aux neuvièmes sur un axe
					abs0 = 0;
					pas1 = 1;
					pas2 = randint(5,9);
					break;

				case 3: // Placer des demis aux neuvièmes à partir d'un entier >=1 sur un axe 
					abs0 = randint(1,5);
					pas1 = 1;
					pas2 = randint(2,9);
					break;
			}
			x1 = randint(0, 1); x2 = randint(2, 3); x3 = randint(4, 5);
			x11 = randint(1,pas2-1); x22 = randint(1,pas2-1); x33 = randint(1,pas2-1)
			if (sortie_html) {
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[abs0 + 1 / pas1, 1, 0], [abs0 + 2 / pas1, 2, 0], [abs0 + 3 / pas1, 3, 0], [abs0 + 4 / pas1, 4, 0], [abs0 + 5 / pas1, 5, 0], [abs0 + 6 / pas1, 6, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[abs0 + 1 / pas1, 1, 0], [abs0 + 2 / pas1, 2, 0], [abs0 + 3 / pas1, 3, 0], [abs0 + 4 / pas1, 4, 0], [abs0 + 5 / pas1, 5, 0], [abs0 + 6 / pas1, 6, 0]],true)
			}
			else { //sortie Latex 
				texte=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],true);
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}
		
		}
		if (!sortie_html) liste_de_question_to_contenu(this); 
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Demis, tiers ou quarts avec zéro placé\n2 : Des cinquièmes aux neuvièmes avec zéro placé \n3 : Toutes les fractions précédentes mais zéro non visible\n4 : Mélange"];
}

/**
* Placer un point d'abscisse décimale
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Placer_points_sur_axe(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Placer un point d'abscisse décimale";
	this.consigne = " Placer trois points sur un axe gradué.";
	this.nb_questions = 5;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=1;
	this.type_exercice = 'SVGJS';


	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,abs1,abs2,abs3,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)

			switch (type_de_questions[i]) {
				case 1: // Placer un point sur un axe (1 décimale)
					abs0 = randint(0, 9);
					pas1 = 1;
					pas2 = 10;
					break;

				case 2: // Placer un point sur un axe (2 décimales)
					abs0 = randint(0, 90) / 10;
					pas1 = 10;
					pas2 = 10;
					break;

				case 3: // Placer un point sur un axe (3 décimales)
					abs0 = randint(0, 990) / 100;
					pas1 = 100;
					pas2 = 10;
					break;
			}
			x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
			x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3);
			abs1 = arrondi(abs0 + x1/pas1 + x11 / pas1/pas2, type_de_questions[i]);  // le type de questions est égal au nombre de décimales.
			abs2 = arrondi(abs0 + x2/pas1 + x22 / pas1/pas2, type_de_questions[i]);
			abs3 = arrondi(abs0 + x3/pas1 + x33 / pas1/pas2, type_de_questions[i]);

			texte=`Placer les points : ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})<br>`
			if (sortie_html) {
				texte_corr=''
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 110px;  "></div>`
				this.contenu +=`<h3>Placer les points : ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})</h3>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false)
			}
			else { //sortie Latex 
				texte+=Latex_reperage_sur_un_axe(2.4, abs0, pas1, pas2, [], [[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2.4, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]],[[calcul(abs0 ,0), 0, 0], [calcul(abs0 + 1 / pas1,0), 1, 0]],false);
				texte_corr+=`<br>Les points ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)}) sont placés ci dessus<br>`;
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}

		}
		if (!sortie_html) liste_de_question_to_contenu(this); 

	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Un chiffre après la virgule\n2 : Deux chiffres après la virgule \n3 : Trois chiffres après la virgule\n4 : Mélange"];
}


/**
* Conversions de durées.
* * 1 : H vers min ou H ou min ou Hmin vers s 
* * 2 : h vers j-h
* * 3 : s vers HMS
* * 4 : h vers semaines j h
* * 5 : toutes les conversions
* @Auteur Rémi Angot
*/
function Conversions_de_durees(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 5 ; 
	this.titre = "Convertir des durées";
	this.consigne = "Compléter les égalités suivantes";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 2;
	this.nb_questions = 5


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let liste_sous_type_de_questionv1=combinaison_listes([1,2,3,4],this.nb_questions)
		let liste_sous_type_de_questionv2=combinaison_listes([0,1,2],this.nb_questions)
		let type_de_questions=[]
		if (this.sup<5){
			type_de_questions = combinaison_listes([this.sup],this.nb_questions)
		}
		if (this.sup==5){
			type_de_questions = combinaison_listes([1,2,3,4],this.nb_questions)
		}


		for (let i = 0, h, m, s, j, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			if (type_de_questions[i]==1) {
				let sous_type_de_question = liste_sous_type_de_questionv1[i]
				if (sous_type_de_question==1) {
					h = randint(2,11)
					texte = `$${h}~\\text{h en minute}$`
					texte_corr = `$${h}~\\text{h} = ${h}\\times60~~\\text{min} = ${tex_nombre(h*60)}~\\text{min}$`
				}
				if (sous_type_de_question==2) {
					h = choice([1,2,10,20])
					texte = `$${h}~\\text{h en secondes}$`
					texte_corr = `$${h}~\\text{h} = ${h}\\times3~600~\\text{s} = ${tex_nombre(h*3600)}~\\text{s}$`
				}
				if (sous_type_de_question==3) {
					m = randint(2,59)
					texte = `$${m}~\\text{min en secondes}$`
					texte_corr = `$${m}~\\text{min} = ${m}\\times60~\\text{s} = ${tex_nombre(m*60)}~\\text{s}$`
				} 
				if (sous_type_de_question==4) {
					h = randint(1,2)
					m = randint(2,59)
					texte = `$${h}~\\text{h}~${m}~\\text{min en secondes}$`
					texte_corr = `$${h}~\\text{h}~${m}~\\text{min} = ${h}\\times3~600~\\text{s} + ${m}\\times60~\\text{s} = ${tex_nombre(h*3600)}+${tex_nombre(m*60)}~\\text{s} = ${tex_nombre(h*3600+m*60)}~\\text{s}$`
				}
			}
			if (type_de_questions[i]==2) {
				j = randint(1,6)
				h = randint(1,23)
				texte = `$${tex_nombre(h+24*j)}~\\text{h en jours et heures}$`
				texte_corr = `$${tex_nombre(h+24*j)}~\\text{h} = ${j}\\times24~\\text{h} + ${h}~\\text{h} = ${j}~\\text{j}~${h}~\\text{h}$`
			}

			if (type_de_questions[i]==3) {
				h = liste_sous_type_de_questionv2[i]
				m = randint(1,59)
				s = randint(1,59)
				if (h>0){
					texte = `$${tex_nombre(h*3600+m*60+s)}~\\text{s au format HMS}$`
					texte_corr = `$${tex_nombre(h*3600+m*60+s)}~\\text{s} = ${tex_nombre(h*3600)}~\\text{s}+${m*60+s}~\\text{s} =${h}~\\text{h}+${m}\\times60~\\text{s}+${s}~\\text{s}=${h}~\\text{h}~${m}~\\text{min}~${s}~\\text{s}$`	
				} else {
					texte = `$${tex_nombre(m*60+s)}~\\text{s au format HMS}$`
					texte_corr = `$${tex_nombre(m*60+s)}~\\text{s} = ${m}\\times60~\\text{s}+${s}~\\text{s}=${m}~\\text{min}~${s}~\\text{s}$`
				}
				
			}
			if (type_de_questions[i]==4) {
				s = randint(1,9) // nombre de semaines
				j = randint(1,6)
				h = randint(1,23)
				texte = `$${tex_nombre(h+24*j+24*7*s)}~\\text{h en semaines jours et heures}$`
				if (s>1) { // pour la gestion du pluriel de semaines
					texte_corr = `$${tex_nombre(h+24*j+24*7*s)}~\\text{h} = ${j+7*s}\\times24~\\text{h} + ${h}~\\text{h} = ${j+7*s}~\\text{j}~${h}~\\text{h} = ${s}\\times7~\\text{j} + ${j}~\\text{j}~${h}~\\text{h} = ${s}~\\text{semaines}~${j}~\\text{j}~${h}~\\text{h}$`
				} else {
					texte_corr = `$${tex_nombre(h+24*j+24*7*s)}~\\text{h} = ${j+7*s}\\times24~\\text{h} + ${h}~\\text{h} = ${j+7*s}~\\text{j}~${h}~\\text{h} = ${s}\\times7~\\text{j} + ${j}~\\text{j}~${h}~\\text{h} = ${s}~\\text{semaine}~${j}~\\text{j}~${h}~\\text{h}$`
				}
				
			}
		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
		}
		cpt++;	
		
		}
		liste_de_question_to_contenu(this);

	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',5,"1 : Conversions en s ou min\n2 : Conversions en jours-heures \n3 : Conversions en HMS\n4 : Conversions en semaines-jours-heures \n5 : Tous types de conversions"]
	
}

/**
* Convertir une heure décimale dans le format HMS
*
* La partie décimale est 25, 75 ou un seul chiffre
* @Auteur Rémi Angot
*/
function Heures_decimales(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Utiliser les heures décimales";
	this.consigne = "Compléter les égalités suivantes";
	this.spacing = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		for (let i = 0, partie_entiere, partie_decimale, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			partie_entiere = randint(1,12)
			partie_decimale = choice([1,2,3,4,5,6,7,8,9,25,75])
			texte = `$${partie_entiere},${partie_decimale}~\\text{h}=\\dotfill$`
			if (partie_decimale==25){
				texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{1}{4}~\\text{h}`
				texte_corr += `=${partie_entiere}~\\text{h}~15~\\text{min}$`	
			} else if (partie_decimale==75){
				texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{3}{4}~\\text{h}`
				texte_corr += `=${partie_entiere}~\\text{h}~45~\\text{min}$`	
			} else if (partie_decimale==5){
				texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{1}{2}~\\text{h}`
				texte_corr += `=${partie_entiere}~\\text{h}~30~\\text{min}$`	
			} else {
				texte_corr = `$${partie_entiere},${partie_decimale}~\\text{h}=${partie_entiere}~\\text{h}+\\dfrac{${partie_decimale}}{10}~\\text{h}`
				texte_corr += `=${partie_entiere}~\\text{h}+${partie_decimale}\\times6~\\text{min}=${partie_entiere}~\\text{h}~${partie_decimale*6}~\\text{min}$`	
			}


		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('=\\dotfill','')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
		}
		cpt++;	
		
		}
		liste_de_question_to_contenu(this);

	}
	
}


/**
* Additions de durées de différents : 
* * MS+MS=1hMS sans retenue sur les s
* * MS+MS=1hMS avec retenue
* * HM+HM avec retenue
* * HMS+HMS avec retenue sur les min
* * HMS+HMS avec retenues min et s
* @Auteur Rémi Angot
*/
function Somme_de_durees(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Additionner des durées";
	this.consigne = "Compléter les égalités suivantes";
	this.sup = 1 // 2 niveaux de difficultés
	this.spacing = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let type_de_questions

		if (this.sup==1) {
			type_de_questions=combinaison_listes([1,3],this.nb_questions)
		} else {
			type_de_questions=combinaison_listes([1,2,3,4,5],this.nb_questions)
		}
		for (let i = 0, h1, h2, m1, m2, s1, s2, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			
			if (type_de_questions[i]==1) {
				s1 = randint(11,39)
				s2 = randint(1,20)
				m1 = randint(20,59)
				m2 = randint(40,59)
				texte = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`
				texte_corr = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}= ${m1+m2}~\\text{min}~${s1+s2}~\\text{s}= 1~\\text{h}~${m1+m2-60}~\\text{min}~${s1+s2}~\\text{s}$`
			}	
			if (type_de_questions[i]==2) {
				s1 = randint(21,39)
				s2 = randint(40,59)
				m1 = randint(20,59)
				m2 = randint(40,59)
				texte = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`
				texte_corr = `$${m1}~\\text{min}~${s1}~\\text{s}+${m2}~\\text{min}~${s2}~\\text{s}= ${m1+m2}~\\text{min}~${s1+s2}~\\text{s} = ${m1+m2+1}~\\text{min}~${s1+s2-60}~\\text{s} = 1~\\text{h}~${m1+m2-60}~\\text{min}~${s1+s2-60}~\\text{s}$`
			}
			if (type_de_questions[i]==3) {
				h1 = randint(2,12)
				h2 = randint(2,11)
				m1 = randint(30,50)
				m2 = randint(30,50)
				texte = `$${h1}~\\text{h}~${m1}~\\text{min}+${h2}~\\text{h}~${m2}~\\text{min}=\\dotfill$`
				texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}+${h2}~\\text{h}~${m2}~\\text{min}= ${h1+h2}~\\text{h}~${m1+m2}~\\text{min} = ${h1+h2+1}~\\text{h}~${m1+m2-60}~\\text{min}$`
			}
			if (type_de_questions[i]==4) {
				h1 = randint(2,12)
				h2 = randint(2,11)
				m1 = randint(30,50)
				m2 = randint(30,50)
				s1 = randint(2,55)
				s2 = randint(1,60-s1-1)
				texte = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`
				texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}= ${h1+h2}~\\text{h}~${m1+m2}~\\text{min}~${s1+s2}~\\text{s} = ${h1+h2+1}~\\text{h}~${m1+m2-60}~\\text{min}~${s1+s2}~\\text{s}$`
			}
			if (type_de_questions[i]==5) {
				h1 = randint(2,12)
				h2 = randint(2,11)
				m1 = randint(30,50)
				m2 = randint(30,50)
				s1 = randint(2,55)
				s2 = randint(60-s1,59)
				texte = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=\\dotfill$`
				texte_corr = `$${h1}~\\text{h}~${m1}~\\text{min}~${s1}~\\text{s}+${h2}~\\text{h}~${m2}~\\text{min}~${s2}~\\text{s}=`
				texte_corr +=` ${h1+h2}~\\text{h}~${m1+m2}~\\text{min}~${s1+s2}~\\text{s} = ${h1+h2}~\\text{h}~${m1+m2+1}~\\text{min}~${s1+s2-60}~\\text{s} =${h1+h2+1}~\\text{h}~${m1+m2+1-60}~\\text{min}~${s1+s2-60}~\\text{s}$`
			
			}	
			
		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('=\\dotfill','')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
		}
		cpt++;	
		
		}
		liste_de_question_to_contenu(this);

	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',2]//"1 : Additions simples\n2 : Additions avec d'éventuelles conversions"]
	
}

/**
* Problèmes où il faut calculer la durée d'un évèbement ou un horaire.
* Paramétrage possible : 
* * 1 : calculs de durées 
* * 2 : calculer l'heure de début
* * 3 : calculer l'heure de fin
* * 4 : mélange des 3 types précédents
* @Auteur Rémi Angot
*/
function Calculs_de_durees_ou_d_horaires(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des durées ou déterminer un horaire";
	this.consigne = "";
	this.sup = 4
	this.spacing = 2;
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		
		
		const type_de_contexte = combinaison_listes([1,2,3,4,5],this.nb_questions)
		let type_de_questions // 1 : calcul de durées // 2 : calcul de l'horaire de début // 3 : calcul de l'horaire de fin // 4 : mélange

		if (this.sup<4) { // que des questions de niveau 1 ou que des questions de niveau 2
			type_de_questions = combinaison_listes([this.sup],this.nb_questions)
		} else { // un mélange équilibré de questions
			type_de_questions = combinaison_listes([1,2,3],this.nb_questions)
		}
		
		for (let i = 0, d1, h1, m1, d2, h2, m2, d, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			//d1 : heure de début (h1 heures m1 min)
			//d2 : heure de fin (h2 heures m2 min)
			//d : durée 
			if (type_de_contexte[i]==1){
				h1 = randint(20,22)
				m1 = randint(35,58)
				d1 = h1*60+m1   	
				h2 = h1 + 2
				m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
				d2 = h2*60+m2
				d = d2-d1
				d1 = minToHoraire(d1)
				d2 = minToHoraire(d2)
				d = minToHour(d)
				
				if (type_de_questions[i]==1) {
					texte = `La diffusion d'un film commence à ${d1} et se termine à ${d2}. Combien de temps a duré ce film ?`;
					texte_corr = `${d2} − ${d1} = ${d}`;
					texte_corr += '<br>'
					texte_corr += `Le film dure ${d}.`;
				}
				if (type_de_questions[i]==2) {
					texte = `Un film dure ${d} et commence à ${d1}. À quelle heure se terminera-t-il ?`;
					texte_corr = `${d1} + ${d} = ${d2}`;
					texte_corr += '<br>'
					texte_corr += `Le film terminera à ${d2}.`;
				}
				if (type_de_questions[i]==3) {
					texte = `Un film de ${d} termine à ${d2}. À quelle heure a-t-il commencé ?`;
					texte_corr = `${d2} − ${d} = ${d1}`;
					texte_corr += '<br>'
					texte_corr += `Le film a commencé à ${d1}.`;
				} 

			}

			if (type_de_contexte[i]==2){
				h1 = randint(20,23)
				m1 = randint(35,58)
				d1 = h1*60+m1   	
				h2 = h1 + 1
				m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
				d2 = h2*60+m2
				d = d2-d1
				while (d<27 || d>75 || d==60){
					h1 = randint(20,23)
					m1 = randint(35,58)
					d1 = h1*60+m1   	
					h2 = h1 + 2
					m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
					d2 = h2*60+m2
					d = d2-d1
				}
				d1 = minToHoraire(d1)
				d2 = minToHoraire(d2)
				d = minToHour(d)
				
				if (type_de_questions[i]==1) {
					texte = `Sur son service de streaming favori, ${prenom()} commence à regarder une série à ${d1} et celle-ci se termine à ${d2}. Combien de temps a duré l'épisode ?`;
					texte_corr = `${d2} − ${d1} = ${d}`;
					texte_corr += '<br>'
					texte_corr += `La série a duré ${d}.`;
				}
				if (type_de_questions[i]==2) {
					texte = `${prenom()} allume son ordinateur à ${d1} pour regarder une série de ${d}. À quelle heure la série s'achèvera-t-elle ?`;
					texte_corr = `${d1} + ${d} = ${d2}`;
					texte_corr += '<br>'
					texte_corr += `La série s'achèvera à ${d2}.`;
				}
				if (type_de_questions[i]==3) {
					texte = `${prenom()} termine de regarder une série de ${d} à ${d2}. À quelle la série a-t-elle commencé ?`;
					texte_corr = `${d2} − ${d} = ${d1}`;
					texte_corr += '<br>'
					texte_corr += `Elle a commencé à ${d1}.`;
				}
			}

			if (type_de_contexte[i]==3){
				h1 = randint(8,21)
				m1 = randint(1,58)
				d1 = h1*60+m1   	
				h2 = h1 + randint(1,2)
				m2 = randint (1,59) // pas forcément de retenue dans d2-d1
				d2 = h2*60+m2
				d = d2-d1
				d1 = minToHoraire(d1)
				d2 = minToHoraire(d2)
				d = minToHour(d)
				
				if (type_de_questions[i]==1) {
					texte = `Une émission télévisée est diffusée de ${d1} à ${d2}. Combien de temps dure-t-elle ?`;
					texte_corr = `${d2} − ${d1} = ${d}`;
					texte_corr += '<br>'
					texte_corr += `L'émission dure ${d}.`;
				}
				if (type_de_questions[i]==2) {
					texte = `Une émission télévisée de ${d} commence à ${d1}. À quelle heure s'achèvera-t-elle ?`;
					texte_corr = `${d1} + ${d} = ${d2}`;
					texte_corr += '<br>'
					texte_corr += `L'émission s'achèvera à ${d2}.`;
				}
				if (type_de_questions[i]==3) {
					texte = `${prenom()} termine de regarder une émission de ${d} à ${d2}. À quelle heure l'émission a-t-elle commencé ?`;
					texte_corr = `${d2} − ${d} = ${d1}`;
					texte_corr += '<br>'
					texte_corr += `L'émission a commencé à ${d1}.`;
				}
			}

			if (type_de_contexte[i]==4){
				h1 = randint(13,16)
				m1 = randint(1,58)
				d1 = h1*60+m1   	
				h2 = h1 + randint(1,2)
				m2 = randint (1,58) // pas forcément de retenue dans d2-d1
				d2 = h2*60+m2
				d = d2-d1
				while (d<27 || d>75 || d==60){
					h1 = randint(13,16)
					m1 = randint(35,58)
					d1 = h1*60+m1   	
					h2 = h1 + randint(1,2)
					m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
					d2 = h2*60+m2
					d = d2-d1
				}
				d1 = minToHoraire(d1)
				d2 = minToHoraire(d2)
				d = minToHour(d)
				
				if (type_de_questions[i]==1) {
					texte = `Un papa regarde la compétition de gymnastique de sa fille  de ${d1} à ${d2}. Calculer la durée de cette compétition.`;
					texte_corr = `${d2} − ${d1} = ${d}`;
					texte_corr += '<br>'
					texte_corr += `La compétition dure ${d}.`;
				}
				if (type_de_questions[i]==2) {
					texte = `Une compétition de gymnastique commence à ${d1} et dure ${d}. À quelle heure sera-t-elle terminée ?`;
					texte_corr = `${d1} + ${d} = ${d2}`;
					texte_corr += '<br>'
					texte_corr += `La compétition terminera à ${d2}.`;
				}
				if (type_de_questions[i]==3) {
					texte = `Une compétition de gymnastique qui se termine à ${d2} a duré ${d}. À quelle heure a-t-elle commencé.`;
					texte_corr = `${d2} − ${d} = ${d1}`;
					texte_corr += '<br>'
					texte_corr += `La compétition a commencé à ${d1}.`;
				}
			}

			if (type_de_contexte[i]==5){
				h1 = randint(8,15)
				m1 = randint(25,58)
				d1 = h1*60+m1   	
				h2 = h1 + randint(2,5)
				m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
				d2 = h2*60+m2
				d = d2-d1
				while (d<27 || d>75 || d==60){
					h1 = randint(20,23)
					m1 = randint(35,58)
					d1 = h1*60+m1   	
					h2 = h1 + 2
					m2 = randint (1,m1) // pour s'assurer qu'il y a une retenue dans d2-d1
					d2 = h2*60+m2
					d = d2-d1
				}
				d1 = minToHoraire(d1)
				d2 = minToHoraire(d2)
				d = minToHour(d)
				
				if (type_de_questions[i]==1) {
					texte = `Un train part à ${d1} et arrive à destination à ${d2}. Calculer la durée du trajet.`;
					texte_corr = `${d2} − ${d1} = ${d}`;
					texte_corr += '<br>'
					texte_corr += `Le trajet dure ${d}.`;
				}
				if (type_de_questions[i]==2) {
					texte = `${prenomF()} monte dans le train à ${d1} pour un trajet qui doit durer ${d}. À quelle heure arrivera-t-elle ?`;
					texte_corr = `${d1} + ${d} = ${d2}`;
					texte_corr += '<br>'
					texte_corr += `Elle arrivera à ${d2}.`;
				}
				if (type_de_questions[i]==3) {
					texte = `Un train arrive en gare à ${d2} après un trajet de ${d}. À quelle heure le voyage a-t-il commencé ?`;
					texte_corr = `${d2} − ${d} = ${d1}`;
					texte_corr += '<br>'
					texte_corr += `Le voyage a commencé à ${d1}.`;
				}
			}
					

		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
		}
		cpt++;	
		
		}
		liste_de_question_to_contenu(this);

	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Calcul de durée\n2 : Calcul de l'horaire de fin\n3 : Calcul de l'horaire de début\n4 : 3 types de questions"]
	
}



/**
* Tables de multiplications classiques, à trou ou un mélange des deux.
*
* Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
* @Auteur Rémi Angot
*/
function Tables_de_multiplications(tables_par_defaut='2;3;4;5;6;7;8;9'){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables_par_defaut ;
	this.sup2 = 1 ; // classique|a_trous|melange
	this.titre = "Tables de multiplications";
	this.consigne = 'Calculer';
	this.spacing = 2;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune table n'est saisie
			this.sup = '2;3;4;5;6;7;8;9'
		}
		let tables = []
		if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule table
			tables[0] = this.sup
		} else {
			tables = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
		}	
		let couples = creer_couples(tables,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		var type_de_questions = 'a_trous';
		for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (this.sup2==1){
				type_de_questions = 'classique'
			} else if (this.sup2==2){
				type_de_questions = 'a_trous'
			} else {
				type_de_questions = choice(['classique','a_trous'])
			}
			if (type_de_questions=='classique') { // classique
				if (choice([true,false])) {
					texte = `$ ${tex_nombre(a)} \\times ${tex_nombre(b)} = \\dotfill$`;
					texte_corr = `$ ${tex_nombre(a)} \\times ${tex_nombre(b)} = ${tex_nombre(a*b)}$`;
				} else {
					texte = `$ ${tex_nombre(b)} \\times ${tex_nombre(a)} = \\dotfill$`;
					texte_corr = `$ ${tex_nombre(b)} \\times ${tex_nombre(a)} = ${tex_nombre(a*b)}$`;
				}
						
			} else { // a trous
				if (tables.length>2){ // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
					texte = choice(['$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $',
						'$ \\ldots\\ldots' + ' \\times ' + b + ' = ' + a * b + ' $']);
				} else{ // Sinon on demande forcément le 2e facteur	
					texte = '$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $'; 
				}
				
				texte_corr = '$ '+ a + ' \\times ' + b + ' = ' + a * b +' $';
			}
			if (est_diaporama) {
					texte = texte.replace('= \\dotfill','')
				}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des points-virgules'] // Texte, tooltip
	this.besoin_formulaire2_numerique = ['Style de questions',3,'1 : Classique\n2: À trous\n3: Mélangé'] 
}

/**
* Tables de divisions classiques, à trou ou un mélange des deux.
*
* Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
* @Auteur Rémi Angot
*/
function Tables_de_divisions(tables_par_defaut='2;3;4;5;6;7;8;9'){
//Diviser deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables_par_defaut ;
	this.sup2 = 1 ; // classique|a_trous|melange
	this.titre = "Tables de divisions";
	this.consigne = 'Calculer';
	this.spacing = 2;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune table n'est saisie
			this.sup = '2;3;4;5;6;7;8;9'
		}
		let tables = []
		if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule table
			tables[0] = this.sup
		} else {
			tables = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
		}	
		let couples = creer_couples(tables,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		let liste_type_de_questions = combinaison_listes(['classique','a_trous'],this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		var type_de_questions = 'a_trous';
		for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (this.sup2==1){
				type_de_questions = 'classique'
			} else if (this.sup2==2){
				type_de_questions = 'a_trous'
			} else {
				type_de_questions = liste_type_de_questions[i]
			}
			if (type_de_questions=='classique') { // classique
				texte = '$ '+ a*b + ' \\div ' + a + ' = \\dotfill $';
			} else { // a trous
				if (choice([true,false])) {
					texte = `$ ${a*b} \\div \\ldots\\ldots = ${b}$`;	
				} else {
					texte = `$ \\ldots\\ldots \\div ${a}  = ${b}$`;
				}
			}
			texte_corr = `$ ${a*b} \\div ${a} = ${b}$`;
			if (est_diaporama) {
					texte = texte.replace('= \\dotfill','')
				}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des points-virgules'] // Texte, tooltip
	this.besoin_formulaire2_numerique = ['Style de questions',3,'1 : Classique\n2: À trous\n3: Mélangé'] 
}

/**
* Tables de multiplications et de divisions classiques, à trou ou un mélange des deux.
*
* Par défaut ce sont les tables de 2 à 9 mais on peut choisir les tables que l'on veut
* @Auteur Rémi Angot
*/
function Tables_de_multiplications_et_divisions(tables_par_defaut='2;3;4;5;6;7;8;9'){
//Multiplier ou diviser deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables_par_defaut ;
	this.sup2 = 1 ; // classique|a_trous|melange
	this.titre = "Tables de multiplications et de divisions";
	this.consigne = 'Calculer';
	this.spacing = 2;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune table n'est saisie
			this.sup = '2;3;4;5;6;7;8;9'
		}
		let tables = []
		if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule table
			tables[0] = this.sup
		} else {
			tables = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
		}	
		let couples = creer_couples(tables,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		let liste_type_de_questions = combinaison_listes(['classique','a_trous'],this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let operation = combinaison_listes(['x','div'],this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let type_de_questions;
		for (let i = 0, a, b, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (this.sup2==1){
				type_de_questions = 'classique'
			} else if (this.sup2==2){
				type_de_questions = 'a_trous'
			} else {
				type_de_questions = liste_type_de_questions[i]
			}

			if (operation[i]=='x') {
				if (type_de_questions=='classique') { // classique
					texte = '$ '+ a + ' \\times ' + b + ' = \\dotfill $';
					texte_corr = '$ '+ a + ' \\times ' + b + ' = ' + a * b +' $';	
				} else { // a trous
					if (tables.length>2){ // Si pour le premier facteur il y a plus de 2 posibilités on peut le chercher
						texte = choice(['$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $',
							'$ \\ldots\\ldots' + ' \\times ' + b + ' = ' + a * b + ' $']);
					} else{ // Sinon on demande forcément le 2e facteur	
						texte = '$ '+ a + ' \\times \\ldots\\ldots = ' + a * b + ' $'; 
					}
					
					texte_corr = '$ '+ a + ' \\times ' + b + ' = ' + a * b +' $';
				}
			} else {
				if (type_de_questions=='classique') { // classique
					texte = '$ '+ a*b + ' \\div ' + b + ' = \\dotfill $';
				} else { // a trous
					if (choice([true,false])) {
						texte = `$ ${a*b} \\div \\ldots\\ldots = ${a}$`;	
					} else {
						texte = `$ \\ldots\\ldots \\div ${b}  = ${a}$`;
					}
				}
				texte_corr = `$ ${a*b} \\div ${b} = ${a}$`;
			}
			if (est_diaporama) {
					texte = texte.replace('= \\dotfill','')
				}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des points-virgules'] // Texte, tooltip
	this.besoin_formulaire2_numerique = ['Style de questions',3,'1 : Classique\n2: À trous\n3: Mélangé'] 
}

/**
* Mélange équitable d'additions, de soustractions, de multiplications et de divisions 
*
* * Niveau 1 Addition 2 chiffres + 1 chiffre, soustraction 2 chiffres - 1 chiffre, tables de 2 à 5
* * Niveau 2 Addition 2 chiffres + 2 chiffres ne dépassant pas 100, soustraction dont le résultat est entre 11 et 19, tables de 6 à 9
* * Niveau 3 Addition 2 chiffre + 2 chiffres dépassant 100, soustraction dont le résultat est entre 21 et 39, table de 7, 8, 11 ou 12, 
* @Auteur Rémi Angot
*/
function Quatre_operations(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Les quatre opérations";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup = 1; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(4)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1: // addition
					if (this.sup==1) {
						a = randint(11,89)
						b = randint(2,9)
						}
					if (this.sup==2) {
						a = randint(11,69)
						b = randint(11,29)
						}
					if (this.sup==3) {
						a = randint(11,89)
						b = randint(110-a,110-a+50)
						}
					texte = `$${a}+${b}$`
					texte_corr = `$${a}+${b}=${a+b}$`
					break;
				case 2: // soustraction
					if (this.sup==1) {
						a = randint(11,89)
						b = randint(2,9)
						}
					if (this.sup==2) {
						a = randint(20,89)
						b = randint(a-19,a-11)
						}
					if (this.sup==3) {
						a = randint(40,89)
						b = randint(a-39,a-21)
						}
					texte = `$${a}-${b}$`
					texte_corr = `$${a}-${b}=${a-b}$`
					break;
				case 3: // multiplication
					if (this.sup==1) {
						a = randint(2,5)
						b = randint(2,9)
						}
					if (this.sup==2) {
						a = randint(6,9)
						b = randint(6,9)
						}
					if (this.sup==3) {
						a = choice([7,8,11,12])
						b = randint(2,9)
						}
					texte = `$${a}\\times${b}$`
					texte_corr = `$${a}\\times${b}=${a*b}$`
					break;
				case 4: // division
					if (this.sup==1) {
						a = randint(2,5)
						b = randint(2,9)
						}
					if (this.sup==2) {
						a = randint(6,9)
						b = randint(6,9)
						}
					if (this.sup==3) {
						a = choice([7,8,11,12])
						b = randint(2,9)
						}
					texte = `$${a*b}\\div${a}$`
					texte_corr = `$${a*b}\\div${a}=${b}$`
					break;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Un nombre à 2 chiffres (non multiple de 10) + 9
* @Auteur Rémi Angot
*/
function Ajouter9(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Ajouter 9";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	

	this.nouvelle_version = function(numero_de_l_exercice){
		this.bouton_aide = modal_texte_court(numero_de_l_exercice,"Ajouter 9 revient à ajouter 10 et à soustraire 1.")
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(0,9)*10+randint(1,9)
			texte = `$${a}+9$`
			texte_corr = `$${a}+9=${a+9}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Un nombre à 2 chiffres ne terminant pas par 9 - 9
* @Auteur Rémi Angot
*/
function Soustraire9(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Soustraire 9";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(1,9)*10+randint(0,8)
			texte = `$${a}-9$`
			texte_corr = `$${a}-9=${a-9}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Un nombre à 2 chiffres non multiple de 10 + 11
* @Auteur Rémi Angot
*/
function Ajouter11(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Ajouter 11";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(0,9)*10+randint(1,9)
			texte = `$${a}+11$`
			texte_corr = `$${a}+11=${a+11}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Un nombre à 2 chiffres -11
* @Auteur Rémi Angot
*/
function Soustraire11(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Soustraire 11";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées


		let type_de_questions_disponibles = [1,1,1,1,2]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			if (liste_type_de_questions[i]==1) {
				a = randint(12,99)	
			} else {
				a = randint(2,9)*10
			}
			
			texte = `$${a}-11$`
			texte_corr = `$${a}-11=${a-11}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Somme de deux nombres dont les chiffres des unités sont des compléments à 10
* @Auteur Rémi Angot
*/
function Somme_de_deux_nombres_maries(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Somme de deux nombres mariés";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, u1, u2, cpt=0; i < this.nb_questions && cpt<50; ) {
			u1 = randint(1,9)
			u2 = 10-u1
			a = randint(1,9)*10+u1
			b = randint(1,9)*10+u2
			
			texte = `$${a}+${b}$`
			texte_corr = `$${a}+${b}=${a+b}$`
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Somme de 3 nombres dont 2 ont des chiffres des unités compléments à 10
* @Auteur Rémi Angot
*/
function Somme_de_deux_nombres_maries_et_un_entier(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Somme de deux nombres mariés et un entier";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, c, u1, u2, cpt=0; i < this.nb_questions && cpt<50; ) {
			u1 = randint(1,9)
			u2 = 10-u1
			a = randint(1,4)*10+u1
			b = randint(1,4)*10+u2
			c = randint(1,100-a-b)
			
			switch (liste_type_de_questions[i]){
					case 1: 
						texte = `$${a}+${b}+${c}$`
						texte_corr = `$${a}+${b}+${c}=${a+b+c}$`
						break;
					case 2: 
						texte = `$${a}+${c}+${b}$`
						texte_corr = `$${a}+${c}+${b}=${a+b+c}$`
						break;
			}	
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
 * Générateur de tirages pour un compte est bon avec en correction la solution mathador (4 opérations différentes).
 * @Auteur Jean-Claude Lhote
 */

function Le_compte_est_bonV2(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Générateur de \"Le compte est bon\"";
	this.consigne = "Écrire un calcul égal au nombre cible en utilisant les 5 nombres, 4 opérations différentes et éventuellement des parenthèses.";
	this.nb_questions = 5;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup=30;
	this.sup2=70;
	var max_solution=70;
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let eureka;
		let solution=0;
		let min_solution=parseInt(this.sup);
		max_solution=parseInt(this.sup2);
		if (min_solution>max_solution) {
			min_solution=max_solution;
			this.sup=this.sup2;
		}
		let liste_choix=[1,2,2,3,3,4,4,4,4,5,6,6,6,6,7,7,8,8,8,8,9,9,9,9,10,11,12,13,14,15,16,17,18,19,20];
		for (let i = 0, texte, texte_corr, a, b, c, d, e, f,tirage,expression_en_cours,operations_restantes,nombres_restants,op,part1,part2,cpt=0; i < this.nb_questions && cpt<50; ) {
			eureka=false;
			while (eureka==false){
				tirage=[];
				a=parseInt(choice(liste_choix))
				b=parseInt(choice(liste_choix,[13,14,15,16,17,18,19,20,a]))
				c=parseInt(choice(liste_choix,[12,13,14,15,16,17,18,19,20,a,b]))
				d=parseInt(choice(liste_choix,[12,13,14,15,16,17,18,19,20,b,c]))
				e=parseInt(choice(liste_choix,[12,13,14,15,16,17,18,19,20]))
				tirage.push(a,b,c,d,e);
				nombres_restants=shuffle(tirage);
				operations_restantes=['\\times','+','-','\\div'];
				operations_restantes=shuffle(operations_restantes);
				expression_en_cours=[`${nombres_restants[0]}`,`${nombres_restants[1]}`,`${nombres_restants[2]}`,`${nombres_restants[3]}`,`${nombres_restants[4]}`];
				while (nombres_restants.length>1){
					b=nombres_restants.pop();
					a=nombres_restants.pop();
					part2=expression_en_cours.pop();
					part1=expression_en_cours.pop();
					op=operations_restantes.pop();
					if (op=='\\times'){
						c=a*b;
						expression_en_cours.push(`${part1}${op}${part2}`);
						nombres_restants.push(c);
					}
					else if (op=='\\div'){
						if (a%b==0) {
							c=a/b;
							if (part1[0]=='\\'){
								part1=part1.substring(6,part1.length)
								part1=part1.substring(0,part1.length-7)
								}
							if (part2[0]=='\\'){
								part2=part2.substring(6,part2.length)
								part2=part2.substring(0,part2.length-7)
								}
							expression_en_cours.push(`\\dfrac{${part1}}{${part2}}`);
							nombres_restants.push(c);	
						}
						else break;
					}
					else if (op=='-'){
						if (a>b) {
							c=a-b;
							expression_en_cours.push(`\\left(${part1}${op}${part2}\\right)`);
							nombres_restants.push(c);	
						}
						else break;
					}
					else if (op=='+'){
						c=a+b;
						if (part2.substring(0,2)=='\\l'){
							part2=part2.substring(6,part2.length)
							part2=part2.substring(0,part2.length-7)
							}
						expression_en_cours.push(`\\left(${part1}${op}${part2}\\right)`);
						nombres_restants.push(c);
					}
				}

				if (nombres_restants.length==1&&operations_restantes.length==0)	{
					solution=nombres_restants[0];
					if (solution>=min_solution&solution<=max_solution) {
						eureka=true;
						texte=`Le tirage est le suivant : $${tirage[0]}~;~${tirage[1]}~;~${tirage[2]}~;~${tirage[3]}~;~${tirage[4]}$ <br>La cible est : $${solution}$`
						if (expression_en_cours[0][0]=='\\'){
						expression_en_cours[0]=expression_en_cours[0].substring(6,expression_en_cours[0].length)
						expression_en_cours[0]=expression_en_cours[0].substring(0,expression_en_cours[0].length-7)
						}
						texte_corr=`La solution est : $${expression_en_cours[0]}=${solution}$`
						if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
							this.liste_questions.push(texte);
							this.liste_corrections.push(texte_corr);
							i++;
						}		
					}
				}
			}
			cpt++;	
		}
	liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Limite inférieure',max_solution];
	this.besoin_formulaire2_numerique = ['Limite supérieure',100];
}


/**
* Le nombre de dizaines, centaines et milliers étant donné, il faut écrire le nombre.
*
* 2 fois sur 5 il y a chevauchement entre les classes
* @Auteur Rémi Angot
*/
function Exercice_numeration_entier(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Écrire un nombre à partir de son nombre de dizaines, de centaines, de milliers...";
	this.consigne = "Écrire en chiffres chacun des nombres.";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2] // sans chevauchement ou avec chevauchement
		let liste_type_de_questions = combinaison_listes([1,1,1,2,2],this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, rang_a, rang_b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(2,8)*10+randint(1,5)
			b = randint(2,8)*10+randint(1,5)
			let rangs = ['unités','dizaines','centaines','milliers','dizaines de mille','centaines de mille','millions']
			rang_a = randint(0,2)
			if (liste_type_de_questions[i]==1){
				rang_b = randint(rang_a+2,6)
			} else {
				rang_b = rang_a+1}
			
			texte = `$\\text{${b}  ${rangs[rang_b]} et ${a} ${rangs[rang_a]}}$`
			texte_corr = `$${b} \\text{ ${rangs[rang_b]} et }${a} \\text{ ${rangs[rang_a]} : } ${tex_nombre(b*Math.pow(10,rang_b)+a*Math.pow(10,rang_a))}$`
				
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Des questions sur le nombre ou le chiffre de centaines, de dizaines, de dixièmes, de centièmes...
* @Auteur Rémi Angot
*/
function Decomposition_nombre_decimal(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Décomposer un nombre décimal (nombre de..., chiffre de...)";
	this.consigne = "Compléter les phrases suivantes.";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,choice([3,4,5]),choice([6,7,8]),choice([9,10]),choice([11,12])] // sans chevauchement ou avec chevauchement
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let m = randint(1,9); // le nombre sera le même pour tout l'exercice
		let c = randint(0,9,[m]);
		let d = randint(0,9,[m,c]);
		let u = randint(0,9,[m,c,d]);
		let di = randint(0,9,[m,c,d,u]);
		let ci = randint(0,9,[m,c,d,u,di]);
		let mi = randint(1,9,[m,c,d,u,di,ci]);
		let n = m.toString()+''+c.toString()+d.toString()+u.toString()+','+di.toString()+ci.toString()+mi;
		//calcul ne semble pas marcher avec 7 chiffres significatifs
		this.consigne = `On considère le nombre $${n}$. Compléter les phrases suivantes.`
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1 : 
					texte = "La partie entière de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(m*1000+c*100+d*10+u)}$`
				break
				case 2 : 
					texte = "La partie décimale de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(di/10+ci/100+mi/1000)}$`
				break
				case 3 : 
					texte = "Le chiffre des dizaines de ce nombre est : "
					texte_corr = texte + `$${d}$`
				break
				case 4 : 
					texte = "Le chiffre des centaines de ce nombre est : "
					texte_corr = texte + `$${c}$`
				break
				case 5 : 
					texte = "Le chiffre des miliers de ce nombre est : "
					texte_corr = texte + `$${m}$`
				break
				case 6 : 
					texte = "Le chiffre des dixièmes de ce nombre est : "
					texte_corr = texte + `$${di}$`
				break
				case 7 : 
					texte = "Le chiffre des centièmes de ce nombre est : "
					texte_corr = texte + `$${ci}$`
				break
				case 8 : 
					texte = "Le chiffre des millièmes de ce nombre est : "
					texte_corr = texte + `$${mi}$`
				break
				case 9 : 
					texte = "Le nombre de dizaines de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(d+c*10+m*100)}$`
				break
				case 10 : 
					texte = "Le nombre de centaines de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(c+m*10)}$`
				break
				case 11 : 
					texte = "Le nombre de dixièmes de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(di+u*10+d*100+c*1000+m*10000)}$`
				break
				case 12 : 
					texte = "Le nombre de centièmes de ce nombre est : "
					texte_corr = texte + `$${tex_nombrec(ci+di*10+u*100+d*1000+c*10000+m*100000)}$`
				break
			}

			texte_corr += "."
			texte += "\\ldots"
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* 100-...= 
* @Auteur Rémi Angot
*/
function Complement_a_100(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Complément à 100";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(11,89)
			texte = `$100-${a}$`
			texte_corr = `$100-${a}=${100-a}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Une soustraction dont le premier terme est un multiple de 10
* @Auteur Rémi Angot
*/
function Complement_a_une_dizaine(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Complément à une dizaine";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = randint(2,9)*10
			b = randint(2,a-11)
			texte = `$${a}-${b}$`
			texte_corr = `$${a}-${b}=${a-b}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Division d'un entier par 10, 100, 1000
* @Auteur Rémi Angot
*/
function Diviser_par_10_100_1000(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Diviser un entier par 10, 100 ou 1000";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = choice([randint(1,9),randint(11,99),randint(101,999)])
			b = choice([10,100,1000])
			texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`
			texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(a/b)}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
}

/**
* Un entier à un 1 ou 2 chiffres, un nombre décimal avec une partie décimale à un ou 2 chiffres à diviser par 10, 100 ou 1000 
* @Auteur Rémi Angot
*/
function Diviser_decimal_par_10_100_1000(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Diviser un nombre décimal par 10, 100 ou 1000";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			a = choice([randint(1,9),randint(11,99),calcul(randint(11,99)/10),calcul(randint(101,999)/100),calcul(randint(1,9)/10)])
			b = choice([10,100,1000])
			texte = `$${tex_nombre(a)}\\div${tex_nombre(b)}$`
			texte_corr = `$${tex_nombre(a)}\\div${tex_nombre(b)}=${tex_nombrec(a/b)}$`
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Calculer la moitié d'un nombre pair, d'un impair inférieur à 20, d'un multiple de 200, d'un nombre de la forme a00 avec a impair, d'un nombre de la forme
*  a,b avec a et b pairs ou 1xx avec xx un nombre pair 
* @Auteur Rémi Angot
*/
function Moitie(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Moitié";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup = 1; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(6)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1: // Table de 2
					a = randint(2,9)
					texte = `$\\text{La moitié de }${a*2}$`
					texte_corr = `$\\text{La moitié de }${a*2} \\text{ est } ${a}$`
					break;
				case 2: // Impair inférieur à 20
					a = randint(2,9)
					texte = `$\\text{La moitié de }${a*2+1}$`
					texte_corr = `$\\text{La moitié de }${a*2+1} \\text{ est } ${tex_nombrec(a+5/10)}$`
					break;
				case 3: // Table de 200
					a = randint(2,9)
					texte = `$\\text{La moitié de }${tex_nombre(a*2*100)}$`
					texte_corr = `$\\text{La moitié de }${tex_nombre(a*2*100)} \\text{ est } ${tex_nombre(a*100)}$`
					break;
				case 4: // a00 avec a impair
					a = randint(2,9)
					texte = `$\\text{La moitié de }${tex_nombre((a*2+1)*100)}$`
					texte_corr = `$\\text{La moitié de }${tex_nombre((a*2+1)*100)} \\text{ est } ${tex_nombre(a*100+50)}$`
					break;
				case 5: // a,b avec a et b pairs
					a = randint(2,9)
					b = randint(2,9)
					texte = `$\\text{La moitié de }${tex_nombrec(a*2+b*2/100)}$`
					texte_corr = `$\\text{La moitié de }${tex_nombrec(a*2+b*2/100)} \\text{ est } ${tex_nombrec(a+b/100)}$`
					break;
				case 6: // 1xx avec xx un nombre pair
					a = randint(2,9)
					texte = `$\\text{La moitié de }${100+a*2}$`
					texte_corr = `$\\text{La moitié de }${100+a*2} \\text{ est } ${50+a}$`
					break;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


/**
* Calculer le tiers d'un multiple de 3, d'un multiple de 300, d'un multiple de 30 ou d'un nombre a,b avec a et b multiples de 3
* @Auteur Rémi Angot
*/
function Tiers(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Tiers";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup = 1; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(4)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1: // Table de 3
					a = randint(2,9)
					texte = `$\\text{Le tiers de }${a*3}$`
					texte_corr = `$\\text{Le tiers de }${a*3} \\text{ est } ${a}$`
					break;
				case 2: // Table de 300
					a = randint(2,9)
					texte = `$\\text{Le tiers de }${tex_nombre(a*3*100)}$`
					texte_corr = `$\\text{Le tiers de }${tex_nombre(a*3*100)} \\text{ est } ${tex_nombre(a*100)}$`
					break;
				case 3: // Table de 30
					a = randint(2,9)
					texte = `$\\text{Le tiers de }${tex_nombre(a*3*10)}$`
					texte_corr = `$\\text{Le tiers de }${tex_nombre(a*3*10)} \\text{ est } ${tex_nombre(a*10)}$`
					break;
				case 4: // a,b avec a et b divisibles par 3
					a = randint(2,9)
					b = randint(2,9)
					texte = `$\\text{Le tiers de }${tex_nombrec(a*3+b*3/100)}$`
					texte_corr = `$\\text{Le tiers de }${tex_nombrec(a*3+b*3/100)} \\text{ est } ${tex_nombrec(a+b/100)}$`
					break;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


/**
* Calculer le quart d'un multiple de 4, d'un impair, d'un multiple de 400, d'un multiple de 40, d'un nombre a,b avec a et b multiples de 4
* @Auteur Rémi Angot
*/
function Quart(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Quart";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup = 1; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(5)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1: // Table de 4
					a = randint(2,9)
					texte = `$\\text{Le quart de }${a*4}$`
					texte_corr = `$\\text{Le quart de }${a*4} \\text{ est } ${a}$`
					break;
				case 2: // Impair
					a = randint(2,9)
					b = choice([1,2,3])
					texte = `$\\text{Le quart de }${a*4+b}$`
					texte_corr = `$\\text{Le quart de }${a*4+b} \\text{ est } ${tex_nombrec(a+b/4)}$`
					break;
				case 3: // Table de 400
					a = randint(2,9)
					texte = `$\\text{Le quart de }${tex_nombre(a*4*100)}$`
					texte_corr = `$\\text{Le quart de }${tex_nombre(a*4*100)} \\text{ est } ${tex_nombre(a*100)}$`
					break;
				case 4: // Table de 40
					a = randint(2,9)
					texte = `$\\text{Le quart de }${tex_nombre(a*4*10)}$`
					texte_corr = `$\\text{Le quart de }${tex_nombre(a*4*10)} \\text{ est } ${tex_nombre(a*10)}$`
					break;
				case 5: // a,b avec a et b divisibles par 4
					a = randint(2,9)
					b = randint(2,9)
					texte = `$\\text{Le quart de }${tex_nombrec(a*4+b*4/100)}$`
					texte_corr = `$\\text{Le quart de }${tex_nombrec(a*4+b*4/100)} \\text{ est } ${tex_nombrec(a+b/100)}$`
					break;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


/**
* Calculer le double ou le triple d'un nombre, calculer la moitié d'un nombre pair ou le tiers d'un multiple de 3
* @Auteur Rémi Angot
*/
function Double_moitie_tiers_triple(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Double, moitié, tiers, triple";
	this.consigne = "Calculer";
	this.nb_questions = 10;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	this.sup = 1; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(4)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, a, b, cpt=0; i < this.nb_questions && cpt<50; ) {
			
			switch (liste_type_de_questions[i]){
				case 1: // Double
					a = randint(2,9)
					texte = `$\\text{Le double de }${a}$`
					texte_corr = `$\\text{Le double de }${a} \\text{ est } ${a*2}$`
					break;
				case 2: // Moitié
					a = randint(2,9)*2
					texte = `$\\text{La moitié de }${a*2}$`
					texte_corr = `$\\text{La moitié de }${a*2} \\text{ est } ${a}$`
					break;
				case 3: // Triple
					a = randint(2,9)
					texte = `$\\text{Le triple de }${a}$`
					texte_corr = `$\\text{Le triple de }${a} \\text{ est } ${a*3}$`
					break;
				case 4: // Tiers
					a = randint(2,9)
					texte = `$\\text{Le tiers de }${a*3}$`
					texte_corr = `$\\text{Le tiers de }${a*3} \\text{ est } ${a}$`
					break;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}



/**
* Les 2 facteurs peuvent terminer par aucun, 1, 2 ou 3 zéros
* @Auteur Rémi Angot
*/
function Exercice_tables_de_multiplications_et_multiples_de_10(tables_par_defaut='2;3;4;5;6;7;8;9'){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables_par_defaut ;
	this.titre = "Tables de multiplications et multiples de 10";
	this.consigne = 'Calculer';
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune table n'est saisie
			this.sup = '2;3;4;5;6;7;8;9'
		}
		let tables = []
		if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule table
			tables[0] = this.sup
		} else {
			tables = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
		}
		let couples = creer_couples(tables,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		for (let i = 0, a, b, k1, k2, texte, texte_corr,melange; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			if (a>1) {
				k1 = choice([1,10,100,1000]);	
			} else{
				k1 = choice([10,100,1000]);
			}
			k2 = choice([1,10,100,1000]);
			a = k1*a;
			b = k2*b;
			melange = randint(0,1);
			if (melange==1) { // échange a et b pour que les multiplications ne soient pas toujours dans le même ordre (surtout lorsque tables n'a qu'un seul élément)
				let c = a;
				a = b;
				b = c;
			}
			
			texte = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = ' + tex_nombre(a * b) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des points-virgules'] // Texte, tooltip
}

/**
* Multiplier deux nombres décimaux
* @Auteur Rémi Angot
*/
function Exercice_tables_de_multiplications_et_decimaux(tables_par_defaut='2;3;4;5;6;7;8;9'){
//Multiplier deux nombres 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = tables_par_defaut ;
	this.titre = "Tables de multiplications et nombres décimaux";
	this.consigne = 'Calculer';
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (!this.sup) { // Si aucune table n'est saisie
			this.sup = '2;3;4;5;6;7;8;9'
		}
		let tables = []
		if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule table
			tables[0] = this.sup
		} else {
			tables = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
		}
		let couples = creer_couples(tables,[2,3,4,5,6,7,8,9,10],this.nb_questions); //Liste tous les couples possibles (2,3)≠(3,2)
		for (let i = 0, a, b, k1, k2, couple, texte, texte_corr; i < this.nb_questions; i++) {
			a = couples[i][0];
			b = couples[i][1];
			couple = choice([[1,10],[1,100],[1,1000],[10,100],[10,1000],[100,100],[100,1000]]);
			k1 = couple[0];
			k2 = couple[1];
			a = Algebrite.eval(a/k1);
			b = Algebrite.eval(b/k2);
			if (a==1) {
				a=0.01
			}
			if (b==1) {
				b=0.1
			}
			texte = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' \\times ' + tex_nombre(b) + ' = ' + tex_nombre(Algebrite.eval(a*b)) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_texte = ['Choix des tables','Nombres séparés par des points-virgules'] // Texte, tooltip
}

/**
* Additionner deux entiers
* @Auteur Rémi Angot
*/
function Exercice_tables_d_additions(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Addition de deux entiers"
	this.consigne = 'Calculer'
	this.sup = max ; // Le paramètre accessible à l'utilisateur sera la valeur maximale
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = randint(2,this.sup);
			b = randint(2,this.sup);
			texte = '$ '+ tex_nombre(a) + ' + ' + tex_nombre(b) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(a) + ' + ' + tex_nombre(b) + ' = ' + tex_nombre(a + b) +' $';
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}





/**
* Simplifier une fraction, le facteur commun est inférieur à une valeur donnée en paramètre qui est 11 par défaut 
* @Auteur Rémi Angot
*/
function Exercice_fractions_simplifier(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Simplification de fractions"
	this.consigne = 'Simplifier les fractions suivantes.'
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux
		for (let i = 0, fraction, a, b, texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			fraction = choice(liste_fractions); //
			a = fraction[0];
			b = fraction[1];
			k = randint(2,this.sup)
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même réponse
			texte = '$ '+ tex_fraction(k*a,k*b) + ' = '+ tex_fraction('\\phantom{00000000000000}','') +' = '+tex_fraction('\\phantom{0000}','')+' $';
			texte_corr = '$ '+ tex_fraction(k*a,k*b) + ' = '+ tex_fraction(k+' \\times '+a,k+' \\times '+b) +' = '+tex_fraction(a,b)+' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du facteur commun',99999];		
}

/**
* Écrire une fraction avec un nouveau dénominateur qui est un multiple de son dénominateur (ce multiple est inférieur à une valeur maximale de 11 par défaut)
* @Auteur Rémi Angot
*/
function Egalites_entre_fractions(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 11 ; // Correspond au facteur commun
	this.titre = "Égalités entre fractions simples"
	this.consigne = 'Compléter les égalités.'
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux
		let liste_type_de_questions = combinaison_listes([1,1,1,1,2],this.nb_questions)
		for (let i = 0, fraction, a, b, c, d, k, texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			if (liste_type_de_questions[i]==1) { // égalité entre 2 fractions
				fraction = choice(liste_fractions); //
				a = fraction[0];
				b = fraction[1];
				k = randint(2,this.sup);
				c = k*a;
				d = k*b;
				enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même fraction de départ
				texte = `$${tex_fraction(a,b)} = ${tex_fraction("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${tex_fraction("\\phantom{0000}",d)}$`;
				texte_corr = `$${tex_fraction(a,b)} = ${tex_fraction(a+mise_en_evidence("\\times"+k),b+mise_en_evidence("\\times"+k))} = ${tex_fraction(c,d)}$`;
			
			} else { //écrire un entier sous la forme d'une fraction
				a = randint(1,9);
				d = randint(2,9);
				c = a*d;
				texte = `$${a} = ${tex_fraction("\\phantom{00000000000000}","\\phantom{00000000000000}")} = ${tex_fraction("\\phantom{0000}",d)}$`;
				texte_corr = `$${a} = \\dfrac{${a}}{1} =${tex_fraction(a+mise_en_evidence("\\times"+d),"1"+mise_en_evidence("\\times"+d))} = ${tex_fraction(c,d)}$`;
			}

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du facteur commun',99];		
}


/**
* Un nombre est-il divisible par : 
*
* * 2, 5, 10 ?
* * 3, 9 ?
* * 2, 3, 5, 9, 10 ? 
* * 2, 3, 5, 9, 10  et un autre nombre qui peut être 7, 13, 17, ou 19 ?
* @Auteur Rémi Angot
*/
function Criteres_de_divisibilite(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 4 ; // Correspond au facteur commun
	this.titre = "Critères de divisibilité"
	this.consigne = 'Répondre aux questions suivantes en justifiant.'
	this.spacing = 2;
	this.spacing_corr = 1;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_des_exercices_disponibles 
		if (this.sup==1) {liste_des_exercices_disponibles = [2,5,10]}
		if (this.sup==2) {liste_des_exercices_disponibles = [3,9]}
		if (this.sup==3) {liste_des_exercices_disponibles = [2,3,5,9,10]}
		if (this.sup>3) {liste_des_exercices_disponibles = [2,3,5,9,10,'autre']}
		let liste_type_de_questions = combinaison_listes(liste_des_exercices_disponibles,this.nb_questions)
		for (let i = 0, fraction, n, u, texte, texte_corr, somme_string, cpt=0; i < this.nb_questions && cpt<50;) {
			switch (liste_type_de_questions[i]){
				case  2:
					u = randint(1,2)
					n = randint(10,999)*10+u
					texte = `$${tex_nombre(n)}$ est-il divisible par $2$ ?`
					if (u%2==0) {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $2$.`
					} else {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ n'est pas divisible par $2$.`
					}
				break

				case 3 : 
					n = choice([randint(100,999),randint(10000,99999)]).toString() // transformé en string pour avoir accès aux chiffres
					somme_string = somme_des_chiffre(n);
					texte = `$${tex_nombre(n)}$ est-il divisible par $3$ ?`
					if (calcul(somme_string)%3==0) {
						texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${calcul(somme_string)/3}$<br>`
						texte_corr += `La somme des chiffres de $${tex_nombre(n)}$ est divisible par $3$ donc $${tex_nombre(n)}$ est divisible par $3$.`
					} else {
						texte_corr = `$${somme_string}=${calcul(somme_string)}=3\\times${(calcul(somme_string)-calcul(somme_string)%3)/3}+${calcul(somme_string)%3}$<br>`
						texte_corr += `La somme des chiffres de $${tex_nombre(n)}$ n'est pas divisible par $3$ donc $${tex_nombre(n)}$ n'est pas divisible par $3$.`
					}
				break

				case 9 : 
					n = choice([randint(100,999),randint(10000,99999)]).toString() // transformé en string pour avoir accès aux chiffres
					somme_string = somme_des_chiffre(n);
					texte = `$${tex_nombre(n)}$ est-il divisible par $9$ ?`
					if (calcul(somme_string)%9==0) {
						texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${calcul(somme_string)/9}$<br>`
						texte_corr += `La somme des chiffres de $${tex_nombre(n)}$ est divisible par $9$ donc $${tex_nombre(n)}$ est divisible par $9$.`
					} else {
						texte_corr = `$${somme_string}=${calcul(somme_string)}=9\\times${(calcul(somme_string)-calcul(somme_string)%9)/9}+${calcul(somme_string)%9}$<br>`
						texte_corr += `La somme des chiffres de $${tex_nombre(n)}$ n'est pas divisible par $9$ donc $${tex_nombre(n)}$ n'est pas divisible par $9$.`
					}
				break

				case  5:
					u = choice([randint(1,9,[0,5]),randint(1,9,[0,5]),5,0]) // 1 fois sur 2 ça sera divisible par 5
					n = randint(10,9999)*10+u
					texte = `$${tex_nombre(n)}$ est-il divisible par $5$ ?`
					if (u%5==0) {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $5$.`
					} else {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ n'est pas divisible par $5$.`
					}
				break

				case  10:
					u = choice([randint(1,9),0]) // 1 fois sur 2 ça sera divisible par 10
					n = randint(10,9999)*10+u
					texte = `$${tex_nombre(n)}$ est-il divisible par $10$ ?`
					if (u==0) {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ est divisible par $10$.`
					} else {
						texte_corr = `Le chiffre des unités de $${tex_nombre(n)}$ est $${u}$ donc $${tex_nombre(n)}$ n'est pas divisible par $10$.`
					}
				break

				case 'autre':
					n=randint(100,999);
					u=choice([7,7,7,7,13,17,19]);
					if (u==7) {
						n = choice([randint(10,99)*10+7],7*randint(11,99),randint(100,999)) //un nombre qui se termine par 7, un divisible par 7, un au hasard
					} else {
						n = choice([randint(10,99)*100+u],u*randint(11,99),randint(100,999)) //un nombre qui se termine par u, un divisible par u, un au hasard
					}	
					texte = `$${tex_nombre(n)}$ est-il divisible par $${u}$ ?`
					texte_corr = `On ne connait pas de critère de divisibilité par $${u}$, on calcule donc la division euclidienne de $${tex_nombre(n)}$ par $${u}$.<br>`
					if (n%u==0) {
						texte_corr += `$${tex_nombre(n)}=${u}\\times${tex_nombre(n/u)}$<br>`
						texte_corr += `Le reste de la division euclidienne est nul donc $${tex_nombre(n)}$ est divisible par $${u}$.`
					} else {
						texte_corr += `$${tex_nombre(n)}=${u}\\times${(n-n%u)/u}+${n%u}$<br>`
						texte_corr += `Le reste de la division euclidienne n'est pas nul donc $${tex_nombre(n)}$ n'est pas divisible par $${u}$.`
					}

				break
			}		
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
	liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique=['Choix des questions',4,"1 : Critères de divisibilité par 2, 5, 10\n\
2 : Critères de divisibilité par 3,9\n3 : Critères de divisibilité par 2, 3, 5, 9, 10\n4 : Avec ou sans critère de divisibilité"]
}



/**
* Un nombre est-il divisible par 2, 3, 5, 9 ? 
*
*
* @Auteur Rémi Angot
*/
function Tableau_criteres_de_divisibilite(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 4 ; // Correspond au facteur commun
	this.titre = "Critères de divisibilité"
	this.consigne = 'Compléter le tableau en mettant oui ou non dans chaque case.'
	this.spacing = 1;
	this.spacing_corr = 1;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
			
		let liste_des_nombres_possibles = ['div2','div3','div39','div5','div25','div23','div239','div35','div2359','divrien'];
		// divisible par 2, divisible par 3, divisible par 3 et 9...

		let liste_des_types_de_nombres = combinaison_listes(liste_des_nombres_possibles,this.nb_questions);
		let tableau_de_nombres = [];
		let tableau_de_nombres_avec_correction = [];
		let liste_de_facteurs = [7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293];
		for (let i = 0; i < this.nb_questions; i++) {
		 	switch (liste_des_types_de_nombres[i]){
		 		case 'div2' :
		 			tableau_de_nombres[i] = 2*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`
		 		break
		 		case 'div3' :
		 			tableau_de_nombres[i] = 3*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`
		 		break
		 		case 'div39' :
		 			tableau_de_nombres[i] = 9*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`
		 		break
		 		case 'div5' :
		 			tableau_de_nombres[i] = 5*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\text{non} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`
		 		break
		 		case 'div25' :
		 			tableau_de_nombres[i] = 10*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} & \\text{non} \\\\`
		 		break
		 		case 'div23' :
		 			tableau_de_nombres[i] = 6*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} \\\\`
		 		break
		 		case 'div239' :
		 			tableau_de_nombres[i] = 18*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} & \\color{blue} \\text{oui} \\\\`
		 		break
		 		case 'div35' :
		 			tableau_de_nombres[i] = 15*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\text{non} & \\color{blue} \\text{oui} & \\color{blue} \\text{oui} & \\text{non} \\\\`
		 		break
		 		case 'div2359' :
		 			tableau_de_nombres[i] = 90*choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\color{blue} \\text{oui} & \\text{non} & \\text{non} & \\text{non} \\\\`
		 		break
		 		case 'divrien' :
		 			tableau_de_nombres[i] = choice(liste_de_facteurs);
		 			tableau_de_nombres_avec_correction[i] = `${tex_nombre(tableau_de_nombres[i])} & \\text{non} & \\text{non} & \\text{non} & \\text{non} \\\\`
		 		break
		 	}
		 } 
		
		if (sortie_html) {
			texte = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`
		} else {
			texte = `$\\begin{array}{|l|c|c|c|c|}\n`
		}
		
		texte += `\\hline\n`
		texte += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`
		texte += `\\hline\n`
		for (var i = 0; i < this.nb_questions; i++) {
			texte += `${tex_nombre(tableau_de_nombres[i])} & & & & \\\\\n`
			texte += `\\hline\n`
		}
		

		texte += `\\end{array}\n$`

		if (sortie_html) {
			texte_corr = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|c|}\n`
		} else {
			texte_corr = `$\\begin{array}{|l|c|c|c|c|}\n`
		}
		texte_corr += `\\hline\n`
		texte_corr += `\\text{... est divisible} & \\text{par }2 & \\text{par }3 & \\text{par }5 & \\text{par }9\\\\\n`
		texte_corr += `\\hline\n`
		for (var i = 0; i < this.nb_questions; i++) {
			texte_corr += tableau_de_nombres_avec_correction[i]
			texte_corr += `\\hline\n`
		}

		texte_corr += `\\end{array}$\n`

		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);
	}
}



/**
 * Exercice sur la notion de proportionnalité (ou pas)
 * @Auteur Jean-Claude Lhote
 */
function Proportionnalite_pas_proportionnalite() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Reconnaître une situation de proportionnalité";
	this.consigne = "Répondre aux questions posées en justifiant";
	this.spacing = 1.5;
	this.spacing_corr = 1.5;
	this.nb_questions=5;
	this.nb_cols_corr=1;
	this.nb_cols=1;
	this.nb_cols_modifiable=false;
	this.nb_cols_corr_modifiable=false;
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_index_disponibles=[0,1,2,3,4];
		let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions)
		let liste_choix_disponibles=[1,2,3,4,5,6];
		let liste_choix=combinaison_listes(liste_choix_disponibles,this.nb_questions)
		let liste_de_lieux=['dans un magasin de bricolage','dans une animalerie','au supermarché local','à l\'épicerie','dans la boutique du musée']
		let liste_de_choses=[[]]
		let liste_de_prix_unit=[[]]
		let tirages=[[]]
		let index3=[]
		let villes=['Moscou','Berlin','Paris','Bruxelles','Rome','Belgrade'];
		let verbes=['double','triple','quadruple','est multiplié par 5','est multiplié par 6'];
		liste_de_choses[0]=['articles','outils','accessoires','pièces d\'outillage','pinceaux','ampoules','tournevis','spatules','raccords de tuyaux']
		liste_de_choses[1]=['poissons rouges','canetons','perruches','phasmes','colliers anti-puces','souris','lapereaux','paquets de graines']
		liste_de_choses[2]=['sets de tables','verres','assiettes','os à macher','dosettes de café','packs de lait','paquets de pâtes']
		liste_de_choses[3]=['mangues','ananas','fruits de la passion','melons','paquets de madeleines de Commercy','bergamottes','bredeles','pots de cancoillotte']
		liste_de_choses[4]=['cartes','livres','gravures','puzzles','maquettes','roches','jeux de société']
		liste_de_prix_unit[0]=[5,4,1.25,3,0.5,1.5,2,6,4.5]
		liste_de_prix_unit[1]=[1.5,7,20,2.5,25,2,15,8]
		liste_de_prix_unit[2]=[1.25,1.5,2,0.5,5,4.5,3]
		liste_de_prix_unit[3]=[2,2.5,1.25,1.5,4,7,12,3]
		liste_de_prix_unit[4]=[0.5,5,7,13.5,10,15,20]

		for (let i = 0, x,y,z,pu, n,p,somme,prenoms,index1,index2,objet,met,choix, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			switch(liste_choix[i]) {
				case 1 : 
					index1 = liste_index[i];
					prenoms = [prenomF(), prenomM()];
					index2 = randint(0, liste_de_choses[index1].length - 1);
					objet = liste_de_choses[index1][index2];
					pu = liste_de_prix_unit[index1][index2] * (1 + randint(1, 2) * 0.2 * randint(-1, 1));
					y =  randint(2, 5);
					somme = calcul(y * pu, 2);
					p = y * randint(2, 5);
					z = calcul(p * pu, 2);
					texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
					texte += `Elle  repart avec ${y} ${objet} pour $${tex_prix(somme)}$€. ${prenoms[1]} achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(z)}$€.<br>`
					texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
					texte_corr=`${prenoms[0]} dépense $${mise_en_evidence(tex_prix(somme),'blue')}$€.<br>`
					texte_corr = `${prenoms[1]} a acheté  ${mise_en_evidence(tex_nombre(p / y))} fois la quantité des ${objet} achetée par ${prenoms[0]} pour $${mise_en_evidence(tex_prix(somme),'blue')}$€.<br>Il a payé $${tex_prix(z)}$€ $=${mise_en_evidence(tex_nombrec(p / y))}\\times${mise_en_evidence(tex_prix(somme),'blue')}$€.<br>`;
					texte_corr += `A l'aide de ces données, on constate que le prix des ${objet} et leur quantité sont tous les deux multipliés par le même nombre, donc ces deux grandeurs sont proportionnelles.<br>`;
					break;
				case 2: 
					index1 = liste_index[i];
					prenoms = [prenomF(), prenomM()];
					index2 = randint(0, liste_de_choses[index1].length - 1);
					objet = liste_de_choses[index1][index2];
					pu = liste_de_prix_unit[index1][index2] * (1 + randint(1, 2) * 0.2 * randint(-1, 1));
					y = randint(2, 5);
					somme = calcul(y * pu, 2);
					pu -= 0.1;
					p = y * randint(2, 5);
					z = calcul(p * pu, 2);
					texte = `${prenoms[0]} achète ${liste_de_lieux[index1]} des ${objet}. `;
					texte += `Elle a obtenu ${y} ${objet} pour $${tex_prix(somme)}$€. ${prenoms[1]} achète quant à lui, au même endroit ${p} ${objet} pour $${tex_prix(z)}$€.<br>`
					texte += `Le prix des ${objet} est-il proportionnel à la quantité achetée  ?<br>`;
					texte_corr = `${prenoms[0]} dépense $${mise_en_evidence(tex_prix(somme), 'blue')}$€.<br>`
					texte_corr = `${prenoms[1]} a acheté  ${mise_en_evidence(tex_nombrec(p / y))} fois la quantité des ${objet} achetée par ${prenoms[0]} pour $${mise_en_evidence(tex_prix(somme),'blue')}$€.<br>Il a payé $${tex_prix(z)}$€.<br>Mais $${mise_en_evidence(tex_nombrec(p / y))}\\times${mise_en_evidence(tex_prix(somme),'blue')}$€ $=${tex_prix(calcul(p * somme / y))}$€.<br>`;
					texte_corr += `À l'aide de ces données, on constate que le prix unitaire des ${objet} n'est pas le même pour ${prenoms[0]} qui en a acheté $${y}$ que pour ${prenoms[1]} qui en a acheté ${p}, donc ces deux grandeurs ne sont pas proportionnelles.<br>`;
					break;
				case 3:
					prenoms = [prenomF(), prenomM()];
					x=randint(5,20);
					y=randint(5,20,x)*100;
					x=x*100;
					n=arrondi(calcul(x/60*(1+randint(0,2)*0.2)),0);
					p=arrondi(calcul(y/60*(1+randint(0,2)*0.2)),0);
					index1=calcul(x/n); //vitesse fille
					index2=calcul(y/p); //vitesse garçon

					texte =`${prenoms[0]} habite à ${x}m du collège. Elle met ${n} minutes pour s'y rendre depuis chez elle.<br>`;
					texte +=`${prenoms[1]}, lui, habite à ${tex_nombre(y)} m du collège. Il met ${p} minutes pour s'y rendre depuis chez lui.<br>`;
					texte += `Le temps mis pour venir au collège est-il proportionnel à la distance du foyer au collège ?<br>`;
					texte_corr =`${prenoms[0]} parcourt chaque minute environ ${tex_nombrec(arrondi(index1,1))}m.<br>`;
					texte_corr +=`${prenoms[1]} parcourt chaque minute environ ${tex_nombrec(arrondi(index2,1))}m.<br>`;
					if (index1==index2) texte_corr+=`Pour ces deux élèves le temps mis et la distance parcourue sont proportionnelles (si l'on compare leur vitesse moyenne)`;
					else texte_corr+=`Pour ces deux élèves le temps mis et la distance parcourue ne sont pas proportionnelles (si l'on compare leur vitesse moyenne)`;
					break;
				case 4:
					prenoms = [prenomF(), prenomM()];
					x=randint(5,20);
					y=x+randint(25,35);
					texte =`${prenoms[0]} vient d'avoir ${x} ans cette année. Son père ${prenoms[1]} vient de fêter  son ${y}ème anniversaire.<br>`;
					texte+=`L'âge de son père est-il proportionnel à l'âge de ${prenoms[0]} ?<br>`;
					texte_corr=`Aujourd'hui la différence d'âge entre ${prenoms[0]} et ${prenoms[1]} est de ${y-x} ans.<br>`;
					texte_corr+=`Dans ${x} années, ${prenoms[0]} aura ${2*x} ans, c'est à dire le double d'aujourd'hui.<br>`;
					texte_corr+=`Son père ${prenoms[1]} aura ${x+y} ans cette année-là.<br>Quand l'âge de ${prenoms[0]} double, l'âge de ${prenoms[1]} ne double pas, donc l'âge de ${prenoms[0]} et l'âge de son père ne sont pas propotionnels`;
					break;
				case 5:
					index1=randint(0,5)
					index2=randint(0,4)
					texte =`Une épidémie se répand dans la ville de ${villes[index1]}.<br>`;
					texte +=`Le nombre de malades ${verbes[index2]} tous les ${index2+2} jours.<br>`;
					texte +=`Le nombre de malades est-il proportionnel au nombre de jours passés depuis le début de l'épidémie ?<br>`;
					texte_corr =`Admettons qu'il y ait 10 malades le premier jour. Le ${1+2+index2}ème jour il y aura 10 $\\times$ ${index2+2} = ${10*(index2+2)} malades.<br>`;
					// texte_corr += `Le ${1+2*(index2+2)}ème jour il y aura ${10*(index2+2)} $\\times$ ${index2+2} = ${10*(index2+2)**2} malades.<br>`;
					// texte_corr += `Entre le ${3+index2}ème jour et le ${2*index2+5}ème jour, le nombre de malades est multiplié par ${index2+2} mais le nombre de jours est multiplié par $\\dfrac{${2*index2+5}}{${3+index2}}\\approx${tex_nombrec(arrondi(calcul((2*index2+5)/(index2+3))),2)}$<br>`;
					texte_corr += `Entre le premier jour et le ${3+index2}ème jour, le nombre de malades est multiplié par ${index2+2} mais le nombre de jours est multiplié par ${3+index2}.<br>`;
					texte_corr += `Donc le nombre de malades n'est pas proportionnel au nombre de jours passés.`
					break;
				case 6:
					prenoms = [prenomF(), prenomM()];
					index1=randint(0,5)
					objet=liste_de_choses[4][index1]
					index2=randint(0,4)
					pu = liste_de_prix_unit[4][index1] * (1 + randint(1, 2) * 0.2 * randint(-1, 1));
					n=randint(2,6);
					p=randint(0,3);
					tirages[0]=[n,n*pu];
					tirages[1]=[n+1,(n+1)*pu];
					tirages[2]=[2*n+1,(2*n+1)*pu];		
					tirages[3]=[3*n+3,(3*n+3)*pu];
					met=choice([true,false]);
					if (!met) tirages[p][1]-=0.1;
					texte = `${prenoms[1]} relève les prix des ${objet} sur un catalogue par correspondance en fonction de la quantité saisie dans le panier<br>`;
					texte += `Il note les prix dans le tableau suivant :<br>`;
					texte += `$\\def\\arraystretch{1.5}\\begin{array}{||c`;  // construction du tableau des effectifs en un seul morceau
					for (let j = 0; j <= tirages.length; j++)		texte += `|c`;
					texte += `||}\\hline\\hline  \\text{${objet}}`;
					for (let j = 0; j < tirages.length; j++) 		texte += `&${tirages[j][0]}`;
					texte += `\\\\\\hline \\text{Prix (en €})`;
					for (let j = 0; j < tirages.length; j++) 		texte += `&${tex_prix(arrondi(tirages[j][1],2))}`;
					texte += `\\\\\\hline\\hline\\end{array}$<br>`;
					texte += `Le prix des ${objet} est-il proportionnel à la quatité achetée ?<br>`;
					texte_corr =`Il faut calculer le prix unitaire des ${objet} dans chaque cas de figure :<br><br>`;
					if (met) index3=range(3)
					else index3=range(3,[p]);
					texte_corr+=`$`
					for (let j = 0; j < index3.length; j++) {
						texte_corr+=`\\dfrac{${tex_prix(arrondi(tirages[index3[j]][1],2))}}{${tirages[index3[j]][0]}}=`
					}
					texte_corr+=`${tex_prix(pu)}$<br><br>`;
					if (!met) {
						texte_corr+= `Mais $\\dfrac{${tex_prix(arrondi(tirages[p][1],2))}}{${tirages[p][0]}}=${tex_prix(arrondi(calcul(tirages[p][1]/tirages[p][0]),2))}$€/${objet.substring(0,objet.length-1)}<br>`;
						texte_corr+=`Le prix des ${objet} n'est pas proportionnel au nombre acheté.<br>`;
					}
					else {
						texte_corr+= `Le prix des ${objet} est bien proportionnel au nombre acheté.<br>`;
					}	
					break;
			}	
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
			
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
};

/**
 * On donne une relation de proportionnalité du type n objets coûtent x€ et on demande le prix de y objets
 * et le nombre d'objets qu'on peut acheter avec z€.
 * @Auteur Jean-Claude Lhote
 */
function Proportionnalite_par_linearite() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Résoudre des problèmes de proportionnalité en utilisant la linéarité simple";
	this.consigne = "Répondre aux questions posées en justifiant";
	sortie_html ? this.spacing = 2 : this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.nb_questions=5;
	this.nb_cols=1;
	this.nb_cols_corr=1;
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_index_disponibles=[0,1,2,3,4];
		let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions)
		let liste_de_lieux=['dans un magasin de bricolage','dans une animalerie','au supermarché local','à l\'épicerie','dans la boutique du musée']
		let liste_de_choses=[[]]
		let liste_de_prix_unit=[[]]
		liste_de_choses[0]=['articles','outils','accessoires','pièces d\'outillage','pinceaux','ampoules','tournevis','spatules','raccords de tuyaux']
		liste_de_choses[1]=['poissons rouges','cannetons','perruches','phasmes','colliers anti-puces','souris','lapereaux','paquets de graines']
		liste_de_choses[2]=['sets de tables','verres','assiettes','os à macher','dosettes de café','packs de lait','paquets de pâtes']
		liste_de_choses[3]=['mangues','ananas','fruits de la passion','melons','paquets de madeleines de Commercy','bergamottes','bredeles','pots de cancoillotte']
		liste_de_choses[4]=['cartes','livres','gravures','puzzles','maquettes','roches','jeux de société']
		liste_de_prix_unit[0]=[5,4,1.25,3,0.5,1.5,2,6,4.5]
		liste_de_prix_unit[1]=[1.5,7,20,2.5,25,2,15,8]
		liste_de_prix_unit[2]=[1.25,1.5,2,0.5,5,4.5,3]
		liste_de_prix_unit[3]=[2,2.5,1.25,1.5,4,7,12,3]
		liste_de_prix_unit[4]=[0.5,5,7,13.5,10,15,20]
		for (let i = 0, x,y,z,pu, n,p,somme,prenoms,index1,index2,objet,met, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			index1=liste_index[i];
			prenoms=[prenomF(),prenomM()];
			index2=randint(0,liste_de_choses[index1].length-1);
			objet=liste_de_choses[index1][index2];
			pu=liste_de_prix_unit[index1][index2]*(1+randint(1,2)*0.2*randint(-1,1));
			n=randint(3,6);
			y=n*randint(2,5);
			x=calcul(n*pu,2);
			somme=calcul(y*pu,2);
			met = false;
			while (met==false) {
				p=n*randint(2,5);
				if (p!=y) met=true
			}
			z=calcul(p*pu,2);

			texte = `${prenoms[0]} a repéré ${liste_de_lieux[index1]} des ${objet} qui l\'intéressent.<br> `;
			texte +=`Elle lit que ${n} ${objet} coûtent ${tex_prix(x)} €. `
			texte +=`Elle veut en acheter ${y}.<br> Combien va-t-elle dépenser ?<br>`;
			texte_corr = `${y} ${objet}, c'est ${texte_en_couleur(tex_nombrec(y/n))} fois ${texte_en_couleur(n,'blue')} ${objet}.<br> Si ${texte_en_couleur(n,'blue')} ${objet} coûtent ${tex_prix(x)} €, alors ${texte_en_couleur(tex_nombrec(y/n))} fois ${texte_en_couleur(n,'blue')} ${objet} coutent ${texte_en_couleur(tex_nombrec(y/n))} fois ${tex_prix(x)} €.<br>`;
			texte_corr +=`Donc ${prenoms[0]} dépensera ${texte_en_couleur(tex_nombrec(y/n))} $\\times$ ${tex_prix(x)} € = ${tex_prix(somme)} €.<br>`;
			texte += `${prenoms[1]} veut lui aussi acheter ces ${objet}. Il dispose de ${tex_prix(z)} €.<br> Combien peut-il en acheter ?<br>`;
			texte_corr += `${tex_prix(z)} €, c'est ${texte_en_couleur(tex_nombrec(z/x))} fois ${tex_prix(x)} €.<br> Si avec ${tex_prix(x)} € on peut acheter ${texte_en_couleur(n,'blue')} ${objet}, alors avec ${texte_en_couleur(tex_nombrec(z/x))} fois ${tex_prix(x)} €, on peut acheter ${texte_en_couleur(tex_nombrec(z/x))} fois ${texte_en_couleur(n,'blue')} ${objet}.<br>`;
			texte_corr +=`Donc ${prenoms[1]} pourra acheter ${texte_en_couleur(tex_nombrec(z/x))} $\\times$ ${texte_en_couleur(n,'blue')} = ${p} ${objet}.<br>`;
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
};



/**
* Décomposer une fraction (partie entière + fraction inférieure à 1) puis donner l'écriture décimale.
* @Auteur Rémi Angot
*/
function Exercice_fractions_differentes_ecritures(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Décomposer une fraction (partie entière + fraction inférieure à 1) puis donner l'écriture décimale.";
	this.consigne = "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1 puis donner l'écriture décimale";
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8'],
		[1,8,',125'],[3,8,',375'],[1,10,',1'],[3,10,',3'],[7,10,',7'],[9,10,',9']]; // Fractions irréductibles avec une écriture décimale exacte
		liste_fractions1 = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,8,',125']];
		liste_fractions1.push(choice([[1,10,',1'],[2,10,',2'],[3,10,',3'],[7,10,',7'],[9,10,',9']]));
		liste_fractions1.push(choice([[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8']])); // liste_fractions pour les 6 premières questions
		for (let i = 0, cpt=0, fraction, a, b, c, n, texte, texte_corr; i < this.nb_questions && cpt <50; ) {
			if (i<6) {
				fraction = choice(liste_fractions1);
				enleve_element(liste_fractions1,fraction);
			}else{
				fraction = choice(liste_fractions);	
			}
			 //
			c = fraction[0];
			b = fraction[1];
			n = randint(1,4);
			a = n*b + c;
			ed = n + fraction[2];
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même partie décimale
			texte = '$ '+ tex_fraction(a,b) + ' = \\phantom{0000} + '+ tex_fraction('\\phantom{00000000}','') +' =  $';
			texte_corr = '$ '+ tex_fraction(a,b) + ' = '+ n + '+' + tex_fraction(c,b) +' = '+ ed +' $';

			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;



			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}

/**
* @Auteur Rémi Angot
*/
function Exercice_fractions_decomposer(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Décomposer une fraction (partie entière + fraction inférieure à 1).";
	this.consigne = "Écrire sous la forme de la somme d'un nombre entier et d'une fraction inférieure à 1.";
	this.spacing = 2 ;
	this.spacing_corr = 2 ;
	this.sup = false ; // Donner l'écriture décimale

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8'],
		[1,8,',125'],[3,8,',375'],[1,10,',1'],[3,10,',3'],[7,10,',7'],[9,10,',9']]; // Fractions irréductibles avec une écriture décimale exacte
		liste_fractions1 = [[1,2,',5'],[1,4,',25'],[3,4,',75'],[1,8,',125']];
		liste_fractions1.push(choice([[1,10,',1'],[2,10,',2'],[3,10,',3'],[7,10,',7'],[9,10,',9']]));
		liste_fractions1.push(choice([[1,5,',2'],[2,5,',4'],[3,5,',6'],[4,5,',8']])); // liste_fractions pour les 6 premières questions
		for (let i = 0, fraction, a, b, c, n, texte, texte_corr; i < this.nb_questions;i++) {
			if (i<6) {
				fraction = choice(liste_fractions1);
				enleve_element(liste_fractions1,fraction);
			}else{
				fraction = choice(liste_fractions);	
			}
			 //
			c = fraction[0];
			b = fraction[1];
			n = randint(1,4);
			a = n*b + c;
			ed = n + fraction[2];
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même partie décimale
			texte = '$ '+ tex_fraction(a,b) + ' = \\phantom{0000} + '+ tex_fraction('\\phantom{00000000}','') +' $';
			texte_corr = '$ '+ tex_fraction(a,b) + ' = '+ n + '+' + tex_fraction(c,b) +' $';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}

/**
* Conversions de longueur en utilisant le préfixe pour déterminer la multiplication ou division à faire.
* 
* * 1 : De dam, hm, km vers m
* * 2 : De dm, cm, mm vers m
* * 3 : Conversions en mètres
* * 4 : Toutes les conversions de longueurs
* * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
* @Auteur Rémi Angot
*/
function Exercice_conversions_de_longueurs(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions de longueurs"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [[' da',10],[' h',100],[' k',1000]]
		let prefixe_div = [[' d',10],[' c',100,],[' m',1000]];
		let unite = 'm';
		let liste_unite = ['mm','cm','dm','m','dam','hm','km'];
		let liste_de_k = combinaison_listes([0,1,2],this.nb_questions)
		for (let i = 0, a, k, div, resultat, type_de_questions, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 5) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,4);
			}
			// k = randint(0,2); // Choix du préfixe
			k = liste_de_k[i] //Plutôt que de prendre un préfix au hasard, on alterne entre 10,100 et 1000
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} 

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' = \\dotfill ' + tex_texte('~'+unite) + '$';

				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte('~'+unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite) + '$';

			}else if(div&&type_de_questions<4) {
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte('~'+unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(prefixe_div[k][1]) + tex_texte('~'+unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite) + '$';
			}else{ // pour type de question = 4
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 10 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + ' = \\dotfill ' + tex_texte(liste_unite[unite1]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,ecart)) + tex_texte(liste_unite[unite1])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite1]) + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + ' = \\dotfill ' + tex_texte(liste_unite[unite2]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,ecart)) + tex_texte(liste_unite[unite2])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite2]) + '$';
				}


				
			} 
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('= \\dotfill','\\text{ en }')
				}
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : De dam, hm, km vers m\n\
2 : De dm, cm, mm vers m\n3 : Conversions en mètres\n4 : Toutes les conversions de longueurs"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}


/**
* Conversions  mètres, litres, grammes, octets (et euros pour la version LaTeX) en utilisant le préfixe pour déterminer la multiplication ou division à faire.
* 
* * 1 : De da, h, k vers l'unité de référence
* * 2 : De d, c, m vers l'unité de référence
* * 3 : Multiplications ou divisions vers l'unité de référence
* * 4 : Conversions d'octets
* * 5 : Un mélange de toutes les conversions
* * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
* @Auteur Rémi Angot
*/
function Exercice_conversions(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions de longueurs, masses, contenance, prix ou unités informatiques"
	this.consigne = 'Compléter'
	this.spacing = 2;
	this.correction_avec_des_fractions = false ;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [['da',10],['h',100],['k',1000]]//['M',1000000],['G',1000000000],['T',1000000000000]];
		let prefixe_div = [['d',10],['c',100,],['m',1000]]; //['$\\mu{}$',1000000]];
		for (let i = 0, a, k, div, resultat, unite, type_de_questions, texte, texte_corr, liste_unite_info, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 5) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,4);
			}
			k = randint(0,2); // Choix du préfixe
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else if (type_de_questions==3) {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} else if (type_de_questions==4) {
				liste_unite_info = ['o','ko','Mo','Go','To'];
			}

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				if (k<2) {		// Choix de l'unité
						unite = choice(['m','L','g'])
					}else if (k==2){
						if (sortie_html) {
							unite = choice(['m','L','g']) // pas de signe € pour KaTeX
						} else{
							unite = choice(['m','L','g','€'])	
						}
						
					}else {
						unite = 'o'
					}
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' = \\dotfill ' + tex_texte('~'+unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte('~'+unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite) + '$';

			}else if(div&&type_de_questions<4&&this.correction_avec_des_fractions) {
				unite = choice(['m','L','g'])
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte('~'+unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_fraction(tex_nombre(a),tex_nombre(prefixe_div[k][1])) + tex_texte('~'+unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite) + '$';

			}else if(div&&type_de_questions<4) {
				unite = choice(['m','L','g'])
				resultat = Algebrite.eval(a/prefixe_div[k][1]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' = \\dotfill ' + tex_texte('~'+unite) + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(prefixe_div[k][1]) + tex_texte('~'+unite)
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite) + '$';
			}else{ // pour type de question = 4
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 1000 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite2]) + ' = \\dotfill ' + tex_texte(liste_unite_info[unite1]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite2]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,3*ecart)) + tex_texte(liste_unite_info[unite1])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite_info[unite1]) + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite1]) + ' = \\dotfill ' + tex_texte(liste_unite_info[unite2]) + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite_info[unite1]) + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,3*ecart)) + tex_texte(liste_unite_info[unite2])
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite_info[unite2]) + '$';
				}


				
			} 
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('= \\dotfill','\\text{ en }')
				}
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',5,"1 : De da, h, k vers l'unité de référence\n\
2 : De d, c, m vers l'unité de référence\n3 : Multiplications ou divisions vers l'unité de référence\n4 : Conversions avec les octets\n5: Toutes les conversions"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}

/**
* Conversions d'aires en utilisant le préfixe pour déterminer la multiplication ou division à faire.
*
* Dans la correction, on montre que l'on multiplie ou divisie à 2 reprises par le coefficient donné par le préfixe
* 
* * 1 : De dam², hm², km² vers m²
* * 2 : De dm², cm², mm² vers m²
* * 3 : Conversions en mètres-carrés
* * 4 : Conversions avec des multiplications ou des divisions
* * 5 : Conversions avec des ares, des centiares et des hectares
* * 6 : Un mélange de toutes les conversions
* * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
* @Auteur Rémi Angot
*/
function Exercice_conversions_aires(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions d'aires"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [[' da','\\times10\\times10',100],[' h','\\times100\\times100',10000],[' k','\\times1~000\\times1~000',1000000]];
		let prefixe_div = [[' d','\\div10\\div10',100],[' c','\\div100\\div100',10000],[' m','\\div1~000\\div1~000',1000000]]; 
		let unite = 'm';
		let liste_unite = ['mm','cm','dm','m','dam','hm','km'];
		let liste_de_k = combinaison_listes([0,1,2],this.nb_questions)
		for (let i = 0, a, k, div, resultat, type_de_questions, texte, texte_corr, liste_unite_info, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 6) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,5);
			}
			// k = randint(0,2); // Choix du préfixe
			k = liste_de_k[i];
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else if (type_de_questions==3) {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} else if (type_de_questions==4) { 
				div = choice([true,false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
			}

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				
				prefixe_multi = [[' da','\\times10\\times10',100],[' h','\\times100\\times100',10000],[' k','\\times1~000\\times1~000',1000000]];// On réinitialise cette liste qui a pu être modifiée dans le cas des ares
				resultat = Algebrite.eval(a*prefixe_multi[k][2]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + '^2' + ' = \\dotfill ' + tex_texte('~'+unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite)+ '^2' + ' =  ' + tex_nombre(a) + prefixe_multi[k][1] + tex_texte('~'+unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)+ '^2' + '$';

			}else if(div&&type_de_questions<4) {
				k = randint(0,1); // Pas de conversions de mm^2 en m^2 avec des nombres décimaux car résultat inférieur à 10e-8
				resultat = Algebrite.eval(a/prefixe_multi[k][2]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^2' + ' = \\dotfill ' + tex_texte('~'+unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^2' + ' =  ' + tex_nombre(a) + prefixe_div[k][1] + tex_texte('~'+unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)  + '^2' + '$';
			}else if(type_de_questions==4){ 
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 10 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				if (randint(0,1)>0) {
					resultat = Algebrite.eval(a*Math.pow(10,2*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte('~'+liste_unite[unite2]) + '^2' + ' = \\dotfill ' + tex_texte('~'+liste_unite[unite1]) + '^2' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte('~'+liste_unite[unite2]) + '^2' + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(Math.pow(10,2*ecart)) + tex_texte('~'+liste_unite[unite1]) + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+liste_unite[unite1]) + '^2' + '$';	

				} else {
					resultat = Algebrite.eval(a/Math.pow(10,2*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte('~'+liste_unite[unite1]) + '^2' + ' = \\dotfill ' + tex_texte('~'+liste_unite[unite2]) + '^2' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte('~'+liste_unite[unite1]) + '^2' + ' =  ' + tex_nombre(a) + '\\div' + tex_nombre(Math.pow(10,2*ecart)) + tex_texte('~'+liste_unite[unite2]) + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+liste_unite[unite2]) + '^2' + '$';
				}
				
			} else if(type_de_questions==5) { // Pour type_de_questions==5
				prefixe_multi = [['ha',10000],['a',100]];
				k = randint(0,1)
				resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte('~'+prefixe_multi[k][0]) + ' = \\dotfill ' + tex_texte('~'+unite)  + '^2' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte('~'+prefixe_multi[k][0]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte('~'+unite)  + '^2'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)+ '^2' + '$';
			}
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('= \\dotfill','\\text{ en }')
				}
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',6,"1 : Conversions en m² avec des multiplications\n\
2 : Conversions en m² avec des divisions\n3 : Conversions en m² avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions\n\
5 : Conversions d'hectares et ares en m² \n6 : Toutes les conversions"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}


/**
* Conversions de volumes.
*
* Dans la correction, on ne voit qu'une multiplication ou qu'un division pour obtenir le résultat
* 
* * 1 : Conversions en mètres-cubes avec des multiplications
* * 2 : Conversions en mètres-cubes avec des divisions
* * 3 : Conversions en mètres-cubes avec des multiplications ou divisions
* * 4 : Conversions avec des multiplications ou divisions
* * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
* @Auteur Rémi Angot
*/
function Exercice_conversions_volumes(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions de volume"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let prefixe_multi = [[' da','10\\times10\\times10',1000],[' h','100\\times100\\times100',1000000],[' k','1~000\\times1~000\\times1~000',1000000000]];
		let prefixe_div = [[' d','10\\div10\\div10',1000],[' c','100\\div100\\div100',1000000,],[' m','1~000\\div1~000\\div1~000',1000000000]]; 
		let unite = 'm';
		let liste_unite = [' mm',' cm',' dm',' m',' dam',' hm',' km'];
		for (let i = 0, a, k, div, resultat, type_de_questions, texte, texte_corr, liste_unite_info, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			if (this.sup < 5) {
				type_de_questions = this.sup;
			} else {
				type_de_questions = randint(1,4);
			}
			k = randint(0,2); // Choix du préfixe
			if (type_de_questions==1) { // niveau 1	
				div = false; // Il n'y aura pas de division
			} else if (type_de_questions==2) { // niveau 2
				div = true; // Avec des divisions
			} else if (type_de_questions==3) {
				div = choice([true,false]) // Avec des multiplications ou des divisions
			} else if (type_de_questions==4) { 
				div = choice([true,false]); // Avec des multiplications ou des divisions sans toujours revenir au m^2
			}

			if (this.sup2) { // Si la case pour les nombres décimaux est cochée
				a = choice([arrondi(randint(1,19)+randint(1,9)/10,1),arrondi(randint(1,9)/10,1),arrondi(randint(1,9)/100,2),arrondi(randint(1,9)+randint(1,9)/10+randint(1,9)/100,2)]);
				// XX,X 0,X 0,0X X,XX
			} else {
				a = choice([randint(1,9),randint(1,9)*10,randint(1,9)*100,randint(1,9)*10+randint(1,9)]);
				// X, X0, X00, XX
			}

			if (!div&&type_de_questions<4) { // Si il faut multiplier pour convertir
				
				
				resultat = Algebrite.eval(a*prefixe_multi[k][2]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite) + '^3' + ' = \\dotfill ' + tex_texte('~'+unite)  + '^3' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]+unite)+ '^3' + ' =  ' + tex_nombre(a) + '\\times' + prefixe_multi[k][1] + tex_texte('~'+unite)  + '^3'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)+ '^3' + '$';

			}else if(div&&type_de_questions<4) {
				k = randint(0,1); // Pas de conversions de mm^3 en m^3 avec des nombres décimaux car résultat inférieur à 10e-8
				resultat = Algebrite.eval(a/prefixe_multi[k][2]).toString(); // Attention aux notations scientifiques pour 10e-8
				texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^3' + ' = \\dotfill ' + tex_texte('~'+unite)  + '^3' + '$';
				texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_div[k][0]+unite)+ '^3' + ' =  ' + tex_nombre(a) + '\\div' + prefixe_div[k][1] + tex_texte('~'+unite)  + '^3'
					 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)  + '^3' + '$';
			}else if(type_de_questions==4){ 
				let unite1 = randint(0,3);
				let ecart = randint(1,2); // nombre de multiplication par 10 pour passer de l'un à l'autre
				if (ecart>4-unite1) {
					ecart = 4-unite1;
				}
				let unite2 = unite1+ecart
				let multiplications_par_1000 = ''
				
				if (randint(0,1)>0) {
					switch (ecart) {
						case 1 :
						multiplications_par_1000 = '\\times 1~000';
						break
						case 2 :
						multiplications_par_1000 = '\\times 1~000 \\times 1~000';
						break
						case 3 :
						multiplications_par_1000 = '\\times 1~000 \\times 1~000 \\times 1~000';
						break
					}
					resultat = Algebrite.eval(a*Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + '^3' + ' = \\dotfill ' + tex_texte(liste_unite[unite1]) + '^3' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite2]) + '^3' + ' =  ' + tex_nombre(a) + multiplications_par_1000 + tex_texte(liste_unite[unite1]) + '^3'
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite1]) + '^3' + '$';	

				} else {
					switch (ecart) {
						case 1 :
						multiplications_par_1000 = '\\div 1~000';
						break
						case 2 :
						multiplications_par_1000 = '\\div 1~000 \\div 1~000';
						break
						case 3 :
						multiplications_par_1000 = '\\div 1~000 \\div 1~000 \\div 1~000';
						break
					}
					resultat = Algebrite.eval(a/Math.pow(10,3*ecart));
					texte = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + '^3' + ' = \\dotfill ' + tex_texte(liste_unite[unite2]) + '^3' + '$';
					texte_corr = '$ '+ tex_nombre(a) + tex_texte(liste_unite[unite1]) + '^3' + ' =  ' + tex_nombre(a) + multiplications_par_1000 + tex_texte(liste_unite[unite2]) + '^3'
					 + ' = ' + tex_nombre(resultat) + tex_texte(liste_unite[unite2]) + '^3' + '$';
				}
				
			} 
			// else if(type_de_questions==5) { // Pour type_de_questions==5
			// 	prefixe_multi = [['L',0.001],['dL',0.0001],['cL',0.00001],['mL',0.000001]];
			// 	k = randint(0,1)
			// 	resultat = Algebrite.eval(a*prefixe_multi[k][1]).toString(); // Utilise Algebrite pour avoir le résultat exact même avec des décimaux
			// 	texte = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' = \\dotfill ' + tex_texte('~'+unite)  + '^3' + '$';
			// 	texte_corr = '$ '+ tex_nombre(a) + tex_texte(prefixe_multi[k][0]) + ' =  ' + tex_nombre(a) + '\\times' + tex_nombre(prefixe_multi[k][1]) + tex_texte('~'+unite)  + '^3'
			// 		 + ' = ' + tex_nombre(resultat) + tex_texte('~'+unite)+ '^2' + '$';
			// }
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('= \\dotfill','\\text{ en }')
				}
				if (sortie_html){
					texte = texte.replace('\\dotfill','................................................')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
 	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Conversions en mètres-cubes avec des multiplications\n\
2 : Conversions en mètres-cubes avec des divisions\n3 : Conversions en mètres-cubes avec des multiplications ou divisions\n4 : Conversions avec des multiplications ou divisions"];		
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}



/**
* Conversions d'unités de volumes vers les unités de capacité ou inversement.
*
* Dans la correction, on passe systématiquement par l'équivalence dm3 = L 
* 
* * 1 : De dam3, m3, dm3, cm3 ou mm3 vers L ou inversement
* * 2 : 
* * 3 : 
* * 4 : 
* * 5 : 
* * 6 : Un mélange de toutes les conversions
* * Paramètre supplémentaire : utiliser des nombres décimaux (par défaut tous les nombres sont entiers)
* @Auteur Rémi Angot
*/
function Unites_de_volumes_et_de_capacite(niveau=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = niveau ; // Niveau de difficulté de l'exercice 
	this.sup2 = false; // Avec des nombres décimaux ou pas
	this.titre = "Conversions avec des unités de volumes ou de capacités"
	this.consigne = 'Compléter'
	this.spacing = 2;
	this.nb_questions = 8;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup==1) {
			liste_type_de_questions = combinaison_listes(['dam3toL','m3toL','dm3toL','cm3toL'],this.nb_questions)
		}
		if (this.sup==2){
			liste_type_de_questions = combinaison_listes(['Ltodm3','Ltocm3','Ltom3'],this.nb_questions)
		}
		if (this.sup==3){
			liste_type_de_questions = combinaison_listes(['dam3toL','m3toL','dm3toL','cm3toL','mm3toL','Ltodm3','Ltocm3','Ltom3'],this.nb_questions)
		}
		let liste_de_n = [];
		if (this.sup2) {
			liste_de_n = combinaison_listes([1,2,3,4],this.nb_questions)
		} else {
			liste_de_n = combinaison_listes([1,2,3,4,5,6],this.nb_questions)
		}
		for (let i = 0, n, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			if (this.sup2){
				switch (liste_de_n[i]){
					case 1 :
						n = calcul(randint(2,9)/10);
					break
					case 2 :
						n = calcul(randint(11,99)/100);
					break
					case 3 :
						n = calcul(randint(1,9)*10+randint(1,9)/10);
					break
					case 4 :
						n = calcul(randint(11,99,[10,20,30,40,50,60,70,80,90])/100);
					break
				}
			} else {
				switch (liste_de_n[i]){
					case 1 :
						n = randint(2,9);
					break
					case 2 :
						n = randint(11,99);
					break
					case 3 :
						n = randint(1,9)*10;
					break
					case 4 :
						n = randint(1,9)*100;
					break
					case 5 :
						n = randint(11,99)*100;
					break
					case 6 : 
						n = randint(1,9)*1000;
					break
				}
			}
			switch (liste_type_de_questions[i]){
				case 'dam3toL':
					texte = `$${tex_nombre(n)}~\\text{dam}^3=\\dotfill~\\text{L}$`
					texte_corr = `$${tex_nombre(n)}~\\text{dam}^3=${tex_nombre(n)}\\times1~000\\times1~000~\\text{dm}^3=${tex_nombrec(n*1000000)}~\\text{L}$`
				break
				case 'm3toL':
					texte = `$${tex_nombre(n)}~\\text{m}^3=\\dotfill~\\text{L}$`
					texte_corr = `$${tex_nombre(n)}~\\text{m}^3=${tex_nombre(n)}\\times1~000~\\text{dm}^3=${tex_nombrec(n*1000)}~\\text{L}$`
				break
				case 'dm3toL':
					texte = `$${tex_nombre(n)}~\\text{dm}^3=\\dotfill~\\text{L}$`
					texte_corr = `$${tex_nombre(n)}~\\text{dm}^3=${tex_nombre(n)}~\\text{L}$`
				break
				case 'cm3toL':
					texte = `$${tex_nombre(n)}~\\text{cm}^3=\\dotfill~\\text{L}$`
					texte_corr = `$${tex_nombre(n)}~\\text{cm}^3=${tex_nombre(n)}\\div 1~000~\\text{dm}^3=${tex_nombrec(n/1000)}~\\text{L}$`
				break
				case 'mm3toL':
					texte = `$${tex_nombre(n)}~\\text{mm}^3=\\dotfill~\\text{L}$`
					texte_corr = `$${tex_nombre(n)}~\\text{mm}^3=${tex_nombre(n)}\\div1~000\\div 1~000~\\text{dm}^3=${tex_nombrec(n/1000000)}~\\text{L}$`
				break
				case 'Ltodm3':
					texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{dm}^3$`
					texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(n)}~\\text{dm}^3$`
				break
				case 'Ltocm3':
					texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{cm}^3$`
					texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(n)}~\\text{dm}^3=${tex_nombre(n)}\\times1~000~\\text{cm}^3=${tex_nombrec(n*1000)}~\\text{cm}^3$`
				break
				case 'Ltom3':
					texte = `$${tex_nombre(n)}~\\text{L}=\\dotfill~\\text{m}^3$`
					texte_corr = `$${tex_nombre(n)}~\\text{L}=${tex_nombre(n)}~\\text{dm}^3=${tex_nombre(n)}\\div1~000~\\text{m}^3=${tex_nombrec(n/1000)}~\\text{m}^3$`
				break

			}
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Unités de volume vers litre\n2 : Litre vers unités de volume\n3 : Unités de volumes vers litre ou inversement '];
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux'];
}






/**
* Déterminer le périmètre et l'aire d'un carré, d'un rectangle, d'un triangle rectangle, d'un cercle
* 
* * 1 : Carré, rectangle et triangle rectangle
* * 2: Uniquement des cercles
* * 3 : Les 4 sont demandés
* @Auteur Rémi Angot
*/
function Exercice_perimetres_et_aires(difficulte=1){
//Calculer le périmètre et l'aire de figures 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Calculs de périmètres et d'aires";
	this.consigne = 'Pour chacune des figures, calculer son périmètre puis son aire (valeur exacte et si nécessaire valeur approchée au dixième près).';
	this.spacing = 1;
	this.nb_questions = 4;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let triplets_pythagoriciens = [[3,4,5],[6,8,10],[15,8,17],[24,10,26],[5,12,13],[12,16,20],[21,20,29],[9,40,41]];
		let type_de_questions_disponibles = ['carre','rectangle','triangle_rectangle','cercle']
		if (this.sup==1) {
			enleve_element(type_de_questions_disponibles,'cercle')
			this.nb_cols = 1;
		} else if (this.sup==2){
			type_de_questions_disponibles = ['cercle']
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 'carre' :
					let cote = randint(2,11);
					let nom_carre = polygone(4);
					if (choice([true,false])){ // 2 énoncés possibles équiprobables
						texte = `Un carré $${nom_carre}$ de $${cote}$ cm de côté .`;
					} else {
						texte = `Un carré $${nom_carre}$ tel que $${nom_carre[0]+nom_carre[1]} = ${cote}$ cm.`;
					}
					 
					texte_corr = `$\\mathcal{P}_{${nom_carre}}=4\\times${cote}~\\text{cm}=${4*cote}~\\text{cm}$<br>\n`;
					texte_corr += `$\\mathcal{A}_{${nom_carre}}=${cote}~\\text{cm}\\times${cote}~\\text{cm}=${cote*cote}~\\text{cm}^2$`;
					break ;
				case 'rectangle' : 
					let L = randint(3,11);
					let l = randint(2,L-1);
					let nom_rectangle = polygone(4);
					if (choice([true,false])){ // 2 énoncés possibles équiprobables
							texte = `Un rectangle $${nom_rectangle}$ de $${L}$ cm de longueur et de $${l}$ cm de largeur.`;
						} else{
							texte = `Un rectangle $${nom_rectangle}$ tel que $${nom_rectangle[0]+nom_rectangle[1]+' = '+L}$ cm et $${nom_rectangle[1]+nom_rectangle[2]+' = '+l}$ cm.`;
						}
					 
					texte_corr = `$\\mathcal{P}_{${nom_rectangle}}=(${L}~\\text{cm}+${l}~\\text{cm})\\times2=${(L+l)*2}~\\text{cm}$<br>\n`;
					texte_corr += `$\\mathcal{A}_{${nom_rectangle}}=${L}~\\text{cm}\\times${l}~\\text{cm}=${L*l}~\\text{cm}^2$`;
					break ;
				case 'triangle_rectangle' :
					let triplet = choice(triplets_pythagoriciens);
					enleve_element(triplets_pythagoriciens,triplet)
					let a = triplet[0];
					let b = triplet[1];
					let c = triplet[2];
					let nom_triangle = polygone(3);
					if (choice([true,false])){
						texte = `Un triangle $${nom_triangle}$ rectangle en $${nom_triangle[1]}$ tel que $${nom_triangle[0]+nom_triangle[1]+' = '+a}$ cm, $${nom_triangle[1]+nom_triangle[2]+' = '+b}$ cm\
 et $${nom_triangle[0]+nom_triangle[2]+' = '+c}$ cm.`;
					} else {
						texte = `Un triangle rectangle $${nom_triangle}$ a pour côtés : $${a}$ cm, $${c}$ cm et $${b}$ cm.`;	
					}
					
					texte_corr = `$\\mathcal{P}_{${nom_triangle}}=${a}~\\text{cm}+${b}~\\text{cm}+${c}~\\text{cm}=${a+b+c}~\\text{cm}$<br>\n`;
					texte_corr += `$\\mathcal{A}_{${nom_triangle}}=${a}~\\text{cm}\\times${b}~\\text{cm}\\div2=${Algebrite.eval(a*b/2)}~\\text{cm}^2$`;
					break ;
				case 'cercle' : 
					let R = randint(3,11)
					let donne_le_diametre = choice([true,false])
					if (donne_le_diametre) {
						texte = `Un cercle de $${2*R}$ cm de diamètre.`;
						texte_corr = `Le diamètre est de $${2*R}$ cm donc le rayon est de $${R}$~cm.<br>\n`	
					} else {
						texte = `Un cercle de $${R}$ cm de rayon.`;
						texte_corr = '';	
					}
					 
					texte_corr += `$\\mathcal{P}=2\\times${R}\\times\\pi~\\text{cm}=${2*R}\\pi~\\text{cm}\\approx${arrondi_virgule(2*R*Math.PI,1)}~\\text{cm}$<br>\n`;
					texte_corr += `$\\mathcal{A}=${R}\\times${R}\\times\\pi~\\text{cm}^2=${R*R}\\pi~\\text{cm}^2\\approx${arrondi_virgule(R*R*Math.PI,1)}~\\text{cm}^2$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Carré, rectangle et triangle rectangle\n2: Cercles\n3: Mélangé'] 
}


/**
* On donne une fraction qui a pour dénominateur 10, 100 ou 1 000, il faut donner l'écriture décimale.
*
* Le numérateur est de la forme X, XX, X0X, X00X ou XXX
* @Auteur Rémi Angot
*/
function Exercice_ecriture_decimale_a_partir_de_fraction_decimale(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Donner l'écriture décimale d'une fraction décimale"
	this.consigne = "Donner l'écriture décimale"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 8;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = choice([randint(2,9),randint(11,99),randint(1,9)*100+randint(1,9),randint(1,9)*1000+randint(1,9)],randint(101,999));
			// X, XX, X0X, X00X,XXX
			b = choice([10,100,1000])
			texte = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = ' + tex_nombre(Algebrite.eval(a/b)) +' $';
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace('=\\dotfill','')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
}

/**
* Multiplier ou diviser un nombre entier par 10, 100 ou 1 000
*
* Le nombre entier est de la forme X, XX, X0X, X00X ou XXX
* @Auteur Rémi Angot
*/
function Exercice_multiplier_ou_diviser_un_nombre_entier_par_10_100_1000(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Multiplier ou diviser un nombre entier par 10, 100 ou 1 000"
	this.consigne = "Donner l'écriture décimale"
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			a = choice([randint(2,9),randint(11,99),randint(1,9)*100+randint(1,9),randint(1,9)*1000+randint(1,9)],randint(101,999));
			// X, XX, X0X, X00X,XXX
			b = choice([10,100,1000])
			if (choice([true,false])) {
				texte = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = \\dotfill $';
				texte_corr = '$ '+ tex_fraction(tex_nombre(a),tex_nombre(b)) + ' = ' + tex_nombre(Algebrite.eval(a/b)) +' $';
			} else {
				texte = '$ '+ tex_nombre(a)+ '\\times' +tex_nombre(b) + ' = \\dotfill $';
				texte_corr = '$ '+ tex_nombre(a)+ '\\times' +tex_nombre(b) + ' = ' + tex_nombre(Algebrite.eval(a*b)) +' $';
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
}


/**
* Comparer deux nombres décimaux
*
* Les types de comparaisons sont : 
* * ab ? ba
* * aa,bb ? aa,cc
* * a,b  a,cc avec b>c
* * 0,ab 0,ba
* * 0,a0b 0,b0a
* * a,b a,b0	
* * 0,0ab 0,0a0b
* * a,bb  a,ccc avec b>c	
* * a+1,bb  a,cccc avec cccc>bb
* 
* aa, bb, cc correspondent à des nombres à 2 chiffres (ces 2 chiffres pouvant être distincts)
* @Auteur Rémi Angot
*/
function Comparer_decimaux(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Comparer des nombres décimaux";
	this.consigne = "Compléter avec le signe < , > ou =.";
	this.nb_questions = 8;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [choice([1,4,5]),2,2,3,6,7,8,9] // une seule question du type inversion de chiffres (1,4,5)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let x, y, a, b, c, d, zero_inutile = false
			
			switch (liste_type_de_questions[i]){
				case 1: // ab ba	
					a = randint(1,9)
					b = randint (1,9,a)
					x = a*10+b
					y = b*10+a
					break;
				case 2: // aa,bb aa,cc	
					a = randint(1,99)
					b = randint(11,99)
					c = randint(11,99)
					x = calcul(a+b/100)
					y = calcul(a+c/100)
					break;
				case 3: // a,b  a,cc avec b>c	
					a = randint(1,99)
					b = randint(1,8)
					c = randint(1,b*10)
					x = calcul(a+b/10)
					y = calcul(a+c/100)
					break;
				case 4: // 0,ab 0,ba	
					a = randint(1,9)
					b = randint (1,9,a)
					x = calcul((a*10+b)/100)
					y = calcul((b*10+a)/100)
					break;
				case 5: // 0,a0b 0,b0a	
					a = randint(1,9)
					b = randint (1,9,a)
					x = calcul((a*100+b)/1000)
					y = calcul((b*100+a)/1000)
					break;
				case 6: // a,b a,b0	
					a = randint(11,999)
					while (a%10==0){ // pas de nombre divisible par 10
						a = randint(11,999)
					}
					x = calcul(a/10)
					y = x
					zero_inutile = true
					break;
				case 7: // 0,0ab 0,0a0b	
					a = randint(1,9)
					b = randint(1,9)
					x = calcul(a/100+b/1000)
					y = calcul(a/100+b/10000)
					break;
				case 8: // a,bb  a,ccc avec b>c	
					a = randint(11,99)
					b = randint(11,99)
					c = randint(100,b*10)
					x = calcul(a+b/100)
					y = calcul(a+c/1000)
					if (randint(1,2)==1){
						[x,y]=[y,x]
					}
					break;
				case 9: // a+1,bb  a,cccc avec cccc>bb	
					a = randint(11,98)
					b = randint(11,99)
					c = randint(b*100,10000)
					x = calcul(a+1+b/100)
					y = calcul(a+c/10000)
					if (randint(1,2)==1){
						[x,y]=[y,x]
					}
					break;
				
			}
			
			texte = `${tex_nombre(x)}\\ldots\\ldots${tex_nombre(y)}`
			if (parseFloat(x)>parseFloat(y)){
				texte_corr = `${tex_nombre(x)} > ${tex_nombre(y)}`
			} else if (parseFloat(x)<parseFloat(y)){
				texte_corr = `${tex_nombre(x)} < ${tex_nombre(y)}`
			} else {
				texte_corr = `${tex_nombre(x)} = ${tex_nombre(y)}`
			}

			if (zero_inutile) {
				if (randint(1,2)==1){
					texte = `${tex_prix(x)}\\ldots\\ldots${tex_nombre(y)}`
					if (parseFloat(x)>parseFloat(y)){
						texte_corr = `${tex_prix(x)} > ${tex_nombre(y)}`
					} else if (parseFloat(x)<parseFloat(y)){
						texte_corr = `${tex_prix(x)} < ${tex_nombre(y)}`
					} else {
						texte_corr = `${tex_prix(x)} = ${tex_nombre(y)}`
					}
				} else {
					texte = `${tex_nombre(x)}\\ldots\\ldots${tex_prix(y)}`
					if (parseFloat(x)>parseFloat(y)){
						texte_corr = `${tex_nombre(x)} > ${tex_prix(y)}`
					} else if (parseFloat(x)<parseFloat(y)){
						texte_corr = `${tex_nombre(x)} < ${tex_prix(y)}`
					} else {
						texte_corr = `${tex_nombre(x)} = ${tex_prix(y)}`
					}
				}
					
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	
}


/**
* Calculer 10, 20, 30, 40 ou 50% d'un nombre
* @Auteur Rémi Angot + Jean-claude Lhote
*/
function Pourcentage_d_un_nombre(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer le pourcentage d'un nombre de tête"
	this.nb_questions = 5;
	this.consigne = "Calculer"
	this.spacing = 2;
	this.spacing_corr = 3.5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1; 

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_pourcentages = [10,20,30,40,50];

		for (let i = 0, p, n, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			p = choice(liste_pourcentages)
			n = choice([randint(2,9),randint(2,9)*10,randint(1,9)*10+randint(1,2)]); 
			texte = `$${p}~\\%~\\text{de }${n}$`;
			if (p==50) {
			texte_corr = `$${p}~\\%~\\text{de }${n}=${n}\\div${2}=${tex_nombre(Algebrite.eval(n/2))}$`	// calcul de n/2 si p = 50%
			} else {
			texte_corr = `$${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=(${p}\\times${n})\\div100=${tex_nombre(p*n)}\\div100=${tex_nombre(Algebrite.eval(p*n/100))}$<br>`	
	//		texte_corr += `$\\phantom {Blanc}${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=\\dfrac{${p}\\times${n}}{100}=${tex_fraction(p*n,100)}=${tex_nombre(Algebrite.eval(p*n/100))}$<br>`					
			if (this.sup2) texte_corr += `$${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=(${n}\\div100)\\times${p}=${tex_nombrec(calcul(n/100))}\\times${p}=${tex_nombre(Algebrite.eval(p*n/100))}$<br>`				
	//		texte_corr += `$\\phantom {Blanc}${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=${tex_fraction(n,100)}\\times${p}=${tex_nombrec(calcul(n/100))}\\times${p}=${tex_nombre(Algebrite.eval(p*n/100))}$<br>`				
			if (this.sup2) texte_corr += `$${p}~\\%~\\text{de }${n}=${tex_fraction(p,100)}\\times${n}=${tex_nombrec(calcul(p/100))}\\times${n}=${tex_nombre(Algebrite.eval(p*n/100))}$`				
				
		}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
//	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
	this.besoin_formulaire2_case_a_cocher = ['Plusieurs méthodes'];
}

/**
* Calculer la fracton d'un nombre divisible par le dénominateur ... ou pas.
*
* Par défaut la division du nombre par le dénominateur est inférieure à 11
* @Auteur Rémi Angot + Jean-Claude Lhote
*/
function Fraction_d_un_nombre(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer la fraction d'un nombre"
	this.nb_questions = 5;
	this.consigne = "Calculer"
	sortie_html ? this.spacing_corr = 3.5 : this.spacing_corr = 2;
	sortie_html ? this.spacing = 2 : this.spacing = 2;
	this.sup = true;
	this.sup2 = false;
	this.nb_cols = 2;
	this.nb_cols_corr = 1; 

	 this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]] // Couples de nombres premiers entre eux

		 for (let i = 0, a, b, k, n,j, fraction, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			fraction = choice(liste_fractions);
			a = fraction[0];
			b = fraction[1];
			k = randint(1,11);
			j=false;
			if (this.sup) n = b*k;
			else
				if (randint(0,1)==0) n = b*k;
				else n=randint(10,b*11);
			texte = `$${tex_fraction(a,b)}\\times${n}=$`;
			texte_corr=``;
			if (a==1){ // Si n * 1/b
				if (calcul(n/b-arrondi(n/b,4))==0)  	texte_corr += `$${tex_fraction(a,mise_en_evidence(b))}\\times${n}=${n}\\div${mise_en_evidence(b)}=${tex_nombrec(Algebrite.eval(n/b))}$`; // si résultat décimal	
				else    texte_corr += `$${tex_fraction(a,b)}\\times${n}=${tex_fraction(n,b)}${simplification_de_fraction_avec_etapes(n,b)}$`;	//si résultat non décimal
			} else {
				if (calcul(n/b-arrondi(n/b,4))==0) { //si n/b décimal calcul (n/b)*a
					texte_corr +=`$${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${n}\\div${mise_en_evidence(b)})\\times${a}=${tex_nombrec(Algebrite.eval(n/b))}\\times${a}=${tex_nombrec(Algebrite.eval(n/b*a))}$<br>`;
				} else {
					if (calcul(n*a/b-arrondi(n*a/b,4))==0) { // si n/b non décimal, alors on se rabat sur (n*a)/b
						texte_corr += ` $${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(b)}=${Algebrite.eval(n*a)}\\div${mise_en_evidence(b)}=${tex_nombrec(Algebrite.eval(n/b*a))}$<br>`;
					}
					else { // si autre méthode et résultat fractionnaire calcul (n*a)/b
						texte_corr +=` $${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(b)}=${Algebrite.eval(n*a)}\\div${mise_en_evidence(b)}=${tex_fraction(n*a,mise_en_evidence(b))}$<br>`;
					}
					j=true;
				}
				if (calcul(n*a/b-arrondi(n*a/b,4))==0&&this.sup2&&!j) { // Si autres méthodes et si (a*n)/b décimal calcul (n*a)/b
					texte_corr += ` $${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(b)}=${Algebrite.eval(n*a)}\\div${mise_en_evidence(b)}=${tex_nombrec(Algebrite.eval(n/b*a))}$<br>`;
				}
				else { // si autre méthode et résultat fractionnaire calcul (n*a)/b
					if (this.sup2&&!j) texte_corr +=` $${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${n}\\times${a})\\div${mise_en_evidence(b)}=${Algebrite.eval(n*a)}\\div${mise_en_evidence(b)}=${tex_fraction(n*a,mise_en_evidence(b))}$<br>`;
				}
				// si autre méthode et a/b décimal calcul (a/b)*n
				if ((b==2||b==4||b==5||b==8||b==10)&&this.sup2) texte_corr += ` $${tex_fraction(a,mise_en_evidence(b))}\\times${n}=(${a}\\div${mise_en_evidence(b)})\\times${n}=${tex_nombrec(Algebrite.eval(a/b))}\\times${n}=${tex_nombrec(Algebrite.eval(n/b*a))}$`;
			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_case_a_cocher = ['Forcer résultat entier',true];	
	this.besoin_formulaire2_case_a_cocher = ['Plusieurs méthodes',false];
}


/**
* On achète 2 aliments dont on connait la masse (un en grammes et l'autre en kilogrammes) et le prix au kilogramme. Il faut calculer le prix total.
* @Auteur Rémi Angot
*/
function Probleme_course(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Problème - Les courses"
	this.consigne = ""
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
			let prenom = choice(['Benjamin','Léa','Aude','Julie','Corinne','Mehdi','Joaquim']);
			let masse_en_kg_de_aliment1 = Algebrite.eval(randint(2,5)+randint(1,9)/10);
			let prix_aliment1 = Algebrite.eval(randint(2,4)+randint(1,9)/10);
			let aliment1 = choice(['courgettes','carottes','pommes']);
			let masse_en_g_de_aliment2 = randint(21,97)*10;
			let prix_aliment2 = Algebrite.eval(randint(12,23)+randint(1,9)/10);
			let aliment2 = choice(['boeuf','veau','poulet']); 

			texte = `${prenom} achète ${tex_nombre(masse_en_kg_de_aliment1)} kg de ${aliment1} à ${tex_prix(prix_aliment1)} €/kg `
			texte += `et ${masse_en_g_de_aliment2} g de ${aliment2} à ${tex_prix(prix_aliment2)} €/kg. Quel est le prix total à payer ?`
			texte_corr = `Prix des ${aliment1} : ${tex_nombre(masse_en_kg_de_aliment1)} kg × ${tex_prix(prix_aliment1)} €/kg = ${tex_prix(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))} €`+'<br>'
			texte_corr += `Prix du ${aliment2} : ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2/1000))} kg × ${tex_prix(prix_aliment2)} €/kg = ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))} € `+'<br>'
			texte_corr += `Prix total à payer : ${tex_nombre(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))} € + ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))} € ≈ ${arrondi_virgule(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1+masse_en_g_de_aliment2*prix_aliment2/1000))} €<br>`
			texte_corr += `<br><i>Le prix total aurait aussi pu être trouvé en un seul calcul</i> : ${tex_nombre(masse_en_kg_de_aliment1)} kg × ${tex_prix(prix_aliment1)} €/kg + ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2/1000))} kg × ${tex_prix(prix_aliment2)} €/kg ≈ ${arrondi_virgule(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1+masse_en_g_de_aliment2*prix_aliment2/1000))} €.`

			
			if (!sortie_html) {
				texte_corr = `Prix des ${aliment1} : $${tex_nombre(masse_en_kg_de_aliment1)}~\\text{kg}\\times${tex_prix(prix_aliment1)}~\\text{\\euro{}/kg} = ${tex_prix(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))}~\\text{\\euro}$`+'<br>'
				texte_corr += `Prix du ${aliment2} : $${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2/1000))}~\\text{kg}\\times${tex_prix(prix_aliment2)}~\\text{\\euro{}/kg} = ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro}$`+'<br>'
				texte_corr += `Prix total à payer : $${tex_nombre(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1))}~\\text{\\euro} + ${tex_nombre(Algebrite.eval(masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro} \\approx ${arrondi_virgule(Algebrite.eval(masse_en_kg_de_aliment1*prix_aliment1+masse_en_g_de_aliment2*prix_aliment2/1000))}~\\text{\\euro}$<br>`
				
			}

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			
			liste_de_question_to_contenu_sans_numero(this);
	}	
}

/**
* Calculer l'aire de 3 triangles dont une hauteur est tracée.
*
* Une figure dynamique est disponible sur laquelle on peut déplacer le pied de la hauteur.
*
* Il n'existe pas de version LaTeX de cet exercice.
* @Auteur Rémi Angot
*/
function Aire_de_triangles(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Aires de triangles"
	this.consigne = "Calculer l'aire des 3 triangles suivants (vous pouvez déplacer certains points)."
	this.spacing = 2;
	sortie_html ? this.spacing_corr = 3 : this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [500,450];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let tableau_des_cotes = shuffle ([3,4,5,6,7]); //pour s'assurer que les 3 côtés sont différents
		let c1 = tableau_des_cotes[0];
		let c2 = tableau_des_cotes[1];
		let c3 = tableau_des_cotes[2];
		let tableau_des_hauteurs = shuffle ([3,4,5,6]); //pour s'assurer que les 3 hauteurs sont différents
		let h1 = tableau_des_hauteurs[0];
		let h2 = tableau_des_hauteurs[1];
		let h3 = tableau_des_hauteurs[2];
		
		let codeBase64 =""
		if (randint(1,2)==1) {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAuP####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAKgAAAAAAAD#wAAAAAAAAAwABQDwAAAAAAABAYSAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwBgAAAAAAABAFAAAAAAAAAMAAUAXmRub7wU+AAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAwCYAAAAAAABAFAAAAAAAAAMAAT#nUJEwLKgdAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwC#8AAAAAAAAMA7AAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRADAJgAAAAAAAMA7AAAAAAAAAwABQHpQAAAAAABATYAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFADDWm90SREAAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMAkAAAAAAAAQBAAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwBAAAAAAAABAIAAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAoAAAAAAAAQBAAAAAAAAADAAFAS4AAAAAAAEBywAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwCIAAAAAAABACAAAAAAAAAMAAUAXx81SzkwjAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAAAAAAAAAAAAQAgAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwAgAAAAAAADAPAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAGAAAAAFoAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAhAAAAJgAAAAcBAAAAWgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGAQAAAAAAABAAAAAgAAAAgAAABeAAAAAyBjbQIAAABfAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAOwAAAEMAAAABAAAAAGIAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAGIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGMAAAADAQAAAGIAAAAAABAAAAEAAQAAADsAAABDAAAABAAAAABiAARhbmcnAAAAZAAAADsAAABDAAAABQEAAABiAAAAOwAAAEMAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA+AAAAQwAAAAEAAAAAaAAAAAABEAAAAQABAAAAPgE#8AAAAAAAAAAAAAIAAAAAaAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAaQAAAAMBAAAAaAAAAAAAEAAAAQEBAAAAPgAAAEMAAAAEAAAAAGgABGFuZycAAABqAAAAPgAAAEMAAAAFAQAAAGgAAAA+AAAAQwAAAAYAAAAAaAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAD4AAABDAAAABwEAAABoAAAAAABAMAAAAAAAAEAQAAAAAAAAAAAAbhAAAAAAAAEAAAACAAAACAAAAGwAAAADIGNtAgAAAG0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAEQAAAAEAAAAAcAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAcAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAcQAAAAMBAAAAcAAAAAAAEAAAAQABAAAADgAAABEAAAAEAAAAAHAABGFuZycAAAByAAAADgAAABEAAAAFAQAAAHAAAAAOAAAAEQAAAAYAAAAAcAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAARAAAABwEAAABwAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAdhAAAAAAAAEAAAACAAAACAAAAHQAAAADIGNtAgAAAHUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAHAAAAAEAAAAAeAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAeAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAeQAAAAMBAAAAeAAAAAAAEAAAAQABAAAAHwAAABwAAAAEAAAAAHgABGFuZycAAAB6AAAAHwAAABwAAAAFAQAAAHgAAAAfAAAAHAAAAAYAAAAAeAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAcAAAABwEAAAB4AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAfhAAAAAAAAEAAAACAAAACAAAAHwAAAADIGNtAgAAAH0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAOwAAAAEAAAAAgAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAgAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAgQAAAAMBAAAAgAAAAAAAEAAAAQABAAAAOAAAADsAAAAEAAAAAIAABGFuZycAAACCAAAAOAAAADsAAAAFAQAAAIAAAAA4AAAAOwAAAAYAAAAAgAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAAA7AAAABwEAAACAAAAAAADAJAAAAAAAAEAyAAAAAAAAAAAAhhAAAAAAAAEAAAACAAAACAAAAIQAAAADIGNtAgAAAIUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAOAAAAGAAAAAEAAAAAiAAAAAABEAAAAQABAAAADgE#8AAAAAAAAAAAAAIAAAAAiAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAiQAAAAMBAAAAiAAAAAAAEAAAAQABAAAADgAAABgAAAAEAAAAAIgABGFuZycAAACKAAAADgAAABgAAAAFAQAAAIgAAAAOAAAAGAAAAAYAAAAAiAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAYAAAABwEAAACIAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAjhAAAAAAAAEAAAACAAAACAAAAIwAAAADIGNtAQAAAI0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAARAAAAGAAAAAEAAAAAkAAAAAABEAAAAQABAAAAEQE#8AAAAAAAAAAAAAIAAAAAkAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAkQAAAAMBAAAAkAAAAAAAEAAAAQABAAAAEQAAABgAAAAEAAAAAJAABGFuZycAAACSAAAAEQAAABgAAAAFAQAAAJAAAAARAAAAGAAAAAYAAAAAkAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAABEAAAAYAAAABwEAAACQAAAAAABAMQAAAAAAAD#wAAAAAAAAAAAAlhAAAAAAAAEAAAACAAAACAAAAJQAAAADIGNtAQAAAJUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAfAAAAJgAAAAEAAAAAmAAAAAABEAAAAQABAAAAHwE#8AAAAAAAAAAAAAIAAAAAmAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAmQAAAAMBAAAAmAAAAAAAEAAAAQABAAAAHwAAACYAAAAEAAAAAJgABGFuZycAAACaAAAAHwAAACYAAAAFAQAAAJgAAAAfAAAAJgAAAAYAAAAAmAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAB8AAAAmAAAABwEAAACYAAAAAADAMAAAAAAAAEAqAAAAAAAAAAAAnhAAAAAAAAEAAAACAAAACAAAAJwAAAADIGNtAQAAAJ0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAAmAAAAHAAAAAEAAAAAoAAAAAABEAAAAQABAAAAJgE#8AAAAAAAAAAAAAIAAAAAoAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAoQAAAAMBAAAAoAAAAAAAEAAAAQABAAAAJgAAABwAAAAEAAAAAKAABGFuZycAAACiAAAAJgAAABwAAAAFAQAAAKAAAAAmAAAAHAAAAAYAAAAAoAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAcAAAABwEAAACgAAAAAABAMQAAAAAAAEAUAAAAAAAAAAAAphAAAAAAAAEAAAACAAAACAAAAKQAAAADIGNtAQAAAKUAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA4AAAAQwAAAAEAAAAAqAAAAAABEAAAAQABAAAAOAE#8AAAAAAAAAAAAAIAAAAAqAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAqQAAAAMBAAAAqAAAAAAAEAAAAQABAAAAOAAAAEMAAAAEAAAAAKgABGFuZycAAACqAAAAOAAAAEMAAAAFAQAAAKgAAAA4AAAAQwAAAAYAAAAAqAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADgAAABDAAAABwEAAACoAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAArhAAAAAAAAEAAAACAAAACAAAAKwAAAADIGNtAQAAAK0AAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAAA7AAAAQwAAAAEAAAAAsAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAsAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAsQAAAAMBAAAAsAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAALAABGFuZycAAACyAAAAOwAAAEMAAAAFAQAAALAAAAA7AAAAQwAAAAYAAAAAsAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAADsAAABDAAAABwEAAACwAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAthAAAAAAAAEAAAACAAAACAAAALQAAAADIGNtAQAAALUAAAAH##########8=";
		} else {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAABAAAABgAQTG9uZ3VldXJPcmllbnRlZQArIzE6IExlIHByZW1pZXIgcG9pbnQKIzI6IExlIGRldXhpw6htZSBwb2ludAAAAAIAAAADAAAAAAn#####AAAAAQARQ0VsZW1lbnRHZW5lcmlxdWUAAUEAAAAA#####wAAAAAAAUIAAAAA##########8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AAAAAAEQAAABAAEAAAAAAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAAC#####wAAAAEACENTZWdtZW50Af####8AAAAAABAAAAEAAQAAAAAAAAAB#####wAAAAIAE0NNZXN1cmVBbmdsZU9yaWVudGUA#####wAEYW5nJwAAAAMAAAAAAAAAAf####8AAAABAAlDTG9uZ3VldXIB#####wAAAAAAAAAB#####wAAAAEAB0NNaWxpZXUA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAAAAAAB#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQH#####AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAABxAAAAAAAAEAAAAC#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAUAAAAAAgAAAAYAAAABAAAAw#####8AAAABAApDQ2FsY0NvbnN0AP####8AAnBpABYzLjE0MTU5MjY1MzU4OTc5MzIzODQ2#####wAAAAEACkNDb25zdGFudGVACSH7VEQtGP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmYAAAABAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAAAAAACAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUA8ZmZmZmZmAAAAAgAAAAMA#####wEAAAAAEAAAAQABAAAAAQAAAAMAAAAGAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAoAAAAAAAAAAAABMQAAAAUA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmgxAAE0AAAACkAQAAAAAAAAAAAADQD#####AAJjMgABNQAAAApAFAAAAAAAAAAAAA0A#####wACaDIAATQAAAAKQBAAAAAAAAAAAAANAP####8AAmMzAAE1AAAACkAUAAAAAAAAAAAADQD#####AAJoMwABNAAAAApAEAAAAAAAAAAAAAsA#####wAAAAAAEAABQQDAMgAAAAAAAMAwAAAAAAAAAwABQFDAAAAAAABAQoAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAIAAAADv####8AAAACAAlDQ2VyY2xlT1IAAAAADwEAAAAAAQAAAA4AAAAIAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA8AAAAAABAAAUIAwDMAAAAAAADACAAAAAAAAAMAAUAS60sQO3OGAAAAEAAAAAMBAAAADwAAAAAAEAAAAQABAAAADgAAABEAAAACAP####8AAAAAABAAAUgAP#AAAAAAAAA#8AAAAAAAAAMAAT#ouymi+6YKAAAAEv####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAABMAAAASAAAADwD#####AQAAAAABAAAAEwAAAAgAAAAJAP####8AAAABABBDSW50RHJvaXRlQ2VyY2xlAP####8AAAAUAAAAFf####8AAAABABBDUG9pbnRMaWVCaXBvaW50AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAFgAAABMA#####wAAAAAAEAABQwBAIAAAAAAAAMAoAAAAAAAAAwACAAAAFgAAAAMA#####wAAAAAAEAAAAQABAAAADgAAABgAAAADAP####8AAAAAABAAAAEAAQAAABgAAAARAAAAAwD#####AAAAAAAQAAABAQEAAAATAAAAGAAAAAsA#####wAAAAAAEAABRABAEAAAAAAAAAAAAAAAAAAAAwABQH0QAAAAAABAZGAAAAAAAAAAAA4A#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAAAQAAAAIAAAACAAAACgAAABwAAAAPAAAAAB0BAAAAAAEAAAAcAAAACAAAAAoAAAAAEAEAAAAdAAAAAAAQAAFFAMAyAAAAAAAAwDAAAAAAAAADAAFAA5gUsW2nVQAAAB4AAAADAQAAAB0AAAAAABAAAAEAAQAAABwAAAAfAAAAAgD#####AAAAAAAQAAFHAMA3AAAAAAAAwCIAAAAAAAADAAE#5pq7A1eUfwAAACAAAAARAP####8BAAAAABAAAAEAAQAAACEAAAAgAAAADwD#####AQAAAAABAAAAIQAAAAgAAAALAAAAABIA#####wAAACIAAAAjAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACQAAAATAP####8AAAAAABAAAUYAwDIAAAAAAAC#8AAAAAAAAAMAAgAAACQAAAADAP####8AAAAAABAAAAEAAQAAABwAAAAmAAAAAwD#####AAAAAAAQAAABAAEAAAAmAAAAHwAAAAMA#####wAAAAAAEAAAAQEBAAAAIQAAACYAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAABMAAAAY#####wAAAAEAC0NNZWRpYXRyaWNlAAAAACoBAAAAAA0AAAEAAQAAABMAAAAYAAAABgAAAAAqAQAAAAANAAABBQAAAAATAAAAGAAAAA8AAAAAKgEAAAAAAQAAACwAAAAKQDAAAAAAAAABAAAAEgAAAAAqAAAAKwAAAC0AAAATAAAAACoBAAAAAA0AAAEFAAEAAAAuAAAABQEAAAAqAAAAEwAAABgAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAACEAAAAmAAAAFAAAAAAxAQAAAAANAAABAAEAAAAhAAAAJgAAAAYAAAAAMQEAAAAADQAAAQUAAAAAIQAAACYAAAAPAAAAADEBAAAAAAEAAAAzAAAACkAwAAAAAAAAAQAAABIAAAAAMQAAADIAAAA0AAAAEwAAAAAxAQAAAAANAAABBQABAAAANQAAAAUBAAAAMQAAACEAAAAmAAAACwD#####AAAAAAAQAAFNAMAgAAAAAAAAwD0AAAAAAAADAAFAdBAAAAAAAEBwcAAAAAAAAAAADgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAOAAAAA8AAAAAOQEAAAAAAQAAADgAAAAIAAAADAAAAAAQAQAAADkAAAAAABAAAU4AwBwAAAAAAADAOgAAAAAAAAMAAUAJOHyA#SdXAAAAOgAAAAMBAAAAOQAAAAAAEAAAAQABAAAAOAAAADv#####AAAAAQAJQ0Ryb2l0ZUFCAP####8BAAAAABAAAAEAAQAAADgAAAA7AAAAAgD#####AAAAAAAQAAFJAMAIAAAAAAAAwDwAAAAAAAADAAE#99qox0vglgAAAD0AAAARAP####8BAAAAABAAAAEAAQAAAD4AAAA9AAAADwD#####AQAAAAABAAAAPgAAAAgAAAANAAAAABIA#####wAAAD8AAABAAAAAEwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAAEEAAAATAP####8AAAAAABAAAU8AwBwAAAAAAABAHAAAAAAAAAMAAgAAAEEAAAADAP####8AAAAAABAAAAEAAQAAADsAAABDAAAAAwD#####AAAAAAAQAAABAAEAAABDAAAAOAAAAAMA#####wAAAAAAEAAAAQEBAAAAOwAAAD4AAAADAP####8AAAAAABAAAAEBAQAAAD4AAABD#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAAAAAEAAAABQDAAAAAAAAAAAABDAAAAPgAAADsAAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAYAAAAEwAAAA4AAAAWAP####8AAAAAAAEAAAABQDAAAAAAAAAAAAAmAAAAIQAAABwAAAAOAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAD4AAABDAAAAFAAAAABLAQAAAAANAAABAAEAAAA+AAAAQwAAAAYAAAAASwEAAAAADQAAAQUAAAAAPgAAAEMAAAAPAAAAAEsBAAAAAAEAAABNAAAACkAwAAAAAAAAAQAAABIAAAAASwAAAEwAAABOAAAAEwAAAABLAQAAAAANAAABBQABAAAATwAAAAUBAAAASwAAAD4AAABDAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEwAAABgAAAABAAAAAFIAAAAAARAAAAEAAQAAABMBP#AAAAAAAAAAAAACAAAAAFIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFMAAAADAQAAAFIAAAAAABAAAAEBAQAAABMAAAAYAAAABAAAAABSAARhbmcnAAAAVAAAABMAAAAYAAAABQEAAABSAAAAEwAAABgAAAAGAAAAAFIAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAATAAAAGAAAAAcBAAAAUgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAFgQAAAAAAABAAAAAgAAAAgAAABWAAAAAyBjbQIAAABXAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAAAwAAAAIAAAACAAAAIQAAACYAAAABAAAAAFoAAAAAARAAAAEAAQAAACEBP#AAAAAAAAAAAAACAAAAAFoAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAFsAAAADAQAAAFoAAAAAABAAAAEBAQAAACEAAAAmAAAABAAAAABaAARhbmcnAAAAXAAAACEAAAAmAAAABQEAAABaAAAAIQAAACYAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAADAAAAAgAAAAIAAAA7AAAAQwAAAAEAAAAAYAAAAAABEAAAAQABAAAAOwE#8AAAAAAAAAAAAAIAAAAAYAAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAYQAAAAMBAAAAYAAAAAAAEAAAAQABAAAAOwAAAEMAAAAEAAAAAGAABGFuZycAAABiAAAAOwAAAEMAAAAFAQAAAGAAAAA7AAAAQwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAD4AAABDAAAAAQAAAABmAAAAAAEQAAABAAEAAAA+AT#wAAAAAAAAAAAAAgAAAABmAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABnAAAAAwEAAABmAAAAAAAQAAABAQEAAAA+AAAAQwAAAAQAAAAAZgAEYW5nJwAAAGgAAAA+AAAAQwAAAAUBAAAAZgAAAD4AAABDAAAABgAAAABmAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAPgAAAEMAAAAHAQAAAGYAAAAAAMAyAAAAAAAAwAgAAAAAAAAAAABsEAAAAAAAAQAAAAIAAAAIAAAAagAAAAMgY20CAAAAawAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAA4AAAARAAAAAQAAAABuAAAAAAEQAAABAAEAAAAOAT#wAAAAAAAAAAAAAgAAAABuAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABvAAAAAwEAAABuAAAAAAAQAAABAAEAAAAOAAAAEQAAAAQAAAAAbgAEYW5nJwAAAHAAAAAOAAAAEQAAAAUBAAAAbgAAAA4AAAARAAAABgAAAABuAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAABEAAAAHAQAAAG4AAAAAAMA2AAAAAAAAQDQAAAAAAAAAAAB0EAAAAAAAAQAAAAIAAAAIAAAAcgAAAAMgY20CAAAAcwAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAQAAAADAAAAAgAAAB8AAAAcAAAAAQAAAAB2AAAAAAEQAAABAAEAAAAfAT#wAAAAAAAAAAAAAgAAAAB2AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB3AAAAAwEAAAB2AAAAAAAQAAABAAEAAAAfAAAAHAAAAAQAAAAAdgAEYW5nJwAAAHgAAAAfAAAAHAAAAAUBAAAAdgAAAB8AAAAcAAAABgAAAAB2AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAHwAAABwAAAAHAQAAAHYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB8EAAAAAAAAQAAAAIAAAAIAAAAegAAAAMgY20CAAAAewAAAA4A#####wAQTG9uZ3VldXJPcmllbnRlZQAAAAMAAAACAAAAAgAAADgAAAA7AAAAAQAAAAB+AAAAAAEQAAABAAEAAAA4AT#wAAAAAAAAAAAAAgAAAAB+AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAB#AAAAAwEAAAB+AAAAAAAQAAABAAEAAAA4AAAAOwAAAAQAAAAAfgAEYW5nJwAAAIAAAAA4AAAAOwAAAAUBAAAAfgAAADgAAAA7AAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAOwAAADgAAAABAAAAAIQAAAAAARAAAAEAAQAAADsBP#AAAAAAAAAAAAACAAAAAIQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIUAAAADAQAAAIQAAAAAABAAAAEAAQAAADsAAAA4AAAABAAAAACEAARhbmcnAAAAhgAAADsAAAA4AAAABQEAAACEAAAAOwAAADgAAAAGAAAAAIQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAOAAAAAcBAAAAhAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAIoQAAAAAAABAAAAAgAAAAgAAACIAAAAAyBjbQIAAACJAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAEQAAABgAAAABAAAAAIwAAAAAARAAAAEAAQAAABEBP#AAAAAAAAAAAAACAAAAAIwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAI0AAAADAQAAAIwAAAAAABAAAAEAAQAAABEAAAAYAAAABAAAAACMAARhbmcnAAAAjgAAABEAAAAYAAAABQEAAACMAAAAEQAAABgAAAAGAAAAAIwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAARAAAAGAAAAAcBAAAAjAAAAAAAQBQAAAAAAABAMwAAAAAAAAAAAJIQAAAAAAABAAAAAgAAAAgAAACQAAAAAyBjbQEAAACRAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAADgAAABgAAAABAAAAAJQAAAAAARAAAAEAAQAAAA4BP#AAAAAAAAAAAAACAAAAAJQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJUAAAADAQAAAJQAAAAAABAAAAEAAQAAAA4AAAAYAAAABAAAAACUAARhbmcnAAAAlgAAAA4AAAAYAAAABQEAAACUAAAADgAAABgAAAAGAAAAAJQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAOAAAAGAAAAAcBAAAAlAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAJoQAAAAAAABAAAAAgAAAAgAAACYAAAAAyBjbQEAAACZAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAAB8AAAABAAAAAJwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAJwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ0AAAADAQAAAJwAAAAAABAAAAEAAQAAACYAAAAfAAAABAAAAACcAARhbmcnAAAAngAAACYAAAAfAAAABQEAAACcAAAAJgAAAB8AAAAGAAAAAJwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHwAAAAcBAAAAnAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAAgAAACgAAAAAyBjbQEAAAChAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAMAAAACAAAAJgAAABwAAAABAAAAAKQAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKQAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAKUAAAADAQAAAKQAAAAAABAAAAEAAQAAACYAAAAcAAAABAAAAACkAARhbmcnAAAApgAAACYAAAAcAAAABQEAAACkAAAAJgAAABwAAAAGAAAAAKQAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAmAAAAHAAAAAcBAAAApAAAAAAAQAgAAAAAAABAMwAAAAAAAAAAAKoQAAAAAAABAAAAAgAAAAgAAACoAAAAAyBjbQEAAACpAAAADgD#####ABBMb25ndWV1ck9yaWVudGVlAAAABAAAAAIAAAACAAAAJgAAACEAAAABAAAAAKwAAAAAARAAAAEAAQAAACYBP#AAAAAAAAAAAAACAAAAAKwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAK0AAAAEAAAAAKwABGFuZycAAACuAAAAJgAAACEAAAAFAQAAAKwAAAAmAAAAIQAAAAYAAAAArAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAACYAAAAhAAAABwEAAACsAAAAAABALgAAAAAAAEAmAAAAAAAAAAAAsRAAAAAAAAEAAAACAAAACAAAAK8AAAADIGNtAQAAALAAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOwAAAAEAAAAAswAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAswAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAtAAAAAMBAAAAswAAAAAAEAAAAQABAAAAQwAAADsAAAAEAAAAALMABGFuZycAAAC1AAAAQwAAADsAAAAFAQAAALMAAABDAAAAOwAAAAYAAAAAswAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA7AAAABwEAAACzAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAuRAAAAAAAAEAAAACAAAACAAAALcAAAADIGNtAQAAALgAAAAOAP####8AEExvbmd1ZXVyT3JpZW50ZWUAAAAEAAAAAwAAAAIAAABDAAAAOAAAAAEAAAAAuwAAAAABEAAAAQABAAAAQwE#8AAAAAAAAAAAAAIAAAAAuwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAvAAAAAMBAAAAuwAAAAAAEAAAAQABAAAAQwAAADgAAAAEAAAAALsABGFuZycAAAC9AAAAQwAAADgAAAAFAQAAALsAAABDAAAAOAAAAAYAAAAAuwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEMAAAA4AAAABwEAAAC7AAAAAABAKAAAAAAAAEAsAAAAAAAAAAAAwRAAAAAAAAEAAAACAAAACAAAAL8AAAADIGNtAQAAAMAAAAAH##########8="
		}
		texte_corr=`$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times AB\\times HC=\\dfrac{1}{2}\\times${c1}~\\text{cm}\\times ${h1}~\\text{cm}=${tex_nombre(Algebrite.eval(c1*h1/2))}~\\text{cm}^2$`	
		texte_corr+="<br>"
		texte_corr+=`$\\mathcal{A}_{DEF}=\\dfrac{1}{2}\\times DE\\times GF=\\dfrac{1}{2}\\times${c2}~\\text{cm}\\times ${h2}~\\text{cm}=${tex_nombre(Algebrite.eval(c2*h2/2))}~\\text{cm}^2$`	
		texte_corr+="<br>"
		texte_corr+=`$\\mathcal{A}_{ABC}=\\dfrac{1}{2}\\times MN\\times IO=\\dfrac{1}{2}\\times${c3}~\\text{cm}\\times ${h3}~\\text{cm}=${tex_nombre(Algebrite.eval(c3*h3/2))}~\\text{cm}^2$`	
		
		

		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c1", "${c1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c2", "${c2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c3", "${c3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h1", "${h1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h2", "${h2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h3", "${h3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	

		
			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);		
	}
}

/**
* 4 cercles sont tracés, 2 dont on connait le rayon et 2 dont on connait le diamètre.
* * 1 : Calculer le périmètre de cercles
* * 2 : Calculer l'aire de disques
* * 3 : Calculer le périmètre et l'aire de disques
*
* Pas de version LaTeX
* @Auteur Rémi Angot
*/
function Perimetre_aire_disques(pa=3){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Périmètres et aires de disques"
	this.sup = pa ; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false ;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [500,500];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let tableau_des_rayons = shuffle ([2,3,4,5,6,7,8]); //pour s'assurer que les 4 rayons sont différents
		let r1 = tableau_des_rayons[0];
		let r2 = tableau_des_rayons[1];
		let r3 = tableau_des_rayons[2];
		let r4 = tableau_des_rayons[3];
		if (this.sup==1){
			this.consigne = "Calculer le périmètre des 4 cercles suivants.";
		}
		if (this.sup==2) {
			this.consigne = "Calculer l'aire des 4 disques suivants.";
		}
		if (this.sup==3) {
			this.consigne = "Calculer le périmètre et l'aire des 4 disques suivants."
		}

		this.consigne += "</br>Donner la valeur exacte et une valeur approchée au dixième près."

		let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAAEAAAAQABAAAAMQAAACQAAAAaAP####8BAAAAABAAAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDUAAAAAAADANwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDEpAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZDI0woMikAAAAdAP####8AAAAAAMA3AAAAAAAAwDUAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAABkMjTCgzKQAAAB0A#####wAAAAAAwDgAAAAAAADANQAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQyNMKDQpAAAADv##########";
	//	let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAEv#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFACAAAAAAAAEB#UAAAAAAA#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUA8ZmZmZmZmAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAQAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQANQ1BvaW50QmFzZUVudAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAyAAAAAAAAAQEAAAARAP####8BAAAAABAAAUEAAAAAAAAAAABACAAAAAAAAAUAAQAAAAoAAAAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAEAwAAAAAAAAAQEAAAARAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAUAAQAAAApAMQAAAAAAAAAAAAAAAAAAAQH#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEAAAABH#####AAAAAQALQ01lZGlhdHJpY2UAAAAAEwEAAAAAEAAAAQABAAAAEAAAABH#####AAAAAQAHQ01pbGlldQAAAAATAQAAAAAQAAABBQAAAAAQAAAAEf####8AAAACAAlDQ2VyY2xlT1IAAAAAEwEAAAAAAQAAABUAAAABQDAAAAAAAAABAAAACAAAAAATAAAAFAAAABYAAAAJAAAAABMBAAAAABAAAAEFAAEAAAAXAAAAEAEAAAATAAAAEAAAABH#####AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABMBAAAAAQAAABgRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAGQAAABIA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAEgAAABEAAAATAAAAABsBAAAAABAAAAEAAQAAABIAAAARAAAAFAAAAAAbAQAAAAAQAAABBQAAAAASAAAAEQAAABUAAAAAGwEAAAAAAQAAAB0AAAABQDAAAAAAAAABAAAACAAAAAAbAAAAHAAAAB4AAAAJAAAAABsBAAAAABAAAAEFAAEAAAAfAAAAEAEAAAAbAAAAEgAAABEAAAAWAQAAABsBAAAAAQAAACARAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAAIf####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAUAAAAAAAAAAAAAUAqAAAAAAAAAAAAFwD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACgAAAAFAKgAAAAAAAAAAAAFAKgAAAAAAAAAAABcA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAoAAAABQBQAAAAAAAAAAAABQBDMzMzMzM0AAAAXAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAKAAAAAUAqAAAAAAAAAAAAAUAQzMzMzMzN#####wAAAAEAB0NDYWxjdWwA#####wACcjEAATgAAAABQCAAAAAAAAAAAAAYAP####8AAnIyAAE4AAAAAUAgAAAAAAAAAAAAGAD#####AAJyMwABOAAAAAFAIAAAAAAAAAAAABgA#####wACcjQAATgAAAABQCAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAjAAAADQMAAAAOAAAAJwAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAkAAAADQMAAAAOAAAAKAAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAlAAAADQMAAAAOAAAAKQAAAAFAAAAAAAAAAAAAAAAVAP####8AAAAAAAEAAAAmAAAADQMAAAAOAAAAKgAAAAFAAAAAAAAAAAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABP+2jc+MfDgIAAAArAAAAGQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAT#oCnbou8r7AAAALgAAABkA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAFAA2#XuqaBNQAAACwAAAAZAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAUiuM2Ua#MAAAAt#####wAAAAEADUNEZW1pRHJvaXRlT0EA#####wEAAAAADQAAAQABAAAAMQAAACQAAAAaAP####8BAAAAAA0AAAEAAQAAADIAAAAl#####wAAAAEAI0NBdXRyZVBvaW50SW50ZXJzZWN0aW9uRHJvaXRlQ2VyY2xlAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAsAAAAMwAAADEAAAAbAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAtAAAANAAAADL#####AAAAAQAIQ1NlZ21lbnQA#####wAAAAAAEAAAAQEBAAAAIwAAAC8AAAAcAP####8AAAAAABAAAAEBAQAAADEAAAA1AAAAHAD#####AAAAAAAQAAABAQEAAAAyAAAANgAAABwA#####wAAAAAAEAAAAQEBAAAAJgAAADAAAAAUAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwAAAAAjAAAALwAAABQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAACYAAAAwAAAAFgD#####AAAAAABAEAAAAAAAAEAUAAAAAAAAAAAAOxAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAyBjbQIAAAAnAAAAGAD#####AAJkMgAEMipyMgAAAA0CAAAAAUAAAAAAAAAAAAAADgAAACgAAAAYAP####8AAmQzAAQyKnIzAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAKQAAABYA#####wAAAAAAQBQAAAAAAADALAAAAAAAAAAAACQQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPgAAABYA#####wAAAAAAQBAAAAAAAADAMQAAAAAAAAAAACUQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAMgY20CAAAAPwAAABYA#####wAAAAAAQBAAAAAAAABAAAAAAAAAAAAAADwQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAJjbQIAAAAqAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUAC6DhJtPdjAAAAKwAAABkA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAE#54KANM#JugAAACwAAAAZAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABQAH6z0QhlKUAAAAtAAAAGQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAUABlMNYoHZ0AAAALv####8AAAACAAxDQ29tbWVudGFpcmUA#####wAAAAAAwDAAAAAAAADAMwAAAAAAAAAAAEMQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzEkAAAAHQD#####AAAAAABAGAAAAAAAAMAwAAAAAAAAAAAARBAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAA8kXG1hdGhjYWx7Q31fMiQAAAAdAP####8AAAAAAMAyAAAAAAAAwDQAAAAAAAAAAABFEAAAAAAAAAAAAAAAAAABAAAAAAAAAAAADyRcbWF0aGNhbHtDfV8zJAAAAB0A#####wAAAAAAwDMAAAAAAADAMAAAAAAAAAAAAEYQAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAPJFxtYXRoY2Fse0N9XzQkAAAADv##########";
	//  Si affichage LaTeX alors bug de MG32
		texte_corr=""	
		if (this.sup ==1) { //si on ne demande pas les aires
			texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r1*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_2=${2*r2}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r2*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_3=${2*r3}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r3*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r4*Math.PI),1))}$ cm<br>`
		}

		
		if (this.sup ==2){
			texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r1*r1*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2*r2} cm donc son rayon est ${r2} cm.<br>`
			texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2*r2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2*r3} cm donc son rayon est ${r3} cm.<br>`
			texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3*r3}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r4*r4*Math.PI),1))}~\\text{cm}^2$<br>`
		}

		if (this.sup == 3){
			texte_corr = `$\\mathcal{P}_1=2\\times${r1}\\times\\pi=${2*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r1*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_2=${2*r2}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r2*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_3=${2*r3}\\times\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r3*Math.PI),1))}$ cm<br>`
			texte_corr += `$\\mathcal{P}_4=2\\times${r4}\\times\\pi=${2*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(2*r4*Math.PI),1))}$ cm<br>`
			
			texte_corr += `<br>`
			
			texte_corr += `$\\mathcal{A}_1=${r1}\\times${r1}\\times\\pi=${r1*r1}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r1*r1*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `Le diamètre de $\\mathcal{C}_2$ est ${2*r2} cm donc son rayon est ${r2} cm.<br>`
			texte_corr += `$\\mathcal{A}_2=${r2}\\times${r2}\\times\\pi=${r2*r2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `Le diamètre de $\\mathcal{C}_3$ est ${2*r3} cm donc son rayon est ${r3} cm.<br>`
			texte_corr += `$\\mathcal{A}_3=${r3}\\times${r3}\\times\\pi=${r3*r3}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3*Math.PI),1))}~\\text{cm}^2$<br>`
			texte_corr += `$\\mathcal{A}_4=${r4}\\times${r4}\\times\\pi=${r4*r4}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r4*r4*Math.PI),1))}~\\text{cm}^2$<br>`
		}
		

		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r1", "${r1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r4", "${r4}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);		
	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires"];			
}


/**
* 3 figures sont données, 1 quart de disque, un demi-disque et un 3-quarts de disque
* * 1 : Calculer les périmètres 
* * 2 : Calculer les aires
* * 3 : Calculer les périmètres et aires
* Pas de version LaTeX
* @Auteur Rémi Angot
*/
function Perimetre_aire_et_portions_de_disques(pa=3){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Périmètres et aires de portions de cercles"
	this.consigne = "Calculer le périmètre et l'aire de chacune des figures suivantes"
	this.sup = pa ; // 1 : périmètre, 2 : aire, 3 : périmètres et aires
	this.spacing = 2;
	sortie_html ? this.spacing_corr = 3 : this.spacing_corr = 2 ;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [600,450];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let r = randint(1,5);
		let r2 = randint(2,4);
		let r3 = randint(2,4);
		let figure = randint(1,2);
		let codeBase64 =""
		if (this.sup==1){
			this.consigne = "Calculer le périmètre de chacune des figures suivantes";
		}
		if (this.sup==2) {
			this.consigne = "Calculer l'aire de chacune des figures suivantes";
		}


		if (figure==1) {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAIoAAACNQAAAQEAAAAAAAAAAQAAAE######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAAN#####wAAAAEADENBcmNEZUNlcmNsZQD#####AAAAAAABAAAACQAAAA######AAAAAUBWgAAAAAAAAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAARAAAADAD#####AAAAEgAAABAAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwABAAAAEwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAATAAAABgD#####AAAAAAAQAAABAAEAAAAVAAAACf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAJAAAAD#####8AAAABAAtDTWVkaWF0cmljZQAAAAAXAQAAAAAQAAABAAEAAAAJAAAADwAAAAcAAAAAFwEAAAAAEAAAAQUAAAAACQAAAA8AAAAKAAAAABcBAAAAAAEAAAAZAAAAAUAwAAAAAAAAAQAAAAwAAAAAFwAAABgAAAAaAAAADQAAAAAXAQAAAAAQAAABBQABAAAAGwAAAAkBAAAAFwAAAAkAAAAP#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAXAAAAAAEAAAAcEQAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAADIGNtAQAAAB3#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAAWAAAAEwD#####AAAA#wACAQAAABEAAAACAP####8AAnIyAAE1AAAAAUAUAAAAAAAAAAAACgD#####AQAA#wABAAAACf####8AAAABAApDT3BlcmF0aW9uAAAAABQAAAAACwAAAAoAAAALAAAAIQAAAAFAAAAAAAAAAAAAAAAMAP####8AAAALAAAAIgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAAjAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAACMAAAAKAP####8BAAAAAAEAAAAlAAAACwAAACEAAAAADAD#####AAAACwAAACYAAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACcAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACcAAAAOAP####8AAAAAAAEAAAAlAAAAKQAAACgAAAAGAP####8AAAAAABAAAAEAAQAAACgAAAApAAAAEAD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAAoAAAAKQAAABEAAAAALAEAAAAAEAAAAQABAAAAKAAAACkAAAAHAAAAACwBAAAAABAAAAEFAAAAACgAAAApAAAACgAAAAAsAQAAAAABAAAALgAAAAFAMAAAAAAAAAEAAAAMAAAAACwAAAAtAAAALwAAAA0AAAAALAEAAAAAEAAAAQUAAQAAADAAAAAJAQAAACwAAAAoAAAAKQAAABIBAAAALAAAAAABAAAAMREAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAyAAAABwD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAAAACQAAACkAAAAPAP####8BAAAAABAAAAEAAQAAADQAAAArAAAACgD#####AQAAAAABAAAANAAAABQAAAAACwAAAAEAAAABQAAAAAAAAAAAAAAADAD#####AAAANQAAADYAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANwAAAA0A#####wEAAAAAEAABRQAAAAAAAAAAAEAIAAAAAAAAAwABAAAANwAAAAQA#####wEAAAABEAAAAQABAAAAOQE#8AAAAAAAAAAAAAoA#####wEAAAAAAQAAADkAAAALAAAAAQAAAAAMAP####8AAAA6AAAAOwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAA8AAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAQAAADwAAAAMAP####8AAAA1AAAAOwAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAAPwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA######wAAAAEAEUNHcmFuZEFyY0RlQ2VyY2xlAP####8AAAAAAAEAAAA5AAAAPgAAAEAAAAAGAP####8AAAAAABAAAAEAAQAAAEAAAAA5AAAABgD#####AAAAAAAQAAABAAEAAAA5AAAAPgAAABMA#####wAAAP8AAgIAAABDAAAAEwD#####AAAA#wACAgAAAEQAAAAQAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEAAAAA5AAAAEQAAAABHAQAAAAAQAAABAAEAAABAAAAAOQAAAAcAAAAARwEAAAAAEAAAAQUAAAAAQAAAADkAAAAKAAAAAEcBAAAAAAEAAABJAAAAAUAwAAAAAAAAAQAAAAwAAAAARwAAAEgAAABKAAAADQAAAABHAQAAAAAQAAABBQABAAAASwAAAAkBAAAARwAAAEAAAAA5AAAAEgEAAABHAAAAAABARgAAAAAAAAAAAAAAAAAAAAAATBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABNAAAACP##########"
			
			if (this.sup ==1) { //si on ne demande pas les aires
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm<br>`
				texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r2} cm et d'un diamètre qui ferme la figure.<br>`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2*r2}\\times\\pi+${2*r2}=${r2}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(r2*Math.PI+2*r2),1))}$ cm<br>`
				texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(Algebrite.eval(6*r3/4))}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(6*r3/4*Math.PI+2*r3),1))}$ cm<br>`
			}

			
			if (this.sup ==2){
				texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2*r2} cm donc de ${r2} cm de rayon.<br>`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(Algebrite.eval(r2*r2/2))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2/2*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(Algebrite.eval(3/4*r3*r3))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r3*r3*Math.PI),1))}~\\text{cm}^2$`
			}

			if (this.sup == 3){
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm<br>`
				texte_corr += `La deuxième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r2} cm et d'un diamètre qui ferme la figure.<br>`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{1}{2}\\times${2*r2}\\times\\pi+${2*r2}=${r2}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(r2*Math.PI+2*r2),1))}$ cm<br>`
				texte_corr += `La troisième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r3} cm et 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{3}{4}\\times2\\times${r3}\\times\\pi+${r3}+${r3}=${tex_nombre(Algebrite.eval(6*r3/4))}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(6*r3/4*Math.PI+2*r3),1))}$ cm<br>`
				texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La deuxième figure est la moitié d'un disque de diamètre ${2*r2} cm donc de ${r2} cm de rayon.<br>`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{1}{2}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(Algebrite.eval(r2*r2/2))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r2*r2/2*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La troisième figure est trois quarts d'un disque de rayon ${r3} cm.<br>`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{3}{4}\\times${r3}\\times${r3}\\times\\pi=${tex_nombre(Algebrite.eval(3/4*r3*r3))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r3*r3*Math.PI),1))}~\\text{cm}^2$`
			}
		}
		else {
			codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAL2AAACOAAAAQEAAAAAAAAAAQAAAGX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAHQ0NhbGN1bAD#####AAJyMwABNgAAAAFAGAAAAAAAAP####8AAAABAApDUG9pbnRCYXNlAP####8BAAAAAA4AAVUAwCQAAAAAAABAEAAAAAAAAAUAAEAsZmZmZmZmQCxmZmZmZmb#####AAAAAQAUQ0Ryb2l0ZURpcmVjdGlvbkZpeGUA#####wEAAAAAEAAAAQABAAAAAgE#8AAAAAAAAP####8AAAABAA9DUG9pbnRMaWVEcm9pdGUA#####wEAAAAADgABVgDAAAAAAAAAAEAQAAAAAAAABQABQDxmZmZmZmYAAAAD#####wAAAAEACENTZWdtZW50AP####8BAAAAABAAAAEAAQAAAAIAAAAE#####wAAAAEAB0NNaWxpZXUA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAAIAAAAE#####wAAAAIADENDb21tZW50YWlyZQD#####AQAAAAAAAAAAAAAAAEAYAAAAAAAAAAAABgwAAAAAAAEAAAAAAAAAAQAAAAAAAAAAAAEx#####wAAAAEACUNMb25ndWV1cgD#####AAAAAgAAAAQAAAADAP####8BAAAAABAAAU8AAAAAAAAAAABACAAAAAAAAAMAAUBRQAAAAAAAQGQAAAAAAAAAAAACAP####8AAXIAATQAAAABQBAAAAAAAAAAAAAEAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAoA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAsAAAAM#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAIAAAANAAAADQD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAADAAEAAAANAAAABgD#####AAAAAAAQAAABAAEAAAAJAAAAD#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAQ#####wAAAAEAFENJbXBsZW1lbnRhdGlvblByb3RvAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAAkAAAAP#####wAAAAEAC0NNZWRpYXRyaWNlAAAAABIBAAAAABAAAAEAAQAAAAkAAAAPAAAABwAAAAASAQAAAAAQAAABBQAAAAAJAAAADwAAAAoAAAAAEgEAAAAAAQAAABQAAAABQDAAAAAAAAABAAAADAAAAAASAAAAEwAAABUAAAANAAAAABIBAAAAABAAAAEFAAEAAAAWAAAACQEAAAASAAAACQAAAA######AAAAAQAPQ1ZhbGV1ckFmZmljaGVlAQAAABIAAAAAAQAAABcRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAGAAAAAIA#####wACcjIAATQAAAABQBAAAAAAAAAAAAAKAP####8BAAD#AAEAAAAJ#####wAAAAEACkNPcGVyYXRpb24AAAAAEgAAAAALAAAACgAAAAsAAAAaAAAAAUAAAAAAAAAAAAAAAAwA#####wAAAAsAAAAbAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAABwAAAANAP####8BAAAAABAAAUcAAAAAAAAAAABACAAAAAAAAAMAAQAAABwAAAAKAP####8BAAAAAAEAAAAeAAAACwAAABoAAAAADAD#####AAAACwAAAB8AAAANAP####8BAAAAABAAAUIAAAAAAAAAAABACAAAAAAAAAMAAgAAACAAAAANAP####8BAAAAABAAAUMAAAAAAAAAAABACAAAAAAAAAMAAQAAACAAAAAGAP####8BAAAAABAAAAEAAQAAACEAAAAiAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAAAhAAAAIgAAABAAAAAAJAEAAAAAEAAAAQABAAAAIQAAACIAAAAHAAAAACQBAAAAABAAAAEFAAAAACEAAAAiAAAACgAAAAAkAQAAAAABAAAAJgAAAAFAMAAAAAAAAAEAAAAMAAAAACQAAAAlAAAAJwAAAA0AAAAAJAEAAAAAEAAAAQUAAQAAACgAAAAJAQAAACQAAAAhAAAAIgAAAAcA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAAAAAkAAAAiAAAADgD#####AQAAAAAQAAABAAEAAAArAAAAIwAAAAoA#####wEAAAAAAQAAACsAAAASAgAAAAE#+AAAAAAAAAAAAAsAAAAaAAAAAAwA#####wAAACwAAAAtAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAMAAgAAAC4AAAANAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAMAAQAAAC4AAAAEAP####8BAAAAARAAAAEAAQAAADABP#AAAAAAAAAAAAAKAP####8BAAAAAAEAAAAwAAAACwAAAAEAAAAADAD#####AAAAMQAAADIAAAANAP####8BAAAAABAAAUkAAAAAAAAAAABACAAAAAAAAAMAAgAAADMAAAANAP####8BAAAAABAAAUgAAAAAAAAAAABACAAAAAAAAAMAAQAAADMAAAAMAP####8AAAAsAAAAMgAAAA0A#####wEAAAAAEAABRAAAAAAAAAAAAEAIAAAAAAAAAwACAAAANgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAAA2AAAABgD#####AQAAAAAQAAABAAEAAAA3AAAAMAAAAAYA#####wAAAAAAEAAAAQABAAAAMAAAADUAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAADcAAAAwAAAAEAAAAAA7AQAAAAAQAAABAAEAAAA3AAAAMAAAAAcAAAAAOwEAAAAAEAAAAQUAAAAANwAAADAAAAAKAAAAADsBAAAAAAEAAAA9AAAAAUAwAAAAAAAAAQAAAAwAAAAAOwAAADwAAAA+AAAADQAAAAA7AQAAAAAQAAABBQABAAAAPwAAAAkBAAAAOwAAADcAAAAwAAAAEQEAAAA7AQAAAABARgAAAAAAAAAAAAAAAAAAAAAAQBEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABBAAAADAD#####AAAAEQAAAAwAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAQwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABDAAAABgD#####AAAAAAAQAAABAAEAAAAwAAAANAAAAA4A#####wEAAP8AEAAAAQACAAAAHgAAACMAAAAMAP####8AAABHAAAAHwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAADAAEAAABIAAAADQD#####AQAAAAAQAAFGAAAAAAAAAAAAQAgAAAAAAAADAAIAAABIAAAABgD#####AAAAAAAQAAABAAEAAAAeAAAASgAAAAYA#####wAAAAAAEAAAAQABAAAAHgAAACH#####AAAAAQAMQ0FyY0RlQ2VyY2xlAP####8AAAAAAAEAAAAJAAAADwAAAEQAAAAPAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAACAAAAAgAAAEoAAAAeAAAAEAAAAABOAQAAAAAQAAABAAEAAABKAAAAHgAAAAcAAAAATgEAAAAAEAAAAQUAAAAASgAAAB4AAAAKAAAAAE4BAAAAAAEAAABQAAAAAUAwAAAAAAAAAQAAAAwAAAAATgAAAE8AAABRAAAADQAAAABOAQAAAAAQAAABBQABAAAAUgAAAAkBAAAATgAAAEoAAAAeAAAAEQEAAABOAAAAAADAKgAAAAAAAAAAAAAAAAAAAAAAUxEAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAABUAAAADwD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAgAAAAIAAAA1AAAANAAAABAAAAAAVgEAAAAAEAAAAQABAAAANQAAADQAAAAHAAAAAFYBAAAAABAAAAEFAAAAADUAAAA0AAAACgAAAABWAQAAAAABAAAAWAAAAAFAMAAAAAAAAAEAAAAMAAAAAFYAAABXAAAAWQAAAA0AAAAAVgEAAAAAEAAAAQUAAQAAAFoAAAAJAQAAAFYAAAA1AAAANAAAABEBAAAAVgAAAAAAAAAAAAAAAADACAAAAAAAAAAAAFsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAAXAAAAAYA#####wAAAAAAEAAAAQABAAAACQAAAEQAAAATAP####8AAAAAAAEAAAAwAAAANP####8AAAABQGaAAAAAAAD#####AAAAAQARQ0dyYW5kQXJjRGVDZXJjbGUA#####wAAAAAAAQAAAB4AAAAh#####wAAAAFAcOAAAAAAAP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAA#wACAgAAAF4AAAAVAP####8AAAD#AAICAAAAEAAAABUA#####wAAAP8AAgAAAABLAAAAFQD#####AAAA#wACAAAAAEwAAAAI##########8="
			texte_corr = `La première figure est un quart de cercle de rayon ${r} cm auquel il faut ajouter les 2 rayons qui ferment la figure.<br>`
			
			if (this.sup==1) {
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm<br>`
				texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(6/4*r2)}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(6/4*r2*Math.PI+2*r2),1))}$ cm<br>`
				texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r3} cm et d'un diamètre qui ferme la figure.<br>`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2*r3}\\times\\pi+${2*r3}=${r3}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(r3*Math.PI+2*r3),1))}$ cm<br>`
			}

			if (this.sup==2){
				texte_corr = `La première figure est un quart de disque de rayon ${r} cm.<br>`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(3/4*r2*r2)}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r2*r2*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La troisième figure est un demi-cercle de diamètre ${2*r3} cm donc de rayon ${r3} cm.<br>`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${r3*r3/2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3/2*Math.PI),1))}~\\text{cm}^2$<br>`
			
			}


			if (this.sup==3) {
				texte_corr = `La première figure est un quart de disque, son périmètre est composé d'un quart de cercle de rayon ${r} cm et de 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_1=\\dfrac{1}{4}\\times2\\times${r}\\times\\pi+${r}+${r}=${tex_nombre(Algebrite.eval(r/2))}\\pi+${2*r}\\approx${tex_nombre(arrondi(Algebrite.eval(r/2*Math.PI+2*r),1))}$ cm<br>`
				texte_corr += `La deuxième figure est trois quarts d'un disque, son périmètre est composé de trois quarts d'un cercle de rayon ${r2} cm et 2 rayons qui ferment la figure.<br>`
				texte_corr += `$\\mathcal{P}_2=\\dfrac{3}{4}\\times2\\times${r2}\\times\\pi+${r2}+${r2}=${tex_nombre(6/4*r2)}\\pi+${2*r2}\\approx${tex_nombre(arrondi(Algebrite.eval(6/4*r2*Math.PI+2*r2),1))}$ cm<br>`
				texte_corr += `La troisième figure est un demi-disque, son périmètre est composé d'un demi-cercle de diamètre ${2*r3} cm et d'un diamètre qui ferme la figure.<br>`
				texte_corr += `$\\mathcal{P}_3=\\dfrac{1}{2}\\times${2*r3}\\times\\pi+${2*r3}=${r3}\\pi+${2*r3}\\approx${tex_nombre(arrondi(Algebrite.eval(r3*Math.PI+2*r3),1))}$ cm<br>`
				texte_corr += `La première figure est un quart de disque de rayon ${r} cm.<br>`
				texte_corr += `$\\mathcal{A}_1=\\dfrac{1}{4}\\times${r}\\times${r}\\times\\pi=${tex_nombre(Algebrite.eval(r*r/4))}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r*r/4*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La deuxième figure est trois quarts d'un disque rayon ${r2} cm.<br>`
				texte_corr += `$\\mathcal{A}_2=\\dfrac{3}{4}\\times${r2}\\times${r2}\\times\\pi=${tex_nombre(3/4*r2*r2)}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(3/4*r2*r2*Math.PI),1))}~\\text{cm}^2$<br>`
				texte_corr += `La troisième figure est un demi-cercle de diamètre ${2*r3} cm donc de rayon ${r3} cm.<br>`
				texte_corr += `$\\mathcal{A}_3=\\dfrac{1}{2}\\times${r3}\\times${r3}\\times\\pi=${r3*r3/2}\\pi\\approx${tex_nombre(arrondi(Algebrite.eval(r3*r3/2*Math.PI),1))}~\\text{cm}^2$<br>`
			}





			
		}
		
		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r", "${r}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r2", "${r2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "r3", "${r3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	
	
			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);		
	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
2 : Aires\n3 : Périmètres et aires"];			
}

/**
* Un carré, un rectangle et un triangle rectangle sont tracés.
*
* Il faut calculer les aires et périmètres.
*
* Pas de version LaTeX
* @Auteur Rémi Angot
*/
function Perimetre_ou_aire_de_carres_rectangles_triangles(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Périmètres et aires carrés, rectangles et triangles rectangles"
	this.consigne = "Calculer le périmètre et l'aire des 3 figures suivantes"
	this.spacing = 2;
	sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2 ;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [600,450];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let c = randint(2,6)
		let L = randint(2,5)
		let l = randint(1,4)
		while (l==L) { // Le rectangle ne doit pas être un carré
			l = randint(1,4)
		}
		let a = randint(2,5)
		let b = randint(2,5)
		let codeBase64 ="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAH0AAAB9AAAAQEAAAAAAAAAAQAAAH######AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wABYwABNQAAAAFAFAAAAAAAAAAAAAkA#####wABTAABNQAAAAFAFAAAAAAAAAAAAAkA#####wABbAABMgAAAAFAAAAAAAAAAAAAAAkA#####wABYgABNQAAAAFAFAAAAAAAAAAAAAkA#####wABYQABMwAAAAFACAAAAAAAAAAAAAIA#####wAAAAAAEAABQQDALgAAAAAAAAAAAAAAAAAABQABQDkAAAAAAABAaOAAAAAAAP####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAAGAAAAAwAAAAIAAAAIAAAADf####8AAAACAAlDQ2VyY2xlT1IAAAAADgEAAAAAAQAAAA3#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAA4AAAAAABAAAUIAQAgAAAAAAAAAAAAAAAAAAAUAAUAYC8chUUHEAAAADwAAAAUBAAAADgAAAAAAEAAAAQABAAAADQAAABAAAAAGAAAAAA4BAAAAAA0AAAEFAAAAAA0AAAAQ#####wAAAAEAC0NNZWRpYXRyaWNlAAAAAA4BAAAAAA0AAAEAAQAAAA0AAAAQAAAACwAAAAAOAQAAAAABAAAAEgAAAAFAMAAAAAAAAAH#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQAAAAAOAAAAEwAAABT#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAAAAAAOAQAAAAANAAABBQABAAAAFf####8AAAABAA9DVmFsZXVyQWZmaWNoZWUBAAAADgAAAAABAAAAFhAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAyBjbQEAAAAI#####wAAAAEAFkNEcm9pdGVQZXJwZW5kaWN1bGFpcmUA#####wEAAAAAEAAAAQABAAAADQAAABEAAAASAP####8BAAAAABAAAAEAAQAAABAAAAAR#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAEAAAAA0AAAATAP####8BAAAAAAEAAAANAAAAEAAAAA8A#####wAAABkAAAAaAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAABwAAAAQAP####8AAAAAABAAAUMAQBAAAAAAAADANQAAAAAAAAUAAgAAABwAAAAPAP####8AAAAYAAAAGwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAfAAAAEAD#####AAAAAAAQAAFEAMAsAAAAAAAAwDcAAAAAAAAFAAIAAAAf#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABQAAAA0AAAAQAAAAHgAAACEAAAANAAAABQD#####AAAAAAAQAAABAAEAAAAQAAAAHgAAAAUA#####wAAAAAAEAAAAQABAAAAHgAAACEAAAAFAP####8AAAAAABAAAAEAAQAAACEAAAAN#####wAAAAIAF0NNYXJxdWVBbmdsZUdlb21ldHJpcXVlAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAhAAAADQAAABAAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAANAAAAEAAAAB4AAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAQAAAAHgAAACEAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAAAeAAAAIQAAAA0AAAACAP####8AAAAAABAAAUgAwDEAAAAAAADAAAAAAAAAAAUAAUBymAAAAAAAQHEHCj1wo9cAAAAKAP####8AG1NlZ21lbnQgZGUgbG9uZ3VldXIgZG9ubsOpZQAAAAYAAAADAAAAAgAAAAkAAAAqAAAACwAAAAArAQAAAAABAAAAKgAAAAwAAAAJAAAAAA0BAAAAKwAAAAAAEAABRQBACAAAAAAAAAAAAAAAAAAABQABP8sfH32jwU4AAAAsAAAABQEAAAArAAAAAAAQAAABAAEAAAAqAAAALQAAAAYAAAAAKwEAAAAADQAAAQUAAAAAKgAAAC0AAAAOAAAAACsBAAAAAA0AAAEAAQAAACoAAAAtAAAACwAAAAArAQAAAAABAAAALwAAAAFAMAAAAAAAAAEAAAAPAAAAACsAAAAwAAAAMQAAABAAAAAAKwEAAAAADQAAAQUAAQAAADIAAAARAQAAACsAAAAAAQAAADMQAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAMgY20BAAAACQAAABIA#####wEAAAAAEAAAAQABAAAALQAAAC4AAAASAP####8BAAAAABAAAAEAAQAAACoAAAAuAAAACwD#####AQAAAAABAAAALQAAAAwAAAAKAAAAAAsA#####wEAAAAAAQAAACoAAAAMAAAACgAAAAAPAP####8AAAA1AAAANwAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAA5AAAAEAD#####AAAAAAAQAAFGAEAAAAAAAAAAwDgAAAAAAAAFAAIAAAA5AAAADwD#####AAAANgAAADgAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAPAAAABAA#####wAAAAAAEAABRwDALgAAAAAAAMA2AAAAAAAABQACAAAAPAAAAAUA#####wAAAAAAEAAAAQABAAAALQAAADsAAAAFAP####8AAAAAABAAAAEAAQAAADsAAAA+AAAABQD#####AAAAAAAQAAABAAEAAAA+AAAAKgAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAALQAAADsAAAADAAAAAEIAAAAAABAAAAEAAQAAAC0BP#AAAAAAAAAAAAAEAAAAAEIAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAEP#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQAAAABCAAJhbgAAAEQAAAAtAAAAOwAAAAgBAAAAQgAAAC0AAAA7AAAABgAAAABCAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAALQAAADv#####AAAAAQANQ1BvaW50UHJvamV0ZQAAAABCAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAAA7AAAAQwAAABYAAAAAQgACbWEAAABEAAAALQAAAEj#####AAAAAQAOQ1Rlc3RFeGlzdGVuY2UAAAAAQgADdG1hAAAASQAAABEBAAAAQgAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAEcQAAAAAAABAAAAAv####8AAAABAA1DRm9uY3Rpb24zVmFyAAAAAAwAAABK#####wAAAAEACkNPcGVyYXRpb24AAAAADAAAAEUAAAAMAAAASQAAAAwAAABFAAAAAyBjbQEAAABGAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAALQAAADsAAAA+AAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAOwAAAD4AAAAqAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAPgAAACoAAAAtAAAAFQD#####AAAA#wACAAAAAUAwAAAAAAAAAAAAKgAAAC0AAAA7AAAAAgD#####AAAAAAAQAAFJAEAIAAAAAAAAAAAAAAAAAAAFAAFAbkAAAAAAAEB5kAAAAAAAAAAACgD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAABAAAAAgAAAAIAAAAMAAAAUAAAAAsAAAAAUQEAAAAAAQAAAFAAAAAMAAAADAAAAAANAQAAAFEAAAAAABAAAUoAwAgAAAAAAADAOgAAAAAAAAUAAT##e1lPr88TAAAAUgAAAAUBAAAAUQAAAAAAEAAAAQABAAAAUAAAAFMAAAASAP####8BAAAAABAAAAEAAQAAAFMAAABUAAAACwD#####AQAAAAABAAAAUwAAAAwAAAALAAAAAA8A#####wAAAFUAAABWAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAFcAAAAQAP####8AAAAAABAAAUsAwDIAAAAAAADACAAAAAAAAAUAAgAAAFcAAAAFAP####8AAAAAABAAAAEAAQAAAFMAAABZAAAABQD#####AAAAAAAQAAABAAEAAABZAAAAUAAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAUwAAAFkAAAADAAAAAFwAAAAAABAAAAEAAQAAAFMBP#AAAAAAAAAAAAAEAAAAAFwAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAF0AAAAWAAAAAFwAAmFuAAAAXgAAAFMAAABZAAAACAEAAABcAAAAUwAAAFkAAAAGAAAAAFwAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABTAAAAWQAAABcAAAAAXAAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAWQAAAF0AAAAWAAAAAFwAAm1hAAAAXgAAAFMAAABiAAAAGAAAAABcAAN0bWEAAABjAAAAEQEAAABcAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAYRAAAAAAAAEAAAACAAAAGQAAAAAMAAAAZAAAABoAAAAADAAAAF8AAAAMAAAAYwAAAAwAAABfAAAAAyBjbQEAAABgAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABZAAAAUAAAAAMAAAAAZgAAAAAAEAAAAQABAAAAWQE#8AAAAAAAAAAAAAQAAAAAZgAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAZwAAABYAAAAAZgACYW4AAABoAAAAWQAAAFAAAAAIAQAAAGYAAABZAAAAUAAAAAYAAAAAZgAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFkAAABQAAAAFwAAAABmAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAAZwAAABYAAAAAZgACbWEAAABoAAAAWQAAAGwAAAAYAAAAAGYAA3RtYQAAAG0AAAARAQAAAGYAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAABrEAAAAAAAAQAAAAIAAAAZAAAAAAwAAABuAAAAGgAAAAAMAAAAaQAAAAwAAABtAAAADAAAAGkAAAADIGNtAQAAAGoAAAAVAP####8AAAD#AAIAAAABQDAAAAAAAAAAAABQAAAAUwAAAFn#####AAAAAQAOQ01hcnF1ZVNlZ21lbnQA#####wAAAP8AAgEAAAARAAAAGwD#####AAAA#wACAQAAACMAAAAbAP####8AAAD#AAIBAAAAJAAAABsA#####wAAAP8AAgEAAAAlAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABQAAAAUwAAAAMAAAAAdQAAAAAAEAAAAQABAAAAUAE#8AAAAAAAAAAAAAQAAAAAdQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAdgAAABYAAAAAdQACYW4AAAB3AAAAUAAAAFMAAAAIAQAAAHUAAABQAAAAUwAAAAYAAAAAdQAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFAAAABTAAAAFwAAAAB1AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABTAAAAdgAAABYAAAAAdQACbWEAAAB3AAAAUAAAAHsAAAAYAAAAAHUAA3RtYQAAAHwAAAARAQAAAHUAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB6EAAAAAAAAQAAAAIAAAAZAAAAAAwAAAB9AAAAGgAAAAAMAAAAeAAAAAwAAAB8AAAADAAAAHgAAAADIGNtAQAAAHkAAAAH##########8="
		let c2 = Math.sqrt(a*a+b*b)
		let pIJK = Algebrite.eval(a+b+c2).d.toFixed(1)

		texte_corr = `$\\mathcal{P}_{ABCD}=${c}~\\text{cm}+${c}~\\text{cm}+${c}~\\text{cm}+${c}~\\text{cm}=${4*c}~\\text{cm}$`
		texte_corr += `<br>$\\mathcal{A}_{ABCD}=${c}~\\text{cm}\\times${c}~\\text{cm}=${c*c}~\\text{cm}^2$`
		texte_corr += `<br>$\\mathcal{P}_{EFGH}=${L}~\\text{cm}+${l}~\\text{cm}+${L}~\\text{cm}+${l}~\\text{cm}=${2*L+2*l}~\\text{cm}$`
		texte_corr += `<br>$\\mathcal{A}_{EFGH}=${L}~\\text{cm}\\times${l}~\\text{cm}=${L*l}~\\text{cm}^2$`
		texte_corr += `<br>$\\mathcal{P}_{IJK}=${a}~\\text{cm}+${b}~\\text{cm}+${tex_nombre(c2.toFixed(1))}~\\text{cm}=${tex_nombre(pIJK)}~\\text{cm}$`
		texte_corr += `<br>$\\mathcal{A}_{IJK}=${a}~\\text{cm}\\times${b}~\\text{cm}\\div2=${tex_nombre(Algebrite.eval(a*b/2))}~\\text{cm}^2$`
		

		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c", "${c}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L", "${L}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "l", "${l}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "a", "${a}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "b", "${b}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu(this);		
	}

// 	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
// 2 : Aires\n3 : Périmètres et aires"];

}





/**
* Deux figures composés de rectangles et de triangles sont tracés.
*
* Il faut calculer le périmètre et l'aire par addition ou soustraction d'aires
*
* Pas de version LaTeX
*
* Un seul type de figure pour l'instant.
* @Auteur Rémi Angot
*/
function Perimetre_ou_aire_de_figures_composees(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Périmètres et aires de figures composées"
	this.consigne = "Calculer le périmètre et l'aire des 2 figures suivantes"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [500,500];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let L1 = randint(4,7)
		let l1 = randint(2,4)
		let L2 = randint(2,4)
		if (L1==l1) {l1--} // pour que le rectangle ne soit pas un carré
		let c = randint(4,7)
		let h = randint(2,c-1)
		let codeBase64 ="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAAKj#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACTDEAATUAAAABQBQAAAAAAAAAAAAJAP####8AAmwxAAEzAAAAAUAIAAAAAAAAAAAACQD#####AAJMMgABMwAAAAFACAAAAAAAAAAAAAIA#####wAAAAABEAABQwBACAAAAAAAAAAAAAAAAAAABQABQFKgAAAAAABAaW4UeuFHrv####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####ABtTZWdtZW50IGRlIGxvbmd1ZXVyIGRvbm7DqWUAAAAGAAAAAwAAAAIAAAAIAAAAC#####8AAAACAAlDQ2VyY2xlT1IAAAAADAEAAAAAAQAAAAv#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAACAD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAQAAAAwAAAAAARAAAUQAQAgAAAAAAAAAAAAAAAAAAAUAAT++v3IzOUsjAAAADQAAAAUBAAAADAAAAAAAEAAAAQABAAAACwAAAA4AAAAGAAAAAAwBAAAAABAAAAEFAAAAAAsAAAAO#####wAAAAEAC0NNZWRpYXRyaWNlAAAAAAwBAAAAABAAAAEAAQAAAAsAAAAOAAAACwAAAAAMAQAAAAABAAAAEAAAAAFAMAAAAAAAAAH#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQAAAAAMAAAAEQAAABL#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAAAAAAMAQAAAAAQAAABBQABAAAAE#####8AAAABAA9DVmFsZXVyQWZmaWNoZWUBAAAADAAAAAABAAAAFBAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAEAAAAI#####wAAAAEAFkNEcm9pdGVQZXJwZW5kaWN1bGFpcmUA#####wEAAAAAEAAAAQABAAAACwAAAA8AAAASAP####8BAAAAABAAAAEAAQAAAA4AAAAPAAAACwD#####AQAAAAABAAAACwAAAAwAAAAJAAAAAAsA#####wEAAAAAAQAAAA4AAAAMAAAACQAAAAAPAP####8AAAAWAAAAGAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAaAAAAEAD#####AQAAAAAQAAFCAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAaAAAADwD#####AAAAFwAAABkAAAAQAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAHQAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAdAAAACwD#####AQAAAAABAAAAHwAAAAwAAAAKAP####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAHAAAAB8AAAAPAP####8AAAAhAAAAIAAAABAA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAiAAAAEAD#####AQAAAAAQAAFBAAAAAAAAAAAAQAgAAAAAAAAFAAEAAAAi#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAABAAAABgAAAA4AAAALAAAAHAAAAB8AAAAkAAAADgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAJAAAABwAAAAOAAAAACYBAAAAABAAAAEAAQAAACQAAAAcAAAABgAAAAAmAQAAAAAQAAABBQAAAAAkAAAAHAAAAAsAAAAAJgEAAAAAAQAAACgAAAABQDAAAAAAAAABAAAADwAAAAAmAAAAJwAAACkAAAAQAAAAACYBAAAAABAAAAEFAAEAAAAqAAAACAEAAAAmAAAAJAAAABwAAAARAQAAACYAAAAAAQAAACsRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAALAAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAIAAAACAAAAHAAAAAsAAAAOAAAAAC4BAAAAABAAAAEAAQAAABwAAAALAAAABgAAAAAuAQAAAAAQAAABBQAAAAAcAAAACwAAAAsAAAAALgEAAAAAAQAAADAAAAABQDAAAAAAAAABAAAADwAAAAAuAAAALwAAADEAAAAQAAAAAC4BAAAAABAAAAEFAAEAAAAyAAAACAEAAAAuAAAAHAAAAAsAAAARAQAAAC4AAAAAAQAAADMRAAAAAAABAAAAAQAAAAEAAAAAAAAAAAAAAAABAAAANP####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAADgAAAAsAAAAcAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAACwAAABwAAAAkAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAHAAAAB8AAAAOAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAACwAAAA4AAAAfAAAABQD#####AAAAAAAQAAABAQEAAAAfAAAADgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAEAAAACAAAADgAAACQAAAAOAAAAADsBAAAAABAAAAEAAQAAAA4AAAAkAAAABgAAAAA7AQAAAAAQAAABBQAAAAAOAAAAJAAAAAsAAAAAOwEAAAAAAQAAAD0AAAABQDAAAAAAAAABAAAADwAAAAA7AAAAPAAAAD4AAAAQAAAAADsBAAAAABAAAAEFAAEAAAA#AAAACAEAAAA7AAAADgAAACQAAAAJAP####8AAWMAATcAAAABQBwAAAAAAAAAAAACAP####8AAAAAABAAAABACAAAAAAAAAAAAAAAAAAABQABQGlwAAAAAABAfecKPXCj1wAAAAoA#####wAbU2VnbWVudCBkZSBsb25ndWV1ciBkb25uw6llAAAABgAAAAMAAAACAAAAQgAAAEMAAAALAAAAAEQBAAAAAAEAAABDAAAADAAAAEIAAAAADQEAAABEAAAAAAAQAAAAQAgAAAAAAAAAAAAAAAAAAAUAAT#LiKDqIUKnAAAARQAAAAUBAAAARAAAAAAAEAAAAQEBAAAAQwAAAEYAAAAGAAAAAEQBAAAAABAAAAEFAAAAAEMAAABGAAAADgAAAABEAQAAAAAQAAABAAEAAABDAAAARgAAAAsAAAAARAEAAAAAAQAAAEgAAAABQDAAAAAAAAABAAAADwAAAABEAAAASQAAAEoAAAAQAAAAAEQBAAAAABAAAAEFAAEAAABLAAAAEQEAAABEAAAAAAEAAABMEAAAAAAAAQAAAAEAAAABAAAAAAAAAAAAAAAAAQAAAEIAAAAKAP####8ADUNhcnLDqSBkaXJlY3QAAAAFAAAAAgAAAAIAAABDAAAARgAAAAUAAAAATgEAAAAAEAAAAQABAAAAQwAAAEYAAAASAAAAAE4AAAAAABAAAAEBAQAAAEMAAABP#####wAAAAEACUNDZXJjbGVPQQAAAABOAAAAAAEBAAAAQwAAAEYAAAAPAAAAAE4AAABQAAAAUQAAABABAAAATgEAAAAAEAABSAEFAAIAAABS#####wAAAAEADENUcmFuc2xhdGlvbgAAAABOAAAAQwAAAEb#####AAAAAQALQ1BvaW50SW1hZ2UBAAAATgEAAAAAEAABRwEFAAAAAFMAAABUAAAABQD#####AAAAAAAQAAABAQEAAABGAAAAVQAAAAUA#####wAAAAAAEAAAAQEBAAAAVQAAAFMAAAAFAP####8AAAAAABAAAAEBAQAAAFMAAABDAAAAFAD#####AQAAAAEBAAAABQAAAEMAAABGAAAAVQAAAFMAAABDAAAACQD#####AAFyAAEyAAAAAUAAAAAAAAAAAAAACwD#####AQAAAAEBAAAAUwAAAAwAAABaAAAAAA8A#####wAAAFcAAABbAAAAEAD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAFwAAAAQAP####8BAAAAABAAAUYAAAAAAAAAAABACAAAAAAAAAUAAgAAAFwAAAASAP####8BAAAAABAAAAEBAQAAAF4AAABXAAAACQD#####AAFoAAE0AAAAAUAQAAAAAAAAAAAACwD#####AQAAAAEBAAAAXgAAAAwAAABgAAAAAA8A#####wAAAF8AAABhAAAAEAD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAGIAAAAQAP####8BAAAAABAAAUUAAAAAAAAAAABACAAAAAAAAAUAAgAAAGIAAAAUAP####8AAAAAAAEAAAAGAAAAVQAAAEYAAABDAAAAUwAAAGQAAABVAAAABQD#####AAAAAAAQAAABAQEAAABeAAAAZP####8AAAABAA5DTWFycXVlU2VnbWVudAD#####AAAAAAABAQAAAFYAAAAZAP####8AAAAAAAEBAAAARwAAABkA#####wAAAAAAAQEAAABYAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAVQAAAEYAAABDAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAARgAAAEMAAABTAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAUwAAAFUAAABGAAAAFQD#####AAAAAAABAAAAAUAwAAAAAAAAAAAAVQAAAFMAAABDAAAACgD#####ABJNZXN1cmUgZGUgbG9uZ3VldXIAAAAFAAAAAQAAAAIAAABkAAAAXgAAAA4AAAAAbgEAAAAAEAAAAQABAAAAZAAAAF4AAAAGAAAAAG4BAAAAABAAAAEFAAAAAGQAAABeAAAACwAAAABuAQAAAAABAAAAcAAAAAFAMAAAAAAAAAEAAAAPAAAAAG4AAABvAAAAcQAAABAAAAAAbgEAAAAAEAAAAQUAAQAAAHIAAAAIAQAAAG4AAABkAAAAXgAAAAoA#####wASTWVzdXJlIGRlIGxvbmd1ZXVyAAAABQAAAAEAAAACAAAAVQAAAGQAAAAOAAAAAHUBAAAAABAAAAEAAQAAAFUAAABkAAAABgAAAAB1AQAAAAAQAAABBQAAAABVAAAAZAAAAAsAAAAAdQEAAAAAAQAAAHcAAAABQDAAAAAAAAABAAAADwAAAAB1AAAAdgAAAHgAAAAQAAAAAHUBAAAAABAAAAEFAAEAAAB5AAAACAEAAAB1AAAAVQAAAGQAAAAKAP####8AEk1lc3VyZSBkZSBsb25ndWV1cgAAAAUAAAABAAAAAgAAAFMAAABkAAAADgAAAAB8AQAAAAAQAAABAAEAAABTAAAAZAAAAAYAAAAAfAEAAAAAEAAAAQUAAAAAUwAAAGQAAAALAAAAAHwBAAAAAAEAAAB+AAAAAUAwAAAAAAAAAQAAAA8AAAAAfAAAAH0AAAB#AAAAEAAAAAB8AQAAAAAQAAABBQABAAAAgAAAAAgBAAAAfAAAAFMAAABkAAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAQAAAAMAAACCAAAAUwAAAGQAAAADAAAAAIMAAAAAABAAAAEAAQAAAFMBP#AAAAAAAAAAAAAEAAAAAIMAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAIT#####AAAAAgATQ01lc3VyZUFuZ2xlT3JpZW50ZQAAAACDAAJhbgAAAIUAAABTAAAAZAAAAAYAAAAAgwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFMAAABk#####wAAAAEADUNQb2ludFByb2pldGUAAAAAgwAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAZAAAAIQAAAAaAAAAAIMAAm1hAAAAhQAAAFMAAACI#####wAAAAEADkNUZXN0RXhpc3RlbmNlAAAAAIMAA3RtYQAAAIkAAAARAQAAAIMAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACHEAAAAAAAAQAAAAL#####AAAAAQANQ0ZvbmN0aW9uM1ZhcgAAAAAMAAAAiv####8AAAABAApDT3BlcmF0aW9uAAAAAAwAAACGAAAADAAAAIkAAAAMAAAAhgAAAAABAAAAggAAAAoA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAEAAAADAAAAewAAAGQAAABVAAAAAwAAAACMAAAAAAAQAAABAAEAAABkAT#wAAAAAAAAAAAABAAAAACMAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAACNAAAAGgAAAACMAAJhbgAAAI4AAABkAAAAVQAAAAYAAAAAjAAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAGQAAABVAAAAGwAAAACMAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABVAAAAjQAAABoAAAAAjAACbWEAAACOAAAAZAAAAJEAAAAcAAAAAIwAA3RtYQAAAJIAAAARAQAAAIwAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACQEAAAAAAAAQAAAAIAAAAdAAAAAAwAAACTAAAAHgAAAAAMAAAAjwAAAAwAAACSAAAADAAAAI8AAAAAAQAAAHsAAAAKAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAABAAAAAwAAAHQAAABkAAAAXgAAAAMAAAAAlQAAAAAAEAAAAQABAAAAZAE#8AAAAAAAAAAAAAQAAAAAlQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAlgAAABoAAAAAlQACYW4AAACXAAAAZAAAAF4AAAAGAAAAAJUAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABkAAAAXgAAABsAAAAAlQAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAXgAAAJYAAAAaAAAAAJUAAm1hAAAAlwAAAGQAAACaAAAAHAAAAACVAAN0bWEAAACbAAAAEQEAAACVAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAmRAAAAAAAAEAAAACAAAAHQAAAAAMAAAAnAAAAB4AAAAADAAAAJgAAAAMAAAAmwAAAAwAAACYAAAAAAEAAAB0AAAACgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAQAAAAMAAABBAAAADgAAACQAAAADAAAAAJ4AAAAAABAAAAEAAQAAAA4BP#AAAAAAAAAAAAAEAAAAAJ4AAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAJ8AAAAaAAAAAJ4AAmFuAAAAoAAAAA4AAAAkAAAABgAAAACeAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAACQAAAAbAAAAAJ4AAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAACQAAACfAAAAGgAAAACeAAJtYQAAAKAAAAAOAAAAowAAABwAAAAAngADdG1hAAAApAAAABEBAAAAngAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAKIQAAAAAAABAAAAAgAAAB0AAAAADAAAAKUAAAAeAAAAAAwAAAChAAAADAAAAKQAAAAMAAAAoQAAAAABAAAAQQAAABkA#####wAAAAAAAQEAAABXAAAAB###########"
		let DA = arrondi(Math.sqrt(L2**2+l1**2),1)
		let t1 = arrondi(Math.sqrt(4+h**2),1) // longueur d'un côté du triangle
		let t2 = arrondi(Math.sqrt((c-2)**2+h**2),1) // longueur de l'autre côté d'un triangle
		let texte_corr = ""
		texte_corr += `La première figure est composée d'un rectangle de ${L1} cm par ${l1} cm`
		texte_corr += ` et d'un triangle rectangle dont les côtés de l'angle droit mesurent ${L2} cm et ${l1} cm.<br>`
		texte_corr += `$\\mathcal{P}_{1}=${L1+L2}+${tex_nombre(DA)}+${L1}+${l1}=${tex_nombrec(L1+L2+DA+L1+l1)}$ cm.<br>`
		texte_corr += `$\\mathcal{A}_{1}=${L1}\\times${l1}+${L2}\\times${l1}\\div2=${L1*l1}+${calcul((L2*l1)/2)}=${calcul(L1*l1+(L2*l1)/2)}~${tex_texte(' cm')}^2$.`
		texte_corr += '<br><br>'
		texte_corr += `La deuxième figure est un carré de côté ${c} cm auquel il faut enlever un triangle de ${c} cm de base et ${h} cm de hauteur.<br>`
		texte_corr += `$\\mathcal{P}_{2}=${c}+${c}+${c}+${tex_nombre(t1)}+${tex_nombre(t2)}=${tex_nombrec(3*c+t1+t2)}$ cm<br>`
		texte_corr += `$\\mathcal{A}_{2}=${c}\\times${c}-${c}\\times${h}\\div2=${c*c}-${c*h/2}=${tex_nombrec(c**2-c*h/2)}~${tex_texte(' cm')}^2$.`
		
		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L1", "${L1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "l1", "${l1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "L2", "${L2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c", "${c}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h", "${h}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);		
	}
}


/**
* Citer des formules de périmètre, des formules d'aire ou la définition de π
* @Auteur Rémi Angot
*/
function Connaitre_formules_de_perimetre_et_aires(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Connaitre le cours sur le périmètre et l'aire";
	this.consigne = "Calculer";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_type_de_questions = combinaison_listes(['pi','prectangle','pcarre','acarre','arectangle','pcercle','acercle','atrianglerectangle','atriangle'],this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			switch (liste_type_de_questions[i]){
				case 'pi':
					texte = "Rappeler la définition du nombre $\\pi$."
					texte_corr = "$\\pi$ est la longueur d'un cercle de diamètre 1."
				break
				case 'prectangle':
					texte = "Donner une formule du périmètre du rectangle."
					texte_corr = "$\\mathcal{P}_{\\text{rectangle}}=(L+l)\\times2=L\\times2+l\\times2=L+l+L=l$<br><br>"
					texte_corr += "Avec $L$ la longueur et $l$ la largeur du rectangle."
				break
				case 'pcarre':
					texte = "Donner une formule du périmètre du carré."
					texte_corr = "$\\mathcal{P}_{\\text{carré}}=c\\times4=c+c+c+c$<br><br>"
					texte_corr += "Avec $c$ la longueur du côté du carré."
				break
				case 'arectangle':
					texte = "Donner une formule de l'aire du rectangle."
					texte_corr = "$\\mathcal{A}_{\\text{rectangle}}=L\\times l$<br><br>"
					texte_corr += "Avec $L$ la longueur et $l$ la largeur du rectangle."
				break
				case 'acarre':
					texte = "Donner une formule de l'aire du carré."
					texte_corr = "$\\mathcal{A}_{\\text{carré}}=c\\times c=c^2$<br><br>"
					texte_corr += "Avec $c$ la longueur du côté du carré."
				break
				case 'atrianglerectangle':
					texte = "Donner une formule de l'aire du triangle rectangle."
					texte_corr = "$\\mathcal{A}_{\\text{triangle rectangle}}=a\\times b \\div2=\\dfrac{a\\times b}{2}$<br><br>"
					texte_corr += "Avec $a$ et $b$ les longueurs des côtés de l'angle droit."
				break
				case 'atriangle':
					texte = "Donner une formule de l'aire d'un triangle quelconque."
					texte_corr = "$\\mathcal{A}_{\\text{triangle rectangle}}=b\\times h \\div2=\\dfrac{b\\times h}{2}$<br><br>"
					texte_corr += "Avec $b$ la longueur d'un côté et $h$ la longueur de la hauteur relative à ce côté."
				break
				case 'pcercle':
					texte = "Donner une formule de la longueur d'un cercle (aussi appelée circonférence)."
					texte_corr = "$\\mathcal{P}_{\\text{cercle}}=D\\times \\pi = 2\\times R \\times \\pi = 2\\pi{}R$<br><br>"
					texte_corr += "Avec $D$ le diamètre et $R$ le rayon de ce cercle."
				break
				case 'acercle':
					texte = "Donner une formule de l'aire d'un disque."
					texte_corr = "$\\mathcal{A}_{\\text{disque}}=R\\times R\\times\\pi=\\pi R^2$<br><br>"
					texte_corr += "Avec $R$ le rayon de ce disque."
				break

			}
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}


/**
* Compléter des égalités sur les nombres décimaux
* * n/100 = .../10 + .../100
* * n/100 = .../100 + .../10
* * .../100 = u+ d/10 + c/100
* * u = .../10
* * u = .../100
* * n/10 = ... + .../10 + .../100
* @Auteur Rémi Angot
*/
function Exercice_differentes_ecritures_nombres_decimaux(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Différentes écritures des nombres décimaux"
	this.consigne = "Compléter l'égalité puis donner l'écriture décimale."
	this.spacing = 2;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			let u = randint(2,9); //chiffre des unités
			let d = randint(1,9); //chiffre des dixièmes
			let c = randint(1,9); //chiffre des centièmes
			let n = 100*u+10*d+c;
			let ecriture_decimale;
			switch (type_de_questions){
				case 1 : // n/100 = .../10 + .../100
					ecriture_decimale = tex_nombre(calcul(u+d/10+c/100));
					texte = `$${tex_fraction(n,'100')}=\\ldots\\ldots+${tex_fraction('',10)}+${tex_fraction('',100)}=\\ldots$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}=${ecriture_decimale}$`;

					break ;
				case 2 : // n/100 = .../100 + .../10
					ecriture_decimale = tex_nombre(calcul(u+d/10+c/100))
					texte = `$${tex_fraction(n,'100')}=\\ldots\\ldots+${tex_fraction('',100)}+${tex_fraction('',10)}=\\ldots$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(c,100)}+${tex_fraction(d,10)}=${ecriture_decimale}$`;
					break ;
				case 3 : // .../100 = u+ d/10 + c/100
					ecriture_decimale = tex_nombre(calcul(u+d/10+c/100))
					texte = `$${tex_fraction('','100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}=\\ldots$`;
					texte_corr = `$${tex_fraction(n,'100')}=${u}+${tex_fraction(d,'10')}+${tex_fraction(c,'100')}=${ecriture_decimale}$`;
					break ;
				case 4 : // u = .../10
					texte = `$${u}=${tex_fraction('','10')}$`;
					texte_corr = `$${u}=${tex_fraction(10*u,'10')}$`;
					break ;
				case 5 : // u = .../100
					texte = `$${u}=${tex_fraction('','100')}$`;
					texte_corr = `$${u}=${tex_fraction(100*u,'10')}$`;
					break ;
				case 6 : // n/10 = ... + .../10 + .../100
					ecriture_decimale = tex_nombre(calcul(n/10))
					texte = `$${tex_fraction(n,10)}=\\ldots\\ldots+${tex_fraction('',10)}+${tex_fraction('',100)}=\\ldots$`;
					texte_corr = `$${tex_fraction(n,10)}=${u*10+d}+${tex_fraction(c,10)}+${tex_fraction(0,100)}=${ecriture_decimale}$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}


/**
* Additions, soustractions et multiplications posées de nombres entiers
*
* * abcd +efg
* * abc0-efg
* * 1abc-def
* * abc*d0e tables de 2 à 5
* * abc*de tables de 5 à 9
* @Auteur Rémi Angot
*/
function Additions_soustractions_multiplications_posees(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Additions, soustractions et multiplications posées de nombres entiers"
	this.consigne = "Poser et effectuer les calculs suivants."
	this.spacing = 2;
	sortie_html ? this.spacing_corr=2 : this.spacing_corr = 1; //Important sinon les opérations posées ne sont pas jolies
	this.nb_questions = 5;
	// this.pas_de_version_HMTL=true;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5]
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		if (this.nb_questions==3) {liste_type_de_questions = [1,2,5]}
		if (this.nb_questions==4) {liste_type_de_questions = [1,2,4,5]}

		for (let i = 0, texte, texte_corr, cpt=0, a, b, c, d,e ,f, g, x, y; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // abcd +efg
					a = randint(1,9)*10000+randint(5,9)*1000+randint(5,9)*100+randint(7,9)*10+randint(1,9)
					b = randint(5,9)*100+randint(7,9)*10+randint(1,9)
					texte = `$${tex_nombre(a)}+${b}$`;
					!sortie_html ? texte_corr = `$\\opadd{${a}}{${b}}$` : texte_corr = `$${tex_nombre(a)}+${b}=${tex_nombre(a+b)}$`;
					break ;
				case 2 : // abc0-efg
					a = randint(1,9)
					b = randint(1,9)
					c = randint(1,9)
					e = randint(b,9)
					f = randint(c,9)
					g = randint(2,9)
					x = a*1000+b*100+c*10
					y = e*100+f*10+g
					texte = `$${tex_nombre(x)}-${y}$`;
					!sortie_html ? texte_corr = `$\\opsub{${x}}{${y}}$` : texte_corr = `$${tex_nombre(x)}+${y}=${tex_nombre(x+y)}$`;
					break ;
				case 3 : // 1abc-def
					a = randint(1,9)
					b = randint(1,9)
					c = randint(1,9)
					d = randint(a,9)
					e = randint(1,9)
					f = randint(c,9)
					x = 1000+a*100+b*10+c
					y = d*100+e*10+f
					texte = `$${tex_nombre(x)}-${y}$`;
					!sortie_html ? texte_corr = `$\\opsub{${x}}{${y}}$` : texte_corr=`$${tex_nombre(x)}-${y}=${tex_nombre(x-y)}$`;
					break ;
				case 4 : // abc*d0e tables de 2 à 5
					a = randint(2,5)
					b = randint(2,5)
					c = randint(2,5)
					d = randint(2,5)
					e = randint(2,5)
					x = 100*a+10*b+c
					y = d*100+e
					texte = `$${tex_nombre(x)}\\times${y}$`;
					!sortie_html ? texte_corr = `$\\opmul{${x}}{${y}}$` : texte_corr=`$${tex_nombre(x)}\\times${y}=${tex_nombre(x*y)}$`;
					break ;
				case 5 : // abc*de tables de 5 à 9
					a = randint(5,9)
					b = randint(5,9)
					c = randint(5,9)
					d = randint(5,9)
					e = randint(5,9)
					x = 100*a+10*b+c
					y = 10*d+e
					texte = `$${x}\\times${y}$`;
					!sortie_html ? texte_corr = `$\\opmul{${x}}{${y}}$` : texte_corr=`$${tex_nombre(x)}\\times${y}=${tex_nombre(x*y)}$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}


/**
* Additions et soustractions de nombres décimaux
* * xxx-xx,x
* * xxx-xx,xx
* * xxx,x-xxx
* * x0x-xx9,x
* * xxx+xx,x
* * xxx+xx,xx
* * xxx,x+xxx
* * x0x+xx9,x
* @Auteur Rémi Angot
*/
function Additionner_soustraires_decimaux(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Additions et soustractions de nombres décimaux"
	this.consigne = "Poser et effectuer les calculs suivants."
	this.spacing = 2;
	sortie_html ? this.spacing_corr=2 : this.spacing_corr = 1; //Important sinon les opérations posées ne sont pas jolies
	this.nb_questions = 4;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let liste_de_type_d_additions = combinaison_listes([5,6,7,8],this.nb_questions)
		let liste_de_type_de_soustractions = combinaison_listes([1,2,3,4],this.nb_questions)
		let liste_type_de_questions=[]
		for (let i = 0; i < this.nb_questions; i++) {
			if ((i+1)<(this.nb_questions/2)) { // première moitié sont des additions mais si c'est impair on prendra plus de soustractions
				liste_type_de_questions.push(liste_de_type_d_additions[i])
			} else {
				liste_type_de_questions.push(liste_de_type_de_soustractions[i])
			}
		}


		for (let i = 0, texte, texte_corr, cpt=0, a, b, c, d,e ,f, g, x, y; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // xxx-xx,x
					a = randint(1,4)*100+randint(2,5)*10+randint(1,9)
					b = calcul(randint(5,9)*10+randint(6,9)+randint(1,9)/10)
					texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(a-b)}$` : texte_corr =`$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 2 : // xxx-xx,xx
					a = randint(1,4)*100+randint(2,5)*10+randint(1,9)
					b = calcul(randint(5,9)*10+randint(6,9)+randint(1,9)/10+randint(1,9)/100)
					texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(a-b)}$` : texte_corr =`$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 3 : // xxx,x-xxx
					a = calcul(randint(5,9)*100+randint(2,5)*10+randint(1,9)+randint(1,9)/10)
					b = randint(1,4)*100+randint(6,9)*10+randint(1,9)
					texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(a-b)}$` : texte_corr =`$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 4 : // x0x-xx9,x
					a = calcul(randint(5,9)*100+randint(1,5))
					b = calcul(randint(1,4)*100+randint(1,9)*10+9+randint(1,9)/10)
					texte = `$${tex_nombre(a)}-${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}-${tex_nombre(b)}=${tex_nombrec(a-b)}$` : texte_corr =`$\\opsub[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 5 : // xxx+xx,x
					a = randint(1,4)*100+randint(2,5)*10+randint(1,9)
					b = calcul(randint(5,9)*10+randint(6,9)+randint(1,9)/10)
					texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(a+b)}$` : texte_corr =`$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 6 : // xxx+xx,xx
					a = randint(1,4)*100+randint(2,5)*10+randint(1,9)
					b = calcul(randint(5,9)*10+randint(6,9)+randint(1,9)/10+randint(1,9)/100)
					texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(a+b)}$` : texte_corr =`$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 7 : // xxx,x+xxx
					a = calcul(randint(5,9)*100+randint(2,5)*10+randint(1,9)+randint(1,9)/10)
					b = randint(1,4)*100+randint(6,9)*10+randint(1,9)
					texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(a+b)}$` : texte_corr =`$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
				case 8 : // x0x+xx9,x
					a = calcul(randint(5,9)*100+randint(1,5))
					b = calcul(randint(1,4)*100+randint(1,9)*10+9+randint(1,9)/10)
					texte = `$${tex_nombre(a)}+${tex_nombre(b)}$`;
					sortie_html ? texte_corr = `$${tex_nombre(a)}+${tex_nombre(b)}=${tex_nombrec(a+b)}$` : texte_corr =`$\\opadd[decimalsepsymbol={,}]{${a}}{${b}}$`;
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
}

/**
* Poser et effectuer les divisions euclidiennes suivantes puis donner l'égalité fondamentale correspondante.
* 
* Niveau de difficulté 1 :
* * division par 2, 3 , 4 ou 5
* * division par 6 à 9
* * un 0 dans le quotient
*
* Niveau de difficulté 2 : 
* * division par 11, 12, 15, 25
* * division par 13,14,21,22,23 ou 24 et un 0 dans le quotient
* * division par un multiple de 10 et un 0 dans le quotient
* @Auteur Rémi Angot
*/
function Divisions_euclidiennes(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Divisions euclidiennes"
	this.consigne = "Poser et effectuer les divisions euclidiennes suivantes puis donner l'égalité fondamentale correspondante."
	this.spacing = 2;
	sortie_html ? this.spacing_corr=2 : this.spacing_corr = 1; //Important sinon opidiv n'est pas joli
	this.nb_questions = 4;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		this.sup==1 ? type_de_questions_disponibles = [1,2,2,3] : type_de_questions_disponibles = [4,4,5,6]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0, a, b, q, r; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // division par 2, 3 , 4 ou 5
					q = randint(2,5)*100+randint(2,5)*10+randint(2,5)
					b = randint(2,5)
					break ;
				case 2 : // division par 6 à 9
					q = randint(5,9)*100+randint(2,5)*10+randint(5,9)
					b = randint(6,9)
					break ;
				case 3 : // un 0 dans le quotient
					if (randint(1,2)==1) {
						q = randint(2,9)*1000+randint(2,9)*100+randint(2,9)
					} else {
						q = randint(2,9)*1000+randint(2,9)*10+randint(2,9)
					}
					b = randint(7,9)
					break ;
				case 4 : // division par 11, 12, 15, 25
					q = randint(1,5)*100+randint(1,5)*10+randint(1,5)
					b = choice([11,12,15,25])
					break ;
				case 5 : // division par 13,14,21,22,23 ou 24 et un 0 dans le quotient
					q = randint(1,5)*1000+randint(6,9)*100+randint(1,5)
					b = choice([11,12,13,14,21,22,23,24])
					break ;
				case 6 : // division par un multiple de 10 et un 0 dans le quotient
					q = randint(6,9)*1000+randint(6,9)*10+randint(1,5)
					b = randint(2,9)*10
					break ;
			}
			r = randint(0,b-1) //reste inférieur au diviseur
			a = b*q+r
			texte = `$${tex_nombre(a)}\\div${b}$`;
			if (r==0) {
				sortie_html ? texte_corr = `$${tex_nombre(a)}\\div${b}=${q}$` : texte_corr = `$\\opidiv[voperation=top]{${a}}{${b}}$\\\\\\\\$${tex_nombre(a)}\\div${b}=${q}$`;

			} else {
				sortie_html ? texte_corr = `$${tex_nombre(a)}=${b}\\times${q}+${r}$` : texte_corr = `$\\opidiv[voperation=top]{${a}}{${b}}$\\\\\\\\$${tex_nombre(a)}=${b}\\times${q}+${r}$`;
			}
					
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Quotient inférieur à 10\n2: Quotient à 2 chiffres'] 
}




/**
* Effectuer les divisions décimales suivantes et donner la valeur exacte de leur quotient.
* 
* Niveau de difficulté 1 : 
* * entier divisé par 4 quotient : xx,25 ou xx,75
* * entier divisé par 8 quotient : x,125 ou x,375 ou x,625 ou x,875
* * entier divisé par 6 quotient : xxx,5
* * quotient xx,xx division par 2, 3 , 4 ou 5
* * quotient x,xxx division par 6 à 9
* * un 0 dans le quotient
*
* Niveau de difficulté 2 : division par 3, 7 ou 9
* @Auteur Rémi Angot
*/
function Division_decimale(){ 
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Divisions décimales"
	this.consigne = "Effectuer les divisions décimales suivantes et donner la valeur exacte de leur quotient."
	this.spacing = 2;
	sortie_html ? this.spacing_corr=2 : this.spacing_corr = 1; //Important sinon opdiv n'est pas joli
	this.nb_questions = 4;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		this.sup==1 ? type_de_questions_disponibles = [choice([1,2,3]),4,5,6] : type_de_questions_disponibles = [7,8,9]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0, a, b, q, r; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // entier divisé par 4 quotient : xx,25 ou xx,75
					b = 4
					a = (randint(2,9)*10+randint(2,9))*4+choice([1,3])
					q = calcul(a/b)
					break ;
				case 2 : // entier divisé par 8 quotient : x,125 ou x,375 ou x,625 ou x,875
					b = 8
					a = randint(2,9)*8+choice([1,3,5,7])
					q = calcul(a/b)
					break ;
				case 3 : // entier divisé par 6 quotient : xxx,5
					b = 6
					q = calcul(randint(2,9)*100+randint(2,9)*10+randint(2,9)+0.5)
					a = q*6
					break ;
				case 4 : // quotient xx,xx division par 2, 3 , 4 ou 5
					q = calcul(randint(2,5)*10+randint(2,5)+randint(2,5)/10+randint(2,5)/100)
					b = randint(2,5)
					a = calcul(b*q)
					break ;
				case 5 : // quotient x,xxx division par 6 à 9
					q = calcul(randint(6,9)+randint(5,9)/10+randint(6,9)/100+randint(6,9)/1000)
					b = randint(6,9)
					a= calcul(b*q)
					break ;
				case 6 : // un 0 dans le quotient
					if (randint(1,2)==1) { //x0x,x
						q = calcul(randint(2,9)*100+randint(2,9)+randint(2,9)/10)
					} else { //xx0,x
						q = calcul(randint(2,9)*100+randint(2,9)*10+randint(2,9)/10)
					}
					b = randint(7,9)
					a = calcul(b*q)
					break ;
				case 7 : // division par 7
					a = randint(2,9)*7+randint(1,6)
					b = 7
					q = Algebrite.eval(Math.floor(Algebrite.eval(a/b*1000))/1000);
					break ;
				case 8 : // division par 9
					a = calcul(randint(11,19)*9/10+randint(1,8)/10)
					b = 9
					q = Algebrite.eval(Math.floor(Algebrite.eval(a/b*1000))/1000);
					break ;
				case 9 : //division par 3
					a = calcul(randint(11,99)*3/100+randint(1,2)/100)
					b = 3
					q = Algebrite.eval(Math.floor(Algebrite.eval(a/b*1000))/1000);

			}
			if (this.sup==2) {
				this.consigne = "Effectuer les divisions décimales suivantes et donner une valeur approchée de leur quotient au millième près."
			}
			texte = `$${tex_nombre(a)}\\div${b}$`;
			if (this.sup==1) {
				sortie_html ? texte_corr = `$${tex_nombre(a)}\\div${b}=${tex_nombre(q)}$` : texte_corr = `$\\opdiv[displayintermediary=all,voperation=top,decimalsepsymbol={,},shiftdecimalsep=none]{${a}}{${b}}$\\\\\\\\$${tex_nombre(a)}\\div${b}=${tex_nombre(q)}$`;
			} else {
				sortie_html ? texte_corr = `$${tex_nombre(a)}\\div${b}\\approx${tex_nombre(q)}$` : texte_corr = `$\\opdiv[displayintermediary=all,voperation=top,period,decimalsepsymbol={,},shiftdecimalsep=none]{${a}}{${b}}$\\\\\\\\$${tex_nombre(a)}\\div${b}\\approx${tex_nombre(q)}$`;
			}
					
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de questions',2,'1 : Déterminer le quotient exact\n2: Déterminer un quotient approché au millième près'] 
}


/**
* Multiplication de deux nombres décimaux
*
* * xxx * xx,x chiffres inférieurs à 5
* * xx,x * x,x
* * x,xx * x0x
* * 0,xx * x,x
* @Auteur Rémi Angot
*/
function Multiplier_decimaux(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Multiplications posées de nombres décimaux"
	this.consigne = "Poser et effectuer les calculs suivants."
	this.spacing = 2;
	this.spacing_corr = 1; //Important sinon le calcul posé ne fonctionne pas avec opmul et spacing
	this.nb_questions = 4;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c, d,e ,f, g, x, y; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // xxx * xx,x chiffres inférieurs à 5
					a = randint(2,5)*100+randint(2,5)*10+randint(2,5)
					b = calcul(randint(2,5)*10+randint(2,5)+randint(2,5)/10)
					break ;
				case 2 : // xx,x * x,x 
					a = calcul(randint(2,9)*10+randint(2,9)+randint(2,9)/10)
					b = calcul(randint(6,9)+randint(6,9)/10)
					break ;
				case 3 : // x,xx * x0x 
					a = calcul(randint(2,9)+randint(2,9)/10+randint(2,9)/100)
					b = calcul(randint(2,9)*100+randint(2,9))
					break ;
				case 4 : // 0,xx * x,x 
					a = calcul(randint(2,9)/10+randint(2,9)/100)
					b = calcul(randint(2,9)+randint(2,9)/10)
					break ;
			}

			texte = `$${tex_nombre(a)}\\times${tex_nombre(b)}$`;
			sortie_html ? texte_corr = `$${tex_nombre(a)}\\times${tex_nombre(b)}=${tex_nombrec(a*b)}$` : texte_corr =`$\\opmul[decimalsepsymbol={,}]{${a}}{${b}}$`;
					
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
}


/**
* Multiplication d'un nombre décimal dans différentes écritures par 10, 100, 1000
*
*  * Type 1 : écriture décimale
*  * Type 2 : écriture fractionnaire
*  * Type 3 : écritures fractionnaires et décimales
*
*
*  * Sup2 : avec ou sans calculs à trous 
* @Auteur Rémi Angot
*
*/
function Multiplier_decimaux_par_10_100_1000 (){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Multiplications d'un nombre décimal par 10, 100 ou 1 000."
	this.consigne = "Calculer."
	this.sup = 3; 
	this.sup2=false;
	this.spacing = 2;
	this.spacing_corr = 2; 
	this.nb_questions = 8;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles = []
		if (this.sup==1 && !this.sup2) type_de_questions_disponibles = [1,2];
		if (this.sup==1 && this.sup2) type_de_questions_disponibles = [1,2,5,6];
		if (this.sup==2 && !this.sup2) type_de_questions_disponibles = [3,4];
		if (this.sup==2 && this.sup2) type_de_questions_disponibles = [3,4,3,4,7,8,9,10];
		if (this.sup==3 && !this.sup2) type_de_questions_disponibles = [1,2,3,4];
		if (this.sup==3 && this.sup2) type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10];

		if (this.sup2) this.consigne = "Calculer et compléter."

		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_de_facteurs = combinaison_listes([10,100,1000],this.nb_questions)

		for (let i = 0, texte, texte_corr, cpt=0, a, b, den; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : // a,abcd × 10
					a = choice([randint(11,99),randint(100,999)]);
					a = calcul(a/choice([10,100,1000,10000]));
					b = liste_de_facteurs[i];
					texte = `$${tex_nombre(a)}\\times${tex_nombre(b)}$`;
					texte_corr = `$${tex_nombre(a)} \\times ${tex_nombre(b)} = ${tex_nombrec(a*b)}$`;
					break ;
				case 2 : // 10 × a,abcd
					a = choice([randint(11,99),randint(100,999)]);
					a = calcul(a/choice([10,100,1000,10000]));
					b = liste_de_facteurs[i];
					texte = `$${tex_nombre(b)}\\times${tex_nombre(a)}$`;
					texte_corr = `$${tex_nombre(b)} \\times ${tex_nombre(a)} = ${tex_nombrec(a*b)}$`;
					break ;
				case 3 : // abcd/10 × 10
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$${tex_fraction(a,den)}\\times${tex_nombre(b)}$`;
					texte_corr = `$${tex_fraction(a,den)} \\times ${tex_nombre(b)} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
				case 4 : // 10 × abcd/10
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$${tex_nombre(b)}\\times${tex_fraction(a,den)}$`;
					texte_corr = `$${tex_nombre(b)} \\times ${tex_fraction(a,den)} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
				case 5 : // .... × 10 = a,abcd
					a = choice([randint(11,99),randint(100,999)]);
					a = calcul(a/choice([10,100,1000,10000]));
					b = liste_de_facteurs[i];
					texte = `$\\ldots \\times${tex_nombre(b)} = ${tex_nombrec(a*b)}$`;
					texte_corr = `$${mise_en_evidence(tex_nombre(a))} \\times ${tex_nombre(b)} = ${tex_nombrec(a*b)}$`;
					break ;
				case 6 : // 10 × .... = a,abcd
					a = choice([randint(11,99),randint(100,999)]);
					a = calcul(a/choice([10,100,1000,10000]));
					b = liste_de_facteurs[i];
					texte = `$${tex_nombre(b)} \\times \\ldots = ${tex_nombrec(a*b)}$`;
					texte_corr = `$${tex_nombre(b)} \\times ${mise_en_evidence(tex_nombre(a))}  = ${tex_nombrec(a*b)}$`;
					break ;
				case 7 : // case 3 avec un trou sur l'entier 
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$${tex_fraction(a,den)}\\times \\ldots = ${tex_nombrec(a/den*b)}$`;
					texte_corr = `$${tex_fraction(a,den)} \\times ${mise_en_evidence(tex_nombre(b))} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
				case 8 : // case 4 avec un trou sur l'entier
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$ \\ldots \\times${tex_fraction(a,den)}= ${tex_nombrec(a/den*b)}$`;
					texte_corr = `$${mise_en_evidence(tex_nombre(b))} \\times ${tex_fraction(a,den)} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
				case 9 : // case 3 avec trou sur la fraction
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$${tex_fraction(a,'\\ldots')}\\times${tex_nombre(b)} = ${tex_nombrec(a/den*b)}$`;
					texte_corr = `$${tex_fraction(a,mise_en_evidence(tex_nombre(den)))} \\times ${tex_nombre(b)} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
				case 10 : // case 4 avec trou sur la fraction
					a = choice([randint(11,99),randint(100,999),randint(2,9)]);
					den = choice([10,100,1000])
					b = liste_de_facteurs[i];
					texte = `$${tex_nombre(b)}\\times${tex_fraction(a,'\\ldots')} = ${tex_nombrec(a/den*b)}$`;
					texte_corr = `$${tex_nombre(b)} \\times ${tex_fraction(a,mise_en_evidence(tex_nombre(den)))} = ${tex_fraction(a*b,den)} = ${tex_nombrec(a/den*b)}$`;
					break ;
			}

			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Types de calculs',3,"1 : Écriture décimale\n2 : Écriture fractionnaire\n3 : Écritures décimales et fractionnaires"];
	this.besoin_formulaire2_case_a_cocher = ['Avec des calculs à trous']
}


/**
* Plusieurs type de calcul avec des entiers.
*
* Sans parenthèses :  
* * a+b*c
* * a+b÷c
* * a÷b*c
* * a-b*c
* * a*b÷c
* * a*b+c
* * a-b+c
* * a+b+c*d
* * a*b+c*d
* * a*b*c-d
* * a*b-c÷d
* * a*b+c÷d
* 
* Avec parenthèses : 
* * a*(b-c)
* * (a-b)*c
* * (a-b)÷c
* * a÷(b+c)
* * (a-b)÷c
* * a*(b-c)*d
* * a*b*(c-d)
* * a*(b-c*d)
* * (a+b*c)÷d
* * a*(b-c*d)
* * a*b÷(c+d)
* * a*(b÷c+d)
* @Auteur Rémi Angot
*/
function Priorites(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer en utilisant les priorités opératoires";
	this.consigne = "Calculer";
	this.nb_questions = 5;
	this.nb_cols = 2;
	this.nb_cols_corr = 1;
	this.sup = 3;

	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_questions_disponibles = []//
		if (this.sup==1){
			liste_questions_disponibles = range1(12);
		} else if (this.sup==2){
			liste_questions_disponibles = range1(22,range1(12));
		} else {
			liste_questions_disponibles = range1(22);

		}
		let liste_type_de_questions = combinaison_listes(liste_questions_disponibles,this.nb_questions);
		for (let i = 0, texte, texte_corr, a, b,c, d, cpt=0; i < this.nb_questions && cpt<50; ) {
			switch (liste_type_de_questions[i]){
				case 1 : 
					a = randint(2,11);
					b = randint(2,11);
					c = randint(2,11);
					texte = `$${a}+${b}\\times${c}$`
					texte_corr = `$${a}+${mise_en_evidence(b+'\\times'+c)}=${a}+${b*c}=${a+b*c}$`
				break
				case 2 : 
					a = randint(2,11);
					c = randint(2,11);
					b = c*randint(2,11);
					texte = `$${a}+${b}\\div${c}$`
					texte_corr = `$${a}+${mise_en_evidence(b+'\\div'+c)}=${a}+${b/c}=${a+b/c}$`
				break
				case 3 : 
					b = randint(2,11);
					c = randint(2,11);
					a = b*randint(2,11);
					texte = `$${a}\\div${b}\\times${c}$`
					texte_corr = `$${mise_en_evidence(a+'\\div'+b)}\\times${c}=${a/b}\\times${c}=${a/b*c}$`
				break
				case 4 : 
					b = randint(2,11);
					c = randint(2,11);
					a = b*c+randint(2,11);
					texte = `$${a}-${b}\\times${c}$`
					texte_corr = `$${a}-${mise_en_evidence(b+'\\times'+c)}=${a}-${b*c}=${a-b*c}$`
				break
				case 5 :
					if (choice([true,false])) { //a est un multiple de c
						c = randint(2,6)
						a = c*randint(2,5)
						b = randint(2,6)
					} else { // b est un multiple de c
						c = randint(2,6)
						b = c*randint(2,5)
						a = randint(2,6)
					}
					texte = `$${a}\\times${b}\\div${c}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}\\div${c}=${a*b}\\div${c}=${a*b/c}$`
				break
				case 6 :
					a = randint(2,11);
					b = randint(2,11);
					c = randint(2,11);
					texte = `$${a}\\times${b}+${c}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}+${c}=${a*b}+${c}=${a*b+c}$`
				break
				case 7 :
					b = randint(20,59);
					a = b+randint(11,29);
					c = randint(11,29);
					texte = `$${a}-${b}+${c}$`
					texte_corr = `$${mise_en_evidence(a+'-'+b)}+${c}=${a-b}+${c}=${a-b+c}$`
				break
				case 8 :
					a = randint(2,20);
					b = randint(2,20);
					c = randint(2,11);
					d = randint(2,11);
					texte = `$${a}+${b}+${c}\\times${d}$`
					texte_corr = `$${a}+${b}+${mise_en_evidence(c+'\\times'+d)}=${a}+${b}+${c*d}=${a+b+c*d}$`
				break
				case 9 :
					a = randint(2,11);
					b = randint(2,11);
					c = randint(2,11);
					d = randint(2,11);
					texte = `$${a}\\times${b}+${c}\\times${d}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}+${mise_en_evidence(c+'\\times'+d)}=${a*b}+${c*d}=${a*b+c*d}$`
				break
				case 10 :
					a = randint(2,5);
					b = randint(2,5);
					c = randint(2,5);
					d = randint(2,a*b*c-1);
					texte = `$${a}\\times${b}\\times${c}-${d}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}\\times${c}-${d}=${mise_en_evidence(a*b+'\\times'+c)}-${d}=${a*b*c-d}$`
				break
				case 11 :
					a = randint(3,11);
					b = randint(3,11);
					d = randint(2,11);
					c = d*randint(2,8);
					texte = `$${a}\\times${b}-${c}\\div${d}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}-${mise_en_evidence(c+'\\div'+d)}=${a*b}-${c/d}=${a*b-c/d}$`
				break
				case 12 :
					a = randint(2,11);
					b = randint(2,11);
					d = randint(2,11);
					c = d*randint(2,8);
					texte = `$${a}\\times${b}+${c}\\div${d}$`
					texte_corr = `$${mise_en_evidence(a+'\\times'+b)}+${mise_en_evidence(c+'\\div'+d)}=${a*b}+${c/d}=${a*b+c/d}$`
				break
				case 13 : 
					a = randint(2,11);
					c = randint(2,11);
					b = c+randint(2,11);
					texte = `$${a}\\times(${b}-${c})$`
					texte_corr = `$${a}\\times(${mise_en_evidence(b+`-`+c)})=${a}\\times${b-c}=${a*(b-c)}$`
				break
				case 14 : 
					b = randint(11,39);
					a = b+randint(2,11);
					c = randint(2,11);
					texte = `$(${a}-${b})\\times${c}$`
					texte_corr = `$(${mise_en_evidence(a+`-`+b)})\\times${c}=${a-b}\\times${c}=${(a-b)*c}$`
				break
				case 15 : 
					c = randint(2,11)
					b = randint(11,39);
					a = b+c*randint(2,9);
					texte = `$(${a}-${b})\\div${c}$`
					texte_corr = `$(${mise_en_evidence(a+`-`+b)})\\div${c}=${a-b}\\div${c}=${(a-b)/c}$`
				break
				case 16 : 
					b = randint(2,5)
					c = randint(2,6);
					a = (b+c)*randint(2,9);
					texte = `$${a}\\div(${b}+${c})$`
					texte_corr = `$${a}\\div(${mise_en_evidence(b+`+`+c)})=${a}\\div${b+c}=${a/(b+c)}$`
				break
				case 17 : 
					c = randint(2,11)
					b = randint(11,39);
					a = b+c*randint(2,9);
					texte = `$(${a}-${b})\\div${c}$`
					texte_corr = `$(${mise_en_evidence(a+`-`+b)})\\div${c}=${a-b}\\div${c}=${(a-b)/c}$`
				break
				case 18 : 
					c = randint(11,39);
					b = c+randint(2,5);
					a = randint(2,5);
					d = randint(2,5)
					texte = `$${a}\\times(${b}-${c})\\times${d}$`
					texte_corr = `$${a}\\times(${mise_en_evidence(b+`-`+c)})\\times${d}=${a}\\times${b-c}\\times${d}=${a*(b-c)*d}$`
				break
				case 19 : 
					d = randint(11,39);
					c = d+randint(2,5);
					a = randint(2,5);
					b = randint(2,5)
					texte = `$${a}\\times${b}\\times(${c}-${d})$`
					texte_corr = `$${a}\\times${b}\\times(${mise_en_evidence(c+`-`+d)})=${a}\\times${b}\\times${c-d}=${a*b*(c-d)}$`
				break
				case 20 : 
					a = randint(2,11);
					c = randint(2,11);
					d = randint(2,11);
					b = c*d+randint(2,11)
					texte = `$${a}\\times(${b}-${c}\\times${d})$`
					texte_corr = `$${a}\\times(${b}-${mise_en_evidence(c+`\\times`+d)})=${a}\\times(${mise_en_evidence(b+`-`+(c*d))})=${a}\\times${b-c*d}=${a*(b-c*d)}$`
				break
				case 21 : 
					a = randint(2,11);
					b = randint(2,11);
					if (liste_des_diviseurs(a*b).length<=2) {}
					let liste = liste_des_diviseurs(a*b)
					if (liste.length>2) {
						liste.pop() //on supprime le plus grand diviseur qui est le produit
					}
					if (liste.length>2) {
						enleve_element(liste,liste[1]) //on supprime le plus petit diviseur (autre que 1)
					}

					let somme = choice(liste,[1]) // la somme doit être un diviseur différent de 1
					c = randint(1,somme-1);
					d = somme -c;
					texte = `$${a}\\times${b}\\div(${c}+${d})$`
					texte_corr = `$${a}\\times${b}\\div(${mise_en_evidence(c+`+`+d)})=${mise_en_evidence(a+'\\times'+b)}\\div${c+d}=${a*b}\\div${c+d}=${a*b/(c+d)}$`
				break
				case 22 : 
					a = randint(2,11);
					c = randint(2,11);
					b = c*randint(2,5)
					d = randint(2,6);
					texte = `$${a}\\times(${b}\\div${c}+${d})$`
					texte_corr = `$${a}\\times(${mise_en_evidence(b+`\\div`+c)}+${d})=${a}\\times(${mise_en_evidence((b/c)+`+`+d)})=${a}\\times${b/c+d}=${a*(b/c+d)}$`
				break
			}
			
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de calculs',3,'1 : Sans parenthèses\n2: Avec parenthèses\n3: Avec ou sans parenthèses'] 
}






/**
* @Auteur Rémi Angot
*/
function Code_LaTeX_personnalise() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = 'Code LaTeX personnalisé';
    this.pas_de_version_HMTL = true ;
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;
    this.sup = '%Votre code LaTeX'
    this.sup2 = '%Votre code LaTeX pour le corrigé'

    this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_texte = ['Code LaTeX énoncé','Par exemple : \\input{mon_fichier}']; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];
   	
   	this.nouvelle_version = function(numero_de_l_exercice){
   		   	this.contenu = this.sup
   		   	this.contenu_correction = this.sup2
   	}

}

/**
* @Auteur Rémi Angot
*/
function HTML_personnalise() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = 'Exercice personnalisé';
    this.pas_de_version_HMTL = false ;
    this.pas_de_version_LaTeX = true ;
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;
    this.sup = "Énoncé de l'exercice"
    this.sup2 = "Énoncé de la correction"

    this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_long_texte = ['Exercice']; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	this.besoin_formulaire2_texte = ['Correction'];
   	this.besoin_formulaire_case_a_cocher = false; // Sinon this.besoin_formulaire_case_a_cocher = [texte];
   	
   	this.nouvelle_version = function(numero_de_l_exercice){
   		   	this.contenu = this.sup
   		   	this.contenu_correction = this.sup2
   	}

}

/**
 * Calcul de volumes (cube et pavé droit).
 * @Auteur Jean-Claude Lhote
 */

function Calcul_de_volumes(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculs de volumes";
	this.consigne = "Calculer en détaillant le volume des solides donnés";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup=1;
	
	let type_de_questions_disponibles
	
	this.nouvelle_version = function(numero_de_l_exercice){
		if (this.classe == 6) type_de_questions_disponibles = [1,2]; // sixième : cube et pavé droit
		else
			if (this.classe == 5) type_de_questions_disponibles = [1,2,3,4]; // cinquième : on ajoute les prismes et le cylindre 
			else 
				if (this.classe == 4) type_de_questions_disponibles = [1,2,3,4,5,6]; // Quatrième : on ajoute pyramides et cones
				else type_de_questions_disponibles = [1,2,3,4,5,6,7]; // Troisième : on ajoute les boules.
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_unites=[[`~\\text{m}`,`~\\text{m}^3`],[`~\\text{dm}`,`~\\text{dm}^3`],[`~\\text{cm}`,`~\\text{cm}^3`],[`~\\text{mm}`,`~\\text{mm}^3`]]
		for (let i = 0, texte, texte_corr, L, l, h, c, r,A,j,cpt=0; i < this.nb_questions && cpt<50; ) {
			switch (liste_type_de_questions[i]) {
				case 1 : // cube
					c=randint(2,10);
					j=randint(0,3); // pour le choix de l'unité
					texte=`Un cube de $${c} ${liste_unites[j][0]}$ d'arête.`
					texte_corr = `$\\mathcal{V}= c^3 =c \\times c \\times c = ${c}${liste_unites[j][0]}\\times${c}${liste_unites[j][0]}\\times${c}${liste_unites[j][0]}=${tex_nombrec(c*c*c)}${liste_unites[j][1]}$`;
					break;
				case 2 : // pavé droit
					if (this.sup==1) { //sans conversion
						j=randint(0,3); // pour le choix de l'unité
						l=randint(2,5);
						h=randint(3,6);
						L=randint(6,10);
						texte=`Un pavé droit de $${l}${liste_unites[j][0]}$ de largeur, de $${L}${liste_unites[j][0]}$ de longueur et de $${h}${liste_unites[j][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}= l \\times L \\times h = ${l}${liste_unites[j][0]}\\times${L}${liste_unites[j][0]}\\times${h}${liste_unites[j][0]}=${tex_nombrec(l*L*h)}${liste_unites[j][1]}$`
					}
					else { // avec conversion
						j=randint(1,2); // pour le choix de l'unité	centrale
						l=randint(2,5);
						h=randint(3,6)*10;
						L=arrondi(randint(6,10)/10,1);
						texte=`Un pavé droit de $${l}${liste_unites[j][0]}$ de largeur, de $${tex_nombre(L)}${liste_unites[j-1][0]}$ de longueur et de $${h}${liste_unites[j+1][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}= l \\times L \\times h = ${l}${liste_unites[j][0]}\\times${tex_nombre(L)}${liste_unites[j-1][0]}\\times${h}${liste_unites[j+1][0]}=${l}${liste_unites[j][0]}\\times${L*10}${liste_unites[j][0]}\\times${h/10}${liste_unites[j][0]}=${tex_nombrec(arrondi(l*L*h))}${liste_unites[j][1]}$`
					}
					break;
				case 3 : // Cylindre
					if (this.sup==1) { //sans conversion
						j=randint(0,3); // pour le choix de l'unité
						r=randint(2,10);
						h=randint(2,15);
						texte=`Un cylindre de $${r}${liste_unites[j][0]}$ de rayon et de $${tex_nombre(h)}${liste_unites[j][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^2\\times${h}${liste_unites[j][0]}=${tex_nombrec(r*r*h)}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(arrondi(r*r*h*Math.PI,1))}${liste_unites[j][1]}$`
					}
					else {
						j=randint(2,3); // pour le choix de l'unité
						r=randint(2,10);
						h=randint(20,150);
						texte=`Un cylindre de $${r}${liste_unites[j][0]}$ de rayon et de $${tex_nombrec(h/10)}${liste_unites[j-1][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}=\\pi \\times R ^2 \\times h =\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^2\\times${tex_nombrec(h/10)}${liste_unites[j-1][0]}=\\pi\\times${r*r}${liste_unites[j][0]}^2\\times${h}${liste_unites[j][0]}=${tex_nombrec(r*r*h)}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(calcul(r*r*h*Math.PI,1))}${liste_unites[j][1]}$`
					}
					break;
				case 4 : // prisme droit
					if (this.sup==1) { //sans conversion
						j=randint(0,3); // pour le choix de l'unité
						c=randint(2,10);
						h=randint(2,5);
						l=randint(6,10);
						texte=`Un prisme droit de hauteur $${l}${liste_unites[j][0]}$ et dont les bases sont des triangles de base $${c}${liste_unites[j][0]}$ et de hauteur correspondante $${h}${liste_unites[j][0]}$.`
						texte_corr=`$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${c}${liste_unites[j][0]}\\times${h}${liste_unites[j][0]}}{2}\\times${l}${liste_unites[j][0]}=${tex_nombrec(arrondi(calcul(c*h*l/2),1))}${liste_unites[j][1]}$`
					}
					else {
						j=randint(1,2); // pour le choix de l'unité
						c=randint(2,10);
						h=randint(30,50);
						l=arrondi(randint(5,15)/10,1);
						texte=`Un prisme droit de hauteur $${l}${liste_unites[j-1][0]}$ et dont les bases sont des triangles de base $${c}${liste_unites[j][0]}$ et de hauteur correspondante $${h}${liste_unites[j+1][0]}$.`
						texte_corr=`$\\mathcal{V}=\\mathcal{B} \\times h=\\dfrac{${c}${liste_unites[j][0]}\\times${h}${liste_unites[j+1][0]}}{2}\\times${tex_nombrec(l)}${liste_unites[j-1][0]}=\\dfrac{${c}${liste_unites[j][0]}\\times${tex_nombrec(calcul(h/10))}${liste_unites[j][0]}}{2}\\times${l*10}${liste_unites[j][0]}=${tex_nombrec(calcul(c*h*l/2))}${liste_unites[j][1]}$`
						}
					break;
				case 5 : // cone
					if (this.sup==1) { //sans conversion
						j=randint(0,3); // pour le choix de l'unité
						r=randint(2,10);
						h=randint(2,15);
						texte=`Un cône de $${r}${liste_unites[j][0]}$ de rayon et de $${tex_nombre(h)}${liste_unites[j][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^2\\times${h}${liste_unites[j][0]}=${tex_fraction(r*r*h,3)}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(arrondi(r*r*h*Math.PI/3))}${liste_unites[j][1]}$`
					}
					else {
						j=randint(2,3); // pour le choix de l'unité
						r=randint(2,10);
						h=randint(20,150);
						texte=`Un cône de $${r}${liste_unites[j][0]}$ de rayon et de $${tex_nombrec(h/10)}${liste_unites[j-1][0]}$ de hauteur.`
						texte_corr=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^2\\times${tex_nombrec(calcul(h/10))}${liste_unites[j-1][0]}=\\dfrac{1}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^2\\times${tex_nombrec(h)}${liste_unites[j][0]}=${tex_fraction(r*r*h,3)}\\pi\\approx${tex_nombrec(calcul(r*r*h*Math.PI/3,1))}${liste_unites[j][1]}$`
					}
					break;
				case 6 : // pyramide
				if (this.sup==1) { //sans conversion
					j=randint(0,3); // pour le choix de l'unité
					c=randint(2,10);
					h=randint(2,5);
					l=randint(6,10);
					texte=`Une pyramide de hauteur $${h}${liste_unites[j][0]}$ et dont la base  est un carré de $${c}${liste_unites[j][0]}$ de côté.`
					texte_corr=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${c*c}${liste_unites[j][0]}\\right)^2\\times${h}${liste_unites[j][0]}`;
					if (calcul(c*c*h/3,false)==arrondi(c*c*h/3,1)) texte_corr+=`=${tex_nombrec(arrondi(calcul(c*c*h/3),1))}${liste_unites[j][1]}$`;
					else texte_corr+=`\\approx${tex_nombrec(arrondi(calcul(c*c*h/3),1))}${liste_unites[j][1]}$`;
				}
				else {
					j=randint(1,2); // pour le choix de l'unité
					c=randint(2,10);
					h=randint(30,50);
					l=arrondi(randint(5,15)/10,1);
					texte=`Une pyramide de hauteur $${tex_nombrec(h/10)}${liste_unites[j-1][0]}$ et dont la base  est un carré de $${c}${liste_unites[j][0]}$ et de hauteur correspondante $${h}${liste_unites[j+1][0]}$.`
					texte_corr=`$\\mathcal{V}=\\dfrac{1}{3} \\times \\mathcal{B} \\times h=\\dfrac{1}{3}\\times\\left(${c}${liste_unites[j][0]}\\right)^2\\times${tex_nombrec(h/10)}${liste_unites[j-1][0]}=\\dfrac{1}{3}\\times${c*c}${liste_unites[j][0]}^2\\times${tex_nombrec(h)}${liste_unites[j][0]}`;
					if (calcul(c*c*h/3,false)==arrondi(c*c*h/3,1)) texte_corr+=`=${tex_nombrec(arrondi(calcul(c*h*c/3),1))}${liste_unites[j][1]}$`
					else texte_corr+=`\\approx${tex_nombrec(arrondi(calcul(c*h*c/3),1))}${liste_unites[j][1]}$`
					}
				break;
				case 7 : // boule
						j=randint(0,3); // pour le choix de l'unité
						r=randint(2,10);
						texte=`Une boule de $${r}${liste_unites[j][0]}$ de rayon.`
						texte_corr=`$\\mathcal{V}=\\dfrac{4}{3} \\times \\pi \\times R^3=\\dfrac{4}{3}\\times\\pi\\times\\left(${r}${liste_unites[j][0]}\\right)^3=${tex_fraction(calcul(4*r*r*r),3)}\\pi${liste_unites[j][1]}\\approx${tex_nombrec(arrondi(calcul(4*Math.PI*r*r*r/3),1))}${liste_unites[j][1]}$`
					break;



			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}	
			cpt++;	
		}
	liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : pas de conversion\n2 : avec conversion"];
}

// Exercices paramétrés pour correspondre au référentiel
/**
 * Lire les coordonnées d'un point du quart de plan positif avec une précision allant de l'unité à 0,25.
 * @Auteur Jean-Claude Lhote
 */
function reperage_point_du_quart_de_plan(){
	reperage_point_du_plan.call(this);
	this.titre = "Déterminer les coordonnées (positives) d'un point";
	this.quart_de_plan=true;	;

}
function fonctions_lineaires(){
	fonctions_affines.call(this);
	this.titre="Déterminer une fonction linéaire";
	this.lineaire=true;
}

function Resoudre_une_equation_produit_nul_niv2(){
	Resoudre_une_equation_produit_nul.call(this);
	this.titre = "Résoudre une équation produit nul niveau2";
	this.sup=2;
}

function Divisions_euclidiennes_niv2(){
	Divisions_euclidiennes.call(this);
	this.sup = 2;
	this.titre = "Divisions euclidiennes - Niveau 2"
}
function Exercice_Trigo_longueurs_4e(){
	Exercice_Trigo_longueurs.call(this);
	this.sup =1;
	this.besoin_formulaire_numerique = false;
	this.titre = "Utiliser le cosinus pour calculer une longueur dans un triangle rectangle";
}

function Exercice_Trigo_angles_4e(){
	this.sup =1;
	this.quatrieme = true;
	this.titre = "Utiliser le cosinus pour calculer la mesure d'un angle dans un triangle rectangle"
	Exercice_Trigo_angles.call(this);
}

function Calcul_de_volumes_6e(){
	this.sup = 1;
	this.classe = 6;
	Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_5e(){
	this.sup = 1;
	this.classe = 5;
	Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_4e(){
	this.sup = 1;
	this.classe = 4;
	Calcul_de_volumes.call(this);
}

function Calcul_de_volumes_3e(){
	this.sup = 1;
	this.classe = 3;
	Calcul_de_volumes.call(this);
}

function Exercice_6N12(){
	Tables_de_multiplications.call(this);
	this.sup = "10;100;1000";
	this.titre = 'Multiplier un entier par 10, 100, 1 000...';
}

function Exercice_6N13(){
	this.sup = 1;
	this.titre = 'Utiliser les préfixes multiplicateurs (déca à kilo)';
	Exercice_conversions.call(this);
}

function Exercice_6N24(){
	Exercice_conversions.call(this);
	this.sup = 3;
	this.titre = 'Utiliser les préfixes multiplicateurs et diviseurs (milli à kilo)';
	this.correction_avec_des_fractions = true;
	this.spacing_corr = 2;
}

function Reglages_6M12(){
	Exercice_conversions_de_longueurs.call(this);
	this.sup = 3;
	this.nb_questions = 8;
}

function Reglages_6M23(){
	Exercice_conversions_aires.call(this);
	this.sup = 3;
	this.nb_cols_corr = 1;
}

function Reglages_6M10(){
	Exercice_perimetres_et_aires.call(this);
	this.sup = 1;
}

function Reglages_6M22(){
	Exercice_perimetres_et_aires.call(this);
	this.sup = 2;
	this.titre = "Périmètres et aires de disques (à partir d'un texte)."
}

function Reglages_6N34(){
	Exercice_conversions.call(this);
	this.sup = 5;
	this.titre = "Conversions avec tous les préfixes de milli à tera."
}

function Thales_4eme(){		//Dans cette version, pas de configuration papillon reservée aux 3èmes.
	Exercice_Thales.call(this);
	this.quatrieme = true
}

function Reciproque_Thales_4eme(){
	Reciproque_Thales.call(this);
	this.quatrieme = true;
}


/**
* @Auteur Rémi Angot
*/
function LaTeX_static() {
	// Classe parente de tous les exercices qui seront créés
    this.titre = 'Fichier statique';
    this.pas_de_version_HMTL = false ;
    this.consigne = '';
    this.consigne_correction = '';
    this.liste_questions = [];
    this.liste_corrections = [];
    this.contenu = '';
    this.contenu_correction = '';
    this.nb_questions = 10;
    this.nb_cols = 2;
    this.nb_cols_corr = 2;
    this.spacing = 1;
    this.spacing_corr = 1;
    this.beamer = false;
    this.sup = 'Nom du fichier'

    this.consigne_modifiable = false;
   	this.nb_questions_modifiable = false;
   	this.nb_cols_modifiable = false;
   	this.nb_cols_corr_modifiable = false;
   	this.spacing_modifiable = false;
   	this.spacing_corr_modifiable = false;

   	this.besoin_formulaire_numerique = false; // Sinon this.besoin_formulaire_numerique = [texte,max,tooltip facultatif];
   	this.besoin_formulaire_texte = ['url du fichier',"nom du fichier sans l'extension"]; // Sinon this.besoin_formulaire_texte = [texte,tooltip];
   	//this.besoin_formulaire2_texte = ['Code LaTeX correction','Par exemple : \\input{mon_fichier_corr}'];

   	this.nouvelle_version = function(numero_de_l_exercice){
   		//this.contenu_correction = '%£tex/probleme_altitude_corr£'
   		//this.contenu = '%£tex/probleme_altitude£'
   		this.contenu = '%£'+this.sup+'£'
   		this.contenu_correction = '%£'+this.sup+'_corr£'
   		//liste_des_exercices_statiques.push(this.sup)
   	}

}


// FIN DES EXERCICES
// Gestion des listes d'exercices

jQuery(document).ready(function() {
// Ne se fait qu'après que le DOM soit entièrement défini



	// Trie par ordre alphabétique les exercices disponibles
	liste_des_exercices_disponibles = tridictionnaire(liste_des_exercices_disponibles);
	
	// Détermine le nombre d'exercices par niveaux
	let nombre_d_exercices_disponibles_6 = 0;
	let nombre_d_exercices_disponibles_5 = 0;
	let nombre_d_exercices_disponibles_4 = 0;
	let nombre_d_exercices_disponibles_3 = 0;
	let nombre_d_exercices_disponibles_2 = 0;
	let nombre_d_exercices_disponibles_CM = 0;
	let nombre_d_exercices_disponibles_prof = 0;
	//debut ajout seb section tests
	let nombre_d_exercices_disponibles_tests = 0;
	//fin seb section tests
	for (var id in liste_des_exercices_disponibles){
		if (id[0]==6) {nombre_d_exercices_disponibles_6+=1}
		if (id[0]==5) {nombre_d_exercices_disponibles_5+=1}
		if (id[0]==4) {nombre_d_exercices_disponibles_4+=1}
		if (id[0]==3) {nombre_d_exercices_disponibles_3+=1}
		if (id[0]==2) {nombre_d_exercices_disponibles_2+=1}
		if (id[0]=='C') {nombre_d_exercices_disponibles_CM+=1}
		if (id[0]=='P') {nombre_d_exercices_disponibles_prof+=1}
		//debut ajout seb section tests
		if (id[0]=='T') {nombre_d_exercices_disponibles_tests+=1}
		//fin seb section tests
	}

	//
	let liste_html_des_exercices_6 = []
	let liste_html_des_exercices_5 = []
	let liste_html_des_exercices_4 = []
	let liste_html_des_exercices_3 = []
	let liste_html_des_exercices_2 = []
	let liste_html_des_exercices_CM = []
	let liste_html_des_exercices_prof = []
	//debut ajout seb section tests
	let liste_html_des_exercices_tests = []
	//fin seb section tests


	// Affiche de la liste des exercices disponibles 
	let liste_html_des_exercices = '<h3 class="ui block header">Exercices disponibles</h3>\n\n';
	for (var id in liste_des_exercices_disponibles) {
		let exercice_tmp = new liste_des_exercices_disponibles[id];
		if (id[0]==6) {
			liste_html_des_exercices_6 += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]==5) {
			liste_html_des_exercices_5 += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]==4) {
			liste_html_des_exercices_4 += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]==3) {
			liste_html_des_exercices_3 += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]==2) {
			liste_html_des_exercices_2 += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]=='C') {
			liste_html_des_exercices_CM += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		if (id[0]=='P') {
			liste_html_des_exercices_prof += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		}
		// //debut ajout seb section tests
		// if (id[0]=='T') {
		// 	liste_html_des_exercices_tests += '<span class="id_exercice">' + id + '</span> - <a class="lien_id_exercice" numero="' + id + '">'  + exercice_tmp.titre + '</a></br>\n';			
		// }
		// //fin seb section tests

	}


	// Change l'ordre des exercices suivant l'URL
	if (window.location.href.indexOf('cm.html')>0) {
		liste_html_des_exercices += `<div class="ui accordion"><div class="active title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="active content">`
		liste_html_des_exercices += liste_html_des_exercices_CM
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_6
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_5
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_4
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_3
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_2
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices+=`</div>`	
	} else {
		liste_html_des_exercices += `<div class="ui accordion"><div class="title"><i class="dropdown icon"></i>Sixième (${nombre_d_exercices_disponibles_6})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_6
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Cinquième (${nombre_d_exercices_disponibles_5})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_5
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Quatrième (${nombre_d_exercices_disponibles_4})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_4
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Troisième (${nombre_d_exercices_disponibles_3})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_3
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Seconde (${nombre_d_exercices_disponibles_2})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_2
		liste_html_des_exercices+=`</div>`
		liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Calcul mental (${nombre_d_exercices_disponibles_CM})</div><div class="content">`
		liste_html_des_exercices += liste_html_des_exercices_CM
		liste_html_des_exercices+=`</div>`
		// //debut ajout seb section tests
		// liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Section Tests (${nombre_d_exercices_disponibles_tests})</div><div class="content">`
		// liste_html_des_exercices += liste_html_des_exercices_tests
		// liste_html_des_exercices+=`</div>`
		//fin seb section tests
		// Ajoute les outils prof sur mathalealatex
		if (window.location.href.indexOf('mathalealatex.html')>0) {
			liste_html_des_exercices += `<div class="title"><i class="dropdown icon"></i>Outils pour le professeur (${nombre_d_exercices_disponibles_prof})</div><div class="content">`
			liste_html_des_exercices += liste_html_des_exercices_prof
			liste_html_des_exercices+=`</div>`
		}
		liste_html_des_exercices+=`</div>`
	}
		
	$('#liste_des_exercices').html(liste_html_des_exercices);

	

	// Gère le clic sur un exercice de la liste
	$('.lien_id_exercice').click(function(){
		let numero=$(this).attr('numero');
		if ($('#choix_des_exercices').val()=='') {
			$('#choix_des_exercices').val($('#choix_des_exercices').val() + numero);	
		} else {
			$('#choix_des_exercices').val($('#choix_des_exercices').val() + ',' + numero);
		}
		liste_des_exercices = $('#choix_des_exercices').val().replace(/\s/g, "").replace(";", ",").split(",");
		mise_a_jour_de_la_liste_d_exercice();



});

});


/**
* Décomposer en produit de facteurs premiers un nombre (la décomposition aura 3, 4 ou 5 facteurs premiers)
* @Auteur Rémi Angot
*/
function Exercice_decomposer_en_facteurs_premiers(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = '' ;
	this.sup2 = '' ; 
	this.titre = "Décomposition en facteurs premiers";
	this.consigne = "Écrire les nombres suivants sous la forme d'un produit de facteurs premiers.";
	this.spacing = 2;
	this.nb_questions = 6;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		for (let i = 0, n, facteurs=[], nb_facteurs, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			facteurs = [];
			nb_facteurs = randint(3,5);
			for (var k = 0; k < nb_facteurs; k++) {
				if (k<nb_facteurs-1) {
					if (nb_facteurs>3 && k==0){facteurs.push(2)}
					else if (nb_facteurs>4 && k==1){facteurs.push(2)}
					else{
						facteurs.push(choice([2,3,5]));
					}
					
				}
				else {facteurs.push(choice([2,5,7,11]))}
			}

			if (randint(1,4)==1) { //Une fois sur 4 on multilie le nombre par 100
				facteurs.push(2,2,5,5)
			} 
			n = 1
			for (var k = 0; k < facteurs.length; k++) {
				facteurs[k]
				n = n * facteurs[k]
			}
			texte = '$ '+ tex_nombre(n) + ' = \\dotfill $';
			texte_corr = '$ '+ tex_nombre(n) + ' = ' 
			facteurs.sort(compare_nombres); //classe les facteurs dans l'ordre croissant
			for (var k = 0; k < facteurs.length-1; k++) {
				facteurs[k]
				texte_corr += facteurs[k] + ' \\times '
			}
			texte_corr += facteurs[facteurs.length-1] + ' $';	
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;

		}
		liste_de_question_to_contenu(this);
	}
	
}

/**
* Additionner deux relatifs inférieurs à la valeur maximale en paramètre qui est par défaut à 20.
*
* Paramètre supplémentaire ; utilisation des écritures simplifiées
* @Auteur Rémi Angot
*/
function Exercice_additions_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Addition de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = `$ ${a}${ecriture_algebrique(b)} = \\dotfill $`;
				texte_corr = `$ ${a}${ecriture_algebrique(b)} = ${a+b} $`;
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatifc(a) + ' + ' + ecriture_nombre_relatifc(b) + ' = ' + ecriture_nombre_relatifc(a + b) +' $';	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}

/**
* Compléter une addition à trou entre 2 nombres relatifs.
*
* * On peut paramétrer la distance à zéro maximale des deux termes (par défaut égale à 20)
* * On peut choisir d'avoir une écriture simplifiée  (par défaut ce n'est pas le cas)
* @Auteur Rémi Angot
*/
function Exercice_additions_relatifs_a_trou(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Addition à trou de deux entiers relatifs"
	this.consigne = 'Compléter'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = '$ '+ a + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + (a + b) + ' $';
				texte_corr = '$ '+ a + ecriture_algebrique(b) + ' = ' + (a + b) +' $';
			} else{
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + '\\ldots\\ldots\\ldots' + ' = ' + ecriture_nombre_relatif(a + b) + ' $';
				texte_corr = '$ '+ ecriture_nombre_relatifc(a) + ' + ' + ecriture_nombre_relatifc(b) + ' = ' + ecriture_nombre_relatifc(a + b) +' $';	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];	
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}

/**
* Effectuer la soustraction de  2 nombres relatifs.
*
* * On peut paramétrer la distance à zéro maximale des deux termes (par défaut égale à 20)
* * On peut choisir d'avoir une écriture simplifiée  (par défaut ce n'est pas le cas)
* @Auteur Rémi Angot
*/
function Exercice_soustractions_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Soustraction de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (this.sup2){
				texte = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = \\dotfill $';
				if (b>0){
					texte_corr = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = ' + (a - b) +' $';
				} else {
					texte_corr = '$ '+ a + ' - ' + ecriture_parenthese_si_negatif(b) + ' = ' + a + ecriture_algebrique(-1*b) + ' = ' + (a - b) +' $';
				}
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = ' + ecriture_nombre_relatifc(a) + ' + ' + ecriture_nombre_relatifc(-1*b) + ' = ' + ecriture_nombre_relatifc(a - b) +' $';
			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];			
}

/**
* Effectuer une multiplication entre 2 nombres relatifs.
*
* * On peut paramétrer la distance à zéro maximale des deux termes (par défaut égale à 20)
* * On peut choisir d'avoir une écriture simplifiée  (par défaut ce n'est pas le cas)
* @Auteur Rémi Angot
*/
function Exercice_multiplications_relatifs(max=10){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Multiplication de deux entiers relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup);
			b = randint(1,this.sup);
			k = choice([[-1,-1],[-1,1],[1,-1]]); // Les deux nombres relatifs ne peuvent pas être tous les deux positifs
			a = a*k[0];
			b = b*k[1];
			if (a==1){
				a=-1
			}
			if (b==1){
				b=-1
			}
			if (this.sup2){
				texte = '$ '+ a + ' \\times ' + ecriture_parenthese_si_negatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ a + ' \\times ' + ecriture_parenthese_si_negatif(b) + ' = ' + (a * b) +' $';
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' \\times ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatifc(a) + ' \\times ' + ecriture_nombre_relatifc(b) + ' = ' + ecriture_nombre_relatifc(a * b) +' $';
			}
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];		
}
/**
* Comparer deux fractions dont les dénominateurs sont multiples (avec un coefficient paramétrable qui est par défaut inférieur à 11)
* @Auteur Rémi Angot
*/
function Exercice_comparer_deux_fractions (max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Comparer des fractions (dénominateurs multiples)"
	this.consigne = 'Comparer les fractions suivantes.'
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = obtenir_liste_fractions_irreductibles();
		for (let i = 0, fraction, a, b, texte, texte_corr, signe, signe2, cpt=0; i < this.nb_questions;i++) {
			fraction = choice(liste_fractions); //
			a = fraction[0];
			b = fraction[1];
			k = randint(2,this.sup);
			ecart = choice([-4,-3,-2,-1,1,2,3,4]);
			if (k*a+ecart<=0){
				ecart=ecart*(-1)
			}
			if (ecart>0) {
				signe = `<`
				signe2 = `>`
			} else {
				signe = `>`
				signe2=`<`
			}
			enleve_element(liste_fractions,fraction); // Il n'y aura pas 2 fois la même réponse

			ordre_des_fractions = randint(1,2)
			if (ordre_des_fractions==1) {
				texte = `$${tex_fraction(a,b)} \\quad$ et $\\quad ${tex_fraction(k*a+ecart,k*b)}$`;
			} else {
				texte = `$${tex_fraction(k*a+ecart,k*b)} \\quad$ et $\\quad ${tex_fraction(a,b)}$`;
			}
			if (!sortie_html) {
				texte=texte.replace('\\quad$ et $\\quad','\\ldots\\ldots\\ldots')
			}
			texte_corr = `$${tex_fraction(a,b)}=${tex_fraction(a+mise_en_evidence('\\times '+k),b+mise_en_evidence('\\times '+k))}=${tex_fraction(a*k,b*k)}\\quad$`
			if (ordre_des_fractions==1) {
				texte_corr += `  et   $\\quad${tex_fraction(a*k,b*k)} ${signe} ${tex_fraction(a*k+ecart,b*k)}\\quad$ donc $\\quad${tex_fraction(a,b)} ${signe} ${tex_fraction(a*k+ecart,b*k)}$ `;
			} else {
				texte_corr += `  et   $\\quad${tex_fraction(a*k+ecart,b*k)} ${signe2} ${tex_fraction(a*k,b*k)} \\quad$ donc $\\quad ${tex_fraction(a*k+ecart,b*k)} ${signe2} ${tex_fraction(a,b)} $ `;
			}			
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];		
}


/**
* 4 fractions aux dénominateurs multiples et un nombre entier sont donnés, il faut les classer dans l'ordre croissant ou décroissant
* 
* Pour la correction, les fractions sont toute écrites avec un dénominateur commun avant d'être classées
* @Auteur Rémi Angot
*/
function Exercice_comparer_quatre_fractions (){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Comparer quatre fractions (dénominateurs multiples) et un nombre entier"
	this.consigne = "Ranger les nombres suivants dans l'ordre croissant."
	this.spacing = 2;
	sortie_html ? this.spacing_corr = 4 : this.spacing_corr = 3 ;
	this.nb_questions = 2;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, denominateurs, n1, d1, n2, d2, n3, d3, n4, d4, k, texte="", texte_corr="", cpt=0; i < this.nb_questions;i++) {
			liste_denominateurs = [[12,2,3,4,6],[16,2,4,8],[18,2,3,6,9],[20,2,4,5,10],[24,2,3,4,8,12],[30,2,3,5,6]]
			denominateurs = choice(liste_denominateurs);
			d1 = denominateurs[0];
			enleve_element(denominateurs,d1);
			d2 = choice(denominateurs);
			enleve_element(denominateurs,d2);
			d3 = choice(denominateurs);
			d4 = choice(denominateurs);
			k = randint(1,3);
			n1 = randint(1,10);
			n2 = randint(1,10);
			n3 = randint(1,10);
			n4 = choice([d4+randint(1,3),d4*2+randint(1,2)],randint(1,10));
			// [num,den,calcul de mise au même dénominateur, num qui correspond au denominateur commun]
			
			while (((n1/d1-n2/d2)*(n1/d1-n3/d3)*(n1/d1-n4/d4)*(n2/d2-n3/d3)*(n2/d3-n4/d4)*(n3/d3-n4/d4)<0.1) || (n1%d1==0) || (n2%d2==0) || (n3%d3==0) || (n4%d4==0) ){
				n1 = randint(1,11);
				n2 = randint(1,11);
				n3 = randint(1,11);
				n4 = randint(1,11);
			}
			let tableau_fractions=[[n1,d1,`$${tex_fraction(n1,d1)}$`,`$${tex_fraction(n1,d1)}$`]]
			tableau_fractions.push([n2,d2,`$${tex_fraction(n2,d2)}=${tex_fraction(n2+mise_en_evidence("\\times"+Algebrite.eval(d1/d2)),d2+mise_en_evidence("\\times"+Algebrite.eval(d1/d2)))}=${tex_fraction(Algebrite.eval(n2*d1/d2),d1)}$`,`$${tex_fraction(Algebrite.eval(n2*d1/d2),d1)}$`])
			tableau_fractions.push([n3,d3,`$${tex_fraction(n3,d3)}=${tex_fraction(n3+mise_en_evidence("\\times"+Algebrite.eval(d1/d3)),d3+mise_en_evidence("\\times"+Algebrite.eval(d1/d3)))}=${tex_fraction(Algebrite.eval(n3*d1/d3),d1)}$`,`$${tex_fraction(Algebrite.eval(n3*d1/d3),d1)}$`])
			tableau_fractions.push([n4,d4,`$${tex_fraction(n4,d4)}=${tex_fraction(n4+mise_en_evidence("\\times"+Algebrite.eval(d1/d4)),d4+mise_en_evidence("\\times"+Algebrite.eval(d1/d4)))}=${tex_fraction(Algebrite.eval(n4*d1/d4),d1)}$`,`$${tex_fraction(Algebrite.eval(n4*d1/d4),d1)}$`])
			tableau_fractions.push([k,1,`$${k}=${tex_fraction(d1*k,d1)}$`,`$${tex_fraction(k*d1,d1)}$`])
			tableau_fractions.sort(compare_fractions)
			let tableau_fractions_enonce=shuffle(tableau_fractions)
			texte = "";
			for (var j = 0; j < tableau_fractions_enonce.length; j++) {
				if (tableau_fractions_enonce[j][1]==1)
					texte+=`$${tableau_fractions_enonce[j][0]}\\quad\\text{;}\\quad$`
				else
					texte+=`$${tex_fraction(tableau_fractions_enonce[j][0],tableau_fractions_enonce[j][1])}\\quad\\text{;}\\quad$`
			}
			texte = texte.substring(0,texte.length-19)+"$" // Enlève les 21 derniers caractères (pour le ; de la fin)
			tableau_fractions.sort(compare_fractions)
			texte_corr ="";
			for (var j = 0; j < tableau_fractions_enonce.length; j++) {
				texte_corr+=tableau_fractions_enonce[j][2]
				texte_corr+="<br>"
			}
			for (var j = 0; j < tableau_fractions.length; j++) {
				texte_corr+=tableau_fractions[j][3]
				if (j<tableau_fractions.length-1)
					texte_corr+=`$\\quad<\\quad$`
			}
			texte_corr+="<br>"
			let texte_conclusion = ""
			for (var j = 0; j < tableau_fractions.length; j++) {
				if (tableau_fractions[j][1]==1)
					texte_conclusion+=`$${tableau_fractions[j][0]}\\quad<\\quad$`
				else
					texte_conclusion+=`$${tex_fraction(tableau_fractions[j][0],tableau_fractions[j][1])}\\quad<\\quad$`
			}
			texte_corr += "Finalement : $\\quad$ "+texte_conclusion.substring(0,texte_conclusion.length-12)+"$"

			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
}

/**
* Effectuer l'addition de deux fractions dont un dénominateur est un multiple de l'autre.
*
* Le coefficient est paramétrable, par défaut il est inférieur à 11.
* @Auteur Rémi Angot
*/
function Exercice_additionner_des_fractions_5e(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.titre = "Additionner deux fractions (dénominateurs multiples)"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, c, d,texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			// les numérateurs
			a = randint (1,9);
			c = randint (1,9);
			// les dénominateurs
			b = randint(2,9);
			while (b==a){
				b = randint(2,9); // pas de fraction avec numérateur et dénominateur égaux
			}
			k = randint(2,this.sup);
			d = b*k
			ordre_des_fractions = randint(1,2)
			if (ordre_des_fractions==1) {
				texte = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=$`;
			} else {
				texte = texte = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=$`;
			}
			if (ordre_des_fractions==1) {
				texte_corr = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}+${tex_fraction(c,d)}`
				texte_corr += `=${tex_fraction(a*k,b*k)}+${tex_fraction(c,d)}=${tex_fraction(a*k+`+`+c,d)}=${tex_fraction(a*k+c,d)}$`;
			} else {
				texte_corr = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=${tex_fraction(c,d)}+${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
				texte_corr += `=${tex_fraction(c,d)}+${tex_fraction(a*k,b*k)}=${tex_fraction(c+'+'+a*k,d)}=${tex_fraction(a*k+c,d)}$`;
			}
			// Est-ce que le résultat est simplifiable ?
			let s = pgcd(a*k+c,d);
			if ((a*k+c)%d==0) { // si le résultat est un entier
				texte_corr +=`$=${Algebrite.eval((a*k+c)/d)}$`
			} else if (s!=1) {
				texte_corr +=`$=${tex_fraction(Algebrite.eval((a*k+c)/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((a*k+c)/s),Algebrite.eval(d/s))}$`
			}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];		
}

/**
* Effectuer l'addition ou la soustraction de deux fractions dont un dénominateur est un multiple de l'autre.
*
* Le résultat de la soustraction sera toujours positif.
*
* Le coefficient est paramétrable, par défaut il est inférieur à 11.
*
* On peut paramétrer de n'avoir que des soustractions.
* @Auteur Rémi Angot
*/
function Exercice_additionner_ou_soustraire_des_fractions_5e(max=11){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ; // Correspond au facteur commun
	this.sup2 = false // Si true alors il n'y aura que des soustractions
	this.titre = "Additionner ou soustraire deux fractions (dénominateurs multiples)"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, c, d,texte, texte_corr, cpt=0; i < this.nb_questions;i++) {
			// les numérateurs
			a = randint (1,9);
			c = randint (1,9);
			// les dénominateurs
			b = randint(2,9);
			while (b==a){
				b = randint(2,9); // pas de fraction avec numérateur et dénominateur égaux
			}
			k = randint(2,this.sup);
			d = b*k
			if (randint(1,2)==1 && !this.sup2) { //une addition
				ordre_des_fractions = randint(1,2)
				if (ordre_des_fractions==1) {
					texte = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=$`;
				} else {
					texte = texte = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=$`;
				}
				if (ordre_des_fractions==1) {
					texte_corr = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}+${tex_fraction(c,d)}`
					texte_corr += `=${tex_fraction(a*k,b*k)}+${tex_fraction(c,d)}=${tex_fraction(a*k+`+`+c,d)}=${tex_fraction(a*k+c,d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c,d)}+${tex_fraction(a,b)}=${tex_fraction(c,d)}+${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
					texte_corr += `=${tex_fraction(c,d)}+${tex_fraction(a*k,b*k)}=${tex_fraction(c+'+'+a*k,d)}=${tex_fraction(a*k+c,d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a*k+c,d);
				if (s!=1) {
					texte_corr +=`$=${tex_fraction(Algebrite.eval((a*k+c)/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((a*k+c)/s),Algebrite.eval(d/s))}$`
				}
			} else{ //une soustraction
				if ((a/b)>(c/d)) {
					texte = `$${tex_fraction(a,b)}-${tex_fraction(c,d)}=$`;
				} else {
					texte = texte = `$${tex_fraction(c,d)}-${tex_fraction(a,b)}=$`;
				}
				if ((a/b)>(c/d)) {
					texte_corr = `$${tex_fraction(a,b)}-${tex_fraction(c,d)}=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}-${tex_fraction(c,d)}`
					texte_corr += `=${tex_fraction(a*k,b*k)}-${tex_fraction(c,d)}=${tex_fraction(a*k+`-`+c,d)}=${tex_fraction(a*k-c,d)}$`;
				} else {
					texte_corr = `$${tex_fraction(c,d)}-${tex_fraction(a,b)}=${tex_fraction(c,d)}-${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}`
					texte_corr += `=${tex_fraction(c,d)}-${tex_fraction(a*k,b*k)}=${tex_fraction(c+'-'+a*k,d)}=${tex_fraction(c-a*k,d)}$`;
				}
				// Est-ce que le résultat est simplifiable ?
				let s = pgcd(a*k-c,d);
				if (abs(a*k-c)%d==0){ //si la fraction peut-être un nombre entier
					texte_corr += `$=${Algebrite.eval((abs(a*k-c))/d)}$`
				} else if (s!=1) {
					texte_corr +=`$=${tex_fraction(Algebrite.eval((abs(a*k-c))/s)+mise_en_evidence('\\times'+s),Algebrite.eval(d/s)+mise_en_evidence('\\times'+s))}=${tex_fraction(Algebrite.eval((abs(a*k-c))/s),Algebrite.eval(d/s))}$`
				}
			}
				
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Valeur maximale du coefficient multiplicateur',99999];	
	this.besoin_formulaire2_case_a_cocher = ['Uniquement des soustractions'];	
}


/**
* Effectuer la somme de deux fractions
*
* * Niveau 1 : 4 fois sur 5 un dénominateur est un multiple de l'autre et une fois sur 5 il faut additionner une fraction et un entier
* * Niveau 2 : 2 fois sur 5, il faut trouver le ppcm, 1 fois sur 5 le ppcm correspond à leur produit, 1 fois sur 5 un dénominateur est multiple de l'autre, 1 fois sur 5 il faut additionner une fraction et un entier
* * Paramètre supplémentaire : utiliser des nommbres relatifs (par défaut tous les nombres sont positifs)
* @Auteur Rémi Angot
*/
function Exercice_additionner_des_fractions(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 2; // Niveau de difficulté
	this.sup2 = false; // Avec ou sans relatifs
	this.titre = "Additionner deux fractions"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles
		if (this.sup==1) {
			type_de_questions_disponibles = ['b_multiple_de_d','d_multiple_de_b','b_multiple_de_d','d_multiple_de_b','entier']
		}
		if (this.sup==2) {
			type_de_questions_disponibles = ['ppcm','ppcm','premiers_entre_eux',choice(['b_multiple_de_d','d_multiple_de_b']),'entier']
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, a, b, c, d, k, k1, k2, num, den, texte, texte_corr, type_de_questions, cpt=0; i < this.nb_questions;i++) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 'ppcm' :
					let liste_couples_de_denominateurs = [[6,9],[4,6],[8,12],[9,12],[10,15],[10,25],[6,21],[12,30],[6,8],[50,75],]
					let couples_de_denominateurs = choice(liste_couples_de_denominateurs)
					if (choice([true,false])) {
						b = couples_de_denominateurs[0];
						d = couples_de_denominateurs[1];
					} else {
						b = couples_de_denominateurs[1];
						d = couples_de_denominateurs[0];
					}
					k1 = ppcm(b,d)/b;
					k2 = ppcm(b,d)/d;
				break

				case 'premiers_entre_eux' :
					b = randint(2,9)
					d = randint(2,9)
					while (pgcd(b,d)!=1) {
						b = randint(2,9)
						d = randint(2,9)
					}
					k1 = ppcm(b,d)/b;
					k2 = ppcm(b,d)/d;
				break

				case 'd_multiple_de_b':
					b = randint(2,9);
					k = randint(2,11);
					d = b*k;
				break

				case 'b_multiple_de_d':
					d = randint(2,9);
					k = randint(2,11);
					b = d*k;
				break
			}

			
			a = randint (1,9,[b]);
			c = randint (1,9,[d]);
			if (this.sup2) { //si les numérateurs sont relatifs
				a = a * choice([-1,1]);
				c = c * choice([-1,1]);
			}
			texte = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}=$`;
			texte_corr = `$${tex_fraction(a,b)}+${tex_fraction(c,d)}`

			// a/b+c/d = num/den (résultat non simplifié)

			if (type_de_questions=='ppcm' || type_de_questions=='premiers_entre_eux') {
				texte_corr += `=${tex_fraction(a+mise_en_evidence('\\times'+k1),b+mise_en_evidence('\\times'+k1))}+${tex_fraction(c+mise_en_evidence('\\times'+k2),d+mise_en_evidence('\\times'+k2))}`
				//texte_corr += `=${tex_fraction(a*k1,b*k1)}+${tex_fraction(c*k2,d*k2)}`;
				num = a*k1+c*k2;
				den = b*k1
				texte_corr += `=${tex_fraction(a*k1+`+`+ecriture_parenthese_si_negatif(c*k2),den)}`

			} 

			if (type_de_questions=='d_multiple_de_b') {
				texte_corr += `=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}+${tex_fraction(c,d)}`
				//texte_corr += `=${tex_fraction(a*k1,b*k1)}+${tex_fraction(c*k2,d*k2)}`;
				num = a*k+c;
				den = b*k
				texte_corr += `=${tex_fraction(a*k+`+`+ecriture_parenthese_si_negatif(c),den)}`
			}

			if (type_de_questions=='b_multiple_de_d') {
				texte_corr += `=${tex_fraction(a,b)}+${tex_fraction(c+mise_en_evidence('\\times'+k),d+mise_en_evidence('\\times'+k))}`
				//texte_corr += `=${tex_fraction(a*k1,b*k1)}+${tex_fraction(c*k2,d*k2)}`;
				num = a+c*k;
				den = b
				texte_corr += `=${tex_fraction(a+`+`+ecriture_parenthese_si_negatif(c*k),den)}`
			}

			if (type_de_questions=="entier") {
				a = randint(1,9);
				b = randint(2,9,[a]);
				let n = randint(1,9);
				if (this.sup2) {
					a = a * choice([-1,1]);
					n = n * choice([-1,1]);
				}
				if (choice([true,false])) {
					texte = `$${n}+${tex_fraction(a,b)}=$`;
					texte_corr = texte ;
					texte_corr += `$${tex_fraction(n+'\\times'+b,b)}+${tex_fraction(a,b)}`;
					texte_corr += `=${tex_fraction(n*b+'+'+ecriture_parenthese_si_negatif(a),b)}`;
				} else {
					texte = `$${tex_fraction(a,b)}+${ecriture_parenthese_si_negatif(n)}=$`;
					texte_corr = texte ;
					texte_corr += `$${tex_fraction(a,b)}+${tex_fraction(n+'\\times'+b,b)}`;
					texte_corr += `=${tex_fraction(a+'+'+ecriture_parenthese_si_negatif(n*b),b)}`
				}
				num = n*b+a
				den = b 
			}
			texte_corr += `=${tex_fraction(num,den)}`;
			texte_corr += simplification_de_fraction_avec_etapes(num,den)+'$';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Un dénominateur multiple de l'autre\n\
2 : Cas général"]
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres relatifs'];

}


/**
* Effectuer la somme ou la différence de deux fractions
*
* * Niveau 1 : 4 fois sur 5 un dénominateur est un multiple de l'autre et une fois sur 5 il faut additionner une fraction et un entier
* * Niveau 2 : 2 fois sur 5, il faut trouver le ppcm, 1 fois sur 5 le ppcm correspond à leur produit, 1 fois sur 5 un dénominateur est multiple de l'autre, 1 fois sur 5 il faut additionner une fraction et un entier
* * Paramètre supplémentaire : utiliser des nommbres relatifs (par défaut tous les nombres sont positifs)
* * 2 fois sur 4 il faut faire une soustraction
* @Auteur Rémi Angot
*/
function Exercice_additionner_ou_soustraire_des_fractions(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 2; // Niveau de difficulté
	this.sup2 = false; // Avec ou sans relatifs
	this.titre = "Additionner ou soustraire deux fractions"
	this.consigne = "Calculer et donner le résultat sous la forme d'une fraction simplifiée."
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles
		if (this.sup==1) {
			type_de_questions_disponibles = ['b_multiple_de_d','d_multiple_de_b','b_multiple_de_d','d_multiple_de_b','entier']
		}
		if (this.sup==2) {
			type_de_questions_disponibles = ['ppcm','ppcm','premiers_entre_eux',choice(['b_multiple_de_d','d_multiple_de_b']),'entier']
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_de_plus_ou_moins = combinaison_listes(['-','-','+','+'],this.nb_questions)
		for (let i = 0, a, b, c, d, k, k1, k2, num, den, texte, texte_corr, type_de_questions, cpt=0; i < this.nb_questions;i++) {
			let plus_ou_moins = liste_de_plus_ou_moins[i]
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 'ppcm' :
					let liste_couples_de_denominateurs = [[6,9],[4,6],[8,12],[9,12],[10,15],[10,25],[6,21],[12,30],[6,8],[50,75],]
					let couples_de_denominateurs = choice(liste_couples_de_denominateurs)
					if (choice([true,false])) {
						b = couples_de_denominateurs[0];
						d = couples_de_denominateurs[1];
					} else {
						b = couples_de_denominateurs[1];
						d = couples_de_denominateurs[0];
					}
					k1 = ppcm(b,d)/b;
					k2 = ppcm(b,d)/d;
				break

				case 'premiers_entre_eux' :
					b = randint(2,9)
					d = randint(2,9)
					while (pgcd(b,d)!=1) {
						b = randint(2,9)
						d = randint(2,9)
					}
					k1 = ppcm(b,d)/b;
					k2 = ppcm(b,d)/d;
				break

				case 'd_multiple_de_b':
					b = randint(2,9);
					k = randint(2,11);
					d = b*k;
				break

				case 'b_multiple_de_d':
					d = randint(2,9);
					k = randint(2,11);
					b = d*k;
				break
			}

			a = randint (1,9,[b]);
			c = randint (1,9,[d]);
			if (this.sup2) { //si les numérateurs sont relatifs
				a = a * choice([-1,1]);
				c = c * choice([-1,1]);

			}
			if (!this.sup2 && plus_ou_moins=='-' && a/b<c/d) { //s'il n'y a pas de relatifs, il faut s'assurer que la soustraction soit positive
				[a,b,c,d]=[c,d,a,b] // on échange les 2 fractions
				k1 = ppcm(b,d)/b;
				k2 = ppcm(b,d)/d;
				if (type_de_questions=='d_multiple_de_b') {
					type_de_questions='b_multiple_de_d'; //comme on a échangé les 2 fractions, le type de la question change
					k = b/d;
				} else if (type_de_questions=='b_multiple_de_d') {
					type_de_questions='d_multiple_de_b'; //comme on a échangé les 2 fractions, le type de la question change
					k = d/b;
				}
				echange = true;
			}
			texte = `$${tex_fraction(a,b)}${plus_ou_moins}${tex_fraction(c,d)}=$`;
			texte_corr = `$${tex_fraction(a,b)}${plus_ou_moins}${tex_fraction(c,d)}`

			// a/b(+ou-)c/d = num/den (résultat non simplifié)

			if (type_de_questions=='ppcm' || type_de_questions=='premiers_entre_eux') {
				texte_corr += `=${tex_fraction(a+mise_en_evidence('\\times'+k1),b+mise_en_evidence('\\times'+k1))}${plus_ou_moins}${tex_fraction(c+mise_en_evidence('\\times'+k2),d+mise_en_evidence('\\times'+k2))}`
				num = calcul(a*k1+plus_ou_moins+ecriture_nombre_relatif(c*k2));
				den = b*k1
				texte_corr += `=${tex_fraction(a*k1+plus_ou_moins+ecriture_parenthese_si_negatif(c*k2),den)}`

			} 

			if (type_de_questions=='d_multiple_de_b') {
				texte_corr += `=${tex_fraction(a+mise_en_evidence('\\times'+k),b+mise_en_evidence('\\times'+k))}${plus_ou_moins}${tex_fraction(c,d)}`
				num = calcul(a*k+plus_ou_moins+ecriture_nombre_relatif(c));
				den = b*k
				texte_corr += `=${tex_fraction(a*k+plus_ou_moins+ecriture_parenthese_si_negatif(c),den)}`
			}

			if (type_de_questions=='b_multiple_de_d') {
				texte_corr += `=${tex_fraction(a,b)}${plus_ou_moins}${tex_fraction(c+mise_en_evidence('\\times'+k),d+mise_en_evidence('\\times'+k))}`
				num = calcul(a+plus_ou_moins+ecriture_nombre_relatif(c*k));
				den = b
				texte_corr += `=${tex_fraction(a+plus_ou_moins+ecriture_parenthese_si_negatif(c*k),den)}`
			}

			if (type_de_questions=="entier") {
				a = randint(1,9);
				b = randint(2,9,[a]);
				let n = randint(1,9);
				if (this.sup2) {
					a = a * choice([-1,1]);
					n = n * choice([-1,1]);
				}
				if (choice([true,false])) {
					// n+-a/b
					if (!this.sup2 && plus_ou_moins=="-" && n<a/b) {
						n = randint(5,9) // max(a/b)=9/2
					}
					texte = `$${n}${plus_ou_moins}${tex_fraction(a,b)}=$`;
					texte_corr = texte ;
					texte_corr += `$${tex_fraction(n+mise_en_evidence('\\times'+b),mise_en_evidence(b))}${plus_ou_moins}${tex_fraction(a,b)}`;
					texte_corr += `=${tex_fraction(n*b+plus_ou_moins+ecriture_parenthese_si_negatif(a),b)}`;
				} else {
					// a/b +-n
					if (!this.sup2 && plus_ou_moins=="-" && n>a/b) {
						n = randint(1,4) // 
						a = n*b+randint(1,9) //(n*b+?)/b-n>0
					}
					texte = `$${tex_fraction(a,b)}${plus_ou_moins}${ecriture_parenthese_si_negatif(n)}=$`;
					texte_corr = texte ;
					texte_corr += `$${tex_fraction(a,b)}${plus_ou_moins}${tex_fraction(n+mise_en_evidence('\\times'+b),mise_en_evidence(b))}`;
					texte_corr += `=${tex_fraction(a+'+'+ecriture_parenthese_si_negatif(n*b),b)}`
				}
				num = calcul(n*b+plus_ou_moins+ecriture_parenthese_si_negatif(a))
				den = b 
			}
			texte_corr += `=${tex_fraction(num,den)}`
			texte_corr += simplification_de_fraction_avec_etapes(num,den)+'$';
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Un dénominateur multiple de l'autre\n\
2 : Cas général"]
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres relatifs'];

}

/**
* Simplifier l'écriture d'une somme de 2 relatifs et calculer
*
* On peut paramétrer les distances à zéro qui sont par défaut inférieures à 20
* @Auteur Rémi Angot
*/
function Exercice_simplification_somme_algebrique(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max;
	this.titre = "Simplifier l'écriture d'une somme de 2 relatifs et calculer"
	this.consigne = 'Simplifier puis calculer'
	this.spacing = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, s, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			s = choice([-1,1]) // + ou -
			
			if (s==1){
				texte = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' + ' + ecriture_nombre_relatif(b) + ' = ' + a + ecriture_algebrique(s*b) +' = ' + (a+b) + ' $';	
			} else {
				texte = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = \\dotfill $';
				texte_corr = '$ '+ ecriture_nombre_relatif(a) + ' - ' + ecriture_nombre_relatif(b) + ' = ' + a + ecriture_algebrique(s*b) +' = ' + (a-b) + ' $';	
			}
						
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
}

/**
* Effectuer la somme ou la différence de deux nombres relatifs
*
* * On peut paramétrer les distances à zéro qui sont par défaut inférieures à 20
* * On peut utiliser des écritures simplifiées (ce qui n'est pas le cas par défaut)
* @Auteur Rémi Angot
*/
/*function Exercice_additions_et_soustraction_de_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Additions et soustractions de nombres relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			if (a==1 & b==1) { // On s'assure que les 3 premières termes n'ont pas le même signe
				c = -1
			} else if (a==-1 & b==-1) {
				c = 1
			}
			else {
				c = randint(1,this.sup)*choice([-1,1]);	
			}
			d = randint(1,this.sup)*choice([-1,1]);
			e = randint(1,this.sup)*choice([-1,1]);
			s1 = choice([-1,1])
			s2 = choice([-1,1])
			if (s1==1 & s2==1){ // On s'assure que les 3 premières opérations ne sont pas identiques
				s3=-1
			} else if (s1==-1 & s2==-1){
				s3=1
			} else {
				s3 = choice([-1,1])	
			}
			s4 = choice([-1,1])
			if (this.sup2){
				texte = `$ ${lettre_depuis_chiffre(i+1)} = ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = ${somme_des_termes_par_signe([a,b,c,d,e])[0]}${ecriture_algebrique(somme_des_termes_par_signe([a,b,c,d,e])[1])} = ${a+b+c+d+e} $`;		
			} else {
				texte = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`	
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} $`;
				texte_corr += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = ${ecriture_nombre_relatif(a)}+${ecriture_nombre_relatif(s1*b)}+${ecriture_nombre_relatif(s2*c)}+${ecriture_nombre_relatif(s3*d)}+${ecriture_nombre_relatif(s4*e)} $`;
				texte_corr += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = ${a+s1*b+s2*c+s3*d+s4*e} $`;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}
*/

/**
* Effectuer la somme ou la différence de deux nombres relatifs
*
* * On peut paramétrer les distances à zéro qui sont par défaut inférieures à 20
* * On peut utiliser des écritures simplifiées (ce qui n'est pas le cas par défaut)
* @Auteur Rémi Angot modifications par Jean-Claude Lhote
*/
function Exercice_additions_et_soustraction_de_relatifsV2(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Additions et soustractions de nombres relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.nb_questions = 5;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let relatifs
		let sommes_signees
		for (let i = 0, a, b, c , d , e ,texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			relatifs=[]
			sommes_signees=[]
			a = -1;
			b = choice([-1,1]);
			if (a==-1 & b==-1)  c = 1;// On s'assure que les 3 premières termes n'ont pas le même signe
			else c=choice([-1,1]);
			a=randint(1,this.sup)*a
			b=randint(1,this.sup)*b
			c=randint(1,this.sup)*c
			d = randint(1,this.sup)*choice([-1,1]);
			e = randint(1,this.sup)*choice([-1,1]);
			s1 = choice([-1,1])
			s2 = choice([-1,1])
			if (s1==1 & s2==1){ // On s'assure que les 3 premières opérations ne sont pas identiques
				s3=-1
			} else if (s1==-1 & s2==-1){
				s3=1
			} else {
				s3 = choice([-1,1])	
			}
			s4 = choice([-1,1])
			if (this.sup2){		
				texte = `$ ${lettre_depuis_chiffre(i+1)} = ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`
				}
				relatifs=trie_positifs_negatifs([a,b,c,d,e])
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)}\\textbf{=}~${tex_nombrecoul(a)}${ecriture_algebriquec(b)}${ecriture_algebriquec(c)}${ecriture_algebriquec(d)}${ecriture_algebriquec(e)}\\\\\\phantom{A }\\textbf{=}~`;
				if (somme_des_termes_par_signe([a,b,c,d,e])[0]!=0&&somme_des_termes_par_signe([a,b,c,d,e])[1]!=0) {
					texte_corr +=`${tex_nombrecoul(relatifs[0])}${ecriture_algebriquec(relatifs[1])}${ecriture_algebriquec(relatifs[2])}${ecriture_algebriquec(relatifs[3])}${ecriture_algebriquec(relatifs[4])}\\\\\\phantom{A }\\textbf{=}~`
					texte_corr +=`${tex_nombrecoul(somme_des_termes_par_signe([a,b,c,d,e])[0])}${ecriture_algebriquec(somme_des_termes_par_signe([a,b,c,d,e])[1])}\\\\\\phantom{A }\\textbf{=}~`
					texte_corr +=`${tex_nombrecoul(a+b+c+d+e)} $`;
				}
				else
					if (somme_des_termes_par_signe([a,b,c,d,e])[0]!=0) texte_corr +=`${tex_nombrecoul(somme_des_termes_par_signe([a,b,c,d,e])[0])}$`
					else  texte_corr +=`${ecriture_algebriquec(somme_des_termes_par_signe([a,b,c,d,e])[1])}$`
			} 
			else {
				texte = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`	
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${a}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)}$`;
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_nombre_relatifc(a)}+${ecriture_nombre_relatifc(s1*b)}+${ecriture_nombre_relatifc(s2*c)}+${ecriture_nombre_relatifc(s3*d)}+${ecriture_nombre_relatifc(s4*e)} $`;

				relatifs=trie_positifs_negatifs([a,s1*b,s2*c,s3*d,s4*e])		

				if (relatifs[0]>0&relatifs[4]<0) {
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_nombre_relatifc(relatifs[0])}+${ecriture_nombre_relatifc(relatifs[1])}+${ecriture_nombre_relatifc(relatifs[2])}+${ecriture_nombre_relatifc(relatifs[3])}+${ecriture_nombre_relatifc(relatifs[4])} $`;
				}
				sommes_signees=somme_des_termes_par_signe([relatifs[0],relatifs[1],relatifs[2],relatifs[3],relatifs[4]])
				if (sommes_signees[0]!=0&&sommes_signees[1]!=0) {					
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_nombre_relatifc(sommes_signees[0])}+${ecriture_nombre_relatifc(sommes_signees[1])} $`;
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_algebriquec(a+s1*b+s2*c+s3*d+s4*e)} $`;
				}
				else
					if (sommes_signees[0]!=0) texte_corr +=`<br>\n$ \\phantom{A}=${ecriture_algebriquec(sommes_signees[0])}$`
					else  texte_corr +=`<br>\n$ \\phantom{A}=${ecriture_algebriquec(sommes_signees[1])}$`
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}



/**
* Effectuer la somme de 5 nombres relatifs.
*
* Pour la correction, on commence par effectuer la somme des termes de même signe
*
* * On peut paramétrer les distances à zéro qui sont par défaut inférieures à 20
* * On peut utiliser des écritures simplifiées (ce qui n'est pas le cas par défaut)
* @Auteur Rémi Angot
*/
function Exercice_additions_de_5_relatifs(max=20){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = max ;
	this.sup2 = false; // écriture simplifiée
	this.titre = "Additions de 5 nombres relatifs"
	this.consigne = 'Calculer'
	this.spacing = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, a, b,relatifs, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(1,this.sup)*choice([-1,1]);
			b = randint(1,this.sup)*choice([-1,1]);
			if (a==1 & b==1) { // On s'assure que les 3 premières termes n'ont pas le même signe
				c = -1
			} else if (a==-1 & b==-1) {
				c = 1
			}
			else {
				c = randint(1,this.sup)*choice([-1,1]);	
			}
			d = randint(1,this.sup)*choice([-1,1]);
			e = randint(1,this.sup)*choice([-1,1]);
			s1 = 1; // Que des additions
			s2 = 1;
			s3 = 1;
			s4 = 1;
			if (this.sup2){
				texte = `$ ${lettre_depuis_chiffre(i+1)} = ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `\\\\\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${a}${ecriture_algebrique(b)}${ecriture_algebrique(c)}${ecriture_algebrique(d)}${ecriture_algebrique(e)} = ${somme_des_termes_par_signe([a,b,c,d,e])[0]}${ecriture_algebrique(somme_des_termes_par_signe([a,b,c,d,e])[1])} = ${a+b+c+d+e} $`;		
			} else {
				texte = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} = \\dotfill $`;
				if (!sortie_html){
					texte += `<br>\n$ ${lettre_depuis_chiffre(i+1)} = \\dotfill $`	
				}
				texte_corr = `$ ${lettre_depuis_chiffre(i+1)} =  ${ecriture_nombre_relatif(a)}${signe(s1)}${ecriture_nombre_relatif(b)}${signe(s2)}${ecriture_nombre_relatif(c)}${signe(s3)}${ecriture_nombre_relatif(d)}${signe(s4)}${ecriture_nombre_relatif(e)} $`;
				relatifs=trie_positifs_negatifs([a,s1*b,s2*c,s3*d,s4*e])		

				if (relatifs[0]>0&relatifs[4]<0) {
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_nombre_relatifc(relatifs[0])}+${ecriture_nombre_relatifc(relatifs[1])}+${ecriture_nombre_relatifc(relatifs[2])}+${ecriture_nombre_relatifc(relatifs[3])}+${ecriture_nombre_relatifc(relatifs[4])} $`;
				}
				sommes_signees=somme_des_termes_par_signe([relatifs[0],relatifs[1],relatifs[2],relatifs[3],relatifs[4]])
				if (sommes_signees[0]!=0&&sommes_signees[1]!=0) {					
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_nombre_relatifc(sommes_signees[0])}+${ecriture_nombre_relatifc(sommes_signees[1])} $`;
				texte_corr += `<br>\n$ \\phantom{A}= ${ecriture_algebriquec(a+s1*b+s2*c+s3*d+s4*e)} $`;
				}
				else
					if (sommes_signees[0]!=0) texte_corr +=`<br>\n$ \\phantom{A}=${ecriture_algebriquec(sommes_signees[0])}$`
					else  texte_corr +=`<br>\n$ \\phantom{A}=${ecriture_algebriquec(sommes_signees[1])}$`
			}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale',99999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des écritures simplifiées'];	
}
/**
* x, y, z étant 3 entiers compris entre 2 et 9, calculer : 
* * kx
* * kx-y
* * xy
* * x+y
* * x+y+z
* * x(y+z)
* * x^2
* * x^2+ky
* * x^2+y^2
* * ax^2+y^2
* * ax^2+bx+c
* @Auteur Rémi Angot
*/
function Exercice_substituer(difficulte=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Substitution";
	this.consigne = 'Calculer';
	this.spacing = 1;
	this.consigne_modifiable = false;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let k = randint(2,9);
		let k2 = randint(2,9);
		let k3 = randint(2,9);
		if (this.sup>1){ // si difficulté 2, k, k2 et k3 peuvent être négatifs !!! La correction est à faire. Exercice non fini
			k = k*choice([-1,1]);
			k2 = k2*choice([-1,1]);
			k3 = k3*choice([-1,1]);
		}
		let valeurs_possibles = range(9,[0,1]) // Toutes les valeurs de 2 à 9
		let x = choice(valeurs_possibles);
		enleve_element(valeurs_possibles,x);
		let y = choice(valeurs_possibles);
		enleve_element(valeurs_possibles,y);
		let z = choice(valeurs_possibles);
		// x, y et z sont différents
		this.consigne = `Calculer pour $x=${x}$, $y=${y}$ et $z=${z}$.`
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x=${k}\\times ${x}=${k*x}$`;
					break ;
				case 2 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x-y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x-y=${k}\\times ${x}-${y}=${k*x-y}$`;
					break ;
				case 3 :
					texte = `$${lettre_depuis_chiffre(i+1)}=xy$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=xy=${x}\\times ${y}=${x*y}$`;
					break ;
				case 4 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x+y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x+y=${x}+${y}=${x+y}$`;
					break ;
				case 5 :
					texte = `$${lettre_depuis_chiffre(i+1)}=xy+z$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=xy+z=${x}\\times ${y}+${z}=${x*y+z}$`;
					break ;
				case 6 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x(y+z)$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x(y+z)=${x}\\times(${y}+${z})=${x*(y+z)}$`;
					break ;
				case 7 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x^2+${ecriture_parenthese_si_negatif(k)}y$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x^2+${ecriture_parenthese_si_negatif(k)}y=${x}^2+${ecriture_parenthese_si_negatif(k)}\\times ${y}=${x*x}+${ecriture_parenthese_si_negatif(k)}\\times ${y}=${x*x+k*y}$`;
					break ;
				case 8 :
					texte = `$${lettre_depuis_chiffre(i+1)}=x^2+y^2$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=x^2+y^2=${x}^2+${y}^2=${x*x}+${y*y}=${x*x+y*y}$`;
					break ;
				case 9 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+y^2$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+y^2=${k}\\times ${x}^2+${y}^2=${k}\\times ${x*x}+${y*y}=${k*x*x+y*y}$`;
					break ;
				case 10 :
					texte = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+${ecriture_parenthese_si_negatif(k2)}x+${ecriture_parenthese_si_negatif(k3)}$`;
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}x^2+${ecriture_parenthese_si_negatif(k2)}x+${ecriture_parenthese_si_negatif(k3)}=${k}\\times ${x}^2+${ecriture_parenthese_si_negatif(k2)}\\times ${ecriture_parenthese_si_negatif(x)}+${ecriture_parenthese_si_negatif(k3)}=${k}\\times ${x*x}+${ecriture_parenthese_si_negatif(k2)}\\times ${x}+${ecriture_parenthese_si_negatif(k3)}=${k*x*x+k2*x+k3}$`;
					break ;
				
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}

/**
* Déterminer la valeur d'un angle dans un triangle.
*
* Correction avec détails ou pas. 9 cas différents
* * On connait 2 angles sur 3.
* * Dans un triangle rectangle, on connait un angle aigu.
* * Dans un triangle isocèle, on connait un angle à la base.
* * Dans un triangle isocèle, on connait l'angle au sommet principal.
* * Quelle est la mesure d'un angle aigu dans un triangle rectangle qui a 2 angles égaux ?
* * Dans un triangle rectangle, un angle aigu mesure le double de l'autre.
* * Dans un triangle rectangle, un angle aigu mesure le quart de l'autre.
* * Dans un triangle rectangle, un angle aigu mesure 5 fois l'autre.
* * Un triangle a 3 angles égaux.
* * Dans un triangle rectangle, un angle mesure le tiers de l'autre.
* @Auteur Jean-Claude Lhote
*/
function Exercice_angles_triangles(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ;
	this.titre = "Somme des angles dans un triangle";
	this.consigne = '';
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1.5;
	sortie_html ? this.spacing = 2 : this.spacing = 1.5;
	this.nb_questions=5;
	this.consigne_modifiable = false;
	this.correction_detaillee_disponible = true;
	this.nb_cols=1;
	this.nb_cols_corr=1;

	let type_de_questions_disponibles
	let troisieme_angle = function(a1,a2) {
		if (a1+a2<=180)  return 180-(a1+a2)
		else return -1;
	}

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		if (this.sup==1) type_de_questions_disponibles = [1,2,4,5,9]
		else
			if (this.sup==2) type_de_questions_disponibles = [3,6,7,8,10,11,12]
			else type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10,11,12]
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		this.consigne=`Calculer l'angle demandé dans les triangles suivants :`
		let lettre1,lettre2,lettre3,s1,s2,s3
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			lettre1 = randint(1,26)	// aleatoirisation du nom des points
			lettre2 = randint(1, 26, [lettre1])
			s1 = lettre_depuis_chiffre(lettre1)
			s2 = lettre_depuis_chiffre(lettre2)
			lettre3 = randint(1, 24, [lettre1, lettre2])
			s3 = lettre_depuis_chiffre(lettre3)
			if (this.correction_detaillee) texte_corr = `Dans un triangle, la somme des angles est égale à $180\\degree$.<br>`;
			else texte_corr=``;
			switch (type_de_questions){
				case 1 :  // triangle quelconque 2 angles connus
					angle1=randint(10,40);
					angle2=randint(20,100);
					texte = `$${s1+s2+s3}$ est un triangle quelconque. L'angle $\\widehat{${s1+s2+s3}}$ mesure $${angle1}\\degree$ et l'angle $\\widehat{${s2+s1+s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2+s3+s1}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr+=`$\\widehat{${s1+s2+s3}} + \\widehat{${s2+s3+s1}} + \\widehat{${s2+s1+s3}}=180\\degree$<br>`;
						texte_corr+=`Donc $\\widehat{${s2+s3+s1}}=180- \\left(\\widehat{${s1+s2+s3}} + \\widehat{${s2+s1+s3}}\\right)$.<br>D'où `
					}
					texte_corr += `$\\widehat{${s2+s3+s1}}$= $180\\degree-\\left(${angle1}\\degree+${angle2}\\degree\\right)=180\\degree-${angle1+angle2}\\degree=${troisieme_angle(angle1,angle2)}\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2+s3+s1}}$ mesure $${troisieme_angle(angle1,angle2)}\\degree$.`
					break ;
				case 2 : // Triangle rectangle Un angle aigu connu 
					angle1=90;
					angle2=randint(5,85);
					texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s2}$ et l'angle $\\widehat{${s2+s1+s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2+s3+s1}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme l'angle $\\widehat{${s1+s2+s3}}$ est droit, les angles $\\widehat{${s2+s3+s1}}$ et $\\widehat{${s2+s1+s3}}$ sont complémentaires.<br>`
						texte_corr +=`On a donc : $\\widehat{${s2+s3+s1}}+ \\widehat{${s2+s1+s3}}=90\\degree$<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2+s3+s1}}=90\\degree-${angle2}\\degree=${90-angle2}\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s2+s3+s1}}$ mesure $${90-angle2}\\degree$.`;
					break ;
				case 3 : // triangle isocèle, angle au sommet principal connu
					angle1=randint(10,170);
					angle2=(180-angle1)/2;
					texte = `$${s1+s2+s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s2+s1+s3}}$ mesure $${angle1}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2+s3+s1}}$ ?`;
					
					if (this.correction_detaillee) {
						texte_corr += `Les angles à la base d'un triangle isocèle sont de même mesure.<br>`
						texte_corr +=`D'où $\\widehat{${s1+s2+s3}}=\\widehat{${s2+s3+s1}}$.<br>`
						texte_corr +=`On a donc : $\\widehat{${s2+s1+s3}}+2\\times \\widehat{${s2+s3+s1}}=180\\degree$.<br>`;
						texte_corr +=`Soit  $${angle1}\\degree+2\\times \\widehat{${s2+s3+s1}}=180\\degree$.<br>`;
						texte_corr +=`D'où $2\\times \\widehat{${s2+s3+s1}}=180\\degree-${angle1}\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2+s3+s1}}=\\left(180\\degree-${angle1}\\degree\\right)\\div 2=${180-angle1}\\degree\\div 2=${tex_nombrec((180-angle1)/2)}\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s2+s3+s1}}$ mesure $${tex_nombrec((180-angle1)/2)}\\degree$.`;
					break ;
				case 4 : // triangle isocèle, angle à la base connu
					angle2=randint(10,80);
					angle1=180-angle2*2;
					texte = `$${s1+s2+s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s1+s2+s3}}$ mesure $${angle2}\\degree$.<br>Quelle est la mesure de l'angle $\\widehat{${s2+s1+s3}}$ ?`;

					if (this.correction_detaillee) {
					texte_corr+=`Les deux angles à la base d'un triangle isocèle sont égaux.<br>`;
					texte_corr += `Donc $\\widehat{${s1+s2+s3}}=\\widehat{${s2+s3+s1}}=${angle2}\\degree$.<br>D'où `
					}
					texte_corr += `$\\widehat{${s2+s1+s3}}=180\\degree-2\\times${angle2}\\degree=180\\degree-${2*angle2}\\degree=${180-2*angle2}\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2+s1+s3}}$ mesure $${180-2*angle2}\\degree$.`;
					break ;
				case 5 :  // cas non aléatoires triangle rectangle isocèle
					angle1=90;
					angle2=45;
					texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s2}$ et $\\widehat{${s2+s1+s3}}=\\widehat{${s2+s3+s1}}$.<br>Quelle est la mesure de l'angle $\\widehat{${s2+s3+s1}}$ ?`;

					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s2+s1+s3}}=\\widehat{${s2+s3+s1}}$,<br>`;
						texte_corr += `on a : $2 \\times \\widehat{${s2+s1+s3}} + 90\\degree=180\\degree$.<br>D'où `;
						texte_corr += ` $2 \\times \\widehat{${s2+s1+s3}}=180\\degree-90\\degree=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2+s1+s3}}=90\\degree \\div 2=45\\degree$.<br>`;
					texte_corr += `L'angle $\\widehat{${s2+s1+s3}}$ mesure $45\\degree$.`;
				
					break ;
				case 6 : // cas non aléatoires triangle rectangle 30,60,90
					texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1+s2+s3}}$ mesure le double de l'angle $\\widehat{${s1+s3+s2}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s1+s2+s3}}=2\\times\\widehat{${s1+s3+s2}}$ et comme $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ sont complémentaires,<br>`;
						texte_corr += `on a : $2 \\times \\widehat{${s1+s3+s2}} + \\widehat{${s1+s3+s2}}=90\\degree$.<br>D'où `;
						texte_corr += ` $3 \\times \\widehat{${s1+s3+s2}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1+s3+s2}}=90\\degree \\div 3=30\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1+s2+s3}}=2\\times\\widehat{${s1+s3+s2}}=2\\times 30\\degree=60\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $30\\degree$ et l'angle $\\widehat{${s1+s2+s3}}$ mesure $60\\degree$.`;
				
					break ;
				case 7 :// cas non aléatoires triangle rectangle 18,72,90
				texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1+s3+s2}}$ mesure le quart de l'angle $\\widehat{${s1+s2+s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ ?`;
				if (this.correction_detaillee) {
					texte_corr += `Comme $\\widehat{${s1+s2+s3}}=\\dfrac{\\widehat{${s1+s3+s2}}}{4}$, on a $\\widehat{${s1+s3+s2}}=4\\times\\widehat{${s1+s2+s3}}$.<br>`;
					texte_corr += `De plus $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ sont complémentaires.<br>`;
					texte_corr += `D'où : $4 \\times \\widehat{${s1+s2+s3}} + \\widehat{${s1+s2+s3}}=90\\degree$.<br>D'où `;
					texte_corr += ` $5 \\times \\widehat{${s1+s2+s3}}=90\\degree$.<br>D'où `;
				}
				texte_corr += `$\\widehat{${s1+s2+s3}}=90\\degree \\div 5=18\\degree$.<br>`;
				texte_corr += `$\\widehat{${s1+s3+s2}}=4\\times\\widehat{${s1+s2+s3}}=4\\times 18\\degree=72\\degree$.<br>`;
				texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $72\\degree$ et l'angle $\\widehat{${s1+s2+s3}}$ mesure $18\\degree$.`;
					break ;
				case 8 :// cas non aléatoires triangle rectangle 15,75,90
				texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1+s2+s3}}$ est cinq fois plus grand que l'angle $\\widehat{${s1+s3+s2}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ ?`;
				if (this.correction_detaillee) {
					texte_corr += `$\\widehat{${s1+s2+s3}}=5\\times\\widehat{${s1+s3+s2}}$ et comme $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ sont complémentaires,<br>`;
					texte_corr += ` on a : $5 \\times \\widehat{${s1+s3+s2}} + \\widehat{${s1+s3+s2}}=90\\degree$.<br>D'où `;
					texte_corr += ` $6 \\times \\widehat{${s1+s3+s2}}=90\\degree$.<br>D'où `;
				}
				texte_corr += `$\\widehat{${s1+s3+s2}}=90\\degree \\div 6=15\\degree$<br>`;
				texte_corr += `$\\widehat{${s1+s2+s3}}=5\\times\\widehat{${s1+s3+s2}}=5\\times 15\\degree=75\\degree$<br>`;
				texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $15\\degree$ et l'angle $\\widehat{${s1+s2+s3}}$ mesure $75\\degree$.`;
				break ;
				case 9 : //cas non aléatoire triangle équilatéral
					texte = `$${s1+s2+s3}$ est un triangle dont les trois angles sont égaux. Quelles sont les mesures de ses angles ?`;
					if (this.correction_detaillee) {
						texte_corr += `De plus, $\\widehat{${s1+s2+s3}}=\\widehat{${s1+s3+s2}}=\\widehat{${s2+s1+s3}}$<br>`
						texte_corr += `D'où $3\\times\\widehat{${s1+s2+s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $\\widehat{${s1+s2+s3}}=180\\degree\\div 3=60\\degree$.<br>`;
					}	
					texte_corr += `On a donc $\\widehat{${s1+s2+s3}}=\\widehat{${s1+s3+s2}}=\\widehat{${s2+s1+s3}}=60\\degree$.<br>`;
					texte_corr += `Le triangle $${s1+s2+s3}$ est un triangle équilatéral.`
					break ;
				case 10 : //cas non aléatoire triangle rectangle 22.5, 67.5,90
					texte = `$${s1+s2+s3}$ est un triangle rectangle en $${s1}$. L'angle $\\widehat{${s1+s3+s2}}$ mesure le tiers de l'angle $\\widehat{${s1+s2+s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s1+s2+s3}}=\\dfrac{\\widehat{${s1+s3+s2}}}{3}$, on a $\\widehat{${s1+s3+s2}}=3\\times\\widehat{${s1+s2+s3}}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1+s2+s3}}$ et $\\widehat{${s1+s3+s2}}$ sont complémentaires.<br>`;
						texte_corr += `D'où : $3 \\times \\widehat{${s1+s2+s3}} + \\widehat{${s1+s2+s3}}=90\\degree$.<br>D'où `;
						texte_corr += ` $4 \\times \\widehat{${s1+s2+s3}}=90\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s1+s2+s3}}=90\\degree \\div 4=22,5\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1+s3+s2}}=3\\times\\widehat{${s1+s2+s3}}=3\\times 22,5\\degree=67,5\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${s1+s2+s3}}$ mesure $22,5\\degree$.`;
					break ;
				case 11 : //cas non aléatoire triangle 67.5 , 67.5 , 45.
					texte = `$${s1+s2+s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s2+s1+s3}}$ mesure les deux tiers de l'angle $\\widehat{${s1+s2+s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$, $\\widehat{${s1+s3+s2}}$ et $\\widehat{${s2+s1+s3}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `Comme $\\widehat{${s2+s1+s3}}=\\dfrac{2\\times \\widehat{${s1+s3+s2}}}{3}$, on a $\\widehat{${s1+s3+s2}}=\\dfrac{3\\times\\widehat{${s2+s1+s3}}}{2}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1+s3+s2}}$ et $\\widehat{${s1+s2+s3}}$ sont égaux, alors $\\widehat{${s1+s2+s3}}=\\dfrac{3\\times\\widehat{${s2+s1+s3}}}{2}$.<br>`;
						texte_corr += `D'où : $\\dfrac{3 \\times \\widehat{${s2+s1+s3}}}{2}\\times 2 + \\widehat{${s2+s1+s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $3 \\times \\widehat{${s2+s1+s3}} + \\widehat{${s2+s1+s3}}=180\\degree$.<br>D'où `;
						texte_corr += ` $4 \\times \\widehat{${s2+s1+s3}}=180\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2+s1+s3}}=180\\degree \\div 4=45\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1+s3+s2}}=\\dfrac{3\\times\\widehat{${s2+s1+s3}}}{2}=\\dfrac{3\\times 45\\degree}{2}=\\dfrac{135\\degree}{2}=67,5\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $67,5\\degree$, l'angle $\\widehat{${s1+s2+s3}}$ mesure $67,5\\degree$ et l'angle $\\widehat{${s2+s1+s3}}$ mesure $45\\degree$`;
					break;
					case 12 : //cas non aléatoire triangle 72 , 72 , 36.
					texte = `$${s1+s2+s3}$ est un triangle isocèle en $${s1}$. L'angle $\\widehat{${s1+s2+s3}}$ mesure le double de l'angle $\\widehat{${s2+s1+s3}}$.<br>Quelles sont les mesures des angles $\\widehat{${s1+s2+s3}}$, $\\widehat{${s1+s3+s2}}$ et $\\widehat{${s2+s1+s3}}$ ?`;
					if (this.correction_detaillee) {
						texte_corr += `On a $\\widehat{${s1+s2+s3}}=2\\times \\widehat{${s2+s1+s3}}$.<br>`;
						texte_corr += `De plus $\\widehat{${s1+s3+s2}}$ et $\\widehat{${s1+s2+s3}}$ sont égaux, alors $\\widehat{${s1+s3+s2}}=2\\times\\widehat{${s2+s1+s3}}$.<br>`;
						texte_corr += `D'où : $2 \\times \\widehat{${s2+s1+s3}}\\times 2 + \\widehat{${s2+s1+s3}}=180\\degree$.<br>`;
						texte_corr += `D'où : $4 \\times \\widehat{${s2+s1+s3}} + \\widehat{${s2+s1+s3}}=180\\degree$.<br>D'où `;
						texte_corr += ` $5 \\times \\widehat{${s2+s1+s3}}=180\\degree$.<br>D'où `;
					}
					texte_corr += `$\\widehat{${s2+s1+s3}}=180\\degree \\div 5=36\\degree$.<br>`;
					texte_corr += `$\\widehat{${s1+s3+s2}}=2\\times\\widehat{${s2+s1+s3}}=2\\times 36\\degree=72\\degree$<br>`;
					texte_corr += `L'angle $\\widehat{${s1+s3+s2}}$ mesure $72\\degree$, l'angle $\\widehat{${s1+s2+s3}}$ mesure $72\\degree$ et l'angle $\\widehat{${s2+s1+s3}}$ mesure $36\\degree$`;
					break;
				
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficuté',3,"1 : Facile \n 2 : Difficile \n 3 : Mélange des deux niveaux"]
}

/**
* @auteur Jean-Claude Lhote
*/
 function Calculer_des_frequences(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des fréquences";
	this.consigne = "";
	this.nb_questions = 1;
	this.spacing = 1;
	this.spacing_corr = 1.5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;	 
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
	
		for (let i = 0, nombre_des, nombre_faces, nombre_tirages,index_valeur,frequence,tirages, texte,texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
		if (this.sup==1) { // ici on lance des dés
			nombre_des=randint(1,2);
			nombre_faces=choice([4,6,8,10]);
			nombre_tirages=choice([50,100,200,500,1000]);
			tirages=tirer_les_des(nombre_tirages,nombre_faces,nombre_des); // on récupère une série rangée dans l'ordre croissant avec les effectifs correspondants
			do index_valeur=randint(0,tirages.length-1);
			while (tirages[index_valeur][1]==0) // on choisi au hasard l'index d'une valeur dont l'effectif est différent de 0.
			if (nombre_des>1) {
				texte=`On a réalisé $${nombre_tirages}$ lancers de $${nombre_des}$ dés à $${nombre_faces}$ faces.<br>`;
			}
			else {
				texte=`On a réalisé $${nombre_tirages}$ lancers d'un dé à $${nombre_faces}$ faces.<br>`;
			}
			texte+='Les résultats sont inscrits dans le tableau ci-dessous :<br><br>'
			if (tirages.length>12) {
				texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c';  // construction du tableau des effectifs 1/2
				for (let j=0;j<=Math.round(tirages.length/2);j++)		texte+='|c';
				texte+='}\\hline  \\text{Scores}';
				for (let j=0;j<Math.round(tirages.length/2);j++) 		texte+='&'+tirages[j][0];
				texte+='\\\\\\hline \\text{Nombre d\'apparitions}'
				for (let j=0;j<Math.round(tirages.length/2);j++) 		texte+='&'+tirages[j][1];
				texte+='\\\\\\hline\\end{array}$<br><br>'

				texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c';  // construction du tableau des effectifs 2/2
				for (let j=Math.round(tirages.length/2);j<=tirages.length;j++)		texte+='|c';
				texte+='}\\hline  \\text{Scores}';
				for (let j=Math.round(tirages.length/2);j<tirages.length;j++) 		texte+='&'+tirages[j][0];
				texte+='\\\\\\hline \\text{Nombre d\'apparitions}'
				for (let j=Math.round(tirages.length/2);j<tirages.length;j++) 		texte+='&'+tirages[j][1];
				texte+='\\\\\\hline\\end{array}$'
			}
			else {
				texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c';  // construction du tableau des effectifs en un seul morceau
				for (let j=0;j<=tirages.length;j++)		texte+='|c';
				texte+='}\\hline  \\text{Scores}';
				for (let j=0;j<tirages.length;j++) 		texte+='&'+tirages[j][0];
				texte+='\\\\\\hline \\text{Nombre d\'apparitions}'
				for (let j=0;j<tirages.length;j++) 		texte+='&'+tirages[j][1];
				texte+='\\\\\\hline\\end{array}$'
			}

			texte+='<br><br> Calculer la fréquence de la valeur '+`$${calcul(nombre_des+index_valeur)}$.`
			texte_corr='La valeur '+`$${calcul(nombre_des+index_valeur)}$ apparaît `+`$${tirages[index_valeur][1]}$ fois.<br>Le nombre total de lancers est $${tex_nombre(nombre_tirages)}$.<br>`;
			texte_corr+='La fréquence de la valeur '+`$${calcul(nombre_des+index_valeur)}$`+' est '+`$${tex_fraction(tirages[index_valeur][1],tex_nombre(nombre_tirages))}=${tex_nombre(calcul(tirages[index_valeur][1]/nombre_tirages))}$<br>`;
			texte_corr+='Soit '+`$${tex_nombre(calcul(tirages[index_valeur][1]*100/nombre_tirages))}\\thickspace\\%$.`
		}
		else if (this.sup==2) { // ici on trie des notes
			nombre_notes=choice([8,10,12]);
			notes=liste_de_notes(nombre_notes,randint(0,7),randint(13,20));  // on récupère une liste de notes (série brute)
			index_valeur=randint(0,notes.length-1);  // on choisi une des notes au hasard
			frequence=0;
			for(j=0;j<notes.length;j++) {   // frequence va contenir l'effectif de la note choisie
				if (notes[j]==notes[index_valeur]) frequence++;
			}
			texte=`${prenom()} a obtenu ces notes ce trimestre-ci en mathématiques :<br>`;
			texte+=`$${notes[0]}$`
			for (let j=1;j<nombre_notes-1;j++) 	texte+=`; $${notes[j]}$ `;	// On liste les notes (série brute)
			texte+=`et $${notes[nombre_notes-1]}$.`;

			texte+=`<br><br>Calculer la fréquence de la note $${notes[index_valeur]}$.`
			texte_corr=`La note $${notes[index_valeur]}$ a été obtenue $${frequence}$ fois.<br> Il y a $${nombre_notes}$ notes<br>`;
			texte_corr+=`Donc la fréquence de la note $${notes[index_valeur]}$ est : `+`$${tex_fraction(tex_nombre(frequence),tex_nombre(nombre_notes))}$`;
			if (arrondi(frequence/nombre_notes,3)==frequence/nombre_notes) {  // valeurs exactes
				texte_corr+=`$=${arrondi_virgule(frequence/nombre_notes,3)}$<br>`;	// fréquence à 3 chiffres significatifs
				texte_corr+='Soit '+`$${tex_nombre(calcul(frequence*100/nombre_notes))}\\thickspace\\%$.` // fréquence en pourcentage avec 1 décimale
			}
			else {
				texte_corr+=`$\\approx${arrondi_virgule(frequence/nombre_notes,3)}$`  // valeurs arrondies
				texte_corr+='Soit environ '+`$${arrondi_virgule(calcul(frequence*100/nombre_notes),1)}\\thickspace\\%$.`		
			}
			
		}
		else {  // ici on relève des températures
			let mois=randint(1,12);
			let annee=randint(1980,2019);
			let temperatures_de_base=[3,5,9,13,19,24,26,25,23,18,10,5];
			nombre_temperatures=jours_par_mois(mois);
			temperatures=un_mois_de_temperature(temperatures_de_base[mois-1],mois,annee); // on récupère une série de température correspondant à 1 mois d'une année (série brute)
			index_valeur=randint(0,temperatures.length-1);  // on choisi l'index d'une valeur au hasard
			frequence=0;
			for(j=0;j<temperatures.length;j++) {
				if (temperatures[j]==temperatures[index_valeur]) frequence++;  // frequence contient l'effectif de cette valeur
			}
			texte=`En ${nom_du_mois(mois)} ${annee}, à ${choice(['Moscou','Berlin','Paris','Bruxelles','Rome','Belgrade'])}, on a relevé les températures suivantes<br>`;

			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // On construit le tableau des températures
			texte+='|c';
			for (let j=0;j<Math.round(temperatures.length/2);j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=0;j<Math.round(temperatures.length/2);j++)  texte+='&'+tex_nombre(j+1);
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}';
			for (j=0;j<Math.round(temperatures.length/2);j++) 	texte+='&'+temperatures[j];
			texte+='\\\\\\hline\\end{array}$<br><br>';
			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // On construit le tableau des températures
			texte+='|c';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++)  texte+='&'+tex_nombre(j+1);
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}';
			for (j=Math.round(temperatures.length/2);j<temperatures.length;j++) 	texte+='&'+temperatures[j];
			texte+='\\\\\\hline\\end{array}$';
			

			texte+='<br><br>Calculer la fréquence de la température '+`$${temperatures[index_valeur]}^\\circ\\text{C}$.`;
			texte_corr=`En ${nom_du_mois(mois)} ${annee}, à ${choice(['Moscou','Berlin','Paris','Bruxelles','Rome','Belgrade'])}, la température $${temperatures[index_valeur]}^\\circ\\text{C}$ a été relevée $${frequence}$ fois.<br>`;
			texte_corr+=`Il y a $${jours_par_mois(mois)}$ jours ce mois-ci.<br> La fréquence de la température $${temperatures[index_valeur]}^\\circ\\text{C}$ est :<br>`;
			texte_corr+=`$${tex_fraction(tex_nombre(frequence),tex_nombre(jours_par_mois(mois)))}$`;
			if (arrondi(frequence/nombre_temperatures,3)==frequence/nombre_temperatures) {	// valeurs exactes
				texte_corr+=`$=${arrondi_virgule(frequence/nombre_temperatures,3)}$<br>`;
				texte_corr+='Soit '+`$${tex_nombre(calcul(frequence*100/nombre_temperatures))}\\thickspace\\%$.`

			}
			else {
				texte_corr+=`$\\approx${arrondi_virgule(frequence/nombre_temperatures,3)}$<br>`; // valeurs arrondies
				texte_corr+='Soit environ '+`$${arrondi_virgule(calcul(frequence*100/nombre_temperatures),1)}\\thickspace\\%$.`
			}
		}			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de séries',3,"1 : Lancers de dés \n 2 : Liste de notes\n 3 : Un mois de températures"];
}
 /**
* @auteur Jean-Claude Lhote
*/
function Calculer_des_moyennes(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des moyennes";
	this.consigne = "";
	this.nb_questions = 1;
	this.spacing = 1;
	this.spacing_corr = 1.5;
	this.nb_cols_corr = 1;	
	this.nb_cols=1;  
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
	
		for (let i = 0, nombre_notes,notes,somme,nombre_temperatures,temperatures, texte,texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
		if (this.sup==1) { // ici on trie des notes
			nombre_notes=choice([8,10,12]);
			notes=liste_de_notes(nombre_notes,randint(0,7),randint(13,20)); // on récupère une série de notes (série brute)
			for (somme=0,j=0;j<nombre_notes;j++) somme+=notes[j];
		
			texte=`${prenom()} a obtenu ces notes ce trimestre-ci en mathématiques :<br>`;
			texte+=`$${notes[0]}$`
			for (let j=1;j<nombre_notes-1;j++) 	texte+=`; $${notes[j]}$ `;	// On liste les notes
			texte+=`et $${notes[nombre_notes-1]}$.<br>`;
			texte+=`Calculer la moyenne de cet élève en mathématiques.`
			texte_corr=`La somme des notes est : $${somme}$.<br> Il y a $${nombre_notes}$ notes<br>`;
			texte_corr+='Donc la moyenne de cet élève est : '+`$${tex_fraction(tex_nombre(somme),tex_nombre(nombre_notes))}$`;
			if (arrondi(somme/nombre_notes,2)==somme/nombre_notes) texte_corr+=`$=${arrondi_virgule(somme/nombre_notes,2)}$<br>`; // moyenne exacte
			else texte_corr+=`$\\approx${arrondi_virgule(somme/nombre_notes,2)}$`	// moyenne arrondie
		}
		else {  // ici on relève des températures
			let mois=randint(1,12);
			let annee=randint(1980,2019);
			let temperatures_de_base=[3,5,9,13,19,24,26,25,23,18,10,5];
			nombre_temperatures=jours_par_mois(mois);
			temperatures=un_mois_de_temperature(temperatures_de_base[mois-1],mois,annee); // série brute de un mois de température
			somme=0;
			texte=`En ${nom_du_mois(mois)} ${annee}, à ${choice(['Moscou','Berlin','Paris','Bruxelles','Rome','Belgrade'])}, on a relevé les températures suivantes<br>`;
			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // tableau des températures 1/2
			texte+='|c';
			for (let j=0;j<Math.round(temperatures.length/2);j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=0;j<Math.round(temperatures.length/2);j++)  texte+='&'+tex_nombre(j+1)
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}'
			for (j=0;j<Math.round(temperatures.length/2);j++) 	{
				texte+='&'+temperatures[j];
				somme+=temperatures[j];
			}
			texte+='\\\\\\hline\\end{array}$<br><br>';
			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // tableau des températures 2/2
			texte+='|c';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++)  texte+='&'+tex_nombre(j+1)
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}'
			for (j=Math.round(temperatures.length/2);j<temperatures.length;j++) 	{
				texte+='&'+temperatures[j];
				somme+=temperatures[j];
			}
			texte+='\\\\\\hline\\end{array}$<br><br>';
			

			texte+='Calculer la température moyenne de ce mois.';
			texte_corr=`En ${nom_du_mois(mois)} ${annee}, la somme des températures est `+`$${somme}^\\circ\\text{C}$.<br> Il y a $${temperatures.length}$ jours ce mois-ci.<br> La température moyenne est :<br>`;
			texte_corr+=`$${tex_fraction(tex_nombre(somme)+`^\\circ\\text{C}`,tex_nombre(nombre_temperatures))}$`
		
			if (arrondi(somme/nombre_temperatures,2)==somme/nombre_temperatures)  
				texte_corr+=`$=${arrondi_virgule(somme/nombre_temperatures,2)}^\\circ\\text{C}$`; // moyenne exacte
			else 				texte_corr+=`$\\approx${arrondi_virgule(somme/nombre_temperatures,2)}^\\circ\\text{C}$`;  // moyenne arrondie
		}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de séries',2,"1 : Série de notes\n 2 : Série de températures"];
}

 /**
* @auteur Jean-Claude Lhote
*/
function Calculer_des_etendues(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des étendues";
	this.consigne = "";
	this.nb_questions = 1;
	this.spacing = 1;
	this.spacing_corr = 1;
	this.nb_cols_corr = 1;	
	this.nb_cols=1; 
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
	
		for (let i = 0, nombre_notes,notes,min,max,temperatures,nombre_temperatures, texte,texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
		if (this.sup==1) { // ici on trie des notes
			nombre_notes=randint(8,12);
			notes=liste_de_notes(nombre_notes,randint(0,7),randint(13,20)); // on récupère une série de notes (série brute)
			for (min=20,max=0,j=0;j<nombre_notes;j++) {  // On cherche la note minimum et la note maximum
				min=Math.min(notes[j],min);
				max=Math.max(notes[j],max);
			}
			texte=`${prenom()} a obtenu ces notes ce trimestre-ci en mathématiques :<br>`;
			texte+=`$${notes[0]}$`
			for (let j=1;j<nombre_notes-1;j++) 	texte+=`; $${notes[j]}$ `;	// On liste les notes
			texte+=`et $${notes[nombre_notes-1]}$.<br>`;
			texte+=`Calculer l\'étendue de cette série de notes.`
			texte_corr=`La note la plus basse est : $${min}$.<br>La note la plus haute est $${max}$<br>`;
			texte_corr+='Donc l\'étendue de cette série est : '+`$${tex_nombre(max)}-${tex_nombre(min)}=${tex_nombre(max-min)}$`;
		}
		else {  // ici on relève des températures
			let mois=randint(1,12);
			let annee=randint(1980,2019);
			let temperatures_de_base=[3,5,9,13,19,24,26,25,23,18,10,5];
			nombre_temperatures=jours_par_mois(mois);
			temperatures=un_mois_de_temperature(temperatures_de_base[mois-1],mois,annee); // série brute de un mois de température
			max=0;
			min=20;
			texte=`En ${nom_du_mois(mois)} ${annee}, à ${choice(['Moscou','Berlin','Paris','Bruxelles','Rome','Belgrade'])}, on a relevé les températures suivantes<br>`;
			
			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // tableau des températures 1/2
			texte+='|c';
			for (let j=0;j<Math.round(temperatures.length/2);j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=0;j<Math.round(temperatures.length/2);j++)  	texte+='&'+tex_nombre(j+1)
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}'
			for (j=0;j<Math.round(temperatures.length/2);j++) 	{  // on cherche le minimum et le maximum
				texte+='&'+temperatures[j];
				min=Math.min(temperatures[j],min);
				max=Math.max(temperatures[j],max);
			}
			texte+='\\\\\\hline\\end{array}$<br><br>';

			texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // tableau des températures 2/2
			texte+='|c';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++) texte+='|c';
			texte+='}\\hline  \\text{Jour}';
			for (let j=Math.round(temperatures.length/2);j<temperatures.length;j++)  	texte+='&'+tex_nombre(j+1)
			texte+='\\\\\\hline \\text{Température\\thickspace en} \\thickspace ^\\circ\\text{C}'
			for (j=Math.round(temperatures.length/2);j<temperatures.length;j++) 	{  // on cherche le minimum et le maximum
				texte+='&'+temperatures[j];
				min=Math.min(temperatures[j],min);
				max=Math.max(temperatures[j],max);
			}
			texte+='\\\\\\hline\\end{array}$<br><br>';

			texte+='Calculer l\'amplitude thermique de ce mois (l\'étendue de la série).';
			texte_corr=`En ${nom_du_mois(mois)} ${annee}, la température minimale est `+`$${min}^\\circ\\text{C}$.<br>La température maximale est $${max}^\\circ\\text{C}$.<br> L\'amplitude thermique est :<br>`;
			texte_corr+=`$${tex_nombre(max)}-${ecriture_parenthese_si_negatif(min)}$`
			if (min<0) 	texte_corr+=`$\\thickspace~=${tex_nombre(max)}+${tex_nombre(-min)}$`;
			texte_corr+=`$\\thickspace=${tex_nombre(max-min)}^\\circ\\text{C}$`;

		}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Type de séries',2,"1 : Série de notes\n 2 : Série de températures"];
}

/**
* Calculer +/- 20, 30, 40 ou 60 %
* @Auteur Rémi Angot
*/
function Variation_en_pourcentages(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Variation en pourcentages";
	this.consigne = "Calculer le nouveau prix";
	this.nb_questions = 5;
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		for (let i = 0, prix, taux, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;){
			prix = choice([randint(2,9),randint(1,9)*10,randint(1,9)*100,Algebrite.eval(randint(11,99)/10)]);
			// X | X0 | X00 | X,X0
			taux = choice([20,30,40,60]);
			if (choice([true,false])) {
				if (sortie_html) {
					texte = `Un article coûtait ${tex_prix(prix)} € et son prix diminue de ${taux} \%.`	
				} else {
					texte = `Un article coûtait ${tex_prix(prix)} € et son prix diminue de ${taux}~\\%.`	
				}
				
				texte_corr = `$\\text{Diminution : }${tex_fraction(taux,100)}\\times ${tex_prix(prix)} = ${tex_prix(Algebrite.eval(prix*taux))}\\div100=${tex_prix(Algebrite.eval(prix*taux/100))}$ €`
				texte_corr += `<br>`
				texte_corr += `$\\text{Nouveau prix : }${tex_prix(prix)}-${tex_prix(Algebrite.eval(prix*taux/100))}=${tex_prix(Algebrite.eval(prix-prix*taux/100))}$ €`
			} else {
				if (sortie_html) {
					texte = `Un article coûtait ${tex_prix(prix)} € et son prix augmente de ${taux} \%.`
				} else {
					texte = `Un article coûtait ${tex_prix(prix)} € et son prix augmente de ${taux}~\\%.`

				}
				texte_corr = `$\\text{Augmentation : }${tex_fraction(taux,100)}\\times ${tex_prix(prix)}= ${tex_prix(Algebrite.eval(prix*taux))}\\div100=${tex_prix(Algebrite.eval(prix*taux/100))}$ €`
				texte_corr += `<br>`
				texte_corr += `$\\text{Nouveau prix : }${tex_prix(prix)}+${tex_prix(Algebrite.eval(prix*taux/100))}=${tex_prix(Algebrite.eval(prix*(1+taux/100)))}$ €`
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
}
/**
* Écrire une expression littérale à partir d'une phrase : 
* * Double, triple, moitié, tiers, quart
* * Successeur, prédécesseur
* * Carré, cube, opposé, inverse
* * Somme, produit, quotient
* * Nombre pair, nombre impair, multiple d'un nombre donné
* @Auteur Rémi Angot
*/
function Ecrire_une_expression_litterale(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Écrire une expression littérale";
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(17)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let lettres_disponibles = ['x','y','z','t','a','b','c','n','m']
			let x = choice(lettres_disponibles)
			enleve_element(lettres_disponibles,x)
			let y = choice(lettres_disponibles)
			let k = randint(2,10)
			switch (liste_type_de_questions[i]){
				case 1 : // 2x
					texte = `Exprimer le double de $${x}$ en fonction de $${x}$.`
					texte_corr = `Le double de $${x}$ se note : $2${x}$.`
					break ;
				case 2 : // 3x
					texte = `Exprimer le triple de $${x}$  en fonction de $${x}$.`
					texte_corr = `Le triple de $${x}$  se note : $3${x}$.`
					break ;
				case 3 : // x/2
					texte = `Exprimer la moitié de $${x}$ en fonction de $${x}$.`
					texte_corr = `La moitié de $${x}$  se note :  $${tex_fraction(x,2)}=${x}\\div2=0,5${x}$.`
					break ;
				case 4 : // x/4
					texte = `Exprimer le quart de $${x}$  en fonction de $${x}$.`
					texte_corr = `Le quart de $${x}$  se note :  $${tex_fraction(x,4)}=${x}\\div4=0,25${x}$.`
					break ;
				case 5 : // x+1
					texte = `$${x}$ étant un nombre entier, exprimer l'entier suivant en fonction de $${x}$.`
					texte_corr = `Le successeur de $${x}$ se note :  $${x}+1$.`
					break ;
				case 6 : // x-1
					texte = `$${x}$ étant un nombre entier, exprimer l'entier précédent en fonction de $${x}$.`
					texte_corr = `Le prédecesseur de $${x}$  se note :  $${x}-1$.`
					break ;
				case 6 : // x^2
					texte = `Exprimer le carré de $${x}$  en fonction de $${x}$.`
					texte_corr = `Le carré de $${x}$  se note : $${x}^2$.`
					break ;
				case 7 : // x^3
					texte = `Exprimer le cube de $${x}$  en fonction de $${x}$.`
					texte_corr = `Le cube de $${x}$  se note : $${x}^3$.`
					break ;
				case 8 : // -x
					texte = `Exprimer l'opposé de $${x}$  en fonction de $${x}$.`
					texte_corr = `L'opposé de $${x}$  se note : $-${x}$.`
					break ;
				case 9 : // 1/x
					texte = `Exprimer l'inverse de $${x}$  en fonction de $${x}$.`
					texte_corr = `L'inverse de $${x}$ se note : $${tex_fraction(1,x)}$.`
					break ;
				case 10 : // x+k
					texte = `Exprimer la somme de $${x}$ et ${k} en fonction de $${x}$.`
					texte_corr = `La somme de $${x}$ et ${k} se note : $${x}+${k}$.`
					break ;
				case 11 : // kx
					texte = `Exprimer le produit de $${x}$  par ${k} en fonction de $${x}$.`
					texte_corr = `Le produit de $${x}$ par ${k} se note : $${k}${x}$.`
					break ;
				case 12 : // x/k
					texte = `Exprimer le quotient de $${x}$ par ${k} en fonction de $${x}$.`
					texte_corr = `Le quotient de $${x}$ par ${k} se note : $${tex_fraction(x,k)}$.`
					break ;
				case 13 : // k/x
					texte = `Exprimer le quotient de ${k} par $${x}$ en fonction de $${x}$.`
					texte_corr = `Le quotient de ${k} par $${x}$ se note : $${tex_fraction(k,x)}$.`
					break ;
				case 14 : //xy
					texte = `Comment se note le produit de $${x}$ par $${y}$ ?`
					texte_corr = `Le produit de $${x}$ par $${y}$ se note $${x}${y}$.`
					break ;
				case 15 : //pair
					texte = `Écrire une expression littérale qui permet de représenter un nombre pair.`
					texte_corr = `Un nombre pair peut s'écrire sous la forme $2n$ avec $n$ un entier naturel.`
					break ; 
				case 16 : //impair
					texte = `Écrire une expression littérale qui permet de représenter un nombre impair.`
					texte_corr = `Un nombre impair peut s'écrire sous la forme $2n+1$ avec $n$ un entier naturel.`
					break ;
				case 17 : //multiple de k
					texte = `Écrire une expression littérale qui permet de représenter un multiple de ${k}.`
					texte_corr = `Un multiple de ${k} peut s'écrire sous la forme $${k}n$ avec $n$ un entier naturel.`
					break ; 

			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_case_a_cocher = ["Uniquement la lettre $n$."]

}

/**
* Traduire un programme de calcul par une expression littérale de la forme ax+b après simplification
* @Auteur Rémi Angot
*/
function Traduire_un_programme_de_calcul(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Traduire un programme de calcul par une expression littérale";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing_corr = 2;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6]
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let a = randint(4,11)
			let b = randint(2,11)
			let c = randint(2,11)
			let d = randint(2,5)
			switch (liste_type_de_questions[i]){
				case 1 : // (x+a)*b+c
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Ajoute ${a}`,`Multiplie par ${b}`,`Ajoute ${c}`])
					texte += `Si on note $x$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$x\\xrightarrow{+${a}} x+${a}\\xrightarrow{\\times ${b}}(x+${a})\\times ${b}=${b}x+${a*b}\\xrightarrow{+${c}}${b}x+${a*b+c}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${b}x+${a*b+c}$.`
					break ;
				case 2 : // (ax+b)*c
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Multiplie par ${a}`,`Ajoute ${b}`,`Multiplie par ${c}`])
					texte += `Si on note $y$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$y\\xrightarrow{\\times ${a}} ${a}y\\xrightarrow{+${b}}${a}y+${b} \\xrightarrow{\\times ${c}}(${a}y+${b})\\times${c}=${a*c}y+${b*c}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${a*c}y+${b*c}$.`
					break ;
				case 3 : // ax+b-2x
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Multiplie par ${a}`,`Ajoute ${b}`,`Enlève le double du nombre de départ`])
					texte += `Si on note $a$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$a\\xrightarrow{\\times ${a}} ${a}a\\xrightarrow{+${b}}${a}a+${b} \\xrightarrow{-2a}${a}a+${b}-2a=${a-2}a+${b}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${a-2}a+${b}$.`
					break ;
				case 4 : // ax+b+3x
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Multiplie par ${a}`,`Ajoute ${b}`,`Ajoute le triple du nombre de départ`])
					texte += `Si on note $t$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$t\\xrightarrow{\\times ${a}} ${a}t\\xrightarrow{+${b}}${a}t+${b} \\xrightarrow{+3t}${a}t+${b}+3t=${a+3}t+${b}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${a+3}t+${b}$.`
					break ;
				case 5 : // (ax+b)*c-d
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Multiplie par ${a}`,`Ajoute ${b}`,`Multiplie par ${c}`,`Enlève ${d}`])
					texte += `Si on note $x$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$x\\xrightarrow{\\times ${a}} ${a}x\\xrightarrow{+${b}}${a}x+${b} \\xrightarrow{\\times ${c}}(${a}x+${b})\\times ${c}=${a*c}x+${b*c}\\xrightarrow{-${d}}${a*c}x+${b*c-d}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${a*c}x+${b*c-d}$.`
					break ;
				case 6 : // (ax+b)*c+x
					texte = `Voici un programme de calcul : \n`
					texte += itemize([`Multiplie par ${a}`,`Ajoute ${b}`, `Multiplie par ${c}`,`Ajoute le nombre de départ`])
					texte += `Si on note $y$ le nombre de départ, quel est le résultat du programme de calcul ?`
					texte_corr = `$y\\xrightarrow{\\times ${a}} ${a}y\\xrightarrow{+${b}}${a}y+${b} \\xrightarrow{\\times ${c}}(${a}y+${b})\\times ${c}=${a*c}y+${b*c}\\rightarrow ${a*c}y+${b*c}+y=${a*c+1}y+${b*c}$`
					texte_corr += '<br>'
					texte_corr += `Le résultat du programme est donc $${a*c+1}y+${b*c}$.`
					break ;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				if (est_diaporama) {
					texte = texte.replace(', quel est le résultat du programme de calcul ?',',<br> quel est le résultat de ce programme ?')
				}
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_case_a_cocher = true;
}


/**
* Calculer la valeur d'une expression littérale
* 
* * ax+b
* * a(x+b)
* * x^2+y^2
* * x^2-y^2
* * ax^2+b(x-1)+cy^3
* * ax^2+bx+c
* * ax^2+bx-c
* * ax^2-bx+c
* * axy+x+y
* * (ax+b)(cy-d)
* @Auteur Rémi Angot
*/
function Calculer_la_valeur_d_une_expression_litterale(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer la valeur d'une expression littérale";
	this.consigne = "";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(10)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let a, b, c, d, x, y
			switch (liste_type_de_questions[i]){
				case 1 : // ax+b
					a = randint(2,10)
					x = randint(2,10,a)
					b = randint(1,10,[a,x])
					texte = `Calculer $${a}x+${b}$ pour $x=${x}$.`
					texte_corr = `Pour $x=${x}$ : <br>`
					texte_corr += `$${a}x+${b}=${a}\\times${x}+${b}=${a*x}+${b}=${a*x+b}$`
					break ;
				case 2 : // a(x+b)
					a = randint(2,10)
					x = randint(2,10,a)
					b = randint(1,10,[a,x])
					texte = `Calculer $${a}(x+${b})$ pour $x=${x}$.`
					texte_corr = `Pour $x=${x}$ : <br>`
					texte_corr += `$${a}(x+${b})=${a}\\times(${x}+${b})=${a}\\times${x+b}=${a*(x+b)}$`
					break ;
				case 3 : // x^2+y^2
					x = randint(2,10)
					y = randint(2,10)
					texte = `Calculer $x^2+y^2$ pour $x=${x}$ et $y=${y}$.`
					texte_corr = `Pour $x=${x}$ et $y=${y}$ : <br>`
					texte_corr += `$x^2+y^2=${x}^2+${y}^2=${x**2}+${y**2}=${x**2+y**2}$`
					break ;
				case 4 : // x^2-y^2
					x = randint(2,10)
					y = randint(1,x-1)
					texte = `Calculer $x^2-y^2$ pour $x=${x}$ et $y=${y}$.`
					texte_corr = `Pour $x=${x}$ et $y=${y}$ : <br>`
					texte_corr += `$x^2-y^2=${x}^2-${y}^2=${x**2}-${y**2}=${x**2-y**2}$`
					break ;
				case 5 : // ax^2+b(x-1)+cy^3
					a = randint(2,5)
					b = randint(2,6)
					c = randint(2,6)
					x = randint(3,6)
					y = choice([1,2,3,5,10])
					texte = `Calculer $${a}x^2+${b}(x-1)+${c}y^3$ pour $x=${x}$ et $y=${y}$.`
					texte_corr = `Pour $x=${x}$ et $y=${y}$ : <br>`
					texte_corr += `$${a}x^2+${b}(x-1)+${c}y^3=${a}\\times${x}^2+${b}(${x}-1)+${c}\\times${y}^3=${a}\\times${x**2}+${b}\\times${x-1}+${c}\\times${y**3}=${a*x**2+b*(x-1)+c*y**3}$.`
					break ;
				case 6 : // ax^2+bx+c
					a = randint(2,5)
					b = randint(2,6)
					c = randint(2,6)
					x = randint(3,6)
					texte = `Calculer $${a}x^2+${b}x+${c}$ pour $x=${x}$.`
					texte_corr = `Pour $x=${x}$ : <br>`
					texte_corr += `$${a}x^2+${b}x+${c}=${a}\\times${x}^2+${b}\\times${x}+${c}=${a}\\times${x**2}+${b*x}+${c}=${a*x**2+b*x+c}$`
					break ;
				case 7 : // ax^2+bx-c
					a = randint(2,5)
					b = randint(2,6)
					c = randint(2,6)
					x = randint(3,6)
					texte = `Calculer $${a}x^2+${b}x-${c}$ pour $x=${x}$.`
					texte_corr = `Pour $x=${x}$ : <br>`
					texte_corr += `$${a}x^2+${b}x-${c}=${a}\\times${x}^2+${b}\\times${x}-${c}=${a}\\times${x**2}+${b*x}-${c}=${a*x**2+b*x-c}$`
					break ;
				case 8 : // ax^2-bx+c
					a = randint(2,5)
					b = randint(2,a)
					c = randint(2,6)
					x = randint(3,6)
					texte = `Calculer $${a}x^2-${b}x+${c}$ pour $x=${x}$.`
					texte_corr = `Pour $x=${x}$ : <br>`
					texte_corr += `$${a}x^2-${b}x+${c}=${a}\\times${x}^2-${b}\\times${x}+${c}=${a}\\times${x**2}-${b*x}+${c}=${a*x**2-b*x+c}$`
					break ;
				
				case 9 : // axy+x+y
					a = randint(2,10)
					x = randint(2,10)
					y = randint(2,10,x)
					texte = `Calculer $${a}xy+x+y$ pour $x=${x}$ et $y=${y}$.`
					texte_corr = `Pour $x=${x}$ et $y=${y}$ : <br>`
					texte_corr += `$${a}xy+x+y=${a}\\times${x}\\times${y}+${x}+${y}=${a*x*y}+${x}+${y}=${a*x*y+x+y}$`
					break ;
				case 10 : // (ax+b)(cy-d)
					a = randint(2,10)
					x = randint(2,10)
					b = randint(1,10)
					y = randint(2,10,x)
					c = randint(2,10)
					d = randint(1,Math.min(10,c*y))
					texte = `Calculer $(${a}x+${b})(${c}y-${d})$ pour $x=${x}$ et $y=${y}$.`
					texte_corr = `Pour $x=${x}$ et $y=${y}$ : <br>`
					texte_corr += `$(${a}x+${b})(${c}y-${d})=(${a}\\times${x}+${b})(${c}\\times${y}-${d})=${a*x+b}\\times${c*y-d}=${(a*x+b)*(c*y-d)}$`
					break ;
				
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_case_a_cocher = true;
}


/**
* Tester une égalité pour 2 valeurs données (une vraie et une fausse)
*
* * 3x-a=2x+b
* * 3x+a=5x-b
* * ax+b=(a+1)x-c
* * a-2x=b+2x
* @Auteur Rémi Angot
*/
function Tester_une_egalite(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Tester une égalité";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup=1;
	this.sup2=false;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles // = range1(5)
	//	let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		if (this.sup2==false) type_de_questions_disponibles=[1,2,3,4,5]
		else type_de_questions_disponibles=[6,7,3]
		let liste_type_de_questions  = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let a, b, x1, x2
			switch (liste_type_de_questions[i]){
				case 1 : // 3x-a=2x+b   x=a+b  
					if (this.sup==1) {
					a = randint(1,6)
					b = randint(1,6,[a])
					x2 = a + b
					x1 = randint(2,10,[x2])
	
					}
					else {
						a = randint(-6,6,[0])
						b = randint(-6,6,[a,0])	
						x2 = a + b
						x1 = randint(-10,10,[0,x2])
						
					}

					texte = `Tester l'égalité $3x-${ecriture_parenthese_si_negatif(a)}=2x+${ecriture_parenthese_si_negatif(b)}~$ pour $~x=${x1}~$ puis pour $~x=${x2}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$3x-${ecriture_parenthese_si_negatif(a)}=3\\times${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(a)}=${3*x1-a}$ <br> $2x+${ecriture_parenthese_si_negatif(b)}=2\\times${ecriture_parenthese_si_negatif(x1)}+${ecriture_parenthese_si_negatif(b)}=${2*x1+b}$<br>`
					texte_corr += `$${3*x1-a}\\not=${2*x1+b}$ donc l'égalité n'est pas vraie.<br><br>`
					texte_corr += `Pour $x=${ecriture_parenthese_si_negatif(x2)}$ : <br>`
					texte_corr += `$3x-${ecriture_parenthese_si_negatif(a)}=3\\times${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(a)}=${3*x2-a}$ <br> $2x+${ecriture_parenthese_si_negatif(b)}=2\\times${ecriture_parenthese_si_negatif(x2)}+${ecriture_parenthese_si_negatif(b)}=${2*x2+b}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.`
					break ;
				case 2 : // 3x+a=5x-b   x=(a+b)/2 donc a et b impairs pour une solution entière  
					if (this.sup==1) {
					a = randint(1,9)
					b = randint(0,4)*2+a%2;
					x1 = parseInt(Algebrite.eval((a+b)/2))
					x2 = randint(1,9,x1)
					}
					else {
						a = randint(-9,9,[0])
						b = randint(-4,4,[a,0])*2+a%2
						x1 = parseInt(Algebrite.eval((a+b)/2))
						x2 = randint(-9,9,[0,x1])	
					}

					texte = `Tester l'égalité $3x+${ecriture_parenthese_si_negatif(a)}=5x-${ecriture_parenthese_si_negatif(b)}~$ pour $~x=${x1}~$ puis pour $~x=${x2}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$3x+${ecriture_parenthese_si_negatif(a)}=3\\times${ecriture_parenthese_si_negatif(x1)}+${ecriture_parenthese_si_negatif(a)}=${3*x1+a}$ <br> $5x-${ecriture_parenthese_si_negatif(b)}=5\\times${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(b)}=${5*x1-b}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$3x+${ecriture_parenthese_si_negatif(a)}=3\\times${ecriture_parenthese_si_negatif(x2)}+${ecriture_parenthese_si_negatif(a)}=${3*x2+a}$ <br> $5x-${ecriture_parenthese_si_negatif(b)}=5\\times${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(b)}=${5*x2-b}$<br>`
					texte_corr += `$${3*x2+a}\\not=${5*x2-b}$ donc l'égalité n'est pas vraie.`
					break ;
				case 3 : // 10(x-a)=4(2x+b) x=(10a+4b)/2
					if (this.sup==1) {
					a = randint(1,3)
					b = randint(1,3)
					x2 = parseInt(Algebrite.eval((10*a+4*b)/2))
					x1 = randint(9,x2)
					}
					else {
						a = randint(-3,3,[0])
						b = randint(-3,3,[0])	
						x2 = parseInt(Algebrite.eval((10*a+4*b)/2))
						x1 = randint(-9,9,[0,x2])
					}

					texte = `Tester l'égalité $10(x-${ecriture_parenthese_si_negatif(a)})=4(2x+${ecriture_parenthese_si_negatif(b)})~$ pour $~x=${x1}~$ puis pour $~x=${x2}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$10(x-${ecriture_parenthese_si_negatif(a)})=10\\times(${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(a)})=10\\times${x1-a}=${10*(x1-a)}$ <br> $4(2x+${ecriture_parenthese_si_negatif(b)})=4\\times(2\\times${ecriture_parenthese_si_negatif(x1)}+${ecriture_parenthese_si_negatif(b)})=4\\times${2*x1+b}=${4*(2*x1+b)}$<br>`
					texte_corr += `$${10*(x1-a)}\\not=${4*(2*x1+b)}$ donc l'égalité n'est pas vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$10(x-${ecriture_parenthese_si_negatif(a)})=10\\times(${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(a)})=10\\times${x2-a}=${10*(x2-a)}$ <br> $4(2x+${ecriture_parenthese_si_negatif(b)})=4\\times(2\\times${ecriture_parenthese_si_negatif(x2)}+${ecriture_parenthese_si_negatif(b)})=4\\times${2*x2+b}=${4*(2*x2+b)}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.`
					break ;
				case 4 : // ax+b=(a+1)x-c x=b+c
					if (this.sup==1) {
					a = randint(2,9)
					b = randint(2,9)
					c = randint(1,3)
					x1 = b + c
					x2 = randint(2,10,x1)
					}
					else {
						a = randint(2,9)
						b = randint(2,9)*randint(-1,1,0)
						c = randint(1,3)*randint(-1,1,0)
						x1 = b + c
						x2 = randint(2,10,x1)*randint(-1,1,0)
					}

					texte = `Tester l'égalité $${ecriture_parenthese_si_negatif(a)}x+${ecriture_parenthese_si_negatif(b)}=${a+1}x-${ecriture_parenthese_si_negatif(c)}~$ pour $~x=${x1}~$ puis pour $~x=${x2}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$${a}x+${ecriture_parenthese_si_negatif(b)}=${ecriture_parenthese_si_negatif(a)}\\times${ecriture_parenthese_si_negatif(x1)}+${ecriture_parenthese_si_negatif(b)}=${a*x1+b}$ <br> $${a+1}x-${ecriture_parenthese_si_negatif(c)}=${a+1}\\times${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(c)}=${(a+1)*x1-c}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$${a}x+${ecriture_parenthese_si_negatif(b)}=${ecriture_parenthese_si_negatif(a)}\\times${ecriture_parenthese_si_negatif(x2)}+${ecriture_parenthese_si_negatif(b)}=${a*x2+b}$ <br> $${a+1}x-${ecriture_parenthese_si_negatif(c)}=${a+1}\\times${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(c)}=${(a+1)*x2-c}$<br>`
					texte_corr += `$${a*x2+b}\\not=${(a+1)*x2-c}$ donc l'égalité n'est pas vraie.`
					break ;
				case 5 : // a-2x=b+2x x=(a-b)/4
					if (this.sup==1) {
					x1 = randint(1,9)
					b = randint(1,9)
					a = b+4*x1
					x2 = randint(1,11,x1)
					}
					else {
						x1 = randint(-9,9)
						b = randint(-9,9,0)
						a = b+4*x1
						x2 = randint(1,11,x1)
					}

					texte = `Tester l'égalité $${a}-2x=${b}+2x~$ pour $~x=${x1}~$ puis pour $~x=${x2}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$${a}-2x=${a}-2\\times${ecriture_parenthese_si_negatif(x1)}=${a-2*x1}$ <br> $${b}+2x=${b}+2\\times${ecriture_parenthese_si_negatif(x1)}=${b+2*x1}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$${a}-2x=${a}-2\\times${ecriture_parenthese_si_negatif(x2)}=${a-2*x2}$ <br> $${b}+2x=${b}+2\\times${ecriture_parenthese_si_negatif(x2)}=${b+2*x2}$<br>`
					texte_corr += `$${a-2*x2}\\not=${b+2*x2}$ donc l'égalité n'est pas vraie.`
					break ;
				case 6 : // ax-ab=x²-bx (a-x)(x-b)=0 solutions a et b.
					if (this.sup==1) {
					b = randint(2,9)
					a = randint(2,9)
					x3 = b
					x1 = a
					x2 = randint(1,9,[x1,x3])
					}
					else {
						a = randint(-9,9,[0,1])
						b = randint(-9,9,[0,a])
						x1 = a
						x3 = b
						x2 = randint(-9,9,[x1,x3])
					}
					texte = `Tester l'égalité $${a}x-${ecriture_parenthese_si_negatif(a*b)}=x^2-${ecriture_parenthese_si_negatif(b)}x~$ pour $~x=${x1}~$ , pour $~x=${x2}~$ puis pour $~x=${x3}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$${a}x-${ecriture_parenthese_si_negatif(a*b)}=${a}\\times${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(a*b)}=${a*x1-a*b}$ <br> $x^2-${b}\\times x=${ecriture_parenthese_si_negatif(x1)}^2-${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(x1)}=${x1*x1}-${ecriture_parenthese_si_negatif(b*x1)}=${x1*x1-b*x1}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$${a}x-${ecriture_parenthese_si_negatif(a*b)}=${a}\\times${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(a*b)}=${a*x2-a*b}$ <br> $x^2-${b}\\times x=${ecriture_parenthese_si_negatif(x2)}^2-${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(x2)}=${x2*x2}-${ecriture_parenthese_si_negatif(b*x2)}=${x2*x2-b*x2}$<br>`
					texte_corr += `$${a*x2-a*b}\\not=${x2*x2-b*x2}$ donc l'égalité n'est pas vraie.<br><br>`
					texte_corr += `Pour $x=${x3}$ : <br>`
					texte_corr += `$${a}x-${ecriture_parenthese_si_negatif(a*b)}=${a}\\times${ecriture_parenthese_si_negatif(x3)}-${ecriture_parenthese_si_negatif(a*b)}=${a*x3-a*b}$ <br> $x^2-${b}\\times x=${ecriture_parenthese_si_negatif(x3)}^2-${ecriture_parenthese_si_negatif(b)}\\times${ecriture_parenthese_si_negatif(x3)}=${x3*x3}-${ecriture_parenthese_si_negatif(b*x3)}=${x3*x3-b*x3}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					break ;
				case 7 : // adx-bd=acx²-bcx  --- (ax-b)(d-cx)=0 solutions b/a et d/c.
					if (this.sup==1) {
						c = randint(2,5)
						a = randint(2,5)
						x2 = randint(2,6)
						x3 = randint(2,6,x2)
						x1 = randint(1,7,[x2,x3])
						b = a*x2
						d = c*x3
					}
					else {
						c = randint(2,5)*randint(-1,1,0)
						a = randint(2,5)*randint(-1,1,0)
						x2 = randint(1,6)*randint(-1,1,0)
						x3 = randint(1,6,x2)*randint(-1,1,0)
						x1 = randint(1,7,[x2,x3])*randint(-1,1,0)
						b = a*x2
						d = c*x3
					}
					texte = `Tester l'égalité $${a*d}x-${ecriture_parenthese_si_negatif(b*d)}=${a*c}x^2-${ecriture_parenthese_si_negatif(b*c)}x~$ pour $~x=${x1}~$, pour $~x=${x2}~$ puis pour $~x=${x3}$`
					texte_corr = `Pour $x=${x1}$ : <br>`
					texte_corr += `$${a*d}x-${ecriture_parenthese_si_negatif(b*d)}=${a*d}\\times${ecriture_parenthese_si_negatif(x1)}-${ecriture_parenthese_si_negatif(b*d)}=${a*d*x1-d*b}$ <br> $${a*c}x^2-${ecriture_parenthese_si_negatif(b*c)}x=${a*c}\\times${ecriture_parenthese_si_negatif(x1)}^2-${ecriture_parenthese_si_negatif(b*c)}\\times${ecriture_parenthese_si_negatif(x1)}=${a*c*x1*x1}-${ecriture_parenthese_si_negatif(b*c*x1)}=${a*c*x1*x1-b*c*x1}$<br>`
					texte_corr += `$${a*d*x1-d*b}\\not=${a*c*x1*x1-b*c*x1}$ donc l'égalité n'est pas vraie.<br><br>`
					texte_corr += `Pour $x=${x2}$ : <br>`
					texte_corr += `$${a*d}x-${ecriture_parenthese_si_negatif(b*d)}=${a*d}\\times${ecriture_parenthese_si_negatif(x2)}-${ecriture_parenthese_si_negatif(b*d)}=${a*d*x2-d*b}$ <br> $${a*c}x^2-${ecriture_parenthese_si_negatif(b*c)}x=${a*c}\\times${ecriture_parenthese_si_negatif(x2)}^2-${ecriture_parenthese_si_negatif(b*c)}\\times${ecriture_parenthese_si_negatif(x2)}=${a*c*x2*x2}-${ecriture_parenthese_si_negatif(b*c*x2)}=${a*c*x2*x2-b*c*x2}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					texte_corr += `Pour $x=${x3}$ : <br>`
					texte_corr += `$${a*d}x-${ecriture_parenthese_si_negatif(b*d)}=${a*d}\\times${ecriture_parenthese_si_negatif(x3)}-${ecriture_parenthese_si_negatif(b*d)}=${a*d*x3-d*b}$ <br> $${a*c}x^2-${ecriture_parenthese_si_negatif(b*c)}x=${a*c}\\times${ecriture_parenthese_si_negatif(x3)}^2-${ecriture_parenthese_si_negatif(b*c)}\\times${ecriture_parenthese_si_negatif(x3)}=${a*c*x3*x3}-${ecriture_parenthese_si_negatif(b*c*x3)}=${a*c*x3*x3-b*c*x3}$<br>`
					texte_corr += `On trouve le même résultat pour le membre de gauche et pour le membre de droite donc l'égalité est vraie.<br><br>`
					break ;
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);

	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Entiers naturels\n2 : Entiers relatifs"];
	this.besoin_formulaire2_case_a_cocher = ["Avec des équations du second degré"];	
}

/**
* Réduire une expression
*
* * ax+bx+c	
* * ax+b+x+c
* * ax^2+bx+c+dx^2+x
* * a+x+b+c+dx
* * ax+y+bx+c+dy
* * ax+b-cx
* @Auteur Rémi Angot
*/
function Reduire_une_expression_litterale(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Réduire une expression littérale";
	this.consigne = "Réduire les expressions suivantes";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 9; // valeur maximale des coefficients
	this.sup2 = false; // avec des nombres décimaux

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = range1(7)
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"

		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let a, b, c, d
			if (this.sup2) {
						a = calcul(randint(2,this.sup)+randint(1,9)/10)
						b = choice([calcul(randint(2,9)+randint(1,9)/10),calcul(randint(2,9)+randint(1,9)/10+randint(1,9)/100)])
						c = calcul(randint(2,this.sup)+randint(1,9)/10)
						d = choice([calcul(randint(2,9)+randint(1,9)/10),calcul(randint(2,9)+randint(1,9)/10+randint(1,9)/100)])
					} else {
						a = randint(2,this.sup)
						b = randint(2,this.sup)
						c = randint(2,this.sup)
						d = randint(2,this.sup)
					}
			switch (liste_type_de_questions[i]){
				case 1: // ax+bx+c	
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}x+${tex_nombre(c)}$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}x+${tex_nombre(c)}=${tex_nombre(calcul(a+b))}x+${tex_nombre(c)}$`
					break;
				case 2: // ax+b+x+c
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}+x+${tex_nombre(c)}$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}+x+${tex_nombre(c)}=${tex_nombre(calcul(a+1))}x+${tex_nombre(calcul(b+c))}$`
					break;
				case 3: // ax^2+bx+c+dx^2+x
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x^2+${tex_nombre(b)}x+${tex_nombre(c)}+${tex_nombre(d)}x^2+x$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x^2+${tex_nombre(b)}x+${tex_nombre(c)}+${tex_nombre(d)}x^2+x=${tex_nombre(calcul(a+d))}x^2+${tex_nombre(calcul(b+1))}x+${tex_nombre(c)}$`
					break;
				case 4: // a+x+b+c+dx
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}+x+${tex_nombre(b)}+${tex_nombre(c)}+${tex_nombre(d)}x$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}+x+${tex_nombre(b)}+${tex_nombre(c)}+${tex_nombre(d)}x=${tex_nombrec(1+d)}x+${tex_nombrec(a+b+c)}$`
					break;
				case 5: // ax+y+bx+c+dy
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+y+${tex_nombre(b)}x+${tex_nombre(c)}+${tex_nombre(d)}y$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+y+${tex_nombre(b)}x+${tex_nombre(c)}+${tex_nombre(d)}y=${tex_nombrec(a+b)}x+${tex_nombrec(1+d)}y+${tex_nombre(c)}$`
					break;
				case 6: // ax+b-cx
					if (c > a) {
						[a, c] = [c, a] //pour s'assurer que a-c est positif
					}
					if (c==a){
						a++
					}
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}-${tex_nombre(c)}x$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x+${tex_nombre(b)}-${tex_nombre(c)}x=${tex_nombrec(a-c)}x+${tex_nombre(b)}$`
					break;
				case 7: // ax-cx
					if (c > a) {
						[a, c] = [c, a] //pour s'assurer que a-c est positif
					}
					if (c==a){
						a++
					}
					texte = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x-${tex_nombre(c)}x$`
					texte_corr = `$${lettre_depuis_chiffre(i+1)}=${tex_nombre(a)}x-${tex_nombre(c)}x=${tex_nombrec(a-c)}x$`
					break;

				
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Valeur maximale des coefficients',999];
	this.besoin_formulaire2_case_a_cocher = ['Avec des nombres décimaux']
}

/**
* Lire l'abscisse décimale d'un point
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Lire_abscisse_relative(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Lire l'abscisse relative d'un point";
	this.consigne = "Lire l'abscisse de chacun des points suivants.";
	this.nb_questions = 3;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=4;

	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)
			switch (type_de_questions[i]) {
				case 1: // Placer des décimaux relatifs sur un axe (1 décimale)
					abs0 = randint(-7, -3);
					pas1 = 1;
					pas2 = 10;
					break;

				case 2: // Placer des décimaux relatifs sur un axe (2 décimales)
					abs0 = randint(-4, -2) / 10;
					pas1 = 10;
					pas2 = 10;
					break;

				case 3: // Placer des décimaux relatifs sur un axe (3 décimales)
					abs0 = randint(-10, -2) / 100;
					pas1 = 100;
					pas2 = 10;
					break;
			}
			x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
			x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3)
			if (sortie_html) {
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false)
			}
			else { //sortie Latex 
				texte=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11], [l2, x2, x22], [l3, x3, x33]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false);
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}
		
		}
		if (!sortie_html) liste_de_question_to_contenu(this); 
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Nombre relatif à une décimale\n2 : Nombre relatif à deux décimales\n3 : Nombre relatif à trois décimales\n4 : Mélange"];
}

/**
* Placer un point d'abscisse un nombre relatif
* @Auteur Jean-Claude Lhote et Rémi Angot
*/
function Placer_points_sur_axe_relatifs(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Placer un point d'abscisse un nombre relatif";
	this.consigne = " Placer trois points sur un axe gradué.";
	this.nb_questions = 5;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=1;
	this.type_exercice = 'SVGJS';


	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
		let type_de_questions;
		this.liste_questions=[];
		this.liste_corrections=[];
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		if (this.sup==4) 	type_de_questions=combinaison_listes([1,2,3],this.nb_questions);
		else 				type_de_questions=combinaison_listes([parseInt(this.sup)],this.nb_questions);
		

		this.contenu = html_consigne(this.consigne)
		for (let i = 0,abs0,abs1,abs2,abs3,l1,l2,l3,x1,x2,x3,x11,x22,x33, pas1,pas2, id_unique, texte, texte_corr; i < this.nb_questions;i++) {
			l1=lettre_depuis_chiffre(i*3+1)
			l2=lettre_depuis_chiffre(i*3+2)
			l3=lettre_depuis_chiffre(i*3+3)

			switch (type_de_questions[i]) {
				case 1: // Placer des décimaux relatifs sur un axe (1 décimale)
					abs0 = randint(-7, -3);
					pas1 = 1;
					pas2 = 10;
					break;

				case 2: // Placer des décimaux relatifs sur un axe (2 décimales)
					abs0 = randint(-4, -2) / 10;
					pas1 = 10;
					pas2 = 10;
					break;

				case 3: // Placer des décimaux relatifs sur un axe (3 décimales)
					abs0 = randint(-10, -2) / 100;
					pas1 = 100;
					pas2 = 10;
					break;
			}
			x1 = randint(0, 2); x2 = randint(3, 4); x3 = randint(5, 6);
			x11 = randint(1, 9); x22 = randint(1, 9); x33 = randint(1, 3);
			abs1 = arrondi(abs0 + x1/pas1 + x11 / pas1/pas2, type_de_questions[i]);  // le type de questions est égal au nombre de décimales.
			abs2 = arrondi(abs0 + x2/pas1 + x22 / pas1/pas2, type_de_questions[i]);
			abs3 = arrondi(abs0 + x3/pas1 + x33 / pas1/pas2, type_de_questions[i]);

			texte=`Placer les points : ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})<br>`
			if (sortie_html) {
				texte_corr=''
				id_unique = `${i}_${Date.now()}`
				this.contenu += `<div id="div_svg${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 110px;  "></div>`
				this.contenu +=`<h3>Placer les points : ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)})</h3>`
				SVG_reperage_sur_un_axe(`div_svg${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false)
				this.contenu_correction += `<div id="div_svg_corr${numero_de_l_exercice}${id_unique}" style="width: 90%; height: 200px;  "></div>`
				SVG_reperage_sur_un_axe(`div_svg_corr${numero_de_l_exercice}${id_unique}`, abs0, 6, pas1, pas2, [[l1, x1, x11, true], [l2, x2, x22, true], [l3, x3, x33, true]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false)
			}
			else { //sortie Latex 
				texte+=Latex_reperage_sur_un_axe(2.4, abs0, pas1, pas2, [], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false);
				texte_corr=Latex_reperage_sur_un_axe(2.4, abs0, pas1, pas2, [[l1, x1, x11,true], [l2, x2, x22,true], [l3, x3, x33,true]], [[calcul(abs0 + 1 / pas1,0), 1, 0], [calcul(abs0 + 2 / pas1,0), 2, 0], [calcul(abs0 + 3 / pas1,0), 3, 0], [calcul(abs0 + 4 / pas1,0), 4, 0], [calcul(abs0 + 5 / pas1,0), 5, 0], [calcul(abs0 + 6 / pas1,0), 6, 0]],false);
				texte_corr+=`<br>Les points ${l1}(${tex_nombrec(abs1)}), ${l2}(${tex_nombrec(abs2)}), ${l3}(${tex_nombrec(abs3)}) sont placés ci dessus<br>`;
				this.liste_questions.push(texte)
				this.liste_corrections.push(texte_corr);
			}

		}
		if (!sortie_html) liste_de_question_to_contenu(this); 

	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Nombre relatif à une décimale\n2 : Nombre relatif à deux décimales\n3 : Nombre relatif à trois décimales\n4 : Mélange"];
}

/**
 * Lire les coordonnées d'un point du plan avec une précision allant de l'unité à 0,25.
 * @Auteur Jean-Claude Lhote
 */
function reperage_point_du_plan(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer les coordonnées (relatives) d'un point";
	this.consigne = "Donner les coordonnées des points représentés";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
    this.spacing_corr = 1;
	this.sup=1;
	this.sup2=false;
	this.quart_de_plan=false;

	
	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
	this.liste_questions=[];
	this.liste_corrections=[];
	let texte,texte_corr;
	this.contenu = ''; // Liste de questions
	this.contenu_correction = ''; // Liste de questions corrigées
	let liste_points=[],points=[];
	let grille,w,h,k,xmin,xmax,ymin,ymax,shiftxnom,shiftynom;
	h=Math.round(window.innerHeight*0.7)
	w=h;
	k=Math.pow(2,parseInt(this.sup)-1);
	let nom=[];
	if (this.sup2==true) grille=true;
	else grille=false;
	if (this.quart_de_plan) {
		xmin=0;ymin=0;xmax=10;ymax=10;
	}
	else	{
		xmin=-5;ymin=-5;xmax=5;ymax=5;	
	}
	let liste_abs=[],liste_ord=[];
	for (let i=calcul(xmin+1/k);i<calcul(xmax-(parseInt(this.sup)-1)/k);i=calcul(i+1/k)) {
		liste_abs.push(i)
	}
	for (let i=calcul(ymin+1/k);i<calcul(ymax-(parseInt(this.sup)-1)/k);i=calcul(i+1/k)) {
		liste_ord.push(i)
	}
	let X0=false,Y0=false;
	liste_points=creer_couples(liste_abs,liste_ord,10*k);
	for (let j=0;j<5;j++) {
		points.push(liste_points[j]);
		if (points[j][0]==0) X0=true;
		if (points[j][1]==0) Y0=true;
	}
	if (!X0) points[0][0]=0;
	if (!Y0) points[1][1]=0;
	points=shuffle(points);

	for (let l=0,lettre=randint(1,20);l<5;l++) nom.push(lettre_depuis_chiffre(l+lettre));
	if (sortie_html) {
		let id_unique = `${Date.now()}`
		let id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
		this.consigne = `<div id="${id_du_div}" style="height: ${h}px"></div>`;
		if (!window.SVGExist) {window.SVGExist = {}} // Si SVGExist n'existe pas on le créé
		// SVGExist est un dictionnaire dans lequel on stocke les listenner sur la création des div
		window.SVGExist[id_du_div] = setInterval(function() {
			if ($(`#${id_du_div}`).length ) {
				$(`#${id_du_div}`).html("");//Vide le div pour éviter les SVG en doublon
				const mon_svg = SVG().addTo(`#${id_du_div}`).viewbox(0, 0, 520, 520).size('100%','100%')
			let AxesXY=SVG_repere(mon_svg,xmin,xmax,ymin,ymax,k,k,500,500,grille);
			for (let i=0;i<5;i++)	{
				if (points[i][0]==0||points[i][0]==0.25) shiftxnom=20;
				else shiftxnom=0;
				shiftynom=0;
				if (points[i][1]==-0.5) shiftynom=10;	
				if (points[i][1]==-0.25) shiftynom=20;
				SVG_tracer_point(mon_svg,calcul(20+(points[i][0]-xmin)*480/(xmax-xmin)),calcul(480-(points[i][1]-ymin)*480/(ymax-ymin)),nom[i],'blue',-10+shiftxnom,10+shiftynom,[true,AxesXY[0],AxesXY[1]])
			}
			clearInterval(SVGExist[id_du_div]);//Arrête le timer
			}

		}, 100); // Vérifie toutes les 100ms



	}
	else { //sortie Latex 
		texte =`\\begin{tikzpicture}`;
		texte += Latex_repere(xmin,xmax,ymin,ymax,k,k,grille);
		for (let i=0;i<5;i++)	{
		texte += `\n\t \\tkzDefPoint(${points[i][0]},${points[i][1]}){A}`
		texte +=`\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)`
		texte +=`\n\t \\tkzLabelPoint[above=5pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${nom[i]}$}`
		}
		texte +=`\n\t \\end{tikzpicture}`;
		this.liste_questions.push(texte);
		
		texte_corr =`\\begin{tikzpicture}`;
		texte_corr += Latex_repere(xmin,xmax,ymin,ymax,k,k,grille);
		for (let i=0;i<5;i++)	{
		texte_corr += `\n\t \\tkzDefPoint(${points[i][0]},${points[i][1]}){A}`
		texte_corr +=`\n\t \\tkzDrawPoint[shape=cross out,color=blue,size=6](A)`
		texte_corr +=`\n\t \\tkzLabelPoint[above=5pt,fill=white,fill opacity=0.7,text opacity=1,inner sep=0](A){$${nom[i]}$}`
		texte_corr +=`\n\t \\tkzPointShowCoord(A)`
		}
		texte_corr +=`\n\t \\end{tikzpicture}`;
		this.liste_corrections.push(texte_corr);
	}

	texte=`Déterminer les coordonnées des points`;
	texte_corr=`Les coordonnées des points sont :`
	for (i=0;i<4;i++) {
	texte+=` $${nom[i]}$,`;
	texte_corr+=` $${nom[i]}(${tex_nombre(points[i][0])};${tex_nombre(points[i][1])})$, `;
	}
	texte+=` $${nom[i]}$.`
	texte_corr+=` $${nom[i]}(${tex_nombre(points[i][0])};${tex_nombre(points[i][1])})$.`;	
	this.liste_questions.push(texte)
	this.liste_corrections.push(texte_corr);
	liste_de_question_to_contenu_sans_numero(this); 
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Coordonnées entières\n2 : Coordonnées 'en demis'\n3 : Coordonnées 'en quarts'"];
	this.besoin_formulaire2_case_a_cocher = ['Grille de lecture'];
}
/**
 * Calculs de probabilités sur une expérience aléatoire à une épreuve.
 * @Auteur Jean-Claude Lhote
 */
function fonctions_probabilite1(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des probabilités dans une expérience aléatoire à une épreuve";
	this.consigne = "";
	this.nb_questions = 4;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 2 : this.spacing = 1; 
	sortie_html? this.spacing_corr = 3 : this.spacing_corr = 1;
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_index_disponibles=[0,1,2,3,4,5,6];
		let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions)
		let liste_de_lieux_choses=[['le frigo','yaourts'],['le frigo','desserts lactés'],['une urne','boules'],['une urne','jetons'],['un paquet de bonbons','nounours'],['un tiroir de la commode','t-shirts'],['un tas de jetons de poker','jetons']]
		let qualites=[[]]
		qualites[0]=['à la fraise','à la vanille','à l\'abricot','à l\'ananas','à la cerise'];
		qualites[1]=['au chocolat','à la vanille','au café','à la pistache','au caramel'];
		qualites[2]=['rouges','vertes','bleues','noires','blanches'];
		qualites[3]=['gris','cyans','roses','jaunes','violets'];
		qualites[4]=['rouges','verts','bleus','noirs','jaunes'];
		qualites[5]=['rouges','verts','bleus','noirs','blancs'];
		qualites[6]=['rouges','verts','bleus','noirs','jaunes'];
		for (let i = 0,p,m,q,somme,quidam,index1,lieu,objet,article,pronom,n=[], texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			index1=liste_index[i];
			if (index1==2) {article=`une`;pronom=`elles`}
			else {article=`un`;pronom=`eux`;}
			quidam=prenom();
			lieu=liste_de_lieux_choses[index1][0];
			objet=liste_de_lieux_choses[index1][1];
			n[0]=randint(2,5);
			n[1]=randint(1,6)+1;
			n[2]=randint(1,3)*2;
			n[3]=randint(1,4)+2;
			n[4]=randint(2,5);

			somme=n[0]+n[1]+n[2]+n[3]+n[4];
			m=randint(0,4);
			p=randint(0,4,[m]);
			q=randint(0,4,[p,m]);
	
			texte = `Dans ${lieu} il y a ${somme} ${objet}. ${n[0]} sont ${qualites[index1][0]}, ${n[1]} sont ${qualites[index1][1]}, ${n[2]} sont ${qualites[index1][2]}, ${n[3]} sont ${qualites[index1][3]} et ${n[4]} sont ${qualites[index1][4]}.<br> `;
			texte+= `${quidam} choisit au hasard l'${article} d'entre ${pronom}.<br> `;
			texte +=num_alpha(0)+` Quelle est la probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][m]} ?<br>`;
			texte +=num_alpha(1)+` Quelle est la probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][p]} ?<br>`;			
			texte +=num_alpha(2)+` Quelle est la probabilité que son choix ne tombe pas sur l'${article} des ${objet} ${qualites[index1][q]} ?<br>`;
			texte +=num_alpha(3)+` Quelle est la probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][m]} ou ${qualites[index1][p]}?<br>`;
			texte_corr =`On est dans une situation d’équiprobabilité donc la probabilité est donnée par le quotient du nombre de cas favorables par le nombre de cas au total.<br>`
			texte_corr += num_alpha(0)+` Il y a ${n[m]} ${objet} ${qualites[index1][m]} et il y a ${somme} ${objet} possibles. La probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][m]} est :<br> $${tex_fraction(n[m],somme)}${simplification_de_fraction_avec_etapes(n[m],somme)}$.<br>`;
			texte_corr +=num_alpha(1)+` Il y a ${n[p]} ${objet} ${qualites[index1][p]} et il y a ${somme} ${objet} possibles. La probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][p]} est :<br> $${tex_fraction(n[p],somme)}${simplification_de_fraction_avec_etapes(n[p],somme)}$.<br>`;
			texte_corr +=num_alpha(2)+` Il y a ${n[q]} ${objet} ${qualites[index1][q]}, donc il y a ${somme} $-$ ${n[q]} $=$ ${somme-n[q]} autres ${objet} et il y a ${somme} ${objet} possibles. La probabilité que son choix ne tombe pas sur l'${article} des ${objet} ${qualites[index1][q]} est :<br> $${tex_fraction(somme-n[q],somme)}${simplification_de_fraction_avec_etapes(somme-n[q],somme)}$.<br>`;
			texte_corr +=num_alpha(3)+` La probabilité d'un événement est la somme des probabilités des issues qui le composent. Donc la probabilité que son choix tombe sur l'${article} des ${objet} ${qualites[index1][m]} ou ${qualites[index1][p]} est :<br> $${tex_fraction(n[m],somme)}+${tex_fraction(n[p],somme)}=${tex_fraction(n[p]+n[m],somme)}${simplification_de_fraction_avec_etapes(n[p]+n[m],somme)}$.<br>`;
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
};

/**
* Deux parallélogrammes sont tracés, on connait les 2 côté et une hauteur.
*
* Il faut calculer leurs aires.
*
* Pas de version LaTeX
* @Auteur Rémi Angot
*/
function Aire_du_parallelogramme(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Aire du parallélogramme"
	this.consigne = "Calculer l'aire des 3 parallélogrammes suivants (les longueurs sont données en cm)."
	this.spacing = 2;
	this.spacing_corr = 2 ;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [800,600];


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_corrections = []; // Liste de questions corrigées
		let c1 = randint(3,7)
		let h1 = randint(2,4)
		let c2 = randint(3,7)
		let h2 = randint(2,7)
		let c3 = randint(3,10)
		let h3 = randint(2,4)
		let fig1 ="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAAC4QAAAQEAAAAAAAAAAQAAAMH#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATcAAAABQBwAAAAAAAAAAAACAP####8AAAAAABAAAUEAwBQAAAAAAADAOAAAAAAAAAUAAUA5gAAAAAAAQEO4UeuFHrgAAAADAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAgA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAoAAAAL#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAMAAAADQD#####AAAAAAAQAAFCAMAYAAAAAAAAwDgAAAAAAAAFAAEAAAAMAAAACQD#####AAJoMQABNAAAAAFAEAAAAAAAAP####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAKAAAACgD#####AQAAAAABAAAACf####8AAAABAApDT3BlcmF0aW9uAwAAAAsAAAAIAAAAAUAIAAAAAAAAAAAAAAwA#####wAAAAoAAAARAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABIAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAEgAAAA4A#####wEAAAAAEAAAAQABAAAAFAAAAAoAAAAKAP####8BAAAAAAEAAAAUAAAACwAAAA8AAAAADAD#####AAAAFQAAABYAAAANAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAFwAAAA0A#####wAAAAAAEAABRADAFAAAAAAAAEAAAAAAAAAABQABAAAAF#####8AAAABABBDRHJvaXRlUGFyYWxsZWxlAP####8BAAAAABAAAAEAAQAAABkAAAAKAAAACgD#####AQAAAAABAAAAGQAAAAsAAAAIAAAAAAwA#####wAAABoAAAAbAAAADQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABwAAAANAP####8AAAAAABAAAUMAwBAAAAAAAABAAAAAAAAAAAUAAQAAABwAAAAGAP####8BAAAAARAAAVoAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAA4AAAAFAP####8AAAAAABAAAAEAAQAAAAkAAAAOAAAABQD#####AAAAAAAQAAABAAEAAAAOAAAAHgAAAAUA#####wAAAAAAEAAAAQABAAAAHgAAABkAAAAFAP####8AAAAAABAAAAEAAQAAABkAAAAJAAAADgD#####AQAAAAAQAAABAAEAAAAfAAAAIP####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8BAAAAARAAAloyAAAAAAAAAAAAQAgAAAAAAAAFAAAAACQAAAAiAAAABQD#####AAAAAAAQAAABAQEAAAAfAAAAJf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAAAfAAAAJQAAAAMAAAAAJwAAAAAAEAAAAQABAAAAHwE#8AAAAAAAAAAAAAQAAAAAJwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAKP####8AAAACABNDTWVzdXJlQW5nbGVPcmllbnRlAAAAACcAAmFuAAAAKQAAAB8AAAAlAAAACAEAAAAnAAAAHwAAACUAAAAGAAAAACcAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAfAAAAJf####8AAAABAA1DUG9pbnRQcm9qZXRlAAAAACcAAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAACUAAAAoAAAAEwAAAAAnAAJtYQAAACkAAAAfAAAALf####8AAAABAA5DVGVzdEV4aXN0ZW5jZQAAAAAnAAN0bWEAAAAu#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAnAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAALBAAAAAAAAEAAAAC#####wAAAAEADUNGb25jdGlvbjNWYXIAAAAACwAAAC8AAAAPAAAAAAsAAAAqAAAACwAAAC4AAAALAAAAKgAAAAABAAAAKwAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAACQAAAA4AAAADAAAAADEAAAAAABAAAAEAAQAAAAkBP#AAAAAAAAAAAAAEAAAAADEAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAADIAAAATAAAAADEAAmFuAAAAMwAAAAkAAAAOAAAACAEAAAAxAAAACQAAAA4AAAAGAAAAADEAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAADgAAABQAAAAAMQAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAADIAAAATAAAAADEAAm1hAAAAMwAAAAkAAAA3AAAAFQAAAAAxAAN0bWEAAAA4AAAAFgEAAAAxAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAANhAAAAAAAAEAAAACAAAAFwAAAAALAAAAOQAAAA8AAAAACwAAADQAAAALAAAAOAAAAAsAAAA0AAAAAAEAAAA1AAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAAAOAAAAHgAAAAMAAAAAOwAAAAAAEAAAAQABAAAADgE#8AAAAAAAAAAAAAQAAAAAOwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAPAAAABMAAAAAOwACYW4AAAA9AAAADgAAAB4AAAAIAQAAADsAAAAOAAAAHgAAAAYAAAAAOwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAeAAAAFAAAAAA7AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAPAAAABMAAAAAOwACbWEAAAA9AAAADgAAAEEAAAAVAAAAADsAA3RtYQAAAEIAAAAWAQAAADsAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAABAEAAAAAAAAQAAAAIAAAAXAAAAAAsAAABDAAAADwAAAAALAAAAPgAAAAsAAABCAAAACwAAAD4AAAAAAQAAAD8AAAACAP####8AAAAAABAAAUUAwBQAAAAAAADANgAAAAAAAAUAAUA#gAAAAAAAQHH3Cj1wo9cAAAAJAP####8AAmMyAAE3AAAAAUAcAAAAAAAAAAAACQD#####AAJoMgABNwAAAAFAHAAAAAAAAAAAAAoA#####wEAAAAAAQAAAEUAAAALAAAARgD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAUYAwBAAAAAAAADAOgAAAAAAAAUAAT#PhK2tCtK0AAAASAAAAAUA#####wAAAAAAEAAAAQABAAAARQAAAEkAAAAGAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAEkAAAAOAP####8BAAAAABAAAAEAAQAAAEsAAABKAAAACgD#####AQAAAAABAAAASwAAAAsAAABHAAAAAAwA#####wAAAEwAAABNAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAE4AAAANAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAQAAAE4AAAAKAP####8BAAAAAAEAAABFAAAADwIAAAABP9mZmZmZmZoAAAALAAAARgAAAAAMAP####8AAABKAAAAUQAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAABSAAAADQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAFIAAAAOAP####8BAAAAABAAAAEAAQAAAFMAAABKAAAACgD#####AQAAAAABAAAAUwAAAAsAAABHAAAAAAwA#####wAAAFUAAABWAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAFcAAAANAP####8AAAAAABAAAUgAwCQAAAAAAABAAAAAAAAAAAUAAQAAAFcAAAAQAP####8BAAAAABAAAAEAAQAAAFkAAABKAAAABQD#####AAAAAAAQAAABAAEAAABFAAAAWQAAABAA#####wEAAAAAEAAAAQABAAAASQAAAFsAAAARAP####8AAAAAABAAAUcAwCAAAAAAAABAAAAAAAAAAAUAAAAAWgAAAFwAAAAFAP####8AAAAAABAAAAEAAQAAAFkAAABdAAAABQD#####AAAAAAAQAAABAAEAAABdAAAASQAAAAUA#####wAAAAAAEAAAAQEBAAAASwAAAFAAAAASAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAACAAAAAgAAAFkAAABFAAAAAwAAAABhAAAAAAAQAAABAAEAAABZAT#wAAAAAAAAAAAABAAAAABhAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABiAAAAEwAAAABhAAJhbgAAAGMAAABZAAAARQAAAAgBAAAAYQAAAFkAAABFAAAABgAAAABhAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAWQAAAEUAAAAUAAAAAGEAAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAABiAAAAEwAAAABhAAJtYQAAAGMAAABZAAAAZwAAABUAAAAAYQADdG1hAAAAaAAAABYBAAAAYQAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGYQAAAAAAABAAAAAgAAABcAAAAACwAAAGkAAAAPAAAAAAsAAABkAAAACwAAAGgAAAALAAAAZAAAAAABAAAAZQAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAUAAAAEsAAAADAAAAAGsAAAAAABAAAAEAAQAAAFABP#AAAAAAAAAAAAAEAAAAAGsAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGwAAAATAAAAAGsAAmFuAAAAbQAAAFAAAABLAAAACAEAAABrAAAAUAAAAEsAAAAGAAAAAGsAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAASwAAABQAAAAAawAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAASwAAAGwAAAATAAAAAGsAAm1hAAAAbQAAAFAAAABxAAAAFQAAAABrAAN0bWEAAAByAAAAFgEAAABrAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAcBAAAAAAAAEAAAACAAAAFwAAAAALAAAAcwAAAA8AAAAACwAAAG4AAAALAAAAcgAAAAsAAABuAAAAAAEAAABvAAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABZAAAAXQAAAAMAAAAAdQAAAAAAEAAAAQABAAAAWQE#8AAAAAAAAAAAAAQAAAAAdQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAdgAAABMAAAAAdQACYW4AAAB3AAAAWQAAAF0AAAAIAQAAAHUAAABZAAAAXQAAAAYAAAAAdQAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFkAAABdAAAAFAAAAAB1AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABdAAAAdgAAABMAAAAAdQACbWEAAAB3AAAAWQAAAHsAAAAVAAAAAHUAA3RtYQAAAHwAAAAWAQAAAHUAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB6EAAAAAAAAQAAAAIAAAAXAAAAAAsAAAB9AAAADwAAAAALAAAAeAAAAAsAAAB8AAAACwAAAHgAAAAAAQAAAHn#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAAAAAQAAAAFAI7YIdN7bnAAAACUAAAAfAAAADgAAABkA#####wAAAAAAAQAAAAFAJLeGyzdqwwAAAB8AAAAlAAAAHgAAABkA#####wAAAAAAAQAAAAFAJ52vyk47vQAAAFAAAABLAAAASQAAABkA#####wAAAAAAAQAAAAFAJtJ6XCnohwAAAEsAAABQAAAAXQAAAAkA#####wACYzMAATcAAAABQBwAAAAAAAAAAAAJAP####8AAmgzAAE0AAAAAUAQAAAAAAAAAAAAAgD#####AAAAAAAQAAFNAMA1AAAAAAAAwCoAAAAAAAAFAAFAf3gAAAAAAEBnLhR64UeuAAAAAwD#####AQAAAAEQAAABAAEAAACFAD#wAAAAAAAAAAAACgD#####AQAAAAABAAAAhQAAAAsAAACDAAAAAAwA#####wAAAIYAAACHAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAIgAAAANAP####8AAAAAABAAAU4AwDEAAAAAAADAJAAAAAAAAAUAAQAAAIgAAAAKAP####8BAAAAAAEAAACKAAAADwMAAAALAAAAgwAAAAFACAAAAAAAAAAAAAAMAP####8AAACGAAAAiwAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAACMAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAIwAAAAOAP####8BAAAAABAAAAEAAQAAAI4AAACGAAAACgD#####AQAAAAABAAAAjgAAAAsAAACEAAAAAAwA#####wAAAI8AAACQAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAQAAAJEAAAANAP####8AAAAAABAAAU8AQBgAAAAAAADAKAAAAAAAAAUAAgAAAJEAAAAFAP####8AAAAAABAAAAEAAQAAAIoAAACTAAAABQD#####AAAAAAAQAAABAAEAAACFAAAAigAAAAoA#####wEAAAAAAQAAAJMAAAALAAAAgwAAAAADAP####8BAAAAARAAAAEAAQAAAJMAP#AAAAAAAAAAAAAMAP####8AAACXAAAAlgAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAACYAAAADQD#####AAAAAAAQAAFQAEAUAAAAAAAAwCgAAAAAAAAFAAIAAACYAAAABQD#####AAAAAAAQAAABAAEAAACTAAAAmgAAAAUA#####wAAAAAAEAAAAQABAAAAmgAAAIUAAAAGAP####8BAAAAARAAAUsAAAAAAAAAAABACAAAAAAAAAUAAAAAigAAAIUAAAADAP####8BAAAAARAAAAEAAQAAAJ0BP#AAAAAAAAAAAAARAP####8BAAAAARAAAUwAAAAAAAAAAABACAAAAAAAAAUAAAAAngAAAJsAAAAFAP####8AAAAAABAAAAEBAQAAAJ0AAACfAAAAGQD#####AAAAAAABAAAAAUAlhyjGBrH8AAAAhQAAAJ0AAACfAAAAGQD#####AAAAAAABAAAAAUAiIExpX47ZAAAAnQAAAJ8AAACaAAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAACKAAAAkwAAAAMAAAAAowAAAAAAEAAAAQABAAAAigE#8AAAAAAAAAAAAAQAAAAAowAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAApAAAABMAAAAAowACYW4AAAClAAAAigAAAJMAAAAIAQAAAKMAAACKAAAAkwAAAAYAAAAAowAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAIoAAACTAAAAFAAAAACjAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAACTAAAApAAAABMAAAAAowACbWEAAAClAAAAigAAAKkAAAAVAAAAAKMAA3RtYQAAAKoAAAAWAQAAAKMAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACoEAAAAAAAAQAAAAIAAAAXAAAAAAsAAACrAAAADwAAAAALAAAApgAAAAsAAACqAAAACwAAAKYAAAAAAQAAAKcAAAASAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAACAAAAAgAAAJ0AAACfAAAAAwAAAACtAAAAAAAQAAABAAEAAACdAT#wAAAAAAAAAAAABAAAAACtAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAACuAAAAEwAAAACtAAJhbgAAAK8AAACdAAAAnwAAAAgBAAAArQAAAJ0AAACfAAAABgAAAACtAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAnQAAAJ8AAAAUAAAAAK0AAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAAJ8AAACuAAAAEwAAAACtAAJtYQAAAK8AAACdAAAAswAAABUAAAAArQADdG1hAAAAtAAAABYBAAAArQAAAAAAQAAAAAAAAADAAAAAAAAAAAAAALIQAAAAAAABAAAAAgAAABcAAAAACwAAALUAAAAPAAAAAAsAAACwAAAACwAAALQAAAALAAAAsAAAAAABAAAAsQAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAigAAAIUAAAADAAAAALcAAAAAABAAAAEAAQAAAIoBP#AAAAAAAAAAAAAEAAAAALcAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAALgAAAATAAAAALcAAmFuAAAAuQAAAIoAAACFAAAACAEAAAC3AAAAigAAAIUAAAAGAAAAALcAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACKAAAAhQAAABQAAAAAtwAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAhQAAALgAAAATAAAAALcAAm1hAAAAuQAAAIoAAAC9AAAAFQAAAAC3AAN0bWEAAAC+AAAAFgEAAAC3AAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAvBAAAAAAAAEAAAACAAAAFwAAAAALAAAAvwAAAA8AAAAACwAAALoAAAALAAAAvgAAAAsAAAC6AAAAAAEAAAC7AAAAB###########"
		let fig2 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAAC4QAAAQEAAAAAAAAAAQAAAL7#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AQAAAAAOAAFVAMAkAAAAAAAAQBAAAAAAAAAFAABAMU+dsi0OVkAxT52yLQ5W#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABAAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAVYAwAAAAAAAAABAEAAAAAAAAAUAAUBBT52yLQ5WAAAAAv####8AAAABAAhDU2VnbWVudAD#####AQAAAAAQAAABAAEAAAABAAAAA#####8AAAABAAdDTWlsaWV1AP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAABAAAAA#####8AAAACAAxDQ29tbWVudGFpcmUA#####wEAAAAAAAAAAAAAAABAGAAAAAAAAAAAAAUMAAAAAAABAAAAAAAAAAEAAAAAAAAAAAABMf####8AAAABAAlDTG9uZ3VldXIA#####wAAAAEAAAAD#####wAAAAEAB0NDYWxjdWwA#####wACYzEAATcAAAABQBwAAAAAAAAAAAACAP####8AAAAAABAAAUEAwBQAAAAAAADAOAAAAAAAAAUAAUA5gAAAAAAAQEO4UeuFHrgAAAADAP####8BAAAAARAAAAEAAQAAAAkBP#AAAAAAAAD#####AAAAAgAJQ0NlcmNsZU9SAP####8BAAAAAAEAAAAJ#####wAAAAEAD0NSZXN1bHRhdFZhbGV1cgAAAAgA#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAoAAAAL#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAAAMAAAADQD#####AAAAAAAQAAFCAMAYAAAAAAAAwDgAAAAAAAAFAAEAAAAMAAAACQD#####AAJoMQABNAAAAAFAEAAAAAAAAP####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAkAAAAKAAAACgD#####AQAAAAABAAAACf####8AAAABAApDT3BlcmF0aW9uAwAAAAsAAAAIAAAAAUAIAAAAAAAAAAAAAAwA#####wAAAAoAAAARAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABIAAAANAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQABAAAAEgAAAA4A#####wEAAAAAEAAAAQABAAAAFAAAAAoAAAAKAP####8BAAAAAAEAAAAUAAAACwAAAA8AAAAADAD#####AAAAFQAAABYAAAANAP####8AAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQACAAAAFwAAAA0A#####wAAAAAAEAABRADAFAAAAAAAAEAAAAAAAAAABQABAAAAF#####8AAAABABBDRHJvaXRlUGFyYWxsZWxlAP####8BAAAAABAAAAEAAQAAABkAAAAKAAAACgD#####AQAAAAABAAAAGQAAAAsAAAAIAAAAAAwA#####wAAABoAAAAbAAAADQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAABwAAAANAP####8AAAAAABAAAUMAwBAAAAAAAABAAAAAAAAAAAUAAQAAABwAAAAGAP####8BAAAAARAAAVoAAAAAAAAAAABACAAAAAAAAAUAAAAACQAAAA4AAAAFAP####8AAAAAABAAAAEAAQAAAAkAAAAOAAAABQD#####AAAAAAAQAAABAAEAAAAOAAAAHgAAAAUA#####wAAAAAAEAAAAQABAAAAHgAAABkAAAAFAP####8AAAAAABAAAAEAAQAAABkAAAAJAAAADgD#####AQAAAAAQAAABAAEAAAAfAAAAIP####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8BAAAAARAAAloyAAAAAAAAAAAAQAgAAAAAAAAFAAAAACQAAAAiAAAABQD#####AAAAAAAQAAABAQEAAAAfAAAAJf####8AAAABABRDSW1wbGVtZW50YXRpb25Qcm90bwD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAAAfAAAAJQAAAAMAAAAAJwAAAAAAEAAAAQABAAAAHwE#8AAAAAAAAAAAAAQAAAAAJwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAKP####8AAAACABNDTWVzdXJlQW5nbGVPcmllbnRlAAAAACcAAmFuAAAAKQAAAB8AAAAlAAAACAEAAAAnAAAAHwAAACUAAAAGAAAAACcAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAfAAAAJf####8AAAABAA1DUG9pbnRQcm9qZXRlAAAAACcAAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAACUAAAAoAAAAEwAAAAAnAAJtYQAAACkAAAAfAAAALf####8AAAABAA5DVGVzdEV4aXN0ZW5jZQAAAAAnAAN0bWEAAAAu#####wAAAAEAD0NWYWxldXJBZmZpY2hlZQEAAAAnAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAALBAAAAAAAAEAAAAC#####wAAAAEADUNGb25jdGlvbjNWYXIAAAAACwAAAC8AAAAPAAAAAAsAAAAqAAAACwAAAC4AAAALAAAAKgAAAAABAAAAKwAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAACQAAAA4AAAADAAAAADEAAAAAABAAAAEAAQAAAAkBP#AAAAAAAAAAAAAEAAAAADEAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAADIAAAATAAAAADEAAmFuAAAAMwAAAAkAAAAOAAAACAEAAAAxAAAACQAAAA4AAAAGAAAAADEAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAJAAAADgAAABQAAAAAMQAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAADgAAADIAAAATAAAAADEAAm1hAAAAMwAAAAkAAAA3AAAAFQAAAAAxAAN0bWEAAAA4AAAAFgEAAAAxAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAANhAAAAAAAAEAAAACAAAAFwAAAAALAAAAOQAAAA8AAAAACwAAADQAAAALAAAAOAAAAAsAAAA0AAAAAAEAAAA1AAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAAAOAAAAHgAAAAMAAAAAOwAAAAAAEAAAAQABAAAADgE#8AAAAAAAAAAAAAQAAAAAOwAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAPAAAABMAAAAAOwACYW4AAAA9AAAADgAAAB4AAAAIAQAAADsAAAAOAAAAHgAAAAYAAAAAOwAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAA4AAAAeAAAAFAAAAAA7AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAAAeAAAAPAAAABMAAAAAOwACbWEAAAA9AAAADgAAAEEAAAAVAAAAADsAA3RtYQAAAEIAAAAWAQAAADsAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAABAEAAAAAAAAQAAAAIAAAAXAAAAAAsAAABDAAAADwAAAAALAAAAPgAAAAsAAABCAAAACwAAAD4AAAAAAQAAAD8AAAACAP####8AAAAAABAAAUUAwBQAAAAAAADANgAAAAAAAAUAAUCHhAAAAAAAQGGuFHrhR64AAAAJAP####8AAmMyAAE3AAAAAUAcAAAAAAAAAAAACQD#####AAJoMgABNwAAAAFAHAAAAAAAAAAAAAoA#####wEAAAAAAQAAAEUAAAALAAAARgD#####AAAAAQAPQ1BvaW50TGllQ2VyY2xlAP####8AAAAAABAAAUYAwBAAAAAAAABAEAAAAAAAAAUAAUAQpTrvfJtJAAAASAAAAAUA#####wAAAAAAEAAAAQABAAAARQAAAEkAAAAGAP####8BAAAAARAAAUoAAAAAAAAAAABACAAAAAAAAAUAAAAARQAAAEkAAAAOAP####8BAAAAABAAAAEAAQAAAEsAAABKAAAACgD#####AQAAAAABAAAASwAAAAsAAABHAAAAAAwA#####wAAAEwAAABNAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAE4AAAANAP####8BAAAAARAAAUkAAAAAAAAAAABACAAAAAAAAAUAAQAAAE4AAAAKAP####8BAAAAAAEAAABFAAAADwIAAAABP9mZmZmZmZoAAAALAAAARgAAAAAMAP####8AAABKAAAAUQAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAABSAAAADQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAFIAAAAOAP####8BAAAAABAAAAEAAQAAAFMAAABKAAAACgD#####AQAAAAABAAAAUwAAAAsAAABHAAAAAAwA#####wAAAFUAAABWAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAFcAAAANAP####8AAAAAABAAAUgAwBQAAAAAAADAOQAAAAAAAAUAAQAAAFcAAAAQAP####8BAAAAABAAAAEAAQAAAFkAAABKAAAABQD#####AAAAAAAQAAABAAEAAABFAAAAWQAAABAA#####wEAAAAAEAAAAQABAAAASQAAAFsAAAARAP####8AAAAAABAAAUcAwCAAAAAAAABAAAAAAAAAAAUAAAAAWgAAAFwAAAAFAP####8AAAAAABAAAAEAAQAAAFkAAABdAAAABQD#####AAAAAAAQAAABAAEAAABdAAAASQAAAAUA#####wAAAAAAEAAAAQEBAAAASwAAAFAAAAASAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAACAAAAAgAAAFkAAABFAAAAAwAAAABhAAAAAAAQAAABAAEAAABZAT#wAAAAAAAAAAAABAAAAABhAAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAABiAAAAEwAAAABhAAJhbgAAAGMAAABZAAAARQAAAAgBAAAAYQAAAFkAAABFAAAABgAAAABhAAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAWQAAAEUAAAAUAAAAAGEAAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAAEUAAABiAAAAEwAAAABhAAJtYQAAAGMAAABZAAAAZwAAABUAAAAAYQADdG1hAAAAaAAAABYBAAAAYQAAAAAAQAAAAAAAAADAAAAAAAAAAAAAAGYQAAAAAAABAAAAAgAAABcAAAAACwAAAGkAAAAPAAAAAAsAAABkAAAACwAAAGgAAAALAAAAZAAAAAABAAAAZQAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAUAAAAEsAAAADAAAAAGsAAAAAABAAAAEAAQAAAFABP#AAAAAAAAAAAAAEAAAAAGsAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAGwAAAATAAAAAGsAAmFuAAAAbQAAAFAAAABLAAAACAEAAABrAAAAUAAAAEsAAAAGAAAAAGsAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAABQAAAASwAAABQAAAAAawAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAASwAAAGwAAAATAAAAAGsAAm1hAAAAbQAAAFAAAABxAAAAFQAAAABrAAN0bWEAAAByAAAAFgEAAABrAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAAcBAAAAAAAAEAAAACAAAAFwAAAAALAAAAcwAAAA8AAAAACwAAAG4AAAALAAAAcgAAAAsAAABuAAAAAAEAAABvAAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAABZAAAAXQAAAAMAAAAAdQAAAAAAEAAAAQABAAAAWQE#8AAAAAAAAAAAAAQAAAAAdQAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAdgAAABMAAAAAdQACYW4AAAB3AAAAWQAAAF0AAAAIAQAAAHUAAABZAAAAXQAAAAYAAAAAdQAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAFkAAABdAAAAFAAAAAB1AAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAABdAAAAdgAAABMAAAAAdQACbWEAAAB3AAAAWQAAAHsAAAAVAAAAAHUAA3RtYQAAAHwAAAAWAQAAAHUAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAAB6EAAAAAAAAQAAAAIAAAAXAAAAAAsAAAB9AAAADwAAAAALAAAAeAAAAAsAAAB8AAAACwAAAHgAAAAAAQAAAHn#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAAAAAQAAAAFAH79o6Vd44QAAAFAAAABLAAAARQAAABkA#####wAAAAAAAQAAAAFAHogkhw7PmgAAAEsAAABQAAAAWQAAABkA#####wAAAAAAAQAAAAFAIGGDLk4E3QAAACUAAAAfAAAADgAAABkA#####wAAAAAAAQAAAAFAIG#NSbOaeQAAAB8AAAAlAAAAHgAAAAkA#####wACYzMAAjEwAAAAAUAkAAAAAAAAAAAACQD#####AAJoMwABNQAAAAFAFAAAAAAAAAAAAAIA#####wAAAAAAEAABTQDAMgAAAAAAAMAuAAAAAAAABQABQFAgAAAAAABAdRcKPXCj1wAAAAoA#####wEAAAAAAQAAAIUAAAALAAAAgwAAAAAYAP####8AAAAAABAAAU4AQBAAAAAAAADAKAAAAAAAAAUAAUAYdXZyBbfYAAAAhgAAAAUA#####wAAAAAAEAAAAQABAAAAhQAAAIcAAAAKAP####8BAAAAAAEAAACFAAAADwMAAAALAAAAgwAAAAFAFAAAAAAAAAAAAAAMAP####8AAACIAAAAiQAAAA0A#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAEAAACKAAAADQD#####AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAIoAAAAOAP####8BAAAAABAAAAEAAQAAAIsAAACIAAAACgD#####AQAAAAABAAAAiwAAAAsAAACEAAAAAAwA#####wAAAI0AAACOAAAADQD#####AQAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAgAAAI8AAAANAP####8AAAAAABAAAVAAwDAAAAAAAADAGAAAAAAAAAUAAQAAAI8AAAAFAP####8AAAAAABAAAAEAAQAAAIUAAACRAAAACgD#####AQAAAAABAAAAkQAAAAsAAACDAAAAABAA#####wEAAAAAEAAAAQABAAAAkQAAAIgAAAAMAP####8AAACUAAAAkwAAAA0A#####wAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAIAAACVAAAADQD#####AAAAAAAQAAFPAEAUAAAAAAAAwCIAAAAAAAAFAAEAAACVAAAABQD#####AAAAAAAQAAABAAEAAACRAAAAlwAAAAUA#####wAAAAAAEAAAAQABAAAAlwAAAIcAAAAGAP####8BAAAAABAAAUsAAAAAAAAAAABACAAAAAAAAAUAAAAAhQAAAIcAAAAOAP####8BAAAAABAAAAEAAQAAAJoAAACIAAAAEQD#####AQAAAAAQAAFMAAAAAAAAAAAAQAgAAAAAAAAFAAAAAJsAAACUAAAAGQD#####AAAAAAABAAAAAUAkP+hrfTwUAAAAnAAAAJoAAACHAAAAGQD#####AAAAAAABAAAAAUAk8wqocINWAAAAmgAAAJwAAACXAAAABQD#####AAAAAAAQAAABAQEAAACcAAAAmgAAABIA#####wAeQWZmaWNoYWdlIGRlIGxvbmd1ZXVyIG9yaWVudMOpAAAABwAAAAIAAAACAAAAhQAAAIcAAAADAAAAAKAAAAAAABAAAAEAAQAAAIUBP#AAAAAAAAAAAAAEAAAAAKAAAAAAABAAAlcnAAAAAAAAAAAAQAgAAAAAAAAFAAFAYMAAAAAAAAAAAKEAAAATAAAAAKAAAmFuAAAAogAAAIUAAACHAAAACAEAAACgAAAAhQAAAIcAAAAGAAAAAKAAAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAACFAAAAhwAAABQAAAAAoAAAAAAAEAACVyIAAAAAAAAAAABACAAAAAAAAAUAAAAAhwAAAKEAAAATAAAAAKAAAm1hAAAAogAAAIUAAACmAAAAFQAAAACgAAN0bWEAAACnAAAAFgEAAACgAAAAAABAAAAAAAAAAMAAAAAAAAAAAAAApRAAAAAAAAEAAAACAAAAFwAAAAALAAAAqAAAAA8AAAAACwAAAKMAAAALAAAApwAAAAsAAACjAAAAAAEAAACkAAAAEgD#####AB5BZmZpY2hhZ2UgZGUgbG9uZ3VldXIgb3JpZW50w6kAAAAHAAAAAgAAAAIAAACFAAAAkQAAAAMAAAAAqgAAAAAAEAAAAQABAAAAhQE#8AAAAAAAAAAAAAQAAAAAqgAAAAAAEAACVycAAAAAAAAAAABACAAAAAAAAAUAAUBgwAAAAAAAAAAAqwAAABMAAAAAqgACYW4AAACsAAAAhQAAAJEAAAAIAQAAAKoAAACFAAAAkQAAAAYAAAAAqgAAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAFAAAAAIUAAACRAAAAFAAAAACqAAAAAAAQAAJXIgAAAAAAAAAAAEAIAAAAAAAABQAAAACRAAAAqwAAABMAAAAAqgACbWEAAACsAAAAhQAAALAAAAAVAAAAAKoAA3RtYQAAALEAAAAWAQAAAKoAAAAAAEAAAAAAAAAAwAAAAAAAAAAAAACvEAAAAAAAAQAAAAIAAAAXAAAAAAsAAACyAAAADwAAAAALAAAArQAAAAsAAACxAAAACwAAAK0AAAAAAQAAAK4AAAASAP####8AHkFmZmljaGFnZSBkZSBsb25ndWV1ciBvcmllbnTDqQAAAAcAAAACAAAAAgAAAJoAAACcAAAAAwAAAAC0AAAAAAAQAAABAAEAAACaAT#wAAAAAAAAAAAABAAAAAC0AAAAAAAQAAJXJwAAAAAAAAAAAEAIAAAAAAAABQABQGDAAAAAAAAAAAC1AAAAEwAAAAC0AAJhbgAAALYAAACaAAAAnAAAAAgBAAAAtAAAAJoAAACcAAAABgAAAAC0AAAAAAAQAAAAAAAAAAAAAABACAAAAAAAAAUAAAAAmgAAAJwAAAAUAAAAALQAAAAAABAAAlciAAAAAAAAAAAAQAgAAAAAAAAFAAAAAJwAAAC1AAAAEwAAAAC0AAJtYQAAALYAAACaAAAAugAAABUAAAAAtAADdG1hAAAAuwAAABYBAAAAtAAAAAAAQAAAAAAAAADAAAAAAAAAAAAAALkQAAAAAAABAAAAAgAAABcAAAAACwAAALwAAAAPAAAAAAsAAAC3AAAACwAAALsAAAALAAAAtwAAAAABAAAAuAAAAAf##########w=="
		let codeBase64 = choice([fig1,fig2])

		texte_corr = `Dans chaque parallélogramme, le segment en pointillés est ${texte_en_couleur_et_gras("perpendiculaire")} à deux côtés opposés, c'est donc une ${texte_en_couleur_et_gras("hauteur")}.<br>`
		texte_corr += `Pour obtenir l'aire, il faut multiplier cette ${texte_en_couleur_et_gras("hauteur")} par la longueur de la ${texte_en_couleur_et_gras("base")} correspondante.`
		texte_corr += "<br><br>"
		texte_corr += `$\\mathcal{A}_{ABCD}=${c1}~\\text{cm}\\times ${h1}~\\text{cm}=${c1*h1}~\\text{cm}^2$`
		texte_corr += `<br>$\\mathcal{A}_{EFGH}=${c2}~\\text{cm}\\times ${h2}~\\text{cm}=${c2*h2}~\\text{cm}^2$`
		texte_corr += `<br>$\\mathcal{A}_{MNOP}=${c3}~\\text{cm}\\times ${h3}~\\text{cm}=${c3*h3}~\\text{cm}^2$`
		

		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c1", "${c1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h1", "${h1}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c2", "${c2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h2", "${h2}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "c3", "${c3}");
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "h3", "${h3}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	
		
			
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);		
	}

// 	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Périmètres\n\
// 2 : Aires\n3 : Périmètres et aires"];

};

/**
 * 5A10 - Division Euclidienne; diviseurs, multiples, critères de divisibilité
 * Exercice bilan
 * @author Sébastien Lozano
 */
 
function Liste_des_diviseurs_5e(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Écrire la liste de tous les diviseurs d'un entier."; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Écrire la liste de tous les diviseurs d'un entier.`;
	//this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 3;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			//this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur la division euclidienne (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,1,2];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];

				switch (type_de_questions) {
					case 1 : // Compléter un tableau pour trouver la liste de tous les diviseurs d'un entier
						// on choisit un entier non premier inférieur à 99
						let M = randint(2,99,crible_eratosthene_n(99));
						// on calcule le nombre de diviseur de M pour prévoir le nombre de lignes du tableau
						let nbre_diviseurs_M = liste_diviseurs(M).length;
						
						texte = `Compléter le tableau suivant et faire la liste de tous les diviseurs de ${M}`;
						texte += `<br>`;						
						if (sortie_html) {
							texte += `$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n`
						} else {
							texte += `$\\begin{array}{|c|c|c|}\n`
						};						
						texte += `\\hline\n`
						texte += `\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${M} \\\\\n`
						texte += `\\hline\n`

						if (nbre_diviseurs_M%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(M).length/2); m++){
								texte += texte_ou_pas(liste_diviseurs(M)[m])+` & `+texte_ou_pas(liste_diviseurs(M)[(liste_diviseurs(M).length-m-1)])+`& ${texte_ou_pas(M)} \\\\\n`;
								texte += `\\hline\n`;
							};
						} else { // sinon il est impair, cela n'arrive qu'avvec les carrés parfaits
							for (let m = 0; m<((liste_diviseurs(M).length-1)/2); m++){
								texte += texte_ou_pas(liste_diviseurs(M)[m])+` & `+texte_ou_pas(liste_diviseurs(M)[(liste_diviseurs(M).length-m-1)])+`& ${texte_ou_pas(M)} \\\\\n`;
							};
							texte += texte_ou_pas(liste_diviseurs(M)[(nbre_diviseurs_M-1)/2])+` & `+texte_ou_pas(liste_diviseurs(M)[(nbre_diviseurs_M-1)/2])+`& ${texte_ou_pas(M)} \\\\\n`;							
							texte += `\\hline\n`;
						};			
						texte += `\\end{array}\n$`

						// correction

						texte_corr = `Le tableau suivant contient tous les couples de facteurs dont le produit vaut ${M}`;
						texte_corr += `<br>`;						

						if (sortie_html) {
							texte_corr += `$\\def\\arraystretch{2.5}\\begin{array}{|c|c|c|}\n`
						} else {
							texte_corr += `$\\begin{array}{|c|c|c|}\n`
						};						
						texte_corr += `\\hline\n`
						texte_corr += `\\text{Facteur n°1} & \\text{Facteur n°2} & \\text{Produit donnant } ${M} \\\\\n`
						texte_corr += `\\hline\n`

						if (nbre_diviseurs_M%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(M).length/2); m++){
								texte_corr += liste_diviseurs(M)[m]+` & `+liste_diviseurs(M)[(liste_diviseurs(M).length-m-1)]+`& ${M} \\\\\n`;
								texte_corr += `\\hline\n`;
							};
						} else { // sinon il est impair, cela n'arrive qu'avvec les carrés parfaits
							for (let m = 0; m<((liste_diviseurs(M).length-1)/2); m++){
								texte_corr += liste_diviseurs(M)[m]+` & `+liste_diviseurs(M)[(liste_diviseurs(M).length-m-1)]+`& ${M} \\\\\n`;
							};
							texte_corr += liste_diviseurs(M)[(nbre_diviseurs_M-1)/2]+` & `+liste_diviseurs(M)[(nbre_diviseurs_M-1)/2]+`& ${M} \\\\\n`;							
							texte_corr += `\\hline\n`;
						};		
						texte_corr += `\\end{array}\n$`

						texte_corr += `<br>`;
						texte_corr += `${M} a donc ${nbre_diviseurs_M} diviseurs qui sont : `;
						texte_corr += `1`;
						for (let w = 1; w<liste_diviseurs(M).length; w++) {
							texte_corr += `; `+liste_diviseurs(M)[w];
						};
						texte_corr += `.`;					
						break;
					case 2 : // liste des diviseurs
						// on définit un tableau pour les choix du nombre dont on veut les diviseurs
						// 3 parmis 2,99 y compris les premiers et 1 parmis les entiers à 3 chiffres ayant au moins 8 diviseurs, il y en a 223 !
						let tableau_de_choix = [];
						tableau_de_choix =[randint(2,99),randint(2,99,[tableau_de_choix[0]]),randint(2,99,[tableau_de_choix[0],tableau_de_choix[1]]),randint(2,99,[tableau_de_choix[0],tableau_de_choix[1],tableau_de_choix[2]])];
						let tableau_de_choix_3chiffres =[];
						for (let m=101; m<999; m++) {
							if (liste_diviseurs(m).length>8) {
								tableau_de_choix_3chiffres.push(m);
							};
						};
						// on ajoute un nombre à trois chiffre avec au moins 8 diviseurs dans les choix possibles
						let rg_Nb_3chiffres = randint(0,(tableau_de_choix_3chiffres.length-1));
						tableau_de_choix.push(tableau_de_choix_3chiffres[rg_Nb_3chiffres]);
										
						let N; // on déclare le nombre dont on va chercher les diviseurs
						let rg_N; // pour tirer le rang du nombre dans le tableau des choix
						rg_N = randint(0,(tableau_de_choix.length-1));
						N = tableau_de_choix[rg_N];
						texte = `Écrire la liste de tous les diviseurs de ${N}.`;
						texte_corr = `Pour trouver la liste des diviseurs de ${N} on cherche tous les produits de deux facteurs qui donnent ${N}. En écrivant toujours le plus petit facteur en premier.<br>`;
						texte_corr += `Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${N}, par exemple ici, ${Math.trunc(Math.sqrt(N))}$\\times$${Math.trunc(Math.sqrt(N))} = ${Math.trunc(Math.sqrt(N))*Math.trunc(Math.sqrt(N))}<${N}`;
						texte_corr += ` et ${Math.trunc(Math.sqrt(N))+1}$\\times$${Math.trunc(Math.sqrt(N))+1} = ${(Math.trunc(Math.sqrt(N))+1)*(Math.trunc(Math.sqrt(N))+1)}>${N} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(N))}.`;
						texte_corr += ` En effet, si ${N} est le produit de deux entiers p$\\times$q avec p < q alors si p$\\times$p > ${N} c'est que q$\\times$q < ${N} mais dans ce cas p serait supérieur à q sinon p$\\times$q serait inférieur à ${N} ce qui ne doit pas être le cas.<br>`
						if (liste_diviseurs(N).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(N).length/2); m++){
								texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+` = ${N}<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(N).length-1)/2); m++){
								texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+`<br>`;
							};
							texte_corr += ``+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+` = ${N}<br>`;
						};
						texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${N}.<br>`;
						texte_corr += `La liste des diviseurs de ${N} est donc `;
						texte_corr += `1`;
						for (let w = 1; w<liste_diviseurs(N).length; w++) {
							texte_corr += `; `+liste_diviseurs(N)[w];
						};
						texte_corr += `.`;
						break;							
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};


/**
 * 5A11 justifier la non primalité réinvestissement des critères de divisibilité
 * Nombres à 3 ou 4 chiffres, un multiple de 2, de 3, de 5, de 7, de 10, sous forme d'un produit de deux nombres premiers inférieurs à 30
 * et un nombre premier inferieur à 529 
 * @author Sébastien Lozano
 */
function Premier_ou_pas_5e(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Primalité ou pas"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Justifier que les nombres suivants sont premiers ou pas.`;
	//this.consigne += `<br>`;	
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 7;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-5A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6,7];
		//type_de_questions_disponibles=shuffle(type_de_questions_disponibles); // on mélange l'ordre des questions
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);
		
		let string_rappel = `Cette liste des nombres premiers inférieurs à 30 pourra être utile : <br>`+crible_eratosthene_n(100)[0];
		for (let k=1;k<crible_eratosthene_n(30).length;k++) {
			string_rappel +=`, `+crible_eratosthene_n(30)[k];
		};
		string_rappel +=`.`;
		if (sortie_html) {
			this.introduction =`
			<br>
			<div class="ui compact warning message">		
			<p>`+string_rappel+`
			</p>
			</div>
			<br>`;
		} else {
			this.introduction = tex_cadre_par_orange(string_rappel);							
		};

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {

				type_de_questions = liste_type_de_questions[i];
				
				var N; // le nombre de la question
	
				switch (type_de_questions) {
					case 1 : // nombre pair
						N=2*randint(51,4999);
						texte = nombre_avec_espace(N);						
						texte_corr = `Comme ${nombre_avec_espace(N)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;		
					case 2 : // Multiple de 3
						let sum3=0; // pour la valeur de la somme;
						N=3*randint(34,3333);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme `+ N.toString().charAt(0);
						sum3 = Number(N.toString().charAt(0));
						for (let k=1; k<N.toString().length; k++) {
							texte_corr += ` + `+N.toString().charAt(k);
							sum3 +=Number(N.toString().charAt(k));
						};					
						texte_corr += ` = ${sum3} est un multiple de 3 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 3 : // Multiple de 5
						N=5*randint(20,1999);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme le dernier chiffre de ${nombre_avec_espace(N)} est un ${N.toString().charAt(N.toString().length-1)} alors ${nombre_avec_espace(N)} est divisible par 5, `;
						texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 4 : // Multiple de 9
						let sum9=0; // pour la valeur de la somme;
						N=9*randint(12,1111);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme `+ N.toString().charAt(0);
						sum9 = Number(N.toString().charAt(0));
						for (let k=1; k<N.toString().length; k++) {
							texte_corr += ` + `+N.toString().charAt(k);
							sum9 +=Number(N.toString().charAt(k));
						};					
						texte_corr += ` = ${sum9} est un multiple de 9 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 9 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 5 : // multiple de 10
						N=10*randint(10,999);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme le nombre ${nombre_avec_espace(N)} se termine par un ${N.toString().charAt(N.toString().length-1)} alors ${nombre_avec_espace(N)} est un multiple de 10, `;
						texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 10 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 6 : // produit de deux nombres premiers inférieurs à 30
						// rang du premier facteur premier
						let r1 = randint(0,crible_eratosthene_n(30).length-1);
						// rang du second facteur premier
						let r2 = randint(0,crible_eratosthene_n(30).length-1);
						let prime1 = crible_eratosthene_n(100)[r1]; // on tire un nombre premier inférieur à 100, il n'y en a que 25!
						let prime2 = crible_eratosthene_n(100)[r2]; // on tire un autre nombre premier inférieur à 100, ça peut être le même qu'avant!
						N=prime1+`$\\times$`+prime2;
						texte = N;
						texte_corr = `${N} est le produit de ${prime1} et de ${prime2}, il admet donc au moins `;
						if (prime1==prime2) {
							texte_corr += `trois divisieurs qui sont 1, ${prime1} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						} else {
							texte_corr += `quatre diviseurs qui sont 1, ${prime1}, ${prime2} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						};
						texte_corr +=`<br> ${N} n'est donc pas premier.`; 
						break;
					case 7 : // nombre premier inférieur à 29
						// rang du nombre premier choisi
						// let r = randint(0,crible_eratosthene_n(529).length-1);
						// N=crible_eratosthene_n(529)[r]; //on choisit un nombre premier inférieur à 529
						let r = randint(0,crible_eratosthene_n(29).length-1);
						N=crible_eratosthene_n(29)[r]; //on choisit un nombre premier inférieur à 529
						texte = N+``;
						let tab_premiers_a_tester = crible_eratosthene_n(N);
						//console.log(crible_eratosthene_n(N).length);
						texte_corr = `Testons la divisibilité de ${N} par tous les nombres premiers inférieurs à ${N}, c'est à dire par les nombres `;
						texte_corr += tab_premiers_a_tester[0];
						for (let k=1;k<tab_premiers_a_tester.length;k++) {
							texte_corr += `, `+tab_premiers_a_tester[k];
						};
						texte_corr += `.`;
						texte_corr += `<br> Aucun de ces nombres premiers ne divise ${N}.`;
						texte_corr +=`<br> ${N} est donc un nombre premier.`; 
						break;								
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};
/**
* * Calcul de l'inverse d'un nombre. 
*
* Paramétrages possibles :
* * 1 : inverse d'un nombre entier
* * 2 : inverse d'une fraction
* * 3 : inverse d'un nombre décimal
* * 4 : mélange des trois autres niveaux
* @auteur Jean-Claude Lhote
*/
function Exercice_trouver_l_inverse(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; // Avec ou sans relatifs
	this.titre = "Trouver l'inverse d'un nombre"
	this.consigne = "Calculer l'inverse et donner la réponse sous forme décimale ou de fraction simplifiée quand c'est impossible"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles
		let liste_entiers=[[1,1],[2,0.5],[3,0],[4,0.25],[5,0.2],[6,0],[7,0],[8,0.125],[9,0],[10,0.1],[11,0],[12,0],[13,0],[14,0],[15,0],[20,0.05],[50,0.02],[100,0.01]]
		// [n,0] si l'inverse de n n'est pas décimal [n,1/n] si il est décimal.
		let liste_decimaux=[[0.1,10,1],[0.2,5,1],[0.3,10,3],[0.4,10,4],[0.5,2,1],[0.6,10,6],[0.75,100,75],[0.8,10,8],[1.2,10,12],[1.5,10,15],[2.5,10,25],[3.5,10,35],[4.8,10,48],[7.5,10,75]]
		// [x,n,d] n/d = inverse de x fraction à réduire si besoin ... d=1 si l'inverse de x est entier. 
		let liste_fractions=[[3,4,false],[5,2,true],[4,5,true],[5,7,true],[7,3,false],[16,6,true],[12,18,true],[9,4,false],[4,6,true],[8,7,true],[5,9,true],[9,7,false],[13,6,false],[7,2,false]]
		// [n,d,bol] inverse d/n à simplifier si besoin. si bol = true, alors d/n est décimal.
		let liste_couples_d_inverses
		let couples_d_inverses
		if (this.sup==4) {type_de_questions_disponibles = [1,1,2,2,3]} // nombre entier,fraction,décimal]
		else {type_de_questions_disponibles = [parseInt(this.sup)]}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, nombre_choisi, nombre_inverse, nombre_inverse_num, nombre_inverse_den, texte, texte_corr, type_de_questions, cpt=0; i < this.nb_questions&&cpt<50;) {
			type_de_questions = liste_type_de_questions[i];
			switch (type_de_questions){
				case 1 : //inverse d'entier
					couples_d_inverses = choice(liste_entiers)
					nombre_choisi = couples_d_inverses[0];
					nombre_inverse = couples_d_inverses[1];
					if (choice([true,false])) { // nombre entier positif
						if (nombre_inverse!=0) {  //inverse décimal
							texte_corr = `L\'inverse de $${nombre_choisi}$ est $${tex_nombrec(nombre_inverse)} \\:$ car $\\: ${nombre_choisi}   \\times   ${tex_nombrec(nombre_inverse)} =  1$.`
						}
						else {  //inverse non décimal
							texte_corr = `L\'inverse de $${nombre_choisi}$ est $${tex_fraction(1,nombre_choisi)} \\:$ car $\\: ${nombre_choisi}   \\times   ${tex_fraction(1,nombre_choisi)} =  1$.`
						}
						} else { //nombre entier négatif
							nombre_choisi=-nombre_choisi
							if (nombre_inverse!=0) { //inverse décimal
								texte_corr = `L'inverse de $${nombre_choisi}$ est $${tex_nombrec(-nombre_inverse)} \\:$`
								texte_corr+=` car $\\: ${nombre_choisi}  \\times  \\left(-${tex_nombrec(nombre_inverse)}\\right)  =  1$.`
							}
							else {  //inverse non décimal
								texte_corr = `L\'inverse de $${nombre_choisi}$ est $-${tex_fraction(1,-nombre_choisi)} \\:$ car $\\: ${nombre_choisi}   \\times   \\left(-${tex_fraction(1,-nombre_choisi)}\\right) =  1$.`
							}
					}
					texte = `Quel est l'inverse de $${tex_nombrec(nombre_choisi)}$ ?`;
				break
				case 2 :
					couples_d_inverses = choice(liste_decimaux)
					nombre_choisi = couples_d_inverses[0];
					nombre_inverse_num = couples_d_inverses[1];
					nombre_inverse_den = couples_d_inverses[2];
					if (choice([true,false])) { // nombre positif
						if (pgcd(nombre_inverse_num,nombre_inverse_den)==1) {  //non simplifiable après inversion
							texte_corr = `Comme $${tex_nombrec(nombre_choisi)}=${tex_fraction(nombre_inverse_den,nombre_inverse_num)}$, l'inverse de $${tex_nombrec(nombre_choisi)}$ est $${tex_fraction(nombre_inverse_num,nombre_inverse_den)} \\:$ car $\\: ${tex_fraction(nombre_inverse_den,nombre_inverse_num)}   \\times   ${tex_fraction(nombre_inverse_num,nombre_inverse_den)} =  1$.`
						}
						else {  // à simplifier après inversion
							texte_corr = `Comme $${tex_nombrec(nombre_choisi)}=${tex_fraction(nombre_inverse_den,nombre_inverse_num)}=${tex_fraction_reduite(nombre_inverse_den,nombre_inverse_num)}$, l'inverse de $${tex_nombrec(nombre_choisi)}$ est $${tex_fraction_reduite(nombre_inverse_num,nombre_inverse_den)} \\:$ car $\\: ${tex_fraction_reduite(nombre_inverse_den,nombre_inverse_num)}  \\times   ${tex_fraction_reduite(nombre_inverse_num,nombre_inverse_den)} =  1$.`	
						}
							
					} else { // nombre négatif
						nombre_choisi=-nombre_choisi
						if (pgcd(nombre_inverse_num,nombre_inverse_den)==1) {  //non simplifiable après inversion
							texte_corr = `L'inverse de $${tex_nombrec(nombre_choisi)}$ est $-${tex_fraction(nombre_inverse_num,nombre_inverse_den)} \\:$ car $\\: ${tex_nombrec(nombre_choisi)}   \\times   \\left(-${tex_fraction(nombre_inverse_num,nombre_inverse_den)}\\right) =  1$.`
							texte_corr = `Comme $${tex_nombrec(nombre_choisi)}=-${tex_fraction(nombre_inverse_den,nombre_inverse_num)}$, l'inverse de $${tex_nombrec(nombre_choisi)}$ est $-${tex_fraction(nombre_inverse_num,nombre_inverse_den)} \\:$ car $\\: -${tex_fraction(nombre_inverse_den,nombre_inverse_num)}   \\times  \\left(- ${tex_fraction(nombre_inverse_num,nombre_inverse_den)}\\right) =  1$.`
						
						}
						else {  // à simplifier après inversion
							texte_corr = `Comme $${tex_nombrec(nombre_choisi)}=-${tex_fraction(nombre_inverse_den,nombre_inverse_num)}=-${tex_fraction_reduite(nombre_inverse_den,nombre_inverse_num)}$, l'inverse de $${tex_nombrec(nombre_choisi)}$ est $-${tex_fraction_reduite(nombre_inverse_num,nombre_inverse_den)} \\:$ car $\\: -${tex_fraction_reduite(nombre_inverse_den,nombre_inverse_num)}  \\times  \\left(- ${tex_fraction_reduite(nombre_inverse_num,nombre_inverse_den)} \\right)=  1$.`	
					}
					}
					texte = `Quel est l'inverse de $${tex_nombrec(nombre_choisi)}$ ?`;
				break	
				case 3 :
					couples_d_inverses = choice(liste_fractions)
					nombre_inverse_num = couples_d_inverses[0];
					nombre_inverse_den = couples_d_inverses[1];
					if (choice([true,false])) {  // fraction positive
						if (couples_d_inverses[2]==true) {  // inverse décimal
							texte_corr = `L'inverse de $${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ est $${tex_fraction(nombre_inverse_den,nombre_inverse_num)}=${tex_nombrec(nombre_inverse_den/nombre_inverse_num)} \\:$ car $\\: ${tex_fraction(nombre_inverse_num,nombre_inverse_den)}   \\times   ${tex_fraction(nombre_inverse_den,nombre_inverse_num)} =  1$.`
						}
						else {   // inverse non décimal
							texte_corr = `L'inverse de $${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ est $${tex_fraction(nombre_inverse_den,nombre_inverse_num)} \\:$ car $\\: ${tex_fraction(nombre_inverse_num,nombre_inverse_den)}   \\times   ${tex_fraction(nombre_inverse_den,nombre_inverse_num)} =  1$.`
						}
						texte = `Quel est l'inverse de $${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ ?`;
					} 
					else {  // fraction négative
						if (couples_d_inverses[2]==true) {  // inverse décimal
							texte_corr = `L'inverse de $-${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ est $-${tex_fraction(nombre_inverse_den,nombre_inverse_num)}=-${tex_nombrec(nombre_inverse_den/nombre_inverse_num)} \\:$ car $\\: -${tex_fraction(nombre_inverse_num,nombre_inverse_den)}   \\times  \\left(- ${tex_fraction(nombre_inverse_den,nombre_inverse_num)}\\right) =  1$.`
						}
						else {   // inverse non décimal
							texte_corr = `L'inverse de $-${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ est $-${tex_fraction(nombre_inverse_den,nombre_inverse_num)} \\:$ car $\\: -${tex_fraction(nombre_inverse_num,nombre_inverse_den)}   \\times  \\left(- ${tex_fraction(nombre_inverse_den,nombre_inverse_num)} \\right)=  1$.`
						}
						texte = `Quel est l'inverse de $-${tex_fraction(nombre_inverse_num,nombre_inverse_den)}$ ?`;
					}
					
				break	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,"1 : Nombres entiers\n 2 : Fractions\n 3 : Nombres décimaux\n 4 : Mélange des 3 niveaux"]
}

/**
* Exercice de calcul de produit de deux fractions. 
* 
* Paramétrages possibles :
* * 1 : Produits de nombres positifs seulement
* * 2 : deux questions niveau 1 puis deux questions niveau 3
* * 3 : Produits de nombres relatifs
* * Si décomposition cochée : les nombres utilisés sont plus importants.
* @auteur Jean-Claude Lhote
*/
function Exercice_multiplier_fractions(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; // Avec ou sans relatifs
	this.titre = "Mutliplier des fractions"
	this.consigne = "Calculer et donner le résultat sous forme irréductible"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;
	this.sup2 = false; //méthode
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles
		liste_fractions = obtenir_liste_fractions_irreductibles();

		if (this.sup==1) {type_de_questions_disponibles = [1,2,2,2]} // 1*nombre entier,3*fraction (pas de négatifs)
		else if (this.sup==2) {type_de_questions_disponibles = [2,2,3,3]} // fractions, 2*positifs, 2*relatifs
		else {type_de_questions_disponibles = [3]}
		let nombre_de_signe_moins;
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions);
		for (let i = 0, ab, cd, a, b, c, d, p, aa,bb,cc,dd, signe,numerateur,denominateur,index, texte, texte_corr, type_de_questions, cpt = 0; i < this.nb_questions && cpt < 50;) {
				type_de_questions = liste_type_de_questions[i];
				ab = choice(liste_fractions);
				cd = choice(liste_fractions);
				a = ab[0];
				b = ab[1]
				c = cd[0];
				d = cd[1];
				if (this.sup2==false){  // methode 1 : simplifications finale
					switch (type_de_questions) {
						case 1: // entier * fraction (tout positif)
							if (a == 1) { a = randint(2,9) };
							if (a==c) {a=a+1}
							texte = `$${tex_fraction(a, 1)}\\times${tex_fraction(c, d)}=$`;
							texte_corr = `$${tex_fraction(a, 1)}\\times${tex_fraction(c, d)}$`
							texte_corr +=`$=\\dfrac{${a}}{1}\\times${tex_fraction(c, d)}$`
							texte_corr +=`$=${tex_fraction(a + '\\times' + c, '1\\times' + d)}$`
							texte_corr +=`$=${tex_fraction(a * c, d)}$`
							if (pgcd(a * c, d) != 1) {
								texte_corr += `$=${tex_fraction_reduite(a * c, d)}$`
							}
							break

						case 2: // fraction * fraction tout positif
							p = pgcd(a * c, b * d);
							texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}=$`;
							texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`
							texte_corr += `$=${tex_fraction(a + '\\times' + c, b + '\\times' + d)}$`
							texte_corr += `$=${tex_fraction(a * c, b * d)}$`
							if (p != 1) {
								texte_corr += `$=${tex_fraction(a * c / p + '\\times\\cancel{' + p + '}', b * d / p + '\\times\\cancel{' + p + '}')}$`
								texte_corr += `$=${tex_fraction(a * c / p, b * d / p)}$`
							}
							break


						case 3:
							a = a * randint(-1, 1, [0]);
							b = b * randint(-1, 1, [0]);
							c = c * randint(-1, 1, [0]);
							d = d * randint(-1, 1, [0]);
							nombre_de_signe_moins = (a < 0) + (b < 0) + (c < 0) + (d < 0);
							if (Math.pow(-1, nombre_de_signe_moins) == 1) { signe = '' } else { signe = '-' }

							texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
							texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`
							aa = abs(a);
							bb = abs(b);
							cc = abs(c);
							dd = abs(d);
							p = pgcd(aa * cc, bb * dd);
							texte_corr += `$=${signe}${tex_fraction(aa, bb)}\\times${tex_fraction(cc, dd)}$`
							texte_corr += `$=${signe}${tex_fraction(aa + '\\times' + cc, bb + '\\times' + dd)}$`
							if (p == 1) {
								texte_corr += `$=${signe}${tex_fraction(aa * cc, bb * dd)}$`
							}
							else {

								texte_corr += `$=${signe}${tex_fraction(aa * cc, bb * dd)}$`
								if (aa * cc != bb * dd) {
									texte_corr += `$=${signe}${tex_fraction(aa * cc / p + '\\times\\cancel{' + p + '}', bb * dd / p + '\\times\\cancel{' + p + '}')}$`
									texte_corr += `$=${signe}${tex_fraction(aa * cc / p, bb * dd / p)}$`
								}
								else {
									texte_corr += `$=${signe}1$`
								}
							}
							break
					}
				}
				else { //méthode 2 : décomposition
					if (a==c) {a++}
					aa=obtenir_liste_nombres_premiers()[randint(1,5)];
					bb=obtenir_liste_nombres_premiers()[randint(1,5,[aa])];
					a=a*aa;
					d=d*aa;
					b=b*bb;
					c=c*bb;
					
					var listea=obtenir_liste_facteurs_premiers(a);
					var listeb=obtenir_liste_facteurs_premiers(b);
					var listec=obtenir_liste_facteurs_premiers(c);
					var listed=obtenir_liste_facteurs_premiers(d);
					var listeavf,listebvf;

					switch (type_de_questions) {
						case 1: // entier * fraction (tout positif)

							texte = `$${a}\\times${tex_fraction(c, d)}=$`;
							texte_corr = `$${a}\\times${tex_fraction(c, d)}$`;
							texte_corr+= `$=${tex_fraction(a+'\\times'+c,d)}$`;
							texte_corr += `$=${tex_fraction(decomposition_facteurs_premiers(a)+'\\times'+decomposition_facteurs_premiers(c), decomposition_facteurs_premiers(d))}$`;
							// texte_corr += `$=${tex_fraction(decomposition_facteurs_premiers(a * c), decomposition_facteurs_premiers(d))}$`
							for (let k in listec) {listea.push(listec[k])}
							listeb = listed;
							listeavf=[];
							listebvf=[];
							
							listea.forEach (function a_ajouter_dans_listeavf(element) {
								listeavf.push([element,true]);
							});
							listeb.forEach (function a_ajouter_dans_listebvf(element) {
								listebvf.push([element,true]);
							});
							
							for (index=0; index<listeb.length;) {
								for (let j = 0; j <= listea.length;) {
									if (listeb[index] == listea[j]) {
										listebvf[index]=[listeb[index],false];
										listeavf[j]=[listea[j],false];
										listea[j]=1;
										listeb[index]=1;
										break
									}
									j++;
								}
								index++;
							}
						
							a=1;b=1;
							for (let k in listea) {a=a*listea[k]};
							for (let k in listeb) {b=b*listeb[k]};
							
							numerateur ='';
							denominateur ='';
					
							for (let j in listeavf) {
								if (listeavf[j][1]==true) {
									numerateur+=listeavf[j][0] + '\\times';
								}
								else {
									numerateur+='\\cancel{'+listeavf[j][0]+'}\\times';
								}
							}
							numerateur=numerateur.substr(0,numerateur.length-6);

							for (let j in listebvf) {
								if (listebvf[j][1]==true) {
									denominateur+=listebvf[j][0] + '\\times';
								}
								else {
									denominateur+='\\cancel{'+listebvf[j][0]+'}\\times';
								}
							}
							denominateur=denominateur.substr(0,denominateur.length-6);
							
							texte_corr += `$=\\dfrac{${numerateur}}{${denominateur}}$`
							texte_corr += `$=${tex_fraction(a,b)}$`
							break

						case 2: // fraction * fraction tout positif
							
							texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}=$`;
							texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`
							texte_corr += `$=${tex_fraction(a + '\\times' + c, b + '\\times' + d)}$`

							for (let k in listec) {listea.push(listec[k])}
							for (let k in listed) {listeb.push(listed[k])}

							listeavf=[];
							listebvf=[];

							listea.forEach (function a_ajouter_dans_listeavf(element) {
								listeavf.push([element,true]);
							});
							listeb.forEach (function a_ajouter_dans_listebvf(element) {
								listebvf.push([element,true]);
							});
							
							for (index=0; index<listeb.length;) {
								for (let j = 0; j <= listea.length;) {
									if (listeb[index] == listea[j]) {
										listebvf[index]=[listeb[index],false];
										listeavf[j]=[listea[j],false];
										listea[j]=1;
										listeb[index]=1;
										break
									}
									j++;
								}
								index++;
							}
						
							a=1;b=1;
							for (let k in listea) {a=a*listea[k]};
							for (let k in listeb) {b=b*listeb[k]};
							
							numerateur ='';
							denominateur ='';
							
							for (let j in listeavf) {
								if (listeavf[j][1]==true) {
									numerateur+=listeavf[j][0] + '\\times';
								}
								else {
									numerateur+='\\cancel{'+listeavf[j][0]+'}\\times';
								}
							}
							numerateur=numerateur.substr(0,numerateur.length-6);

							for (let j in listebvf) {
								if (listebvf[j][1]==true) {
									denominateur+=listebvf[j][0] + '\\times';
								}
								else {
									denominateur+='\\cancel{'+listebvf[j][0]+'}\\times';
								}
							}
							denominateur=denominateur.substr(0,denominateur.length-6);
							
							texte_corr += `$=\\dfrac{${numerateur}}{${denominateur}}$`
							texte_corr += `$=${tex_fraction(a,b)}$`
							break

						case 3:
							a = a * randint(-1, 1, [0]);
							b = b * randint(-1, 1, [0]);
							c = c * randint(-1, 1, [0]);
							d = d * randint(-1, 1, [0]);
							nombre_de_signe_moins = (a < 0) + (b < 0) + (c < 0) + (d < 0);
							if (Math.pow(-1, nombre_de_signe_moins) == 1) { signe = '' } else { signe = '-' }

							texte = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`;
							texte_corr = `$${tex_fraction(a, b)}\\times${tex_fraction(c, d)}$`
							aa = abs(a);
							bb = abs(b);
							cc = abs(c);
							dd = abs(d);
						
							texte_corr += `$=${signe}${tex_fraction(aa, bb)}\\times${tex_fraction(cc, dd)}$`
							texte_corr += `$=${signe}${tex_fraction(aa + '\\times' + cc, bb + '\\times' + dd)}$`

							for (let k in listec) {listea.push(listec[k])}
							for (let k in listed) {listeb.push(listed[k])}

							listeavf=[];
							listebvf=[];

							listea.forEach (function a_ajouter_dans_listeavf(element) {
								listeavf.push([element,true]);
							});
							listeb.forEach (function a_ajouter_dans_listebvf(element) {
								listebvf.push([element,true]);
							});
							
							for (index=0; index<listeb.length;) {
								for (let j = 0; j <= listea.length;) {
									if (listeb[index] == listea[j]) {
										listebvf[index]=[listeb[index],false];
										listeavf[j]=[listea[j],false];
										listea[j]=1;
										listeb[index]=1;
										break
									}
									j++;
								}
								index++;
							}
						
							a=1;b=1;
							for (let k in listea) {a=a*listea[k]};
							for (let k in listeb) {b=b*listeb[k]};
							
							numerateur ='';
							denominateur ='';
						
							for (let j in listeavf) {
								if (listeavf[j][1]==true) {
									numerateur+=listeavf[j][0] + '\\times';
								}
								else {
									numerateur+='\\cancel{'+listeavf[j][0]+'}\\times';
								}
							}
							numerateur=numerateur.substr(0,numerateur.length-6);

							for (let j in listebvf) {
								if (listebvf[j][1]==true) {
									denominateur+=listebvf[j][0] + '\\times';
								}
								else {
									denominateur+='\\cancel{'+listebvf[j][0]+'}\\times';
								}
							}
							denominateur=denominateur.substr(0,denominateur.length-6);
							
							texte_corr += `$=${signe}\\dfrac{${numerateur}}{${denominateur}}$`
							texte_corr += `$=${signe}${tex_fraction(a,b)}$`
							break
					}
				}
				if (this.liste_questions.indexOf(texte) == -1) { // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
		}
		
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Fractions à numérateurs et dénominateurs positifs \n 2 : Type 1 et type 3 pour 50%/50%\n 3 : Ecritures fractionnaires à numérateur et dénominateur entiers relatifs"]
	this.besoin_formulaire2_case_a_cocher = ['Avec décomposition']
}

/**
* Calcul du quotient de deux fractions. Paramétrages possibles :
* * 1 : Nombres positifs exclusivement
* * 2 : nombres relatifs
* @auteur Jean-Claude Lhote
*/
function Exercice_diviser_fractions(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; // Avec ou sans relatifs
	this.titre = "Diviser des fractions"
	this.consigne = "Calculer et donner le résultat sous forme irréductible"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = obtenir_liste_fractions_irreductibles();

		let type_de_questions_disponibles
		type_de_questions_disponibles = [parseInt(this.sup)];
		let nombre_de_signe_moins				
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, ab,cd,a, b, c, d, p,signe, texte, texte_corr, type_de_questions, cpt=0; i < this.nb_questions&&cpt<50;) {
			type_de_questions = liste_type_de_questions[i];
			ab=choice(liste_fractions);
			cd=choice(liste_fractions);
			a=ab[0];
			b=ab[1]
			c=cd[0];
			d=cd[1];
			
			p=pgcd(a*d,b*c);
			
			switch (type_de_questions){
			//	case 0 : // entier * fraction (tout positif)
			//		texte=`$${tex_fraction(a,1)}\\div${tex_fraction(c,d)}=$`;
			//		if (pgcd(a*d,c)==1) {
			//			texte_corr= `$${tex_fraction(a,1)}\\div${tex_fraction(c,d)}=${tex_fraction(a,1)}\\times${tex_fraction(d,c)}=\\dfrac{${a}}{1}\\times${tex_fraction(d,c)}=${tex_fraction(a +'\\times'+d,'1\\times'+c)}=${tex_fraction(a*d,c)}$`
			//		}
			//		else {
			//			texte_corr= `$${tex_fraction(a,1)}\\div${tex_fraction(c,d)}=${tex_fraction(a,1)}\\times${tex_fraction(d,c)}=${tex_fraction(a*d,c)}=${tex_fraction_reduite(a*d,c)}$`
			//		}
			//		break
			//	
				case 1 : // fraction * fraction tout positif
				texte=`$${tex_fraction(a,b)}\\div${tex_fraction(c,d)}=$`;
				if (p==1) {
					texte_corr= `$${tex_fraction(a,b)}\\div${tex_fraction(c,d)}=${tex_fraction(a,b)}\\times${tex_fraction(d,c)}=${tex_fraction(a +'\\times'+d,b+'\\times'+c)}=${tex_fraction(a*d,b*c)}$`
				}
				else {
					texte_corr= `$${tex_fraction(a,b)}\\div${tex_fraction(c,d)}=${tex_fraction(a,b)}\\times${tex_fraction(d,c)}=${tex_fraction(a +'\\times'+d,b+'\\times'+c)}=${tex_fraction(a*d,b*c)}=${tex_fraction(a*d/p +'\\times\\cancel{'+p+'}',b*c/p+'\\times\\cancel{'+p+'}')}=${tex_fraction(a*d/p,b*c/p)}$`

				}
				break
			
				case 2 :
					a=a*randint(-1,1,[0]);
					b=b*randint(-1,1,[0]);
					c=c*randint(-1,1,[0]);
					d=d*randint(-1,1,[0]);
					nombre_de_signe_moins=(a<0)+(b<0)+(c<0)+(d<0);
					if (Math.pow(-1,nombre_de_signe_moins)==1) {signe=''} else {signe='-'}
					texte=`$${tex_fraction(a,b)}\\div${tex_fraction(c,d)}=$`;
					texte_corr= `$${tex_fraction(a,b)}\\div${tex_fraction(c,d)}$`
					a=abs(a);
					b=abs(b);
					c=abs(c);
					d=abs(d);
					p=pgcd(a*d,b*c);
					texte_corr+=`$=${signe}${tex_fraction(a,b)}\\times${tex_fraction(d,c)}$`
					texte_corr+=`$=${signe}${tex_fraction(a +'\\times'+ecriture_parenthese_si_negatif(d),b+'\\times'+ecriture_parenthese_si_negatif(c))}$`
					if (p==1) {
						texte_corr+=`$=${signe}${tex_fraction_signe(a*d,b*c)}$`
					}
					else {
	
						texte_corr+=`$=${signe}${tex_fraction(a*d,b*c)}$`
						if (a*d!=b*c){
							texte_corr+=`$=${signe}${tex_fraction(a*d/p +'\\times\\cancel{'+p+'}',b*c/p+'\\times\\cancel{'+p+'}')}$`
							texte_corr+=`$=${signe}${tex_fraction(a*d/p,b*c/p)}$`
						}
						else {
							texte_corr+=`$=${signe}1$`							
						}
					}	
				break	
			}
		
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			
			cpt++
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,"1 : Fractions à numérateur et dénominateur positifs \n 2 : Fractions à numérateur et dénominateur relatifs"]
}

/**
* * Calcul fractionnaire : somme d'une fraction et du produit de deux autres fractions. Paramétrages possibles :
* 1 : Calcul avec nombres positifs sans piège de priorité
* * 2 : Calcul avec nombres positifs avec piège
* * 3 : Calcul avec nombres relatifs
* @auteur Jean-Claude Lhote
*/
function Exercice_additionner_fraction_produit(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; // Avec ou sans relatifs
	this.titre = "Fractions et priorités opératoires"
	this.consigne = "Calculer et donner le résultat sous forme irréductible"
	this.spacing = 2;
	this.spacing_corr = 2;
	this.nb_questions = 5;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles
		liste_fractions = obtenir_liste_fractions_irreductibles();
		let nombre_de_signe_moins;
		if (this.sup==1) {type_de_questions_disponibles = [1,1,2,2]} // 1*nombre entier,3*fraction (pas de négatifs)
		else if (this.sup==2) {type_de_questions_disponibles = [2,2,3,3]} // fractions, 2*positifs, 2*relatifs
		else {type_de_questions_disponibles = [3]}
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0,ab,cd,ef, a, b, c, d, e, f, p, k1, k2, signe1,signe2, texte, texte_corr, type_de_questions, cpt=0; i < this.nb_questions&&cpt<50;) {
			type_de_questions = liste_type_de_questions[i];
			ab=choice(liste_fractions);
			cd=choice(liste_fractions);
			ef=choice(liste_fractions)
			a=ab[0];
			b=ab[1];
			c=cd[0];
			d=cd[1];
			e=ef[0];
			f=ef[1];
	
			switch (type_de_questions){
				case 1 : // sans piège fraction1 + fraction2 x fraction3 (tout positif)
					texte=`$${tex_fraction(a,b)}+${tex_fraction(c,d)}\\times${tex_fraction(e,f)}$`;
					
					p=pgcd(c*e,d*f);
					texte_corr= `$${tex_fraction(a,b)}+${tex_fraction(c,d)}\\times${tex_fraction(e,f)}$`;
					texte_corr+=`$=${tex_fraction(a,b)}+${tex_fraction(c +'\\times'+e,d+'\\times'+f)}$`;
					texte_corr+=`$=${tex_fraction(a,b)}+${tex_fraction(c*e,d*f)}$`;
					// faut-il simplifier c*e/d*f
					if ((p!=1)&&(ppcm(b,d*f)>ppcm(b,d*f/p))) {
						texte_corr+=`$=${tex_fraction(a,b)}+${tex_fraction(e*c/p +'\\times\\cancel{'+p+'}',f*d/p+'\\times\\cancel{'+p+'}')}$`
						c=e*c/p;
						d=f*d/p;
					}
					else {
						c=e*c;
						d=f*d;
					}
					p=ppcm(b,d); // p = dénominateur commun
					k1=p/b;
					k2=p/d;
					if (k1!=1) {
						texte_corr+=`$=${tex_fraction(a+mise_en_evidence('\\times'+k1),b+mise_en_evidence('\\times'+k1))}$`;
					} 
					else {
						texte_corr+=`$=${tex_fraction(a,b)}$`	
					}
					if (k2!=1) {
						texte_corr+=`$+${tex_fraction(c+mise_en_evidence('\\times'+k2),d+mise_en_evidence('\\times'+k2))}$`;
					} 
					else {
						texte_corr+=`$+${tex_fraction(c,d)}$`	
					}
								
					texte_corr+=`$=${tex_fraction(a*k1,p)}+${tex_fraction(c*k2,p)}$`;
					e=a*k1+c*k2;
					f=p;
					texte_corr+=`$=${tex_fraction(e,f)}$`;
					p=pgcd(e,f);
					// faut-il simplifier e/f
					if (p!=1) {
						texte_corr+=`$=${tex_fraction(e/p +'\\times\\cancel{'+p+'}',f/p+'\\times\\cancel{'+p+'}')}$`
						texte_corr+=`$=${tex_fraction_reduite(e/p,f/p)}$`;
					}
				
					break
				
				case 2 : // avec piege addition non prioritaire fraction1 + fraction2 * fraction3 tout positif
					d = b;
					
					texte = `$${tex_fraction(a, b)}+${tex_fraction(c, d)}\\times${tex_fraction(e, f)}$`;
				
					p = pgcd(c * e, d * f);
					texte_corr = `$${tex_fraction(a, b)}+${tex_fraction(c, d)}\\times${tex_fraction(e, f)}$`;
					texte_corr += `$=${tex_fraction(a, b)}+${tex_fraction(c + '\\times' + e, d + '\\times' + f)}$`;
					texte_corr += `$=${tex_fraction(a, b)}+${tex_fraction(c * e, d * f)}$`
					
					// faut-il simplifier c*e/d*f
					if ((p!=1)&&(ppcm(b,d*f)>ppcm(b,d*f/p))) {
						texte_corr+=`$=${tex_fraction(a,b)}+${tex_fraction(e*c/p +'\\times\\cancel{'+p+'}',f*d/p+'\\times\\cancel{'+p+'}')}$`
						c=e*c/p;
						d=f*d/p;
					}
					else {
						c=e*c;
						d=f*d;
					}
					p = ppcm(b, d); //denominateur commun = p
					k1 = p / b;
					k2 = p / d;
					if (k1 != 1) {
						texte_corr += `$=${tex_fraction(a + mise_en_evidence('\\times' + k1), b + mise_en_evidence('\\times' + k1))}$`
					}
					else {
						texte_corr += `$=${tex_fraction(a, b)}$`
					}
					if (k2 != 1) {
						texte_corr += `$+${tex_fraction(c + '\\times' + k2, d + '\\times' + k2)}$`
					}
					else {
						texte_corr += `$+${tex_fraction(c, d)}$`
					}
					texte_corr += `$=${tex_fraction(a * k1, b * k1)}+${tex_fraction(c * k2, d * k2)}=${tex_fraction(a * k1 + c * k2, p)}$`
					e=a * k1 + c * k2;
					f=p;
					texte_corr+=`$=${tex_fraction(e,f)}$`;
					p=pgcd(e,f);
					// faut-il simplifier e/f
					if (p!=1) {
						texte_corr+=`$=${tex_fraction(e/p +'\\times\\cancel{'+p+'}',f/p+'\\times\\cancel{'+p+'}')}$`
						texte_corr+=`$=${tex_fraction_reduite(e/p,f/p)}$`;
					}
			
				break

				case 3 :
					a=a*randint(-1,1,[0]);
					b=b*randint(-1,1,[0]);
					c=c*randint(-1,1,[0]);
					d=d*randint(-1,1,[0]);
					e=e*randint(-1,1,[0]);
					f=f*randint(-1,1,[0]);

					nombre_de_signe_moins=(c<0)+(d<0)+(e<0)+(f<0);
					if (Math.pow(-1,nombre_de_signe_moins)==1) {signe2='+'} else {signe2='-'}
					texte=`$${tex_fraction(a,b)}+${tex_fraction(c,d)}\\times${tex_fraction(e,f)}=$`;
					texte_corr=`$${tex_fraction(a,b)}+${tex_fraction(c,d)}\\times${tex_fraction(e,f)}$`
					
					c=abs(c); // gestion du signe du produit avec {signe}
					d=abs(d);
					e=abs(e);
					f=abs(f);
					
					
					if (a*b>0) {  //suppression des signes - superflus de la première fraction
					
						signe1=''
					} else {signe1='-'}

					a=abs(a);
					b=abs(b);

					texte_corr+=`$=${signe1}${tex_fraction(a,b)}${signe2}${tex_fraction(c +'\\times'+e,d+'\\times'+f)}$`
					texte_corr+=`$=${signe1}${tex_fraction(a,b)}${signe2}${tex_fraction(c*e,d*f)}$`
					
					p=pgcd(c*e,d*f);
					// faut-il simplifier c*e/d*f
					if ((p!=1)&&(ppcm(b,d*f)>ppcm(b,d*f/p))) {
						texte_corr+=`$=${signe1}${tex_fraction(a,b)}${signe2}${tex_fraction(e*c/p +'\\times\\cancel{'+p+'}',f*d/p+'\\times\\cancel{'+p+'}')}$`
						c=e*c/p;
						d=f*d/p;
					}
					else {
						c=e*c;
						d=f*d;
					}
					p=ppcm(d,b);  // mise au même dénominateur
					if (((d)%b!=0)&&(b%(d)!=0)) {
						// dénominateur commun = p
						k1=p/b;
						k2=p/d;
						texte_corr+=`$=${signe1}${tex_fraction(a+mise_en_evidence('\\times'+k1),b+mise_en_evidence('\\times'+k1))}${signe2}${tex_fraction(c+mise_en_evidence('\\times'+k2),d+mise_en_evidence('\\times'+k2))}$`
						texte_corr+=`$=${signe1}${tex_fraction(a*k1,b*k1)}${signe2}${tex_fraction(c*k2,d*k2)}$`
						texte_corr+=`$=${tex_fraction(signe1+a*k1+signe2+c*k2,b*k1)}$`
						a=a*k1;
						c=c*k2;
						d=p;
					}
					else {
						if (p==d) {
							k1=d/b;  // d = dénominateur commun
							texte_corr+=`$=${signe1}${tex_fraction(a+mise_en_evidence('\\times'+k1),b+mise_en_evidence('\\times'+k1))}${signe2}${tex_fraction(c,d)}$`
						texte_corr+=`$=${signe1}${tex_fraction(a*k1,d)}${signe2}${tex_fraction(c,d)}$`
						texte_corr+=`$=${tex_fraction(signe1+a*k1+signe2+c,d)}$`	
						a=a*k1;
						} 
						else{  // b=k2*d
							k2=b/d;  // b= dénominateur commun
							texte_corr+=`$=${signe1}${tex_fraction(a,b)}${signe2}${tex_fraction(c+mise_en_evidence('\\times'+k2),d+mise_en_evidence('\\times'+k2))}$`
						texte_corr+=`$=${signe1}${tex_fraction(a,b)}${signe2}${tex_fraction(c*k2,b)}$`
						texte_corr+=`$=${tex_fraction(signe1+a+signe2+c*k2,b)}$`
						c=c*k2;
						d=d*k2;
						}
					}
					
					if (a!=c) {
						e=0;
						if (signe1=='') {
							e=a;
						}
						else {
							e=-a
						}
						if (signe2=='+') {e+=c} else {e=e-c}

					}
					else {
						if (((signe1=='-')&&(signe2=='+'))||((signe1=='')&&(signe2=='-'))) {
							e=0;	
						}
						else {
							e=0;
							if (signe1=='') {e=a+c} else {e=-a-c}
						}
					}
					
					texte_corr+=`$=${tex_fraction_signe(e,d)}$`
					p=pgcd(abs(e),d);
					if (p!=1) {
						f=d/p;
						e=e/p;
						if (e>0) { // fraction positive => pas de signe
						texte_corr+=`$=${tex_fraction(e+'\\times\\cancel{'+p+'}',f+'\\times\\cancel{'+p+'}')}$`
						texte_corr+=`$=${tex_fraction(e,f)}$`
						}
						else {  // numérateur négatif => signe - devant les fractions suivantes.
							texte_corr+=`$=-${tex_fraction(-e+'\\times\\cancel{'+p+'}',f+'\\times\\cancel{'+p+'}')}$`
							texte_corr+=`$=-${tex_fraction(-e,f)}$`	
						}
					}

				break	
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : nombres positifs sans piège de priorité\n 2 : 2 calculs avec positifs et piège de priorité et 2 calculs avec relatifs\n 3 : calculs avec relatifs"]
}

/**
* Développer en utilisant la distributivité simple
*
* * La lettre peut être x, y, z, t, a, b ou c
* * 3 fois sur 6 c'est une distributivité simple :  k(ax+b)
* * 1 fois sur 6 c'est une distributivité simple : (ax+b)×k
* * 1 fois sur 6, la variable est en facteur : kx(ax+b)
* * 1 fois sur 6 il faut ensuite réduire : k(ax+b)+c
* 
* Niveau de difficulté : 
* * 1 : Multiplication par un facteur positif
* * 2: Multiplication par un facteur relatif
* @Auteur Rémi Angot
*/
function Exercice_developper(difficulte=1){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = difficulte ;
	this.titre = "Utiliser la simple distributivité";
	this.consigne = 'Développer.';
	this.spacing = 1;
	this.nb_questions = 5 ;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		
		let lettre = ['x','y','z','t','a','b','c'];
		let type_de_questions_disponibles = ['simple','simple','simple','simple2','x_en_facteur','developper_et_reduire']
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions) // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			type_de_questions = liste_type_de_questions[i];
			let k = randint(2,11);
			if (this.sup>1){ // si difficulté 2, k peut être négatif
				k = k*choice([-1,1])
			}
			let a = randint(1,9);
			let b = randint(1,9)*choice([-1,1]);
			let inconnue = choice(lettre);
			switch (type_de_questions){
				case 'simple' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${inconnue}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})=${k}
						\\times ${a}${inconnue}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;
					}
					break ;
				case 'simple2' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=(${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=(${a}${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=(${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}=${k}
						\\times ${inconnue}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=(${a}${inconnue}${ecriture_algebrique(b)})\\times${ecriture_parenthese_si_negatif(k)}=${k}
						\\times ${a}${inconnue}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}${ecriture_algebrique(k*b)}$`;

					}
					break ;
				case 'x_en_facteur' :
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${inconnue}${ecriture_algebrique(b)})$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${inconnue}${ecriture_algebrique(b)})=${k}${inconnue}\\times ${inconnue} ${signe(k*b)}${k}${inconnue}\\times ${abs(b)}=${k*a}${inconnue}^2${ecriture_algebrique(k*b)}${inconnue}$`;
					} else {
						if (k>0) {
							texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})=${k}${inconnue}\\times ${a}${inconnue} + ${k}${inconnue}\\times ${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}^2${ecriture_algebrique(k*b)}${inconnue}$`;
						} else {
							texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}${inconnue}(${a}${inconnue}${ecriture_algebrique(b)})=${k}${inconnue}\\times ${a}${inconnue} + (${k}${inconnue})\\times ${ecriture_parenthese_si_negatif(b)}=${k*a}${inconnue}^2${ecriture_algebrique(k*b)}${inconnue}$`;
						}

					}
					break ;
				case 'developper_et_reduire' :
					let c = randint(2,9);
					if (a==1){ // ne pas écrire 1x
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})+${c}$`;
					} else {
						texte = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})+${c}$`;
					}
					
					if (a==1){ // ne pas écrire 1x
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${inconnue}${ecriture_algebrique(b)})+${c}=${k}\\times ${inconnue}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}+${c}
						=${k*a}${inconnue}${ecriture_algebrique(k*b)}+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b+c)}$`;
					} else {
						texte_corr = `$${lettre_depuis_chiffre(i+1)}=${k}(${a}${inconnue}${ecriture_algebrique(b)})+${c}=${k}\\times${ecriture_parenthese_si_moins(a+inconnue)}+${ecriture_parenthese_si_negatif(k)}\\times${ecriture_parenthese_si_negatif(b)}+${c}
						=${k*a}${inconnue}${ecriture_algebrique(k*b)}+${c}=${k*a}${inconnue}${ecriture_algebrique(k*b+c)}$`;
					}
					break ;
			}
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',2,'1 : Multiplication par un facteur positif\n2: Multiplication par un facteur relatif'] 
}

/**
* Équation du premier degré
* * Type 1 : x+a=b ou ax=b
* * Type 2 : ax+b=c
* * Type 3 : ax+b=cx+d
* * Tous les types
* @Auteur Rémi Angot
*/
function Exercice_equation1(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Équation du premier degré"
	this.consigne = 'Résoudre les équations suivantes'
	this.spacing = 2;
	sortie_html ? this.spacing_corr = 3 : this.spacing_corr = 2;
	this.correction_detaillee_disponible = true;
	this.sup = true; // Avec des nombres relatifs
	this.sup2 = 4; // Choix du type d'équation 

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		switch (this.sup2.toString()){
			case '1':
			liste_type_de_questions = ['ax=b','x+b=c'];
			break
			case '2':
			liste_type_de_questions = ['ax+b=c'];
			break
			case '3':
			liste_type_de_questions = ['ax+b=cx+d'];
			break
			default:
			liste_type_de_questions = ['ax+b=0','ax+b=c','ax=b','x+b=c','ax+b=cx+d'];
			break

		}
		liste_type_de_questions = combinaison_listes(liste_type_de_questions,this.nb_questions)
		for (let i = 0, a, b, c, d, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) { // On limite le nombre d'essais pour chercher des valeurs nouvelles
			a = randint(2,13);
			b = randint(1,13);
			c = randint(1,13);
			d = randint(1,13);
			if (this.sup) {
				a *= choice([-1,1]);
				b *= choice([-1,1]);
				c *= choice([-1,1]);
				d *= choice([-1,1]);

			}
			if (liste_type_de_questions[i]=='ax+b=0' || liste_type_de_questions[i]=='ax+b=c') {
				if (liste_type_de_questions[i]=='ax+b=0') {c = 0}
				if (!this.sup && c<b) {
					b = randint(1,9)
					c = randint(b,15) // c sera plus grand que b pour que c-b>0
				}
				texte = `$${a}x${ecriture_algebrique(b)}=${c}$`;
				texte_corr = texte+'<br>';
				if (this.correction_detaillee) {
					if (b>0) {
						texte_corr += `On soustrait $${b}$ aux deux membres.<br>`	
					} else {
						texte_corr += `On ajoute $${-1*b}$ aux deux membres.<br>`
					}
				}
				texte_corr += `$${a}x${ecriture_algebrique(b)}${mise_en_evidence(ecriture_algebrique(-1*b))}=${c}${mise_en_evidence(ecriture_algebrique(-1*b))}$<br>`;
				texte_corr += `$${a}x=${c-b}$<br>`
				if (this.correction_detaillee) {texte_corr += `On divise les deux membres par $${a}$.<br>`}
				texte_corr += `$${a}x${mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a))}=${c-b+mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a))}$<br>`
				texte_corr += `$x=${tex_fraction(c-b,a)}$`
				if (pgcd(abs(a),abs(c-b))>1 || a<0){
					texte_corr += `<br>$x=${tex_fraction_reduite(c-b,a)}$`
				}
				texte_corr += `<br> La solution est $${tex_fraction_reduite(c-b,a)}$.`
			}
			if (liste_type_de_questions[i]=='x+b=c') {
				if (!this.sup && c<b) {
					b = randint(-9,9,[0]) // b peut être négatif, ça sera une équation du type x-b=c
					c = abs(randint(b,15)) // c sera plus grand que b pour que c-b>0
				}
				texte = `$x${ecriture_algebrique(b)}=${c}$`;
				texte_corr = texte+'<br>';
				if (this.correction_detaillee) {
					if (b>0) {
						texte_corr += `On soustrait $${b}$ aux deux membres.<br>`	
					} else {
						texte_corr += `On ajoute $${-1*b}$ aux deux membres.<br>`
					}
				}
				texte_corr += `$x${ecriture_algebrique(b)}${mise_en_evidence(ecriture_algebrique(-1*b))}=${c}${mise_en_evidence(ecriture_algebrique(-1*b))}$<br>`;
				texte_corr += `$x=${c-b}$`
				texte_corr += `<br> La solution est $${c-b}$.`
			}
			if (liste_type_de_questions[i]=='ax=b') {
				texte = `$${a}x=${b}$`;
				texte_corr = texte+'<br>';
				if (this.correction_detaillee) {texte_corr += `On divise les deux membres par $${a}$.<br>`}
				texte_corr += `$${a}x${mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a))}=${b+mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a))}$<br>`
				texte_corr += `$x=${tex_fraction(b,a)}$`
				if (pgcd(abs(a),abs(b))>1 || a<0){
					texte_corr += `<br>$x=${tex_fraction_reduite(b,a)}$`
				}
				texte_corr += `<br> La solution est $${tex_fraction_reduite(b,a)}$.`
			}
			if (liste_type_de_questions[i]=='ax+b=cx+d') {
				if (c==a) {c = randint(1,13,[a])} // sinon on arrive à une division par 0
				if (!this.sup && a<c) {
					c = randint(1,9)
					a = randint(c+1,15) // a sera plus grand que c pour que a-c>0
				}
				if (!this.sup && d<b) {
					b = randint(1,9)
					d = randint(b+1,15) // d sera plus grand que b pour que d-b>0
				}
				texte = `$${rien_si_1(a)}x${ecriture_algebrique(b)}=${rien_si_1(c)}x${ecriture_algebrique(d)}$`;
				texte_corr = texte+'<br>';
				if (this.correction_detaillee) {
					if (c>0) {
						texte_corr += `On soustrait $${rien_si_1(c)}x$ aux deux membres.<br>`	
					} else {
						texte_corr += `On ajoute $${rien_si_1(-1*c)}x$ aux deux membres.<br>`
					}
				}
				texte_corr += `$${rien_si_1(a)}x${ecriture_algebrique(b)}${mise_en_evidence(signe(-1*c)+rien_si_1(abs(c))+'x')}=${c}x+${d}${mise_en_evidence(signe(-1*c)+rien_si_1(abs(c))+'x')}$<br>`;
				texte_corr += `$${rien_si_1(a-c)}x${ecriture_algebrique(b)}=${d}$<br>`
				if (this.correction_detaillee) {
					if (b>0) {
						texte_corr += `On soustrait $${b}$ aux deux membres.<br>`	
					} else {
						texte_corr += `On ajoute $${-1*b}$ aux deux membres.<br>`
					}
				}
				texte_corr += `$${rien_si_1(a-c)}x${mise_en_evidence(ecriture_algebrique(-1*b))}=${d}${mise_en_evidence(ecriture_algebrique(-1*b))}$<br>`
				texte_corr += `$${rien_si_1(a-c)}x=${d-b}$<br>`

				if (this.correction_detaillee) {texte_corr += `On divise les deux membres par $${a-c}$.<br>`}
				texte_corr += `$${rien_si_1(a-c)}x${mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a-c))}=${d-b+mise_en_evidence('\\div'+ecriture_parenthese_si_negatif(a-c))}$<br>`
				texte_corr += `$x=${tex_fraction(d-b,a-c)}$`
				if (pgcd(abs(d-b),abs(a-c))>1 || (a-c)<0){
					texte_corr += `<br>$x=${tex_fraction_reduite(d-b,a-c)}$`
				}
				texte_corr += `<br> La solution est $${tex_fraction_reduite(d-b,a-c)}$.`
			}
				
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte)//replace(/1x/g,'x')); //remplace 1x par x
				this.liste_corrections.push(texte_corr) //.replace(/1x/g,'x')); //remplace 1x par x
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	 this.besoin_formulaire_case_a_cocher  = ['Avec des nombres relatifs'];	
	 this.besoin_formulaire2_numerique = ["Type d'équations",4,"1 : ax=b ou x+a=b ou x-a=b\n2: ax+b=c\n3: ax+b=cx+d\n4: Les 2 types précédents"] 	
}

/**
* @auteur Jean-Claude Lhote
*/
function Exercice_Thales(){
'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer une longueur avec la propriété de Thales";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	sortie_html ? this.spacing_corr = 3.5 : this.spacing_corr = 2.5
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.quatrieme=false;
	this.sup = 1; // 1 calcul direct | 2 calcul en deux étapes | 3 version 1&2 sans figure
	// paramètres communs Html ou Latex
	

	// let s1='A',s2='B',s3='C',s4='M',s5='N'
		// coefficient de l'homothétie compris entre -0,8 et -0,2 ou entre 0,2 et 0,8 pour éviter les constructions trop serrées
		this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = [];
		this.liste_corrections = [];
		let lettre1 = randint(1,26)	// aleatoirisation du nom des points
		let s1 = lettre_depuis_chiffre(lettre1)
		let lettre2 = randint(1, 26, [lettre1])
		let s2 = lettre_depuis_chiffre(lettre2)
		let lettre3 = randint(1, 26, [lettre1, lettre2])
		let s3 = lettre_depuis_chiffre(lettre3)
		let lettre4 = randint(1, 26, [lettre1, lettre2, lettre3])
		let s4 = lettre_depuis_chiffre(lettre4)
		let lettre5 = randint(1, 26, [lettre1, lettre2, lettre3, lettre4])
		let s5 = lettre_depuis_chiffre(lettre5)
		let x2 = randint(2,4)
		let y2 = randint(3, 5)
		let x3 = randint(5, 6)
		let y3 = randint(-2, 1)
		let k = randint(2, 8) * randint(-1, 1, [0]) / 10
		if (this.quatrieme) {k=abs(k)}	
		let dist23 = arrondi(Math.sqrt((x3-x2)**2+(y3-y2)**2),1) 		//calcul des longueurs du triangle principal
		let dist12 = arrondi(Math.sqrt(x2**2 + y2**2),1)
		let dist13 = arrondi(Math.sqrt(x3**2+ y3**2),1)
		let dist15 = arrondi(dist13 * abs(k),2)  
		let dist45 = arrondi(dist23 * abs(k),2)		
		let dist35,texte,texte_corr;
		let dist14 = arrondi(dist12*abs(k),2); // calcul des longueurs demandées à partir 
		
		// On ne garde qu'une approximation au dixième pour l'exercice

		let s45 = tex_nombrec(dist45)			// mise en texte avec 1 chiffres après la virgule pour énoncé
		let s13 = tex_nombrec(dist13)
		let s12 = tex_nombrec(dist12)
		let s15 = tex_nombrec(dist15)
		let s14 = tex_nombrec(dist14)
		let s23 = tex_nombrec(dist23)
		if (k < 0) { dist35 = dist13 + dist15 } else { dist35 = dist13 - dist15 } // calcul de la longueur intermédiaire dans un cas classique ou en papillon
		let s35 = tex_nombrec(dist35)  // à priori, c'est déjà arrondi au dixième, mais je me méfie des calculs flottants en js
		let niv_diff=randint(1,2);
		if (sortie_html) {
			this.type_exercice = 'MG32';
			this.taille_div_MG32 = [700,500];
			let codeBase64

			if (k<0) {codeBase64 ="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAJBJwBANgAAAAAAAEAzAAAAAAAABwABQHYBR64UeuFAcdwo9cKPXP####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AQAAAAAQAAABAAEAAAABAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAQAAJJJwDAGAAAAAAAAAAAAAAAAAAABQABQEerQ5WBBiUAAAAC#####wAAAAEACUNEcm9pdGVBQgD#####AQAAAAASAAABAAEAAAABAAAAA#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAEAAAAE#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAAQAAAAP#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQD#####AAAABQAAAAb#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAD#####AQAAAAAQAAABBQABAAAABwAAAAkA#####wEAAAAAEAACSicAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAASAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MgABMgAAAAFAAAAAAAAAAAAAABEA#####wACeTIAATUAAAABQBQAAAAAAAAAAAARAP####8AAngzAAE2AAAAAUAYAAAAAAAAAAAAEQD#####AAJ5MwACLTH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAT#wAAAAAAAAAAAAEQD#####AAFrAAQtMC41AAAAEgAAAAE#4AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABgAAlonAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAATAP####8AAAAAABgAAkInAMAwAAAAAAAAwEOAAAAAAAAHAAAAAAoAAAAOAAAADwAAAA4AAAAQAAAAEwD#####AAAAAAAYAAJDJwAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAABEAAAAOAAAAEgAAAAwA#####wAAABQAAAAOAAAAEwAAAA8A#####wAAAAAAGAACTScAwCQAAAAAAADAAAAAAAAAAAcAAAAAFQAAABcAAAAPAP####8AAAAAABgAAk4nAMAzAAAAAAAAwEMAAAAAAAAHAAAAABYAAAAX#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABYAAAAVAAAAFAAAABYAAAAUAP####8AAAAAAAIAAAAEAAAAGQAAABQAAAAYAAAAGf####8AAAABABBDU3VyZmFjZVBvbHlnb25lAP####8BAAD#AAAABQAAABsAAAAVAP####8B#wAAAAAABQAAABr#####AAAAAQAQQ01hY3JvQXBwYXJpdGlvbgD#####AP8AAAH#####EECIoKPXCj1xQELhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZBcHBBTU4AAAAAAAEAAAAcAAAAABYA#####wD#AAAB#####xBAiLCj1wo9cUBUMKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQXBwQUJDAAAAAAABAAAAHQD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wD#AAAB#####xBAi+Cj1wo9cUBE4UeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHTWFzcUFNTgAAAAAAAQAAABwAAAAXAP####8A#wAAAf####8QQIvoo9cKPXFAVPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB01hc3FBQkMAAAAAAAEAAAAd#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQIj4o9cKPXFAX3Cj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAAB#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8A#wAAAf####8QQFHFHrhR64VAePwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAClRyaWFuZ2xlIDEAAAAAAAMAAAAfAAAAIgAAACEAAAAZAP####8A#wAAAf####8QQFFFHrhR64VAe3wo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAClRyaWFuZ2xlIDIAAAAAAAMAAAAeAAAAIgAAACAAAAAO##########8="
			}
			else {codeBase64 ="TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAJBJwDAKAAAAAAAAEAiAAAAAAAABwABQHMxR64UeuFAcbwo9cKPXP####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AQAAAAAOAAABAAEAAAABAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAQAAJJJwDAGAAAAAAAAAAAAAAAAAAABQABQEerQ5WBBiUAAAAC#####wAAAAEACUNEcm9pdGVBQgD#####AQAAAAASAAABAAEAAAABAAAAA#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAAA4AAAEAAQAAAAEAAAAE#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAAQAAAAP#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQD#####AAAABQAAAAb#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAD#####AQAAAAAOAAABBQABAAAABwAAAAkA#####wEAAAAAEAACSicAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAASAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MgABMgAAAAFAAAAAAAAAAAAAABEA#####wACeTIAATUAAAABQBQAAAAAAAAAAAARAP####8AAngzAAE2AAAAAUAYAAAAAAAAAAAAEQD#####AAJ5MwACLTH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAT#wAAAAAAAAAAAAEQD#####AAFrAAMwLjUAAAABP+AAAAAAAAD#####AAAAAQAQQ1BvaW50RGFuc1JlcGVyZQD#####AQAAAAAYAAJaJwAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AAAAAAAYAAJCJwDAMAAAAAAAAMBDgAAAAAAABwAAAAAKAAAADgAAAA8AAAAOAAAAEAAAABMA#####wAAAAAAGAACQycAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAA4AAAARAAAADgAAABIAAAAMAP####8AAAAUAAAADgAAABMAAAAPAP####8AAAAAABgAAk0nAMA7AAAAAAAAwDcAAAAAAAAHAAAAABUAAAAXAAAADwD#####AAAAAAAYAAJOJwDAKAAAAAAAAEAAAAAAAAAABwAAAAAWAAAAF#####8AAAABAAlDUG9seWdvbmUA#####wAAAAAAAgAAAAQAAAAWAAAAFQAAABQAAAAWAAAAFAD#####AAAAAAACAAAABAAAABkAAAAUAAAAGAAAABn#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQAA#wAAAAUAAAAbAAAAFQD#####Af8AAAAAAAUAAAAa#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAiKCj1wo9cUBC4UeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQXBwQU1OAAAAAAABAAAAHAAAAAAWAP####8A#wAAAf####8QQIiwo9cKPXFAVDCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABkFwcEFCQwAAAAAAAQAAAB0A#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8A#wAAAf####8QQIvgo9cKPXFAROFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB01hc3FBTU4AAAAAAAEAAAAcAAAAFwD#####AP8AAAH#####EECL6KPXCj1xQFTwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAdNYXNxQUJDAAAAAAABAAAAHf####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECI+KPXCj1xQF9wo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAf####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AP8AAAH#####EEBRxR64UeuFQHj8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApUcmlhbmdsZSAxAAAAAAADAAAAHwAAACIAAAAhAAAAGQD#####AP8AAAH#####EEBRRR64UeuFQHt8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApUcmlhbmdsZSAyAAAAAAADAAAAHgAAACIAAAAgAAAADv##########"
			}
			if (this.sup==1){  // calcul direct de AM et BC : pas de calcul intermédiaire de AN
				texte = `Dans la figure ci-dessous, les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br> $${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et $${s1+s5}=${s15}$ cm.<br>`
				texte += `Calculer $${s1+s4}$ et $${s2+s3}$.`
				if (k>0) {
					texte_corr = 'Dans le triangle '+`$${s1+s2+s3}$`+', les droites '+`$(${s4+s5})$`+' et '+`$(${s2+s3})$`+' sont parallèles.<br>'+' D&rsquo;après la propriété de Thales, on a '+`$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$`+'<br>'
				}
				else {
					texte_corr = 'Les droites ' + `$(${s4+s5})$` + ' et ' + `$(${s2+s3})$` + ' sont parallèles.'
					texte_corr += `<br>Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre.`
					texte_corr +='<br>D&rsquo;après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}$` + '<br>'
				}
				}
			else if (this.sup==2)
			 {  // Calcul de AN nécessaire avant de calculer AM et BC
				texte = `Dans la figure ci-dessous, les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br> $${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et $${s5+s3}=${s35}$ cm.`
				texte += `<br>Le point $${s1}$ peut être déplacé.<br>`
				texte += `Calculer $${s1+s4}$ et $${s2+s3}$.`
				if (k>0) {
					texte_corr = 'Dans le triangle ' + `$${s1+s2+s3}$` + ', les droites ' + `$(${s4+s5})$` + ' et ' + `$(${s2+s3})$` + ' sont parallèles.<br>' + ' D&rsquo;après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>'
				} else {
					texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre et les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>` + ' D&rsquo;après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>'
				}
				if (k>0){
					texte_corr +='On sait que '+`$${s1+s5}=${s1+s3}-${s5+s3}=${s13}-${s35}=${s15}$`+' cm.<br>'
				}
				else {
					texte_corr +='On sait que '+`$${s1+s5}=${s3+s5}-${s1+s3}=${s35}-${s13}=${s15}$`+' cm.<br>'
				}
			}
			else if (randint(1,2)==1) {
				texte = `$${s1}$, $${s2}$ et $${s3}$ sont trois point distincts. $${s4} \\in [${s1+s2}]$ et $${s5} \\in [${s1+s3}]$ tel que les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br> $${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et $${s1+s5}=${s15}$ cm.`
				texte += `<br>Calculer $${s1+s4}$ et $${s2+s3}$.`
				texte_corr = 'Dans le triangle '+`$${s1+s2+s3}$`+', les droites '+`$(${s4+s5})$`+' et '+`$(${s2+s3})$`+' sont parallèles.<br>'+' D&rsquo;après la propriété de Thales, on a '+`$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$`+'<br>'
				}
			else {
				texte = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre.`
				texte += `<br>Les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br> $${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et $${s5+s3}=${s35}$ cm.`
				texte += `<br>Calculer $${s1+s4}$ et $${s2+s3}$.`
				if (k>0) {
					texte_corr = 'Dans le triangle ' + `$${s1+s2+s3}$` + ', les droites ' + `$(${s4+s5})$` + ' et ' + `$(${s2+s3})$` + ' sont parallèles.<br>' + ' D&rsquo;après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>'
				} else {
					texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés et les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>` + ' D&rsquo;après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>'
				}
				if (k>0){
					texte_corr +='On sait que '+`$${s1+s5}=${s1+s3}-${s5+s3}=${s13}-${s35}=${s15}$`+' cm.<br>'
				}
				else {
					texte_corr +='On sait que '+`$${s1+s5}=${s3+s5}-${s1+s3}=${s35}-${s13}=${s15}$`+' cm.<br>'
				}
			}
			texte_corr += 'Avec les données numériques :<br>'
			texte_corr += `$${tex_fraction(s1 + s4, s12)}=${tex_fraction(s15, s13)}=${tex_fraction(s45, s2 + s3)}$` + '<br>'
			texte_corr += `Soit $${s1+s4}=` + quatrieme_proportionnelle(dist13,dist15,dist12,1) + '$ cm'
			texte_corr += ` et $${s2+s3}=` + quatrieme_proportionnelle(dist15,dist13,dist45,1)+ '$ cm.'
		
			if (this.sup<3)	{
			this.MG32codeBase64 = codeBase64
			this.MG32code_pour_modifier_la_figure = `
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x3", "${x3}");
		        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "y2", "${y2}");
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "y3", "${y3}");
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "k", "${k}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","A'","${s1}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","B'","${s2}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","C'","${s3}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","M'","${s4}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","N'","${s5}");
				mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        	mtg32App.display("MG32svg${numero_de_l_exercice}");
				` 	
				texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s1} peut être déplacé (si la figure est tronquée).}}$<br>`;
			}
			this.liste_questions.push(texte);	
			this.liste_corrections.push(texte_corr);
			if (this.sup<3) {
				liste_de_question_to_contenu(this)
			}
			else 	{
				this.type_exercice = '';
				liste_de_question_to_contenu_sans_numero(this)
			}	
			
		
	} else {	// sortie Latex
		texte = '\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}'
		texte += `\n\t\\item Les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.`
		if (this.sup==1){ //niveau 1 : Calcul direct quatrième proportionnelle
		
			// enoncé  niveau 1
		
			texte += '\n\t\\item '+`$${s1+s2+' = '+s12+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s1+s3+' = '+s13+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s4+s5+' = '+s45+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s1+s5+' = '+s15+'~\\text{cm}.'}$`
			texte += '\\end{itemize} \\bigskip  Calculer '+`$${s1+s4}$`+' et '+`$${s2+s3}$`+' à 0,1 près. \\end{minipage}'
		} 
		else if (this.sup==2) { // niveau 2 : Calcul intermédiaire nécessaire
		
			// enoncé  niveau 2
		
			texte += '\n\t\\item '+`$${s1+s2+' = '+s12+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s1+s3+' = '+s13+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s4+s5+' = '+s45+'~\\text{cm}~;'}$`
			texte += '\n\t\\item '+`$${s3+s5+' = '+s35+'~\\text{cm}.'}$`
			texte += '\\end{itemize} \\bigskip  Calculer '+`$${s1+s4}$`+' et '+`$${s2+s3}$`+' à 0,1 près. \\end{minipage}'
		}
		else  // énoncé sans figure
			
			if (k>0) {
				texte = `$${s1}$, $${s2}$ et $${s3}$`+' sont trois point distincts.<br>\n' + `$${s4} \\in [${s1+s2}]$`+' et '+`$${s5} \\in [${s1+s3}]$`+' tel que les droites '+`$(${s4+s5})$`+' et '+`$(${s2+s3})$`+' sont parallèles.<br>\n'
				texte += `$${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et `
				if (niv_diff==1) {
					texte +=`$${s1+s5}=${s15}$ cm.`
				}
				else {
					texte +=`$${s3+s5}=${s35}$ cm.`
				}
				texte += `<br>\nCalculer $${s1+s4}$ et $${s2+s3}$.`
				texte_corr = 'Dans le triangle '+`$${s1+s2+s3}$`+', les droites '+`$(${s4+s5})$`+' et '+`$(${s2+s3})$`+' sont parallèles.<br>\n'+' D\'après la propriété de Thales, on a '+`$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$`
				if (niv_diff==2) {
					texte_corr +='On sait que '+`$${s1+s5}=${s1+s3}-${s5+s3}=${s13}-${s35}=${s15}$`+'~;cm.'
				}
			}
			else {
				texte = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre.`
				texte += `<br>\nLes droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>\n $${s1+s2}=${s12}$ cm, $${s1+s3}=${s13}$ cm, $${s4+s5}=${s45}$ cm et `
				if (niv_diff==1) {
					texte +=`$${s1+s5}=${s15}$ cm.`
				}
				else {
					texte +=`$${s3+s5}=${s35}$ cm.`
				}
				texte += `<br>\nCalculer $${s1+s4}$ et $${s2+s3}$.`
				texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre et les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>\n` + ' D\'après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>\n'
				if (niv_diff==2) {
					texte_corr +='On sait que '+`$${s1+s5}=${s1+s3}-${s5+s3}=${s13}-${s35}=${s15}$`+' cm.'
				}
			}
		if (this.sup<3) { // on ne fait la figure que si niveau < 3
			texte += '\\begin{minipage}{0.5 \\linewidth}'
			// dessin de la figure
			texte += '\n \\begin{tikzpicture}' // Balise début de figure
			texte += '\n\t \\tkzDefPoints{0/0/'+s1+','+x3+'/'+y3+'/'+s3+','+x2+'/'+y2+'/'+s2+'}' // Placer les points du triangle principal
			texte += '\n\t \\tkzDrawPolygon(' + s1 + ',' + s2 + ',' + s3 + ')' // Trace le triangle principal
			// Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
			texte += '\n\t \\tkzDefPointBy[homothety=center ' + s1 + ' ratio ' + k + '](' + s2 + ')' + '\t\\tkzGetPoint{' + s4 + '}' // Place le premier point du triangle image
			texte += '\n\t \\tkzDefPointBy[homothety=center ' + s1 + ' ratio ' + k + '](' + s3 + ')' + '\t\\tkzGetPoint{' + s5 + '}' // Place le deuxième point du triangle image
			texte += '\n\t \\tkzDrawSegment(' + s4 + ',' + s5 + ')'	// Trace le segment
			if (k > 0) {
				texte += '\n\t \\tkzLabelPoints[left](' + s1 + ')' //nomme les points
				texte += '\n\t \\tkzLabelPoints[above left](' + s2 + ',' + s4 + ')' //nomme les points
				texte += '\n\t \\tkzLabelPoints[below](' + s3 + ',' + s5 + ')' //nomme les points
				// Nomme les points au dessus avec above, dessous avec below...
			}
			else {		// position papillon -> position du nom inversée et nécessité de tracer le triangle secondaire
				texte += '\n\t \\tkzLabelPoints[below](' + s1 + ')' //nomme les points
				texte += '\n\t \\tkzLabelPoints[below](' + s3 + ',' + s4 + ')' //nomme les points
				texte +='\n\t \\tkzLabelPoints[above](' + s2 + ',' + s5 + ')' //nomme les points
				texte += '\n\t \\tkzDrawPolygon(' + s1 + ',' + s4 + ',' + s5 + ')' // Trace le triangle secondaire
			}
			texte += '\n \\end{tikzpicture}' // Balise de fin de figure
			texte +=  '\\end{minipage}'
		}
			this.liste_questions.push(texte) // on envoie la question
				// correction 
			if (this.sup==2){		 //niveau 2 : Calcul intermédiaire nécessaire
				texte_corr = `Les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>\n\t D\'après la propriété de Thales, on a $${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$<br>\n\t`
				if (k>0){
					texte_corr +='On sait que '+`$${s1+s5}=${s1+s3}-${s5+s3}=${s13}-${s35}=${s15}~\\text{cm}.$`
				}
				else {
					texte_corr +='On sait que '+`$${s1+s5}=${s3+s5}-${s1+s3}=${s35}-${s13}=${s15}~\\text{cm}.$`
				}
			}
			else 
			if (this.sup==1){
				if (k>0) {texte_corr = `Dans le triangle $${s1+s2+s3}$, les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>\n D\'après la propriété de Thales, on a $${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$`
				}
				else {texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés et les droites $(${s4+s5})$ et $(${s2+s3})$ sont parallèles.<br>\n` + ' D\'après la propriété de Thales, on a ' + `$${tex_fraction(s1+s4,s1+s2)}=${tex_fraction(s1+s5,s1+s3)}=${tex_fraction(s4+s5,s2+s3)}.$` + '<br>\n'
				}
			}
			texte_corr += `<br>\n On a donc $${tex_fraction(s1 + s4, s12)}=${tex_fraction(s15, s13)}=${tex_fraction(s45, s2 + s3)}$`
			texte_corr += `<br>\n Soit $${s1 + s4}=${tex_fraction(s15 + '\\times' + s12, s13)}\\approx${s14}~\\text{cm}$.`
			texte_corr += `<br>\n Et $${s2 + s3}=${tex_fraction(s13 + '\\times' + s45, s15)}\\approx${s23}~\\text{cm}$.`
			
			this.liste_corrections.push(texte_corr)

			liste_de_question_to_contenu_sans_numero(this);

		}

	}
	
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Calcul direct de deux longueurs \n 2 : Avec calcul intermédiaire\n 3 : Sans figure'];
}

function Reciproque_Thales(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Contrôler si deux droites sont parallèles";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	sortie_html ? this.spacing_corr = 3.5 : this.spacing_corr = 2.5
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.quatrieme = false;
	this.sup=1;

	// let s1='A',s2='B',s3='C',s4='M',s5='N'
	// coefficient de l'homothétie compris entre -0,8 et -0,2 ou entre 0,2 et 0,8 pour éviter les constructions trop serrées
	this.nouvelle_version = function (numero_de_l_exercice) {
		this.liste_questions = [];
		this.liste_corrections = [];
		let lettre1 = randint(1, 26)	// aleatoirisation du nom des points
		let s1 = lettre_depuis_chiffre(lettre1)
		let lettre2 = randint(1, 26, [lettre1])
		let s2 = lettre_depuis_chiffre(lettre2)
		let lettre3 = randint(1, 26, [lettre1, lettre2])
		let s3 = lettre_depuis_chiffre(lettre3)
		let lettre4 = randint(1, 26, [lettre1, lettre2, lettre3])
		let s4 = lettre_depuis_chiffre(lettre4)
		let lettre5 = randint(1, 26, [lettre1, lettre2, lettre3, lettre4])
		let s5 = lettre_depuis_chiffre(lettre5)
		let x2 = randint(2, 4)
		let y2 = randint(3, 5)
		let x3 = randint(5, 6)
		let y3 = randint(-2, 1)
		let k = randint(2, 8) * randint(-1, 1, [0]) / 10
		let k2 = k*(1+randint(0,1)*0.1)
		if (this.quatrieme) { k = abs(k) ; k2=abs(k2) }
		let dist24;
		let dist12 = arrondi(Math.sqrt(x2 * x2 + y2 * y2), 1)
		let dist13 = arrondi(Math.sqrt(x3 * x3 + y3 * y3), 1)
		let dist15 = arrondi(dist13 * abs(k), 2)
		let dist14 = arrondi(dist12 * abs(k2), 2); 	
		let dist35;
		let num1,num2,den1,den2;
		if (k<0) {
			dist35=dist13+dist15;
			dist24=dist12+dist14;
		}
		else {
			dist35=dist13-dist15;
			dist24=dist12-dist14;
		}

		let  texte, texte_corr;
		// On ne garde qu'une approximation au dixième pour l'exercice

		// mise en texte avec 1 chiffres après la virgule pour énoncé
		let s13 = tex_nombrec(dist13);
		let s12 = tex_nombrec(dist12);
		let s15 = tex_nombrec(dist15);
		let s14 = tex_nombrec(dist14);
		let s24 = tex_nombrec(dist24);
		let s35 = tex_nombrec(dist35);
		num1=arrondi(dist12*100);
		den1=arrondi(dist14*100);
		num2=arrondi(dist13*100);
		den2=arrondi(dist15*100);
		let fraction1=[],fraction2=[];
		fraction1=fraction_simplifiee(num1,den1);
		fraction2=fraction_simplifiee(num2,den2);
		let niv_diff = randint(1, 2);

		if (sortie_html) {
			this.type_exercice = 'MG32';
			this.taille_div_MG32 = [700, 500];
			let codeBase64

			if (k < 0) {
				codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAJBJwBANgAAAAAAAEAzAAAAAAAABwABQHYBR64UeuFAcdwo9cKPXP####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AQAAAAAQAAABAAEAAAABAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAQAAJJJwDAGAAAAAAAAAAAAAAAAAAABQABQEerQ5WBBiUAAAAC#####wAAAAEACUNEcm9pdGVBQgD#####AQAAAAASAAABAAEAAAABAAAAA#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAABAAAAEAAQAAAAEAAAAE#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAAQAAAAP#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQD#####AAAABQAAAAb#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAD#####AQAAAAAQAAABBQABAAAABwAAAAkA#####wEAAAAAEAACSicAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAASAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MgABMgAAAAFAAAAAAAAAAAAAABEA#####wACeTIAATUAAAABQBQAAAAAAAAAAAARAP####8AAngzAAE2AAAAAUAYAAAAAAAAAAAAEQD#####AAJ5MwACLTH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAT#wAAAAAAAAAAAAEQD#####AAFrAAQtMC41AAAAEgAAAAE#4AAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABgAAlonAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAABAAAAAAAAAAAAAAABAAAAAAAAAAAAAAATAP####8AAAAAABgAAkInAMAwAAAAAAAAwEOAAAAAAAAHAAAAAAoAAAAOAAAADwAAAA4AAAAQAAAAEwD#####AAAAAAAYAAJDJwAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAABEAAAAOAAAAEgAAAAwA#####wAAABQAAAAOAAAAEwAAAA8A#####wAAAAAAGAACTScAwCQAAAAAAADAAAAAAAAAAAcAAAAAFQAAABcAAAAPAP####8AAAAAABgAAk4nAMAzAAAAAAAAwEMAAAAAAAAHAAAAABYAAAAX#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABYAAAAVAAAAFAAAABYAAAAUAP####8AAAAAAAIAAAAEAAAAGQAAABQAAAAYAAAAGf####8AAAABABBDU3VyZmFjZVBvbHlnb25lAP####8BAAD#AAAABQAAABsAAAAVAP####8B#wAAAAAABQAAABr#####AAAAAQAQQ01hY3JvQXBwYXJpdGlvbgD#####AP8AAAH#####EECIoKPXCj1xQELhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZBcHBBTU4AAAAAAAEAAAAcAAAAABYA#####wD#AAAB#####xBAiLCj1wo9cUBUMKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQXBwQUJDAAAAAAABAAAAHQD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wD#AAAB#####xBAi+Cj1wo9cUBE4UeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAHTWFzcUFNTgAAAAAAAQAAABwAAAAXAP####8A#wAAAf####8QQIvoo9cKPXFAVPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB01hc3FBQkMAAAAAAAEAAAAd#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQIj4o9cKPXFAX3Cj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAAB#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8A#wAAAf####8QQFHFHrhR64VAePwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAClRyaWFuZ2xlIDEAAAAAAAMAAAAfAAAAIgAAACEAAAAZAP####8A#wAAAf####8QQFFFHrhR64VAe3wo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAClRyaWFuZ2xlIDIAAAAAAAMAAAAeAAAAIgAAACAAAAAO##########8="
			}
			else {
				codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACX#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAJBJwDAKAAAAAAAAEAiAAAAAAAABwABQHMxR64UeuFAcbwo9cKPXP####8AAAABABRDRHJvaXRlRGlyZWN0aW9uRml4ZQD#####AQAAAAAOAAABAAEAAAABAT#wAAAAAAAA#####wAAAAEAD0NQb2ludExpZURyb2l0ZQD#####AQAAAAAQAAJJJwDAGAAAAAAAAAAAAAAAAAAABQABQEerQ5WBBiUAAAAC#####wAAAAEACUNEcm9pdGVBQgD#####AQAAAAASAAABAAEAAAABAAAAA#####8AAAABABZDRHJvaXRlUGVycGVuZGljdWxhaXJlAP####8BAAAAAA4AAAEAAQAAAAEAAAAE#####wAAAAEACUNDZXJjbGVPQQD#####AQAAAAABAAAAAQAAAAP#####AAAAAQAQQ0ludERyb2l0ZUNlcmNsZQD#####AAAABQAAAAb#####AAAAAQAQQ1BvaW50TGllQmlwb2ludAD#####AQAAAAAOAAABBQABAAAABwAAAAkA#####wEAAAAAEAACSicAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAASAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MgABMgAAAAFAAAAAAAAAAAAAABEA#####wACeTIAATUAAAABQBQAAAAAAAAAAAARAP####8AAngzAAE2AAAAAUAYAAAAAAAAAAAAEQD#####AAJ5MwACLTH#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAT#wAAAAAAAAAAAAEQD#####AAFrAAMwLjUAAAABP+AAAAAAAAD#####AAAAAQAQQ1BvaW50RGFuc1JlcGVyZQD#####AQAAAAAYAAJaJwAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AAAAAAAYAAJCJwDAMAAAAAAAAMBDgAAAAAAABwAAAAAKAAAADgAAAA8AAAAOAAAAEAAAABMA#####wAAAAAAGAACQycAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAA4AAAARAAAADgAAABIAAAAMAP####8AAAAUAAAADgAAABMAAAAPAP####8AAAAAABgAAk0nAMA7AAAAAAAAwDcAAAAAAAAHAAAAABUAAAAXAAAADwD#####AAAAAAAYAAJOJwDAKAAAAAAAAEAAAAAAAAAABwAAAAAWAAAAF#####8AAAABAAlDUG9seWdvbmUA#####wAAAAAAAgAAAAQAAAAWAAAAFQAAABQAAAAWAAAAFAD#####AAAAAAACAAAABAAAABkAAAAUAAAAGAAAABn#####AAAAAQAQQ1N1cmZhY2VQb2x5Z29uZQD#####AQAA#wAAAAUAAAAbAAAAFQD#####Af8AAAAAAAUAAAAa#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAiKCj1wo9cUBC4UeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGQXBwQU1OAAAAAAABAAAAHAAAAAAWAP####8A#wAAAf####8QQIiwo9cKPXFAVDCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAABkFwcEFCQwAAAAAAAQAAAB0A#####wAAAAEAEUNNYWNyb0Rpc3Bhcml0aW9uAP####8A#wAAAf####8QQIvgo9cKPXFAROFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAAB01hc3FBTU4AAAAAAAEAAAAcAAAAFwD#####AP8AAAH#####EECL6KPXCj1xQFTwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAdNYXNxQUJDAAAAAAABAAAAHf####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECI+KPXCj1xQF9wo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAf####8AAAABABFDTWFjcm9TdWl0ZU1hY3JvcwD#####AP8AAAH#####EEBRxR64UeuFQHj8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApUcmlhbmdsZSAxAAAAAAADAAAAHwAAACIAAAAhAAAAGQD#####AP8AAAH#####EEBRRR64UeuFQHt8KPXCj1wCAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApUcmlhbmdsZSAyAAAAAAADAAAAHgAAACIAAAAgAAAADv##########"
			}

			if (this.sup == 1) {  // calcul direct de AM et BC : pas de calcul intermédiaire de AN
				texte = `Dans la figure ci-dessous, $${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s1 + s5}=${s15}$ cm et $${s1 + s4}=${s14}$ cm.<br>`
				texte_corr=``;
			}
			else if (this.sup == 2) {  // Calcul de AN nécessaire avant de calculer AM et BC
				texte = `Dans la figure ci-dessous, $${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s3 + s5}=${s35}$ cm et $${s2 + s4}=${s24}$ cm.<br>`
				texte_corr=``;
				if (k > 0) {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s1 + s3}-${s3 + s5}=${s13}-${s35}=${s15}$` + ' cm.<br>'
					texte_corr += 'et que ' + `$${s1 + s4}=${s1 + s2}-${s2 + s4}=${s12}-${s24}=${s14}$` + ' cm.<br>'
				}
				else {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s3 + s5}-${s1 + s3}=${s35}-${s13}=${s15}$` + ' cm.<br>'
					texte_corr += 'et que ' + `$${s1 + s4}=${s2 + s4}-${s1 + s2}=${s24}-${s12}=${s14}$` + ' cm.<br>'
				}
			}
			else if (randint(1, 2) == 1) {
				texte = `$${s1}$, $${s2}$ et $${s3}$ sont trois point distincts. $${s4} \\in [${s1 + s2}]$ et $${s5} \\in [${s1 + s3}]$ <br> $${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s1 + s4}=${s14}$ cm et $${s1 + s5}=${s15}$ cm.`
				texte_corr = ``;
			}
			else {
				texte = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre.<br>`
				texte += `$${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s1 + s4}=${s14}$ cm et $${s1 + s5}=${s15}$ cm.`
				if (k > 0) {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s1 + s3}-${s3 + s5}=${s13}-${s35}=${s15}$` + ' cm.<br>'
					texte_corr += 'et que ' + `$${s1 + s4}=${s1 + s2}-${s2 + s4}=${s12}-${s24}=${s14}$` + ' cm.<br>'
				}
				else {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s3 + s5}-${s1 + s3}=${s35}-${s13}=${s15}$` + ' cm.<br>'
					texte_corr += 'et que ' + `$${s1 + s4}=${s2 + s4}-${s1 + s2}=${s24}-${s12}=${s14}$` + ' cm.<br>'
				}
			}
			texte += `<br>Les droites $(${s2 + s3})$ et $(${s4 + s5})$ sont-elles parallèles ?<br>`
			
			texte_corr += `D'une part on a $\\dfrac{${s1 + s2}}{${s1 + s4}}=\\dfrac{${s12}}{${s14}}=\\dfrac{${s12}\\times${mise_en_evidence(s15)}}{${s14}\\times${mise_en_evidence(s15)}}=${tex_fraction(tex_nombrec(arrondi(dist12*dist15,3)),tex_nombrec(arrondi(dist14*dist15,4)))}$`;
			texte_corr += `<br>D'autre part on a $\\dfrac{${s1 + s3}}{${s1 + s5}}=\\dfrac{${s13}}{${s15}}=\\dfrac{${s13}\\times${mise_en_evidence(s14)}}{${s15}\\times${mise_en_evidence(s14)}}=${tex_fraction(tex_nombrec(arrondi(dist13*dist14,3)),tex_nombrec(arrondi(dist14*dist15,4)))}$`;

			if (k!=k2) {
//				if (calcul(dist12/dist14)==arrondi(dist12/dist14,3)) texte_corr+=`$=${tex_nombrec(arrondi(dist12/dist14,3))}$`;
//				else texte_corr+=`$\\approx${tex_nombrec(arrondi(dist12/dist14,3))}$<br>`;

//				if (calcul(dist13/dist15)==arrondi(dist13/dist15,3)) texte_corr+=`$=${tex_nombrec(arrondi(dist13/dist15,3))}$`;
//				else texte_corr+=`$\\approx${tex_nombrec(arrondi(dist13/dist15,3))}$<br>`;
				texte_corr+=`<br>$\\dfrac{${s1 + s2}}{${s1 + s4}}\\not=\\dfrac{${s1 + s3}}{${s1 + s5}}$.<br>`;
				texte_corr+=`Donc d'après le théorème de Thales, les droites $(${s2 + s3})$ et $(${s4 + s5})$ ne sont pas parallèles.<br>`
			}
			else {
//				texte_corr += `D'une part on a $\\dfrac{${s1 + s2}}{${s1 + s4}}=\\dfrac{${s12}}{${s14}}=${tex_fraction(num1,den1)}${simplification_de_fraction_avec_etapes(num1,den1)}$`
//				texte_corr += `<br>D'autre part on a $\\dfrac{${s1 + s3}}{${s1 + s5}}=\\dfrac{${s13}}{${s15}}=${tex_fraction(num2,den2)}${simplification_de_fraction_avec_etapes(num2,den2)}$`;
				texte_corr+=`<br>$\\dfrac{${s1 + s2}}{${s1 + s4}}=\\dfrac{${s1 + s3}}{${s1 + s5}}$.<br>`; //car les produits en croix sont égaux : $${s12}\\times${s15}=${s13}\\times${s14}=${tex_nombre(arrondi(dist12*dist15,3))}$.<br>`;
				if (k>0) texte_corr+=`$${s1}$,$${s4}$,$${s2}$ et $${s1}$,$${s5}$,$${s3}$ sont alignés dans le même ordre.<br>`
				else texte_corr+=`$${s4}$,$${s1}$,$${s2}$ et $${s5}$,$${s1}$,$${s3}$ sont alignés dans le même ordre.<br>`
				texte_corr+=`Donc d'après la réciproque du théorème de Thales, les droites $(${s2 + s3})$ et $(${s4 + s5})$ sont parallèles.<br>`;
			}


			if (this.sup < 3) {
				this.MG32codeBase64 = codeBase64
				this.MG32code_pour_modifier_la_figure = `
					mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x3", "${x3}");
					mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "y2", "${y2}");
					mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "y3", "${y3}");
					mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "k", "${k}");
					mtg32App.rename("MG32svg${numero_de_l_exercice}","A'","${s1}");
					mtg32App.rename("MG32svg${numero_de_l_exercice}","B'","${s2}");
					mtg32App.rename("MG32svg${numero_de_l_exercice}","C'","${s3}");
					mtg32App.rename("MG32svg${numero_de_l_exercice}","M'","${s4}");
					mtg32App.rename("MG32svg${numero_de_l_exercice}","N'","${s5}");
					mtg32App.calculate("MG32svg${numero_de_l_exercice}");
					mtg32App.display("MG32svg${numero_de_l_exercice}");
					`
				texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s1} peut être déplacé (si la figure est tronquée).}}$<br>`;
			}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			if (this.sup < 3) {
				liste_de_question_to_contenu(this)
			}
			else {
				this.type_exercice = '';
				liste_de_question_to_contenu_sans_numero(this)
			}


		} else {	// sortie Latex
			texte = '\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}'
			texte += `\n\t\\item Les droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.`
			if (this.sup == 1) { //niveau 1 : Calcul direct quatrième proportionnelle

				// enoncé  niveau 1

				texte += '\n\t\\item ' + `$${s1 + s2 + ' = ' + s12 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s1 + s3 + ' = ' + s13 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s4 + s5 + ' = ' + s45 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s1 + s5 + ' = ' + s15 + '~\\text{cm}.'}$`
				texte += '\\end{itemize} \\bigskip  Calculer ' + `$${s1 + s4}$` + ' et ' + `$${s2 + s3}$` + ' à 0,1 près. \\end{minipage}'
			}
			else if (this.sup == 2) { // niveau 2 : Calcul intermédiaire nécessaire

				// enoncé  niveau 2

				texte += '\n\t\\item ' + `$${s1 + s2 + ' = ' + s12 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s1 + s3 + ' = ' + s13 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s4 + s5 + ' = ' + s45 + '~\\text{cm}~;'}$`
				texte += '\n\t\\item ' + `$${s3 + s5 + ' = ' + s35 + '~\\text{cm}.'}$`
				texte += '\\end{itemize} \\bigskip  Calculer ' + `$${s1 + s4}$` + ' et ' + `$${s2 + s3}$` + ' à 0,1 près. \\end{minipage}'
			}
			else  // énoncé sans figure

				if (k > 0) {
					texte = `$${s1}$, $${s2}$ et $${s3}$` + ' sont trois point distincts.<br>\n' + `$${s4} \\in [${s1 + s2}]$` + ' et ' + `$${s5} \\in [${s1 + s3}]$` + ' tel que les droites ' + `$(${s4 + s5})$` + ' et ' + `$(${s2 + s3})$` + ' sont parallèles.<br>\n'
					texte += `$${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s4 + s5}=${s45}$ cm et `
					if (niv_diff == 1) {
						texte += `$${s1 + s5}=${s15}$ cm.`
					}
					else {
						texte += `$${s3 + s5}=${s35}$ cm.`
					}
					texte += `<br>\nCalculer $${s1 + s4}$ et $${s2 + s3}$.`
					texte_corr = 'Dans le triangle ' + `$${s1 + s2 + s3}$` + ', les droites ' + `$(${s4 + s5})$` + ' et ' + `$(${s2 + s3})$` + ' sont parallèles.<br>\n' + ' D\'après la propriété de Thales, on a ' + `$${tex_fraction(s1 + s4, s1 + s2)}=${tex_fraction(s1 + s5, s1 + s3)}=${tex_fraction(s4 + s5, s2 + s3)}.$`
					if (niv_diff == 2) {
						texte_corr += 'On sait que ' + `$${s1 + s5}=${s1 + s3}-${s5 + s3}=${s13}-${s35}=${s15}$` + '~;cm.'
					}
				}
				else {
					texte = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre.`
					texte += `<br>\nLes droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.<br>\n $${s1 + s2}=${s12}$ cm, $${s1 + s3}=${s13}$ cm, $${s4 + s5}=${s45}$ cm et `
					if (niv_diff == 1) {
						texte += `$${s1 + s5}=${s15}$ cm.`
					}
					else {
						texte += `$${s3 + s5}=${s35}$ cm.`
					}
					texte += `<br>\nCalculer $${s1 + s4}$ et $${s2 + s3}$.`
					texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés dans cet ordre et les droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.<br>\n` + ' D\'après la propriété de Thales, on a ' + `$${tex_fraction(s1 + s4, s1 + s2)}=${tex_fraction(s1 + s5, s1 + s3)}=${tex_fraction(s4 + s5, s2 + s3)}.$` + '<br>\n'
					if (niv_diff == 2) {
						texte_corr += 'On sait que ' + `$${s1 + s5}=${s1 + s3}-${s5 + s3}=${s13}-${s35}=${s15}$` + ' cm.'
					}
				}
			if (this.sup < 3) { // on ne fait la figure que si niveau < 3
				texte += '\\begin{minipage}{0.5 \\linewidth}'
				// dessin de la figure
				texte += '\n \\begin{tikzpicture}' // Balise début de figure
				texte += '\n\t \\tkzDefPoints{0/0/' + s1 + ',' + x3 + '/' + y3 + '/' + s3 + ',' + x2 + '/' + y2 + '/' + s2 + '}' // Placer les points du triangle principal
				texte += '\n\t \\tkzDrawPolygon(' + s1 + ',' + s2 + ',' + s3 + ')' // Trace le triangle principal
				// Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s1 + ' ratio ' + k + '](' + s2 + ')' + '\t\\tkzGetPoint{' + s4 + '}' // Place le premier point du triangle image
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s1 + ' ratio ' + k + '](' + s3 + ')' + '\t\\tkzGetPoint{' + s5 + '}' // Place le deuxième point du triangle image
				texte += '\n\t \\tkzDrawSegment(' + s4 + ',' + s5 + ')'	// Trace le segment
				if (k > 0) {
					texte += '\n\t \\tkzLabelPoints[left](' + s1 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[above left](' + s2 + ',' + s4 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[below](' + s3 + ',' + s5 + ')' //nomme les points
					// Nomme les points au dessus avec above, dessous avec below...
				}
				else {		// position papillon -> position du nom inversée et nécessité de tracer le triangle secondaire
					texte += '\n\t \\tkzLabelPoints[below](' + s1 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[below](' + s3 + ',' + s4 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[above](' + s2 + ',' + s5 + ')' //nomme les points
					texte += '\n\t \\tkzDrawPolygon(' + s1 + ',' + s4 + ',' + s5 + ')' // Trace le triangle secondaire
				}
				texte += '\n \\end{tikzpicture}' // Balise de fin de figure
				texte += '\\end{minipage}'
			}
			this.liste_questions.push(texte) // on envoie la question
			// correction 
			if (this.sup == 2) {		 //niveau 2 : Calcul intermédiaire nécessaire
				texte_corr = `Les droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.<br>\n\t D\'après la propriété de Thales, on a $${tex_fraction(s1 + s4, s1 + s2)}=${tex_fraction(s1 + s5, s1 + s3)}=${tex_fraction(s4 + s5, s2 + s3)}.$<br>\n\t`
				if (k > 0) {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s1 + s3}-${s5 + s3}=${s13}-${s35}=${s15}~\\text{cm}.$`
				}
				else {
					texte_corr += 'On sait que ' + `$${s1 + s5}=${s3 + s5}-${s1 + s3}=${s35}-${s13}=${s15}~\\text{cm}.$`
				}
			}
			else
				if (this.sup == 1) {
					if (k > 0) {
						texte_corr = `Dans le triangle $${s1 + s2 + s3}$, les droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.<br>\n D\'après la propriété de Thales, on a $${tex_fraction(s1 + s4, s1 + s2)}=${tex_fraction(s1 + s5, s1 + s3)}=${tex_fraction(s4 + s5, s2 + s3)}.$`
					}
					else {
						texte_corr = `Les points $${s2}$, $${s1}$, $${s4}$ et $${s3}$, $${s1}$, $${s5}$ sont alignés et les droites $(${s4 + s5})$ et $(${s2 + s3})$ sont parallèles.<br>\n` + ' D\'après la propriété de Thales, on a ' + `$${tex_fraction(s1 + s4, s1 + s2)}=${tex_fraction(s1 + s5, s1 + s3)}=${tex_fraction(s4 + s5, s2 + s3)}.$` + '<br>\n'
					}
				}
			texte_corr += `<br>\n On a donc $${tex_fraction(s1 + s4, s12)}=${tex_fraction(s15, s13)}=${tex_fraction(s45, s2 + s3)}$`
			texte_corr += `<br>\n Soit $${s1 + s4}=${tex_fraction(s15 + '\\times' + s12, s13)}\\approx${s14}~\\text{cm}$.`
			texte_corr += `<br>\n Et $${s2 + s3}=${tex_fraction(s13 + '\\times' + s45, s15)}\\approx${s23}~\\text{cm}$.`

			this.liste_corrections.push(texte_corr)

			liste_de_question_to_contenu_sans_numero(this);

		}

	}

	this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, '1 : Cas simple \n 2 : Complication \n 3 : Sans figure'];
}

/**
* @auteur Jean-Claude Lhote
*/
function Exercice_Pythagore() {
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer une longueur avec l'égalité de Pythagore";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; // 1 calcul de l'hypoténuse 2 calcul d'un côté de l'angle droit 
	sortie_html ? this.spacing_corr = 2.5 : this.spacing_corr = 1.5

	this.nouvelle_version = function (numero_de_l_exercice) {


			this.type_exercice = 'MG32';
			this.taille_div_MG32 = [700, 500];
			this.liste_questions = [];
			this.liste_corrections = []; // Liste de questions corrigées
			let lettre0 = randint(11, 25)  // aleatoirisation du nom des points
			let s0 = lettre_depuis_chiffre(lettre0)
			lettre1 = randint(11, 25, [lettre0])
			let s1 = lettre_depuis_chiffre(lettre1)
			lettre2 = randint(11, 25, [lettre0, lettre1])
			let s2 = lettre_depuis_chiffre(lettre2)
			let type_de_questions
			if (this.sup == 1) {
				type_de_questions = 1 //calcul de l'hypoténuse
			}
			if (this.sup == 2) {
				type_de_questions = 2 //calcul d'un côté de l'angle droit
			}
			if (this.sup == 3) {
				type_de_questions = randint(1, 2) //un des deux calculs
			}
			if (this.sup == 4) {
				type_de_questions = randint(3, 4)
			}
			let nom_du_triangle = choice([s0 + s1 + s2, s0 + s2 + s1, s1 + s0 + s2, s1 + s2 + s0, s2 + s0 + s1, s2 + s1 + s0])
			let k1 = Math.round((Math.random() * 3 + 3) * 10) / 10
			let k2 = Math.round((Math.random() * 3 + 1) * 10) / 10
			let alpha1 = Math.random() * Math.PI - Math.PI / 2
			let alpha1deg = Math.round(alpha1 * 180 / Math.PI)
			let x1 = k1	// coordonnées des deux sommets du triangle
			let y2 = k2
			let s01 = arrondi_virgule(k1, 1)			// mise en texte avec 1 chiffres après la virgule pour énoncé
			let s02 = arrondi_virgule(k2, 1)

			let carre01 = Math.round(k1 * k1 * 100) / 100
			let carre02 = Math.round(k2 * k2 * 100) / 100
			let dist12 = Math.sqrt(carre01 + carre02)	   //calcul de l'hypoténuse
			dist12 = Math.round(dist12 * 10) / 10		// On ne garde qu'une approximation au dixième pour l'exercice
			let s12 = arrondi_virgule(dist12, 1)
			let carre12 = Math.round(dist12 * dist12 * 100) / 100


			let scarre01 = arrondi_virgule(carre01, 2)		// carremn = distance entre (xm;ym) et (xn;yn) au carré avec 2 décimales
			let scarre02 = arrondi_virgule(carre02, 2)		// scarremn = chaine de caractère avec 2 décimales après une virgule.
			let scarre12 = arrondi_virgule(carre12, 2)
			if (sortie_html) {
			let codeBase64
			if (alpha1deg < 0) {
				codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAACH#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAAA7##########w=="
			}
			else {
				codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAACH#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAO##########8="
			}
			
			if (type_de_questions == 1) { // calcul direct de l'hypoténuse
				texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$, $${s0 + s1}=${s01}$ cm, $${s0 + s2}=${s02}$ cm.`
				texte += `<br>Le point $${s0}$ peut être déplacé.<br>`
				texte += `Calculer $${s1 + s2}$.`
				texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$, d&rsquo;après le théorème de Pythagore, on a : $${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$<br>`
				texte_corr += 'D&rsquo;où ' + `$${s1 + s2}^2~=~${s01}^2~+~${s02}^2~=~${scarre01}~+~${scarre02}~=~${arrondi_virgule(carre02 + carre01, 2)}.$` + '<br>'
				texte_corr += 'Soit ' + `$${s1 + s2}~=~\\sqrt{${arrondi_virgule(carre02 + carre01, 2)}}~\\approx${s12}$` + ' cm.'
			}
			if (type_de_questions == 2) { // Calcul d'un côté de l'angle droit
				texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$, $${s0 + s1}=${s01}$ cm, $${s1 + s2}=${s12}$ cm.`
				texte += `Calculer $${s0 + s2}$.`
				texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$, d&rsquo;après le théorème de Pythagore, on a : $${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$<br>`
				texte_corr += 'D&rsquo;où ' + `$${s0 + s2}^2~=~${s1 + s2}^2~-~${s0 + s1}^2 = ${s12}^2~-~${s01}^2~=~${scarre12}~-~${scarre01}~=~${arrondi_virgule(carre12 - carre01, 2)}.$` + '<br>'
				texte_corr += 'Soit ' + `$${s0 + s2}~=~\\sqrt{${arrondi_virgule(carre12 - carre01, 2)}}~\\approx${s02}$` + ' cm.'
			}
			if (type_de_questions < 3) {
				this.type_exercice = 'MG32';
				this.MG32codeBase64 = codeBase64
				this.MG32code_pour_modifier_la_figure = `
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x2", "${y2}");
		        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x1", "${x1}");
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "alphadeg", "${alpha1deg}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","A","${s0}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","B","${s1}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","C","${s2}");
				mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        	mtg32App.display("MG32svg${numero_de_l_exercice}");
				`
				texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s0} peut être déplacé (si la figure est tronquée).}}$<br>`;
			} else {
				this.type_exercice = '';
			}
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			if (type_de_questions < 3) {
				liste_de_question_to_contenu(this)
			}
			else {
				liste_de_question_to_contenu_sans_numero(this)
			}

		}
		else {
		
			if (type_de_questions < 3) {
				texte = '\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}'
				texte += '\n\t\\item Le côté ' + `$[${s0 + s1}]$` + ' est perpendiculaire au côté ' + `$[${s0 + s2}]~;$`
				if (type_de_questions == 1) { //niveau 1 : Calcul de l'hypoténuse

					// enoncé  niveau 1

					texte += '\n\t\\item ' + `$${s0 + s1 + ' = ' + s01 + '~\\text{cm}~;'}$`
					texte += '\n\t\\item ' + `$${s0 + s2 + ' = ' + s02 + '~\\text{cm}~;'}$`
					texte += '\\end{itemize} \\bigskip\n\t  Calculer ' + `$${s1 + s2}$` + ' à 0,1 près. \\end{minipage}'
				}
				else { // niveau 2 : Calcul d'un côté de l'angle droit
					// enoncé  niveau 2

					texte += '\n\t\\item ' + `$${s1 + s2 + ' = ' + s12 + '~\\text{cm}~;'}$`
					texte += '\n\t\\item ' + `$${s0 + s1 + ' = ' + s01 + '~\\text{cm}~;'}$`
					texte += '\\end{itemize} \\bigskip  Calculer ' + `$${s0 + s2}$` + ' à 0,1 près. \\end{minipage}'
				}
				texte += '\\begin{minipage}{0.5 \\linewidth}'
				// dessin de la figure
				texte += '\n \\begin{tikzpicture}' // Balise début de figure
				texte += '\n\t \\tkzDefPoints{0/0/' + s0 + ',' + x1 + '/0/B,0/' + y2 + '/C}' // créer les points du triangle initial 
				// Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](B) \\tkzGetPoint{' + s1 + '}' // transformer le premier point par rotation
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](C) \\tkzGetPoint{' + s2 + '}' // transformer le deuxième point par rotation
				texte += '\n\t \\tkzDrawPolygon(' + s0 + ',' + s1 + ',' + s2 + ')' // Trace le triangle
				// marquer l'angle droit
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1](' + s1 + ')' + '\\tkzGetPoint{B}'
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 90](B) \\tkzGetPoint{C}'
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1414](' + s1 + ')' + '\\tkzGetPoint{A}'
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 45](A) \\tkzGetPoint{A}'
				texte += '\n\t \\tkzDrawPolygon(' + s0 + ',B,A,C)' // Trace la marque d'angle droit

				if (alpha1deg > 0) { // rotation "angle droit dessous"
				texte += '\n\t \\tkzLabelPoints[below](' + s0 + ')' //nomme les points
				texte += '\n\t \\tkzLabelPoints[right](' + s1 + ')'
				texte += '\n\t \\tkzLabelPoints[left](' + s2 + ')'
			}
			else {		// rotation "angle droit dessus" position du nom inversée 
				texte += '\n\t \\tkzLabelPoints[above](' + s0 + ')' //nomme les points
				texte += '\n\t \\tkzLabelPoints[left](' + s1 + ')'
				texte += '\n\t \\tkzLabelPoints[right](' + s2 + ')'
			}
				texte += '\n \\end{tikzpicture}' // Balise de fin de figure
				texte += '\\end{minipage}'
			}
			else {
				texte = '\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Dans le triangle ' + `${nom_du_triangle}` + ' rectangle en ' + `${s0}` + ' : \\begin{itemize}'
				// texte += '\n\t\\item Le côté ' + `$[${s0 + s1}]$` + ' est perpendiculaire au côté ' + `$[${s0 + s2}]~;$`
				if (type_de_questions == 1) { //niveau 1 : Calcul de l'hypoténuse

					// enoncé  niveau 1

					texte += '\n\t\\item ' + `$${s0 + s1 + ' = ' + s01 + '~\\text{cm}~;'}$`
					texte += '\n\t\\item ' + `$${s0 + s2 + ' = ' + s02 + '~\\text{cm}~;'}$`
					texte += '\\end{itemize} \\bigskip\n\t  Calculer ' + `$${s1 + s2}$` + ' à 0,1 près. \\end{minipage}'
				}
				else { // niveau 2 : Calcul d'un côté de l'angle droit
					// enoncé  niveau 2

					texte += '\n\t\\item ' + `$${s1 + s2 + ' = ' + s12 + '~\\text{cm}~;'}$`
					texte += '\n\t\\item ' + `$${s0 + s1 + ' = ' + s01 + '~\\text{cm}~;'}$`
					texte += '\\end{itemize} \\bigskip  Calculer ' + `$${s0 + s2}$` + ' à 0,1 près. \\end{minipage}'
				}
			}
			this.liste_questions.push(texte) // on envoie la question
			// correction 
			if (type_de_questions == 2 || type_de_questions == 4) {		 //niveau 2 : Calcul d'un côté de l'angle droit
				texte_corr = 'Le triangle ' + `$${nom_du_triangle}$` + ' est rectangle en ' + `$${s0}.$` + '<br>\n D\'après le théorème de Pythagore, on a :~' + `$${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$`
				texte_corr += '<br>\n D\'où ' + `$${s0 + s2}^2~=~${s1 + s2}^2~-~${s0 + s1}^2 = ${s12}^2~-~${s01}^2~=~${scarre12}~-~${scarre01}~=~${arrondi_virgule(carre12 - carre01, 2)}.$`
				texte_corr += '<br>\n Soit ' + `$${s0 + s2}~=~\\sqrt{${arrondi_virgule(carre12 - carre01, 2)}}~\\approx${s02}~\\text{cm}.$`
			}
			else {
				texte_corr = 'Le triangle ' + `$${nom_du_triangle}$` + ' est rectangle en ' + `$${s0}.$` + '<br>\n D\'après le théorème de Pythagore, on a ' + `$${s1 + s2}^2 = ${s0 + s1}^2~+~${s0 + s2}^2.$`
				texte_corr += '<br>\n D\'où ' + `$${s1 + s2}^2~=~${s01}^2~+~${s02}^2~=~${scarre01}~+~${scarre02}~=~${arrondi_virgule(carre02 + carre01, 2)}.$`
				texte_corr += '<br>\n Soit ' + `$${s1 + s2}~=~\\sqrt{${arrondi_virgule(carre02 + carre01, 2)}}~\\approx${s12}~\\text{cm}.$`

			}

			this.liste_corrections.push(texte_corr)

			liste_de_question_to_contenu_sans_numero(this);

			// }end for

		}
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 4, '1 : Calcul de l\'hypoténuse \n 2 : Calcul d\'un côté de l\'angle droit\n 3 : Calcul d\'un côté quelconque\n 4 : Sans la figure'];
}

/**
* @auteur Jean-Claude Lhote
*/
function Exercice_Trigo_longueurs() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer une longueur grâce à la trigonométrie";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing=1;
	this.quatrieme=false;
	this.sup = 1; // 1 utilisation du cosinus exclusivement 2 utilisation des 3 fonctions trigo 
	sortie_html ? this.spacing_corr = 3 : this.spacing_corr = 1.5

	this.nouvelle_version = function (numero_de_l_exercice) {
			let lettre1,lettre2,texte,texte_corr;
			this.bouton_aide = modal_youtube(numero_de_l_exercice,"DYW-BTMFzd4","Trigonométrie (vidéo de digiSchool)")
			this.type_exercice = 'MG32';
			this.taille_div_MG32 = [700, 500];
			this.liste_questions = [];
			this.liste_corrections = []; // Liste de questions corrigées
			let lettre0 = randint(11, 25)  // aleatoirisation du nom des points
			let s0 = lettre_depuis_chiffre(lettre0)
			lettre1 = randint(11, 25, [lettre0])
			let s1 = lettre_depuis_chiffre(lettre1)
			lettre2 = randint(11, 25, [lettre0, lettre1])
			let s2 = lettre_depuis_chiffre(lettre2)
			let angle1
			let type_de_questions
			if (this.sup == 1) 	type_de_questions = choice([1,3,5]); // on multiplie par cos, sin ou tan
			if (this.sup == 2) 	type_de_questions = choice([2,4,6]); // on divise par cos, sin ou tan
			if (this.sup == 3)	type_de_questions = randint(1,6);
			if (this.quatrieme)	type_de_questions = ((type_de_questions-1)%2 +1);  // on n'utilise que le cosinus.
			let nom_du_triangle = choice([s0 + s1 + s2, s0 + s2 + s1, s1 + s0 + s2, s1 + s2 + s0, s2 + s0 + s1, s2 + s1 + s0])
			let k1 = Math.round((Math.random() * 5 + 1) * 10) / 10
			let k2 = Math.round((Math.random() * 5 + 1) * 10) / 10
			angle1=Math.round(Math.degres(Math.atan(k2/k1)));
			let alpha1 = Math.random() * Math.PI - Math.PI / 2
			let alpha1deg = Math.round(alpha1 * 180 / Math.PI)
			let x1 = k1	// coordonnées des deux sommets du triangle
			let y2 = k2
			let s01 = arrondi_virgule(k1, 1)			// mise en texte avec 1 chiffres après la virgule pour énoncé
			let s02 = arrondi_virgule(k2, 1)
			
			let dist12 = k1/Math.cos(Math.atan(k2/k1))	   //calcul de l'hypoténuse
			dist12 = Math.round(dist12 * 10) / 10		// On ne garde qu'une approximation au dixième pour l'exercice
			let s12 = arrondi_virgule(dist12, 1)
			texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$ :<br>`;
			if (sortie_html) { // sortie html MG32
				let codeBase64
				if (alpha1deg < 0) {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8ABQAAACBAQIGJiJxJngAAAAEAAAAWAAAAFwAAAA7##########w=="
				}
				else {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAUAAAAgQEHcp2T0QTQAAAABAAAAFgAAABcAAAAO##########8="
				}
				texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$.<br>`
				

				if (type_de_questions == 1) { // calcul du côté adjacent (cosinus)
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s1 + s2}=${s12}$ cm.<br>`;
					texte += `Calculer $${s0 + s1}$.`;


				}
				if (type_de_questions == 2) { // Calcul de l'hypoténuse (1/cosinus)
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s0 + s1}=${s01}$ cm.<br>`;
					texte += `Calculer $${s1 + s2}$.`;

				}
				if (type_de_questions == 3) { // calcul du côté opposé (sinus)
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s1 + s2}=${s12}$ cm.<br>`;
					texte += `Calculer $${s0 + s2}$.`;

				}
				if (type_de_questions == 4) { // Calcul de l'hypoténuse (1/sinus) 
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s0 + s2}=${s02}$ cm.<br>`;
					texte += `Calculer $${s1 + s2}$.`;

				}
				if (type_de_questions == 5) { // calcul du côté opposé (tangente)
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s0 + s1}=${s01}$ cm.<br>`;
					texte += `Calculer $${s0 + s2}$.`;

				}
				if (type_de_questions == 6) { // Calcul du côté adjacent (1/tangente) 
					texte += `L'angle $\\widehat{${s0 + s1 + s2}}$ mesure $${angle1}\\degree$, $${s0 + s2}=${s02}$ cm.<br>`;
					texte += `Calculer $${s0 + s1}$.`;

				}

				this.type_exercice = 'MG32';
				this.MG32codeBase64 = codeBase64
				this.MG32code_pour_modifier_la_figure = `
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x2", "${y2}");
		        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x1", "${x1}");
				mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "alphadeg", "${alpha1deg}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","A","${s0}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","B","${s1}");
				mtg32App.rename("MG32svg${numero_de_l_exercice}","C","${s2}");
				mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        	mtg32App.display("MG32svg${numero_de_l_exercice}");
				`
				texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s0} peut être déplacé (si la figure est tronquée).}}$<br>`;
			}
			else { //sortie Latex
				texte = `\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}`
				texte += `\n\t\\item Le triangle $${nom_du_triangle}]$ est rectangle en $${s0}$~;`

				if (type_de_questions == 1) { // Calcul du coté adjacent (cosinus)
					texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s0 + s1}$ à 0,1 près. \\end{minipage}`
				}
				if (type_de_questions == 2) { // Calcul de l'hypoténuse (1/cosinus)
					texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s1 + s2}$ à 0,1 près. \\end{minipage}`
				}
				if (type_de_questions == 3) { // Calcul du coté opposé (sinus)
					texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s0 + s2}$ à 0,1 près. \\end{minipage}`
				}
				if (type_de_questions == 4) { // Calcul de l'hypoténuse (1/sinus)
					texte += `\n\t\\item $${s0 + s2}=${s02}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s1 + s2}$ à 0,1 près. \\end{minipage}`
				}
				if (type_de_questions == 5) { // Calcul du côté opposé (tangente)
					texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s0 + s2}$ à 0,1 près. \\end{minipage}`
				}
				if (type_de_questions == 6) { // Calcul du côté adjacent (1/tangente)
					texte += `\n\t\\item $${s0 + s2}=${s02}~\\text{cm}$`;
					texte += `\n\t\\item L'angle $\\widehat{${s0 + s1 + s2}}$~mesure~$${angle1}\\degree$.<br>`;
					texte += `\\end{itemize} \\bigskip\n\t  Calculer $${s0 + s1}$ à 0,1 près. \\end{minipage}`
				}
				texte += '\\begin{minipage}{0.5 \\linewidth}'
				// dessin de la figure
				texte += '\n \\begin{tikzpicture}' // Balise début de figure
				texte += '\n\t \\tkzDefPoints{0/0/' + s0 + ',' + x1 + '/0/B,0/' + y2 + '/C}' // créer les points du triangle initial 
				// Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](B) \\tkzGetPoint{' + s1 + '}' // transformer le premier point par rotation
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](C) \\tkzGetPoint{' + s2 + '}' // transformer le deuxième point par rotation
				texte += '\n\t \\tkzDrawPolygon(' + s0 + ',' + s1 + ',' + s2 + ')' // Trace le triangle
				// marquer l'angle droit
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1](' + s1 + ')' + '\\tkzGetPoint{B}'
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 90](B) \\tkzGetPoint{C}'
				texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1414](' + s1 + ')' + '\\tkzGetPoint{A}'
				texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 45](A) \\tkzGetPoint{A}'
				texte += '\n\t \\tkzDrawPolygon(' + s0 + ',B,A,C)' // Trace la marque d'angle droit
				if (alpha1deg > 0) { // rotation "angle droit dessous"
					texte += '\n\t \\tkzLabelPoints[below](' + s0 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[above right](' + s1 + ')'
					texte += '\n\t \\tkzLabelPoints[left](' + s2 + ')'
				}
				else {		// rotation "angle droit dessus" position du nom inversée 
					texte += '\n\t \\tkzLabelPoints[left](' + s0 + ')' //nomme les points
					texte += '\n\t \\tkzLabelPoints[below left](' + s1 + ')'
					texte += '\n\t \\tkzLabelPoints[above right](' + s2 + ')'
				}
				texte += '\n \\end{tikzpicture}' // Balise de fin de figure
				texte += '\\end{minipage}'
			}
			if (type_de_questions == 1) {	
				texte_corr+=`Le cosinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
				texte_corr +=`$\\cos \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s1,s1+s2)}$<br>`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\cos\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s0+s1,s12)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s0+s1}=${quatrieme_proportionnelle('\\color{red}{1}',s12,`\\cos\\left(${angle1}\\degree\\right)`)}$<br>` // ${s12}\\times\\cos\\left(${angle1}\\degree\\right)$<br>`;
				texte_corr += `Soit $${s0 + s1}\\approx${s01}$ cm.`;
			}
			if (type_de_questions == 2) {
				texte_corr += `Le cosinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
				texte_corr +=`$\\cos \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s1,s1+s2)}$<br>`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\cos\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s01,s1+s2)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s1 + s2}=${quatrieme_proportionnelle(`\\cos\\left(${angle1}\\degree\\right)`,s01,'\\color{red}{1}')}$<br>`// ${s01}\\div\\cos\\left(${angle1}\\degree\\right)$<br>`;
				texte_corr += `Soit $${s1 + s2}\\approx${s12}$ cm.`;
			}	
			if (type_de_questions == 3) {
				texte_corr += `Le sinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
				texte_corr += `$\\sin \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s1+s2)}$<br>`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\sin\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s0+s2,s12)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s0+s2}=${quatrieme_proportionnelle('\\color{red}{1}',s12,`\\sin\\left(${angle1}\\degree\\right)`)}$<br>`
				texte_corr += `Soit $${s0 + s2}\\approx${s02}$ cm.`;
			}
			if (type_de_questions == 4) {
				texte_corr = `Le sinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
				texte_corr +=`$\\sin \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s1+s2)}$<br>`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\sin\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s02,s1+s2)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s1+s2}=${quatrieme_proportionnelle(`\\sin\\left(${angle1}\\degree\\right)`,s02,'\\color{red}{1}')}$<br>`				
				texte_corr += `Soit $${s1 + s2}\\approx${s12}$ cm.`;
			}
			if (type_de_questions == 5) {
				texte_corr = `La tangente de l'angle $\\widehat{${s0+s1+s2}}$ est définie par :<br>`;
				texte_corr += `$\\tan \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s0+s1)}<br>$`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\tan\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s0+s2,s01)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s0+s2}=${quatrieme_proportionnelle('\\color{red}{1}',s01,`\\tan\\left(${angle1}\\degree\\right)`)}$<br>`								
				texte_corr += `Soit $${s0 + s2}\\approx${s02}$ cm.`;
			}
			if (type_de_questions == 6) {
				texte_corr = `La tangente de l'angle $\\widehat{${s0+s1+s2}}$ est définie par :<br>`;
				texte_corr +=`$\\tan \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s0+s1)}$<br>`;
				texte_corr +=`Avec les données numériques :<br>`
				texte_corr +=`$\\dfrac{\\tan\\left(${angle1}\\degree\\right)}{\\color{red}{1}}=${tex_fraction(s02,s0+s1)}$<br>`;
				texte_corr +=`$\\bf\\textcolor{red}{Les~ produits~ en~ croix~ sont~ égaux~donc~ :}$<br>`
				texte_corr += `$${s0+s1}=${quatrieme_proportionnelle(`\\tan\\left(${angle1}\\degree\\right)`,s02,'\\color{red}{1}')}$<br>`					
				texte_corr += `Soit $${s0 + s1}\\approx${s01}$ cm.`;
			}
			// texte+=href('Comment calculer une longueur avec la trigonométrie','https://www.youtube.com/watch?v=DYW-BTMFzd4')
			this.liste_questions.push(texte);
			this.liste_corrections.push(texte_corr);
			liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 3, '1 : Calculs faciles \n 2 : Calculs moins faciles \n 3 : Mélange'];
}
/**
* @auteur Jean-Claude Lhote
* Calcul d'angle dans le triangle rectangle
* Le niveau 1 se limite à l'utilisation de Arccos
* Le niveau 2 utilise la fonction trigo la plus pertinente pour un calcul direct
*/
function Exercice_Trigo_angles() {
	'use strict'
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer un angle grâce à la trigonométrie";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; // 1 calcul avec Arccos
	sortie_html ? this.spacing_corr = 3 : this.spacing_corr = 1.5

	this.nouvelle_version = function (numero_de_l_exercice) {
		this.type_exercice = 'MG32';
		this.taille_div_MG32 = [700, 500];
		this.liste_questions = [];
		this.liste_corrections = []; // Liste de questions corrigées
		let lettre0 = randint(11, 25)  // aleatoirisation du nom des points
		let s0 = lettre_depuis_chiffre(lettre0)
		let lettre1 = randint(11, 25, [lettre0])
		let s1 = lettre_depuis_chiffre(lettre1)
		let lettre2 = randint(11, 25, [lettre0, lettre1])
		let s2 = lettre_depuis_chiffre(lettre2)
		let angle1,angle2
		let type_de_questions
		if (this.sup == 1) {
			type_de_questions = randint(1,2) // utilisation de Arccos
		}
		if (this.sup == 2) {
			type_de_questions = randint(1,6,[2]) // utilisation des 3 fonctions Arccos, Arcsin et Arctan
		}
		
		let nom_du_triangle = choice([s0 + s1 + s2, s0 + s2 + s1, s1 + s0 + s2, s1 + s2 + s0, s2 + s0 + s1, s2 + s1 + s0])
		let k1 = Math.round((Math.random() * 5 + 1) * 10) / 10
		let k2 = Math.round((Math.random() * 5 + 1) * 10) / 10
		angle1=Math.round(Math.degres(Math.atan(k2/k1)));
		angle2=90-angle1;
		let alpha1 = Math.random() * Math.PI - Math.PI / 2
		let alpha1deg = Math.round(alpha1 * 180 / Math.PI)
		let x1 = k1	// coordonnées des deux sommets du triangle
		let y2 = k2
		let s01 = arrondi_virgule(k1, 1)			// mise en texte avec 1 chiffres après la virgule pour énoncé
		let s02 = arrondi_virgule(k2, 1)
		
		let dist12 = k1/Math.cos(Math.atan(k2/k1))	   //calcul de l'hypoténuse
		dist12 = Math.round(dist12 * 10) / 10		// On ne garde qu'une approximation au dixième pour l'exercice
		let s12 = arrondi_virgule(dist12, 1);
		let texte;
		let texte_corr = `Dans le triangle $${nom_du_triangle}$ rectangle en $${s0}$ :<br>`;
		if (sortie_html) { // sortie html MG32
			let codeBase64
			if (type_de_questions%2!=0) {
				if (alpha1deg < 0) {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8ABQAAACBAQIGJiJxJngAAAAEAAAAWAAAAFwAAAA7##########w=="
				}
				else {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAUAAAAgQEHcp2T0QTQAAAABAAAAFgAAABcAAAAO##########8="
				}
			}
			else {
				if (alpha1deg < 0) {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8AAwAAACBAQHXBUVjTVQAAAAEAAAAXAAAAFgAAAA7##########w=="
				}
				else {
					codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAMAAAAgQELJWhOPSZcAAAABAAAAFwAAABYAAAAO##########8="
				}
			}
			texte = `Dans la figure ci-dessous, le triangle $${nom_du_triangle}$ est rectangle en $${s0}$.<br>`
			

			if (type_de_questions == 1) { // calcul de l'angle 1 (arccos)
				texte += `$${s1 + s2}=${s12}$ cm<br>`;
				texte += `$${s0 + s1}=${s01}$ cm<br>`;
				texte += `Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près.`;


			}
			if (type_de_questions == 2) { // Calcul de l'angle 2 (90-arccos)
			texte += `$${s1 + s2}=${s12}$ cm<br>`;
			texte += `$${s0 + s1}=${s01}$ cm<br>`;
			texte += `Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près.`;
			}
			if (type_de_questions == 3) { // calcul de l'angle 1 (arcsin)
				texte += `$${s0 + s2}=${s02}$ cm<br>`;
				texte += `$${s1 + s2}=${s12}$ cm<br>`;
				texte += `Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près.`;


			}
			if (type_de_questions == 4) { // Calcul de l'angle 2 (arcsin)
			texte += `$${s1 + s2}=${s12}$ cm<br>`;
			texte += `$${s0 + s1}=${s01}$ cm<br>`;
			texte += `Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près.`;
			}
			if (type_de_questions == 5) { // calcul de l'angle 1 (arctan)
				texte += `$${s0 + s2}=${s02}$ cm<br>`;
				texte += `$${s0 + s1}=${s01}$ cm<br>`;
				texte += `Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près.`;


			}
			if (type_de_questions == 6) { // Calcul de l'angle 2 (arctan)
			texte += `$${s0 + s2}=${s02}$ cm<br>`;
			texte += `$${s0 + s1}=${s01}$ cm<br>`;
			texte += `Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près.`;
			}

			this.type_exercice = 'MG32';
			this.MG32codeBase64 = codeBase64
			this.MG32code_pour_modifier_la_figure = `
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x2", "${y2}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "x1", "${x1}");
			mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "alphadeg", "${alpha1deg}");
			mtg32App.rename("MG32svg${numero_de_l_exercice}","A","${s0}");
			mtg32App.rename("MG32svg${numero_de_l_exercice}","B","${s1}");
			mtg32App.rename("MG32svg${numero_de_l_exercice}","C","${s2}");
			mtg32App.calculate("MG32svg${numero_de_l_exercice}");
			mtg32App.display("MG32svg${numero_de_l_exercice}");
			`
			texte += `<br>$\\footnotesize{\\textit{Le point \\thickspace ${s0} peut être déplacé (si la figure est tronquée).}}$<br>`;
		}
		else { //sortie Latex
			texte = `\\begin{minipage}{.5 \\linewidth} 	\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}`
			texte += `\n\t\\item Le triangle $${nom_du_triangle}$ est rectangle en $${s0}$;`

			if (type_de_questions == 1) { // Calcul de l'angle coté adjacent (Arccos)
				texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près. \\end{minipage}`
			}
			if (type_de_questions == 2) { // Calcul de l'angle opposé (90-Arccos)
				texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près. \\end{minipage}`
			}
			if (type_de_questions == 3) { // Calcul de l'angle 1 (Arcsin)
				texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s2}=${s02}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près. \\end{minipage}`
			}
			if (type_de_questions == 4) { // Calcul de l'angle 2 (Arcsin)
				texte += `\n\t\\item $${s1 + s2}=${s12}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près. \\end{minipage}`
			}
			if (type_de_questions == 5) { // Calcul de l'angle 1 (Arctan)
				texte += `\n\t\\item $${s0 + s2}=${s02}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s1 + s2}}$ à 1° près. \\end{minipage}`
	
			}
			if (type_de_questions == 6) { // Calcul de l'angle 2 (Arctan)
				texte += `\n\t\\item $${s0 + s2}=${s02}~\\text{cm}$`;
				texte += `\n\t\\item $${s0 + s1}=${s01}~\\text{cm}$`;
				texte += `\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${s0 + s2 + s1}}$ à 1° près. \\end{minipage}`
			}
			texte += '\\begin{minipage}{0.5 \\linewidth}'
			// dessin de la figure
			texte += '\n \\begin{tikzpicture}' // Balise début de figure
			texte += '\n\t \\tkzDefPoints{0/0/' + s0 + ',' + x1 + '/0/B,0/' + y2 + '/C}' // créer les points du triangle initial 
			// Définit les points M et N par homothétie de centre C et de rapport 0,3<k<0,8
			texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](B) \\tkzGetPoint{' + s1 + '}' // transformer le premier point par rotation
			texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle ' + alpha1deg + '](C) \\tkzGetPoint{' + s2 + '}' // transformer le deuxième point par rotation
			texte += '\n\t \\tkzDrawPolygon(' + s0 + ',' + s1 + ',' + s2 + ')' // Trace le triangle
			// marquer l'angle droit
			texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1](' + s1 + ')' + '\\tkzGetPoint{B}'
			texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 90](B) \\tkzGetPoint{C}'
			texte += '\n\t \\tkzDefPointBy[homothety=center ' + s0 + ' ratio 0.1414](' + s1 + ')' + '\\tkzGetPoint{A}'
			texte += '\n\t \\tkzDefPointBy[rotation= center ' + s0 + ' angle 45](A) \\tkzGetPoint{A}'
			texte += '\n\t \\tkzDrawPolygon(' + s0 + ',B,A,C)' // Trace la marque d'angle droit
			if (alpha1deg > 0) { // rotation "angle droit dessous"
			texte += '\n\t \\tkzLabelPoints[below](' + s0 + ')' //nomme les points
			texte += '\n\t \\tkzLabelPoints[above right](' + s1 + ')'
			texte += '\n\t \\tkzLabelPoints[left](' + s2 + ')'
		}
		else {		// rotation "angle droit dessus" position du nom inversée 
			texte += '\n\t \\tkzLabelPoints[left](' + s0 + ')' //nomme les points
			texte += '\n\t \\tkzLabelPoints[below left](' + s1 + ')'
			texte += '\n\t \\tkzLabelPoints[above right](' + s2 + ')'
		}
			texte += '\n \\end{tikzpicture}' // Balise de fin de figure
			texte += '\\end{minipage}'
		}
		if (type_de_questions == 1) {	
			texte_corr+=`Le cosinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
			texte_corr +=`$\\cos \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s1,s1+s2)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\cos\\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s01,s12)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s1+s2}}=\\arccos\\left(${tex_fraction(s01,s12)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s1+s2}}\\approx${angle1}\\degree$`
		}
		if (type_de_questions == 2) {
			texte_corr+=`Le cosinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
			texte_corr +=`$\\cos \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s1,s1+s2)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\cos\\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s01,s12)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s1+s2}}=\\arccos\\left(${tex_fraction(s01,s12)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s1+s2}}\\approx${angle1}\\degree$<br>`
			texte_corr += `Or, dans un triangle rectangle les angles aigus sont complémentaires, donc :<br>`
			texte_corr += `$\\widehat{${s0+s2+s1}}\\approx90-${angle1}\\approx${angle2}\\degree$`
		}	
		if (type_de_questions == 3) {
			texte_corr+=`Le sinus de l'angle $\\widehat{${s0+s1+s2}}$ est défini par :<br>`;
			texte_corr +=`$\\sin \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s1+s2)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\sin\\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s02,s12)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s1+s2}}=\\arcsin\\left(${tex_fraction(s02,s12)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s1+s2}}\\approx${angle1}\\degree$`
		}
		if (type_de_questions == 4) {
			texte_corr+=`Le sinus de l'angle $\\widehat{${s0+s2+s1}}$ est défini par :<br>`;
			texte_corr +=`$\\sin \\left(\\widehat{${s0+s2+s1}}\\right)=${tex_fraction(s0 + s1,s1+s2)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\sin\\left(\\widehat{${s0+s2+s1}}\\right)=${tex_fraction(s01,s12)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s2+s1}}=\\arcsin\\left(${tex_fraction(s01,s12)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s2+s1}}\\approx${angle2}\\degree$`
		}
		if (type_de_questions == 5) {
			texte_corr+=`La tangente de l'angle $\\widehat{${s0+s1+s2}}$ est définie par :<br>`;
			texte_corr +=`$\\tan \\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s0 + s2,s0+s1)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\tan\\left(\\widehat{${s0+s1+s2}}\\right)=${tex_fraction(s02,s01)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s1+s2}}=\\arctan\\left(${tex_fraction(s02,s01)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s1+s2}}\\approx${angle1}\\degree$`
		}
		if (type_de_questions == 6) {
			texte_corr+=`La tangente de l'angle $\\widehat{${s0+s2+s1}}$ est définie par :<br>`;
			texte_corr +=`$\\tan \\left(\\widehat{${s0+s2+s1}}\\right)=${tex_fraction(s0 + s1,s0+s2)}$<br>`;
			texte_corr +=`Avec les données numériques :<br>`
			texte_corr += `$\\tan\\left(\\widehat{${s0+s2+s1}}\\right)=${tex_fraction(s01,s02)}$<br>`;
			texte_corr += `On en déduit que $\\widehat{${s0+s2+s1}}=\\arctan\\left(${tex_fraction(s01,s02)}\\right)$<br>`;
			texte_corr += `Soit $\\widehat{${s0+s2+s1}}\\approx${angle2}\\degree$`
		}
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);;
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté', 2, '1 : Calcul de l\'angle avec Acos \n 2 : Calcul de l\'angle avec Acos, Asin ou Atan'];
}

/**
* À partir de la donnée des 3 longueurs d'un triangle, déterminer si il est rectangle ou pas.
* @Auteur Rémi Angot
*/
function Reciproque_Pythagore(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer si un triangle est rectangle ou pas.";
	this.consigne = "";
	this.nb_questions = 3;
	this.nb_cols = 2;
	this.nb_cols_corr = 2;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_type_de_questions = combinaison_listes(['rectangle','rectangle','pas_rectangle','pas_rectangle'],this.nb_questions)
		let liste_triplets_pythagoriciens =  [[3,4,5],[5,12,13],[6,8,10],[7,24,25],[8,15,17],[9,12,15],[9,40,41], [10,24,26], [11,60,61], [12,16,20], [12,35,37], [13,84,85], [14,48,50], [15,20,25], [15,36,39], [16,30,34], [16,63,65], [18,24,30], [18,80,82],  [20,21,29], [20,48,52], [21,28,35], [21,72,75], [24,32,40], [24,45,51], [24,70,74], [25,60,65], [27,36,45], [28,45,53], [28,96,100], [30,40,50], [30,72,78], [32,60,68], [33,44,55], [33,56,65], [35,84,91], [36,48,60], [36,77,85], [39,52,65], [39,80,89], [40,42,58], [40,75,85], [42,56,70], [45,60,75], [48,55,73], [48,64,80], [51,68,85], [54,72,90], [57,76,95], [60,63,87], [60,80,100], [65,72,97]]
		let liste_noms_triangles = []; // on mémorise les noms des triangles pour ne pas les redonner
		for (let i = 0, texte, texte_corr, AB,BC,AC,a,b,c,nom_triangle,triplet, ordre_des_cotes, cpt=0; i < this.nb_questions && cpt<50; ) {
			nom_triangle = polygone(3,liste_noms_triangles);
			liste_noms_triangles.push(nom_triangle)
			A = nom_triangle[0];
			B = nom_triangle[1];
			C = nom_triangle[2];
			triplet = choice(liste_triplets_pythagoriciens);
			enleve_element(liste_triplets_pythagoriciens,triplet) // Supprime le triplet pour les prochaines questions
			a = triplet[0];
			b = triplet[1];
			c = triplet[2];
			if (liste_type_de_questions[i]=='pas_rectangle') {
				c += randint(-3,3,[0]) // on change la valeur de c 
				while (a**2+b**2==c**2){ // si par hasard (est-ce possible ?) on retombe sur un triplet pythagoricien on change les valeurs
					c += randint(-3,3,[0]) // on change la valeur de c
					b += randint(-3,3,[0]) // on change la valeur de b
				}
			}
			if (a>9 && choice([true,true,true,false]) ) { //le plus souvent on utilise des décimaux
				a = calcul(a/10);
				b = calcul(b/10);
				c = calcul(c/10);
			}
			ordre_des_cotes = randint(1,3)
			switch (ordre_des_cotes){
				case 1 : 
				texte = `Le triangle $${nom_triangle}$ est tel que $${A+B}=${tex_nombre(c)}$ cm, $${A+C}=${tex_nombre(b)}$ cm et $${B+C}=${tex_nombre(a)}$ cm.`
				break
				case 2 : 
				texte = `Le triangle $${nom_triangle}$ est tel que  $${B+C}=${tex_nombre(a)}$ cm, $${A+C}=${tex_nombre(b)}$ cm et $${A+B}=${tex_nombre(c)}$ cm.`
				break
				case 3 : 
				texte = `Le triangle $${nom_triangle}$ est tel que $${A+C}=${tex_nombre(b)}$ cm, $${A+B}=${tex_nombre(c)}$ cm,  et $${B+C}=${tex_nombre(a)}$ cm.`
				break 
			}
			texte += `<br>Ce triangle est-il rectangle ?`
			texte_corr = `Dans le triangle $${nom_triangle}$, le plus grand côté est $[${A+B}]$.`
			texte_corr += `<br>$${A+B}^2=${tex_nombre(c)}^2=${tex_nombrec(c**2)}$`
			texte_corr += `<br>$${A+C}^2+${B+C}^2=${tex_nombre(b)}^2+${tex_nombre(a)}^2=${tex_nombrec(b**2+a**2)}$`
			if (liste_type_de_questions[i]=='rectangle') {
				texte_corr += `<br>On constate que $${A+B}^2=${A+C}^2+${B+C}^2$, l'égalité de Pythagore est vérifiée donc $${nom_triangle}$ est rectangle en $${C}$.`
			} else {
				texte_corr += `<br>On constate que $${A+B}^2\\not=${A+C}^2+${B+C}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${nom_triangle}$ n'est pas rectangle.`
			}
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Problèmes utilisant le théorème de Pythagore ou sa réciproque et des propriétés des quadrilatères particuliers.
*
* * Dans un losange, on connait la longueur du côté et une diagonale, il faut calculer l'autre.
* * Dans un rectangle on connait la longueur et une diagonale, il faut calculer la largeur.
* * Dans un rectangle on connait la longueur et la largeur, il faut calculer la diagonale.
* * Est-ce qu'un parallélogramme est un losange ? On peut démontrer que les diagonales sont perpendiculaires ou pas.
* * Est-ce qu'un parallélogramme est un rectangle ? On peut démontrer qu'il possède un angle droit ou pas . 
* @Auteur Rémi Angot
*/
function Problemes_Pythagore(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Problèmes utilisant le théorème de Pythagore";
	this.consigne = "";
	this.nb_questions = 2;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
	sortie_html ? this.spacing_corr = 2 : this.spacing_corr = 1.5;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles = ['losange','rectangle_diagonale_connue','rectangle_diagonale_a_trouver','parallelogramme_est_losange','parallelogramme_n_est_pas_losange','parallelogramme_est_rectangle','parallelogramme_n_est_pas_rectangle']
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		let liste_triplets_pythagoriciens =  [[3,4,5],[5,12,13],[6,8,10],[7,24,25],[8,15,17],[9,12,15],[9,40,41], [10,24,26], [11,60,61], [12,16,20], [12,35,37], [13,84,85], [14,48,50], [15,20,25], [15,36,39], [16,30,34], [16,63,65], [18,24,30], [18,80,82],  [20,21,29], [20,48,52], [21,28,35], [21,72,75], [24,32,40], [24,45,51], [24,70,74], [25,60,65], [27,36,45], [28,45,53], [28,96,100], [30,40,50], [30,72,78], [32,60,68], [33,44,55], [33,56,65], [35,84,91], [36,48,60], [36,77,85], [39,52,65], [39,80,89], [40,42,58], [40,75,85], [42,56,70], [45,60,75], [48,55,73], [48,64,80], [51,68,85], [54,72,90], [57,76,95], [60,63,87], [60,80,100], [65,72,97]];
		let liste_noms_quadrilateres = ['L','M','N','O'] // pour que le O ne soit pas une des 4 lettres
		for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50; ) {
			let nom_quadrilatere = polygone(4,liste_noms_quadrilateres);
			liste_noms_quadrilateres.push(nom_quadrilatere)
			let A = nom_quadrilatere[0];
			let B = nom_quadrilatere[1];
			let C = nom_quadrilatere[2];
			let D = nom_quadrilatere[3]
			let O = `O`
			let triplet = choice(liste_triplets_pythagoriciens);
			enleve_element(liste_triplets_pythagoriciens,triplet) // Supprime le triplet pour les prochaines questions
			let a = triplet[0];
			let b = triplet[1];
			let c = triplet[2];
			if (liste_type_de_questions[i]=='parallelogramme_n_est_pas_losange' || liste_type_de_questions[i]=='parallelogramme_n_est_pas_rectangle') {
				c += randint(-3,3,[0]) // on change la valeur de c 
				while (a**2+b**2==c**2){ // si par hasard (est-ce possible ?) on retombe sur un triplet pythagoricien on change les valeurs
					c += randint(-3,3,[0]) // on change la valeur de c
					b += randint(-3,3,[0]) // on change la valeur de b
				}
			}
			if (a>9 && choice([true,true,true,false]) ) { //le plus souvent on utilise des décimaux
				a = calcul(a/10);
				b = calcul(b/10);
				c = calcul(c/10);
			}

			switch (liste_type_de_questions[i]) {
				case 'losange' :
				texte = `$${nom_quadrilatere}$ est un losange de centre $O$ tel que $${A+B}=${tex_nombre(c)}$ cm et $${A+C}=${tex_nombre(2*a)}$ cm.<br>`
				texte += `Calculer $${D+B}$.`

				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id="mtg32svg#6"/><text x="185.5" y="32.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><text x="220.5" y="134.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><line x1="190.5" y1="43.44" x2="216.5" y2="129.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="144.54431444308477" y="133.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="190.5" y1="43.44" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="183.54431444308474" y="234.14525664249953" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><line x1="216.5" y1="129.44" x2="189.54431444308474" y2="215.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="189.54431444308474" y1="215.14525664249953" x2="163.54431444308477" y2="129.14525664249953" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><g  id=""><line x1="208.86483613904568" y1="86.9074753482156" x2="199.2927218660596" y2="89.80137036097884" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="207.7072781339404" y1="83.07862963902116" x2="198.13516386095432" y2="85.9725246517844" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="207.19175809011574" y1="175.70062312711323" x2="197.652449829911" y2="172.70035681946817" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="208.39186461317377" y1="171.88489982303136" x2="198.85255635296903" y2="168.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="171.1794783040391" y1="171.67778129428393" x2="180.75159257702518" y2="168.78388628152072" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="172.33703630914437" y1="175.50662700347834" x2="181.90915058213045" y2="172.61273199071513" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><g  id=""><line x1="181.19175809011574" y1="89.70062312711323" x2="171.652449829911" y2="86.7003568194682" style="stroke-width:1;stroke:rgb(0,0,255);" /><line x1="182.39186461317377" y1="85.88489982303133" x2="172.85255635296903" y2="82.8846335153863" style="stroke-width:1;stroke:rgb(0,0,255);" /></g><text x="176.02215722154236" y="144.29262832124977" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text><g  id=""><line x1="198.79500694133887" y1="129.34145667941502" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/><line x1="190.0709855797076" y1="120.51977860145324" x2="198.84383529950412" y2="120.56860695961849" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(255,0,0);"/></g><line x1="190.5" y1="43.44" x2="190.02215722154236" y2="129.29262832124977" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="189.54431444308474" y2="215.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="163.54431444308477" y2="129.14525664249953" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="190.02215722154236" y1="129.29262832124977" x2="216.5" y2="129.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g  id=""><line x1="193.7768798113023" y1="89.9214712483418" x2="186.74527741024002" y2="82.81115707290796" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.70592152305426" y1="89.88211536115601" x2="193.81623569848807" y2="82.85051296009375" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="193.2990370328447" y1="175.77409956959156" x2="186.2674346317824" y2="168.66378539415774" style="stroke-width:1;stroke:rgb(255,0,0);" /><line x1="186.22807874459664" y1="175.7347436824058" x2="193.33839292003046" y2="168.7031412813435" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="176.75540701760488" y1="134.21886503698207" x2="176.81106464702222" y2="124.21901992676723" style="stroke-width:1;stroke:rgb(255,0,0);" /></g><g  id=""><line x1="203.28890742547983" y1="124.36639160551746" x2="203.2332497960625" y2="134.3662367157323" style="stroke-width:1;stroke:rgb(255,0,0);" /></g></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `$${nom_quadrilatere}$ est un losange donc ses diagonales se coupent en leur milieu : $${A+O}=${A+C}\\div2=${tex_nombre(2*a)}\\div2=${tex_nombre(a)}$ cm.<br>`
				texte_corr += `On sait que les diagonales d'un losange se coupent perpendiculairement donc $${A+O+C}$ est un triangle rectangle en $O$.<br>`
				texte_corr += `D'après le théorème de Pythagore, on a : $${A+O}^2+${O+B}^2=${A+B}^2$.<br>`
				texte_corr += `Donc $${O+B}^2=${A+B}^2-${A+O}^2=${tex_nombre(c)}^2-${tex_nombre(a)}^2=${tex_nombre(b**2)}$.<br>`
				texte_corr += `On a alors $${O+B}=\\sqrt{${tex_nombrec(b**2)}}=${tex_nombre(b)}$ cm.<br>`
				texte_corr += `Finalement comme $O$ est aussi le milieu de $[${D+B}]$ : $${D+B}=2\\times ${O+B}=2\\times${tex_nombre(b)}=${tex_nombre(2*b)}$ cm.`
				break

				case 'rectangle_diagonale_connue' :
				texte = `$${nom_quadrilatere}$ est un rectangle tel que $${A+B}=${tex_nombre(a)}$ cm et $${A+C}=${tex_nombre(c)}$ cm.<br>`
				texte += `Calculer $${B+C}$.`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `$${nom_quadrilatere}$ est un rectangle donc il possède 4 angles droits et $${A+B+C}$ est un triangle rectangle en $${B}$.<br>`
				texte_corr += `D'après le théorème de Pythagore, on a : $${A+B}^2+${B+C}^2=${A+C}^2$.<br>`
				texte_corr += `Donc $${B+C}^2=${A+C}^2-${A+B}^2=${tex_nombre(c)}^2-${tex_nombre(a)}^2=${tex_nombre(b**2)}$.<br>`
				texte_corr += `Finalement, $${B+C}=\\sqrt{${tex_nombrec(b**2)}}=${tex_nombre(b)}$ cm.`
				break

				case 'rectangle_diagonale_a_trouver' :
				texte = `$${nom_quadrilatere}$ est un rectangle tel que $${A+B}=${tex_nombre(a)}$ cm et $${B+C}=${tex_nombre(b)}$ cm.<br>`
				texte += `Calculer $${A+C}$.`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><g id=""/><g/><g id=""/><g id=""/><g/><g id=""/><g id=""/><g id=""/><text x="113.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="276.5" y="49.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><g id=""/><g id=""/><text x="276.5" y="138.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><text x="111.5" y="141.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><polygon points="126.500,53.440 272.500,53.440 272.500,124.440 126.500,124.440 " style="stroke-width:1;stroke:rgb(0,0,0);fill:none"  id=""/><g  id=""><line x1="142.5" y1="53.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="126.5" y1="69.44" x2="142.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="272.5" y1="69.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="256.5" y1="53.44" x2="256.5" y2="69.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="256.5" y1="124.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="272.5" y1="108.44" x2="256.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><g  id=""><line x1="126.5" y1="108.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/><line x1="142.5" y1="124.44" x2="142.5" y2="108.44" style="stroke-width:1;stroke:rgb(0,0,255);"/></g><line x1="126.5" y1="53.44" x2="272.5" y2="124.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/></svg></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `$${nom_quadrilatere}$ est un rectangle donc il possède 4 angles droits et $${A+B+C}$ est un triangle rectangle en $${B}$.<br>`
				texte_corr += `D'après le théorème de Pythagore, on a : $${A+C}^2=${A+B}^2+${B+C}^2=${tex_nombrec(a)}^2+${tex_nombrec(b)}^2=${tex_nombrec(c**2)}$.<br>`
				texte_corr += `Finalement, $${A+C}=\\sqrt{${tex_nombrec(c**2)}}=${tex_nombre(c)}$ cm.`
				break

				case 'parallelogramme_est_losange' :
				texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A+O}=${tex_nombre(a)}$ cm, $${A+B}=${tex_nombre(c)}$ cm et $${B+O}=${tex_nombre(b)}$ cm.<br>`
				texte += `$${nom_quadrilatere}$ est-il un losange ?`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `Dans le triangle $${A+O+B}$, le plus grand côté est $[${A+B}]$.<br>`
				texte_corr += `$${A+B}^2=${tex_nombre(c)}^2=${tex_nombrec(c**2)}$<br>`
				texte_corr += `$${A+O}^2+${O+B}^2=${tex_nombre(a)}^2+${tex_nombre(b)}^2=${tex_nombrec(a**2+b**2)}$<br>`
				texte_corr += `On constate que $${A+B}^2=${A+O}^2+${O+B}^2$, l'égalité de Pythagore est vérifiée donc $${A+O+B}$ est rectangle en $O$.<br>`
				texte_corr += `Finalement, comme $${nom_quadrilatere}$ est un parallélogramme qui a ses diagonales perpendiculaires alors c'est aussi un losange.`
				break

				case 'parallelogramme_n_est_pas_losange' :
				texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A+O}=${tex_nombre(a)}$ cm, $${A+B}=${tex_nombre(c)}$ cm et $${B+O}=${tex_nombre(b)}$ cm.<br>`
				texte += `$${nom_quadrilatere}$ est-il un losange ?`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `Dans le triangle $${A+O+B}$, le plus grand côté est $[${A+B}]$.<br>`
				texte_corr += `$${A+B}^2=${tex_nombre(c)}^2=${tex_nombrec(c**2)}$<br>`
				texte_corr += `$${A+O}^2+${O+B}^2=${tex_nombre(a)}^2+${tex_nombre(b)}^2=${tex_nombrec(a**2+b**2)}$<br>`
				texte_corr += `On constate que $${A+B}^2\\not=${A+O}^2+${O+B}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${A+O+B}$ n'est pas un triangle rectangle.<br>`
				texte_corr += `Si $${nom_quadrilatere}$ était un losange alors ses diagonales devraient être perpendiculaires et $${A+O+B}$ devrait être un triangle rectangle.<br>`
				texte_corr += `Finalement comme $${A+O+B}$ n'est pas un triangle rectangle, $${nom_quadrilatere}$ n'est pas un losange.`
				break

				case 'parallelogramme_est_rectangle' :
				texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A+B}=${tex_nombre(a)}$ cm, $${A+C}=${tex_nombre(c)}$ cm et $${B+C}=${tex_nombre(b)}$ cm.<br>`
				texte += `$${nom_quadrilatere}$ est-il un rectangle ?`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `Dans le triangle $${A+B+C}$, le plus grand côté est $[${A+C}]$.<br>`
				texte_corr += `$${A+C}^2=${tex_nombre(c)}^2=${tex_nombrec(c**2)}$<br>`
				texte_corr += `$${A+B}^2+${B+C}^2=${tex_nombre(a)}^2+${tex_nombre(b)}^2=${tex_nombrec(a**2+b**2)}$<br>`
				texte_corr += `On constate que $${A+C}^2=${A+B}^2+${B+C}^2$, l'égalité de Pythagore est vérifiée donc $${A+B+C}$ est rectangle en $${B}$.<br>`
				texte_corr += `Finalement, comme $${nom_quadrilatere}$ est un parallélogramme qui a un angle droit en $${B}$ alors c'est aussi un rectangle.`
				break

				case 'parallelogramme_n_est_pas_rectangle' :
				texte = `$${nom_quadrilatere}$ est un parallélogramme de centre $O$ tel que $${A+B}=${tex_nombre(a)}$ cm, $${A+C}=${tex_nombre(c)}$ cm et $${B+C}=${tex_nombre(b)}$ cm.<br>`
				texte += `$${nom_quadrilatere}$ est-il un rectangle ?`
				if (sortie_html) {
					texte_corr = `<p style="margin-left:10%"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><defs id="mtg32_patterns"/><rect width="100%" height="100%" fill="rgb(255,255,255)"/><g id="mtg32svgTraces" transform="scale(1)"/><text x="85.5" y="46.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${A}</tspan></text><g id=""/><text x="252.5" y="45.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${B}</tspan></text><text x="302.5" y="156.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${C}</tspan></text><g id=""/><line x1="256.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="256.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><g id=""/><text x="137.5" y="155.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>${D}</tspan></text><line x1="307.5" y1="138.44" x2="143.5" y2="138.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="143.5" y1="138.44" x2="92.5" y2="52.44" style="stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="92.5" y1="52.44" x2="307.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><line x1="256.5" y1="52.44" x2="143.5" y2="138.44" style="stroke-dasharray:3 3;stroke-width:1;stroke:rgb(0,0,0);"  id=""/><text x="200" y="114.44" style="text-anchor : left;fill:rgb(0,0,0);font-size:16px;" id="name"  visibility="visible"><tspan>O</tspan></text></svg></p>`
				} else {
					texte_corr = ``
				}
				texte_corr += `Dans le triangle $${A+B+C}$, le plus grand côté est $[${A+C}]$.<br>`
				texte_corr += `$${A+C}^2=${tex_nombre(c)}^2=${tex_nombrec(c**2)}$<br>`
				texte_corr += `$${A+B}^2+${B+C}^2=${tex_nombre(a)}^2+${tex_nombre(b)}^2=${tex_nombrec(a**2+b**2)}$<br>`
				texte_corr += `On constate que $${A+C}^2\\not=${A+B}^2+${B+C}^2$, l'égalité de Pythagore n'est pas vérifiée donc $${A+B+C}$ n'est pas rectangle en $${B}$.<br>`
				texte_corr += `Finalement, comme $${nom_quadrilatere}$ n'a pas d'angle droit en $${B}$ ce n'est pas un rectangle.`
				break
			}
				
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

/**
* Puissances d'un relatif (1)
* * L’objectif est de travailler le sens des règles de calcul sur les puissances plutôt que les formules magiques
*
* Paramétrages possibles :
* * 1 : produit de puissances de même base
* * 2 : quotient de puissances de même base
* * 3 : puissance de puissance
* * 4 : produit de puissances de même exposant
* * 5 : mélange des trois autres niveaux
* @Auteur Sébastien Lozano
*/
function Puissances_d_un_relatif_1(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Puissances : Le sens des règles de calculs"; 
	sortie_html ? this.consigne = "Écrire sous la forme $\\mathbf{a^n}$.":  this.consigne = "Écrire sous la forme $a^n$.";
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 5;
	this.correction_detaillee_disponible = true;
	this.nb_cols_corr = 1;
	this.sup = 5;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FichePuissances-4N21.pdf","Aide mémoire sur les puissances (Sébastien Lozano)","Aide mémoire")
		
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [];
		if (this.sup==1){
			type_de_questions_disponibles = [1]; // produit de puissances de même base
		} else if (this.sup==2){
			type_de_questions_disponibles = [2]; // quotient de puissances de même base
		} else if (this.sup==3){
			type_de_questions_disponibles = [3]; // puissance de puissance
		} else if (this.sup==4){
			type_de_questions_disponibles = [4]; // produit de puissances de même exposant
		} else if (this.sup==5){
			type_de_questions_disponibles = [1,2,3,4]; // mélange
		};


		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions);

		// pour pouvoir adapter les couleurs en cas de besoin
		let coul0 = 'red';
		let coul1 = 'blue';

		for (let i = 0, base0, base1, base, base_utile, exp0, exp1, exp, coul_exp0, coul_exp1, lettre, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
			type_de_questions = liste_type_de_questions[i];

			base = randint(2,9)*choice([-1,1]); // on choisit une base sauf 1 ... penser à gérer le cas des bases qui sont des puissances
			exp0 = randint(1,9);
			exp1 = randint(1,9,[exp0]);
			exp = [exp0,exp1]; // on choisit deux exposants différents c'est mieux
			lettre = lettre_depuis_chiffre(i+1); // on utilise des lettres pour les calculs	

			if (base<0) {
				base_utile = '('+base+')'; // on définit une base avec des parenthèses pour l'affichage du cas negatif
			} else {
				base_utile = base;
			};
			
			switch (type_de_questions) {
				case 1 : // produit de puissances de même base
					texte =  `$${lettre}=${base_utile}^${exp[0]}\\times ${base_utile}^${exp[1]}$`;	

					texte_corr = `$${lettre}=${base_utile}^${exp[0]}\\times ${base_utile}^${exp[1]}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=${eclatePuissance(base_utile,exp[0],coul0)} \\times ${eclatePuissance(base_utile,exp[1],coul1)}$`;
					};
					texte_corr += `<br>`;
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul0}}{${exp[0]}}~\\color{black}{+}~\\color{${coul1}}{${exp[1]}}}$ facteurs tous égaux à $${base_utile}$`;
					texte_corr += `<br>`;
					texte_corr += `$${lettre}=${base_utile}^{${exp[0]}+${exp[1]}} = ${base_utile}^{${exp[0]+exp[1]}}`;
					// attention la base_utile est de type str alors que la fonction switch sur un type number					
					if (simpNotPuissance(base,exp[0]+exp[1]) != ` `) {
						texte_corr += `=${simpNotPuissance(base,exp[0]+exp[1])}`;  
					}
					texte_corr += `$`;
					texte_corr += `<br>`;
					break;			
				case 2 : // quotient de puissances de même base
					// Pour que la couleur de la base associée à l'exposant max soit toujours rouge.
					if (Math.max(exp[0],exp[1])==exp[0]) {
						coul_exp0 = coul0;
						coul_exp1 = coul1;
					} else {
						coul_exp0 = coul1;
						coul_exp1 = coul0;
					};
					
					texte =  `$${lettre}=\\dfrac{${base_utile}^${exp[0]}}{${base_utile}^${exp[1]}}$`;	

					texte_corr = `$${lettre}=\\dfrac{${base_utile}^${exp[0]}}{${base_utile}^${exp[1]}}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(base_utile,exp[0],coul_exp0)}}{${eclatePuissance(base_utile,exp[1],coul_exp1)}}$`;
					};
					texte_corr += `<br><br>`;				
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul1}}{${Math.min(exp[0],exp[1])}}}$ simplifications par $${base_utile}$ possibles.`;
					if (this.correction_detaillee) {
						texte_corr += `<br><br>`;					
					};
					if ((exp[0]-exp[1])==0) {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{${base_utile}}`,exp[0],coul_exp0)}}{${eclatePuissance(`\\cancel{${base_utile}}`,exp[0],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=1`
					} else if (exp[0]-exp[1]<0) {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{${base_utile}}`,exp[0],coul_exp0)}}{${eclatePuissance(`\\cancel{${base_utile}}`,exp[0],coul_exp1)}\\times${eclatePuissance(base_utile,exp[1]-exp[0],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=\\dfrac{1}{${base_utile}^{${exp[1]}-${exp[0]}}}=\\dfrac{1}{${base_utile}^{${exp[1]-exp[0]}}}`
						if (simpNotPuissance(base,exp[1]-exp[0]) != ` `) {
							texte_corr += `=\\dfrac{1}{${simpNotPuissance(base,exp[1]-exp[0])}}=${simpNotPuissance(base,exp[0]-exp[1])}`
						} else {
							texte_corr += `=${base_utile}^{${exp[0]-exp[1]}}`
						}						
					} else {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{${base_utile}}`,exp[1],coul_exp0)}\\times${eclatePuissance(base_utile,exp[0]-exp[1],coul_exp0)}}{${eclatePuissance(`\\cancel{${base_utile}}`,exp[1],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=${base_utile}^{${exp[0]}-${exp[1]}}=${base_utile}^{${exp[0]-exp[1]}}`;
						if (simpNotPuissance(base,exp[0]-exp[1]) != ` `) {
							texte_corr += `=${simpNotPuissance(base,exp[0]-exp[1])}`;
						}; 						
					}; 
					texte_corr += `$`;
					texte_corr += `<br>`;			
					break;			
				case 3 : // exponentiation
					exp = [randint(2,4),randint(2,4)]; // on redéfinit les deux exposants pour ne pas avoir d'écritures trop longues et pour éviter 1
					texte =  `$${lettre}=(${base_utile}^${exp[0]})^{${exp[1]}}$`;	
					
					texte_corr = `$${lettre}=(${base_utile}^${exp[0]})^{${exp[1]}}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=\\color{${coul0}}{\\underbrace{${eclatePuissance(`(${base_utile}^${exp[0]})`,exp[1],coul0)}}_{${exp[1]}\\thickspace\\text{facteurs}}}$`;
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=\\color{${coul0}}{\\underbrace{${eclatePuissance(`(\\color{${coul1}}{\\underbrace{${eclatePuissance(base_utile,exp[0],coul1)}}_{${exp[0]}\\thickspace\\text{facteurs}}}\\color{${coul0}})`,exp[1],coul0)}}_{${exp[1]}\\times\\color{${coul1}}{${exp[0]}}\\thickspace\\color{black}{\\text{facteurs}}}}$`;
					};
					texte_corr += `<br>`;
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul0}}{${exp[1]}}~\\color{black}{\\times}~\\color{${coul1}}{${exp[0]}}}$ facteurs tous égaux à $${base_utile}$`;
					texte_corr += `<br>`;
					texte_corr += `$${lettre}=${base_utile}^{${exp[0]}\\times${exp[1]}} = ${base_utile}^{${exp[0]*exp[1]}}`;				
					if (simpNotPuissance(base,exp[0]*exp[1]) != ` `) {
					texte_corr += `= ${simpNotPuissance(base,exp[0]*exp[1])}`; 
					};
					texte_corr += `$`;
					texte_corr += `<br>`;
					break;
				case 4 : // produit de puissances de même exposant
					base0 = randint(2,8,[4,6]);
					base1 = randint(2,8,[4,6,base0]); 
					base = [base0,base1]; // on choisit 2 bases différentes c'est mieux
					exp = randint(2,5,6); // on choisit un exposant
					texte = `$${lettre}=${base[0]}^${exp}\\times ${base[1]}^${exp}$`;
					texte_corr += `<br>`;
					texte_corr = `$${lettre}=${base[0]}^${exp}\\times ${base[1]}^${exp}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=${eclatePuissance(base[0],exp,coul0)} \\times ${eclatePuissance(base[1],exp,coul1)}$`;
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=${reorganiseProduitPuissance(base[0],base[1],exp,coul0,coul1)}$`;
					};
					texte_corr += `<br>`;
					texte_corr += `$${lettre}= (\\color{${coul0}}{\\mathbf{${base[0]}}} \\color{black}{\\times} \\color{${coul1}}{\\mathbf{${base[1]}}}\\color{black}{)^{${exp}}}=${base[0]*base[1]}^${exp}$`;
					texte_corr += `<br>`;
					break;																
			};


		
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}		
		liste_de_question_to_contenu_sans_numero(this);
	}
	this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
}

/**
* Puissances d'un relatif (2)
* * Travailler des résultats automatisés 
* * mais aussi d'utiliser les propriétés du produit de puissance, du quotient de puissances et des puissances de puissances
* @Auteur Sébastien Lozano
*/
function Puissances_d_un_relatif_2(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Puissances : Calculs automatisés et règles de calculs"; 
	sortie_html ? this.consigne = "Écrire sous la forme $\\mathbf{a^n}$.":  this.consigne = "Écrire sous la forme $a^n$.";
	this.spacing = 2;
	this.spacing_corr = 2.5;
	this.nb_questions = 8;
	this.nb_cols_corr = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6,7,8];	
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions);

		this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FichePuissances-4N21.pdf","Aide mémoire sur les puissances (Sébastien Lozano)","Aide mémoire")

		for (let i = 0, base ,exp , texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
			let type_de_questions = liste_type_de_questions[i];
			
			switch (type_de_questions) {
				case 1 :
					base = 3; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1]),randint(1,7,[1]),randint(1,7,[1])]; // on a besoin de 3 exposants distincts
					texte = `$\\dfrac{${base}^${exp[0]}\\times ${base*base}}{${base}^${exp[1]} \\times ${base}^${exp[2]}}$`;
					texte_corr = `$\\dfrac{${base}^${exp[0]}\\times ${base*base}}{${base}^${exp[1]} \\times ${base}^${exp[2]}}`;
					texte_corr += ` = \\dfrac{${base}^${exp[0]}\\times ${base}^{2}}{${base}^${exp[1]} \\times ${base}^${exp[2]}}`;
					texte_corr += ` = \\dfrac{${base}^{${exp[0]}+2}}{${base}^{${exp[1]}+${exp[2]}}}`;
					texte_corr += ` = \\dfrac{${base}^{${exp[0]+2}}}{${base}^{${exp[1]+exp[2]}}}`;
					texte_corr += ` = ${base}^{${exp[0]+2}-${exp[1]+exp[2]}}`;					
					texte_corr += ` = ${base}^{${exp[0]+2-exp[1]-exp[2]}}`;
					if ((exp[0]+2-exp[1]-exp[2])==0 || (exp[0]+2-exp[1]-exp[2])==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
						texte_corr += `=`+simpExp(base,exp[0]+2-exp[1]-exp[2]);
					};
					texte_corr += `$`;
					break;
				case 2 :
					base = 2; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1]),randint(1,7,[1])]; // on a besoin de 2 exposants distincts
					texte = `$\\dfrac{${base}^${exp[0]}\\times ${base**3}}{${base}^${exp[1]}}$`;
					texte_corr = `$\\dfrac{${base}^${exp[0]}\\times ${base**3}}{${base}^${exp[1]}}`;
					texte_corr += ` = \\dfrac{${base}^${exp[0]}\\times ${base}^3}{${base}^${exp[1]}}`;
					texte_corr += ` = \\dfrac{${base}^{${exp[0]}+3}}{${base}^${exp[1]}}`;
					texte_corr += ` = \\dfrac{${base}^{${exp[0]+3}}}{${base}^${exp[1]}}`;
					texte_corr += ` = ${base}^{${exp[0]+3}-${exp[1]}}`;
					texte_corr += ` = ${base}^{${exp[0]+3-exp[1]}}`;
					if ((exp[0]+3-exp[1])==0 || (exp[0]+3-exp[1])==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
						texte_corr += `=`+simpExp(base,exp[0]+3-exp[1]);
					};
					texte_corr += `$`;
					break;
				case 3 :
					base = 5; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1]),randint(1,2)]; // on a besoin de 2 exposants distincts
					// le second exposant ne peut valoir que 1 ou 2 la fonction testExp ne convient pas à l'affichage ici					
					if (exp[1]==2) {
						texte = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}^${exp[1]}}$`;
						texte_corr = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}^${exp[1]}}`;
						texte_corr += `=\\dfrac{${base}^{1+${exp[0]}}}{(${base}^2)^${exp[1]}}`;
						texte_corr += `=\\dfrac{${base}^{1+${exp[0]}}}{${base}^{2 \\times ${exp[1]}}}`;
						texte_corr += `=\\dfrac{${base}^{${1+exp[0]}}}{${base}^{${2*exp[1]}}}`;
					} else {						
						texte = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}}$`;
						texte_corr = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}}`;
						texte_corr += `=\\dfrac{${base}^{1+${exp[0]}}}{${base}^2}`;
					};
					texte_corr += `=${base}^{${1+exp[0]}-${2*exp[1]}}`;
					texte_corr += `=${base}^{${1+exp[0]-2*exp[1]}}`;
					if ((1+exp[0]-2*exp[1])==0 || (1+exp[0]-2*exp[1])==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
						texte_corr += `=`+simpExp(base,1+exp[0]-2*exp[1]);
					};
					texte_corr += `$`;
					break;
				case 4 :
					base = 2; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
					texte = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}\\times ${base**2}}$`;
					texte_corr = `$\\dfrac{${base}\\times ${base}^${exp[0]}}{${base**2}\\times ${base**2}}`;
					texte_corr += `=\\dfrac{${base}^{1+${exp[0]}}}{${base}^2\\times ${base}^2}`;
					texte_corr += `=\\dfrac{${base}^{${1+exp[0]}}}{${base}^{2+2}}`;
					texte_corr += `=\\dfrac{${base}^{${1+exp[0]}}}{${base}^{${2+2}}}`;
					texte_corr += `=${base}^{${1+exp[0]}-${2+2}}`;					
					texte_corr += `=${base}^{${1+exp[0]-2-2}}`;
					if ((1+exp[0]-2-2)==0 || (1+exp[0]-2-2)==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
						texte_corr += `=`+simpExp(base,1+exp[0]-2-2);
					};
					texte_corr += `$`;
					break;
				case 5 :
					base = 2; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
					texte = `$\\dfrac{${base**2}^${exp[0]}}{${base}}$`;
					texte_corr = `$\\dfrac{${base**2}^${exp[0]}}{${base}}`;
					texte_corr += `=\\dfrac{(${base}^2)^${exp[0]}}{${base}}`;
					texte_corr += `=\\dfrac{${base}^{2\\times ${exp[0]}}}{${base}}`;
					texte_corr += `=\\dfrac{${base}^{${2*exp[0]}}}{${base}}`;
					texte_corr += `=${base}^{${2*exp[0]}-1}`;					
					texte_corr += `=${base}^{${2*exp[0]-1}}$`;
					// Inutile de tester l'exposant final car il vaut au minimum 3
					break;
				case 6 :
					base = 3; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,3,[1])]; // on a besoin de 1 exposant
					texte = `$\\dfrac{${base**3}^${exp[0]}}{${base}}$`;
					texte_corr = `$\\dfrac{${base**3}^${exp[0]}}{${base}}`;
					texte_corr += `=\\dfrac{(${base}^3)^${exp[0]}}{${base}}`;
					texte_corr += `=\\dfrac{${base}^{3\\times ${exp[0]}}}{${base}}`;
					texte_corr += `=\\dfrac{${base}^{${3*exp[0]}}}{${base}}`;
					texte_corr += `=${base}^{${3*exp[0]}-1}`;
					texte_corr += `=${base}^{${3*exp[0]-1}}$`;
					// inutile de tester l'exposant final car il vaut au minimum 5 
					break;
				case 7 :
					base = 3; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1]),randint(1,7,[1]),randint(1,4,[1])]; // on a besoin de 3 exposants distincts
					texte = `$\\dfrac{${base}^${exp[0]}\\times ${base}^${exp[1]}}{${base**2}^${exp[2]}}\\times ${base}$`;
					texte_corr = `$\\dfrac{${base}^${exp[0]}\\times ${base}^${exp[1]}}{${base**2}^${exp[2]}}\\times ${base}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]}+${exp[1]}}}{(${base}^2)^${exp[2]}}\\times ${base}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]+exp[1]}}}{${base}^{2\\times ${exp[2]}}}\\times ${base}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]+exp[1]}}}{${base}^{${2*exp[2]}}}\\times ${base}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]+exp[1]}}\\times ${base}}{${base}^{${2*exp[2]}}}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]+exp[1]}+1}}{${base}^{${2*exp[2]}}}`;
					texte_corr += `=\\dfrac{${base}^{${exp[0]+exp[1]+1}}}{${base}^{${2*exp[2]}}}`;
					texte_corr += `=${base}^{${exp[0]+exp[1]+1}-${2*exp[2]}}`;					
					texte_corr += `=${base}^{${exp[0]+exp[1]+1-2*exp[2]}}`;
					if ((exp[0]+exp[1]+1-2*exp[2])==0 || (exp[0]+exp[1]+1-2*exp[2])==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant est évincé
						texte_corr += `=`+simpExp(base, exp[0]+exp[1]+1-2*exp[2]);
					};
					texte_corr += `$`;
					break;
				case 8 :
					base = 2; // on travaille sur cette base mais on pourrait rendre la base aléatoire
					exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
					texte = `$\\dfrac{${base**3}\\times ${base}}{${base**2}^${exp[0]}}$`;
					texte_corr = `$\\dfrac{${base**3}\\times ${base}}{${base**2}^${exp[0]}}`;
					texte_corr += `=\\dfrac{${base}^3\\times ${base}}{(${base}^2)^${exp[0]}}`;
					texte_corr += `=\\dfrac{${base}^{3+1}}{${base}^{2\\times${exp[0]}}}`;
					texte_corr += `=\\dfrac{${base}^{4}}{${base}^{${2*exp[0]}}}`;
					texte_corr += `=${base}^{4-${2*exp[0]}}`;
					texte_corr += `=${base}^{${3+1-2*exp[0]}}`;
					if ((3+1-2*exp[0])==0 || (3+1-2*exp[0])==1) {
						// on ne teste l'exposant que pour la sortie puisque l'exposant est évincé
						texte_corr += `=`+simpExp(base,3+1-2*exp[0]);
					};
					texte_corr += `$`;
					break;
																
			};
			

		
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}
	
}

function Puissances_de_dix() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Puissances de 10 : Le sens des règles de calculs"; 
	sortie_html ? this.consigne = "Écrire sous la forme $\\mathbf{10^n}$.":  this.consigne = "Écrire sous la forme $10^n$.";
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 3: this.spacing_corr = 2;
	this.nb_questions = 5;
	this.correction_detaillee_disponible = true;
	this.nb_cols_corr = 1;
	this.sup = 1;
	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FichePuissances-4N21.pdf","Aide mémoire sur les puissances (Sébastien Lozano)","Aide mémoire")
		
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [];
		if (this.sup==1){
			type_de_questions_disponibles = [1,2,3]; // produit, quotient et exponentiation de puissances de 10
		} else if (this.sup==2){
			type_de_questions_disponibles = [4,5,6,7,8,9,10,11]; // calculs première série
		} else if (this.sup==3){
			type_de_questions_disponibles = [1,2,3,4,5,6,7,8,9,10,11]; // calculs deuxième série
		};
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions);

		// pour pouvoir adapter les couleurs en cas de besoin
		let coul0 = 'red';
		let coul1 = 'blue';

		for (let i = 0, exp0, exp1, exp, coul_exp0, coul_exp1, lettre, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
			type_de_questions = liste_type_de_questions[i];


			exp0 = randint(1,9);
			exp1 = randint(1,9,[exp0]);
			exp = [exp0,exp1]; // on choisit deux exposants différents c'est mieux
			lettre = lettre_depuis_chiffre(i+1); // on utilise des lettres pour les calculs	
		
			switch (type_de_questions) {
				case 1 : // produit de puissances de même base
					texte =  `$${lettre}=10^${exp[0]}\\times 10^${exp[1]}$`;	

					texte_corr = `$${lettre}=10^${exp[0]}\\times 10^${exp[1]}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=${eclatePuissance(10,exp[0],coul0)} \\times ${eclatePuissance(10,exp[1],coul1)}$`;
					};
					texte_corr += `<br>`;
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul0}}{${exp[0]}}~\\color{black}{+}~\\color{${coul1}}{${exp[1]}}}$ facteurs tous égaux à $10$`;
					texte_corr += `<br>`;
					texte_corr += `$${lettre}=10^{${exp[0]}+${exp[1]}} = 10^{${exp[0]+exp[1]}}`;
					// attention la base est de type str alors que la fonction switch sur un type number					
					if (simpNotPuissance(10,exp[0]+exp[1]) != ` `) {
						texte_corr += `=${simpNotPuissance(10,exp[0]+exp[1])}`;  
					}
					texte_corr += `$`;
					texte_corr += `<br>`;
					break;			
				case 2 : // quotient de puissances de même base
					// Pour que la couleur de la 10 associée à l'exposant max soit toujours rouge.
					if (Math.max(exp[0],exp[1])==exp[0]) {
						coul_exp0 = coul0;
						coul_exp1 = coul1;
					} else {
						coul_exp0 = coul1;
						coul_exp1 = coul0;
					};
					
					texte =  `$${lettre}=\\dfrac{10^${exp[0]}}{10^${exp[1]}}$`;	

					texte_corr = `$${lettre}=\\dfrac{10^${exp[0]}}{10^${exp[1]}}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(10,exp[0],coul_exp0)}}{${eclatePuissance(10,exp[1],coul_exp1)}}$`;
					};
					texte_corr += `<br><br>`;				
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul1}}{${Math.min(exp[0],exp[1])}}}$ simplifications par $10$ possibles.`;
					if (this.correction_detaillee) {
						texte_corr += `<br><br>`;					
					};
					if ((exp[0]-exp[1])==0) {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{10}`,exp[0],coul_exp0)}}{${eclatePuissance(`\\cancel{10}`,exp[0],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=1`
					} else if (exp[0]-exp[1]<0) {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{10}`,exp[0],coul_exp0)}}{${eclatePuissance(`\\cancel{10}`,exp[0],coul_exp1)}\\times${eclatePuissance(10,exp[1]-exp[0],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=\\dfrac{1}{10^{${exp[1]}-${exp[0]}}}=\\dfrac{1}{10^{${exp[1]-exp[0]}}}`
						if (simpNotPuissance(10,exp[1]-exp[0]) != ` `) {
							texte_corr += `=\\dfrac{1}{${simpNotPuissance(10,exp[1]-exp[0])}}=${simpNotPuissance(10,exp[0]-exp[1])}`
						} else {
							texte_corr += `=10^{${exp[0]-exp[1]}}`
						}						
					} else {
						if (this.correction_detaillee) {
							texte_corr += `$${lettre}=\\dfrac{${eclatePuissance(`\\cancel{10}`,exp[1],coul_exp0)}\\times${eclatePuissance(10,exp[0]-exp[1],coul_exp0)}}{${eclatePuissance(`\\cancel{10}`,exp[1],coul_exp1)}}$`;
						};
						texte_corr += `<br><br>`;
						texte_corr += `$${lettre}=10^{${exp[0]}-${exp[1]}}=10^{${exp[0]-exp[1]}}`;
						if (simpNotPuissance(10,exp[0]-exp[1]) != ` `) {
							texte_corr += `=${simpNotPuissance(10,exp[0]-exp[1])}`;
						}; 						
					}; 
					texte_corr += `$`;
					texte_corr += `<br>`;			
					break;			
				case 3 : // exponentiation
					exp = [randint(2,4),randint(2,4)]; // on redéfinit les deux exposants pour ne pas avoir d'écritures trop longues et pour éviter 1
					texte =  `$${lettre}=(10^${exp[0]})^{${exp[1]}}$`;	
					
					texte_corr = `$${lettre}=(10^${exp[0]})^{${exp[1]}}$`;
					if (this.correction_detaillee) {
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=\\color{${coul0}}{\\underbrace{${eclatePuissance(`(10^${exp[0]})`,exp[1],coul0)}}_{${exp[1]}\\thickspace\\text{facteurs}}}$`;
						texte_corr += `<br>`;
						texte_corr += `$${lettre}=\\color{${coul0}}{\\underbrace{${eclatePuissance(`(\\color{${coul1}}{\\underbrace{${eclatePuissance(10,exp[0],coul1)}}_{${exp[0]}\\thickspace\\text{facteurs}}}\\color{${coul0}})`,exp[1],coul0)}}_{${exp[1]}\\times\\color{${coul1}}{${exp[0]}}\\thickspace\\color{black}{\\text{facteurs}}}}$`;
					};
					texte_corr += `<br>`;
					texte_corr += `Il y a donc $\\mathbf{\\color{${coul0}}{${exp[1]}}~\\color{black}{\\times}~\\color{${coul1}}{${exp[0]}}}$ facteurs tous égaux à $10$`;
					texte_corr += `<br>`;
					texte_corr += `$${lettre}=10^{${exp[0]}\\times${exp[1]}} = 10^{${exp[0]*exp[1]}}`;				
					if (simpNotPuissance(10,exp[0]*exp[1]) != ` `) {
					texte_corr += `= ${simpNotPuissance(10,exp[0]*exp[1])}`; 
					};
					texte_corr += `$`;
					texte_corr += `<br>`;
					break;
                case 4 :
                        exp = [randint(1,7,[1]),randint(1,7,[1]),randint(1,7,[1])]; // on a besoin de 3 exposants distincts
                        texte = `$\\dfrac{10^${exp[0]}\\times 100}{10^${exp[1]} \\times 10^${exp[2]}}$`;
                        texte_corr = `$\\dfrac{10^${exp[0]}\\times 100}{10^${exp[1]} \\times 10^${exp[2]}}`;
                        texte_corr += ` = \\dfrac{10^${exp[0]}\\times 10^{2}}{10^${exp[1]} \\times 10^${exp[2]}}`;
                        texte_corr += ` = \\dfrac{10^{${exp[0]}+2}}{10^{${exp[1]}+${exp[2]}}}`;
                        texte_corr += ` = \\dfrac{10^{${exp[0]+2}}}{10^{${exp[1]+exp[2]}}}`;
                        texte_corr += ` = 10^{${exp[0]+2}-${exp[1]+exp[2]}}`;					
                        texte_corr += ` = 10^{${exp[0]+2-exp[1]-exp[2]}}`;
                        if ((exp[0]+2-exp[1]-exp[2])==0 || (exp[0]+2-exp[1]-exp[2])==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
                            texte_corr += `=`+simpExp(10,exp[0]+2-exp[1]-exp[2]);
                        };
                        texte_corr += `$`;
                        break;
                case 5 :
    
                        exp = [randint(1,7,[1]),randint(1,7,[1])]; // on a besoin de 2 exposants distincts
                        texte = `$\\dfrac{10^${exp[0]}\\times 1000}{10^${exp[1]}}$`;
                        texte_corr = `$\\dfrac{10^${exp[0]}\\times 1000}{10^${exp[1]}}`;
                        texte_corr += ` = \\dfrac{10^${exp[0]}\\times 10^3}{10^${exp[1]}}`;
                        texte_corr += ` = \\dfrac{10^{${exp[0]}+3}}{10^${exp[1]}}`;
                        texte_corr += ` = \\dfrac{10^{${exp[0]+3}}}{10^${exp[1]}}`;
                        texte_corr += ` = 10^{${exp[0]+3}-${exp[1]}}`;
                        texte_corr += ` = 10^{${exp[0]+3-exp[1]}}`;
                        if ((exp[0]+3-exp[1])==0 || (exp[0]+3-exp[1])==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
                            texte_corr += `=`+simpExp(10,exp[0]+3-exp[1]);
                        };
                        texte_corr += `$`;
                        break;
                case 6 :

                        exp = [randint(1,7,[1]),randint(1,2)]; // on a besoin de 2 exposants distincts
                        // le second exposant ne peut valoir que 1 ou 2 la fonction testExp ne convient pas à l'affichage ici					
                        if (exp[1]==2) {
                            texte = `$\\dfrac{10\\times 10^${exp[0]}}{100^${exp[1]}}$`;
                            texte_corr = `$\\dfrac{10\\times 10^${exp[0]}}{100^${exp[1]}}`;
                            texte_corr += `=\\dfrac{10^{1+${exp[0]}}}{(10^2)^${exp[1]}}`;
                            texte_corr += `=\\dfrac{10^{1+${exp[0]}}}{10^{2 \\times ${exp[1]}}}`;
                            texte_corr += `=\\dfrac{10^{${1+exp[0]}}}{10^{${2*exp[1]}}}`;
                        } else {						
                            texte = `$\\dfrac{10\\times 10^${exp[0]}}{100}$`;
                            texte_corr = `$\\dfrac{10\\times 10^${exp[0]}}{100}`;
                            texte_corr += `=\\dfrac{10^{1+${exp[0]}}}{10^2}`;
                        };
                        texte_corr += `=10^{${1+exp[0]}-${2*exp[1]}}`;
                        texte_corr += `=10^{${1+exp[0]-2*exp[1]}}`;
                        if ((1+exp[0]-2*exp[1])==0 || (1+exp[0]-2*exp[1])==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
                            texte_corr += `=`+simpExp(10,1+exp[0]-2*exp[1]);
                        };
                        texte_corr += `$`;
                        break;
                case 7 :

                        exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
                        texte = `$\\dfrac{10\\times 10^${exp[0]}}{100\\times 100}$`;
                        texte_corr = `$\\dfrac{10\\times 10^${exp[0]}}{100\\times 100}`;
                        texte_corr += `=\\dfrac{10^{1+${exp[0]}}}{10^2\\times 10^2}`;
                        texte_corr += `=\\dfrac{10^{${1+exp[0]}}}{10^{2+2}}`;
                        texte_corr += `=\\dfrac{10^{${1+exp[0]}}}{10^{${2+2}}}`;
                        texte_corr += `=10^{${1+exp[0]}-${2+2}}`;					
                        texte_corr += `=10^{${1+exp[0]-2-2}}`;
                        if ((1+exp[0]-2-2)==0 || (1+exp[0]-2-2)==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant 1 est évincé
                            texte_corr += `=`+simpExp(10,1+exp[0]-2-2);
                        };
                        texte_corr += `$`;
                        break;
                case 8 :
                        exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
                        texte = `$\\dfrac{100^${exp[0]}}{10}$`;
                        texte_corr = `$\\dfrac{100^${exp[0]}}{10}`;
                        texte_corr += `=\\dfrac{(10^2)^${exp[0]}}{10}`;
                        texte_corr += `=\\dfrac{10^{2\\times ${exp[0]}}}{10}`;
                        texte_corr += `=\\dfrac{10^{${2*exp[0]}}}{10}`;
                        texte_corr += `=10^{${2*exp[0]}-1}`;					
                        texte_corr += `=10^{${2*exp[0]-1}}$`;
                        // Inutile de tester l'exposant final car il vaut au minimum 3
                        break;
                case 9 :
                        exp = [randint(1,3,[1])]; // on a besoin de 1 exposant
                        texte = `$\\dfrac{1000^${exp[0]}}{10}$`;
                        texte_corr = `$\\dfrac{1000^${exp[0]}}{10}`;
                        texte_corr += `=\\dfrac{(10^3)^${exp[0]}}{10}`;
                        texte_corr += `=\\dfrac{10^{3\\times ${exp[0]}}}{10}`;
                        texte_corr += `=\\dfrac{10^{${3*exp[0]}}}{10}`;
                        texte_corr += `=10^{${3*exp[0]}-1}`;
                        texte_corr += `=10^{${3*exp[0]-1}}$`;
                        // inutile de tester l'exposant final car il vaut au minimum 5 
                        break;
                case 10 :
                        exp = [randint(1,7,[1]),randint(1,7,[1]),randint(1,4,[1])]; // on a besoin de 3 exposants distincts
                        texte = `$\\dfrac{10^${exp[0]}\\times 10^${exp[1]}}{100^${exp[2]}}\\times 10$`;
                        texte_corr = `$\\dfrac{10^${exp[0]}\\times 10^${exp[1]}}{100^${exp[2]}}\\times 10`;
                        texte_corr += `=\\dfrac{10^{${exp[0]}+${exp[1]}}}{(10^2)^${exp[2]}}\\times 10`;
                        texte_corr += `=\\dfrac{10^{${exp[0]+exp[1]}}}{10^{2\\times ${exp[2]}}}\\times 10`;
                        texte_corr += `=\\dfrac{10^{${exp[0]+exp[1]}}}{10^{${2*exp[2]}}}\\times 10`;
                        texte_corr += `=\\dfrac{10^{${exp[0]+exp[1]}}\\times 10}{10^{${2*exp[2]}}}`;
                        texte_corr += `=\\dfrac{10^{${exp[0]+exp[1]}+1}}{10^{${2*exp[2]}}}`;
                        texte_corr += `=\\dfrac{10^{${exp[0]+exp[1]+1}}}{10^{${2*exp[2]}}}`;
                        texte_corr += `=10^{${exp[0]+exp[1]+1}-${2*exp[2]}}`;					
                        texte_corr += `=10^{${exp[0]+exp[1]+1-2*exp[2]}}`;
                        if ((exp[0]+exp[1]+1-2*exp[2])==0 || (exp[0]+exp[1]+1-2*exp[2])==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant est évincé
                            texte_corr += `=`+simpExp(10, exp[0]+exp[1]+1-2*exp[2]);
                        };
                        texte_corr += `$`;
                        break;
                case 11 :
                        exp = [randint(1,7,[1])]; // on a besoin de 1 exposant
                        texte = `$\\dfrac{1000\\times 10}{100^${exp[0]}}$`;
                        texte_corr = `$\\dfrac{1000\\times 10}{100^${exp[0]}}`;
                        texte_corr += `=\\dfrac{10^3\\times 10}{(10^2)^${exp[0]}}`;
                        texte_corr += `=\\dfrac{10^{3+1}}{10^{2\\times${exp[0]}}}`;
                        texte_corr += `=\\dfrac{10^{4}}{10^{${2*exp[0]}}}`;
                        texte_corr += `=10^{4-${2*exp[0]}}`;
                        texte_corr += `=10^{${3+1-2*exp[0]}}`;
                        if ((3+1-2*exp[0])==0 || (3+1-2*exp[0])==1) {
                            // on ne teste l'exposant que pour la sortie puisque l'exposant est évincé
                            texte_corr += `=`+simpExp(10,3+1-2*exp[0]);
                        };
                        texte_corr += `$`;
                        break;														
			};
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++
		}		
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Règle à travailler',3,"1 : Calculs de base\n2 : Calculs plus complexes\n3 : Mélange"]; 
}


/**
 * problèmes de grandeurs composées
 * @Auteur Jean-Claude Lhote
 */
function problemes_grandeurs_composees(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Résoudre des problèmes de grandeurs composées et de conversion d'unités complexes";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 3 : this.spacing = 1.5; 
	sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;
	this.sup=false;
	this.sup2=1;
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		// let liste_index_disponibles=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
		// let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions);
		let grandeurs = []
		if (!this.sup) { // Si aucune grandeur n'est saisie
			grandeurs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
		}
		else {
			if (typeof(this.sup)=='number'){ // Si c'est un nombre c'est qu'il y a qu'une seule grandeur
				grandeurs[0] = this.sup
				this.nb_questions=1
			} else {
				grandeurs = this.sup.split(";");// Sinon on créé un tableau à partir des valeurs séparées par des ;
				this.nb_questions=grandeurs.length
			}	
		}

		let liste_index=combinaison_listes(grandeurs,this.nb_questions);
		let monchoix;
		let type_aide=1;
		if (!sortie_html) type_aide=0;
		let solutes=[[`sel`,`d'eau`,300],[`sucre`,`d'eau`,2000],[`dioxyde de carbone`,`d'eau`,3],[`bicarbonate de sodium`,`d'eau`,9],[`carbonate de sodium`,`d'eau`,300]] //soluté, masse maximale en gramme pour saturer 1 L de solvant
		let materiaux=[[`Paladium`,12000],[`acier`,7800],[`fonte`,7100],[`aluminium`,2700],[`argent`,10500],[`bronze`,8800],[`cuivre`,8960],[`fer`,7860],[`lithium`,530],[`mercure`,13545],[`nickel`,8900],[`or`,19300],[`platine`,21450],[`titane`,4500],[`zinc`,7150]]
		let villes=[[`Nice`,342637,71.9],[`Montpellier`,281613,56.9],[`Rennes`,216268,50.4],[`Dijon`,155090,40.4],[`Orléans`,114782,27.5],[`Clermont-Ferrand`,142686,42.7],[`Nantes`,306694,65.2],[`Paris`,2190327,105.4],[`Lyon`,515695,47.9],[`Marseille`,862211,240.6],[`Bordeaux`,252040,49.4],[`Nancy`,104592,15],[`Toulouse`,475438,118.300],[`Lille`,232440,34.800],[`Strasbourg`,279284,78.3]] //[Ville, population, superfice en ha, année du recensement]
		let locations=[[`un vélo`,1.5,2,8],[`un canoé`,10,2,4],[`des rollers`,7,2,5],[`un char à voile`,12,2,4]]
		let cours=[[`de piano`,20],[`de maths`,25],[`yoga`,5],[`dessin`,12],[`voile`,15]]
		let fruits=[[`pêches`,4,10,30],[`Noix`,5.4,4,13],[`cerises`,5.6,11,20],[`pommes`,2.2,20,40],[`framboises`,15,1,5],[`fraises`,7.5,5,10],[`citrons`,1.5,15,30],[`bananes`,1.5,15,25]]
		let appareils=[[`radiateur`,2000,20],[`téléviseur`,350,12],[`four électrique`,2500,4],[`ordinateur`,450,8]] // [appareil,puissance,durée maxi de fonctionnement]
		let liquides=[[`de lait entier`,1.032],[`d'essence`,0.755],[`de diesel`,0.83],[`d'huile`,0.910],[`de bière`,0.9],[`de sable`,1.6]] // [nom,densité]
		let rivieres=[[`Marne`,`Gournay-sur-Marne`,110,550,`avril 1983`,`la `,`de la `],[`Seine`,`Alfortville`,218,2100,`janvier 1982`,`la `,`de la `],[`Oise`,`Pont-Sainte-Maxence`,109,665,`février 1995`,`l'`,`de l'`],[`Loire`,`Saint-Nazaire`,931,5350,`décembre 1999`,`la `,`de la`],[`Rhin`,`Strasbourg`,951,3310,`juin 2016`,`le `,`du `],[`Rhône`,`Beaucaire`,1690,11500,`décembre 2003`,`le `,`du `],[`Meuse`,`Chooz`,144,1610,`janvier 1995`,`la `,`de la `]]
						// [Nom de rivière,Lieu de passage,débit moyen annuel, débitmax, date de la crue, article défini, article partitif]
		let vitesses=[[`sur un vélo`,4,12,8],[`dans un train`,50,100,5],[`dans une voiture`,15,30,5],[`en avion`,150,250,12],[`à pied`,2,4,5]] // [moyen de transport, vitesse min,vitesse max en m/s,durée max en h] 
		for (let i = 0,j,index,index1,index2,duree,quidam,nbheures,nbminutes,nbsecondes,vitesse_moy,distance,masse,masse2,masse3,prix1,prix2,prix3,texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			switch (parseInt(liste_index[i])) {
				case 1 : // problème de consommation éléctrique
					index=randint(0,3);
					let appareil=appareils[index][0];
					let puissance=appareils[index][1];
					let duree_max=appareils[index][2];
					let nbquartsdheures=randint(0,3);
					nbheures=randint(duree_max/4,duree_max,[1]);
					duree=nbheures+nbquartsdheures*0.25;
					let prixkwh=calcul(randint(0,5)/100+0.14);
					texte =`L'étiquette apposée au dos d'un ${appareil} indique une puissance de ${puissance} Watts. On le fait fonctionner pendant ${Math.floor(duree)} heures `;
					if (nbquartsdheures!=0) texte +=`et ${nbquartsdheures*15} minutes`;
					texte+=`.<br>Le prix d'un kWh est de ${tex_nombrec(prixkwh)} €.<br>`
					if (sortie_html) { // les boutons d'aide uniquement pour la version html
							
				}
					texte+=num_alpha(0)+` Exprimer en kWh l' `+ katex_Popup2(numero_de_l_exercice+i+1,type_aide,"énergie",`Définition : énergie (grandeur physique)`,`C’est le produit de la puissance électrique (Watt) par le temps (s) et se mesure en Joule (J).<br>1 J=1 W × 1 s.<br>Cependant pour mesurer des énergies plus importantes on utilise plutôt le kiloWattheure (kWh).<br>1 kWh=1000 W × 1 h.`)+` consommée.<br>`;
					texte+=num_alpha(1)+` Calculer la dépense correspondante.`
					texte_corr = num_alpha(0)+` Un ${appareil} d'une puissance de ${puissance} Watts qui fonctionne pendant ${Math.floor(duree)} heures `;
					if (nbquartsdheures!=0) texte_corr +=`et ${nbquartsdheures*15} minutes`;
					texte_corr+=` consomme : <br>`;
					if (nbquartsdheures!=0) texte_corr +=`$${nbheures}\\text{ h } ${nbquartsdheures*15} = ${nbheures}\\text{ h} + ${tex_fraction_reduite(nbquartsdheures,4)}\\text{ h} =${tex_nombre(nbheures+nbquartsdheures*0.25)}\\text{ h}$<br>`;
					texte_corr+=`$${puissance}\\text{ W}\\times${tex_nombre(duree)}\\text{ h}=${tex_nombre(puissance/1000)}\\text{ kW}\\times${tex_nombre(duree)}\\text{ h}=${tex_nombre(calcul(puissance*duree*0.001))}\\text{ kWh}.$<br>`
					texte_corr+=num_alpha(1)+` Le prix de cette énergie consommée est : $${tex_nombre(prixkwh)}$ €$\\text{ /kWh} \\times${tex_nombre(calcul(puissance*duree*0.001))}\\text{ kWh}`;
					if (!(prixkwh*puissance*duree/10==Math.round(prixkwh*puissance*duree/10))) texte_corr+= `\\approx${arrondi_virgule(prixkwh*puissance/1000*duree,2)}$ €`
					else texte_corr+= `=${arrondi_virgule(prixkwh*puissance/1000*duree,2)}$ €`
					break;
				case 2 : // problèmes de volumes
					index1=randint(0,1)
					switch (index1) {
						case 0 : // Volume d'une piscine
							let h1=180+randint(0,10)*10;
							let h2=80+randint(0,4)*10;
							let l=5+randint(0,5);
							let L=l*2+randint(0,4)*2;
							let deltat=randint(2,5);
							texte = `Une piscine a la forme d'un prisme droit. La profondeur à son extrémité nord est de ${h1} cm et la profondeur à son extrémité sud est de ${h2} cm.<br>`
							texte +=`D\'une extrémité à l\'autre la pente au fond de la piscine est régulière.<br>La largeur de la piscine (Est-Ouest) est de ${l} m et sa longueur (Nord-Sud) est de ${L} m.<br>`
							texte += num_alpha(0)+` Calculer le `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,"volume",`Définition : volume (grandeur physique)`,`C’est le produit de trois longueurs ou le produit d'une aire et d'une longueur.<br>L'unité de mesure du volume est le mètre cube ($\\text{m}^3$) mais on peut aussi rencontrer le litre (L) avec comme correspondance $\\text{1dm}^3=\\text{1L}$`)+` d'eau en m³ contenu dans cette piscine quand elle est pleine.<br>`
							texte += num_alpha(1)+` Sachant que pour élever la température d'un litre d'eau de 1 degré, il faut une énergie de 1,162 Wattheure.<br> Quelle est l'énergie consommée en kWh pour augmenter de ${deltat} degrés ?<br>`							
							texte_corr = num_alpha(0)+` La base de ce prisme droit est un trapèze rectangle de petite base ${h2} cm, de grande base ${h1} cm et de hauteur ${L} m.<br>`
							texte_corr += `$\\mathcal{A}=\\dfrac{\\left(${h1}\\text{ cm}+${h2}\\text{ cm}\\right)}{2}\\times${L}\\text{ m}=\\dfrac{\\left(${arrondi_virgule(h1/100)}\\text{ m}+${arrondi_virgule(h2/100)}\\text{ m}\\right)}{2}\\times${L}\\text{ m}`
							texte_corr += `=\\dfrac{${arrondi_virgule((h1+h2)/100)}\\text{ m}}{2}\\times${L}\\text{ m}=${arrondi_virgule((h1+h2)/200)}\\text{ m}\\times${L}\\text{ m}=${arrondi_virgule((h1+h2)/200*L)}\\text{ m²}$<br>`
							texte_corr += `Le volume de ce prisme et donc par extension le volume d'eau conteu dans la piscine est :<br>$\\mathcal{A}\\times\\mathcal{h}=${arrondi_virgule((h1+h2)/200*L)}\\text{ m²}\\times${l}\\text{ m}=${arrondi_virgule((h1+h2)/200*L*l)}\\text{ m³}$.<br>`
							texte_corr += num_alpha(1)+` L'énergie consomée pour élever la température de l'eau de cette piscine de ${deltat} degrés est :<br>`
							texte_corr += `$${arrondi_virgule((h1+h2)/200*L*l)}\\text{ m³}=${tex_nombre((h1+h2)*L*l*5)}\\text{ dm³}=${tex_nombre((h1+h2)*L*l*5)}\\text{ L}$<br>`
							texte_corr += `$\\mathcal{E}=${tex_nombre((h1+h2)*L*l*5)}\\text{ L}\\times${deltat}\\text{ °C}\\times 1,162 \\dfrac{\\text{Wh}}{\\text{°C}\\times\\text{L}}=${tex_nombre(arrondi((h1+h2)*L*l*5*deltat*1.162,3))}\\text{ Wh}=${tex_nombre(arrondi((h1+h2)*L*l/200*deltat*1.162,7))}\\text{ kWh}$<br>`
							break;
						case 1 : // Volume d'un tonneau cylindrique
						index2=randint(0,5);
						let r=randint(10,15)*2;
						let h=randint(0,10)+r*4;
						texte = `Un tonneau cylindrique a un rayon de ${r} cm et une hauteur de ${h} cm.<br>`;
						texte +=num_alpha(0)+` Calculer le `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,"volume",`Définition : volume (grandeur physique)`,`C’est le produit de trois longueurs ou le produit d'une aire et d'une longueur.<br>L'unité de mesure du volume est le mètre cube ($\\text{m}^3$) mais on peut aussi rencontrer le litre (L) avec comme correspondance $\\text{1dm}^3=\\text{1L}$`)+` en dm³ à 0,1 près de ce tonneau.<br>`
						texte +=num_alpha(1)+` Si on le remplit ${liquides[index2][0]} (dont la `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,"densité",`Définition : densité (grandeur physique)`,`La densité d'une substance est égale à la masse volumique de la substance divisée par la masse volumique du corps de référence à la même température.<br>Pour les liquides et les solides, l'eau est utilisée comme référence (sa masse volumique est de 1kg/dm$^3$), pour les gaz, la mesure s'effectue par rapport à l'air.<br>Donc pour les liquides, la densité est égale à la masse volumique exprimée en kg/dm$^3$.`)+` est de ${tex_nombrec(liquides[index2][1])}), quelle masse ${liquides[index2][0]} en kg contiendra-t-il au gramme près ?<br>`
						texte_corr=num_alpha(0)+` Le volume d'un cylindre est donné par la formule $\\mathcal{A}\\text{ire de base}\\times\\mathcal{h}$.<br> Ici la base est un disque de rayon ${r} cm.<br>`
						texte_corr+=`$\\mathcal{A}\\text{ire de base}\\times\\mathcal{h}=\\pi\\times${r}^{2}\\text{ cm}^2\\times${h}\\text{ cm}=${r*r*h}\\pi\\text{ cm}^3\\approx${tex_nombre(arrondi(r*r*h*Math.PI,1))}\\text{ cm}^3\\approx${tex_nombre(arrondi(r*r*h*Math.PI/1000,1))}\\text{ dm}^3$<br>`
						texte_corr+=num_alpha(1)+` La masse de lait contenue dans ce tonneau est :<br>`
						texte_corr+=`$${tex_nombre(arrondi(r*r*h*Math.PI/1000,1))}\\text{ dm}^3\\times ${tex_nombrec(liquides[index2][1])} \\times 1 \\dfrac{kg}{dm}^3\\approx${tex_nombre(arrondi(r*r*h*Math.PI/1000*liquides[index2][1],3))}\\text{ kg}$`
						break

					}
					break;
				case 3 :  // Problème de quantité de mouvement et d'énergie cinétique
					quidam=prenom()
					index1=randint(0,4)
					masse=randint(50,80)
					vitesse_moy=randint(vitesses[index1][1],vitesses[index1][2]) // vitesse choisie pour l'exo
					texte =`${quidam} se déplace ${vitesses[index1][0]} à la `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,`vitesse`,`Définition : Vitesse (grandeur physique)`,`La vitesse est le quotient de la distance parcourue par le temps de parcours.<br>L'unité officielle est le mètre par seconde ($\\text{m/s}$  ou  $\\text{m.s}^{-1}$) mais on utilise souvent le kilomètre par heure ($\\text{km/h}$  ou  $\\text{km.h}^{-1}$)`)+` de ${tex_nombrec(vitesse_moy)} m/s.<br>`
					texte +=`Il pèse ${masse} kg.<br>`
					texte+=num_alpha(0)+` Calculer sa `+katex_Popup2(numero_de_l_exercice+i*3+1,type_aide,"quantité de mouvement",`Définition : quantité de mouvement (grandeur physique)`,`C’est le produit de la masse d'un corps par sa vitesse.<br>L'unité de mesure de la quantité de mouvement est le ($\\text{kg.m.s}^{-1}$)`) +` en $\\text{kg.m.s}^{-1}$.<br>`
					texte+=num_alpha(1)+` En déduire son `+katex_Popup2(numero_de_l_exercice+i*3+2,type_aide,"énergie cinétique",`Définition : énergie cinétique (grandeur physique)`,`L'énergie cinétique d'un corps de masse $m$ (en kg) assimilé à un point matériel se déplaçant à la vitesse $v$ (en m/s) est donné par la formule $E=\\dfrac{1}{2}\\times m\\times v^2$.<br>L'unité de mesure de l'énergie cinétique est le Joule (J).<br>$1J=1\\text{ kg.m}^2\\text{s}^{-2}$.`) +` en Joules.`
					texte_corr = num_alpha(0)+` La quantité de mouvement de ${quidam} est : $${masse} \\text{ kg}\\times ${vitesse_moy}\\text{ m/s}=${tex_nombrec(masse*vitesse_moy)}\\text{ kg.m.s}^{-1}$<br>`
					texte_corr +=num_alpha(1)+` L'énergie cinétique de ${quidam} est : $\\dfrac{1}{2}\\times ${masse} \\text{ kg}\\times (${vitesse_moy}\\text{ m/s})^2=\\dfrac{${masse}\\times${vitesse_moy}^2}{2}\\text{ J}=${tex_nombrec(masse*vitesse_moy**2/2)}\\text{ J}$`
					break;
				case 4 : // problème de moment et de couple de forces qui s'annulent.
					quidam=prenom()
					index=randint(60,90) //masse du père (recyclage de variable)
					masse=randint(20,30) //masse de l'enfant
					distance=arrondi(randint(25,35)/10)
					texte = `${quidam} qui pèse ${masse} kg se trouve sur le siège d'une balançoire "`+ katex_Popup2(numero_de_l_exercice+i*3,2,`trébuchet`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/balancoire-a-bascule-trebuchet-baskul-768x768.jpg`) +`" dans un jardin d'enfant. Le siège est situé à ${tex_nombre(distance)} m du pivot central de la balançoire (bras de levier).<br>`
					texte+= num_alpha(0)+` Calculer le `+katex_Popup2(numero_de_l_exercice+i*3+1,type_aide,`moment`,`Définition : momnent (grandeur physique)`,`Le moment d'une force d'intensité F(en Newton ou kg.m.s$^{-2}$) en un point M par rapport à un pivot P est le produit de F par la distance PM (appelée bras de levier) exprimée en mètres (lorsque cette force s'exerce perpendiculairement au bras de levier). Le moment est l'energie permettant de faire tourner l'objet autour du pivot.<br>L'unité de mesure du moment est le Joule (J).<br>$1J=1\\text{ kg.m}^2\\text{s}^{-2}$.`) +` du `+katex_Popup2(numero_de_l_exercice+i*3+2,type_aide,`poids`,`Définition : Poids`,`Le poids est le produit de la masse d'un objet par l'accélération de la pesanteur terrestre ($9,81\\text{ m.s}^{-2}$).<br>L'unité du poids est le Newton (N) : 1N=1kg.m.s$^{-2}$`)+` de ${quidam} sur son siège par rapport au pivot central du trébuchet en Joules (on admettra que le bras de levier est horizontal).<br>`
					texte+= num_alpha(1)+` Le père de ${quidam} vient s'installer de l'autre côté du pivot central. Il pèse ${index} kg et s'installe de façon à ce que son poids permette d'équilibrer la balançoire à l'horizontale. Quelle doit être la longueur du bras de levier de son côté ( à quelle distance du pivot est-il assis ) ?<br>`
					texte_corr=num_alpha(0)+` Le moment du poids de ${quidam} appliqué sur son siège par rapport au pivot central du trébuchet est :<br>`
					index1=arrondi(masse*9.81*distance) //pour éviter d'avoir trop de variable, je recycle
					texte_corr += `$${masse}\\text{ kg} \\times 9,81 \\text{m.s}^{-2} \\times ${tex_nombre(distance)} \\text{ m} = ${tex_nombre(index1)}\\text{ kg.m}^2\\text{.s}^{-2}=${tex_nombre(index1)}\\text{ J}$<br>`
					texte_corr +=num_alpha(1)+` Afin d'équilibrer le trébuchet, le père de ${quidam} doit se placer de façon que le moment de son poids sur son point d'assise par rapport au pivot central du trébuchet soit égal à celui de ${quidam}, on obtient l'équation suivante où $${mise_en_evidence(`d`,`black`)}$ représente sa distance par rapport au pivot central :<br>`
					texte_corr+=`$ ${index}\\text{ kg}\\times 9,81 \\text{m.s}^{-2} \\times ${mise_en_evidence(`d`,`black`)} \\text{ m}=${tex_nombre(index1)}\\text{ J}$<br>`
					texte_corr +=`D'où $${mise_en_evidence(`d`,`black`)}\\text{ m} = \\dfrac{${tex_nombre(index1)}\\text{ J}}{${index}\\text{ kg}\\times 9,81 \\text{m.s}^{-2}}\\approx${tex_nombrec(arrondi(index1/(9.81*index)))}\\text{ m}.$`
					break;
				case 5 : //problème de trafic de coyageurs.
					let d1=randint(3,6)
					let d2=randint(3,6,[d1])
					let k=randint(5,8)
					let n1=k*d2
					let n2=k*d1
					texte = num_alpha(0)+` Un bus de ville transporte en moyenne ${n1} personnes à la fois.<br> La longueur moyenne de déplacement est de ${d1} km.<br> Calculer le `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,`trafic`,`Définition : Trafic de voyageurs`,`Le trafic de voyageurs est le produit du nombre de voyageurs par la distance parcourue. L'unité est le voyageur.km qui correspond au déplacement d'un voyageur sur 1km`)+` moyen de voyageurs en voyageurs.km.<br> `
					texte += num_alpha(1)+` Un autre bus de ville transporte en moyenne ${n2} personnes à la fois.<br> La longueur moyenne de déplacement est de ${d2} km.<br> Montrer que le trafic de voyageur est le même qu'à la question `+num_alpha(0)
					texte_corr =num_alpha(0)+ ` Le trafic moyen de ce bus de ville est : $${n1}\\text{voyageurs}\\times${d1}\\text{km}=${n1*d1}\\text{voyageurs.km}$.<br>`
					texte_corr +=num_alpha(1)+ ` Le trafic moyen de ce bus de ville est : $${n2}\\text{voyageurs}\\times${d2}\\text{km}=${n2*d2}\\text{voyageurs.km}$, donc ces deux bus ont le même trafic.`
					break;
				case 6 : //problème de puissance électrique.
					index=randint(0,3)
					index1=randint(0,3,[index])
					let I1=arrondi(appareils[index][1]/230,0)+1
					texte = num_alpha(0)+` Un ${appareils[index][0]} est protégé par un fusible de ${I1} ampères, quelle est la `+katex_Popup2(numero_de_l_exercice+i*3+1,type_aide,`puissance`,`Définition : Puissance (grandeur physique)`,`C’est le produit de la force électromotrice (tension) exprimée en Volt (V) par l'intensité du courant électrique exprimée en ampères (A).<br>L'unité de mesure de la puissance est le Watt (W)`)+` maximale de cet appareil si il fonctionne sur le secteur ?<br>`
					texte += num_alpha(1)+` Un ${appareils[index1][0]} fonctionne à une puissance maximum de ${appareils[index1][1]} W.<br>Quel est l'ampérage minimum nécessaire pour le fusible qui protégera ce ${appareils[index][0]} des court-ciruits ?<br>`
					texte_corr =num_alpha(0)+ ` La tension du secteur étant de 230V, la puissance maximale de ce ${appareils[index][0]} est de :<br>`
					texte_corr+=`$230\\text{ V}\\times${I1}\\text{ A}=${230*I1}\\text{ W}$<br>`
					let I2=Math.floor(appareils[index1][1]/230)+1;
					texte_corr += num_alpha(1)+` Pour fonctionner à la puissance maximum, cet appareil a besoin d'un courant d'une intensité de :<br>`
					texte_corr += `$\\dfrac{${appareils[index1][1]}\\text{ W}}{230 \\text{ V}} \\approx ${tex_nombrec(arrondi(appareils[index1][1]/230))}\\text{ A}$.<br>`
					texte_corr += `Le fusible nécessaire pour protéger cet appareil des courts-circuits devra avoir une intensité de rupture minimum de ${I2} ampères.`
					break;
				case 7 : // problème de vitesses
					index2=randint(0,2)
					quidam=prenom() //prenom choisi
					switch (index2) {	
						case 0 : // problème de déplacements
							index1=randint(0,4)
							vitesse_moy=randint(vitesses[index1][1],vitesses[index1][2]) // vitesse choisie pour l'exo
							distance=Math.round(vitesse_moy*3.6*vitesses[index1][3]*randint(5,20)/10) //distance choisie pour question b
							duree = randint(2,vitesses[index1][3])
							texte =`${quidam} se déplace ${vitesses[index1][0]} à la `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,`vitesse`,`Définition : Vitesse (grandeur physique)`,`La vitesse est le quotient de la distance parcourue par le temps de parcours.<br>L'unité officielle est le mètre par seconde ($\\text{m/s}$  ou  $\\text{m.s}^{-1}$) mais on utilise souvent le kilomètre par heure ($\\text{km/h}$  ou  $\\text{km.h}^{-1}$)`)+` de ${tex_nombrec(vitesse_moy)} m/s.<br>`
							texte +=num_alpha(0)+` En se déplaçant à cette vitesse pendant ${duree} h, quelle est la distance parcourue par ${quidam} en km ?<br>`
							texte+= num_alpha(1)+` Si ${quidam} veut parcourir ${nombre_avec_espace(distance)} km à cette vitesse, combien de temps durera le trajet ? Donner le résultat en heures, minutes et secondes.`
							texte_corr = num_alpha(0)+` La distance parcourue par ${quidam} ${vitesses[index1][0]} en ${duree} h à la vitesse de ${tex_nombrec(vitesse_moy)} m/s est :<br>`
							texte_corr +=`$${tex_nombrec(vitesse_moy)}\\text{ m/s}\\times${duree}\\text{ h}=\\dfrac{${tex_nombrec(vitesse_moy)}\\text{ m}}{1 \\text{ s}}\\times ${duree}\\times ${tex_nombre(3600)}\\text{ s}`
							texte_corr +=`=${tex_nombrec(vitesse_moy*3600*duree)}\\text{ m}=${tex_nombrec(vitesse_moy*3.6*duree)}\\text{ km}$<br>`
							texte_corr +=num_alpha(1)+` Pour parcourir ${nombre_avec_espace(distance)} km à cette vitesse, ${quidam} mettra :<br>`
							texte_corr +=` Partons de la formule $\\mathcal{V}=\\dfrac{\\mathcal{d}}{\\mathcal{t}}$ et remplaçons : $\\dfrac{${vitesse_moy}\\text{ m}}{1 \\text{ s}}=\\dfrac{${tex_nombre(distance)}\\text{ km}}{\\mathcal{t}\\text{ h}}$<br>`
							texte_corr +=`Rendons les unités homogènes : $\\dfrac{${vitesse_moy}\\text{ m}}{1 \\text{ s}}=\\dfrac{${tex_nombrec(distance*1000)}\\text{ m}}{\\mathcal{t}\\text{ h}\\times ${tex_nombre(3600)}\\text{ s/h}}$<br>`
							texte_corr +=`Appliquons l'égalité des produits en croix : ${produits_en_croix([[`${vitesse_moy}\\text{ m}`,`1 \\text{ s}`],[`${tex_nombrec(distance*1000)}\\text{ m}`,`\\mathcal{t}\\times ${tex_nombre(3600)}\\text{ s/h}`]])}<br>`
							texte_corr +=`D'où : $\\mathcal{t}=\\dfrac{1 \\text{ s}\\times${tex_nombrec(distance*1000)}\\text{ m}}{${vitesse_moy}\\text{ m}\\times${tex_nombre(3600)}\\text{ s}}$ (t est le nombre décimal d'heures : les mètres et les secondes disparaissent car elles sont présentes au numérateur et au dénominateur.)<br>`
							texte_corr +=`Soit : $\\mathcal{t}\\approx${tex_nombrec(distance*1000/vitesse_moy/3600)}\\text{ h}\\approx${tex_nombrec(arrondi(distance*1000/vitesse_moy,0))}\\text{ s}\\approx`
							nbheures = Math.floor(distance*1000/vitesse_moy/3600); //conversion en h min s
							nbminutes = Math.floor((Math.floor(distance*1000/vitesse_moy)%3600)/60)
							nbsecondes = arrondi(distance*1000/vitesse_moy-3600*nbheures-60*nbminutes,0)
							texte_corr+=`(${tex_nombre(nbheures)}\\times ${tex_nombre(3600)}+${tex_nombre(nbminutes)}\\times 60+${tex_nombre(nbsecondes)})\\text{ s}\\approx`
							if (nbheures!=0) texte_corr+=`${tex_nombre(nbheures)}\\text{ h }`//affichage de la réponse
							if (nbminutes!=0) texte_corr+=`${tex_nombre(nbminutes)}\\text{ min }`
							texte_corr+=`${tex_nombre(nbsecondes)}\\text{ s}$`
							break
						case 1 : // l'orage et la vitesse du son
							duree=randint(2,15) //durée pour question a)
							distance=randint(5,15,[duree])*340 //distance de l'orage en m pour question b
							texte=`Le son se déplace dans l'air à la `+katex_Popup2(numero_de_l_exercice+i*3,type_aide,`vitesse`,`Définition : Vitesse (grandeur physique)`,`La vitesse est le quotient de la distance parcourue par le temps de parcours.<br>L'unité officielle est le mètre par seconde ($\\text{m/s}$  ou  $\\text{m.s}^{-1}$) mais on utilise souvent le kilomètre par heure ($\\text{km/h}$  ou  $\\text{km.h}^{-1}$)`)+` de 340 m/s.<br>`
							texte+=num_alpha(0)+` ${quidam} voit un éclair dans le ciel et compte dans sa tête ${duree} secondes avant d'entendre le tonnerre.<br>`
							texte+=`Quelle est la distance à laquelle l'éclair est tombé ?<br>`
							texte+=num_alpha(1)+` L'éclair suivant tombe sur le paratonnerre situé sur le clocher de l'église du village voisin.<br>`
							texte+=`${quidam} sait que le clocher est situé à ${distance} m de sa position. Combien de temps se passe-t-il avant que ${quidam} n'entende le tonnerre ?`
							texte_corr=num_alpha(0)+` Calculons la distance à laquelle le premier éclair est tombé en utilisant la vitesse du son (on considère que la vitesse de la lumière est telle que l'éclair est visible instantanément) :<br>`
							texte_corr+=`$340\\text{ m/s}=\\dfrac{340\\text{ m}}{1\\text{ s}}=\\dfrac{${mise_en_evidence(duree)}\\times 340\\text{ m}}{${mise_en_evidence(duree)}\\times 1\\text{ s}}=\\dfrac{${tex_nombrec(duree*340)}}{${duree}\\text{ s}}$<br>`
							texte_corr+=`La distance à laquelle l'éclair est tombé est donc de ${nombre_avec_espace(duree*340)} m.<br>`
							texte_corr+=num_alpha(1)+` Avec les données de l'énoncé nous pouvons écrire :<br>`
							texte_corr+=`$\\dfrac{340\\text{ m}}{1\\text{ s}}=\\dfrac{${tex_nombre(distance)}\\text{ m}}{\\mathcal{T}\\text{ s}}$<br>`
							texte_corr+=`Soit grâce à l'égalité des produits en croix : $\\mathcal{T}\\text{ s}=${quatrieme_proportionnelle(`340 \\text{ m}`,`1 \\text{ s}`,distance+`\\text{ m}`,0)}=${tex_nombrec(arrondi(distance/340))}\\text{ s}$<br>`
							texte_corr+=`${quidam} entendra le tonnerre ${tex_nombrec(arrondi(distance/340))} secondes après avoir vu l'éclair tomber sur le clocher.`
							break
						case 2 : // Le coureur
							vitesse_moy=randint(vitesses[4][1]*5,vitesses[4][2]*5)/5
							distance=randint(5,12)
							texte=`${quidam} vient de courir ${distance} kilomètres. Sa montre connectée a enregistré l'`+katex_Popup2(numero_de_l_exercice+i,type_aide,`allure`,`Définition : allure (grandeur physique)`,`L'allure est le temps exprimé en h,min,s pour parcourir un kilomètre.<br>L'unité est alors h/km ou min/km`)+`pour chaque kilomètre parcouru :`
							let allures=[]
							for (let j=0;j<distance;j++) {
								duree=Math.round(1000/(vitesse_moy*(1+randint(-10,10)*0.01)))
								nbsecondes=duree%60
								nbminutes=(duree-nbsecondes)/60
								allures.push([nbminutes,nbsecondes])
							}
							texte+='$\\def\\arraystretch{1.5}\\begin{array}{|c'; // On construit le tableau des allures
							texte+='|c';
							for (let j=0;j<allures.length;j++) texte+='|c';
							texte+='}\\hline  \\text{kilomètre}';
							for (let j=0;j<allures.length;j++)  texte+='&'+tex_nombre(j+1);
							texte+='\\\\\\hline \\text{allure en minutes et secondes (par km)}';
							for (j=0;j<allures.length;j++) 	texte+='&'+allures[j][0]+`\\text{ min }`+allures[j][1]+`\\text{ s}`;
							texte+='\\\\\\hline\\end{array}$<br>';
							texte+=num_alpha(0)+` Calculer la durée totale de la course de ${quidam}.<br>`
							texte+=num_alpha(1)+` En déduire sa	`+ katex_Popup2(numero_de_l_exercice+i,type_aide,`vitesse`,`Définition : Vitesse (grandeur physique)`,`La vitesse est le quotient de la distance parcourue par le temps de parcours.<br>L'unité officielle est le mètre par seconde ($\\text{m/s}$  ou  $\\text{m.s}^{-1}$) mais on utilise souvent le kilomètre par heure ($\\text{km/h}$  ou  $\\text{km.h}^{-1}$)`)+` moyenne en km/h sur le trajet total.<br>`
							texte+=num_alpha(2)+` ${quidam} s'entraîne pour un semi-marathon (21,0975 km). En courant à la même vitesse, combien de temps durerait son semi-marathon ?`
							texte_corr=num_alpha(0)+` La durée totale de la course de ${quidam} est :<br>`
							allures.push([0,0])
							duree=0

							for (let j=0;j<distance;j++) {
								allures[distance][1]+=allures[j][1]
								if (allures[distance][1]>59) {
									allures[distance][0]+=1
									allures[distance][1]=allures[distance][1]%60
								}
								allures[distance][0]+=allures[j][0]
								if (allures[distance][0]>59) {
									duree++
									allures[distance][0]=allures[distance][0]%60
								}
							}
							for (let j=0;j<distance-1;j++) {
							texte_corr+=`${allures[j][0]} min ${allures[j][1]} s + `
							}
							texte_corr+=`${allures[distance-1][0]} min ${allures[distance-1][1]} s = `
							if (duree!=0) texte_corr+=`${duree} h `
							if (allures[distance][0]!=0) texte_corr+=`${allures[distance][0]} min `
							if (allures[distance][1]!=0) texte_corr+=`${allures[distance][1]} s.`
							texte_corr+=`<br>`+num_alpha(1)+` ${quidam} a effectué ${distance} km en `
							if (duree!=0) texte_corr+=`${duree} h `
							if (allures[distance][0]!=0) texte_corr+=`${allures[distance][0]} min `
							if (allures[distance][1]!=0) texte_corr+=`${allures[distance][1]} s<br>Soit `
							if (duree!=0) texte_corr+=`${duree} h `
							if (allures[distance][0]!=0) texte_corr+=` $\\dfrac{${allures[distance][0]}}{60}$ h `
							if (allures[distance][1]!=0) texte_corr+=` $\\dfrac{${allures[distance][1]}}{${tex_nombre(3600)}}$ h = `
							texte_corr+=`$\\dfrac{`
							if (duree!=0) texte_corr+=`${duree}\\times ${tex_nombre(3600)} + `
							texte_corr+=`${allures[distance][0]}\\times 60+${allures[distance][1]}}{${tex_nombre(3600)}}$ h = `
							texte_corr+=`$\\dfrac{`
							if (duree!=0) {
								duree=duree*3600+allures[distance][0]*60+allures[distance][1]
								texte_corr+=`${duree}}`
							}
							else {
								duree=allures[distance][0]*60+allures[distance][1]
								texte_corr+=`${duree}}`
							}
							texte_corr+=`{${tex_nombre(3600)}}$ h.<br>`
							texte_corr+=`Sa vitesse en km/h est par conséquent :<br>$${distance} \\text{ km}\\div\\dfrac{${duree}}{${tex_nombre(3600)}}\\text{ h}=`
							texte_corr+=`${distance} \\text{ km}\\times\\dfrac{${tex_nombre(3600)}}{${duree}}\\text{ h}^{-1}=\\dfrac{${distance}\\times${tex_nombre(3600)}}{${duree}}\\text{km.h}^{-1}`
							vitesse_moy=arrondi(distance*3600/duree)
							texte_corr+=`\\approx${tex_nombrec(vitesse_moy)}$ km/h<br>`
							texte_corr+=num_alpha(2)+` Si elle court 21,0975 km à cette vitesse de ${tex_nombre(vitesse_moy)} km/h, ${quidam} mettra :<br>`
							duree=arrondi(21.0975/vitesse_moy,4)
							texte_corr+=`$\\dfrac{${tex_nombre(21.0975)} \\text{ km}}{${tex_nombre(vitesse_moy)} \\text{ km.h}^{-1}}\\approx${tex_nombre(duree)}$ h soit `
							nbheures=Math.floor(duree)
							duree=(duree-nbheures)*60
							nbminutes=Math.floor(duree)
							duree=Math.round((duree-nbminutes)*60)
							texte_corr+=` environ ${nbheures} h ${nbminutes} min ${duree} s.`
							break;
						}
						break;
				case 8 : //problème de prix massique
					index1=randint(0,7)
					index2=randint(0,5,[index])
					index=randint(0,5,[index1,index2])
					masse=arrondi(randint(fruits[index1][2],fruits[index1][3])/10)
					masse2=arrondi(randint(fruits[index2][2],fruits[index2][3])/10)
					masse3=arrondi(randint(fruits[index][2],fruits[index][3])/10)
					prix1=arrondi(masse*fruits[index1][1])
					prix2=arrondi(masse2*fruits[index2][1])
					prix3=arrondi(masse3*fruits[index][1])
					quidam=prenomF()
					texte = `${quidam} se rends à l'épicerie de son quartier. Elle y achète ${tex_nombre(masse)} kg de ${fruits[index1][0]} à ${tex_prix(fruits[index1][1])} €/kg et pour ${tex_prix(prix2)} € de ${fruits[index2][0]} à ${tex_prix(fruits[index2][1])} €/kg.<br>`
					texte +=`Enfin, elle achète ${tex_nombre(masse3)} kg de ${fruits[index][0]} pour ${tex_prix(prix3)} €.<br>`
					texte+=num_alpha(0)+` Combien lui coûtent les ${fruits[index1][0]} ?<br>`
					texte+=num_alpha(1)+` Quelle masse de ${fruits[index2][0]} a-t-elle achetée ?<br>`
					texte+=num_alpha(2)+` Quel est le prix au kilogramme des ${fruits[index][0]} ?`
					texte_corr =num_alpha(0)+` ${quidam} dépense pour les ${fruits[index1][0]} : $${tex_nombre(masse)}\\text{ kg} \\times ${tex_prix(fruits[index1][1])}$ €$\\text{/kg} = ${tex_prix(prix1)}$ €.<br>`
					texte_corr+=num_alpha(1)+` La masse de ${fruits[index2][0]} qu'elle a achetée est : $${tex_prix(prix2)} $ €$ \\div ${tex_prix(fruits[index2][1])}$ €$\\text{/kg} = ${tex_nombre(masse2)}\\text{ kg}$.<br>`
					texte_corr+=num_alpha(2)+` Enfin, ${quidam} a acheté des ${fruits[index][0]} au prix unitaire de : $${tex_prix(prix3)}$ € $\\div ${tex_nombre(masse3)}\\text{ kg} = ${tex_prix(fruits[index][1])}$ €$\\text{/kg}$.`
					break;
				case 9 : //problème de prix horaire
					index1=randint(0,3)
					index2=randint(0,4)
					nbheures=randint(locations[index1][1],locations[index1][2])
					prix1=locations[index1][1]
					prix2=cours[index2][1]*randint(2,6)
					quidam=prenomF()
					texte = `${quidam} a prévu de louer ${locations[index1][0]} pendant ${tex_nombre(nbheures)} heures. L'heure de location coûte ${tex_prix(prix1)} €.<br>`
					texte+=num_alpha(0)+` Combien cette location va lui coûter ?<br>`
					texte+=num_alpha(1)+` ${quidam} a pris des leçons particulières ${cours[index2][0]}. En tout ce mois-ci elle a eu ${tex_nombrec(prix2/cours[index2][1])} heures de cours pour ${tex_prix(prix2)} €. Combien demande son professeur pour une heure de cours ?<br>`
					texte_corr =num_alpha(0)+` ${quidam} va dépenser pour sa location : $${tex_nombre(nbheures)}\\text{ h} \\times ${tex_prix(prix1)}$ €$\\text{/h} = ${tex_prix(nbheures*prix1)}$ €.<br>`
					texte_corr+=num_alpha(1)+` L'heure de cours ${cours[index2][0]} coûte : $${tex_prix(prix2)}$ € $ \\div ${tex_nombre(prix2/cours[index2][1])}\\text{ h} = ${tex_prix(cours[index2][1])}$ €$\\text{/h}$.<br>`
					break;
				case 10 : //problème de densité de population
					index1=randint(0,14)
					index2=randint(0,14,[index1])
					let ville1=villes[index1][0]
					let ville2=villes[index2][0]
					texte = num_alpha(0)+` En 2016, à ${villes[index1][0]} il y avait $${tex_nombre(villes[index1][1])}$ habitants pour une superficie de $${tex_nombre(villes[index1][2]*1000)}$ ha.<br> Calculer la densité de population en hab/km².<br>`
					texte += num_alpha(1)+` La même année, la `+katex_Popup2(numero_de_l_exercice+i*3+1,type_aide,`densité de population`,`Définition : Densité de population`,`C’est le quotient du nombre d'habitants par la superficie en km².<br>L'unité de la densité de population est l'habitant par km² (hab/km²).`)+` de ${villes[index2][0]} était de $${tex_nombrec(villes[index2][1]/villes[index2][2])}$ hab/km² pour une superficie de $${tex_nombrec(villes[index2][2]*1000)}$ ha.<br> Calculer le nombre d'habitants de ${villes[index2][0]} à cette date.<br>`
					texte_corr = num_alpha(0)+` En 2016, la densité de population à ${villes[index1][0]} était de :<br> $\\dfrac{${tex_nombre(villes[index1][1])}\\text{ hab}}{${tex_nombre(villes[index1][2]*1000)}\\text{ ha}}=\\dfrac{${tex_nombre(villes[index1][1])}\\text{ hab}}{${tex_nombre(villes[index1][2])}\\text{ km}^2}=${tex_nombrec(villes[index1][1]/villes[index1][2])}\\text{ hab/km}^2$.<br>`
					texte_corr+= num_alpha(1)+` A cette date, le nombre d'habitants de ${villes[index2][0]} était de :<br> $${tex_nombrec(villes[index2][1]/villes[index2][2])}\\text{ hab/km}^2\\times ${tex_nombrec(villes[index2][2]*1000)}\\text{ ha}=${tex_nombrec(villes[index2][1]/villes[index2][2])}\\text{ hab/km}^2\\times ${tex_nombrec(villes[index2][2])}\\text{ km}^2=${tex_nombre(villes[index2][1])}\\text{ hab}$.`
					break;
				case 11 : //problème de masse volumique
					index1=randint(0,14)
					index2=randint(0,14,[index1])
					let V1=randint(50,100)
					masse2=randint(5,30)
					masse=arrondi(materiaux[index1][1]*V1/1000000)
					let V2=arrondi(masse2/materiaux[index2][1],7)
					texte = num_alpha(0)+` La `+katex_Popup2(numero_de_l_exercice+i*3+1,type_aide,`masse volumique`,`Définition : Masse volumique (grandeur physique)`,`La masse volumique d'un élément est le quotient de la masse de cet élément par le volume qu'il occupe.<br>L'unité de la masse volumique dépend de la nature de l'élément et peut s'exprimer kg/m$^3$ pour les solides g/L pour les gaz par exemple.`)+` du ${materiaux[index1][0]} est de $${tex_nombre(materiaux[index1][1])}\\text{ kg/m}^3$.<br>`
					texte +=`Quelle est la masse d'une pièce de ce métal de $${tex_nombre(V1)}\\text{ cm}^3$ ?<br>`
					texte += num_alpha(1)+` Quel est le volume d'une pièce de ${materiaux[index2][0]} ayant une masse de `
					texte+=`$${tex_nombre(masse2)}\\text{ kg}$ (la masse volumique du ${materiaux[index2][0]} est de $${tex_nombre(materiaux[index2][1])}\\text{ kg/m}^3$)<br>`
					texte_corr =num_alpha(0)+ ` La masse de cette pièce de ${materiaux[index1][0]} est de :<br>$${tex_nombre(materiaux[index1][1])}\\text{ km/m}^3\\times ${tex_nombre(V1)}\\text{ cm}^3=${tex_nombre(materiaux[index1][1])}\\text{ km/m}^3\\times ${tex_nombrec(V1/1000000)}\\text{ m}^3=${tex_nombre(masse)}\\text{ kg}$.<br>`
					texte_corr+=num_alpha(1)+ ` Le volume de cette pièce de ${materiaux[index2][0]} est de :<br>$${tex_nombre(masse2)}\\text{ kg}\\div ${tex_nombre(materiaux[index2][1])}\\text{ kg/m}^3\\approx${tex_nombre(V2)}\\text{ m}^3\\approx${tex_nombrec(V2*1000000)}\\text{ cm}^3$<br>`
					break;
				case 12 : //problème de concentration massique
					index1=randint(0,4)
					index2=randint(0,4,[index1])
					let Volume1=arrondi(randint(2,15,[10])/10)
					let Volume2=arrondi(randint(2,15,[10])/10)
					if (solutes[index1][2]<10) masse=arrondi(randint(11,solutes[index1][2]*10)*Volume1/10)
					else masse=arrondi(randint(2,solutes[index1][2])*Volume1)
					let concentration2
					if (solutes[index2][2]<10) concentration2=arrondi(randint(11,solutes[index2][2]*10)/10) //concentration en g/L soluté 2.
					else concentration2=randint(2,solutes[index2][2])

					texte = num_alpha(0)+` On a dissout $${tex_nombre(masse)}\\text{ g}$ de ${solutes[index1][0]} dans $${tex_nombre(Volume1)}\\text{ litres}$ ${solutes[index1][1]}.<br>Calculer la concentration massique de cette solution.<br>`
					texte+= num_alpha(1)+` On dispose de $${tex_nombre(Volume2)}$ litres de solution aqueuse de ${solutes[index2][0]} à $${tex_nombre(concentration2)}\\text{ g/L}$.<br>Quelle masse de ${solutes[index2][0]} a été dissoute dans l'eau ?`
					texte_corr =  num_alpha(0)+` La concentration en ${solutes[index1][0]} de cette solution aqueuse est de :<br>`
					texte_corr+= ` $\\dfrac{${tex_nombre(masse)}\\text{ g}}{${tex_nombre(Volume1)}\\text{ litres}}=${tex_nombrec(arrondi(masse/Volume1))}\\text{ g/L}$<br>`
					texte_corr+= num_alpha(1)+` La masse de ${solutes[index2][0]} dissoute est de :<br>`
					texte_corr+=`$${tex_nombre(Volume2)}\\text{ L}\\times ${tex_nombre(concentration2)}\\text{ g/L}=${tex_nombre(arrondi(Volume2*concentration2))}\\text{ g}$`
				break;

				case 13 : //problème de débit
					index2=randint(0,6)
					duree=randint(2,24)
					let vmax=rivieres[index2][3]*3600
					texte = `Le `+katex_Popup2(numero_de_l_exercice+i,type_aide,`débit`,`Définition : Débit (grandeur physique)`,`Le débit est le quotient d'un volume d'eau écoulée dans une section de conduit par le temps d'écoulement.<br>L'unité officielle est le mètre cube par seconde ($\\text{m}^3/\\text{s}$  et dans certains cas on peut utiliser le litre par minute (L/min)`)+` annuel moyen ${rivieres[index2][6]}${rivieres[index2][0]} mesuré à ${rivieres[index2][1]} est de ${rivieres[index2][2]} m³/s.<br>`
					texte += num_alpha(0)+` Calculer le volume d'eau en m³ écoulé en ${duree} heures à ce débit.<br>`
					texte += num_alpha(1)+` En ${rivieres[index2][4]} à ${rivieres[index2][1]}, ${rivieres[index2][5]}${rivieres[index2][0]} a débité ${nombre_avec_espace(vmax)} m³ en une heure. Quel a été alors le débit en m³/s ?`
					texte_corr = num_alpha(0)+` En ${duree} heures il s'écoule en moyenne dans ${rivieres[index2][5]}${rivieres[index2][0]} à ${rivieres[index2][1]} :<br>`
					texte_corr+= `$\\mathcal{V}=${duree}\\text{ h}\\times${rivieres[index2][2]}\\text{ m}^3\\text{/s}=${duree}\\times 3600\\text{ s}\\times${rivieres[index2][2]}\\text{ m}^3\\text{/s}=${tex_nombre(duree*3600*rivieres[index2][2])}\\text{ m}^3$<br>`
					texte_corr += num_alpha(1)+` En ${rivieres[index2][4]} lors de la crue historique ${rivieres[index2][6]}${rivieres[index2][0]} à ${rivieres[index2][1]} le débit maximal a été de :<br>`
					texte_corr+= `Débit =$${tex_nombre(vmax)}\\text{ m}^3\\text{/h}=\\dfrac{${tex_nombre(vmax)}\\text{ m}^3}{1\\text{ h}}=\\dfrac{${tex_nombre(vmax)}\\text{ m}^3}{${tex_nombre(3600)}\\text{ s}}=${tex_nombrec(vmax/3600)}\\text{ m}^3\\text{/s}$<br>`
				
					break	
				case 14 : // problème de vitesse de téléchargement		
					let unites=[`ko`,`Mo`,`Go`]
					index=randint(0,1)
					if (index==0)	vitesse_moy=randint(200,999)
					else 	vitesse_moy=randint(1,20)	
					quidam=prenom()
					nbminutes=randint(3,10)
					nbsecondes=randint(2,59)
					masse=arrondi(randint(15,35)/10)
					texte=num_alpha(0)+` ${quidam} télécharge un fichier depuis un espace de stockage en ligne. Sa `+katex_Popup2(numero_de_l_exercice+i,type_aide,`vitesse de téléchargement`,`Définition : Vitesse de téléchargement`,`La vitesse de téléchargement est le quotient de la quantité de données téléchargées (en ko,Mo ou Go) par la durée de téléchargement (en seconde).<br>L'unité de cette grandeur quotient est le ko/s (ou Mo/s)`)+` est de ${vitesse_moy} ${unites[index]}/s.<br>`
					texte+=`Le téléchargement dure ${nbminutes} minutes et ${nbsecondes} secondes. Quelle est la taille du fichier téléchargé en ${unites[index]} ?<br>`
					texte+=num_alpha(1)+` ${quidam} veut télécharger un fichier de ${tex_nombre(masse)} Go. Quelle sera la durée du téléchargement si sa vitesse de téléchargement est de ${vitesse_moy} ${unites[index]}/s ?<br>`
					texte_corr=num_alpha(0)+` La taille du fichier téléchargé est :<br>`
					let taille_fichier=(nbminutes*60+nbsecondes)*vitesse_moy
					texte_corr+=`$(${nbminutes}\\times 60 +${nbsecondes})\\text{ s}\\times ${vitesse_moy} \\text{ ${unites[index]}/s} = ${nbminutes*60+nbsecondes}\\text{ s}\\times ${vitesse_moy} \\text{ ${unites[index]}/s} = ${taille_fichier} \\text{ ${unites[index]} }$`
					if (taille_fichier>1000) texte_corr+=`$ =${tex_nombrec(taille_fichier/1000)} \\text{ ${unites[index+1]}}.$<br>`
					texte_corr+=num_alpha(1)+` La durée du téléchargement sera de :<br>`
					if (index==0) {
						texte_corr+= `$${masse}\\times ${tex_nombrec(10**6)} \\text{ ko} \\div ${vitesse_moy} \\text{ ${unites[index]}/s}$`
						taille_fichier=masse*10**6
					}
					else {
						texte_corr+= `$${masse}\\times ${tex_nombrec(10**3)} \\text{ Mo} \\div ${vitesse_moy} \\text{ ${unites[index]}/s}$`
						taille_fichier=masse*10**3
					}
					texte_corr+=`$=\\dfrac{${taille_fichier}}{${vitesse_moy}}\\text{ s}`
					nbheures=Math.floor((taille_fichier/vitesse_moy)/3600)
					nbminutes=Math.floor((taille_fichier/vitesse_moy-3600*nbheures)/60)
					nbsecondes=arrondi(taille_fichier/vitesse_moy-3600*nbheures-60*nbminutes,0)
					if (taille_fichier/vitesse_moy==nbsecondes+60*nbheures+3600*nbheures) texte_corr+=`=`
					else texte_corr +=`\\approx`
					if (nbheures!=0) texte_corr+=`${nbheures} \\text{ h }`
					if (nbminutes!=0) texte_corr+=`${nbminutes} \\text{ min }`
					if (nbsecondes!=0) texte_corr+= `${nbsecondes} \\text { s}`
					texte_corr+=`$`

					break
				}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
	//this.besoin_formulaire_case_a_cocher =['Choix des exercices aléatoire'];
	//this.besoin_formulaire2_numerique = ['Type d\'exercice', 14, '1 : Energie consommée\n 2 :  Volumes\n 3 : Quantité de mouvement & Energie cinétique\n 4 : Moment de force\n 5 : Trafic de voyageurs\n 6 : Puissance électrique\n 7 : Vitesses\n 8 : Prix massique\n 9 : Prix horaire\n 10 : Densité de population\n 11 : Masse volumique\n 12 : Concentration massique\n 13 : Débits\n 14 : Transfert de fichiers'];
	this.besoin_formulaire_texte = ['Choix des grandeurs','Nombres séparés par des points-virgules\n 1 : Energie consommée\n 2 :  Volumes\n 3 : Quantité de mouvement & Energie cinétique\n 4 : Moment de force\n 5 : Trafic de voyageurs\n 6 : Puissance électrique\n 7 : Vitesses\n 8 : Prix massique\n 9 : Prix horaire\n 10 : Densité de population\n 11 : Masse volumique\n 12 : Concentration massique\n 13 : Débits\n 14 : Transfert de fichiers'] // Texte, tooltip

};


/**
 * Calculs de probabilités sur une expérience aléatoire à deux épreuves
 * @Auteur Jean-Claude Lhote
 */
function fonctions_probabilite2(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Calculer des probabilités dans une expérience aléatoire à deux épreuves";
	this.consigne = "";
	this.nb_questions = 2;
	this.nb_questions_modifiable = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 2 : this.spacing = 1.5; 
	sortie_html? this.spacing_corr = 3 : this.spacing_corr = 2;
	this.sup=1;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let liste_index_disponibles=[0,1,2,3];
		let liste_index=combinaison_listes(liste_index_disponibles,this.nb_questions)
		let qualites=[[]];
		let Initiale=[];
		let Couleurs=[`red`,`green`,`blue`,`gray`,`brown`,`orange`,`magenta`,`pink`,`black`,`lightgray`];
		qualites[0]=['à la fraise','à la vanille','à l\'abricot','à la cerise','à la banane'];
		qualites[1]=['trèfle','carreau','coeur','pique'];
		qualites[2]=['rouges','vertes','bleues','noires','blanches'];
		qualites[3]=['gris','cyans','roses','jaunes','violets'];
		qualites[4]=['rouges','verts','bleus','noirs','jaunes'];
		qualites[5]=['rouges','verts','bleus','noirs','blancs'];
		qualites[6]=['rouges','verts','bleus','noirs','jaunes'];
		for (let i = 0,p,q,r,somme1,somme2,quidame,quidam,n=[],m=[],fra1=[],fra2=[],p1=[],p2=[],p3=[],den,trouve,texte, texte_corr, cpt=0; i < this.nb_questions && cpt<50;) {
			quidame=prenomF();
			quidam=prenomM();
			switch (liste_index[i]) {
				case 0 :
					Initiale[0]=`F`;
					Initiale[1]=`V`;
					Initiale[2]=`A`;
					Initiale[3]=`C`;
					Initiale[4]=`B`;
					p=randint(0,4);
					q=randint(0,4,[p]);
					r=randint(0,4,[p,q]);
					n[p]=randint(2,5);
					n[q]=randint(1,6)+2;
					n[r]=randint(1,3)*2;

										// n[3]=randint(1,4)+2;
					// n[4]=randint(2,5);
					somme1=n[p]+n[q]+n[r];// +n[3]+n[4];
					texte = `Dans le frigo il y a ${somme1} yaourts. ${n[p]} sont ${qualites[0][p]}, ${n[q]} sont ${qualites[0][q]} et ${n[r]} sont ${qualites[0][r]}.<br>`;//  ${n[3]} sont ${qualites[index1][3]} et ${n[4]} sont ${qualites[index1][4]}.<br> `;
					texte += `${quidame} en choisit un au hasard. Son frère ${quidam} en choisit un au hasard à son tour.<br>`;
					texte += num_alpha(0)+` Combien d'issues possède cette experience aléatoire ? donne un exemple d'issue.<br>`
					texte += num_alpha(1)+` Est-ce une expérience en situation d'équiprobabilité ? Justifie.<br>`
					texte += num_alpha(2)+` Calcule la probabilité que ${quidame} et ${quidam} aient choisi tous les deux un yaourt ${qualites[0][p]}.<br>`;
					texte += num_alpha(3)+` Calcule la probabilité qu'ils aient choisi des yaourts aux parfums identiques.<br>`;
					texte += num_alpha(4)+` Calcule la probabilité qu'ils aient choisi des yaourts aux parfums différents.<br>`;
					texte_corr =``;
					texte_corr +=num_alpha(0)+` ${quidame} peut avoir choisi un yaourt ${qualites[0][p]}, ${qualites[0][q]} ou ${qualites[0][r]}. Une fois qu'elle a choisi, et comme il y a au moins 2 yaourts de chaque sorte, ${quidam} a les mêmes 3 possibilités. Il y a donc $3\\times3=9$ issues possibles.<br>`
					texte_corr += `Par exemple : ${quidame} a pris un yaourt ${qualites[0][p]} et ${quidam} un yaourt ${qualites[0][q]}. Ce qu'on peut noter (${Initiale[p]},${Initiale[q]}).<br>`;
					texte_corr += `Les 9 issues sont : `;
					for (const j of [p,q,r])
						for (const k of [p,q,r])
							texte_corr += `(${Initiale[j]},${Initiale[k]}) `;
					texte_corr+=`<br>`
					if (n[0]==n[1]&&n[1]==n[2]) {
						texte_corr += num_alpha(1)+` Comme le nombre de yaourts de chaque sorte est le même, alors ${quidame} a la même probabilité de choisir n'importe quel parfum, mais ensuite son frère aura un yaourt de moins de l'un des parfums. Il est donc moins probable qu'il choisisse le même parfum que sa soeur que l'un des deux autres parfums.<br>`;
						texte_corr += `l\'issue (${Initiale[p]},${Initiale[p]}) est donc moins probable que l'issue (${Initiale[p]},${Initiale[q]}). Ce n'est donc pas une situation d'équiprobabilité.`;
					}
					else {
						texte_corr+=num_alpha(1)+` Comme le nombre de yaourt est différent d'un parfum à l'autre, ${quidame} n'a pas la même probabilité de choisir n'importe quel parfum. On en déduit qu' il est impossible que les issues (${Initiale[p]},${Initiale[p]}), (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}) aient la même probabilité.<br>`;
					}
					texte_corr += num_alpha(2)+` Il y a ${n[p]} yaourts ${qualites[0][p]}, et ${somme1} yaourts en tout, la probabilité que ${quidame} choisisse un yaourt ${qualites[0][p]} est de : $${tex_fraction(n[p],somme1)}${simplification_de_fraction_avec_etapes(n[p],somme1)}$.<br>`;
					texte_corr += `Ensuite il reste ${n[p]-1} yaourts ${qualites[0][p]} pour ${quidam} sur un total de ${somme1-1} yaourts.<br> La probabilité qu'il choisisse à son tour et dans ces conditions ce parfum est de $${tex_fraction(n[p]-1,somme1-1)}${simplification_de_fraction_avec_etapes(n[p]-1,somme1-1)}$.<br>`;
					texte_corr += `La probabilité de l'issue (${Initiale[p]},${Initiale[p]}) est le produit de ces deux probabilités, donc : $${tex_fraction(n[p],somme1)}\\times${tex_fraction(n[p]-1,somme1-1)}=${tex_fraction(n[p]*(n[p]-1),somme1*(somme1-1))}${simplification_de_fraction_avec_etapes(n[p]*(n[p]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += num_alpha(3)+` a probabilité des issues (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}) peuvent être calculées de la même façon qu'au 3) :<br>`;
					texte_corr += `$${tex_fraction(n[q],somme1)}\\times${tex_fraction(n[q]-1,somme1-1)}=${tex_fraction(n[q]*(n[q]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += `$${tex_fraction(n[r],somme1)}\\times${tex_fraction(n[r]-1,somme1-1)}=${tex_fraction(n[r]*(n[r]-1),somme1*(somme1-1))}$.<br>`;
					texte_corr += `La probabilité qu'ils choisissent le même parfum est la somme des probabilités des issues (${Initiale[p]},${Initiale[p]}), (${Initiale[q]},${Initiale[q]}) et (${Initiale[r]},${Initiale[r]}), soit :<br>`;
					texte_corr += `$${tex_fraction(n[p]*(n[p]-1),somme1*(somme1-1))}+${tex_fraction(n[q]*(n[q]-1),somme1*(somme1-1))}+${tex_fraction(n[r]*(n[r]-1),somme1*(somme1-1))}=${tex_fraction(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1))}${simplification_de_fraction_avec_etapes(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1))}$<br>`;
					texte_corr += num_alpha(4)+` choisir des parfums différents est l'événement contraire de l'événement dont on a calculé la probabilité à la question 4).<br>`;
					fra1=fraction_simplifiee(n[p]*(n[p]-1)+n[q]*(n[q]-1)+n[r]*(n[r]-1),somme1*(somme1-1));
					texte_corr += `La probabilité de cet événement est donc : $1-${tex_fraction(fra1[0],fra1[1])}=${tex_fraction(fra1[1],fra1[1])}-${tex_fraction(fra1[0],fra1[1])}=${tex_fraction(fra1[1]-fra1[0],fra1[1])}${simplification_de_fraction_avec_etapes(fra1[1]-fra1[0],fra1[1])}$`;
					break;
				case 1 :
					p=randint(0,3);
					if (randint(0,1)==0) q=32;
					else q=52;
					r=Math.floor(q/33);
					Initiale[0]=choice([`sept`,`huit`,`neuf`,`dix`,`valet`,`roi`,`as`]);
					Initiale[1]=choice([`deux`,`trois`,`quatre`,`cinq`,`six`,`sept`,`huit`,`neuf`,`dix`,`valet`,`roi`,`as`]);
					texte =`On considère l'expérience consistant à tirer deux cartes dans un jeu de ${q} cartes.<br>`;
					texte +=`Partie 1 : On effectue le tirage de la deuxième carte après remise de la première dans le jeu.<br>`;
					texte +=num_alpha(0)+` Quelle est la probabilité de tirer 2 cartes de la même couleur (Rouge/Rouge ou Noire/Noire)?<br>`;
					texte +=num_alpha(1)+` Quelle est la probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte +=` ?<br>`;
					texte +=num_alpha(2)+` Quelle est la probabilité de tirer 2 carte de ${qualites[1][p]} ?<br>`;
					texte +=`Partie 2 : On effectue le tirage de la deuxième carte sans remise de la première dans le jeu.<br>`;
					texte +=`	Reprendre les 3 questions de la partie 1 dans cette nouvelle expérience.`
					texte_corr =`Partie 1.<br>	`;
					texte_corr+=num_alpha(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a deux couleurs rouge et noire et le nombre de carte rouge est le même que le nombre de carte noire : ${q/2}.<br>`;
					texte_corr +=`	La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${tex_fraction(q/2,q)}=${tex_fraction(1,2)}$.<br>`;
					texte_corr +=num_alpha(1)+` Il y a 4 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;	
					texte_corr +=` dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${Initiale[r]} est donc de $${tex_fraction(4,q)}=${tex_fraction_reduite(4,q)}$.<br>`;
					texte_corr +=`	Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${Initiale[r]} est la même pour cette carte.<br>`;
					texte_corr +=`	La probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte_corr +=` est donc : $${tex_fraction_reduite(4,q)}\\times${tex_fraction_reduite(4,q)}=${tex_fraction_reduite(16,q*q)}$.<br>`;
					texte_corr +=num_alpha(2)+` Il y a ${q/4} cartes de ${qualites[1][p]} dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${qualites[1][p]} est donc de $${tex_fraction(q/4,q)}=${tex_fraction(1,4)}$.<br>`;
					texte_corr +=`	Comme la deuxième carte est tirée dans le jeu complet (après remise de la première) la probabilité de tirer un ${qualites[1][p]} est la même pour cette carte.<br>`;								
					texte_corr +=`	La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction(1,4)}=${tex_fraction(1,16)}$.<br>`;
					texte_corr +=`Partie 2.<br>`;
					texte_corr+= num_alpha(0)+` On ne s'intéresse ici qu'au tirage de la deuxième carte. En effet pour réaliser l'événement, il faudra que cette carte soit de la même couleur que la première. Il y a maintenant une carte en moins dans la couleur désirée soit  ${q/2-1} et il y a une carte en moins dans le jeu soit ${q-1}.<br>`;
					texte_corr +=`	La probabilité que la deuxième carte soit de la même couleur que la première est donc : $${tex_fraction(q/2-1,q-1)}$.<br>`;
					texte_corr +=num_alpha(1)+` Il y a 4 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;	
					texte_corr +=` dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${Initiale[r]} est donc de $${tex_fraction(4,q)}=${tex_fraction_reduite(4,q)}$.<br>`;
					texte_corr +=`	Pour que l'événement se réalise la deuxième carte est tirée dans les ${q-1} cartes restantes dans lesquelles il manque un ${Initiale[r]}.<br>`;
					texte_corr +=`	La probabilité de tirer un deuxième ${Initiale[r]} est donc : $${tex_fraction(3,q-1)}$`;
					if (q==52) texte_corr+=`$=${tex_fraction(1,17)}$.`
					texte_corr +=`<br> La probabilité de tirer 2 ${Initiale[r]}`;
					if (Initiale[r]==`valet`||Initiale[r]==`roi`) texte+=`s`;
					texte_corr +=` est donc : $${tex_fraction_reduite(4,q)}\\times${tex_fraction_reduite(3,q-1)}=${tex_fraction_reduite(12,q*(q-1))}$.<br>`;
					texte_corr +=num_alpha(2)+` Il y a ${q/4} cartes de ${qualites[1][p]} dans le jeu sur ${q} cartes possibles. La probabilité de tirer un ${qualites[1][p]} est donc de $${tex_fraction(q/4,q)}=${tex_fraction(1,4)}$.<br>`;
					texte_corr +=`	Pour que l'événement se réalise la deuxième carte est tirée dans les ${q-1} cartes restantes dans lesquelles il manque un ${qualites[1][p]}.<br>`;								
					texte_corr +=`	La probabilité de tirer un deuxième ${qualites[1][p]} est donc : $${tex_fraction(q/4-1,q-1)}$`;
					if (q==52) texte_corr+=`$=${tex_fraction(4,17)}$<br>La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction(4,17)}=${tex_fraction(1,17)}$.`;
					else texte_corr+=`<br>La probabilité de tirer 2 ${qualites[1][p]}s est donc $${tex_fraction(1,4)}\\times${tex_fraction_reduite(7,31)}=${tex_fraction(7,124)}$`;
					break;
				case 2 :
					n[0]=randint(2,5);m[0]=randint(2,5);
					n[1]=randint(1,6)+1;m[1]=randint(1,6)+1;
					n[2]=randint(1,3)*2;m[2]=randint(1,3)*2;
					n[3]=randint(1,4)+2;m[3]=randint(1,4)+2;
					n[4]=randint(2,5);m[4]=randint(2,5);
					somme1=n[0]+n[1]+n[2]+n[3]+n[4];
					somme2=m[0]+m[1]+m[2]+m[3]+m[4];	
					r=randint(0,4);
					p=randint(0,4,[r]);
					q=randint(0,4,[p,r]);
					texte=`Dans sa commode, ${quidam} a mis dans le premier tiroir des paires de chaussettes. Il y a `;
					for (let j=0;j<3;j++){
						texte+=`${n[j]} paires de chaussettes ${qualites[2][j]}, `;
					}
					texte+=`${n[3]} paires de chaussettes ${qualites[2][3]} et ${n[4]} paires de chaussettes ${qualites[2][4]}.<br>`;
					texte+=`Dans le deuxième tiroir, ${quidam} a mis des T-shirt. Il y a `;
					for (let j=0;j<3;j++){
						texte+=`${m[j]} T-shirts ${qualites[5][j]}, `;
					}
					texte+=`${m[3]} T-shirts ${qualites[5][3]} et ${m[4]} T-shirts ${qualites[5][4]}.<br>`;
					texte+=`Un matin, il y a une panne de courant et ${quidam} prend au hasard une paire de chaussettes dans le premier tiroir et un T-shirt dans le deuxième.<br>`;
					texte +=num_alpha(0)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt ${qualites[2][r]} ?<br>`;
					texte +=num_alpha(1)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt de la même couleur ?<br>`;			
					texte +=num_alpha(2)+` Quelle est la probabilité que ${quidam} ait choisi des chaussettes et un T-shirt de couleurs différentes ?`;
					texte_corr=num_alpha(0)+` Il y a ${n[r]} paires de chaussettes ${qualites[2][r]} et il y a ${somme1} paires de chaussettes possibles. `;
					texte_corr+=`La probabilité de chosir une paire de chaussettes ${qualites[2][r]} est de : $${tex_fraction(n[r],somme1)}${simplification_de_fraction_avec_etapes(n[r],somme1)}$.<br>`;
					texte_corr+=`Il y a ${m[r]} T-shirts ${qualites[5][r]} et il y a ${somme2} T-shirts possibles. `;
					texte_corr+=`La probabilité de chosir un des T-shirt ${qualites[5][r]} est de : $${tex_fraction(m[r],somme2)}${simplification_de_fraction_avec_etapes(m[r],somme2)}$.<br>`;
					texte_corr+=`${quidam} a donc $${tex_fraction_reduite(m[r],somme2)}$ de `;
					fra1=fraction_simplifiee(n[r],somme1);
					fra2=fraction_simplifiee(m[r],somme2);
					if (fra1[0]==1) texte_corr+= `une chance `;
					else texte_corr+=`$${fra1[0]}$ chances `;
					texte_corr+=`sur $${fra1[1]}$ de choisir des chaussettes et un T-shirt ${qualites[5][r]}.<br>`;
					texte_corr+=`Soit $${tex_fraction_reduite(m[r],somme2)}\\times${tex_fraction_reduite(n[r],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p1=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					fra1=fraction_simplifiee(n[p],somme1);
					fra2=fraction_simplifiee(m[p],somme2);
					texte_corr+=num_alpha(1)+` La probabilité de chosir une paire de chaussettes ${qualites[2][p]} est de : $${tex_fraction(n[p],somme1)}${simplification_de_fraction_avec_etapes(n[p],somme1)}$ et `;
					texte_corr+=`la probabilité de chosir l'un des T-shirt ${qualites[5][p]} est de : $${tex_fraction(m[p],somme2)}${simplification_de_fraction_avec_etapes(m[p],somme2)}$.<br>`;
					texte_corr+=`Donc la probabilité de chosir des chaussettes un T-shirt ${qualites[5][p]} est de : $${tex_fraction_reduite(m[p],somme2)}\\times${tex_fraction_reduite(n[p],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p2=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					fra1=fraction_simplifiee(n[q],somme1);
					fra2=fraction_simplifiee(m[q],somme2);
					texte_corr+=`La probabilité de chosir une paire de chaussettes ${qualites[2][q]} est de : $${tex_fraction(n[q],somme1)}${simplification_de_fraction_avec_etapes(n[q],somme1)}$ et `;
					texte_corr+=`la probabilité de chosir l'un des T-shirt ${qualites[5][q]} est de : $${tex_fraction(m[q],somme2)}${simplification_de_fraction_avec_etapes(m[q],somme2)}$.<br>`;
					texte_corr+=`Donc la probabilité de chosir des chaussettes un T-shirt ${qualites[5][q]} est de : $${tex_fraction_reduite(m[q],somme2)}\\times${tex_fraction_reduite(n[q],somme1)}=\\dfrac{${fra2[0]}\\times${fra1[0]}}{${fra2[1]}\\times${fra1[1]}}=${tex_fraction(fra1[0]*fra2[0],fra1[1]*fra2[1])}${simplification_de_fraction_avec_etapes(fra1[0]*fra2[0],fra1[1]*fra2[1])}$.<br>`;
					p3=fraction_simplifiee(fra1[0]*fra2[0],fra1[1]*fra2[1]);
					texte_corr +=`On en déduit que la probabilité de choisir des chaussettes et un T-shirt de la même couleur est :<br>`;
					texte_corr +=`$${tex_fraction(p1[0],p1[1])}+${tex_fraction(p2[0],p2[1])}+${tex_fraction(p3[0],p3[1])}=`;
					if 	(p1[1]==p2[1]&&p2[1]==p3[1]) {
						texte_corr+=`\\dfrac{${p1[0]}+${p2[0]}+${p3[0]}}{${p1[1]}}=${tex_fraction(p1[0]+p2[0]+p3[0],p1[1])}${simplification_de_fraction_avec_etapes(p1[0]+p2[0]+p3[0],p1[1])}$<br>`;
						fra1=fraction_simplifiee(p1[0]+p2[0]+p3[0],p1[1]);
					}
					else {
						den=ppcm(p1[1],ppcm(p2[1],p3[1]));
						let e=den/p1[1],f=den/p2[1],g=den/p3[1];
						texte_corr+=`${tex_fraction(p1[0]*e,den)}+${tex_fraction(p2[0]*f,den)}+${tex_fraction(p3[0]*g,den)}=${tex_fraction(p1[0]*e+p2[0]*f+p3[0]*g,den)}${simplification_de_fraction_avec_etapes(p1[0]*e+p2[0]*f+p3[0]*g,den)}$<br>`;
						fra1=fraction_simplifiee(p1[0]*e+p2[0]*f+p3[0]*g,den);
					}
					texte_corr+=num_alpha(2)+` L'événement \"choisir des chaussettes et un T-shirt de couleurs différentes\" est l'événement contraire de l'événement \"choisir des chaussettes et un T-shirt de même couleur\".<br>`;
					texte_corr+=`Donc sa probabilité est : $1-${tex_fraction(fra1[0],fra1[1])}=\\dfrac{${fra1[1]}-${fra1[0]}}{${fra1[1]}}=${tex_fraction(fra1[1]-fra1[0],fra1[1])}${simplification_de_fraction_avec_etapes(fra1[1]-fra1[0],fra1[1])}$<br>`;
					break;
				case 3 :
					quidam=prenomM();
					quidame=prenomF();
					p=choice([4,6,8,10,12]);
					q=choice([4,6,8,10,12],[p]);
					n[0]=Math.min(p,q); // petit dé de quidam
					m[0]=Math.max(p,q); // grand dé de quidam
					p1[0]=n[0]*m[0]; // nombre de couples pour quidam
					p=choice([4,6,8,12]);
					q=choice([4,6,8,12],[p]);
					n[1]=Math.min(p,q); // petit dé de quidame
					m[1]=Math.max(p,q); // grand dé de quidame
					p1[1]=n[1]*m[1] // nombre de couples pour quidame
					somme1=n[0]+m[0]; // maximum pour quidam
					somme2=n[1]+m[1]; // maximum pour quidame
					r=Math.min(somme1,somme2) // Plus grand résultat commun.
					for (let j=0;j<n[0]+m[0]-1;j++) fra1[j]=0; 
					for (let j=1;j<=n[0];j++) {
						for (let k=1;k<=m[0];k++){
							fra1[j+k-2]++; // numérateurs de probas pour quidam = nombre d'occurences des différents résultats possibles
						}
					}
					for (let j=0;j<n[1]+m[1]-1;j++) fra2[j]=0; 
					for (let j=1;j<=n[1];j++) {
						for (let k=1;k<=m[1];k++){
							fra2[j+k-2]++; // numérateurs de probas pour quidame = nombre d'occurences des différents résultats possibles
						}
					}
					for (let j=0;j<r-1;j++) {
						p2[j]=fra2[j]/p1[1]-fra1[j]/p1[0]; // différence entre les probas de l'un et de l'autre (positif si Quidame a plus de chance...)
					}

					texte=`${quidam} dispose d'un dé à ${n[0]} faces numérotées de 1 à ${n[0]} et d'un dé à ${m[0]} faces numérotées de 1 à ${m[0]}.<br>`;
					texte+=`Il lance ses deux dés et en fait la somme.<br>`;
					texte+=num_alpha(0)+` Reporte dans un tableau les issues possibles de cette expérience aléatoire et leurs probabilités respectives.<br>`;
					texte+=num_alpha(1)+` ${quidame} dispose d'un dé à ${n[1]} faces numérotées de 1 à ${n[1]} et d'un dé à ${m[1]} faces numérotées de 1 à ${m[1]}.<br>`;
					texte+=`Elle décide de proposer un défi à ${quidam} : \"On choisit un nombre cible entre 2 et ${r}, on lance nos deux dés en même temps. Le premier dont la somme des dés est la cible a gagné.\"<br>`;
					texte+=num_alpha(2)+` ${quidam} qui connaît les probabilités calculées au 1) propose alors de choisir ${n[0]+1} comme nombre cible. Il pense avoir plus de chances de gagner que ${quidame}. A-t-il raison ?<br>`;
					texte+=`Si oui, quel nombre doit choisir ${quidame} pour avoir un défi qui lui soit favorable et si non, y a-t-il un meilleur choix pour ${quidam} ?<br>`;
					texte+=num_alpha(3)+` Y a-t-il un nombre cible qui donne un jeu équitable où chacun aura la même probabilité de gagner ?<br>`;
					texte+=`$\\textit {Exercice inspiré des problèmes DuDu (mathix.org)}$`;
					texte_corr=num_alpha(0)+` les différents résultats de l\'éxpérience de ${quidam} sont présentés dans cette table :<br>`;
					// tableau d'addition des dé
					texte_corr+='$\\def\\arraystretch{1.5}\\begin{array}{|c';  
					for (let j=0;j<=m[0];j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{Dé 1/Dé 2}';
					for (let j=1;j<=m[0];j++) 	texte_corr+=`&`+j;
					for (let k=1;k<=n[0];k++) {
						texte_corr+=` \\\\\\hline `+k;
						for (let j=1;j<=m[0];j++) texte_corr+=`& \\textcolor {${Couleurs[(j+k)%10]}}{${j+k}}`;
					}
					texte_corr+=`\\\\\\hline\\end{array}$<br>`
					// fin du tableau
					texte_corr+=`Les probabilités de chaque issue sont données par ce tableau :<br>`;
					// tableau des probas
					texte_corr+='$\\def\\arraystretch{2.5}\\begin{array}{|c';  
					for (let j=1;j<=somme1;j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{résultats}';
					for (let j=2;j<=somme1;j++) 	texte_corr+=`&`+j;
					texte_corr+=` \\\\\\hline \\text{Probabilité}`;
					for (let j=2;j<=somme1;j++) texte_corr+=`& \\textcolor {${Couleurs[j%10]}}`+`{\\dfrac{${fra1[j-2]}}{${p1[0]}}}`;
					
					texte_corr+=`\\\\\\hline\\end{array}$<br>`
					// fin du tableau
					texte_corr+=num_alpha(1)+` Les probabilités en ce qui concerne ${quidame} sont données par le tableau ci-dessous :<br>`;
					// tableau des probas pour quidame
					texte_corr+='$\\def\\arraystretch{2.5}\\begin{array}{|c';  
					for (let j=1;j<=somme2;j++)	texte_corr+=`|c`;
					texte_corr+='} \\hline  \\text{Résultats}';
					for (let j=2;j<=somme2;j++) 	texte_corr+=`&`+j;
					texte_corr+=` \\\\\\hline \\text{Probabilité}`;
					for (let j=2;j<=somme2;j++) texte_corr+=`& \\textcolor {${Couleurs[j%10]}}`+`{\\dfrac{${fra2[j-2]}}{${p1[1]}}}`;
					texte_corr+=`\\\\\\hline\\end{array}$<br>`

					texte_corr+= `La probabilité qu'a ${quidame} de faire ${n[0]+1} est : $\\textcolor {${Couleurs[(n[0]+1)%10]}}{${tex_fraction(fra2[n[0]-1],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[n[0]-1],p1[1])}$.<br>`;
					texte_corr+=`La probabilité qu'a ${quidam} de faire ${n[0]+1} est : $\\textcolor {${Couleurs[(n[0]+1)%10]}}{${tex_fraction(fra1[n[0]-1],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[n[0]-1],p1[0])}$.<br>`;
					if (p2[n[0]-1]>0) {// Si quidame a plus de chance de gagner avec le choix de quidam
						texte_corr+=`${quidam} se trompe en croyant avoir plus de chances de gagner car $${tex_fraction_reduite(fra2[n[0]-1],p1[1])}>${tex_fraction_reduite(fra1[n[0]-1],p1[0])}$.<br>`
						// choix du nombre cible qui favorise quidam
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]<0) {
								texte_corr+=num_alpha(2)+` ${quidam} aurait du choisir ${j+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et celle de ${quidame} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidam} d'avoir plus de chance que ${quidame} de gagner.`
						}
					}
					else // quidam a plus de chances de gagner
					if (p2[n[0]-1]<0)	{
						texte_corr+=`${quidam} a raison de penser avoir plus de chances de gagner car $${tex_fraction_reduite(fra2[n[0]-1],p1[1])}<${tex_fraction_reduite(fra1[n[0]-1],p1[0])}$.<br>`
						// choix du nombre cible qui favorise quidame
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]>0) {
								texte_corr+=num_alpha(2)+` ${quidame} devrait choisir ${j+2} comme nombre cible.<br>Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$<br>Celle de ${quidam} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et $${tex_fraction_reduite(fra1[j],p1[0])}<${tex_fraction(fra2[j],p1[1])}.$<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidame} d'avoir plus de chance que ${quidam} de gagner.<br>`
						}
					}

						// Ils ont autant de chances de gagner l'un que l'autre
					else {
						texte_corr+=`${quidam} et ${quidame} ont autant de chances de gagner car ils ont tous deux la même probabilité de faire ${n[0]+1}, ce qui répond à la question ${num_alpha(3)}.<br>`			
						// choix du nombre cible qui favorise quidam
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]<0) {
								texte_corr+=num_alpha(2)+` ${quidam} aurait du choisir ${j+2} comme nombre cible.<br> Sa probabilité de réussir serait alors de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ et celle de ${quidame} serait de $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(2)+` Il n'existe pas de choix qui permette à ${quidam} d'avoir plus de chance que ${quidame} de gagner.<br>`
						}
					}
					if (p2[n[0]-1]==0) {
						texte_corr+=num_alpha(3)+` Il a été déjà répondu à cette question à la question ${num_alpha(1)}.<br>`;
					}
					else { // choix de la cible pour un jeu équitable
						trouve=false;
						for(let j=r-2;j>=0;j--){
							if (p2[j]==0) {
								texte_corr+=num_alpha(3)+` En choisissant ${j+2} comme cible, ${quidam} et ${quidame} ont la même probabilité de gagner.<br>
								Pour ${quidam} la probabilité est : $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra1[j],p1[0])}}${simplification_de_fraction_avec_etapes(fra1[j],p1[0])}$ tout comme pour ${quidame} : $\\textcolor {${Couleurs[(j+2)%10]}}{${tex_fraction(fra2[j],p1[1])}}${simplification_de_fraction_avec_etapes(fra2[j],p1[1])}$.<br>`
								trouve=true;
							}
							if (trouve==true) break;
						}
						if (trouve==false) {
							texte_corr+=num_alpha(3)+` Il n'existe pas de choix qui permette à ${quidam}et à ${quidame} d'avoir la même probabilité de gagner car : <br>`;
							for (let j=2;j<r/2;j++) {
								texte_corr+=`$\\textcolor {${Couleurs[(j)%10]}}{${tex_fraction(fra1[j-2],p1[0])}}\\ne \\textcolor {${Couleurs[(j)%10]}}{${tex_fraction(fra2[j-2],p1[1])}}$ ; `;
							}
							texte_corr+=`et $\\textcolor {${Couleurs[(r/2)%10]}}{${tex_fraction(fra1[r/2],p1[0])}}\\ne \\textcolor {${Couleurs[(r/2)%10]}}{${tex_fraction(fra2[r/2],p1[1])}}$.`;
						}
					}
					break;
				}
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this); //Espacement de 2 em entre chaque questions.
	}	
};


/**
 * Trace 5 droites et demande l'expression de la fonction affine ou linéaire correspondante
 * @Auteur Jean-Claude Lhote
 */
function fonctions_affines(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer une fonction affine";
	this.consigne = "Donner l'expression des fonctions représentées";
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	sortie_html? this.spacing = 2 : this.spacing = 1; 
	sortie_html? this.spacing_corr = 2 : this.spacing_corr = 1;
	this.sup=1;
	this.lineaire=false;

	
	this.nouvelle_version = function(numero_de_l_exercice){ // numero_de_l_exercice est 0 pour l'exercice 1
	let k=Math.pow(2,parseInt(this.sup)-1);
	this.liste_questions=[];
	this.liste_corrections=[];
	this.contenu = ''; // Liste de questions
	this.contenu_correction = ''; // Liste de questions corrigées
	let h=Math.round(window.innerHeight*0.7) //pour déterminer la hauteur du div 
	let liste_droites=[];
	let OrdX0;
	let Pente=[];
	if (!this.lineaire) {
		Pente.push(randint(-2*k,2*k));
		Pente.push(randint(-2*k,2*k,[Pente[0]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1],Pente[2]]));
		Pente.push(randint(-2*k,2*k,[Pente[0],Pente[1],Pente[2],Pente[3]]));
	}
	else {
		Pente.push(randint(-3*k,3*k,[0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],Pente[2],0]));
		Pente.push(randint(-3*k,3*k,[Pente[0],Pente[1],Pente[2],Pente[3],0]));	
	}

	for (let i=0;i<5;i++) {
		if (this.lineaire) OrdX0=0;
		else OrdX0= randint(-1+Pente[i]/k,1+Pente[i]/k)
		liste_droites.push([OrdX0,Pente[i]/k])
	}

	if (sortie_html) {
		let id_unique = `${Date.now()}`
		let id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
		this.consigne = `<div id="${id_du_div}" style="width: ${h}px; height: ${h}px; display : table "></div>`;
		if (!window.SVGExist) {window.SVGExist = {}} // Si SVGExist n'existe pas on le créé
		// SVGExist est un dictionnaire dans lequel on stocke les listenner sur la création des div
		window.SVGExist[id_du_div] = setInterval(function() {
			if ($(`#${id_du_div}`).length ) {
				$(`#${id_du_div}`).html("");//Vide le div pour éviter les SVG en doublon
				const mon_svg = SVG().addTo(`#${id_du_div}`).viewbox(0, 0, 500, 500).size('100%','100%')

			SVG_repere(mon_svg,-5,5,-5,5,k,k,500,500,true );
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[0][0],liste_droites[0][1],'blue','d1');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[1][0],liste_droites[1][1],'red','d2');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[2][0],liste_droites[2][1],'green','d3');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[3][0],liste_droites[3][1],'brown','d4');
			SVG_Tracer_droite(mon_svg,500,500,-5,5,-5,5,liste_droites[4][0],liste_droites[4][1],'purple','d5');
			clearInterval(SVGExist[id_du_div]);//Arrête le timer
			}

		}, 100); // Vérifie toutes les 100ms



	}
	else { //sortie Latex 
		let texte =`\\begin{tikzpicture}`;
		texte += Latex_repere(-5,5,-5,5,k,k,true);
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[0][0],liste_droites[0][1],'blue','d_1');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[1][0],liste_droites[1][1],'red','d_2');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[2][0],liste_droites[2][1],'green','d_3');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[3][0],liste_droites[3][1],'brown','d_4');
		texte += Latex_Tracer_droite(-5,5,-5,5,liste_droites[4][0],liste_droites[4][1],'purple','d_5');
		texte +=`\n\t \\end{tikzpicture}`;
		this.liste_questions.push(texte);
	}
	for (i=0;i<5;i++) {
	this.liste_questions.push(`Déterminer l'expression de la fonction $f_${i+1}$ représentée par la droite $d_${i+1}$.`)
	if (this.lineaire||liste_droites[i][0]==0) this.liste_corrections.push(`La droite $d_${i+1}$ passe par l'origine et son coefficient directeur est $${tex_nombre(liste_droites[i][1])}$. Elle représente la fonction linéaire $f_${i+1}(x)=${reduire_ax_plus_b(liste_droites[i][1],0)}$.`)
		else this.liste_corrections.push(`La droite $d_${i+1}$ passe par le point de coordonnées $(0;${liste_droites[i][0]})$ et son coefficient directeur est $${tex_nombre(liste_droites[i][1])}$. Elle représente la fonction affine $f_${i+1}(x)=${reduire_ax_plus_b(liste_droites[i][1],liste_droites[i][0])}$.`)
	
	}
		
		liste_de_question_to_contenu_sans_numero(this); 
		if (!this.lineaire) this.contenu_correction = `Il s’agit de fonctions affines, elles sont donc de la forme $f(x)=ax+b$, $b$ étant l’ordonnée à l’origine et $a$ la pente de la droite.\n` + this.contenu_correction;
			else this.contenu_correction = `Il s’agit de fonctions linéaires, elles sont donc de la forme $f(x)=ax$, $a$ étant la pente de la droite.\n`  + this.contenu_correction;	
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,"1 : Coefficient directeur entier\n2 : Coefficient directeur 'en demis'\n3 : Coefficient directeur 'en quarts'"];
}


/**
* Déterminer l'image d'un nombre par une fonction d'après sa forme algébrique
*
* * Niveau 1 : Fonctions affines
* * Niveau 2 : Polynôme du second degré
* * Niveau 3 : Quotients de fonctions affines
* * Niveau 4 : (ax+b)(cx+d)
* * Niveau 5 : Mélange 
* @Auteur Rémi Angot
*/
function Image_fonction_algebrique(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Déterminer l'image d'un nombre par une fonction d'après sa forme algébrique";
	this.consigne = "";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 4; // niveau de difficulté

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [];
		if (this.sup==1) {
			type_de_questions_disponibles = ['ax+b','ax-b','-ax+b','-ax-b'];
		} 
		if (this.sup==2) {
			type_de_questions_disponibles = ['ax2+bx+c','ax2+c','ax2+bx','-ax2+bx-c','-ax2-bx-c','-ax2-bx+c','-ax2-bx'];
		}
		if (this.sup==3) {
			type_de_questions_disponibles = ['a/cx+d','ax+b/cx+d'];
		}
		if (this.sup==4) {
			type_de_questions_disponibles = ['(ax+b)(cx+d)','(ax+b)2'];
		}
		if (this.sup==5) {
			type_de_questions_disponibles = ['ax+b','ax-b','-ax+b','ax2+bx+c','-ax2+bx-c','-ax2-bx','a/cx+d','ax+b/cx+d','(ax+b)(cx+d)','(ax+b)2'];
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_de_signes_de_x = combinaison_listes([true,false],this.nb_questions); 
		for (let i = 0, texte, texte_corr, a, b, c, d, expression, nomdef, x, cpt=0; i < this.nb_questions && cpt<50; ) {
			x = randint(1,12);
			if (liste_de_signes_de_x[i]) {
				x = -1*x;
			}
			a = randint(2,11);
			b = randint(2,11);
			c = randint(2,11);
			nomdef = lettre_minuscule_depuis_chiffre(6+i) // on commence par f puis on continue dans l'ordre alphabétique
			switch (liste_type_de_questions[i]){
				case 'ax+b': 
					expression = `${a}x+${b}`
					texte_corr = `$${nomdef}(${x})=${a}\\times ${ecriture_parenthese_si_negatif(x)}+${b}=${a*x}+${b}=${a*x+b}$`
				break;
				case 'ax-b': 
					expression = `${a}x-${b}`
					texte_corr = `$${nomdef}(${x})=${a}\\times ${ecriture_parenthese_si_negatif(x)}-${b}=${a*x}-${b}=${a*x-b}$`
				break;
				case '-ax+b': 
					expression = `-${a}x+${b}`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}+${b}=${-1*a*x}+${b}=${-1*a*x+b}$`
				break;
				case '-ax-b': 
					expression = `-${a}x-${b}`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}-${b}=${-1*a*x}-${b}=${-1*a*x-b}$`
				break;
				case 'ax2+bx+c': 
					expression = `${a}x^2+${b}x+${c}`
					texte_corr = `$${nomdef}(${x})=${a}\\times ${ecriture_parenthese_si_negatif(x)}^2+${b}\\times ${ecriture_parenthese_si_negatif(x)}+${c}=${a}\\times${x*x}${ecriture_algebrique(b*x)}+${c}=${a*x*x}${ecriture_algebrique(b*x)}+${c}=${a*x*x+b*x+c}$`
				break;
				case 'ax2+c': 
					expression = `${a}x^2+${c}`
					texte_corr = `$${nomdef}(${x})=${a}\\times ${ecriture_parenthese_si_negatif(x)}^2+${c}=${a}\\times${x*x}+${c}=${a*x*x}+${c}=${a*x*x+c}$`
				break;
				case 'ax2+bx': 
					expression = `${a}x^2+${b}x`
					texte_corr = `$${nomdef}(${x})=${a}\\times ${ecriture_parenthese_si_negatif(x)}^2+${b}\\times ${ecriture_parenthese_si_negatif(x)}=${a}\\times${x*x}${ecriture_algebrique(b*x)}=${a*x*x}${ecriture_algebrique(b*x)}=${a*x*x+b*x}$`
				break;
				case '-ax2+bx-c': 
					expression = `-${a}x^2+${b}x-${c}`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}^2+${b}\\times ${ecriture_parenthese_si_negatif(x)}-${c}=-${a}\\times${x*x}${ecriture_algebrique(b*x)}-${c}=${-1*a*x*x}${ecriture_algebrique(b*x)}-${c}=${-1*a*x*x+b*x-c}$`
				break;
				case '-ax2-bx-c': 
					expression = `-${a}x^2-${b}x-${c}`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}^2-${b}\\times ${ecriture_parenthese_si_negatif(x)}-${c}=-${a}\\times${x*x}${ecriture_algebrique(-1*b*x)}-${c}=${-1*a*x*x}${ecriture_algebrique(-1*b*x)}-${c}=${-1*a*x*x-b*x-c}$`
				break;
				case '-ax2-bx+c': 
					expression = `-${a}x^2-${b}x+${c}`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}^2-${b}\\times ${ecriture_parenthese_si_negatif(x)}+${c}=-${a}\\times${x*x}${ecriture_algebrique(-1*b*x)}+${c}=${-1*a*x*x}${ecriture_algebrique(-1*b*x)}+${c}=${-1*a*x*x-b*x+c}$`
				break;
				case '-ax2-bx': 
					expression = `-${a}x^2-${b}x`
					texte_corr = `$${nomdef}(${x})=-${a}\\times ${ecriture_parenthese_si_negatif(x)}^2-${b}\\times ${ecriture_parenthese_si_negatif(x)}=-${a}\\times${x*x}${ecriture_algebrique(-1*b*x)}=${-1*a*x*x}${ecriture_algebrique(-1*b*x)}=${-1*a*x*x-b*x}$`
				break;
				case 'a/cx+d': 
					d = randint(1,11)
					while (c*x+d==0){
						c=randint(2,11)
					}
					expression = `\\dfrac{${a}}{${c}x+${d}}`
					texte_corr = `$${nomdef}(${x})=\\dfrac{${a}}{${c}\\times${ecriture_parenthese_si_negatif(x)}+${d}}=\\dfrac{${a}}{${c*x}+${d}}=\\dfrac{${a}}{${c*x+d}}=${tex_fraction_reduite(a,c*x+d)}$`
				break;
				case 'ax+b/cx+d': 
					d = randint(1,11)
					while (c*x+d==0){
						c=randint(2,11)
					}
					while (a*x+b==0){
						a=randint(2,11)
					}
					expression = `\\dfrac{${a}x+${b}}{${c}x+${d}}`
					texte_corr = `$${nomdef}(${x})=\\dfrac{${a}\\times${ecriture_parenthese_si_negatif(x)}+${b}}{${c}\\times${ecriture_parenthese_si_negatif(x)}+${d}}=\\dfrac{${a*x}+${b}}{${c*x}+${d}}=\\dfrac{${a*x+b}}{${c*x+d}}=${tex_fraction_reduite(a*x+b,c*x+d)}$`
				break;
				case '(ax+b)(cx+d)': 
					a = randint (-4,4,[0,1,-1])
					b = randint (-4,4,[0])
					c = randint (-4,4,[0,1,-1])
					d = randint (-4,4,[0])
					x = randint (-2,2,[0])

					expression = `(${a}x${ecriture_algebrique(b)})(${c}x${ecriture_algebrique(d)})`
					texte_corr = `$${nomdef}(${x})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x)}${ecriture_algebrique(b)}\\right)\\left(${c}\\times${ecriture_parenthese_si_negatif(x)}${ecriture_algebrique(d)}\\right)=(${a*x}${ecriture_algebrique(b)})(${c*x}${ecriture_algebrique(d)})=${a*x+b}\\times${ecriture_parenthese_si_negatif(c*x+d)}=${(a*x+b)*(c*x+d)}$`
				break;
				case '(ax+b)2': 
					a = randint (-4,4,[0,-1,1])
					b = randint (-4,4,[0])
					c = randint (-4,4,[0,-1,1])
					d = randint (-4,4,[0])
					x = randint (-2,2,[0])

					expression = `(${a}x${ecriture_algebrique(b)})^2`
					texte_corr = `$${nomdef}(${x})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x)}${ecriture_algebrique(b)}\\right)^2=(${a*x}${ecriture_algebrique(b)})^2=${ecriture_parenthese_si_negatif(a*x+b)}^2=${(a*x+b)*(a*x+b)}$`
				break;
			}

			texte = `On considère la fonction $${nomdef}$ définie par $${nomdef}(x):x\\mapsto ${expression}$. Calculer $${nomdef}(${x})$.`
			
			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',5,'1 : Fonctions affines\n2 : Polynome du second degré\n3 : Quotient\n4 : Produit \n5 : Mélange'];
}

/**
* Déterminer l'image d'un nombre par une fonction d'après sa forme algébrique
*
* * Niveau 1 : Fonctions affines
* * Niveau 2 : Polynôme du second degré
* * Niveau 3 : Quotients de fonctions affines
* * Niveau 4 : (ax+b)(cx+d)
* * Niveau 5 : Mélange 
* @Auteur Rémi Angot
*/
function Tableau_de_valeurs(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Compléter un tableau de valeurs";
	this.consigne = "";
	this.nb_questions = 1;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1;
	this.sup = 5; // niveau de difficulté
	this.correction_detaillee_disponible = true;

	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées

		let type_de_questions_disponibles = [];
		if (this.sup==1) {
			type_de_questions_disponibles = ['ax+b','ax'];
		} 
		if (this.sup==2) {
			type_de_questions_disponibles = ['ax2+bx+c','ax2+c','ax2+bx'];
		} 
		if (this.sup==3) {
			type_de_questions_disponibles = ['a/cx+d','ax+b/cx+d'];
		}
		if (this.sup==4) {
			type_de_questions_disponibles = ['(ax+b)(cx+d)','(ax+b)2'];
		}
		if (this.sup==5) {
			type_de_questions_disponibles = ['ax+b','ax','ax2+bx+c','ax2+c','ax2+bx','a/cx+d','ax+b/cx+d','(ax+b)(cx+d)','(ax+b)2']
		}
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions); // Tous les types de questions sont posées mais l'ordre diffère à chaque "cycle"
		let liste_de_x = combinaison_listes([[-3,0,3],[-2,0,2],[1,2,5],[-3,6,9]],this.nb_questions); 
		for (let i = 0, texte, texte_corr, a, b, c, d,x1, x2, x3, expression, nomdef, ligne2, calculs="", cpt=0; i < this.nb_questions && cpt<50; ) {
			nomdef = lettre_minuscule_depuis_chiffre(6+i) // on commence par f puis on continue dans l'ordre alphabétique
			x1=liste_de_x[i][0];
			x2=liste_de_x[i][1];
			x3=liste_de_x[i][2];
			switch (liste_type_de_questions[i]){
				case 'ax+b': 
					a = randint(-10,10,[0,-1,1])
					b = randint(-10,10,[0])
					expression = `${a}x${ecriture_algebrique(b)}`
					ligne2 = `${nomdef}(x) & ${a*liste_de_x[i][0]+b} & ${a*liste_de_x[i][1]+b} & ${a*liste_de_x[i][2]+b} \\\\\n`
					calculs = `$${nomdef}(${x1})=${a}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(b)}=${a*x1}${ecriture_algebrique(b)}=${a*x1+b}$<br>`
					calculs += `$${nomdef}(${x2})=${a}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(b)}=${a*x2}${ecriture_algebrique(b)}=${a*x2+b}$<br>`
					calculs += `$${nomdef}(${x3})=${a}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(b)}=${a*x3}${ecriture_algebrique(b)}=${a*x3+b}$<br>`
				break;
				case 'ax': 
					a = randint(-10,10,[0,-1,1])
					expression = `${a}x`
					ligne2 = `${nomdef}(x) & ${a*liste_de_x[i][0]} & ${a*liste_de_x[i][1]} & ${a*liste_de_x[i][2]} \\\\\n`
					calculs = `$${nomdef}(${x1})=${a}\\times${ecriture_parenthese_si_negatif(x1)}=${a*x1}$<br>`
					calculs += `$${nomdef}(${x2})=${a}\\times${ecriture_parenthese_si_negatif(x2)}=${a*x2}$<br>`
					calculs += `$${nomdef}(${x3})=${a}\\times${ecriture_parenthese_si_negatif(x3)}=${a*x3}$<br>`
				break;
				case 'ax2+bx+c':
					a = randint(-3,3,[0,-1,1])
					b = randint(-5,5,[0,-1,1])
					c = randint(-10,10,[0])
					expression = `${a}x^2${ecriture_algebrique(b)}x${ecriture_algebrique(c)}`
					ligne2 = `${nomdef}(x) & ${a*liste_de_x[i][0]**2+b*liste_de_x[i][0]+c} & ${a*liste_de_x[i][1]**2+b*liste_de_x[i][1]+c} & ${a*liste_de_x[i][2]**2+b*liste_de_x[i][2]+c} \\\\\n`
					calculs = `$${nomdef}(${x1})=${a}\\times${ecriture_parenthese_si_negatif(x1)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(c)}=${a}\\times${x1**2}${ecriture_algebrique(b*x1)}${ecriture_algebrique(c)}=${a*x1**2+b*x1+c}$<br>`
					calculs += `$${nomdef}(${x2})=${a}\\times${ecriture_parenthese_si_negatif(x2)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(c)}=${a}\\times${x2**2}${ecriture_algebrique(b*x2)}${ecriture_algebrique(c)}=${a*x2**2+b*x2+c}$<br>`
					calculs += `$${nomdef}(${x3})=${a}\\times${ecriture_parenthese_si_negatif(x3)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(c)}=${a}\\times${x3**2}${ecriture_algebrique(b*x3)}${ecriture_algebrique(c)}=${a*x3**2+b*x3+c}$<br>`
				break;
				case 'ax2+c':
					a = randint(-4,4,[0,-1,1])
					c = randint(-10,10,[0])
					expression = `${a}x^2${ecriture_algebrique(c)}`
					ligne2 = `${nomdef}(x) & ${a*liste_de_x[i][0]**2+c} & ${a*liste_de_x[i][1]**2+c} & ${a*liste_de_x[i][2]**2+c} \\\\\n`
					calculs = `$${nomdef}(${x1})=${a}\\times${ecriture_parenthese_si_negatif(x1)}^2${ecriture_algebrique(c)}=${a}\\times${x1**2}${ecriture_algebrique(c)}=${a*x1**2+c}$<br>`
					calculs += `$${nomdef}(${x2})=${a}\\times${ecriture_parenthese_si_negatif(x2)}^2${ecriture_algebrique(c)}=${a}\\times${x2**2}${ecriture_algebrique(c)}=${a*x2**2+c}$<br>`
					calculs += `$${nomdef}(${x3})=${a}\\times${ecriture_parenthese_si_negatif(x3)}^2${ecriture_algebrique(c)}=${a}\\times${x3**2}${ecriture_algebrique(c)}=${a*x3**2+c}$<br>`
				break;
				case 'ax2+bx':
					a = randint(-3,3,[0,-1,1])
					b = randint(-5,5,[0,-1,1])
					c = randint(-10,10,[0])
					expression = `${a}x^2${ecriture_algebrique(b)}x`
					ligne2 = `${nomdef}(x) & ${a*liste_de_x[i][0]**2+b*liste_de_x[i][0]} & ${a*liste_de_x[i][1]**2+b*liste_de_x[i][1]} & ${a*liste_de_x[i][2]**2+b*liste_de_x[i][2]} \\\\\n`
					calculs = `$${nomdef}(${x1})=${a}\\times${ecriture_parenthese_si_negatif(x1)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x1)}=${a}\\times${x1**2}${ecriture_algebrique(b*x1)}=${a*x1**2+b*x1}$<br>`
					calculs += `$${nomdef}(${x2})=${a}\\times${ecriture_parenthese_si_negatif(x2)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x2)}=${a}\\times${x2**2}${ecriture_algebrique(b*x2)}=${a*x2**2+b*x2}$<br>`
					calculs += `$${nomdef}(${x3})=${a}\\times${ecriture_parenthese_si_negatif(x3)}^2${ecriture_algebrique(b)}\\times${ecriture_parenthese_si_negatif(x3)}=${a}\\times${x3**2}${ecriture_algebrique(b*x3)}=${a*x3**2+b*x3}$<br>`
				break;
				case 'a/cx+d': 
					a = randint(-10,10,[0])
					c = randint(-10,10,[0,-1,1])
					d = randint(-10,10,[0])
					while (c*x1+d==0 || c*x2+d==0 || c*x3+d==0){
						c = randint(-10,10,[0,-1,1])
					}
					expression = `\\dfrac{${a}}{${c}x${ecriture_algebrique(d)}}`
					ligne2 = `${nomdef}(x) & ${tex_fraction_reduite(a,c*liste_de_x[i][0]+d)} & ${tex_fraction_reduite(a,c*liste_de_x[i][1]+d)} & ${tex_fraction_reduite(a,c*liste_de_x[i][2]+d)} \\\\\n`
					calculs = `$${nomdef}(${x1})=\\dfrac{${a}}{${c}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x1}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x1+d}}`
						if (pgcd(a,c*x1+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a,c*x1+d)+'$<br><br>'
						}
					calculs += `$${nomdef}(${x2})=\\dfrac{${a}}{${c}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x2}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x2+d}}`
						if (pgcd(a,c*x2+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a,c*x2+d)+'$<br><br>'
						}
					calculs += `$${nomdef}(${x3})=\\dfrac{${a}}{${c}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x3}${ecriture_algebrique(d)}}=\\dfrac{${a}}{${c*x3+d}}`
						if (pgcd(a,c*x3+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a,c*x3+d)+'$<br><br>'
						}
				break;
				case 'ax+b/cx+d': 
					a = randint(-10,10,[0,1,-1])
					b = randint(-10,10,[0])
					c = randint(-10,10,[0,-1,1])
					d = randint(-10,10,[0])
					while (c*x1+d==0 || c*x2+d==0 || c*x3+d==0){
						c = randint(-10,10,[0,-1,1])
					}
					expression = `\\dfrac{${a}x${ecriture_algebrique(b)}}{${c}x${ecriture_algebrique(d)}}`
					ligne2 = `${nomdef}(x) & ${tex_fraction_reduite(a*liste_de_x[i][0]+b,c*liste_de_x[i][0]+d)} & ${tex_fraction_reduite(a*liste_de_x[i][1]+b,c*liste_de_x[i][1]+d)} & ${tex_fraction_reduite(a*liste_de_x[i][2]+b,c*liste_de_x[i][2]+d)} \\\\\n`
					calculs = `$${nomdef}(${x1})=\\dfrac{${a}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(b)}}{${c}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(d)}}=\\dfrac{${a*x1}${ecriture_algebrique(b)}}{${c*x1}${ecriture_algebrique(d)}}=\\dfrac{${a*x1+b}}{${c*x1+d}}`
						if (pgcd(a*x1+b,c*x1+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a*x1+b,c*x1+d)+'$<br><br>'
						}
					calculs += `$${nomdef}(${x2})=\\dfrac{${a}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(b)}}{${c}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(d)}}=\\dfrac{${a*x2}${ecriture_algebrique(b)}}{${c*x2}${ecriture_algebrique(d)}}=\\dfrac{${a*x2+b}}{${c*x2+d}}`
						if (pgcd(a*x2+b,c*x2+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a*x2+b,c*x2+d)+'$<br><br>'
						}
					calculs += `$${nomdef}(${x3})=\\dfrac{${a}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(b)}}{${c}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(d)}}=\\dfrac{${a*x3}${ecriture_algebrique(b)}}{${c*x3}${ecriture_algebrique(d)}}=\\dfrac{${a*x3+b}}{${c*x3+d}}`
						if (pgcd(a*x3+b,c*x3+d)==1){
							calculs +='$<br><br>'
						} else {
							calculs += '='+tex_fraction_reduite(a*x3+b,c*x3+d)+'$<br><br>'
						}
				break;
				case '(ax+b)(cx+d)': 
					a = randint(-5,5,[0,1,-1])
					b = randint(-5,5,[0])
					c = randint(-3,3,[0,-1,1])
					d = randint(-3,3,[0])
					if (a<0 && b<0 && c<0 && d<0) {
						d=randint(1,3)
					}
					expression = `(${a}x${ecriture_algebrique(b)})(${c}x${ecriture_algebrique(d)})`
					ligne2 = `${nomdef}(x) & ${(a*liste_de_x[i][0]+b)*(c*liste_de_x[i][0]+d)} & ${(a*liste_de_x[i][1]+b)*(c*liste_de_x[i][1]+d)} & ${(a*liste_de_x[i][2]+b)*(c*liste_de_x[i][2]+d)} \\\\\n`
					calculs = `$${nomdef}(${x1})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(b)}\\right)\\left(${c}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(d)}\\right)=(${a*x1}${ecriture_algebrique(b)})(${c*x1}${ecriture_algebrique(d)})=${a*x1+b}\\times ${ecriture_parenthese_si_negatif(c*x1+d)}=${(a*x1+b)*(c*x1+d)}$<br>`
					calculs += `$${nomdef}(${x2})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(b)}\\right)\\left(${c}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(d)}\\right)=(${a*x2}${ecriture_algebrique(b)})(${c*x2}${ecriture_algebrique(d)})=${a*x2+b}\\times ${ecriture_parenthese_si_negatif(c*x2+d)}=${(a*x2+b)*(c*x2+d)}$<br>`
					calculs += `$${nomdef}(${x3})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(b)}\\right)\\left(${c}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(d)}\\right)=(${a*x3}${ecriture_algebrique(b)})(${c*x3}${ecriture_algebrique(d)})=${a*x3+b}\\times ${ecriture_parenthese_si_negatif(c*x3+d)}=${(a*x3+b)*(c*x3+d)}$<br>`
				break;
				case '(ax+b)2': 
					a = randint(-3,3,[0,1,-1])
					b = randint(-3,3,[0])
					expression = `(${a}x${ecriture_algebrique(b)})^2`
					ligne2 = `${nomdef}(x) & ${(a*liste_de_x[i][0]+b)**2} & ${(a*liste_de_x[i][1]+b)**2} & ${(a*liste_de_x[i][2]+b)**2} \\\\\n`
					calculs = `$${nomdef}(${x1})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x1)}${ecriture_algebrique(b)}\\right)^2=(${a*x1}${ecriture_algebrique(b)})^2=${ecriture_parenthese_si_negatif(a*x1+b)}^2=${(a*x1+b)**2}$<br>`
					calculs += `$${nomdef}(${x2})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x2)}${ecriture_algebrique(b)}\\right)^2=(${a*x2}${ecriture_algebrique(b)})^2=${ecriture_parenthese_si_negatif(a*x2+b)}^2=${(a*x2+b)**2}$<br>`
					calculs += `$${nomdef}(${x3})=\\left(${a}\\times${ecriture_parenthese_si_negatif(x3)}${ecriture_algebrique(b)}\\right)^2=(${a*x3}${ecriture_algebrique(b)})^2=${ecriture_parenthese_si_negatif(a*x3+b)}^2=${(a*x3+b)**2}$<br>`
				
				break;
			}


			texte = `On considère la fonction $${nomdef}$ définie par $${nomdef}(x):x\\mapsto ${expression}$. Compléter le tableau de valeurs suivant.`
			texte_corr = ''
			texte += `<br><br>`
			if (sortie_html) {
				texte += `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|}\n`
			} else {
				texte += `$\\begin{array}{|l|c|c|c|}\n`
			}
		
			texte += `\\hline\n`
			texte += `x & ${liste_de_x[i][0]} & ${liste_de_x[i][1]} & ${liste_de_x[i][2]} \\\\\n`
			texte += `\\hline\n`
			texte += `${nomdef}(x) & \\phantom{-10} & \\phantom{-10} & \\phantom{-10} \\\\\n`
			texte += `\\hline\n`
			texte += `\\end{array}\n$`


			if (sortie_html) {
				texte_corr = `$\\def\\arraystretch{2.5}\\begin{array}{|l|c|c|c|}\n`
			} else {
				texte_corr = `$\\begin{array}{|l|c|c|c|}\n`
			}
		
			texte_corr += `\\hline\n`;
			texte_corr += `x & ${liste_de_x[i][0]} & ${liste_de_x[i][1]} & ${liste_de_x[i][2]} \\\\\n`;
			texte_corr += `\\hline\n`;
			texte_corr += ligne2;
			texte_corr += `\\hline\n`;
			texte_corr += `\\end{array}\n$`;
			if (this.correction_detaillee){
				texte_corr += '<br><br>';
				texte_corr += calculs;	
			}
			


			
			if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;	
		}
		this.nb_questions==1 ? liste_de_question_to_contenu_sans_numero(this) : liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',5,'1 : Fonctions affines\n2 : Polynome du second degré\n3 : Quotient\n4 : Produit \n5 : Mélange'];
}

/**
* @auteur Jean-Claude Lhote
*/
function Double_distributivite()
{
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Utiliser la double distributivité";
	this.consigne = "Développer et réduire les expressions suivantes.";
	this.nb_cols = 1 ;
	this.nb_cols_corr = 1 ;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup = 1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		let type_de_questions_disponibles = [1,2] ;
		if (this.sup==2) {
			type_de_questions_disponibles = [3,4]
		}
		if (this.sup==3) {
			type_de_questions_disponibles = [1,2,3,4]
		}


		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c, d; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(2,9);
			b = randint(2,9);
			c = randint(2,9,[a]);
			d = randint(2,9,[b]);
			switch(type_de_questions){
			case 1 : //(x+b)(x+d)
				b = randint(2,10)
				d = randint(2,12)
				texte = `$(x+${b})(x+${d})$`
				texte_corr = `$(x+${b})(x+${d})=x^2+${b}x+${d}x+${b*d}=x^2+${b+d}x+${b*d}$`
				break;
			case 2 : //(ax+b)(cx+d)
				texte = `$(${a}x+${b})(${c}x+${d})$`
				texte_corr = `$(${a}x+${b})(${c}x+${d})=${a*c}x^2+${a*d}x+${b*c}x+${b*d}=${a*c}x^2+${a*d+b*c}x+${b*d}$`
				break;
			case 3 ://(ax-b)(cx+d)
				texte = `$(${a}x-${b})(${c}x+${d})$`
				texte_corr = `$(${a}x-${b})(${c}x+${d})=${a*c}x^2+${d*a}x-${b*c}x-${b*d}=${a*c}x^2+${d*a}x-${b*c}x-${b*d}$`;
				break;
			case 4 ://(ax-b)(cx-d)
				texte = `$(${a}x-${b})(${c}x-${d})$`
				texte_corr = `$(${a}x-${b})(${c}x-${d})=${a*c}x^2-${a*d}x-${b*c}x+${b*d}=${a*c}x^2-${a*d+b*c}x+${b*d}$`
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : (x+a)(x+b) et (ax+b)(cx+d)\n 2 : (ax-b)(cx+d) et (ax-b)(cx-d)\n 3 : Tous les types'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Developper_Identites_remarquables2()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Développer avec les identités remarquables";
	this.consigne = "Développer les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		if(this.sup==1){
		    type_de_questions_disponibles = [1,2,3] // coef de x = 1
        }
        else if (this.sup==2) {
		    type_de_questions_disponibles = [4,5,6]  // coef de x > 1
        }
        else {type_de_questions_disponibles = [7,8,9]}  // coef de x relatif
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(1,9);
			b = randint(2,9);
			fraction = choice(liste_fractions);
			ns=fraction[0]
			ds=fraction[1]
			switch(type_de_questions){
			case 1 :
				texte = `$(x+${a})^2$`; // (x+a)²
				texte_corr = `$(x+${a})^2=x^2+2 \\times ${a} \\times x+${a}^2=x^2+${2*a}x+${a*a}$` ; 
				break;
			case 2 :
			texte = `$(x-${a})^2$`  // (x-a)²
				texte_corr = `$(x-${a})^2=x^2-2 \\times ${a} \\times x+${a}^2=x^2-${2*a}x+${a*a}$` ; 
				break;
			case 3 :
				texte = `$(x-${a})(x+${a})$`    // (x-a)(x+a)
				texte_corr = `$(x-${a})(x+${a})=x^2-${a}^2=x^2-${a*a}$` ; 
				break;
			case 4 :
				texte = `$(${b}x+${a})^2$`; //(bx+a)²  b>1
			    texte_corr = `$(${b}x+${a})^2=(${b}x)^2+2 \\times ${b}x \\times ${a} + ${a}^2=${b*b}x^2+${2*b*a}x+${a*a}$`;
				break;
			case 5 :
				texte = `$(${b}x-${a})^2$`; //(bx-a)² b>1
			    texte_corr = `$(${b}x-${a})^2=(${b}x)^2-2 \\times ${b}x \\times ${a} + ${a}^2=${b*b}x^2-${2*b*a}x+${a*a}$`;
				break;
			case 6 :
				texte = `$(${b}x-${a})(${b}x+${a})$`; //(bx-a)(bx+a) b>1
			    texte_corr = `$(${b}x-${a})(${b}x+${a})=(${b}x)^2-${a}^2=${b*b}x^2-${a*a}$`;
                break;
			case 7 :
				texte = `$\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2$`; // (kx+a)² k rationnel 
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2=\\left(${tex_fraction(ns,ds)}x\\right)^2+2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2=${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction_reduite(ns*2*a,ds)}x+${a*a}$`;
				break;
			case 8 :
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2$`; // (kx-a)² k rationnel 
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2=\\left(${tex_fraction(ns,ds)}x\\right)^2-2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fractionreduite(ns*2*a,ds)}x+${a*a}$`;
				break;
			case 9 :
				//  (bx-a)(bx+a) avec a entier et b rationnel simple
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`; // b>1
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`;
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x relatif'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Developper_Identites_remarquables3()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Développer (a-b)(a+b)";
	this.consigne = "Développer les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;


	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			if(this.sup==1){
				a= randint(1,9);	 // coef de x est égal à 1
				texte = `$(x-${a})(x+${a})$`    // (x-a)(x+a)
				texte_corr = `$(x-${a})(x+${a})=x^2-${a}^2=x^2-${a*a}$` ; 
			}
			else if (this.sup==2) {
				a= randint(1,9)  // (bx-a)(bx+a) avec a et b entier positifs entre 1 et 9,  b différent de 1
				b = randint(2,9);
				texte = `$(${b}x-${a})(${b}x+${a})$`; // b>1
			    texte_corr = `$(${b}x-${a})(${b}x+${a})=(${b}x)^2-${a}^2=${b*b}x^2-${a*a}$`;
			}
			else {   //  (bx-a)(bx+a) avec a entier et b rationnel simple
				a= randint(1,9);
				fraction = choice(liste_fractions);
				ns=fraction[0]
				ds=fraction[1]
				texte = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`; // b>1
				texte_corr = `$\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`;
				}
			
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x rationnel'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Factoriser_Identites_remarquables3()
{
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Factoriser a²-b²";
	this.consigne = "Factoriser les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		for (let i = 0, texte, texte_corr, cpt=0, a, b, c ; i < this.nb_questions && cpt<50 ;) {
			if(this.sup==1){
				a= randint(1,9);	 // coef de x est égal à 1
				texte = `$x^2-${a*a}$`    // (x-a)(x+a)
				texte_corr = `$x^2-${a*a}=x^2-${a}^2=(x-${a})(x+${a})$` ; 
			}
			else if (this.sup==2) {
				a= randint(1,9)  // (bx-a)(bx+a) avec a et b entier positifs entre 1 et 9,  b différent de 1
				b = randint(2,9);
				texte = `$${b*b}x^2-${a*a}$`; // b>1
			    texte_corr = `$${b*b}x^2-${a*a}=(${b}x)^2-${a}^2=(${b}x-${a})(${b}x+${a})$`;
			}
			else {   //  (bx-a)(bx+a) avec a entier et b rationnel simple
				a= randint(1,9);
				fraction = choice(liste_fractions);
				ns=fraction[0]
				ds=fraction[1]
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`; // b>1
				   texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`;
		
			}  
				
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x rationnel'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Factoriser_Identites_remarquables2()
{
Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Factoriser avec les identités remarquables";
	this.consigne = "Factoriser les expressions suivantes.";
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.spacing = 1 ;
	this.spacing_corr = 1 ;
	this.nb_questions = 5 ;
	this.sup=1 ;

	this.nouvelle_version = function(numero_de_l_exercice) {
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		if(this.sup==1){
		    type_de_questions_disponibles = [1,2,3] // coef de x = 1
        }
        else if (this.sup==2) {
		    type_de_questions_disponibles = [4,5,6]  // coef de x > 1
        }
        else {type_de_questions_disponibles = [7,8,9]}  // coef de x rationnel
		
		let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions)
		for (let i = 0, texte, texte_corr, cpt=0, a, b ; i < this.nb_questions && cpt<50 ;) {
			type_de_questions = liste_type_de_questions[i];
			a= randint(1,9);
			b = randint(2,9);
			fraction = choice(liste_fractions);
			ns=fraction[0]
			ds=fraction[1]
        	switch(type_de_questions){
			case 1 :
				texte = `$x^2+${2*a}x+${a*a}$`; // (x+a)²
				texte_corr = `$x^2+${2*a}x+${a*a}=x^2+2 \\times ${a} \\times x+${a}^2=(x+${a})^2$` ; 
				break;
			case 2 :
			texte = `$x^2-${2*a}x+${a*a}$`  // (x-a)²
				texte_corr = `$x^2-${2*a}x+${a*a}=(x-${a})^2=x^2-2 \\times ${a} \\times x+${a}^2=(x-${a})^2$` ; 
				break;
			case 3 :
				texte = `$x^2-${a*a}$`    // (x-a)(x+a)
				texte_corr = `$x^2-${a*a}=x^2-${a}^2=(x-${a})(x+${a})$` ; 
				break;
			case 4 :
				texte = `$${b*b}x^2+${2*b*a}x+${a*a}$`; //(bx+a)²  b>1
			    texte_corr = `$${b*b}x^2+${2*b*a}x+${a*a}=(${b}x)^2+2 \\times ${b}x \\times {a} + ${a}^2=(${b}x+${a})^2$`;
				break;
			case 5 :
				texte = `$${b*b}x^2-${2*b*a}x+${a*a}$`; //(bx-a)² b>1
			    texte_corr = `$${b*b}x^2-${2*b*a}x+${a*a}=(${b}x)^2-2 \\times ${b}x \\times {a} + ${a}^2=(${b}x-${a})^2$`;
				break;
			case 6 :
				texte = `$${b*b}x^2-${a*a}$`; //(bx-a)(bx+a) b>1
			    texte_corr = `$${b*b}x^2-${a*a}=(${b}x)^2-${a}^2=(${b}x-${a})(${b}x+${a})$`;
                break;
            case 7 :
		
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction(2*ns*a,ds)}x+${a*a}$`; // (kx+a)² k rationnel 
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2+${tex_fraction(ns*2*a,ds)}x+${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2+2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x+${a}\\right)^2$`;
				break;
			case 8 :
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fraction(2*ns*a,ds)}x+${a*a}$`; // (kx-a)² k rationnel 
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${tex_fraction(ns*2*a,ds)}x+${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-2 \\times ${tex_fraction(ns,ds)}x \\times ${a} + ${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)^2$`;
				break;
			case 9 :
				//  (bx-a)(bx+a) avec a entier et b rationnel simple
				texte = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}$`; // b>1
				texte_corr = `$${tex_fraction(ns*ns,ds*ds)}x^2-${a*a}=\\left(${tex_fraction(ns,ds)}x\\right)^2-${a}^2=\\left(${tex_fraction(ns,ds)}x-${a}\\right)\\left(${tex_fraction(ns,ds)}x+${a}\\right)$`;
				break;
			}
			if (this.liste_questions.indexOf(texte)==-1) {
				 // Si la question n'a jamais été posée, on en créé une autre
				this.liste_questions.push(texte);
				this.liste_corrections.push(texte_corr);
				i++;
			}
			cpt++;
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',3,'1 : Coefficient de x égal à 1\n 2 : Coefficient de x supérieur à 1\n 3 : Coefficient de x relatif'] ;
}

/**
* @auteur Jean-Claude Lhote
*/
function Resoudre_une_equation_produit_nul(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Résoudre une équation produit nul";
	this.consigne = "Résoudre les équations suivantes";
	this.nb_questions = 5;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1; 
	sortie_html ? this.spacing_corr=2 : this.spacing_corr=1.5
	this.spacing = 1
	
	
	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		liste_fractions = [[1,2],[1,3],[2,3],[1,4],[3,4],[1,5],[2,5],[3,5],[4,5],
 		[1,6],[5,6],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[1,8],[3,8],[5,8],[7,8],
 		[1,9],[2,9],[4,9],[5,9],[7,9],[8,9],[1,10],[3,10],[7,10],[9,10]]
		let liste_type_de_questions=[]
		switch (parseInt(this.sup)) {
			case 1: liste_type_de_questions=combinaison_listes([1,2],this.nb_questions);
				break;
			case 2: liste_type_de_questions=combinaison_listes([3,4],this.nb_questions);
				break;
			case 3: liste_type_de_questions=combinaison_listes([5,6],this.nb_questions);
				break;
			case 4: liste_type_de_questions=combinaison_listes([1,2,3,4,5,6],this.nb_questions);

		}
		for (let i = 0, a, b, c, d, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt<50;) {
			fraction1 = choice(liste_fractions);
			ns1=fraction1[0]
			ds1=fraction1[1]
			fraction2 = choice(liste_fractions);
			ns2=fraction2[0]
			ds2=fraction2[1]
			switch (liste_type_de_questions[i]) {
			case 1: b = randint(1,20); // (x+a)(x+b)=0 avec a et b entiers
					d = randint(1,20,[b])
					texte = `$(x+${b})(x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(x+${b})(x+${d})=0$`
					texte_corr +='<br> Soit '+`$x+${b}=0$`+' ou '+`$x+${d}=0$`
					texte_corr += '<br> Donc '+`$x=${0-b}$`+' ou '+`$x=${0-d}$`
				break;
			case 2: b = randint(1,20); // (x-a)(x+b)=0 avec a et b entiers
					d = randint(1,20,[b])
					texte = `$(x-${b})(x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(x-${b})(x+${d})=0$`
					texte_corr += '<br> Soit '+`$x-${b}=0$`+' ou  '+`$x+${d}=0$`
					texte_corr += '<br> Donc '+`$x=${b}$`+' ou '+`$x=${0-d}$`
				break;
				
			case 3: a = randint(2,6); 	//(ax+b)(cx+d)=0  avec b/a et d/c entiers.
					b = Math.round(randint(1,5)*a);
					c = randint(2,6,[a]);
					d = Math.round(randint(1,5)*c);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x+${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${0-d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`+' ou '+`$x=-${tex_fraction(d,c)}$`
					texte_corr += '<br> Donc '+`$x=${0-b/a}$`+' ou '+`$x=${0-d/c}$`
				break;
			case 4: a = randint(2,6); 	//(ax+b)(cx-d)=0  avec b/a et d/c entiers.
					b = Math.round(randint(1,5)*a);
					c = randint(2,6,[a]);
					d = Math.round(randint(1,5)*c);
					texte = `$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x-${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`+' ou '+`$x=${tex_fraction(d,c)}$`
					texte_corr += '<br> Donc '+`$x=${0-b/a}$`+' ou '+`$x=${d/c}$`
				break;
			case 5:
					a = randint(2,9);	//(ax+b)(cx+d)=0 	avec b/a et d/c quelconques.
					b = randint(1,20,[a]);
					c = randint(2,9,[a]);
					d = randint(1,20,[b,c]);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x+${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${0-d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`
					if (tex_fraction(b,a)!=tex_fraction_reduite(b,a)) {texte_corr+=`$=-${tex_fraction_reduite(b,a)}$`}
					texte_corr+=' ou '+`$x=-${tex_fraction(d,c)}$`
					if (tex_fraction(d,c)!=tex_fraction_reduite(d,c)) {texte_corr+=`$=-${tex_fraction_reduite(d,c)}$`}
				break;
			case 6:
					a = randint(2,9);	//(ax+b)(cx-d)=0 	avec b/a et d/c quelconques.
					b = randint(1,20,[a]);
					c = randint(2,9,[a]);
					d = randint(1,20,[b,c]);
					texte = `$(${a}x+${b})(${c}x+${d})=0$`
					texte_corr = 'Un produit est nul si l\'un au moins de ses facteurs est nul.'
					texte_corr += '<br>'+`$(${a}x+${b})(${c}x-${d})=0$`
					texte_corr += '<br> Soit '+`$${a}x+${b}=0$`+' ou '+`$${c}x-${d}=0$`
					texte_corr += '<br> Donc '+`$${a}x=${0-b}$`+' ou '+`$${c}x=${d}$`
					texte_corr += '<br> Donc '+`$x=-${tex_fraction(b,a)}$`
					if (tex_fraction(b,a)!=tex_fraction_reduite(b,a)) {texte_corr+=`$=-${tex_fraction_reduite(b,a)}$`}
					texte_corr+=' ou '+`$x=${tex_fraction(d,c)}$`
					if (tex_fraction(d,c)!=tex_fraction_reduite(d,c)) {texte_corr+=`$=${tex_fraction_reduite(d,c)}$`}
					
				break;
		}
		if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
		this.liste_questions.push(texte);
		this.liste_corrections.push(texte_corr);
		// alert(this.liste_questions)
		// alert(this.liste_corrections)
			i++;
		}
		cpt++;	
		}
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Niveau de difficulté',4,'1 : Coefficient de x = 1\n 2 : Coefficient de x>1 et solutions entières\n 3 : Solutions rationnelles\n 4 : Mélange des 3 autres niveaux'];
}

/**
 * 3F1-act - Notion de fonction - vocabulaire
 * L’objectif de revenir sur l'introduction de la notion de fonction et son vocabulaire
 * On base l'exercice sur des calculs simples de type périmètres, aires, double, triple, nombre de diviseurs
 * ATTENTION BUG SVG DONC LES ANIMATIONS SONT FILMEES A PARTIR DE CELLES GENEREES PAR LA FONCTION SVG_machine_maths() SOUS FIREFOX
 * DE FACON A AVOIR UN RENDU UNIFORME QUEL QUE SOIT LE NAVIGATEUR ON REND LES ANIMATIONS PAR DES VIDEOS
 * ON LAISSE LA PIROUETTE DE DETECTION DU USERAGENT EN COMMENTAIRE EN ATTENDANT DE TROUVER UNE SOLUTION DE RENDU LATEX DANS SVG UNIVERSELLE
 * @Auteur Sébastien Lozano
 */
 
function fonction_notion_vocabulaire(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fonctions : Notion et vocabulaire"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	this.consigne += "Lorsqu'un nombre $\\textit{x}$ entre dans une machine mathématique , celle-ci renvoie à la sortie un nombre appelé $\\textit{image de x}$.<br>";
	this.consigne += "On dit que le nombre de départ est un $\\textit{antécédent}$ du nombre qu'on trouve à la sortie.<br>";
	this.consigne += "Ces machines sont appelées $\\textit{fonctions}$, on a l'habitude de leur donner des noms $\\textit{f}$ ou $\\textit{g}$ ou $\\textit{h} \\ldots$";
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	var num_ex = '3F1-act'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	if (sortie_html) {		
		var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
		var hauteur_svg = 100;
	} else { // sortie LaTeX

	};
	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsFonctions','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
//			if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
				this.consigne += machine_maths_video(`videos/machineMathsIntro.mp4`);
			// } else {
			// 	let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
			// 	let id_du_div = `div_svg${id_unique}`;
			// 	this.consigne += `<div id="${id_du_div}" style="width: ${pourcentage}; height: ${hauteur_svg}px; display : table "></div>`;
			// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,maths','---','Procédé','de\\,calcul','antécédent','x','image','y');
			// };
		} else { // sortie LaTeX
			// this.consigne += `machine Tikz HEX #F15929 équivaut à rgb(241,89,41)<br>`;
			this.consigne += tikz_machine_maths('maths','---',`Proc\\acute{e}d\\acute{e}`,'de\\,calcul',`ant\\acute{e}c\\acute{e}dent`,`\\textit{x}`,`image`,`\\textit{y}`);	
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, x,y,z, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
				if (sortie_html) {
					var id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					var id_du_div_diag = `div_svg_diag${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
				}
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						var j = 0; // pour la sous-numérotation
						// question
						if (sortie_html){
							texte = `La $\\mathbf{machine\\,f}$ renvoie le `+katex_Popup(`périmètre`,`Rappel`,`Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés`)+` d'un carré de côté $x$`;
						} else {
							texte = `La $\\mathbf{machine\\,f}$ renvoie le \\textbf{périmètre} \\footnote{\\textbf{Rappel :} Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés} d'un carré de côté $x$`;
						}
						texte += `<br>`;
						// machine						
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							// if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-g.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','carré \\, de','côté \\,'+x+' \\, cm','périmètre','??? \\, cm');							
							// };
						} else { // sortie Latex avec Tikz
							texte += tikz_machine_maths('f','---',`P\\acute{e}rim\\grave{e}tre`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`P\\acute{e}rim\\grave{e}tre`,`???\\,cm`);
						};
						// sous question a/						
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','La valeur du périmètre est l\'image de la valeur du côté')+`<br>`;
							texte_corr = num_alpha(j)+`Si le côté vaut ${x} cm alors la machine renvoie le périmètre d'un carré de côté ${x} cm, c'est à dire $${x}+${x}+${x}+${x} = 4\\times ${x} = ${4*x}$ cm.<br>`;
							texte_corr += `On dit que ${4*x} est l'image de ${x} par la fonction f.<br>`;						
							j++;//incrémente la sous question	
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse avec le mot \\textbf{image} \\footnote{\\textbf{Image :} La valeur du périmètre est l\'image de la valeur du côté}`;														
							texte_corr =`\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le côté vaut ${x} cm alors la machine renvoie le périmètre d'un carré de côté ${x} cm, c'est à dire $${x}+${x}+${x}+${x} = 4\\times ${x} = ${4*x}$ cm.<br>`;
							texte_corr += `On dit que ${4*x} est l'image de ${x} par la fonction f.`;						
						};

						// sous question b/	
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le côté si la machine renvoie  ${4*y} cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent de la valeur d\'un périmètre est une valeur du côté qui a pour image ce périmètre')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie un périmètre de ${4*y} cm alors le côté du carré vaut $${4*y}\\div 4 = ${y}$ cm.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${4*y} par la fonction f.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\item Combien vaut la longueur du côté si la machine renvoie  ${4*y} cm ? Formuler la réponse avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent de la valeur d\'un périmètre est une valeur du côté qui a pour image ce périmètre}`;
							texte_corr += `\\item Si la machine renvoie un périmètre de ${4*y} cm alors le côté du carré vaut $${4*y}\\div 4 = ${y}$ cm.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${4*y} par la fonction f.`;						
						};			

						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?						
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $f$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{f('+z+')=\\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire <b>f(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${z} par la fonction f vaut $f(${z})=4\\times ${z}=${4*z}$.<br>`;
							j++;//incrémente la sous question	
						} else { // sortie LaTeX
							texte += `\\item Quelle est l'image de ${z} par la \\textbf{fonction f} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme $\\mathbf{f(${z})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f(4)=16}$}`;
							texte_corr += `\\ item L'image de ${z} par la fonction f vaut $f(${z})=4\\times ${z}=${4*z}$.<br>`;		
						};

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $x+x+x+x$ ce qui est équivalent à $4\\times x$ .<br>`;
							j++;//incrémente la sous question	
 						} else { // sortie LaTeX
							texte += `\\item   Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += `\\item  Si le côté vaut $x$ la machine renvoie $x+x+x+x$ ce qui est équivalent à $4\\times x$ .<br>`;			
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui triple `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_diag,800,100,'f','x',[['3','3x']]);
							texte_corr += num_alpha(j)+`C'est une machine qui quadruple, donc sous forme de diagramme.<br>`;
							 texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_corr,800,100,'f','x',[['4','4x']]);
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui triple <br> `;
							texte += tikz_machine_diag(`f`,`x`,[[`\\times 3`,`3x`]]);
							texte_corr += `\\item  C'est une machine qui quadruple, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`f`,`x`,[[`\\times 4`,`4x`]]);
						};

						// sous question f/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{f(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire <b>f(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction f vaut $4\\times x$ donc $f(x)=4\\times x$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   \\'{E}crire la réponse à la question d/ sous la forme $\\mathbf{f(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f(4)=16}$}`;							
							texte_corr += `\\item  L'image de $x$ par la fonction f vaut $4\\times x$ donc $f(x)=4\\times x$.<br>`;		
						};

						// sous question g/
						if (sortie_html){
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{f:\\textbf{\\textit{x}}\\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f:4\\longmapsto 16}$');							
							texte+=  `écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction f vaut $4\\times x$ donc $f:x\\longmapsto 4\\times x$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item   En utilisant la forme $\\mathbf{f:\\textbf{\\textit{x}}\\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction f peut s\'écrire $\\mathbf{f:4\\longmapsto 16}$},`;							
							texte+= ` écrire la réponse à la question d/`;
							texte_corr += `\\item  L'image de $x$ par la fonction f vaut $4\\times x$ donc $f:x\\longmapsto 4\\times x$.`;	
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;							
						};
						break;			
					case 2 : // aire d'un carré de côté x
						var j = 0; // pour la sous-numérotation
						if (sortie_html) {
							texte = `La $\\textbf{machine\\,g}$ renvoie `+katex_Popup('l\'aire','Rappel','L\'aire d\'un carré est égale au produit de la longueur de son côté par lui-même.')+` d'un carré de côté $x$`;			
						} else {
							texte = `La $\\textbf{machine\\,g}$ renvoie \\textbf{l\'aire} \\footnote{\\textbf{Rappel :} L\'aire d\'un carré est égale au produit de la longueur de son côté par lui-même.} d'un carré de côté $x$`;			
						}
						texte += `<br>`;
						// machine
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-f.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,g','---','aire','d\'un \\, carré','carré \\, de','côté \\, '+x+'\\, cm','aire','??? \\, cm^2');							
							// };
						} else { // sortie Latex avec Tikz
							//texte += `figure Tikz<br>`;
							texte += tikz_machine_maths('g','---',`Aire`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`Aire`,`???\\,cm^2`);
						};
						// sous question a/	
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','la valeur de l\'aire est l\'image de la valeur du côté')+`<br>`;
							texte_corr = num_alpha(j)+`Si le côté vaut ${x} cm alors la machine renvoie l'aire d'un carré de côté ${x} cm, c'est à dire $${x}\\times ${x}=${x*x}\\,cm^2$.<br>`;
							texte_corr += `On dit que ${x*x} est l'image de ${x} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item  Que renvoie la machine si le côté vaut  ${x}  cm ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image :} La valeur de l\'aire est l\'image de la valeur du côté.}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le côté vaut ${x} cm alors la machine renvoie l'aire d'un carré de côté ${x} cm, c'est à dire $${x}\\times ${x}=${x*x}\\,cm^2$.<br>`;
							texte_corr += `On dit que ${x*x} est l'image de ${x} par la fonction g.<br>`;									
						};
						
						// sous question b/	
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le côté si la machine renvoie  ${y*y} cm<sup>2</sup> ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent de la valeur d\'une aire est une valeur du côté qui a pour image cette aire')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie une aire de $${y*y}\\,cm^2$ alors le côté du carré vaut $\\sqrt{${y*y}}=${y}\\,cm$.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${y*y} par la fonction g.<br>`;						
							j++;//incrémente la sous question	
						} else { //sortie LaTeX
							texte += `\\item  Combien vaut la longueur du côté si la machine renvoie  ${y*y} $cm^2$ ? Formuler la réponse `;
							texte += `avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent de la valeur d\'une aire est une valeur du côté qui a pour image cette aire}<br>`;
							texte_corr += `\\item Si la machine renvoie une aire de $${y*y}\\,cm^2$ alors le côté du carré vaut $\\sqrt{${y*y}}=${y}\\,cm$.<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${y*y} par la fonction g.<br>`;						
						};														
						
						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?							
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $g$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{g('+z+')=\\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire <b>g(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${z} par la fonction g vaut $g(${z})=${z}\\times ${z}=${z*z}$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Quelle est l'image de ${z} par la `; 
							texte += `\\textbf{fonction g} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques.}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{g(${z})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire \\textbf{g(4)=16}}<br>`;
							texte_corr += `\\item L'image de ${z} par la fonction g vaut $g(${z})=${z}\\times ${z}=${z*z}$.<br>`;
						};
						
						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $x\\times x$ ce qui est équivalent à $x^2$ .<br>`;
							j++;//incrémente la sous question	
						} else {
							texte += `\\item  Que renvoie la machine si le côté vaut $x$ cm ?<br>`;
							texte_corr += `\\item Si le côté vaut $x$ la machine renvoie $x\\times x$ ce qui est équivalent à $x^2$ .<br>`;
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_diag,800,100,'g','x',[['2','2x']]);
							texte_corr += num_alpha(j)+`C'est une machine qui multiplie un nombre par lui-même, donc sous forme de diagramme.<br>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;
							SVG_machine_diag_3F1_act_mono(id_du_div_corr,800,100,'g','x',[['x','x²']]);
							j++;//incrémente la sous question
						} else {
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double <br>`;
							texte += tikz_machine_diag(`g`,`x`,[[`\\times 2`,`2x`]]);
							texte_corr += `\\item C'est une machine qui multiplie un nombre par lui-même, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`g`,`x`,[[`\\times x`,`x^2`]]);
						};

						// sous question f/
						if (sortie_html){
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{g(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire <b>g(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction g vaut $x\\times x = x^2$ donc $g(x)=x\\times x=x^2$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous la forme `;
							texte += `$\\mathbf{g(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire \\textbf{g(4)=16}}<br>`;							
							texte_corr += `\\item L'image de $x$ par la fonction g vaut $x\\times x = x^2$ donc $g(x)=x\\times x=x^2$.<br>`;
						};

						// sous question g/
						if (sortie_html){							
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{g:\\textbf{\\textit{x}} \\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction g peut s\'écrire $\\mathbf{g:4\\longmapsto 16}$');							
							texte+= ` écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction g vaut $x\\times x=x^2$ donc $g:x\\longmapsto x\\times x=x^2$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  En utilisant la forme `;
							texte += `$\\mathbf{g:\\textbf{\\textit{x}} \\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction g peut s\'écrire $\\mathbf{g:4\\longmapsto 16}$'}`;							
							texte+= ` écrire la réponse à la question d/ <br>`;
							texte_corr += `\\item L'image de $x$ par la fonction g vaut $x\\times x=x^2$ donc $g:x\\longmapsto x\\times x=x^2$.<br>`;												
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;
						};						
						break;			
					case 3 : // somme de 1 et du triple de x
						var j = 0; // pour la sous-numérotation
						// consigne
						texte = `La $\\mathbf{machine\\,h}$ renvoie la somme du triple de du nombre de départ et de 1.`;						
						texte += `<br>`;
						// machine
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-h.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, h','---','multiplier \\, par \\, 3','ajouter \\, 1','nombre \\, de','départ \\, '+x,'nombre \\, de','sortie \\, ?');
							// };
						} else { // sortie Latex avec Tikz
							texte += tikz_machine_maths('h','---',`Multiplier\\,par\\,3`,`Ajouter\\,1`,`nombre\\,de`,`d\\acute{e}part\\,${x}`,`nombre\\,de`,`sortie\\,?`);
						};
						// sous question a/
						if (sortie_html){
							texte += num_alpha(j)+` Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','l\'image de la valeur à la sortie de la machine')+`<br>`;
							texte_corr = num_alpha(j)+`Si le nombre de départ vaut ${x} alors la machine renvoie $3\\times${x} + 1 = ${3*x+1}$<br>`;
							texte_corr += `On dit que ${3*x+1} est l'image de ${x} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item  Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image :} L\'image de la valeur à la sortie de la machine.}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Si le nombre de départ vaut ${x} alors la machine renvoie $3\\times${x} + 1 = ${3*x+1}$<br>`;
							texte_corr += `On dit que ${3*x+1} est l'image de ${x} par la fonction g.<br>`;						
						};

						// sous question b/
						y = randint(2,99,[x]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Combien vaut le nombre de départ si la machine renvoie  ${3*y+1} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot antécédent','Antécédent','un antécédent d\'une valeur de sortie est une valeur du nombre de départ dont l\'image est ce nombre de sortie')+`<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie $${3*y+1}$ alors le nombre de départ vaut $(${3*y+1}-1)\\div 3=${y}$<br>`;
							texte_corr += `On dit que ${y} est <b>un</b> antécédent de ${3*y+1} par la fonction g.<br>`;						
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\item  Combien vaut le nombre de départ si la machine renvoie  ${3*y+1} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{antécédent} \\footnote{\\textbf{Antécédent :} Un antécédent d\'une valeur de sortie est une valeur du nombre de départ dont l\'image est ce nombre de sortie.}<br>`;
							texte_corr += `\\item Si la machine renvoie $${3*y+1}$ alors le nombre de départ vaut $(${3*y+1}-1)\\div 3=${y}$<br>`;
							texte_corr += `On dit que ${y} est \\textbf{un} antécédent de ${3*y+1} par la fonction g.<br>`;						
						};														

						// sous question c/
						z = randint(2,99,[x,y]);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
							texte += num_alpha(j)+` Quelle est l'image de ${-z} par la `; 
							texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
							texte += ` $h$ ? &Eacute;crire la réponse sous la forme `;
							texte += katex_Popup('$\\mathbf{h('+(-z)+')=\\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire <b>h(4)=16</b>')+`<br>`;
							texte_corr += num_alpha(j)+`L'image de ${-z} par la fonction h vaut $h(${-z})=3\\times (${-z})+1=${-3*z+1}$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Quelle est l'image de ${-z} par la `; 
							texte += `\\textbf{fonction h} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{h(${-z})=\\ldots}$ \\footnote{\\textbf{Notation : } 4 a pour image 16 par la fonction h peut s\'écrire \\textbf{h(4)=16}}<br>`;
							texte_corr += `\\item L'image de ${-z} par la fonction h vaut $h(${-z})=3\\times (${-z})+1=${-3*z+1}$.<br>`;
						};

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le côté vaut $x$ ?<br>`;
							texte_corr += num_alpha(j)+`Si le côté vaut $x$ la machine renvoie $3\\times x + 1$ ce qui est équivalent à $3x + 1$ .<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  Que renvoie la machine si le côté vaut $x$ ?<br>`;
							texte_corr += `\\item Si le côté vaut $x$ la machine renvoie $3\\times x + 1$ ce qui est équivalent à $3x + 1$ .<br>`;
							j++;//incrémente la sous question
						};

						// sous question e/
						if (sortie_html) {
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-1)+` sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double puis qui ajoute 5 `;
							texte += `<div id="${id_du_div_diag}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;						 
							SVG_machine_diag_3F12(id_du_div_diag,800,100,'h','x',[['2','2x'],['5','2x+5']]);
							texte_corr += num_alpha(j)+`C'est une machine qui triple un nombre et ajoute 1, donc sous forme de diagramme.<br>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;							
							SVG_machine_diag_3F12(id_du_div_corr,800,100,'h','x',[['3','3x'],['1','3x+1']]);
							j++;//incrémente la sous question
						} else {
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous forme de diagramme.<br>`;
							texte += `Voici le diagramme d'une machine qui double puis qui ajoute 5 <br>`;
							texte += tikz_machine_diag(`h`,`x`,[[`\\times 2`,`2x`],[`+5`,`2x+5`]]);
							texte_corr += `\\item C'est une machine qui triple un nombre et ajoute 1, donc sous forme de diagramme.<br>`;
							texte_corr += tikz_machine_diag(`h`,`x`,[[`\\times 3`,`3x`],[`+1`,`3x+1`]]);
						};

						// sous question f/
						if (sortie_html){
							texte += num_alpha(j)+` &Eacute;crire la réponse à la question `+num_alpha(j-2)+` sous la forme `;
							texte += katex_Popup('$\\mathbf{h(\\textbf{\\textit{x}})=\\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire <b>h(4)=16</b>')+`<br>`;							
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction h vaut $3\\times x + 1 = 3x + 1$ donc $h(x)=3\\times x + 1$ soit $h(x) = 3x + 1$.<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  \\'{E}crire la réponse à la question d/ sous la forme `;
							texte += `$\\mathbf{h(\\textbf{\\textit{x}})=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction h peut s\'écrire \\textbf{h(4)=16}}<br>`;							
							texte_corr += `\\item L'image de $x$ par la fonction h vaut $3\\times x + 1 = 3x + 1$ donc $h(x)=3\\times x + 1$ soit $h(x) = 3x + 1$.<br>`;
						};
						
						// sous question g/
						if (sortie_html){							
							texte += num_alpha(j)+` En utilisant la forme `;
							texte += katex_Popup('$\\mathbf{h:\\textbf{\\textit{x}} \\longmapsto \\ldots}$','Notation','4 a pour image 16 par la fonction h peut s\'écrire $\\mathbf{h:4\\longmapsto16}$');
							texte+= ` écrire la réponse à la question `+num_alpha(j-3)+`<br>`;
							texte_corr += num_alpha(j)+`L'image de $x$ par la fonction h vaut $3\\times x +1= 3x + 1$ donc $h : x \\longmapsto 3\\times x + 1$ soit $h : x \\longmapsto 3x + 1$.<br>`;												
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item  En utilisant la forme `;
							texte += `$\\mathbf{h:\\textbf{\\textit{x}} \\longmapsto \\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction h peut s\'écrire $\\mathbf{h:4\\longmapsto16}$}`;
							texte+= ` écrire la réponse à la question d/<br>`;
							texte_corr += `\\item L'image de $x$ par la fonction h vaut $3\\times x +1= 3x + 1$ donc $h : x \\longmapsto 3\\times x + 1$ soit $h : x \\longmapsto 3x + 1$.<br>`;												
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;
						};						
						break;
					case 4 : // nombre de diviseurs de x entier
						var j = 0; // pour la sous-numérotation
						// consigne
						texte = `La $\\mathbf{machine\\,d}$, qui n'accepte que des nombres entiers positifs, renvoie le nombre de diviseurs du nombre de départ.`;
						texte += `<br>`;
						// machine
						x = randint(2,51);//augmenter les possibles pour éviter les questions déjà posées?						
						if (sortie_html) {
							//texte += `<br>`;
							//if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
								texte += machine_maths_video(`videos/machineMaths-d.mp4`);
							// } else {
							// 	texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							// 	SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, d','---','nombre \\enspace total','de  \\, diviseurs','nombre \\, de','départ \\,'+x,'nombre \\, de',' diviseurs');														
							// };
						} else { // sortie Latex avec Tikz
							//texte += `figure Tikz<br>`;
							texte += tikz_machine_maths('d','---',`nombre \\, total`,`de \\, diviseurs`,`nombre\\,de`,`d\\acute{e}part\\,${x}`,`nombre \\, de`,`diviseurs`);
						};
						// sous question a/
						if (sortie_html) {
							texte += num_alpha(j)+` Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += katex_Popup('avec le mot image','Image','l\'image de la valeur à la sortie de la machine')+`<br>`;
							texte_corr = num_alpha(j)+`Pour trouver la liste des diviseurs de ${x} on cherche tous les produits de deux facteurs qui donnent ${x}<br>`;
							j++;//incrémente la sous question
						} else { //sortie LaTeX
							texte += `\\begin{enumerate}[itemsep=1em]`;
							texte += `\\item Que renvoie la machine si le nombre de départ vaut  ${x} ? Formuler la réponse `;
							texte += `avec le mot \\textbf{image} \\footnote{\\textbf{Image : } L\'image de la valeur à la sortie de la machine}<br>`;
							texte_corr = `\\begin{enumerate}[itemsep=1em]`;
							texte_corr += `\\item Pour trouver la liste des diviseurs de ${x} on cherche tous les produits de deux facteurs qui donnent ${x}<br>`;
						};
						if (liste_diviseurs(x).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(x).length/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(x).length-1)/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
							texte_corr += `$`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`$<br>`;
						};
						texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${x}<br>`;
						texte_corr += `La liste des diviseurs de ${x} est donc `+liste_diviseurs(x)+`; Cette liste compte `+liste_diviseurs(x).length+` nombres. <br>`;
						texte_corr += `Donc `+liste_diviseurs(x).length+` est l'image de ${x} par la fonction d.<br>`;	
					
						// sous question b/
						x = randint(1,9);//augmenter les possibles pour éviter les questions déjà posées?
						if (sortie_html) {
							texte += num_alpha(j)+` Quelle est une valeur possible du nombre de départ si la machine renvoie  2 ?<br>`;
							texte_corr += num_alpha(j)+`Si la machine renvoie 2 alors le nombre de départ  a exactement 2 diviseurs, tous les`;
							texte_corr += katex_Popup('nombres premiers','Nombre premier','Un nombre entier est un <b>nombre premier</b> si il a exactement deux diviseurs, 1 et lui-même.');					
						 	texte_corr += `conviennent.<br>`;
						 	texte_corr += `2 est premier donc 2 est <b>un</b> antécédent de 2 par la fonction d.<br>`;						
						 	texte_corr += `7 est premier donc 7 est <b>un autre</b> antécédent de 2 par la fonction d.<br>`;	
						 	j++;//incrémente la sous question
						} else {
						 	texte += `\\item Quelle est une valeur possible du nombre de départ si la machine renvoie  2 ?<br>`;
						 	texte_corr += ` \\item Si la machine renvoie 2 alors le nombre de départ  a exactement 2 diviseurs, tous les`;
						 	texte_corr += `\\textbf{nombres premiers} \\footnote{\\textbf{Nombre premier :} Un nombre entier est un \\textbf{nombre premier} si il a exactement deux diviseurs, 1 et lui-même.}`;
							texte_corr += `conviennent.<br>`;
							texte_corr += `2 est premier donc 2 est \\textbf{un} antécédent de 2 par la fonction d.<br>`;						
						 	texte_corr += `7 est premier donc 7 est \\textbf{un autre} antécédent de 2 par la fonction d.<br>`;	
						};				
				
						// sous question c/
						x = randint(51,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html){
						 	texte += num_alpha(j)+` Quelle est l'image de ${x} par la `; 
						 	texte += katex_Popup('fonction','Vocabulaire','<b>fonction</b> est le nom que l\'on donne à ces machines mathématiques');														
						 	texte += ` $d$ ? &Eacute;crire la réponse sous la forme `;
						 	texte += katex_Popup('$\\mathbf{d('+(x)+')=\\ldots}$','Notation','4 a pour image 16 par la fonction d peut s\'écrire <b>d(4)=16</b>')+`<br>`;
						 	texte_corr += num_alpha(j)+`Pour trouver l'image de ${x} on peut par exemple chercher tous ses diviseurs et les compter<br>`;
							j++;//incrémente la sous question
						} else { // sortie LaTeX
							texte += `\\item Quelle est l'image de ${x} par la `; 
							texte += `\\textbf{fonction d} \\footnote{\\textbf{Vocabulaire :} \\textit{fonction} est le nom que l\'on donne à ces machines mathématiques.}`;														
							texte += ` ? \\'{E}crire la réponse sous la forme `;
							texte += `$\\mathbf{d('+(x)+')=\\ldots}$ \\footnote{\\textbf{Notation :} 4 a pour image 16 par la fonction d peut s\'écrire \\textbf{d(4)=16}}<br>`;
							texte_corr += `\\item Pour trouver l'image de ${x} on peut par exemple chercher tous ses diviseurs et les compter<br>`;
						};
						if (liste_diviseurs(x).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(x).length/2); m++){
								texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(x).length-1)/2); m++){
							   texte_corr += `$`+liste_diviseurs(x)[m]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-m-1)]+`$<br>`;
						   };
						   texte_corr += `$`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`\\times`+liste_diviseurs(x)[(liste_diviseurs(x).length-1)/2]+`$<br>`;
					   };
					   texte_corr += `La liste des diviseurs de ${x} est donc `+liste_diviseurs(x)+`; Cette liste compte `+liste_diviseurs(x).length+` nombres.<br>`;
					   texte_corr += `Donc `+liste_diviseurs(x).length+` est l'image de ${x} par la fonction d.<br>`;	

						// sous question d/
						if (sortie_html) {
							texte += num_alpha(j)+` Peut-on trouver deux antécédents de 3 par la fonction d ?<br>`;
							texte_corr += num_alpha(j)+`Il faut trouver des nombres qui ont exactement 3 diviseurs.<br>`;
							j++;//incrémente la sous question
						} else {
							texte += `\\item  Peut-on trouver deux antécédents de 3 par la fonction d ?<br>`;
							texte_corr += `\\item Il faut trouver des nombres qui ont exactement 3 diviseurs.<br>`;
						}	
						texte_corr += `La liste des diviseurs de 9 est `+liste_diviseurs(9)+`; Cette liste compte `+liste_diviseurs(9).length+` nombres, `;
						texte_corr += `donc 9 est un antécédent de 3 par la fonction d.<br>`;
						texte_corr += `La liste des diviseurs de 25 est `+liste_diviseurs(25)+`; Cette liste compte `+liste_diviseurs(25).length+` nombres, `;
						texte_corr += `donc 25 est un antécédent de 3 par la fonction d.<br>`;
						texte_corr += `Tu peux en trouver d'autres, qu'ont ils de commun ?`
						if (!sortie_html) {
							texte += `\\end{enumerate}`;
							texte_corr += `\\end{enumerate}`;						
						};
						break;																
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3F12 Notion de fonction - Vocabulaire
 * Déterminer à partir de plusieurs modes de représentation l'image d'un nombre
 * @author Sébastien LOZANO
 */

 function fonctions_calculs_d_images() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fonctions : Calculs d'images"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	 // pas de différence entre la version html et la version latex pour la consigne
	 this.consigne +=`Calcule les images avec la méthode demandée.`;

	 sortie_html ? this.spacing = 3 : this.spacing = 2;
	 sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	 this.nb_questions = 4;
	 //this.correction_detaillee_disponible = true;
	 this.nb_cols = 1;
	 this.nb_cols_corr = 1;
	 this.sup = 5;
 
	 var num_ex = '3F12'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	 if (sortie_html) {		
		 var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
	 } else { // sortie LaTeX
 
	 };
	 this.nouvelle_version = function(numero_de_l_exercice){
		 let type_de_questions;
		 if (sortie_html) { // les boutons d'aide uniquement pour la version html
//			 this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
//			 this.bouton_aide += modal_video('videoTest','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
		 }
		 this.liste_questions = []; // Liste de questions
		 this.liste_corrections = []; // Liste de questions corrigées
 
		 let type_de_questions_disponibles = [];
		 if (this.sup==1){
			type_de_questions_disponibles = [1]; // prog de calcul
		} else if (this.sup==2){
			type_de_questions_disponibles = [2]; // diagramme
		} else if (this.sup==3){
			type_de_questions_disponibles = [3]; // f(x) = ...
		} else if (this.sup==4){
			type_de_questions_disponibles = [4]; // f : x ---> ...
		} else if (this.sup==5){
			type_de_questions_disponibles = [1,2,3,4]; // mélange
		};
		 //let type_de_questions_disponibles = [1];
		 let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);
 
			 for (let i = 0, a, b, c, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				 type_de_questions = liste_type_de_questions[i];

				 if (sortie_html) {
					let id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
				 }
				 // on part sur de l'affine avec coeff positifs, on verra ensuite
				 a = randint(2,9); 
				 b = randint(2,9);
				 c = randint(2,9);
	 
				 switch (type_de_questions) {
					case 1 :
						var j = 0; // pour la sous-numérotation
						texte = `On donne le programme de calcul suivant qui correspond à une certaine fonction :`;
						texte_corr =`Avec ce programme de calcul :`
						if (sortie_html) {
							texte +=`
							<br>
							<div class="ui compact warning message">		
							<p>							
							- Choisir un nombre<br>
							- Multiplier ce nombre par ${a}<br>
							- Ajouter ${b} au résultat obtenu<br>
							</p>
							</div>
							<br>`;
							// sous-question a/
							texte += num_alpha(j)+` Appliquer ce programme de calcul au nombre ${c}<br>`;
							texte_corr +=`<br>`+num_alpha(j)+`
							<br>
							<div class="ui compact warning message">		
							<p>							
							- On choisit le nombre ${c}<br>
							- On multiplie ce nombre par ${a} : ${a}$\\times$ ${c} = ${a*c}<br>
							- On ajoute ${b} au résultat obtenu : ${a*c}+${b}=${a*c+b}<br>
							</p>
							</div>
							<br>							
							`;
							j++;
							// sous-question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += num_alpha(j)+`L'image de ${c} par cette fonction vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par cette fonction`;
						} else {
							 texte += tex_cadre_par_orange(itemize([`Choisir un nombre`,`Multiplier ce nombre par ${a}`,`Ajouter ${b} au résultat obtenu`]));							
							// sous-question a/
							texte += tex_enumerate([`Appliquer ce programme de calcul au nombre ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							//texte_corr += 
							texte_corr += tex_enumerate([tex_cadre_par_orange(itemize([`On choisit le nombre ${c}`,`On multiplie ce nombre par ${a} : $${a} \\times ${c} = ${a*c}$ `,`On ajoute ${b} au résultat obtenu : $${a*c}+${b}=${a*c+b}$`])),`L'image de ${c} par cette fonction vaut ${a*c+b}<br>On peut aussi dire que ${a*c+b} est l'image de ${c} par cette fonction`],this.spacing);							
						};			
						break;
					case 2 :
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte = `Soit $f$ la fonction définie par l'expression algébrique $f(x)=$ ${a}$x+$${b}<br>`;
						if (sortie_html) {
							// sous-question a/
							texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr = num_alpha(j)+` Calculons l'image par $f$ de $x= ${c}$ :`;							
							texte_corr += `<br>$f(${mise_en_evidence('\\textit{\\textbf{x}}')})= ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a}\\times ${mise_en_evidence(c)}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a*c}+${b}$`;
							texte_corr += `<br>$f(${mise_en_evidence(c)})= ${a*c+b}$`;
							j++;
							//sous question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $f$ vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $f$`;
						} else {
							// sous-question a/ et b/
							texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							texte_corr = tex_enumerate([`Calculons l'image par $f$ de $x= ${c}$ :
							<br>$f(${mise_en_evidence('\\textit{\\textbf{x}}')})= ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a}\\times ${mise_en_evidence(c)}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a*c}+${b}$
							<br>$f(${mise_en_evidence(c)})= ${a*c+b}$`,`L'image de ${c} par la fonction $f$ vaut ${a*c+b}
							<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $f$`
							],this.spacing);
						};
						break;
					case 3 :
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte = `Soit $g$ la fonction définie par $g:x\\longmapsto$ ${a}$x+$${b}<br>`;
						if (sortie_html) {
							// sous-question a/
							texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr = num_alpha(j)+` Calculons l'image par $g$ de $x= ${c}$ :`;
							texte_corr += `<br>$g:${mise_en_evidence('\\textit{\\textbf{x}}')}\\longmapsto ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a}\\times${mise_en_evidence(c)}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c}+${b}$`;
							texte_corr += `<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c+b}$`;
							j++;
							//sous question b/
							texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
							texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $g$ vaut ${a*c+b}`;
							texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`;
						} else {
							// sous-question a/ et b/
							texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
							texte_corr = tex_enumerate([`Calculons l'image par $g$ de $x= ${c}$ :
							<br>$g:${mise_en_evidence('\\textit{\\textbf{x}}')}\\longmapsto ${a} ${mise_en_evidence('\\textit{\\textbf{x}}')}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a}\\times ${mise_en_evidence(c)}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c}+${b}$
							<br>$g:${mise_en_evidence(c)}\\longmapsto ${a*c+b}$`,`L'image de ${c} par la fonction $g$ vaut ${a*c+b}
							<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`
							],this.spacing);
						};
						break;
					case 4 :
						texte = ``;
						texte_corr = ``;
						texte_corr += `Calculer avec un diagramme `;
						var j = 0; // pour la sous-numérotation
						// les variables a,b,c changent sans refaire un appel à randint
						texte += `Soit la fonction $h$ définie par le diagramme `;
						if (sortie_html) {
							// sous-question a/
							texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: 50px; display : table "></div>`;					 
							SVG_machine_diag_3F12(id_du_div,800,100,'h','x',[[''+a,a+'x'],[''+b,a+'x+'+b]]);					 
						 	texte += num_alpha(j)+` Calculer l'image de ${c}`;
							texte +=`<br>`;
							texte_corr +=`<br>`;
							texte_corr += num_alpha(j)+` Calculons l'image par $h$ de $x=$ ${c} :`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; display : table "></div>`;
							SVG_machine_diag_3F12(id_du_div_corr,800,100,'h',''+c,[[''+a,''+(a*c)],[''+b,''+(a*c+b)]]);
						 	j++;
						//sous question b/
						 	texte += num_alpha(j)+` Traduire ce calcul par une phrase contenant le mot image`;
						 	texte_corr += `<br>`+num_alpha(j)+` L'image de ${c} par la fonction $h$ vaut ${a*c+b}`;
						 	texte_corr += `<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $h$`;
						} else {
						 	texte += `<br>`+tikz_machine_diag(`h`,`x`,[[`\\times `+a,a+`x`],[`+`+b,a+`x+`+b]]);
						// sous-question a/ et b/
						 	texte += tex_enumerate([`Calculer l'image de ${c}`,`Traduire ce calcul par une phrase contenant le mot image`],this.spacing);
						 	texte_corr = tex_enumerate(
						 		[`Calculons l'image par $g$ de $x=$ ${c} :<br>`+tikz_machine_diag(`h`,c,[[`\\times `+a,(a*c)],[`+`+b,(a*c+b)]]),
						 		`L'image de ${c} par la fonction $g$ vaut ${a*c+b}
						 	<br> On peut aussi dire que ${a*c+b} est l'image de ${c} par la fonction $g$`
						 		],this.spacing);
						};
						break;						 
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : &Agrave; partir d'un programme de calcul\n2 : &Agrave; partir de l'expression algébrique sous forme f(x) = ...\n3 : &Agrave; partir de l'expression algébrique sous forme f : x --> ...\n4 : &Agrave; partir d'un diagramme\n5 : Mélange"]; 
 };  

 /**
  * 3F-test test de la bibliotheque d3.js
  */

  function svglibs() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Tests biblilothèques animations"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	// Message Bug SVG qui ne s'affiche pas dans la correction sans rafraichir
	if (sortie_html) {
		this.consigne = `
		<div class="ui compact warning message">		
			<p>
			<i class="exclamation triangle icon"></i>
			ATTENTION BUG CONNU<br>
			Sous Safari et Edge les animations dysfonctionnent
			</p>
			</div>
			<br>
		`;
	}	
	this.consigne += "tests biblios";
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 1;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	var num_ex = 'svglibs'; // pour rendre unique les id des SVG, en cas d'utilisation dans plusieurs exercices y faisant appel

	if (sortie_html) {		
		// let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
		// let id_du_div = `div_svg${id_unique}`;
		var pourcentage = '100%'; // pour l'affichage des svg. On a besoin d'une variable globale
		var hauteur_svg = 100;
		this.consigne += `
		<a href="https://www.datavis.fr/index.php?page=transition" target="_blank">https://www.datavis.fr/index.php?page=transition</a>
		<br><a href="https://www.pixijs.com/" target="_blank">https://www.pixijs.com/</a>
		<br><a href="https://d3js.org/" target="_blank">https://d3js.org/</a>
		`;
		this.consigne += `<br>Ne pas mettre d'appel aux fonction de mathalea_outils.js avant l'appel de this.nouvelle_version() c'est à dire ici!!!`
		
	} else { // sortie LaTeX
		

	};
	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheFonctions-3F1-act.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('videoTest','videos/Fonctions.mp4','Petit conte mathématique','Intro Vidéo');
			if (detect_safari_chrome_browser()) {// si c'est safari ou chrome
				this.consigne += machine_maths_video(`videos/machineMaths-h-1.mp4`);
			} else {
				let id_unique = `_consigne_${num_ex}_${Date.now()}`; // on formatte avec le numéro de l'exercice pour éviter les doublons		
				let id_du_div = `div_svg${id_unique}`;
				this.consigne += `<div id="${id_du_div}" style="width: ${pourcentage}; height: ${hauteur_svg}px; display : table "></div>`;
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,maths','---','Procédé','de\\,calcul','antécédent','x','image','y');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','côté \\, du','carré','périmètre','??? \\, cm');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine\\,g','---','aire','d\'un \\, carré','côté \\, du','carré','aire','??? \\, cm^2');
				//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, h','---','multiplier \\, par \\, 3','ajouter \\, 1','nombre \\, de','départ \\, ','nombre \\, de','sortie \\, ?');														
				SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, d','---','nombre \\enspace total','de  \\, diviseurs','nombre \\, de','départ','nombre \\, de',' diviseurs');

			};
			
		} else { // sortie LaTeX
			// this.consigne += `machine Tikz HEX #F15929 équivaut à rgb(241,89,41)<br>`;
			this.consigne += tikz_machine_maths('maths','---',`Proc\\acute{e}d\\acute{e}`,'de\\,calcul',`ant\\acute{e}c\\acute{e}dent`,`\\textit{x}`,`image`,`\\textit{y}`);
	
	
		};
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		//let type_de_questions_disponibles = [1,2,3,4];
		let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, x, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
				if (sortie_html) {
					var id_unique = `${num_ex}_${i}_${Date.now()}`
					var id_du_div = `div_svg${numero_de_l_exercice}${id_unique}`;
					//var id_du_div_diag = `div_svg_diag${numero_de_l_exercice}${id_unique}`;
					var id_du_div_corr = `div_svg_corr${numero_de_l_exercice}${id_unique}`;
					//texte = machine_maths_video(`videos/machineMaths-h-1.mp4`);
				}
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						var j = 0; // pour la sous-numérotation
						// question
						if (sortie_html){
							texte += `La $\\mathbf{machine\\,f}$ renvoie le `+katex_Popup(`périmètre`,`Rappel`,`Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés`)+` d'un carré de côté $x$`;
						} else {
							texte = `La $\\mathbf{machine\\,f}$ renvoie le \\textbf{périmètre} \\footnote{\\textbf{Rappel :} Le périmètre d'un polygone est égal à la somme des longueurs de ses côtés} d'un carré de côté $x$`;
						}
						texte += `<br>`;
						// machine						
						x = randint(2,99);//augmenter les possibles pour éviter les questions déjà posées?	
						if (sortie_html) {
							//texte += `<br>`;
							texte += `<div id="${id_du_div}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							texte_corr += `<div id="${id_du_div_corr}" style="width: ${pourcentage}"; height: ${hauteur_svg}px; display : table "></div>`;
							//SVG_machine_maths(id_du_div,400,hauteur_svg,'machine \\, f','---','périmètre','d\'un \\, carré','carré \\, de','côté \\,'+x+' \\, cm','périmètre','??? \\, cm');							
						} else { // sortie Latex avec Tikz
							//texte += tikz_machine_maths('f','---',`P\\acute{e}rim\\grave{e}tre`,`d'un\\,carr\\acute{e}`,`carr\\acute{e}\\,de`,`c\\hat{o}t\\acute{e}\\,${x}\\,cm`,`P\\acute{e}rim\\grave{e}tre`,`???\\,cm`);
						};

						break;			
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

 /**
  * 3Tests tests de fonctions
  */

 function tester_des_fonctions() {
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Tests de fonctions"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =``;
	this.consigne += "tests fonctions";
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 1;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		//let type_de_questions_disponibles = [1,2,3,4];
		let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, x, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				

				switch (type_de_questions) {
					case 1 : // 
						texte =``;
						//texte +=`katexPopup2`+ katex_Popup2(numero_de_l_exercice+i*3,2,`trébuchet`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/balancoire-a-bascule-trebuchet-baskul-768x768.jpg`);
						texte +=`<br> katextPopup3 modal long : `;
						texte += katex_Popup3(numero_de_l_exercice+1,1,"énergie",`Définition : énergie (grandeur physique)`,`C’est le produit de la puissance électrique (Watt) par le temps (s) et se mesure en Joule (J).<br>1 J=1 W × 1 s.<br>Cependant pour mesurer des énergies plus importantes on utilise plutôt le kiloWattheure (kWh).<br>1 kWh=1000 W × 1 h.`);
						texte += `<br> katexPopup3 image : `;
						texte += katex_Popup3(numero_de_l_exercice+2,2,`trebuchet`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/`,`https://sitetab3.ac-reims.fr/ec-fayl-billot-elem/-wp-/wp-content/uploads/2018/01/balancoire-a-bascule-trebuchet-baskul-768x768.jpg`);
						texte_corr = `texte corr`;

						break;			
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A10 - Division Euclidienne; diviseurs, multiples, critères de divisibilité
 * Exercice bilan
 * @author Sébastien Lozano
 */
 
function DivisionEuclidienne_multiplesDiviseurs_Criteres(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Division Euclidienne - Diviseurs - Multiples"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Divisions euclidiennes - Diviseurs - Multiples.`;
	//this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 5;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A10.pdf","Aide mémoire sur la division euclidienne (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];

				var dividende;
				var diviseur;
				var quotient;
				var reste;				
	
				switch (type_de_questions) {
					case 1 : // plus grand reste dans une division euclidienne
						diviseur = randint(2,99);
						texte = `Dire quel est le plus grand reste possible dans une division euclidienne par ${diviseur}.`;
						texte_corr = `Si on divise par ${diviseur}, il ne peut pas rester plus de ${diviseur - 1}, sinon c'est qu'on peut encore ajouter au moins 1 fois ${diviseur} dans le dividende et donc 1 au quotient.`;
						break;		
					case 2 : // quotient et reste d'une division euclidienne donnée
						diviseur = randint(2,99);
						dividende = randint(1001,99999);
						quotient = Math.trunc(dividende/diviseur);
						reste = dividende%diviseur;

						texte = `On a ${nombre_avec_espace(dividende)}=${nombre_avec_espace(diviseur)}$\\times$${nombre_avec_espace(quotient)} $+$ ${nombre_avec_espace(reste)}`;
						texte += `<br>`;
						texte += `Écrire le quotient et le reste de la division euclidienne de ${nombre_avec_espace(dividende)} par ${diviseur}.` ;
						texte_corr = `Dans la division euclidienne de ${nombre_avec_espace(dividende)} par ${diviseur}, le quotient vaut ${nombre_avec_espace(quotient)} et le reste ${reste}.`;
						break;	
					case 3 : // caractérisation des multiples et diviseurs par le reste de la division euclidienne
						dividende = randint(101,9999);
						let rg_diviseur; // rang du diviseur choisi
						if (liste_diviseurs(dividende).length%2==0) {//si il y a un nombre pair de diviseurs on prend le (n/2+1) eme
							rg_diviseur = liste_diviseurs(dividende).length/2+1;
						} else { // il y a nbre impair de diviseurs on prend le ((n-1)/2 +1) eme
							rg_diviseur = (liste_diviseurs(dividende).length-1)/2 +1;							
						}
						diviseur = liste_diviseurs(dividende)[rg_diviseur-1]; // on choisit le diviseur central de dividende, ATTENTION rang des tableaux commence à 0 
						let candidats_diviseurs = [diviseur-1,diviseur,diviseur+1]; // on prend l'entier précédetn et le successeur de ce diviseur
						// Faut-il que je conditionne pour éviter le diviseur 1 ?
						candidats_diviseurs=shuffle(candidats_diviseurs); // on mélange le tableau
						texte = 'Les trois divisions euclidiennes suivantes sont exactes : <br>';
						texte += `${nombre_avec_espace(dividende)} = ${nombre_avec_espace(candidats_diviseurs[0])}$\\times$${nombre_avec_espace(Math.trunc(dividende/candidats_diviseurs[0]))} $+$ ${nombre_avec_espace(dividende%candidats_diviseurs[0])}`;
						texte += `<br>`;
						texte += `${nombre_avec_espace(dividende)} = ${nombre_avec_espace(candidats_diviseurs[1])}$\\times$${nombre_avec_espace(Math.trunc(dividende/candidats_diviseurs[1]))} $+$ ${nombre_avec_espace(dividende%candidats_diviseurs[1])}`;
						texte += `<br>`;
						texte += `${nombre_avec_espace(dividende)} = ${nombre_avec_espace(candidats_diviseurs[2])}$\\times$${nombre_avec_espace(Math.trunc(dividende/candidats_diviseurs[2]))} $+$ ${nombre_avec_espace(dividende%candidats_diviseurs[2])}`;
						texte += `<br>`;
						texte += `Sans calculer, dire si les nombres ${nombre_avec_espace(candidats_diviseurs[0])}; ${nombre_avec_espace(candidats_diviseurs[1])}; ${nombre_avec_espace(candidats_diviseurs[2])} sont des diviseurs de ${nombre_avec_espace(dividende)}. Justifier.`;
						texte_corr =``;
						if (dividende%candidats_diviseurs[0]==0) {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[0])} vaut 0 donc ${nombre_avec_espace(candidats_diviseurs[0])} est un diviseur de ${nombre_avec_espace(dividende)}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[0])} ne vaut pas 0 donc ${nombre_avec_espace(candidats_diviseurs[0])} n'est pas un diviseur de ${nombre_avec_espace(dividende)}`;							
						}
						texte_corr += `<br>`;
						if (dividende%candidats_diviseurs[1]==0) {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[1])} vaut 0 donc ${nombre_avec_espace(candidats_diviseurs[1])} divise ${nombre_avec_espace(dividende)}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[1])} ne vaut pas 0 donc ${nombre_avec_espace(candidats_diviseurs[1])} ne divise pas ${nombre_avec_espace(dividende)}`;							
						}
						texte_corr += `<br>`;
						if (dividende%candidats_diviseurs[1]==0) {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[2])} vaut 0 donc ${nombre_avec_espace(dividende)} est divisible par ${nombre_avec_espace(candidats_diviseurs[2])}`;							
						} else {
							texte_corr += `Le reste de la division euclienne de ${nombre_avec_espace(dividende)} par ${nombre_avec_espace(candidats_diviseurs[2])} ne vaut pas 0 donc ${nombre_avec_espace(dividende)} n'est pas divisible par ${nombre_avec_espace(candidats_diviseurs[2])}`;							
						}
						texte_corr += `<br>`;						
						break;
					case 4 : // vocabulaire diviseurs et multiples
						// on déclare des tableaux utiles 
						let diviseurs=[];
						let multiplicateurs=[];
						let multiples=[];
						let quotients=[];
						let textes=[];
						let textes_corr=[];
						// on tire au hasard 4 diviseurs différents entre 2 et 999 et 4 multiplicateurs différents entre 2 et 9 
						diviseurs = [randint(2,999),randint(2,999,[diviseurs[0]]),randint(2,999,[diviseurs[0],diviseurs[1]]),randint(2,999,[diviseurs[0],diviseurs[1],diviseurs[2]])];
						multiplicateurs = [randint(2,9),randint(2,9,[multiplicateurs[0]]),randint(2,9,[multiplicateurs[0],multiplicateurs[1]]),randint(2,9,[multiplicateurs[0],multiplicateurs[1],multiplicateurs[2]])];
						// on calcule les multiples
						for (let j = 0; j<4; j++) {
							multiples[j]=diviseurs[j]*multiplicateurs[j];
							quotients[j]=multiples[j]/diviseurs[j];
							diviseurs[j]=nombre_avec_espace(diviseurs[j]);
							multiples[j]=nombre_avec_espace(multiples[j]);							
							quotients[j]=nombre_avec_espace(quotients[j]);
						};						
						// on crée les phrases 
						textes[0]=`${diviseurs[0]} $\\ldots\\ldots\\ldots\\ldots$ ${multiples[0]}`;
						textes_corr[0]=`${diviseurs[0]} est un diviseur de ${multiples[0]} car ${multiples[0]}=${diviseurs[0]}$\\times$${quotients[0]}`;
						textes[1]=`${diviseurs[1]} $\\ldots\\ldots\\ldots\\ldots$ ${multiples[1]}`;
						textes_corr[1]=`${diviseurs[1]} est un diviseur de ${multiples[1]} car ${multiples[1]}=${diviseurs[1]}$\\times$${quotients[1]}`;
						textes[2]=`${multiples[2]} $\\ldots\\ldots\\ldots\\ldots$ ${diviseurs[2]}`;
						textes_corr[2]=`${multiples[2]} est un multiple de ${diviseurs[2]} car ${multiples[2]}=${diviseurs[2]}$\\times$${quotients[2]}`;
						textes[3]=`${multiples[3]} $\\ldots\\ldots\\ldots\\ldots$ ${diviseurs[3]}`;
						textes_corr[3]=`${multiples[3]} est un multiple de ${diviseurs[3]} car ${multiples[3]}=${diviseurs[3]}$\\times$${quotients[3]}`;
						// on ajoute deux cas ni multiple ni diviseur
						// on choisit deux nombres
						let n1 = nombre_avec_espace(randint(2,999,[diviseurs[0],diviseurs[1],diviseurs[2],diviseurs[3]]));
						let p1 = nombre_avec_espace(randint(2,999,[diviseurs[0],diviseurs[1],diviseurs[2],diviseurs[3],n1]));
						// on choisit un autre qui n'est pas dans la liste des diviseurs de n1
						let n2 = nombre_avec_espace(randint(2,999,liste_diviseurs(n1)));
						let p2 = nombre_avec_espace(randint(2,999,liste_diviseurs(p1)));
						textes[4]=`${n1} $\\ldots\\ldots\\ldots\\ldots$ ${n2}`;
						textes_corr[4]=`${n1} n'est ni un multiple ni un diviseur de ${n2}`;
						textes[5]=`${p2} $\\ldots\\ldots\\ldots\\ldots$ ${p1}`;
						textes_corr[5]=`${p2} n'est ni un multiple ni un diviseur de ${p1}`;
						// on mélange pour que l'ordre change!
						shuffle2tableaux(textes,textes_corr);
						texte = `Avec la calculatrice, compléter chaque phrase avec le mot "est un diviseur de" ou "est un multiple de" ou "n'est ni une diviseur ni un multiple de".`;
						texte+= `<br>`;
						texte_corr =``;
						for (let j = 0; j<6; j++) {
							texte += textes[j];
							texte +=`<br>`;
							texte_corr += textes_corr[j];
							texte_corr +=`<br>`;
						};
						break;
					case 5 : // liste des diviseurs
						// on définit un tableau pour les choix du nombre dont on veut les diviseurs
						// 3 parmis 2,99 y compris les premiers et 1 parmis les entiers à 3 chiffres ayant au moins 8 diviseurs, il y en a 223 !
						let tableau_de_choix = [];
						tableau_de_choix =[randint(2,99),randint(2,99,[tableau_de_choix[0]]),randint(2,99,[tableau_de_choix[0],tableau_de_choix[1]]),randint(2,99,[tableau_de_choix[0],tableau_de_choix[1],tableau_de_choix[2]])];
						let tableau_de_choix_3chiffres =[];
						for (let m=101; m<999; m++) {
							if (liste_diviseurs(m).length>8) {
								tableau_de_choix_3chiffres.push(m);
							};
						};
						// on ajoute un nombre à trois chiffre avec au moins 8 diviseurs dans les choix possibles
						let rg_Nb_3chiffres = randint(0,(tableau_de_choix_3chiffres.length-1));
						tableau_de_choix.push(tableau_de_choix_3chiffres[rg_Nb_3chiffres]);											
						let N; // on déclare le nombre dont on va chercher les diviseurs
						let rg_N; // pour tirer le rang du nombre dans le tableau des choix
						rg_N = randint(0,(tableau_de_choix.length-1));
						N = tableau_de_choix[rg_N];
						texte = `Écrire la liste de tous les diviseurs de ${N}.`;
						// texte_corr = `Pour trouver la liste des diviseurs de ${N} on cherche tous les produits de deux facteurs qui donnent ${N}<br>`;
						// if (liste_diviseurs(N).length%2==0) {//si il y a un nombre pair de diviseurs
						// 	for (let m = 0; m<(liste_diviseurs(N).length/2); m++){
						// 		texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+`<br>`;
						// 	};
						// } else {
						// 	for (let m = 0; m<((liste_diviseurs(N).length-1)/2); m++){
						// 		texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+`<br>`;
						// 	};
						// 	texte_corr += ``+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+`<br>`;
						// };
						// texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${N}<br>`;
						// texte_corr += `La liste des diviseurs de ${N} est donc `;
						// texte_corr += `1`;
						// for (let w = 1; w<liste_diviseurs(N).length; w++) {
						// 	texte_corr += `; `+liste_diviseurs(N)[w];
						// };

						texte_corr = `Pour trouver la liste des diviseurs de ${N} on cherche tous les produits de deux facteurs qui donnent ${N}. En écrivant toujours le plus petit facteur en premier.<br>`;
						texte_corr += `Il est suffisant de chercher des diviseurs inférieurs au plus grand nombre dont le carré vaut ${N}, par exemple ici, ${Math.trunc(Math.sqrt(N))}$\\times$${Math.trunc(Math.sqrt(N))} = ${Math.trunc(Math.sqrt(N))*Math.trunc(Math.sqrt(N))}<${N}`;
						texte_corr += ` et ${Math.trunc(Math.sqrt(N))+1}$\\times$${Math.trunc(Math.sqrt(N))+1} = ${(Math.trunc(Math.sqrt(N))+1)*(Math.trunc(Math.sqrt(N))+1)}>${N} donc il suffit d'arrêter la recherche de facteur à ${Math.trunc(Math.sqrt(N))}.`;
						texte_corr += ` En effet, si ${N} est le produit de deux entiers p$\\times$q avec p < q alors si p$\\times$p > ${N} c'est que q$\\times$q < ${N} mais dans ce cas p serait supérieur à q sinon p$\\times$q serait inférieur à ${N} ce qui ne doit pas être le cas.<br>`
						if (liste_diviseurs(N).length%2==0) {//si il y a un nombre pair de diviseurs
							for (let m = 0; m<(liste_diviseurs(N).length/2); m++){
								texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+` = ${N}<br>`;
							};
						} else {
							for (let m = 0; m<((liste_diviseurs(N).length-1)/2); m++){
								texte_corr += ``+liste_diviseurs(N)[m]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-m-1)]+`<br>`;
							};
							texte_corr += ``+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+`$\\times$`+liste_diviseurs(N)[(liste_diviseurs(N).length-1)/2]+` = ${N}<br>`;
						};
						texte_corr += `Chacun des facteurs de la liste ci-dessus est un diviseur de ${N}.<br>`;
						texte_corr += `La liste des diviseurs de ${N} est donc `;
						texte_corr += `1`;
						for (let w = 1; w<liste_diviseurs(N).length; w++) {
							texte_corr += `; `+liste_diviseurs(N)[w];
						};
						texte_corr += `.`;
						break;							
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A11 justifier la non primalité réinvestissement des critères de divisibilité
 * Nombres à 3 ou 4 chiffres, un multiple de 2, de 3, de 5, de 7, de 11, sous forme d'un produit de deux nombres premiers inférieurs à 100
 * et un nombre premier inferieur à 529
 * dans cet exo on n'utilise pas les critères par 7 et 11
 * @author Sébastien Lozano
 */
function Premier_ou_pas(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Primalité ou pas"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Justifier que les nombres suivants sont premiers ou pas.`;
	//this.consigne += `<br>`;	
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 5;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,6,7];
		type_de_questions_disponibles=shuffle(type_de_questions_disponibles); // on mélange l'ordre des questions
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);
		
		let string_rappel = `Cette liste des nombres premiers inférieurs à 100 pourra être utile : <br>`+crible_eratosthene_n(100)[0];
		for (let k=1;k<crible_eratosthene_n(100).length;k++) {
			string_rappel +=`, `+crible_eratosthene_n(100)[k];
		};
		string_rappel +=`.`;
		if (sortie_html) {
			this.introduction =`
			<br>
			<div class="ui compact warning message">		
			<p>`+string_rappel+`
			</p>
			</div>
			<br>`;
		} else {
			this.introduction = tex_cadre_par_orange(string_rappel);							
		};

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {

				type_de_questions = liste_type_de_questions[i];
				
				var N; // le nombre de la question
	
				switch (type_de_questions) {
					case 1 : // nombre pair
						N=2*randint(51,4999);
						texte = nombre_avec_espace(N);						
						texte_corr = `Comme ${nombre_avec_espace(N)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;		
					case 2 : // Multiple de 3
						let sum=0; // pour la valeur de la somme;
						N=3*randint(34,3333);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme `+ N.toString().charAt(0);
						sum = Number(N.toString().charAt(0));
						for (let k=1; k<N.toString().length; k++) {
							texte_corr += ` + `+N.toString().charAt(k);
							sum +=Number(N.toString().charAt(k));
						};					
						texte_corr += ` = ${sum} est un multiple de 3 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 3 : // Multiple de 5
						N=5*randint(20,1999);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme le dernier chiffre de ${nombre_avec_espace(N)} est un ${N.toString().charAt(N.toString().length-1)} alors ${nombre_avec_espace(N)} est divisible par 5, `;
						texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 4 : // Multiple de 7
						let N_longueur; // pour la taille du string N
						let N1; // pour la repetiton du critère
						let N1_longueur; // pour la taille du string N1
						let sum1; // pour la somme de la répétition du critère
						N=7*randint(15,1428);
						texte = nombre_avec_espace(N);
						N_longueur = N.toString().length;
						texte_corr = ` 7 divise ${nombre_avec_espace(N)}, en effet : `;
						texte_corr += `<br>`;
						N1 = N;
						N1_longueur = N_longueur;
						sum1 = Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1));
						while (sum1 >=56 ) {
							texte_corr += `${N1.toString().substring(0,N1_longueur-1)} + 5$\\times$${N1.toString().charAt(N1_longueur-1)}`;
							texte_corr += ` = ${Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1))}`;
							texte_corr += `<br>`;
							N1 = sum1;
							N1_longueur = N1.toString().length;
							sum1 = Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1));
						};
						// texte_corr = `Comme ${N.toString().substring(0,N_longueur-1)}-5$\\times$${N.toString().charAt(N_longueur-1)}`;
						// texte_corr += ` = ${Number(N.toString().substring(0,N_longueur-1))+5*Number(N.toString().charAt(N_longueur-1))} est un multiple de 7 alors 7 divise ${N} aussi, `;
						texte_corr += `Comme ${N1.toString().substring(0,N1_longueur-1)} + 5$\\times$${N1.toString().charAt(N1_longueur-1)} = ${sum1} est un multiple de 7 alors 7 divise ${N} aussi `;
						texte_corr += `qui admet donc au moins trois diviseurs : 1, 7 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;
					case 5 : // multiple de 11
						let even_sum; // pour la somme des chiffres de rang impair
						let odd_sum; // pour la somme des chiffres de rang pair
						N=11*randint(10,909);
						texte = nombre_avec_espace(N);
						texte_corr = `D'une part, la somme des chiffres de rang impair de ${nombre_avec_espace(N)} vaut `;
						if (Number(N.toString().length)%2==0) { // si N a un nombre pair de chiffres
							even_sum = Number(N.toString().charAt(1));
							texte_corr += N.toString().charAt(1);
							for (let k=3; k<N.toString().length; k++) {
								if (k%2==1) {
								texte_corr += ` + `+N.toString().charAt(k);
								even_sum += Number(N.toString().charAt(k));
								};
							};
							texte_corr += ` = `+even_sum+ ` <br> `;
						} else { // sinon N a un nombre impair de chiffres
							even_sum = Number(N.toString().charAt(0));
							texte_corr += N.toString().charAt(0);
							for (let m=1; m<N.toString().length; m++) {
								if (m%2==0) {
								texte_corr += ` + `+N.toString().charAt(m);
								even_sum += Number(N.toString().charAt(m));
								};

							};
							texte_corr += ` = `+even_sum+ `<br> `;
						};
						texte_corr += `d'autre part, la somme des chiffres de rang pair de ${nombre_avec_espace(N)} vaut `;
						if (Number(N.toString().length)%2==0) { // si N a un nombre pair de chiffres
							odd_sum = Number(N.toString().charAt(0));
							texte_corr += N.toString().charAt(0);
							for (let k=1; k<N.toString().length; k++) {
								if (k%2==0) {
								texte_corr += ` + `+N.toString().charAt(k);
								odd_sum += Number(N.toString().charAt(k));
								};
							};
							texte_corr += ` = `+odd_sum+ ` <br> `;
						} else { // sinon N a un nombre impair de chiffres
							odd_sum = Number(N.toString().charAt(1));
							texte_corr += N.toString().charAt(1);
							for (let m=3; m<N.toString().length; m++) {
								if (m%2==1) {
								texte_corr += ` + `+N.toString().charAt(m);
								odd_sum += Number(N.toString().charAt(m));
								};

							};
							texte_corr += ` = `+odd_sum+ `<br> `;
						};
						texte_corr += `la différence entre la somme des chiffres de rangs pairs et celle des chiffres de rangs impairs vaut `;
						if ((odd_sum-even_sum)==0) {
							texte_corr += `${odd_sum-even_sum}, `;

						} else {
							texte_corr += `${Math.abs(odd_sum-even_sum)} qui est un multiple de 11, `;
						};
						texte_corr+= `<br>`;
						texte_corr += ` cela signifie que ${nombre_avec_espace(N)} est divisible par 11, il admet donc au moins trois diviseurs qui sont 1, 11 et lui-même,`;
						texte_corr += `<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;
					case 6 : // produit de deux nombres premiers inférieurs à 100
						// rang du premier facteur premier
						let r1 = randint(0,crible_eratosthene_n(100).length-1);
						// rang du second facteur premier
						let r2 = randint(0,crible_eratosthene_n(100).length-1);
						let prime1 = crible_eratosthene_n(100)[r1]; // on tire un nombre premier inférieur à 100, il n'y en a que 25!
						let prime2 = crible_eratosthene_n(100)[r2]; // on tire un autre nombre premier inférieur à 100, ça peut être le même qu'avant!
						N=prime1+`$\\times$`+prime2;
						texte = N;
						texte_corr = `${N} est le produit de ${prime1} et de ${prime2}, il admet donc au moins `;
						if (prime1==prime2) {
							texte_corr += `trois divisieurs qui sont 1, ${prime1} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						} else {
							texte_corr += `quatre diviseurs qui sont 1, ${prime1}, ${prime2} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						};
						texte_corr +=`<br> ${N} n'est donc pas premier.`; 
						break;
					case 7 : // nombre premier inférieur à 529
						// rang du nombre premier choisi
						let r = randint(0,crible_eratosthene_n(529).length-1);
						N=crible_eratosthene_n(529)[r]; //on choisit un nombre premier inférieur à 529
						texte = N+``;
						let tab_premiers_a_tester = crible_eratosthene_n(Math.trunc(Math.sqrt(N)));
						texte_corr = `Testons la divisibilité de ${N} par tous les nombres premiers inférieurs à $\\sqrt{${N}}$, c'est à dire par les nombres `;
						texte_corr += tab_premiers_a_tester[0];
						for (let k=1;k<tab_premiers_a_tester.length;k++) {
							texte_corr += `, `+tab_premiers_a_tester[k];
						};
						texte_corr += `.`;
						texte_corr += `<br> Aucun de ces nombres premiers ne divise ${N}.`;
						texte_corr +=`<br> ${N} est donc un nombre premier.`; 
						break;								
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A11-1 justifier la non primalité réinvestissement des critères de divisibilité
 * Nombres à 3 ou 4 chiffres, un multiple de 2, de 3, de 5, de 7, de 11, sous forme d'un produit de deux nombres premiers inférieurs à 100
 * et un nombre premier inferieur à 529
 * variante de 3A-11 avec les critères par 7 et 11 en plus
 * @author Sébastien Lozano
 */
function Premier_ou_pas_critere_par7_par11(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.titre = "Primalité ou pas - Variante avec les critères de divisibilité par 7 et par 11"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne = `Justifier que les nombres suivants sont premiers ou pas.`;
	//this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 7;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4,5,6,7];
		type_de_questions_disponibles=shuffle(type_de_questions_disponibles); // on mélange l'ordre des questions
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

		let string_rappel_b = `Ces critères de divisibilité pourront être utiles :`;
		if (sortie_html) {
			string_rappel_b += `<br>`;
			string_rappel_b += `- Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.<br>`;
			string_rappel_b += `- Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11.`;
			string_rappel_b+= `<br> <br>`;
		} else {
			string_rappel_b += itemize([
				`Un nombre est divisible par 7 si la somme de son nombre de dizaines et de cinq fois son chiffre des unités l’est.`,
				`Un nombre est divisible par 11 si la différence entre la somme de ses chiffres de rangs pairs et la somme de ses chiffres de rangs impairs est nulle ou égale à un multiple de 11.`
			]);
			string_rappel_b += `\\par\\vspace{0.5cm}`;
		};
		string_rappel_b += `Ainsi que cette liste des nombres premiers inférieurs à 100 : `;
		if (sortie_html) {
			string_rappel_b += `<br>`;
		} else {
			string_rappel_b += `\\par\\vspace{0.25cm}`;
		};
		string_rappel_b += crible_eratosthene_n(100)[0];
		for (let k=1;k<crible_eratosthene_n(100).length;k++) {
			string_rappel_b +=`, `+crible_eratosthene_n(100)[k];
		};
		string_rappel_b +=`.`;
		if (sortie_html) {
			this.introduction =`
			<br>
			<div class="ui compact warning message">		
			<p>`+string_rappel_b+`
			</p>
			</div>
			<br>`;
		} else {
			this.introduction = tex_cadre_par_orange(string_rappel_b);	
		};	
			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
				var N; // le nombre de la question
	
				switch (type_de_questions) {
					case 1 : // nombre pair
						N=2*randint(51,4999);
						texte = nombre_avec_espace(N);						
						texte_corr = `Comme ${nombre_avec_espace(N)} est pair, il admet donc au moins trois diviseurs qui sont 1, 2 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;		
					case 2 : // Multiple de 3
						let sum=0; // pour la valeur de la somme;
						N=3*randint(34,3333);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme `+ N.toString().charAt(0);
						sum = Number(N.toString().charAt(0));
						for (let k=1; k<N.toString().length; k++) {
							texte_corr += ` + `+N.toString().charAt(k);
							sum +=Number(N.toString().charAt(k));
						};					
						texte_corr += ` = ${sum} est un multiple de 3 donc ${nombre_avec_espace(N)} aussi, il admet donc au moins trois diviseurs qui sont 1, 3 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 3 : // Multiple de 5
						N=5*randint(20,1999);
						texte = nombre_avec_espace(N);
						texte_corr = `Comme le dernier chiffre de ${nombre_avec_espace(N)} est un ${N.toString().charAt(N.toString().length-1)} alors ${nombre_avec_espace(N)} est divisible par 5, `;
						texte_corr += `il admet donc au moins trois diviseurs qui sont 1, 5 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;	
					case 4 : // Multiple de 7
						let N_longueur; // pour la taille du string N
						let N1; // pour la repetiton du critère
						let N1_longueur; // pour la taille du string N1
						let sum1; // pour la somme de la répétition du critère
						N=7*randint(15,1428);
						texte = nombre_avec_espace(N);
						N_longueur = N.toString().length;
						texte_corr = ` 7 divise ${nombre_avec_espace(N)}, en effet : `;
						texte_corr += `<br>`;
						N1 = N;
						N1_longueur = N_longueur;
						sum1 = Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1));
						while (sum1 >=56 ) {
							texte_corr += `${N1.toString().substring(0,N1_longueur-1)} + 5$\\times$${N1.toString().charAt(N1_longueur-1)}`;
							texte_corr += ` = ${Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1))}`;
							texte_corr += `<br>`;
							N1 = sum1;
							N1_longueur = N1.toString().length;
							sum1 = Number(N1.toString().substring(0,N1_longueur-1))+5*Number(N1.toString().charAt(N1_longueur-1));
						};
						// texte_corr = `Comme ${N.toString().substring(0,N_longueur-1)}-5$\\times$${N.toString().charAt(N_longueur-1)}`;
						// texte_corr += ` = ${Number(N.toString().substring(0,N_longueur-1))+5*Number(N.toString().charAt(N_longueur-1))} est un multiple de 7 alors 7 divise ${N} aussi, `;
						texte_corr += `Comme ${N1.toString().substring(0,N1_longueur-1)} + 5$\\times$${N1.toString().charAt(N1_longueur-1)} = ${sum1} est un multiple de 7 alors 7 divise ${N} aussi `;
						texte_corr += `qui admet donc au moins trois diviseurs : 1, 7 et lui-même,<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;
					case 5 : // multiple de 11
						let even_sum; // pour la somme des chiffres de rang impair
						let odd_sum; // pour la somme des chiffres de rang pair
						N=11*randint(10,909);
						texte = nombre_avec_espace(N);
						texte_corr = `D'une part, la somme des chiffres de rang impair de ${nombre_avec_espace(N)} vaut `;
						if (Number(N.toString().length)%2==0) { // si N a un nombre pair de chiffres
							even_sum = Number(N.toString().charAt(1));
							texte_corr += N.toString().charAt(1);
							for (let k=3; k<N.toString().length; k++) {
								if (k%2==1) {
								texte_corr += ` + `+N.toString().charAt(k);
								even_sum += Number(N.toString().charAt(k));
								};
							};
							texte_corr += ` = `+even_sum+ ` <br> `;
						} else { // sinon N a un nombre impair de chiffres
							even_sum = Number(N.toString().charAt(0));
							texte_corr += N.toString().charAt(0);
							for (let m=1; m<N.toString().length; m++) {
								if (m%2==0) {
								texte_corr += ` + `+N.toString().charAt(m);
								even_sum += Number(N.toString().charAt(m));
								};

							};
							texte_corr += ` = `+even_sum+ `<br> `;
						};
						texte_corr += `d'autre part, la somme des chiffres de rang pair de ${nombre_avec_espace(N)} vaut `;
						if (Number(N.toString().length)%2==0) { // si N a un nombre pair de chiffres
							odd_sum = Number(N.toString().charAt(0));
							texte_corr += N.toString().charAt(0);
							for (let k=1; k<N.toString().length; k++) {
								if (k%2==0) {
								texte_corr += ` + `+N.toString().charAt(k);
								odd_sum += Number(N.toString().charAt(k));
								};
							};
							texte_corr += ` = `+odd_sum+ ` <br> `;
						} else { // sinon N a un nombre impair de chiffres
							odd_sum = Number(N.toString().charAt(1));
							texte_corr += N.toString().charAt(1);
							for (let m=3; m<N.toString().length; m++) {
								if (m%2==1) {
								texte_corr += ` + `+N.toString().charAt(m);
								odd_sum += Number(N.toString().charAt(m));
								};

							};
							texte_corr += ` = `+odd_sum+ `<br> `;
						};
						texte_corr += `la différence entre la somme des chiffres de rangs pairs et celle des chiffres de rangs impairs vaut `;
						if ((odd_sum-even_sum)==0) {
							texte_corr += `${odd_sum-even_sum}, `;

						} else {
							texte_corr += `${Math.abs(odd_sum-even_sum)} qui est un multiple de 11, `;
						};
						texte_corr+= `<br>`;
						texte_corr += ` cela signifie que ${nombre_avec_espace(N)} est divisible par 11, il admet donc au moins trois diviseurs qui sont 1, 11 et lui-même,`;
						texte_corr += `<br> ${nombre_avec_espace(N)} n'est donc pas premier.`;
						break;
					case 6 : // produit de deux nombres premiers inférieurs à 100
						// rang du premier facteur premier
						let r1 = randint(0,crible_eratosthene_n(100).length-1);
						// rang du second facteur premier
						let r2 = randint(0,crible_eratosthene_n(100).length-1);
						let prime1 = crible_eratosthene_n(100)[r1]; // on tire un nombre premier inférieur à 100, il n'y en a que 25!
						let prime2 = crible_eratosthene_n(100)[r2]; // on tire un autre nombre premier inférieur à 100, ça peut être le même qu'avant!
						N=prime1+`$\\times$`+prime2;
						texte = N;
						texte_corr = `${N} est le produit de ${prime1} et de ${prime2}, il admet donc au moins `;
						if (prime1==prime2) {
							texte_corr += `trois divisieurs qui sont 1, ${prime1} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						} else {
							texte_corr += `quatre diviseurs qui sont 1, ${prime1}, ${prime2} et lui-même ${N}=${nombre_avec_espace(prime1*prime2)}`;
						};
						texte_corr +=`<br> ${N} n'est donc pas premier.`; 
						break;
					case 7 : // nombre premier inférieur à 529
						// rang du nombre premier choisi
						let r = randint(0,crible_eratosthene_n(529).length-1);
						N=crible_eratosthene_n(529)[r]; //on choisit un nombre premier inférieur à 529
						texte = N+``;;
						let tab_premiers_a_tester = crible_eratosthene_n(Math.trunc(Math.sqrt(N)));
						texte_corr = `Testons la divisibilité de ${N} par tous les nombres premiers inférieurs à $\\sqrt{${N}}$, c'est à dire par les nombres `;
						texte_corr += tab_premiers_a_tester[0];
						for (let k=1;k<tab_premiers_a_tester.length;k++) {
							texte_corr += `, `+tab_premiers_a_tester[k];
						};
						texte_corr += `.`;
						texte_corr += `<br> Aucun de ces nombres premiers ne divise ${N}.`;
						texte_corr +=`<br> ${N} est donc un nombre premier.`; 
						break;								
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A11-2 - Decomposition_facteurs_premiers
 * Décomposer un nombre en facteurs premiers et compter son nombre de diviseurs à partir d'un tableau
 * plusieurs type de nombres à décomposer
 * type 1 : 3 à 5 facteurs premiers max, multiplicités 0,1,2 ou 3 max à préciser
 * type 2 : un produit de deux premiers entre 30 et 100, multiplicité 1 ... suffisamment de possibilités?
 * type 3 : un gros premiers au delà de 1000 et inférieur à 2 000  
 * @author Sébastien Lozano
 */
 
function Decomposition_facteurs_premiers(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Décomposition en facteurs premiers d'un entier"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`&Agrave; l'aide de la calculatrice, décomposer pas à pas les nombres entiers en produit de facteurs premiers.`;	
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 3;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3];
		type_de_questions_disponibles=shuffle(type_de_questions_disponibles); // on mélange l'ordre des questions
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

		let string_rappel = `Cette liste des nombres premiers inférieurs à 100 pourra être utile : <br>`+crible_eratosthene_n(100)[0];
		for (let k=1;k<crible_eratosthene_n(100).length;k++) {
			string_rappel +=`, `+crible_eratosthene_n(100)[k];
		};
		string_rappel +=`.`;
		if (sortie_html) {
			this.introduction =`
			<br>
			<div class="ui compact warning message">		
			<p>`+string_rappel+`
			</p>
			</div>
			<br>`;
		} else {
			this.introduction = tex_cadre_par_orange(string_rappel);							
		};

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];				
	
				switch (type_de_questions) {
					case 1 : // 3 à 5 facteurs premiers max compris entre 0 et 30, de multiplicité 1,2 ou 3 max
						// on fixe le nombre de facteurs premier entre 3 et 5
						let nb_de_premiers = randint(3,5);						
						// on fixe la limite pour le choix des premiers
						let max_premier = 11;
						// on fixe le rang max pour le choix des premiers
						let rg_max = crible_eratosthene_n(max_premier).length-1;					
						// on choisit les rangs pour les nombres premiers
						let tab_rangs = [];
						let tab_rangs_exclus = [];
						for (let k=0;k<(nb_de_premiers);k++) {
							for (let m=0;m<k;m++) {
								tab_rangs_exclus.push(tab_rangs[m]);
							}
							tab_rangs[k] = randint(0,rg_max,tab_rangs_exclus);
						};
						// on choisit les premiers
						let tab_premiers = [];
						for (let k=0; k<tab_rangs.length; k++) {
							tab_premiers[k] = crible_eratosthene_n(max_premier)[tab_rangs[k]];
						};
						// on range les facteurs premiers dans l'ordre croissant
						tab_premiers.sort(function(a,b){
							return a-b;
						});
						// on choisit les multiplicités
						let tab_multiplicites = [];
						for (let k=0; k<tab_rangs.length; k++) {
							tab_multiplicites[k] = randint(1,2);
						};
						// yapluka écrire le nombre dans l'énoncé et sa décomposition dans la correction
						texte = `À l'aide de la calculatrice, décomposer `;
						let nombre_a_decomposer=1;
						for (let k=0; k<tab_rangs.length; k++) {
							for (let m=0; m<tab_multiplicites[k]; m++) {
								nombre_a_decomposer = nombre_a_decomposer*tab_premiers[k];
							};
						};
						let racine_premier_1 = Math.trunc(Math.sqrt(nombre_a_decomposer)); 
						texte += `$${tex_nombre(nombre_a_decomposer)}$ en produit de facteurs premiers.`;
						// correction						
						texte_corr = `Nous allons successivement tester la divisibilité de $${tex_nombre(nombre_a_decomposer)}$ par tous les nombres premiers inférieurs à `;						
						texte_corr += `$${tex_nombre(nombre_a_decomposer)}$ en commençant par 2, 3, 5, 7, ...<br>`;
						texte_corr = `Il est suffisant de tester la divisibilité de $${tex_nombre(nombre_a_decomposer)}$ par tous les nombres premiers inférieurs ou égaux à $\\sqrt{${tex_nombre(nombre_a_decomposer)}}$ c'est à dire inférieurs à $${tex_nombre(racine_premier_1)}$.<br>`;
						texte_corr += `Ce sont les nombres de la liste : $`;
						texte_corr += crible_eratosthene_n(racine_premier_1)[0];
						for (let k=1;k<crible_eratosthene_n(racine_premier_1).length;k++) {
							texte_corr += `; `+crible_eratosthene_n(racine_premier_1)[k];
						};
						texte_corr += `.$<br>`;		
						var liste_facteurs_premiers = obtenir_liste_facteurs_premiers(nombre_a_decomposer);
						var quotient_intermediaire = nombre_a_decomposer;
						for (let k=0;k<liste_facteurs_premiers.length;k++) {
							texte_corr += `$${tex_nombre(quotient_intermediaire)}\\div${mise_en_evidence(liste_facteurs_premiers[k])} = ${tex_nombre(quotient_intermediaire/liste_facteurs_premiers[k])}$<br>`;
							quotient_intermediaire = quotient_intermediaire/liste_facteurs_premiers[k];
						};	
						texte_corr +=`Finalement on obtient la décomposition suivante : $ ${tex_nombre(nombre_a_decomposer)} = `;
						if (tab_multiplicites[0]==1) {
							texte_corr += `${tab_premiers[0]}`;							
						} else {
							texte_corr += `${tab_premiers[0]}^{${tab_multiplicites[0]}}`;
						};
						for (let k=1; k<tab_premiers.length;k++) {
							if (tab_multiplicites[k]==1) {
								texte_corr += `\\times ${tab_premiers[k]}`;
								//console.log('typeof : '+typeof tab_multiplicites[k]);
							} else {
								texte_corr += `\\times ${tab_premiers[k]}^{${tab_multiplicites[k]}}`;
							};							
						};
						texte_corr += `$`;
						break;		
					case 2 : // deux premiers compris entre 30 et 100 de multiplicité 1
						// on choisit un rang différent pour chaque premier entre 30 et 100
						let r1 = randint(0,premiers_entre_bornes(30,100).length-1);
						let r2 = randint(0,premiers_entre_bornes(30,100).length-1,r1);
						let premier1 = premiers_entre_bornes(30,100)[r1];			
						let premier2 = premiers_entre_bornes(30,100)[r2];
						if (premier1>premier2) { // on inverse p1 et p2 si p1 est supérieur à p2
							let p = premier1;
							premier1=premier2;
							premier2=p;
						};						
						texte = `À l'aide de la calculatrice, décomposer $${tex_nombre(premier1*premier2)}$ en produit de facteurs premiers.`;
						let racine_prem = Math.trunc(Math.sqrt(premier1*premier2));
						texte_corr = `Il est suffisant de tester la divisibilité de $${tex_nombre(premier1*premier2)}$ par tous les nombres premiers inférieurs ou égaux à $\\sqrt{${tex_nombre(premier1*premier2)}}$ c'est à dire inférieurs à $${tex_nombre(racine_prem)}$.<br>`;
						texte_corr += `Ce sont les nombres de la liste suivante : <br>$`;
						texte_corr += crible_eratosthene_n(racine_prem)[0];
						for (let k=1;k<crible_eratosthene_n(racine_prem).length;k++) {
							texte_corr += `; `+crible_eratosthene_n(racine_prem)[k];
						};
						texte_corr += `.$<br>`;						
						liste_facteurs_premiers = obtenir_liste_facteurs_premiers(premier1*premier2);
						quotient_intermediaire = premier1*premier2;
						for (let k=0;k<liste_facteurs_premiers.length;k++) {
							texte_corr += `$${tex_nombre(quotient_intermediaire)}\\div${mise_en_evidence(liste_facteurs_premiers[k])} = ${tex_nombre(quotient_intermediaire/liste_facteurs_premiers[k])}$<br>`;
							quotient_intermediaire = quotient_intermediaire/liste_facteurs_premiers[k];
						};
						texte_corr += ` D'où $${tex_nombre(premier1*premier2)} = ${tex_nombre(premier1)}\\times${tex_nombre(premier2)}$.`;
						break;	
					case 3 : // un gros premier entre 1000 et 2000			
						// on choisit un rang pour le nombre premier entre 1000 et 2000
						let r = randint(0,premiers_entre_bornes(1000,2000).length-1);
						let premier = premiers_entre_bornes(1000,2000)[r];			
						let racine_premier = Math.trunc(Math.sqrt(premier));
						texte = `À l'aide de la calculatrice, décomposer $${tex_nombre(premier)}$ en produit de facteurs premiers.`;
						texte_corr = `En testant la divisibilité de $${tex_nombre(premier)}$ par tous les nombres premiers inférieurs ou égaux à $${racine_premier}$`;
						texte_corr += ` c'est à dire les nombre de la liste $`;
						texte_corr += crible_eratosthene_n(racine_premier)[0];
						for (let k=1;k<crible_eratosthene_n(racine_premier).length;k++) {
							texte_corr += `; `+crible_eratosthene_n(racine_premier)[k];
						};
						texte_corr += `$, `;
						texte_corr += `on se rend compte que $${tex_nombre(premier)}$ est un nombre premier donc `;
						texte_corr +=`$${tex_nombre(premier)} = ${tex_nombre(premier)}$.`;
						break;	
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A11-3 - Lister/Compter les diviseurs d'un entier à partir de sa decomposition en facteurs premiers 
 * @author Sébastien Lozano
 */
 
function Lister_Diviseurs_Par_Decomposition_facteurs_premiers(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Compter/lister les diviseurs d'un entier à partir de sa décomposition en facteurs premiers."; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Sans la calculatrice, compter/lister les diviseurs d'un entier à partir de sa décomposition en facteurs premiers.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 2;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A11.pdf","Aide mémoire sur les nombres premiers (Sébastien Lozano)","Aide mémoire")		
			this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique - Les Nombres Premiers','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
	
				switch (type_de_questions) {
					case 1 : // lister/compter les diviseurs d'un entier à partir de sa décomposition en facteurs premiers			
						texte = `Lister/compter les diviseurs d'un entier à partir de sa décomposition en facteurs premiers`;
						//let premiers_dispos = premiers_entre_bornes(2,11);
						// on fixe le nombre de facteurs premier à 3
						let nb_de_premiers_b = randint(3,3);						
						// on fixe la limite pour le choix des premiers
						let max_premier_b = 11;
						// on fixe le rang max pour le choix des premiers
						let rg_max_b = crible_eratosthene_n(max_premier_b).length-1;					
						// on choisit les rangs pour les nombres premiers
						let tab_rangs_b = [];
						let tab_rangs_exclus_b = [];
						for (let k=0;k<(nb_de_premiers_b);k++) {
							for (let m=0;m<k;m++) {
								tab_rangs_exclus_b.push(tab_rangs_b[m]);
							}
							tab_rangs_b[k] = randint(0,rg_max_b,tab_rangs_exclus_b);
						};
						// on choisit les premiers
						let tab_premiers_b = [];
						for (let k=0; k<tab_rangs_b.length; k++) {
							tab_premiers_b[k] = crible_eratosthene_n(max_premier_b)[tab_rangs_b[k]];
						};
						// on range les facteurs premiers dans l'ordre croissant
						tab_premiers_b.sort(function(a,b){
							return a-b;
						});
						// on choisit les multiplicités
						let tab_multiplicites_b = [];
						for (let k=0; k<tab_rangs_b.length; k++) {
							tab_multiplicites_b[k] = randint(1,2);
						};
						texte = ``;
						let nombre_a_decomposer_b=1;
						for (let k=0; k<tab_rangs_b.length; k++) {
							for (let m=0; m<tab_multiplicites_b[k]; m++) {
								nombre_a_decomposer_b = nombre_a_decomposer_b*tab_premiers_b[k];
							};
						};
						texte += `La décomposition en facteurs premiers de $${tex_nombre(nombre_a_decomposer_b)}$ est : $`;
						if (tab_multiplicites_b[0]==1) {
							texte += `${tab_premiers_b[0]}`;							
						} else {
							texte += `${tab_premiers_b[0]}^{${tab_multiplicites_b[0]}}`;
						};
						for (let k=1; k<tab_premiers_b.length;k++) {
							if (tab_multiplicites_b[k]==1) {
								texte += `\\times ${tab_premiers_b[k]}`;
							} else {
								texte += `\\times ${tab_premiers_b[k]}^{${tab_multiplicites_b[k]}}`;
							};							
						};
						texte += `$, <br>`;
						texte +=num_alpha(0)+` Compléter le tableau ci-dessous.`;
						// on crée le tableau des entetes de lignes et des colonnes
						let ent_lignes = [];
						let contenu_lignes=[];
						let ent_colonnes = [`\\times`];
						// les entetes des lignes
						for (let k=0;k<tab_multiplicites_b[0]+1;k++) {
							ent_lignes.push(tab_premiers_b[0]+`^{`+k+`}`);
						};
						// les entetes des colonnes 
						for (let m=0;m<tab_multiplicites_b[1]+1;m++) {
							for (let l=0;l<tab_multiplicites_b[2]+1;l++) {
								ent_colonnes.push(tab_premiers_b[1]+`^{`+m+`}\\times`+tab_premiers_b[2]+`^{`+l+`}`);
							};
						};
						// tableau pour la permutation circulaire
						let tab_temp;
						// on y affecte les lignes
						tab_temp = ent_lignes;
						// on supprime le x de l'entete des colonnes
						ent_colonnes.shift();
						// on affecte ça aux lignes;
						ent_lignes = ent_colonnes;
						// on remet le x en colonnes et on ajoute le reste
						ent_colonnes = [`\\times`].concat(tab_temp);
						// le contenu des lignes
						for (let l=0;l<(tab_multiplicites_b[0]+1);l++) {
							for (let c=1;c<(tab_multiplicites_b[1]+1)*(tab_multiplicites_b[2]+1)+1;c++) {
								//contenu_lignes.push(`l : `+l+`, c : `+Number(c));
								contenu_lignes.push(``);
							};
						};						
						texte += `<br>`;
						texte += tab_C_L(ent_colonnes,ent_lignes,contenu_lignes);
						texte += `<br>`;
						texte +=num_alpha(1)+` En déduire le nombre de diviseurs de $${tex_nombre(nombre_a_decomposer_b)}$.<br>`;
						texte +=num_alpha(2)+` Enfin, dresser la liste des diviseurs de $${tex_nombre(nombre_a_decomposer_b)}$.<br>`;						
						// correction
						texte_corr = `Avec la décomposition en facteurs premiers de $${tex_nombre(nombre_a_decomposer_b)}$ qui est : $`;
						if (tab_multiplicites_b[0]==1) {
							texte_corr += `${tab_premiers_b[0]}`;							
						} else {
							texte_corr += `${tab_premiers_b[0]}^{${tab_multiplicites_b[0]}}`;
						};
						for (let k=1; k<tab_premiers_b.length;k++) {
							if (tab_multiplicites_b[k]==1) {
								texte_corr += `\\times ${tab_premiers_b[k]}`;
							} else {
								texte_corr += `\\times ${tab_premiers_b[k]}^{${tab_multiplicites_b[k]}}`;
							};							
						};
						texte_corr += `$, <br>`;
						texte_corr += num_alpha(0)+` Le tableau donne :`;
						// on crée le tableau des entetes de lignes et des colonnes
						let ent_lignes_corr = [];
						let ent_lignes_corr_res = [];
						let contenu_lignes_corr = [];
						//let contenu_lignes_corr_res = [];
						let ent_colonnes_corr = [`\\times`];
						let ent_colonnes_corr_res = [1];
						// les entetes des lignes
						for (let k=0;k<tab_multiplicites_b[0]+1;k++) {
							ent_lignes_corr.push(tab_premiers_b[0]+`^{`+k+`}`);
							ent_lignes_corr_res.push(tab_premiers_b[0]**k);							
						};						
						// les entetes des colonnes 
						for (let m=0;m<tab_multiplicites_b[1]+1;m++) {
							for (let l=0;l<tab_multiplicites_b[2]+1;l++) {
								ent_colonnes_corr.push(tab_premiers_b[1]+`^{`+m+`}\\times`+tab_premiers_b[2]+`^{`+l+`}`);
								ent_colonnes_corr_res.push(tab_premiers_b[1]**m*tab_premiers_b[2]**l);
							};
						};
						// tableaux pour les permutations circulaires
						let tab_temp_corr;
						let tab1_temp_corr;
						// on y affecte les lignes
						tab_temp_corr = ent_lignes_corr;
						tab1_temp_corr = ent_lignes_corr_res;
						// on supprime le x de l'entete des colonnes
						ent_colonnes_corr.shift();
						ent_colonnes_corr_res.shift();
						// on affecte ça aux lignes;
						ent_lignes_corr = ent_colonnes_corr;
						ent_lignes_corr_res = ent_colonnes_corr_res;
						// on remet le x en colonnes et on ajoute le reste
						ent_colonnes_corr = [`\\times`].concat(tab_temp_corr);
						ent_colonnes_corr_res = [1].concat(tab1_temp_corr);
						// le contenu des lignes
						for (let l=0;l<(tab_multiplicites_b[1]+1)*(tab_multiplicites_b[2]+1)+1;l++) {
							for (let c=1;c<(tab_multiplicites_b[0]+2);c++) {
								//contenu_lignes_corr.push(`l : `+l+`, c : `+Number(c));								
								contenu_lignes_corr.push(ent_lignes_corr[l]+`\\times`+ent_colonnes_corr[c]+`=`+mise_en_evidence(tex_nombre(ent_lignes_corr_res[l]*ent_colonnes_corr_res[c])));																
							};
						};
						texte_corr += `<br>`;
						texte_corr += tab_C_L(ent_colonnes_corr,ent_lignes_corr,contenu_lignes_corr);
						texte_corr += `<br><br>`;
						texte_corr +=num_alpha(1)+` $${tex_nombre(nombre_a_decomposer_b)}$ a donc `;
						texte_corr += `$(${tab_multiplicites_b[0]}+1)\\times(${tab_multiplicites_b[1]}+1)\\times(${tab_multiplicites_b[2]}+1) = `;
						texte_corr += `${tab_multiplicites_b[0]+1}\\times${tab_multiplicites_b[1]+1}\\times${tab_multiplicites_b[2]+1} = `;
						texte_corr += `${(tab_multiplicites_b[0]+1)*(tab_multiplicites_b[1]+1)*(tab_multiplicites_b[2]+1)}$ diviseurs.<br>`;
						texte_corr += `En effet, dans la décomposition apparait : `;
						texte_corr += ` <br> - Le facteur premier $${tab_premiers_b[0]}$ avec la multiplicité $${tab_multiplicites_b[0]}$`;
						texte_corr += `, le facteur $${tab_premiers_b[0]}$ apparait donc sous les formes : `;
						for (let k=0;k<tab_multiplicites_b[0];k++) {
							texte_corr += `$${tab_premiers_b[0]}^{`+k+`}$ ou `;
						};
						texte_corr += `$${tab_premiers_b[0]}^{`+tab_multiplicites_b[0]+`}$ d'où le facteur $(${tab_multiplicites_b[0]}+1)$.`;

						texte_corr += ` <br> - Le facteur premier $${tab_premiers_b[1]}$ avec la multiplicité $${tab_multiplicites_b[1]}$`;
						texte_corr += `, le facteur $${tab_premiers_b[1]}$ apparait donc sous les formes : `;
						for (let k=0;k<tab_multiplicites_b[1];k++) {
							texte_corr += `$${tab_premiers_b[1]}^{`+k+`}$ ou `;
						};
						texte_corr += `$${tab_premiers_b[1]}^{`+tab_multiplicites_b[1]+`}$ d'où le facteur $(${tab_multiplicites_b[1]}+1)$.`;

						texte_corr += ` <br> - Le facteur premier $${tab_premiers_b[2]}$ avec la multiplicité $${tab_multiplicites_b[2]}$`;
						texte_corr += `, le facteur $${tab_premiers_b[2]}$ apparait donc sous les formes : `;
						for (let k=0;k<tab_multiplicites_b[2];k++) {
							texte_corr += `$${tab_premiers_b[2]}^{`+k+`}$ ou `;
						};
						texte_corr += `$${tab_premiers_b[2]}^{`+tab_multiplicites_b[2]+`}$ d'où le facteur $(${tab_multiplicites_b[2]}+1)$.`;

						texte_corr += `<br>`;
						texte_corr +=num_alpha(2)+` Enfin, voici la liste des $${(tab_multiplicites_b[0]+1)*(tab_multiplicites_b[1]+1)*(tab_multiplicites_b[2]+1)}$ diviseurs de $${tex_nombre(nombre_a_decomposer_b)}$ issus du tableau ci-dessus : `;
						texte_corr += `$1`;
						for (let w = 1; w<liste_diviseurs(nombre_a_decomposer_b).length; w++) {
							texte_corr += `\\text{; }`+tex_nombre(liste_diviseurs(nombre_a_decomposer_b)[w]);
						};
						texte_corr += `.$`;
						break;		
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A12 - Fractions irreductibles
 * @author Sébastien Lozano
 */
 
function Fractions_irreductibles(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "Fractions irréductibles"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`Décomposer une fraction et son inverse à partir des décompositons en facteurs premier.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 4 : this.spacing = 3;
	sortie_html ? this.spacing_corr = 4: this.spacing_corr = 3;
	this.nb_questions = 1;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			//this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A12.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")					
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		//let type_de_questions_disponibles = [1,2,3,4];
		let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];

				var nb_div_prem_communs; // nombre de diviseurs premiers communs
				var candidats_premiers_communs; // tableau des candidats premiers communs
				var premiers_communs; // tableau des diviseurs premiers communs
				var multiplicites_premiers_communs; // tableau des multiplicités des diviseurs premiers communs 
				var r; // tableau pour le choix des rangs des diviseurs premiers communs
				var r_exclus; // tableau pour la boucle de creation de r				
				var nb1_dist; // diviseur unique du premier nombre 
				var nb2_dist; // divisuer unique du second nombre
				var r_ex; // pour exlcure le rang de nb1
				var tab_nb1; // tableau pour les diviseurs de nb1
				var tab_nb2; // tableau pour les diviseurs de nb2
				var multiplicites_nb1;
				var multiplicites_nb2;
				var nb1; // nbre 1
				var nb2; // nbre 2

				// on fixe le tableau de choix
				candidats_premiers_communs = premiers_entre_bornes(2,13);
				// on fixe le nombre de divisuers premiers communs
				nb_div_prem_communs = 4;
				// on initialise le tableau des diviseurs premiers communs
				premiers_communs = [];
				// on initialise le tableau des rangs
				r=[];
				// on initialise le tableau des rangs déjà choisis
				r_exclus=[];
				// on complète le tableau des rangs des rangs des diviseurs premiers choisis
				for (let k=0;k<nb_div_prem_communs;k++) {
					for(let m=0;m<k;m++) {
						r_exclus.push(r[m]);
					};					
					r[k]=randint(0,candidats_premiers_communs.length-1,r_exclus);
				};
				// on complète le tableau des diviseurs premiers communs
				for (let k=0;k<nb_div_prem_communs;k++) {
					premiers_communs.push(candidats_premiers_communs[r[k]]);
				};
				// on initialise et on complète le tableau des multiplicités des diviseurs premiers communs
				multiplicites_premiers_communs = [];
				for (let k=0;k<nb_div_prem_communs;k++) {
					multiplicites_premiers_communs.push(randint(0,2));
				};
				// on supprime les diviseurs premiers de multiplicité 0 et leur multiplicité
				let idx = multiplicites_premiers_communs.indexOf(0);
				while (idx != -1) {
					premiers_communs.splice(idx,1);
					multiplicites_premiers_communs.splice(idx,1);
					idx = multiplicites_premiers_communs.indexOf(0);
				};
				// on initialise le tableau des diviseurs du premier et du second nombre avec les diviseurs premiers communs
				tab_nb1=[];
				tab_nb2=[];
				for (let k=0;k<premiers_communs.length;k++) {
					tab_nb1[k]=premiers_communs[k];
					tab_nb2[k]=premiers_communs[k];
				};								
				// on initialise les tableaux de multiplicité, ils sont les mêmes mais on pourrait vouloir qu'ils soient différents
				multiplicites_nb1=[];
				multiplicites_nb2=[];
				for (let k=0;k<premiers_communs.length;k++) {
					multiplicites_nb1[k]=multiplicites_premiers_communs[k];
					multiplicites_nb2[k]=multiplicites_premiers_communs[k];
				};				
				// on ajoute un facteur premier distinct pour chaque nombre plus petit que 30
				r_ex = randint(0,premiers_entre_bornes(2,30).length-1);
				nb1_dist = premiers_entre_bornes(2,30)[r_ex];				
				nb2_dist = premiers_entre_bornes(2,30)[randint(0,premiers_entre_bornes(2,30).length-1,r_ex)];				
				// on ajoute nb1_dist, nb2_dist dans les tableaux des diviseurs premiers du premier et du second nombre 
				// nb1
				let bool = false;
				let n = 0;
				while (n < tab_nb1.length && bool!=true) {
					if (nb1_dist == tab_nb1[n]) {// si le diviseur premier est déjà présent on incrémente sa multiplicité
						multiplicites_nb1[n]++;
						bool = true;
					};
					n++;
				};
				// on teste la valeur de sortie de bool et on ajoute la nouvelle valeur si necessaire
				if (!bool) {// il n'est pas présent on l'ajoute avec la multipplicité 1
					tab_nb1.push(nb1_dist);
					multiplicites_nb1.push(1);				
					bool = true;
				};
				// nb2
				bool = false;
				n = 0;
				while (n < tab_nb2.length && !bool) {
					if (nb2_dist == tab_nb2[n]) {// si le diviseur premier est déjà présent on incrémente sa multiplicité
						multiplicites_nb2[n]++;
						bool = true;
					}; 
					n++;
				};
				// on teste la valeur de sortie de bool et on ajoute la nouvelle valeur si necessaire
				if (!bool) {// il n'est pas présent on l'ajoute avec la multipplicité 1
					tab_nb2.push(nb2_dist);
					multiplicites_nb2.push(1);				
					bool = true;
				};			
				// on crée un tableau associatif à partir des deux tableaux tab_ni et multiplicites_ni
				let tab_prem_mult_nb1 = [];
				for (let k=0;k<tab_nb1.length;k++) {
					tab_prem_mult_nb1[k]={'prem': tab_nb1[k],'mult':multiplicites_nb1[k]};
				};
				let tab_prem_mult_nb2 = [];
				for (let k=0;k<tab_nb2.length;k++) {
					tab_prem_mult_nb2[k]={'prem': tab_nb2[k],'mult':multiplicites_nb2[k]};
				};
				// on range selon prem croissant
				tab_prem_mult_nb1.sort(function(a,b){
					return a.prem>b.prem;
				});
				tab_prem_mult_nb2.sort(function(a,b){
					return a.prem>b.prem;
				});
				// on initialise nb1 et nb2 et on les calcule à partir des tableaux 				
				nb1=1;
				for (let k=0;k<tab_nb1.length;k++) {
				 	nb1=nb1*tab_prem_mult_nb1[k].prem**tab_prem_mult_nb1[k].mult;
				};
				nb2=1;
				for (let k=0;k<tab_nb2.length;k++) {
					nb2=nb2*tab_prem_mult_nb2[k].prem**tab_prem_mult_nb2[k].mult;	
			   };

				switch (type_de_questions) {
					case 1 : // décomposition de A
						texte = num_alpha(0)+` Décomposer $A = ${tex_nombre(nb1)}$ en produit de facteurs premiers : `;
						texte_corr =num_alpha(0)+` La décomposition en produit de facteurs premier de $A = `;
						switch (tab_prem_mult_nb1[0].mult) {
							case 1 :
								texte_corr += `${tab_prem_mult_nb1[0].prem}`;
								break;
							default :
								texte_corr += `${tab_prem_mult_nb1[0].prem}^{${tab_prem_mult_nb1[0].mult}}`;
								break;
						};
						for (let k=1; k<tab_nb1.length;k++) {
							switch (tab_prem_mult_nb1[k].mult) {
								case 1 :
									texte_corr += `\\times${tab_prem_mult_nb1[k].prem}`;
									break;
								default :
									texte_corr += `\\times${tab_prem_mult_nb1[k].prem}^{${tab_prem_mult_nb1[k].mult}}`;
									break;
							};						
						};
						texte_corr += `$.`;
					//	break;		
					//case 2 : // décomposition de B 	
						texte += `<br>`+num_alpha(1)+` Décomposer $B = ${tex_nombre(nb2)}$ en produit de facteurs premiers : `;
						texte_corr += `<br>`+num_alpha(1)+` La décomposition en produit de facteurs premier de $B = `;
						switch (tab_prem_mult_nb2[0].mult) {
							case 1 :
								texte_corr += `${tab_prem_mult_nb2[0].prem}`;
								break;
							default :
								texte_corr += `${tab_prem_mult_nb2[0].prem}^{${tab_prem_mult_nb2[0].mult}}`;
								break;
						};
						for (let k=1; k<tab_nb2.length;k++) {
							switch (tab_prem_mult_nb2[k].mult) {
								case 1 :
									texte_corr += `\\times${tab_prem_mult_nb2[k].prem}`;
									break;
								default :
									texte_corr += `\\times${tab_prem_mult_nb2[k].prem}^{${tab_prem_mult_nb2[k].mult}}`;
									break;
							};						
						};
						texte_corr += `$.`;
					//	break;	
					//case 3 : // reduction de A sur B 			
						texte += `<br>`+num_alpha(2)+` Rendre la fraction $\\dfrac{A}{B} = \\dfrac{${tex_nombre(nb1)}}{${tex_nombre(nb2)}}$ irréductible `;
						texte += ` à l'aide des décompositions obtenues au `+num_alpha(0)+` et au `+num_alpha(1);
						texte_corr += `<br>`+num_alpha(2)+` $\\dfrac{A}{B} = \\dfrac{${tex_nombre(nb1)}}{${tex_nombre(nb2)}} = `;
						texte_corr += `\\dfrac{`;
						texte_corr += `\\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[0]+`}`;
						for (let k=1;k<decomp_fact_prem_array(nb1/nb1_dist).length;k++) {
							texte_corr += `\\times \\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[k]+`}`
						};
						texte_corr += `\\times ${nb1_dist}}{`;
						texte_corr += `\\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[0]+`}`;
						for (let k=1;k<decomp_fact_prem_array(nb1/nb1_dist).length;k++) {
							texte_corr += `\\times \\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[k]+`}`
						};
						texte_corr += `\\times ${nb2_dist}} = `;						
						texte_corr += `\\dfrac{${nb1_dist}}{${nb2_dist}}$.`;
					//	break;	
					//case 4 : // reduction de B sur A 			
						texte += `<br>`+num_alpha(3)+` Rendre la fraction $\\dfrac{B}{A} = \\dfrac{${tex_nombre(nb2)}}{${tex_nombre(nb1)}}$ irréductible`;
						texte += ` à l'aide des décompositions obtenues au `+num_alpha(0)+` et au `+num_alpha(1);
						texte += warn_message(`Une observation judicieuse et argumentée pourra faire gagner du temps!`);
						texte_corr += `<br>`+num_alpha(3)+` $\\dfrac{B}{A}$ est l'inverse de $\\dfrac{A}{B}$ donc $\\dfrac{B}{A} = \\dfrac{${tex_nombre(nb2)}}{${tex_nombre(nb1)}} = `;
						texte_corr += `\\dfrac{`;
						texte_corr += `\\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[0]+`}`;
						for (let k=1;k<decomp_fact_prem_array(nb1/nb1_dist).length;k++) {
							texte_corr += `\\times \\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[k]+`}`
						};
						texte_corr += `\\times ${nb2_dist}}{`;
						texte_corr += `\\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[0]+`}`;
						for (let k=1;k<decomp_fact_prem_array(nb1/nb1_dist).length;k++) {
							texte_corr += `\\times \\cancel{`+decomp_fact_prem_array(nb1/nb1_dist)[k]+`}`
						};
						texte_corr += `\\times ${nb1_dist}} = `;						
						texte_corr += `\\dfrac{${nb2_dist}}{${nb1_dist}}$.`;			
					//	break;	
					//case 5 : // calculer le produit A/B x B/A et réduire. Remarque?
						// texte += `<br>`+num_alpha(4)+` Combien alculer le produit de $\\dfrac{A}{B} = \\dfrac{${tex_nombre(nb1)}}{${tex_nombre(nb2)}}$ et de $\\dfrac{B}{A} = \\dfrac{${tex_nombre(nb2)}}{${tex_nombre(nb1)}}$.`;
						// texte += `<br>Donner le résultat sous forme de fraction irréductible.`
						//texte += `<br>`+num_alpha(4)+` Remarque ?`
						//texte_corr += `<br>`+num_alpha(4)+' corr type 5';
						break;	
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				};
				cpt++
			};
		liste_de_question_to_contenu(this);
	};
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};

/**
 * 3A13 - PGCD_PPCM_Engrenages
 * @author Sébastien Lozano
 */
 
function PGCD_PPCM_Engrenages(){
	'use strict';
	Exercice.call(this); // Héritage de la classe Exercice()
	this.sup = 1 ; 
	this.titre = "PGCD_PPCM_Engrenages"; 
	// pas de différence entre la version html et la version latex pour la consigne
	this.consigne =`PGCD_PPCM_Engrenages.`;
	this.consigne += `<br>`;
	sortie_html ? this.spacing = 3 : this.spacing = 2;
	sortie_html ? this.spacing_corr = 2: this.spacing_corr = 1;
	this.nb_questions = 4;
	//this.correction_detaillee_disponible = true;
	this.nb_cols = 1;
	this.nb_cols_corr = 1;
	this.sup = 1;

	this.nouvelle_version = function(numero_de_l_exercice){
		let type_de_questions;
		if (sortie_html) { // les boutons d'aide uniquement pour la version html
			//this.bouton_aide = '';
			this.bouton_aide = modal_pdf(numero_de_l_exercice,"pdf/FicheArithmetique-3A13.pdf","Aide mémoire sur les fonctions (Sébastien Lozano)","Aide mémoire")		
			//this.bouton_aide += modal_video('conteMathsNombresPremiers','videos/LesNombresPremiers.mp4','Petit conte mathématique','Intro Vidéo');
		} else { // sortie LaTeX
		};

		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées

		let type_de_questions_disponibles = [1,2,3,4];
		//let type_de_questions_disponibles = [1];
		let liste_type_de_questions = combinaison_listes_sans_changer_ordre(type_de_questions_disponibles,this.nb_questions);

			for (let i = 0, texte, texte_corr, cpt=0; i < this.nb_questions&&cpt<50;) {
				type_de_questions = liste_type_de_questions[i];
				
	
				switch (type_de_questions) {
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 1';
						texte_corr = 'corr type 1';
						break;		
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 2';
						texte_corr = 'corr type 2';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 3';
						texte_corr = 'corr type 3';
						break;	
					case 1 : // périmètre d'un carré de côté x			
						texte = 'type 4';
						texte_corr = 'corr type 4';
						break;		
				};
			
				if (this.liste_questions.indexOf(texte)==-1){ // Si la question n'a jamais été posée, on en créé une autre
					this.liste_questions.push(texte);
					this.liste_corrections.push(texte_corr);
					i++;
				}
				cpt++
			}	
	
		liste_de_question_to_contenu(this);
	}
	//this.besoin_formulaire_numerique = ['Règle à travailler',5,"1 : Produit de deux puissances de même base\n2 : Quotient de deux puissances de même base\n3 : Puissance de puissance\n4 : Produit de puissances de même exposant\n5 : Mélange"]; 
};


/**
* Un graphique étant tracé, déterminer l'image ou l'antécédents de nombres donnés.
*
*
* Pas de version LaTeX
* @Auteur Rémi Angot
*/
function Image_antecedent_graphique(){
	Exercice.call(this); // Héritage de la classe Exercice()
	this.pas_de_version_LaTeX = true ;
	this.titre = "Lire image ou antécédents d'un nombre à partir d'un graphique"
	this.consigne = ""
	this.sup = 3;
	this.spacing = 1;
	this.spacing_corr = 1 ;
	this.nb_questions = 1;
	this.nb_questions_modifiable = false;
	this.type_exercice = 'MG32';
	this.taille_div_MG32 = [800,600];
	this.pas_de_version_LaTeX = false;
	this.nb_cols = 1;


	this.nouvelle_version = function(numero_de_l_exercice){
		this.liste_questions = []; // Liste de questions
		this.liste_corrections = []; // Liste de questions corrigées
		this.contenu = ''; // Liste de questions
		this.contenu_correction = ''; // Liste de questions corrigées
		let codeBase64 = "TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAQzAAACtAAAAQEAAAAAAAAAAQAAAEL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAOAAFPAMAoAAAAAAAAAAAAAAAAAAAFAAFAeKkeuFHrhEBzy4UeuFHs#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAAA4AAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8AAAAAAQ4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBCb52yLQ5WAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wAAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AAAAAAAOAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAADgAAAQUAAQAAAAcAAAAJAP####8AAAAAAQ4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAQEAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAduYmdyYWR4AAIyMAAAAAFANAAAAAAAAAAAABEA#####wAHbmJncmFkeQACMjAAAAABQDQAAAAAAAD#####AAAAAQAUQ0ltcGxlbWVudGF0aW9uUHJvdG8A#####wAUR3JhZHVhdGlvbkF4ZXNSZXBlcmUAAAAbAAAACAAAAAMAAAAKAAAADwAAABD#####AAAAAQATQ0Fic2Npc3NlT3JpZ2luZVJlcAAAAAARAAVhYnNvcgAAAAr#####AAAAAQATQ09yZG9ubmVlT3JpZ2luZVJlcAAAAAARAAVvcmRvcgAAAAoAAAALAAAAABEABnVuaXRleAAAAAr#####AAAAAQAKQ1VuaXRleVJlcAAAAAARAAZ1bml0ZXkAAAAK#####wAAAAEAEENQb2ludERhbnNSZXBlcmUAAAAAEQAAAAAADgAAAQUAAAAACgAAAA4AAAASAAAADgAAABMAAAAWAAAAABEAAAAAAA4AAAEFAAAAAAoAAAANAAAAAA4AAAASAAAADgAAABQAAAAOAAAAEwAAABYAAAAAEQAAAAAADgAAAQUAAAAACgAAAA4AAAASAAAADQAAAAAOAAAAEwAAAA4AAAAVAAAADAAAAAARAAAAFgAAAA4AAAAPAAAADwAAAAARAAAAAAAOAAABBQAAAAAXAAAAGQAAAAwAAAAAEQAAABYAAAAOAAAAEAAAAA8AAAAAEQAAAAAADgAAAQUAAAAAGAAAABv#####AAAAAQAIQ1NlZ21lbnQAAAAAEQEAAAAAEAAAAQABAAAAFwAAABoAAAAXAAAAABEBAAAAABAAAAEAAQAAABgAAAAcAAAABAAAAAARAQAAAAALAAFXAMAUAAAAAAAAwDQAAAAAAAAFAAE#3FZ4mrzfDgAAAB3#####AAAAAgAIQ01lc3VyZVgAAAAAEQAGeENvb3JkAAAACgAAAB8AAAARAAAAABEABWFic3cxAAZ4Q29vcmQAAAAOAAAAIP####8AAAACABJDTGlldU9iamV0UGFyUHRMaWUBAAAAEQBmZmYAAAAfAAAADgAAAA8AAAAfAAAAAgAAAB8AAAAfAAAAEQAAAAARAAVhYnN3MgANMiphYnNvci1hYnN3MQAAAA0BAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAEgAAAA4AAAAhAAAAFgAAAAARAQAAAAALAAABBQAAAAAKAAAADgAAACMAAAAOAAAAEwAAABkBAAAAEQBmZmYAAAAkAAAADgAAAA8AAAAfAAAABQAAAB8AAAAgAAAAIQAAACMAAAAkAAAABAAAAAARAQAAAAALAAFSAEAgAAAAAAAAwCAAAAAAAAAFAAE#0RtOgbToHwAAAB7#####AAAAAgAIQ01lc3VyZVkAAAAAEQAGeUNvb3JkAAAACgAAACYAAAARAAAAABEABW9yZHIxAAZ5Q29vcmQAAAAOAAAAJwAAABkBAAAAEQBmZmYAAAAmAAAADgAAABAAAAAmAAAAAgAAACYAAAAmAAAAEQAAAAARAAVvcmRyMgANMipvcmRvci1vcmRyMQAAAA0BAAAADQIAAAABQAAAAAAAAAAAAAAOAAAAEwAAAA4AAAAoAAAAFgAAAAARAQAAAAALAAABBQAAAAAKAAAADgAAABIAAAAOAAAAKgAAABkBAAAAEQBmZmYAAAArAAAADgAAABAAAAAmAAAABQAAACYAAAAnAAAAKAAAACoAAAAr#####wAAAAIADENDb21tZW50YWlyZQAAAAARAWZmZgAAAAAAAAAAAEAYAAAAAAAAAAAAHwsAAf###wAAAAEAAAAAAAAAAQAAAAAAAAAAAAsjVmFsKGFic3cxKQAAABkBAAAAEQBmZmYAAAAtAAAADgAAAA8AAAAfAAAABAAAAB8AAAAgAAAAIQAAAC0AAAAbAAAAABEBZmZmAAAAAAAAAAAAQBgAAAAAAAAAAAAkCwAB####AAAAAQAAAAAAAAABAAAAAAAAAAAACyNWYWwoYWJzdzIpAAAAGQEAAAARAGZmZgAAAC8AAAAOAAAADwAAAB8AAAAGAAAAHwAAACAAAAAhAAAAIwAAACQAAAAvAAAAGwAAAAARAWZmZgDAIAAAAAAAAD#wAAAAAAAAAAAAJgsAAf###wAAAAIAAAABAAAAAQAAAAAAAAAAAAsjVmFsKG9yZHIxKQAAABkBAAAAEQBmZmYAAAAxAAAADgAAABAAAAAmAAAABAAAACYAAAAnAAAAKAAAADEAAAAbAAAAABEBZmZmAMAcAAAAAAAAAAAAAAAAAAAAAAArCwAB####AAAAAgAAAAEAAAABAAAAAAAAAAAACyNWYWwob3JkcjIpAAAAGQEAAAARAGZmZgAAADMAAAAOAAAAEAAAACYAAAAGAAAAJgAAACcAAAAoAAAAKgAAACsAAAAz#####wAAAAEABUNGb25jAP####8AAWYACC0yKngqeCszAAAADQD#####AAAAAQAMQ01vaW5zVW5haXJlAAAADQIAAAANAgAAAAFAAAAAAAAAAP####8AAAACABFDVmFyaWFibGVGb3JtZWxsZQAAAAAAAAAeAAAAAAAAAAFACAAAAAAAAAABeAAAAAQA#####wEAAAAAEAABeAAAAAAAAAAAAEAIAAAAAAAABQABQC8BAyKX1IIAAAAEAAAAGAD#####AAJ4MQAAAAoAAAA2AAAAEQD#####AAJ5MQAFZih4MSn#####AAAAAQAOQ0FwcGVsRm9uY3Rpb24AAAA1AAAADgAAADcAAAAWAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAABQAAAAAKAAAADgAAADcAAAAOAAAAOP####8AAAACAA1DTGlldURlUG9pbnRzAP####8AAAD#AAIAAAA5AAAB9AABAAAANgAAAAQAAAA2AAAANwAAADgAAAA5#####wAAAAEAFUNQb2ludExpZUxpZXVQYXJQdExpZQD#####AAAAAAAQAAFNAAAAAAAAAAAAQAgAAAAAAAAJAAG##CuHsx36wAAAADq##CuHsx36wAAAAAMA#####wEAAAABEAAAAQABAAAAOwA#8AAAAAAAAAAAAAMA#####wEAAAABEAAAAQABAAAAOwE#8AAAAAAAAP####8AAAABABBDSW50RHJvaXRlRHJvaXRlAP####8BAAAAABAAAAAAAAAAAAAAAEAIAAAAAAAACQAAAAAEAAAAPAAAACIA#####wEAAAAAEAAAAAAAAAAAAAAAQAgAAAAAAAAJAAAAAAUAAAA9AAAAFwD#####AAAAAAAQAAABAQEAAAA7AAAAPgAAABcA#####wAAAAAAEAAAAQEBAAAAOwAAAD8AAAAO##########8="

		let a, b, c, d, x1, x2, x3, fx1, fx2, fx3, expression_f, numa, dena, numb, denb, numc, denc, ymax ;

		function initialise_variables() { 
			if (sortie_html){ // repère -10 || 10
				x1 = randint(-6,-3);
				x2 = randint(x1+3,2);
				x3 = randint(x2+2,8);
				fx1 = randint(-5,5);
				fx2 = randint(-6,6);
				fx3 = randint(-5,5);
				d = randint(-5,5);
				c = randint(-5,5);
				ymax = 7;
			} else { // repère -5 || 5
				x1 = randint(-4,-2);
				x2 = randint(-1,2,[0]);
				x3 = randint(3,4);
				fx1 = randint(-4,4);
				fx2 = randint(-4,4);
				fx3 = randint(-4,4);
				d = randint(-3,3);
				c = randint(-3,3);
				ymax = 4;
			}
		};

		initialise_variables();


		texte = `On a tracé ci-dessous la courbe représentative de la fonction $f$.<br>`

		if (this.sup==1) {

			a = calcul((fx2-fx1)/(x2-x1));
			b = calcul(fx1 - a*x1);
			expression_f = `${a}*x+(${b})`;

			texte += `Déterminer par lecture graphique les images de $${x1}$ et de $${x2}$ par cette fonction $f$.<br><br>`
			texte_corr = `L'image de $${x1}$ est $${fx1}$, on note $f(${x1})=${fx1}$.<br>`
			texte_corr += `L'image de $${x2}$ est $${fx2}$, on note $f(${x2})=${fx2}$.`

		}

		if (this.sup==2) {
			[[numa,dena],[numb,denb]]=resol_sys_lineaire_2x2(x1,x3,fx1,fx3,c)
			while (dena==0 || denb==0 ){
				x1 = randint(-6,-3);
				x3 = randint(1,6);
				fx1 = randint(-5,5);
				fx3 = randint(-6,6);
				d = randint(-10,10);

				[[numa,dena],[numb,denb]]=resol_sys_lineaire_2x2(x1,x3,fx1,fx3,c)
			}
			a = numa/dena;
			b = numb/denb;
			x2 = 0;
			fx2 = c;

			expression_f = `${a}*x^2+(${b})*x+(${c})`;
		}

		if (this.sup==3) {
			[[numa,dena],[numb,denb],[numc,denc]]=resol_sys_lineaire_3x3(x1,x2,x3,fx1,fx2,fx3,d)
			let [extremum1,extremum2] = cherche_min_max_f ([numa/dena,numb/denb,numc/denc,d])
			while (dena==0 || denb==0 || denc==0 || abs(extremum1[1])>ymax || abs(extremum2[1])>ymax) {
				initialise_variables();
				[[numa,dena],[numb,denb],[numc,denc]]=resol_sys_lineaire_3x3(x1,x2,x3,fx1,fx2,fx3,d)
				if (cherche_min_max_f([numa/dena,numb/denb,numc/denc,d])==[]) {
					[extremum1,extremum2] = [[0,999],[0,999]]
				} else {
					[extremum1,extremum2] = cherche_min_max_f([numa/dena,numb/denb,numc/denc,d])
				}
			}
			a = numa/dena;
			b = numb/denb;
			c = numc/denc;

			expression_f = `${a}*x^3+(${b})*x^2+(${c})*x+(${d})`;
		}

		if (this.sup==2 || this.sup==3){
			texte += `Déterminer par lecture graphique les images de $${x1}$, de $${x2}$ et de $${x3}$ par cette fonction $f$.<br><br>`
			texte_corr = `L'image de $${x1}$ est $${fx1}$, on note $f(${x1})=${fx1}$.<br>`
			texte_corr += `L'image de $${x2}$ est $${fx2}$, on note $f(${x2})=${fx2}$.<br>`
			texte_corr += `L'image de $${x3}$ est $${fx3}$, on note $f(${x3})=${fx3}$.<br>`
		}

		if (!sortie_html) {
			texte += "\n\n"
			texte += tex_graphique(expression_f);
		}

		this.MG32codeBase64 = codeBase64
		this.MG32code_pour_modifier_la_figure = `
	        mtg32App.giveFormula2("MG32svg${numero_de_l_exercice}", "f", "${expression_f}");
	        mtg32App.calculate("MG32svg${numero_de_l_exercice}");
	        mtg32App.display("MG32svg${numero_de_l_exercice}");
	      ` 	
		
		this.liste_questions.push(texte);	
		this.liste_corrections.push(texte_corr);
		liste_de_question_to_contenu_sans_numero(this);		
	}

	this.besoin_formulaire_numerique = ['Type de fonctions',3,"1 : Affine\n2 : Polynome du 2nd degré\n3 : Polynome du 3e degré"];

}
