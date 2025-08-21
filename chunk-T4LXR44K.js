import {
  ActivatedRoute
} from "./chunk-7VYWG626.js";
import "./chunk-OOCSKCZK.js";
import "./chunk-DNPXSVUU.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-LP3XZL4R.js";
import "./chunk-VUJOFXKG.js";

// node_modules/choose-a-movie-for-me-ds/dist/loader.js
var i = class extends HTMLElement {
  static get observedAttributes() {
    return ["size", "speed"];
  }
  get size() {
    return this.getAttribute("size") || "64px";
  }
  set size(e) {
    e ? this.setAttribute("size", e) : this.removeAttribute("size"), this.shadowRoot && this.render();
  }
  get speed() {
    return this.getAttribute("speed") || "1s";
  }
  set speed(e) {
    e ? this.setAttribute("speed", e) : this.removeAttribute("speed"), this.shadowRoot && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(e, t, s3) {
    this.shadowRoot && t !== s3 && this.render();
  }
  render() {
    const e = this.size, t = this.speed;
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: ${e};
                    height: ${e};
                }
                
                .loader {
                    width: 100%;
                    height: 100%;
                    animation: rotate ${t} linear infinite;
                    display: block;
                }
                
                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                
                .loader svg {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                
                .loader img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            </style>
            <div class="loader" role="status" aria-label="Caricamento in corso">
                <img src="/movie_reel.svg" alt="Movie reel loading animation" />
            </div>
        `;
  }
};
customElements.define("cam-ds-loader", i);

// node_modules/choose-a-movie-for-me-ds/dist/poster.js
var h = class extends HTMLElement {
  static get observedAttributes() {
    return ["src", "alt", "width", "height"];
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
  /**
   * Getter/setter per attributo 'width'. Default: '200'
   */
  get width() {
    return this.getAttribute("width") || "200";
  }
  set width(t) {
    t != null ? this.setAttribute("width", t) : this.removeAttribute("width");
  }
  /**
   * Getter/setter per attributo 'height'. Default: '300'
   */
  get height() {
    return this.getAttribute("height") || "300";
  }
  set height(t) {
    t != null ? this.setAttribute("height", t) : this.removeAttribute("height");
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
    const t = this.getAttribute("src") || "", e = this.getAttribute("alt") || "", s3 = this.getAttribute("width") || "200", r = this.getAttribute("height") || "300", i3 = e ? "0" : "";
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: block;
          font-family: 'Open Sans', Arial, sans-serif;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          border-radius: 8px;
          overflow: hidden;
          width: 200px;
          height: 400px;
          max-width: 100%;
        }
        figure {
          width: 100%;
          height: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        img {
          display: block;
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          border-radius: 8px;
          object-fit: contain;
        }
        :host(:focus-within) {
          outline: 2px solid #005fcc;
          outline-offset: 2px;
        }
      </style>
      <aside>
        <figure>
          <img src="${t}" alt="${e}" width="${s3}" height="${r}"${i3 ? ` tabindex="${i3}"` : ""} />
        </figure>
      </aside>
    `;
  }
};
customElements.define("cam-ds-poster", h);

// node_modules/choose-a-movie-for-me-ds/dist/typography-caption.js
var s = class extends HTMLElement {
  static get observedAttributes() {
    return ["title", "aria-label"];
  }
  /**
   * Getter/setter per attributo 'title'. Default: ''
   */
  get title() {
    return this.getAttribute("title") || "";
  }
  set title(t) {
    t != null ? this.setAttribute("title", t) : this.removeAttribute("title");
  }
  /**
   * Getter/setter per attributo 'aria-label'. Default: ''
   */
  get ariaLabel() {
    return this.getAttribute("aria-label") || "";
  }
  set ariaLabel(t) {
    t != null ? this.setAttribute("aria-label", t) : this.removeAttribute("aria-label");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, e, i3) {
    e !== i3 && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("title") || "", e = this.getAttribute("aria-label") || "";
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                span {
                    font-family: 'Open Sans', Arial, sans-serif;
                    font-size: 0.8rem;
                    color: #bfc9d1;
                    font-weight: 400;
                    letter-spacing: 0.02em;
                    display: inline-block;
                }
            </style>
            <span title="${t}" aria-label="${e}"><slot></slot></span>
        `;
  }
};
customElements.define("cam-ds-caption", s);

// node_modules/choose-a-movie-for-me-ds/dist/star.js
var s2 = {
  full: '<svg viewBox="0 0 24 24" width="24" height="24" fill="black" stroke="black" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9"/></svg>',
  empty: '<svg viewBox="0 0 24 24" width="24" height="24" fill="white" stroke="black" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9"/></svg>'
  // half sarà generato dinamicamente
};
var n = class extends HTMLElement {
  static get observedAttributes() {
    return ["fill", "value", "aria-label"];
  }
  /**
   * Getter/setter per attributo 'fill'. Default: 'full'
   */
  get fill() {
    return this.getAttribute("fill") || "full";
  }
  set fill(t) {
    t != null ? this.setAttribute("fill", t) : this.removeAttribute("fill");
  }
  /**
   * Getter/setter per attributo 'value'. Default: ''
   */
  get value() {
    return this.getAttribute("value") || "";
  }
  set value(t) {
    t != null ? this.setAttribute("value", t) : this.removeAttribute("value");
  }
  /**
   * Getter/setter per attributo 'aria-label'. Default: 'Star'
   */
  get ariaLabel() {
    return this.getAttribute("aria-label") || (this.value ? `Rating: ${this.value} out of 5` : "Star");
  }
  set ariaLabel(t) {
    t != null ? this.setAttribute("aria-label", t) : this.removeAttribute("aria-label");
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
    const t = this.getAttribute("fill") || "full", i3 = this.getAttribute("value") || "", a = this.getAttribute("aria-label") || (i3 ? `Rating: ${i3} out of 5` : "Star");
    let e = "";
    if (t === "half") {
      const l = `half-gradient-${Math.random().toString(36).substr(2, 9)}`;
      e = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="${l}"><stop offset="50%" stop-color="black"/><stop offset="50%" stop-color="white"/></linearGradient>
                </defs>
                <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9" fill="url(#${l})" stroke="black" stroke-width="1.5"/>
            </svg>`;
    } else
      e = s2[t] || s2.full;
    const r = this.getAttribute("aria-hidden") === "true" ? "true" : "false", o = this.getAttribute("title") || "";
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: inline-block;
          vertical-align: middle;
          font-family: 'Open Sans', Arial, sans-serif;
        }
        svg {
          display: block;
        }
      </style>
      <span role="img" aria-label="${a}" aria-hidden="${r}" title="${o}">${e}</span>
    `;
  }
};
customElements.define("cam-ds-star", n);

// node_modules/choose-a-movie-for-me-ds/dist/starList.js
var i2 = class extends HTMLElement {
  static get observedAttributes() {
    return ["value"];
  }
  /**
   * Getter/setter per attributo 'value'. Default: 0
   */
  get value() {
    return parseFloat(this.getAttribute("value")) || 0;
  }
  set value(t) {
    t != null ? this.setAttribute("value", t) : this.removeAttribute("value");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, e, s3) {
    e !== s3 && this.render();
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
    const t = parseFloat(this.getAttribute("value")) || 0;
    let e = Math.ceil(t / 2 * 2) / 2;
    const s3 = [];
    for (let a = 1; a <= 5; a++) {
      let l = "empty";
      e >= a ? l = "full" : e >= a - 0.5 && (l = "half"), s3.push(`<cam-ds-star fill="${l}"></cam-ds-star>`);
    }
    this.shadowRoot.innerHTML = `
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
        :host {
          display: inline-block;
          font-family: 'Open Sans', Arial, sans-serif;
        }
        .star-list {
          display: flex;
          gap: 2px;
        }
      </style>
      <div class="star-list">
        ${s3.join("")}
      </div>
    `;
  }
};
customElements.define("cam-ds-star-list", i2);

// node_modules/choose-a-movie-for-me-ds/dist/movieInfo.js
var n2 = class extends HTMLElement {
  static get observedAttributes() {
    return ["title", "genres", "duration", "rating", "poster", "poster-alt"];
  }
  /**
   * Getter/setter per attributo 'title'. Default: 'Titolo film'
   */
  get titleAttr() {
    return this.getAttribute("title") || "Titolo film";
  }
  set titleAttr(t) {
    t != null ? this.setAttribute("title", t) : this.removeAttribute("title");
  }
  /**
   * Getter/setter per attributo 'genres'. Default: ''
   */
  get genres() {
    return this.getAttribute("genres") || "";
  }
  set genres(t) {
    t != null ? this.setAttribute("genres", t) : this.removeAttribute("genres");
  }
  /**
   * Getter/setter per attributo 'duration'. Default: ''
   */
  get duration() {
    return this.getAttribute("duration") || "";
  }
  set duration(t) {
    t != null ? this.setAttribute("duration", t) : this.removeAttribute("duration");
  }
  /**
   * Getter/setter per attributo 'rating'. Default: undefined
   */
  get rating() {
    return this.getAttribute("rating");
  }
  set rating(t) {
    t != null ? this.setAttribute("rating", t) : this.removeAttribute("rating");
  }
  /**
   * Getter/setter per attributo 'poster'. Default: ''
   */
  get poster() {
    return this.getAttribute("poster") || "";
  }
  set poster(t) {
    t != null ? this.setAttribute("poster", t) : this.removeAttribute("poster");
  }
  /**
   * Getter/setter per attributo 'poster-alt'. Default: 'Poster film'
   */
  get posterAlt() {
    return this.getAttribute("poster-alt") || this.titleAttr || "Poster film";
  }
  set posterAlt(t) {
    t != null ? this.setAttribute("poster-alt", t) : this.removeAttribute("poster-alt");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, e, i3) {
    e !== i3 && this.render();
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
    const t = this.getAttribute("title") || "Titolo film", e = this.getAttribute("genres") || "", i3 = this.getAttribute("duration") || "", s3 = this.getAttribute("rating"), r = this.getAttribute("poster") || "", o = this.getAttribute("poster-alt") || t;
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: 'Open Sans', Arial, sans-serif;
        }
        .movie-info-layout {
          display: flex;
          flex-direction: row;
          gap: 32px;
          align-items: flex-start;
        }
        .poster-col {
          flex: 0 0 auto;
          max-width: 220px;
        }
        .info-col {
          flex: 1 1 0%;
          min-width: 0;
        }
        .meta {
          margin-top: 4px;
          display: flex;
          gap: 12px;
        }
        .plot {
          margin-top: 12px;
        }
        .rating {
          margin-top: 10px;
          display: inline-block;
          background: #eaf6fb;
          color: #2b3442;
          border-radius: 8px;
          padding: 6px 16px;
          font-weight: bold;
          box-shadow: 0 1px 2px rgba(0,0,0,0.03);
        }
        @media (max-width: 700px) {
          .movie-info-layout {
            flex-direction: column;
            gap: 16px;
          }
          .poster-col {
            max-width: 100%;
            margin: 0 auto;
          }
        }
      </style>
      <article aria-label="Informazioni film">
        <div class="movie-info-layout">
          <div class="poster-col">
            <cam-ds-poster src="${r}" alt="${o}" width="200" height="300"></cam-ds-poster>
          </div>
          <div class="info-col">
            <cam-ds-heading level="2">${t}</cam-ds-heading>
            <div class="meta">
              <cam-ds-caption>${e}</cam-ds-caption>
              <cam-ds-caption>${i3}</cam-ds-caption>
            </div>
            <div class="plot"><slot></slot></div>
            ${s3 ? `<div class="rating"><cam-ds-caption>Voto medio: ${s3}</cam-ds-caption><br/><cam-ds-star-list value="${s3}"></cam-ds-star-list></div>` : ""}
          </div>
        </div>
      </article>
    `;
  }
};
customElements.define("cam-ds-movie-info", n2);

// src/app/pages/movie/movie.component.ts
function MovieComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "cam-ds-loader");
    \u0275\u0275domElementEnd();
  }
}
function MovieComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "p", 3);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function MovieComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "div", 4)(3, "div", 5)(4, "cam-ds-movie-info", 6)(5, "p");
    \u0275\u0275text(6, "Dom Cobb \xE8 un ladro specializzato nell'estrazione: ruba i segreti dal subconscio durante il sonno, quando la mente \xE8 pi\xF9 vulnerabile.");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "div", 7);
    \u0275\u0275text(8, "Pippo");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "div", 8);
    \u0275\u0275text(10, "Pluto");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Movie ID: ", ctx_r0.movieId());
  }
}
var MovieComponent = class _MovieComponent {
  activatedRoute = inject(ActivatedRoute);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  movieId = signal("", ...ngDevMode ? [{ debugName: "movieId" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const movieId = params["id"];
      if (!movieId) {
        this.errorMessage.set("ID del film non trovato nei parametri");
        return;
      }
      this.movieId.set(movieId);
      this.loadMovie(movieId);
    });
  }
  loadMovie(id) {
    this.loading.set(true);
    this.errorMessage.set("");
    setTimeout(() => {
      console.log(`Movie loaded: ${id}`);
      this.loading.set(false);
    }, 500);
  }
  static \u0275fac = function MovieComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovieComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovieComponent, selectors: [["app-movie"]], decls: 4, vars: 1, consts: [[1, "movie-container"], [1, "loader-container"], [1, "error-container"], [1, "error-message"], [1, "movie-content"], [1, "first"], ["title", "Inception", "genres", "Azione, Fantascienza", "duration", "148 min", "rating", "8.7", "poster", "/inception.jpg", "poster-alt", "Poster Inception"], [1, "second"], [1, "third"]], template: function MovieComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, MovieComponent_Conditional_1_Template, 2, 0, "div", 1)(2, MovieComponent_Conditional_2_Template, 3, 1, "div", 2)(3, MovieComponent_Conditional_3_Template, 11, 1);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.errorMessage() ? 2 : ctx.movieId() ? 3 : -1);
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 100vh;\n}\n.movie-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n}\n.movie-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0%;\n  min-height: 0;\n  height: 100%;\n}\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .movie-content[_ngcontent-%COMP%] {\n    min-height: 0;\n    height: auto;\n    flex: 1;\n    min-height: auto;\n    height: auto;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=movie.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovieComponent, [{
    type: Component,
    args: [{ selector: "app-movie", imports: [], template: `
    <div class="movie-container">
      @if (loading()) {
        <div class="loader-container">
          <cam-ds-loader></cam-ds-loader>
        </div>
      } @else if (errorMessage()) {
        <div class="error-container">
          <p class="error-message">{{ errorMessage() }}</p>
        </div>
      } @else if (movieId()) {
         <p>Movie ID: {{ movieId() }}</p>
        <div class="movie-content">
          <div class="first">
            <cam-ds-movie-info 
            title="Inception" 
            genres="Azione, Fantascienza" 
            duration="148 min" 
            rating="8.7" 
            poster="/inception.jpg" 
            poster-alt="Poster Inception">
            <p>Dom Cobb \xE8 un ladro specializzato nell'estrazione: ruba i segreti dal subconscio durante il sonno, quando la mente \xE8 pi\xF9 vulnerabile.</p>
        </cam-ds-movie-info>
          </div>
           <div class="second">Pippo</div>
           <div class="third">Pluto</div>
         
          
        </div>
      }
    </div>
  `, changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], styles: ["/* src/app/pages/movie/movie.component.css */\n:host {\n  display: block;\n  height: 100vh;\n}\n.movie-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 0;\n}\n.movie-content {\n  display: flex;\n  flex: 1 1 0%;\n  min-height: 0;\n  height: 100%;\n}\n.loader-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .movie-content {\n    min-height: 0;\n    height: auto;\n    flex: 1;\n    min-height: auto;\n    height: auto;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=movie.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovieComponent, { className: "MovieComponent", filePath: "src/app/pages/movie/movie.component.ts", lineNumber: 45 });
})();
export {
  MovieComponent
};
//# sourceMappingURL=chunk-T4LXR44K.js.map
