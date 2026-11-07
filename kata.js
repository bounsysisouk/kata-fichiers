//-----------MODULES----------\\

import { writeFileSync, readFileSync } from "fs"
import { join } from "path"
import { homedir } from "os"

//-----------EXERCICES 1-----------\\

/* Créer le fichier .txt puis écris dessus */
writeFileSync("bonjour.txt", "Bonjour Ada !")
/* lis le fichier et stock dans la constante lire */
const lire = readFileSync("bonjour.txt", "utf-8")
/* Affiche dans le terminal */ 
console.log(lire)

//-----------EXERCICES 2------------\\

/* écraser (réecris par dessus l'ancien) le texte */
writeFileSync("bonjour.txt", "Au revoir Ada !") 

//-----------EXERCICE 3------------\\

const courses = ["pain", "lait", "pommes"]
/* rassemble la chaine et écris sur plusieurs ligne */
writeFileSync("courses.txt", courses.join("\n"))

//-----------EXERCICES 4-------------\\

/* Déclaration de l'objet */
const profil = {
    prenom: "Ada",
    langages: ["HTML", "CSS", "JavaScript"],
    debutante: true
}
/* Transforme en chaine de cararctère */
writeFileSync("profil.json", JSON.stringify(profil, null, 2))   // 2 pour l'espacement de l'indentation
/* lis le fichier et stock dans la constante contenuJSON */ 
const contenuJSON = readFileSync("profil.json", "utf-8")
/* Parser (Transforme en objet utilisable par js) et stock dans la constante profilLU */
const profilLu = JSON.parse(contenuJSON)
/* Affiche sur le terminal */
console.log(profilLu.prenom)
console.log(profilLu.langages.length)

//-------------EXERCICES 5------------\\

/* Donnees fournies */
const taches = [
    { nom: "lire le cours", faite: true },
    { nom: "finir le TP", faite: true },
    { nom: "relire mes notes", faite: false },
]

/* Chemin absolu */
const cheminBilan = join(homedir(), "ada-tech", "bloc1", "kata", "S06", "kata-fichiers", "bilan.txt")

/* <----------FONCTION-------------> */
function ecrireBilan(chemin, taches) {
    // instructions pour la fonction
    if (taches.length === 0) {
    writeFileSync(chemin, "Aucune tâche aujourd'hui")
    return
    }
    // ajoute date du jours 
    const date = new Date().toLocaleDateString("fr-FR")

    const lignes = taches.map((tache) => {
        let emoji
        if (tache.faite === true) {
            emoji = "✅"
        } else {
            emoji = "❌"    
        }
        /* retourne un emoji et le nom de la tache */ 
        return `${emoji} ${tache.nom}`
    })
    // Condition 
    /* filtre la condition true */
    const tachesFaites = taches.filter((tache) => {
        return tache.faite === true
    })
    /* pourcentage */
    const pourcentage = Math.round((tachesFaites.length / taches.length) * 100)
        /* date + retoune le detail des taches puis une ligne vide puis le pourcentage */
        const contenuBilan = "Bilan du " + date + "\n\n" + lignes.join("\n") + "\n\n" + `Tâches faites : ${pourcentage} %`
        
        writeFileSync(chemin, contenuBilan)
}
ecrireBilan(cheminBilan, taches)



/*==================================================================================================

                   QUESTION DE RECULE
==================================================================================================

Question 1
Que se passe-t-il si tu relances ton script plusieurs fois ? Combien de fichiers courses.txt obtiens-tu, et que contiennent-ils ?

writeFileSync() écrase le contenu existant à chaque nouvelle écriture, On a donc que un fichier avec le meme donnees.

Question 2
Essaie writeFileSync("test.txt", { a: 1 }), sans JSON.stringify. 
Que dit Node ? Qu'est-ce que ça t'apprend sur ce qu'un fichier peut contenir ?

Pour écrire un objet JavaScript dans un fichier,
je dois le convertir en chaîne de caractères avec JSON.stringify().

Question 3
Dans quel cas un chemin relatif comme "bilan.txt" écrit-il le fichier ailleurs que là où tu l'attendais ?


Un chemin relatif dépend du répertoire de travail courant.
Si je lance le script depuis un autre dossier, le fichier
peut être créé ailleurs que prévu. */