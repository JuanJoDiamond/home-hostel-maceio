/**
 * i18n.js
 * Maneja el selector de idioma (bandera + código en el header) y aplica
 * las traducciones de i18n-data.js a todo el HTML marcado con:
 *   data-i18n="key"       -> reemplaza el texto del elemento
 *   data-i18n-html="key"  -> reemplaza el innerHTML (para textos con <em>)
 *   data-i18n-attr="attr:key" -> reemplaza un atributo puntual (alt, aria-label)
 *
 * Recuerda el idioma elegido en localStorage; si no hay nada guardado,
 * arranca en portugués (DEFAULT_LANG), tal como pide el brief.
 */

import { LANGS, translations, DEFAULT_LANG, STORAGE_KEY } from "./i18n-data.js";

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  document.documentElement.lang =
    lang === "pt" ? "pt-BR" : lang === "es" ? "es" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    // formato: "atributo:key" (ej: "alt:hero_photo_alt")
    const [attr, key] = el.getAttribute("data-i18n-attr").split(":");
    if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
  });

  // Refleja el idioma activo en el botón disparador del selector
  const trigger = document.querySelector("[data-lang-trigger]");
  const activeLang = LANGS.find((l) => l.code === lang);
  if (trigger && activeLang) {
    trigger.querySelector("[data-current-flag]").innerHTML = activeLang.flag;
    trigger.querySelector("[data-current-code]").textContent =
      activeLang.code.toUpperCase();
  }

  document.querySelectorAll("[data-lang-option]").forEach((btn) => {
    btn.setAttribute(
      "aria-selected",
      btn.getAttribute("data-lang-option") === lang ? "true" : "false"
    );
  });

  localStorage.setItem(STORAGE_KEY, lang);
}

function buildLangMenu() {
  const menu = document.querySelector("[data-lang-menu]");
  if (!menu) return;

  menu.innerHTML = LANGS.map(
    (l) => `
      <li role="option" aria-selected="false">
        <button type="button" data-lang-option="${l.code}">
          <span class="lang-switch__flag">${l.flag}</span>
          ${l.label}
        </button>
      </li>`
  ).join("");
}

function initLangSwitcher() {
  const wrapper = document.querySelector("[data-lang-switch]");
  const trigger = document.querySelector("[data-lang-trigger]");
  const menu = document.querySelector("[data-lang-menu]");
  if (!wrapper || !trigger || !menu) return;

  buildLangMenu();

  const closeMenu = () => {
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  };

  const openMenu = () => {
    trigger.setAttribute("aria-expanded", "true");
    menu.hidden = false;
  };

  trigger.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = trigger.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  menu.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-lang-option]");
    if (!btn) return;
    applyLanguage(btn.getAttribute("data-lang-option"));
    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (!wrapper.contains(event.target)) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

export function initI18n() {
  initLangSwitcher();
  const saved = localStorage.getItem(STORAGE_KEY);
  applyLanguage(saved && translations[saved] ? saved : DEFAULT_LANG);
}
