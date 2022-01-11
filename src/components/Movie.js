import {Link} from "react-router-dom"

function Movie({movie}){
    return <div key={movie.id}>
    <Link to={`/movie/${movie.id}`}><h2>{movie.title}</h2></Link>
    <img src={movie.medium_cover_image} alt={movie.title}/>
    <div>{movie.rating}</div>
    {console.log(movie.genres)}
    <div>{movie.genres!==undefined ?
    movie.genres.map((genre,index)=>
    <span key={index}>{genre}{index===movie.genres.length-1 ?null:", "}</span>) :
    null}</div>
    <p>{movie.summary}</p>
  </div>
}

export default Movie;