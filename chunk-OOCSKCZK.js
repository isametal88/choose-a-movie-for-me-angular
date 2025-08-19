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
//# sourceMappingURL=chunk-OOCSKCZK.js.map
