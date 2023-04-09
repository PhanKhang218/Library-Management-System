import Content from "../components/Content/Content";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import RegisterForm from "../components/Register/Register";
import Trailer from "../components/Trailer/Trailer";

const publicRoutes = [
  {
    path: "/main",
    component: Dashboard,
  },
  { path: "/", component: Login },
  { path: "/register", component: RegisterForm },
  { path: "/trailer", component: Trailer },
  { path: "/main/book-content", component: Content },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
