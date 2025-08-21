import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-7CB5GUF2.js").then((m) => m.SuggestionMediaComponent)
      },
      {
        path: "movie",
        //pathMatch: 'full',
        loadChildren: () => import("./chunk-LRYIPHW6.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-6MOGUKYO.js.map
