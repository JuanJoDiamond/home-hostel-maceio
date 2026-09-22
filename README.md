# Home Hostel Maceió — Landing Page

Landing oficial de Home Hostel Maceió (Farol, Maceió, Alagoas, Brasil).
HTML5, CSS3 y JavaScript ES6+ nativos, sin frameworks. Trilingüe PT/ES/EN.

**En producción:** https://homehostelmcz.com.br (Hostinger, con SSL)

## Estructura

```
home-hostel-maceio/
├── index.html
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── .htaccess        → redirecciones 301 (www → sin www, http → https),
│                       compresión y caché (Hostinger / LiteSpeed)
├── README.md
├── scripts/
│   └── build_css.py → combina los 14 CSS fuente en assets/css/site.css
├── docs/            → auditorías por sprint, QA final, migración,
│                       TEMAS-A-REVISAR.md (pendientes y decisiones)
└── assets/
    ├── css/          → 14 archivos fuente por sección (se editan acá)
    │                    + site.css (GENERADO, es el único que carga
    │                    index.html -- nunca editarlo a mano)
    ├── js/           → main.js (entry point), navbar.js, animations.js,
    │                    carousel.js, i18n.js, i18n-data.js
    └── images/
        ├── hero/       → hero y og-cover.jpg (vista previa al compartir)
        ├── hostel/     → fotos de detalle por sección
        ├── gallery/    → fotos de carrusel y galería
        ├── logo/       → logo oficial (PNG/WebP)
        └── pendientes/ → fotos procesadas sin uso todavía (no se suben
                           a producción)
```

## Estado

- [x] Sprint 1 — Estructura, Header, Hero, i18n PT/ES/EN, sistema de diseño
- [x] Sprint 2 — Sobre
- [x] Sprint 3 — Quartos (carrusel 3D propio)
- [x] Sprint 4 — Experiências (con testimonios reales)
- [x] Sprint 5 — Localização
- [x] Sprint 6 — Galeria
- [x] Sprint 7 — Contato
- [x] Sprint 8 — Footer, botón volver arriba
- [x] QA/SEO final — accesibilidad 100/100, JSON-LD, sitemap, robots
- [x] Migración a producción — Hostinger + dominio `homehostelmcz.com.br`

Pendientes y decisiones abiertas: ver `docs/TEMAS-A-REVISAR.md`.

## Flujo de trabajo

1. Editar los CSS fuente en `assets/css/` (nunca `site.css`).
2. Si se tocó CSS: `python scripts/build_css.py`.
3. Previsualizar sirviendo la carpeta con un servidor estático (por
   ejemplo la extensión "Live Server" de VS Code). Abrir `index.html`
   con doble clic no alcanza: `type="module"` en el JS no funciona
   desde `file://`.
4. Commit y push a GitHub (fuente del código).
5. Desplegar en Hostinger: ver el procedimiento paso a paso en
   `docs/MIGRACION-HOSTINGER.md` (sección 5).
