// Funksjonen som kjøres når knappen klikkes
function visMelding() {
    // prompt() viser en dialogboks der brukeren kan skrive inn navnet sitt
    const navn = prompt("Hva heter du?");

    // Sjekker om brukeren faktisk skrev inn noe
    if (navn) {
        // Viser en personlig melding i en popup-boks
        alert("Hei, " + navn + "! Velkommen til nettsiden!");

        // Henter HTML-elementet med id="melding"
        const meldingElement = document.getElementById("melding");

        // Oppdaterer innholdet i <p>-elementet med en personlig melding
        meldingElement.textContent = "Hei, " + navn + "! Takk for at du besøker nettsiden vår.";
    } else {
        // Hvis brukeren ikke skriver inn noe, vises en standard melding
        alert("Du skrev ikke inn noe navn.");
    }
}