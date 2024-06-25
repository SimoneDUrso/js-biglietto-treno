let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci i chilometri che vorresti percorrere")

let sconto = 0;
let prezzo_biglietto = 0.21 * chilometri;

if (eta < 18) {
    sconto = 0.2
}

else if (eta > 65) {
    sconto = 0.4
}

let prezzo_finale = prezzo_biglietto - (prezzo_biglietto * sconto);

document.getElementById("prezzo_finale").innerHTML += prezzo_finale.toFixed(2) + "&euro;"