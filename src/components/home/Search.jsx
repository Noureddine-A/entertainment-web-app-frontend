import React from "react";

import "./Search.css";

const Search = ({placeholder}) => {
  return (
    <div className="entertainment__search-container">
      <input
        type="text"
        name="searchTerm"
        placeholder={`Search for ${placeholder}`}
      />
    </div>
  );
};

export default Search;
