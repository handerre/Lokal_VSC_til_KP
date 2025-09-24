// Henter innholdet fra meny.html og setter det inn i <div id="meny"></div>
fetch("../Html/meny.html") // laster inn meny.html
  .then(response => response.text()) // konverterer til tekst
  .then(data => {
    document.getElementById("meny").innerHTML = data; // legger menyen inn i div
  })
  .catch(error => console.error("Kunne ikke laste menyen:", error)); // feilmelding hvis noe går galt
