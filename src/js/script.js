const toggle = document.querySelector(".headermenu-btn");
const nav = document.querySelector("#mainNav");
const page = document.body;

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";
        const isClosed = !isOpen;

        // Met à jour les attributs ARIA pour l'accessibilité
        toggle.setAttribute("aria-expanded", isClosed);
        nav.setAttribute("aria-hidden", isOpen);

        // Ajoute ou supprime la classe noscroll sur le body
        page.classList.toggle("noscroll", isClosed);
    });
}
