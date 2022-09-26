import './Form.css';
import { useContext, useState } from "react";
import { CartContext } from '../Context/CartProvider.js';
import Title from '../Title/Title.js';
import Button from 'react-bootstrap/Button';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase.js';

const Form = () => {
  const cartContext = useContext(CartContext);
  const [orderSent, setOrderSent] = useState(false);
  const [notice, setNotice] = useState('');
  const [orderId, setOrderId] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    
    const buyer = {};
    buyer.name = event.target[0].value;
    buyer.address = event.target[1].value;
    buyer.email = event.target[2].value;

    if ( buyer.name && buyer.address && buyer.email && cartContext.cartItems.length > 0) {
      setNotice(`Processing Order...`);
      const order = {
        buyer,
        items: cartContext.cartItems,
        total: cartContext.getTotal(),
        date: new Date()
      }

      const orderCollection = collection(db, 'orders');

      addDoc(orderCollection, order)
        .then((response) => {
          setNotice(`Thank you for buying!`);
          setOrderId(response.id)
          setOrderSent(true);
          cartContext.clear(true);
        })
        .catch((error) => {
          console.log('Error al guardar la orden: ', error)
        });
    } else {
      setNotice('Important: You have to complete all the information in the form and your cart must have at least 1 item to send an Order.');
      setOrderSent(false);
    }
  };

  return (
    <div className="form-box">
      <Title title={'Complete your information and send the order'} />
      <form onSubmit={formSubmit} className= 'form'>
        <input type="text" placeholder="name" className='input_field'/>
        <input type="text" placeholder="address" className='input_field'/>
        <input type="email" placeholder="email" className='input_field'/>
        { orderSent && <p className='notice_text'><b>{`Order ID: ${orderId}`}</b></p> }
        { orderSent && <p className='notice_icon'><FontAwesomeIcon icon={faSquareCheck} /></p> }
        { orderSent && <p><i>{notice}</i></p> }
        { !orderSent && notice && <p><i><b>{notice}</b></i></p>}
        { !orderSent && !notice.includes('Processing') && <Button type="submit" variant='danger' className='submit_button'>Send Order</Button> }
        
      </form>
    </div>
  );
};

export default Form;