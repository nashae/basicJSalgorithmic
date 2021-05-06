import readline from "readline-sync";

const nbreADeviner = Math.floor(Math.random() *100 + 1);
let nbrSaisi = 0
let essai = 0
console.log("DEVINEZ LE NOMBRE CHOISI PAR L'ORDINATEUR ENTRE 0 et 100 \n******************");

do {
    essai = essai + 1
    console.log("numero de l'essai : " + essai)
    nbrSaisi = readline.questionInt("Saisir un nombre : ")
    if (nbrSaisi < nbreADeviner){
        console.log("trop petit\n***********")
    } else if(nbrSaisi > nbreADeviner){
        console.log("trop grand\n***********")
    }
} while(nbrSaisi !== nbreADeviner)
console.log("victoire! le nombre était" + nbreADeviner)
