import React, {useState} from "react";

import "./TVSeriesPage.css";

import Search from "../home/Search";
import ContentOverview from "../home/ContentOverview";

const TVSeriesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function search(value) {
    setSearchTerm(value);
  }
  
  return (
    <div className="entertainment__tv-series-container">
      <Search placeholder={"TV series"} search={search} />
      <ContentOverview header={"TV Series"} genre={"TV Series"} searchTerm={searchTerm}/>
    </div>
  );
};

export default TVSeriesPage;
