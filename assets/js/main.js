/**
 * main.js
 * Entry point. Se carga como <script type="module"> desde index.html.
 * Cada sección de funcionalidad vive en su propio archivo (navbar.js,
 * animations.js, ...) y se inicializa acá.
 */

import { initNavbar } from "./navbar.js";
import { initAnimations } from "./animations.js";
import { initI18n } from "./i18n.js";
import { initCarousels } from "./carousel.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initAnimations();
  initI18n();
  initCarousels();
});
