//Active Page

const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

//Mobile Nav

const nav = document.querySelector("#navigation");
const navToggle = document.querySelector("#mobile-nav-toggle")


navToggle.addEventListener("click", () => {
const visibility = nav.getAttribute("data-visible")


if(visibility === "false"){
nav.setAttribute("data-visible", true)
navToggle.setAttribute("aria-expanded", true)
}else {
nav.setAttribute("data-visible", false)
navToggle.setAttribute("aria-expanded", false)
}
})

//Current Date

var year = new Date().getFullYear()
document.getElementById("currentYear").innerHTML = year

const favoriteCharacterIds = [10, 5, 8, 2, 9, 4]; 