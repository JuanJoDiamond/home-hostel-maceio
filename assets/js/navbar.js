/**
 * navbar.js
 * Comportamiento del header: estado "scrolled", menú móvil accesible
 * (toggle por click, cierre con Escape, cierre al elegir un link), y
 * "scrollspy" -- resalta en el menú el link de la sección que se está
 * viendo en cada momento (no solo al hacer click, también al scrollear).
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

  initScrollSpy(navList);
}

// ---- Scrollspy: marca el link activo según qué sección está a la vista ----
function initScrollSpy(navList) {
  const links = Array.from(
    navList.querySelectorAll('.nav__link[href^="#"]')
  );
  if (links.length === 0) return;

  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  if (sections.length === 0) return;

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  // Banda angosta cerca de la parte superior del viewport (debajo del
  // header): la sección que la cruza en ese momento es la "activa". Es el
  // criterio estándar de scrollspy -- funciona bien sin importar de qué
  // alto sea cada sección.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}
