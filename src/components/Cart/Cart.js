import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import marvel_logo from '../Title/marvel_logo.svg';
import './Cart.css';

const Cart = ({show}) => {
  return (
    <div className="modal-box">
      <div className="modal-window">
        <div className="cart-title-box">
          <img src={marvel_logo} alt='Marvel Comics Logo' />
          <h3 className="cart-title">YOUR CART</h3>
          <img src={marvel_logo} alt='Marvel Comics Logo' />
        </div>
        <div><p>Mi Carrito1</p></div>
        <div><p>Mi Carrito2</p></div>
        <div><p>Mi Carrito3</p></div>
        <div><p>Mi Carrito4</p></div>
        <div><p>Mi Carrito5</p></div>
        <div><p>Mi Carrito6</p></div>
        <div><p>Mi Carrito7</p></div>
        <div><p>Mi Carrito8</p></div>
        <div><p>Mi Carrito9</p></div>
        <div><p>Mi Carrito10</p></div>
        <div><p>Mi Carrito11</p></div>
        <div><p>Mi Carrito12</p></div>
        <div><p>Mi Carrito13</p></div>
        <div><p>Mi Carrito14</p></div>
        <div><p>Mi Carrito15</p></div>
        <div className="close-button-box">
          <Button className="close-button" variant='danger' onClick={show}>Cerrar</Button>
        </div>
      </div>
    </div>
  );
};


export default Cart;