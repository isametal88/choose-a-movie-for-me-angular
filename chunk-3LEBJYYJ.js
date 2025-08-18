import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/services.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-GTGRTR7U.js").then((m) => m.ServicesComponent)
      },
      {
        path: "genre",
        loadComponent: () => import("./chunk-FF74IVHI.js").then((m) => m.GenreComponent)
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
//# sourceMappingURL=chunk-3LEBJYYJ.js.map
