import React from "react"
import MovieCard from '../movie-card';

export default function Movies({movies, genres}) {
  const results = movies.map((movie, index) => {
      if(index < 3)
        return <MovieCard key={movie.id} movie={movie} genres={genres}/>
  });

  return (
      <div className="results-wrapper">
          <ul>
              {results}
          </ul>
      </div>
  );
}
