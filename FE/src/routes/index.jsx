import Content from "../components/Content/Content";
import Dashboard from "../components/Dashboard/Dashboard";
import Login from "../components/Login/Login";
import Book from "../components/Book/Book";
import Movie from "../components/Movie/Movie";
import RegisterForm from "../components/Register/Register";
import Trailer from "../components/Trailer/Trailer";

const publicRoutes = [
  {
    path: "/main",
    component: Dashboard,
  },
  { path: "/", component: Login },
  { path: "/register", component: RegisterForm },
  { path: "/movie", component: Movie },
  { path: "/trailer", component: Trailer },

  { path: "/book", component: Book },
  { path: "/book/book-content/:bookId", component: Content },
];

const privateRoutes = [];
export { publicRoutes, privateRoutes };
