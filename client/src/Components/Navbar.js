import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <nav className="container">
        <Link to="/" className="navbar-brand pl-3">
          Home
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <Link to="/username/add" className="nav-link">
              Adding Username
            </Link>
            <Link to="/exercise/add" className="nav-link">
              Adding Exercise List
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
