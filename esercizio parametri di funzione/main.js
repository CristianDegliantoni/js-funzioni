//esempio dispensa


//function saluta(nome) {
//    return 'Ciao, ' + nome + '!';
//}

//const messaggio1 = saluta('Mario'); // Ciao, Mario!
//const messaggio2 = saluta('Luigi'); // Ciao, Luigi!

// 'prezzoNetto' e 'iva' sono parametri (segnaposto senza valore)
//function calcolaPrezzoLordo(prezzoNetto, iva) {
//    return prezzoNetto + (prezzoNetto * iva / 100);
//}

// 100 e 22 sono argomenti: vanno rispettivamente a 'prezzoNetto' e 'iva'
//const lordo1 = calcolaPrezzoLordo(100, 22); // 122
//const lordo2 = calcolaPrezzoLordo(50, 10);  // 55




function calcolaArea(base, altezza) {
    return base * altezza

}

const area = calcolaArea(6, 4)
console.log(area)