// filepath: c:\Cours HTML\Projet e-commerce\epicerie-ecommerce\src\js\cart.js
// cart.js

// Initialize the shopping cart
let cart = [];

// Function to add an item to the cart
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Function to update the cart display
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

// Function to get cart items
function getCartItems() {
    return cart;
}

// Export functions for use in other modules
export { addToCart, removeFromCart, getCartItems };