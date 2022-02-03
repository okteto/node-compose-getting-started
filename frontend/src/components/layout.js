import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/movies"} className="nav-link">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Movie
              </Link>
            </li>
          </div>
        </nav>

        <hr />

        <Outlet />
      </div>
    );
  }
}
