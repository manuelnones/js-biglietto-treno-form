/*
x prendere id km e creare una variabile
x prendere id age e creare una variabile
x prendere id btn e creare una variabile
x creare variabile prezzo per km
x aggiungere un evento click sul button
x creare variabile e calcolare prezzo del biglietto standard 
x creare variabile e calcolare prezzo del biglietto scontanto del 20%
x creare variabile e calcolare prezzo del biglietto scontato del 40%
x creare variabile con prezzi reali (max 2 cifre decimali)
x SE l'utente ha meno di 18 anni
    o Prezzo scontanto del 20%
x ALTRIMENTI SE l'utente ha più di 65 anni
    o Prezzo scontato del 40%
x ALTRIMENTI prezzo standard
x scrivere i dati in pagina al click del pulsante
*/

let kmEl = document.getElementById(`km`);
let ageEl = document.getElementById(`age`);
let btn1El = document.getElementById(`btn`);
let priceForKm = 0.21;

btn1El.addEventListener(`click`, function () {
    let ticketStandard = kmEl.value * priceForKm;
    let prezzoScontato20 = (ticketStandard - (ticketStandard * 20 / 100));
    let prezzoScontato40 = (ticketStandard - (ticketStandard * 40 / 100));
    let prezzoStandard = ticketStandard.toFixed(2);
    let prezzoMinorenni = prezzoScontato20.toFixed(2);
    let prezzoOver65 = prezzoScontato40.toFixed(2);

    if (!isNaN(kmEl.value) && !isNaN(ageEl.value)) {

        if (ageEl.value < 18) {
            document.getElementById(`price`).innerHTML = (prezzoMinorenni + "\u20AC");
            document.getElementById(`discount`).innerHTML = "20%";
        } else if (ageEl.value > 65) {
            document.getElementById(`price`).innerHTML = (prezzoOver65 + "\u20AC");
            document.getElementById(`discount`).innerHTML = "40%";
        } else {
            document.getElementById(`price`).innerHTML = (prezzoStandard + "\u20AC");
            document.getElementById(`discount`).innerHTML = "Nessuno";
        }

        document.getElementById(`ticket`).style.display = `block`;
        document.getElementById(`travelkm`).innerHTML = kmEl.value;
        document.getElementById(`ageuser`).innerHTML = ageEl.value;

    } else {
        alert(`Inserisci un numero in entrambi i campi!`);
    }
})