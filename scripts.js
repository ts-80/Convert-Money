const button = document.getElementById('conver-button')
const select = document.getElementById('select')


const bitcoin = 0.0000079



const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const real = document.getElementById('real-value-text')
    const currencyValue = document.getElementById('currency-value-text')

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dollar = data.USDBRL.bid
    const euro = data.EURBRL.bid
    const bitcoin = data.BTCBRL.bid



    real.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: 'currency', currency: 'BRL'
        }).format(inputReais)
    if (select.value === 'US$ Dolar Americano') {
        currencyValue.innerHTML = new Intl.NumberFormat('en-US',
            {
                style: 'currency', currency: 'USD'
            }).format(inputReais / dollar)
    }
    if (select.value === '€ Euro') {
        currencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            {
                style: 'currency', currency: 'EUR'
            }).format(inputReais / euro)
    }
    if (select.value === 'Bitcoin') {
        currencyValue.innerHTML = (inputReais * bitcoin).toFixed(7)
    }

}

currencyChange = () => {
    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'US$ Dolar Americano'
        currencyImg.src = "./assets/estados-unidos (1) 1.svg"
    }
    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = "./assets/Euro.svg"
    }
    if (select.value === 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = "./assets/Bitcoin.svg"
    }



    convertValues()
}
button.addEventListener('click', convertValues)
select.addEventListener('change', currencyChange)
