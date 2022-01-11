import Movie from '../components/Movie';
import React, { useState, useEffect } from 'react';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => getMovies(), []);
  console.log(movies);
  return (
    <div className="Home">
      {loading ? <h1>Loading...</h1> :
        <div className="Movies">{
          movies.map((movie =><Movie key={movie.id} movie={movie}/>))}
        </div>
      }
    </div>
  );
}

export default Home;
