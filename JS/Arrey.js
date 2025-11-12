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