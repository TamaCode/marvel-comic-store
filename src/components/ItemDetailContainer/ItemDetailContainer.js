import ItemDetail from "../ItemDetail/ItemDetail.js";
import Title from "../Title/Title.js";
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getItemData } from '../../marvel_lib.js';

const ItemDetailContainer = () => {
  const [ item, setItem ] = useState({});

  const getItem = (heroName) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(getItemData(heroName));
      }, 2000);
    });
  };

  useEffect(() => {
    getItem('Hulk').then((item) => {
      setItem(item);
    });
  }, []);


  return (
    <div className="item-detail-container-box">
      <Title title={'Hero Hulk Details'}/>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;