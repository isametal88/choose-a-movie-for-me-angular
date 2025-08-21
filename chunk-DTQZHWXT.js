import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext
} from "./chunk-LP3XZL4R.js";
import "./chunk-VUJOFXKG.js";

// src/app/pages/find/find.component.ts
var FindComponent = class _FindComponent {
  static \u0275fac = function FindComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FindComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindComponent, selectors: [["app-find"]], decls: 2, vars: 0, template: function FindComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "find works!");
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=find.component.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindComponent, [{
    type: Component,
    args: [{ selector: "app-find", imports: [], template: `<p>find works!</p>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* src/app/pages/find/find.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=find.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindComponent, { className: "FindComponent", filePath: "src/app/pages/find/find.component.ts", lineNumber: 10 });
})();
export {
  FindComponent
};
//# sourceMappingURL=chunk-DTQZHWXT.js.map
