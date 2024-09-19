import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
