# Home Hostel Maceió — Landing Page

Landing oficial de Home Hostel Maceió (Alagoas, Brasil). HTML5, CSS3 y
JavaScript ES6+ nativos, sin frameworks.

## Estructura

```
HomeHostel/
├── index.html
├── favicon.ico
├── README.md
└── assets/
    ├── css/          → variables, reset, layout, components, hero,
    │                    responsive (se cargan como <link> individuales
    │                    desde index.html, en ese orden — no con @import,
    │                    para que el navegador los pida en paralelo)
    ├── js/            → main.js (entry point), navbar.js, animations.js
    ├── fonts/         → vacía por ahora (tipografías vía Google Fonts CDN;
    │                    self-hostear acá si se busca independizarse del CDN)
    └── images/
        ├── hero/      → hero-maceio.webp / .jpg (fallback) / og-cover.jpg
        ├── hostel/    → fotos del hostel (Sprint 2/3)
        ├── logo/      → vacía; el logo actual es un SVG inline en el header
        ├── icons/     → íconos sueltos que se necesiten a futuro
        └── gallery/   → galería de fotos (Sprint 6)
```

## Estado de avance (por Sprint)

- [x] Sprint 1 — Estructura, Header, Hero, Responsive, Variables, animaciones básicas
- [ ] Sprint 2 — Sobre Home Hostel
- [ ] Sprint 3 — Habitaciones
- [ ] Sprint 4 — Experiencias
- [ ] Sprint 5 — Ubicación
- [ ] Sprint 6 — Galería
- [ ] Sprint 7 — Opiniones
- [ ] Sprint 8 — CTA Final

## Pendientes conocidos

- **Imagen del hero**: origen de 1365px de ancho. Suficiente hasta ~1440px
  de viewport; en pantallas grandes/4K puede notarse escalada. Reemplazar
  por una versión de ≥2400px cuando esté disponible (mismo nombre de
  archivo, no requiere tocar CSS ni HTML).
- **Número de WhatsApp**: los CTA usan `https://wa.me/5582900000000` como
  placeholder. Reemplazar por el número real del hostel.
- **Logo**: actualmente es un SVG inline (círculo + trazo de olas) en el
  header. Si hay un isotipo diseñado, va en `assets/images/logo/` y se
  actualiza el header para usarlo.

## Cómo previsualizar

Abrir `index.html` directamente en el navegador, o servir la carpeta con
cualquier servidor estático (por ejemplo `npx serve` o la extensión
"Live Server" de VS Code) para que `type="module"` en el JS funcione sin
restricciones de CORS en `file://`.
