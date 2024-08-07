// Function to close the sign-in or sign-up form
function closePage() {
    window.location.href = 'index.html'; // Redirect to the index.html page
}

// Function to switch to the sign-up form
document.getElementById('createAccountLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('.form-container').style.display = 'none';
    document.getElementById('signupContainer').style.display = 'block';
});

// Function to switch back to the sign-in form
document.getElementById('backToSignInLink').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default link behavior
    document.querySelector('.form-container').style.display = 'block';
    document.getElementById('signupContainer').style.display = 'none';
});
