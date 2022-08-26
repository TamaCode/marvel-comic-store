import { useState, useEffect } from 'react';
import {getHeroData} from '../../marvel_lib.js';
import './Hero_Card.css';
import ItemCount from '../ItemCount.js/ItemCount.js';

const Hero_Card = ({ heroName, stock, initial }) => {
  const [heroImageURL, setHeroImageURL] = useState('');
  const cleanHeroName = heroName => heroName.split('(Ultimate)')[0];

  const onAdd = (itemCount) => {
    if (itemCount != 0) {
      alert(`Se han agregado ${itemCount} items al carrito.`);
    }
  };

  useEffect(() => {
    getHeroData(heroName).then((heroData) => {
      console.log('img_url', heroData.img_url)
      setHeroImageURL(heroData.img_url);
    }).catch((error) => {
      console.log('No se pudo obtener la data de los Heroes: ', error);
    });
  }, []);

  return (
    <div className='hero-card-box'>
      <div className='hero-img-box'>
        <img src={heroImageURL} alt="Hero Image" />
      </div>
      <h4>{cleanHeroName(heroName)}</h4>
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </div>
  );
};

export default Hero_Card;