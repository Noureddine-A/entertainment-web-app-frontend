import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup, { signupAction } from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Root from "./components/root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "auth",
    children: [
      {
        path: "login",
        element: <Login />,
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