# Auditoría técnica — Sprint 2
**Home Hostel Maceió · Landing Page**
Sección "Sobre". Revisión de cierre antes de avanzar al Sprint 3.

---

## 1. Resumen ejecutivo

El Sprint 2 (primera sección de contenido después del hero: copy emocional
+ 2 fotos reales + micro-interacción) está **completo, en vivo, y validado
en PT/ES/EN, mobile y desktop**. Se entregó en 3 iteraciones sobre el
mismo commit base (2b y 2c), las tres motivadas por feedback de uso real
del cliente después de publicar — no por errores de scope. Se documentan
acá los 2 problemas reales encontrados durante el proceso (uno de código,
uno de despliegue) para que quede el aprendizaje, no solo el resultado.

---

## 2. Qué se construyó

- **Copy emocional** en PT/ES/EN, trabajado en 3 variantes sobre un brief
  de marca (HOME + EXPERIÊNCIA + CONEXÃO) hasta llegar a una versión
  combinada ("Versão D") que cumple los 6 objetivos del brief original.
- **2 fotos reales** del hostel (pasillo con banderas de países de
  hóspedes — refuerza "conexión/comunidad"; detalle artesanal + planta del
  pátio — refuerza "cultura local"), reemplazando la idea inicial de usar
  la foto del banner publicitario (descartada por ser promocional/con
  texto superpuesto, no apta para una sección emocional).
- **Micro-interacción en las fotos**: hover con elevación, zoom suave,
  degradé oscuro y una frase corta que aparece encima (prueba social: "Gente
  de todo o mundo já passou por aqui" / detalle de marca en la segunda). En
  touch (celular), la frase queda siempre visible, ya que no hay hover real.
- **Orden de contenido independiente por dispositivo**: en vez de dos
  bloques separados (todo el texto, después todas las fotos), cada
  párrafo y cada foto es una pieza individual de un mismo grid con
  `grid-template-areas`. Esto permite que el orden de lectura en mobile
  sea texto→foto→texto→foto (intercalado) mientras que en desktop se
  reacomoda a 2 columnas (texto | fotos lado a lado), sin duplicar
  marcado. Mismo patrón a reutilizar en Quartos y Galería para que las
  fotos no se apilen todas juntas en mobile.

---

## 3. Problemas encontrados y corregidos

### 3.1 Bug real de código: header tapaba el título al navegar por ancla — CORREGIDO
Ninguna sección tenía compensado el alto del header fijo. Al hacer clic en
"Sobre" desde el menú (o en cualquier link `#ancla` futuro), el
`scroll-behavior: smooth` llevaba el título de la sección justo detrás del
header, tapándolo parcialmente.

**Solución aplicada:** `scroll-margin-top: var(--header-height)` en
`main section[id]`, en `layout.css`. Es una regla genérica — la va a
heredar automáticamente cada sección nueva (Quartos, Experiências...) sin
que haya que repetirla.

### 3.2 Caché de CDN sirviendo CSS viejo con HTML nuevo — IDENTIFICADO Y RESUELTO (no era bug de código)
Después de publicar la iteración con el nuevo sistema de grid-areas, el
cliente reportó el layout de desktop completamente roto (texto y fotos
superpuestos sin orden). El diagnóstico por auditoría de código mostró que
el CSS en el repo era correcto y sin errores de sintaxis. Confirmado con
prueba en ventana de incógnito: el problema era que GitHub Pages/el
navegador estaba sirviendo una versión en caché de `sobre.css` (de antes
del rediseño) junto con el `index.html` ya actualizado — el HTML tenía
clases que el CSS viejo no reconocía, y el navegador las ubicaba solas, de
forma desordenada.

**Aprendizaje para el flujo de trabajo:** a partir de ahora, para
verificar cualquier cambio recién publicado, primero probar en una ventana
de incógnito (sin caché) antes de reportarlo como bug. Ahorra una ronda
de ida y vuelta.

### 3.3 Desincronización entre la copia de trabajo y el repo real — CORREGIDO EN EL PROCESO
Durante la generación del segundo parche (hover + reordenamiento), la
copia de trabajo usada para generar el diff no estaba sincronizada con el
commit real ya subido por el cliente, lo que iba a producir un parche con
cambios duplicados y conflictos al aplicarlo. Detectado antes de entregar
el archivo, resuelto sincronizando (`git reset --hard origin/main`) y
regenerando el parche limpio. Queda como práctica fija: siempre traer el
commit real (`git fetch` + `git log origin/main`) antes de generar un
parche nuevo, nunca asumir el estado local.

---

## 4. Checklist contra los 6 objetivos del brief de la sección

| Objetivo del brief | Estado |
|---|---|
| Explicar qué es Home Hostel | ✅ Cubierto (heredado del hero + tono general) |
| Ubicar al visitante en Maceió | ✅ "Maceió" y "Alagoas" mencionados explícitamente |
| Transmitir "sentirse en casa" | ✅ Headline + cierre del texto, reforzado con `<em>casa</em>` en color de marca |
| Diferenciar de una hospedagem simple | ✅ Línea explícita agregada ("Aqui, você encontra mais do que um lugar para dormir") |
| Generar confianza | ✅ Reforzado en esta ronda: la frase sobre la foto 1 ("Gente de todo o mundo já passou por aqui") es prueba social directa — no estaba en el plan original, salió de la mejora del hover |
| Llevar a una acción de reserva | ✅ Resuelto como CTA suave a `#quartos` (no reserva directa) — decisión consciente del cliente: el WhatsApp ya está fijo en el header, no hace falta duplicarlo acá |

---

## 5. Otras observaciones menores (no urgentes)

- El texto de la sección quedó solo en los 3 idiomas ya soportados
  (PT/ES/EN) vía `i18n-data.js`, sin contenido nuevo pendiente de traducir.
- Las 2 fotos usadas (`entrada_06`, `patio_02`) ya estaban procesadas en
  WebP+JPG del lote del Sprint 1 — no hizo falta procesar fotos nuevas.
- Queda pendiente (no bloquea nada) revisar accesibilidad fina del hover:
  las frases sobre las fotos son puramente decorativas/informativas, no
  interactivas, así que no necesitan manejo de foco adicional más allá del
  `:focus-within` ya implementado.

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** scroll-margin-top global, layout roto
por caché (resuelto sin cambiar código), orden de la foto 2 en mobile.

**Queda igual que en el Sprint 1** (sin cambios este sprint): número de
WhatsApp real, dominio definitivo, dirección física — ver
`TEMAS-A-REVISAR.md`.

**Nueva práctica de equipo, no técnica:** verificar cambios recién
publicados en ventana de incógnito antes de reportar bugs.

---

## 7. Próximo paso

Con esto corregido, el Sprint 2 queda cerrado y validado en producción.
Sprint 3 — Sección "Quartos": tipos de habitación, capacidad, precio y
fotos (ya hay lote de `quartos` procesado del Sprint 1), reutilizando el
mismo patrón de grid-areas para que el orden en mobile no apile todas las
fotos juntas.
