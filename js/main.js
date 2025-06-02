document.addEventListener('DOMContentLoaded', () => {
    console.log('E-commerce site loaded successfully.');

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

    
});