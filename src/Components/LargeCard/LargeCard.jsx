import React from 'react';
import './LargeCard.css';
import { Link } from 'react-router-dom';
import TagList from '../TagList/TagList';

export default function LargeCard({ id, name, imgSrc, temperaments }) {
  return (
    <Link
      to={`/${id}`}
      className="LargeCard drop-shadow hover-zoom--colorize-half"
    >
      <div className="image-container">
        <img src={imgSrc} alt={name} />
        <div className="text-container">
          <h2>{name}</h2>
          <TagList temperaments={temperaments} />
        </div>
      </div>
    </Link>
  );
}
