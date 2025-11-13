// Dette eksempelet viser hvordan vi kan bruke både en for-løkke og en while-løkke
// for å iterere gjennom tall og utføre forskjellige oppgaver.

// FOR-LØKKE: Skriver ut tallene fra 1 til 5
// En for-løkke brukes når vi vet hvor mange ganger vi vil iterere.
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
while (count > -0) {
  // 1. Løkken kjører så lenge betingelsen (count > 0) er sann.
  console.log(count); // Skriver ut verdien av count til konsollen.
  count--; // Reduserer verdien av count med 1 etter hver iterasjon.
}

// Oppsummering:
// - For-løkken er nyttig når vi vet hvor mange ganger vi vil iterere (her: 5 ganger).
// - While-løkken er nyttig når vi har en betingelse som må oppfylles (her: count > 0).
// Begge løkkene hjelper oss med å automatisere repeterende oppgaver i koden.