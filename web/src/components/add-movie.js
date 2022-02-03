import React, { Component } from "react";
import Service from "../service/movies";

export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveMovie = this.saveMovie.bind(this);
        this.newMovie = this.newMovie.bind(this);
    
        this.state = {
          id: null,
          title: "",
          description: "", 
          published: false,
    
          submitted: false
        };
      }

    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }

    onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }

  saveMovie() {
    var data = {
      title: this.state.title,
      description: this.state.description,
    };

    Service.add(data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newMovie() {
    this.setState({
      id: null,
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="list row">
        <div className="col-md-6">
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>Success!</h4>
            <button className="btn btn-primary" onClick={this.newMovie}>
              Add new movie
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
           
            <button onClick={this.saveMovie} className="btn btn-primary">
              Add new movie
            </button>
           
          </div>
        )}
      </div>
      </div>
      </div>
    );
  }
}
