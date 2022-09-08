import './Comic.css';
import Title from '../Title/Title.js';
import ItemCount from '../ItemCount.js/ItemCount.js';
import { useState, useEffect } from 'react';
import { getComicData } from '../../marvel_lib.js';
import  { useParams } from 'react-router-dom';

const Comic = () => {
  const [comic, setComic] = useState({});
  const [countItem, setCountItem] = useState(0);
  const { comicId } = useParams();
  const initial = 1;

  const onAdd = (itemCount) => {
    if (itemCount != 0) {
      // alert(`Se han agregado ${itemCount} items al carrito.`);
      setCountItem(itemCount);
    }
  };

  useEffect(() => {
    getComicData(comicId).then((comicData) => {
      setComic(comicData);
    });
  }, []);

  return (
    <div className='comic-box-container'>
    <Title title={'Add your Comic to the Cart !'}></Title>

    <div className='comic-box'>
      <div className="comic-img-box">
        <img className='comic-img' src={comic.img_url} alt="Comic Image" />
      </div>
      
      <div className='comic-data-box'>
        <h3 className='comic-title'>{comic.title}</h3>
        <p className='comic-description'><b>{comic.description}</b></p>
        <h5 className='price-text'><b><i>US$ {comic.price}</i></b></h5>
        <ItemCount stock={comic.stock} initial={initial} onAdd={onAdd} />
        {
          countItem ?
          <p><b>It have been added {countItem} item(s) to the Cart</b></p>
          :
          <p></p>
        }
      </div>

    </div>
    </div>
  );
};

export default Comic;