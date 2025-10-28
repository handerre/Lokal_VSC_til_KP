// /c:/Lokal_VSC_til_KP/JS/Undervisning.js

//Del 1
console.log('hei verden');

let antall = 5;
let ganger = 10;
const test = 33;
let sum = (antall*ganger+test);

console.log(antall);
console.log(sum);

//Del 2
const navn = "Bent";
const hilsen =`Hei, ${navn}`;
console.log(hilsen);


let erStudent = true;
let erVoksen = false;
console.log(erStudent);

let rest = 10% 3;

console.log(hilsen + ", " + sum +", " + erVoksen + ", " + antall + ", " + rest);

//Del 3
let fem = 5;
console.log(fem == 5);
console.log(fem != 5);

let alder = 16;
if (alder >= 18){
console.log("Voksen");}
else {
console.log("Barn");}


/**
 * Kategoriserer et gitt tall som positivt, negativt eller null.
 *
 * @param {number} tall - Tallet som skal kategoriseres.
 * @returns {string} En tekst som beskriver tallets kategori.
 */
function kategoriserTall(tall) {
  if (tall > 0) {
    return "Tallet er positivt.";
  } else if (tall < 0) {
    return "Tallet er negativt.";
  } else {
    // Hvis tallet ikke er større enn 0 og ikke mindre enn 0,
    // må det være lik 0.
    return "Tallet er null.";
  }
}
// Eksempler på bruk:
console.log(`Input: 5  -> Resultat: ${kategoriserTall(5)}`);
console.log(`Input: -3 -> Resultat: ${kategoriserTall(-3)}`);
console.log(`Input: 0  -> Resultat: ${kategoriserTall(0)}`);
/*Forklaring
	1. function kategoriserTall(tall): Definerer en funksjon som tar parameteren tall.
	2. if (tall > 0): Sjekker først om tall er større enn null (positivt). Hvis sant, returneres "Tallet er positivt." og resten av koden i if/else blokken ignoreres.
	3. else if (tall < 0): Hvis den første if-testen var usann, sjekkes det deretter om tall er mindre enn null (negativt). Hvis sant, returneres "Tallet er negativt.".
	4. else: Hvis ingen av de to foregående betingelsene ($> 0 eller $`< 0$) var sanne, må tallet være lik null. Dette er standard-utførelsen, og "Tallet er null." returneres.
*/