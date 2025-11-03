---
layout: documentation
hide_hero: false
doc_header: false
component_toc: true
hero_image: Assembly 1.png
hero_darken: true
title: Le tournoi
subtitle: Règles et fonctionnement

---

## Règles du jeu

Chaque **essai** comprend **5 tirs**, à répartir librement entre **les tours à détruire** — pour marquer des points — et **les anneaux boosters** — pour multiplier le total.  
Les équipes doivent donc **trouver le bon équilibre entre force et précision** !

---

{% include 3d-model.html model="BOARDTEXT.glb" poster="poster.webp" fullscreen_modal=true %}

---

### Les tours

Chaque **tour détruite** ajoute des **points au total** :

<span style="color:green; font-weight:bold;">Tours vertes</span> → **+ 3 pts** *(3 sur le terrain)*  
<span style="color:gold; font-weight:bold;">Tours jaunes</span> → **+ 5 pts** *(4 sur le terrain)*  
<span style="color:red; font-weight:bold;">Tours rouges</span> → **+ 10 pts** *(2 sur le terrain)*





---

### Les anneaux boosters

Trois **anneaux** sont disposés sur le terrain.  
Franchir un anneau active un **multiplicateur** appliqué au score total à la fin du match.

- **Anneau central ×1.5** → *diamètre 50 cm*  
- **Deux anneaux latéraux ×2** → *diamètre 35 cm chacun*

Chaque anneau **ne peut activer son bonus qu’une seule fois** par essai,  
même si plusieurs balles y passent.

---

### Calcul du score

Le score est calculé à la **fin du match**, en observant l'état du plateau. 

**Score total = (somme des points des tours détruites) × (somme des multiplicateurs des boosters activés)**

---

### Exemple de match

À la fin du match :

- Une <span style="color:red; font-weight:bold;">tour rouge</span> (+ 10 pts) est détruite  
- Une <span style="color:gold; font-weight:bold;">tour jaune</span> ( + 5 pts) est détruite  
- L'**anneau booster ×1.5** a été franchi  
- Les **deux anneaux boosters ×2** ont été franchis  

➡️ **Score final = (10 + 5) × (1.5 + 2 + 2) = 82,5 points**

## 2. Calculateur de score

{% include calculator-score-medieval-challenge.html %}

