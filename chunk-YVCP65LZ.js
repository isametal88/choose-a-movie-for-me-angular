import {
  CommonModule
} from "./chunk-RAA3JLT6.js";
import "./chunk-OOCSKCZK.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-CKIRYVSM.js";
import "./chunk-VUJOFXKG.js";

// node_modules/choose-a-movie-for-me-ds/dist/provider.js
var r = class extends HTMLElement {
  static get observedAttributes() {
    return ["src", "alt"];
  }
  /**
   * Getter/setter per attributo 'src'. Default: ''
   */
  get src() {
    return this.getAttribute("src") || "";
  }
  set src(t) {
    t != null ? this.setAttribute("src", t) : this.removeAttribute("src");
  }
  /**
   * Getter/setter per attributo 'alt'. Default: ''
   */
  get alt() {
    return this.getAttribute("alt") || "";
  }
  set alt(t) {
    t != null ? this.setAttribute("alt", t) : this.removeAttribute("alt");
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  attributeChangedCallback() {
    this.render();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("src") || "", e = this.getAttribute("alt"), s = e === null ? "" : e;
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                .provider {
                    width: var(--cam-ds-provider-size, 24px);
                    height: var(--cam-ds-provider-size, 24px);
                    border-radius: 8px;
                    overflow: hidden;
                    display: inline-block;
                    background: #fff;
                    border: 1px solid #e0e0e0;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
                }
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    display: block;
                    background: #fff;
                }
            </style>
            <span class="provider">
                <img src="${t}" alt="${s}" />
            </span>
        `;
  }
};
customElements.define("cam-ds-provider", r);

// node_modules/choose-a-movie-for-me-ds/dist/providerCheckbox.js
var i = class extends HTMLElement {
  static get observedAttributes() {
    return ["checked"];
  }
  get checked() {
    return this.hasAttribute("checked");
  }
  set checked(e) {
    e ? this.hasAttribute("checked") || this.setAttribute("checked", "") : this.hasAttribute("checked") && this.removeAttribute("checked"), this.shadowRoot && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this), this._onKeyDown = this._onKeyDown.bind(this), this._onClick = this._onClick.bind(this);
  }
  connectedCallback() {
    this.render(), this.addEventListener("focus", this._onFocus), this.addEventListener("blur", this._onBlur), this.addEventListener("keydown", this._onKeyDown), this.addEventListener("click", this._onClick), this._addFocusListeners();
  }
  disconnectedCallback() {
    this._removeFocusListeners(), this.removeEventListener("focus", this._onFocus), this.removeEventListener("blur", this._onBlur), this.removeEventListener("keydown", this._onKeyDown), this.removeEventListener("click", this._onClick);
  }
  attributeChangedCallback(e, s, t) {
    this.shadowRoot && s !== t && this.render();
  }
  _addFocusListeners() {
    const e = this.shadowRoot && this.shadowRoot.querySelector(".row");
    e && (e.addEventListener("focus", this._onFocus), e.addEventListener("blur", this._onBlur));
  }
  _removeFocusListeners() {
    const e = this.shadowRoot && this.shadowRoot.querySelector(".row");
    e && (e.removeEventListener("focus", this._onFocus), e.removeEventListener("blur", this._onBlur));
  }
  _onFocus() {
    this.setAttribute("focused", "");
  }
  _onBlur() {
    this.removeAttribute("focused");
  }
  _onKeyDown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._toggleChecked());
  }
  _onClick() {
    this._toggleChecked();
  }
  _toggleChecked() {
    this.checked = !this.checked, this.dispatchEvent(new CustomEvent("change", { detail: { checked: this.checked }, bubbles: true }));
  }
  render() {
    this._removeFocusListeners();
    const e = this.hasAttribute("checked");
    this.shadowRoot.querySelector(".row") || (this.shadowRoot.innerHTML = `
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                    :host { display: inline-block; }
                    .row {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 4px;
                        border-radius: 6px;
                        cursor: pointer;
                        user-select: none;
                    }
                    .box {
                        width: 18px;
                        height: 18px;
                        border-radius: 4px;
                        border: 2px solid #a8b3bd;
                        background: #fff;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .box.checked {
                        background: rgb(58, 125, 183);
                        border-color: rgb(58, 125, 183);
                    }
                    .checkmark {
                        width: 10px;
                        height: 10px;
                        display: block;
                        color: #fff;
                        font-size: 10px;
                        line-height: 10px;
                    }
                    :host { --cam-ds-provider-size: 50px; }
                    ::slotted(cam-ds-provider) {
                        display: inline-block;
                        width: var(--cam-ds-provider-size, 50px);
                        height: var(--cam-ds-provider-size, 50px);
                    }
                </style>
                <div class="row" role="checkbox" tabindex="0">
                    <span class="box" part="box"><span class="checkmark">\u2713</span></span>
                    <slot></slot>
                </div>
            `);
    const s = this.shadowRoot.querySelector(".row"), t = this.shadowRoot.querySelector(".box");
    s && s.setAttribute("aria-checked", e ? "true" : "false"), t && (t.classList.toggle("checked", e), t.querySelector(".checkmark").style.visibility = e ? "visible" : "hidden"), this._addFocusListeners();
  }
};
customElements.define("cam-ds-provider-checkbox", i);

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/services.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ServicesComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "cam-ds-provider-checkbox", 2);
    \u0275\u0275domListener("click", function ServicesComponent_For_6_Template_cam_ds_provider_checkbox_click_0_listener($event) {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(p_r2.id, $event.currentTarget));
    });
    \u0275\u0275domElement(1, "cam-ds-provider");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("aria-label", p_r2.name)("aria-checked", ctx_r2.isSelected(p_r2.id));
    \u0275\u0275advance();
    \u0275\u0275attribute("src", p_r2.src)("alt", p_r2.alt);
  }
}
function ServicesComponent_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "Nessun provider disponibile");
    \u0275\u0275domElementEnd();
  }
}
var MOCK_PROVIDERS = [
  { id: 1, src: "/logo-netflix.svg", alt: "Netflix", name: "Netflix" },
  { id: 2, src: "/logo-disney.svg", alt: "Disney+", name: "Disney+" },
  { id: 3, src: "/logo-prime.svg", alt: "Prime Video", name: "Prime Video" },
  { id: 4, src: "/logo-hbo.svg", alt: "HBO Max", name: "HBO Max" }
];
var ServicesComponent = class _ServicesComponent {
  // signal that holds the array of providers (mocked for now)
  providers = signal(MOCK_PROVIDERS, ...ngDevMode ? [{ debugName: "providers" }] : []);
  // writable signal that holds the set of selected provider ids
  selected = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selected" }] : []);
  // derived/computed signal showing how many are selected
  selectedCount = computed(() => this.selected().size, ...ngDevMode ? [{ debugName: "selectedCount" }] : []);
  // helper used from the template
  isSelected(id) {
    return this.selected().has(id);
  }
  // toggle selection — update the signal immutably by creating a new Set
  toggle(id, el) {
    if (el && el.getAttribute && typeof el.getAttribute === "function") {
      const element = el;
      const hasChecked = element.getAttribute("checked") !== null && element.getAttribute("checked") !== "false";
      const next2 = new Set(this.selected());
      if (hasChecked)
        next2.add(id);
      else
        next2.delete(id);
      this.selected.set(next2);
      return;
    }
    const next = new Set(this.selected());
    if (next.has(id))
      next.delete(id);
    else
      next.add(id);
    this.selected.set(next);
  }
  // observe external changes to cam-ds-provider-checkbox 'checked' attribute
  _observers = /* @__PURE__ */ new Map();
  ngAfterViewInit() {
    const els = Array.from(document.querySelectorAll("cam-ds-provider-checkbox"));
    els.forEach((el, idx) => {
      const provider = this.providers()[idx];
      if (!provider)
        return;
      const id = provider.id;
      const obs = new MutationObserver((mutations) => {
        for (const m of mutations) {
          if (m.type === "attributes" && m.attributeName === "checked") {
            const hasChecked = el.getAttribute("checked") !== null && el.getAttribute("checked") !== "false";
            const next = new Set(this.selected());
            if (hasChecked)
              next.add(id);
            else
              next.delete(id);
            this.selected.set(next);
          }
        }
      });
      obs.observe(el, { attributes: true, attributeFilter: ["checked"] });
      this._observers.set(el, obs);
      const initChecked = el.getAttribute("checked") !== null && el.getAttribute("checked") !== "false";
      if (initChecked) {
        const next = new Set(this.selected());
        next.add(id);
        this.selected.set(next);
      }
    });
  }
  ngOnDestroy() {
    this._observers.forEach((obs) => obs.disconnect());
    this._observers.clear();
  }
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 8, vars: 2, consts: [["level", "2"], [1, "providers"], [3, "click"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "cam-ds-heading", 0);
      \u0275\u0275text(1, "Choose a Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "p");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 1);
      \u0275\u0275repeaterCreate(5, ServicesComponent_For_6_Template, 2, 4, "cam-ds-provider-checkbox", null, _forTrack0, false, ServicesComponent_ForEmpty_7_Template, 2, 0, "p");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Selezionati: ", ctx.selectedCount());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.providers());
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=services.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [CommonModule], template: `
    <cam-ds-heading level="2">Choose a Service</cam-ds-heading>

    <p>Selezionati: {{ selectedCount() }}</p>

    <div class="providers">
      @for (p of providers(); track p.id) {
        <cam-ds-provider-checkbox
          (click)="toggle(p.id, $event.currentTarget)"
          [attr.aria-label]="p.name"
          [attr.aria-checked]="isSelected(p.id)">
          <cam-ds-provider [attr.src]="p.src" [attr.alt]="p.alt"></cam-ds-provider>
        </cam-ds-provider-checkbox>
      } @empty {
        <p>Nessun provider disponibile</p>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/services.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=services.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/services.component.ts", lineNumber: 47 });
})();
export {
  ServicesComponent
};
//# sourceMappingURL=chunk-YVCP65LZ.js.map
