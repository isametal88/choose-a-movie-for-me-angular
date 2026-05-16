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

// src/app/pages/suggestion/suggestion-media/suggestion-media.component.ts
var _c0 = () => ["movie"];
var _c1 = () => ["tv-show"];
var SuggestionMediaComponent = class _SuggestionMediaComponent {
  static \u0275fac = function SuggestionMediaComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SuggestionMediaComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SuggestionMediaComponent, selectors: [["app-suggestion-media"]], hostAttrs: [1, "space-around-vertical"], decls: 4, vars: 4, consts: [["aria-role", "button", "aria-label", "Film", 3, "routerLink"], ["aria-role", "button", "aria-label", "Serie TV", 3, "routerLink"]], template: function SuggestionMediaComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cam-ds-button", 0);
      \u0275\u0275text(1, "Film");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "cam-ds-button", 1);
      \u0275\u0275text(3, "Serie TV");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SuggestionMediaComponent, [{
    type: Component,
    args: [{
      selector: "app-suggestion-media",
      imports: [RouterLink],
      template: `
    <cam-ds-button aria-role="button" aria-label="Film" [routerLink]="['movie']">Film</cam-ds-button>
    <cam-ds-button aria-role="button" aria-label="Serie TV" [routerLink]="['tv-show']">Serie TV</cam-ds-button>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      host: {
        class: "space-around-vertical"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SuggestionMediaComponent, { className: "SuggestionMediaComponent", filePath: "src/app/pages/suggestion/suggestion-media/suggestion-media.component.ts", lineNumber: 17 });
})();
export {
  SuggestionMediaComponent
};
//# sourceMappingURL=chunk-FOPFX5J5.js.map
