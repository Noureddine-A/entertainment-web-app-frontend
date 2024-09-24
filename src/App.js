import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { signupAction } from "./components/auth/Signup";
import Login, { loginAction } from "./components/auth/Login";
import Root from "./components/root/Root";
import HomePage from "./components/home/HomePage";
import MoviePage from "./components/movies/MoviePage";
import TVSeriesPage from "./components/tvseries/TVSeriesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <HomePage />,
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
      {
        path: "movie",
        element: <MoviePage />,
      },
      {
        path: "tv-show",
        element: <TVSeriesPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
