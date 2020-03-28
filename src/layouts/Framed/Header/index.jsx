
import React from "react"
import { Link } from 'react-router-dom';

const Header = ({ userName })=> (
  <div className="header">
    <div className="leftside">
      <h3>Beer Finder</h3>
    </div>
    <div className="rightside">
      {`Hello, ${userName}!`}
      <Link to="/login">Logout</Link>
    </div>
  </div>
)

export { Header }
