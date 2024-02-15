document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    const navRight = document.getElementById('navRight');

    hamburgerIcon.addEventListener('click', function() {
        navRight.classList.toggle('show');
    });

    // close the menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-right ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navRight.classList.remove('show');
        });
    });
});