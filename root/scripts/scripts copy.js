function handleSign(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Change the user icon to fa-smile-beam
    var userIcon = document.querySelector('.fa-user');
    if (userIcon) {
        userIcon.classList.remove('fa-user');
        userIcon.classList.add('fa-smile-beam');
    }

    // Show an alert message
    alert("Your account is created!");

    // After successful sign in or account creation
    localStorage.setItem('userSignedIn', 'true');

    // Redirect to home page
    window.location.href = '../index.html?accountCreated=true';
}






function handleReset(event) {
    // Prevent the default form submission
    event.preventDefault();
    alert("Your password has been reset!");
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
