import React, { useEffect, useState } from "react";

import "./BookmarkPage.css";
import Search from "../home/Search";
import ContentOverview from "../home/ContentOverview";
import { getBookmarkedContent } from "../util/http";

const BookmarkPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [moviesBookmarked, setMoviesBookmarked] = useState([]);
  // const [tvseriesBookmarked, setTvseriesBookmarked] = useState([]);

  // useEffect(() => {
  //   getBookmarkedContent().then((result) => {
  //     const movies = result.filter(item => {
  //       return item.genre === "Movie"
  //     })

  //     const tvseries = result.filter(item => {
  //       return item.genre === "TV Series"
  //     });

  //     setMoviesBookmarked(movies);
  //     setTvseriesBookmarked(tvseries);
  //   });
  // }, []);


  function search(value) {
    setSearchTerm(value);
  }

  return (
    <div className="entertainment__bookmark-container">
      <Search placeholder={"bookmarked shows"} search={search} />
      <ContentOverview
        header={"Bookmarked Movies"}
        genre={"Movie"}
        searchTerm={searchTerm}
      />
      <ContentOverview
        header={"Bookmarked TV Series"}
        genre={"TV Series"}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default BookmarkPage;
