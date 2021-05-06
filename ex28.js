import readline from "readline-sync";


const menu = () => {
    console.log("-------------\n----MENU-----\n1 : Périmètre\n2 : Aire\n-------------");
}

const calculPerimetre = (largeur, longueur) => {
    const result = (longueur + largeur) * 2
    return "le perimetre d'un rectangle de largeur " + largeur + " et de longueur " + longueur + " est de " + result;
}

const calculAire = (largeur, longueur) => {
    const result = largeur * longueur
    return "l'aire d'un rectangle de largeur " + largeur + " et de longueur " + longueur + " est de " + result;
}

const inputLargeur = readline.questionInt("quel est la largeur du rectangle ? ");
const inputLongueur = readline.questionInt('quelle est la longueur du rectangle ? ')
menu()

let choix = 0
do{
    choix = readline.questionInt("quel est votre choix ? ");
} while (choix !== 1 && choix !== 2)


if(choix === 1){
    console.log(calculPerimetre(inputLargeur, inputLongueur));
} else {
    console.log(calculAire(inputLargeur, inputLongueur));
}