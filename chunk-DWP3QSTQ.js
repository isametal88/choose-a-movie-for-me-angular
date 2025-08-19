import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-5V4BG2RI.js").then((m) => m.SuggestionMediaComponent)
      },
      {
        path: "movie",
        //pathMatch: 'full',
        loadChildren: () => import("./chunk-P2M5KAQY.js").then((m) => m.routes)
      },
      {
        path: "**",
        redirectTo: ""
      }
      /* {
          path: 'tv-show',
          pathMatch: 'full',
          loadChildren: () => import('./suggestion-tv-show/suggestion-tv-show.routes').then(m => m.routes),
      } */
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-DWP3QSTQ.js.map
