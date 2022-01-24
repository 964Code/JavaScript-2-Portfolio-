import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <div className='container'>
        <div className='contact-box'>
          <div className='left'></div>
          <div className='right'>
            <h2>Contact Me</h2>
            <input
              type='text'
              className='field'
              placeholder='Your Name'
              required
            />
            <input
              type='email'
              className='field'
              placeholder='Your Email'
              required
            />
            <input type='text' className='field' placeholder='Phone' />
            <textarea placeholder='Message' className='field'></textarea>
            <button className='btn'>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
