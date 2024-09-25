import React, { useState, useEffect } from "react";

import "./ContentOverview.css";
import ContentOverviewItem from "./util/ContentOverviewItem";
import { getMovies, getRecommendations, getTVSeries } from "../util/http";

const ContentOverview = ({ header, genre, searchTerm }) => {
  const [content, setContent] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const newFilteredList = content.filter((item) => {
      if (item.original_title) {
        const title = item.original_title.toLowerCase();
        return title.includes(searchTerm.toLowerCase());
      } else if(item.name) {
        const contentName = item.name.toLowerCase();
        return contentName.includes(searchTerm.toLowerCase())
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
                image={posterPath + c.poster_path}
                releaseYear={getReleaseYear(
                  c.release_date ? c.release_date : c.first_air_date
                )}
                genre={c.genre ? c.genre : genre}
                title={c.title ? c.title : c.name}
              />
            );
          })}
      </div>
    </>
  );
};

export default ContentOverview;
