// Un alert espone 5 numeri casuali. Da li parte un
// timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati

// funzione per numero random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//array contenitore vuoto per i numeri random
var numeri= [];
console.log(numeri);

// creo un ciclo for per generare 5 numeri random da 1 a 50
// ad ogni ciclo il numero dovrà insediarsi dentro l'array vuoto

for (var i = 0; i < 5; i++) {
var numero_random = getRandomNumber(1, 50);
console.log(numero_random);
numeri.push(numero_random);
}

console.log(numeri);

// Mostro all'utente i numeri da memorizzare
alert('Pront a memorizzare i numeri?');
for (var i = 0; i < 5; i++) {
alert(numeri[i]);
}

var numeri_utente = [];

// utilizzo timefunction setTimeout per gestire inviare i prompt dopo 30 secondi

setTimeout(numbers, 3000);
function numbers(){
for (var i = 0; i < 5; i++) {
var numbersUtente = parseInt(prompt('Inserisci i numeri memorizzati uno alla volta'));
  if (numeri.includes(numbersUtente)) {
    numeri_utente.push(numbersUtente);
  }
  console.log(numbersUtente);
}
// Se l'utente non indovina: alert
  if (numeri_utente < 1) {
    alert('Mi sa che hai bisogno di un po di fosforo');
  }
  // altrimenti hai vinto più risultato
  else {
    console.log(numeri_utente);
    alert('Complimenti, numeri corretti ' + numeri_utente.length);
    alert('Numeri indovinati: ' + numeri_utente);
  }
}
