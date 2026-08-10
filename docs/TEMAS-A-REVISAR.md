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
