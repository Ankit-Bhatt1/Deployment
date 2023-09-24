const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform basic validation
    if (username === 'user' && password === 'password') {
        // Simulate a successful login (in a real application, you'd perform proper authentication)
        window.location.href = 'course.html'; // Redirect to the courses page
    } else {
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
});
