# Tittelboks og undertittelboks - hva var galt og hva er riktig

Problemet:

I `Elever/Lars_Jakob.html` var både `#tittel_boks` og `#undertittel_boks` satt til `display: inline-block;`. Når to elementer er `inline-block` så oppfører de seg som tekst/inline-elementer: de kan stå ved siden av hverandre på samme linje hvis det er nok plass i foreldreelementet. I tillegg var `header { text-align: center; }`, som sentrerer inline-elementer horisontalt — det gjorde at boksene ofte viste seg ved siden av hverandre, sentrert på samme linje.

Hvorfor det var feil:

- Forventet oppførsel var at undertittelboks skal være under tittelboks (én kolonne).
- `inline-block` tillater horisontal plassdeling mellom elementer, så to inline-blocks kan ligge ved siden av hverandre. Det bryter ønsket vertikale rekkefølge.

Hva som er riktig (to enkle løsninger):

1) Bruk `display: block` på boksene (enkelt og kompatibelt):

```css
#tittel_boks,
#undertittel_boks {
  display: block;       /* gjør at hver boks tar egen linje */
  margin: 10px auto;    /* sentrerer boksene horisontalt */
  max-width: 760px;     /* valgfritt, begrenser bredde på store skjermer */
}
```

1. Eller bruk flex på `header` for eksplisitt kolonne-ligning (moderne og fleksibelt):

```css
header {
  display: flex;
  flex-direction: column;   /* stable vertikalt */
  align-items: center;      /* sentrerer barna horisontalt */
  gap: 6px;                 /* avstand mellom tittel og undertittel */
}

#tittel_boks, #undertittel_boks {
  display: block; /* fortsatt greit å ha */
}
```

Hvilken løsning velge:

- Hvis du bare ønsker at de to boksene skal stå under hverandre uten annen layoutlogikk, er `display: block` den enkleste endringen.
- Hvis `header` senere må inneholde flere elementer som skal plasseres vertikalt eller med kontrollert avstand, er `display: flex` med `flex-direction: column` ofte bedre.

Hvordan teste det lokalt:

1. Åpne `Elever/Lars_Jakob.html` i nettleser (dobbeltklikk eller `Ctrl+O` i nettleser og velg fil).
2. Åpne utviklerverktøy (F12) og finn `#tittel_boks` og `#undertittel_boks` i DOM-en.
3. I `Styles`-panelet endre `display` fra `inline-block` til `block` eller legg til de foreslåtte reglene ovenfor.
4. Sjekk at titlene nå vises vertikalt (tittel over, undertittel under), også ved forskjellige vindusstørrelser.

Kort oppsummering:

- Feil årsak: `display: inline-block` gjorde at boksene kunne ligge side-by-side.
- Riktig løsning: Bruk `display: block` eller `header { display: flex; flex-direction: column; }` for å tvinge vertikal stabling.

Hvis du vil, kan jeg:

- Oppdatere `Elever/Lars_Jakob.html` direkte og endre CSS for deg (jeg kan sette `#tittel_boks` og `#undertittel_boks` til `display:block` eller legge til `header { display:flex; ... }`).
- Eller legge til forslagene i en av dine faktiske CSS-filer (f.eks. `CSS/stil.css` eller lignende).

Si hva du foretrekker, så gjør jeg endringen.
