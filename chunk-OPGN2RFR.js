import "./chunk-BJ2QXCYT.js";
import "./chunk-FMZO32X5.js";
import "./chunk-XCLE2RQI.js";
import {
  TMDBService,
  TmdbSearchService
} from "./chunk-MWXV3S6X.js";
import {
  CommonModule
} from "./chunk-EWKMVYH6.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-XDCJZM2Q.js";
import "./chunk-CZJLB7T5.js";

// node_modules/choose-a-movie-for-me-ds/dist/checkboxContainer.js
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
customElements.define("cam-ds-checkbox-container", i);

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/suggestion-movie-ask-me.component.ts
var _forTrack0 = ($index, $item) => $item.provider_id;
function SuggestionMovieAskMeComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "cam-ds-checkbox-container", 5);
    \u0275\u0275domListener("change", function SuggestionMovieAskMeComponent_For_6_Template_cam_ds_checkbox_container_change_0_listener($event) {
      const p_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleService(p_r2.provider_id, $event));
    });
    \u0275\u0275domElement(1, "cam-ds-provider");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("tabindex", 0)("aria-label", p_r2.provider_name)("aria-checked", ctx_r2.isSelectedService(p_r2.provider_id));
    \u0275\u0275advance();
    \u0275\u0275attribute("src", p_r2.logo_path)("alt", p_r2.provider_name);
  }
}
function SuggestionMovieAskMeComponent_ForEmpty_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "Nessun provider disponibile");
    \u0275\u0275domElementEnd();
  }
}
function SuggestionMovieAskMeComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "cam-ds-checkbox-container", 5);
    \u0275\u0275domListener("change", function SuggestionMovieAskMeComponent_For_14_Template_cam_ds_checkbox_container_change_0_listener($event) {
      const g_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleGenre(g_r5.id, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const g_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("tabindex", 0)("aria-label", g_r5.name)("aria-checked", ctx_r2.isSelectedGenre(g_r5.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", g_r5.name, " ");
  }
}
function SuggestionMovieAskMeComponent_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1, "Nessun provider disponibile");
    \u0275\u0275domElementEnd();
  }
}
var SuggestionMovieAskMeComponent = class _SuggestionMovieAskMeComponent {
  tmdbService = inject(TMDBService);
  tmdbSearchService = inject(TmdbSearchService);
  // signal that holds the array of providers (mocked for now)
  providers = this.tmdbService.providers;
  // writable signal that holds the set of selected provider ids
  selectedProviders = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedProviders" }] : []);
  // derived/computed signal showing how many are selected
  selectedCountProviders = computed(() => this.selectedProviders().size, ...ngDevMode ? [{ debugName: "selectedCountProviders" }] : []);
  // helper used from the template
  isSelectedService(id) {
    return this.selectedProviders().has(id);
  }
  // toggle selection — update the signal immutably by creating a new Set
  toggleService(id, el) {
    const hasChecked = el.detail?.checked;
    const next = new Set(this.selectedProviders());
    if (hasChecked)
      next.add(id);
    else
      next.delete(id);
    this.selectedProviders.set(next);
    return;
  }
  // signal that holds the array of genres
  genres = this.tmdbService.genres;
  // writable signal that holds the set of selected genre ids
  selectedGenres = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "selectedGenres" }] : []);
  selectedGenresMap = computed(() => {
    const selected = /* @__PURE__ */ new Map();
    this.selectedGenres().forEach((id) => selected.set(id, true));
    return selected;
  }, ...ngDevMode ? [{ debugName: "selectedGenresMap" }] : []);
  // derived/computed signal showing how many are selected
  selectedCountGenres = computed(() => this.selectedGenres().size, ...ngDevMode ? [{ debugName: "selectedCountGenres" }] : []);
  // helper used from the template
  isSelectedGenre(genreId) {
    return this.selectedGenres().has(genreId);
  }
  // toggle selection — update the signal immutably by creating a new Set
  toggleGenre(genreId, el) {
    const hasChecked = el.detail?.checked;
    const next = new Set(this.selectedGenres());
    if (hasChecked)
      next.add(genreId);
    else
      next.delete(genreId);
    this.selectedGenres.set(next);
    return;
  }
  async search() {
    const result = await this.tmdbService.discover({
      providers: Array.from(this.selectedProviders()),
      genres: Array.from(this.selectedGenres())
    });
    this.tmdbSearchService.setSearchResult(result);
    this.tmdbSearchService.goToResult();
  }
  static \u0275fac = function SuggestionMovieAskMeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuggestionMovieAskMeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuggestionMovieAskMeComponent, selectors: [["app-services"]], decls: 18, vars: 4, consts: [["level", "2"], [1, "providers"], ["role", "checkbox"], [1, "genres"], [3, "click"], ["role", "checkbox", 3, "change"]], template: function SuggestionMovieAskMeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "cam-ds-heading", 0);
      \u0275\u0275text(1, "Choose a Service");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(2, "p");
      \u0275\u0275text(3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "div", 1);
      \u0275\u0275repeaterCreate(5, SuggestionMovieAskMeComponent_For_6_Template, 2, 5, "cam-ds-checkbox-container", 2, _forTrack0, false, SuggestionMovieAskMeComponent_ForEmpty_7_Template, 2, 0, "p");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "cam-ds-heading", 0);
      \u0275\u0275text(9, "Choose a Genre");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "p");
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 3);
      \u0275\u0275repeaterCreate(13, SuggestionMovieAskMeComponent_For_14_Template, 2, 4, "cam-ds-checkbox-container", 2, \u0275\u0275repeaterTrackByIdentity, false, SuggestionMovieAskMeComponent_ForEmpty_15_Template, 2, 0, "p");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(16, "cam-ds-button", 4);
      \u0275\u0275domListener("click", function SuggestionMovieAskMeComponent_Template_cam_ds_button_click_16_listener() {
        return ctx.search();
      });
      \u0275\u0275text(17, "Cerca");
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Selezionati: ", ctx.selectedCountProviders());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.providers());
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("Selezionati: ", ctx.selectedCountGenres());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.genres());
    }
  }, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=suggestion-movie-ask-me.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestionMovieAskMeComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [CommonModule], template: `
    <cam-ds-heading level="2">Choose a Service</cam-ds-heading>

    <p>Selezionati: {{ selectedCountProviders() }}</p>

    <div class="providers">
      @for (p of providers(); track p.provider_id) {
        <cam-ds-checkbox-container
          (change)="toggleService(p.provider_id, $event)"
          role="checkbox"
          [attr.tabindex]="0"
          [attr.aria-label]="p.provider_name"
          [attr.aria-checked]="isSelectedService(p.provider_id)">
          <cam-ds-provider [attr.src]="p.logo_path" [attr.alt]="p.provider_name"></cam-ds-provider>
        </cam-ds-checkbox-container>
      } @empty {
        <p>Nessun provider disponibile</p>
      }
    </div>

    <cam-ds-heading level="2">Choose a Genre</cam-ds-heading>
        
        <p>Selezionati: {{ selectedCountGenres() }}</p>
    
        <div class="genres">
          @for (g of genres(); track g) {
            <cam-ds-checkbox-container
              (change)="toggleGenre(g.id, $event)"
              role="checkbox"
  [attr.tabindex]="0"
              [attr.aria-label]="g.name"
              [attr.aria-checked]="isSelectedGenre(g.id)">
             {{g.name}}
            </cam-ds-checkbox-container>
          } @empty {
            <p>Nessun provider disponibile</p>
          }
        </div>

      <cam-ds-button (click)="search()">Cerca</cam-ds-button>
  `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/suggestion-movie-ask-me.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=suggestion-movie-ask-me.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuggestionMovieAskMeComponent, { className: "SuggestionMovieAskMeComponent", filePath: "src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/suggestion-movie-ask-me.component.ts", lineNumber: 59 });
})();
export {
  SuggestionMovieAskMeComponent
};
//# sourceMappingURL=chunk-OPGN2RFR.js.map
