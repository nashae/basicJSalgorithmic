import readline from "readline-sync";

const listUser = [['tya', 'test1'], ['milo', "test2"], ['lili', 'test3']]

const inputUser = () => {
    const login = readline.question('saisissez votre login :')
    const mdp = readline.question('saisissez votre mdp :')
    return [login, mdp]
}

const program = () => {
    let user = inputUser()
    let result = 0;
    listUser.forEach((i) => {
        if(i[0] === user[0] && i[1] === user[1]){
            result = result + 1
        }
    });
    if(result > 0){
        console.log("vrai")
    } else {
        console.log("faux");
        program();
    }

}

program();