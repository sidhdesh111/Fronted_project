const nav = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add('header-scrolled');
    } else {
        nav.classList.remove('header-scrolled');
    }
});

let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".collapse.navbar-collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })
});