/**
 * 
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */






/**
 * Inverte in negativo il valore del nemuro
 * @param {*} number 
 * @returns 
 */
function returnNegative(number) {
    if (number >= 1) {
        number = -number;
    }
    return number;
}


/**
 * Funzione isWordPalindroma
 * @param {*} word //Parola inserita 
 * @returns //true
 */
function isWordPalindroma(word) {
    word.split("");
    /*creo una array dove inserisco la parola inserita nell'input*/
    const wordArray = [];

    wordArray.reverse();
    console.log(word.split("").reverse().join("").toString());
    if (word === (word.split("").reverse().join("").toString())) {

        return true
    }
    return false
}
