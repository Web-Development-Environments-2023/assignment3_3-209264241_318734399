// import Main from "./pages/MainPage";
// import NotFound from "./pages/NotFoundPage";

// const routes = [
//   {
//     path: "/",
//     name: "main",
//     component: Main,
//   },
//   {
//     path: "/register",
//     name: "register",
//     component: () => import("./pages/RegisterPage"),
//   },
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("./pages/LoginPage"),
//   },
//   {
//     path: "/search",
//     // path: "/recipes/search",
//     name: "search",
//     component: () => import("./pages/SearchPage"),
//   },
//   {
//     path: "/recipe/:recipeId",

//     // path: "/recipes/info",
//     name: "recipe",
//     component: () => import("./pages/RecipeViewPage"),
//   },
//   {
//     path: "*",
//     name: "notFound",
//     component: NotFound,
//   },
// ];

// export default routes;


import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage"),
  },
  {
    path: "/personal/family",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage"),
  },
  {
    path: "/personal/family/:recipeId",
    name: "view_family",
    component: () => import("./pages/FamilyViewPage"),
  },
  {
    path: "/personal/recipes",
    name: "my_recipes",
    component: () => import("./pages/MyRecipesPage"),
  },
  {
    path: "/personal/recipes/:recipeId",
    name: "view_my_recipes",
    component: () => import("./pages/MyRecipeViewPage"),
  },
  {
    path: "/personal/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesRecipesPage"),
  },
  {
    path: "/create",
    name: "create",
    component: () => import("./pages/CreateRecipePage"),
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./pages/RecipeViewPage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage"),
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound,
  },
];

export default routes;