import readline from 'readline-sync';


const selectedYear = readline.questionInt("choisissez une année : ")

const isLeap = (year) => {
    return (year % 4 === 0 || (year % 100 === 0 && year % 400 === 0))
}

isLeap(selectedYear) ? console.log(selectedYear + " est une année bissextile") : console.log(selectedYear + " n'est pas une année bissextile")

    
    
    /* If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
    If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
    If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
    The year is a leap year (it has 366 days).
    The year is not a leap year (it has 365 days). */
