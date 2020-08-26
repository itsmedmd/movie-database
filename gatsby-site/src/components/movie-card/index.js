import React from "react"

export default function MovieCard({movie, genres}) {
  const movieGenres = movie.genre_ids.map(id => 
    genres.find(genre => genre.id === id).name
  );

  return (
      <div className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w45${movie.poster_path}`} alt={`${movie.title} poster`}/>
          <div className="movie-details">
            <span className="title">{movie.title}</span>
            <span className="rating">Rating: <span>{movie.vote_average}</span></span>
            <span className="year">{movie.release_date.split("-")[0]}</span>
            <span className="genres">{movieGenres.join(", ")}</span>
            <a className="more-info" href={`https://www.themoviedb.org/movie/${movie.id}`}>More information</a>
          </div>
      </div>
  );
}
