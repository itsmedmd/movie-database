import React, { useState, useCallback, useEffect } from "react"
import Movies from '../movies';
import debounce from "../../scripts/debounce";

export default function Main({genres}) {
  const [movies, setMovies] = useState();

  // on page load focus the input
  useEffect(() => {
    document.getElementById("movie").focus();
  }, []);

  // get movies that match the input + sort by popularity and return only 4 movies
  const getMovies = (query) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=20bbccce1133a0c3fa23ae9af625a36b&language=en-US&query=${query}`)
    .then(res => res.json())
    .then(data => setMovies(data.results.sort((a, b) => b.popularity - a.popularity).slice(0, 4)));
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
