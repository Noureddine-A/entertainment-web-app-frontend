import React from "react";

import "./HomePage.css";
import Search from "./Search";
import Trending from "./Trending";

const HomePage = () => {
  return (
    <div className="entertainment__home-container">
      <Search />
      <Trending />
    </div>
  );
};

export default HomePage;
