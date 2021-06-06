---
title: "Droites remarquables"
niveau:
description: "MathALEA 2D - Les droites remarquables"
---



<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

{{% alea2d "tableau"  %}}

`tableau` permet de créer un tableau et d'y ajouter des flèches. 

Voici les paramètres par défaut : 

```
tableau({
  largeurTitre: 7, // Largeur de la première colonne
  largeur: 3, // Largeur des autres colonnes
  hauteur: 2.5, // Hauteur d'une ligne
  nbColonnes: 3,
  origine: point(0, 0),
  ligne1: [], // Liste de formules LaTeX de gauche à droite
  ligne2: [],
  flecheHaut: [], // [[1, 2, '\\times 6,4', 3], [2, 3, '\\div 6']]
  // [indice de départ, indice arrivée, texte]
  flecheBas: [],
  flecheDroite: false, // à remplacer par un string
  flecheDroiteSens: 'bas'
})
```

- Le nombre de colonnes sera déterminé par le plus grand nombre entre la longueur `ligne1`, celle de `ligne2` ou le paramètre `nbColonnes`.
- Attention, les lignes sont par défaut en LaTeX donc si on veut écrire du texte, il faut écrire `\\text{Mon titre}`.