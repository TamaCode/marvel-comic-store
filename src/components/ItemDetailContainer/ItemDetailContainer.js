import ItemDetail from "../ItemDetail/ItemDetail.js";
import Title from "../Title/Title.js";
import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getItemData, getHeroComicsData } from '../../libs/marvel_lib.js';
import  { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const { heroName, docId } = useParams();
  const [ comics, setComics ] = useState([]);

  const cleanHeroName = heroName => heroName.split(' (Ultimate)')[0];

  const getComics = async () => {
    const heroData = await getItemData(heroName);
    const heroComics = await getHeroComicsData(heroData.id, heroData.name);

    return heroComics;
  };

  useEffect(() => {
    getComics().then((comics) => {
      setComics(comics);
    });
  }, []);


  return (
    <div className="item-detail-container-box">
      <Title title={`Choose yours ${cleanHeroName(heroName)}'s Comics!`}/>
      {
        comics.map((comic, index) => <ItemDetail key={index} comic={comic} docId={docId} />)
      }
    </div>
  );
};

export default ItemDetailContainer;