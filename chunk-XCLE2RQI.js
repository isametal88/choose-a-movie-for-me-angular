import {
  __spreadProps,
  __spreadValues
} from "./chunk-CZJLB7T5.js";

// node_modules/choose-a-movie-for-me-ds/dist/shared-styles-DyCoJTMZ.js
var n = class extends HTMLElement {
  static config = {
    observedAttributes: [],
    defaultAttributes: {},
    events: [],
    styles: []
  };
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._setupAttributeAccessors();
  }
  static get observedAttributes() {
    return this.config.observedAttributes;
  }
  connectedCallback() {
    this.render(), this._attachEventListeners();
  }
  attributeChangedCallback(t, r, e) {
    r !== e && this.render();
  }
  /**
   * Auto-genera getter/setter per tutti gli attributi osservati
   * Elimina la necessità di scrivere manualmente ogni getter/setter
   */
  _setupAttributeAccessors() {
    this.constructor.config.observedAttributes.forEach((t) => {
      const r = t.replace(/-([a-z])/g, (e) => e[1].toUpperCase());
      Object.defineProperty(this, r, {
        get() {
          const e = this.getAttribute(t), i = this.constructor.config.defaultAttributes[t];
          return e === null ? i : e === "" && typeof i == "boolean" ? true : typeof i == "number" ? parseInt(e) || i : typeof i == "boolean" ? e === "true" : e;
        },
        set(e) {
          e == null ? this.removeAttribute(t) : typeof e == "boolean" ? e ? this.setAttribute(t, "") : this.removeAttribute(t) : this.setAttribute(t, String(e));
        }
      });
    });
  }
  /**
   * Rendering pattern unificato
   */
  render() {
    const t = this.getStyles(), r = this.getTemplate();
    this.shadowRoot.innerHTML = `${t}${r}`;
  }
  /**
   * Override per definire gli stili del componente
   */
  getStyles() {
    return `<style>${this.constructor.baseStyles || ""}</style>`;
  }
  /**
   * Override per definire il template del componente
   */
  getTemplate() {
    return `<div class="${this.constructor.cssClass || "component"}"><slot></slot></div>`;
  }
  /**
   * Auto-attach degli event listeners basati su configurazione
   */
  _attachEventListeners() {
    this.constructor.config.events && this.constructor.config.events.forEach(({ selector: t, event: r, handler: e }) => {
      this.shadowRoot.querySelectorAll(t).forEach((o) => {
        o.addEventListener(r, (a) => this[e](a));
      });
    });
  }
  /**
   * Helper per emettere eventi custom con naming consistente
   */
  emit(t, r = null) {
    this.dispatchEvent(new CustomEvent(`cam-ds-${t}`, {
      detail: r,
      bubbles: true,
      composed: true
    }));
  }
  /**
   * Helper per debug e sviluppo
   */
  debug(t, r = null) {
    console.log(`[${this.constructor.name}] ${t}`, r);
  }
};
var c = (s) => class extends s {
  static config = __spreadProps(__spreadValues({}, s.config), {
    observedAttributes: [...s.config.observedAttributes || [], "aria-label", "role", "aria-describedby"]
  });
  connectedCallback() {
    this.setupAccessibility(), super.connectedCallback();
  }
  setupAccessibility() {
    !this.hasAttribute("role") && this.constructor.defaultRole && this.setAttribute("role", this.constructor.defaultRole), !this.hasAttribute("aria-label") && this.constructor.defaultAriaLabel && this.setAttribute("aria-label", this.constructor.defaultAriaLabel);
  }
  /**
   * Announce per screen readers
   */
  announce(t, r = "polite") {
    const e = document.createElement("div");
    e.setAttribute("aria-live", r), e.setAttribute("aria-atomic", "true"), e.className = "sr-only", e.textContent = t, document.body.appendChild(e), setTimeout(() => document.body.removeChild(e), 1e3);
  }
};
var l = (s) => class extends s {
  static config = __spreadProps(__spreadValues({}, s.config), {
    observedAttributes: [...s.config.observedAttributes || [], "disabled", "tabindex"]
  });
  get focusable() {
    return !this.disabled && this.tabindex !== "-1";
  }
  get disabled() {
    return this.hasAttribute("disabled");
  }
  set disabled(t) {
    t ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
  }
  focus() {
    this.focusable && this.shadowRoot.querySelector("[tabindex], button, input, select, textarea, a[href]")?.focus();
  }
  blur() {
    this.shadowRoot.activeElement?.blur();
  }
};
var d = (s) => class extends s {
  static config = __spreadProps(__spreadValues({}, s.config), {
    observedAttributes: [...s.config.observedAttributes || [], "loading", "error"]
  });
  get loading() {
    return this.hasAttribute("loading");
  }
  set loading(t) {
    t ? (this.setAttribute("loading", ""), this.setAttribute("aria-busy", "true")) : (this.removeAttribute("loading"), this.removeAttribute("aria-busy"));
  }
  get error() {
    return this.getAttribute("error") || "";
  }
  set error(t) {
    t ? (this.setAttribute("error", t), this.setAttribute("aria-invalid", "true")) : (this.removeAttribute("error"), this.removeAttribute("aria-invalid"));
  }
  showLoading() {
    this.loading = true, this.emit("loading-start");
  }
  hideLoading() {
    this.loading = false, this.emit("loading-end");
  }
  showError(t) {
    this.error = t, this.loading = false, this.emit("error", { message: t });
  }
  clearError() {
    this.error = "", this.emit("error-cleared");
  }
};
var u = {
  base: `
    :host {
      display: inline-block;
      box-sizing: border-box;
      font-family: var(--ds-font-family-base, 'Open Sans', Arial, sans-serif);
    }
    *, *::before, *::after {
      box-sizing: inherit;
    }
    :host([hidden]) { 
      display: none !important; 
    }
    :host([disabled]) { 
      pointer-events: none; 
      opacity: 0.6; 
    }
  `,
  focus: `
    :focus-visible {
      outline: 2px solid var(--ds-color-accent, #f26a2c);
      outline-offset: 2px;
    }
  `,
  shadows: {
    md: "box-shadow: var(--ds-shadow-md, 0 2px 8px rgba(0,0,0,0.08));",
    lg: "box-shadow: var(--ds-shadow-lg, 0 4px 16px rgba(0,0,0,0.12));"
  }
};
function b(...s) {
  return s.filter(Boolean).join(`
`);
}
var h = {
  colors: {
    accent: "var(--ds-color-accent, #f26a2c)",
    accentHover: "var(--ds-color-accent-hover, #d65a1e)",
    accentLight: "var(--ds-color-accent-light, #ffe3d1)",
    background: "var(--ds-color-background-default, #232b37)",
    textPrimary: "var(--ds-color-text-primary, #fff)",
    primary500: "var(--ds-color-primary-500, #4db3e6)",
    secondary: "var(--ds-color-secondary, #2a4a6a)"
  },
  spacing: {
    md: "var(--ds-space-md, 16px)",
    lg: "var(--ds-space-lg, 24px)",
    xl: "var(--ds-space-xl, 32px)"
  },
  radius: {
    xl: "var(--ds-radius-xl, 24px)",
    round: "var(--ds-radius-round, 50%)"
  },
  typography: {
    fontFamily: 'var(--ds-font-family-base, "Open Sans", Arial, sans-serif)',
    fontSize: {
      md: "var(--ds-font-size-md, 1rem)",
      xl: "var(--ds-font-size-xl, 1.5rem)",
      xxl: "var(--ds-font-size-xxl, 2rem)"
    },
    fontWeight: {
      regular: "var(--ds-font-weight-regular, 400)"
    }
  }
};

export {
  n,
  c,
  l,
  d,
  u,
  b,
  h
};
//# sourceMappingURL=chunk-XCLE2RQI.js.map
