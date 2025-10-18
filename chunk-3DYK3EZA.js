import "./chunk-BJ2QXCYT.js";
import {
  b,
  c,
  d,
  h,
  n,
  u
} from "./chunk-XCLE2RQI.js";
import {
  TMDBService,
  TmdbSearchService,
  VideoType
} from "./chunk-MWXV3S6X.js";
import {
  ActivatedRoute,
  AsyncPipe,
  Router
} from "./chunk-EWKMVYH6.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Pipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-XDCJZM2Q.js";
import "./chunk-CZJLB7T5.js";

// node_modules/choose-a-movie-for-me-ds/dist/availability.js
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
                .availability {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    background: transparent;
                    padding: 0;
                }
                
                ::slotted(cam-ds-billing-type) {
                    /* Stili per i billing-type all'interno del componente */
                }
            </style>
            <section class="availability" aria-label="Disponibilit\xE0">
                <slot></slot>
            </section>
        `;
  }
};
customElements.define("cam-ds-availability", e);

// node_modules/choose-a-movie-for-me-ds/dist/typography-label.js
var r = class extends HTMLElement {
  static get observedAttributes() {
    return ["aria-label", "title", "for"];
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
   * Getter/setter per attributo 'title'. Default: ''
   */
  get title() {
    return this.getAttribute("title") || "";
  }
  set title(t) {
    t != null ? this.setAttribute("title", t) : this.removeAttribute("title");
  }
  /**
   * Getter/setter per attributo 'for'. Default: ''
   */
  get htmlFor() {
    return this.getAttribute("for") || "";
  }
  set htmlFor(t) {
    t != null ? this.setAttribute("for", t) : this.removeAttribute("for");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, e2, i3) {
    e2 !== i3 && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("aria-label") || "", e2 = this.getAttribute("title") || "";
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                label {
                    font-family: 'Open Sans', Arial, sans-serif;
                    font-size: 0.95rem;
                    font-weight: 500;
                    color: inherit;
                    margin-bottom: 0.25em;
                    display: inline-block;
                }
            </style>
            <label id="label" for="${this.getAttribute("for") || ""}" aria-label="${t}" title="${e2}"><slot></slot></label>
        `;
  }
};
customElements.define("cam-ds-label", r);

// node_modules/choose-a-movie-for-me-ds/dist/billingType.js
var o = class extends HTMLElement {
  static get observedAttributes() {
    return ["type", "selected"];
  }
  /**
   * Getter/setter per attributo 'type'. Default: ''
   */
  get type() {
    return this.getAttribute("type") || "";
  }
  set type(t) {
    t != null ? this.getAttribute("type") !== t && this.setAttribute("type", t) : this.hasAttribute("type") && this.removeAttribute("type");
  }
  /**
   * Getter/setter per attributo 'selected'. Default: false
   */
  get selected() {
    return this.hasAttribute("selected");
  }
  set selected(t) {
    t ? this.hasAttribute("selected") || this.setAttribute("selected", "") : this.hasAttribute("selected") && this.removeAttribute("selected"), this.shadowRoot && this.render();
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, s5, e2) {
    this.shadowRoot && s5 !== e2 && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this._onFocus = this._onFocus.bind(this), this._onBlur = this._onBlur.bind(this);
  }
  connectedCallback() {
    this.render(), this._addFocusListeners(), this.addEventListener("focus", this._onFocus), this.addEventListener("blur", this._onBlur);
  }
  disconnectedCallback() {
    this._removeFocusListeners(), this.removeEventListener("focus", this._onFocus), this.removeEventListener("blur", this._onBlur);
  }
  _addFocusListeners() {
    const t = this.shadowRoot && this.shadowRoot.querySelector(".row");
    t && (t.addEventListener("focus", this._onFocus), t.addEventListener("blur", this._onBlur));
  }
  _removeFocusListeners() {
    const t = this.shadowRoot && this.shadowRoot.querySelector(".row");
    t && (t.removeEventListener("focus", this._onFocus), t.removeEventListener("blur", this._onBlur));
  }
  _onFocus() {
    this.setAttribute("focused", "");
  }
  _onBlur() {
    this.removeAttribute("focused");
  }
  render() {
    this._removeFocusListeners();
    const t = this.getAttribute("type") || "", s5 = this.hasAttribute("selected");
    this.shadowRoot.querySelector(".row") || (this.shadowRoot.innerHTML = `
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                    .row {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        padding: 4px 0 4px 8px;
                        min-height: 28px;
                        border-radius: 6px;
                    }
                    .label {
                        color: #bfc9d1;
                        font-family: 'Open Sans', Arial, sans-serif;
                        font-size: 1rem;
                        flex: 1 1 auto;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    ::slotted(*) {
                        margin-left: 4px;
                    }
                </style>
                <div class="row" role="option" tabindex="0">
                    <span class="label"></span>
                    <slot></slot>
                </div>
            `);
    const e2 = this.shadowRoot.querySelector(".row"), i3 = this.shadowRoot.querySelector(".label");
    e2 && (e2.setAttribute("aria-selected", s5 ? "true" : "false"), e2.style.background = s5 ? "rgb(58, 125, 183)" : "rgb(43, 52, 66)"), i3 && (i3.textContent = t, i3.setAttribute("title", t)), this._addFocusListeners();
  }
};
customElements.define("cam-ds-billing-type", o);

// node_modules/choose-a-movie-for-me-ds/dist/loader.js
var i = class extends HTMLElement {
  static get observedAttributes() {
    return ["size", "speed"];
  }
  get size() {
    return this.getAttribute("size") || "64px";
  }
  set size(e2) {
    e2 ? this.setAttribute("size", e2) : this.removeAttribute("size"), this.shadowRoot && this.render();
  }
  get speed() {
    return this.getAttribute("speed") || "1s";
  }
  set speed(e2) {
    e2 ? this.setAttribute("speed", e2) : this.removeAttribute("speed"), this.shadowRoot && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback(e2, t, s5) {
    this.shadowRoot && t !== s5 && this.render();
  }
  render() {
    const e2 = this.size, t = this.speed;
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    width: ${e2};
                    height: ${e2};
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
var h2 = class extends HTMLElement {
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
    const t = this.getAttribute("src") || "", e2 = this.getAttribute("alt") || "", s5 = this.getAttribute("width") || "200", r2 = this.getAttribute("height") || "300", i3 = e2 ? "0" : "";
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
          <img src="${t}" alt="${e2}" width="${s5}" height="${r2}"${i3 ? ` tabindex="${i3}"` : ""} />
        </figure>
      </aside>
    `;
  }
};
customElements.define("cam-ds-poster", h2);

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
  attributeChangedCallback(t, e2, i3) {
    e2 !== i3 && this.render();
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const t = this.getAttribute("title") || "", e2 = this.getAttribute("aria-label") || "";
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
            <span title="${t}" aria-label="${e2}"><slot></slot></span>
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
var n2 = class extends HTMLElement {
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
    let e2 = "";
    if (t === "half") {
      const l = `half-gradient-${Math.random().toString(36).substr(2, 9)}`;
      e2 = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="${l}"><stop offset="50%" stop-color="black"/><stop offset="50%" stop-color="white"/></linearGradient>
                </defs>
                <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18.5 5.5,22 7,14.5 2,9.5 9,9" fill="url(#${l})" stroke="black" stroke-width="1.5"/>
            </svg>`;
    } else
      e2 = s2[t] || s2.full;
    const r2 = this.getAttribute("aria-hidden") === "true" ? "true" : "false", o2 = this.getAttribute("title") || "";
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
      <span role="img" aria-label="${a}" aria-hidden="${r2}" title="${o2}">${e2}</span>
    `;
  }
};
customElements.define("cam-ds-star", n2);

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
  attributeChangedCallback(t, e2, s5) {
    e2 !== s5 && this.render();
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
    let e2 = Math.ceil(t / 2 * 2) / 2;
    const s5 = [];
    for (let a = 1; a <= 5; a++) {
      let l = "empty";
      e2 >= a ? l = "full" : e2 >= a - 0.5 && (l = "half"), s5.push(`<cam-ds-star fill="${l}"></cam-ds-star>`);
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
        ${s5.join("")}
      </div>
    `;
  }
};
customElements.define("cam-ds-star-list", i2);

// node_modules/choose-a-movie-for-me-ds/dist/movieInfo.js
var n3 = class extends HTMLElement {
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
  attributeChangedCallback(t, e2, i3) {
    e2 !== i3 && this.render();
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
    const t = this.getAttribute("title") || "Titolo film", e2 = this.getAttribute("genres") || "", i3 = this.getAttribute("duration") || "", s5 = this.getAttribute("rating"), r2 = this.getAttribute("poster") || "", o2 = this.getAttribute("poster-alt") || t;
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
            <cam-ds-poster src="${r2}" alt="${o2}" width="200" height="300"></cam-ds-poster>
          </div>
          <div class="info-col">
            <cam-ds-heading level="2">${t}</cam-ds-heading>
            <div class="meta">
              <cam-ds-caption>${e2}</cam-ds-caption>
              <cam-ds-caption>${i3}</cam-ds-caption>
            </div>
            <div class="plot"><slot></slot></div>
            ${s5 ? `<div class="rating"><cam-ds-caption>Voto medio: ${s5}</cam-ds-caption><br/><cam-ds-star-list value="${s5}"></cam-ds-star-list></div>` : ""}
          </div>
        </div>
      </article>
    `;
  }
};
customElements.define("cam-ds-movie-info", n3);

// node_modules/choose-a-movie-for-me-ds/dist/avatar.js
var c2 = class extends d(c(n)) {
  static config = {
    observedAttributes: ["src", "alt", "name", "size"],
    defaultAttributes: {
      src: "",
      alt: "",
      name: "",
      size: "medium"
    },
    events: [
      { selector: "img", event: "error", handler: "handleError" },
      { selector: "img", event: "load", handler: "handleLoad" }
    ]
  };
  static cssClass = "cam-ds-avatar";
  static defaultRole = "img";
  static baseStyles = b(
    u.base,
    `
            :host {
                --avatar-size: 64px;
                --avatar-border-radius: ${h.radius.round};
                --avatar-background: var(--ds-color-neutral-200, #eee);
                display: inline-block;
            }
            
            .avatar {
                width: var(--avatar-size);
                height: var(--avatar-size);
                border-radius: var(--avatar-border-radius);
                overflow: hidden;
                background: var(--avatar-background);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                font-family: ${h.typography.fontFamily};
            }
            
            .placeholder {
                width: 100%;
                height: 100%;
                display: block;
                opacity: 0.7;
            }
            
            /* Size variants */
            :host([size="small"]) {
                --avatar-size: 32px;
            }
            
            :host([size="large"]) {
                --avatar-size: 96px;
            }
            
            :host([size="xlarge"]) {
                --avatar-size: 128px;
            }
            
            /* Loading state */
            :host([loading]) .avatar::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(255, 255, 255, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                animation: pulse 1.5s ease-in-out infinite;
            }
            
            @keyframes pulse {
                0%, 100% { opacity: 0.8; }
                50% { opacity: 0.4; }
            }
        `
  );
  connectedCallback() {
    if (this.hasAttribute("role") || this.setAttribute("role", "img"), !this.hasAttribute("aria-label")) {
      const a = this.alt || this.name || "Avatar";
      this.setAttribute("aria-label", a);
    }
    super.connectedCallback();
  }
  render() {
    this.hasAttribute("role") || this.setAttribute("role", "img"), super.render();
  }
  getTemplate() {
    const a = this.src || "/person-placeholder.svg";
    let t, e2;
    return this.hasAttribute("alt") && this.alt !== "" ? (t = this.alt, e2 = this.alt) : this.name ? (t = this.name, e2 = this.name) : (t = "Avatar", e2 = "Avatar"), `
            <span class="avatar">
                <img 
                    src="${a}" 
                    alt="${t}" 
                    aria-label="${e2}"
                    ${this.src ? "" : 'class="placeholder"'} />
            </span>
        `;
  }
  handleError(a) {
    a.target.src = "/person-placeholder.svg", a.target.classList.add("placeholder"), this.dispatchEvent(new CustomEvent("error", {
      detail: {
        message: "Avatar image not loaded",
        src: this.src
      },
      bubbles: true,
      composed: true
    }));
  }
  handleLoad(a) {
    a.target.classList.remove("placeholder"), this.dispatchEvent(new CustomEvent("load", {
      detail: {
        src: this.src
      },
      bubbles: true,
      composed: true
    }));
  }
};
customElements.define("cam-ds-avatar", c2);

// node_modules/choose-a-movie-for-me-ds/dist/person.js
var s3 = class extends HTMLElement {
  static get observedAttributes() {
    return ["name", "avatar", "jobtitle"];
  }
  /**
   * Getter/setter per attributo 'name'. Default: ''
   */
  get name() {
    return this.getAttribute("name") || "";
  }
  set name(t) {
    t != null ? this.setAttribute("name", t) : this.removeAttribute("name");
  }
  /**
   * Getter/setter per attributo 'avatar'. Default: ''
   */
  get avatar() {
    return this.getAttribute("avatar") || "";
  }
  set avatar(t) {
    t != null ? this.setAttribute("avatar", t) : this.removeAttribute("avatar");
  }
  /**
   * Getter/setter per attributo 'jobtitle'. Default: ''
   */
  get jobtitle() {
    return this.getAttribute("jobtitle") || "";
  }
  set jobtitle(t) {
    t != null ? this.setAttribute("jobtitle", t) : this.removeAttribute("jobtitle");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, i3, e2) {
    i3 !== e2 && this.render();
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
    const t = this.getAttribute("name") || "", i3 = this.getAttribute("avatar") || "", e2 = this.getAttribute("jobtitle") || "";
    let a = t && t.trim() !== "" ? t : "Avatar";
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                .person {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-family: 'Open Sans', Arial, sans-serif;
                }
                .info {
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                }
                .name {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #232b37;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 160px;
                }
                .job {
                    font-size: 0.85rem;
                    color: #6c757d;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 160px;
                }
                cam-ds-caption {
                    max-width: 160px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            </style>
            <div class="person">
                <cam-ds-avatar src="${i3}" name="${t}" alt="${a}"></cam-ds-avatar>
                <div class="info">
                    <span class="name" title="${t}">${t}</span>
                    ${e2 ? `<cam-ds-caption title="${e2}">${e2}</cam-ds-caption>` : ""}
                </div>
            </div>
        `;
  }
};
customElements.define("cam-ds-person", s3);

// node_modules/choose-a-movie-for-me-ds/dist/peopleList.js
var s4 = class extends HTMLElement {
  static get observedAttributes() {
    return ["title"];
  }
  /**
   * Getter/setter per attributo 'title'. Default: 'Cast'
   */
  get titleAttr() {
    return this.getAttribute("title") || "Cast";
  }
  set titleAttr(t) {
    t != null ? this.setAttribute("title", t) : this.removeAttribute("title");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(t, e2, i3) {
    e2 !== i3 && this.render();
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
    const t = this.getAttribute("title") || "Cast";
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                .container {
                    background: #fff;
                    border-radius: 12px;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
                    padding: 24px 20px 20px 20px;
                    margin: 0 auto;
                    max-width: 420px;
                }
                .list {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    background: transparent;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
                .title {
                    margin-bottom: 8px;
                }
                cam-ds-heading {
                    color: #232b37;
                }
                ::slotted(cam-ds-person) {
                    display: block;
                }
            </style>
            <div class="container">
                <div class="title">
                    <cam-ds-heading level="3">${t}</cam-ds-heading>
                </div>
                <ul class="list" role="list" aria-label="Elenco persone">
                    <slot></slot>
                </ul>
            </div>
        `;
  }
};
customElements.define("cam-ds-people-list", s4);

// node_modules/choose-a-movie-for-me-ds/dist/youtubePlayer.js
var n4 = class extends HTMLElement {
  static get observedAttributes() {
    return ["video-id", "title", "width", "height", "autoplay", "muted"];
  }
  /**
   * Getter/setter per attributo 'video-id'. Default: ''
   */
  get videoId() {
    return this.getAttribute("video-id") || "";
  }
  set videoId(t) {
    t != null ? this.setAttribute("video-id", t) : this.removeAttribute("video-id");
  }
  /**
   * Getter/setter per attributo 'title'. Default: 'Video YouTube'
   */
  get titleAttr() {
    return this.getAttribute("title") || "Video YouTube";
  }
  set titleAttr(t) {
    t != null ? this.setAttribute("title", t) : this.removeAttribute("title");
  }
  /**
   * Getter/setter per attributo 'width'. Default: '560'
   */
  get width() {
    return this.getAttribute("width") || "560";
  }
  set width(t) {
    t != null ? this.setAttribute("width", t) : this.removeAttribute("width");
  }
  /**
   * Getter/setter per attributo 'height'. Default: '315'
   */
  get height() {
    return this.getAttribute("height") || "315";
  }
  set height(t) {
    t != null ? this.setAttribute("height", t) : this.removeAttribute("height");
  }
  /**
   * Getter/setter per attributo 'autoplay'. Default: false
   */
  get autoplay() {
    return this.hasAttribute("autoplay");
  }
  set autoplay(t) {
    t ? this.setAttribute("autoplay", "") : this.removeAttribute("autoplay");
  }
  /**
   * Getter/setter per attributo 'muted'. Default: false
   */
  get muted() {
    return this.hasAttribute("muted");
  }
  set muted(t) {
    t ? this.setAttribute("muted", "") : this.removeAttribute("muted");
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" }), this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  connectedCallback() {
    this.render(), this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    this.removeEventListener("keydown", this.handleKeyDown);
  }
  attributeChangedCallback() {
    this.render();
  }
  handleKeyDown(t) {
    if (t.target === this || this.shadowRoot.activeElement === this.shadowRoot.querySelector("iframe"))
      switch (t.key) {
        case " ":
        case "k":
          t.preventDefault();
          break;
        case "f":
          t.preventDefault();
          break;
        case "m":
          t.preventDefault();
          break;
      }
  }
  render() {
    const t = this.getAttribute("video-id") || "", s5 = this.getAttribute("title") || "Video YouTube", e2 = this.getAttribute("width") || "560", i3 = this.getAttribute("height") || "315", o2 = this.hasAttribute("autoplay") ? "1" : "0", r2 = this.hasAttribute("muted") ? "1" : "0";
    if (!t) {
      this.shadowRoot.innerHTML = `
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                    
                    :host {
                        display: block;
                        font-family: 'Open Sans', sans-serif;
                    }
                    
                    .error {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: ${e2}px;
                        height: ${i3}px;
                        background-color: #f5f5f5;
                        border: 2px dashed #ccc;
                        color: #666;
                        font-size: 14px;
                        text-align: center;
                        border-radius: 4px;
                    }
                    
                    .error:focus {
                        outline: 2px solid #4285f4;
                        outline-offset: 2px;
                    }
                </style>
                <div class="error" role="alert" tabindex="0" aria-label="Errore: ID video YouTube mancante">
                    Inserire un ID video YouTube valido
                </div>
            `;
      return;
    }
    const a = `https://www.youtube.com/embed/${t}?autoplay=${o2}&mute=${r2}&rel=0&modestbranding=1`;
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                :host {
                    display: block;
                    font-family: 'Open Sans', sans-serif;
                }
                .youtube-container {
                    position: relative;
                    display: inline-block;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    background-color: #000;
                }
                .youtube-container:focus-within {
                    outline: 2px solid #4285f4;
                    outline-offset: 2px;
                }
                iframe {
                    display: block;
                    border: none;
                    width: 100%;
                    height: 100%;
                }
                .sr-only {
                    position: absolute;
                    width: 1px;
                    height: 1px;
                    padding: 0;
                    margin: -1px;
                    overflow: hidden;
                    clip: rect(0, 0, 0, 0);
                    white-space: nowrap;
                    border: 0;
                }
            </style>
            <div class="youtube-container" style="width: ${e2}px; height: ${i3}px;">
                <span class="sr-only">
                    Video YouTube: ${t}. 
                    Scorciatoie da tastiera: 
                    Spazio o K per play/pausa, 
                    F per schermo intero, 
                    M per silenziare/riattivare audio.
                </span>
                <iframe
                    width="${e2}"
                    height="${i3}"
                    src="${a}"
                    title="${s5}"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    tabindex="0"
                    aria-label="Player video YouTube: ${t}"
                ></iframe>
            </div>
        `;
  }
};
customElements.define("cam-ds-youtube-player", n4);

// src/app/pages/movie/movie.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.provider_id;
function MovieComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275domElement(1, "cam-ds-loader");
    \u0275\u0275domElementEnd();
  }
}
function MovieComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "p", 6);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function MovieComponent_Conditional_4_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "cam-ds-person", 10);
  }
  if (rf & 2) {
    const person_r2 = ctx.$implicit;
    \u0275\u0275domProperty("name", person_r2.name)("jobtitle", person_r2.character);
  }
}
function MovieComponent_Conditional_4_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "cam-ds-person", 10);
  }
  if (rf & 2) {
    const person_r3 = ctx.$implicit;
    \u0275\u0275domProperty("name", person_r3.name)("jobtitle", person_r3.job);
  }
}
function MovieComponent_Conditional_4_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "cam-ds-provider");
    \u0275\u0275pipe(1, "providerLogoPath");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const provider_r4 = ctx.$implicit;
    \u0275\u0275attribute("src", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, provider_r4.logo_path)))("alt", provider_r4.provider_name);
  }
}
function MovieComponent_Conditional_4_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "cam-ds-provider");
    \u0275\u0275pipe(1, "providerLogoPath");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const provider_r5 = ctx.$implicit;
    \u0275\u0275attribute("src", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, provider_r5.logo_path)))("alt", provider_r5.provider_name);
  }
}
function MovieComponent_Conditional_4_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "cam-ds-provider");
    \u0275\u0275pipe(1, "providerLogoPath");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const provider_r6 = ctx.$implicit;
    \u0275\u0275attribute("src", \u0275\u0275pipeBind1(2, 4, \u0275\u0275pipeBind1(1, 2, provider_r6.logo_path)))("alt", provider_r6.provider_name);
  }
}
function MovieComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3)(1, "div", 7)(2, "cam-ds-movie-info");
    \u0275\u0275pipe(3, "posterPath");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(7, "div", 8)(8, "cam-ds-people-list", 9);
    \u0275\u0275repeaterCreate(9, MovieComponent_Conditional_4_For_10_Template, 1, 2, "cam-ds-person", 10, _forTrack0);
    \u0275\u0275pipe(11, "castCutter");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "cam-ds-people-list", 11);
    \u0275\u0275repeaterCreate(13, MovieComponent_Conditional_4_For_14_Template, 1, 2, "cam-ds-person", 10, _forTrack0);
    \u0275\u0275pipe(15, "crewSorterCutter");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 12);
    \u0275\u0275domElement(17, "cam-ds-youtube-player", 13);
    \u0275\u0275domElementStart(18, "cam-ds-availability")(19, "cam-ds-billing-type", 14);
    \u0275\u0275repeaterCreate(20, MovieComponent_Conditional_4_For_21_Template, 3, 6, "cam-ds-provider", null, _forTrack1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "cam-ds-billing-type", 15);
    \u0275\u0275repeaterCreate(23, MovieComponent_Conditional_4_For_24_Template, 3, 6, "cam-ds-provider", null, _forTrack1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(25, "cam-ds-billing-type", 16);
    \u0275\u0275repeaterCreate(26, MovieComponent_Conditional_4_For_27_Template, 3, 6, "cam-ds-provider", null, _forTrack1);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275attribute("title", (tmp_1_0 = ctx_r0.movie()) == null ? null : tmp_1_0.title)("genres", ctx_r0.movieGenres())("duration", ctx_r0.movieRuntime())("rating", (tmp_4_0 = ctx_r0.movie()) == null ? null : tmp_4_0.vote_average)("poster", \u0275\u0275pipeBind1(4, 10, \u0275\u0275pipeBind1(3, 8, (tmp_5_0 = ctx_r0.movie()) == null ? null : tmp_5_0.poster_path)))("poster-alt", (tmp_6_0 = ctx_r0.movie()) == null ? null : tmp_6_0.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_7_0 = ctx_r0.movie()) == null ? null : tmp_7_0.overview);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(11, 12, (tmp_8_0 = ctx_r0.movie()) == null ? null : tmp_8_0.credits == null ? null : tmp_8_0.credits.cast));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(15, 14, (tmp_9_0 = ctx_r0.movie()) == null ? null : tmp_9_0.credits == null ? null : tmp_9_0.credits.crew));
    \u0275\u0275advance(4);
    \u0275\u0275attribute("video-id", ctx_r0.movieTrailerId());
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_11_0 = ctx_r0.movie()) == null ? null : tmp_11_0["watch/providers"] == null ? null : tmp_11_0["watch/providers"].results == null ? null : (tmp_11_0 = tmp_11_0["watch/providers"].results[ctx_r0.region()]) == null ? null : tmp_11_0.flatrate);
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_12_0 = ctx_r0.movie()) == null ? null : tmp_12_0["watch/providers"] == null ? null : tmp_12_0["watch/providers"].results == null ? null : (tmp_12_0 = tmp_12_0["watch/providers"].results[ctx_r0.region()]) == null ? null : tmp_12_0.rent);
    \u0275\u0275advance(3);
    \u0275\u0275repeater((tmp_13_0 = ctx_r0.movie()) == null ? null : tmp_13_0["watch/providers"] == null ? null : tmp_13_0["watch/providers"].results == null ? null : (tmp_13_0 = tmp_13_0["watch/providers"].results[ctx_r0.region()]) == null ? null : tmp_13_0.buy);
  }
}
var PosterPathPipe = class _PosterPathPipe {
  tmdbService;
  constructor(tmdbService) {
    this.tmdbService = tmdbService;
  }
  transform(poster_path) {
    return this.tmdbService.getPosterUrl(poster_path);
  }
  static \u0275fac = function PosterPathPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PosterPathPipe)(\u0275\u0275directiveInject(TMDBService, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "posterPath", type: _PosterPathPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PosterPathPipe, [{
    type: Pipe,
    args: [{ name: "posterPath" }]
  }], () => [{ type: TMDBService }], null);
})();
var CastCutterPipe = class _CastCutterPipe {
  transform(cast) {
    return cast ? cast.slice(0, 5) : void 0;
  }
  static \u0275fac = function CastCutterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CastCutterPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "castCutter", type: _CastCutterPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CastCutterPipe, [{
    type: Pipe,
    args: [{ name: "castCutter" }]
  }], null, null);
})();
var CrewSorterCutterPipe = class _CrewSorterCutterPipe {
  transform(crew) {
    const mainRoles = ["Director", "Writer", "Screenplay"];
    return crew ? crew.filter((member) => mainRoles.includes(member.job)).sort((a, b2) => mainRoles.indexOf(a.job) - mainRoles.indexOf(b2.job)) : void 0;
  }
  static \u0275fac = function CrewSorterCutterPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CrewSorterCutterPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "crewSorterCutter", type: _CrewSorterCutterPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrewSorterCutterPipe, [{
    type: Pipe,
    args: [{ name: "crewSorterCutter" }]
  }], null, null);
})();
var ProviderLogoPathPipe = class _ProviderLogoPathPipe {
  tmdbService = inject(TMDBService);
  transform(logo_path) {
    return this.tmdbService.getProviderUrl(logo_path);
  }
  static \u0275fac = function ProviderLogoPathPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProviderLogoPathPipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "providerLogoPath", type: _ProviderLogoPathPipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProviderLogoPathPipe, [{
    type: Pipe,
    args: [{ name: "providerLogoPath" }]
  }], null, null);
})();
var MovieComponent = class _MovieComponent {
  elementRef = inject(ElementRef);
  tmdbService = inject(TMDBService);
  tmdbSearchService = inject(TmdbSearchService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  movieId = signal(0, ...ngDevMode ? [{ debugName: "movieId" }] : []);
  errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  movie = signal(null, ...ngDevMode ? [{ debugName: "movie" }] : []);
  movieGenres = computed(() => this.movie()?.genres.map((g) => g.name).join(", "), ...ngDevMode ? [{ debugName: "movieGenres" }] : []);
  movieRuntime = computed(() => this.movie()?.runtime + " min", ...ngDevMode ? [{ debugName: "movieRuntime" }] : []);
  moviePoster = computed(() => this.tmdbService.getPosterUrl(this.movie()?.poster_path), ...ngDevMode ? [{ debugName: "moviePoster" }] : []);
  movieTrailerId = computed(() => this.movie()?.videos?.results.find((video) => video.type === VideoType.Trailer)?.key, ...ngDevMode ? [{ debugName: "movieTrailerId" }] : []);
  backdropImage = computed(() => {
    const path = this.movie()?.backdrop_path;
    return path ? this.tmdbService.getBackdropUrl(path) : null;
  }, ...ngDevMode ? [{ debugName: "backdropImage" }] : []);
  region = signal("IT", ...ngDevMode ? [{ debugName: "region" }] : []);
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      const movieId = +params["id"];
      if (!movieId) {
        this.errorMessage.set("ID del film non trovato nei parametri");
        return;
      }
      this.movieId.set(movieId);
      this.loadMovie(movieId);
    });
  }
  async loadMovie(id) {
    this.loading.set(true);
    this.errorMessage.set("");
    try {
      const movie = await this.tmdbService.getMovieDetails(id);
      console.log(`Movie loaded: ${movie.title}`);
      this.movie.set(movie);
      console.log(movie);
    } catch (error) {
      this.errorMessage.set("Errore nel caricamento del film");
    } finally {
      this.loading.set(false);
    }
  }
  nextResult() {
    this.tmdbSearchService.getAnotherResult();
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  async goToSimilar() {
    const similar = await this.tmdbService.findSimilar(this.movieId());
    this.tmdbSearchService.setSearchResult(similar);
    this.tmdbSearchService.goToRandomResult();
  }
  static \u0275fac = function MovieComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MovieComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MovieComponent, selectors: [["app-movie"]], decls: 12, vars: 5, consts: [[1, "movie-container"], [1, "loader-container"], [1, "error-container"], [1, "movie-content"], [1, "footer-bar"], [3, "click"], [1, "error-message"], [1, "first"], [1, "second"], ["title", "Cast"], [3, "name", "jobtitle"], ["title", "Crew"], [1, "third"], ["autoplay", "false", "mute", "false", "responsive", "true", "error", "false", "aria-label", "Trailer"], ["type", "flatrate"], ["type", "rent"], ["type", "buy"]], template: function MovieComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275pipe(1, "async");
      \u0275\u0275conditionalCreate(2, MovieComponent_Conditional_2_Template, 2, 0, "div", 1)(3, MovieComponent_Conditional_3_Template, 3, 1, "div", 2)(4, MovieComponent_Conditional_4_Template, 28, 16, "div", 3);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "div", 4)(6, "button", 5);
      \u0275\u0275domListener("click", function MovieComponent_Template_button_click_6_listener() {
        return ctx.nextResult();
      });
      \u0275\u0275text(7, "Prossimo");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "button", 5);
      \u0275\u0275domListener("click", function MovieComponent_Template_button_click_8_listener() {
        return ctx.goHome();
      });
      \u0275\u0275text(9, "Home");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "button", 5);
      \u0275\u0275domListener("click", function MovieComponent_Template_button_click_10_listener() {
        return ctx.goToSimilar();
      });
      \u0275\u0275text(11, "Simili");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275styleProp("--bg-url", "url(" + \u0275\u0275pipeBind1(1, 3, ctx.backdropImage()) + ")");
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : ctx.errorMessage() ? 3 : ctx.movieId() ? 4 : -1);
    }
  }, dependencies: [AsyncPipe, PosterPathPipe, CastCutterPipe, CrewSorterCutterPipe, ProviderLogoPathPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  height: calc(100% - 48px);\n}\n.movie-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: var(--bg-url);\n  background-size: cover;\n  min-height: 0;\n  position: relative;\n}\n.movie-container[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 0;\n}\n.movie-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.movie-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 0%;\n  min-height: 0;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n.loader-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .movie-content[_ngcontent-%COMP%] {\n    min-height: 0;\n    height: auto;\n    flex: 1;\n    min-height: auto;\n    height: auto;\n    flex-direction: column;\n  }\n  .first[_ngcontent-%COMP%], \n   .second[_ngcontent-%COMP%], \n   .third[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=movie.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MovieComponent, [{
    type: Component,
    args: [{ selector: "app-movie", imports: [AsyncPipe, PosterPathPipe, CastCutterPipe, CrewSorterCutterPipe, ProviderLogoPathPipe], changeDetection: ChangeDetectionStrategy.OnPush, schemas: [CUSTOM_ELEMENTS_SCHEMA], template: `<div class="movie-container" [style.--bg-url]="'url(' + (backdropImage() | async) + ')'">
    @if (loading()) {
    <div class="loader-container">
        <cam-ds-loader></cam-ds-loader>
    </div>
    } @else if (errorMessage()) {
    <div class="error-container">
        <p class="error-message">{{ errorMessage() }}</p>
    </div>
    } @else if (movieId()) {
    <div class="movie-content">
        <div class="first">
            <cam-ds-movie-info [attr.title]="movie()?.title" [attr.genres]="movieGenres()"
                [attr.duration]="movieRuntime()" [attr.rating]="movie()?.vote_average"
                [attr.poster]="movie()?.poster_path|posterPath|async" [attr.poster-alt]="movie()?.title">
                <p>{{movie()?.overview}}</p>
            </cam-ds-movie-info>
        </div>
        <div class="second">
            <cam-ds-people-list title="Cast">
                @for (person of movie()?.credits?.cast|castCutter; track person.id) {
                <cam-ds-person [name]="person.name" [jobtitle]="person.character">
                </cam-ds-person>
                }
            </cam-ds-people-list>
            <cam-ds-people-list title="Crew">
                @for (person of movie()?.credits?.crew|crewSorterCutter; track person.id) {
                <cam-ds-person [name]="person.name" [jobtitle]="person.job">
                </cam-ds-person>
                }
            </cam-ds-people-list>
        </div>
        <div class="third">
            <cam-ds-youtube-player [attr.video-id]="movieTrailerId()" autoplay="false" mute="false" responsive="true"
                error="false" aria-label="Trailer"></cam-ds-youtube-player>

            <cam-ds-availability> <!-- buy, flatrate, rent->-->
                <cam-ds-billing-type type="flatrate">
                    @for (provider of movie()?.['watch/providers']?.results?.[region()]?.flatrate; track
                    provider.provider_id) {
                    <cam-ds-provider [attr.src]="provider.logo_path|providerLogoPath|async"
                        [attr.alt]="provider.provider_name"></cam-ds-provider>
                    }
                </cam-ds-billing-type>
                <cam-ds-billing-type type="rent">
                    @for (provider of movie()?.['watch/providers']?.results?.[region()]?.rent; track
                    provider.provider_id) {
                    <cam-ds-provider [attr.src]="provider.logo_path|providerLogoPath|async"
                        [attr.alt]="provider.provider_name"></cam-ds-provider>
                    }
                </cam-ds-billing-type>
                <cam-ds-billing-type type="buy">
                    @for (provider of movie()?.['watch/providers']?.results?.[region()]?.buy; track
                    provider.provider_id) {
                    <cam-ds-provider [attr.src]="provider.logo_path|providerLogoPath|async"
                        [attr.alt]="provider.provider_name"></cam-ds-provider>
                    }
                </cam-ds-billing-type>
            </cam-ds-availability>
        </div>
    </div>
    }
</div>
<div class="footer-bar">
    <button (click)="nextResult()">Prossimo</button>
    <button (click)="goHome()">Home</button>
    <button (click)="goToSimilar()">Simili</button>
</div>`, styles: ['/* src/app/pages/movie/movie.component.css */\n:host {\n  display: block;\n  height: calc(100% - 48px);\n}\n.movie-container {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: var(--bg-url);\n  background-size: cover;\n  min-height: 0;\n  position: relative;\n}\n.movie-container::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 0;\n}\n.movie-container > * {\n  position: relative;\n  z-index: 1;\n}\n.movie-content {\n  display: flex;\n  flex: 1 1 0%;\n  min-height: 0;\n  height: 100%;\n  width: 100%;\n  max-width: 100%;\n}\n.loader-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media (max-width: 600px) {\n  .movie-content {\n    min-height: 0;\n    height: auto;\n    flex: 1;\n    min-height: auto;\n    height: auto;\n    flex-direction: column;\n  }\n  .first,\n  .second,\n  .third {\n    width: 100%;\n    max-width: 100%;\n  }\n}\n/*# sourceMappingURL=movie.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MovieComponent, { className: "MovieComponent", filePath: "src/app/pages/movie/movie.component.ts", lineNumber: 61 });
})();
export {
  CastCutterPipe,
  CrewSorterCutterPipe,
  MovieComponent,
  PosterPathPipe,
  ProviderLogoPathPipe
};
//# sourceMappingURL=chunk-3DYK3EZA.js.map
