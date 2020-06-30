const cotizer = new API('902dfac06e9408f87ea1dc9951bad3bb125eb04bbe087c4817139508507755e2');

class Interfaz {

	constructor() {
		this.init();
	}
	init() {
		this.constructSelect();
	}
	constructSelect() {
		cotizer.obatainCurrencyAPI()
			.then(currencies => {
				// create select option
				const select = document.querySelector('#criptomoneda');
				// Api result iterator
				let order = [];
				for (const [key, value] of Object.entries(currencies.currencies.Data)) {
					// Add symbol and name as options

					const option = document.createElement('option');
					option.value = value.Symbol;
					order.push(option.value)
					if (option.value == "BTC" || option.value == "ETH") {
						option.appendChild(document.createTextNode(value.CoinName));
						select.appendChild(option);
					}
				}
				//order.sort();
				//console.log(order);

			})
	}
	showMsj(msj, clases) {
		const div = document.createElement('div');
		div.className = clases;
		div.appendChild(document.createTextNode(msj));

		//select mesj and show content
		const divMsj = document.querySelector('.mensajes');
		divMsj.appendChild(div);

		// Delete alert
		setTimeout(() => {
			document.querySelector('.mensajes div').remove();
		}, 3000);
	}
	// Print result of cotization
	showResult(result, currenc, crypto) {

		const dataResult = result[crypto][currenc];
		// Cut digitsd in price
		let price = dataResult.PRICE.toFixed(2);
		let percent = dataResult.CHANGEPCTDAY.toFixed(2);
		let lastUpdate = new Date(dataResult.LASTUPDATE * 1000);
		//Templete construction
		let templateHTML = `
			<dic class="card bg-primary">
				<dic class="card-body text-light">
					<h2 class="card-title"> Result: </h2>
					<p>
						Market Price for ${dataResult.FROMSYMBOL} to 
						currency ${dataResult.TOSYMBOL}: $${price}
					</p>
					<p>Last Day Variation: %${percent}</p>
					<p>Updated: ${lastUpdate}</p>
				</div>
			</dic>
		`

		//Insert result to template
		document.querySelector("#resultado").innerHTML = templateHTML;


	}
}