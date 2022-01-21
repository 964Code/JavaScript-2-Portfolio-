import React from 'react';
import './Home.css';

import Typewriter from 'typewriter-effect';

/* Todo: Check the design, when on larger screens, make sure that hero img and text is together horizontally splitting space 50/50. When on mobile sized screens, have the flex-direction be a column */

function Home() {
  document.title = 'Welcome';
  return <div className='home'></div>;
}

export default Home;
