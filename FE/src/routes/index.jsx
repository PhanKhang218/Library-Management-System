import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/Register";
const publicRoutes = [
  {
    path: "/main",
    component: Dashboard,
  },
  { path: "/", component: Login },
  { path: "/register", component: RegisterForm },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
