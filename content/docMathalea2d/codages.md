---
title: "Codages"
niveau:
description: "MathALEA 2D - Les codages"
---



<!-- {{% alea2d "mediatrices"  %}} -->

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `afficheLongueurSegment(A,B)` // Note la longueur de [AB] au dessus si A est le point le plus à gauche sinon au dessous
* `codeSegment(A,B,'X','blue')` // Code le segment [AB] avec une croix bleue
* `codeSegments('X','blue',A,B, B,C, C,D)` // Code les segments [AB], [BC] et [CD] avec une croix bleue
* `codeSegments('X','blue',[A,B,C,D])` // Code les segments [AB], [BC], [CD] et [DA]\(attention, chemin fermé,pratique pour des polygones pas pour des lignes brisées)
* `codeSegments('X','blue',s1,s2,s3)` // Code les segments s1, s2 et s3 avec une croix bleue
* `codeSegments('X','blue',p.listePoints)` // Code tous les segments du polygone avec une croix bleue
* `codageAngleDroit(A,O,B)` //Fait un codage d'angle droit de 3 mm pour l'angle direct AOB
* `codageAngleDroit(A,O,B,.5)` //Fait un codage d'angle droit de 5 mm pour l'angle direct AOB
* `afficheMesureAngle(A,B,C)` // Affiche la mesure de l'angle ABC arrondie au degré près
* `codageCarre(c,color = 'black',mark='X')` // Code les longueurs égales et les angles droits du carré c
* `m = codageMediatrice(A,B,'blue')` // Ajoute le codage du milieu et de l'angle droit pour la médiatrice de [AB] en bleu
* `m = codageHauteurTriangle(A,B,C,'blue')` // Code en bleu la hauteur issue de B dans le triangle ABC et trace en pointillés (AC) si le pied de la hauteur est à l'extérieur du triangle
* `m = codageMedianeTriangle(A,B,C,'blue','//')` // Code en bleu le milieu de [AC]


