import readline from "readline-sync";

let nombre = readline.questionInt("quel nombre voulez vous?")

let resultMoins = "Les 5 nombres precedents sont : "
let resultPlus = "\nles 5 nombres suivants sont : "
for (let i = nombre - 5; i <= nombre + 5 ; i++){
    if(i < nombre){
        resultMoins = resultMoins + "\n" + i
    }
    if(i > nombre){
        resultPlus = resultPlus + "\n" + i
    }
}
console.log(resultMoins, resultPlus);
