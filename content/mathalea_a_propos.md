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

Le code est libre, CC-BY-SA, vous pouvez donc télécharger les sources sur [GitHub](https://github.com/remiangot/Coopmaths) et lire la documentation sur le [wiki](https://github.com/remiangot/Coopmaths/wiki). N'hésitez pas à nous contacter (contact@coopmaths.fr) pour proposer des exercices, proposer des relectures ou pour programmer. L'équipe s'engage à accompagner au mieux tout ceux qui souhaiteraient participer.


### Crédits

- Moteur développé par Rémi Angot sous licence **CC-By-SA**.
- Exercices écrits par Rémi Angot, Jean-Claude Lhote, Sébastien Lozano et Stéphane Guyon puis relus par les contributeurs de CoopMaths sous licence **CC-By-SA**.
- [Algebrite](http://algebrite.org/) MIT license (pour le calcul exact avec les nombres décimaux et le calcul formel).
- [MathGraph32](https://www.mathgraph32.org) développé par Yves Bitton - Licence GNU AGPLv3 (pour les constructions géométriques).
- [Semantic UI](https://semantic-ui.com/) MIT license (pour l'interface utilisateur).
- [KaTeX](https://khan.github.io/KaTeX/) LPPL (pour le rendu LaTeX des exercices en ligne).
- [Dowload.js](http://danml.com/download.html) CCBY2 (pour le téléchargment du fichier LaTeX généré).
- [jQuery](https://jquery.com/) MIT license (pour alléger la programmation).
- [Clipboard.js](https://clipboardjs.com/) MIT license (pour le bouton copier le code LaTeX).
- [prismjs](http://prismjs.com/) MIT license (pour la coloration syntaxique du code LaTeX).
- [Slick](https://kenwheeler.github.io/slick/) MIT license (pour le diaporama).
- [TextFill](https://jquery-textfill.github.io) MIT license (pour adapter la taille de la police dans les diaporamas).
- [SVG.js](https://svgjs.com/) MIT license (pour afficher des figures).
- [CodeMirror](https://codemirror.net) MIT license (pour l'éditeur de MathALEA2D).
- [Scratchblocks](https://scratchblocks.github.io/) MIT license (pour le rendu des blocs Scratch).
- [QRCode.js](https://davidshimjs.github.io/qrcodejs/) MIT license (pour l'affichage d'un QRCode dynamique).
- Merci à Sébastien Cogez pour ses conseils et à Julien Brunel pour son cours sur la programmation objet.
- Icone "[Whisper](https://thenounproject.com/term/whisper/21616/)" by Rémy Médard from the Noun Project.
- Icone "[Silence](https://thenounproject.com/term/whisper/77879/)" by Gianluca Manzana from the Noun Project.
- Icone "[Traffic Light](https://thenounproject.com/term/traffic-lights/1084957/)" by Lukáš Jača from the Noun Project.


### ToDo

- Nouveaux exercices (notamment en cycle 4 et lycée).
- Meilleur rangement des exercices (moteur de recherche, mots-clés...)
- Possibilité d'ajouter et d'éditer des exercices statiques de CoopMaths (à l'image de l'excellent travail de Thomas Castanet sur Chingatome).
- ~~Faire le lien avec les demandes de re-évaluation dans SACoche (voir [article](http://revue.sesamath.net/spip.php?article535) sur MathémaTICE).~~
- ~~Améliorer l'export sur overleaf.com avec support du thème CoopMaths.~~
- ~~Proposer des versions diaporamas.~~
- ~~Optimiser l'impression des exercices en ligne.~~
- ~~Personnalisation des URL qui pourront pointer vers une sélection d'exercices déjà configurés.~~


### Changelog


#### 08/20

- Développement de MathALEA 2D.
- Test de positionnement en cycle 4.
- Arrivée de Stéphane Guyon et de Gaelle Morvan pour la programmation d'exercices.
- Nouveaux exercices en seconde sur les racines carrées et les intervalles.
- Nouveaux exercices de géométrie.
- Nouveaux exercices du type « Le compte est bon ».


#### 07/20

- [Article](http://revue.sesamath.net/spip.php?article1352) de présentation dans MathémaTICE.
- Gestion des paramètres des exercices dans alacarte.
- Depuis SACoche, on peut lier un item à un ou plusieurs exercices paramétrés de SACoche.
- Premiers exercices pour le CRPE avec les changements de base.
- Nouveaux exercices de vocabulaire en géométrie.

#### 06/20

- Export avec le thème CoopMaths et un logo MathALEA sur Overleaf.
- Possibilité de paramétrer un exercice dans « Évaluation à la carte ».
- Nouveaux exercices sur le calcul littéral en 3e.
- Nouveaux exercices sur les différentes transformation du plan.
- Relecture et amélioration de tous les exports LaTeX.
- Nouvel exercice sur les sections de solides avec visualisation dynamique de ces solides.

#### 05/20

- Nouveaux exercices sur les probabilités.
- Nouveaux exercices sur l'arithmétique en 3e.
- Nouveaux exercices sur les fonctions en 3e.
- Nouveaux exercices sur les grandeurs-produits et grandeurs-quotients en 4e.
- Nouveaux exercices de calculs de volumes et d'aires de parallélogrammes.


#### 04/20

- Ajout d'un numéro de série qui permet de garder un lien vers une version précise d'un exercice


#### 03/20

- Ajout de « À la carte » pour générer des évaluations personnalisées.
- Ajout de boutons d'aides dans certains exercices ouvrant une fenêter modale avec du texte, un pdf ou une vidéo.
- Ajout d'un paramètre pour avoir une correction plus ou moins détaillée.
- Ajout de problèmes de proportionnalité en 6e.


#### 02/20

- Nouveaux exercices sur les puissances.
- Nouveaux exercices sur les angles.
- Nouveaux exercices sur la résolution d'équation.
- Support de JSDoc pour générer le wiki.
- Intégration de SVG.JS.
- Mise en place d'une correction plus ou moins détaillée dans les exercices.
- Arrivée de Sébastien Lozano pour la programmation d'exercices.

#### 01/20

- Mise à jour de MathGraph32
- Nouveaux exercices sur les calculs de fractions (4e et 3e)
- Nouveaux exercices de statistiques (5e)
- Ajout d'un exercice de conversion de volumes

#### 12/19

- Évaluation à la carte (liste d'exercices différenciée élève par élève).
- Intégration d'un exercice statique (choisi au hasard dans un répertoire donné).
- Mise à jour de KaTeX.
- Arrivée de Jean-Claude Lhote pour la programmation d'exercices.
- Nouveaux exercices de calcul littéral.
- Nouveaux exercices sur les théorèmes de Thalès et de Pythagore.

#### 08/19

- Diaporama chronométré des questions.
- Nouveaux exercices de calcul mental.

#### 05/19

- Compilation en ligne avec overleaf.com.
- Nouveaux exercices sur le calcul littéral en 5e.
- Nouveaux exercices sur les décimaux en 6e.


#### 04/19

- L'URL se met automatiquement à jour quand on configure des exercices pour pouvoir la partager avec des élèves.
- Les exercices sont listés par classe.
- Nouveaux exercices sur les durées.
- Nouveaux exercices sur les pourcentages.


#### 03/19

- Intégration sur le site Coopmaths.fr.
- Utilisation du référentiel Coopmaths.
- Intégration de MathGraph32 pour afficher des constructions géométriques à données aléatoires.
- Nouveaux exercices sur les portions de disques.
- Ajout d'un bouton de zoom pour les exercices en ligne.
- Modification de l'URL lorsqu'on choisit des exercices.
- Nouveaux exercices sur les disques et les comparaisons de fractions.
- Nouveaux exercices sur les comparaisons et additions de fractions (dénominateurs multiples) en 5e.
- Amélioration de l'impression des exercices.
- Nouvelle gestion des URL qui sont maintenant de la forme ?ex=id,param=n&ex=id2,param=n2...


#### 04/18

- Paramétrage des tables de multiplications (à trou ou classique).
- Exercice de conversions d'aires (6 paramètres différents).
- Possibilité d'ajouter du code LaTeX statique dans l'énoncé et la correction.
- Possibilité de faire un exercice où la consigne, le nombre de question, l'espacement ou le nombre de colonnes n'est pas modifiable.
- URL directe vers une liste d'exercices avec par exemple : ?ex=3,5.
- Possibilité de modifier les paramètre de l'exercice 1 avec param1=... et param2=...
- Exercice de calculs d'aires et de périmètres à partir d'un texte (avec ou sans les cercles)
- Ajout d'un paramètre "Écriture simplifiée" pour tous les exercices de calculs avec des nombres relatifs.



#### 03/18

- Intégration de KaTeX.
- Intégration de Semantic UI.
- Téléchargement d'un fichier LaTeX.
- Paramètres du fichier généré (nom, style...).
- Lien de téléchargment des fichiers nécessaires à la compilation (dans les 2 styles).
- Listing automatique des nouveaux exercices.
- Fusion de la gestion de la sortie HTML ou LaTeX.
- Nouveaux exercices sur les nombres relatifs.


#### 02/18

- Première version avec 4 exercices.
- Paramètres généraux des exercices (nombre de questions, nombre de colonnes).
- Possibilité de régler un paramètre spécifique de l'exercice.
- Réglage de l'espacement entre les questions .
- Exercices sur les fractions.