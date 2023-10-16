const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});