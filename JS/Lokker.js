/* Dette eksempelet viser hvordan vi kan bruke både en for-løkke og en while-løkke
for å iterere gjennom tall og utføre forskjellige oppgaver.

FOR-LØKKE: Skriver ut tallene fra 1 til 5
En for-løkke brukes når vi vet hvor mange ganger vi vil iterere. */
console.log("For-løkke: Skriver ut tallene fra 1 til 5");
for (let i = 1; i <= 5; i++) {
  // 1. Vi starter med i = 1.
  // 2. Løkken kjører så lenge betingelsen (i <= 5) er sann.
  // 3. Etter hver iterasjon øker vi i med 1 (i++).
  console.log(i); // Skriver ut verdien av i til konsollen.
}

// WHILE-LØKKE: Teller ned fra 5 til 1
// En while-løkke brukes når vi har en betingelse som må oppfylles for å fortsette.
console.log("While-løkke: Teller ned fra 5 til 1");
let count = 5; // Starter med å definere en variabel count og setter den til 5.
while (count > 0) {
  // 1. Løkken kjører så lenge betingelsen (count > 0) er sann.
  console.log(count); // Skriver ut verdien av count til konsollen.
  count--; // Reduserer verdien av count med 1 etter hver iterasjon.
}

/* Oppsummering:
    - For-løkken er nyttig når vi vet hvor mange ganger vi vil iterere (her: 5 ganger).
    - While-løkken er nyttig når vi har en betingelse som må oppfylles (her: count > 0).
Begge løkkene hjelper oss med å automatisere repeterende oppgaver i koden.*/


console.log("While-løkke som sjekker etter partall og oddetall");
// Vi starter med å definere en variabel som heter 'count' og setter den til 0.
// Denne variabelen brukes som en teller i løkken.
let count2 = 0;

// Starter en while-løkke som kjører så lenge verdien av 'count' er mindre enn 5.
while (count2 < 5) {
    // Sjekker om 'count' er et partall.
    // Dette gjøres ved å bruke modulus-operatoren (%), som gir resten av en divisjon.
    // Hvis resten av 'count % 2' er lik 0, betyr det at tallet er et partall.
    if (count2 % 2 === 0) {
        // Hvis 'count' er et partall, skriver vi ut en melding som sier at det er et partall.
        console.log(count2 + " er et partall.");
    } else {
        // Hvis 'count' ikke er et partall (altså det er et oddetall), skriver vi ut en melding som sier det.
        console.log(count2 + " er et oddetall.");
    }
    // Øker verdien av 'count' med 1 for hver iterasjon.
    // Dette er viktig for å unngå en evig løkke, fordi uten denne linjen vil 'count' aldri endres,
    // og løkken vil kjøre uendelig.
    count2++;
}

// Når løkken er ferdig (når 'count' er 5 eller større), stopper programmet.
