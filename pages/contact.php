
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Épicerie E-commerce</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1>Contactez-nous</h1>
    </header>
    <main>
        <form action="#" method="post">
            <label for="name">Nom:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
        <h2>Connexion</h2>
        <form action="login.html" method="get">
            <label for="login-email">Email:</label>
            <input type="email" id="login-email" name="login-email" required>

            <label for="login-password">Mot de passe:</label>
            <input type="password" id="login-password" name="login-password" required>

            <button type="submit">Se connecter</button>
        </form>
        <h2>Inscription</h2>
        <form action="register.html" method="get">
            <label for="register-name">Nom:</label>
            <input type="text" id="register-name" name="register-name" required>

            <label for="register-email">Email:</label>
            <input type="email" id="register-email" name="register-email" required>

            <label for="register-password">Mot de passe:</label>
            <input type="password" id="register-password" name="register-password" required>

            <button type="submit">S'inscrire</button>
        </form>
    </main>
    <footer>
        <p>&copy; 2023 Épicerie E-commerce. Tous droits réservés.</p>
    </footer>
</body>
</html>