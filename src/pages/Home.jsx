import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';

/* Todo: Check the design, when on larger screens, make sure that hero img and text is together horizontally splitting space 50/50. When on mobile sized screens, have the flex-direction be a column */

function Home() {
  return (
    <div className='home'>
      {/* Issues with the page layout. the vh is not looking well and the hero-image eats up the space. */}
      <div className='hero-container'>
        <img
          src='https://images.unsplash.com/photo-1605520321793-d067fdb21c71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='hero'
        />
        <div className='hero-text'>
          <h1 className='hero-title'>
            <span>I am </span>{' '}
            {/* Add spacing between H! and typewriter. OR remove the H1 and see if there is option through typewriter to have a placeholder text that then uses effect after it*/}
            <Typewriter
              options={{
                strings: ['Hello', 'World'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            officiis distinctio molestias perspiciatis consectetur ea atque
            deleniti, ipsam voluptatem voluptates, sapiente consequatur maiores,
            voluptas vitae omnis suscipit? Ut, aspernatur eveniet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
