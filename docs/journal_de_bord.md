# Journal de bord

# [ Date: 12 Mai 2026]

# Objectif du jour
-Apprendre les exports et imports en ES Modules
-faire des tests
-Comment utiliser les méthodes strings en Javascript, à savoir:
-toUpperCase()
-toLowerCase()
-trim()
-et replace()

# Notion apprise
-toUpperCase() transforme tout le texte en majuscule
-toLowerCase() transforme tout le texte en minuscule
-trim() supprime les espaces au début et à la fin
-replace() remplace une patie du texte par un autre
-dans: .replace(/!/g, '') signifie "remplace tous les pionts d'exclamations par rien"
-! c'est le caractère qu'on veut remplacer
-/ /- indique qu'il s'agit d'une expression régulière 
-g - signifie global
-' '- les valeurs de remplacement

# Difficultés 
-Comprendre regex
-Faire des tests

# Solutions
-rechercher sur le net
-documentation

###########################

# [Date: 16 Mai 2026]

# Objectif du jour
-Apprendre à manipuler JSON en ES Modules

# Notion apprise
-Comment lire, écrire, ajouter, supprimer un utilisateur dans uns fichier JSON.
-La méthode .sort():
-utiliser pour trier les utilisateurs par nom
-Exemple: utilisateurs.sort((a, b) => a.nom.localeCompare(b.nom));
-La méthode localeCompare() en JavaScript compare deux chaînes de 
caractères en tenant compte des règles linguistiques et des accents.

-Etape pour lire le fichier JSON:
1.Lire le fichier (fs.readFile)
2.Convertir le texte en objet JavaScript (JSON.parse)
3.Retourner les données.

-Etape pour écrire dans le fichier JSON:
1.Transformer l'objet JS en JSON (JSON.stringify)
2.Écrire dans le fichier (fs.writeFile).

-Etape pour ajouter un utilisateur:
1.Lire les utilisateurs existants
2.Ajouter le nouvel utilisateur
3.Sauvegarder.

-Etape pour Supprimer un utilisateur:
1.Lire les utilisateurs
2.Filtrer ceux qui ne correspondent pas à l'id
3.Réécrire le fichier.

# Difficultés
-Difficultés à comprendre.

# Solutions
-grafikart.fr
-devdocs.io/node/
-nodejs.org/docs