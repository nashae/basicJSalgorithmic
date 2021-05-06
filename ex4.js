const nom = "john doe";
const age = "23";
const sexe = true 
let afficheAge = "";
let afficheSexe = ""

if (sexe === true) {
    afficheSexe = "homme"
} else {
    afficheSexexe = "femme"
}

if(age > 18){
    afficheAge = "majeur"
} else {
    afficheAge = "mineur"
}

console.log("bonjour " + nom + "\nvous etes un " + afficheSexe + "\nvous etes " + afficheAge )