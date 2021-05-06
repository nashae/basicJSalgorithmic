import readline from 'readline-sync';

const nbMarches = readline.questionInt("combien voulez vous de marche ? ")
const calculMarche = (nbMarches) => {
    let result = ""
    let espace = " "
    
    for(let i = nbMarches; i >= 1; i--){
        result += espace.repeat(i * 2) + "_/\n"
    }
    return result;
}
console.log(calculMarche(nbMarches));