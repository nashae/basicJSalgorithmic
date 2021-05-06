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

const searchUserIndex = (listUser, user) => {
    for(let i = 0; i < listUser.length; i++){
        if(listUser[i][0] === user){
            return i
        }
    }
    return -1
}


const isUserExists = (listUser) => {
    let name = "";
    let indiceTab = -1
    do{
        name = readline.question("Saisir le nom de l'utilisateur : ")
        indiceTab = searchUserIndex(listUser, name)
        if(indiceTab === -1){
            console.log("saisie incorrecte, recommencez")
        }
    } while(indiceTab === -1)
    return indiceTab;
}

const updateUser = (listUser) => {
    const indiceUser = isUserExists(listUser);
    listUser[indiceUser][0] = readline.question('saisir un nouveau nom :')
    listUser[indiceUser][1] = readline.question('saisir un nouveau mdp :')
    let role = ""
    const listRole = ['admin', 'user', 'visiteur']
    do{
        const role = readline.question('choisissez un role :')
        if(!listRole.includes(role)){
            console.log('erreur de saisie , choisissez parmi admin/user/visiteur')
        }
    } while(!listRole.includes(role))
    listUser[indiceUser][2] = role
}

const deleteUser = (listUser) => {
    displayAllUsers(listUser);
    let indiceUser = isUserExists(listUser)
    for(let i = indiceUser; i < listUser.length; i++){
        listUser[i] = listUser[i+1];
    }
    listUser.pop();
    console.log(listUser)
}

const program = (listUser) => {
    let choix = ""
    do{
        choix = readline.questionInt("1: afficher les utilisateurs\n2: creer un utilisateur\n3: modifier un utilisateur\n4: supprimer un utilisateur\n9: quitter\n")
        switch(choix){
            case 1:
                displayAllUsers(listUser)
                break
            case 2:
                addUser(listUser)
                break
            case 3:
                updateUser(listUser)
                break
            case 4:
                deleteUser(listUser)
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
