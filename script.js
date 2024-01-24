console.log('hello');

/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.

Tools:
- for loop
- console.log
- if/else
- %
- 
*/

const containerEl = document.querySelector('.container') //BONUS 1

//Scrivi un programma che stampi in console i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
   // console.log(i);
//BONUS 1:
const boxEl = document.createElement('div')
boxEl.classList.add('box')


//per i multipli di 3 stampi “Fizz” al posto del numero
//per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
if(i % 3 === 0 && i % 5 === 0){
    console.log(i,'FizzBuzz');
    boxEl.innerText = 'FizzBuzz'; //BONUS 1
} else if (i % 3 === 0){
    console.log(i, 'Fizz');
    boxEl.innerText = 'Fizz'; //BONUS 1
} else if (i % 5 === 0){
    console.log(i,'Buzz');
    boxEl.innerText = 'Buzz'; //BONUS 1
} else {
    console.log(i);
    boxEl.innerText = i;
}
 containerEl.append(boxEl) //BONUS 1





}