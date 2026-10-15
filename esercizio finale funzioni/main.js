
//Esercizio finale
//Crea una pagina con tre pulsanti:
//  uno per calcolare l'area di un rettangolo (base 12, altezza 7), 
// uno per tirare un dado da 6 facce, 
// uno per calcolare il prezzo con IVA al 22% di 85 euro. 
// Per ogni pulsante scrivi una funzione atomica che si occupa solo del calcolo 
// e una che la usa e mostra il risultato con alert. Collega le funzioni ai pulsanti tramite attributo onclick.

function calcolaArea(base, altezza) {
    return base * altezza;
}



function generqDado() {
    return Math.floor(Math.random() * 6) + 1;
}



function calcolaPrezzoIva(imponibile, aliquota) {
    return imponibile + (imponibile * aliquota / 100);
}


function mostraArea() {
    const area = calcolaArea(12, 7)
    alert("l'area è di: " + area)
}


function mostraDado() {

    const faccia = generaDado();
    alert("hai ottenuto: " + faccia)

}
const area = calcolaArea(12, 7)
alert("l'area è di: " + area);

function mostraIva() {
    const iva = calcolaPrezzoIva(85, 22)
    alert("l'va è di:" + iva + "euro")
}


