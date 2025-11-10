// Oppretter et array som lagrer navnene på frukter
let frukter = ["Eple", "Banan", "Appelsin", "Druer"];

// 1. Henter et element fra arrayet ved hjelp av indeksen
console.log(frukter[0]); // "Eple" (første element, indeks 0)

// 2. Legger til et nytt element i arrayet
frukter.push("Mango"); // Nå inneholder arrayet ["Eple", "Banan", "Appelsin", "Druer", "Mango"]

// 3. Fjerner det siste elementet fra arrayet
frukter.pop(); // Nå inneholder arrayet ["Eple", "Banan", "Appelsin", "Druer"]

// 4. Endrer et element i arrayet
frukter[1] = "Pære"; // Nå inneholder arrayet ["Eple", "Pære", "Appelsin", "Druer"]

// 5. Henter et element fra arrayet ved hjelp av indeksen
console.log(frukter[1]); // "Eple" (første element, indeks 0)

// 6. Finner lengden på arrayet
console.log(frukter.length); // 4 (antall elementer i arrayet)