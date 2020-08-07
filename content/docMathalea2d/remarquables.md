---
title: "Droites remarquables"
niveau:
description: "MathALEA 2D - Les droites remarquables"
---


{{% alea2d "mediatrices"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `d = mediatrice(A,B)` // Médiatrice de [AB]
* `d = mediatrice(A,B,'d', 'blue')` // Médiatrice de [AB] nommée (d) en bleu
* `m = codageMediatrice(A,B,'blue')` // Ajoute le codage du milieu et de l'angle droit pour la médiatrice de [AB] en bleu
* `d = bissectrice(A,B)` // Bissectrice de [AB]
* `d = bissectrice(A,B,'blue')` // Bissectrice de [AB] en bleu
* `d = hauteurTriangle(A,B,C)` // (d) est la hauteur issue de A dans le triangle ABC
* `d = medianeTriangle(A,B,C)` // (d) est la médiane issue de A dans le triangle ABC
* `codageHauteurTriangle(A,B,C,'blue')` // Code en bleu la hauteur issue de B dans le triangle ABC et trace en pointillés (AC) si le pied de la hauteur est à l'extérieur du triangle
* `codageMedianeTriangle(A,B,C,'blue','//')` // Code en bleu le milieu de [AC]

On peut aussi obtenir ces points particuliers : 

* `G = centreGraviteTriangle(A,B,C)` // G est le centre de gravité du triangle ABC
* `H = orthoCentre(A,B,C)` // H est l'orthocentre du triangle ABC
* `O = centreCercleCirconscrit(A,B,C)` // O est le centre du cercle circonscrit au triangle ABC.


<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

{{% alea2d "hauteurs"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>