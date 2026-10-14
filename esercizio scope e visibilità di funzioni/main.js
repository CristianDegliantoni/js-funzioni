
// esempio dispensa

//const aliquotaDefault = 22; // variabile esterna, visibile anche dentro le funzioni

//function calcolaIvaDipendente(imponibile) {
// Funziona, ma dipende da una variabile esterna: cattiva pratica
//return imponibile * aliquotaDefault / 100;
//}

//function calcolaIva(imponibile, aliquota) {
// Riceve tutto tramite parametri: indipendente e riutilizzabile
//const risultato = imponibile * aliquota / 100;
//return risultato;
//}

// 'risultato' non esiste qui fuori: è una variabile locale della funzione
// console.log(risultato); // ReferenceError

//Esercizio
//Scrivi una funzione convertiInEuro che riceve un importo in dollari e un tasso di cambio e restituisce l'equivalente in euro. 
//Usa solo parametri,
//senza leggere variabili esterne.Invocala e salva il risultato.

function convertiEuro(dollari, tassoDiCambio) {

    return dollari / tassoDiCambio;
}

const euro = convertiEuro(100, 1.08);
console.log(euro);
