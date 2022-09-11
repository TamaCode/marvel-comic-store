import { useState, useEffect } from 'react';
import Item from "../Item/Item.js";
import { getItemData } from '../../libs/marvel_lib.js';
import './ItemList.css';

const ItemList = ({ items }) => {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    const responseItemsData = [];

    // El setTimeout se usa simplemente para cumplir con la consigna de la entrega 5... el metodo getItemData ya hace uso del Web Service de MARVEL
    // setTimeout(() => {
      items.forEach((item) => {
        getItemData(item.heroName).then((itemData) => {
          responseItemsData.push(itemData);
        }).catch((error) => {
          console.log(`No se pudo obtener la data del Heroe ${item.heroName}: `, error);
        }).finally(() => {
          items.length === responseItemsData.length && setItemsData(sortResponseItemsDataArray(items, responseItemsData));
        });
      });
    // }, 2000);
  }, []);

  const sortResponseItemsDataArray = (itemsArray, responseItemsDataArray) => {
    const sortedResponseArray = [];

    itemsArray.forEach((item) => {
      sortedResponseArray.push(responseItemsDataArray.find((responseItem) => item.heroName === responseItem.name ));
    });

    return sortedResponseArray;
  };

  return(
    <div className="item-list-box">
      {itemsData.length > 0 && items.map((item, index) => <Item key={index} item={itemsData[index]} stock={item.stock} initial={item.initial} />)}
      {/* {itemsData.map((itemData, index) => <Item key={index} item={itemData} stock={items[index].stock} initial={items[index].initial} />)} */}
    </div>
  );
};

export default ItemList;