#!/usr/bin/env python3
"""
build_css.py -- Concatena los archivos CSS fuente (uno por sección, para
seguir editando cómodo) en un solo archivo de producción
(assets/css/site.css), en el orden exacto que define la cascada.

Por qué existe: Lighthouse detectó ~650ms de "render-blocking" en mobile
por cargar 14 <link rel="stylesheet"> por separado. Un solo archivo
elimina esas 13 requests extra sin perder la organización por sección
que se usa para editar. Nunca editar site.css a mano -- se pisa la
próxima vez que se corre este script. Editar siempre los archivos
fuente y volver a correr esto antes de cada patch que toque CSS.

Uso: python3 build_css.py
"""
import os

REPO_ROOT = os.path.join(os.path.dirname(__file__), "..")
CSS_DIR = os.path.join(REPO_ROOT, "assets", "css")

# Mismo orden que los <link> en index.html -- define la cascada.
ORDER = [
    "variables.css",
    "reset.css",
    "layout.css",
    "components.css",
    "hero.css",
    "sobre.css",
    "quartos.css",
    "carousel.css",
    "experiencias.css",
    "localizacao.css",
    "galeria.css",
    "contato.css",
    "footer.css",
    "responsive.css",
]

OUTPUT = os.path.join(CSS_DIR, "site.css")


def build():
    parts = [
        "/* ==========================================================================\n"
        "   site.css -- GENERADO AUTOMÁTICAMENTE por build_css.py, NO EDITAR A MANO.\n"
        "   Editar los archivos fuente (variables.css, layout.css, etc.) y volver a\n"
        "   correr build_css.py antes de cada patch que toque CSS.\n"
        "   ========================================================================== */\n"
    ]
    for filename in ORDER:
        path = os.path.join(CSS_DIR, filename)
        with open(path, encoding="utf-8") as f:
            content = f.read()
        parts.append(f"\n/* ---- {filename} ---- */\n")
        parts.append(content)

    with open(OUTPUT, "w", encoding="utf-8") as f:
        f.write("".join(parts))

    size_kb = os.path.getsize(OUTPUT) / 1024
    print(f"Generado: {OUTPUT} ({size_kb:.1f} KB, {len(ORDER)} archivos combinados)")


if __name__ == "__main__":
    build()
