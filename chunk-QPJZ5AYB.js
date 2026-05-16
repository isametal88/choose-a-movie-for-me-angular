import "./chunk-CZJLB7T5.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-XM6TBIGT.js").then((m) => m.SuggestionMovieModeComponent)
      },
      {
        path: "surprise-me",
        loadChildren: () => import("./chunk-2TO26FDZ.js").then((m) => m.routes)
      },
      {
        path: "ask-me",
        loadChildren: () => import("./chunk-3CO3R7AI.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-QPJZ5AYB.js.map
