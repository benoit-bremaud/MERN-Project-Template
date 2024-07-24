// authService.js

// Placeholder user data
const users = [];

// Signup function
function signup(username, password) {
    // Check if the username is already taken
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return { success: false, message: 'Username already taken' };
    }

    // Create a new user object
    const newUser = { username, password };
    users.push(newUser);

    return { success: true, message: 'Signup successful' };
}

// Login function
function login(username, password) {
    // Find the user with the given username
    const user = users.find(user => user.username === username);
    if (!user) {
        return { success: false, message: 'User not found' };
    }

    // Check if the password is correct
    if (user.password !== password) {
        return { success: false, message: 'Incorrect password' };
    }

    return { success: true, message: 'Login successful' };
}

module.exports = { signup, login };