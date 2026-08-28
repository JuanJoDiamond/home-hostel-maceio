# Auditoría técnica — Sprint 5
**Home Hostel Maceió · Landing Page**
Sección "Localização". Revisión de cierre antes de avanzar al Sprint 6.

---

## 1. Resumen ejecutivo

El Sprint 5 está **completo, en vivo, y validado en PT/ES/EN, mobile y
desktop**. Fue el sprint con más iteraciones hasta ahora (5, 5b, y una
reconstrucción completa tras feedback de fondo) — no por errores triviales,
sino por dos problemas reales de contenido/arquitectura que el cliente
detectó ya viendo el resultado en producción: coordenadas de mapa
incorrectas (~1,6 km de error) y una organización de la información que no
respetaba el criterio de alternancia texto/foto ya establecido en sprints
anteriores.

---

## 2. Qué se construyó

- **6 fotos reales, tomadas por el cliente** (Catedral, Capelinha de
  Jaraguá, Nova Orla al atardecer, escultura del Cavalo-Marinho, vista
  panorámica del Mirante de São Gonçalo, y el letrero "Eu Amo Maceió" del
  mismo mirante) — dos de ellas requirieron remover personas de la escena
  con una herramienta de IA de edición (del propio cliente, no del
  proyecto) para poder usarlas sin comprometer la privacidad de terceros.
- **Contenido organizado en 2 niveles**: un bloque genérico del "día a
  día" (restaurantes, panaderías, farmacias, mercado, transporte, centro
  histórico) sin nombres de lugares puntuales ni distancias; y 3 bloques
  con nombres reales de atracciones (Cultura e história, Mirante de São
  Gonçalo, Praias) — estos últimos sí mencionan proximidad real cuando
  corresponde (el Mirante y Avenida Beach están genuinamente cerca).
- **Mapa real y verificado**: coordenadas exactas confirmadas por el
  cliente desde su propio Google Maps (antes había un error de ~1,6 km
  por usar una fuente de geocodificación genérica). Embed oficial de
  Google Maps (sin necesidad de API key) para desktop, con el Place ID
  real del negocio; tarjeta con link directo a la ficha real de Google
  Maps del hostel para mobile.
- **Dirección siempre visible**: con ícono a cada lado, igual en desktop
  y en mobile (antes solo se veía en mobile).
- **Patrón de alternancia texto/foto corregido**: cada bloque con nombre
  de atracciones lleva sus 2 fotos correspondientes al costado (mismo
  patrón reutilizado de Sobre/Quartos/Experiências), en vez de agrupar
  varias fotos seguidas sin texto entre ellas.

---

## 3. Problemas encontrados y corregidos

### 3.1 Coordenadas del mapa incorrectas — CORREGIDO
Las coordenadas usadas originalmente venían de una fuente de
geocodificación por CEP (código postal), que da la ubicación aproximada
de la zona, no de la dirección exacta. La diferencia real medida fue de
~1657 metros respecto a la ubicación real confirmada por el cliente en su
propio Google Maps. Se corrigió usando las coordenadas exactas y el
embed oficial que el cliente comparte directamente desde Google Maps
("Compartilhar > Incorporar um mapa"), que además no requiere API key.

### 3.2 Dirección no visible en desktop — CORREGIDO
La dirección con ícono solo se mostraba en la tarjeta de mobile; en
desktop el mapa aparecía sin ningún texto de dirección visible. Se movió
a una línea compartida, visible en ambos casos.

### 3.3 Organización de la información sin criterio de alternancia — CORREGIDO (reconstrucción completa)
La primera versión agrupaba hasta 4 fotos seguidas sin texto entre ellas
antes de llegar al mapa, y la lista de "lugares cercanos" no tenía
ninguna foto de referencia al costado — rompiendo el patrón de ritmo
(texto corto → foto → texto → foto) que se había establecido como
estándar desde el Sprint 2. Se reconstruyó la sección completa separando
contenido genérico (sin fotos, no lo necesita) de contenido con nombres
reales de atracciones (cada uno con sus 2 fotos correspondientes al
costado, nunca más de un par de fotos sin texto entre medio).

### 3.4 Fotos con personas identificables — RESUELTO CON HERRAMIENTA EXTERNA
Dos fotos reales del cliente (Mirante de São Gonçalo) tenían personas de
fondo, una de ellas el propio cliente. Se descartó una primera solución
con desenfoque (no convenció visualmente) y también se descartó usar
fotos de stock de terceros sin licencia confirmada (riesgo real de
derechos de autor). La solución final: el cliente usó una herramienta de
IA de edición de imágenes (de su lado, no parte del proyecto) para
remover las personas manteniendo el fondo real intacto — se verificó que
no quedaran artefactos visuales antes de usarlas.

---

## 4. Otras observaciones menores (no urgentes)

- El componente de bloque reutilizable (`.localizacao__block`) quedó
  armado de forma genérica, pensado para poder reusarse en Galeria o
  Contatos si hiciera falta un patrón similar.
- Quedó documentado como práctica de equipo (ver `TEMAS-A-REVISAR.md`):
  cualquier coordenada de mapa se confirma con el cliente directamente
  desde su Google Maps, nunca con una fuente de geocodificación genérica.

---

## 5. Qué se corrige ahora vs. qué queda para después

**Ya corregido en esta revisión:** coordenadas del mapa, visibilidad de
la dirección en desktop, organización texto/foto de toda la sección.

**Sin cambios respecto al Sprint 4:** contenido de Contatos (Sprint 7),
links de YouTube para Galeria (Sprint 6, pendiente que el cliente los
pase).

---

## 6. Próximo paso — Sprint 6: Galeria

Sección "Galeria": carrusel/grid con fotos variadas del hostel (mezcla de
las ya procesadas en sprints anteriores + las que hagan falta), más los 2
videos de YouTube del cliente en formato de tarjeta de preview (pendiente
que los pase). Reutilizar el componente de carrusel 3D ya construido en el
Sprint 3 si aplica bien al formato de galería general.
