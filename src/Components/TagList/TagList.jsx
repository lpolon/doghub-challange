import React from 'react';
import './TagList.css';

export default function TagList(props) {
  const { temperaments } = props;
  const temperamentsArr = temperaments.split(', ');
  return (
    <div>
      <div className="TagList-container">
        <ul>
          {temperamentsArr.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}