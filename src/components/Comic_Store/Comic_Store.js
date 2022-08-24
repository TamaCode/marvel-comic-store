import Hero_Card from "../Hero_Card/Hero_Card.js";
import './Comic_Store.css';

const Comic_Store = () => {
  return (
    <div className='comic_store_box'>
      <div className='store_row'>
        <Hero_Card heroName='Thor' stock='10' />
        <Hero_Card heroName='Hulk' stock='8' />
        <Hero_Card heroName='Spider-Man (Ultimate)' stock='5' />
        <Hero_Card heroName='Deadpool' stock='3' />
      </div>
      <div className='store_row'>
        <Hero_Card heroName='Wolverine' stock='0' />
        <Hero_Card heroName='Doctor Strange (Ultimate)' stock='4' />
        <Hero_Card heroName='Iron Man' stock='10' />
        <Hero_Card heroName='Captain America (Ultimate)' stock='0' />
      </div>
    </div>
  );
};

export default Comic_Store;