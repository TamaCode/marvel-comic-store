import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase.js';

const ItemCount = ({stock, docId, onAdd }) => {
  const [itemCount, setItemCount] = useState(1);
  
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

  useEffect(() => {
    const getComicDocument = async () => {
      const docRef = doc(db, 'comics', docId);
      const document = await getDoc(docRef);
      return document;
    };

    getComicDocument()
      .then(document => {
        console.log('document.data().initial', document.data().initial);
        setItemCount(document.data().initial)
      })
      .catch(error => console.log('Error al conectarse con firebase: ', error));
  }, []);

  return (
   <div className="item-buttons-box">
    <div className="item-count-box">
      <Button variant='danger' className="count-botton" onClick={substractQuantity}>-</Button>
      <p className="item-quantity">{itemCount}</p>
      <Button variant='danger' className="count-botton" onClick={addQuantity}>+</Button>
    </div>
    <Button variant='danger' className="add-cart-botton" onClick={() => onAdd(itemCount)}>Add to the Cart</Button>
    <p className="available-stock-text"><i>Available stock: {stock}</i></p>
   </div>
    
  );
};

export default ItemCount;