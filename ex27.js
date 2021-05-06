import readline from "readline-sync";


const menu = () => {
    console.log("-------------\n----MENU-----\n1 : Périmètre\n2 : Aire\n-------------");
}

const calculPerimetre = (radius) => {
    const result = Math.round(2 * Math.PI * radius)
    return "le perimetre d'un cercle de rayon " + radius + " est de " + result;
}

const calculAire = (radius) => {
    const result = Math.round(Math.PI * radius * radius)
    return "l'aire d'un cercle de rayon " + radius + " est de " + result;
}

const rayon = readline.questionInt("quel est le rayon du cercle ? ");
menu()

let choix = 0
do{
    choix = readline.questionInt("quel est votre choix ? ");
} while (choix !== 1 && choix !== 2)


if(choix === 1){
    console.log(calculPerimetre(rayon));
} else {
    console.log(calculAire(rayon));
}