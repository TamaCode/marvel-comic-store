import Hero_Card from "../Hero_Card/Hero_Card.js";
import './Comic_Store.css';

const Comic_Store = () => {
  return (
    <div className='comic_store_box'>
      <div className='store_row'>
        <Hero_Card heroName='Thor' />
        <Hero_Card heroName='Hulk' />
        <Hero_Card heroName='Spider-Man (Ultimate)' />
        <Hero_Card heroName='Deadpool' />
      </div>
      <div className='store_row'>
        <Hero_Card heroName='Wolverine' />
        <Hero_Card heroName='Doctor Strange (Ultimate)' />
        <Hero_Card heroName='Iron Man' />
        <Hero_Card heroName='Captain America (Ultimate)' />
      </div>
    </div>
  );
};

export default Comic_Store;