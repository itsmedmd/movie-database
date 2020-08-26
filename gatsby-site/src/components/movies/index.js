import React from "react"
import MovieCard from '../movie-card';

export default function Movies({movies, genres}) {
  const results = movies.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres}/>);

  return (
      <div className="results-wrapper">
          {results ? results : null}
      </div>
  );
}
