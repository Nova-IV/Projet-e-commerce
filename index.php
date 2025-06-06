<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exclusive - Cosmétiques de luxe</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    
    <div class="top-bar">
        <div class="container">
            mettre un titre en cas de promos | ShopNow | English ▼
        </div>
    </div>

   
    <header class="header">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">Exclusive</div>
                <nav>
                    <ul class="nav-menu">
                        <li><a href="#home">Home</a></li>
                        <li><a href="pages/contact.php">Contact</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="pages/register.php">Sign Up</a></li>
                    </ul>
                </nav>
                <div class="nav-right">
                    <div class="search-box">
                        <input type="text" placeholder="What are you looking for?">
                        <button>🔍</button>
                    </div>
                    <div class="nav-icons">
                        <span>🤍</span>
                        <span onclick="window.location.href='pages/cart.php'">🛒</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <div class="main-content">
        <aside class="sidebar">
            <ul class="sidebar-menu">
                <li><a href="#">Women's Parfum <span>›</span></a></li>
                <li><a href="#">Men's Parfum <span>›</span></a></li>
                <li><a href="#">Make Up <span>›</span></a></li>
                <li><a href="#">Skincare</a></li>
            </ul>
        </aside>

        <main class="content-area">
            <section class="hero-section">
                <div class="hero-content">
                    <h1>New Lipstick</h1>
                    <button class="hero-btn">
                        Shop Now →
                    </button>
                </div>
                <div class="hero-image"></div>
            </section>

            <section class="flash-sales">
                <div class="section-header">
                    <div class="section-title">
                        <span class="section-badge">Today's</span>
                        <h2>Flash Sales</h2>
                    </div>
                    <div class="countdown" id="countdown">
                        <div class="countdown-item">
                            <div class="countdown-label">Days</div>
                            <div class="countdown-number">03</div>
                        </div>
                        <span>:</span>
                        <div class="countdown-item">
                            <div class="countdown-label">Hours</div>
                            <div class="countdown-number">23</div>
                        </div>
                        <span>:</span>
                        <div class="countdown-item">
                            <div class="countdown-label">Minutes</div>
                            <div class="countdown-number">19</div>
                        </div>
                        <span>:</span>
                        <div class="countdown-item">
                            <div class="countdown-label">Seconds</div>
                            <div class="countdown-number">56</div>
                        </div>
                    </div>
                    <div class="navigation-arrows">
                        <div class="nav-arrow">←</div>
                        <div class="nav-arrow">→</div>
                    </div>
                </div>

                <div class="product-grid" id="flash-products">
                </div>

                <button class="view-all-btn" onclick="window.location.href='pages/products.php'">View All Products</button>
            </section>

            <!-- Categories -->
            <section class="categories-section">
                <div class="section-header">
                    <div class="section-title">
                        <span class="section-badge">Categories</span>
                        <h2>Category</h2>
                    </div>
                    <div class="navigation-arrows">
                        <div class="nav-arrow">←</div>
                        <div class="nav-arrow">→</div>
                    </div>
                </div>

                <div class="categories-grid">
                    <div class="category-card">
                        <div class="category-icon">🌸</div>
                        <div class="category-name">Perfume</div>
                    </div>
                    <div class="category-card active">
                        <div class="category-icon">💄</div>
                        <div class="category-name">Makeup</div>
                    </div>
                    <div class="category-card">
                        <div class="category-icon">🧴</div>
                        <div class="category-name">Skincare</div>
                    </div>
                </div>
            </section>

            <!-- Best Selling Products -->
            <section class="flash-sales">
                <div class="section-header">
                    <div class="section-title">
                        <span class="section-badge">This Month</span>
                        <h2>Best Selling Products</h2>
                    </div>
                    <button class="view-all-btn" style="margin: 0;">View All</button>
                </div>

                <div class="product-grid" id="best-selling-products">
                </div>
            </section>

            <!-- New Arrival -->
            <section class="new-arrival">
                <div class="section-header">
                    <div class="section-title">
                        <span class="section-badge">Featured</span>
                        <h2>New Arrival</h2>
                    </div>
                </div>

                <div class="arrival-grid">
                    <div class="arrival-card">
                        <h3>Shop Now</h3>
                        <button class="arrival-btn">Shop Now</button>
                    </div>
                    <div class="arrival-grid-right">
                        <div class="arrival-card">
                            <h3>Women's Collections</h3>
                            <button class="arrival-btn">Shop Now</button>
                        </div>
                        <div class="arrival-card">
                            <h3>Perfume</h3>
                            <button class="arrival-btn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- Features -->
    <section class="features-section">
        <div class="container">
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🚚</div>
                    <div class="feature-title">FREE AND FAST DELIVERY</div>
                    <div class="feature-desc">Free delivery for all orders over $140</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🎧</div>
                    <div class="feature-title">24/7 CUSTOMER SERVICE</div>
                    <div class="feature-desc">Friendly 24/7 customer support</div>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">✓</div>
                    <div class="feature-title">MONEY BACK GUARANTEE</div>
                    <div class="feature-desc">We return money within 30 days</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Exclusive</h3>
                    <div class="newsletter">
                        <p>Subscribe</p>
                        <p style="font-size: 14px; color: #ccc;">Get 10% off your first order</p>
                        <div class="newsletter-form">
                            <input type="email" placeholder="Enter your email">
                            <button>→</button>
                        </div>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li>hgjghdbcjhbsdcjhb</li>
                        <li><a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a></li>
                        <li>num</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="pages/login.php">My Account</a></li>
                        <li><a href="pages/login.php">Login / Register</a></li>
                        <li><a href="pages/cart.php">Cart</a></li>
                        <li><a href="pages/products.php">Shop</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="pages/contact.php">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Download App</h3>
                    <p style="font-size: 12px; color: #ccc; margin-bottom: 15px;">Save $3 with App New User Only</p>
                    <div class="app-buttons">
                        <div class="app-btn">📱 Google Play</div>
                        <div class="app-btn">🍎 App Store</div>
                    </div>
                    <div class="social-links">
                        <a href="#">📘</a>
                        <a href="#">🐦</a>
                        <a href="#">📷</a>
                        <a href="#">💼</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="js/products.js"></script>
    <script src="js/cart.js"></script>
    <script src="js/auth.js"></script>
    <script src="js/main.js"></script>
</body>
</html>