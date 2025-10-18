document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const yearEl = document.getElementById("currentYear");
    const legalToggles = document.querySelectorAll(".legal-toggle");

    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!expanded));
            navMenu.dataset.open = !expanded;
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navToggle.setAttribute("aria-expanded", "false");
                navMenu.dataset.open = "false";
            });
        });
    }

    legalToggles.forEach((button) => {
        const targetId = button.dataset.target;
        const target = document.getElementById(targetId);
        if (!target) return;

        button.addEventListener("click", () => {
            const isExpanded = button.getAttribute("aria-expanded") === "true";
            button.setAttribute("aria-expanded", String(!isExpanded));
            target.hidden = isExpanded;
        });
    });
});
