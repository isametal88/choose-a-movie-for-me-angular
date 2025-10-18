import "./chunk-CZJLB7T5.js";

// src/app/pages/suggestion/suggestion-movie/suggestion-movie.routes.ts
var routes = [
  {
    path: "",
    children: [
      {
        path: "",
        pathMatch: "full",
        loadComponent: () => import("./chunk-THZLVQVV.js").then((m) => m.SuggestionMovieModeComponent)
      },
      {
        path: "surprise-me",
        loadChildren: () => import("./chunk-MQTV3TWJ.js").then((m) => m.routes)
      },
      {
        path: "ask-me",
        loadChildren: () => import("./chunk-BWM66HR6.js").then((m) => m.routes)
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
//# sourceMappingURL=chunk-BKGISGUC.js.map
