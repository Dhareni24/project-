document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === '1234') {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        alert('Invalid username or password');
    }
});

// Toggle between Login & Sign-Up
document.getElementById('showSignUp').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('signUpBox').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signUpBox').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});

// Handle Sign-Up
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    
    if (newUsername && newPassword) {
        alert('Account created! You can now log in.');
        document.getElementById('signUpBox').style.display = 'none';
        document.getElementById('loginBox').style.display = 'block';
    } else {
        alert('Please fill in all fields.');
    }
});
