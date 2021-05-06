import readline from 'readline-sync';

const nb1 = Math.floor(Math.random() * 100 + 1)
const nb2 = Math.floor(Math.random() * 100 + 1)
let result = 0
let inputClient = 0
const operateur = Math.floor(Math.random() * 4 + 1)
switch(operateur){
    case 1:
        result = nb1 + nb2
        inputClient = readline.questionInt("quel est le resultat du calcul suivant :\n" + nb1 + " + " + nb2 + " =\nQuelle est votre réponse ? ")
        break 
    case 2:
        result = nb1 - nb2
        inputClient = readline.questionInt("quel est le resultat du calcul suivant :\n" + nb1 + " - " + nb2 + " =\nQuelle est votre réponse ? ")
        break
    case 3:
        result = nb1 * nb2
        inputClient = readline.questionInt("quel est le resultat du calcul suivant :\n" + nb1 + " * " + nb2 + " =\nQuelle est votre réponse ? ")
        break
    case 4:
        result = Math.round(nb1 / nb2)
        inputClient = readline.questionInt("quel est le resultat du calcul suivant :\n" + nb1 + " / " + nb2 + " =\nQuelle est votre réponse ? ")
        break
    default:
        console.log("erreur")
}
while(inputClient !== result){
    console.log(inputClient, result)
    inputClient = readline.questionInt("mauvaise réponse, réessayer : ")
}
console.log("bonne réponse, bravo !!")