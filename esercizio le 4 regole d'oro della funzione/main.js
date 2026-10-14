



//function valutaStudente(voto1, voto2, voto3) {
// const media = (voto1 + voto2 + voto3) / 3;
// if (media >= 6) {
//   return 'Promosso con media ' + media;
// } else {
//   return 'Bocciato con media ' + media;
// }
//}

//esercizio

//Riscrivi questa funzione separandola in due funzioni atomiche: 
//una che calcola la media e una che verifica se è sufficiente (≥ 6).


function calcolaMedia(vot01, voto2, voto3) {
    return (voto1 + voto2 + voto3) / 3;
}

function isPromosso(media) {
    return media >= 6;
}

const media = calcolaMedia(7, 5, 8);
const promosso = isPromosso(media);

if (promosso === true) {
    console.log('Promosso con media ' + media);
} else {
    console.log('Bocciato con media ' + media);

