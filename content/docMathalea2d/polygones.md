---
title: "Polygones"
niveau:
description: "MathALEA 2D - Les polygones"
---



{{% alea2d "polygones"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>




* `p = polygone(A,B,C,D,E)` // Trace ABCDE
* `c = carre(A,B)` // Trace le carré direct qui a pour côté [AB] et code les 4 angles droits
* `c = carreIndirect(A,B)` // Trace le carré indirect qui a pour côté [AB] et code les 4 angles droits
* `codageCarre(c,color = 'black',mark='X')` // Code les longueurs égales et les angles droits du carré c
* `p = polygoneRegulier(A,B,n)` // Trace le polygone régulier direct à n côtés qui a pour côté [AB]
* `p = polygoneRegulierIndirect(A,B,n)` // Trace le polygone régulier indirect à n côtés qui a pour côté [AB]
* `p = polygoneRegulierParCentreEtRayon(O,r,n)` // Trace le polygone régulier à n côtés et de rayon r


Une fois un polygone nommé `p` créé, on peut accéder à la liste de tous ses sommets, changer les noms des sommets ou les déplacer.

* `p.listePoints` permet d'accéder aux sommets du polygone par ordre de constuction
* `nommePolygone(p,'ABCDEF')` // Nomme tous les sommets de p (dans l'ordre de création des points)
* `deplaceLabel(p,'AB','below')` // Si il y a un point nommé 'A' ou 'B' dans le polygone son nom sera mis en dessous du point

Attention, changer le nom d'un point ne permet pas de changer le nom de la variable de ce point.