import readline from "readline-sync";

const randomCarac = () => {
    let result = "";
    const letter = Math.floor(Math.random() * 26 + 1);
    switch (letter) {
        case 1:
            result = "a";
            break;
        case 2:
            result = "b";
            break;
        case 3:
            result = "C";
            break;
        case 4:
            result = "d";
            break;
        case 5:
            result = "e";
            break;
        case 6:
            result = "f";
            break;
        case 7:
            result = "g";
            break;
        case 8:
            result = "h";
            break;
        case 9:
            result = "i";
            break;
        case 10:
            result = "j";
            break;
        case 11:
            result = "k";
            break;
        case 12:
            result = "l";
            break;
        case 13:
            result = "m";
            break;
        case 14:
            result = "n";
            break;
        case 15:
            result = "o";
            break;
        case 16:
            result = "p";
            break;
        case 17:
            result = "q";
            break;
        case 18:
            result = "r";
            break;
        case 19:
            result = "s";
            break;
        case 20:
            result = "t";
            break;
        case 21:
            result = "u";
            break;
        case 22:
            result = "v";
            break;
        case 23:
            result = "w";
            break;
        case 24:
            result = "x";
            break;
        case 25:
            result = "y";
            break;
        case 26:
            result = "z";
            break;
        default:
            console.log("erreur")
    }
    return result
};

const jeu = () => {
    const letter = randomCarac()
    let result = ""
    let motZero = ""
    do{
        const mot = readline.question("saisir un mot commençant par un : \"" + letter + "\" :")
        motZero = mot[0]
        console.log(mot)
        motZero.toLowerCase() === letter ? result = "Parfait" : result = "le mot saisi ne commence pas par un \"" +letter+ "\", recommencez"
        console.log(result);
    } while (motZero.toLowerCase() !== letter)
}
jeu();