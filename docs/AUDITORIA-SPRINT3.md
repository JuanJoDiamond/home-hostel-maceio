# Auditoría técnica — Sprint 3
**Home Hostel Maceió · Landing Page**
Sección "Quartos". Revisión de cierre antes de avanzar al Sprint 4.

---

## 1. Resumen ejecutivo

El Sprint 3 (segunda sección de contenido: "¿dónde voy a dormir?") está
**completo, en vivo, y validado en PT/ES/EN, mobile y desktop**. Fue el
sprint más iterativo hasta ahora — 3 rondas sobre el mismo commit base
(3, 3b) — no por errores de alcance sino por refinamiento visual real
después de ver el resultado en producción: primero un carrusel simple,
después reemplazado por un carrusel 3D tipo "coverflow" a pedido del
cliente, y finalmente ajustado tras feedback de uso (tamaño, comportamiento
en mobile, y un bug de layout real). Se documentan acá los 3 problemas
técnicos reales encontrados, más una mejora visual pendiente y anotada
para el próximo sprint.

---

## 2. Qué se construyó

- **Copy funcional** en PT/ES/EN: eyebrow, título, intro, y los 2 tipos de
  quarto (compartilhados/privativos) con enfoque distinto para cada uno
  (conexión social vs. privacidad), ambos remitiendo al mismo concepto de
  marca ("Home"). Incluye nota de dormitorios separados por género
  (femenino/masculino) en compartilhados.
- **Checklist de amenities compartida**: una sola franja (no repetida por
  tipo de quarto) con las 5 comodidades confirmadas por el cliente (ropa
  de cama, toallas, armário individual con fechadura, ar-condicionado,
  wi-fi gratuito).
- **2 fotos fijas verticales** junto al texto (detalle de ropa de cama y
  de colar de conchas), elegidas a propósito para no representar
  literalmente "compartilhado" ni "privativo" — el quarto privativo es
  nuevo (inaugurado esta semana) y todavía no tiene fotos propias.
- **Carrusel 3D tipo "coverflow"**, componente nuevo y reutilizable
  (`carousel.css` / `carousel.js`, sin librerías externas): foto activa
  grande al frente, las demás giradas en perspectiva a los costados. Se
  mueve solo (autoplay), se detiene con el mouse/dedo encima, y deja
  navegar con flechas, dots, teclado o deslizando. Con 4 fotos horizontales
  de ambiente general y detalle.
- **Scrollspy en la navegación**: el link del menú correspondiente a la
  sección visible queda marcado, tanto al hacer click como al scrollear
  libremente (funcionalidad que no existía antes de este sprint).
- **CTA suave** a `#experiencias`, mismo criterio que en Sobre (el
  WhatsApp fijo del header sigue siendo el único camino de reserva).

---

## 3. Problemas encontrados y corregidos

### 3.1 Layout roto en desktop tras cambiar a grid-areas — CORREGIDO
Al reestructurar la sección para intercalar fotos y texto en mobile (mismo
patrón ya usado en Sobre), un primer intento de acomodar 2 fotos de
distinto tamaño (una horizontal, una vertical) junto al texto dejaba un
hueco en blanco antes del siguiente bloque. Resuelto agrupando las 2 fotos
verticales (mismo formato entre sí) en vez de emparejar cada una con "su"
bloque de texto — mismo principio ya aprendido en el Sprint 2.

### 3.2 Carrusel corría la página hacia la derecha en mobile — CORREGIDO
El carrusel 3D no tenía `overflow: hidden`, así que las fotos giradas en
perspectiva podían quedar parcialmente fuera del viewport en pantallas
angostas, generando una franja de scroll horizontal que se movía cada vez
que el carrusel cambiaba de foto. Confirmado con una medición real
(`document.documentElement.scrollWidth - clientWidth`, que pasó de un
valor positivo a `0`) antes y después de la corrección.

### 3.3 Regla CSS de mobile incompleta (flechas del carrusel) — CORREGIDO
Se había escrito una regla para achicar las flechas del carrusel en
pantallas chicas, pero nunca se llegó a escribir la regla que las oculta
del todo (el criterio de diseño real era "en mobile no hay flechas, el
swipe las reemplaza"). Detectado al testear con emulación táctil real,
antes de entregar el sprint.

---

## 4. Pendiente confirmado para el próximo sprint (no bloquea este cierre)

**Indicador de sección activa poco visible en desktop.** El cliente
confirmó que en el menú hamburguesa de mobile el resaltado de la sección
activa se nota bien, pero en desktop pasa desapercibido. Se verificó por
código que la funcionalidad **sí funciona correctamente** en ambos casos
(mismo estado en el DOM, mismo cálculo de estilos) — el problema no es un
bug funcional sino de **contraste/visibilidad**: hoy el único indicador es
una línea naranja de 2px, sutil contra el fondo del header.

**Decisión ya tomada con el cliente para resolverlo en el próximo
sprint:** además de la línea naranja, el texto del link de la sección
activa también va a cambiar de color, para que se note sin depender solo
del subrayado.

---

## 5. Otras observaciones menores (no urgentes)

- Las 6 fotos de "quartos" usadas en este sprint (2 fijas + 4 del
  carrusel) ya estaban procesadas del lote del Sprint 1 — no hizo falta
  procesar fotos nuevas.
- El componente de carrusel quedó armado de forma genérica (no acoplado a
  Quartos), pensado para reusarse en Galeria y Depoimentos sin rehacer la
  lógica de autoplay/pausa/swipe.

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** hueco en el layout de fotos, corrimiento
horizontal en mobile, flechas del carrusel visibles donde no debían.

**Queda para el Sprint 4** (decisión ya tomada, solo falta implementarla):
color de texto del link activo en el menú de desktop, sumado al subrayado
existente.

**Sin cambios respecto al Sprint 2:** número de WhatsApp real ya aplicado,
dominio definitivo y dirección física pendientes — ver
`TEMAS-A-REVISAR.md`.

---

## 7. Próximo paso

Con esto corregido, el Sprint 3 queda cerrado y validado en producción.
Sprint 4 — a definir el orden real de trabajo: el ajuste de visibilidad
del nav activo (pendiente confirmado arriba) y la sección "Experiências"
según el orden de navbar acordado al principio del proyecto.
