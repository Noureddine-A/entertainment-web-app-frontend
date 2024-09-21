import React from "react";

import "./Search.css";

const Search = () => {
  return (
    <div className="entertainment__search-container">
      <input
        type="text"
        name="searchTerm"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
};

export default Search;
