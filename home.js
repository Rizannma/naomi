
document.addEventListener("DOMContentLoaded", function () {
    // Add an event listener to the logout button
    var logoutButton = document.querySelector('.btnLogout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
});

function logout() {
    // Redirect to the index page after logout
    window.location.href = "index.html";
}
