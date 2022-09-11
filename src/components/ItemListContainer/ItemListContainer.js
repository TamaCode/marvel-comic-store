import Title from '../Title/Title.js';
import ItemList from "../ItemList/ItemList.js";
import { itemList1 } from '../../data/data_base.js'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {

  return (
    <div className='comic_store_box' id='comic_store'>
      <Title title={greeting}></Title>
      <ItemList items={itemList1.slice(0, itemList1.length / 2)} />
      <ItemList items={itemList1.slice(itemList1.length / 2 * (-1))} />
      {/* <ItemDetailContainer /> */}
    </div>
  );
};

export default ItemListContainer;