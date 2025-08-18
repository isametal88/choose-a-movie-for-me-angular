import {
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-UILARDYF.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  provideZonelessChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-5GGIGRC6.js";
import "./chunk-VUJOFXKG.js";

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./chunk-MN6XM6AH.js").then((m) => m.ModeComponent)
  },
  {
    path: "suggestion",
    loadChildren: () => import("./chunk-CLHPNYBK.js").then((m) => m.routes)
  },
  {
    path: "find",
    pathMatch: "full",
    loadComponent: () => import("./chunk-Z6CEXQDI.js").then((m) => m.FindComponent)
  }
];

// src/app/app.config.ts
var appConfig = {
  providers: [provideZonelessChangeDetection(), provideRouter(routes)]
};

// node_modules/choose-a-movie-for-me-ds/dist/content.js
var t = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: block;
          font-family: 'Open Sans', Arial, sans-serif;
        }
        .content {
          background: #293040;
          border-top-left-radius: 24px;
          border-top-right-radius: 24px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          padding: 2rem 2rem 0 2rem;
          color: #fff;
          height: 100%;
          min-height: 0;
          display: flex;
          flex-direction: column;
        }
      </style>
      <main class="content">
        <slot></slot>
      </main>
    `;
  }
};
customElements.define("cam-ds-content", t);

// node_modules/choose-a-movie-for-me-ds/dist/footer.js
var e = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                    :host {
                        display: block;
                        width: 100%;
                        height: 100%;
                        font-family: 'Open Sans', Arial, sans-serif;
                    }
                    footer {
                        width: 100%;
                        height: 100%;
                        background: #5db3e6;
                        color: #fff;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding: 0;
                        margin: 0;
                        box-sizing: border-box;
                }
            </style>
            <footer>
                <slot>Footer content</slot>
            </footer>
        `;
  }
};
customElements.define("cam-ds-footer", e);

// node_modules/choose-a-movie-for-me-ds/dist/hamburgerButton.js
var a = class extends HTMLElement {
  static get observedAttributes() {
    return ["aria-pressed", "aria-expanded"];
  }
  /**
   * Getter/setter per attributo 'aria-pressed'. Default: false
   */
  get ariaPressed() {
    return this.getAttribute("aria-pressed") === "true";
  }
  set ariaPressed(t3) {
    this.setAttribute("aria-pressed", t3 ? "true" : "false");
  }
  /**
   * Getter/setter per attributo 'aria-expanded'. Default: false
   */
  get ariaExpanded() {
    return this.getAttribute("aria-expanded") === "true";
  }
  set ariaExpanded(t3) {
    this.setAttribute("aria-expanded", t3 ? "true" : "false");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t3, e3, n) {
    e3 !== n && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this);
  }
  connectedCallback() {
    this.render();
    const t3 = this.shadowRoot.querySelector("button");
    t3 && (t3.addEventListener("keydown", this._onKeyDown), t3.addEventListener("click", this._onClick));
  }
  disconnectedCallback() {
    const t3 = this.shadowRoot.querySelector("button");
    t3 && (t3.removeEventListener("keydown", this._onKeyDown), t3.removeEventListener("click", this._onClick));
  }
  _onKeyDown(t3) {
    (t3.key === "Enter" || t3.key === " ") && (t3.preventDefault(), t3.target.click());
  }
  _onClick(t3) {
    const e3 = t3.currentTarget, n = e3.getAttribute("aria-pressed") === "true";
    e3.setAttribute("aria-pressed", String(!n)), e3.setAttribute("aria-expanded", String(!n)), this.dispatchEvent(new CustomEvent("toggle", { detail: { expanded: !n } }));
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: inline-block;
        }
        button {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          outline: none;
        }
        .bar {
          width: 28px;
          height: 3px;
          background: #2b3442;
          margin: 4px 0;
          border-radius: 2px;
          transition: background 0.2s;
        }
        button:focus .bar,
        button:hover .bar {
          background: #f15a24;
        }
      </style>
      <button aria-label="Menu" type="button" aria-pressed="false" aria-expanded="false" tabindex="0">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
    `;
  }
};
customElements.define("cam-ds-hamburger-button", a);

// node_modules/choose-a-movie-for-me-ds/dist/logo.js
var s = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.setAttribute("role", "img"), this.setAttribute("aria-label", "Logo Choose a Movie for Me");
  }
  static get observedAttributes() {
    return ["type", "aria-label", "alt"];
  }
  /**
   * Getter/setter per attributo 'type'. Default: undefined
   */
  get type() {
    return this.getAttribute("type");
  }
  set type(t3) {
    t3 != null ? this.setAttribute("type", t3) : this.removeAttribute("type");
  }
  /**
   * Getter/setter per attributo 'aria-label'. Default: alt
   */
  get ariaLabel() {
    return this.getAttribute("aria-label") || this.getAttribute("alt") || "Logo Choose a Movie for Me";
  }
  set ariaLabel(t3) {
    t3 != null ? this.setAttribute("aria-label", t3) : this.removeAttribute("aria-label");
  }
  /**
   * Getter/setter per attributo 'alt'. Default: 'Logo Choose a Movie for Me'
   */
  get alt() {
    return this.getAttribute("alt") || "Logo Choose a Movie for Me";
  }
  set alt(t3) {
    t3 != null ? this.setAttribute("alt", t3) : this.removeAttribute("alt");
  }
  connectedCallback() {
    this.hasAttribute("role") || this.setAttribute("role", "img"), this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const i = this.getAttribute("type") === "minified" ? "/logo-minified.svg" : "/logo.svg", e3 = this.getAttribute("alt") || "Logo Choose a Movie for Me";
    this.getAttribute("aria-label"), this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: block;
          width: 100%;
          height: 100%;
          font-family: 'Open Sans', Arial, sans-serif;
          overflow: hidden;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      </style>
      <img src="${i}" alt="${e3}"/>
    `;
  }
};
customElements.define("cam-ds-logo", s);

// node_modules/choose-a-movie-for-me-ds/dist/header.js
var e2 = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: block;
          font-family: 'Open Sans', Arial, sans-serif;
          width: 100%;
          box-sizing: border-box;
          min-height: 56px;
        }
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 1rem;
          background: transparent;
          border-bottom: 1px solid #eee;
          min-height: 56px;
        }
        .logo {
          width: 40px;
          height: 40px;
          background: red;
          border-radius: 8px;
        }
      </style>
      <header class="header">
        <cam-ds-logo style="width:200px;max-width:200px;" aria-label="Logo"></cam-ds-logo>
        <cam-ds-hamburger-button aria-label="Menu"></cam-ds-hamburger-button>
      </header>
    `;
  }
};
customElements.define("cam-ds-header", e2);

// node_modules/choose-a-movie-for-me-ds/dist/template.js
var t2 = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const e3 = "/background.jpg";
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                :host {
                    display: block;
                    font-family: 'Open Sans', Arial, sans-serif;
                    background-image: url('${e3}');
                    background-repeat: repeat;
                    background-size: auto;
                    min-width: 100vw;
                    min-height: 100vh;
                    margin: 0;
                    padding: 0;
                }
                html, body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    min-height: 100vh;
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    margin: 0;
                }
                cam-ds-header {
                    flex: 0 0 auto;
                    min-height: 56px;
                }
                cam-ds-footer {
                    flex: 0 0 60px;
                    height: 60px;
                    min-height: 60px;
                    max-height: 60px;
                    margin-top: auto;
                }
                cam-ds-content {
                    flex: 1 1 0%;
                    min-height: 0;
                    height: 100%;
                }
                @media (max-width: 600px) {
                    .container {
                        min-height: 0;
                        height: auto;
                    }
                    cam-ds-content {
                        flex: none;
                        min-height: auto;
                        height: auto;
                    }
                    cam-ds-footer {
                        flex: none;
                        height: 60px;
                        min-height: 60px;
                        max-height: 60px;
                        margin-top: 0;
                    }
                }
            </style>
            <div class="container">
                <cam-ds-header></cam-ds-header>

                  <cam-ds-content id="main-content" tabindex="-1"><slot></slot></cam-ds-content>
                <cam-ds-footer></cam-ds-footer>
            </div>
        `;
  }
};
customElements.define("cam-ds-movie-template", t2);

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "choose-a-movie-for-me-angular";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cam-ds-movie-template");
      \u0275\u0275element(1, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet], standalone: true, schemas: [CUSTOM_ELEMENTS_SCHEMA], template: "<cam-ds-movie-template>\n    <router-outlet />\n</cam-ds-movie-template>" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 13 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
