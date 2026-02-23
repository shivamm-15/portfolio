const roles = [
    "Web Developer",
    "Problem Solver",
    "CS Student"
];

let index = 0;
const roleElement = document.querySelector(".role");

function changeRole() {
    roleElement.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % roles.length;
        roleElement.textContent = roles[index];
        roleElement.style.opacity = 1;
    }, 400);
}

roleElement.textContent = roles[0];
setInterval(changeRole, 2000);


/* NAVIGATION */

const links = document.querySelectorAll("nav a");
const pages = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = this.getAttribute("data-section");

        pages.forEach(page => {
            page.classList.remove("yesactive");
            page.classList.add("yes");
        });

        const selected = document.getElementById(target);
        selected.classList.remove("yes");
        selected.classList.add("yesactive");
        selected.classList.add("fade-in");

setTimeout(() => {
    selected.classList.remove("fade-in");
}, 400);
    });
});