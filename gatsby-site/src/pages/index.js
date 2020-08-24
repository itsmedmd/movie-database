import React from "react"
import Main from "../components/main";
import "./global-style.css";

export default class Home extends React.Component {
  state = {
    genres: []
  };

  setGenres = (genres) => {
    this.setState({genres});
  }

  // get genre names
  componentDidMount() {
    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=20bbccce1133a0c3fa23ae9af625a36b&language=en-US")
    .then(res => res.json())
    .then(data => this.setGenres(data.genres));
  }

  render() {
    return (
      <div className="page-content">
        <Main genres={this.state.genres}/>
      </div>
    );
  };
}
