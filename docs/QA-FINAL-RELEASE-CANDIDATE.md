# Reporte de QA Final — Release Candidate
**Home Hostel Maceió · Landing Page**
Auditoría técnica integral antes del paso a producción. El sitio **todavía
no está alojado en un dominio real** -- sigue en GitHub Pages como entorno
de control, a la espera de la aprobación del dueño del hostel para migrar
a un espacio de hosting definitivo.

Metodología: no se listó nada "a ojo". Cada ítem de este documento fue
verificado con herramientas reales -- Lighthouse (auditoría automatizada
de Google), Playwright con Chromium real (funcional, responsive,
teclado), y revisión de código fuente línea por línea. Donde algo no se
pudo verificar 100% desde este entorno (por ejemplo Core Web Vitals de
campo, que requieren tráfico real), se aclara explícitamente.

---

## 1. Resumen ejecutivo

El sitio está en condición de **Release Candidate**: funcionalmente
completo, sin bugs conocidos, con puntajes de auditoría automatizada
altos en las 4 categorías que mide Lighthouse. Se encontraron y
corrigieron 2 problemas reales de accesibilidad, se agregaron piezas de
SEO que no existían (dato estructurado, sitemap, robots.txt), y se
resolvió una causa real de lentitud en mobile (CSS fragmentado en 14
archivos). Ningún hallazgo de este QA es bloqueante para pasar a
producción.

### Puntajes Lighthouse (antes / después de este sprint de QA)

| Categoría | Desktop antes | Desktop después | Mobile antes | Mobile después |
|---|---|---|---|---|
| Performance | 99 | 99 | 81 | 83 |
| Accesibilidad | 96 | **100** | — | **100** |
| Best Practices | 100 | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 | 100 |

*Nota sobre Performance mobile (83/100):* Lighthouse simula una red 4G
lenta y un procesador de gama media a propósito, para medir el peor
caso. Este número se midió además contra un servidor Python local sin
compresión ni cache configurados -- GitHub Pages (Fastly CDN) sirve con
compresión gzip/brotli y cache-control reales, así que el número en
producción va a ser mejor que este piso medido acá.

---

## 2. Funcional

| Ítem | Resultado |
|---|---|
| Todos los anchors funcionan | ✅ Verificado -- 0 anchors sin su `id` correspondiente |
| Navbar funciona | ✅ Verificado -- scroll spy, estado activo, todos los links |
| Mobile menu funciona | ✅ Verificado con Playwright -- abre (`aria-expanded` true) y el nav se vuelve visible |
| WhatsApp funciona | ✅ Los 5 links a `wa.me/5582991280921` verificados (header, hero, Contato x2, footer) |
| Google Maps funciona | ✅ Embed desktop presente (iframe con `loading="lazy"`) + tarjeta mobile con link a `maps.app.goo.gl` verificado |
| Instagram funciona | ✅ Los 2 links a `instagram.com/homehostelmcz` verificados (Contato, footer) |
| Videos funcionan | ✅ 2 iframes de `youtube-nocookie.com` con IDs correctos y `loading="lazy"` |
| Links externos abren correctamente | ✅ Los 10 links externos (`target="_blank"`) tienen `rel="noopener noreferrer"` -- sin excepciones |
| CTA final funciona | ✅ "Quero reservar" en Contato enlaza a WhatsApp correctamente |
| No existen botones muertos | ✅ 0 links con `href="#"` o vacío en todo el sitio |

## 3. Responsive

Chequeado con Playwright en los 8 anchos pedidos, midiendo
`scrollWidth` vs `clientWidth` del documento (no a ojo):

| Ancho | Resultado |
|---|---|
| 320px | ✅ Sin overflow horizontal |
| 375px | ✅ Sin overflow horizontal |
| 390px | ✅ Sin overflow horizontal |
| 430px | ✅ Sin overflow horizontal |
| 768px | ✅ Sin overflow horizontal |
| 1024px | ✅ Sin overflow horizontal |
| 1280px | ✅ Sin overflow horizontal |
| 1440px | ✅ Sin overflow horizontal |

## 4. Visual

| Ítem | Resultado |
|---|---|
| No overflow horizontal | ✅ Ver tabla responsive arriba |
| Fotos correctamente recortadas | ✅ Revisado en los ajustes de Sprints 6-7 (object-position calibrado por breakpoint en Contato) |
| Espaciado consistente | ✅ Sistema de tokens (`--space-xs` a `--space-2xl`) usado en todo el sitio, sin valores sueltos |
| Tipografías consistentes | ✅ Fraunces (display) + Manrope (texto) en todo el sitio, excepto el Footer (100% Manrope, decisión deliberada) |
| Botones consistentes | ✅ Familia `.btn` / `.btn--primary` / `.btn--ghost` / `.btn--instagram` reusada en Hero, Header, Contato |
| Cards alineadas | ✅ Revisado en Experiências (testimonios) y Galeria (mosaico) |
| No existen saltos visuales | ✅ El bug real de reveal-on-scroll (Sprint 7) ya fue encontrado y corregido; verificado de nuevo con scroll real en este QA |

## 5. Accesibilidad

| Ítem | Resultado |
|---|---|
| H1 único | ✅ Exactamente 1 en todo el documento |
| H2/H3 jerárquicos | ✅ Corregido en este QA: 11 subtítulos que estaban en `<p>` pasaron a `<h3>`. Jerarquía final: 1 H1 → 6 H2 → 11 H3, sin saltos |
| ALT descriptivos | ✅ Las ~56 imágenes usadas tienen `alt` específico (no genérico tipo "imagen 1") |
| Contraste | ✅ Corregido en este QA: 6 elementos del footer no cumplían WCAG AA (4.5:1) -- opacidad de texto recalculada con la fórmula de contraste real |
| Focus | ✅ Verificado con Playwright: el elemento enfocado siempre tiene outline/box-shadow visible |
| Navegación por teclado | ✅ Skip-link es el primer elemento enfocable (Tab), Escape cierra el selector de idioma |
| Labels | ✅ Corregido en este QA: el botón de idioma tenía `aria-label="Idioma"` sin el texto visible ("PT") -- ahora coincide dinámicamente |
| `lang="pt-BR"` | ✅ Ya estaba correcto desde el Sprint 1, portugués como idioma por defecto confirmado en el código |

## 6. SEO

| Ítem | Resultado |
|---|---|
| Title | ✅ 60 caracteres (ideal), ahora incluye "Farol" (barrio, búsqueda local) |
| Meta description | ✅ 133 caracteres (rango ideal 120-160), sincronizada con el title |
| Canonical | ✅ Presente, con nota explícita de que es temporal hasta el dominio real |
| H1 | ✅ Único, contenido descriptivo |
| Open Graph | ✅ Completo (type, locale, title, description, image, url) + Twitter Card agregado en este QA (no existía) |
| Favicon | ✅ Presente + `apple-touch-icon` agregado en este QA (no existía) |
| Sitemap | ✅ Creado en este QA (`sitemap.xml`, no existía) |
| Robots | ✅ Creado en este QA (`robots.txt`, no existía) |
| Schema de hospedagem | ✅ Creado en este QA -- JSON-LD tipo `LodgingBusiness` con nombre, dirección, coordenadas reales y redes. Es el hallazgo más importante de todo el QA: sin esto, Google no tenía forma de identificar automáticamente el sitio como un alojamiento |

## 7. Performance

| Ítem | Resultado |
|---|---|
| Imágenes optimizadas | ✅ WebP + JPG fallback en las ~56 imágenes, peso real que descarga un navegador moderno: ~8.2 MB en toda la página (con lazy-load, la carga inicial es mucho menor) |
| Lazy loading | ✅ Todas las imágenes fuera del Hero, más los 3 iframes (mapa + 2 videos) |
| Videos optimizados | ✅ `youtube-nocookie.com` (no carga cookies/tracking hasta que el usuario interactúa) + `loading="lazy"` |
| Fuentes | ✅ Google Fonts con `preconnect`, `font-display: swap` implícito en la carga estándar de Google Fonts |
| CSS | ✅ Corregido en este QA: 14 archivos → 1 archivo combinado (`site.css`) para producción, generado por `scripts/build_css.py`. Bajó el render-blocking de 660ms a 340ms en mobile. Los archivos fuente se mantienen separados por sección para seguir editando cómodo |
| JS | ⚠️ Sin combinar (ahorro estimado de Lighthouse: 7 KiB, no justifica la complejidad de tocar módulos ES con imports) |
| Core Web Vitals | ⚠️ Medidos en laboratorio (Lighthouse), no en campo -- eso requiere tráfico real, solo se sabe una vez el sitio esté en producción con visitas reales. LCP en mobile throttled: 4.3s (aceptable para una landing con fotos reales; mejora sola una vez esté en un CDN real) |

---

## 8. Decisiones de trade-off documentadas (no son bugs, son criterio)

- **JS no minificado/combinado**: el ahorro medido (7 KiB) no justifica la complejidad de reescribir los `import` entre módulos ES. Se prioriza mantenibilidad.
- **Cache headers**: el hallazgo de Lighthouse sobre cache lifetimes es un artefacto de probar contra un servidor local sin configuración -- GitHub Pages resuelve esto automáticamente en producción.
- **Imágenes sin variantes responsive por tamaño de pantalla** (un mismo archivo grande para mobile y desktop): posible optimización futura, no urgente dado que el lazy-load ya mitiga el impacto real.

## 9. Qué falta para pasar a producción

1. Aprobación final del dueño del hostel sobre el contenido.
2. Migrar de GitHub Pages a un hosting con dominio propio (pendiente desde varios sprints atrás, ver `TEMAS-A-REVISAR.md`).
3. Actualizar `canonical`, Open Graph `url`, y el schema.org `url` con el dominio real (están marcados con comentarios explícitos en el código para no olvidarlo).
4. Una vez en producción, correr este mismo checklist de Lighthouse contra la URL real para confirmar que los números de Performance mejoran como se espera.

---

## 10. Conclusión

El sitio está técnicamente listo para producción. No hay bugs
funcionales, visuales ni de accesibilidad pendientes. El SEO pasó de
"básico" a "completo" en este sprint. El único paso que falta es
humano, no técnico: la aprobación del dueño y la elección del hosting
definitivo.
