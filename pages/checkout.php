<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout - Épicerie E-commerce</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1>Checkout</h1>
    </header>
    <main>
        <section>
            <h2>Informations de facturation</h2>
            <form id="checkout-form">
                <label for="name">Nom:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="address">Adresse:</label>
                <input type="text" id="address" name="address" required>

                <label for="city">Ville:</label>
                <input type="text" id="city" name="city" required>

                <label for="zip">Code postal:</label>
                <input type="text" id="zip" name="zip" required>

                <button type="submit">Valider la commande</button>
            </form>
        </section>
        <section>
            <h2>Connexion / Inscription</h2>
            <div>
                <h3>Déjà un compte ?</h3>
                <a href="login.php">Se connecter</a>
            </div>
            <div>
                <h3>Nouveau ici ?</h3>
                <a href="register.php">Créer un compte</a>
            </div>
        </section>
    </main>
    <footer>
        <p>&copy; 2023 Épicerie E-commerce. Tous droits réservés.</p>
    </footer>
    <script src="../js/main.js"></script>
</body>
</html>