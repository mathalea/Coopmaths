---
title: "MathALEA 2D"
niveau:
description: "Présentation de MathALEA 2D"
---

On a souhaité développer des exercices aléatoires de géométrie pour MathALEA. Mais, à notre connaissance, il n'existe pas de technologie qui puisse générer des figures géométriques que l'on pourra diffuser sur le web et en PDF.

On a donc inventé un langage simplifié (les scripts MathALEA2D) qui sont ensuite exportés en SVG pour le Web et en Tikz/LaTeX pour le PDF.

Ce logiciel de géométrie en ligne permet de générer des figures à partir de lignes de commandes que vous retrouverez dans la documentation (de l’homothétie au cercle circonscrit en passant par la similitude et les intersections de droite...) et des commandes javascript (des boucles, des calculs, des fonctions prédéfinies...).

Cet outil servira principalement à la création d'exercices pour MathALEA mais peut-être trouvera-t-il d'autres usages. On ne le manipule pas à la souris comme un logiciel de géométrie dynamique mais en ligne de commande. Cela a ses inconvénients mais aussi ses avantages car cela permet de très rapidement créer des figures assez sophistiquées ou des animations.

<div class="ui hidden divider"></div>

<h2 class="ui horizontal divider header">Documentation</h2>

<div class="ui hidden divider"></div>

{{< liste >}}
  	{{% item "Les points" "/docMathalea2d/points" %}}
  	{{% item "Les segments, droites et demi-droites" "/docMathalea2d/segments" %}}
	{{% item "Les cercles et arcs de cercles" "/docMathalea2d/cercles" %}}
	{{% item "Les polygones" "/docMathalea2d/polygones" %}}
	{{% item "Les transformations" "/docMathalea2d/transformations" %}}
  	{{% item "Les droites remarquables" "/docMathalea2d/remarquables" %}}
  	{{% item "Les codages" "/docMathalea2d/codages" %}}
  	{{% item "La programmation" "/docMathalea2d/programmation" %}}
{{< /liste >}}

<div class="ui hidden divider"></div>

<h2 class="ui horizontal divider header">À propos</h2>

<div class="ui hidden divider"></div>

MathALEA 2D a été développé par Rémi Angot et Jean-Claude Lhote durant l'été 2020.

Comme le reste du site, MathALEA 2D est libre de droit sous licence CC-BY-SA et le code est disponible [ici](https://github.com/remiangot/MathALEA/blob/master/include/mathalea2d.js).
            