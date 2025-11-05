// Ber brukeren om å skrive inn navnet sitt
const navn = prompt("Hva heter du?");

// Lager en melding basert på brukerens input
const hilsen = `Hei, ${navn}! Hyggelig å møte deg!`;

// Viser meldingen i konsollen
console.log(hilsen);

// Viser meldingen som en popup i nettleseren
alert(hilsen);