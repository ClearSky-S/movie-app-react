
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";


function Detail() {

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const param = useParams();
  console.log(param);
  const {id} = useParams();
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(()=>{getMovies()}, []);
  console.log(movie);
  if (loading === true) { return <div> loading </div>; }
  else {
    return (
      <div className="Detail">
        <Link to={`/movie/${movie.id}`}><h2>{movie.title}</h2></Link>
        <img src={movie.medium_cover_image} alt={movie.title} />
        <div>{movie.rating}</div>
        <div>{movie.genres !== undefined ?
          movie.genres.map((genre, index) =>
            <span key={index}>{genre}{index === movie.genres.length - 1 ? null : ", "}</span>) :
          null}</div>
        <p>{movie.description_full}</p>
        <a href={movie.url}>link</a>
      </div>
    );
  }
}

export default Detail;
