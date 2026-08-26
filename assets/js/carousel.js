/**
 * carousel.js
 * Carrusel "coverflow" reutilizable: la foto activa queda grande y al
 * frente, las demás se acomodan más chicas y giradas en perspectiva a los
 * costados. Se mueve solo (autoplay), se detiene con el mouse/dedo
 * encima, y deja navegar con flechas, dots, teclado, swipe o tocando
 * directamente una de las fotos del costado.
 *
 * Sin librerías: todo el efecto 3D es CSS (transform + perspective)
 * calculado en JS según la distancia de cada foto a la foto activa.
 *
 * Reutilizable: alcanza con marcar el HTML con data-carousel /
 * data-carousel-stage / data-carousel-prev / data-carousel-next /
 * data-carousel-dots -- ver el markup de la sección Quartos en
 * index.html como referencia. Pensado para reusarse en Galeria y
 * Depoimentos más adelante.
 */

const AUTOPLAY_MS = 3800;
const RESUME_AFTER_MS = 5000;
const COMPACT_QUERY = "(max-width: 767px)";

// Desktop: efecto "coverflow" marcado (fotos giradas en perspectiva).
// Mobile: versión más plana -- las fotos vecinas apenas se insinúan en
// los bordes en vez de girar fuerte, porque a ese tamaño un ángulo
// pronunciado las vuelve ilegibles (ver carousel.css para el ancho de
// la foto activa en cada caso).
function getCarouselConfig() {
  const isCompact = window.matchMedia(COMPACT_QUERY).matches;
  return isCompact
    ? { spread: 46, scaleStep: 0.1, opacityStep: 0.65, rotate: 6 }
    : { spread: 58, scaleStep: 0.18, opacityStep: 0.38, rotate: 20 };
}

function setupCarousel(root) {
  const stage = root.querySelector("[data-carousel-stage]");
  const prevBtn = root.querySelector("[data-carousel-prev]");
  const nextBtn = root.querySelector("[data-carousel-next]");
  const dotsWrap = root.querySelector("[data-carousel-dots]");

  if (!stage) return;

  const slides = Array.from(stage.children);
  const count = slides.length;
  if (count === 0) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  let activeIndex = 0;
  let autoplayTimer = null;
  let resumeTimer = null;

  // ---- Dots: uno por slide, generados desde JS para no desincronizarse
  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "carousel__dot";
    dot.setAttribute("aria-label", `Ir para foto ${index + 1}`);
    dot.addEventListener("click", () => goTo(index, { userAction: true }));
    dotsWrap?.appendChild(dot);
    return dot;
  });

  // Distancia con signo de cada slide a la foto activa, "envolviendo" el
  // extremo (con 4 fotos, la foto 4 puede quedar "a la izquierda" de la 1
  // en vez de forzarla siempre a la derecha) -- da vueltas más naturales.
  function signedOffset(index) {
    const raw = index - activeIndex;
    const wrapped = ((raw % count) + count) % count;
    return wrapped > count / 2 ? wrapped - count : wrapped;
  }

  function render() {
    const config = getCarouselConfig();

    slides.forEach((slide, index) => {
      const offset = signedOffset(index);
      const abs = Math.abs(offset);
      const isActive = offset === 0;

      let translateX = 0;
      let scale = 1;
      let opacity = 1;
      let rotateY = 0;

      if (!isActive) {
        translateX = offset * config.spread;
        scale = Math.max(0.62, 1 - abs * config.scaleStep);
        opacity = Math.max(0, 1 - abs * config.opacityStep);
        rotateY = offset > 0 ? -config.rotate : config.rotate;
      }

      if (abs > 2) opacity = 0;

      slide.style.transform = `translate(-50%, -50%) translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`;
      slide.style.opacity = String(opacity);
      slide.style.zIndex = String(count - abs);
      slide.setAttribute("data-active", String(isActive));
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.tabIndex = isActive ? 0 : -1;
      slide.style.pointerEvents = abs > 2 ? "none" : "auto";
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("carousel__dot--active", index === activeIndex);
    });
  }

  function goTo(index, { userAction = false } = {}) {
    activeIndex = ((index % count) + count) % count;
    render();
    if (userAction) restartAutoplayCycle();
  }

  function next() {
    goTo(activeIndex + 1);
  }

  function prev() {
    goTo(activeIndex - 1);
  }

  // ---- Autoplay: se mueve solo, se pausa con mouse/dedo encima ----------
  function startAutoplay() {
    if (prefersReducedMotion) return;
    stopAutoplay();
    autoplayTimer = window.setInterval(next, AUTOPLAY_MS);
  }

  function stopAutoplay() {
    if (autoplayTimer) window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  }

  function restartAutoplayCycle() {
    // Cuando el usuario interactúa a propósito (flecha, dot, click en una
    // foto), se reinicia el ciclo para que no "salte" un segundo después.
    stopAutoplay();
    if (resumeTimer) window.clearTimeout(resumeTimer);
    resumeTimer = window.setTimeout(startAutoplay, RESUME_AFTER_MS);
  }

  root.addEventListener("mouseenter", stopAutoplay);
  root.addEventListener("mouseleave", startAutoplay);
  root.addEventListener("focusin", stopAutoplay);
  root.addEventListener("focusout", startAutoplay);

  prevBtn?.addEventListener("click", () => {
    prev();
    restartAutoplayCycle();
  });
  nextBtn?.addEventListener("click", () => {
    next();
    restartAutoplayCycle();
  });

  slides.forEach((slide, index) => {
    slide.addEventListener("click", () => {
      if (index !== activeIndex) goTo(index, { userAction: true });
    });
  });

  root.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      next();
      restartAutoplayCycle();
    }
    if (event.key === "ArrowLeft") {
      prev();
      restartAutoplayCycle();
    }
  });

  // ---- Swipe táctil: en mobile no hay hover, así que el gesto de deslizar
  // es lo que reemplaza a las flechas.
  let touchStartX = null;
  root.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.touches[0].clientX;
      stopAutoplay();
    },
    { passive: true }
  );
  root.addEventListener(
    "touchend",
    (event) => {
      if (touchStartX === null) return;
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) > 40) {
        deltaX < 0 ? next() : prev();
      }
      touchStartX = null;
      restartAutoplayCycle();
    },
    { passive: true }
  );

  render();
  startAutoplay();

  // Si cambia el ancho (rotar el celular, achicar la ventana en desktop),
  // el ángulo/tamaño puede tener que pasar de la versión "coverflow" a la
  // versión "plana" o viceversa -- sin esto quedaba con los valores viejos
  // hasta la próxima interacción.
  window.addEventListener("resize", render);
}

export function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(setupCarousel);
}
