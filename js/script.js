let eta = prompt("Inserisci la tua età");
let chilometri = prompt("Inserisci i chilometri che vorresti percorrere")

let sconto = 0;
let prezzo_biglietto = 0.21 * chilometri;
let prezzo_totale = 0;

if (eta < 18) {
    sconto = 20
}

else if (eta > 65) {
    sconto = 40
}