---
title: "Programmation"
niveau:
description: "MathALEA 2D - Programmation"
---



{{% alea2d "programmation"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

MathALEA2D est écrit en Javascript et utilise le Javascript dans sa syntaxe. Toutes les commandes de ce langage peuvent donc être utilisées.

On peut ainsi faire une boucle comme dans l'exemple précédent.

En plus des commandes de bases de Javascript, on a créé plusieurs fonctions pratiques dont voici quelques exemple : 

* `randint(1,5)` // renvoie un entier entre 1 et 5 (1 et 5 compris)
* `randint(-4,4,[-1,0,1])` // renvoie un entier entre -4 et 4 qui soit différent de -1, 0 ou 1
* `choice(['blue','red','green'])` // renvoie un élément au hasard de la liste 
* `couleurAleatoire()` // renvoie le code d'une couleur au hasard

Toutes les autres fonctions sont décrites dans [le wiki de MathALEA](https://coopmaths.fr/documentation/2d/).

<h3 class="ui horizontal divider header">Les calculs</h3>

Il est également possible d'effectuer des calculs par rapport aux objets créés.

* `longueur(A,B)` renvoie la distance de A à B
* `norme(v)` renvoie la norme du vecteur
* `angle(A,O,B)` renvoie l'angle entre les demi-droites [OA) et [OB)
* `angleOriente(A,O,B)` renvoie l'angle orienté
