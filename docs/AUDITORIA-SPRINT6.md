# Auditoría técnica — Sprint 6
**Home Hostel Maceió · Landing Page**
Sección "Galeria" ("Conheça o Home"). Revisión de cierre antes de avanzar al Sprint 7.

---

## 1. Resumen ejecutivo

El Sprint 6 está **completo, en vivo, y validado en PT/ES/EN, mobile y
desktop**. Fue un sprint con bastante ida y vuelta de diseño (3 rondas de
ajuste post-publicación) — no por errores de contenido, sino por un
patrón visual nuevo que no existía en el sitio hasta ahora (mosaico de 3
fotos por bloque, en vez de las 2 fotos de siempre) y que necesitó
calibrarse con el cliente viendo el resultado real.

---

## 2. Qué se construyó

- **Cambio de enfoque deliberado**: a diferencia de Sobre/Quartos/
  Experiências (más storytelling emocional), Galeria es explícitamente
  más catálogo visual — menos texto, más fotos, mostrando qué encuentra
  el huésped en cada espacio compartido del hostel.
- **3 bloques, 3 fotos cada uno** (9 fotos reales del cliente en total):
  Cozinha compartilhada (`sala-jantar_07` + `sala-jantar_04`, más la
  general de la mesa), Área externa e recepção (`entrada_03` como foto
  de recepção real + `patio_03` + `patio_01`), y Banheiros (con criterio
  invertido a pedido del cliente: más fotos generales horizontales que
  detalle, para transmitir limpieza y espacio).
- **Layout final**: texto a todo el ancho arriba, foto horizontal grande
  debajo, y las 2 fotos verticales lado a lado al final — igual en
  mobile y en desktop, sin columnas. Se descartó un layout de 2 columnas
  (texto a la izquierda, fotos a la derecha) que dejaba mucho espacio
  vacío en desktop.
- **2 videos reales del cliente** (YouTube, vía `youtube-nocookie.com`),
  en tarjetas lado a lado en desktop y apiladas en mobile, cada una con
  su propio título.
- **Tarjeta de mapa mobile más visual**: se sumó un ícono de pin
  ilustrado (SVG propio) arriba del link "Abrir no Google Maps" —
  decisión tomada en vez de usar una captura de pantalla real de Google
  Maps que el cliente había sugerido (ver sección 3.4).
- **Copy con mención de Wi-Fi** en toda la casa (interior y áreas
  externas) y de servicio de toallas/papel higiénico en Banheiros, a
  pedido del cliente.

---

## 3. Problemas encontrados y corregidos

### 3.1 Hueco vacío debajo de cada foto "hero" — CORREGIDO
La causa real (confirmada con inspección de layout en navegador, no a
simple vista): el `<picture>` dentro de cada figura no heredaba la altura
completa del contenedor, así que la imagen se dibujaba con su relación de
aspecto original (16:9) dentro de una caja más alta (4:3), dejando un
rectángulo vacío. Se corrigió forzando `picture { width:100%; height:100%
}` en `galeria.css`. Aprendizaje para sprints futuros: si una foto nueva
no es exactamente vertical (4:5) u horizontal (4:3) como el resto del
sitio, hay que revisar sus dimensiones reales antes de asignarle una
clase de aspecto, o vuelve a pasar.

### 3.2 3 fotos de las 8 elegidas eran horizontales, no verticales — CORREGIDO
Al planificar el mosaico se asumió que las fotos de "detalle" (mesa de
jantar, entrada, recepção) eran verticales por default, como en el resto
del sitio. Verificando las dimensiones reales, 3 no lo eran. Esto generó
dos rondas de corrección: agregar la clase `--landscape` donde
correspondía, y finalmente reemplazar 2 de esas fotos por alternativas
verticales para que las parejas de fotos chicas quedaran visualmente
parejas (ver 3.5).

### 3.3 Layout de 2 columnas en desktop — CORREGIDO (rediseño)
La primera versión ponía el texto en una columna angosta a la izquierda
y las fotos a la derecha (mismo patrón que Sobre/Quartos/Experiências/
Localização). Con el texto corto de esta sección, quedaba mucho espacio
vacío al costado. Se simplificó a un layout de una sola columna (texto
arriba, fotos abajo), igual en mobile y desktop — la primera sección del
sitio que no comparte el patrón de 2 columnas del resto.

### 3.4 Captura de pantalla de Google Maps propuesta por el cliente — NO IMPLEMENTADA (riesgo de ToS)
El cliente pidió usar una captura de pantalla real de Google Maps como
imagen de la tarjeta de mapa en mobile, para hacerla más visual. Se
decidió no hacerlo: los Términos de Servicio de Google Maps prohíben
explícitamente reutilizar capturas de pantalla del mapa fuera de su
embed/API oficial, sin importar quién la haya tomado. Se resolvió el
pedido de fondo (tarjeta más visual) con un ícono de pin ilustrado propio
en su lugar, sin ese riesgo.

### 3.5 Parejas de fotos chicas con proporciones distintas — CORREGIDO
En 2 de los 3 bloques, una de las 2 fotos chicas era horizontal
(`sala-jantar_03`/Gratidão, `entrada_04`) y la otra vertical — quedaban
de alturas distintas, no parecía intencional. El cliente las reemplazó
por alternativas verticales (`sala-jantar_07`, `patio_03`) para que las
parejas queden visualmente parejas.

### 3.6 Foto de "recepção" incorrecta — CORREGIDO
La primera versión usó `entrada_04` (la puerta con el tapete "Bem
Vindo") como foto principal del bloque "Área externa e recepção". El
cliente había identificado esa foto como "entrada", no "recepção" — la
foto real de recepção es `entrada_03` (sofá y espacio de estar). Se
corrigió el hero del bloque.

### 3.7 Video con ID incorrecto — CORREGIDO
El primer link de YouTube pasado por el cliente no correspondía al video
que quería mostrar; se reemplazó por el ID correcto
(`fQCEkDxazSg`).

---

## 4. Otras observaciones menores (no urgentes)

- La cocina en sí (`cozinha_01`, `cozinha_02`) quedó fuera de la Galeria
  por decisión de calidad: en ambas fotos se ve la garrafa de gas, la
  heladera con etiquetas/imanes y una olla con restos, lo que no
  acompaña el nivel visual del resto del sitio. Si en el futuro se saca
  una foto nueva de la cocina sin esos elementos a la vista, se puede
  sumar como cuarto bloque.
- Quedan sin usar (procesadas, disponibles para futuros sprints):
  `entrada_04` (puerta con tapete), `entrada_05` (pasillo, ángulo
  nuevo), y las fotos de banheiro no utilizadas (`banheiro_02`, `03`,
  `04`, `06`, `08`).
- Verificación de layout hecha con Chromium headless (Playwright) en vez
  de a ojo sobre capturas — permitió encontrar la causa real del hueco
  vacío (3.1) en vez de adivinar por CSS.

## 5. Aprendizaje de proceso para sumar a `TEMAS-A-REVISAR.md`

- **Verificar dimensiones reales de cada foto antes de asignar su
  layout**, no asumir vertical/horizontal por el tipo de espacio que
  muestra (ver 3.2). Una consulta rápida con Pillow (`Image.open(...).
  size`) antes de escribir el HTML evita rondas de corrección después.
- **Renderizar con navegador headless antes de reportar un layout como
  "debería andar"**: el bug de 3.1 no era detectable revisando el CSS a
  simple vista: hacía falta medir cajas reales en el DOM.

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** hueco vacío en fotos, proporciones de
fotos, layout de 2 columnas, foto de recepção, ID de video, tarjeta de
mapa mobile.

**Sin cambios respecto al Sprint 5:** contenido de Contatos (Sprint 7).

**Nuevo pendiente anotado para revisión (no bloquea, ver
`TEMAS-A-REVISAR.md`):** falta un CTA de reserva visible tempranamente en
mobile — en desktop el botón "Reservar" está siempre fijo en el nav;
en mobile no hay equivalente hasta el final del sitio.

---

## 7. Próximo paso — Sprint 7: Contatos

Sección "Contatos": redes sociales (Instagram `@Homehostelmcz` real) +
WhatsApp. Copy exacto todavía a definir con el cliente.
