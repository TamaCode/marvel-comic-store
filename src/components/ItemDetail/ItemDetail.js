import './ItemDetail.css';

const ItemDetail = ({ comic }) => {
  return (
    <div className="item-detail-box">
      <div className="comic-img-box">
        <img src={comic.img_url} alt="" />
      </div>
      
      <div className='item-data-box'>
        <h3>{comic.title}</h3>
        <p><b>{comic.description}</b></p>
        <h5 className='price-text'><b><i>Price: US$ {comic.price}</i></b></h5>
      </div>
      
    </div>
  );
};

export default ItemDetail;