import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GrapeLogo } from "../../../grape_logo.svg";

const Header = ({ userName }) => (
  <nav className="navbar navbar-light bg-light">
    <Link to="/">
      <GrapeLogo style={{ height: "5rem", width: "auto" }} />
    </Link>
    <h3 className="navbar-text">Beer Finder</h3>
    <div>
      <span className="navbar-text">{`Hello, ${userName}!`}</span>
      <Link className="btn btn-primary" to="/login">
        Logout
      </Link>
    </div>
  </nav>
);

export { Header };
