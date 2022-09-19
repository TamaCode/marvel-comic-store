import './Item.css';
import  { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const cleanHeroName = heroName => heroName.split('(Ultimate)')[0];

  return (
    <>
      <Link className="hero-card-link" to={`/category/${item.name}/${item.doc_id}`}>
        <div className='hero-card-box'>
          <div className='hero-img-box'>
            <img src={item.img_url} alt="Hero Image" />
          </div>
          <h4>{cleanHeroName(item.name)}</h4>
        </div>
      </Link>
    </>
  );
};

export default Item;