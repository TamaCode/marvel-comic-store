import marvel_logo from './marvel_logo.svg';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className='title-box'>
      <div className='img-box'>
        <img src={marvel_logo} alt='Marvel Comics Logo' />
      </div>
      <h5>{`Let's save the world !`}</h5>
      <h2>{ greeting }</h2>
    </div>
  );
};

export default ItemListContainer;