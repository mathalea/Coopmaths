---
title: "Programmation Logo"
niveau:
description: "MathALEA 2D - Programmer comme en Logo "
---


{{% alea2d "lutin"  %}} 

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

À la manière du Logo, de [GeoTortue](http://geotortue.free.fr) (de l'IREM de Paris-Nord) ou du module stylo de Scratch, il est possible de programmer des tracés "au stylo".

* `baisseCrayon()` // Met le stylo en position d'écriture
* `leveCrayon()` // Le stylo n'écrira plus
* `avance(100)` // Le lutin avance de 100 unités (ce qui correspond par défaut à 2 cm) suivant son orientation actuelle
* `tournerG(a)` // Tourne de a° vers la gauche (angle dans le sens direct)
* `tournerD(a)` // Tourne de a° vers la droite (angle dans le sens des aiguilles d'une montre)
* `orienter(a)` // L'angle par rapport au repère est de a° (0° correspondant à la droite, 90° au haut, 180° à la gauche et 270° au bas de la fenêtre)
* `allerA(x,y)` // Déplace le lutin au point de coordonnées (x,y) (par défaut, il faut diviser par 50 pour revenir au repère de base de MathALEA2D)
* `mettrexA(x)` // Change l'abscisse du lutin donc fait un déplacement horizontal
* `mettreyA(y)` // Change l'ordonnée du lutin donc fait un déplacement vertical
* `ajouterAx(x)` // Augmente de x l'abscisse du lutin
* `ajouterAy(y)` // Augmente de y l'ordonnée du lutin
* `monLutin.color = 'blue'` // Change la couleur du tracé
* `monLutin.pointilles = true` // Les tracés sont faits en pointillés
* `monLutin.opacite = .5` // Change l'opacité des tracés

Il est possible de créer d'autres lutins. Pour donner des ordres à un lutin, il faut ajouter un dernier paramètre aux différentes fonctions qui est le nom de la variable de ce nouveau lutin.

* `let lutin2 = creerLutin()`
* `baisserCrayon(lutin2)`
* `avance(100,lutin2)` 

Une variable globale `unitesLutinParCm` est par défaut réglée à 50. Donc un déplacement de 50 pas du lutin correspond à 1 cm.

Une variable globale `pixelsParCm` est par défaut réglée à 20. Donc un cm du repère est représenté dans le navigateur par 20 pixels.

Il est évidemment possible de modifier ces variables dans l'éditeur.

Dans une prochaine version, il est prévu d'animer ces tracés et le déplacement du lutin.


