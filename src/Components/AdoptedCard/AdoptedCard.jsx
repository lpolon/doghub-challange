import React from 'react';
import './AdoptedCard.css';

import { breeds } from '../../utils/dogApi';

export default function AdoptedCard({ imgSrc, name, id, updateBreedsList }) {
  console.log('recebendo a função por props?', updateBreedsList);

  const handleClick = async (id) => {
    await breeds.updateOne(id, { isAdopted: false });
    await updateBreedsList();
  };

  return (
    <div className="flex-container ">
      <div className="image-container">
        <img src={imgSrc} alt={name} />
      </div>
      <h2>{name}</h2>
      <div className="block">
        <button className="delete" onClick={() => handleClick(id)}></button>
      </div>
    </div>
  );
}