import React, { useState, useEffect } from "react";

import "./ContentOverview.css";
import ContentOverviewItem from "./util/ContentOverviewItem";
import {
  getBookmarkedContent,
  getMovies,
  getRecommendations,
  getTVSeries,
} from "../util/http";

const ContentOverview = ({ header, genre, searchTerm }) => {
  const [content, setContent] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const newFilteredList = content.filter((item) => {
      if (item.original_title) {
        const title = item.original_title.toLowerCase();
        return title.includes(searchTerm.toLowerCase());
      } else if (item.name) {
        const contentName = item.name.toLowerCase();
        return contentName.includes(searchTerm.toLowerCase());
      }
      const name = item.original_name.toLowerCase();
      return name.includes(searchTerm.toLowerCase());
    });

    setFilteredList(newFilteredList);
  }, [searchTerm, content]);

  useEffect(() => {
    if (header === "Recommended for you") {
      getRecommendations().then((c) => {
        setContent(c);
        setFilteredList(c);
      });
    } else if (header === "Movies") {
      getMovies().then((c) => {
        setContent(c);
        setFilteredList(c);
      });
    } else if (header === "TV Series") {
      getTVSeries().then((c) => {
        setContent(c);
        setFilteredList(c);
      });
    } else if (
      header === "Bookmarked Movies" ||
      header === "Bookmarked TV Series"
    ) {
      let contentList = [];
      getBookmarkedContent()
        .then((result) => {
          if (header.includes("TV")) {
            contentList = result.filter((item) => {
              return item.genre === "TV Series";
            });
          } else if (header.includes("Movie")) {
            contentList = result.filter((item) => {
              return item.genre === "Movie";
            });
          }
        })
        .then(() => {
          let finalList = contentList.map((item) => {
            return { ...item, isBookmarked: true };
          });
          setContent(finalList);
          setFilteredList(finalList);
        });
    }
  }, [header]);

  const posterPath = "https://image.tmdb.org/t/p/w500/";

  function getReleaseYear(date) {
    return date.split("-")[0];
  }

  return (
    <>
      <h1 className="entertainment__content-overview-header">
        {filteredList.length < content.length
          ? `Found ${filteredList.length} ${
              filteredList.length === 1 ? "result" : "results"
            } for '${searchTerm}'`
          : header}
      </h1>
      <div className="entertainment__content-overview-container">
        {filteredList &&
          filteredList.map((c, index) => {
            return (
              <ContentOverviewItem
                key={index}
                image={
                  !c.posterPath ? posterPath + c.poster_path : c.posterPath
                }
                releaseYear={
                  !c.releaseYear
                    ? getReleaseYear(
                        c.release_date ? c.release_date : c.first_air_date
                      )
                    : c.releaseYear
                }
                genre={c.genre ? c.genre : genre}
                title={c.title ? c.title : c.name}
                isBookmarked={c.isBookmarked}
              />
            );
          })}
      </div>
    </>
  );
};

export default ContentOverview;
