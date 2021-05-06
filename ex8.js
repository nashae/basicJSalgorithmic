let multiplicateur = Math.floor(Math.random() * 9 + 1) ;
let result = ""
for (let i = 1; i <=10; i++){
    result = result + "\n" + i + "*" + multiplicateur + "=" + (i * multiplicateur)
}
console.log(result)
