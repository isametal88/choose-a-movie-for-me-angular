import {
  b,
  c,
  h,
  l,
  n,
  u
} from "./chunk-XCLE2RQI.js";

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
//# sourceMappingURL=chunk-FMZO32X5.js.map
