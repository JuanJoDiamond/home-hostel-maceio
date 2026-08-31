/**
 * animations.js
 * Animaciones de entrada del Hero y reveal genérico on-scroll para las
 * secciones que se sumarán en los próximos sprints (data-animate).
 * Respeta prefers-reduced-motion: si el usuario lo pide, no anima nada.
 *
 * threshold bajo (0.01) a propósito, no un porcentaje del alto del
 * elemento: un threshold como 0.15 exige que se vea el 15% del ALTO
 * TOTAL del elemento observado en una sola pantalla. Funciona con
 * secciones cortas, pero se rompe con secciones muy altas (ej: Galeria
 * en desktop, con fotos apiladas en una sola columna) -- ahí el 15% de
 * su alto total puede ser más grande que el viewport entero, y el
 * reveal nunca se dispara con un scroll normal (bug real, encontrado en
 * el Sprint 6). rootMargin sigue haciendo que dispare un poco antes de
 * que el elemento toque el borde inferior de la pantalla.
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
    { threshold: 0.01, rootMargin: "0px 0px -60px 0px" }
  );

  document.querySelectorAll("[data-animate]").forEach((el) => {
    revealObserver.observe(el);
  });

  // ---- Ocultar el botón flotante de WhatsApp cerca del final del sitio -----
  // Al llegar a Contato (y de ahí en más, el Footer) ya hay botones de
  // WhatsApp bien visibles en la página -- el flotante deja de aportar y
  // solo tapa contenido. threshold 0 a propósito (no un %), mismo
  // motivo que el reveal genérico de arriba: no depender del alto total
  // de la sección para disparar.
  const whatsappFab = document.querySelector(".whatsapp-fab");
  const contatoSection = document.querySelector("#contatos");

  if (whatsappFab && contatoSection) {
    const fabObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          whatsappFab.classList.toggle("whatsapp-fab--hidden", entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );
    fabObserver.observe(contatoSection);
  }

  // ---- Botón "volver arriba" -- aparece después de bajar un poco -----------
  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    const toggleBackToTop = () => {
      backToTop.classList.toggle("back-to-top--visible", window.scrollY > window.innerHeight * 0.6);
    };
    toggleBackToTop();
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
  }
}
