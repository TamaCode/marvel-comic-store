import './Hero_Card.css';

const Hero_Card = ({ hero_img_url, hero_name }) => {
  <div className='hero-card-box'>
    <div className='img-box'>
      <img src={hero_img_url} alt="Hero Image" />
    </div>
    <h4>{hero_name}</h4>
  </div>
};

export default Hero_Card;