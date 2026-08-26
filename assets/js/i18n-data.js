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

    quartos_eyebrow: "QUARTOS",
    quartos_title: "Seu espaço para descansar, do seu jeito.",
    quartos_intro:
      "Entre quartos compartilhados e privativos, encontre o espaço que combina com a sua viagem.",
    quartos_compartilhados_label: "QUARTOS COMPARTILHADOS",
    quartos_compartilhados_tagline: "Compartilhe a viagem, não apenas o quarto.",
    quartos_compartilhados_desc:
      "Para quem gosta de viajar, conhecer pessoas e compartilhar experiências.",
    quartos_compartilhados_note:
      "Disponível em dormitório feminino ou masculino.",
    quartos_privativos_label: "QUARTOS PRIVATIVOS",
    quartos_privativos_tagline: "Mais privacidade. O mesmo clima de Home.",
    quartos_privativos_desc:
      "Para quem prefere mais privacidade, sem abrir mão do clima acolhedor do Home. Nosso espaço privativo mais novo, pensado para quem busca ainda mais conforto e tranquilidade.",
    quartos_checklist_heading: "Em todos os quartos, sem exceção:",
    quartos_check_1: "Roupa de cama incluída",
    quartos_check_2: "Toalhas",
    quartos_check_3: "Armário individual com fechadura",
    quartos_check_4: "Ar-condicionado",
    quartos_check_5: "Wi-Fi gratuito",
    quartos_cta: "Conheça as experiências",
    quartos_photo1_alt:
      "Detalhe de toalha dobrada e roupa de cama bordada sobre a cama",
    quartos_photo2_alt: "Detalhe de colar de conchas e toalha sobre a cama",
    quartos_photo1_caption: "Tudo pronto para você chegar e descansar",
    quartos_photo2_caption: "Pequenos detalhes que fazem a diferença",
    quartos_carousel_1_alt:
      "Beliche com roupa de cama vermelha em um dos quartos do Home Hostel",
    quartos_carousel_1_caption: "Cores diferentes, o mesmo aconchego",
    quartos_carousel_2_alt:
      "Cama com roupa de cama branca bordada e toalha, beliche ao fundo",
    quartos_carousel_2_caption: "Cada detalhe pensado para o seu conforto",
    quartos_carousel_3_alt:
      "Quarto do Home Hostel com camas organizadas e armários individuais numerados",
    quartos_carousel_3_caption: "Um armário individual para cada hóspede",
    quartos_carousel_4_alt:
      "Quarto com camas organizadas lado a lado, ambiente tranquilo",
    quartos_carousel_4_caption: "Ambiente tranquilo, do jeito Home",
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

    quartos_eyebrow: "HABITACIONES",
    quartos_title: "Tu espacio para descansar, a tu manera.",
    quartos_intro:
      "Entre habitaciones compartidas y privadas, encontrá el espacio que se adapta a tu viaje.",
    quartos_compartilhados_label: "HABITACIONES COMPARTIDAS",
    quartos_compartilhados_tagline: "Compartí el viaje, no solo la habitación.",
    quartos_compartilhados_desc:
      "Para quienes disfrutan viajar, conocer gente y compartir experiencias.",
    quartos_compartilhados_note:
      "Disponible en dormitorio femenino o masculino.",
    quartos_privativos_label: "HABITACIONES PRIVADAS",
    quartos_privativos_tagline: "Más privacidad. El mismo clima de Home.",
    quartos_privativos_desc:
      "Para quienes prefieren más privacidad, sin resignar el clima acogedor del Home. Nuestro espacio privado más nuevo, pensado para quienes buscan aún más comodidad y tranquilidad.",
    quartos_checklist_heading: "En todas las habitaciones, sin excepción:",
    quartos_check_1: "Ropa de cama incluida",
    quartos_check_2: "Toallas",
    quartos_check_3: "Placard individual con cerradura",
    quartos_check_4: "Aire acondicionado",
    quartos_check_5: "Wi-Fi gratuito",
    quartos_cta: "Conocé las experiencias",
    quartos_photo1_alt:
      "Detalle de toalla doblada y ropa de cama bordada sobre la cama",
    quartos_photo2_alt: "Detalle de collar de conchas y toalla sobre la cama",
    quartos_photo1_caption: "Todo listo para que llegues y descanses",
    quartos_photo2_caption: "Pequeños detalles que hacen la diferencia",
    quartos_carousel_1_alt:
      "Litera con ropa de cama roja en una de las habitaciones del Home Hostel",
    quartos_carousel_1_caption: "Colores distintos, la misma calidez",
    quartos_carousel_2_alt:
      "Cama con ropa de cama blanca bordada y toalla, litera de fondo",
    quartos_carousel_2_caption: "Cada detalle pensado para tu comodidad",
    quartos_carousel_3_alt:
      "Habitación del Home Hostel con camas organizadas y placares individuales numerados",
    quartos_carousel_3_caption: "Un placard individual para cada huésped",
    quartos_carousel_4_alt:
      "Habitación con camas organizadas una al lado de la otra, ambiente tranquilo",
    quartos_carousel_4_caption: "Ambiente tranquilo, a la manera Home",
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

    quartos_eyebrow: "ROOMS",
    quartos_title: "Your space to rest, your way.",
    quartos_intro:
      "Between shared and private rooms, find the space that fits your trip.",
    quartos_compartilhados_label: "SHARED ROOMS",
    quartos_compartilhados_tagline: "Share the trip, not just the room.",
    quartos_compartilhados_desc:
      "For travelers who enjoy meeting people and sharing experiences.",
    quartos_compartilhados_note: "Available in female or male dorms.",
    quartos_privativos_label: "PRIVATE ROOMS",
    quartos_privativos_tagline: "More privacy. Same Home feeling.",
    quartos_privativos_desc:
      "For those who prefer more privacy, without giving up the warmth of Home. Our newest private space, designed for even more comfort and quiet.",
    quartos_checklist_heading: "In every room, no exceptions:",
    quartos_check_1: "Bed linens included",
    quartos_check_2: "Towels",
    quartos_check_3: "Individual locker with lock",
    quartos_check_4: "Air conditioning",
    quartos_check_5: "Free Wi-Fi",
    quartos_cta: "Discover the experiences",
    quartos_photo1_alt:
      "Detail of a folded towel and embroidered bed linens on the bed",
    quartos_photo2_alt: "Detail of a shell necklace and towel on the bed",
    quartos_photo1_caption: "Everything ready for you to arrive and rest",
    quartos_photo2_caption: "Small details that make the difference",
    quartos_carousel_1_alt:
      "Bunk bed with red bed linens in one of Home Hostel's rooms",
    quartos_carousel_2_alt:
      "Bed with embroidered white linens and a towel, bunk bed in the background",
    quartos_carousel_1_caption: "Different colors, the same warmth",
    quartos_carousel_2_caption: "Every detail designed for your comfort",
    quartos_carousel_3_alt:
      "Home Hostel room with organized beds and numbered individual lockers",
    quartos_carousel_3_caption: "An individual locker for every guest",
    quartos_carousel_4_alt:
      "Room with beds organized side by side, quiet atmosphere",
    quartos_carousel_4_caption: "A quiet atmosphere, the Home way",
  },
};

export const DEFAULT_LANG = "pt";
export const STORAGE_KEY = "hh-lang";
