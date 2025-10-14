// 1. Inline example
// Funksjon som kan kalles direkte fra en knapp i HTML (onclick="inlineExample()")
function inlineExample() {
  // Vis en enkel varselboks til brukeren
  alert("Hei fra inline script 👋");
  // Logg til konsollen for feilsøking
  console.log("Inline script kjørt!");
}

// 2. Ekstern JS med defer
// Når DOM-en er ferdig lastet, binder vi hendelseslyttere til knapper
document.addEventListener("DOMContentLoaded", () => {
  // Hent knappen med id externalBtn (må finnes i HTML)
  const btn = document.getElementById("externalBtn");
  // Legg til en click-lytter som kjører en funksjon når knappen trykkes
  btn.addEventListener("click", () => {
    // Vis varsel og logg for å demonstrere at ekstern fil fungerer
    alert("Ekstern JavaScript fungerer! ✅");
    console.log("Ekstern fil kjørt via 'defer'");
  });

  // 5. Dynamisk innlasting
  // Hent knappen som skal starte dynamisk lasting av ekstra script
  const loadBtn = document.getElementById("loadScriptBtn");
  // Når knappen trykkes, last ekstra script (stien er relativt fra HTML-fila)
  loadBtn.addEventListener("click", () => {
    // Når HTML-filen ligger i mappen Html/, må vi gå opp én mappe for å nå JS/
    // Derfor bruker vi ../JS/extra.js som sti til ekstra script i JS-mappen.
    loadScript("../JS/extra.js");
  });
});

// 5. Dynamisk last-funksjon
// Denne funksjonen oppretter et nytt <script>-element og legger det i dokumentet
function loadScript(url) {
  // Oppretter et script-element
  const s = document.createElement("script");
  // Angir hvilken fil som skal lastes
  s.src = url;
  // Når scriptet er ferdig lastet, kjør denne funksjonen (her: viser varsel)
  s.onload = () => alert("Ekstra script lastet!");
  // Hvis scriptet ikke kan lastes, vis en feilmelding
  s.onerror = () => alert("Kunne ikke laste script.");
  // Legg script-elementet inn i body for at nettleseren skal laste det
  document.body.appendChild(s);
}
