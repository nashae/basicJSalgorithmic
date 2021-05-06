import readline from "readline-sync";

const isLeap = (year) => {
    return year % 4 === 0 || (year % 100 === 0 && year % 400 === 0);
};

const selectedYear = readline.questionInt("choisissez une année : ");

const month = readline.question("choisissez un mois :");
let result = "";

switch (month) {
    case "janvier":
        result = "31 jours en " + month + selectedYear;
        break;
    case "fevrier":
        isLeap(selectedYear)
            ? (result = "29 jours en " + month + selectedYear)
            : (result = "28 jours en " + month + selectedYear);
        break;
    case "mars":
        result = "31 jours en " + month + selectedYear;
        break;
    case "avril":
        result = "30 jours en " + month + selectedYear;
        break;
    case "mai":
        result = "31 jours en " + month + selectedYear;
        break;
    case "juin":
        result = "30 jours en " + month + selectedYear;
        break;
    case "juillet":
        result = "31 jours en " + month + selectedYear;
        break;
    case "aout":
        result = "31 jours en " + month + selectedYear;
        break;
    case "septembre":
        result = "30 jours en " + month + selectedYear;
        break;
    case "octobre":
        result = "31 jours en " + month + selectedYear;
        break;
    case "novembre":
        result = "30 jours en " + month + selectedYear;
        break;
    case "decembre":
        result = "31 jours en " + month + selectedYear;
        break;
    default:
        console.log("erreur" + month, selectedYear, result)
}

console.log(result)
