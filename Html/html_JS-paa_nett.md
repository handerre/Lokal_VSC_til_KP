# JavaScript på en nettside — kort og ryddig guide

Denne filen viser hvordan du kan legge JavaScript på en nettside, både inline og i eksterne filer. Innholdet er ment som et kort referat for elever eller som en sjekkliste når du lager en enkel demo.

## Innhold

- Når bør du bruke inline `script` vs. ekstern `.js`
- Et minimalt fungerende eksempel
- Beste praksis og tilgjengelighet
- Hvordan teste lokalt

---

## Inline vs ekstern JavaScript

Inline (`<script>`) er greit for små demoer og undervisning. Det gjør det enkelt å vise alt i én fil.

Ekstern (`<script src="...">`) er å foretrekke i produksjon: enklere vedlikehold, caching og gjenbruk.

Bruk ekstern fil når koden blir større eller når flere sider deler samme funksjonalitet.

## Minimalt eksempel — inline

```html
<!DOCTYPE html>
<html lang="no">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>JS-eksempel</title>
        <style>
            /* Liten stil for demo */
            body { font-family: sans-serif; padding: 1rem; }
            button { background:#0a66c2; color:#fff; border:none; padding:0.5rem 1rem; border-radius:6px; }
        </style>
    </head>
    <body>
        <h1>JavaScript-demo</h1>
        <p id="melding" aria-live="polite"></p>

        <button id="demoBtn">Vis melding</button>

        <script>
            document.getElementById('demoBtn').addEventListener('click', function () {
                const el = document.getElementById('melding');
                el.textContent = 'Hei! Dette er en melding fra JavaScript.';
            });
        </script>
    </body>
</html>
```

## Minimalt eksempel — ekstern fil

Lag `script.js` i samme mappe:

```javascript
// script.js
document.getElementById('demoBtn').addEventListener('click', function () {
    document.getElementById('melding').textContent = 'Hei fra ekstern fil!';
});
```

I HTML bytter du ut inline-skriptet med:

```html
<script src="script.js"></script>
```

Fordel: samme JavaScript kan gjenbrukes av flere HTML-filer.

## Tilgjengelighet (a11y)

- Bruk `aria-live` (for eksempel `aria-live="polite"`) på elementer som oppdateres dynamisk. Verdien `polite` betyr at skjermleseren leser opp oppdateringen når den er ledig (den avbryter ikke pågående tale).
- Bruk `button`-elementer for handlinger, ikke `<a>`-lenker.
- Unngå `alert()` og `prompt()` i arbeidsflyter som skal være tilgjengelige.

## Beste praksis

- Legg JavaScript i en `js/`-mappe og CSS i en `css/`-mappe.
# JavaScript på en nettside — kort og ryddig guide

Denne filen forklarer hvordan du kan legge JavaScript på en nettside, både inline og i eksterne filer. Den er ment som en kort referanse eller en liten undervisningsguide.

## Innhold

- Når bruke inline `<script>` vs. ekstern `.js`
- Minste fungerende eksempler (inline og ekstern)
- Tilgjengelighet (a11y)
- Beste praksis og testing lokalt

---

## 1) Inline vs. ekstern JavaScript

Kortversjon:

- Inline (`<script>...</script>`) er greit for små demoer og undervisning.
- Ekstern (`<script src="..."></script>`) anbefales i praksis: enklere vedlikehold, caching og gjenbruk.

Velg ekstern når koden blir større eller brukes av flere sider.

## 2) Minst mulig, men fungerende — inline

Et enkelt HTML-eksempel med inline JavaScript. Kopier dette til `Html/demo-inline.html` for å prøve lokalt.

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JS-demo (inline)</title>
  <style>
    body { font-family: sans-serif; padding: 1rem; }
    button { background:#0a66c2; color:#fff; border:none; padding:0.5rem 1rem; border-radius:6px; }
  </style>
</head>
<body>
  <h1>JS-demo (inline)</h1>
  <p id="melding" aria-live="polite"></p>
  <button id="demoBtn">Vis melding</button>

  <script>
    document.getElementById('demoBtn').addEventListener('click', function () {
      const el = document.getElementById('melding');
      el.textContent = 'Hei! Dette er en melding fra JavaScript.';
    });
  </script>
</body>
</html>
```

## 3) Minst mulig — ekstern fil

Fordel: koden kan gjenbrukes. Lag `Html/demo-ekstern.html` og `js/demo.js`.

`Html/demo-ekstern.html`:

```html
<!DOCTYPE html>
<html lang="no">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>JS-demo (ekstern)</title>
</head>
<body>
  <h1>JS-demo (ekstern)</h1>
  <p id="melding" aria-live="polite"></p>
  <button id="demoBtn">Vis melding</button>

  <script src="../js/demo.js"></script>
</body>
</html>
```

`js/demo.js`:

```javascript
// demo.js
document.getElementById('demoBtn').addEventListener('click', function () {
  document.getElementById('melding').textContent = 'Hei fra ekstern fil!';
});
```

Tilpass sti (`src`) etter hvor du plasserer filene i prosjektet.

## 4) Tilgjengelighet (a11y)

- Bruk `aria-live` på elementer som oppdateres dynamisk (f.eks. `aria-live="polite"`).
  - `polite` lar skjermleseren vente til den er ledig før den leser opp endringen.
- Bruk semantiske elementer: `button` for handlinger (ikke `<a>` uten aktiv lenke).
- Unngå å stole på `alert()` og `prompt()` i produksjonsflyter som skal være tilgjengelige.

## 5) Beste praksis

- Plasser JavaScript-filer i `js/` og stilark i `css/`.
- Unngå globale variabler: bruk moduler (ESM) eller IIFE for små demoer.
- Bruk `textContent` når du skal sette enkel tekst (unngå `innerHTML` med mindre du trenger HTML).
- Valider brukerinput både i klient og på serveren.

## 6) Test og kjøring lokalt

Hvis du trenger en enkel HTTP-server (for f.eks. ES-moduler eller fetch):

```powershell
python -m http.server 8000
```

Åpne deretter `http://localhost:8000/Html/` og velg en demo-side.

## 7) Feilsøking

- Åpne DevTools → Console for JavaScript-feil.
- Sjekk Network-fanen for å se at `script`-filen faktisk lastes.
- Hvis `document.getElementById(...)` returnerer `null`, sjekk at elementet finnes og at id-en er riktig (eller flytt scriptet til footer/bruk `defer`).

---

Vil du at jeg også skal:

- Opprette de to demo-filene (`Html/demo-inline.html`, `Html/demo-ekstern.html`) og `js/demo.js` i repoen?
- Legge inn et kort avsnitt med praktiske øvelser og sjekkpunkter for `aria-live`?

Gi beskjed så ordner jeg det.

2. Skriv HTML-strukturen.
3. Legg til JavaScript-koden i en `<script>`-tag eller i en separat `.js`-fil.

### Eksempel:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Eksempel</title>
</head>
<body>
    <h1>Velkommen til min nettside!</h1>
    <p id="melding"></p> <!-- Et sted for å vise meldingen fra JavaScript -->

    <button onclick="visMelding()">Klikk her</button> <!-- En knapp som aktiverer JavaScript-funksjonen -->

    <script>
        // JavaScript-kode
        function visMelding() {
            const meldingElement = document.getElementById('melding');
            meldingElement.textContent = "Hei! Dette er en melding fra JavaScript.";
        }
    </script>
</body>
</html>
```

### Forklaring:
1. **HTML-struktur**:
   - `<h1>` og `<p>` brukes for å vise tekst.
   - `<button>` har en `onclick`-attributt som kaller JavaScript-funksjonen `visMelding()` når knappen klikkes.

2. **JavaScript-kode**:
   - Funksjonen `visMelding()` finner elementet med `id="melding"` ved hjelp av `document.getElementById()`.
   - Den endrer teksten i `<p>`-elementet ved å sette `textContent`.

3. **Kjøring**:
   - Lagre filen som `index.html` og åpne den i en nettleser.
   - Klikk på knappen for å se meldingen fra JavaScript.

På denne måten kan du enkelt koble JavaScript-funksjonalitet til en nettside! 😄
Selvfølgelig! Her er en enkel oppskrift for hvordan du kan vise JavaScript-kode og funksjonalitet på en nettside ved hjelp av HTML.

### Oppskrift:
1. Lag en HTML-fil (f.eks. `index.html`).
2. Skriv HTML-strukturen.
3. Legg til JavaScript-koden i en `<script>`-tag eller i en separat `.js`-fil.

### Eksempel:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Eksempel</title>
</head>
<body>
    <h1>Velkommen til min nettside!</h1>
    <p id="melding"></p> <!-- Et sted for å vise meldingen fra JavaScript -->

    <button onclick="visMelding()">Klikk her</button> <!-- En knapp som aktiverer JavaScript-funksjonen -->

    <script>
        // JavaScript-kode
        function visMelding() {
            const meldingElement = document.getElementById('melding');
            meldingElement.textContent = "Hei! Dette er en melding fra JavaScript.";
        }
    </script>
</body>
</html>
```

### Forklaring:
1. **HTML-struktur**:
   - `<h1>` og `<p>` brukes for å vise tekst.
   - `<button>` har en `onclick`-attributt som kaller JavaScript-funksjonen `visMelding()` når knappen klikkes.

2. **JavaScript-kode**:
   - Funksjonen `visMelding()` finner elementet med `id="melding"` ved hjelp av `document.getElementById()`.
   - Den endrer teksten i `<p>`-elementet ved å sette `textContent`.

3. **Kjøring**:
   - Lagre filen som `index.html` og åpne den i en nettleser.
   - Klikk på knappen for å se meldingen fra JavaScript.

På denne måten kan du enkelt koble JavaScript-funksjonalitet til en nettside! 😄
Selvfølgelig! Her er en enkel oppskrift for hvordan du kan vise JavaScript-kode og funksjonalitet på en nettside ved hjelp av HTML.

### Oppskrift:
1. Lag en HTML-fil (f.eks. `index.html`).
2. Skriv HTML-strukturen.
3. Legg til JavaScript-koden i en `<script>`-tag eller i en separat `.js`-fil.

### Eksempel:

```html
<!DOCTYPE html>
<html lang="no">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Eksempel</title>
</head>
<body>
    <h1>Velkommen til min nettside!</h1>
    <p id="melding"></p> <!-- Et sted for å vise meldingen fra JavaScript -->

    <button onclick="visMelding()">Klikk her</button> <!-- En knapp som aktiverer JavaScript-funksjonen -->

    <script>
        // JavaScript-kode
        function visMelding() {
            const meldingElement = document.getElementById('melding');
            meldingElement.textContent = "Hei! Dette er en melding fra JavaScript.";
        }
    </script>
</body>
</html>
```

### Forklaring:
1. **HTML-struktur**:
   - `<h1>` og `<p>` brukes for å vise tekst.
   - `<button>` har en `onclick`-attributt som kaller JavaScript-funksjonen `visMelding()` når knappen klikkes.

2. **JavaScript-kode**:
   - Funksjonen `visMelding()` finner elementet med `id="melding"` ved hjelp av `document.getElementById()`.
   - Den endrer teksten i `<p>`-elementet ved å sette `textContent`.

3. **Kjøring**:
   - Lagre filen som `index.html` og åpne den i en nettleser.
   - Klikk på knappen for å se meldingen fra JavaScript.

På denne måten kan du enkelt koble JavaScript-funksjonalitet til en nettside! 😄