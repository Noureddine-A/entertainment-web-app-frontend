import React, { useState, useEffect } from "react";

import "./Recommended.css";
import RecommendedItem from "./util/RecommendedItem";
import { getRecommendations } from "../util/http";

const Recommended = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getRecommendations().then((recommended) => {
      setRecommendations(recommended);
    });
  }, []);

  const posterPath = "https://image.tmdb.org/t/p/w500/";

  function getReleaseYear(date) {
    return date.split("-")[0];
  }

  return (
    <>
      <h1 className="entertainment__recommended-header">Recommended for you</h1>
      <div className="entertainment__recommended-container">
        {recommendations &&
          recommendations.map((recommended, index) => {
            return (
              <RecommendedItem
                image={posterPath + recommended.poster_path}
                releaseYear={getReleaseYear(
                  recommended.release_date
                    ? recommended.release_date
                    : recommended.first_air_date
                )}
                genre={recommended.genre}
                title={recommended.title ? recommended.title : recommended.name}
              />
            );
          })}
      </div>
    </>
  );
};

export default Recommended;
