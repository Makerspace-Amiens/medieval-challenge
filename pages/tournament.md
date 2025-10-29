---
layout: documentation
hide_hero: false
doc_header: false
component_toc: true
hero_image: isocontours.png
hero_darken: true
title: Règles du tournoi
subtitle: A venir...
---

![alt text](<Assembly 1.png>)

{% include_relative tournament/index.html %}

## 1. Calculer son score

Chaque équipe dispose de 5 balles pour réaliser ses tirs.
Chaque balle peut être utilisée soit pour franchir un anneau multiplicateur, soit pour détruire une tour.
Les équipes doivent donc trouver le bon équilibre entre viser des tours pour accumuler des points et franchir des anneaux pour multiplier leur score final.

### Les anneaux multiplicateurs

Chaque anneau franchi ajoute un facteur multiplicateur au total.
Les anneaux ne peuvent être utilisés qu’une seule fois chacun pendant la manche.

- Anneau ×1.5 : 1 tir possible
- Anneaux ×2 : 2 tirs possibles (un par anneau)

👉 Maximum : 3 balles peuvent être tirées dans des anneaux

### Les tours

Chaque tour détruite ajoute un certain nombre de points à la somme de base :

- Tours de 10 points (2 tours sur le terrain)
- Tours de 5 points (4 tours sur le terrain)
- Tours de 3 points (3 tours sur le terrain)

👉 Les balles restantes (non utilisées pour les anneaux) peuvent être tirées sur les tours.

### Calcul du score

Le score final est calculé de la manière suivante :

Score total = (somme des points des tours détruites) × (somme des multiplicateurs des anneaux franchis)

### Exemple

Une équipe tire :

- 1 balle dans l’anneau ×1.5
- 2 balles dans les anneaux ×2
- 1 balle dans une tour de 10 points
- 1 balle dans une tour de 5 points

**Score =** (10 + 5) × (1.5 + 2 + 2) = **82,5 points**


## 2. Calculateur de score

{% include calculator-score-medieval-challenge.html %}