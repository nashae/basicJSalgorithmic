import readline from 'readline-sync';

let selectedProduct = readline.questionInt("voici la liste des produits :\n1 - TV : 400€\n2 - Ordinateur : 700€\n3 - Telephone : 200€\n4 - Portable : 900€\n Quel produit voulez-vous acheter ? ")
while(selectedProduct < 1 || selectedProduct > 4){
    selectedProduct = readline.questionInt("Produit inexistant, recommencez\nQuel produit voulez-vous acheter ? ")
}
let howManyProducts = readline.questionInt("combien de produits voulez vous ? ")
while(howManyProducts < 1){
    howManyProducts = readline.questionInt("veuillez selectionner un nombre de produit superieur ou egal à 1 : ")
}

let priceProduct = 0
switch(selectedProduct){
    case 1:
        priceProduct = 400
        break
    case 2:
        priceProduct = 700
        break
    case 3:
        priceProduct = 200
        break
    case 4:
        priceProduct = 900
        break
    default:
        console.log('erreur', priceProduct, selectedProduct)
}
const HtPrice = priceProduct * howManyProducts
const TtcPrice = HtPrice * 120 / 100
console.log("Total HT : " + HtPrice + " euros\nTotal TTC : " + TtcPrice + " euros")