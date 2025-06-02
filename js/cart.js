// cart.js - Gestion complète du panier d'achat

class CartManager {
    constructor() {
        this.cartItems = [];
        this.shippingCost = 0;
        this.taxRate = 0.20; // 20% TVA
        this.freeShippingThreshold = 140;
    }

    // Ajouter un produit au panier
    addItem(product, quantity = 1) {
        const existingItem = this.cartItems.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartItems.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.updateCartDisplay();
        this.saveCart();
        return this.cartItems;
    }

    // Supprimer un produit du panier
    removeItem(productId) {
        this.cartItems = this.cartItems.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.saveCart();
        return this.cartItems;
    }

    // Mettre à jour la quantité d'un produit
    updateQuantity(productId, newQuantity) {
        const item = this.cartItems.find(item => item.id === productId);
        
        if (item) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = newQuantity;
                this.updateCartDisplay();
                this.saveCart();
            }
        }
        
        return this.cartItems;
    }

    // Calculer le sous-total
    getSubtotal() {
        return this.cartItems.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    // Calculer les frais de livraison
    getShippingCost() {
        const subtotal = this.getSubtotal();
        return subtotal >= this.freeShippingThreshold ? 0 : 15; // 15€ de frais de port
    }

    // Calculer la TVA
    getTaxAmount() {
        const subtotal = this.getSubtotal();
        return subtotal * this.taxRate;
    }

    // Calculer le total
    getTotal() {
        return this.getSubtotal() + this.getShippingCost() + this.getTaxAmount();
    }

    // Obtenir le nombre total d'articles
    getTotalItems() {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    }

    // Vider le panier
    clearCart() {
        this.cartItems = [];
        this.updateCartDisplay();
        this.saveCart();
        return this.cartItems;
    }

    // Mettre à jour l'affichage du panier
    updateCartDisplay() {
        this.updateCartIcon();
        this.updateCartPage();
        this.updateCartSummary();
    }

    // Mettre à jour l'icône du panier dans la navigation
    updateCartIcon() {
        const cartIcon = document.querySelector('.nav-icons .cart-icon');
        const totalItems = this.getTotalItems();
        
        if (cartIcon) {
            cartIcon.innerHTML = `🛒 ${totalItems > 0 ? `<span class="cart-count">${totalItems}</span>` : ''}`;
        }
    }

    // Mettre à jour la page du panier
    updateCartPage() {
        const cartContainer = document.querySelector('.cart-items-container');
        
        if (!cartContainer) return;

        if (this.cartItems.length === 0) {
            cartContainer.innerHTML = `
                <div class="empty-cart">
                    <h3>Votre panier est vide</h3>
                    <p>Ajoutez des produits pour commencer vos achats</p>
                    <a href="products.html" class="continue-shopping-btn">Continuer les achats</a>
                </div>
            `;
            return;
        }

        cartContainer.innerHTML = this.cartItems.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <div class="cart-item-image">
                    ${item.image || '📦'}
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">€${item.price.toFixed(2)}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn minus" onclick="cartManager.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus" onclick="cartManager.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-total">
                    €${(item.price * item.quantity).toFixed(2)}
                </div>
                <button class="remove-item-btn" onclick="cartManager.removeItem(${item.id})">🗑️</button>
            </div>
        `).join('');
    }

    // Mettre à jour le résumé du panier
    updateCartSummary() {
        const summaryContainer = document.querySelector('.cart-summary');
        
        if (!summaryContainer) return;

        const subtotal = this.getSubtotal();
        const shipping = this.getShippingCost();
        const tax = this.getTaxAmount();
        const total = this.getTotal();

        summaryContainer.innerHTML = `
            <h3>Résumé de la commande</h3>
            <div class="summary-line">
                <span>Sous-total:</span>
                <span>€${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-line">
                <span>Livraison:</span>
                <span>${shipping === 0 ? 'Gratuite' : '€' + shipping.toFixed(2)}</span>
            </div>
            <div class="summary-line">
                <span>TVA (20%):</span>
                <span>€${tax.toFixed(2)}</span>
            </div>
            <div class="summary-line total">
                <span><strong>Total:</strong></span>
                <span><strong>€${total.toFixed(2)}</strong></span>
            </div>
            ${subtotal < this.freeShippingThreshold ? 
                `<p class="free-shipping-notice">
                    Ajoutez €${(this.freeShippingThreshold - subtotal).toFixed(2)} pour bénéficier de la livraison gratuite!
                </p>` : 
                '<p class="free-shipping-notice">🎉 Livraison gratuite!</p>'
            }
            <button class="checkout-btn" onclick="cartManager.proceedToCheckout()">
                Procéder au paiement
            </button>
        `;
    }

    // Procéder au checkout
    proceedToCheckout() {
        if (this.cartItems.length === 0) {
            alert('Votre panier est vide!');
            return;
        }

        // Rediriger vers la page de checkout
        window.location.href = 'checkout.html';
    }

    // Sauvegarder le panier dans localStorage
    saveCart() {
        try {
            localStorage.setItem('cart', JSON.stringify(this.cartItems));
        } catch (error) {
            console.warn('Impossible de sauvegarder le panier:', error);
        }
    }

    // Charger le panier depuis localStorage
    loadCart() {
        try {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                this.cartItems = JSON.parse(savedCart);
                this.updateCartDisplay();
            }
        } catch (error) {
            console.warn('Impossible de charger le panier:', error);
            this.cartItems = [];
        }
    }

    // Appliquer un code promo
    applyPromoCode(code) {
        const promoCodes = {
            'WELCOME10': { type: 'percentage', value: 10, description: '10% de réduction' },
            'FIRST20': { type: 'percentage', value: 20, description: '20% de réduction' },
            'FREE50': { type: 'fixed', value: 50, description: '50€ de réduction' }
        };

        const promo = promoCodes[code.toUpperCase()];
        
        if (promo) {
            this.appliedPromo = promo;
            this.updateCartDisplay();
            return { success: true, message: `Code promo appliqué: ${promo.description}` };
        } else {
            return { success: false, message: 'Code promo invalide' };
        }
    }

    // Calculer la réduction
    getDiscountAmount() {
        if (!this.appliedPromo) return 0;

        const subtotal = this.getSubtotal();
        
        if (this.appliedPromo.type === 'percentage') {
            return subtotal * (this.appliedPromo.value / 100);
        } else if (this.appliedPromo.type === 'fixed') {
            return Math.min(this.appliedPromo.value, subtotal);
        }
        
        return 0;
    }

    // Obtenir les données du panier pour l'API
    getCartData() {
        return {
            items: this.cartItems,
            subtotal: this.getSubtotal(),
            shipping: this.getShippingCost(),
            tax: this.getTaxAmount(),
            discount: this.getDiscountAmount(),
            total: this.getTotal() - this.getDiscountAmount(),
            totalItems: this.getTotalItems()
        };
    }

    // Initialiser les événements du panier
    initializeCartEvents() {
        // Event listener pour le bouton d'ajout au panier
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(e.target.dataset.productId);
                const product = this.getProductById(productId);
                
                if (product) {
                    this.addItem(product);
                    this.showCartNotification(`${product.name} ajouté au panier!`);
                }
            }
        });

        // Event listener pour l'icône du panier
        const cartIcon = document.querySelector('.nav-icons .cart-icon');
        if (cartIcon) {
            cartIcon.addEventListener('click', () => {
                window.location.href = 'cart.html';
            });
        }
    }

    // Afficher une notification
    showCartNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            background: #28a745;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Méthode helper pour obtenir un produit par ID
    getProductById(id) {
        // Cette méthode devrait être implémentée selon votre système de gestion des produits
        // Pour l'instant, retourne un produit example
        return {
            id: id,
            name: 'Produit',
            price: 26,
            image: '📦'
        };
    }
}

// Initialiser le gestionnaire de panier
const cartManager = new CartManager();

// Charger le panier au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    cartManager.loadCart();
    cartManager.initializeCartEvents();
});