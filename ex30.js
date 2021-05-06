const tableau = [12,14,16,18,10,11,10,13]
const newTab = tableau.map(valeur => valeur % 2 != 0 ? valeur + 1 : valeur)

const moyenne =(tab) =>{
    let sum = 0
    for(let i = 0; i < tab.length; i++){
        sum = sum + tab[i]
    }
    console.log("somme" + sum)
    const result = sum / tab.length
    return "la moyenne est de : " + result;
}

console.log(moyenne(newTab));
