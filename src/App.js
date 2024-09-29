import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { signupAction } from "./components/auth/Signup";
import Login, { loginAction } from "./components/auth/Login";
import Root from "./components/root/Root";
import HomePage, { loader as loginLoader } from "./components/home/HomePage";
import MoviePage from "./components/movies/MoviePage";
import TVSeriesPage from "./components/tvseries/TVSeriesPage";
import BookmarkPage from "./components/bookmarks/BookmarkPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loginLoader,
      },
      {
        path: "movie",
        element: <MoviePage />,
        loader: loginLoader,
      },
      {
        path: "tv-show",
        element: <TVSeriesPage />,
        loader: loginLoader,
      },
      {
        path: "bookmark",
        element: <BookmarkPage />,
        loader: loginLoader,
      },
    ],
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
