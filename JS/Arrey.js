/* Et array (eller matrise på norsk) er en datastruktur som brukes til å lagre flere verdier i én enkelt variabel. 

I stedet for å lage mange individuelle variabler for hver verdi, kan du bruke et array til å organisere og lagre data på en mer strukturert måte.

Hvordan fungerer et array?
	• Et array er som en liste med elementer.
	• Hvert element i arrayet har en indeks (posisjon) som starter fra 0.
    • Du kan lagre forskjellige typer data i et array, som tall, tekst (strings), objekter eller til og med andre arrays.
 */

// Oppretter et array som lagrer navnene på frukter
let frukter = ["Eple", "Banan", "Appelsin", "Druer"];

// 1. Henter et element fra arrayet ved hjelp av indeksen
console.log(frukter[0]); // "Eple" (første element, indeks 0)

// 2. Legger til et nytt element i arrayet
frukter.push("Mango"); // Nå inneholder arrayet ["Eple", "Banan", "Appelsin", "Druer", "Mango"]

// 3. Viser alle frukter 
console.log(frukter); // 4 (antall elementer i arrayet)

// 4. Fjerner det siste elementet fra arrayet
frukter.pop(); // Nå inneholder arrayet ["Eple", "Banan", "Appelsin", "Druer"]

// 5. Endrer et element i arrayet
frukter[1] = "Pære"; // Nå inneholder arrayet ["Eple", "Pære", "Appelsin", "Druer"]

// 6. Henter et element fra arrayet ved hjelp av indeksen
console.log(frukter[1]); // "Eple" (første element, indeks 0)

// 7. Finner lengden på arrayet
console.log(frukter.length); // 4 (antall elementer i arrayet)

// 8. Viser alle frukter 
console.log(frukter); // 4 (antall elementer i arrayet)

// 9. Fjerne en spesifikk frukt
frukter.splice (2, 1); // 2 er indeksen, og 1 er antall elementer som skal fjernes

// 10. Viser alle frukter 
console.log(frukter); // 3 (antall elementer i arrayet)