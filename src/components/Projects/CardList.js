import React from 'react';
import Card from './Card';
import './project.css'

export default function CardList({cards}) {
  return (
    <div className='skillList-grid'>
        {cards.map(card => {
            return <Card card={card} key={card.id} />
        })}
    </div>
  )
}
