import Title from '../Title/Title.js';
import ItemList from "../ItemList/ItemList.js";
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.js';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const itemList1 = [
    { heroName: 'Thor', stock: 10, initial: 0 },
    { heroName: 'Hulk', stock: 8, initial: 0 },
    { heroName: 'Spider-Man (Ultimate)', stock: 5, initial: 0 },
    { heroName: 'Deadpool', stock: 3, initial: 0 }
  ];
  const itemList2 = [
    { heroName: 'Wolverine', stock: 0, initial: 0 },
    { heroName: 'Doctor Strange (Ultimate)', stock: 4, initial: 0 },
    { heroName: 'Iron Man', stock: 10, initial: 0 },
    { heroName: 'Captain America (Ultimate)', stock: 0, initial: 0 }
  ];

  const itemList3 = [
    { heroName: 'Thor', stock: 10, initial: 0 },
    { heroName: 'Hulk', stock: 8, initial: 0 },
    { heroName: 'Spider-Man (Ultimate)', stock: 5, initial: 0 },
    { heroName: 'Deadpool', stock: 3, initial: 0 },
    { heroName: 'Wolverine', stock: 0, initial: 0 },
    { heroName: 'Doctor Strange (Ultimate)', stock: 4, initial: 0 },
    { heroName: 'Iron Man', stock: 10, initial: 0 },
    { heroName: 'Captain America (Ultimate)', stock: 0, initial: 0 }
  ];

  return (
    <div className='comic_store_box'>
      <Title title={greeting}></Title>
      <ItemList items={itemList1} />
      <ItemList items={itemList2} />
      {/* <ItemList items={itemList3} /> */}
      {/* <ItemDetailContainer /> */}
    </div>
  );
};

export default ItemListContainer;