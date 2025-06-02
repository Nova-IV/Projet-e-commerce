// cart.js

let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = ''; // Clear the current cart display

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(itemElement);
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const totalElement = document.createElement('div');
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    cartContainer.appendChild(totalElement);
}

function getCartItems() {
    return cart;
}

export { addToCart, removeFromCart, getCartItems };