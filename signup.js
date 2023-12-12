function validateForm(formType) {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var email = document.querySelector('input[type="email"]').value;
    var phoneNumber = document.querySelector('input[type="number"]').value;
    var agreement = document.querySelector('input[type="checkbox"]').checked;

    if (formType === 'signup') {
        if (username && password && email && phoneNumber) {
            if (agreement) {
                window.location.href = "http://127.0.0.1:5502/Home.html";
            } else {
                alert("Please agree to the terms and conditions.");
            }
        } else {
            alert("Please fill in all the required fields.");
        }
    }
}

function redirectToSignIn() {
    window.location.href = 'http://127.0.0.1:5501/login.html';
}