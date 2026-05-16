import "./chunk-FMZO32X5.js";
import "./chunk-XCLE2RQI.js";
import {
  RouterLink
} from "./chunk-3AWSOUXS.js";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtext
} from "./chunk-XMVZVPUM.js";
import "./chunk-CZJLB7T5.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-mode/suggestion-movie-mode.component.ts
var _c0 = () => ["surprise-me"];
var _c1 = () => ["ask-me"];
var SuggestionMovieModeComponent = class _SuggestionMovieModeComponent {
  static \u0275fac = function SuggestionMovieModeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuggestionMovieModeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuggestionMovieModeComponent, selectors: [["app-suggestion-movie-mode"]], hostAttrs: [1, "space-around-vertical"], decls: 4, vars: 4, consts: [["aria-role", "button", "aria-label", "Sorprendimi", 3, "routerLink"], ["aria-role", "button", "aria-label", "Chiedimi", 3, "routerLink"]], template: function SuggestionMovieModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cam-ds-button", 0);
      \u0275\u0275text(1, "Sorprendimi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "cam-ds-button", 1);
      \u0275\u0275text(3, "Chiedimi");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c1));
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestionMovieModeComponent, [{
    type: Component,
    args: [{
      selector: "app-suggestion-movie-mode",
      imports: [RouterLink],
      template: `
    <cam-ds-button aria-role="button" aria-label="Sorprendimi" [routerLink]="['surprise-me']">Sorprendimi</cam-ds-button>
    <cam-ds-button aria-role="button" aria-label="Chiedimi" [routerLink]="['ask-me']">Chiedimi</cam-ds-button>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      host: {
        class: "space-around-vertical"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuggestionMovieModeComponent, { className: "SuggestionMovieModeComponent", filePath: "src/app/pages/suggestion/suggestion-movie/suggestion-movie-mode/suggestion-movie-mode.component.ts", lineNumber: 17 });
})();
export {
  SuggestionMovieModeComponent
};
//# sourceMappingURL=chunk-XM6TBIGT.js.map
