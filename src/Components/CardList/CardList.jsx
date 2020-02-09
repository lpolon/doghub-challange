import React, { Component } from 'react';
import './CardList.css';

export default function CardList(props) {
  const { breeds, component: CardComponent } = props;
  return (
    <div className="CardList">
      {breeds.map((breed) => {
        return <CardComponent key={breed.id} breed={breed} />;
      })}
    </div>
  );
}
