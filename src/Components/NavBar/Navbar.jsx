import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import adoptionIcon from './bowl.png';
import { useLocation } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

export default function NavBar(props) {
  return (
    <nav className="navbar is-fixed-top is-transparent">
      {'/' === useLocation().pathname ? (
        <span style={{ width: 50 }}></span>
      ) : (
        <BackButton />
      )}
      <Link className="navbar-brand hover-zoom--colorize-half" to="/">
        Dog<strong>Hub</strong>
      </Link>
      <Link
        to="/my-adoptions"
        className="navbar-item right hover-zoom--colorize-full"
      >
        <img src={adoptionIcon} alt="icon of a bowl of dog food" />
      </Link>
    </nav>
  );
}
