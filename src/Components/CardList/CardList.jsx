import React from 'react';
import './CardList.css';
import { Link } from 'react-router-dom';

export default function CardList({
  header,
  breedsArr,
  component: CardComponent,
  ...rest
}) {
  return (
    <div className="CardList-container">
      <h1>{header}</h1>
      <div className="CardList">
        {breedsArr.map((breed, i) => {
          const { id, name, imgSrc, temperament: temperaments } = breed;
          const cardProps = { id, name, imgSrc, temperaments };
          return (
            <Link
              to={`/${id}`}
              key={breed.id}
              className="LargeCardList drop-shadow hover-zoom--colorize-half"
            >
              <CardComponent {...cardProps} {...rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
