// Esempio

// const prodotti = ["pasta", "sugo", "formaggio"];
// const esisteProdottoSenzaGlutine = prodotti.some(prodotto => prodotto === "pasta");

// console.log(esisteProdottoSenzaGlutine);

/****************************************************/

// Esercizio

// Verifica se nell'array [2, 4, 7] 
// esiste almeno un numero dispari.

const numeri = [2, 4, 7];

const numeriDispari = numeri.some(numero => numero % 2 !== 0); // numero % 2 !== 0. vuol dire se numero è dispari

console.log(numeriDispari);