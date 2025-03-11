const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const eyeIcon = document.getElementById('eyeIcon');
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

// Toggle password visibility
togglePassword.addEventListener('click', function () {
    const isPasswordVisible = passwordInput.type === 'text';
    passwordInput.type = isPasswordVisible ? 'password' : 'text';
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Array of users with email and password
const users = [
    { email: 'apatagbrock@gmail.com', password: 'password1' },
    { email: 'apatagbolahan21@gmail.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
    { email: 'user4@example.com', password: 'password4' },
    { email: 'user5@example.com', password: 'password5' }
];

// Handle form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting traditionally
    
    const enteredEmail = emailInput.value.trim().toLowerCase();  // Get entered email (converted to lowercase)
    const enteredPassword = passwordInput.value;  // Get entered password

    // Reset error message
    errorMessage.style.display = 'none';

    // Find the user in the array that matches the entered credentials
    const user = users.find(u => u.email.toLowerCase() === enteredEmail && u.password === enteredPassword);
    
    if (user) {
        // If credentials match, store the authentication token
        localStorage.setItem('auth_token', 'your-secure-token');  // Store a token (you can generate a more secure token here)

        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';  // Redirect to your dashboard page
    } else {
        // Display error message if the email or password is incorrect
        errorMessage.style.display = 'block';
    }
});

// Optional: For dynamic dashboard URL based on an algorithm name (if applicable)
function goToDashboard(algorithmName) {
    const dashboardURL = `dashboard_${algorithmName}.html`;
    window.location.href = dashboardURL;
}
