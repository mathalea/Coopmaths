---
title: "Quadrillages, repères et graphiques"
niveau:
description: "MathALEA 2D - Les quadrillages, repères et graphiques"
---

<div class="ui hidden divider"></div>

{{% alea2d "grandsCarreaux"  %}}

La fonction `grille()` peut avoir 7 paramètres dont seuls les 4 premiers sont obligatoires. Par défaut le "pas" est de 1 cm ce qui signifie que chaque carreau fait 1 cm de côté.

`grille(xmin,ymin,xmax,ymax,couleur,opacite,pas)`


{{% alea2d "petitsCarreaux"  %}}

En mettant le pas à 0,5, on obtient de petits carreaux. Remarquez que l'unité reste le cm pour placer les points.

{{% alea2d "seyes"  %}}

La fonction `seyes()` permet de créer des carreaux semblables à ceux des cahiers des élèves. Cela apporte une difficulté supplémentaire car l'unité de MathALEA2D est le cm alors que ces carreaux ne feront que 0,8 cm. Il faut donc multiplier par 0,8 toutes les longueurs obtenues par MathALEA2D si on veut les comparer à celles sur un vrai cahier.

En JavaScript, comme dans beaucoup de langages informatiques, le séparateur décimal est le point et les calculs manquent de précision. On utilise donc `nombreDecimal()` pour parer à ces deux problèmes.

{{% alea2d "cf1"  %}}

La variable globale `pixelsParCm` permet de paramétrer l'affichage des figures MathALEA2D. Par défaut, elle est de 20 mais on peut la modifier dans le script.

{{% alea2d "cf2"  %}}

`repere()` est une fonction qui peut être paramétrée de bien des manières. On a décidé d'utiliser un objet JavaScript pour la paramétrer. Cela impose de mettre les paramètres entre accolades et d'utiliser `:` à la place de `=`. L'avantage, c'est que l'on peut écrire les paramètres dans l'ordre que l'on veut et ne surcharger que ceux souhaités.
Voir la fonction `repere2()` à la fin de ce fichier qui est une amélioration de `repere()`

Voici tous les paramètres par défaut que vous pouvez changer : 

````
xmin : -10,
xmax : 10,
ymin : -10,
ymax : 10,
xscale : 1, // par défaut l'unité des abscisses est 1cm 
// avec xscale : 2 on aura 2 unités pour 1 cm
yscale : 1,
xstep : 1, // toutes les graduations sont numérotés
// avec xstep : 3 une graduation sur 3 sera numérotées 
ystep : 1,
graduationColor : "black", // couleur de la graduation
afficheZero : false, // par défaut on n'affiche pas le 0 sur l'axes des abscisses et des ordonnées
axesEpaisseur : 2, // épaisseur des 2 axes et des graduations sur les axes
axesColor : "black", // couleur des axes
grillePrincipaleDistance : 1, // un carreau par unité ; avec 0.5 comme valeur on a deux carreaux par unité ; avec 0.1 on a 10 carreaux
grillePrincipaleColor : "gray", 
grillePrincipaleOpacite : 0.7,
grillePrincipalePointilles : false, // avec grillePrincipalePointilles : true le quadrillage serait en pointillés
grillePrincipaleVisible : true,
grilleSecondaireDistance : 0.1, // avec ce paramètre, chaque carreau est coupé en 10 sous-carreaux
grilleSecondaireColor : "gray",
grilleSecondaireOpacite : 0.3,
grilleSecondairePointilles : false,
grilleSecondaireVisible : false, // par défaut, le quadrillage secondaire n'est pas affiché
graduationsxMin : xmin,
graduationsxMax : xmax,
graduationsyMin : ymin,
graduationsyMax : ymax,
positionLabelX : -0.6, // position relative de la numérotation par rapport à l'axe
positionLabelY : -0.6,
legendeX : "x", // texte à la fin de l'axe des abscisses
legendeY : "y", // texte à la fin de l'axe des ordonnées
positionLegendeX : [xmax + 0.2, 0.3] // coordonnées du texte à la fin de l'axe des abscisses
positionLegendeY : [0.3n ymax + 0.2],

````
{{% alea2d "cf3"  %}}


<div class="ui hidden divider"></div>

`droiteGraduee()` est une fonction qui permet de tracer une droite ou une demi-droite graduée horizontale ou verticale.

Exemple : droiteGraduee(0,0,'H','dd',5,2,15,0,1,'0','1',true,['M',1.5],['N',3.5],['P',4.25])

Vous pouvez placer des points sur cette droite.

Voici tous les paramètres par défaut que vous pouvez changer : 
````
Xorigine : 0,
Yorigine : 0,
Position : 'H' // 'V' ou n'importe quoi d'autre donnera une position verticale,
Type : 'dd' // 'd' ou n'importe quoi d'autre donnera une droite qui commence 0,5cm avant la première graduation,
LongueurUnite : 10 // distance en cm entre deux "grosses" graduations,
Division : 10 // nombre de parts/unité,
LongueurTotale : 15 // longeur totale en cm,
origin : 0 // abscisse 1ère graduation,
unite : 1 // abscisse 2ème graduation,
labelgauche : 'O' // Ce qui est écrit sous la première graduation,
labelUnite : 'I' // Ce qui est écrit sous la deuxième graduation,
gradue : true // true=compléter les graduations principales à partir de la 3ème avec leur abscisse, false=pas de graduations automatiques,
...args : vide // liste de points à placer au format ['Nom',abscisse]
````
{{% alea2d "droitegraduee"  %}}

<div class="ui hidden divider"></div>

`droiteGraduee2()` est une fonction plus puissante que droiteGraduee() qui permet d'avoir trois niveaux de graduations.



Vous pouvez placer des points sur cette droite.
Exemple : droiteGraduee2({x:0,y:4,Min:0,Max:2.7,thickEpaisseur:1,thickSec:true,thickTer:true,axeStyle:'|->',pointListe:[[1.73,'B'],[1.7,'A'],[1.8,'C']],labelListe:[[1.7,'x'],[1.8,'y']]})
Voici tous les paramètres par défaut que vous pouvez modifier ou pas (entre parenthèses la valeur par défaut) : 
````
Paramètres :
 * Unite (10) : Nombre de cm par Unité
 * Min(0),Max(2) : Valeur minimum et maximum labelisées sur l'axe (les graduations commencent un peu avant et finissent un peu après)
 * x (0),y (0) : coordonnées du point de départ du tracé
 * axeEpaisseur (2),axeCouleur ('black'), axeStyle ('->') : épaisseur, couleur et syle de l'axe (valeurs possibles '->' ou '|->')
 * axeHauteur (4): définit la "largeur" de l'axe, celle des graduations et de la flèche
 * axePosition ('H'): 'H' pour horizontal, 'V' pour vertical
 * thickEpaisseur (2),thickCouleur (axeCouleur): grosseur et couleur des graduations
 * thickDistance (1): distance entre deux graduations principales
 * thickSecDist (0.1): distance entre deux graduations secondaires
 * thickTerDist (0.01): distance entre deux graduations tertiaires
 * thickSec (false): true si besoin de graduations secondaires, false sinon
 * thickTer (false): true si besoin de graduations tertiaires, false sinon
 * pointListe (false): Liste de points à mettre sur l'axe. Exemple [[3.4,'A'],[3.8,'B],....]. Les noms se placent au dessus de l'axe.
 * pointTaille (4), pointOpacite (0.8), pointCouleur ('blue'), pointStyle ('+'): taille en pixels, opacité, couleur et style des points de la pointListe
 * labelListe (false): pour ajouter des labels. Exemple [[2.8,'x'],[3.1,'y']] les labels se placent sous l'axe. 
 * LabelDistance (2*axeHauteur) : Distance entre les labels faculatatifs et l'axe
 * Legende (""): texte à écrire en bout de droite graduée
 * LegendePosition (1,5cm après Max): position de la légende
 */
{{% alea2d "droitegraduee2"  %}}

`Repere2()` est une fonction qui succède à `Repere()` dont elle reprend bon nombre de paramètres mais en ajoute quelques uns pour obtenir des graphiques encore plus jolis. Voici la liste des paramètres et leur valeurs par défaut.
Ces paramètres sont passés via un objet, donc on utilise : à la place de = et on ne passe que les paramètres que l'on souhaite modifier.

````
  xUnite = 1, // Facteur de zoom en absciss c'est à dire le nombre de cm que représente l'unité en abscisse. Si xUnite = 0.5, on aura 1cm = 2 unités
  yUnite = 1, // Idem en ordonnée
  xMin = -10, // Les limites du repère
  xMax = 10,
  yMin = -10,
  yMax = 10,
  axesEpaisseur = 2, 
  axesCouleur = 'black',
  axeXStyle = '->', // Les styles possibles sont : '|->','->',... voir les styleExtremites des segments.
  axeYStyle = '->', // Idem
  thickEpaisseur = 2, // épaisseur des graduations
  thickHauteur = 0.2, // hauteur des graduations (ici 2mm au dessus et 2mm en dessous de l'axe soit 4mm de hauteur)
  thickCouleur = axesCouleur, // pour des graduations colorées par défaut dans la couleur de l'axe
  xThickDistance = 1, // La distance entre 2 graduations successives en abscisse. définit aussi l'espacement des lignes verticales de la grille principale si grilleDistance reste à false
  xThickListe = false, // si ce paramètre contient un tableau de valeurs, seules ces valeurs auront des graduations.
  xThickMin = xMin + xThickDistance,
  xThickMax = xMax - xThickDistance,
  yThickDistance = 1,
  yThickListe = false,
  yThickMin = yMin + yThickDistance,
  yThickMax = yMax - yThickDistance,
  xLabelDistance = xThickDistance,
  xLabelListe = false,
  xLabelMin = xThickMin,
  xLabelMax = xThickMax,
  yLabelDistance = yThickDistance,
  yLabelListe = false,
  yLabelMin = yThickMin,
  yLabelMax = yThickMax,
  xLegende = '',
  xLegendePosition = [calcul(xMax * xUnite) + 0.5, 0.5],
  yLegende = '',
  yLegendePosition = [0.5, calcul(yMax * yUnite) + 0.5],
  grille = true,
  grilleDistance = false,
  grilleCouleur = 'black',
  grilleOpacite = 0.5,
  grilleEpaisseur = 1,
  grilleSecondaire = false,
  grilleSecondaireDistance = false,
  grilleSecondaireCouleur = 'gray',
  grilleSecondaireOpacite = 0.3,
  grilleSecondaireEpaisseur = 1,
  grilleX = grille,
  grilleXListe = false,
  grilleXDistance = grilleDistance,
  grilleXMin = false,
  grilleXMax = false,
  grilleXCouleur = grilleCouleur,
  grilleXOpacite = grilleOpacite,
  grilleY = grille,
  grilleYListe = false,
  grilleYDistance = grilleDistance,
  grilleYMin = false,
  grilleYMax = false,
  grilleYCouleur = grilleCouleur,
  grilleYOpacite = grilleOpacite,
  grilleSecondaireX = grilleSecondaire,
  grilleSecondaireXListe = false,
  grilleSecondaireXDistance = grilleSecondaireDistance,
  grilleSecondaireXMin = false,
  grilleSecondaireXMax = false,
  grilleSecondaireXCouleur = grilleSecondaireCouleur,
  grilleSecondaireXOpacite = grilleSecondaireOpacite,
  grilleSecondaireY = grilleSecondaire,
  grilleSecondaireYListe = false,
  grilleSecondaireYDistance = grilleSecondaireDistance,
  grilleSecondaireYMin = false,
  grilleSecondaireYMax = false,
  grilleSecondaireYCouleur = grilleSecondaireCouleur,
  grilleSecondaireYOpacite = grilleSecondaireOpacite
} = {}) {

