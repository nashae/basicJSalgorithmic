import readline from "readline-sync";

const rectangle = () => {
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
}

const cercle = () => {
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
}

const principale = () => {
    const menuPrincipal = () => {
        return console.log("--------------\n-----MENU-----\nA : Cercle\nB : Rectangle\nQ : quitter\n--------------")
    }
    let choixMenuPrincipal = ""
    do{
        menuPrincipal()
        const choixMenuPrincipal = readline.question("Quel est votre choix ?")
        switch(choixMenuPrincipal){
            case "a" :
                cercle();
                break;
            case "b" : 
                rectangle();
                break;
            case "q" : 
                console.log("bye")
                return
                break;
            default:
                console.log("erreur de saisie, recommencez !")
        }
    }
    while (choixMenuPrincipal != "q")
}

principale();