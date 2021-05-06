import readline from 'readline-sync';

const nombre = readline.questionInt('saisir un nombre : ')

function convertisseur(nb){
    let result = ""
    switch(nb){
        case(1):
            result = "I";
            break;
        case(2):
            result = "II";
            break;
        case(3):
            result = "III";
            break;
        case(4):
            result = "IV";
            break;
        case(5):
            result = "V";
            break;
        case(6):
            result = "VI";
            break;
        case(7):
            result = "VII";
            break;
        case(8):
            result = "VIII";
            break;
        case(9):
            result = "IX";
            break;
        case(10):
            result = "X";
            break;
        default:
            console.log("erreur");
    }
    console.log(result);
    return result
}

const nombreRomain = convertisseur(nombre);
console.log("nombre arabe choisi : "+ nombre +"\nEquivalent nombre romain : " + nombreRomain)