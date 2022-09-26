import './Comic.css';
import Title from '../Title/Title.js';
import ItemCount from '../ItemCount.js/ItemCount.js';
import { useState, useEffect, useContext } from 'react';
import { getComicData } from '../../libs/marvel_lib.js';
import  { useParams } from 'react-router-dom';
import { CartContext } from '../Context/CartProvider.js';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Comic = () => {
  const [comic, setComic] = useState({});
  const [countItem, setCountItem] = useState(0);
  const { comicId, docId } = useParams();
  const cartContext = useContext(CartContext);

  const onAdd = (itemCount) => {
    if (itemCount != 0 && comic.stock >= itemCount) {
      cartContext.addItem(comic, itemCount);
      setComic({ ...comic, stock: parseInt(comic.stock) - itemCount });
      setCountItem(itemCount);
    } else if (itemCount != 0 && comic.stock < itemCount) {
      alert('Sorry, there is not enough stock of this comic.');
    }
  };

  useEffect(() => {
    getComicData(comicId).then((comicData) => {
      const comicQuantityInCart = getComicQuantityInCart(comicData);
      setComic({ ...comicData, stock: parseInt(comicData.stock) - comicQuantityInCart });
    });
  }, []);

  const getComicQuantityInCart = (comicData) => {
    const comicInCart = cartContext.cartItems.find(cartItem => cartItem.id === comicData.id);
    return comicInCart ? parseInt(comicInCart.quantity) : 0;
  };

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
        <ItemCount stock={comic.stock} docId={docId} onAdd={onAdd} />
        { countItem ? <p><b>It has been added {countItem} item(s) to the Cart</b></p> : <p></p> }
        { countItem ? <Link to='/cart'><Button variant='danger' className="finish-buy-botton">Finish Buying</Button></Link> : null }
      </div>

    </div>
    </div>
  );
};

export default Comic;