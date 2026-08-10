# Guía de fotos — Home Hostel Maceió

Especificación acordada para procesar las fotos reales del hostel
(Sprints 2 en adelante). Referencia única, no repetir estas decisiones en
el chat.

## Formatos de salida

| Tipo | Uso | Relación de aspecto | Tamaño de salida |
|---|---|---|---|
| Horizontal | Carrusel (secciones con mayoría de fotos horizontales) | 16:9 | 1600×900px |
| Vertical | Detalle junto a texto emotivo (cocina, cuartos, baño...) **y/o** carrusel en secciones con mayoría de fotos verticales | 4:5 | 1200×1500px |

- Formato 16:9 elegido porque es el nativo de las cámaras usadas (incluida
  la de ojo de pez) — no se fuerza a 4:3 para no perder encuadre.
- **Un carrusel = un solo formato.** No se mezcla vertical y horizontal
  dentro del mismo carrusel (rompe el ritmo visual, cada slide cambiaría
  de alto). El formato de cada carrusel se decide por sección, según cuál
  formato predomine en las fotos reales de esa sección — no es un único
  criterio fijo para todo el sitio.
- Salida siempre en WebP + JPG de respaldo, mismo criterio que las fotos
  ya procesadas (hero, logo).

## Sin marca de agua

Decidido: las fotos del sitio **no** llevan el logo superpuesto. El logo
ya está siempre visible en el header (sticky). Válido solo para uso
dentro del sitio — si en el futuro se reutilizan las mismas fotos para
redes sociales u otro canal sin el header de por medio, ahí sí se evalúa
watermark.

## Nomenclatura de archivo

```
home-hostel-maceio_[categoria]_[NN].webp
home-hostel-maceio_[categoria]_[NN].jpg   (fallback)
```

- Guión medio entre palabras (no guión bajo) — convención estándar para
  archivos web, mejor para SEO de imágenes.
- `[categoria]` en minúsculas, sin acentos ni espacios (ej: `cozinha`,
  `area-comum`, `banheiro`, `quarto-compartilhado`).
- `[NN]` numerado con cero adelante (`01`, `02`...) si hay más de una foto
  de la misma categoría.

## Cómo se reciben las fotos

Una carpeta por sección/categoría (cocina, área común, baño, etc.), sin
necesidad de renombrar nada de antemano — la edición, el recorte al
formato correspondiente y el renombrado final los hace Claude al
procesarlas. Se entregan ya listas en:

- `assets/images/hostel/` → fotos verticales de detalle (van junto al texto)
- `assets/images/gallery/` → fotos de carrusel (horizontal o vertical, según la sección)
