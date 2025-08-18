import "./chunk-VUJOFXKG.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie-ask-me/suggestion-movie-ask-me.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "services",
        loadChildren: () => import("./chunk-3LEBJYYJ.js").then((m) => m.routes)
      },
      {
        path: "**",
        redirectTo: "services"
      }
    ]
  }
];
export {
  routes
};
//# sourceMappingURL=chunk-RAMXX7QT.js.map
