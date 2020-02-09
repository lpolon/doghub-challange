import React from 'react';
import './CardList.css';

export default function CardList(props) {
  const { header, breeds, component: CardComponent } = props;
  return (
    <div className="CardList-container">
      <h1>{header}</h1>
      <div className="CardList">
        {breeds.map((breed) => {
          return <CardComponent key={breed.id} breed={breed} />;
        })}
      </div>
    </div>
  );
}
