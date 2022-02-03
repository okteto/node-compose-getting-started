import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
        <a class="nav-link navbar-brand" href="/"><img src="okteto.png" width="36px" height="36px" /></a>
          <a class="nav-link navbar-brand" href="/">My Movie List</a>
          <a class="nav-link navbar-brand" href="add">New Movie</a>
        </nav>
        <div class="container mt-3">
        <Outlet />
        </div>  
      </div>
    );
  }
}
