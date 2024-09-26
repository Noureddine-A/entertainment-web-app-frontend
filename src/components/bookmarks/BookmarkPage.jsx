import React, {useState} from "react";

import "./BookmarkPage.css";
import Search from "../home/Search";
import ContentOverview from "../home/ContentOverview";

const BookmarkPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    function search(value) {
      setSearchTerm(value);
    }
  return (
    <div className="entertainment__bookmark-container">
      <Search placeholder={"bookmarked shows"} search={search}/>
      <ContentOverview header={"Bookmarked Movies"} genre={"Movie"} searchTerm={searchTerm}/>
      <ContentOverview header={"Bookmarked TV Series"} genre={"Movie"} searchTerm={searchTerm}/>
    </div>
  );
};

export default BookmarkPage;
