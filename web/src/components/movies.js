import React, { Component } from "react";
import Service from "../service/movies";

export default class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      current: null,
      currentIndex: -1,
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
                  {movie.title}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
