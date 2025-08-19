import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-GKKB5LWT.js").then((m) => m.SuggestionMovieModeComponent)
      },
      {
        path: "surprise-me",
        loadChildren: () => import("./chunk-M5DKBPJ3.js").then((m) => m.routes)
      },
      {
        path: "ask-me",
        loadChildren: () => import("./chunk-NAPPYWTA.js").then((m) => m.routes)
      },
      {
        path: "**",
        redirectTo: ""
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-P2M5KAQY.js.map
