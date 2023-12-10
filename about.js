document.addEventListener("DOMContentLoaded", function () {
    var logoutButton = document.querySelector('.btnLogout');
    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            logout();
        });
    }
});

function logout() {
    window.location.href = "index.html";
}
