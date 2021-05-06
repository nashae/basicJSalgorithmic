import readline from "readline-sync";

const listUser = [['tya', 'test1', "admin"], ['milo', "test2", "user"], ['lili', 'test3', "user"]]

const inputUser = () => {
    const login = readline.question('saisissez votre login :')
    const mdp = readline.question('saisissez votre mdp :')
    return [login, mdp]
}

const program = (tentative = 1) => {
    let user = inputUser()
    let result = 0;
    let admin = 0
    
    listUser.forEach((i) => {
        if(i[0] === user[0] && i[1] === user[1] && i[2] === "admin"){
            result = result + 1
            admin = admin + 1 
        } else if (i[0] === user[0] && i[1] === user[1] && i[2] === "user"){
            result = result + 1
            console.log(admin)
        }
    });
    if(result > 0){
        if(admin >= 1 ){
            console.log("vous etes connecté en tant qu'admin")
        } else {
            console.log("vous etes connecté en tant qu'user")
        }
    } else {
        console.log("faux");
        if(tentative <= 3){
            console.log("encore " + (3 - tentative) + " essais")
            program(tentative + 1);
        }else{
            console.log("nombre de tentatives depassées, bye")
        }
    }

}

program();