import React from 'react';
import './CardList.css';
import { Link } from 'react-router-dom';

export default function CardList({
  populateFunction,
  header,
  breedsArr,
  component: CardComponent,
  ...rest
}) {
  return (
    <div className="CardList-container">
      <h1>{header}</h1>
      <div className="CardList">
        {populateFunction(React, Link, breedsArr, CardComponent, rest)}
      </div>
    </div>
  );
}
