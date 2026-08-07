# Auditoría técnica — Sprint 1
**Home Hostel Maceió · Landing Page**
Revisión general contra el brief original, antes de avanzar al Sprint 2.

---

## 1. Resumen ejecutivo

El Sprint 1 (estructura, Header, Hero, responsive, variables, animaciones
básicas) está **funcionalmente completo y cumple la identidad aprobada**
(title, meta description, H1, subtítulo, CTAs — textos exactos, sin
modificar). Durante esta auditoría se encontraron y corrigieron **2
problemas técnicos reales** (no cosméticos) y se identificaron mejoras
recomendadas para SEO y accesibilidad que conviene planificar, aunque no
bloquean el Sprint 2.

---

## 2. Problemas encontrados y corregidos hoy

### 2.1 CSS cargado con `@import` (rendimiento) — CORREGIDO
`style.css` importaba los otros 6 archivos con `@import`. Esto obliga al
navegador a pedirlos **en cadena** (uno atrás del otro) en vez de todos al
mismo tiempo, retrasando la primera pintura de la página — justo lo que el
brief pide evitar ("No bloquear renderizado").

**Solución aplicada:** se eliminó `style.css`. `index.html` ahora carga los
6 archivos como `<link rel="stylesheet">` individuales, en el mismo orden
de cascada de antes. El navegador los pide todos en paralelo.

### 2.2 Faltaba skip-link (accesibilidad por teclado) — CORREGIDO
El brief pide explícitamente "Navegación mediante teclado". Faltaba el
elemento más básico de ese rubro: un link invisible que aparece al
presionar Tab por primera vez y permite saltar directo al contenido,
sin tener que tabular por todo el menú.

**Solución aplicada:** agregado `.skip-link` al inicio del `<body>`.

---

## 3. Checklist contra el brief original

| Requisito del brief | Estado |
|---|---|
| Title tag exacto | ✅ Sin modificar |
| Meta description exacta | ✅ Sin modificar |
| H1 exacto | ✅ Sin modificar (con `<em>` solo como énfasis visual, el texto plano es idéntico) |
| CTA principal / secundario exactos | ✅ |
| Solo HTML5 + CSS3 + JS ES6+, sin frameworks | ✅ Verificado, cero dependencias de frameworks |
| HTML5 semántico (header, nav, main, section...) | ✅ |
| CSS: variables, Flexbox, clamp(), media queries, rem | ✅ |
| CSS: Grid | ⚠️ Aún no se usó — no hace falta en Header/Hero. Va a aparecer naturalmente en Habitaciones/Galería (Sprints 3 y 6) |
| Mobile first, breakpoints 576/768/992/1200/1400 | ✅ |
| Funciona de 320px a 4K | ✅ Verificado con las correcciones de tamaño de fuente |
| Header sticky con transición | ✅ |
| Hero ~100vh con overlay | ✅ |
| Meta Tags + Open Graph preparado | ✅ Presentes; ver mejoras recomendadas abajo |
| Alt en imágenes | ✅ |
| Lazy loading | ✅ Con matiz — ver sección 4.3 |
| Contraste correcto / focus visible | ✅ |
| Código comentado, ordenado, sin repetición innecesaria | ✅ (una excepción menor, ver 5.2) |

---

## 4. Auditoría SEO

### 4.1 Lo que ya está bien
- Title y meta description usan las palabras clave correctas del negocio
  ("hospedagem", "clima de casa", "Alagoas", "Maceió") tal como fueron
  aprobadas.
- Un solo `<h1>` en toda la página (jerarquía correcta).
- Open Graph completo (`og:title`, `og:description`, `og:image`, `og:url`,
  `og:locale`).
- `<link rel="canonical">` ya presente.
- HTML semántico bien estructurado.

### 4.2 Gap importante: el selector de idioma NO es indexable por Google
Esto es lo más importante que hay que entender antes de seguir. El
selector PT/ES/EN que armamos cambia el texto **con JavaScript, en la
misma URL** (`homehostelmaceio.com/`). Para el usuario que lo ve en el
navegador, funciona perfecto. Para Google, **no existe**: el buscador solo
va a indexar una versión (la que carga por defecto, portugués). Alguien
que busque en español o inglés nunca va a encontrar esas versiones en los
resultados, aunque el contenido exista y se pueda ver clickeando el botón.

Esto no es un error de código, es una limitación de cómo se armó la
función (justamente para no complicar el Sprint 1 con rutas). No hace
falta resolverlo ahora, pero si el objetivo es de verdad captar turistas
que buscan en inglés/español, en algún momento conviene migrar a URLs
separadas por idioma (por ejemplo `/en/`, `/es/`) con etiquetas
`hreflang`. Lo dejo como recomendación para más adelante, no para este
sprint.

### 4.3 Lazy loading — matiz técnico
El brief pide lazy loading, y la foto del hero **a propósito no lo usa**
(`loading="eager"`). Esto es correcto, no un error: la foto del hero es lo
primero que ve el usuario (es la "LCP", la imagen más grande de la
pantalla inicial), y si se carga en modo lazy, tarda más en aparecer —
empeora el rendimiento en vez de mejorarlo. El lazy loading real se va a
aplicar a partir del Sprint 3 en adelante, en fotos de habitaciones y
galería que están más abajo en la página.

### 4.4 Recomendaciones (no bloquean el Sprint 2)
- **Datos estructurados (Schema.org / JSON-LD)** tipo `LodgingBusiness`:
  con nombre, dirección, teléfono y rango de precios, Google puede
  mostrar el hostel con estrellas, dirección y horario directo en los
  resultados de búsqueda. Es probablemente la mejora de SEO de mayor
  impacto para un negocio de hospedaje local, pero necesita datos reales
  (dirección exacta, teléfono) que todavía son placeholder.
- Agregar `og:site_name` y las meta tags de Twitter/X Card (`twitter:card`,
  `twitter:title`, etc.) — cinco minutos de trabajo, mejora cómo se ve el
  link al compartirlo.
- El `<title>` de la pestaña no cambia cuando el usuario elige inglés o
  español (se queda en portugués). Es un detalle de experiencia, no de
  SEO — lo puedo sumar como mejora chica cuando quieras.

---

## 5. Otras observaciones menores (no urgentes)

### 5.1 Dominio placeholder
`canonical` y `og:url` apuntan a `https://www.homehostelmaceio.com/`, que
todavía no existe. Hay que reemplazarlo por el dominio real antes de
publicar.

### 5.2 Número de WhatsApp
Sigue siendo el placeholder `5582900000000` en dos botones (header y
hero). Pendiente desde el Sprint 1, hay que reemplazarlo por el número
real antes de publicar.

### 5.3 Ícono de WhatsApp repetido en el código
El mismo ícono SVG está pegado dos veces (botón del header y botón del
hero) porque son dos botones distintos en dos lugares distintos de la
página. Es una repetición menor y deliberada — no vale la pena
complicarlo con una plantilla para dos casos, pero si en sprints
posteriores aparece una tercera vez, ahí sí conviene extraerlo a un solo
lugar reutilizable.

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** `@import` render-blocking, skip-link.

**Queda pendiente para cuando el hostel tenga la info real** (no es
trabajo técnico, es esperar datos del cliente): número de WhatsApp,
dominio definitivo, dirección física para el Schema.org.

**Queda como mejora opcional a futuro** (se puede planificar para un
sprint dedicado a SEO, después del Sprint 8): URLs por idioma con
hreflang, datos estructurados, Twitter Card.

---

## 7. Próximo paso

Con esto corregido, el Sprint 1 queda cerrado y validado. Los próximos
pasos posibles, a definir:

1. Subir el proyecto a GitHub (repo + primer commit).
2. Publicarlo con GitHub Pages para tener una URL real de prueba.
3. Sprint 2 — Sección "Sobre Home Hostel".
