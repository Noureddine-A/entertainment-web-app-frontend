import React from "react";

import "./TVSeriesPage.css";

import Search from "../home/Search";
import ContentOverview from "../home/ContentOverview";

const TVSeriesPage = () => {
  return (
    <div className="entertainment__tv-series-container">
      <Search placeholder={"TV series"} />
      <ContentOverview header={"TV Series"} genre={"TV Series"} />
    </div>
  );
};

export default TVSeriesPage;
