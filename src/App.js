import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { signupAction } from "./components/auth/Signup";
import Login, { loginAction } from "./components/auth/Login";
import Root from "./components/root/Root";
import HomePage from "./components/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
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
