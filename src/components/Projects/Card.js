import React from 'react';
import './project.css';

export default function Card({ card }) {
  return (
    <div className='fc'>
      <div className='front'>
        <div className='skillTitle'>{card.skill}</div>
      </div>
      <div className='back'>
        <div className='skillTxt'>{card.exp}</div>
      </div>
    </div>
  );
}
