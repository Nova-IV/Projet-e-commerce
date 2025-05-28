// filepath: c:\Cours HTML\Projet e-commerce\epicerie-ecommerce\src\js\products.js

// Sample product data
const products = [
    {
        id: 1,
        name: "Apple",
        price: 1.00,
        description: "Fresh red apples",
        image: "assets/images/apple.jpg"
    },
    {
        id: 2,
        name: "Banana",
        price: 0.50,
        description: "Ripe bananas",
        image: "assets/images/banana.jpg"
    },
    {
        id: 3,
        name: "Carrot",
        price: 0.30,
        description: "Organic carrots",
        image: "assets/images/carrot.jpg"
    }
];

// Function to display products
function displayProducts() {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Function to add product to cart
function addToCart(productId) {
    // Logic to add product to cart
    console.log(`Product ${productId} added to cart`);
}

// Call displayProducts on page load
document.addEventListener('DOMContentLoaded', displayProducts);