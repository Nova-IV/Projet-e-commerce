
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Panier - Épicerie E-commerce</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/responsive.css">
</head>
<body>
    <header>
        <h1>Mon Panier</h1>
        <nav>
            <ul>
                <li><a href="products.html">Produits</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="login.html">Connexion</a></li>
                <li><a href="register.html">Inscription</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="cart">
            <h2>Articles dans votre panier</h2>
            <div id="cart-items">
                
            </div>
            <div id="cart-total">
                <p>Total: <span id="total-amount">0,00 €</span></p>
            </div>
            <button id="checkout-button">Procéder au paiement</button>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Épicerie E-commerce. Tous droits réservés.</p>
    </footer>
    <script src="../js/main.js"></script>
    <script src="../js/cart.js"></script>
</body>
</html>