/**
 * animations.js
 * Animaciones de entrada del Hero y reveal genérico on-scroll para las
 * secciones que se sumarán en los próximos sprints (data-animate).
 * Respeta prefers-reduced-motion: si el usuario lo pide, no anima nada.
 */

export function initAnimations() {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    document.querySelectorAll("[data-animate]").forEach((el) => {
      el.classList.add("is-visible");
    });
    return;
  }

  // ---- Reveal genérico para futuras secciones (Sprint 2+) ------------------
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    revealObserver.observe(el);
  });
}
