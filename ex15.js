import readline from "readline-sync";

const nbNotesMoinsUn = 4
let chiffres = []
let note = readline.questionInt("saisir une note entre 0 et 20 :")

function isNumberValid(number){
    
    if(chiffres.length >= nbNotesMoinsUn){
        chiffres.push(number);
        console.log(chiffres);
        const moyenne = chiffres.reduce((a, b)=> a + b,0) / (nbNotesMoinsUn + 1);
        console.log("la moyenne est de " + moyenne)
    } else if(number >= 0 && number <= 20){
        chiffres.push(number);
        note = readline.questionInt("saisir une note entre 0 et 20 :")
        isNumberValid(note)
    } else {
        note = readline.questionInt("erreur, saisir une note entre 0 et 20 :")
        isNumberValid(note)
    }

}

isNumberValid(note);