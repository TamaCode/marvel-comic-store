import Title from '../Title/Title.js';
import ItemList from "../ItemList/ItemList.js";
import './ItemListContainer.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase.js';
import { useEffect, useState } from 'react';


const ItemListContainer = ({ greeting }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const itemsCollection = collection(db, 'comics');
      const itemDocuments = await getDocs(itemsCollection);
      const items = [];

      itemDocuments.docs.map(itemDocument => items.push({...itemDocument.data(), id: itemDocument.id}));
      return items;
    };

    getItems()
      .then((items) => {setCategoryList([...items])})
      .catch((error) => console.log('Error al conectar con Firebase', error));
  }, []);

  return (
    <div className='comic_store_box' id='comic_store'>
      <Title title={greeting}></Title>
      { categoryList.length !== 0 ? <ItemList items={categoryList.slice(0, categoryList.length / 2)} /> : null }
      { categoryList.length !== 0 ? <ItemList items={categoryList.slice(categoryList.length / 2 * (-1))} /> : null }
    </div>
  );
};

export default ItemListContainer;