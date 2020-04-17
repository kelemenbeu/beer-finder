import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../beer-solid.svg";

const Header = ({ userName }) => (
  <nav className="navbar navbar-light bg-light">
      <Logo style={{ height: "3rem", width: "auto" }} />
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
