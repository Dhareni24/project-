document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Store credentials in localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    alert('Account created successfully! Redirecting to tasks page...');
    window.location.href = 'tasks.html'; // Redirect to tasks page
});
