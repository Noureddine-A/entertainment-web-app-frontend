import React, {useState} from 'react';

import './MoviePage.css';

import Search from '../home/Search.jsx';
import ContentOverview from '../home/ContentOverview.jsx';

const MoviePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  function search(value) {
    setSearchTerm(value);
  }
  
  return (
    <div className="entertainment__movie-container">
        <Search placeholder={"movies"} search={search}/>
        <ContentOverview header={"Movies"} genre={"Movie"} searchTerm={searchTerm}/>
    </div>
  )
}

export default MoviePage;