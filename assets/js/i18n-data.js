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
    sobre_title_html: "Sinta-se em <em>casa</em>. Viva Maceió.",
    sobre_p1:
      "Viajar é muito mais do que conhecer um lugar. É acordar sem pressa, descobrir uma praia nova, compartilhar uma conversa e voltar para um lugar onde você se sente bem.",
    sobre_p2:
      "É isso que queremos que seja o Home Hostel: um lugar para deixar a rotina para trás, viver Maceió de verdade e transformar alguns dias de viagem em memórias que ficam.",
    sobre_p3:
      "Aqui, você encontra mais do que um lugar para dormir. Você chega como viajante. Pode sair levando histórias — de pessoas que conheceu, lugares que descobriu e momentos que não estavam no roteiro.",
    sobre_p4:
      "Porque, quando você se sente em casa, fica muito mais fácil aproveitar tudo o que Alagoas tem para te oferecer.",
    sobre_signature: "Home Hostel. Sua casa em Maceió.",
    sobre_cta: "Conheça os quartos",
    sobre_photo1_alt:
      "Corredor de entrada do Home Hostel decorado com bandeiras dos países de hóspedes que já passaram por aqui",
    sobre_photo2_alt:
      "Detalhe artesanal e plantas no pátio do Home Hostel, trazendo cor e identidade local ao ambiente",
    sobre_photo1_caption: "Gente de todo o mundo já passou por aqui",
    sobre_photo2_caption: "Cada detalhe conta uma história",
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
    sobre_title_html: "Sentite en <em>casa</em>. Viví Maceió.",
    sobre_p1:
      "Viajar es mucho más que conocer un lugar. Es despertarte sin apuro, descubrir una playa nueva, compartir una charla y volver a un lugar donde te sentís bien.",
    sobre_p2:
      "Eso es lo que queremos que sea el Home Hostel: un lugar para dejar la rutina atrás, vivir Maceió de verdad y transformar unos días de viaje en recuerdos que quedan.",
    sobre_p3:
      "Acá encontrás más que un lugar para dormir. Llegás como viajero. Podés irte con historias — de personas que conociste, lugares que descubriste y momentos que no estaban en el itinerario.",
    sobre_p4:
      "Porque cuando te sentís en casa, es mucho más fácil disfrutar todo lo que Alagoas tiene para ofrecerte.",
    sobre_signature: "Home Hostel. Tu casa en Maceió.",
    sobre_cta: "Conocé las habitaciones",
    sobre_photo1_alt:
      "Pasillo de entrada del Home Hostel decorado con banderas de los países de huéspedes que ya pasaron por acá",
    sobre_photo2_alt:
      "Detalle artesanal y plantas en el patio del Home Hostel, que le dan color e identidad local al ambiente",
    sobre_photo1_caption: "Gente de todo el mundo ya pasó por acá",
    sobre_photo2_caption: "Cada detalle cuenta una historia",
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
    sobre_title_html: "Feel at <em>home</em>. Live Maceió.",
    sobre_p1:
      "Traveling is much more than seeing a place. It's waking up without rushing, discovering a new beach, sharing a conversation, and coming back to a place where you feel good.",
    sobre_p2:
      "That's what we want Home Hostel to be: a place to leave the routine behind, truly live Maceió, and turn a few days of travel into memories that last.",
    sobre_p3:
      "Here, you'll find more than a place to sleep. You arrive as a traveler. You can leave with stories — of people you met, places you discovered, and moments that weren't on the itinerary.",
    sobre_p4:
      "Because when you feel at home, it's so much easier to enjoy everything Alagoas has to offer.",
    sobre_signature: "Home Hostel. Your home in Maceió.",
    sobre_cta: "Discover the rooms",
    sobre_photo1_alt:
      "Home Hostel's entrance corridor decorated with flags from guests' home countries",
    sobre_photo2_alt:
      "Handcrafted decor and plants in the Home Hostel patio, adding color and local character to the space",
    sobre_photo1_caption: "People from all over the world have stayed here",
    sobre_photo2_caption: "Every detail tells a story",
  },
};

export const DEFAULT_LANG = "pt";
export const STORAGE_KEY = "hh-lang";
