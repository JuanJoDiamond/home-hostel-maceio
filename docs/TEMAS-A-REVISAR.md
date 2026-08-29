# Temas a revisar

Documento vivo: acá se anota todo lo que queda pendiente, sea porque falta
un dato real del cliente, porque es una decisión de diseño que todavía no
se tomó, o porque es una mejora opcional para más adelante. Se actualiza
en cada Sprint — nada de esto bloquea el avance del proyecto.

Cuando algo de acá se resuelve, se mueve a la sección **Resueltos**, con
la fecha y la decisión tomada, para que quede el historial.

---

## 🔴 Pendiente — necesita un dato real del cliente

| Tema | Dónde impacta | Detalle |
|---|---|---|
| Número de WhatsApp | Botón del header, botón del hero | ~~Hoy usan el placeholder~~ **Resuelto y aplicado 2026-08-08**: `https://wa.me/5582991280921` (número real: `082 99128 0921`) ya está en las 2 ubicaciones de `index.html`. |
| Dominio definitivo | `<link rel="canonical">`, `og:url`, `og:image` en `index.html` | **Actualizado 2026-08-07**: mientras no exista el dominio real, las 3 etiquetas apuntan a la URL viva de GitHub Pages (`https://juanjodiamond.github.io/home-hostel-maceio/`) en vez de al placeholder — un canonical a un dominio inexistente podía hacer que Google no indexara la página, ahora que el sitio ya está público. Cuando el dominio real esté activo, hay que reemplazar las 3 URLs (buscar "juanjodiamond.github.io" en `index.html`). |
| Dirección física completa | Futuro Schema.org / SEO local, sección Ubicación (Sprint 5) | Necesaria para que Google muestre el hostel con dirección/mapa en los resultados de búsqueda. |
| Teléfono / email de contacto | Futuro Schema.org, sección de contacto | Mismo caso que la dirección. |

## 🟠 Confirmado con el cliente — implementar en el próximo sprint

| Tema | Detalle |
|---|---|
| Contenido real de la sección Contatos | Redes sociales (Instagram) + WhatsApp. Falta definir copy exacto. Sprint 7. |

## 🔵 A revisar en un próximo sprint (idea del cliente, todavía sin definir)

| Tema | Detalle |
|---|---|
| Botón/ícono flotante de WhatsApp en mobile | En desktop el botón "Reservar" está siempre visible y fijo en el nav. En mobile no hay equivalente hasta que la persona llega al final del sitio — se puede perder la conversión si no scrollea todo. Idea del cliente (2026-08-29): sumar un ícono flotante fijo (WhatsApp o "Reservar") al costado, solo en mobile. A definir: posición exacta, si tapa contenido al hacer scroll, y si conviene ocultarlo cerca del footer para no duplicar con el CTA final. |

## 🟡 Decisión de diseño pendiente

| Tema | Detalle |
|---|---|
| Paleta de acento vs. rojo del logo | La paleta del sitio usa un coral anaranjado (`#E8604C`); el logo real tiene un rojo puro más saturado (`#D71B19`). Conviven bien porque el logo es una insignia autocontenida, pero si se busca coherencia total de marca, en algún momento conviene correr el acento del sitio hacia ese rojo. Implica tocar `variables.css` y los botones. |
| Tipografías: Google Fonts (CDN) vs. self-hosteadas | Hoy se cargan desde Google Fonts. Queda `assets/fonts/` vacía por si se decide self-hostearlas más adelante (menos dependencia de terceros, mejor tiempo de carga). |

## 🟢 Mejora opcional a futuro (no urgente)

| Tema | Detalle |
|---|---|
| Foto del hero en mayor resolución | El archivo actual es de 1365px de ancho. Se ve bien hasta laptops estándar; en monitores grandes/4K puede notarse escalado. Reemplazar por una versión de ≥2400px cuando esté disponible — no requiere tocar código, mismo nombre de archivo. |
| Datos estructurados (Schema.org / JSON-LD) | Tipo `LodgingBusiness`. Mejora de SEO de mayor impacto para negocios de hospedaje local, pero depende de tener dirección y teléfono reales (ver arriba). |
| `og:site_name` + Twitter/X Card | Meta tags chicas, mejoran cómo se ve el link al compartirlo en redes. Cinco minutos de trabajo cuando se decida sumarlas. |
| Título de pestaña no cambia con el selector de idioma | Al elegir inglés o español, el contenido de la página se traduce pero el `<title>` de la pestaña del navegador se queda en portugués. Detalle de experiencia, no de SEO. |
| Ícono de WhatsApp repetido en el HTML | Está pegado dos veces (header y hero) porque son dos botones distintos. Si aparece una tercera vez en sprints futuros, ahí conviene extraerlo a un solo lugar reutilizable. |
| Instagram real del hostel | `@Homehostelmcz`, encontrado en el banner de entrada. Se podría sumar como link/ícono en el footer cuando se arme (Sprint 8). |
| Sección "Área de serviço" (lavandería/depósito) | Hay una foto (`DSC07478`) de un espacio que no encaja en ninguna sección actual del sitio (freezer, ropero, depósito). Guardada procesada, sin usar todavía. Evaluar si merece su propia mini-sección o si se descarta más adelante. |
| Footer / sección "Redes" con Instagram + TikTok | Idea del cliente: footer prolijo con los logos de las redes sociales reales del hostel (Instagram `@Homehostelmcz` confirmado; falta el usuario de TikTok, lo va a pasar). Con efecto hover — el logo se agranda al pasar el mouse. Diseño a definir en el Sprint 8 (CTA final / footer). |
| Imagen "cabecera" para compartir link / Google Maps | Idea del cliente: armar una imagen especial (usando el pasillo de banderas, o la foto del banner+bandera+celular) pensada específicamente para cuando se comparte el link del sitio (vista previa de WhatsApp/redes) o para la ficha de Google Maps del negocio. Distinta del `og-cover.jpg` actual del hero. Pendiente de definir cuál foto usar y el tamaño exacto que pide cada plataforma. |
| Patrón de grid-areas para intercalar texto y fotos en mobile | Nace en el Sprint 2 (sección Sobre): en vez de un bloque de texto y un bloque de fotos separados, cada elemento es un ítem individual de un grid con `grid-template-areas`, así el orden de lectura puede ser distinto en mobile (intercalado) y desktop (2 columnas) sin duplicar HTML. Aplicado en Sobre, Quartos, Experiências y Localização (Sprints 2-5). **Excepción, desde el Sprint 6:** Galeria usa una sola columna (texto arriba, fotos abajo) igual en mobile y desktop -- con texto corto, el patrón de 2 columnas dejaba mucho espacio vacío. Evaluar caso por caso en secciones futuras, no asumir el patrón de 2 columnas por default. **Parte del mismo estándar (agregado en el Sprint 4):** en desktop, cuando hay 2 fotos lado a lado, la segunda foto siempre lleva `margin-block-start: var(--space-2xl)` para que arranque un poco más abajo que la primera -- rompe la alineación perfecta y le da un aire más orgánico. Aplicar en toda sección nueva con este layout, no solo en las que ya lo tienen (excepto Galeria, ver arriba). |

## 🔵 Práctica de proceso (no es código, es flujo de trabajo)

| Tema | Detalle |
|---|---|
| Verificar en incógnito antes de reportar un bug visual | Aprendido en el Sprint 2: un cambio recién publicado puede verse roto simplemente por caché del navegador/CDN, no por un error real de código. Antes de reportar algo como bug después de un `git push`, probar primero en una ventana de incógnito (sin caché) para descartar ese caso. |
| Sincronizar antes de generar un parche nuevo | El asistente siempre trae el commit real del repo (`git fetch` + `git log origin/main`) antes de armar un parche nuevo, en vez de asumir que su copia de trabajo sigue igual a lo último subido. |
| Coordenadas de mapa: siempre confirmadas con el cliente, nunca de una fuente genérica | Aprendido en el Sprint 5: una fuente de geocodificación por CEP dio coordenadas ~1,6 km desviadas de la ubicación real. De acá en más, cualquier coordenada de mapa se pide directamente al cliente (su propio Google Maps, botón "Compartilhar") antes de usarla en el sitio. |
| Probar parches con archivos binarios (fotos) en un clon descartable | Aprendido en el Sprint 4: `git apply --check` no alcanza para confirmar que un archivo binario (foto, PDF) llegó bien -- hay que aplicarlo en un clon limpio y verificar con `file` que la imagen sea válida antes de entregar el parche. |
| Verificar dimensiones reales de una foto antes de asignarle su layout | Aprendido en el Sprint 6: no asumir vertical/horizontal por el tipo de espacio que muestra la foto (una foto de "recepção" puede ser horizontal). Una consulta rápida con Pillow (`Image.open(...).size`) antes de escribir el HTML/CSS evita rondas de corrección después. |
| Renderizar con navegador headless antes de reportar un layout como resuelto | Aprendido en el Sprint 6: un bug de layout (hueco vacío bajo una foto) no era detectable revisando el CSS a simple vista -- hacía falta medir las cajas reales en el DOM con Chromium headless (Playwright) para encontrar la causa real. |
| Nombre del archivo de parche: siempre el mismo en el mensaje y en el comando | Aprendido en el Sprint 6: nunca copiar rutas de carpetas de descarga en los comandos -- el cliente mueve el archivo a la carpeta del proyecto antes de correr `git apply`, así que el comando solo necesita el nombre del archivo. |

---

## ✅ Resueltos

| Fecha | Tema | Decisión |
|---|---|---|
| 2026-08-07 | Indexación en Google en un solo idioma | El selector PT/ES/EN es una función de UI para el visitante, no una estrategia de SEO multi-idioma. Google solo indexa la versión en portugués — **decisión aceptada**: el hostel está en Brasil, el público que necesita encontrarlo por buscador es de habla portuguesa. No se implementan URLs por idioma ni `hreflang`. Si en el futuro cambia el objetivo (captar búsquedas en inglés/español), queda como mejora posible, no como deuda técnica. |
| 2026-08-07 | CSS con `@import` (render-blocking) | Corregido: se eliminó `style.css`, ahora los 6 archivos CSS se cargan como `<link>` individuales en paralelo desde `index.html`. |
| 2026-08-07 | Faltaba skip-link de accesibilidad | Corregido: agregado al inicio del `<body>`. |
| 2026-08-07 | Logo oficial | Reemplazado el ícono SVG genérico + texto por el logo real del cliente (favicon + insignia del header), optimizado a WebP/PNG. |
| 2026-08-07 | QA post-publicación (sitio ya en vivo) | Revisión completa del repo publicado en GitHub Pages. Encontrado y corregido: `og:image` con ruta relativa (rota la vista previa al compartir el link en WhatsApp/Facebook/Twitter, necesita URL absoluta), comentario de código desactualizado en el `<head>`, y canonical/`og:url` apuntando a un dominio inexistente mientras el sitio ya está público (se cambiaron temporalmente a la URL real de GitHub Pages). |
| 2026-08-08 | Sesión de fotos reales del hostel | Procesadas y curadas ~35 fotos de las ~60 recibidas (baño, cocina/sala de jantar/pátio, entrada-recepção, quartos), en `assets/images/gallery/` (carrusel) y `assets/images/hostel/` (detalle). Edición: balance de blancos, exposición pareja entre cámara ojo de pez y celular, contraste local, tono cálido de marca, nitidez. Efecto ojo de pez respetado sin corregir, por decisión estética del cliente. |
| 2026-08-08 | Logo del header más grande | Aumentado de 44–56px a 48–64px (clamp), con la barra sticky scrolleada pasando de 64px a 72px de alto para que no quede apretado. |
| 2026-08-08 | WhatsApp real aplicado al código | `https://wa.me/5582991280921` ya reemplaza el placeholder en los 2 botones de `index.html`. |
| 2026-08-25 | Sección "Sobre" (Sprint 2) | Copy emocional PT/ES/EN + 2 fotos reales (pasillo con banderas, detalle artesanal del pátio) + hover con frase de prueba social. Ver `AUDITORIA-SPRINT2.md` para el detalle completo. |
| 2026-08-25 | Header tapaba el título al navegar por ancla | Corregido con `scroll-margin-top: var(--header-height)` genérico en `main section[id]` (`layout.css`) — se aplica automáticamente a toda sección futura, no hace falta repetirlo. |
| 2026-08-25 | Layout de "Sobre" roto en desktop tras publicar | No era bug de código: el navegador servía `sobre.css` viejo (caché) junto al `index.html` nuevo. Confirmado y resuelto verificando en ventana de incógnito. Sin cambios de código necesarios. |
| 2026-08-26 | Sección "Quartos" (Sprint 3) | Copy PT/ES/EN + checklist de amenities compartida + 2 fotos fijas + carrusel 3D tipo "coverflow" (componente reutilizable, sin librerías). Ver `AUDITORIA-SPRINT3.md` para el detalle completo. |
| 2026-08-26 | Hueco en blanco entre fotos de distinto formato junto al texto | Mismo aprendizaje que en Sobre: agrupar fotos del mismo formato (ambas verticales) en vez de emparejar cada una 1 a 1 con su bloque de texto. |
| 2026-08-26 | Carrusel corría la página hacia la derecha en mobile | Faltaba `overflow: hidden` en el contenedor del carrusel; las fotos giradas en 3D quedaban parcialmente fuera del viewport. Confirmado con medición real de `scrollWidth` antes/después. |
| 2026-08-26 | Scrollspy (sección activa en el nav) | Funcionalidad nueva, no existía antes: el link del menú se marca solo según la sección visible, con click o con scroll libre. Verificado en PT/ES/EN. |
| 2026-08-26 | Sección "Experiências" (Sprint 4) | Copy PT/ES/EN con 3 conceptos (Encontros/Acolhimento/Descobertas), 2 fotos reales, y 3 testimonios reales de Booking.com replicados con diseño propio (no clonando el estilo visual de Booking, para no insinuar una integración que no existe). Reemplaza a la sección "Depoimentos" original -- ver nota de decisión más abajo. |
| 2026-08-26 | Indicador de sección activa en el nav de desktop poco visible | Corregido: además del subrayado, el link activo ahora también cambia a negrita y color propio (`--color-palm`). |
| 2026-08-26 | Link "Depoimentos" del nav apuntaba a una sección que ya no se iba a construir | Renombrado a "Contatos" (`#contatos`) en los 3 idiomas -- va a alojar redes sociales y WhatsApp cuando se construya esa sección (ver decisión de fusionar Depoimentos dentro de Experiências, abajo). |
| 2026-08-27 | Reestructuración del final de la landing | Se descartó "Depoimentos" como sección independiente (con ~10 reseñas en Booking no había volumen). Los 3 testimonios reales se movieron dentro de Experiências (Sprint 4). El nav ya se renombró de "Depoimentos" a "Contatos". |
| 2026-08-28 | Sección "Localização" (Sprint 5) | Contenido en 2 niveles (día a día genérico + 3 bloques con nombres reales de atracciones), 6 fotos reales del cliente, mapa con coordenadas y embed reales de Google, dirección siempre visible. Ver `AUDITORIA-SPRINT5.md` para el detalle completo, incluida la reconstrucción tras feedback. |
| 2026-08-28 | Coordenadas de mapa incorrectas (~1,6 km de error) | Corregido con las coordenadas exactas que el cliente confirmó desde su propio Google Maps, más el embed oficial (sin API key) con el Place ID real del negocio. |
| 2026-08-28 | Fotos con personas identificables en el Mirante | Resuelto por el cliente con una herramienta de IA de edición externa (removió a las personas manteniendo el fondo real) -- verificado que no quedaran artefactos antes de usarlas. Se descartó previamente tanto el desenfoque como usar fotos de stock sin licencia confirmada. |
| 2026-08-27 | Desfase de fotos no replicado en Quartos ni Experiências | Corregido en `responsive.css`: ahora las 3 secciones con 2 fotos lado a lado usan el mismo `margin-block-start` en la segunda foto. Documentado como estándar para toda sección nueva. |
| 2026-08-27 | Indicador de sección activa en el nav de desktop, ronda 2 | Sumado negrita + color propio (`--color-palm`) al link activo, además del subrayado que ya existía. |
| 2026-08-29 | Sección "Galeria" (Sprint 6) | Copy PT/ES/EN con enfoque de catálogo visual (menos storytelling), 3 bloques (Cozinha, Área externa e recepção, Banheiros) con 3 fotos reales cada uno, 2 videos reales del cliente. Ver `AUDITORIA-SPRINT6.md` para el detalle completo, incluidas las 3 rondas de ajuste post-publicación. |
| 2026-08-29 | Hueco vacío debajo de cada foto "hero" en Galeria | Causa real: `<picture>` no heredaba la altura completa de la figura. Corregido con `picture { width:100%; height:100% }` en `galeria.css`. |
| 2026-08-29 | Layout de 2 columnas en Galeria dejaba espacio vacío en desktop | Rediseñado a una sola columna (texto arriba, fotos abajo), igual en mobile y desktop -- ver excepción anotada en el patrón de grid-areas más arriba. |
| 2026-08-29 | Foto de "recepção" incorrecta en Galeria | Se usaba `entrada_04` (la puerta); la foto real de recepção identificada por el cliente es `entrada_03` (sofá y espacio de estar). Corregido. |
| 2026-08-29 | Parejas de fotos con proporciones distintas en Galeria | 2 bloques tenían una foto horizontal emparejada con una vertical. El cliente las reemplazó por alternativas verticales (`sala-jantar_07`, `patio_03`) para que las parejas queden visualmente parejas. |
| 2026-08-29 | Pedido de usar captura de pantalla de Google Maps como imagen | No implementado -- los Términos de Servicio de Google Maps prohíben reutilizar capturas de pantalla del mapa fuera de su embed/API oficial. Se resolvió el pedido de fondo (tarjeta de mapa mobile más visual) con un ícono de pin ilustrado propio (SVG) en su lugar. |
