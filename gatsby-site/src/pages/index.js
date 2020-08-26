import React, { useState, useEffect} from "react"
import Main from "../components/main";
import "./global-style.css";

export default function Home() {
  const [genres, setGenres] = useState();

  // get genre names
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=20bbccce1133a0c3fa23ae9af625a36b&language=en-US")
    .then(res => res.json())
    .then(data => setGenres(data.genres));
  }, []);

  return (
    <div className="page-content">
      <Main genres={genres}/>
    </div>
  );
}
