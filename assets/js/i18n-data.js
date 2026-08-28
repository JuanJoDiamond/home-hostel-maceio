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
    nav_contatos: "Contatos",
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

    exp_eyebrow: "EXPERIÊNCIAS",
    exp_title: "A viagem começa quando você se sente à vontade.",
    exp_p1:
      "Maceió está lá fora, esperando para ser descoberta. Aqui dentro, você encontra um lugar para chegar, respirar, descansar e compartilhar.",
    exp_p2_html:
      "No Home, cada estadia pode ser diferente: novos lugares, novas pessoas, novas histórias. Mas existe algo que queremos que permaneça igual: <strong>a sensação de ser bem recebido.</strong>",
    exp_tagline1: "Mais do que ficar. Viver.",
    exp_concept1_title: "Encontros",
    exp_concept1_desc:
      "Conheça pessoas, compartilhe histórias e leve novas amizades com você.",
    exp_concept2_title: "Acolhimento",
    exp_concept2_desc:
      "Um ambiente tranquilo e descontraído para se sentir à vontade desde a chegada.",
    exp_concept3_title: "Descobertas",
    exp_concept3_desc:
      "Use o Home como ponto de partida para viver Maceió, conhecer Alagoas e criar suas próprias histórias.",
    exp_tagline2: "E quem já esteve aqui, sentiu isso.",
    exp_photo1_alt:
      "Espaço compartilhado do Home Hostel, com mesa ao ar livre e decoração artesanal",
    exp_photo1_caption: "Um lugar para se encontrar",
    exp_photo2_alt:
      "O gatinho que vive no Home Hostel, deitado ao sol no corredor",
    exp_photo2_caption: "O gatinho da casa também vive por aqui",
    exp_reviews_badge_score: "9,3",
    exp_reviews_badge_text: "Fantástico",
    exp_reviews_badge_sub: "10 comentários no Booking.com",
    exp_reviews_disclaimer:
      "Comentários reais de hóspedes no Booking.com, traduzidos automaticamente quando necessário.",
    exp_review1_name: "Juan",
    exp_review1_place: "Argentina",
    exp_review1_title:
      "Instalação nova, muito conforto, clima de lar e boa vibe. Bem perto do centro e das praias.",
    exp_review1_text:
      "O Hostel é excelente, tudo novo, quartos amplos e com ar-condicionado. Perto do centro, dá pra ir a pé até as praias de Pajuçara também. O ambiente é acolhedor, e os donos que atendem são uns gênios, muito atenciosos, dá pra ver que gostam do que fazem.",
    exp_review2_name: "Pamela",
    exp_review2_place: "Brasil",
    exp_review2_title: "O melhor de Maceió",
    exp_review2_text:
      "Gostei de tudo. A Andréa e o Enzo me receberam muito bem, o lugar é lindo e muito bem organizado, e todos os quartos têm ar-condicionado. Amei tudo e com certeza vou voltar.",
    exp_review3_name: "Josu",
    exp_review3_place: "Espanha",
    exp_review3_title: "Excepcional",
    exp_review3_text:
      "O ambiente maravilhoso que a Andrea e o Enzo criam desde o momento em que você chega ao Home Hostel deles é exatamente assim.",
    exp_review_tag: "Avaliação real no Booking.com",
    exp_closing: "Cada viagem tem uma história. Talvez a próxima seja a sua.",
    exp_cta: "Conheça a localização",

    loc_eyebrow: "LOCALIZAÇÃO",
    loc_title: "O melhor de Maceió ao seu redor.",
    loc_p1:
      "Hospedar-se no Farol é ter a liberdade de explorar diferentes lados da cidade com facilidade. Em poucos minutos você pode seguir para as praias, caminhar pelo centro histórico ou aproveitar tudo o que existe por perto no dia a dia.",
    loc_tagline:
      "Você escolhe onde quer viver Maceió. O Home facilita o caminho.",
    loc_tagline2: "A vista que fica na memória, lá do alto do Mirante.",
    loc_photo1_alt: "Fachada da Catedral Metropolitana de Maceió ao entardecer",
    loc_photo1_caption: "O centro histórico, a poucos minutos daqui",
    loc_photo2_alt: "Capelinha de Jaraguá à beira-mar, com vista para o mar",
    loc_photo2_caption: "Um respiro à beira-mar, pertinho do Home",
    loc_photo3_alt: "Pôr do sol na Nova Orla do Porto de Maceió",
    loc_photo3_caption: "Fim de tarde na orla de Maceió",
    loc_photo4_alt: "Escultura do Cavalo-Marinho, símbolo de Maceió, ao entardecer",
    loc_photo4_caption: "Um símbolo da cidade, para descobrir",
    loc_photo5_alt: "Vista panorâmica da cidade e do mar, vista do Mirante de São Gonçalo",
    loc_photo5_caption: "A vista lá de cima, no Mirante de São Gonçalo",
    loc_photo6_alt: "Letreiro Eu Amo Maceió no Mirante de São Gonçalo",
    loc_photo6_caption: "Um símbolo que todo visitante reconhece",
    loc_perto_heading: "O que tem por perto",
    loc_perto_1: "Restaurantes e cafés variados por perto",
    loc_perto_2: "Padarias para o café da manhã",
    loc_perto_3: "Farmácias a poucos passos",
    loc_perto_4: "Mercado Palato do Farol, para o dia a dia",
    loc_map_address: "R. Prof. Ângelo Neto, 263 — Farol, Maceió - AL, 57051-530",
    loc_map_cta: "Abrir no Google Maps",
    loc_cta: "Conheça a galeria",
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
    nav_contatos: "Contacto",
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

    exp_eyebrow: "EXPERIENCIAS",
    exp_title: "El viaje empieza cuando te sentís cómodo.",
    exp_p1:
      "Maceió está ahí afuera, esperando ser descubierta. Acá adentro, encontrás un lugar para llegar, respirar, descansar y compartir.",
    exp_p2_html:
      "En el Home, cada estadía puede ser diferente: nuevos lugares, nuevas personas, nuevas historias. Pero hay algo que queremos que se mantenga igual: <strong>la sensación de sentirte bien recibido.</strong>",
    exp_tagline1: "Más que quedarte. Vivir.",
    exp_concept1_title: "Encuentros",
    exp_concept1_desc:
      "Conocé gente, compartí historias y llevate nuevas amistades con vos.",
    exp_concept2_title: "Calidez",
    exp_concept2_desc:
      "Un ambiente tranquilo y relajado para sentirte cómodo desde que llegás.",
    exp_concept3_title: "Descubrimientos",
    exp_concept3_desc:
      "Usá el Home como punto de partida para vivir Maceió, conocer Alagoas y crear tus propias historias.",
    exp_tagline2: "Y quienes ya estuvieron acá, lo sintieron.",
    exp_photo1_alt:
      "Espacio compartido del Home Hostel, con mesa al aire libre y decoración artesanal",
    exp_photo1_caption: "Un lugar para encontrarse",
    exp_photo2_alt:
      "El gato que vive en el Home Hostel, tirado al sol en el pasillo",
    exp_photo2_caption: "El gato de la casa también vive acá",
    exp_reviews_badge_score: "9,3",
    exp_reviews_badge_text: "Fantástico",
    exp_reviews_badge_sub: "10 comentarios en Booking.com",
    exp_reviews_disclaimer:
      "Comentarios reales de huéspedes en Booking.com, traducidos automáticamente cuando corresponde.",
    exp_review1_name: "Juan",
    exp_review1_place: "Argentina",
    exp_review1_title:
      "Instalación nueva, mucha comodidad, ambiente de hogar y buena onda. Muy cerca del centro y las playas.",
    exp_review1_text:
      "El Hostel es excelente, todo a nuevo, habitaciones amplias y con aire acondicionado. Cerca del centro, de a pie se puede ir a las playas de Pajuzara también. El ambiente es cálido, y los dueños que lo atienden son unos genios, muy serviciales, se nota que le gusta lo que hacen.",
    exp_review2_name: "Pamela",
    exp_review2_place: "Brasil",
    exp_review2_title: "Lo mejor de Maceió",
    exp_review2_text:
      "Me gustó todo. Andréa y Enzo me recibieron muy bien, el lugar es precioso y está muy bien organizado, y todas las habitaciones tienen aire acondicionado. Me encantó todo y sin duda volveré.",
    exp_review3_name: "Josu",
    exp_review3_place: "España",
    exp_review3_title: "Excepcional",
    exp_review3_text:
      "El ambiente estupendo que Andrea y Enzo crean desde el momento en que llegas a su Home Hostel es realmente así.",
    exp_review_tag: "Reseña real en Booking.com",
    exp_closing: "Cada viaje tiene una historia. Quizás la próxima sea la tuya.",
    exp_cta: "Conocé la ubicación",

    loc_eyebrow: "UBICACIÓN",
    loc_title: "Lo mejor de Maceió a tu alrededor.",
    loc_p1:
      "Hospedarte en Farol es tener la libertad de explorar distintos lados de la ciudad con facilidad. En pocos minutos podés ir a las playas, caminar por el centro histórico o disfrutar todo lo que hay cerca en el día a día.",
    loc_tagline:
      "Vos elegís cómo vivir Maceió. El Home te facilita el camino.",
    loc_tagline2: "La vista que se queda en la memoria, allá arriba en el Mirador.",
    loc_photo1_alt: "Fachada de la Catedral Metropolitana de Maceió al atardecer",
    loc_photo1_caption: "El centro histórico, a pocos minutos de acá",
    loc_photo2_alt: "Capilla de Jaraguá frente al mar, con vista al océano",
    loc_photo2_caption: "Un respiro frente al mar, cerquita del Home",
    loc_photo3_alt: "Atardecer en la Nova Orla del Puerto de Maceió",
    loc_photo3_caption: "Fin de tarde en la costanera de Maceió",
    loc_photo4_alt: "Escultura del Caballito de Mar, símbolo de Maceió, al atardecer",
    loc_photo4_caption: "Un símbolo de la ciudad, para descubrir",
    loc_photo5_alt: "Vista panorámica de la ciudad y el mar, desde el Mirador de São Gonçalo",
    loc_photo5_caption: "La vista desde arriba, en el Mirador de São Gonçalo",
    loc_photo6_alt: "Cartel Eu Amo Maceió en el Mirador de São Gonçalo",
    loc_photo6_caption: "Un símbolo que todo visitante reconoce",
    loc_perto_heading: "Qué hay cerca",
    loc_perto_1: "Restaurantes y cafés variados cerca",
    loc_perto_2: "Panaderías para el desayuno",
    loc_perto_3: "Farmacias a pocos pasos",
    loc_perto_4: "Mercado Palato do Farol, para el día a día",
    loc_map_address: "R. Prof. Ângelo Neto, 263 — Farol, Maceió - AL, 57051-530",
    loc_map_cta: "Abrir en Google Maps",
    loc_cta: "Conocé la galería",
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
    nav_contatos: "Contact",
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

    exp_eyebrow: "EXPERIENCES",
    exp_title: "The trip begins the moment you feel at ease.",
    exp_p1:
      "Maceió is out there, waiting to be discovered. In here, you'll find a place to arrive, breathe, rest and share.",
    exp_p2_html:
      "At Home, every stay can be different: new places, new people, new stories. But there's one thing we want to stay the same: <strong>the feeling of being truly welcomed.</strong>",
    exp_tagline1: "More than a stay. A life lived.",
    exp_concept1_title: "Encounters",
    exp_concept1_desc:
      "Meet people, share stories, and take new friendships with you.",
    exp_concept2_title: "Warmth",
    exp_concept2_desc:
      "A calm, easygoing atmosphere that makes you feel at home from the moment you arrive.",
    exp_concept3_title: "Discoveries",
    exp_concept3_desc:
      "Use Home as your starting point to live Maceió, explore Alagoas, and create your own stories.",
    exp_tagline2: "And those who've been here, felt it.",
    exp_photo1_alt:
      "Home Hostel's shared patio, with an outdoor table and handmade decor",
    exp_photo1_caption: "A place to meet",
    exp_photo2_alt:
      "The cat who lives at Home Hostel, lying in the sun in the corridor",
    exp_photo2_caption: "The house cat lives here too",
    exp_reviews_badge_score: "9.3",
    exp_reviews_badge_text: "Fantastic",
    exp_reviews_badge_sub: "10 reviews on Booking.com",
    exp_reviews_disclaimer:
      "Real guest reviews from Booking.com, automatically translated when needed.",
    exp_review1_name: "Juan",
    exp_review1_place: "Argentina",
    exp_review1_title:
      "Brand-new place, super comfortable, homey feel and great vibe. Very close to downtown and the beaches.",
    exp_review1_text:
      "The Hostel is excellent, everything brand new, spacious rooms with air conditioning. Close to downtown, you can even walk to Pajuçara beach. The atmosphere is warm, and the owners who run it are amazing, very attentive, you can tell they love what they do.",
    exp_review2_name: "Pamela",
    exp_review2_place: "Brazil",
    exp_review2_title: "The best of Maceió",
    exp_review2_text:
      "I loved everything. Andréa and Enzo welcomed me so well, the place is beautiful and very well organized, and every room has air conditioning. I loved it all and I'll definitely be back.",
    exp_review3_name: "Josu",
    exp_review3_place: "Spain",
    exp_review3_title: "Exceptional",
    exp_review3_text:
      "The wonderful atmosphere that Andrea and Enzo create from the moment you arrive at their Home Hostel is exactly like that.",
    exp_review_tag: "Real review on Booking.com",
    exp_closing: "Every trip has a story. Maybe the next one is yours.",
    exp_cta: "Discover the location",

    loc_eyebrow: "LOCATION",
    loc_title: "The best of Maceió, all around you.",
    loc_p1:
      "Staying in Farol means having the freedom to explore different sides of the city with ease. In just a few minutes you can head to the beaches, walk through the historic center, or enjoy everything nearby, day to day.",
    loc_tagline:
      "You choose how to live Maceió. Home makes it easy to get there.",
    loc_tagline2: "The view you'll remember, up at the lookout.",
    loc_photo1_alt: "Facade of the Maceió Metropolitan Cathedral at dusk",
    loc_photo1_caption: "The historic center, just minutes away",
    loc_photo2_alt: "Jaraguá Chapel by the sea, with an ocean view",
    loc_photo2_caption: "A breather by the sea, close to Home",
    loc_photo3_alt: "Sunset at Maceió's Nova Orla do Porto",
    loc_photo3_caption: "Late afternoon on Maceió's waterfront",
    loc_photo4_alt: "Seahorse sculpture, a symbol of Maceió, at dusk",
    loc_photo4_caption: "A city landmark, waiting to be discovered",
    loc_photo5_alt: "Panoramic view of the city and the sea, from São Gonçalo Lookout",
    loc_photo5_caption: "The view from up top, at São Gonçalo Lookout",
    loc_photo6_alt: "Eu Amo Maceió sign at São Gonçalo Lookout",
    loc_photo6_caption: "A landmark every visitor recognizes",
    loc_perto_heading: "What's nearby",
    loc_perto_1: "A variety of restaurants and cafés nearby",
    loc_perto_2: "Bakeries for breakfast",
    loc_perto_3: "Pharmacies just steps away",
    loc_perto_4: "Palato do Farol market, for everyday needs",
    loc_map_address: "R. Prof. Ângelo Neto, 263 — Farol, Maceió - AL, 57051-530",
    loc_map_cta: "Open in Google Maps",
    loc_cta: "Discover the gallery",
  },
};

export const DEFAULT_LANG = "pt";
export const STORAGE_KEY = "hh-lang";
