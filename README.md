Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

Ricordatevi di fare il file README.md in cui scomponete il problema in sotto problemi
Numero minimo di push: 6

Buon pranzo a dopo.

<!-- SCOMPOSIZIONE IN SOTTOPROBLEMI -->

1 - Chiedere all'utente i chilometri da percorrere tramite prompt;
2 - Chiedere all'utente l'età da percorrere tramite prompt;
3 - Creare un'ulteriore variabile che calcola il prezzo del viaggio;
4 - ? SE età < 18;
4.1 - sconto del 20%;
5 - ALTRIMENTI SE età > 65; 
5.1 sconto 40%;
6 - : ALTRIMENTI; 
6.1 - Nessuno sconto;
7 - Creare un'ulteriore variabile che ci dà il prezzo finale con lo sconto applicato;
8 - Avere al massimo due numeri decimali;