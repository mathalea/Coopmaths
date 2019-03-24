---
title: "À propos de MathALEA"
niveau:
description: "Générateur d'exercices de mathématiques à données aléatoires"
---

### Objectifs

- Une interface professeur :
	- Générer des exercices de mathématiques (niveau collège) avec des données pseudo-aléatoires.
	- Créer un fichier LaTeX prêt à être compilé en pdf avec plusieurs versions des mêmes exercices (par exemple pour créer différents sujets d'un contrôle).
	- Créer des URL vers des exercices en ligne et leur corrigé.
- Une interface élève :
	- Voir les exercices et les corrections directement en ligne .

### Pour participer

Le code est libre, CC-BY-SA, vous pouvez donc télécharger les sources et les étudier. Vous pouvez aussi lire [ces exemples de codes](../mathalea_documentation) pour un exercice.

MathALEA comme l'ensemble de ce site est disponible sur [GitHub](https://github.com/remiangot/Coopmaths)

### Crédits

- Développé par Rémi Angot sous licence **CC-By-SA**.
- [Algebrite](http://algebrite.org/) MIT license (pour le calcul exact avec les nombres décimaux et le calcul formel).
- [MathGraph32](https://www.mathgraph32.org) développé par Yves Bitton - Licence GNU AGPLv3 (pour les constructions géométriques).
- [Semantic UI](https://semantic-ui.com/) MIT license (pour l'interface utilisateur).
- [KaTeX](https://khan.github.io/KaTeX/) LPPL (pour le rendu LaTeX des exercices en ligne).
- [Dowload.js](http://danml.com/download.html) CCBY2 (pour le téléchargment du fichier LaTeX généré).
- [jQuery](https://jquery.com/) MIT license (pour alléger la programmation).
- [Clipboard.js](https://clipboardjs.com/) MIT license (pour le bouton copier le code LaTeX).
- [prismjs](http://prismjs.com/) MIT license (pour la coloration syntaxique du code LaTeX).
- Merci à Sébastien Cogez pour ses conseils et à Julien Brunel pour son cours sur la programmation objet.


### ToDo

- ~~Personnalisation des URL qui pourront pointer vers une sélection d'exercices déjà configurés.~~
- Gestion des catégories des exercices.
- Ajout d'exercices.
- Optimiser l'impression des exercices en ligne.


### Changelog

### 24/03/19

- Nouvelle gestion des URL qui sont maintenant de la forme ?ex=id,param=n&ex=id2,param=n2...

#### 21/03/19

- Ajout d'un bouton de zoom pour les exercices en ligne.
- Modification de l'URL lorsqu'on choisit des exercices.
- Ajout d'exercices sur les disques et les comparaisons de fractions.
- Ajout d'exercices sur les comparaisons et additions de fractions (dénominateurs multiples) en 5e.

#### 15/03/19

- Intégration de MathGraph32 pour afficher des constructions géométriques à données aléatoires.
- Ajout d'exercices sur les portions de disques.

#### 06/03/19

- Intégration sur le site Coopmaths.fr.
- Utilisation du référentiel Coopmaths.

#### 03/06/18

- Exercice de développement simple d'une expression littérale.
- Exercice de substitution.

#### 02/04/18

- URL directe vers une liste d'exercices avec par exemple : ?ex=3,5.
- Possibilité de modifier les paramètre de l'exercice 1 avec param1=... et param2=...
- Exercice de calculs d'aires et de périmètres à partir d'un texte (avec ou sans les cercles)
- Ajout d'un paramètre "Écriture simplifiée" pour tous les exercices de calculs avec des nombres relatifs.

#### 27/03/18

- Paramétrage des tables de multiplications (à trou ou classique).
- Exercice de conversions d'aires (6 paramètres différents).
- Possibilité d'ajouter du code LaTeX statique dans l'énoncé et la correction.
- Possibilité de faire un exercice où la consigne, le nombre de question, l'espacement ou le nombre de colonnes n'est pas modifiable.

#### 04/03/18

- Listing automatique des nouveaux exercices.
- Fusion de la gestion de la sortie HTML ou LaTeX.
- Ajout d'exercices sur les nombres relatifs.

#### 01/03/18

- Téléchargement d'un fichier LaTeX.
- Paramètres du fichier généré (nom, style...).
- Lien de téléchargment des fichiers nécessaires à la compilation (dans les 2 styles).

#### 28/02/18

- Intégration de KaTeX.
- Intégration de Semantic UI.

#### 24/02/18

- Réglage de l'espacement entre les questions .
- Exercices sur les fractions.

#### 22/02/18

- Première version avec 4 exercices.
- Paramètres généraux des exercices (nombre de questions, nombre de colonnes).
- Possibilité de régler un paramètre spécifique de l'exercice.