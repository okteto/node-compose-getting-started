import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../service/movies";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    this.movies();
  }

  movies() {
    Service.getAll()
      .then((response) => {
        this.setState({
          movies: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="list row">
        <div className="col-md-6">
          <h4>Movies</h4>
          <ul className="list-group">
            {movies &&
              movies.map((movie, index) => (
                <li className={"list-group-item "} key={index}>
                  {movie.title} - {movie.description}
                </li>
              ))}
          </ul>
          <p><Link to={"add"}>Add a new movie to the list</Link></p>
        </div>
      </div>
    );
  }
}
