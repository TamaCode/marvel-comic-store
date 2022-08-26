import Hero_Card from "../Hero_Card/Hero_Card.js";
import Title from '../Title/Title.js';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='comic_store_box'>
      <Title title={greeting}></Title>
      <div className='store_row'>
        <Hero_Card heroName='Thor' stock={10} initial={1} />
        <Hero_Card heroName='Hulk' stock={8} initial={1} />
        <Hero_Card heroName='Spider-Man (Ultimate)' stock={5} initial={1} />
        <Hero_Card heroName='Deadpool' stock={3} initial={1} />
      </div>
      <div className='store_row'>
        <Hero_Card heroName='Wolverine' stock={0} initial={0}/>
        <Hero_Card heroName='Doctor Strange (Ultimate)' stock={4} initial={1} />
        <Hero_Card heroName='Iron Man' stock={10} initial={1} />
        <Hero_Card heroName='Captain America (Ultimate)' stock={0} initial={0} />
      </div>
    </div>
  );
};

export default ItemListContainer;