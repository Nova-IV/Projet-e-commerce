// products.js - Gestion des produits et fonctionnalités e-commerce

class ProductManager {
    constructor() {
        this.products = [];
        this.categories = [];
        this.cart = [];
        this.wishlist = [];
    }

    // Initialiser les produits depuis les données JSON
    async loadProducts() {
        try {
            // Charger les produits depuis products.json
            const response = await fetch('./data/products.json');
            this.products = await response.json();
            this.renderProducts();
        } catch (error) {
            console.error('Erreur lors du chargement des produits:', error);
            // Utiliser des données par défaut si le fichier JSON n'existe pas
            this.loadDefaultProducts();
        }
    }

    // Données par défaut si pas de JSON
    loadDefaultProducts() {
        this.products = [
            {
                id: 1,
                name: 'Cream',
                price: 26,
                oldPrice: 36,
                rating: 5,
                reviews: 65,
                category: 'skincare',
                image: '🧴'
            },
            {
                id: 2,
                name: 'Parfum',
                price: 26,
                oldPrice: 36,
                rating: 5,
                reviews: 65,
                category: 'perfume',
                image: '🌸'
            },
            {
                id: 3,
                name: 'Mascara',
                price: 26,
                oldPrice: 36,
                rating: 5,
                reviews: 66,
                category: 'makeup',
                image: '🖌️'
            },
            {
                id: 4,
                name: 'Lipstick',
                price: 26,
                oldPrice: 36,
                rating: 5,
                reviews: 65,
                category: 'makeup',
                image: '💄'
            },
            {
                id: 5,
                name: 'Blush',
                price: 26,
                oldPrice: 36,
                rating: 5,
                reviews: 65,
                category: 'makeup',
                image: '🌹'
            }
        ];
        this.renderProducts();
    }

    // Afficher les produits
    renderProducts(filterCategory = null) {
        const productGrids = document.querySelectorAll('.product-grid');
        
        productGrids.forEach(grid => {
            grid.innerHTML = '';
            
            let productsToShow = this.products;
            if (filterCategory) {
                productsToShow = this.products.filter(product => product.category === filterCategory);
            }

            productsToShow.forEach(product => {
                const productCard = this.createProductCard(product);
                grid.appendChild(productCard);
            });
        });
    }

    // Créer une carte produit
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        card.innerHTML = `
            <div class="product-image">${product.image}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">
                <span class="current-price">$${product.price}</span>
                ${product.oldPrice ? `<span class="old-price">$${product.oldPrice}</span>` : ''}
            </div>
            <div class="product-rating">
                <span class="star">${'★'.repeat(product.rating)}</span>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" onclick="productManager.addToCart(${product.id})">
                    Ajouter au panier
                </button>
                <button class="add-to-wishlist-btn" onclick="productManager.addToWishlist(${product.id})">
                    ♡
                </button>
            </div>
        `;

        // Ajouter les événements hover
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });

        return card;
    }

    // Ajouter au panier
    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product) {
            const existingItem = this.cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                this.cart.push({ ...product, quantity: 1 });
            }
            
            this.updateCartDisplay();
            this.showNotification(`${product.name} ajouté au panier!`);
        }
    }

    // Ajouter à la wishlist
    addToWishlist(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product && !this.wishlist.find(item => item.id === productId)) {
            this.wishlist.push(product);
            this.updateWishlistDisplay();
            this.showNotification(`${product.name} ajouté à la wishlist!`);
        }
    }

    // Mettre à jour l'affichage du panier
    updateCartDisplay() {
        const cartIcon = document.querySelector('.nav-icons span:last-child');
        if (cartIcon) {
            const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            cartIcon.innerHTML = `🛒 ${totalItems > 0 ? `(${totalItems})` : ''}`;
        }
    }

    // Mettre à jour l'affichage de la wishlist
    updateWishlistDisplay() {
        const wishlistIcon = document.querySelector('.nav-icons span:first-child');
        if (wishlistIcon) {
            wishlistIcon.innerHTML = `🤍 ${this.wishlist.length > 0 ? `(${this.wishlist.length})` : ''}`;
        }
    }

    // Filtrer par catégorie
    filterByCategory(category) {
        this.renderProducts(category);
        
        // Mettre à jour les catégories actives
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
        });
        
        const activeCategoryCard = document.querySelector(`[data-category="${category}"]`);
        if (activeCategoryCard) {
            activeCategoryCard.classList.add('active');
        }
    }

    // Rechercher des produits
    searchProducts(searchTerm) {
        const filteredProducts = this.products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        this.renderFilteredProducts(filteredProducts);
    }

    // Afficher les produits filtrés
    renderFilteredProducts(products) {
        const productGrids = document.querySelectorAll('.product-grid');
        
        productGrids.forEach(grid => {
            grid.innerHTML = '';
            
            if (products.length === 0) {
                grid.innerHTML = '<p>Aucun produit trouvé.</p>';
                return;
            }

            products.forEach(product => {
                const productCard = this.createProductCard(product);
                grid.appendChild(productCard);
            });
        });
    }

    // Afficher une notification
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #e74c3c;
            color: white;
            padding: 15px 20px;
            border-radius: 5px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Obtenir le total du panier
    getCartTotal() {
        return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    // Vider le panier
    clearCart() {
        this.cart = [];
        this.updateCartDisplay();
    }

    // Supprimer un item du panier
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartDisplay();
    }
}

// Initialiser le gestionnaire de produits
const productManager = new ProductManager();

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    productManager.loadProducts();
});