function handleSign(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Store the sign-in status in local storage
    localStorage.setItem('userSignedIn', 'true');

    // Redirect to home page
    window.location.href = '../index.html'; 
}

document.addEventListener('DOMContentLoaded', function() {
    var signInIcon = document.querySelector('.fa-user');
    var userSignedIn = localStorage.getItem('userSignedIn');
    
    // Check if the user is redirected from the sign-in page
    if (signInIcon && userSignedIn === 'true') {
        signInIcon.style.color = 'green';
        alert('You are signed in!');
        
        // Clear the sign-in status to avoid color change on subsequent visits
        localStorage.removeItem('userSignedIn');
    }
});

function handleReset(event) {
    // Prevent the default form submission
    event.preventDefault();
    alert("Your password has been reset! Please check your email for further instructions.");
    window.location.href = '../index.html'; 
}

function redirectToCarDetails() {
    // Redirect to carDetails.jpg when the form is submitted
    window.location.href = 'pages/carDetails.html';
}
function redirectToCarInventory(x) {
    // Redirect to car inventory when the form is submitted
    alert(x);
    if (x='Home') {
        alert ('x=',x);
    } else {
        alert ( 'not at home');
    }
    window.location.href = 'pages/carInventory.html';
}


