import readline from "readline-sync";

const nbAFacto = readline.questionInt("Quelle est le factorielle voulue ? ")

const calculViaFor = (nombre) => {
    let result = 1
    for (let i = 1; i <= nombre; i++){
        result = i * result
    }
    return "version boucle :\nla factorielle de " + nombre + " = " + result + "\n";
}

const calculRecursif = (nombre) =>{
    if(nombre <= 1){
        return 1
    } else {
        return nombre * calculRecursif(nombre - 1) 
    }
}

console.log(calculViaFor(nbAFacto) + "version recursive :\nla factorielle de " + nbAFacto + " = " + calculRecursif(nbAFacto));