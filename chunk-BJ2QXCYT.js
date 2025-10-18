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

// node_modules/choose-a-movie-for-me-ds/dist/typography-heading.js
var i = class extends HTMLElement {
  static get observedAttributes() {
    return ["level"];
  }
  /**
   * Getter/setter per attributo 'level'. Default: '1'
   */
  get level() {
    return this.getAttribute("level") || "1";
  }
  set level(e) {
    e != null ? this.setAttribute("level", e) : this.removeAttribute("level");
  }
  /**
   * Osserva cambiamenti agli attributi e aggiorna lo stato.
   */
  attributeChangedCallback(e, t, s) {
    t !== s && this.render();
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
    const e = this.getAttribute("level") || "1", t = `h${e}`;
    this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
                h1, h2, h3, h4, h5, h6 {
                    font-family: 'Open Sans', Arial, sans-serif;
                    font-weight: 700;
                    margin: 0 0 0.5em 0;
                    color: inherit;
                }
                h1 { font-size: 2.5rem; }
                h2 { font-size: 2rem; }
                h3 { font-size: 1.75rem; }
                h4 { font-size: 1.5rem; }
                h5 { font-size: 1.25rem; }
                h6 { font-size: 1rem; }
            </style>
            <${t} aria-level="${e}"><slot></slot></${t}>
        `;
  }
};
customElements.define("cam-ds-heading", i);
//# sourceMappingURL=chunk-BJ2QXCYT.js.map
