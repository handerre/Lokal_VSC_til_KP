// JS/promt.js
// Eksponerer en funksjon runPrompt() som kan kalles for å starte prompt-dialogene
// Bruker textContent for trygg DOM-oppdatering og enkel validering av input.

(function () {
    'use strict';

    // Hjelpefunksjon for å vise meldinger i lokale eller globale resultatområder
    // Prioriterer '#promptResultLocal' (ved knappen). Fallback: '#promptResult' i footeren.
    function visMelding(melding) {
        var local = document.getElementById('promptResultLocal');
        if (local) {
            local.textContent = melding; // vis lokalt under knappen
            return;
        }
        var out = document.getElementById('promptResult');
        if (out) {
            out.textContent = melding; // fallback til footer
        } else {
            console.warn('Ingen resultatbeholder funnet (søk etter #promptResultLocal eller #promptResult).');
        }
    }

    // Hovedfunksjonen som starter prompt-vekten
    function runPrompt() {
        // Spør etter navn
        var navn = prompt('Skriv inn navnet ditt:');
        if (navn === null) { // brukeren avbrøt
            visMelding('Bruker avbrøt navneinnskriving.');
            return;
        }
        navn = navn.trim();
        if (navn.length === 0) {
            visMelding('Tomt navn. Avbryter.');
            return;
        }

        // Spør etter alder
        var alder = prompt('Skriv inn alderen din (år):');
        if (alder === null) { // avbrutt
            visMelding('Bruker avbrøt aldersspørsmålet.');
            return;
        }
        alder = alder.trim();

        // Enkel validering: kun sifre tillatt
        if (!/^[0-9]+$/.test(alder)) {
            visMelding('Ugyldig alder. Oppgi et heltall (f.eks. 25).');
            return;
        }

        // Vellykket resultat
        visMelding('Hei ' + navn + ', du er ' + alder + ' år gammel.');
    }

    // Eksponer funksjonen globalt slik den enkelt kan kalles fra onclick i index.html
    window.runPrompt = runPrompt;

})();
