import readline from 'readline-sync';

const nb1 = readline.questionInt('nombre 1 : ')
const nb2 = readline.questionInt('nombre 2 : ')
const nb3 = readline.questionInt('nombre 3 : ')

function plusgrand(a,b,c){
    if(a >= b && a >= c){
        return a
    }
    if(b >= a && b >= c) {
        return b
    }
    if(c >= a && c >= b) {
        return c
    }
}

function pluspetit(a,b,c){
    if(a <= b && a <= c){
        return a
    }
    if(b <= a && b <= c) {
        return b
    }
    if(c <= a && c <= b) {
        return c
    }
}

const resultplusgrand = plusgrand(nb1,nb2,nb3)
const resultpluspetit = pluspetit(nb1,nb2,nb3)
console.log(resultpluspetit + " est le plus petit nombre \n" + resultplusgrand + " est le plus grand")