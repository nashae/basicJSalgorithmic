import readline from "readline-sync";

const encode = (txt) => {
    let result = ""
    for (let i = 0; i < txt.length ; i++){
        switch(txt[i].toLowerCase() ){
            case 'a':
                result = result + ".-"
                break
            case 'b':
                result = result + "-..."
                break
            case ' ':
                result = result + " "
                break
            default:
                console.log('erreur')
        }
    }
    console.log(result)
}

const decode = () => {
    console.log('bonne formation')
}

const program = () => {
    const menu = "*********\n1 : encode\n2 : decode\n0 : quitter\n*****"
    console.log(menu)
    let choix = 0
    do{
        choix = readline.questionInt("quel est votre choix ? ")
        switch(choix){
            case 1:
                const texte = readline.question("saisir le message : ")
                encode(texte)
                console.log(menu)
                break;
            case 2:
                const morse = readline.question("saisir le message : ")
                decode(morse)
                console.log(menu)
                break;
            case 0: 
                console.log("bye")
                break;
            default:
                console.log("choix invalide")
                console.log(menu)
        } 
    } while (choix !== 0);
}

program();