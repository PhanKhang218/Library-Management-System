import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
const publicRoutes = [
  {
    path: "/main",
    component: Dashboard,
  },
  { path: "/", component: Login },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
