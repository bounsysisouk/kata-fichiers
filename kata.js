//-----------MODULES----------\\

import { writeFileSync, readFileSync } from "fs"
import { join } from "path"
import { homedir } from "os"

//-----------EXERCICES 1-----------\\

/* Créer le fichier .txt puis écris dessus */
writeFileSync("bonjour.txt", "Bonjour Ada !")
/* lis le fichier dans le terminal */
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