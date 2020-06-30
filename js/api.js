class API {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}
	// obtain all currencies
	async obatainCurrencyAPI() {
		const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apiKey}`;

		//fetch Api
		const urlObtainCurrencies = await fetch(url);

		// Json response
		const currencies = await urlObtainCurrencies.json();

		return {
			currencies
		}
	}

	async obtainValues(currency, criptoCurrency) {
		const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}&api_key=${this.apiKey}`;
		//Consult restaApi
		const urlConvert = await fetch(url);

		const result = await urlConvert.json();

		return {
			result
		}

	}
}