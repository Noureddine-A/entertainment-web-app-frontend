import React from "react";

import { Outlet } from "react-router-dom";

import "./Root.css";

import Navbar from "./Navbar.jsx";

const Root = () => {
  return (
    <div className="entertainment__app-container">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
