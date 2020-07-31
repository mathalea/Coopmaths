---
title: "Comment utiliser MathALEA 2D ?"
niveau:
description: "Générateur de code SVG et TikZ"
---




<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

<h3 class="ui horizontal divider header">Les points</h3>

* `A = point('A')` // Un point A sans coordonnées
* `A = point(x,y)` //Un point de coordonnées (x,y) non nommé
* `A = point(x,y,'A')` // Un point de coordonnées (x,y) nommé A (il ne faut pas oublier les guillemets)
* `A = point(x,y,'A',below')` //On peut préciser la position de son label (below left, below right, right, above left...)
* `tracePoint(A)` // Place une croix à l'emplacement du point A
* `tracePoint(A,.5)` //Place une croix de taille 5 mm à l'emplacement du point A
* `tracePoint(A,.5,'blue')` //Place une croix bleue de taille 5 mm à l'emplacement du point A
* `tracePoints(A,B,C,D)` // Place une croix pour les différents points (il ne faut pas oublier le s)

Remarque :  La taille des croix n'a un effet que sur la sortie SVG

<h3 class="ui horizontal divider header">Les points créés par transformation</h3>


* `M = pointParTranslation2Points(O,A,B)` //M est l'image de O dans la translation qui transforme A en B
* `M = pointParTranslation2Points(O,A,B,'M')` //M est l'image de O dans la translation qui transforme A en B et se nomme M
* `M = pointParTranslation2Points(O,A,B,'M','below')` //M est l'image de O dans la translation qui transforme A en B, se nomme M et le nom est en dessous du point
* `M = pointParTranslation(O,v)` //M est l'image de O dans la translation de vecteur v
* `M = pointParTranslation(O,v,'M')` //M est l'image de O dans la translation de vecteur v et se nomme M
* `M = pointParTranslation(O,v,'M','below')` //M est l'image de O dans la translation de vecteur v, se nomme M et le nom est en dessous du point
* `M = pointParHomothetie(A,O,k)` //M est l'image de A dans l'homothétie de centre O et de rapport k
* `M = pointParHomothetie(A,O,k,'M')` //M est l'image de A dans l'homothétie de centre O et de rapport k et se nomme M
* `M = pointParHomothetie(A,O,k,'M','below')` //M est l'image de A dans l'homothétie de centre O et de rapport k, se nomme M et le nom est en dessous du point
* `M = pointSurSegment(A,B,l)` //M est le point de [AB] à l cm de A
* `M = pointSurSegment(A,B,l,'M')` //M est le point de [AB] à l cm de A et se nomme M
* `M = pointSurSegment(A,B,l,'M','below')` //M est le point de [AB] à l cm de A, se nomme M et le nom est en dessous du point
* `M = pointMilieu(A,B)` //M est le milieu de [AB]
* `M = pointMilieu(A,B,'M')` //M est le milieu de [AB] et se nomme M
* `M = pointMilieu(A,B,'M','below')` //M est le milieu de [AB], se nomme M et le nom est en dessous du point
* `M = pointParRotation(A,O,angle)` //M est l'image de A dans la rotation de centre O et d'angle angle
* `M = pointParRotation(A,O,angle,'M')` //M est l'image de A dans la rotation de centre O et d'angle angle et se nomme M
* `M = pointParRotation(A,O,angle,'M','below')` //M est l'image de A dans la rotation de centre O et d'angle angle, se nomme M et le nom est en dessous
* `M = pointParSymetrieAxiale(A,d)` // M est l'image de A dans la symétrie axiale d'axe d.
* `N = pointParProjectionOrtho(M,d,'N','below left')` // N est le projeté orthogonal de M sur la droite d
* `labelPoints(A,B,C,D)` pour nommer les points A, B, C, D
* `A.positionLabel='left'` place le nom à gauche du point (on peut choisir above ou below suivi de left ou right)

<h3 class="ui horizontal divider header">Les droites</h3>

* `d = droite(A,B)` // La droite passant par A et B
* `d = droite(A,B,'(d)')` // La droite passant par A et B se nommant (d)
* `d = droite(a,b,c,'(d)')` // La droite définie par les coefficients de ax +by + c=0 (équation de la droite avec a et b non nuls)
* `d = droite(A,B,'(d)','blue')` //La droite passant par A et B se nommant (d) et de couleur bleue
* `d = droiteParPointEtVecteur(A,v,'red')` //Droite passant par A, de vecteur directeur v et de couleur rouge
* `d = droiteParPointEtParallele(A,d)` //Droite parallèle à (d) passant par A
* `d = droiteParPointEtPerpendiculaire(A,d)` //Droite perpendiculaire à (d) passant par A
* `d = droiteHorizontaleParPoint(A)` // Droite horizontale passant par A
* `d = droiteVerticaleParPoint(A)` // Droite verticale passant par A
* `d = droiteParPointEtPente(A,2)` // Droite passant par A de coefficient directeur 2

* `s = segment(A,B)` //Segment d'extrémités A et B
* `s = segment(A,B,'blue')` //Segment d'extrémités A et B et de couleur bleue
* `s = segment(x1,y1,x2,y2)` //Segment défini par les coordonnées des deux extrémités
* `s = segment(x1,y1,x2,y2,'blue')` //Segment défini par les coordonnées des deux extrémités et de couleur bleue
* `s = segmentAvecExtremites(A,B)` //Trace les 2 extrémités du segment en plus du segment


<h3 class="ui horizontal divider header">Polygones</h3>

* `polygone(A,B,C,D,E)` //Trace ABCDE
* `polygoneParTranslation(p,A,B)` //Trace l'image de p dans la translation qui transfome A en B
* `polygoneParTranslation(p,v)` //Trace l'image de p dans la translation de vecteur v
* `polygoneParHomothetie(p,O,k)` //Trace l'image de p dans l'homothétie de centre O et de rapport k
* `polygoneParRotation(p,O,a)` //Trace l'image de p dans la rotation de centre O et d'angle a
* `polygoneParSymetrieAxiale(p,d)` //Trace l'image de p dans la symétrie d'axe (d)
* `carre(A,B)` //Trace le carré direct qui a pour côté [AB] et code les 4 angles droits
* `carreIndirect(A,B)` //Trace le carré indirect qui a pour côté [AB] et code les 4 angles droits
* `polygoneRegulier(A,B,n)` //Trace le polygone régulier direct à n côtés qui a pour côté [AB]
* `p = polygoneRegulierIndirect(A,B,n)` //Trace le polygone régulier indirect à n côtés qui a pour côté [AB]
* `p = polygoneRegulierParCentreEtRayon(O,r,n)` //Trace le polygone régulier à n côtés et de rayon r
* `p.listePoints` permet d'accéder aux sommets du polygone par ordre de constuction
* `nommePolygone(p1,'ABCDEF')` // Nomme tous les sommets de p1 (dans l'ordre de création des points)
* `deplaceLabel(p1,'AB','below')` // Si il y a un point nommé 'A' ou 'B' dans le polygone son nom sera mis en dessous du point


<h3 class="ui horizontal divider header" id="video">Angles</h3>

* `codageAngleDroit(A,O,B)` //Fait un codage d'angle droit de 3 mm pour l'angle direct AOB
* `codageAngleDroit(A,O,B,.5)` //Fait un codage d'angle droit de 5 mm pour l'angle direct AOB

<h3 class="ui horizontal divider header" id="video">Fonctions</h3>

* `longueur(A,B)` renvoie la distance de A à B
* `norme(v)` renvoie la norme du vecteur
* `angle(A,O,B)` renvoie l'angle entre les demi-droites [OA) et [OB)
