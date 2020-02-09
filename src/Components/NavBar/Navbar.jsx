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
        <div style={{ width: 31.5 }}></div>
      ) : (
        <BackButton />
      )}
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