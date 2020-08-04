---
title: "Transformations"
niveau:
description: "MathALEA 2D - Les transformations"
---



<!-- {{% alea2d "polygones"  %}} -->

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>


* `translation(p,A,B)` // Trace l'image de p dans la translation qui transfome A en B
* `translation(p,v)` // Trace l'image de p dans la translation de vecteur v
* `homothetie(p,O,k)` // Trace l'image de p dans l'homothétie de centre O et de rapport k
* `rotation(p,O,a)` // Trace l'image de p dans la rotation de centre O et d'angle a
* `symetrieAxiale(p,d)` // Trace l'image de p dans la symétrie d'axe (d)
* `similitude(p,O,a,k)` // Trace l'image de p dans la similitude de centre O, d'angle a et de rapport k
* `P = projectionOrtho(A,d)` // P est le projeté orthogonal de A sur (d)
* `affiniteOrtho(p,d,k)` // Trace l'image de p dans l'affinité sur (d) perpendiculairement à (d) de rapport k

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

{{% alea2d "affinite"  %}}

<h3 class="ui horizontal divider header">Les transformations animées</h3>

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

Il est possible d'animer les transformations d'un polygone.

* translationAnimee(s,v) // Animation de la translation de vecteur v pour s
* translationAnimee([a,b,c],v) // Animation de la translation de vecteur v pour les objets a, b et c
* rotationAnimee(s,O,a) // Animation de la rotation de centre O et d'angle a pour s
* rotationAnimee([a,b,c],O,a) // Animation de la rotation de centre O et d'angle a pour les objets a, b et c
* homothetieAnimee(p,O,k) // Animation de la homothetie de centre O et de rapport k pour le polygone p
* symetrieAnimee(p,d) // Animation de la symetrie d'axe (d) pour le polygone p
* affiniteOrthoAnimee(p,d,k) // Animation de l'affinité orthogonale de p par rapport à la droite d et de rapport k


Pour toutes ces transformations, il est possible d'ajouter un dernier argument pour régler l'animation avec la syntaxe du SVG. Par défaut ce dernier argument est `'begin="0s" dur="2s" repeatCount="indefinite"'` si on met `'begin="1s" dur="5s" repeatCount="2"'` l'animation commencera au bout de 1 seconde, durera 5 secondes et ne se répètera que 2 fois. 