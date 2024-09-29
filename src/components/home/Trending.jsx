import React, { useEffect, useState } from "react";

import "./Trending.css";
import TrendingItem from "./util/TrendingItem";
import { getTrendingContent } from "../util/http";
import { getAuthToken } from "../auth/util/auth";
import { redirect } from "react-router";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrendingContent().then((content) => {
      setTrending(content);
    });
  }, []);

  const posterPath = "https://image.tmdb.org/t/p/w500/";

  function getReleaseYear(date) {
    return date.split("-")[0];
  }

  return (
    <>
      <h1 className="entertainment__trending-header">Trending</h1>
      <div className="entertainment__trending-container">
        <div className="entertainment__trending-items-container">
          {trending &&
            trending.map((content, index) => {
              return (
                <TrendingItem
                  key={index}
                  image={posterPath + content.poster_path}
                  releaseYear={getReleaseYear(
                    content.release_date
                      ? content.release_date
                      : content.first_air_date
                  )}
                  genre={content.genre}
                  title={content.title ? content.title : content.name}
                  isBookmarked={content.isBookmarked}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Trending;

export function loader() {
  if (!getAuthToken()) {
    return redirect("/auth/login");
  }
}
