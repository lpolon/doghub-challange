import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import adoptionIcon from './bowl.png';
import backArrow from './back.png';

export default function NavBar(props) {
  return (
    <nav className="navbar is-fixed-top is-transparent">
      <Link className="navbar-item left hover-zoom--colorize">
        <img src={backArrow} alt="" />
      </Link>
      <Link className="navbar-brand hover-zoom--colorize" to="/">
        Dog<strong>Hub</strong>
      </Link>
      <Link
        to="/my-adoptions"
        className="navbar-item right hover-zoom--colorize"
      >
        <img src={adoptionIcon} alt="icon of a bowl of dog food" />
      </Link>
    </nav>
  );
}