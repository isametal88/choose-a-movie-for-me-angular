import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-5GGIGRC6.js";
import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/genre/genre.component.ts
var GenreComponent = class _GenreComponent {
  static \u0275fac = function GenreComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GenreComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GenreComponent, selectors: [["app-genre"]], decls: 2, vars: 0, template: function GenreComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "genre works!");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=genre.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GenreComponent, [{
    type: Component,
    args: [{ selector: "app-genre", imports: [], template: `<p>genre works!</p>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/genre/genre.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=genre.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GenreComponent, { className: "GenreComponent", filePath: "src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/genre/genre.component.ts", lineNumber: 10 });
})();
export {
  GenreComponent
};
//# sourceMappingURL=chunk-FF74IVHI.js.map
