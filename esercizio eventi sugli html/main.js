//function generaFaccia() {
//    return Math.floor(Math.random() * 6) + 1;
//}

//function tiraDado() {
//   const faccia = generaFaccia();
//  alert('Hai ottenuto: ' + faccia);
//}

//function contaCaratteri() {
// logica per contare i caratteri digitati
// }

//function ingrandisci() {
// logica per ingrandire l'immagine
// }

//function rimpicciolisci() {
// logica per ridurre l'immagine


//esercizio

//Scrivi una funzione generaNumero che restituisce un intero casuale tra 1 e 6,
//   e una funzione tiraDado che la usa e mostra il risultato con alert. 
// Scrivi poi l'HTML del pulsante che invoca tiraDado al click.

function generaNumero() {
    return Math.floor(Math.random() * 6) + 1;
}

function tiraDado() {
    const risultato = generaNumero()
    alert("hai ottenuto: " + risultato)
}