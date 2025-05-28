// filepath: /epicerie-ecommerce/epicerie-ecommerce/src/js/auth.js
// auth.js

let users = [];

// Function to register a new user
function registerUser(username, password) {
    const user = { username, password };
    users.push(user);
    console.log(`User registered: ${username}`);
}

// Function to login a user
function loginUser(username, password) {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        console.log(`User logged in: ${username}`);
        return true;
    } else {
        console.log('Login failed: Invalid username or password');
        return false;
    }
}

// Simulate user registration and login for demonstration
registerUser('testUser', 'password123');
loginUser('testUser', 'password123');