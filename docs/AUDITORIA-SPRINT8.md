# Auditoría técnica — Sprint 8
**Home Hostel Maceió · Landing Page**
Footer + botón "volver arriba" + ocultamiento contextual del botón
flotante de WhatsApp. Revisión de cierre antes del QA/SEO final.

---

## 1. Resumen ejecutivo

El Sprint 8 está **completo, en vivo, y validado en PT/ES/EN, mobile y
desktop**. Cierra la estructura de secciones del sitio: con este sprint,
la landing tiene todas las piezas de contenido planeadas desde el brief
original (Hero, Sobre, Quartos, Experiências, Localização, Galeria,
Contato, Footer).

---

## 2. Qué se construyó

### 2.1 Footer funcional
A propósito, rompe con el tono emocional del resto del sitio: solo
tipografía sans (Manrope), sin la serif Fraunces en ningún lado. 4
columnas (Navegação, Reservas, Onde estamos, Siga o Home) + marca +
copyright, sobre fondo oscuro sólido. Mismos íconos de trazo simple ya
usados en Contato (Instagram, WhatsApp) más uno nuevo para Google Maps.

### 2.2 Botón "volver arriba"
No existía en ningún lado del sitio. Aparece después de bajar un poco
(no tiene sentido sobre el Hero), abajo a la izquierda para no chocar
con el FAB de WhatsApp en mobile. Ajustado a pedido del cliente:
semi-transparente en mobile (se ve el contenido de fondo), más grande y
sólido en desktop (se perdía en pantallas anchas).

### 2.3 Ocultamiento contextual del FAB de WhatsApp
El botón flotante de WhatsApp (mobile) ahora se oculta al llegar a
Contato/Footer, donde ya hay botones de WhatsApp propios bien visibles
-- deja de ser necesario y solo ocupaba espacio. Reaparece si el usuario
vuelve a subir. Mismo mecanismo de `IntersectionObserver` que ya usa el
reveal-on-scroll genérico.

---

## 3. Problemas encontrados y corregidos

### 3.1 Columnas del footer angostas por el contenedor proporcional -- CORREGIDO
El footer heredaba el mismo contenedor angosto que se usa para las fotos
de las secciones (ver Sprint 6b/7, contenedor de contenido escalando en
proporción al ancho de ventana). Ahí no hay fotos, solo texto/enlaces, y
los títulos de columna ("ONDE ESTAMOS", "SIGA O HOME") se cortaban en 2
líneas. Se le dio al footer el mismo ancho que el nav (fijo, sin
achicar) en vez del contenedor proporcional de las secciones de
contenido.

### 3.2 El FAB de WhatsApp tapaba el copyright en mobile -- CORREGIDO
Pendiente anotado desde el Sprint 7: con el footer ya construido, se
confirmó que el botón flotante fijo se superponía con la última línea
del copyright. Se sumó espacio extra abajo del todo (`padding-block-end`
en el footer, solo en mobile) para que el FAB tenga su propio lugar sin
tapar contenido real.

---

## 4. Rechazado por decisión del cliente (no implementado)

### 4.1 Modo oscuro
El cliente consultó la viabilidad de un toggle de modo oscuro. Se
explicó que es técnicamente viable y no agrega peso real al sitio (la
base de variables de color ya está preparada para eso), pero implica
diseñar una paleta oscura propia y revisar contraste en las 8 secciones,
3 idiomas y 2 tamaños de pantalla -- un mini-sprint en sí mismo, no un
ajuste rápido. El cliente decidió no implementarlo: "nadie lo pidió".
Queda descartado, no pendiente.

---

## 5. Qué queda para el cierre final del proyecto

El cliente pidió una revisión general de QA + SEO como último paso antes
de dar el proyecto por cerrado -- particularmente enfocada en palabras
clave/metadatos para buscadores, y confirmar que portugués sea el idioma
por defecto (el hostel está en Brasil). Se decidió tratarlo como una
entrega separada de este sprint, no mezclada acá, para no combinar
ajustes de UI ya probados con hallazgos de una auditoría que puede traer
cambios de otro tipo (metadatos, estructura semántica, etc.). Ver
`AUDITORIA-QA-SEO-FINAL.md` (documento separado) para el detalle
completo de esa revisión.

---

## 6. Próximo paso

Revisión de QA + SEO final, y cierre general del proyecto.
