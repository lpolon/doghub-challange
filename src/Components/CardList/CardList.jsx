import React from 'react';
import './CardList.css';

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
          return <CardComponent key={breed.id} breed={breed} {...rest} />;
        })}
      </div>
    </div>
  );
}
