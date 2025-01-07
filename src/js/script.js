//Menu

const toggle = document.querySelector(".headermenu-btn");
const nav = document.querySelector("#mainNav");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const isClosed = !isOpen;

        toggle.setAttribute("aria-expanded", isClosed);
        nav.setAttribute("aria-hidden", isOpen);

        page.classList.toggle("noscroll", isClosed);
    });
}

//Carrousel autre projet

const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const carousel = document.querySelector('.card__projet');

let scrollAmount = 0;
const cardWidth = 270; 

prevButton.addEventListener('click', () => {
 
    if (scrollAmount > 0) {
        scrollAmount -= cardWidth;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth' 
        });
    }
});

nextButton.addEventListener('click', () => {

    if (scrollAmount < carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount += cardWidth;
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});



