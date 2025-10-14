# JavaScript-eksempler for læring

Denne filen inneholder komplette kodeeksempler som er for lange eller kan trigge linter i HTML-filer.

## 1. Inline script

```html
<script>
console.log('Hei fra inline script');
</script>
```

## 2. Ekstern fil

`script.js`:

```js
// script.js
function externalExample() {
  console.log('Ekstern funksjon kjører');
}
```

Inkluder med:

```html
<script src="../JS/script.js" defer></script>
```

## 3. Defer og Async

```html
<script src="app.js" defer></script>
<script src="ads.js" async></script>
```

## 4. Vente på DOM

```js
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.background = 'lightblue';
});
```

## 5. Dynamisk innlasting

```js
function loadScript(url) {
  const s = document.createElement('script');
  s.src = url;
  document.body.appendChild(s);
}
```

## 6. Moduler (ES Modules)

`math.js`:

```js
export function add(a, b) { return a + b; }
```

`main.js`:

```js
import { add } from './math.js';
console.log(add(2, 3));
```

> Merk: moduler krever at du enten bruker `<script type="module">` eller serverer filene fra en server hvor modul-requests støttes.

## 7. Feilsøking

Åpne utviklerverktøy (F12) og se Console og Network for feil og lastetid.
