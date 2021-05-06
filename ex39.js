import readline from "readline-sync";

const converter = (txt) => {
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

const texte = readline.question("saisir le message : ")
converter(texte);
