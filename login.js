
function validateForm(formType) {
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;
    var agreement = document.querySelector('input[type="checkbox"]').checked;

    if (formType === 'login') {
        if (username && password) {
            if (agreement) {
                window.location.href = "http://127.0.0.1:5501/Home.html";
            } else {
                alert("Please agree to the terms and conditions.");
            }
        } else {
            alert("Please fill in all the required fields.");
        }
    }
}

function redirectToSignUp() {
    console.log("Redirecting to sign up page...");
    window.location.href = 'http://127.0.0.1:5501/signup.html';
}
