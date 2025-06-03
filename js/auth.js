// auth.js - Gestion de l'authentification pour Exclusive Cosmetics

class AuthManager {
    constructor() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.init();
    }

    init() {
        this.checkAuthStatus();
        this.bindEvents();
    }

    checkAuthStatus() {
       
        this.isLoggedIn = false;
        this.updateUI();
    }

    bindEvents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.setupLoginModal();
            this.setupRegisterModal();
            this.setupUserMenu();
        });
    }

    setupLoginModal() {
        const loginModal = this.createLoginModal();
        document.body.appendChild(loginModal);

        const loginTriggers = document.querySelectorAll('[data-action="login"]');
        loginTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.showLoginModal();
            });
        });
    }

    setupRegisterModal() {
        const registerModal = this.createRegisterModal();
        document.body.appendChild(registerModal);

        const registerTriggers = document.querySelectorAll('[data-action="register"]');
        registerTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.showRegisterModal();
            });
        });
    }

    setupUserMenu() {
        const userMenuTrigger = document.querySelector('.user-menu-trigger');
        const userDropdown = document.querySelector('.user-dropdown');

        if (userMenuTrigger && userDropdown) {
            userMenuTrigger.addEventListener('click', (e) => {
                e.preventDefault();
                userDropdown.classList.toggle('show');
            });

            document.addEventListener('click', (e) => {
                if (!userMenuTrigger.contains(e.target)) {
                    userDropdown.classList.remove('show');
                }
            });
        }
    }

    createLoginModal() {
        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.id = 'loginModal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>Se connecter</h2>
                        <button class="modal-close" data-close-modal>&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="loginForm" class="auth-form">
                            <div class="form-group">
                                <label for="loginEmail">Email</label>
                                <input type="email" id="loginEmail" required>
                            </div>
                            <div class="form-group">
                                <label for="loginPassword">Mot de passe</label>
                                <input type="password" id="loginPassword" required>
                            </div>
                            <div class="form-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="rememberMe">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <button type="submit" class="auth-btn">Se connecter</button>
                            <div class="auth-links">
                                <a href="#" data-action="forgot-password">Mot de passe oublié ?</a>
                                <span>Pas de compte ? <a href="#" data-action="show-register">S'inscrire</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.hasAttribute('data-close-modal')) {
                this.hideLoginModal();
            }
            if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') === 'show-register') {
                e.preventDefault();
                this.hideLoginModal();
                this.showRegisterModal();
            }
        });

        modal.querySelector('#loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e.target);
        });

        return modal;
    }

    createRegisterModal() {
        const modal = document.createElement('div');
        modal.className = 'auth-modal';
        modal.id = 'registerModal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <div class="modal-header">
                        <h2>S'inscrire</h2>
                        <button class="modal-close" data-close-modal>&times;</button>
                    </div>
                    <div class="modal-body">
                        <form id="registerForm" class="auth-form">
                            <div class="form-group">
                                <label for="registerName">Nom complet</label>
                                <input type="text" id="registerName" required>
                            </div>
                            <div class="form-group">
                                <label for="registerEmail">Email</label>
                                <input type="email" id="registerEmail" required>
                            </div>
                            <div class="form-group">
                                <label for="registerPassword">Mot de passe</label>
                                <input type="password" id="registerPassword" required minlength="6">
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword">Confirmer le mot de passe</label>
                                <input type="password" id="confirmPassword" required minlength="6">
                            </div>
                            <div class="form-group">
                                <label class="checkbox-label">
                                    <input type="checkbox" id="acceptTerms" required>
                                    J'accepte les <a href="#" target="_blank">conditions d'utilisation</a>
                                </label>
                            </div>
                            <button type="submit" class="auth-btn">S'inscrire</button>
                            <div class="auth-links">
                                <span>Déjà un compte ? <a href="#" data-action="show-login">Se connecter</a></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        modal.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal-overlay') || e.target.hasAttribute('data-close-modal')) {
                this.hideRegisterModal();
            }
            if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') === 'show-login') {
                e.preventDefault();
                this.hideRegisterModal();
                this.showLoginModal();
            }
        });

        modal.querySelector('#registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister(e.target);
        });

        return modal;
    }

    showLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    hideLoginModal() {
        const modal = document.getElementById('loginModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    showRegisterModal() {
        const modal = document.getElementById('registerModal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    hideRegisterModal() {
        const modal = document.getElementById('registerModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }

    async handleLogin(form) {
        const formData = new FormData(form);
        const email = formData.get('loginEmail') || form.querySelector('#loginEmail').value;
        const password = formData.get('loginPassword') || form.querySelector('#loginPassword').value;

        try {
            this.showLoadingState(form);
            
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            if (this.validateCredentials(email, password)) {
                this.currentUser = {
                    id: Date.now(),
                    name: 'Utilisateur Demo',
                    email: email
                };
                this.isLoggedIn = true;
                this.hideLoginModal();
                this.updateUI();
                this.showSuccessMessage('Connexion réussie !');
            } else {
                this.showErrorMessage('Email ou mot de passe incorrect.');
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            this.showErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            this.hideLoadingState(form);
        }
    }

    async handleRegister(form) {
        const formData = new FormData(form);
        const name = formData.get('registerName') || form.querySelector('#registerName').value;
        const email = formData.get('registerEmail') || form.querySelector('#registerEmail').value;
        const password = formData.get('registerPassword') || form.querySelector('#registerPassword').value;
        const confirmPassword = formData.get('confirmPassword') || form.querySelector('#confirmPassword').value;

        if (password !== confirmPassword) {
            this.showErrorMessage('Les mots de passe ne correspondent pas.');
            return;
        }

        try {
            this.showLoadingState(form);
            
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            this.currentUser = {
                id: Date.now(),
                name: name,
                email: email
            };
            this.isLoggedIn = true;
            this.hideRegisterModal();
            this.updateUI();
            this.showSuccessMessage('Inscription réussie ! Bienvenue !');
        } catch (error) {
            console.error('Erreur d\'inscription:', error);
            this.showErrorMessage('Une erreur est survenue. Veuillez réessayer.');
        } finally {
            this.hideLoadingState(form);
        }
    }

    validateCredentials(email, password) {
        return email.includes('@') && password.length >= 6;
    }

    logout() {
        this.currentUser = null;
        this.isLoggedIn = false;
        this.updateUI();
        this.showSuccessMessage('Déconnexion réussie !');
    }

    updateUI() {
        const signUpLink = document.querySelector('a[href="#signup"]');
        const userSection = document.querySelector('.nav-right');

        if (this.isLoggedIn && this.currentUser) {
            if (signUpLink) {
                signUpLink.textContent = this.currentUser.name;
                signUpLink.href = '#profile';
                signUpLink.onclick = (e) => {
                    e.preventDefault();
                    this.showUserMenu();
                };
            }
        } else {
            if (signUpLink) {
                signUpLink.textContent = 'Sign Up';
                signUpLink.href = '#signup';
                signUpLink.onclick = (e) => {
                    e.preventDefault();
                    this.showRegisterModal();
                };
            }
        }
    }

    showUserMenu() {
        const existingDropdown = document.querySelector('.user-dropdown');
        if (existingDropdown) {
            existingDropdown.remove();
        }

        const dropdown = document.createElement('div');
        dropdown.className = 'user-dropdown';
        dropdown.innerHTML = `
            <div class="dropdown-content">
                <a href="#profile">Mon profil</a>
                <a href="#orders">Mes commandes</a>
                <a href="#wishlist">Ma liste de souhaits</a>
                <hr>
                <a href="#" data-action="logout">Se déconnecter</a>
            </div>
        `;

        dropdown.addEventListener('click', (e) => {
            if (e.target.hasAttribute('data-action') && e.target.getAttribute('data-action') === 'logout') {
                e.preventDefault();
                this.logout();
                dropdown.remove();
            }
        });

        const userSection = document.querySelector('.nav-right');
        if (userSection) {
            userSection.appendChild(dropdown);
        }
    }

    showLoadingState(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Chargement...';
        }
    }

    hideLoadingState(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            const isLogin = form.id === 'loginForm';
            submitBtn.textContent = isLogin ? 'Se connecter' : 'S\'inscrire';
        }
    }

    showSuccessMessage(message) {
        this.showNotification(message, 'success');
    }

    showErrorMessage(message) {
        this.showNotification(message, 'error');
    }

    showNotification(message, type = 'info') {
        const existingNotifications = document.querySelectorAll('.auth-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `auth-notification ${type}`;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 3000);
    }
}


// Initialiser le gestionnaire d'authentification
const authManager = new AuthManager();

// Exporter pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}

// Rendre disponible globalement
window.AuthManager = AuthManager;
window.authManager = authManager;