import readline from "readline-sync";

const tailleDuCarre = readline.questionInt("quelle taille voulez-vous? ")

const calculcarre = (taille) => {
    let etoile = "*"
    let space = " "
    let result = ""
    for(let i = 1 ; i <= taille ; i++){
        if(i >= 2 && i <= taille - 1){
            result += "**" + space.repeat(taille * 2 - 4) + "**\n"
        } else {
            result += etoile.repeat(taille * 2) +"\n"
        }
    }
    return result;
}

console.log(calculcarre(tailleDuCarre));