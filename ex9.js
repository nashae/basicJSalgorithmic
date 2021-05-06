let nombre = Math.floor(Math.random() * 19 + 1) ;
let result = "nombre : " +nombre+ "\nLe nombre est divisible par : "
for (let i = 1; i <= nombre; i++){
    if ( nombre % i === 0) {
        result = result + "\n"+i
    }
}
console.log(result);