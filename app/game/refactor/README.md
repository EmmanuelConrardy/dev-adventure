---
backdrop: /images/programmer.png
---

# refactoring

Pour tous systèmes ou produits logiciels, si ils y ont des utilisateurs alors il existe un même besoin, c'est celui de changer.

Améliorer de manière continue la qualité et le design du code, nous permet de pouvoir continuellement le modifier efficacement à moindre effort.

# Pourquoi ?

Pour répondre prenons un peu de recul sur notre produit, avec les hypothèses suivantes :

- 1 - "Si notre produit est utilisé alors des demandes de *changement* devraient emerger."
- 2 - "Des équipes devraient alors s'organiser pour opérer les *changements*."
- 3 - "Chaque nouveaux *changements* rendrait notre système plus rigide c'est à dire qu'il resistera aux futurs changements."

Si ces hypothèse s'avèrent vrai, le refactoring sert à contrebalancer la dernière et permet de passer de l'état de rigidité à un état plus maleable propice aux changements. Ce passage à l'état rigide est tout à fait normal dans le cycle de vie d'un projet en revanche ne pas le rendre maléable est contre-productif pour l'avenir de notre produit et c'est *pourquoi* nous faisont du refactoring.

# Quand ?

Soit on est contributeur, soit on améliore le système, il existe également l'adage "First Make it work, Then make it Better" ce qui signifie en parlant d'une nouvelle fonctionalité, "Dans un premier temps je la fait fonctionner, ensuite je l'améliore".

Le cas du code "Simple" :
Quand nous contribuons en modifiant le comportement de notre produit, ce n'est pas le moment de penser au refactoring mais à la manière la plus simple d'appliquer ce nouveau comportement dans le design courant.
Un fois le nouveau comportement appliqué c'est le moment d'appliquer les technique de refacotring.  

Le cas du code "déjà rigide" :

Il arrive que le code soit dans un état trop rigide, et que nous n'ayons pas le niveau de maitrise pour opérer le changement sereinement.
C'est le moment d'appliquer les techniques de refactoring en amont de la contributions.

Le cas du code "Complexe" :
Quand refactorer, c'est aussi pourvoir répondre quand ne pas refactorer. Quand on aborde du code que l'on ne comprend pas on peut avoir le reflexe de vouloir le modifier, cependant il existe une exception qui demande de l'humilité c'est de se dire que l'on a pas encore le niveau necessaire pour refactorer cette partie du code.

# Où ?

Le cas du code "précieux" :
Comme explicité avant, le refactoring permet le changement. 
Il est donc peu productif d'appliquer ces techniques dans du code qui n'a plus besoin de changer.
Même si le challenge peut être attrayant, il faut concentrer nos efforts de refactoring dans le code à "haute" valeur ajouté, nous l'appelons souvent le code "métier", c'est le code qui nous différentie de nos conccurents.

Le cas du code "qui change souvent" :
Il y a des inégalités dans le code certaines parties récupèrent plus de demandes de changement que d'autre, il peut être interessant si les changements sont pertinent de concentrer nos efforts sur cette partie qui change réguilèrement. Un coup d'oeil dans l'historique du gestionnaire de source peut nous donner des indices.

# Comment ?

Enfin après avoir tant parler des "techniques de refactoring", il est temps de lever le voile.

"Litter pick up" refactoring :
On parlera aussi de la règle du "boy scout" au fur et à mesure que nous allons parcourir le code et améliorer notre compréhension nous allons l'améliorer pour le rendre plus clair après notre passage. Souvent celà consiste a supprimer le code mort, mettre à jour ou supprimer les commentaires obsolète, renommer des variables, extraire des methodes. L'objectif ici est d'aider de futur developpeur à s'approprier le code plus facilement. Nous allons nous aider de la puissance de notre IDE pour opérer la majorité des ces refactoring.

"Safety Net" refactoring :
Quand on reprend du code sans tests une des tâches les plus compliquées c'est de pouvoir le tester rapidement après chaque modification. Nous allons prendre le temps de créer un filet de scurité avant d'opérer des changements. Ce filet s'appele "Snapshot" ou "Golden Master" qui correspond à une batterie de tests qui executeront tous les comportements que nous souhaitons refactorer.
Cela nous permet d'effectuer sereinement des changements dans un grande base de code. celà intervient souvent dans des large Class qu'il convient de changer en une struture de classe chaque partie pourra contenir de nouveaux tests et une fois la structure et les nouveaux tests en place, on peut se détacher de notre filet de sécurité.

"Micro commit" refactoring :
Il arrive de devoir opérer du refactoring sans couverture de test, c'est possible mais cela demande une certaine rigeure, généralement on utilisera notre IDE ou des outil comme Resharper pour le faire car en faisant ainsi nous somme sur de préserver le comportement. Ce qui nous permet de faire des extraction et déplcement de méthodes dans d'autre classe. Ce n'est pas fini en cas d'erreur il faudra pouvoir revenir efficacement à une version antérieur du code, c'est le moment de faire des commits très régulièrement pour se dire sereinement qu'il est possible de revenir en arrière à n'importe quel moment.

"Micado" refactoring :
Cette methode consiste à ne pas s'éparpiller lors de notre refactoring en suivant le workflow suivant
- Goal 
- Experiment
- Visualize
- Undo

Goal : je definis l'objectif de mon refactoring
Experiment : Je fais une serie d'expérimentations qui sont des pré-requis pour atteindre mon objectif
Visualize : 

Je commence par visualiser mon objectif et une première expérimentation
J’essaie d’implémenter cette première expérimentation
Mon code ne compile pas
J’identifie une ou plusieurs nouvelles expérimentations à implémenter au préalable
J’annule mes modifications pour ne pas laisser le code dans un état non livrable
Je visualise la prochaine expérimentation dans mon Mikado Graph
J’essaie d’implémenter une nouvelle expérimentation
J’annule (Revert)
Et ainsi de suite jusqu’à arriver à la dernière expérimentation qui ne nécessite aucun pré-requis, généralement de petite taille, et qui ne représente aucun risque.
Cool ! Je viens d’apporter un changement que je peux commit et potentiellement livrer en prod !
Et après ?

Une fois arrivé tout en haut du Mikado Graph, je me base sur ce dernier pour continuer mon refactoring en suivant le chemin de haut en bas.
À chaque étape implémentée, je résous un pré-requis à l’étape précédente, je commit et je peux donc avancer jusqu’à atteindre mon objectif.


Règle d'or : 
- Ne faire qu'une chose à la fois, soit on refactor, soit on contribue.
- Toujours se poser la question "comment je vais tester mon changement"
- Garder en tête une approche incrementale et baby step

Clean code / litter pick up
TDD (in / out)
filet de sécurité ? tests auto ?
IDE ?
resharper ?
micro-commit ?
Mikado ? https://www.schibsted.pl/blog/zen-of-refactoring/
Golden master 

<Item id="1"/>

<Page url="/4" instructions="" action="Aller faire une autre tâche" condition="none" />

<LastPage/>
