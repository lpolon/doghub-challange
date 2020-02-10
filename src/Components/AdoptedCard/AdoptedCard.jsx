import React from 'react';
import './AdoptedCard.css';

export default function AdoptedCard({ imgSrc, name, id }) {
  console.log('recebendo as props no componente?', imgSrc, name, id);
  return (
    <div className="flex-container ">
      <div className="image-container">
        <img src={imgSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="block">
        <button class="delete"></button>
      </div>
    </div>
  );
}
