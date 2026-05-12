//1 - Exports nommés


export const APP_MESSAGES = {
    welcome :"Bienvenue dans mon application d'apprentissage Nodejs et Javascript!",
    goodbaye : "Merci d'avoir visité mon programme. À bientôt et portez-vous bien!",
    error : "Une erreur inatendue est survenue.",
    loading : "Chargement des données en cours..."
};

//Authentification message
export const AUTH_MESSAGES = {
    success : "Connexion réussie",
    echec : "Identifiants incorrects, veuillez réessayer.",
    exiger : "Le nom d'utilisateur et le mot de passe sont obligatoires."
};

// Mettre en majuscule un texte
export const majuscule = (texte) => texte.toUpperCase();

//Mettre en minuscule le texte
export const minuscule = (texte)  => texte.toLowerCase();

//enlever les espace dans un texte
export const espace = (texte)  => texte.trim();

//chaîner les méthodes
export const prepareTexte = (texte) => {
    return texte
    .trim()
    .toLowerCase()
    .replace(/!/g, '');
};


