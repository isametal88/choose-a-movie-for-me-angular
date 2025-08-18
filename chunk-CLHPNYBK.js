import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-GVM3ZTZE.js").then((m) => m.SuggestionComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-QUGZ4AD7.js").then((m) => m.SuggestionMediaComponent)
      },
      {
        path: "movie",
        //pathMatch: 'full',
        loadChildren: () => import("./chunk-GQBMDRRI.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-CLHPNYBK.js.map
