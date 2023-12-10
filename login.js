const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', () => {
    console.log("Register link clicked");
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    console.log("Login link clicked");
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', () => {
    console.log("Popup button clicked");
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    console.log("Close icon clicked");
    wrapper.classList.remove('active-popup');
});

function login() {
    console.log("Login function called");
    var Email = document.getElementById("Email").value;
    var Password = document.getElementById("Password").value;
    console.log("Email:", Email, "Password:", Password);

    if (Email === "Ms.Arida@gmail.com" && Password === "check") {
        // Redirect to the home page after successful login
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
