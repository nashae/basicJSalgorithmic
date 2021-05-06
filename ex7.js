const result = Math.floor(Math.random() * 21) ;
let afficheTxt = ""

if (result < 7){
    afficheTxt = "nombre : " + result + "\nbonjour";
}
else if(result >= 7 && result < 14){
    afficheTxt = "nombre : " + result + "\nsalut";
}
else if (result >= 14){
    afficheTxt = "nombre : " + result + "\nhello";
}else {
    console.log('bug' + result + ' ' + afficheTxt)
}

console.log(afficheTxt);
