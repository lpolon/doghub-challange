import React from 'react';
import { useHistory } from 'react-router-dom';
import backArrow from './back.png';

export default function BackButton() {
  return (
    <div
      onClick={useHistory().goBack}
      className="navbar-item left hover-zoom--colorize"
    >
      <img src={backArrow} alt="" />
    </div>
  );
}
