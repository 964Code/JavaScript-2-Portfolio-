import React from 'react';
import './Card.css';

function Card({ title, content, link }) {
  return (
    <div className='wrapper'>
      <div className='card'>
        <h3 className='card-title'>{title}</h3>
        <p className='card-content'>{content}</p>
        <button className='card-btn'>
          <a href={link} target='_blank' className='card-link'>
            TO GITHUB
          </a>
        </button>
      </div>
    </div>
  );
}

export default Card;
