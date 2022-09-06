import './ItemDetail.css';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ comic }) => {
  return (
    <div className="item-detail-box">
      <div className="comic-img-box">
        <img className='comic-img' src={comic.img_url} alt="" />
      </div>
      
      <div className='item-data-box'>
        <h3 className='comic-title'>{comic.title}</h3>
        <p><b>{comic.resumed_description}</b></p>
        <h5 className='price-text'><b><i>US$ {comic.price}</i></b></h5>
        <a href=""><Button variant='danger' className="details-botton" >See Item Details</Button></a>
      </div>
      
    </div>
  );
};

export default ItemDetail;