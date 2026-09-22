# Migración a producción — Hostinger
**Home Hostel Maceió · Landing Page**
Paso del entorno de desarrollo (GitHub Pages) al hosting definitivo con
dominio propio. Cierre del proyecto: el sitio queda en producción en
**https://homehostelmcz.com.br**.

Fecha: 2026-09-22

---

## 1. Resumen ejecutivo

El sitio está **en producción en Hostinger, con dominio propio y SSL**.
Todas las URLs absolutas del código (SEO, redes sociales, datos
estructurados) apuntan al dominio definitivo. Se agregó un `.htaccess`
que unifica las variantes del dominio en una sola URL oficial
(`https://` + sin `www`). La subida se verificó en producción con 5
pruebas manuales en ventana de incógnito, todas correctas.

| Dato | Valor |
|---|---|
| URL oficial | `https://homehostelmcz.com.br` (sin `www`, sin subcarpeta) |
| Hosting | Hostinger — Premium Web Hosting (plan vence 2027-09-17) |
| Titular de dominio y hosting | El dueño del hostel (cuenta propia en Hostinger, dominio `.com.br` a su CPF) |
| Acceso del desarrollador | Acceso de administrador delegado en hPanel |
| SSL | Activo |
| CDN de Hostinger | Activo (ver sección 6: caché) |
| Entorno anterior | `https://juanjodiamond.github.io/home-hostel-maceio/` (GitHub Pages) |

---

## 2. Cambios en el código

### 2.1 Reemplazo de URL (8 ocurrencias en 3 archivos)
`https://juanjodiamond.github.io/home-hostel-maceio` → `https://homehostelmcz.com.br`

| Archivo | Dónde | Cant. |
|---|---|---|
| `index.html` | `<link rel="canonical">` | 1 |
| `index.html` | Open Graph `og:url` + `og:image` | 2 |
| `index.html` | Twitter Card `twitter:image` | 1 |
| `index.html` | JSON-LD `LodgingBusiness`: `url` + `image` | 2 |
| `sitemap.xml` | `<loc>` (+ `lastmod` a 2026-09-22) | 1 |
| `robots.txt` | Línea `Sitemap:` | 1 |

`twitter:image` no estaba en la lista original de etiquetas a revisar,
pero también apuntaba a GitHub Pages -- se detectó buscando el string en
todo el repo en vez de revisar solo las etiquetas listadas. Lección: para
un cambio de dominio, buscar el string completo, no una lista de lugares.

Se actualizaron también 2 comentarios del `<head>` que marcaban el
canonical como "TEMPORAL" y mencionaban un dominio que nunca se compró
(`homehostelmaceio.com`).

Verificación: 0 ocurrencias de `github.io` fuera de `docs/` (los docs
históricos se dejan como están, son el registro de lo que pasó). JSON-LD
parseado con `json.loads` y `sitemap.xml` con un parser XML, ambos
válidos.

### 2.2 `.htaccess` (archivo nuevo)
Hostinger usa LiteSpeed, compatible con `.htaccess` de Apache.

| Regla | Para qué |
|---|---|
| `www` → sin `www` (301) | Sin esto, `www.homehostelmcz.com.br` servía una copia duplicada del sitio. Ahora redirige, coherente con el canonical. |
| `http` → `https` (301) | Toda visita termina en la versión segura. |
| `Options -Indexes` | Una carpeta sin `index` no lista su contenido. |
| Compresión (`mod_deflate`) | HTML, CSS, JS, JSON, XML, SVG comprimidos. |
| Caché del navegador (`mod_expires`) | Imágenes 30 días; CSS/JS 1 día; HTML sin caché. CSS/JS con caché corta a propósito: los nombres de archivo no llevan versión (`site.css`, no `site.v2.css`), así que un caché largo haría que un cambio tarde días en verse. |

### 2.3 `site.css`
Se corrió `scripts/build_css.py`. El archivo generado salió idéntico al
del repo (ya estaba sincronizado con los 14 CSS fuente) -- sin cambios de
estilos en esta migración.

---

## 3. Qué se sube al servidor (y qué no)

El `.zip` de producción lleva **solo lo que el sitio usa**. El repo
sigue siendo la fuente completa.

| Se sube | No se sube (queda solo en el repo) |
|---|---|
| `index.html`, `favicon.ico`, `robots.txt`, `sitemap.xml`, `.htaccess` | `docs/`, `scripts/`, `README.md`, `.gitignore` |
| `assets/css/site.css` | Los 14 CSS fuente (`variables.css`, `hero.css`, etc.) -- `index.html` solo carga `site.css` |
| `assets/js/` (6 módulos) | -- |
| Las imágenes referenciadas en HTML/CSS/JS | 40 imágenes sin uso (~15 MB): alternativas descartadas en los sprints y `assets/images/pendientes/` |

Resultado: 77 archivos, ~20 MB (contra ~35 MB si se subía todo).

Las imágenes sin uso se detectaron automáticamente: cada archivo de
`assets/images/` se buscó por nombre en `index.html`, `site.css` y los
JS. Se confirmó antes que el JS no arma rutas de imágenes dinámicamente
(si lo hiciera, este método daría falsos "sin uso").

---

## 4. Verificación

### 4.1 Antes de subir (entorno local, Playwright + Chromium)
El `.zip` se descomprimió en una carpeta limpia y se sirvió **desde la
raíz** (igual que va a quedar en `public_html/`), no desde una subcarpeta.

| Chequeo | Mobile 390px | Desktop 1440px |
|---|---|---|
| Archivos locales con error 404 | 0 | 0 |
| Imágenes rotas | 0 | 0 |
| Overflow horizontal | No | No |
| Animaciones `data-animate` disparadas con scroll real incremental | 6/6 | 6/6 |

El único error de consola fue la carga de recursos externos (Google
Fonts, mapa, videos) bloqueada por la red del entorno de pruebas -- no
es un problema del sitio.

### 4.2 Después de subir (producción, ventana de incógnito)
Verificado manualmente por el desarrollador:

| Prueba | Resultado esperado | Resultado |
|---|---|---|
| `https://homehostelmcz.com.br` | Sitio completo con candado SSL | ✅ |
| `http://homehostelmcz.com.br` | Redirige a `https://` | ✅ |
| `https://www.homehostelmcz.com.br` | Redirige a la versión sin `www` | ✅ |
| `/robots.txt` | Texto con `Sitemap: https://homehostelmcz.com.br/sitemap.xml` | ✅ |
| `/sitemap.xml` | XML con `<loc>https://homehostelmcz.com.br/</loc>` | ✅ |

Los tamaños de los archivos en el File Manager de Hostinger coincidieron
al byte con los del `.zip` (`index.html` 64.32 KiB, `.htaccess` 1.57 KiB,
etc.): la extracción fue completa.

Nota: al abrir `sitemap.xml`, Chrome muestra *"This XML file does not
appear to have any style information…"*. No es un error: el XML no tiene
hoja de estilos y el navegador muestra el árbol crudo. Los buscadores lo
leen igual.

---

## 5. Procedimiento de despliegue (para repetir en cada actualización)

1. **Generar el paquete:** correr `scripts/build_css.py` si se tocó CSS, y
   armar el `.zip` solo con los archivos de producción (sección 3). El
   `.zip` tiene los archivos **en la raíz**, sin carpeta contenedora.
2. **Entrar a hPanel:** Sitios web → `homehostelmcz.com.br` → **Panel**.
   Si no abre, el navegador bloqueó la ventana emergente: permitir
   pop-ups para `hpanel.hostinger.com` o recargar con F5.
3. **Abrir el Gestor de archivos:** Esenciales → Gestor de archivos →
   **Abrir** (se abre en otra pestaña).
4. **Entrar a `public_html/`.**
5. **Subir el `.zip`** con el ícono de subir (flecha hacia arriba). No
   descomprimirlo en la computadora antes.
6. **Extraer:** clic derecho sobre el `.zip` → Extraer, **sin nombre de
   carpeta** y destino `public_html`. Si se pone un nombre, los archivos
   quedan en `public_html/nombre/` y el sitio no carga.
7. **Revisar la estructura:** `index.html` tiene que estar directo en
   `public_html/`. `.htaccess` se ve en gris porque es un archivo oculto;
   es normal.
8. **Borrar el `.zip` del servidor.** Si queda en `public_html/`,
   cualquiera lo puede descargar desde el navegador.
9. **Limpiar la caché:** Panel → Caché → **Limpiar caché**. Esperar 1–2
   minutos.
10. **Probar en incógnito** las 5 URLs de la sección 4.2.

En la primera subida, además: borrar el `default.php` de ejemplo que
Hostinger deja en `public_html/`. El servidor lo prioriza sobre
`index.html`, y si queda se ve la página de Hostinger en vez del sitio.

---

## 6. Problemas encontrados en la subida y cómo se resolvieron

| Problema | Causa | Solución |
|---|---|---|
| El botón "Panel" de hPanel no abría nada | La cuenta se opera con *Acceso de administrador* delegado, que abre el panel en otra pestaña; el navegador la bloqueaba | F5 (recargar) y volver a tocar "Panel". Alternativa: permitir pop-ups para `hpanel.hostinger.com` |
| Riesgo: el sitio viejo o la página de Hostinger se sigue viendo después de subir | CDN de Hostinger activo, sirve copias en caché | Panel → Caché → Limpiar caché, y probar en incógnito. El botón "Sin vista previa de caché" sirve para confirmar si es solo caché |

---

## 7. Pendientes que deja la migración

Se suman a `TEMAS-A-REVISAR.md`:

1. **GitHub Pages sigue online** con una copia del sitio. El canonical ya
   le indica a Google cuál es la URL oficial, pero tener dos copias
   públicas no suma nada. Recomendación: desactivar Pages
   (repo → Settings → Pages) ahora que producción está verificada.
2. **Google Search Console:** dar de alta `homehostelmcz.com.br` y enviar
   el sitemap. Es gratis, no necesita banner de cookies y es la forma de
   pedirle a Google que indexe el dominio nuevo.
3. **Lighthouse contra producción:** el QA final (`QA-FINAL-RELEASE-CANDIDATE.md`)
   midió contra un servidor local sin compresión ni caché. Queda correr el
   mismo checklist contra la URL real para confirmar la mejora esperada
   en Performance mobile.
4. **Analytics (segunda fase):** sigue pendiente de decisión del dueño
   (Search Console / GA4 con consentimiento LGPD / Plausible).

---

## 8. Ajuste post-migración: vista previa al compartir (Open Graph)

Con el sitio ya en el dominio definitivo, se probó la vista previa del
link en **opengraph.xyz** (simula WhatsApp, Facebook, X, LinkedIn y
Discord). Devolvió 3 avisos:

| Aviso | Evaluación | Acción |
|---|---|---|
| Falta `og:site_name` | Real. Ya figuraba como pendiente desde el Sprint 1 | Agregado: `Home Hostel Maceió` |
| `og:description` muy larga (142 caract.) | Real para redes: WhatsApp y mobile cortan cerca de 125, y se perdía el final del texto. Para Google, en cambio, 120-160 es lo ideal | Se separan los dos textos: `og:description` + `twitter:description` a 99 caracteres; la `meta description` de Google queda igual |
| Imagen sin texto de "conversión" | Sugerencia genérica de marketing, no un error. La foto real de la orla funciona bien como vista previa | No se aplica por ahora. Queda como idea en `TEMAS-A-REVISAR.md` ("Imagen cabecera para compartir") |

Texto nuevo para redes, elegido por el desarrollador entre 3 opciones
(la única con llamada a la acción, alineada con el objetivo principal
del sitio: reservas directas por WhatsApp):

```
Hostel acolhedor no Farol, em Maceió. Conheça pessoas, viva Alagoas e reserve direto pelo WhatsApp.
```

Se agregaron también `og:image:width` (1200), `og:image:height` (630) y
`og:image:alt`. Con las medidas declaradas, Facebook muestra la imagen
desde el primer compartido, sin esperar a procesarla.

Corrección de documentación: `QA-FINAL-RELEASE-CANDIDATE.md` decía que
la meta description tenía 133 caracteres; el conteo real es 142.

**Cómo verificar después de subir:** WhatsApp y Facebook guardan en
caché la vista previa de cada link. Para ver la versión nueva, probar
con `https://homehostelmcz.com.br/?v=2`, o en el Facebook Sharing
Debugger tocar "Volver a extraer".
