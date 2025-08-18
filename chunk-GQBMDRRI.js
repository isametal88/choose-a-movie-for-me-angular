import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.routes.ts
var routes = [
  {
    path: "",
    loadComponent: () => import("./chunk-ZEBKT6AX.js").then((m) => m.SuggestionMovieComponent),
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-CJTZ57DU.js").then((m) => m.SuggestionMovieModeComponent)
      },
      {
        path: "surprise-me",
        loadChildren: () => import("./chunk-VROPZF5I.js").then((m) => m.routes)
      },
      {
        path: "ask-me",
        loadChildren: () => import("./chunk-RAMXX7QT.js").then((m) => m.routes)
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-GQBMDRRI.js.map
