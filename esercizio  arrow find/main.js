// Esempio

// const prodotti = ["penna", "quaderno", "zaino"];
// const trovato = prodotti.find(prodotto => prodotto === "quaderno");

// console.log(trovato);


/********************************************************/

// Esercizio

// Dato l'array ["latte", "pane", "uova"], 
// trova il primo prodotto che contiene la lettera e.

const prodotti = ["latte", "pane", "uova"];

const trovato = prodotti.find(prodotto => prodotto.includes("e"))

console.log(trovato);