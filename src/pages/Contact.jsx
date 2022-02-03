import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    e.preventDefault();

    emailjs
      .sendForm(
        'service_8lnw13s',
        'template_ft6p9h5',
        e.target,
        'user_KXEzg4CmOkGPTCQpFJe6W'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <form onSubmit={sendEmail}>
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
                  name='name'
                />
                <input
                  type='email'
                  className='field'
                  placeholder='Your Email'
                  required
                  name='email'
                />
                <input
                  type='text'
                  className='field'
                  placeholder='Subject'
                  name='subject'
                />
                <textarea
                  placeholder='Message'
                  className='field'
                  name='message'
                ></textarea>
                <button className='btn'>Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contact;
