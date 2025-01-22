// Fonction pour mettre à jour les prix
async function updatePrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();

        // Mise à jour du prix Bitcoin
        const btcPrice = document.querySelector('#bitcoin .price');
        btcPrice.textContent = `$${data.bitcoin.usd.toLocaleString()}`;

        // Mise à jour du prix Ethereum
        const ethPrice = document.querySelector('#ethereum .price');
        ethPrice.textContent = `$${data.ethereum.usd.toLocaleString()}`;
    } catch (error) {
        console.error('Erreur lors de la récupération des prix:', error);
    }
}

// Mettre à jour les prix toutes les 30 secondes
updatePrices();
setInterval(updatePrices, 30000);