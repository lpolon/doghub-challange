import React from 'react';

export default function DetailsTable({ details }) {
  console.log('recebido:', details);
  return (
    <div className="table-container">
      <table className="table is-narrow is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Nome</th>
            <th>valor</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(details).map((key, i) => {
            return (
              details[key] && (
                <tr key={i}>
                  <td>{key}</td>
                  <td>{details[key]}</td>
                </tr>
              )
            );
          })}
        </tbody>
      </table>
    </div>
  );
}