let prixHtc = 10
const tva = 20
const prixTtc = prixHtc + prixHtc * tva / 100

console.log(prixHtc + " HT - " + prixTtc + " TTC")