import "./chunk-FMZO32X5.js";
import "./chunk-XCLE2RQI.js";
import {
  RouterLink
} from "./chunk-EWKMVYH6.js";
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
} from "./chunk-XDCJZM2Q.js";
import "./chunk-CZJLB7T5.js";

// src/app/pages/mode/mode.component.ts
var _c0 = () => ["/suggestion"];
var _c1 = () => ["/find"];
var ModeComponent = class _ModeComponent {
  static \u0275fac = function ModeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModeComponent, selectors: [["app-mode"]], hostAttrs: [1, "space-around-vertical"], decls: 4, vars: 4, consts: [["aria-role", "button", "aria-label", "Suggerisci", 3, "routerLink"], ["aria-role", "button", "aria-label", "Trova", 3, "routerLink"]], template: function ModeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "cam-ds-button", 0);
      \u0275\u0275text(1, "Suggerisci");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "cam-ds-button", 1);
      \u0275\u0275text(3, "Trova");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModeComponent, [{
    type: Component,
    args: [{
      selector: "app-mode",
      imports: [RouterLink],
      template: `
    <cam-ds-button aria-role="button" aria-label="Suggerisci" [routerLink]="['/suggestion']">Suggerisci</cam-ds-button>
    <cam-ds-button aria-role="button" aria-label="Trova" [routerLink]="['/find']">Trova</cam-ds-button>`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      host: {
        class: "space-around-vertical"
      }
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModeComponent, { className: "ModeComponent", filePath: "src/app/pages/mode/mode.component.ts", lineNumber: 17 });
})();
export {
  ModeComponent
};
//# sourceMappingURL=chunk-QDTMTIYC.js.map
