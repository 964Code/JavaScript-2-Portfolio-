import './style.css';

function Hero({ title, description, image }) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className='hero'>
      <div className='hero-content'>
        <h1>{title}</h1>
        <p className='hero-text'>{description}</p>
      </div>
    </div>
  );
}

export default Hero;
