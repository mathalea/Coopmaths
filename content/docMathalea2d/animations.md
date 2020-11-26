---
title: "Animations"
niveau:
description: "MathALEA 2D - Les animations"
---


{{% alea2d "circonscritParEtapes"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

`afficherTempo(objet,t0,t = 10,r = 'Infinity')`

<div class="ui hidden divider"></div>


La fonction `afficherTempo()` affiche l'objet de notre choix (sauf les repères, droites graduées et lutins) à partir de `t0` secondes et jusqu'à `t` secondes avant de recommencer `r` fois qui est par défaut fixé à l'infini.

* `afficherTempo(s,2)` : affichera l'objet s au bout de 2 secondes.
* `afficherTempo(s,2,5)` : affichera l'objet s au bout de 2 secondes puis à la 5e seconde l'objet disparait et l'animation recommence au début.
* `afficherTempo(s,2,5,3)` : affichera l'objet s au bout de 2 secondes puis à la 5e seconde l'objet disparait et l'animation recommence au début pour 3 cycles.

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>


`afficherUnParUn(objets, t = 1, r = 'Infinity', tApresDernier = 5)`

<div class="ui hidden divider"></div>

La fonction `afficherUnParUn()` affiche une liste d'objets dans l'ordre avec `t` secondes d'écart entre chaque étapes avant de recommencer `r` fois tout en laissant `tApresDernier` s à la fin de l'animation pour voir tous les objets avant de recommencer.
