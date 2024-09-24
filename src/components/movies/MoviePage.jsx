import React from 'react';

import './MoviePage.css';

import Search from '../home/Search.jsx';
import ContentOverview from '../home/ContentOverview.jsx';

const MoviePage = () => {
  return (
    <div className="entertainment__movie-container">
        <Search placeholder={"movies"}/>
        <ContentOverview header={"Movies"} genre={"Movie"}/>
    </div>
  )
}

export default MoviePage