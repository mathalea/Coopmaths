---
title: "Les points"
niveau:
description: "MathALEA 2D - Les points"
---



{{% alea2d "points"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

Dans MathALEA2D, créer un point ne le trace pas. 

On commence par définir un point avec ses coordonnées `let A = point(x,y)`, on peut faire apparaître la croix qui permet de savoir où est le point avec `tracePoint(A)` puis pour faire apparaitre son nom on rajoute `labelPoint(A)`.

Une première subtilité à bien comprendre c'est qu'un objet MathALEA2D peut être sauvegardé dans une variable informatique mais le nom de la variable... n'est pas forcément le nom du point. Pour rappel, `let` permet de déclarer une nouvelle variable en Javascript.


```
let A = point(4,5)
tracePoint(A)
labelPoint(A)
```

Avec le script ci-dessus, le point va être tracé mais la commande `labelPoint(A)` qui est censé afficher le nom du point n'aura aucun effet car le nom du point n'est pas le nom de la variable informatique où ce point est sauvegardé. Pour préciser le nom du point, il faut saisir le code suivant : 

```
let A = point(4,5,'A')
tracePoint(A)
labelPoint(A)
```

Après les coordonnées du point, il faut ajouter son nom qui peut être n'importe quel texte (vous pouvez très bien faire une figure sur laquelle apparaitront plusieurs point s'appelant A).

La commande complète pour un point est : `let A = point(x,y,'A',below')`. 

Le dernier argument sert à préciser la position du nom du point par rapport au point et peut être : left, right, above, below, adove left, above right, below left ou below right.

Voici d'autres commandes possibles pour les points : 

* `tracePoint(A,.5)` // Place une croix de taille 5 mm (en SVG mais en LaTeX la taille ne changera pas) à l'emplacement du point A
* `tracePoint(A,.5,'blue')` // Place une croix bleue de taille 5 mm à l'emplacement du point A
* `tracePoint(A,B,C,D)` // Place une croix pour les différents points 
* `tracePoint([A,B,C,D],'blue')` // Place une croix pour les différents points
* `tracePoint(A,B,C,D,'blue')` // Place une croix pour les différents points
* `labelPoint(A,B,C,D)` // Pour nommer les points A, B, C, D
* `tracePointSurDroite(A,B)` // Marque le point A sur la droite (AB) (plutôt que d'avoir une croix, on a un trait perpendiculaire à la droite)
* `tracePointSurDroite(A,d)` // Marque le point A sur la droite (d) 
* `A.positionLabel='left'` // Place le nom à gauche du point (on peut choisir above ou below suivi de left ou right)
* `let G = centreGraviteTriangle(A,B,C)` // G est le centre de gravité du triangle ABC
* `let H = orthoCentre(A,B,C)` // H est l'orthocentre du triangle ABC
* `let O = centreCercleCirconscrit(A,B,C)` // O est le centre du cercle circonscrit au triangle ABC.
* `let M = pointSurSegment(A,B,l)` // M est le point de [AB] à l cm de A
* `let M = pointSurSegment(A,B,l,'M')` // M est le point de [AB] à l cm de A et se nomme M
* `let M = pointSurSegment(A,B,l,'M','below')` // M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
* `let M = pointSurSegment(A,B,'','M')` // M est un point au hasard sur [AB] 
* `let M = pointSurSegment(A,B)` // M est un point au hasard sur [AB] 
* `let M = pointSurCercle(c,'','M')` // M est un point choisi au hasard sur le cercle c et se nomme M
* `let N = pointSurCercle(c,90)` // N est le point du cercle c situé à 90° par rapport à l'horizontale, donc au dessus du centre de c
* `let M = milieu(A,B)` // M est le milieu de [AB]
* `let M = milieu(A,B,'M')` // M est le milieu de [AB] et se nomme M
* `let M = milieu(A,B,'M','below')` // M est le milieu de [AB], se nomme M et le nom est en dessous du point
* `let M = pointIntersectionDD(d1,d2,'M','below')` // M est le point d'intersection des droites (d1) et (d2)
* `let I = pointItersectionLC(d,c,'I')` // I est le premier point d'intersection, si il existe, de la droite (d) et du cercle (c)
* `let J = pointItersectionLC(d,c,'J',2)` // I est le deuxième point d'intersection, si il existe, de la droite (d) et du cercle (c)
* `let M = pointIntersectionCC(c1,c2,'M')` // M est le point d'intersection le plus haut des cercles c1 et c2
* `let M = pointIntersectionCC(c1,c2,'M',2)` // M est le point d'intersection le plus bas des cercles c1 et c2
 * `let P = barycentre(poly,'P','below')` // Crée le point P barycentre du polygone poly, son nom 'P' sera placé sous le point si il est tracé et labelisé.

Pour le repère, on peut utiliser les commandes suivantes : 

* `axes()` // Trace les axes des abscisses et des ordonnées
* `axes(xmin,ymin,xmax,ymax,thick,pas)` où thick est la taille des graduations
* `grille(xmin,ymin,xmax,ymax,color,opacite,pas)` // Trace une grille (par défaut en gris, opacité 40% et un pas de 1)



