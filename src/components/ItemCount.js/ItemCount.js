import { useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd }) => {
  const [itemCount, setItemCount] = useState(initial);
  
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

  return (
   <div className="item-buttons-box">
    <div className="item-count-box">
      <Button variant='danger' className="count-botton" onClick={substractQuantity}>-</Button>
      <p className="item-quantity">{itemCount}</p>
      <Button variant='danger' className="count-botton" onClick={addQuantity}>+</Button>
    </div>
    <Button variant='danger' className="add-cart-botton" onClick={() => onAdd(itemCount)}>Add to Cart</Button>
    <p className="available-stock-text"><i>Available stock: {stock}</i></p>
   </div>
    
  );
};

export default ItemCount;