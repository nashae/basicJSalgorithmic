import readline from "readline-sync";

//const nombre = readline.questionInt("saisissez un nombre pair et divisible par 3 : ")
let nombre = 1;
let essai = 0

while (nombre % 2 !== 0 || nombre % 3 !== 0){
    essai = essai + 1
    console.log("essai numero" + essai)
    nombre = readline.questionInt("saisissez un nombre pair et divisible par 3 : ")
}

console.log("*************\nle nombre " + nombre + " est divisible par 2 et 3")