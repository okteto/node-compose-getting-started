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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MovieList />} />
            <Route path="add" element={<AddMovie />} />
            <Route path="*" element={<MovieList />} />
          </Route>
        </Routes>
    );
  }
}

export default App;
