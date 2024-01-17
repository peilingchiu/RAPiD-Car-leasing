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
