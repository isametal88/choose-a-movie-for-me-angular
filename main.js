import {
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  registerLocaleData
} from "./chunk-3AWSOUXS.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  LOCALE_ID,
  provideZonelessChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart
} from "./chunk-XMVZVPUM.js";
import "./chunk-CZJLB7T5.js";

// node_modules/@angular/common/locales/it.js
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length, e3 = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, "$2")) || 0;
  if (i === 1 && v === 0)
    return 1;
  if (e3 === 0 && (!(i === 0) && (i % 1e6 === 0 && v === 0)) || !(e3 >= 0 && e3 <= 5))
    return 4;
  return 5;
}
var it_default = ["it", [["m.", "p."], ["AM", "PM"]], u, [["D", "L", "M", "M", "G", "V", "S"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], ["domenica", "luned\xEC", "marted\xEC", "mercoled\xEC", "gioved\xEC", "venerd\xEC", "sabato"], ["dom", "lun", "mar", "mer", "gio", "ven", "sab"]], u, [["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"], ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"], ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"]], u, [["aC", "dC"], ["a.C.", "d.C."], ["avanti Cristo", "dopo Cristo"]], 1, [6, 0], ["dd/MM/yy", "d MMM y", "d MMMM y", "EEEE d MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} {0}", u], [",", ".", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "#,##0.00\xA0\xA4", "#E0"], "EUR", "\u20AC", "euro", { "BRL": [u, "R$"], "BYN": [u, "Br"], "EGP": [u, "\xA3E"], "HKD": [u, "$"], "INR": [u, "\u20B9"], "JPY": [u, "\xA5"], "KRW": [u, "\u20A9"], "MXN": [u, "$"], "NOK": [u, "NKr"], "THB": ["\u0E3F"], "TWD": [u, "NT$"], "USD": [u, "$"], "VND": [u, "\u20AB"] }, "ltr", plural];

// src/app/app.routes.ts
var routes = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./chunk-7ROIILEU.js").then((m) => m.ModeComponent)
  },
  {
    path: "suggestion",
    loadChildren: () => import("./chunk-XZESLN44.js").then((m) => m.routes)
  },
  {
    path: "find",
    pathMatch: "full",
    loadComponent: () => import("./chunk-CQ5VVTI5.js").then((m) => m.FindComponent)
  },
  {
    path: "movie",
    loadChildren: () => import("./chunk-QNKWWJVQ.js").then((m) => m.routes)
  }
];

// src/app/app.config.ts
registerLocaleData(it_default);
var appConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    { provide: LOCALE_ID, useValue: "it-IT" }
  ]
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
          border-top: 24px solid #somecolor; /* Aggiungi il colore desiderato */
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
          overflow: auto;
          /* Scroll personalizzato per webkit */
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
        }
        
        .content::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        .content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
        }
        
        .content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
        
        @media (max-width: 600px) {
          .content {
            overflow-x: auto;
            overflow-y: visible;
            min-height: auto;
            height: auto;
          }
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
          justify-content: flex-start;
          padding: 0.5rem 1rem;
          background: transparent;
          border-bottom: 1px solid #eee;
          min-height: 56px;
        }
        .logo {
          width: 200px;
          max-width: 200px;
          transition: width 0.3s ease, max-width 0.3s ease;
        }
        
        /* Media query per dispositivi mobile */
        @media (max-width: 768px) {
          :host {
            min-height: 48px;
          }
          .header {
            min-height: 48px;
            padding: 0.375rem 0.75rem;
          }
          .logo {
            width: 120px;
            max-width: 120px;
          }
        }
        
        /* Media query per dispositivi molto piccoli */
        @media (max-width: 480px) {
          :host {
            min-height: 44px;
          }
          .header {
            min-height: 44px;
            padding: 0.25rem 0.5rem;
          }
          .logo {
            width: 100px;
            max-width: 100px;
          }
        }
      </style>
      <header class="header">
        <cam-ds-logo class="logo" aria-label="Logo"></cam-ds-logo>
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
                    max-width: 100%;
                    /* overflow: hidden; */ /* Commentato per permettere la visualizzazione del border-top */
                    margin-top: 24px; /* Spazio per la bordatura */
                }
                @media (max-width: 600px) {
                    .container {
                        min-height: 0;
                        height: auto;
                        overflow-x: hidden; /* Evita scroll orizzontale del container */
                    }
                    cam-ds-content {
                        flex: none;
                        min-height: auto;
                        height: auto;
                        max-width: 100vw;
                        overflow: visible; /* Permette al content di gestire il proprio overflow */
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
