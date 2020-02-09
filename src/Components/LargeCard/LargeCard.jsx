import React from 'react';
import './LargeCard.css';
import TagList from '../TagList/TagList';

export default function LargeCard({ name, imgSrc, temperaments }) {
  return (
    <div className="image-container">
      <img src={imgSrc} alt={name} />
      <div className="text-container">
        <h2>{name}</h2>
        <TagList temperaments={temperaments} />
      </div>
    </div>
  );
}