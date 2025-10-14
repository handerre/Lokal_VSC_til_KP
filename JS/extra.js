// extra.js - lastet dynamisk via knappen på siden
// Dette er en enkel stub for å demonstrere dynamisk innlasting.
console.log('extra.js er lastet dynamisk');

// Når denne filen lastes dynamisk, sett en synlig melding i footeren
try {
  const footer = document.querySelector('footer.grid-footer');
  if (footer) {
    const p = document.createElement('p');
    p.textContent = 'extra.js lastet dynamisk: vellykket!';
    p.style.color = '#0a4ea1';
    footer.appendChild(p);
  }
} catch (e) {
  console.log('Kunne ikke oppdatere footeren fra extra.js:', e);
}

function extraLoaded() {
  console.log('Funksjon i extra.js kjører: extraLoaded()');
}
