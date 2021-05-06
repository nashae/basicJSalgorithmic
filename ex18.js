import readline from 'readline-sync';

let choixLangue = ""  
let bonjour = ""

do{
    choixLangue = readline.question("choisir la langue : AL / EN / ES / PO / IT : ")
} while(choixLangue != "AL" && choixLangue != "EN" && choixLangue != "ES" && choixLangue != "PO" && choixLangue != "IT")

const sayHello = (choice) =>{
    let result = ""
    switch(choice){
        case "AL":
            result = "hallo";
            break;
        case "EN":
            result = "hello";
            break;
        case "ES":
            result = "buenas dias";
            break;
        case "PO":
            result = "ola";
            break;
        case "IT":
            result = "buongiorno";
            break;
        default:
            console.log('erreur')
    }
    return result;
}

/* if(choixLangue === "AL" || "EN" || "ES" || "PO" || "IT"){
    bonjour = sayHello(choixLangue)
} else {
    choixLangue = readline.question(" choisir la langue : AL / EN / ES / PO / IT : ")
} */

console.log(sayHello(choixLangue));
