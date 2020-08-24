import React from "react"

export default function MovieCard({movie, genres}) {
  const movieGenres = movie.genre_ids.map(id => 
    genres.find(genre => genre.id === id).name
  );

  return (
      <div className="movie-card">
          <p>{movie.title}</p>
          <p>Rating: {movie.vote_average}</p>
          <p>{movie.release_date.split("-")[0]}</p>
          <p>{movieGenres.join(", ")}</p>
      </div>
  );
}
