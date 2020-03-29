import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GrapeLogo } from "../../../grape_logo.svg";

const Header = ({ userName }) => (
  <nav className="navbar navbar-light bg-light">
    <div className="navbar-brand">
      <GrapeLogo style={{ height: "5rem", width: "auto" }} />
      <h3 className="navbar-text">Beer Finder</h3>
    </div>
    <div>
      <span className="navbar-text">{`Hello, ${userName}!`}</span>
      <Link className="btn btn-primary" to="/login">
        Logout
      </Link>
    </div>
  </nav>
);

export { Header };
