import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/services/services.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadComponent: () => import("./chunk-YVCP65LZ.js").then((m) => m.ServicesComponent)
      },
      {
        path: "genre",
        loadComponent: () => import("./chunk-LZCMP7PK.js").then((m) => m.GenreComponent)
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
//# sourceMappingURL=chunk-4BD6YMEY.js.map
