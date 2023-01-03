---
title: "Codages"
niveau:
description: "MathALEA 2D - Les codages"
---




{{% alea2d "codageSegments"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `fenetreMathalea2d = [-11.5,-11.9,18.5,8.1]`
* `const A=point(1,0); B=point(4,0); C=point(1,6); D=point(-1,5)`
* `const E=point(-4,2); F=point(-2,-2);G=point(-5,-2); H=point(-6,-4);I=point(-7,0); J=point(-5,3)`
* `const s1=segment(A,B); s2=segment(B,C); s3=segment(C,D); s4=segment(D,E,'blue')`
* `const s5=segment(E,F,'blue'); s6=segment(D,F,'blue');s7=segment(A,C,'red'); s8=segment(A,D,'red')`
* `const p=polygone([G,H,I,J],'#f15929')`
* `const monCodage1=afficheLongueurSegment(A,B) // Note la longueur de [AB] au dessus si A est le point le plus à gauche sinon au dessous`
* `const monCodage2=codageSegments('X','blue',A,B, B,C, C,D) // Code les segments [AB], [BC] et [CD] avec une croix bleue`
* `const monCodage3=codageSegments('||','red',[D,E,F]) // Code les segments [DE], [EF] et [DF] avec deux barres rouges \(attention, chemin fermé,pratique pour des polygones pas pour des lignes brisées)`
* `const monCodage4=codageSegments('O','black',s7,s8) // Code les segments s1, s2 et s3 avec un rond noir`
* `const monCodage5=codageSegments('\\','green',p.listePoints) // Code tous les côtés du polygone avec une barre verte`



{{% alea2d "codage"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>


* `let monCodage = afficheLongueurSegment(A,B)` // Note la longueur de [AB] au dessus si A est le point le plus à gauche sinon au dessous
* `let monCodage = codeSegment(A,B,'X','blue')` // Code le segment [AB] avec une croix bleue
* `let monCodage = codeSegments('X','blue',A,B, B,C, C,D)` // Code les segments [AB], [BC] et [CD] avec une croix bleue
* `let monCodage = codeSegments('X','blue',[A,B,C,D])` // Code les segments [AB], [BC], [CD] et [DA]\(attention, chemin fermé,pratique pour des polygones pas pour des lignes brisées)
* `let monCodage = codeSegments('X','blue',s1,s2,s3)` // Code les segments s1, s2 et s3 avec une croix bleue
* `let monCodage = codeSegments('X','blue',p.listePoints)` // Code tous les segments du polygone avec une croix bleue
* `let monCodage = codageAngleDroit(A,O,B)` //Fait un codage d'angle droit de 3 mm pour l'angle direct AOB
* `let monCodage = codageAngleDroit(A,O,B,.5)` //Fait un codage d'angle droit de 5 mm pour l'angle direct AOB
* `let monCodage = afficheMesureAngle(A,B,C)` // Affiche la mesure de l'angle ABC arrondie au degré près
* `let monCodage = afficheMesureAngle(A,B,C,'red',1.5,'⍺')` // Affiche la marque de l'angle en rouge avec un rayon de 1,5 et remplace la mesure de l'angle par un texte (ici ⍺)
* `let monCodage = codageCarre(c,color = 'black',mark='X')` // Code les longueurs égales et les angles droits du carré c
* `let m = codageMediatrice(A,B,'blue')` // Ajoute le codage du milieu et de l'angle droit pour la médiatrice de [AB] en bleu
* `let m = codageHauteurTriangle(A,B,C,'blue')` // Code en bleu la hauteur issue de B dans le triangle ABC et trace en pointillés (AC) si le pied de la hauteur est à l'extérieur du triangle
* `let m = codageMedianeTriangle(A,B,C,'blue','//')` // Code en bleu le milieu de [AC]
* `let maConstruction = constructionMediatrice(A,B,detail=true,color='blue',markmilieu='×',markrayons='//',couleurMediatrice='red',epaisseurMediatrice=2)` // Construit en rouge la médiatrice de [AB] avec en pointillés et codés les rayons des arcs de cercles utilisés et le codage du milieu et de l'angle droit.
* `let maConstruction = ConstructionBissectrice(A,O,B,detail=false,color='blue',mark='×',tailleLosange=5,couleurBissectrice='green',epaiseurBissectrice = 2)` // Construit en vert la bissectrice de l'angle AOB en utilisant un écartement de compas de 5cm sans ajouter les deux derniers côtés du losange et le codage des égalités de longueur (detail=true pour les avoir)
* `let maConstruction = traceCompas(O,A,angle=20,color='gray',opacite=.7, epaisseur = 1, pointilles  = false)` // Fait un arc de cercle de 20° centré en A de centre O de couleur grise avec une opacité de 70%, une épaisseur de 1 pixel et en trait continu.


