import readline from "readline-sync";

const nbre = readline.questionInt("saisissez un nombre :")
const puissance = readline.questionInt('saisissez une puissance')
let result = 1

for(let i = 1; i <= puissance; i++){
    result = result * nbre
}

function pow(x,n){
    return Math.pow(x,n);
}

console.log("le resultat avec pour est : " +result+ "\nle resultat avec fonction est : " +pow(nbre,puissance));