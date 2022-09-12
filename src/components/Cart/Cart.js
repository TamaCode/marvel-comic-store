import { useState, useEffect, useContext } from "react";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import marvel_logo from '../Title/marvel_logo.svg';
import './Cart.css';
import { CartContext } from '../Context/CartProvider.js';
import { Link } from "react-router-dom";

const Cart = ({show}) => {
  const cartContext = useContext(CartContext);

  const onWheelEvent = (evt) => {
    console.log(evt?.stopPropagation(true))
    evt.stopPropagation();
  };

  return (
    <div className="modal-box" onWheel={onWheelEvent}>
      <div className="modal-window">
        <div className="cart-title-box">
          <img src={marvel_logo} alt='Marvel Comics Logo' />
          <h3 className="cart-title">YOUR CART</h3>
          <img src={marvel_logo} alt='Marvel Comics Logo' />
        </div>
        <div className="cart-column-headers">
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
              <div className="cart-item-box" key={index}>
                <div className="cart-item-img-box">
                  <img className="cart-item-img" src={comic.img_url} alt="" />
                </div>
                <p className="cart-item-title">{comic.title}</p>
                <p className="cart-item-quantity">{comic.quantity}</p>
                <p className="cart-item-price">{`USD ${comic.price}`}</p>
                <p className="cart-item-subtotal"><b>{`USD ${(comic.quantity * comic.price).toFixed(2)}`}</b></p>
                <p className="cart-item-remove"><Button variant='danger' className="close-button" onClick={() => {cartContext.removeItem(comic)}}><FontAwesomeIcon icon={faTrash} /></Button></p>
              </div>
          )
        }
        <div className="cart-buttons-total-box">
          <div className="cart-buttons-box">
            {
              cartContext.cartItems.length === 0 ?
                null :
                <Link to={'/cart'}><Button className="close-button" variant='danger' onClick={show}>Terminar Compra</Button></Link>
            }

            {
              cartContext.cartItems.length === 0 ?
                null :
                <Link to='#'><Button className="close-button" variant='danger' onClick={cartContext.clear}>Limpiar Carrito</Button></Link>
            }

            <Button className="close-button" variant='danger' onClick={show}>Close</Button>
          </div>

          <div className="cart-total-box">
            <p className="cart-total"><b><i>{`TOTAL: USD ${cartContext.getTotal()}`}</i></b></p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Cart;