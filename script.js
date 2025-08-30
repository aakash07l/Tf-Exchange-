// Script to simulate price updates
const priceDisplay = document.getElementById('price-display');

function updatePrice() {
    // Simulate fetching prices
    const price = (Math.random() * (85 - 80) + 80).toFixed(2);
    priceDisplay.textContent = `Current Price: $${price}`;
}

updatePrice();
setInterval(updatePrice, 5000); // update every 5 seconds
