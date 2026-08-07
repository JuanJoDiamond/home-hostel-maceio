/**
 * i18n-data.js
 * Diccionario central de traducciones. Cada key se referencia desde el HTML
 * con data-i18n="key" (texto plano) o data-i18n-html="key" (cuando el texto
 * necesita una etiqueta adentro, como el <em> del título del hero).
 *
 * Para agregar contenido nuevo en un próximo Sprint: sumar la key acá en
 * los 3 idiomas, y en el HTML usar data-i18n="esa-key". No hace falta
 * tocar i18n.js.
 */

export const LANGS = [
  {
    code: "pt",
    label: "Português",
    flag: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#2E7D32"/><polygon points="15,3 27,10 15,17 3,10" fill="#FDD835"/><circle cx="15" cy="10" r="4.2" fill="#1565C0"/></svg>`,
  },
  {
    code: "es",
    label: "Español",
    flag: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#C60B1E"/><rect y="5" width="30" height="10" fill="#FFC400"/></svg>`,
  },
  {
    code: "en",
    label: "English",
    flag: `<svg viewBox="0 0 30 20" aria-hidden="true"><rect width="30" height="20" fill="#00247D"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#fff" stroke-width="4"/><path d="M0,0 L30,20 M30,0 L0,20" stroke="#CF142B" stroke-width="1.6"/><path d="M15,0 V20 M0,10 H30" stroke="#fff" stroke-width="6.5"/><path d="M15,0 V20 M0,10 H30" stroke="#CF142B" stroke-width="2.6"/></svg>`,
  },
];

export const translations = {
  pt: {
    aria_nav: "Navegação principal",
    aria_logo: "Home Hostel Maceió, início",
    aria_toggle: "Abrir menu de navegação",
    aria_lang: "Idioma",
    nav_sobre: "Sobre",
    nav_quartos: "Quartos",
    nav_experiencias: "Experiências",
    nav_localizacao: "Localização",
    nav_galeria: "Galeria",
    nav_depoimentos: "Depoimentos",
    cta_header: "Reservar",
    cta_hero_whatsapp: "Reservar pelo WhatsApp",
    cta_hero_ghost: "Conheça o Hostel",
    hero_eyebrow: "Maceió · Alagoas · Brasil",
    hero_title_html:
      "Mais que uma hospedagem, <em>uma experiência</em> para viver Maceió",
    hero_subtitle:
      "Sua casa em Maceió. Um hostel acolhedor para viver Alagoas, conhecer pessoas e criar memórias em uma experiência autêntica de viagem.",
    hero_scroll: "Deslize",
    hero_photo_alt:
      "Vista aérea da orla de Maceió, com coqueiros, prédios à beira-mar e água azul-turquesa",
  },
  es: {
    aria_nav: "Navegación principal",
    aria_logo: "Home Hostel Maceió, inicio",
    aria_toggle: "Abrir menú de navegación",
    aria_lang: "Idioma",
    nav_sobre: "Nosotros",
    nav_quartos: "Habitaciones",
    nav_experiencias: "Experiencias",
    nav_localizacao: "Ubicación",
    nav_galeria: "Galería",
    nav_depoimentos: "Opiniones",
    cta_header: "Reservar",
    cta_hero_whatsapp: "Reservar por WhatsApp",
    cta_hero_ghost: "Conocé el Hostel",
    hero_eyebrow: "Maceió · Alagoas · Brasil",
    hero_title_html:
      "Más que un hospedaje, <em>una experiencia</em> para vivir Maceió",
    hero_subtitle:
      "Tu casa en Maceió. Un hostel acogedor para vivir Alagoas, conocer gente y crear recuerdos en una experiencia de viaje auténtica.",
    hero_scroll: "Deslizá",
    hero_photo_alt:
      "Vista aérea de la costa de Maceió, con cocoteros, edificios frente al mar y agua turquesa",
  },
  en: {
    aria_nav: "Main navigation",
    aria_logo: "Home Hostel Maceió, home",
    aria_toggle: "Open navigation menu",
    aria_lang: "Language",
    nav_sobre: "About",
    nav_quartos: "Rooms",
    nav_experiencias: "Experiences",
    nav_localizacao: "Location",
    nav_galeria: "Gallery",
    nav_depoimentos: "Reviews",
    cta_header: "Book now",
    cta_hero_whatsapp: "Book via WhatsApp",
    cta_hero_ghost: "Discover the Hostel",
    hero_eyebrow: "Maceió · Alagoas · Brazil",
    hero_title_html:
      "More than a stay, <em>an experience</em> to live Maceió",
    hero_subtitle:
      "Your home in Maceió. A welcoming hostel to experience Alagoas, meet people, and create memories on an authentic travel experience.",
    hero_scroll: "Scroll",
    hero_photo_alt:
      "Aerial view of Maceió's waterfront, with coconut trees, beachfront buildings and turquoise water",
  },
};

export const DEFAULT_LANG = "pt";
export const STORAGE_KEY = "hh-lang";
