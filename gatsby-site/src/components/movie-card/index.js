import React from "react"

export default function MovieCard({movie, genres}) {
  // get genre names from genre ids
  const movieGenres = movie.genre_ids.map(id => 
    genres.find(genre => genre.id === id).name
  );
  
  // sometimes there is no release date or poster image defined
  const movieReleaseDate = movie.release_date ? movie.release_date.split("-")[0] : "";
  const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w45${movie.poster_path}` : "no-image.png";
  
  return (
    <div className="movie-card">
        <img src={moviePoster} alt={`${movie.title} poster`}/>
        <div className="movie-details">
          <span className="title">{movie.title}</span>
          <span className="rating">Rating: <span>{movie.vote_average}</span></span>
          <span className="year">{movieReleaseDate}</span>
          <span className="genres">{movieGenres.join(", ")}</span>
          <a className="more-info" href={`https://www.themoviedb.org/movie/${movie.id}`}>More information</a>
        </div>
    </div>
  );
}
