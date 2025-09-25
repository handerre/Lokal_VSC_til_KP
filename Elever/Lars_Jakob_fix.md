# Rettelse: hover-problem i `Elever/Lars_Jakob.html`
# Rettelse: hover-problem i `Elever/Lars_Jakob.html`

Kort og punktvis oversikt over hva som var galt og hva jeg gjorde for å fikse det:

- Problem: Hover-effekten fungerte ikke konsekvent.
  - Årsak: Hover-styling ble delvis plassert på elementer som ikke fanget brukerens interaksjon (for eksempel på `li` i stedet for selve lenken `a`).
  - Årsak: Bilder (`<img>`) kunne fange pointer-events og hindre at foreldreelementet mottok hover i enkelte nettlesere.
  - Årsak: Barn-elementer (tekst, lenker) overskrev fargen istedenfor å arve den fra forelderen, så farget endring ved hover ble ikke vist.
  - Mindre ekstra problem: En tom CSS-regel (`nav ul li { }`) ga en lint/advarsel.

- Løsning - hva jeg gjorde:
  - Flyttet og samlet CSS i et `<style>`-element i head for enklere redigering og testing (valgfritt, kan flyttes ut igjen).
  - Endret hover for navigasjonen til å være på selve lenken: `nav ul li a:hover` (og `:focus`) i stedet for kun `li`.
  - Implementerte hover for kortene ved å bruke `.flex-item:hover` og `.flex-item:focus-within` slik at både mus og tastaturnavigasjon fungerer.
  - Sørget for at barn-elementer arver fargen ved hover ved å bruke `color: inherit` på relevante barn (f.eks. `.flex-item:hover p, .flex-item:hover a { color: inherit; }`).
  - La `pointer-events: none` på bildet (`.flex-item img`) slik at bildet ikke blokkerer hover på forelderen i noen nettlesere, samtidig som bildet fortsatt kan være fokusert hvis det trengs (bruk med forsiktighet).
  - La til `transition` og `transform` for jevn visuell respons og en liten «løfte»-effekt ved hover.
  - Fjernet tom CSS-regel som ga lint-feil.

- Hvordan teste endringen (enkelt):
  1. Åpne `Elever/Lars_Jakob.html` i en nettleser.
  2. Beveg musen over navigasjonslenkene og se at bakgrunn/tekst endrer seg.
  3. Beveg musen over hvert kort (de hvite boksene) og se at hele boksen får oransje bakgrunn, hvit tekst og bildet får en lett zoom.
  4. Test tastaturnavigasjon: bruk Tab-tasten for å flytte fokus til kortet/lenker og sjekk at `:focus`/`:focus-within` gir samme visuelle effekt.

- Anmerkninger / videre forbedringer:
  - `pointer-events: none` på bilder er et raskt hack for å sikre hover når bildet ligger i front; hvis bildene skal være interaktive (lenker, knapper), fjern denne og sørg for å legge hover på riktig element.
  - For produksjon anbefales å flytte CSS til `css/stil.css` og beholde HTML fri for inline-stil.
  - Vurder å bruke `box-shadow` og `outline` for tydelig fokusstil ved tastaturnavigasjon for bedre tilgjengelighet.

Hvis du vil, kan jeg automatisk flytte CSS ut i `css/stil.css` og oppdatere HTML-lenken, eller legge til ekstra fokusstiler for tilgjengelighet.
