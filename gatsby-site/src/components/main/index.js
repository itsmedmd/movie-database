import React, { useState, useCallback } from "react"
import Movies from '../movies';
import debounce from "../../scripts/debounce";

export default function Main({genres}) {
  const [movies, setMovies] = useState();

  // get movies that match the input
  const getMovies = (query) => {
    console.log("fire function");
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=20bbccce1133a0c3fa23ae9af625a36b&language=en-US&query=${query}`)
    .then(res => res.json())
    .then(data => setMovies(data.results));
  };

  // only execute fetch if the input is at least 3 characters long
  const handleSearch = () => {
    const input = document.getElementById("movie").value;
    if(input.length >= 3)
      getMovies(input)
    else
      setMovies(null);
  };

  const handleDebounce = useCallback(debounce(handleSearch, 500), []);

  return (
      <main>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="movie">Search for a movie</label><br/>
          <input type="text/css" name="movie" id="movie" onChange={(e) => {e.persist(); handleDebounce()}} autoComplete="off" placeholder="Movie title"/>
        </form>
        {movies ? <Movies movies={movies} genres={genres}/> : null}
      </main>
  );
}
