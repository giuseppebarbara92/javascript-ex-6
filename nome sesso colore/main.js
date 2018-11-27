// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito

var nome = prompt('inserisci il tuo nome');
console.log(nome);
var sesso = prompt('maschio o femmina?');
console.log(sesso);


var h1_element = document.getElementById('utente');
h1_element.innerHTML += nome;

if (sesso == 'maschio') {
  h1_element.style.color = 'lightblue';
}

else if (sesso == 'femmina') {
  h1_element.style.color = 'pink';
}

else {
  alert('errore, parola non corrisponde alla richiesta');
}
