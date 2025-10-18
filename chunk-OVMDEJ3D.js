import "./chunk-CZJLB7T5.js";

// src/app/pages/suggestion/suggestion.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-HY3MZF63.js").then((m) => m.SuggestionMediaComponent)
      },
      {
        path: "movie",
        //pathMatch: 'full',
        loadChildren: () => import("./chunk-BKGISGUC.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-OVMDEJ3D.js.map
