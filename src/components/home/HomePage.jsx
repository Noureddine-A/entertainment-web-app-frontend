import React, { useState } from "react";

import "./HomePage.css";
import Search from "./Search";
import Trending from "./Trending";
import ContentOverview from "./ContentOverview";

import { redirect } from "react-router";
import { getAuthToken } from "../auth/util/auth";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function search(value) {
    setSearchTerm(value);
  }

  return (
    <div className="entertainment__home-container">
      <Search placeholder={"movies or TV series"} search={search} />
      {searchTerm === "" && <Trending />}
      <ContentOverview header={"Recommended for you"} searchTerm={searchTerm}/>
    </div>
  );
};

export default HomePage;

export function loader() {
  if(!getAuthToken()) {
    return redirect('/auth/login');
  }

  return null;
} 
