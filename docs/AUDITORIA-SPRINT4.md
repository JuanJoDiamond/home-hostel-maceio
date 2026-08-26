# Auditoría técnica — Sprint 4
**Home Hostel Maceió · Landing Page**
Sección "Experiências" + reestructuración del final de la landing. Revisión de cierre antes de avanzar al Sprint 5.

---

## 1. Resumen ejecutivo

El Sprint 4 está **completo, en vivo, y validado en PT/ES/EN, mobile y
desktop**. Se entregó en 2 iteraciones (4 y 4b): la primera construyó la
sección "Experiências" completa; la segunda ajustó 3 detalles visuales
detectados por el cliente ya en producción (desfase de fotos no replicado
en todas las secciones, indicador de sección activa poco notorio, y un
link del menú apuntando a una sección descartada). Este sprint también
incluyó una decisión de arquitectura de contenido importante: se descartó
la sección "Depoimentos" como bloque independiente.

---

## 2. Qué se construyó

- **Sección "Experiências"**: copy emocional en PT/ES/EN que retoma el
  concepto de marca de Sobre ("a sensação de ser bem recebido") proyectado
  hacia la estadía completa. 3 conceptos (Encontros / Acolhimento /
  Descobertas) con íconos SVG propios (no emoji, consistente con el resto
  del sitio).
- **2 fotos reales nuevas**: patio/comedor compartido y el gato residente
  del hostel (mascota propia, no implica que se acepten mascotas de
  huéspedes — aclarado explícitamente en el copy para no generar una
  expectativa falsa).
- **3 testimonios reales de Booking.com**, con nombre, país y puntuación,
  reproducidos con diseño propio (no clonando el estilo visual de
  Booking.com, para no insinuar una integración oficial que no existe) y
  un disclaimer de traducción automática.
- **Investigación de mercado previa**: se recopilaron datos reales de la
  ficha de Booking.com del cliente (dirección, políticas, amenities,
  alrededores) en un documento aparte para uso interno del proyecto, y se
  corrigieron 3 datos que estaban desactualizados de una fuente anterior
  menos confiable (horario de check-out, restricción de edad, y que hay 3
  variantes de dormitorio compartido, no 2).
- **Ajustes de nav (Sprint 4b)**: el link activo del menú ahora se ve en
  negrita y en color propio, no solo con el subrayado. El desfase vertical
  entre las 2 fotos (que solo estaba en Sobre) se unificó como estándar en
  Quartos y Experiências también.
- **Decisión de arquitectura**: la sección "Depoimentos" se descarta como
  bloque independiente (con ~10 reseñas en Booking no había volumen para
  justificarlo) y se reemplaza por una sección "Contatos" al final de la
  landing (redes sociales + WhatsApp), a construir en el Sprint 7. El link
  del menú ya se renombró de "Depoimentos" a "Contatos".

---

## 3. Problemas encontrados y corregidos

### 3.1 Primer intento de parche con fotos nuevas no incluía el contenido real de las imágenes — CORREGIDO
Al generar el parche del Sprint 4 (que incluía 2 fotos nuevas), el primer
intento se generó sin la opción `--binary` de git, lo que produce un
archivo de parche que *menciona* los archivos de imagen pero no lleva su
contenido real adentro. Se detectó antes de entregarlo, probando el
parche en un clon limpio del repositorio (no solo mirando que el comando
no tirara error) — el clon de prueba mostró las fotos como archivos
corruptos. Se regeneró con `git diff --binary` y se volvió a validar en
un clon limpio, confirmando que las imágenes quedaban como JPG/WEBP
reales. Aprendizaje para el flujo de trabajo: cualquier parche que incluya
archivos binarios (fotos, PDFs) se prueba siempre en un clon descartable
antes de entregarlo, no alcanza con que `git apply --check` no tire error.

---

## 4. Decisiones de contenido tomadas este sprint

| Decisión | Detalle |
|---|---|
| Depoimentos deja de ser sección propia | Con ~10 reseñas reales en Booking, un bloque dedicado quedaba corto. Los 3 mejores testimonios se movieron dentro de Experiências. |
| Nueva sección "Contatos" reemplaza a Depoimentos en el nav | Va a alojar Instagram + WhatsApp ("seguinos" / "hablemos"), Sprint 7. |
| Los 2 videos de YouTube del hostel van a Galeria | No se crea una sección de "Media" aparte — se integran al Sprint 6. Pendiente: que el cliente pase los links. |
| El gato del hostel es mascota propia, no política de "pet friendly" | Verificado con el cliente antes de escribir el copy — la ficha de Booking dice explícitamente que no se aceptan mascotas de huéspedes. Se usa como detalle de calidez, sin prometer algo que no es cierto. |

---

## 5. Otras observaciones menores (no urgentes)

- Las 2 fotos nuevas de Experiências no estaban en el lote original del
  Sprint 1 — se procesaron sobre la marcha con el mismo criterio de
  formato (4:5, WebP + JPG) que las demás.
- El badge "9,3 Fantástico" de Booking queda hardcodeado en el copy — si
  la puntuación cambia con más reseñas, hay que actualizarlo a mano (no es
  un dato en vivo).

---

## 6. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** desfase de fotos ausente en Quartos y
Experiências, indicador de nav activo poco visible, link "Depoimentos"
apuntando a una sección descartada.

**Queda para el Sprint 7:** contenido real de la sección Contatos, y los
3 testimonios ya insertados en Experiências deberían revisarse si en algún
momento se junta más volumen de reseñas (no es urgente).

**Queda para el Sprint 6:** los 2 links de YouTube para Galeria (pendiente
que el cliente los pase).

**Sin cambios respecto al Sprint 3:** número de WhatsApp real ya aplicado,
dominio definitivo y dirección física ya resueltos (ver documento aparte
de datos de Booking) — falta solo aplicarlos al `index.html` cuando
corresponda (Sprint 5, Schema.org).

---

## 7. Próximo paso

Con esto corregido, el Sprint 4 queda cerrado y validado en producción.
Sprint 5 — Sección "Localização": dirección real, distancias a playas y
puntos de interés (ya recopilado en el documento de datos de Booking),
mapa embebido.
