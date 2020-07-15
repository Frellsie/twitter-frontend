export default [
  {
    path: "/",
    redirect: "/signin"    
  },
  {
    path: "/signin",
    name: "signin",
    component: require("../components/Pages/Login").default
  },
  {
    path: "/signup",
    name: "signup",
    component: require("../components/Pages/SignUp").default
  },
  {
    path: "/home",
    name: "home",
    component: require("../components/Home").default
  },
  {
    path: "/profile",
    name: "profile",
    component: require("../components/Pages/Profile").default
  }
];
