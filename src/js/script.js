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
