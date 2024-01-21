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
        signInIcon.classList.remove('fa-user');
        signInIcon.classList.add('fa-solid', 'fa-person-rays');
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



     // action on search-bar to be redirect to car inventory page 
     document.querySelector('.search-bar').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the default form submission
        redirectToCarInventory(); // Call your JavaScript function
    });
    
     /* Functions to redirect to different pages */
     function redirectToCarInventory() {

        // Redirect to carDetails.jpg when the form is submitted
        window.location.href = 'pages/carInventory.html';
        // alert('redirecting to car inventory');

    }
    function redirectToSearchCars() {
        // Get form elements
        var make = document.getElementById("make").value;
        var model = document.getElementById("model").value;
        var year = document.getElementById("year").value;
        var type = document.getElementById("type").value;
        var budget = document.getElementById("budget").value;

        // Do something with the form data
        console.log("Make: " + make);
        console.log("Model: " + model);
        console.log("Year: " + year);
        console.log("Type: " + type);
        console.log("Budget: " + budget);

        // Show a pop-up message
        alert("Please be patient while we search for your car with the following data: Make: " + make + ", Model: " + model + ", Year: " + year + ", Type: " + type + ", Budget: " + budget);
      

        // Redirect to car inventory or perform other actions
        //window.location.href = 'carInventory.html';
    }
    function redirectToCarDetails() {

        // Redirect to carDetails.jpg when the form is submitted
        window.location.href = 'carDetails.html';
        // alert('redirecting to car inventory');

    }
 



// function redirectToCarInventory(x) {
//     // Redirect to car inventory when the form is submitted
//     alert(x);
//     if (x='Home') {
//         alert ('x=',x);
//     } else {
//         alert ( 'not at home');
//     }
//     window.location.href = 'pages/carInventory.html';
// }


