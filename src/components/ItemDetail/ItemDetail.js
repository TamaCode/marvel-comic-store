import './ItemDetail.css';
import Button from 'react-bootstrap/Button';
import  { Link } from 'react-router-dom';

const ItemDetail = ({ comic, docId }) => {
  return (
    <div className="item-detail-box">
      <div className="item-img-box">
        <img className='item-img' src={comic.img_url} alt="" />
      </div>
      
      <div className='item-data-box'>
        <h3 className='item-title'>{comic.title}</h3>
        <p><b>{comic.resumed_description}</b></p>
        <h5 className='price-text'><b><i>US$ {comic.price}</i></b></h5>
        <Link to={`/item/${comic.id}/${docId}`}><Button variant='danger' className="details-botton" >See Item Details</Button></Link>
      </div>
      
    </div>
  );
};

export default ItemDetail;