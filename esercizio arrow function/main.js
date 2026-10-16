// Esempio


// function calcolaSconto(prezzo) {
//     return prezzo * 0.9;
// }

// const calcolaScontoArrow = prezzo => prezzo * 0.9;

// console.log(calcolaSconto(50));
// console.log(calcolaScontoArrow(50));


// In questo esempio il parametro è prezzo.
//  La funzione classica usa le tonde per il parametro,
//   le graffe per il corpo e return per restituire il risultato.
//    La arrow function scrive lo stesso parametro in modo più breve.
//     Siccome c'è una sola espressione, il return è implicito.

/**************************************************************************************/

// Esercizio


// Scrivi la stessa funzione in due modi: 
// prima in forma classica e poi come arrow function.
//  La funzione deve ricevere il prezzo di un prodotto e restituire il prezzo finale con il 22% di IVA.


function calcolaPrezzoFinale(prezzo) {
    return prezzo * 1.22
}


const calcolaPrezzoFinaleArrow = prezzo => prezzo * 1.22

console.log(prezzoFinale(100));

console.log(prezzoFinaleArrow(100));