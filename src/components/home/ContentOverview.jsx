import React, { useState, useEffect } from "react";

import "./ContentOverview.css";
import ContentOverviewItem from "./util/ContentOverviewItem";
import { getMovies, getRecommendations, getTVSeries } from "../util/http";

const ContentOverview = ({ header, genre}) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    if (header === "Recommended for you") {
      getRecommendations().then((c) => {
        setContent(c);
      });
    } else if (header === "Movies") {
      getMovies().then((c) => {
        console.log(c);
        setContent(c);
      });
    } else if (header === "TV Series") {
      getTVSeries().then((c) => {
        setContent(c);
      });
    }
  }, [header]);

  const posterPath = "https://image.tmdb.org/t/p/w500/";

  function getReleaseYear(date) {
    return date.split("-")[0];
  }

  return (
    <>
      <h1 className="entertainment__content-overview-header">{header}</h1>
      <div className="entertainment__content-overview-container">
        {content &&
          content.map((c, index) => {
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
