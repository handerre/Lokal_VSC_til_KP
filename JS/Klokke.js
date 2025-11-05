// Funksjon som oppdaterer klokke og dato på siden
function oppdaterKlokke() {
    // Henter <p>-elementet med id="klokke" fra HTML
    const klokkeElement = document.getElementById("klokke");
    // Henter <p>-elementet med id="dato" fra HTML
    const datoElement = document.getElementById("dato");

    // Lager et nytt Date-objekt som inneholder nåværende tid og dato
    const nå = new Date();

    // Henter timer fra "nå", legger til en ledende 0 hvis tallet er ensifret
    let timer = String(nå.getHours()).padStart(2, "0");
    // Henter minutter fra "nå", legger til en ledende 0 hvis nødvendig
    let minutter = String(nå.getMinutes()).padStart(2, "0");
    // Henter sekunder fra "nå", legger til en ledende 0 hvis nødvendig
    let sekunder = String(nå.getSeconds()).padStart(2, "0");

    // Setter inn teksten for klokke-elementet i formatet HH:MM:SS
    klokkeElement.textContent = `Klokken er nå: ${timer}:${minutter}:${sekunder}`;

    // Definerer innstillinger for hvordan datoen skal vises (norsk format)
    const options =  { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    // Setter inn teksten for dato-elementet, f.eks. "tirsdag 23. september 2025"
    datoElement.textContent = nå.toLocaleDateString("no-NO", options);
}

// Kjører funksjonen én gang med en gang siden lastes inn
oppdaterKlokke();

// Setter opp en timer som kjører oppdaterKlokke() på nytt hvert 1000 ms (1 sekund)
setInterval(oppdaterKlokke, 1000);
