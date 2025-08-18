import {
  RouterOutlet
} from "./chunk-UILARDYF.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-5GGIGRC6.js";
import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.component.ts
var SuggestionMovieComponent = class _SuggestionMovieComponent {
  static \u0275fac = function SuggestionMovieComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuggestionMovieComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuggestionMovieComponent, selectors: [["app-suggestion-movie"]], decls: 1, vars: 0, template: function SuggestionMovieComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestionMovieComponent, [{
    type: Component,
    args: [{
      selector: "app-suggestion-movie",
      imports: [RouterOutlet],
      template: `<router-outlet/>`,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuggestionMovieComponent, { className: "SuggestionMovieComponent", filePath: "src/app/pages/suggestion/suggestion-movie/suggestion-movie.component.ts", lineNumber: 10 });
})();
export {
  SuggestionMovieComponent
};
//# sourceMappingURL=chunk-ZEBKT6AX.js.map
