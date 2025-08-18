import {
  __spreadProps,
  __spreadValues
} from "./chunk-VUJOFXKG.js";

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
var c = (s2) => class extends s2 {
  static config = __spreadProps(__spreadValues({}, s2.config), {
    observedAttributes: [...s2.config.observedAttributes || [], "aria-label", "role", "aria-describedby"]
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
var l = (s2) => class extends s2 {
  static config = __spreadProps(__spreadValues({}, s2.config), {
    observedAttributes: [...s2.config.observedAttributes || [], "disabled", "tabindex"]
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
function b(...s2) {
  return s2.filter(Boolean).join(`
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

// node_modules/choose-a-movie-for-me-ds/dist/button.js
var s = class extends l(c(n)) {
  static config = {
    observedAttributes: ["disabled", "variant", "size", "aria-label", "tabindex"],
    defaultAttributes: {
      variant: "primary",
      size: "medium",
      disabled: false,
      "aria-label": ""
    },
    events: [
      { selector: "button", event: "click", handler: "handleClick" }
    ]
  };
  static cssClass = "cam-ds-button";
  // Rimuovo defaultRole perché il custom element non deve avere role="button"
  // Solo il button interno deve avere il role
  static baseStyles = b(
    u.base,
    u.focus,
    `
            :host {
                --button-min-width: 350px;
                --button-max-width: 800px;
                --button-padding: ${h.spacing.lg} 0;
                --button-margin: ${h.spacing.lg} auto;
                --button-radius: ${h.radius.xl};
                --button-font-size: ${h.typography.fontSize.xl};
                --button-transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease, border 0.3s ease;
            }
            
            button {
                width: 100%;
                min-width: var(--button-min-width);
                max-width: var(--button-max-width);
                display: block;
                margin: var(--button-margin);
                border: none;
                border-radius: var(--button-radius);
                cursor: pointer;
                font-family: ${h.typography.fontFamily};
                font-size: var(--button-font-size);
                font-weight: ${h.typography.fontWeight.regular};
                padding: var(--button-padding);
                text-align: center;
                transition: var(--button-transition);
                ${u.shadows.md}
            }
            
            /* Focus styles */
            button:focus-visible {
                outline: 2px solid ${h.colors.accent};
                outline-offset: 2px;
            }
            
            /* Primary variant */
            .primary {
                background-color: ${h.colors.accent};
                color: ${h.colors.background};
                border: none;
            }
            .primary:hover:not(:disabled),
            .primary:focus:not(:disabled),
            .primary:active:not(:disabled) {
                background: ${h.colors.accentHover};
                color: ${h.colors.background};
                ${u.shadows.lg}
            }
            
            /* Secondary variant */
            .secondary {
                background: transparent;
                color: ${h.colors.accent};
                border: 2px solid ${h.colors.accent};
            }
            .secondary:hover:not(:disabled) {
                background: ${h.colors.accentLight};
                color: ${h.colors.accentHover};
                border-color: ${h.colors.accentHover};
            }
            
            /* Outline variant */
            .outline {
                background: ${h.colors.background};
                color: ${h.colors.textPrimary};
                border: 2px solid ${h.colors.textPrimary};
            }
            .outline:hover:not(:disabled) {
                background: ${h.colors.secondary};
                color: ${h.colors.primary500};
                border-color: ${h.colors.primary500};
            }
            
            /* Disabled state */
            button:disabled {
                cursor: not-allowed;
                opacity: 0.6;
                pointer-events: none;
            }
            
            /* Size variants */
            .small {
                --button-min-width: 200px;
                --button-font-size: ${h.typography.fontSize.md};
                --button-padding: ${h.spacing.md} 0;
            }
            
            .large {
                --button-min-width: 500px;
                --button-font-size: ${h.typography.fontSize.xxl};
                --button-padding: ${h.spacing.xl} 0;
            }
        `
  );
  getTemplate() {
    const a = this.ariaLabel || "";
    return `
            <button 
                class="${this.variant} ${this.size}" 
                role="button" 
                aria-label="${a}"
                ${this.disabled ? "disabled" : ""}>
                <slot></slot>
            </button>
        `;
  }
  handleClick(a) {
    this.disabled || this.dispatchEvent(new CustomEvent("button-click", {
      detail: {
        variant: this.variant,
        size: this.size,
        originalEvent: a
      },
      bubbles: true,
      composed: true
    }));
  }
};
customElements.define("cam-ds-button", s);
//# sourceMappingURL=chunk-6V7WYHJC.js.map
