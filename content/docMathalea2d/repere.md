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