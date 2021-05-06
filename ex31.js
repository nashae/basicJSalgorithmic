const prix = [5,50,23,11]
const quantites = [10,1,4,3]

let total = 0
for(let i = 0; i < prix.length ; i++){
    total = total + prix[i] * quantites[i]
}
console.log("le prix total est de : " + total)