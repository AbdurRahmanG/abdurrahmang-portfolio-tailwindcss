const body = document.querySelector("body");
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileMenuItemLinks = document.querySelectorAll(".mobileMenuItemLink");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white")
})

mobileMenuItemLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white")
    })
})

lightDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark");
})

