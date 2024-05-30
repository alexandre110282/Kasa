import React from 'react';
import Card from './Card.js';
import projetData from './listeProjets.json';
import '../styles/CardList.scss'

function CardList() {
  return (
    <div className="projet-list">
      {projetData.map((projet) => (
        <Card key={projet.id} projet={projet} />
      ))}
    </div>
  );
}

export default CardList;