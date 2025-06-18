// auth.js - Gestion de l'authentification

// Données simulées pour les utilisateurs (en production, ceci serait géré par un backend)
let users = JSON.parse(localStorage.getItem('exclusive_users')) || [];
let currentUser = JSON.parse(localStorage.getItem('exclusive_current_user')) || null;

document.addEventListener('DOMContentLoaded', function() {
    initializeAuth();
});

function initializeAuth() {
    // Vérifier si on est sur la page de connexion
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Vérifier si on est sur la page d'inscription
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Gestion du bouton Google
    const googleBtn = document.querySelector('.auth-btn.google');
    if (googleBtn) {
        googleBtn.addEventListener('click', handleGoogleAuth);
    }

    
    updateAuthInterface();
}

// Gestion de la connexion
function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Validation des champs
    if (!email || !password) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }

    // Vérification des identifiants
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Connexion réussie
        currentUser = { ...user };
        delete currentUser.password; // Ne pas stocker le mot de passe
        localStorage.setItem('exclusive_current_user', JSON.stringify(currentUser));
        
        showNotification('Connexion réussie ! Redirection...', 'success');
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    } else {
        showNotification('Email ou mot de passe incorrect', 'error');
    }
}

// Gestion de l'inscription
function handleRegister(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }

    if (!isValidEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
    }

    if (password.length < 6) {
        showNotification('Le mot de passe doit contenir au moins 6 caractères', 'error');
        return;
    }

    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
        showNotification('Un compte avec cet email existe déjà', 'error');
        return;
    }

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };

    users.push(newUser);
    localStorage.setItem('exclusive_users', JSON.stringify(users));

    // Connecter automatiquement l'utilisateur
    currentUser = { ...newUser };
    delete currentUser.password;
    localStorage.setItem('exclusive_current_user', JSON.stringify(currentUser));

    showNotification('Compte créé avec succès ! Redirection...', 'success');
    
    // Redirection après 1.5 secondes
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 1500);
}

// Gestion de l'authentification Google (simulation)
function handleGoogleAuth() {
    showNotification('Authentification Google simulée...', 'info');
    
    // Simulation d'une connexion Google
    setTimeout(() => {
        const googleUser = {
            id: Date.now(),
            name: 'Utilisateur Google',
            email: 'user@gmail.com',
            provider: 'google',
            createdAt: new Date().toISOString()
        };

        currentUser = googleUser;
        localStorage.setItem('exclusive_current_user', JSON.stringify(currentUser));
        
        showNotification('Connexion Google réussie ! Redirection...', 'success');
        
        setTimeout(() => {
            window.location.href = '../index.html';
        }, 1500);
    }, 1000);
}

// Fonction de déconnexion
function logout() {
    currentUser = null;
    localStorage.removeItem('exclusive_current_user');
    showNotification('Vous avez été déconnecté', 'info');
    updateAuthInterface();
}

// Mise à jour de l'interface d'authentification
function updateAuthInterface() {
    // Cette fonction peut être appelée depuis d'autres pages pour mettre à jour l'interface
    const authButtons = document.querySelectorAll('.auth-status');
    
    if (currentUser) {
        authButtons.forEach(btn => {
            btn.innerHTML = `
                <span>Bonjour, ${currentUser.name}</span>
                <button onclick="logout()" class="logout-btn">Déconnexion</button>
            `;
        });
    }
}

// Fonction utilitaire pour valider l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Fonction pour afficher les notifications
function showNotification(message, type = 'info') {
    // Supprimer les notifications existantes
    const existingNotification = document.querySelector('.auth-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Créer la nouvelle notification
    const notification = document.createElement('div');
    notification.className = `auth-notification ${type}`;
    notification.textContent = message;

    // Ajouter au DOM
    document.body.appendChild(notification);

    // Afficher avec animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // Masquer après 4 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 4000);
}

// Fonction pour obtenir l'utilisateur actuel
function getCurrentUser() {
    return currentUser;
}

// Fonction pour vérifier si l'utilisateur est connecté
function isLoggedIn() {
    return currentUser !== null;
}

// Exportation des fonctions pour utilisation dans d'autres fichiers
window.authModule = {
    getCurrentUser,
    isLoggedIn,
    logout,
    showNotification
};