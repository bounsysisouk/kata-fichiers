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
/* écrire sur plusieurs ligne */
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

