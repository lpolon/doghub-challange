import React from 'react';
import './CardList.css';
import { Link } from 'react-router-dom';

export default function CardList({
  header,
  breeds,
  component: CardComponent,
  ...rest
}) {
  return (
    <div className="CardList-container">
      <h1>{header}</h1>
      <div className="CardList">
        {breeds.map((breed) => {
          const { id, name, imgSrc, temperament: temperaments } = breed;
          const cardProps = { id, name, imgSrc, temperaments };
          return (
            <Link
              to={`/${id}`}
              className="LargeCardList drop-shadow hover-zoom--colorize-half"
            >
              <CardComponent key={breed.id} {...cardProps} {...rest} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
