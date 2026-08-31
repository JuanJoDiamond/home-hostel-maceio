# Auditoría técnica — Sprint 7
**Home Hostel Maceió · Landing Page**
Sección "Contato" (cierre emocional del sitio) + trabajo intermedio entre
Sprint 6 y Sprint 7 (botón flotante de WhatsApp, fix de un bug real de
reveal-on-scroll). Revisión de cierre antes de avanzar al Sprint 8.

---

## 1. Resumen ejecutivo

El Sprint 7 está **completo, en vivo, y validado en PT/ES/EN, mobile y
desktop**. A diferencia de Galeria (Sprint 6), este sprint tuvo pocas
rondas de corrección de contenido -- el diseño se acertó casi a la
primera vez, con una sola foto y un layout ya probado (mismo patrón que
el Hero). El trabajo más delicado no fue de diseño sino de dos bugs
reales encontrados y corregidos: uno de UX (falta de CTA visible en
mobile) y uno técnico (reveal-on-scroll roto en desktop), ambos
documentados abajo.

Nota de alcance: este audit también cubre 2 piezas de trabajo que se
hicieron *entre* el cierre del Sprint 6 y el inicio formal del Sprint 7
(el botón flotante de WhatsApp y el fix del bug de reveal), porque
cronológicamente pasaron después de `AUDITORIA-SPRINT6.md` y no
quedaron documentadas en ningún otro lado.

---

## 2. Qué se construyó

### 2.1 Botón flotante de WhatsApp (mobile)
Pendiente detectado en el cierre del Sprint 6: en mobile no había ningún
CTA de reserva visible salvo el del Hero, que se pierde apenas se
scrollea. Se sumó un botón fijo (ícono de WhatsApp + etiqueta "RESERVAR"
chica debajo), solo en mobile (<992px), abajo a la derecha. Versión
compacta elegida por el cliente en vez de una píldora con texto largo,
para ocupar menos espacio fijo en pantalla.

### 2.2 Sección Contato
Cierre emocional del sitio, pensado como "bookend" del Hero: mismo
patrón de foto a pantalla completa + overlay + texto, pero con la foto
real de la bandera del hostel en la entrada (foto del cliente, con un
retoque de IA puntual para borrar la base de la bandera que quedaba
fea -- mismo criterio ya aceptado en el Sprint 5 con las fotos del
Mirante). El texto va anclado abajo a la izquierda porque la foto tiene
ese lado más despejado (pared lisa) y el derecho más ocupado
(bandera+logo).

Contenido: título + tagline emocional ("Sua próxima história começa
aqui"), invitación a seguir el Instagram real del hostel
(`@Homehostelmcz`, con ícono en el mismo estilo de trazo simple que el
resto de los íconos del sitio, no el logo oficial a color -- decisión
para no desentonar con el lenguaje visual ya establecido), CTA principal
"Quero reservar" por WhatsApp, y dirección completa abajo.

### 2.3 Ajustes de contenido pedidos por el cliente
- El badge de reseñas en Experiências mostraba "10 comentários no
  Booking.com" hardcodeado -- se reemplazó por "Comentários reais no
  Booking.com" (sin número, para que no quede desactualizado cuando
  crezca la cantidad real de reseñas).
- El cierre de Galeria se simplificó ("Isso é só uma parte do Home.")
  para no repetir el mismo golpe emocional dos veces seguidas justo
  antes de Contato.

---

## 3. Problemas encontrados y corregidos

### 3.1 Reveal-on-scroll no se disparaba en Galeria en desktop -- CORREGIDO (bug real de producción)
El cliente reportó que en Chrome, Firefox y Edge de escritorio (incluso
en incógnito) la sección Galeria no aparecía al cargar ni al scrollear
normalmente -- pero sí al pasar el mouse (mostraba las etiquetas de las
fotos) y al hacer click en los videos, que arrancaban sin imagen visible.
Al achicar la ventana a un tamaño mobile aparecía todo, y quedaba visible
al volver a agrandar.

Se descartó como causa la caché del navegador y del CDN (se verificó el
SHA del último deploy contra el HEAD real de `main` vía la API de
GitHub: coincidían). La causa real: el `IntersectionObserver` que
dispara la animación de aparición de cada sección usaba
`threshold: 0.15` (exige ver el 15% del *alto total* del elemento
observado en una sola pantalla). Funcionaba con las secciones cortas de
2 columnas, pero Galeria en desktop -- con el layout de una sola columna
que se armó en ese mismo sprint -- quedó mucho más alta, y su 15% nunca
entraba en una sola pantalla con un scroll normal. Al achicar la ventana
bajaba la altura total relativa, y el resize forzaba al navegador a
recalcular en el momento justo -- por eso "se arreglaba solo".

Se bajó el `threshold` a un valor que no depende de un porcentaje del
alto del elemento (`0.01`), para que no vuelva a pasar con ninguna
sección futura por más larga que sea. Verificado con Playwright
simulando un scroll real (no forzado) en desktop y mobile, confirmando
además que las demás secciones del sitio siguieron revelándose
correctamente.

**Aprendizaje de proceso, ya sumado como regla fija del proyecto:** antes
de entregar cualquier parche que toque altura de layout, estructura de
secciones, o JS ligado a scroll/animaciones, hay que simular un scroll
real incremental con Playwright (no alcanza con una captura estática) en
mobile y desktop, y confirmar que los elementos con reveal-on-scroll o
lazy-load se disparan de verdad bajo scroll normal.

### 3.2 Foto de fondo de Contato sobre-procesada en el primer intento -- CORREGIDO
El primer pase del pipeline de procesamiento (gamma, CLAHE, saturación)
dejó la foto con contraste muy duro y la pared con textura ruidosa/
manchada. Se detectó por inspección visual antes de entregar nada, y se
suavizaron los parámetros (CLAHE `clipLimit` de 2.0 a 1.2, saturación de
1.12 a 1.05, viraje cálido de 6 a 3) antes de procesar la versión final.

### 3.3 Recorte de la foto de Contato tapaba el texto en mobile -- CORREGIDO
El primer `object-position` elegido (25%) se calibró mirando el recorte
de escritorio (ancho), donde dejaba la pared despejada a la izquierda
para el texto. En mobile, el recorte es mucho más angosto y ese mismo
25% caía sobre la bandera, no la pared. Se separó el valor por
breakpoint: `5%` en mobile, `25%` desde 992px.

### 3.4 Test de verificación con falsos positivos por `scroll-behavior: smooth` -- (nota de proceso, no bug del sitio)
Durante la verificación de la sección Contato, un test de scroll
incremental rápido (muchos saltos programáticos en poco tiempo) reportó
que el reveal de Contato "fallaba" en desktop. La causa fue del test, no
del sitio: el `scroll-behavior: smooth` global del sitio hace que cada
salto de scroll se anime, y saltos sucesivos muy rápidos no le daban
tiempo a la animación de asentarse antes del siguiente. Con tiempos de
espera realistas entre pasos, el reveal funcionó siempre. Se anota para
no repetir la confusión en sprints futuros: los tests de scroll
simulado necesitan esperar lo suficiente entre pasos cuando el sitio usa
scroll suave.

---

## 4. Rechazado por criterio del proyecto (no implementado)

### 4.1 Captura de pantalla de Google Maps (ya cerrado en Sprint 6, sin cambios)
Sin novedades este sprint, se mantiene la decisión.

### 4.2 Imagen generada por IA para el fondo de Contato
El cliente subió una primera versión del fondo de Contato generada con
Gemini (nombre de archivo `Gemini_Generated_Image_...`) para mostrar la
idea visual. Se rechazó su uso como asset final, sosteniendo la regla
del proyecto de solo fotos reales del cliente, sin excepciones. El
cliente confirmó que la bandera es real y sacó una foto propia del
lugar (con un retoque de IA puntual para borrar un elemento feo, no para
generar contenido) -- esa es la que se usó finalmente. Ver 2.2.

---

## 5. Otras observaciones (no urgentes)

- Con el botón flotante de WhatsApp fijo en mobile y la nueva sección
  Contato terminando el sitio, el botón se superpone levemente con la
  dirección al llegar al final de la página. Es esperable que se
  resuelva solo cuando el Footer (Sprint 8) sume contenido debajo, pero
  hay que revisarlo en ese momento.
- La sección Contato mide ~967px de alto real en una ventana de 900px
  -- un desborde mínimo (67px) que no amerita ajuste, se resuelve con un
  scroll leve.

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** bug de reveal-on-scroll en Galeria
desktop, sobre-procesamiento de la foto de Contato, recorte de foto en
mobile, número hardcodeado de reseñas, cierre duplicado de Galeria.

**Nuevo pendiente para revisión (no bloquea, ver
`TEMAS-A-REVISAR.md`):** posible superposición del botón flotante de
WhatsApp con el contenido final de página una vez que exista Footer.

---

## 7. Próximo paso — Sprint 8: Footer

Footer funcional, no emocional: logo + tagline corta, redes (Instagram,
WhatsApp, Google Maps), navegación (links a las secciones), bloque de
reservas, dirección, y copyright. Sin agregar enlaces de más.
