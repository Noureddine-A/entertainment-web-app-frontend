import React from "react";

import "./HomePage.css";
import Search from "./Search";
import Trending from "./Trending";
import ContentOverview from "./ContentOverview";

const HomePage = () => {
  return (
    <div className="entertainment__home-container">
      <Search placeholder={"movies or TV series"}/>
      <Trending />
      <ContentOverview header={"Recommended for you"}/>
    </div>
  );
};

export default HomePage;
