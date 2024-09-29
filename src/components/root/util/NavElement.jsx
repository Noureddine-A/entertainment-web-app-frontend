import React from "react";

import { NavLink } from "react-router-dom";

const NavElement = ({ option, path, switchTab, currentlyActive }) => {
  function onTabSwitched() {
    switchTab(option);
  }

  let svgClass = `entertainment__navbar-content-options-${option}-icon`;

  if (option === currentlyActive) {
    svgClass = `entertainment__navbar-content-options-${option}-icon-active`;
  }

  return (
    <>
      <div
        className={`entertainment__navbar-content-options-${option}-container`}
      >
        <NavLink
          to={option === "home" ? "/" : `/${option}`}
          onClick={onTabSwitched}
        >
          <svg
            className={svgClass}
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={path} />
          </svg>
        </NavLink>
      </div>
    </>
  );
};

export default NavElement;
