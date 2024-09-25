import React, { useRef } from "react";

import "./Search.css";

const Search = ({ placeholder, search }) => {
  const searchRef = useRef();

  function searchContent() {
    setTimeout(() => {
      search(searchRef.current.value);
    }, 1000)
  }

  return (
    <div className="entertainment__search-container">
      <input
        onKeyDown={searchContent}
        ref={searchRef}
        type="text"
        name="searchTerm"
        placeholder={`Search for ${placeholder}`}
      />
    </div>
  );
};

export default Search;
