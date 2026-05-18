//Importation du module fs
import fs from "node:fs/promises";

//Définition du chemin du fichier JSON
const FILE_PATH = new URL("../data/utilisateurs.json", import.meta.url);

//fonction pour lire tous les utilsateurs
async function lireUtilisateurs(){
    try{
        //lire le contenu du fichier
        const data = await fs.readFile(FILE_PATH, "utf-8");

        //Transformer le texte json en tableau objet JavaScript
        const utilisateurs = JSON.parse(data);

        //Retourner le tableau 
        return utilisateurs;
    }catch(error){
        if(error.code === "ENOENT"){
        console.log("Le fichier n'existe pas encore. Initialisation d'un tableau vide.");
        return [];
        }
        console.error("Erreur avec le fichier JSON:", error.message);
        //throw error arrête  si le fichier est corrompu.
        throw error;
        
    }
    
}

async function sauvegarderUtilisateurs(nouveauxTableau){
    try{
        //Transformer le tableau objet JS en texte JSON
        const contenuJson = JSON.stringify(nouveauxTableau, null, 2);//null, 2 pour rendre json lisible

        //Ecrire /Écrasement du fichier
        await fs.writeFile(FILE_PATH, contenuJson, "utf-8");

        console.log("Savegarde réussie des utilisateurs dans le fichier JSON!");
        return nouveauxTableau;

    }catch(error){
        console.log("Erreur lors de l'écriture du fichier:", error.message);
        return false;
    }
}

//Fonction exportées

//01-Ajouter un utilisateur
export async function ajouterUtilisateur(nouvelUtilisateur) {
    //Lire dabort les utilisateurs existants
    const utilisateurs = await lireUtilisateurs();

    //Générer un ID unique pour le nouvel utilisateur
    nouvelUtilisateur.id = Date.now();

    //Ajouter le nouvel utilisateur au tableau
    utilisateurs.push(nouvelUtilisateur);

    //sauvegarder le tableau mis à jour dans le fichier JSON
    await fs.writeFile(FILE_PATH, JSON.stringify(utilisateurs, null, 2),"utf-8");

    //Retourner le nouvel utilisateur ajouté
    return nouvelUtilisateur;
    
}

//02-supprimer un utilisateur
export async function supprimerUtilisateur(idAsupprimer){
    //lire dabort les utilisateurs existants
    const utilisateurs = await lireUtilisateurs();

    //Filtrer le tableau pour supprimer l'utilisateur avec l'ID spécifié
    const listeFiltree = utilisateurs.filter(utilisateurs  => utilisateurs.id !== idAsupprimer);

    //sauvegarder le tableau mis à jour dans le fichier JSON
    await fs.writeFile(FILE_PATH, JSON.stringify(listeFiltree, null, 2),"utf-8");

    //Retouner la liste filtree
    return listeFiltree;

}

//03-Trier les utilisateurs par nom
export function trierUtilisateursParNom(utilisateurs){
    //Récupérer les utilisateurs existants
    const utilisateurs = await lireUtilisateurs();

    //Trier le tableau par nom
    utilisateurs.sort((a, b) => a.nom.localeCompare(b.nom));

    //Enregistrer les modifications
    await fs.writeFile(FILE_PATH, JSON.stringify(utilisateurs, null,2), "utf-8");
    console.log("Liste des utilisateurs triés par nom!");

    //Retourner le tableau trié
    return utilisateurs;
}