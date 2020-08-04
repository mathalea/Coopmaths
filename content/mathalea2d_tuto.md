---
title: "Comment utiliser MathALEA 2D ?"
niveau:
description: "Générateur de code SVG et TikZ"
---




<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

<h3 class="ui horizontal divider header">Les points</h3>

{{% alea2d "points"  %}}


* `A = point('A')` // Un point A sans coordonnées
* `A = point(x,y)` // Un point de coordonnées (x,y) non nommé
* `A = point(x,y,'A')` // Un point de coordonnées (x,y) nommé A (il ne faut pas oublier les guillemets)
* `A = point(x,y,'A',below')` //On peut préciser la position de son label (below left, below right, right, above left...)
* `tracePoint(A)` // Place une croix à l'emplacement du point A
* `tracePoint(A,.5)` // Place une croix de taille 5 mm à l'emplacement du point A
* `tracePoint(A,.5,'blue')` // Place une croix bleue de taille 5 mm à l'emplacement du point A
* `tracePoint(A,B,C,D)` // Place une croix pour les différents points 
* `tracePoint([A,B,C,D],'blue')` // Place une croix pour les différents points
* `tracePoint(A,B,C,D,'blue')` // Place une croix pour les différents points
* `labelPoint(A,B,C,D)` // Pour nommer les points A, B, C, D
* `A.positionLabel='left'` // Place le nom à gauche du point (on peut choisir above ou below suivi de left ou right)
* `G = centreGraviteTriangle(A,B,C)` // G est le centre de gravité du triangle ABC
* `H = orthoCentre(A,B,C)` // H est l'orthocentre du triangle ABC
* `O = centreCercleCirconscrit(A,B,C)` // O est le centre du cercle circonscrit au triangle ABC.

{{% alea2d "pointSurSegment"  %}}


* `M = pointSurSegment(A,B,l)` // M est le point de [AB] à l cm de A
* `M = pointSurSegment(A,B,l,'M')` // M est le point de [AB] à l cm de A et se nomme M
* `M = pointSurSegment(A,B,l,'M','below')` // M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
* `M = pointSurSegment(A,B,'h','M')` // M est un point au hasard sur [AB] \(on peut écrire n'importe quel texte à la place de 'h')
* `M = pointSurSegment(A,B)` // M est un point au hasard sur [AB] 
* `M = milieu(A,B)` // M est le milieu de [AB]
* `M = milieu(A,B,'M')` // M est le milieu de [AB] et se nomme M
* `M = milieu(A,B,'M','below')` // M est le milieu de [AB], se nomme M et le nom est en dessous du point
* `M = pointIntersectionDD(d1,d2,'M','below')` // M est le point d'intersection des droites (d1) et (d2)

Remarque :  La taille des croix n'a un effet que sur la sortie SVG


<h3 class="ui horizontal divider header">Les droites, demi-droites et segments</h3>

{{% alea2d "segmentsDroitesDemiDroites"  %}}


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

* `s = segment(A,B)` //Segment d'extrémités A et B
* `s = segment(A,B,'blue')` //Segment d'extrémités A et B et de couleur bleue
* `s = segment(x1,y1,x2,y2)` //Segment défini par les coordonnées des deux extrémités
* `s = segment(x1,y1,x2,y2,'blue')` // Segment défini par les coordonnées des deux extrémités et de couleur bleue
* `s = segmentAvecExtremites(A,B)` // Trace les 2 extrémités du segment en plus du segment
* `coteSegment(A,B)` // Note la longueur de [AB] au dessus si A est le point le plus à gauche sinon au dessous
* `codeSegment(A,B,'X','blue')` // Code le segment [AB] avec une croix bleue
* `codeSegments('X','blue',A,B, B,C, C,D)` // Code les segments [AB], [BC] et [CD] avec une croix bleue
 * `codeSegments('X','blue',[A,B,C,D])` // Code les segments [AB], [BC], [CD] et [DA]\(attention, chemin fermé,pratique pour des polygones pas pour des lignes brisées)
 * `codeSegments('X','blue',s1,s2,s3)` // Code les segments s1, s2 et s3 avec une croix bleue
 * `codeSegments('X','blue',p.listePoints)` // Code tous les segments du polygone avec une croix bleue
 *
* `d = demiDroite(A,B)` //Demi-droite d'origine A passant par B
* `d = demiDroite(A,B,'blue')` //Demi-droite d'origine A passant par B et de couleur bleue

On peut changer les extrémités d'un segment avec `s.styleExtremites='|-|'` ou `'<->'` ou `'-|'` ou `'|-'` ou `'->'` ou `'<-'`.

* `v = d.normal()` // Pour obtenir un vecteur normal à la droite (d)
* `v = d.directeur()` // Pour obtenir un  vecteur directeur de la droite (d)


<h3 class="ui horizontal divider header">Polygones</h3>

* `p = polygone(A,B,C,D,E)` // Trace ABCDE
* `c = carre(A,B)` // Trace le carré direct qui a pour côté [AB] et code les 4 angles droits
* `c = carreIndirect(A,B)` // Trace le carré indirect qui a pour côté [AB] et code les 4 angles droits
* `codageCarre(c,color = 'black',mark='X')` // Code les longueurs égales et les angles droits du carré c
* `p = polygoneRegulier(A,B,n)` // Trace le polygone régulier direct à n côtés qui a pour côté [AB]
* `p = polygoneRegulierIndirect(A,B,n)` // Trace le polygone régulier indirect à n côtés qui a pour côté [AB]
* `p = polygoneRegulierParCentreEtRayon(O,r,n)` // Trace le polygone régulier à n côtés et de rayon r
* `p.listePoints` permet d'accéder aux sommets du polygone par ordre de constuction
* `nommePolygone(p1,'ABCDEF')` // Nomme tous les sommets de p1 (dans l'ordre de création des points)
* `deplaceLabel(p1,'AB','below')` // Si il y a un point nommé 'A' ou 'B' dans le polygone son nom sera mis en dessous du point


<h3 class="ui horizontal divider header">Les cercles</h3>


* `c = cercle(O,r)` //Cercle de centre O et de rayon r
* `c = cercleCentrePoint(O,A)` //Cercle de centre O passant par A
* `c = cercleCentrePoint(O,A,'blue')` //Cercle de centre O passant par A en bleu
* `c = arc(O,a,r)` // Arc de cercle de centre O, d'angle a et de rayon r
* `c = arc(O,a,r,true)` // Arc de cercle de centre O, d'angle a et de rayon r fermé par les rayons aux extrémités
* `c = arcPointPointAgngle(A,B,a,true)` // Arc de cercle d'extrémités A et B d'angle a fermé par les rayons aux extrémités

<h3 class="ui horizontal divider header">Les angles</h3>

* `codageAngleDroit(A,O,B)` //Fait un codage d'angle droit de 3 mm pour l'angle direct AOB
* `codageAngleDroit(A,O,B,.5)` //Fait un codage d'angle droit de 5 mm pour l'angle direct AOB
* `afficheMesureAngle(A,B,C)` // Affiche la mesure de l'angle ABC arrondie au degré près


<h3 class="ui horizontal divider header">Les vecteurs</h3>

* `v = vecteur(x,y)` // ses composantes
* `v = vecteur(A,B)` // son origine et son extrémité (deux Points)
* `v = vecteur(x,y,'v')` // le 3e argument est son nom
* `v.norme()` // renvoie la norme du vecteur
* `v.representant(A)`// trace un représentant du vecteur qui a pour origine le point A

<h3 class="ui horizontal divider header">Les transformations</h3>

* `translation(p,A,B)` // Trace l'image de p dans la translation qui transfome A en B
* `translation(p,v)` // Trace l'image de p dans la translation de vecteur v
* `homothetie(p,O,k)` // Trace l'image de p dans l'homothétie de centre O et de rapport k
* `rotation(p,O,a)` // Trace l'image de p dans la rotation de centre O et d'angle a
* `symetrieAxiale(p,d)` // Trace l'image de p dans la symétrie d'axe (d)
* `similitude(p,O,a,k)` // Trace l'image de p dans la similitude de centre O, d'angle a et de rapport k
* `P = projectionOrtho(A,d)` // P est le projeté orthogonal de A sur (d)
* `affiniteOrtho(p,d,k)` // Trace l'image de p dans l'affinité sur (d) perpendiculairement à (d) de rapport k
{{% alea2d "affinite"  %}}

<h3 class="ui horizontal divider header">Les droites remarquables</h3>

* `d = mediatrice(A,B)` // Médiatrice de [AB]
* `d = mediatrice(A,B,'d', 'blue')` // Médiatrice de [AB] nommée (d) en bleu
* `m = codageMediatrice(A,B,'blue')` // Ajoute le codage du milieu et de l'angle droit pour la médiatrice de [AB] en bleu
* `d = bissectrice(A,B)` // Bissectrice de [AB]
* `d = bissectrice(A,B,'blue')` // Bissectrice de [AB] en bleu
* `d = hauteurTriangle(A,B,C)` // (d) est la hauteur issue de A dans le triangle ABC
* `d = medianeTriangle(A,B,C)` // (d) est la médiane issue de A dans le triangle ABC
{{% alea2d "hauteurs"  %}}

<h3 class="ui horizontal divider header">Les calculs</h3>

* `longueur(A,B)` renvoie la distance de A à B
* `norme(v)` renvoie la norme du vecteur
* `angle(A,O,B)` renvoie l'angle entre les demi-droites [OA) et [OB)
* `angleOriente(A,O,B)` renvoie l'angle orienté
