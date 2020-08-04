---
title: "Segments, droites et demi-droites"
niveau:
description: "MathALEA 2D - Les segments, droites et demi-droites"
---



{{% alea2d "segmentsDroitesDemiDroites"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>


<h3 class="ui horizontal divider header">Les droites et demi-droites</h3>


Il y a plusieurs manières de créer une droite : à l'aide de 2 points, à l'aide des coefficients de l'équation de la droite, à l'un d'un point et d'un coefficient directeur...


* `d = droite(A,B)` // La droite passant par A et B
* `d = droite(A,B,'(d)')` // La droite passant par A et B se nommant (d)
* `d = droite(a,b,c,'(d)')` // La droite définie par les coefficients de ax +by + c=0 (équation de la droite avec a et b non nuls)
* `d = droite(A,B,'(d)','blue')` //La droite passant par A et B se nommant (d) et de couleur bleue
* `d = droiteParPointEtVecteur(A,v,'red')` //Droite passant par A, de vecteur directeur v et de couleur rouge
* `d = droiteParPointEtParallele(A,d)` // Droite parallèle à (d) passant par A
* `d = droiteParPointEtPerpendiculaire(A,d)` //Droite perpendiculaire à (d) passant par A
* `d = droiteHorizontaleParPoint(A)` // Droite horizontale passant par A
* `d = droiteVerticaleParPoint(A)` // Droite verticale passant par A
* `d = droiteParPointEtPente(A,2)` // Droite passant par A de coefficient directeur 2
* `d = demiDroite(A,B)` //Demi-droite d'origine A passant par B
* `d = demiDroite(A,B,'blue')` //Demi-droite d'origine A passant par B et de couleur bleue
* `d = demiDroiteAvecExtremite(A,B)` //Demi-droite d'origine A passant par B avec l'extrémité en A dessinée



Une fois la droite créée, on peut créer un vecteur directeur ou normal à cette droite.

* `v = d.normal()` // Pour obtenir un vecteur normal à la droite (d)
* `v = d.directeur()` // Pour obtenir un  vecteur directeur de la droite (d)

<h3 class="ui horizontal divider header">Les segments</h3>


Pour créer un segment, on peut utiliser des points déjà créés ou les coordonnées des deux extrémités.

* `s = segment(A,B)` // Segment d'extrémités A et B
* `s = segment(A,B,'blue')` // Segment d'extrémités A et B et de couleur bleue
* `s = segment(x1,y1,x2,y2)` // Segment défini par les coordonnées des deux extrémités
* `s = segment(x1,y1,x2,y2,'blue')` // Segment défini par les coordonnées des deux extrémités et de couleur bleue
* `s = segmentAvecExtremites(A,B)` // Trace les 2 extrémités du segment en plus du segment


On peut changer les extrémités d'un segment avec `s.styleExtremites='|-|'` ou `'<->'` ou `'-|'` ou `'|-'` ou `'->'` ou `'<-'`.

Par ailleurs, il est possible de coder un segment.

* `afficheLongueurSegment(A,B)` // Note la longueur de [AB] au dessus si A est le point le plus à gauche sinon au dessous
* `codeSegment(A,B,'X','blue')` // Code le segment [AB] avec une croix bleue
* `codeSegments('X','blue',A,B, B,C, C,D)` // Code les segments [AB], [BC] et [CD] avec une croix bleue
 * `codeSegments('X','blue',[A,B,C,D])` // Code les segments [AB], [BC], [CD] et [DA]\(attention, chemin fermé,pratique pour des polygones pas pour des lignes brisées)
 * `codeSegments('X','blue',s1,s2,s3)` // Code les segments s1, s2 et s3 avec une croix bleue
 * `codeSegments('X','blue',p.listePoints)` // Code tous les segments du polygone avec une croix bleue


<div class="ui hidden divider"></div>

<h3 class="ui horizontal divider header">Placer un point sur un segment</h3>


<div class="ui hidden divider"></div>

{{% alea2d "pointSurSegment"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `M = pointSurSegment(A,B,l)` // M est le point de [AB] à l cm de A
* `M = pointSurSegment(A,B,l,'M')` // M est le point de [AB] à l cm de A et se nomme M
* `M = pointSurSegment(A,B,l,'M','below')` // M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
* `M = pointSurSegment(A,B,'h','M')` // M est un point au hasard sur [AB] \(on peut écrire n'importe quel texte à la place de 'h')
* `M = pointSurSegment(A,B)` // M est un point au hasard sur [AB] 
* `M = milieu(A,B)` // M est le milieu de [AB]
* `M = milieu(A,B,'M')` // M est le milieu de [AB] et se nomme M
* `M = milieu(A,B,'M','below')` // M est le milieu de [AB], se nomme M et le nom est en dessous du point
* `M = pointIntersectionDD(d1,d2,'M','below')` // M est le point d'intersection des droites (d1) et (d2)
