import './Item.css';
import ItemCount from '../ItemCount.js/ItemCount.js';
import  { Link } from 'react-router-dom';

const Item = ({ item, stock, initial }) => {
  const cleanHeroName = heroName => heroName.split('(Ultimate)')[0];

  const onAdd = (itemCount) => {
    if (itemCount != 0) {
      alert(`Se han agregado ${itemCount} items al carrito.`);
    }
  };

  return (
    <>
      <Link className="hero-card-link" to={`/category/${cleanHeroName(item.name)}`}>
        <div className='hero-card-box'>
          <div className='hero-img-box'>
            <img src={item.img_url} alt="Hero Image" />
          </div>
          <h4>{cleanHeroName(item.name)}</h4>
          {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <h5 className='price-text'><i><b>US$ {item.price}</b></i></h5> */}
        </div>
      </Link>
    </>
  );
};

export default Item;