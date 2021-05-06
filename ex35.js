import readline from "readline-sync";

const listUser = [['tya', 'test1', "admin"], ['milo', "test2", "user"], ['lili', 'test3', "user"]]


const displayOneUser = (tab) => {
    
    const user = readline.questionInt("numero de l'utilisateur : ")
    const result = "**********************************\n*****debut de l'affichage*********\n**********************************\nlogin de l'utilisateur : " +tab[user-1][0]+ "\nMot de passe : " + tab[user-1][1] + "\nRole de l'utilisateur : " + tab[user-1][2] +"\n************fin**************"
    console.log(result)
}

const displayAllUsers = (tab) => {
    let result = ""
    for (let i = 0; i < tab.length ; i++){
        result += "*******************\nlogin de l'utilisateur : " +tab[i][0]+ "\nMot de passe : " + tab[i][1] + "\nRole de l'utilisateur : " +tab[i][2]+ "\n*******************"
    }
    console.log("*******************\n********DEBUT******" +result+ "\n*********FIN*******")
}

displayAllUsers(listUser)