// filepath: c:\Cours HTML\Projet e-commerce\epicerie-ecommerce\src\js\main.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('E-commerce site loaded successfully.');

    // Add event listeners for login and registration
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    if (loginButton) {
        loginButton.addEventListener('click', () => {
            window.location.href = 'pages/login.html';
        });
    }

    if (registerButton) {
        registerButton.addEventListener('click', () => {
            window.location.href = 'pages/register.html';
        });
    }

    // Add other initialization code here
});