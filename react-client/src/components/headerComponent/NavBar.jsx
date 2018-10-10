import React from 'react';
import { Link, Route } from 'react-router-dom';

const NavBar = () => (
  <header>
    <ul id="headerButtons">
      <li className="navButton">
        <Link to="/">home</Link>
      </li>
    </ul>
  </header>
);

export default NavBar;
