import readline from "readline-sync";

let listUser = [['tya', 'test1', "admin"], ['milo', "test2", "user"], ['lili', 'test3', "user"]]

const displayAllUsers = (tab) => {
    let result = ""
    for (let i = 0; i < tab.length ; i++){
        result += "*******************\nlogin de l'utilisateur : " +tab[i][0]+ "\nMot de passe : " + tab[i][1] + "\nRole de l'utilisateur : " +tab[i][2]+ "\n*******************"
    }
    console.log("*******************\n********DEBUT******" +result+ "\n*********FIN*******")
}

const addUser = (tab) => {
    const listRole = ['admin', 'user', 'visiteur']
    const ident = readline.question("saisir un login :")
    const mdp = readline.question("saisir un mdp :")
    let role = readline.question("saisir un role :")
    if(!listRole.includes(role)){
        console.log("erreur de saisie")
        addUser(tab)
    }else {
        return tab.push([ident,mdp,role])
    }
}



const program = (listUser) => {
    let choix = ""
    do{
        choix = readline.questionInt("1: afficher les utilisateurs\n2: creer un utilisateur\n9: quitter\n")
        switch(choix){
            case 1:
                displayAllUsers(listUser)
                break
            case 2:
                addUser(listUser)
                break
            case 9:
                console.log("BYE")
                break
            default:
                console.log("saisie incorrecte, recommencez!")
        }

    } while (choix !== 9)
}


program(listUser);
