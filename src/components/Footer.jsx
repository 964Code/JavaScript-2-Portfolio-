import React from 'react';
import './Footer.css';
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillHome,
} from 'react-icons/ai';

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-icon-container'>
        <a href='#home'>
          <AiFillHome />
        </a>

        <a href='https://twitter.com/?lang=en' target='_blank'>
          <AiFillTwitterCircle />
        </a>

        <a href='https://github.com/' target='_blank'>
          <AiFillGithub />
        </a>

        <a href='https://www.linkedin.com/' target='_blank'>
          <AiFillLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
