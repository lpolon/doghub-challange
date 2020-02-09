import React from 'react';
import './LargeCard.css';
import { Link } from 'react-router-dom';
// import CardContainer from '../CardContainer/CardContainer';
import TagList from '../TagList/TagList';

export default function LargeCard(props) {
  const {
    breed: { id, name, imgSrc, temperament: temperaments },
  } = props;
  // TODO: 
  // onClick, função do app para pegar um elemento,
  // link to Id
  return (
    <Link
    // to={``}
    className="LargeCard drop-shadow">
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
