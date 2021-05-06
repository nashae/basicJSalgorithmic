import readline from 'readline-sync';

let euro = 1
euro = readline.questionInt("saisir la valeur en euro : ")
const dollars = euro * 122/100 
const roubles = euro * 9114 / 100 
const yuans = euro * 789 / 100 
const livres = euro * 89 / 100 

let response = readline.question("***********\ndollars\nroubles\nyuans\nlivres\n\nSaisir la devise souhaitée :")
let symbol = "" 
let result = 0
switch(response){
    case("dollars"):
        result = dollars
        symbol = "$"
        break 
    case("roubles"):
        result = roubles 
        symbol = "RUB"
        break
    case('yuans'):
        result = yuans 
        symbol = "CNY"
        break 
    case('livres'):
        result = livres 
        symbol = "GBP"
        break
    default:
        console.log('erreur');
}
console.log(euro + "€ = " + result, symbol )