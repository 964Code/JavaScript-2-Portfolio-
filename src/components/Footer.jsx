import React from 'react';
import './Footer.css';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
} from 'react-icons/ai';
import BaldIcon from '../resources/baldIconTest.svg';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icon-container'>
        <a href='http://'>
          <AiFillTwitterCircle />
        </a>

        <a href='http://'>
          <AiFillGithub />
        </a>

        <a href='http://'>
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
