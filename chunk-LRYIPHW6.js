import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-KI5AGRT2.js").then((m) => m.SuggestionMovieModeComponent)
      },
      {
        path: "surprise-me",
        loadChildren: () => import("./chunk-PCARDHZ7.js").then((m) => m.routes)
      },
      {
        path: "ask-me",
        loadChildren: () => import("./chunk-737NL7W4.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-LRYIPHW6.js.map
