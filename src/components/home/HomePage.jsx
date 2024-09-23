import React from "react";

import "./HomePage.css";
import Search from "./Search";
import Trending from "./Trending";
import Recommended from "./Recommended";

const HomePage = () => {
  return (
    <div className="entertainment__home-container">
      <Search />
      <Trending />
      <Recommended/>
    </div>
  );
};

export default HomePage;
