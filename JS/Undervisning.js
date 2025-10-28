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