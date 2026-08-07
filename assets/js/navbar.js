/**
 * navbar.js
 * Comportamiento del header: estado "scrolled" y menú móvil accesible
 * (toggle por click, cierre con Escape, cierre al elegir un link).
 */

const SCROLL_THRESHOLD = 40;

export function initNavbar() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav__list");

  if (!header || !toggle || !navList) return;

  // ---- Header sticky: cambia de estado según el scroll -------------------
  const updateHeaderState = () => {
    const isScrolled = window.scrollY > SCROLL_THRESHOLD;
    header.classList.toggle("is-scrolled", isScrolled);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  // ---- Menú móvil ----------------------------------------------------------
  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    navList.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openMenu = () => {
    toggle.setAttribute("aria-expanded", "true");
    navList.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  navList.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}
