import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            My Movie List
          </a>
        </nav>
        <div className="container mt-3">
        <Outlet />
        </div>  
      </div>
    );
  }
}
