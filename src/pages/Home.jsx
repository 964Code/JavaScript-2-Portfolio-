import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Typewriter from 'typewriter-effect';
import background from '../resources/bg-picture.jpg';

function Home() {
  const hero = {
    title: 'Hero Page',
    description:
      'My name is Filip and this is my portfolio. I am currently studying to become a Front-end developer and I will be sharing my progress here. Your can read more about me at my About-page.',
    image: background,
  };
  document.title = 'Welcome';
  return (
    <div className='home' id='home'>
      <Hero
        title={
          <Typewriter
            options={{
              strings: ['Hello!', 'Привет!', 'こんにちは!', 'Buna!', 'مرحبا!'],
              autoStart: true,
              loop: true,
            }}
          />
        }
        description={hero.description}
        image={hero.image}
      />
    </div>
  );
}

export default Home;
