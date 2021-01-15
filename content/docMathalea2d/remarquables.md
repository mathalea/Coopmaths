---
title: "Droites remarquables"
niveau:
description: "MathALEA 2D - Les droites remarquables"
---


{{% alea2d "mediatrices"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `let d = mediatrice(A,B)` // Médiatrice de [AB]
* `let d = mediatrice(A,B,'d', 'blue')` // Médiatrice de [AB] nommée (d) en bleu
* `let m = codageMediatrice(A,B,'blue')` // Ajoute le codage du milieu et de l'angle droit pour la médiatrice de [AB] en bleu
* `let d = bissectrice(A,B)` // Bissectrice de [AB]
* `let d = bissectrice(A,B,'blue')` // Bissectrice de [AB] en bleu
* `let d = hauteurTriangle(A,B,C)` // (d) est la hauteur issue de A dans le triangle ABC
* `let d = medianeTriangle(A,B,C)` // (d) est la médiane issue de A dans le triangle ABC
* `codageHauteurTriangle(A,B,C,'blue')` // Code en bleu la hauteur issue de B dans le triangle ABC et trace en pointillés (AC) si le pied de la hauteur est à l'extérieur du triangle
* `codageMedianeTriangle(A,B,C,'blue','//')` // Code en bleu le milieu de [AC]

On peut aussi obtenir ces points particuliers : 

* `let G = centreGraviteTriangle(A,B,C)` // G est le centre de gravité du triangle ABC
* `let H = orthoCentre(A,B,C)` // H est l'orthocentre du triangle ABC
* `let O = centreCercleCirconscrit(A,B,C)` // O est le centre du cercle circonscrit au triangle ABC.


<div class="ui hidden divider"></div>

{{% alea2d "hauteurs"  %}}

<div class="ui hidden divider"></div>


<h2 class="ui horizontal divider header">Les constructions</h2>

<div class="ui hidden divider"></div>

On peut laisser apparents certains traits de constructions.

* `constructionMediatrice(A,B,detail = false, color='blue', markmilieu='X', markrayons='//',couleurMediatrice = 'red', epaisseurMediatrice = 2)`
* `constructionBissectrice(A,O,B,detail = false, color='blue', mark='X',tailleLosange = 5,couleurBissectrice = 'red', epaiseurBissectrice = 2)`

Le booléen détail permet de contrôler si on affiche les segments correspondants aux rayons des arcs de cercles.

{{% alea2d "bissectrice_construction"  %}}
