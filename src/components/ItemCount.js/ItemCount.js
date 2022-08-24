import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({stock}) => {
  const [itemCount, setItemCount] = useState(0);
  
  const addQuantity = () => {
    if (itemCount + 1 <= stock) {
      setItemCount(itemCount + 1);
    }
  };

  const substractQuantity = () => {
    if (itemCount - 1 >= 0) {
      setItemCount(itemCount - 1);
    }
  };

  const addToCart = () => {
    if (itemCount != 0) {
      alert(`Se han agregado ${itemCount} items al carrito.`);
    }
  };

  return (
   <div className="item-buttons-box">
    <div className="item-count-box">
      <Button variant='danger' className="count-botton" onClick={substractQuantity}>-</Button>
      <p className="item-quantity">{itemCount}</p>
      <Button variant='danger' className="count-botton" onClick={addQuantity}>+</Button>
    </div>
    <Button variant='danger' className="add-cart-botton" onClick={addToCart}>Add to Cart</Button>
   </div>
    
  );
};

export default ItemCount;