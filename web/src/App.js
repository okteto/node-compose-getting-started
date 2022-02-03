import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MovieList from "./components/movies";
import AddMovie from "./components/add-movie";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/movies" className="navbar-brand">
            My Movies
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">Movies</li>
            <li className="nav-item">Add Movie</li>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MovieList />} />
            <Route path="/add" element={<AddMovie />} />
            <Route path="*" element={<MovieList />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
