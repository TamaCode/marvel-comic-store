import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail-box">
      <div className="hero-img-box">
        <img src={item.img_url} alt="" />
      </div>
      <h3>{item.name}</h3>
      <div className='item-description-box'>
        <p><b>{item.description}</b></p>
      </div>
      <h5 className='price-text'><b><i>Price: US$ {item.price}</i></b></h5>
    </div>
  );
};

export default ItemDetail;