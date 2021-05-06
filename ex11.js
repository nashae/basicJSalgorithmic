import readline from "readline-sync";

const prenom = readline.question("saisissez votre prenom :")
const nom = readline.question("saisissez votre nom :")
const adresse = readline.question('saisissez votre adresse :')
const codePostal = readline.questionInt('saisissez votre code postal :')
const ville = readline.question('saisissez votre ville : ')

const result = "**********************\n" + prenom + ' ' + nom + ' \n' + adresse + '\n' + codePostal + ' ' + ville + '\nA bientôt\n**********************' 
console.log(result);
