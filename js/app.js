const ui = new Interfaz();

ui.showMsj('text', 'clases');
// read form and validate
const form = document.querySelector('#formulario');

//Evet listeners
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Read currency
	const currencySelect = document.querySelector('#moneda');
	const selectedCurrency = currencySelect.options[currencySelect.selectedIndex].value;

	const cryptoSelect = document.querySelector('#criptomoneda');
	const selectedCrypto = cryptoSelect.options[cryptoSelect.selectedIndex].value;

	if (selectedCurrency === '' || selectedCrypto === '') {
		// Error alert
		ui.showMsj('Both fields are mandathory!', 'alert bg-danger text-center');

	} else {
		//All good
		cotizer.obtainValues(selectedCurrency, selectedCrypto)
			.then(data => {
				ui.showResult(data.result.RAW, selectedCurrency, selectedCrypto);

			})
	}
})