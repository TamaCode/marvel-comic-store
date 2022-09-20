import { useContext } from "react";
import { CartContext } from '../Context/CartProvider.js';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import './Cart.css';
import Form from "../Form/Form.js";
import Title from "../Title/Title.js";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="cart-container-box">
      <Title title={'Check and confirm your order'} />
      <div className="cart-rows">
        <div className="cart-page-column-headers">
          <h4 className="comic-column-header"><b>COMIC</b></h4>
          <h4 className="title-column-header"><b>TITLE</b></h4>
          <h4 className="quantity-column-header"><b>QUANTITY</b></h4>
          <h4 className="price-column-header"><b>PRICE</b></h4>
          <h4 className="subtotal-column-header">SUBTOTAL</h4>
          <h4 className="remove-column-header">REMOVE</h4>
        </div>
        {
          cartContext.cartItems.length === 0 ?
            <p className="cart-empty-text">SU CARRITO ESTÁ VACÍO.</p> :
            cartContext.cartItems.map((comic, index) =>
              <div className="cart-page-item-box" key={index}>
                <div className="cart-item-img-box">
                  <img className="cart-item-img" src={comic.img_url} alt="" />
                </div>
                <p className="cart-item-title">{comic.title}</p>
                <p className="cart-item-quantity">{comic.quantity}</p>
                <p className="cart-item-price">{`USD ${comic.price}`}</p>
                <p className="cart-item-subtotal"><b>{`USD ${(comic.quantity * comic.price).toFixed(2)}`}</b></p>
                <p className="cart-item-remove"><Button variant='danger' className="close-button" onClick={() => { cartContext.removeItem(comic) }}><FontAwesomeIcon icon={faTrash} /></Button></p>
              </div>
            )
        }
        <div className="cart-page-total-box">
            <p className="cart-page-total"><b><i>{`TOTAL: USD ${cartContext.getTotal()}`}</i></b></p>
        </div>
      </div>
      <Form/>
    </div>
  );
};

export default Cart;


