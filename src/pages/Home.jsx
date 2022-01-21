import React from 'react';
import './Home.css';
import Hero from '../components/Hero';
import Typewriter from 'typewriter-effect';

function Home() {
  const hero = {
    title: 'Hero Page',
    description:
      'My name is Filip and this is my portfolio. I am currently studying to become a Front-end developer and I will be sharing my progress here. Your can read more at my About-page.',
    image:
      'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  };
  document.title = 'Welcome';
  return (
    <div className='home'>
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
