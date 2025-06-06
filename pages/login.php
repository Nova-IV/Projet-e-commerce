<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in to Exclusive</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/main.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="nav-wrapper">
                <div class="logo">Exclusive</div>
                <nav class="nav-menu">
                    <a href="../index.php">Home</a>
                    <a href="contact.php">Contact</a>
                    <a href="about.php">About</a>
                    <a href="register.php">Sign Up</a>
                </nav>
                <div class="nav-right">
                    <div class="search-box">
                        <input type="text" placeholder="What are you looking for?">
                        <button type="submit">🔍</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="auth-main">
        <div class="container">
            <div class="auth-container">
                <!-- Left Side - Image -->
                <div class="auth-image">
                    <img src="../assets/login-image.jpg" alt="Woman with perfume bottle">
                </div>

                <!-- Right Side - Form -->
                <div class="auth-form-container">
                    <div class="auth-form-content">
                        <h1>Log in to Exclusive</h1>
                        <p class="auth-subtitle">Enter your details below</p>

                        <form class="auth-form" id="loginForm">
                            <div class="form-group">
                                <input type="email" id="email" name="email" placeholder="Email or Phone Number" required>
                            </div>
                            
                            <div class="form-group">
                                <input type="password" id="password" name="password" placeholder="Password" required>
                            </div>

                            <div class="form-actions">
                                <button type="submit" class="auth-btn primary">Log In</button>
                                <a href="#" class="forgot-password">Forget Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Exclusive</h3>
                    <div class="newsletter">
                        <h4>Subscribe</h4>
                        <p>Get 10% off your first order</p>
                        <div class="newsletter-form">
                            <input type="email" placeholder="Enter your email">
                            <button type="submit">📧</button>
                        </div>
                    </div>
                </div>

                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li>hbjshdbcjhbsdchjb</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Account</h3>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Quick Link</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-section">
                    <h3>Download App</h3>
                    <p>Save $3 with App New User Only</p>
                    <div class="app-download">
                        <div class="qr-code">📱</div>
                        <div class="app-buttons">
                            <div class="app-btn">📱 Google Play</div>
                            <div class="app-btn">🍎 App Store</div>
                        </div>
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

    <script src="../js/auth.js"></script>
</body>
</html>php