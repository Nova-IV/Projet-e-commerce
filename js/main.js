// main.js - Fonctions principales et initialisation

// Fonction principale d'initialisation
function initializeApp() {
    updateCountdown();
    initializeNavigation();
    initializeProductCards();
    initializeCategoryCards();
    initializeSearch();
    initializeNewsletter();
    initializeMobileMenu();
    initializeLazyLoading();
}

// Countdown Timer
function updateCountdown() {
    const now = new Date().getTime();
    const flashSaleEnd = now + (3 * 24 * 60 * 60 * 1000) + (23 * 60 * 60 * 1000) + (19 * 60 * 1000) + (56 * 1000);
    const distance = flashSaleEnd - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const countdownNumbers = document.querySelectorAll('.countdown-number');
        if (countdownNumbers.length >= 4) {
            countdownNumbers[0].textContent = days.toString().padStart(2, '0');
            countdownNumbers[1].textContent = hours.toString().padStart(2, '0');
            countdownNumbers[2].textContent = minutes.toString().padStart(2, '0');
            countdownNumbers[3].textContent = seconds.toString().padStart(2, '0');
        }
    }
}

// Initialiser la navigation
function initializeNavigation() {
    // Smooth scroll pour la navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navigation arrows functionality
    document.querySelectorAll('.nav-arrow').forEach(arrow => {
        arrow.addEventListener('click', function() {
            const isLeft = this.textContent.includes('←');
            const productGrid = this.closest('section').querySelector('.product-grid');
            
            if (productGrid) {
                const scrollAmount = 250;
                if (isLeft) {
                    productGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                } else {
                    productGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            }
        });
    });
}

// Initialiser les cartes produits
function initializeProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialiser les cartes de catégories
function initializeCategoryCards() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// Initialiser la recherche
function initializeSearch() {
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value;
            if (searchTerm) {
                alert('Recherche pour: ' + searchTerm);
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const searchTerm = this.value;
                if (searchTerm) {
                    alert('Recherche pour: ' + searchTerm);
                }
            }
        });
    }
}

// Initialiser la newsletter
function initializeNewsletter() {
    const newsletterButton = document.querySelector('.newsletter-form button');
    const newsletterInput = document.querySelector('.newsletter-form input');
    
    if (newsletterButton && newsletterInput) {
        newsletterButton.addEventListener('click', function() {
            const email = newsletterInput.value;
            if (email) {
                alert('Merci pour votre inscription avec l\'email: ' + email);
                newsletterInput.value = '';
            }
        });
    }
}

// Menu mobile
function initializeMobileMenu() {
    if (window.innerWidth <= 768) {
        const mobileMenuBtn = document.createElement('button');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.className = 'mobile-menu-btn';
        mobileMenuBtn.style.cssText = 'background: none; border: none; font-size: 24px; cursor: pointer;';
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        
        const navWrapper = document.querySelector('.nav-wrapper');
        const navRight = document.querySelector('.nav-right');
        if (navWrapper && navRight) {
            navWrapper.insertBefore(mobileMenuBtn, navRight);
        }
    }
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Lazy loading
function initializeLazyLoading() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.product-card, .category-card, .arrival-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Démarrer le timer de countdown
setInterval(updateCountdown, 1000);

// Initialiser l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initializeApp);