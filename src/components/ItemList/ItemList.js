import { useState, useEffect } from 'react';
import Item from "../Item/Item.js";
import { getItemData } from '../../libs/marvel_lib.js';
import './ItemList.css';

const ItemList = ({ items }) => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const responseItemsData = [];

    items.forEach((item) => {
      getItemData(item.heroName).then((itemData) => {
        responseItemsData.push(itemData);
      }).catch((error) => {
        console.log(`No se pudo obtener la data del Heroe ${item.heroName}: `, error);
      }).finally(() => {
          items.length === responseItemsData.length && setItemsData(sortResponseItemsDataArray(items, responseItemsData));
        });
    });
  }, []);

  const sortResponseItemsDataArray = (itemsArray, responseItemsDataArray) => {
    const sortedResponseArray = [];

    itemsArray.forEach((item) => {
      const responseItemData = responseItemsDataArray.find((responseItem) => item.heroName === responseItem.name );
      sortedResponseArray.push({...responseItemData, initial: item.initial, doc_id: item.id });
    });

    return sortedResponseArray;
  };

  return(
    <div className="item-list-box">
      {itemsData.length > 0 && itemsData.map((itemData, index) => <Item key={index} item={itemData} />)}
    </div>
  );
};

export default ItemList;