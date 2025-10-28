// Pakk koden i en IIFE (Immediately Invoked Function Expression)
// Dette hindrer at variabler lekker til global scope
(function () { // Start IIFE

	// 1) Definer funksjonen som skal levere teksten
	function test() { // Funksjonsdeklarasjon: test()
		// Returner en klar tekststreng som vises i HTML
		return "Dette er resultatet fra funksjonen i den eksterne JS-filen."; // returverdi
	} // slutt test()

	// 2) Hent elementet i DOM som skal vise resultatet
	const testElement = document.getElementById("testresultatet"); // null hvis elementet ikke finnes

	// 3) Sikkerhetsjekk: kontroller at elementet eksisterer før endring
	if (testElement) { // hvis elementet finnes
		// Sett tekstinnhold trygt med textContent
		testElement.textContent = test(); // kall test() og vis returverdien
	} else { // hvis elementet ikke ble funnet
		// Logg en norsk advarsel som hjelper ved feil i HTML-markup
		console.warn('Elementet #testresultatet ble ikke funnet i dokumentet.');
	}

})(); // Avslutt og umiddelbart kjør IIFE