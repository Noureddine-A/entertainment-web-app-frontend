import React, { useEffect } from "react";

import { Outlet } from "react-router-dom";

import "./Root.css";

import Navbar from "./Navbar.jsx";
import { getAuthToken, removeAuthToken } from "../auth/util/auth.js";

const Root = () => {
  useEffect(() => {
    const token = getAuthToken();

    if (!token) {
      return;
    }

    setTimeout(() => {
      removeAuthToken();
    }, 1 * 60 * 60 * 1000);
  }, []);

  return (
    <div className="entertainment__app-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
