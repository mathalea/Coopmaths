import Exercice from '../ClasseExercice.js';
import {liste_de_question_to_contenu,combinaison_listes} from "/modules/outils.js"
import { randint,string_nombre } from '../../modules/outils.js';
/**
 * Vrai ou faux sur les notions de diviseur ou multiple
 * @Auteur Rémi Angot
 * Référence 
*/
export default function ExerciceVraiFauxDivisibleMultipleDiviseur() {
  Exercice.call(this); // Héritage de la classe Exercice()
  this.titre = "Diviseur, multiple, divisible - Vrai ou faux";
  this.consigne = "Pour chaque affirmation, indiquer si elle est vraie ou fausse.";
  this.nb_questions = 10;
  this.nb_cols = 2; // Uniquement pour la sortie LaTeX
  this.nb_cols_corr = 2; // Uniquement pour la sortie LaTeX
  this.sup = 1; // Niveau de difficulté à ne définir que si on peut le modifier avec un formulaire en paramètre
  this.tailleDiaporama = 100; // Pour les exercices chronométrés. 50 par défaut pour les exercices avec du texte
  this.video = "" // Id YouTube ou url

  this.nouvelle_version = function () {
    this.liste_questions = []; // Liste de questions
    this.liste_corrections = []; // Liste de questions corrigées

    let type_de_questions_disponibles = ['2diviseur','divisiblePar2','multipleDe2','2diviseurF','divisiblePar2F','multipleDe2F','2diviseurEnvers','divisiblePar2Envers','multipleDe2Envers','5diviseur','divisiblePar5','multipleDe5','5diviseurF','divisiblePar5F','multipleDe5F','5diviseurEnvers','divisiblePar5Envers','multipleDe5Envers']; // On créé 3 types de questions
    let liste_type_de_questions = combinaison_listes(type_de_questions_disponibles,this.nb_questions); // Tous les types de questions sont posés mais l'ordre diffère à chaque "cycle"
    for (let i = 0, texte, texte_corr, cpt = 0; i < this.nb_questions && cpt < 50;) {
        // Boucle principale où i+1 correspond au numéro de la question
      switch (liste_type_de_questions[i]) { // Suivant le type de question, le contenu sera différent
        case '2diviseur': 
          texte = `2 est un diviseur de ${string_nombre(randint(199,999)*2)}.`;
          texte_corr = 'Vraie';
          break;
        case 'divisiblePar2': 
          texte = `${string_nombre(randint(199,999)*2)} est divisible par 2.`;
          texte_corr = 'Vraie';
          break;
        case 'multipleDe2': 
          texte = `${string_nombre(randint(199,999)*2)} est un multiple de 2.`;
          texte_corr = 'Vraie';
          break;
        case '2diviseurF': 
          texte = `2 est un diviseur de ${string_nombre(randint(199,999)*2+1)}.`;
          texte_corr = 'Fausse';
          break;
        case 'divisiblePar2F': 
          texte = `${string_nombre(randint(199,999)*2+1)} est divisible par 2.`;
          texte_corr = 'Fausse';
          break;
        case 'multipleDe2F': 
          texte = `${string_nombre(randint(199,999)*2+1)} est un multiple de 2.`;
          texte_corr = 'Fausse';
          break;
          case '2diviseurE': 
          texte = `${string_nombre(randint(199,999)*2)} est un diviseur de 2.`;
          texte_corr = 'Fausse';
          break;
        case 'divisiblePar2E': 
          texte = `2 est divisible par ${string_nombre(randint(199,999)*2)}.`;
          texte_corr = 'Fausse';
          break;
        case 'multipleDe2E': 
          texte = `2 est un multiple de ${string_nombre(randint(199,999)*2)}.`;
          texte_corr = 'Fausse';
          break;
        
          case '5diviseur': 
          texte = `5 est un diviseur de ${string_nombre(randint(199,999)*5)}.`;
          texte_corr = 'Vraie';
          break;
        case 'divisiblePar5': 
          texte = `${string_nombre(randint(199,999)*5)} est divisible par 5.`;
          texte_corr = 'Vraie';
          break;
        case 'multipleDe5': 
          texte = `${string_nombre(randint(199,999)*5)} est un multiple de 5.`;
          texte_corr = 'Vraie';
          break;
        case '5diviseurF': 
          texte = `5 est un diviseur de ${string_nombre(randint(199,999)*5+randint(1,4))}.`;
          texte_corr = 'Fausse';
          break;
        case 'divisiblePar5F': 
          texte = `${string_nombre(randint(199,999)*5+randint(1,4))} est divisible par 5.`;
          texte_corr = 'Fausse';
          break;
        case 'multipleDe5F': 
          texte = `${string_nombre(randint(199,999)*5+randint(1,4))} est un multiple de 5.`;
          texte_corr = 'Fausse';
          break;
          case '5diviseurE': 
          texte = `${string_nombre(randint(199,999)*5)} est un diviseur de 5.`;
          texte_corr = 'Fausse';
          break;
        case 'divisiblePar5E': 
          texte = `5 est divisible par ${string_nombre(randint(199,999)*5)}.`;
          texte_corr = 'Fausse';
          break;
        case 'multipleDe5E': 
          texte = `5 est un multiple de ${string_nombre(randint(199,999)*5)}.`;
          texte_corr = 'Fausse';
          break;
        
        
      }

      if (this.liste_questions.indexOf(texte) == -1) {
        // Si la question n'a jamais été posée, on en crée une autre
        this.liste_questions.push(texte);
        this.liste_corrections.push(texte_corr);
        i++;
      }
      cpt++;
    }
    liste_de_question_to_contenu(this);
  };
  this.besoin_formulaire_numerique = ['Niveau de difficulté',3];
}

// python3 list-to-js.py pour faire apparaitre l'exercice dans le menu

